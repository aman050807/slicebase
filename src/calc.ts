/** Pure calculation core for the "Run the numbers" calculator.
 *  No React, no DOM - unit-tested in tests/calc.test.mjs with the numbers
 *  from the 5 Nov 2026 round-2 review ($345, $1,370, 6.7%, 8 months, $97). */

export interface CalcInputs {
  amount: number;
  ratePct: number;
  years: number;
  upfront: number;
  annualCosts: number;
  /** Effective platform fee percentages (including any market-order fee). */
  buyPct: number;
  sellPct: number;
  includeFees: boolean;
  sellAtEnd: boolean;
  taxPct: number;
}

export interface ScenarioResult {
  buyFee: number;
  sellFee: number;
  saleValue: number;
  annualNet: number;
  periodIncome: number;
  totalIn: number;
  saleNet: number;
  totalBack: number;
  net: number;
}

/** Net outcome at income rate rr (falls back to inp.ratePct) with the
 *  property value changing by dv (fraction) over the holding period. */
export function calcScenario(
  inp: CalcInputs,
  rr?: number,
  dv = 0,
): ScenarioResult {
  const rate = rr ?? inp.ratePct;
  const buyFee = inp.includeFees ? (inp.amount * inp.buyPct) / 100 : 0;
  const saleValue = inp.amount * (1 + dv);
  const sellFee =
    inp.sellAtEnd && inp.includeFees ? (saleValue * inp.sellPct) / 100 : 0;
  const annualNet =
    ((inp.amount * rate) / 100) * (1 - inp.taxPct / 100) - inp.annualCosts;
  const periodIncome = annualNet * inp.years - inp.upfront;
  const totalIn = inp.amount + buyFee;
  const saleNet = inp.sellAtEnd ? saleValue - sellFee : 0;
  const totalBack = periodIncome + saleNet;
  /** Sold at end: net = income + sale proceeds - investment - fees.
   *  Held: the principal is still owned, so net = income - fees. */
  const net =
    periodIncome + saleNet - buyFee - (inp.sellAtEnd ? inp.amount : 0);
  return {
    buyFee,
    sellFee,
    saleValue,
    annualNet,
    periodIncome,
    totalIn,
    saleNet,
    totalBack,
    net,
  };
}

/** Months of income needed to cover the full buy + sell fees and any
 *  upfront costs. null when income is zero or negative. */
export function feeBreakEvenMonths(
  res: ScenarioResult,
  upfront: number,
): number | null {
  const costs = res.buyFee + res.sellFee + upfront;
  if (res.annualNet <= 0) return null;
  return (costs / res.annualNet) * 12;
}

/** Simple average annual net on the money actually in (not IRR). */
export function annualizedNetPct(res: ScenarioResult, years: number): number {
  if (res.totalIn <= 0 || years <= 0) return 0;
  return (res.net / res.totalIn / years) * 100;
}

/** How much a 10% change in end value moves the result. */
export function sensitivityPer10Pct(inp: CalcInputs): number {
  const sellEff = inp.sellAtEnd && inp.includeFees ? inp.sellPct : 0;
  return 0.1 * inp.amount * (1 - sellEff / 100);
}

/** How far the value can fall (negative fraction) before the base-case net
 *  drops below zero, when selling at the end. Returns null when the
 *  calculator is not selling, or when income alone already covers
 *  everything put in. A value >= 0 means money is lost even at an
 *  unchanged value. */
export function valueFallBreakEven(inp: CalcInputs): number | null {
  if (!inp.sellAtEnd || inp.amount <= 0) return null;
  const res = calcScenario(inp);
  const sellEff = inp.includeFees ? inp.sellPct : 0;
  const proceedsFactor = inp.amount * (1 - sellEff / 100);
  if (proceedsFactor <= 0) return null;
  const numerator = inp.amount + res.buyFee - res.periodIncome;
  if (numerator <= 0) return null; // income alone exceeds the money in
  return numerator / proceedsFactor - 1;
}

/** Monthly cumulative net position with honest fee timing: starts after the
 *  buy fee and upfront costs; the sell fee and any value change land at
 *  sale, in the final month. */
export function chartSeries(inp: CalcInputs, dv: number): number[] {
  const res = calcScenario(inp, undefined, dv);
  const mCount = Math.max(Math.round(inp.years * 12), 12);
  const pts: number[] = [];
  for (let m = 0; m <= mCount; m++) {
    let pos = -(res.buyFee + inp.upfront) + (res.annualNet * m) / 12;
    if (inp.sellAtEnd && m === mCount)
      pos += res.saleValue - inp.amount - res.sellFee;
    pts.push(pos);
  }
  return pts;
}

/** First month (interpolated) where a series reaches zero, or null. */
export function seriesBreakEvenMonth(pts: number[]): number | null {
  const idx = pts.findIndex((v) => v >= 0);
  if (idx <= 0) return null;
  const prev = pts[idx - 1];
  const cur = pts[idx];
  const frac = cur > prev ? -prev / (cur - prev) : 0;
  return idx - 1 + frac;
}

/** IRR-style rate that counts when income arrives: monthly income plus
 *  the final sale, solved by bisection, annualized as a nominal rate
 *  (monthly x 12). null when no sign change (e.g. never positive). */
export function irrAnnualPct(
  inp: CalcInputs,
  res: ScenarioResult,
): number | null {
  if (!inp.sellAtEnd || res.annualNet <= 0) return null;
  const months = Math.max(Math.round(inp.years * 12), 12);
  const c0 = -(res.totalIn + inp.upfront);
  const monthly = res.annualNet / 12;
  const npv = (i: number) => {
    let sum = c0;
    for (let m = 1; m <= months; m++) {
      let cf = monthly;
      if (m === months) cf += res.saleNet;
      sum += cf / Math.pow(1 + i, m);
    }
    return sum;
  };
  let lo = -0.99;
  let hi = 1;
  if (npv(lo) < 0 || npv(hi) > 0) return null;
  for (let k = 0; k < 80; k++) {
    const mid = (lo + hi) / 2;
    if (npv(mid) > 0) lo = mid;
    else hi = mid;
  }
  return ((lo + hi) / 2) * 12 * 100;
}

/** Goal mode: capital needed for a monthly take-home goal. */
export function goalCapital(
  goalMonthly: number,
  ratePct: number,
  annualCosts: number,
  taxPct: number,
): number {
  const grossNeeded =
    taxPct > 0 ? (goalMonthly * 12) / (1 - taxPct / 100) : goalMonthly * 12;
  return ((grossNeeded + annualCosts) * 100) / ratePct;
}
