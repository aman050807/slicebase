#!/usr/bin/env node
// Applies a marketplace sweep to src/listings.json. Read-only against the
// platforms: sweeps are captured separately (browser) and passed in as JSON.
// Usage: node scripts/refresh.mjs [--dry] [--lofty-grid f.json] [--oc-grid f.json]
// Rules: never alter platform metrics; keep unparsed fields as they were;
// never delete records; mark "delisted" only after two consecutive complete
// sweeps without the listing; a failed/partial sweep changes nothing.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
const arg = (k) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : null; };
const DRY = process.argv.includes("--dry");
const root = new URL("../", import.meta.url).pathname;
const P = { listings: root + "src/listings.json", meta: root + "src/meta.json", state: root + "data/refresh-state.json", photos: root + "src/photos/listings/" };
const listings = JSON.parse(readFileSync(P.listings, "utf8"));
const meta = JSON.parse(readFileSync(P.meta, "utf8"));
const state = existsSync(P.state) ? JSON.parse(readFileSync(P.state, "utf8")) : { missing: {} };
const nowIso = new Date().toISOString();
const today = nowIso.slice(0, 10);
const report = { changed: [], added: [], delisted: [], relisted: [], warnings: [], platforms: {} };
const decode = (s) => decodeURIComponent(s);
const nextId = () => Math.max(...listings.map((l) => l.id)) + 1;
const money = (v) => v.replace(/\s/g, "");

async function fetchText(url) {
  const r = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (compatible; SlicebaseRefresh/1.0)" } });
  if (r.status === 403 || r.status === 429) throw new Error("THROTTLED " + r.status + " " + url);
  if (!r.ok) throw new Error("HTTP " + r.status + " " + url);
  return r;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (h) => h.replace(/<[^>]+>/g, "|").replace(/\|[\s|]*\|/g, "|");
function detailFields(html) {
  const t = strip(html);
  const v = t.match(/Total Property Value\|\s*(\$[\d,]+(?:\.\d+)?)/);
  const r = t.match(/(\$[\d,]+(?:\.\d+)?)\|\s*Monthly Rent/);
  return { valuation: v ? v[1] : null, monthlyRent: r ? r[1] : null };
}
function set(rec, key, val, label) {
  if (val == null || rec[key] === val) return;
  report.changed.push(`${rec.platform} ${rec.name}: ${label || key} ${rec[key] ?? "none"} -> ${val}`);
  rec[key] = val;
}

async function lofty(grid) {
  const known = listings.filter((l) => l.platform === "Lofty");
  const active = known.filter((l) => !l.delisted);
  const complete = grid && !grid.stillMore && grid.nCards >= Math.ceil(active.length * 0.8) && grid.nCards === grid.cards.length;
  if (!complete) { report.platforms.Lofty = "skipped: sweep missing or incomplete"; return false; }
  const live = new Map(grid.cards.map((c) => [decode(c.href.split("/").pop()), c]));
  const byKey = new Map(known.map((l) => [decode(l.source.split("/").pop()), l]));
  let throttled = false;
  // existing + relisted
  for (const [key, rec] of byKey) {
    const c = live.get(key);
    if (!c) {
      state.missing[key] = (state.missing[key] || 0) + 1;
      if (state.missing[key] >= 2 && !rec.delisted) {
        rec.delisted = true; rec.delistedAt = today; report.delisted.push(rec.name);
      }
      continue;
    }
    delete state.missing[key];
    if (rec.delisted) { delete rec.delisted; delete rec.delistedAt; report.relisted.push(rec.name); }
    const raw = c.text.match(/\$[\d,.]+\/share(?: · [\d.]+% avg yield)?(?: · (?:Fairly valued|[\d.]+% (?:Over|Under)valued))?/);
    if (raw) {
      const m = raw[0];
      if (rec.rawMetrics !== m) { rec.rawMetrics = m; }
      set(rec, "quote", m.match(/^\$[\d,.]+\/share/)[0], "price");
      const y = m.match(/([\d.]+%) avg yield/);
      if (y) set(rec, "yieldText", y[1], "avg yield");
    } else report.warnings.push("unparsed card " + rec.name);
    rec.checkedAt = today;
  }
  // detail fetches (paced) for valuation / rent
  const targets = [...byKey.values()].filter((l) => live.has(decode(l.source.split("/").pop())));
  for (const rec of targets) {
    if (throttled) break;
    try {
      const r = await fetchText(rec.source);
      const d = detailFields(await r.text());
      if (d.valuation) set(rec, "valuation", d.valuation);
      if (d.monthlyRent) set(rec, "monthlyRent", d.monthlyRent);
    } catch (e) {
      report.warnings.push(String(e.message)); if (/THROTTLED/.test(e.message)) throttled = true;
    }
    await sleep(700);
  }
  // new listings
  for (const [key, c] of live) {
    if (byKey.has(key)) continue;
    const url = "https://www.lofty.ai" + c.href;
    const raw = c.text.match(/\$[\d,.]+\/share(?: · [\d.]+% avg yield)?(?: · (?:Fairly valued|[\d.]+% (?:Over|Under)valued))?/);
    try {
      const html = await (await fetchText(url)).text();
      const name = (html.match(/<h1[^>]*>([^<]+)<\/h1>/) || [])[1]?.trim() || decode(key.split("_")[0]).replace(/-/g, " ");
      const loc = c.text.match(/\s([A-Z][^$]*?, [A-Z]{2} \d{5})/);
      const type = c.text.split(name)[0].trim().replace(/\s+(Cash Flowing|Owner Occupied|Vacation Rental)$/, "").trim();
      const img = (html.match(/https:\/\/images\.lofty\.ai\/images\/[A-Z0-9]+\/[a-z-]+\.(?:jpg|webp)/) || [])[0];
      const id = nextId();
      const n = listings.filter((l) => l.platform === "Lofty").length + 1;
      let photo = null;
      if (img && !DRY) {
        const buf = Buffer.from(await (await fetchText(img.replace(/thumb-min\.webp$/, "thumb-min.jpg"))).arrayBuffer());
        photo = `lofty-${n + 1000}.jpg`; writeFileSync(P.photos + photo, buf);
      } else if (img) photo = `lofty-${n + 1000}.jpg`;
      if (!photo) { report.warnings.push("new listing without photo, skipped: " + name); continue; }
      const d = detailFields(html);
      const m = raw ? raw[0] : null;
      listings.push({ id, name, platform: "Lofty", city: loc ? loc[1] : "", type: type || "Property", min: null, yieldPct: null, status: "Source listing",
        quote: m ? m.match(/^\$[\d,.]+\/share/)[0] : "Not shown", yieldLabel: "avg yield", yieldText: (m && (m.match(/([\d.]+%) avg yield/) || [])[1]) || "Not shown",
        source: url, photo, rawMetrics: m, valuation: d.valuation, monthlyRent: d.monthlyRent, checkedAt: today });
      report.added.push(name);
    } catch (e) { report.warnings.push("new listing failed: " + e.message); }
    await sleep(700);
  }
  report.platforms.Lofty = throttled ? "partial: throttled during detail fetches" : "ok";
  return true;
}

function oceanpoint(grid) {
  const known = listings.filter((l) => l.platform === "Oceanpoint");
  const active = known.filter((l) => !l.delisted);
  const complete = grid && grid.n === grid.out.length && grid.n >= Math.ceil(active.length * 0.8);
  if (!complete) { report.platforms.Oceanpoint = "skipped: sweep missing or incomplete"; return false; }
  const live = new Map(grid.out.map((o) => [o.asset, o]));
  for (const rec of known) {
    const o = live.get(rec.asset);
    if (!o) {
      const k = "oc:" + rec.asset; state.missing[k] = (state.missing[k] || 0) + 1;
      if (state.missing[k] >= 2 && !rec.delisted) { rec.delisted = true; rec.delistedAt = today; report.delisted.push(rec.name); }
      continue;
    }
    delete state.missing["oc:" + rec.asset];
    if (rec.delisted) { delete rec.delisted; delete rec.delistedAt; report.relisted.push(rec.name); }
    set(rec, "status", o.status); set(rec, "valuation", o.valuation); set(rec, "yieldText", o.apy, "APY");
    rec.checkedAt = today;
  }
  report.platforms.Oceanpoint = "ok";
  return true;
}

const lg = arg("--lofty-grid") ? JSON.parse(readFileSync(arg("--lofty-grid"), "utf8")) : null;
const og = arg("--oc-grid") ? JSON.parse(readFileSync(arg("--oc-grid"), "utf8")) : null;
const okL = await lofty(lg);
const okO = oceanpoint(og);
if (okL) meta.loftyRefreshedAt = nowIso;
if (okO) meta.oceanpointRefreshedAt = nowIso;
console.log(JSON.stringify(report, null, 1));
if (!DRY && (okL || okO)) {
  writeFileSync(P.listings, JSON.stringify(listings, null, 2) + "\n");
  writeFileSync(P.meta, JSON.stringify(meta, null, 2) + "\n");
  execFileSync("mkdir", ["-p", root + "data"]);
  writeFileSync(P.state, JSON.stringify(state, null, 2) + "\n");
}
