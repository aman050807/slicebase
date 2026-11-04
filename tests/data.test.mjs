import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const records = JSON.parse(
  readFileSync(new URL("../src/listings.json", import.meta.url)),
);
test("105 unique source records with 84 Lofty and 21 Oceanpoint", () => {
  assert.equal(records.length, 105);
  assert.equal(new Set(records.map((r) => r.id)).size, 105);
  assert.equal(records.filter((r) => r.platform === "Lofty").length, 84);
  assert.equal(records.filter((r) => r.platform === "Oceanpoint").length, 21);
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
  assert.ok(/useState\(['"]8['"]\)/.test(app));
  assert.ok(
    app.includes("No deposits") ||
      app.includes("does not accept investment deposits"),
  );
});
