import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calcScenario,
  feeBreakEvenMonths,
  annualizedNetPct,
  sensitivityPer10Pct,
  valueFallBreakEven,
  chartSeries,
  seriesBreakEvenMonth,
  irrAnnualPct,
  goalCapital,
} from "../src/calc.ts";

/** Round-2 review default case: $1,000, 8%, 5 years, Lofty 2.5% buy +
 *  3% sell, fees included, sold at end, no tax or extra costs. */
const base = {
  amount: 1000,
  ratePct: 8,
  years: 5,
  upfront: 0,
  annualCosts: 0,
  buyPct: 2.5,
  sellPct: 3,
  includeFees: true,
  sellAtEnd: true,
  taxPct: 0,
};

test("review case: net $345, back $1,370, 6.7% annualized", () => {
  const res = calcScenario(base);
  assert.equal(res.buyFee, 25);
  assert.equal(res.sellFee, 30);
  assert.equal(res.totalIn, 1025);
  assert.equal(res.periodIncome, 400);
  assert.equal(res.saleNet, 970);
  assert.equal(res.totalBack, 1370);
  assert.equal(res.net, 345);
  assert.ok(Math.abs(annualizedNetPct(res, 5) - 6.7) < 0.05);
});

test("review case: fee break-even about 8 months", () => {
  const m = feeBreakEvenMonths(calcScenario(base), 0);
  assert.ok(m != null && Math.round(m) === 8);
});

test("review case: $97 per 10% value change", () => {
  assert.ok(Math.abs(sensitivityPer10Pct(base) - 97) < 0.01);
});

test("review case: value can fall about 36% at 8%, about 15% at 3.95%", () => {
  const at8 = valueFallBreakEven(base);
  assert.ok(at8 != null && Math.abs(at8 - -0.356) < 0.005);
  const at395 = valueFallBreakEven({ ...base, ratePct: 3.95 });
  assert.ok(at395 != null && Math.abs(at395 - -0.147) < 0.005);
});

test("review case: at the listing's stated 3.95% the net is about $145", () => {
  const res = calcScenario({ ...base, ratePct: 3.95 });
  assert.ok(Math.abs(res.net - 142.5) < 0.5);
});

test("IRR-style rate counts income timing: roughly 6.9% vs 6.7% simple", () => {
  const irr = irrAnnualPct(base, calcScenario(base));
  assert.ok(irr != null && Math.abs(irr - 6.9) < 0.15);
});

test("chart starts after buy fee only and applies sell fee at the end", () => {
  const pts = chartSeries(base, 0);
  assert.equal(pts[0], -25);
  assert.equal(pts[pts.length - 1], 345);
  const beforeSale = pts[pts.length - 2];
  assert.ok(beforeSale > 365 && beforeSale < 370); // 59 months of income minus the $25
  const be = seriesBreakEvenMonth(pts);
  assert.ok(be != null && be > 3 && be < 5); // income covers the $25 early
});

test("held (no sale): net is income minus fees, principal still owned", () => {
  const res = calcScenario({ ...base, sellAtEnd: false });
  assert.equal(res.sellFee, 0);
  assert.equal(res.net, 400 - 25);
  assert.equal(valueFallBreakEven({ ...base, sellAtEnd: false }), null);
});

test("tax reduces income; goal mode is tax-aware", () => {
  const res = calcScenario({ ...base, taxPct: 25 });
  assert.equal(res.annualNet, 60);
  assert.equal(res.net, 300 + 970 - 1025);
  assert.equal(goalCapital(200, 8, 0, 0), 30000);
  assert.equal(goalCapital(500, 8, 0, 0), 75000);
  assert.equal(goalCapital(500, 8, 0, 25), 100000);
});

test("market-order fee adds to both sides", () => {
  const res = calcScenario({ ...base, buyPct: 5, sellPct: 5.5 });
  assert.equal(res.buyFee, 50);
  assert.equal(res.sellFee, 55);
  assert.equal(res.net, 400 + 945 - 1050);
});

test("zero and negative handling", () => {
  const zero = calcScenario({ ...base, ratePct: 0 });
  assert.equal(zero.periodIncome, 0);
  assert.equal(feeBreakEvenMonths(zero, 0), null);
  assert.equal(irrAnnualPct(base, zero), null);
  const loss = calcScenario({ ...base, ratePct: 1 });
  assert.ok(loss.net < 0);
  const fall = valueFallBreakEven({ ...base, ratePct: 1 });
  assert.ok(fall != null && fall >= 0); // loses money even unchanged
});
