import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextLink } from "./components/TextLink";
import "./style.css";
import brandSymbol from "./photos/slicebase-symbol.png";
import listingData from "./listings.json";
import {
  calcScenario,
  feeBreakEvenMonths,
  annualizedNetPct,
  sensitivityPer10Pct,
  valueFallBreakEven,
  chartSeries,
  seriesBreakEvenMonth,
  irrAnnualPct,
} from "./calc";
import photo0 from "./photos/listings/lofty-1.jpg";
import photo1 from "./photos/listings/lofty-2.jpg";
import photo2 from "./photos/listings/lofty-3.jpg";
import photo3 from "./photos/listings/lofty-4.jpg";
import photo4 from "./photos/listings/lofty-5.jpg";
import photo5 from "./photos/listings/lofty-6.jpg";
import photo6 from "./photos/listings/lofty-7.jpg";
import photo7 from "./photos/listings/lofty-8.jpg";
import photo8 from "./photos/listings/lofty-9.jpg";
import photo9 from "./photos/listings/lofty-10.jpg";
import photo10 from "./photos/listings/lofty-11.jpg";
import photo11 from "./photos/listings/lofty-12.jpg";
import photo12 from "./photos/listings/lofty-13.jpg";
import photo13 from "./photos/listings/lofty-14.jpg";
import photo14 from "./photos/listings/lofty-15.jpg";
import photo15 from "./photos/listings/lofty-16.jpg";
import photo16 from "./photos/listings/lofty-17.jpg";
import photo17 from "./photos/listings/lofty-18.jpg";
import photo18 from "./photos/listings/lofty-19.jpg";
import photo19 from "./photos/listings/lofty-20.jpg";
import photo20 from "./photos/listings/lofty-21.jpg";
import photo21 from "./photos/listings/lofty-22.jpg";
import photo22 from "./photos/listings/lofty-23.jpg";
import photo23 from "./photos/listings/lofty-24.jpg";
import photo24 from "./photos/listings/lofty-25.jpg";
import photo25 from "./photos/listings/lofty-26.jpg";
import photo26 from "./photos/listings/lofty-27.jpg";
import photo27 from "./photos/listings/lofty-28.jpg";
import photo28 from "./photos/listings/lofty-29.jpg";
import photo29 from "./photos/listings/lofty-30.jpg";
import photo30 from "./photos/listings/lofty-31.jpg";
import photo31 from "./photos/listings/lofty-32.jpg";
import photo32 from "./photos/listings/lofty-33.jpg";
import photo33 from "./photos/listings/lofty-34.jpg";
import photo34 from "./photos/listings/lofty-35.jpg";
import photo35 from "./photos/listings/lofty-36.jpg";
import photo36 from "./photos/listings/lofty-37.jpg";
import photo37 from "./photos/listings/lofty-38.jpg";
import photo38 from "./photos/listings/lofty-39.jpg";
import photo39 from "./photos/listings/lofty-40.jpg";
import photo40 from "./photos/listings/lofty-41.jpg";
import photo41 from "./photos/listings/lofty-42.jpg";
import photo42 from "./photos/listings/lofty-43.jpg";
import photo43 from "./photos/listings/lofty-44.jpg";
import photo44 from "./photos/listings/lofty-45.jpg";
import photo45 from "./photos/listings/lofty-46.jpg";
import photo46 from "./photos/listings/lofty-47.jpg";
import photo47 from "./photos/listings/lofty-48.jpg";
import photo48 from "./photos/listings/lofty-49.jpg";
import photo49 from "./photos/listings/lofty-50.jpg";
import photo50 from "./photos/listings/lofty-51.jpg";
import photo51 from "./photos/listings/lofty-52.jpg";
import photo52 from "./photos/listings/lofty-53.jpg";
import photo53 from "./photos/listings/lofty-54.jpg";
import photo54 from "./photos/listings/lofty-55.jpg";
import photo55 from "./photos/listings/lofty-56.jpg";
import photo56 from "./photos/listings/lofty-57.jpg";
import photo57 from "./photos/listings/lofty-58.jpg";
import photo58 from "./photos/listings/lofty-59.jpg";
import photo59 from "./photos/listings/lofty-60.jpg";
import photo60 from "./photos/listings/lofty-61.jpg";
import photo61 from "./photos/listings/lofty-62.jpg";
import photo62 from "./photos/listings/lofty-63.jpg";
import photo63 from "./photos/listings/lofty-64.jpg";
import photo64 from "./photos/listings/lofty-65.jpg";
import photo65 from "./photos/listings/lofty-66.jpg";
import photo66 from "./photos/listings/lofty-67.jpg";
import photo67 from "./photos/listings/lofty-68.jpg";
import photo68 from "./photos/listings/lofty-69.jpg";
import photo69 from "./photos/listings/lofty-70.jpg";
import photo70 from "./photos/listings/lofty-71.jpg";
import photo71 from "./photos/listings/lofty-72.jpg";
import photo72 from "./photos/listings/lofty-73.jpg";
import photo73 from "./photos/listings/lofty-74.jpg";
import photo74 from "./photos/listings/lofty-75.jpg";
import photo75 from "./photos/listings/lofty-76.jpg";
import photo76 from "./photos/listings/lofty-77.jpg";
import photo77 from "./photos/listings/lofty-78.jpg";
import photo78 from "./photos/listings/lofty-79.jpg";
import photo79 from "./photos/listings/lofty-80.jpg";
import photo80 from "./photos/listings/lofty-81.jpg";
import photo81 from "./photos/listings/lofty-82.jpg";
import photo82 from "./photos/listings/lofty-83.jpg";
import photo83 from "./photos/listings/lofty-84.jpg";
import photo84 from "./photos/listings/ocean-1.jpg";
import photo85 from "./photos/listings/ocean-2.jpg";
import photo86 from "./photos/listings/ocean-3.jpg";
import photo87 from "./photos/listings/ocean-4.jpg";
import photo88 from "./photos/listings/ocean-5.jpg";
import photo89 from "./photos/listings/ocean-6.jpg";
import photo90 from "./photos/listings/ocean-7.jpg";
import photo91 from "./photos/listings/ocean-8.jpg";
import photo92 from "./photos/listings/ocean-9.jpg";
import photo93 from "./photos/listings/ocean-10.jpg";
import photo94 from "./photos/listings/ocean-11.jpg";
import photo95 from "./photos/listings/ocean-12.jpg";
import photo96 from "./photos/listings/ocean-13.jpg";
import photo97 from "./photos/listings/ocean-14.jpg";
import photo98 from "./photos/listings/ocean-15.jpg";
import photo99 from "./photos/listings/ocean-16.jpg";
import photo100 from "./photos/listings/ocean-17.jpg";
import photo101 from "./photos/listings/ocean-18.jpg";
import photo102 from "./photos/listings/ocean-19.jpg";
import photo103 from "./photos/listings/ocean-20.jpg";
import photo104 from "./photos/listings/ocean-21.jpg";
const homeImages = [
  photo0,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo40,
  photo41,
  photo42,
  photo43,
  photo44,
  photo45,
  photo46,
  photo47,
  photo48,
  photo49,
  photo50,
  photo51,
  photo52,
  photo53,
  photo54,
  photo55,
  photo56,
  photo57,
  photo58,
  photo59,
  photo60,
  photo61,
  photo62,
  photo63,
  photo64,
  photo65,
  photo66,
  photo67,
  photo68,
  photo69,
  photo70,
  photo71,
  photo72,
  photo73,
  photo74,
  photo75,
  photo76,
  photo77,
  photo78,
  photo79,
  photo80,
  photo81,
  photo82,
  photo83,
  photo84,
  photo85,
  photo86,
  photo87,
  photo88,
  photo89,
  photo90,
  photo91,
  photo92,
  photo93,
  photo94,
  photo95,
  photo96,
  photo97,
  photo98,
  photo99,
  photo100,
  photo101,
  photo102,
  photo103,
  photo104,
];
const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n);
type Listing = {
  id: number;
  name: string;
  platform: string;
  city: string;
  type: string;
  min: number | null;
  yieldPct: number | null;
  status: string;
  quote: string;
  yieldLabel: string;
  yieldText: string;
  source: string;
  assetSource?: string;
  asset?: string;
  monthlyRent?: string;
  valuation: string | null;
  rawMetrics: string | null;
};
const LISTINGS = listingData as Listing[];
const valuationNumber = (v: string | null) =>
  v ? Number(v.replace(/[^0-9.]/g, "")) : 0;
/** Stated gross rent vs published value for a listing; null when the
 *  listing does not publish both figures. */
const impliedYieldFor = (l: Listing): number | null => {
  const lv = valuationNumber(l.valuation);
  const lr = l.monthlyRent ? Number(l.monthlyRent.replace(/[^0-9.]/g, "")) : 0;
  return lv > 0 && lr > 0 ? (lr * 12 * 100) / lv : null;
};
/** Rate display with meaningful decimals only: 8 stays "8", 3.95 stays
 *  "3.95". */
const fmtRate = (v: number): string =>
  v.toFixed(2).replace(/\.?0+$/, "");
type FieldDef = [
  string,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  string,
];
const compactMoney = (n: number) =>
  n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : money(n);
const INDEX_STATS = (() => {
  const valued = LISTINGS.filter((l) => valuationNumber(l.valuation) > 0);
  return {
    listings: LISTINGS.length,
    platforms: new Set(LISTINGS.map((l) => l.platform)).size,
    valueCount: valued.length,
    totalValue: valued.reduce((sum, l) => sum + valuationNumber(l.valuation), 0),
  };
})();
/** Lofty publishes a sector per listing; Oceanpoint does not, so the
 *  Oceanpoint sector is read from the listing's own published title. */
function sectorFor(l: Listing): string {
  if (l.platform === "Lofty")
    return l.type === "Not specified" ? "Type not disclosed" : l.type;
  const n = l.name.toLowerCase();
  if (n.includes("student")) return "Student housing";
  if (n.includes("parking")) return "Parking";
  if (
    n.includes("guesthouse") ||
    n.includes("pension") ||
    n.includes("hotel")
  )
    return "Hospitality";
  if (n.includes("restaurant")) return "Restaurant";
  if (n.includes("mixed use") || n.includes("multipurpose"))
    return "Mixed use";
  if (
    n.includes("apartment") ||
    n.includes("duplex") ||
    n.includes("studio") ||
    n.includes("house")
  )
    return "Residential";
  return "Type not disclosed";
}
/** Lofty publishes an over/undervaluation tag per listing, measured against
 *  its own estimate; it is the platform's label, not a Slicebase view. */
function loftyValueTag(l: Listing): string | null {
  if (!l.rawMetrics) return null;
  const parts = l.rawMetrics.split("\u00b7").map((x) => x.trim());
  return parts.length === 3 ? parts[2] : null;
}
function liquidityFor(l: Listing): { text: string; live: boolean } {
  if (l.platform === "Lofty")
    return { text: "Secondary market: Lofty exchange", live: true };
  if (l.status === "TRADING")
    return { text: "Trading live on Oceanpoint", live: true };
  if (l.status === "LISTED")
    return { text: "Listed; not yet trading", live: false };
  return { text: "Not yet trading", live: false };
}
/** Platform-stated transaction fees, re-checked against the platforms' own
 *  pages 5 Nov 2026 (lofty.ai/how-it-works, oceanpoint.fi/earn). Applied to
 *  the invested amount with no change in property value; estimates only,
 *  never a listing forecast. */
function platformFeesFor(l: Listing): {
  buyPct: number;
  sellPct: number;
  note: string;
} {
  if (l.platform === "Lofty")
    return {
      buyPct: 2.5,
      sellPct: 3,
      note: "Lofty states 2.5% on purchases and 3% on sales (lofty.ai/how-it-works, checked 5 Nov 2026); applied here to the invested amount, assuming a later sale at the same value. Market orders can add a separate 2.5% market-maker fee (off by default; turn it on above to include it); property, payment or network costs may also apply. Stated platform fees only - not a complete all-in cost.",
    };
  return {
    buyPct: 1.5,
    sellPct: 1.5,
    note: "Oceanpoint charges 1.5% on each marketplace trade, so a purchase and a later sale are each charged (oceanpoint.fi/earn, checked 5 Nov 2026); applied here to the invested amount, assuming a sale at the same value. Network gas and any property or issuer costs are extra and not included. Stated platform fees only - not a complete all-in cost.",
  };
}
function PropertyBadges({ listing: l }: { listing: Listing }) {
  const liq = liquidityFor(l);
  return (
    <div className="sb-property-badges">
      <span className="sb-badge">{sectorFor(l)}</span>
      <span className={`sb-badge${liq.live ? " sb-badge-live" : ""}`}>
        {liq.text}
      </span>
    </div>
  );
}
const COUNTRIES = [
  { code: "us", label: "United States" },
  { code: "in", label: "India" },
  { code: "ae", label: "United Arab Emirates" },
  { code: "gb", label: "United Kingdom" },
  { code: "sg", label: "Singapore" },
];

const ELIGIBILITY_NOTE =
  "Last updated: 4 Nov 2026. 84 Lofty listings and 21 Oceanpoint listings collected from their catalogs. Oceanpoint reports 77 properties; 56 are not captured in this view, so coverage is incomplete. Quotes and status can change. Platform terms below are checked separately from property metrics. Exact order minimums and full property costs remain unverified. Country selection is context only, not an eligibility filter.";

type Term = { label: string; value: string };
function termsFor(l: Listing): Term[] {
  const lofty = l.platform === "Lofty";
  return [
    { label: "Minimum investment", value: "Exact order minimum unverified" },
    { label: "Occupancy", value: "Not available in our listing data (4 Nov 2026)" },
    {
      label: "Fees",
      value: lofty
        ? "2.5% buy / 3% sell; market-order fee also applies"
        : "1.5% transaction fee; gas extra",
    },
    {
      label: "Ownership structure",
      value: lofty
        ? "LLC property interests, per Lofty's structure"
        : "BSPT property tokens, per Oceanpoint's structure",
    },
    {
      label: "Exit / resale",
      value: lofty
        ? "24/7 exchange; liquidity not guaranteed"
        : l.status === "COMING SOON"
          ? "Not trading yet; future exit unverified"
          : "Marketplace resale if enabled; buyer required",
    },
    {
      label: "Eligibility",
      value: lofty
        ? "18+ / KYC / sanctions & local rules"
        : "Account + KYC; country restrictions",
    },
  ];
}
/** Referral sign-up routes supplied by the operator, checked 4 Nov 2026.
 *  Used only on labelled sign-up CTAs. Property source, terms and evidence
 *  links stay plain, without referral parameters. */
const REFERRAL: Record<string, { url: string; perk: string }> = {
  Lofty: {
    url: "https://www.lofty.ai/refer?utm_source=growsurf&utm_medium=referrals&utm_campaign=referral-program&grsf=v-m-aman-usskyd",
    perk: "new accounts currently get a $100 real-estate gift",
  },
  Oceanpoint: {
    url: "https://marketplace.oceanpoint.fi/oceanpoint/auth/sign-up?referralCode=9257706977afb3e695eacd36979504ab7b757e162fb6de7329aa66f81e5a8c5e",
    perk: "create a marketplace account",
  },
};

function ReferralNote() {
  return (
    <p className="sb-referral-line">
      The platform button opens its sign-up page via a referral
      link; Slicebase may earn a reward. The source link stays direct.
    </p>
  );
}

function JoinLink({ platform }: { platform: string }) {
  const ref = REFERRAL[platform];
  if (!ref) return null;
  return (
    <a
      className="sb-join-link"
      href={ref.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      {platform === "Lofty" ? "Invest now" : `Join ${platform}`} &#8599;
    </a>
  );
}

function TermNotes({ listing: l }: { listing: Listing }) {
  const lofty = l.platform === "Lofty";
  return (
    <details className="sb-term-notes">
      <summary>Terms, scope &amp; sources</summary>
      <p>
        Platform-wide guidance, checked 4 Nov 2026. Not a verification of this
        offering's complete terms or your eligibility.
      </p>
      <p>
        Property source (direct link, no referral):{" "}
        <TextLink href={l.source}>
          View this listing on {l.platform} ↗
        </TextLink>
      </p>
      {lofty ? (
        <>
          <p>
            Figures: stated rent / value is calculated from published monthly
            rent × 12 ÷ property value. Avg yield and the value tag are Lofty's
            own figures. Our listing data does not state the avg yield's
            gross/net basis or period. Lofty also lists a separate current yield
            without a published formula. These measures are different, not
            forecasts; a higher yield does not mean lower risk.
          </p>
          <p>
            Entry: Lofty describes getting started with one share, often about
            $50, but also supports fractional shares. Its pages give differing
            entry descriptions. This listing's executable order minimum,
            available quantity and total including fees are not verified. Share
            price above is not a minimum-investment claim.
          </p>
          <p>
            Costs: 2.5% on purchases and 3% on sales. Market orders include a
            separate 2.5% fee paid to market makers. No AUM fee or early
            withdrawal penalty is stated. Property operating costs and
            third-party payment/network charges may apply; full listing-specific
            costs are not verified.
          </p>
          <p>
            Exit: no minimum holding period is stated. Limit orders fill only
            when matched; market execution depends on available liquidity and
            may involve slippage. Listing for sale is not a guaranteed sale or
            return of capital.
          </p>
          <p>
            Access: Lofty says 18+ and identity verification, subject to
            sanctions and local law. Its broad international-access wording is
            not personal legal clearance. California's DFPI issued a 2022 order
            restricting further offers of the described LLC interests unless
            qualified or exempt; applicability to this offering is not verified.
          </p>
          <p>
            <TextLink href="https://www.lofty.ai/how-it-works">
              How Lofty works ↗
            </TextLink>{" "}
            ·{" "}
            <TextLink href="https://www.lofty.ai/terms">Lofty terms ↗</TextLink>{" "}
            ·{" "}
            <TextLink href="https://dfpi.ca.gov/enforcement_action/lofty-ai-inc/">
              California order ↗
            </TextLink>
          </p>
        </>
      ) : (
        <>
          <p>
            Entry: Oceanpoint advertises starting with a single BSPT. That is
            general guidance, not a verified minimum order for this property.
            Actual token quantity, price, available orders and total including
            fees must be checked in the marketplace.
          </p>
          <p>
            Costs: Oceanpoint states a 1.5% transaction fee (1.0% to Oceanpoint,
            0.5% to Blocksquare infrastructure). Network gas and property/issuer
            costs are separate; complete offering-specific costs are not
            verified. BST staking fee rules are not property-trading rules.
          </p>
          <p>
            Exit: marketplace resale requires demand and an enabled market.
            Coming-soon and listed status do not establish a live exit. POINT
            instant liquidity is planned, not live. Staked BSPTs can be locked
            and cannot be sold during the staking term.
          </p>
          <p>
            Access: an account and KYC are required to buy and hold BSPTs; some
            countries are unsupported. A complete supported-country list and
            this offering's jurisdiction restrictions were not verified. Country
            selection here does not establish legal access.
          </p>
          {l.id === 86 && (
            <p>
              This property's signed corporate resolution describes a
              conditional issuer buyback if its resolution is withdrawn. It is
              not an investor on-demand redemption right.{" "}
              <TextLink href="https://ipfs.blocksquare.io/ipfs/QmdtzE4tvoQ1Xjw2yBWdiLdmAnQ6RmTxtrA1VWTJCkrwTn">
                Read this property's resolution ↗
              </TextLink>
            </p>
          )}
          <p>
            <TextLink href="https://oceanpoint.fi/trade">
              Trading &amp; entry ↗
            </TextLink>{" "}
            ·{" "}
            <TextLink href="https://oceanpoint.fi/earn">
              Transaction fees ↗
            </TextLink>{" "}
            ·{" "}
            <TextLink href="https://oceanpoint.fi/faq">
              KYC &amp; countries ↗
            </TextLink>{" "}
            ·{" "}
            <TextLink href="https://oceanpoint.fi/learn/what-is-real-estate-staking">
              Staking locks &amp; transfer fees ↗
            </TextLink>
          </p>
        </>
      )}
    </details>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const [country, setCountry] = useState("us");
  const [platform, setPlatform] = useState("all");
  const [maxMin, setMaxMin] = useState(10000);
  const [sort, setSort] = useState("min");
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => setVisibleCount(12), [platform, maxMin, sort]);
  const [picked, setPicked] = useState<number[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const results = useMemo(() => {
    let rows = LISTINGS.filter(
      (l) =>
        (platform === "all" || l.platform === platform) &&
        (maxMin === 10000 || (l.min !== null && l.min <= maxMin)),
    );
    rows = [...rows].sort((a, b) =>
      sort === "platform"
        ? a.platform.localeCompare(b.platform) || a.id - b.id
        : sort === "name"
          ? a.name.localeCompare(b.name)
          : sort === "yield"
            ? (impliedYieldFor(b) ?? -1) - (impliedYieldFor(a) ?? -1) ||
              a.id - b.id
            : a.id - b.id,
    );
    return rows;
  }, [platform, maxMin, sort]);

  const togglePick = (id: number) => {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  /** Scenario links restore the calculator from the query string. */
  const calcParams = useMemo(
    () =>
      typeof window === "undefined"
        ? new URLSearchParams()
        : new URLSearchParams(window.location.search),
    [],
  );
  const qpNum = (k: string, lo: number, hi: number): string | null => {
    const v = calcParams.get(k);
    if (v == null || v.trim() === "") return null;
    const n = Number(v);
    return Number.isFinite(n) && n >= lo && n <= hi ? String(n) : null;
  };
  const initialCalcId = (() => {
    const id = qpNum("l", 1, 100000);
    return id != null && LISTINGS.some((l) => l.id === Number(id))
      ? Number(id)
      : 1;
  })();
  const [calcId, setCalcId] = useState(initialCalcId);
  const [calcMode, setCalcMode] = useState<"invest" | "goal">(
    calcParams.get("mode") === "goal" ? "goal" : "invest",
  );
  const [goal, setGoal] = useState(qpNum("g", 1, 1000000) ?? "500");
  const [amount, setAmount] = useState(qpNum("a", 1, 100000000) ?? "1000");
  /** The rate starts at the selected listing's stated rent / value where
   *  published (platform-stated, not a forecast); otherwise an 8% example. */
  const [rate, setRate] = useState(
    () =>
      qpNum("r", 0, 100) ??
      (() => {
        const iy = impliedYieldFor(
          LISTINGS.find((l) => l.id === initialCalcId) ?? LISTINGS[0],
        );
        return iy != null ? iy.toFixed(2) : "8";
      })(),
  );
  const [years, setYears] = useState(qpNum("y", 1, 30) ?? "5");
  const [upfront, setUpfront] = useState(qpNum("u", 0, 100000000) ?? "0");
  const [annualFees, setAnnualFees] = useState(qpNum("c", 0, 100000000) ?? "0");
  const [includeFees, setIncludeFees] = useState(calcParams.get("fees") !== "0");
  const calcListing = LISTINGS.find((l) => l.id === calcId) ?? LISTINGS[0];
  const calcFees = platformFeesFor(calcListing);
  const calculatorRef = useRef<HTMLElement>(null);
  const [sellAtEnd, setSellAtEnd] = useState(calcParams.get("sell") !== "0");
  const [includeMarketFee, setIncludeMarketFee] = useState(
    calcParams.get("mkt") === "1",
  );
  const [taxRate, setTaxRate] = useState(qpNum("tax", 0, 99) ?? "0");
  const [compareRate, setCompareRate] = useState(qpNum("cmp", 0, 100) ?? "");
  const [valueChg, setValueChg] = useState("10");
  /** False right after a listing prefill: the math then uses the exact
   *  stated ratio while the field shows it rounded. True once the user
   *  types their own rate, which is then used exactly as entered. */
  const [rateEdited, setRateEdited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chartTip, setChartTip] = useState<{ i: number; px: number } | null>(
    null,
  );
  const numeric = [amount, rate, years, upfront, annualFees].map(Number);
  const validCalc =
    [amount, rate, years, upfront, annualFees].every((v) => v.trim() !== "") &&
    numeric.every(Number.isFinite) &&
    numeric[0] > 0 &&
    numeric[0] <= 100000000 &&
    numeric[1] >= 0 &&
    numeric[1] <= 100 &&
    numeric[2] >= 1 &&
    numeric[2] <= 30 &&
    numeric[3] >= 0 &&
    numeric[4] >= 0;
  const [a, r, t, u, f] = numeric;
  const impliedYield = impliedYieldFor(calcListing);
  /** Exact internal math, rounded display: after a listing prefill the math
   *  runs on the exact stated ratio while the field shows 2 decimals; once
   *  the user edits, their entered value is used exactly. */
  const rUse = !rateEdited && impliedYield != null ? impliedYield : r;
  const marketFeePct =
    calcListing.platform === "Lofty" && includeMarketFee ? 2.5 : 0;
  const buyEff = calcFees.buyPct + marketFeePct;
  const sellEff = calcFees.sellPct + marketFeePct;
  const taxNum = Number(taxRate);
  const tn =
    taxRate.trim() !== "" &&
    Number.isFinite(taxNum) &&
    taxNum >= 0 &&
    taxNum < 100
      ? taxNum
      : 0;
  const cmpNum = Number(compareRate);
  const validCmp =
    compareRate.trim() !== "" &&
    Number.isFinite(cmpNum) &&
    cmpNum >= 0 &&
    cmpNum <= 100;
  /** All calculator math lives in src/calc.ts (pure, unit-tested); this
   *  wrapper keeps the per-listing fee overrides used by the side-by-side
   *  table. */
  const calcInp = {
    amount: a,
    ratePct: rUse,
    years: t,
    upfront: u,
    annualCosts: f,
    buyPct: buyEff,
    sellPct: sellEff,
    includeFees,
    sellAtEnd,
    taxPct: tn,
  };
  const scenario = (
    rr: number,
    dv: number,
    buyPctE: number = buyEff,
    sellPctE: number = sellEff,
  ) =>
    calcScenario({ ...calcInp, buyPct: buyPctE, sellPct: sellPctE }, rr, dv);
  const base = scenario(rUse, 0);
  const oneTimeCosts = base.buyFee + base.sellFee + u;
  const breakEvenMonths = feeBreakEvenMonths(base, u);
  const annualizedNet = annualizedNetPct(base, t);
  const irrNet = irrAnnualPct(calcInp, base);
  const valueFall = valueFallBreakEven(calcInp);
  const sensitivity10 = sensitivityPer10Pct(calcInp);
  /** Stress-table columns: the user's own rate ±2 points, plus the selected
   *  listing's stated rent / value at its exact ratio when published. */
  const gridRates = useMemo(() => {
    const raw = [rUse + 2, rUse, Math.max(rUse - 2, 0.25)];
    if (impliedYield != null && Math.abs(impliedYield - rUse) >= 0.005)
      raw.push(impliedYield);
    raw.sort((x, y) => y - x);
    const dedup: number[] = [];
    raw.forEach((v) => {
      if (!dedup.some((d) => Math.abs(d - v) < 0.05)) dedup.push(v);
    });
    return dedup;
  }, [rUse, impliedYield]);
  /** Value-change magnitude tested in the stress table and chart band. */
  const cvNum = Math.min(Math.max(Number(valueChg) || 0, 0), 40);
  const gridRows: { label: string; dv: number }[] = [
    { label: `Value down ${cvNum}%`, dv: -cvNum / 100 },
    { label: "Value unchanged", dv: 0 },
    { label: `Value up ${cvNum}%`, dv: cvNum / 100 },
  ];
  const cmpGain = validCmp ? (a * cmpNum * t) / 100 : null;
  /** Chart series with honest fee timing: the buy fee and upfront costs
   *  are charged up front; the sell fee and any value change land at
   *  sale, in the final month. */
  const seriesLow = validCalc ? chartSeries(calcInp, -cvNum / 100) : [];
  const seriesMid = validCalc ? chartSeries(calcInp, 0) : [];
  const seriesHigh = validCalc ? chartSeries(calcInp, cvNum / 100) : [];
  const beMonth =
    seriesMid.length > 1 ? seriesBreakEvenMonth(seriesMid) : null;
  const goalNumeric = [goal, rate, annualFees].map(Number);
  const validGoal =
    [goal, rate, annualFees].every((v) => v.trim() !== "") &&
    goalNumeric.every(Number.isFinite) &&
    goalNumeric[0] > 0 &&
    goalNumeric[0] <= 1000000 &&
    goalNumeric[1] > 0 &&
    goalNumeric[1] <= 100 &&
    goalNumeric[2] >= 0;
  const [g, , gf] = goalNumeric;
  const gr = rUse;
  const goalGrossNeeded = tn > 0 ? (g * 12) / (1 - tn / 100) : g * 12;
  const goalAnnualAfterCosts = g * 12;
  const goalInvestment = ((goalGrossNeeded + gf) * 100) / gr;
  const goalRates = [gr + 2, gr, Math.max(gr - 2, 0.25)];
  /** Picking a listing pre-fills the rate from its stated rent / value
   *  where published; the field stays editable. */
  const applyListing = (listing: Listing) => {
    setCalcId(listing.id);
    const iy = impliedYieldFor(listing);
    if (iy != null) {
      setRate(iy.toFixed(2));
      setRateEdited(false);
    }
  };
  const openCalculator = (listing: Listing) => {
    applyListing(listing);
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const compareAnother = () => {
    setPicked((prev) =>
      prev.includes(calcId) ? prev : [calcId, ...prev].slice(0, 3),
    );
    document
      .getElementById("compare")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const copyScenarioLink = () => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams({
      l: String(calcId),
      a: amount,
      r: rate,
      y: years,
      u: upfront,
      c: annualFees,
      fees: includeFees ? "1" : "0",
      mkt: includeMarketFee ? "1" : "0",
      tax: taxRate,
      sell: sellAtEnd ? "1" : "0",
    });
    if (validCmp) q.set("cmp", compareRate);
    if (calcMode === "goal") {
      q.set("mode", "goal");
      q.set("g", goal);
    }
    const url = `${window.location.origin}${window.location.pathname}?${q.toString()}`;
    navigator.clipboard
      ?.writeText(url)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };
  const downloadCsv = () => {
    if (typeof window === "undefined" || !validCalc) return;
    const rows: string[][] = [
      ["Slicebase scenario estimate - informational only, not investment advice"],
      [],
      ["Listing", calcListing.name],
      ["Platform", calcListing.platform],
      ["Investment", money(a)],
      ["Annual income rate", `${fmtRate(r)}%`],
      ["Holding period", `${t} ${t === 1 ? "year" : "years"}`],
      ["Stated fees", `${buyEff}% buy + ${sellEff}% sell`],
      ["Tax rate on income", `${tn}%`],
      ["Sell at end", sellAtEnd ? "yes" : "no"],
      [],
      ["You put in", money(base.totalIn)],
      ["You get back", money(base.totalBack)],
      [sellAtEnd ? "Net result if sold at end" : "Net income", money(base.net)],
      ["Annualized net (simple average)", `${annualizedNet.toFixed(1)}%`],
    ];
    if (irrNet != null)
      rows.push(["Timing-adjusted annual rate", `${irrNet.toFixed(1)}%`]);
    if (sellAtEnd && valueFall != null && valueFall < 0)
      rows.push([
        "Value can fall before you lose money",
        `about ${Math.abs(valueFall * 100).toFixed(0)}%`,
      ]);
    rows.push([]);
    rows.push(["Stress test", ...gridRates.map((g) => `${fmtRate(g)}%`)]);
    gridRows.forEach((row) =>
      rows.push([
        row.label,
        ...gridRates.map((g) => money(scenario(g, row.dv).net)),
      ]),
    );
    const csv = rows
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "slicebase-scenario.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const renderField = (def: FieldDef) => {
    const [label, value, setter, min, max] = def;
    return (
      <label key={label}>
        {label}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step="any"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
      </label>
    );
  };

  const pickedListings = LISTINGS.filter((l) => picked.includes(l.id));

  return (
    <div className="sb">
      <div className="sb-bg" aria-hidden="true">
        <div className="sb-ribs" />
        <div className="sb-vignette" />
        <div className="sb-grain" />
      </div>

      <header className="sb-nav">
        <div className="sb-nav-bar">
          <a
            className="sb-brand"
            href="#top"
            onClick={() => setMenuOpen(false)}
            aria-label="Slicebase home"
          >
            <img
              className="sb-brand-symbol"
              src={brandSymbol}
              alt="Slicebase"
            />
          </a>
          <nav className="sb-nav-desktop" aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#income">Calculator</a>
            <a href="#faq">FAQ</a>
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
          </nav>
          <a className="sb-nav-explore" href="#compare">
            Compare listings <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            className="sb-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="sb-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <svg
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="m5 5 10 10M15 5 5 15" />
              ) : (
                <path d="M3 7h14M3 13h14" />
              )}
            </svg>
          </button>
        </div>
        <nav
          id="sb-mobile-menu"
          className="sb-mobile-menu"
          aria-label="Mobile primary"
          hidden={!menuOpen}
        >
          <a href="#compare" onClick={() => setMenuOpen(false)}>
            Compare listings <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#how" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#income" onClick={() => setMenuOpen(false)}>
            Calculator
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#methodology" onClick={() => setMenuOpen(false)}>
            Methodology
          </a>
          <p>Dated source records · Informational only</p>
        </nav>
      </header>

      <main id="top">
        <section className="sb-hero">
          <div className="sb-hero-copy">
            <p className="sb-eyebrow sb-hero-eyebrow">
              Independent comparison of tokenized real estate
            </p>
            <h1>
              <span>
                A slice of <em>property.</em>
              </span>
              <span>A clearer choice.</span>
            </h1>
            <p className="sb-sub">
              Compare tokenized properties across Lofty and Oceanpoint. See
              the costs, terms and risks before you invest.
            </p>
            <div className="sb-actions">
              <a className="sb-btn sb-btn--solid" href="#compare">
                Compare listings <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="sb-quiet-link" href="#income">
                Run the numbers <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="sb-quiet-link" href="#how">
                How it works <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="sb-sculpture"
            role="img"
            aria-label="Abstract glass building made of horizontal slices, with one golden slice drawn out"
          >
            <svg viewBox="0 0 460 580" aria-hidden="true">
              <defs>
                <linearGradient id="glassTop" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#fff9df" stopOpacity=".48" />
                  <stop offset=".5" stopColor="#ffe2b0" stopOpacity=".13" />
                  <stop offset="1" stopColor="#b3522c" stopOpacity=".32" />
                </linearGradient>
                <linearGradient id="glassFront">
                  <stop stopColor="#43101a" stopOpacity=".74" />
                  <stop offset=".48" stopColor="#e88d55" stopOpacity=".4" />
                  <stop offset="1" stopColor="#fff0c6" stopOpacity=".55" />
                </linearGradient>
                <linearGradient id="glassSide">
                  <stop stopColor="#fff2d3" stopOpacity=".5" />
                  <stop offset="1" stopColor="#54151e" stopOpacity=".8" />
                </linearGradient>
                <linearGradient id="sliceGold">
                  <stop stopColor="#fff5c0" />
                  <stop offset=".5" stopColor="#ffc76e" />
                  <stop offset="1" stopColor="#d66b31" />
                </linearGradient>
                <radialGradient id="baseGlow">
                  <stop stopColor="#491019" stopOpacity=".7" />
                  <stop offset="1" stopColor="#491019" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse
                cx="235"
                cy="513"
                rx="205"
                ry="48"
                fill="url(#baseGlow)"
              />
              {Array.from({ length: 14 }, (_, i) => {
                const selected = i === 6;
                const y = 72 + i * 25;
                return (
                  <g
                    key={i}
                    transform={`translate(${selected ? 64 : 0}, ${y})`}
                    className={selected ? "sb-pulled-slice" : ""}
                  >
                    <path
                      d="M62 45 L212 106 L306 52 L156 -9 Z"
                      fill={selected ? "url(#sliceGold)" : "url(#glassTop)"}
                      stroke={selected ? "#ffe6a4" : "#ffeed5"}
                      strokeOpacity={selected ? 0.95 : 0.48}
                      strokeWidth=".8"
                    />
                    <path
                      d="M62 45 L212 106 L212 124 L62 63 Z"
                      fill={selected ? "#df9e5a" : "url(#glassFront)"}
                      stroke="#ffecd3"
                      strokeOpacity=".42"
                      strokeWidth=".65"
                    />
                    <path
                      d="M212 106 L306 52 L306 70 L212 124 Z"
                      fill={selected ? "#f4ba75" : "url(#glassSide)"}
                      stroke="#fff0d5"
                      strokeOpacity=".52"
                      strokeWidth=".65"
                    />
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <path
                        key={n}
                        d={`M${72 + n * 16} ${49 + n * 6.5} v18`}
                        stroke="#fff4dc"
                        strokeOpacity=".18"
                        strokeWidth=".7"
                      />
                    ))}
                    <path
                      d="M212 106 L212 124"
                      stroke="#fff7d9"
                      strokeOpacity=".85"
                      strokeWidth="1.3"
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        <div className="sb-below-hero">
          <p className="sb-eyebrow">
            Independent &middot; informational &middot; no custody
          </p>
          <ul className="sb-strip">
            <li>
              <strong>Side-by-side listings</strong>
              <span>Yields, fees and terms in one view</span>
            </li>
            <li>
              <strong>Access rules shown</strong>
              <span>Platform-stated: 18+, KYC, sanctions, local rules</span>
            </li>
            <li>
              <strong>Rankings never paid for</strong>
              <span>Referral links may earn us a reward</span>
            </li>
            <li>
              <strong>We never hold money or tokens</strong>
              <span>Informational only; not investment advice</span>
            </li>
          </ul>
        </div>

        <section id="compare" className="sb-section sb-directory">
          <div className="sb-directory-head">
            <div className="sb-head">
              <p className="sb-eyebrow">The directory</p>
              <h2>Compare listings.</h2>
              <p className="sb-section-sub">
                One view. The numbers that matter.
              </p>
              <span className="sb-demo-label">
                Source-linked listings · Not live quotes
              </span>
            </div>
          </div>
          <div className="sb-index-banner">
            <div>
              <strong>{INDEX_STATS.listings}</strong>
              <span>
                listings indexed across {INDEX_STATS.platforms} platforms
              </span>
            </div>
            <div>
              <strong>{compactMoney(INDEX_STATS.totalValue)}</strong>
              <span>
                platform-published valuations indexed (
                {INDEX_STATS.valueCount} of {INDEX_STATS.listings} listings,
                USD)
              </span>
            </div>
          </div>
          <p className="sb-index-note">
            Listings captured 4 Nov 2026; page last reviewed 5 Nov 2026.
          </p>
          <div className="sb-controls">
            <div className="sb-control">
              <label htmlFor="f-country">Country context</label>
              <select
                id="f-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sb-control">
              <label htmlFor="f-platform">Platform</label>
              <select
                id="f-platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="all">All platforms</option>
                <option>Lofty</option>
                <option>Oceanpoint</option>
              </select>
            </div>
            <div className="sb-control">
              <label htmlFor="f-min">Minimum up to</label>
              <select
                id="f-min"
                value={maxMin}
                onChange={(e) => setMaxMin(Number(e.target.value))}
              >
                <option value={10000}>Any amount</option>
                <option value={50}>$50</option>
                <option value={100}>$100</option>
                <option value={500}>$500</option>
              </select>
            </div>
            <div className="sb-control">
              <label htmlFor="f-sort">Sort by</label>
              <select
                id="f-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="min">Source order</option>
                <option value="name">Listing name</option>
                <option value="platform">Platform</option>
                <option value="yield">Stated rent / value</option>
              </select>
            </div>
          </div>
          <details className="sb-directory-data-notes">
            <summary>Partial catalogue <span>Coverage &amp; data notes</span></summary>
            <p className="sb-directory-notice">{ELIGIBILITY_NOTE}</p>
          </details>
          <div className="sb-result-line">
            <span>
              {results.length} of {LISTINGS.length} listings
            </span>
            <button
              type="button"
              onClick={() => {
                setPlatform("all");
                setMaxMin(10000);
                setSort("min");
                setCountry("us");
              }}
            >
              Reset filters
            </button>
          </div>
          {results.length === 0 ? (
            <p className="sb-empty">
              No verified minimums match this filter. Reset to see the captured
              listings.
            </p>
          ) : (
            <div className="sb-results">
              {results.slice(0, visibleCount).map((l) => (
                <article
                  key={l.id}
                  className={`sb-property${picked.includes(l.id) ? " is-picked" : ""}`}
                >
                  <div className="sb-property-image">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="520"
                      src={homeImages[l.id - 1]}
                      alt={`${l.name}, photo from ${l.platform}`}
                    />
                  </div>
                  <div className="sb-property-body">
                    <div className="sb-property-platform">
                      <span>{l.platform}</span>
                    </div>
                    <h3>{l.name}</h3>
                    <p className="sb-property-location">{l.city}</p>
                    <PropertyBadges listing={l} />
                    <dl className="sb-property-metrics sb-card-headlines">
                      <div>
                        <dt>{l.platform === "Lofty" ? "Price per share" : "Property valuation"}</dt>
                        <dd>{l.platform === "Lofty" ? l.quote.replace("/share", "") : l.valuation}</dd>
                        <small>{l.platform === "Lofty" ? "Not the minimum order" : "Not the investment minimum"}</small>
                      </div>
                      <div>
                        <dt>{l.platform === "Lofty" && impliedYieldFor(l) != null ? "Annual rent / value" : `${l.yieldLabel} (${l.platform})`}</dt>
                        <dd>{l.platform === "Lofty" && impliedYieldFor(l) != null ? `${impliedYieldFor(l)!.toFixed(2)}%` : l.yieldText}</dd>
                        <small>{l.platform === "Lofty" && impliedYieldFor(l) != null ? "Annual rent ÷ property value" : "Platform-published figure"}</small>
                      </div>
                    </dl>
                    <details className="sb-card-details">
                      <summary>Property details <span>Figures, fees &amp; sources</span></summary>
                      <div className="sb-card-detail-content">
                    <dl className="sb-property-metrics sb-detail-metrics">
                      <div>
                        <dt>
                          {l.platform === "Lofty" ? "Share price" : "Valuation"}
                        </dt>
                        <dd>
                          {l.platform === "Lofty" ? l.quote : l.valuation}
                        </dd>
                      </div>
                      {impliedYieldFor(l) != null && (
                        <div>
                          <dt>Stated rent / value</dt>
                          <dd>{impliedYieldFor(l)!.toFixed(2)}%</dd>
                        </div>
                      )}
                      <div>
                        <dt>{l.yieldLabel} (platform&apos;s own)</dt>
                        <dd>{l.yieldText}</dd>
                      </div>
                      {l.platform === "Lofty" && loftyValueTag(l) && (
                        <div>
                          <dt>Lofty value tag</dt>
                          <dd>{loftyValueTag(l)}</dd>
                        </div>
                      )}
                      {l.platform !== "Lofty" && l.asset && (
                        <div>
                          <dt>Token</dt>
                          <dd>{l.asset}</dd>
                        </div>
                      )}
                      {l.platform === "Lofty" && l.valuation && (
                        <div>
                          <dt>Property value (Lofty)</dt>
                          <dd>{l.valuation}</dd>
                        </div>
                      )}
                      {l.platform === "Lofty" && l.monthlyRent && (
                        <div>
                          <dt>Monthly rent (Lofty)</dt>
                          <dd>{l.monthlyRent}</dd>
                        </div>
                      )}
                    </dl>
                    <p className="sb-yield-note">
                      {l.platform === "Lofty"
                        ? "Rent / value = annual rent ÷ property value. Avg yield is Lofty's published figure."
                        : "APY is Oceanpoint's published figure."}
                    </p>
                    <dl className="sb-property-terms">
                      {termsFor(l).map((t) => (
                        <div key={t.label}>
                          <dt>{t.label}</dt>
                          <dd>{t.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <TermNotes listing={l} />
                    {l.assetSource && (
                      <p className="sb-source-line">
                        <TextLink href={l.assetSource}>
                          Token contract ↗
                        </TextLink>
                      </p>
                    )}
                      </div>
                    </details>
                    <div className="sb-property-actions">
                      <JoinLink platform={l.platform} />
                      <button
                        type="button"
                        className="file-hover-underline"
                        onClick={() => openCalculator(l)}
                      >
                        Run the numbers ↗
                      </button>
                      <label>
                        <input
                          type="checkbox"
                          checked={picked.includes(l.id)}
                          onChange={() => togglePick(l.id)}
                          disabled={
                            !picked.includes(l.id) && picked.length >= 3
                          }
                        />
                        <span>
                          {picked.includes(l.id) ? "Selected" : "Compare"}
                        </span>
                      </label>
                    </div>
                    <p className="sb-referral-line sb-card-referral">Referral link · We may earn a reward.</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {visibleCount < results.length && (
            <div className="sb-selection">
              <span>
                Showing {Math.min(visibleCount, results.length)} of{" "}
                {results.length} results
              </span>
              <button
                type="button"
                onClick={() => setVisibleCount((n) => n + 12)}
              >
                Show more listings
              </button>
            </div>
          )}
          <div
            className={`sb-selection sb-compare-strip${picked.length ? " is-live" : ""}`}
            aria-live="polite"
          >
            <div>
              <strong>{picked.length} of 3 selected</strong>
              <span>
                {picked.length < 2
                  ? "Choose 2-3 listings to compare."
                  : "Compare the trade-offs, not just the yield."}
              </span>
            </div>
            <div>
              <button
                type="button"
                disabled={picked.length < 2}
                onClick={() => setCompareOpen(!compareOpen)}
              >
                {compareOpen ? "Hide comparison" : "Compare selected"}
              </button>
              {picked.length > 0 && (
                <button
                  type="button"
                  className="sb-text-button"
                  onClick={() => {
                    setPicked([]);
                    setCompareOpen(false);
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          {compareOpen && pickedListings.length >= 2 && (
            <div className="sb-comparison">
              <div className="sb-comparison-heading">
                <h3>Your comparison</h3>
                <p>
                  No overall score. Lower entry cost does not mean lower risk.
                </p>
              </div>
              <div className="sb-comparison-options">
                {pickedListings.map((l) => (
                  <article key={l.id}>
                    <p className="sb-property-platform">
                      {String(l.id).padStart(2, "0")} · {l.platform}
                    </p>
                    <h4>{l.name}</h4>
                    <dl>
                      <div>
                        <dt>
                          {l.platform === "Lofty" ? "Share price" : "Valuation"}
                        </dt>
                        <dd>
                          {l.platform === "Lofty" ? l.quote : l.valuation}
                        </dd>
                      </div>
                      <div>
                        <dt>{l.yieldLabel}</dt>
                        <dd>{l.yieldText}</dd>
                      </div>
                      <div>
                        <dt>Property type</dt>
                        <dd>{l.type}</dd>
                      </div>
                      <div>
                        <dt>Location</dt>
                        <dd>{l.city}</dd>
                      </div>
                      {termsFor(l).map((t) => (
                        <div key={t.label}>
                          <dt>{t.label}</dt>
                          <dd>{t.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <TermNotes listing={l} />
                    <p className="sb-comparison-join">
                      <JoinLink platform={l.platform} />
                    </p>
                    <button type="button" onClick={() => openCalculator(l)}>
                      Run the numbers ↗
                    </button>
                    <ReferralNote />
                  </article>
                ))}
              </div>
              <p className="sb-comparison-note">
                Before choosing: verify total fees, occupancy assumptions,
                ownership rights, country restrictions and how you can sell.
                These are dated source records, not independently audited
                investments. Platform metric definitions differ; APY and avg
                yield are not directly comparable. A higher stated yield is not
                evidence of a better investment.
              </p>
            </div>
          )}
          <section
            id="income"
            ref={calculatorRef}
            className="sb-calculator"
            aria-labelledby="calculator-title"
          >
            <div className="sb-calculator-heading">
              <p className="sb-eyebrow">Run the numbers</p>
              <h3 id="calculator-title">What would you actually get back?</h3>
              <p>
                Estimate your own net result on your own assumptions, before
                fees. The rate starts at the listing&apos;s stated rent /
                value ratio; edit every field freely.
              </p>
              <details className="sb-calc-notes">
                <summary>(i) What this uses</summary>
                <p>
                  Start from an investment amount, or work back from a
                  monthly goal. Where the selected listing publishes rent and
                  a value, the rate starts at that stated rent / value ratio
                  - platform-stated, as published, not a forecast - and
                  otherwise at an 8% example. Platform avg-yield metrics (avg
                  yield, APY) are never used as the income rate.
                  Platform-stated fees are included by default; turn them off
                  below to see income before fees. Nothing here is a
                  prediction or advice; it is arithmetic on your inputs.
                </p>
              </details>
            </div>
            <div className="sb-calculator-layout">
              <div className="sb-calculator-inputs">
                <div
                  className="sb-calc-mode"
                  role="group"
                  aria-label="Calculator mode"
                >
                  <button
                    type="button"
                    aria-pressed={calcMode === "invest"}
                    onClick={() => setCalcMode("invest")}
                  >
                    From an investment
                  </button>
                  <button
                    type="button"
                    aria-pressed={calcMode === "goal"}
                    onClick={() => setCalcMode("goal")}
                  >
                    Toward a monthly goal
                  </button>
                </div>
                <label className="sb-calc-property">
                  Listing context
                  <span className="sb-calc-property-hint">
                    Sets which platform's stated fees are estimated below
                    and, where the listing publishes rent and a value,
                    pre-fills the rate from that stated ratio. Platform
                    avg-yield metrics are never used as the income rate.
                  </span>
                  <select
                    value={calcId}
                    onChange={(e) => {
                      const l = LISTINGS.find(
                        (x) => x.id === Number(e.target.value),
                      )!;
                      applyListing(l);
                    }}
                  >
                    {LISTINGS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </label>
                <fieldset className="sb-calc-group">
                  <legend>1. Your investment</legend>
                  {(calcMode === "invest"
                    ? [
                        ["Investment ($)", amount, setAmount, "1", "100000000"],
                        [
                          "Annual income rate (%)",
                          rate,
                          (v: string | ((p: string) => string)) => {
                            setRate(v);
                            setRateEdited(true);
                          },
                          "0",
                          "100",
                        ],
                        ["Holding period (years)", years, setYears, "1", "30"],
                      ]
                    : [
                        [
                          "Monthly income goal ($)",
                          goal,
                          setGoal,
                          "1",
                          "1000000",
                        ],
                        [
                          "Annual income rate (%)",
                          rate,
                          (v: string | ((p: string) => string)) => {
                            setRate(v);
                            setRateEdited(true);
                          },
                          "0",
                          "100",
                        ],
                      ]
                  ).map((f) => renderField(f as FieldDef))}
                  {impliedYield != null && (
                    <p className="sb-calc-rate-hint">
                      This listing&apos;s stated rent / value is{" "}
                      {impliedYield.toFixed(2)}% - platform-stated, as
                      published (rent before any management or other costs;
                      add those under Annual costs), not a forecast. The
                      field shows it rounded to 2 decimals; the exact ratio
                      is used until you edit the rate, and is listed in
                      Assumptions and calculation.
                    </p>
                  )}
                </fieldset>
                <fieldset className="sb-calc-group">
                  <legend>2. Fees and costs</legend>
                  {calcMode === "invest" && (
                    <div className="sb-calc-fees">
                      <label>
                        <input
                          type="checkbox"
                          checked={includeFees}
                          onChange={(e) => setIncludeFees(e.target.checked)}
                        />
                        <span>
                          Include {calcListing.platform}&apos;s stated
                          transaction fees: {calcFees.buyPct}% buy +{" "}
                          {calcFees.sellPct}% sell
                          {validCalc && includeFees
                            ? ` (about ${money(base.buyFee + base.sellFee)} on ${money(a)})`
                            : ""}
                          .
                        </span>
                      </label>
                    </div>
                  )}
                  {calcMode === "invest" &&
                    calcListing.platform === "Lofty" && (
                      <label className="sb-calc-check">
                        <input
                          type="checkbox"
                          checked={includeMarketFee}
                          onChange={(e) =>
                            setIncludeMarketFee(e.target.checked)
                          }
                        />
                        <span>
                          Include Lofty&apos;s 2.5% market-order fee (market
                          orders only).
                        </span>
                      </label>
                    )}
                  {(calcMode === "invest"
                    ? [
                        ["Upfront costs ($)", upfront, setUpfront, "0", "100000000"],
                        ["Annual costs ($)", annualFees, setAnnualFees, "0", "100000000"],
                      ]
                    : [
                        ["Annual costs ($)", annualFees, setAnnualFees, "0", "100000000"],
                      ]
                  ).map((f) => renderField(f as FieldDef))}
                </fieldset>
                <fieldset className="sb-calc-group">
                  <legend>3. Assumptions</legend>
                  {(
                    [
                      ["Tax rate on income (%, optional)", taxRate, setTaxRate, "0", "99"],
                    ]
                  ).map((f) => renderField(f as FieldDef))}
                  {calcMode === "invest" && (
                    <>
                      <label className="sb-calc-check">
                        <input
                          type="checkbox"
                          checked={sellAtEnd}
                          onChange={(e) => setSellAtEnd(e.target.checked)}
                        />
                        <span>
                          Sell at the end of the period - includes the stated
                          sell fee and the sale proceeds.
                        </span>
                      </label>
                      {(
                        [
                          [
                            "Compare with leaving it at (% a year, optional)",
                            compareRate,
                            setCompareRate,
                            "0",
                            "100",
                          ],
                        ]
                      ).map((f) => renderField(f as FieldDef))}
                      <div className="sb-calc-chips">
                        <span>Editable examples, not current rates:</span>{" "}
                        <button
                          type="button"
                          onClick={() => setCompareRate("4")}
                        >
                          Savings 4%
                        </button>{" "}
                        <button
                          type="button"
                          onClick={() => setCompareRate("5")}
                        >
                          Bond 5%
                        </button>
                      </div>
                    </>
                  )}
                </fieldset>
                {calcMode === "invest" ? (
                  <p>
                    No reinvestment or compounding is included, and the value
                    is assumed unchanged unless a scenario below says
                    otherwise. Income can fall to zero and capital can be
                    lost. The cost fields stay at $0 unless you know of extra
                    costs; platform transaction fees are already included
                    unless you turn them off. Enter only costs not already
                    counted, to avoid counting them twice.
                  </p>
                ) : (
                  <p>
                    Goal mode works backward from your target: the same rate
                    assumption, solved for the investment instead. The results
                    are estimates, not a plan or a forecast. Income can fall to
                    zero and capital can be lost. Upfront costs are not
                    included; add them separately.
                  </p>
                )}
              </div>
              <div className="sb-calculator-output" aria-live="polite">
                {calcMode === "goal" ? (
                  validGoal ? (
                    <>
                      <span>
                        Capital needed to target {money(g)} per month
                        {tn > 0 ? " after tax" : ""}, after annual costs
                      </span>
                      <table className="sb-calc-table">
                        <thead>
                          <tr>
                            <th>Annual income rate</th>
                            <th>Capital needed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {goalRates.map((grr, i) => (
                            <tr key={i} className={i === 1 ? "is-base" : ""}>
                              <td>
                                {grr.toFixed(1)}%{i === 1 ? " (your rate)" : ""}
                              </td>
                              <td>
                                {money(((goalGrossNeeded + gf) * 100) / grr)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p>
                        At {money(goalInvestment)}, {calcListing.platform}
                        &apos;s stated buy + sell fees would total about{" "}
                        {money(
                          (goalInvestment *
                            (calcFees.buyPct + calcFees.sellPct)) /
                            100,
                        )}{" "}
                        across a purchase and a later sale at the same value.
                        Estimate only - the rate is your own assumption;
                        income can fall to zero and capital can be lost.
                      </p>
                    </>
                  ) : (
                    <p role="alert">
                      Enter a positive monthly goal, a rate above 0 and up to
                      100% and non-negative annual costs.
                    </p>
                  )
                ) : validCalc ? (
                  <>
                    <span>
                      {sellAtEnd
                        ? "Net result after costs and fees, if sold at end"
                        : "Net income after costs and fees"}{" "}
                      - over {t} {t === 1 ? "year" : "years"}
                    </span>
                    <strong>{money(base.net)}</strong>
                    <p className="sb-calc-sentence">
                      Invest {money(a)} in {calcListing.name}, hold {t}{" "}
                      {t === 1 ? "year" : "years"}
                      {sellAtEnd
                        ? " and sell at the same value"
                        : " without selling"}
                      : you put in {money(base.totalIn)}, get back about{" "}
                      {money(base.totalBack)}
                      {sellAtEnd ? "" : " in income"}, and net{" "}
                      {base.net >= 0 ? "+" : ""}
                      {money(base.net)}, about {annualizedNet.toFixed(1)}% a
                      year.
                      {sellAtEnd && valueFall != null && valueFall < 0
                        ? ` The value could fall about ${Math.abs(valueFall * 100).toFixed(0)}% before you lose money.`
                        : ""}
                    </p>
                    <p className="sb-calc-liquidity">
                      A secondary market doesn&apos;t guarantee a buyer or your
                      price.
                    </p>
                    <div className="sb-calc-tiles">
                      <div>
                        <span>You put in</span>
                        <strong>{money(base.totalIn)}</strong>
                        <p>
                          {money(a)}
                          {base.buyFee > 0
                            ? ` + ${money(base.buyFee)} stated buy fee`
                            : ""}
                        </p>
                      </div>
                      <div>
                        <span>You get back</span>
                        <strong>{money(base.totalBack)}</strong>
                        <p>
                          {money(base.periodIncome)} income
                          {sellAtEnd
                            ? ` + ${money(base.saleNet)} sale proceeds after the stated sell fee`
                            : ""}
                        </p>
                      </div>
                      <div>
                        <span>Annualized net</span>
                        <strong>{annualizedNet.toFixed(1)}%</strong>
                        <p>
                          simple average on the money actually in, vs the{" "}
                          {fmtRate(r)}% entered rate
                          {irrNet != null
                            ? `; counting when income arrives gives roughly ${irrNet.toFixed(1)}%`
                            : ""}
                        </p>
                      </div>
                    </div>
                    <dl>
                      <div>
                        <dt>Average monthly income, before transaction fees</dt>
                        <dd>{money(base.annualNet / 12)}</dd>
                      </div>
                      {breakEvenMonths != null && oneTimeCosts > 0 && (
                        <div>
                          <dt>Fee break-even</dt>
                          <dd>
                            about {Math.round(breakEvenMonths)} months of
                            income covers the full buy + sell fees
                            {u > 0 ? " and upfront costs" : ""}
                          </dd>
                        </div>
                      )}
                      {sellAtEnd && (
                        <div>
                          <dt>Value sensitivity</dt>
                          <dd>
                            every 10% change in property value moves this
                            result by about {money(sensitivity10)}
                          </dd>
                        </div>
                      )}
                      {sellAtEnd && (
                        <div>
                          <dt>Value can fall before you lose money</dt>
                          <dd>
                            {valueFall != null && valueFall < 0
                              ? `about ${Math.abs(valueFall * 100).toFixed(0)}%`
                              : valueFall != null
                                ? "nothing - this scenario loses money even if the value is unchanged"
                                : "income alone already covers what you put in"}
                          </dd>
                        </div>
                      )}
                      {validCmp && cmpGain != null && (
                        <div>
                          <dt>vs. leaving it at {cmpNum}%</dt>
                          <dd>
                            that earns about {money(cmpGain)} -{" "}
                            {money(Math.abs(base.net - cmpGain))}{" "}
                            {base.net >= cmpGain ? "less" : "more"} than this
                            scenario
                          </dd>
                        </div>
                      )}
                    </dl>
                    <details className="sb-fee-details">
                      <summary>Fee details</summary>
                      <dl>
                        <div>
                          <dt>
                            Buy fee ({buyEff}% of {money(a)})
                          </dt>
                          <dd>{money(base.buyFee)}</dd>
                        </div>
                        {sellAtEnd && (
                          <div>
                            <dt>
                              Sell fee ({sellEff}% of {money(base.saleValue)})
                            </dt>
                            <dd>{money(base.sellFee)}</dd>
                          </div>
                        )}
                        <div>
                          <dt>Platform fees total</dt>
                          <dd>{money(base.buyFee + base.sellFee)}</dd>
                        </div>
                        <div>
                          <dt>Your costs (upfront + annual)</dt>
                          <dd>{money(u + f * t)}</dd>
                        </div>
                      </dl>
                      <p>{calcFees.note}</p>
                    </details>
                    <p>
                      Monthly average is not a payout schedule. Fees and
                      upfront costs are one-time; they reduce the result, not
                      the income rate.
                    </p>
                    <div className="sb-calc-next">
                      {calcListing.source && (
                        <a
                          className="sb-calc-next-primary"
                          href={calcListing.source}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Check this listing on {calcListing.platform} ↗
                          (direct link)
                        </a>
                      )}
                      <button type="button" onClick={compareAnother}>
                        Compare with another listing
                      </button>
                      <button type="button" onClick={copyScenarioLink}>
                        {copied ? "Copied" : "Copy link to this scenario"}
                      </button>
                      <button type="button" onClick={downloadCsv}>
                        Download CSV
                      </button>
                    </div>
                    <p className="sb-calc-next-note">
                      The listing link is direct, with no referral. Join links
                      on this site are referral links - we may earn a reward.
                    </p>
                  </>
                ) : (
                  <p role="alert">
                    Enter a positive investment, a rate from 0-100%, a period
                    from 1-30 years and non-negative costs.
                  </p>
                )}
              </div>
            </div>
            {calcMode === "invest" && validCalc && (
              <div className="sb-calc-scenarios">
                <h4>
                  Stress test: {t}-year net on {money(a)}
                </h4>
                <div className="sb-calc-table-wrap">
                <table className="sb-calc-table">
                  <thead>
                    <tr>
                      <th></th>
                      {gridRates.map((grr, i) => {
                        const isUser = Math.abs(grr - rUse) < 0.005;
                        const isListing =
                          impliedYield != null &&
                          Math.abs(grr - impliedYield) < 0.005;
                        return (
                          <th key={i}>
                            Income at {fmtRate(grr)}%
                            {isListing
                              ? " (listing-stated*)"
                              : isUser
                                ? " (your rate)"
                                : ""}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {gridRows.map((row) => (
                      <tr key={row.label}>
                        <th>{row.label}</th>
                        {gridRates.map((grr, i) => {
                          const v = scenario(grr, row.dv).net;
                          const cls = [
                            Math.abs(grr - r) < 0.005 && row.dv === 0
                              ? "is-base"
                              : "",
                            v < 0 ? "neg" : "",
                          ]
                            .join(" ")
                            .trim();
                          return (
                            <td key={i} className={cls || undefined}>
                              {money(v)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                <p>
                  {impliedYield != null
                    ? `*The starred column is the selected listing's stated rent vs its published value (source ratio ${impliedYield.toFixed(4)}%, displayed rounded to ${(Math.round(impliedYield * 100) / 100).toFixed(2)}%; the exact ratio is used until you edit the rate), platform-stated and not a forecast. `
                    : ""}
                  Scenario illustrations from your inputs and the stated fees.
                  Informational only, not investment advice.
                </p>
              </div>
            )}
            {calcMode === "invest" && validCalc && seriesMid.length > 1 && (
              <figure className="sb-calc-chart">
                <figcaption>
                  Your cumulative net over {t} {t === 1 ? "year" : "years"}{" "}
                  at your {fmtRate(r)}% rate, with three outcomes marked at
                  sale: value down {cvNum}%, unchanged, up {cvNum}%. The
                  start counts the stated buy fee and any upfront costs; the
                  stated sell fee and any value change apply at sale, in the
                  last step.
                </figcaption>
                <div className="sb-chart-frame">
                  <svg
                    viewBox="0 0 560 210"
                    role="img"
                    aria-label="Line chart of the cumulative net position over time, starting below zero at the up-front costs; the property-value change applies at sale, shown as a spread of three outcomes at the end"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const fx = ((e.clientX - rect.left) / rect.width) * 560;
                      const n = seriesMid.length;
                      const mi = Math.min(
                        Math.max(
                          Math.round(((fx - 44) / (560 - 44 - 110)) * (n - 1)),
                          0,
                        ),
                        n - 1,
                      );
                      setChartTip({ i: mi, px: e.clientX - rect.left });
                    }}
                    onMouseLeave={() => setChartTip(null)}
                  >
                    {(() => {
                      const W = 560;
                      const H = 210;
                      const PL = 44;
                      const PR = 110;
                      const PT = 14;
                      const PB = 26;
                      const n = seriesMid.length;
                      const all = [...seriesLow, ...seriesHigh, 0];
                      const lo = Math.min(...all);
                      const hi = Math.max(...all);
                      const rawSpan = hi - lo || 1;
                      const rawStep = rawSpan / 3;
                      const mag = Math.pow(
                        10,
                        Math.floor(Math.log10(rawStep)),
                      );
                      const step = Math.ceil(rawStep / mag) * mag;
                      /** Axis top is raised to a labeled tick strictly above
                       *  every path, so no line runs off the scale. */
                      let top = Math.ceil(hi / step) * step;
                      if (top <= hi) top += step;
                      const span = top - lo;
                      const X = (ii: number) =>
                        PL + (ii / (n - 1)) * (W - PL - PR);
                      const Y = (v: number) =>
                        H - PB - ((v - lo) / span) * (H - PT - PB);
                      const pts = (arr: number[]) =>
                        arr.map((v, ii) => `${X(ii)},${Y(v)}`).join(" ");
                      const areaD =
                        "M " +
                        pts(seriesMid).split(" ").join(" L ") +
                        ` L ${X(n - 1)},${H - PB} L ${X(0)},${H - PB} Z`;
                      const yTicks: number[] = [];
                      for (
                        let v = Math.ceil(lo / step) * step;
                        v <= top;
                        v += step
                      ) {
                        const rv = Math.round(v * 100) / 100;
                        if (!(lo < 0 && rv === 0)) yTicks.push(rv);
                      }
                      const xTicks: { ii: number; yr: number }[] = [];
                      for (let yr = 0; yr <= t; yr++)
                        xTicks.push({ ii: (yr * (n - 1)) / t, yr });
                      const shortD = (v: number) => `$${Math.round(v)}`;
                      return (
                        <>
                          {yTicks.map((v) => (
                            <g key={v}>
                              <line
                                className="axis"
                                x1={PL}
                                x2={W - PR}
                                y1={Y(v)}
                                y2={Y(v)}
                              />
                              <text x={PL - 5} y={Y(v) + 3} textAnchor="end">
                                {shortD(v)}
                              </text>
                            </g>
                          ))}
                          {xTicks.map(({ ii, yr }) => (
                            <text key={yr} x={X(ii)} y={H - 8} textAnchor="middle">
                              {yr}y
                            </text>
                          ))}
                          {lo < 0 && (
                            <>
                              <line
                                className="zero"
                                x1={PL}
                                x2={W - PR}
                                y1={Y(0)}
                                y2={Y(0)}
                              />
                              <text x={PL - 5} y={Y(0) + 3} textAnchor="end">
                                $0
                              </text>
                            </>
                          )}
                          <path className="area" d={areaD} />
                          <polyline className="line" points={pts(seriesMid)} />
                          <circle
                            className="end-dot"
                            cx={X(0)}
                            cy={Y(seriesMid[0])}
                            r={3.5}
                          />
                          <text
                            className="start-lab"
                            x={X(0) + 8}
                            y={Y(seriesMid[0]) + 3}
                          >
                            <tspan className="end-lab">Start </tspan>
                            <tspan className="end-val">
                              {money(seriesMid[0])}
                            </tspan>
                            {seriesMid[0] < 0 && (
                              <tspan className="end-lab"> up front</tspan>
                            )}
                          </text>
                          {cvNum > 0 && (
                            <>
                              <polyline
                                className="fan"
                                points={`${X(n - 2)},${Y(seriesMid[n - 2])} ${X(n - 1)},${Y(seriesHigh[n - 1])}`}
                              />
                              <polyline
                                className="fan"
                                points={`${X(n - 2)},${Y(seriesMid[n - 2])} ${X(n - 1)},${Y(seriesLow[n - 1])}`}
                              />
                              <line
                                className="spread"
                                x1={X(n - 1)}
                                x2={X(n - 1)}
                                y1={Y(seriesHigh[n - 1])}
                                y2={Y(seriesLow[n - 1])}
                              />
                            </>
                          )}
                          <circle
                            className="end-dot"
                            cx={X(n - 1)}
                            cy={Y(seriesMid[n - 1])}
                            r={4}
                          />
                          {cvNum > 0 && (
                            <>
                              <circle
                                className="end-dot end-dot-alt"
                                cx={X(n - 1)}
                                cy={Y(seriesHigh[n - 1])}
                                r={3.5}
                              />
                              <circle
                                className="end-dot end-dot-alt"
                                cx={X(n - 1)}
                                cy={Y(seriesLow[n - 1])}
                                r={3.5}
                              />
                            </>
                          )}
                          {beMonth != null && (
                            <g>
                              <circle
                                className="dot"
                                cx={X(beMonth)}
                                cy={Y(0)}
                                r={3.5}
                              />
                              <polyline
                                className="leader"
                                points={`${X(beMonth)},${Y(0) - 4} ${Math.min(X(beMonth) + 12, W - PR - 148)},${Math.max(Y(0) - 16, PT + 6)}`}
                              />
                              <rect
                                className="be-chip"
                                x={Math.min(X(beMonth) + 14, W - PR - 146) - 3}
                                y={Math.max(Y(0) - 16, PT + 6) - 5}
                                width="150"
                                height="12"
                                rx="2"
                              />
                              <text
                                className="be-note"
                                x={Math.min(X(beMonth) + 14, W - PR - 146)}
                                y={Math.max(Y(0) - 16, PT + 6) + 4}
                              >
                                Up-front costs covered, about month{" "}
                                {Math.round(beMonth)}
                              </text>
                            </g>
                          )}
                          {(() => {
                            const ends = [
                              ...(cvNum > 0
                                ? [
                                    {
                                      lab: `Up ${cvNum}%`,
                                      val: money(seriesHigh[n - 1]),
                                      y: Y(seriesHigh[n - 1]),
                                    },
                                  ]
                                : []),
                              {
                                lab: "Unchanged",
                                val: money(seriesMid[n - 1]),
                                y: Y(seriesMid[n - 1]),
                              },
                              ...(cvNum > 0
                                ? [
                                    {
                                      lab: `Down ${cvNum}%`,
                                      val: money(seriesLow[n - 1]),
                                      y: Y(seriesLow[n - 1]),
                                    },
                                  ]
                                : []),
                            ].sort((p, q) => p.y - q.y);
                            for (let k = 1; k < ends.length; k++)
                              if (ends[k].y < ends[k - 1].y + 12)
                                ends[k].y = ends[k - 1].y + 12;
                            return ends.map((e) => (
                              <g key={e.lab}>
                                <line
                                  className="end-leader"
                                  x1={X(n - 1) + 8}
                                  x2={W - PR + 16}
                                  y1={e.y}
                                  y2={e.y}
                                />
                                <text x={W - 4} y={e.y + 3} textAnchor="end">
                                  <tspan className="end-lab">{e.lab} </tspan>
                                  <tspan className="end-val">{e.val}</tspan>
                                </text>
                              </g>
                            ));
                          })()}
                        </>
                      );
                    })()}
                  </svg>
                  {chartTip && (
                    <div className="sb-chart-tip" style={{ left: chartTip.px }}>
                      {chartTip.i === 0 ? "Start" : `Month ${chartTip.i}`} ·
                      down {money(seriesLow[chartTip.i])} ·
                      flat {money(seriesMid[chartTip.i])} · up{" "}
                      {money(seriesHigh[chartTip.i])}
                    </div>
                  )}
                </div>
                <div className="sb-chart-sliders">
                  <label>
                    Holding period: {t} {t === 1 ? "year" : "years"}
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={t}
                      onChange={(e) => setYears(e.target.value)}
                    />
                  </label>
                  <label>
                    Value change to test: ±{cvNum}%
                    <input
                      type="range"
                      min="0"
                      max="40"
                      step="1"
                      value={cvNum}
                      onChange={(e) => setValueChg(e.target.value)}
                    />
                  </label>
                </div>
                <div className="sb-calc-chart-legend">
                  <span>Start: {money(seriesMid[0])}</span>
                  {beMonth != null && (
                    <span>
                      Up-front costs covered: about month{" "}
                      {Math.round(beMonth)}
                    </span>
                  )}
                  <span>
                    End (flat): {money(seriesMid[seriesMid.length - 1])}
                  </span>
                  {cvNum > 0 && (
                    <span>
                      Down {cvNum}%: {money(seriesLow[seriesLow.length - 1])} ·
                      Up {cvNum}%: {money(seriesHigh[seriesHigh.length - 1])}
                    </span>
                  )}
                </div>
              </figure>
            )}
            {calcMode === "invest" && validCalc && (
              <div className="sb-calc-side">
                <h4>Side by side: net outcome per listing</h4>
                {pickedListings.length >= 2 ? (
                  <>
                    <div className="sb-calc-table-wrap">
                      <table className="sb-calc-table">
                        <thead>
                          <tr>
                            <th>Listing</th>
                            <th>Stated fees</th>
                            <th>Net at your {fmtRate(rUse)}%</th>
                            <th>Net at stated rent/value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pickedListings.map((l) => {
                            const lf = platformFeesFor(l);
                            const lMarket =
                              l.platform === "Lofty" && includeMarketFee
                                ? 2.5
                                : 0;
                            const lBuy = lf.buyPct + lMarket;
                            const lSell = lf.sellPct + lMarket;
                            const iy = impliedYieldFor(l);
                            return (
                              <tr key={l.id}>
                                <td>{l.name}</td>
                                <td>
                                  {lBuy}% buy + {lSell}% sell
                                </td>
                                <td>
                                  {money(scenario(rUse, 0, lBuy, lSell).net)}
                                </td>
                                <td>
                                  {iy != null
                                    ? `${money(scenario(iy, 0, lBuy, lSell).net)} (${iy.toFixed(2)}%)`
                                    : "Figures not published"}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Same investment, period, costs and toggles for each
                      listing - only the platform&apos;s stated fees and the
                      listing&apos;s stated rent/value ratio change. The
                      stated-figure column is platform-stated, not a
                      forecast. Informational only, not investment advice.
                    </p>
                  </>
                ) : (
                  <p>
                    Tick 2-3 listings on the cards above to see their net
                    outcome side by side here, on the same investment and
                    settings.
                  </p>
                )}
              </div>
            )}
            <details className="sb-calculator-method">
              <summary>Assumptions and calculation</summary>
              <p>The calculator runs these exact formulas, line by line:</p>
              <ol>
                <li>Buy fee = investment × stated buy % (0 when fees are off).</li>
                <li>
                  Annual income = investment × rate ÷ 100 × (1 − tax % ÷ 100)
                  − annual costs.
                </li>
                <li>
                  Period income = annual income × years − upfront costs.
                  Income is not reinvested; the rate stays constant.
                </li>
                <li>
                  Sale value = investment × (1 + value change); sell fee =
                  sale value × stated sell % (only when selling at the end).
                </li>
                <li>
                  You put in = investment + buy fee. You get back = period
                  income + sale value − sell fee.
                </li>
                <li>
                  Net when sold = you get back − you put in. Net when held =
                  period income − buy fee (the principal is still owned).
                </li>
                <li>
                  Annualized net = net ÷ money in ÷ years (simple average).
                  The timing-adjusted figure solves the monthly cash flows
                  for the rate that nets them to zero, annualized as monthly
                  rate × 12.
                </li>
                <li>
                  Fee break-even months = (buy fee + sell fee + upfront
                  costs) ÷ annual income × 12.
                </li>
                <li>
                  Value can fall = (investment + buy fee − period income) ÷
                  (investment × (1 − sell % ÷ 100)) − 1.
                </li>
                <li>
                  Goal mode: capital = (12 × monthly goal ÷ (1 − tax % ÷ 100)
                  + annual costs) × 100 ÷ rate, shown at your rate ±2 points.
                </li>
              </ol>
              <p>
                Stated rent / value = monthly rent x 12, divided by the
                listing&apos;s published value, from the listing&apos;s own
                figures. The exact source ratio (
                {impliedYield != null ? `${impliedYield.toFixed(4)}%` : "3.9518%"}{" "}
                for the selected listing) is displayed rounded to 2 decimals;
                the exact ratio is used in all math until you edit the rate.
              </p>
              <p>
                Fees use the selected platform's stated percentages; Lofty's
                2.5% market-order fee is optional and off by default. The
                stress table moves your rate ±2 points and adds the selected
                listing's stated rent / value at its exact ratio where
                published - platform-stated, never a forecast. The chart
                charges the buy fee and upfront costs up front and applies
                the sell fee at sale. Oceanpoint APY and Lofty avg yield are
                not treated as equivalent cash-income rates. The math lives
                in one tested function; the checks include this review's own
                numbers. Actual income can be lower or zero, and capital can
                be lost. Informational only, not investment advice.
              </p>
            </details>
          </section>
        </section>

        <section id="how" className="sb-section">
          <div className="sb-head">
            <p className="sb-eyebrow">How it works</p>
            <h2>Compare. Calculate. Check.</h2>
          </div>
          <ol className="sb-steps">
            <li className="sb-glass">
              <span className="sb-step-num">01</span>
              <h3>Compare listings</h3>
              <p>
                Pick 2-3 listings. Compare minimum investment, stated yield,
                fees and exit terms. Missing information stays marked as
                unverified.
              </p>
            </li>
            <li className="sb-glass">
              <span className="sb-step-num">02</span>
              <h3>Estimate your income</h3>
              <p>
                Enter your investment, income rate, costs and holding period.
                See estimated income after entered costs, not a promised return
                or future sale value.
              </p>
            </li>
            <li className="sb-glass">
              <span className="sb-step-num">03</span>
              <h3>Check before you invest</h3>
              <p>
                This is a dated listing record. Before investing, confirm
                eligibility, fees, ownership rights and resale rules with the
                platform. A higher yield does not mean lower risk.
              </p>
            </li>
          </ol>
        </section>

        <section id="faq" className="sb-section sb-questions">
          <div className="sb-question-intro">
            <p className="sb-eyebrow">Before you choose</p>
            <h2>
              Straight
              <br />
              <em>answers.</em>
            </h2>
            <p>
              Know what you are comparing.
              <br />
              Know what still needs checking.
            </p>
            <span className="sb-question-demo">
              Source-linked listings · No capital handled
            </span>
          </div>
          <div className="sb-question-list">
            <details open={faqOpen === 0}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen((current) => (current === 0 ? null : 0));
                }}
              >
                <span className="sb-question-no">01</span>
                <span>Are these real investment listings?</span>
                <span className="sb-question-icon" aria-hidden="true" />
              </summary>
              <div className="sb-question-answer">
                <p>
                  These records and photos were captured from Lofty and
                  Oceanpoint's live marketplaces on 4 Nov 2026. They are dated
                  records, not live offers or independently verified
                  investment advice. Oceanpoint
                  coverage is incomplete: 21 captured against 77 reported. Check
                  the source for current availability, terms and eligibility.
                </p>
              </div>
            </details>
            <details open={faqOpen === 1}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen((current) => (current === 1 ? null : 1));
                }}
              >
                <span className="sb-question-no">02</span>
                <span>What does the calculator estimate?</span>
                <span className="sb-question-icon" aria-hidden="true" />
              </summary>
              <div className="sb-question-answer">
                <p>
                  Cash income from the amount, annual rate, period and costs you
                  enter. It assumes a constant rate and no reinvestment. It does
                  not include taxes, currency changes or a future sale value, so
                  it is not total investment return. Actual income can be lower
                  or zero.
                </p>
              </div>
            </details>
            <details open={faqOpen === 2}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen((current) => (current === 2 ? null : 2));
                }}
              >
                <span className="sb-question-no">03</span>
                <span>Can I invest from my country?</span>
                <span className="sb-question-icon" aria-hidden="true" />
              </summary>
              <div className="sb-question-answer">
                <p>
                  Lofty publishes 18+ / identity verification rules with
                  sanctions and local-law restrictions. Oceanpoint requires an
                  account and KYC for BSPTs and says some countries are
                  unsupported. These are platform-wide rules, not an approval
                  for you or every offering. Selecting a country does not filter
                  listings or confirm legal access. Read the source notes on
                  each card and confirm the specific offering's restrictions
                  before investing.
                </p>
              </div>
            </details>
            <details open={faqOpen === 3}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen((current) => (current === 3 ? null : 3));
                }}
              >
                <span className="sb-question-no">04</span>
                <span>Does a higher yield mean a better investment?</span>
                <span className="sb-question-icon" aria-hidden="true" />
              </summary>
              <div className="sb-question-answer">
                <p>
                  No. Compare the costs, rental assumptions, ownership rights
                  and resale limits as well as yield. A stated yield is an
                  estimate, not a guarantee. You can lose income and capital.
                  Slicebase helps you compare; it does not provide personalized
                  investment advice.
                </p>
              </div>
            </details>
            <details open={faqOpen === 4}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setFaqOpen((current) => (current === 4 ? null : 4));
                }}
              >
                <span className="sb-question-no">05</span>
                <span>Do I invest through Slicebase?</span>
                <span className="sb-question-icon" aria-hidden="true" />
              </summary>
              <div className="sb-question-answer">
                <p>
                  No. Slicebase is an informational comparison directory. It
                  does not accept investment deposits, hold tokens or execute
                  investments. Any investment would be made directly with the
                  platform, under its own terms.
                </p>
              </div>
            </details>
          </div>
        </section>
        <section id="about" className="sb-section sb-info-page">
          <p className="sb-eyebrow">About</p>
          <h2>What Slicebase is.</h2>
          <p className="sb-info-text">
            Slicebase is an independent, informational comparison directory
            for tokenized real estate. It puts public listing facts from Lofty
            and Oceanpoint side by side - prices, platform-stated fees, resale
            and access rules - so visitors can compare before they invest.
            Slicebase never holds money or tokens, sells nothing itself and
            gives no investment advice. It may earn a referral reward when a
            visitor joins a platform through its links; rankings are never
            paid for, and referral rewards never change what is shown.
          </p>
        </section>

        <section id="methodology" className="sb-section sb-info-page">
          <p className="sb-eyebrow">Methodology</p>
          <h2>How the data is collected.</h2>
          <p className="sb-info-text">
            Listing facts and one photo per property are collected from the
            platforms&apos; own public pages. This directory was captured on 4
            Nov 2026; per-listing values and monthly rents were refreshed from
            Lofty&apos;s property pages on 5 Nov 2026. It covers 84 Lofty and
            21 Oceanpoint listings; Oceanpoint reports 77 properties, so that
            coverage is incomplete. Platform-stated fees (checked 5 Nov 2026)
            come from the platforms&apos; own pages and are linked on every
            card. Figures labeled as a platform&apos;s own (avg yield, value
            tag) are republished verbatim; where the platform does not state a
            basis, the card says so. Nothing here is a live quote, and
            availability or terms can change - the source link on every card
            is the reference of record. Exact order minimums and full offering
            costs remain unverified and are marked as such.
          </p>
          <ul className="sb-info-list">
            <li>
              &ldquo;Indexed&rdquo; counts only listings captured in this
              directory, as published. A few listings are multi-property
              packages, DAOs or individual units of one building.
            </li>
            <li>
              The valuation total covers the 103 of 105 listings that publish
              a value (82 Lofty, 21 Oceanpoint); 2 Lofty DAOs publish none.
            </li>
            <li>
              Lofty publishes a sector per listing; Oceanpoint does not, so
              Oceanpoint sectors are read from each listing's own title.
            </li>
            <li>
              A secondary market does not guarantee a buyer or your price.
            </li>
          </ul>
        </section>
      </main>

      <footer className="sb-footer">
        <div className="sb-footer-invite">
          <div>
            <p className="sb-eyebrow">A clearer starting point</p>
            <h2>
              See the whole picture.
              <br />
              <em>Then choose your slice.</em>
            </h2>
          </div>
          <div className="sb-footer-cta">
            <a className="sb-footer-action" href="#compare">
              Compare listings <span aria-hidden="true">&rarr;</span>
            </a>
            <div className="sb-footer-signup">
            <p>
              Referral links - we may earn a reward.
            </p>
            <a
              className="sb-footer-action"
              href={REFERRAL.Lofty.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              Invest now <span aria-hidden="true">↗</span>
            </a>
            <a
              className="sb-footer-action"
              href={REFERRAL.Oceanpoint.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              Join Oceanpoint <span aria-hidden="true">↗</span>
            </a>
            </div>
          </div>
        </div>
        <div className="sb-footer-info">
          <p>
            Independent by design.
            <br />A comparison directory for tokenized real estate.
            <br />
            No custody. No investment advice.
          </p>
          <nav aria-label="Footer">
            <a href="#how">How it works</a>
            <a href="#income">Calculator</a>
            <a href="#faq">FAQ</a>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
        <div className="sb-footer-signature">
          <img src={brandSymbol} alt="" />
          <span>Slicebase</span>
        </div>
        <div className="sb-footer-bottom">
          <span>Source records · Informational only</span>
          <p>
            Listing facts and one photo per property are sourced from Lofty and
            Oceanpoint, checked 4 Nov 2026. 84 Lofty and 21 Oceanpoint records
            captured; Oceanpoint reports 77, so its coverage is incomplete. Not
            live quotes. Referral links may earn us rewards. Data reuse
            permission does not imply endorsement. Fractional property
            carries
            risk, including loss of capital.
          </p>
        </div>
      </footer>
    </div>
  );
}
