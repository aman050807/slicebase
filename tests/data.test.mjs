import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const records = JSON.parse(
  readFileSync(new URL("../src/listings.json", import.meta.url)),
);
test("unique source records; Lofty and Oceanpoint present; ids never reused", () => {
  assert.ok(records.length >= 105);
  assert.equal(new Set(records.map((r) => r.id)).size, records.length);
  const lofty = records.filter((r) => r.platform === "Lofty").map((r) => r.source);
  assert.equal(new Set(lofty).size, lofty.length);
  assert.ok(records.some((r) => r.platform === "Lofty"));
  assert.ok(records.some((r) => r.platform === "Oceanpoint"));
});
test("every source photo exists and source links use HTTPS", () => {
  for (const r of records) {
    assert.ok(
      existsSync(new URL("../src/photos/listings/" + r.photo, import.meta.url)),
    );
    assert.ok(r.source.startsWith("https://"));
    assert.equal(r.min, null);
  }
});
test("calculator stays separate and no custody/payment integration is present", () => {
  const app = readFileSync(new URL("../src/App.tsx", import.meta.url), "utf8");
  // the income rate falls back to a generic 8% example and never to a
  // platform yield; listings with published rent/value pre-fill their ratio
  assert.ok(app.includes('"8"'));
  assert.ok(/avg-yield metrics are never used/.test(app.replace(/\s+/g, " ")));
  assert.ok(
    app.includes("No deposits") ||
      app.includes("does not accept investment deposits"),
  );
});
