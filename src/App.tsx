import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextLink } from "./components/TextLink";
import "./style.css";
import brandSymbol from "./photos/slicebase-symbol.png";
import listingData from "./listings.json";
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
  valuation: string | null;
  rawMetrics: string | null;
};
const LISTINGS = listingData as Listing[];
const valuationNumber = (v: string | null) =>
  v ? Number(v.replace(/[^0-9.]/g, "")) : 0;
const compactMoney = (n: number) =>
  n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : money(n);
const INDEX_STATS = (() => {
  const ocean = LISTINGS.filter((l) => l.platform === "Oceanpoint");
  return {
    listings: LISTINGS.length,
    platforms: new Set(LISTINGS.map((l) => l.platform)).size,
    oceanCount: ocean.length,
    oceanValue: ocean.reduce((sum, l) => sum + valuationNumber(l.valuation), 0),
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
/** Platform-stated transaction fees, checked 4 Nov 2026 (see each card's
 *  Terms, scope & sources). Applied to the invested amount with no change in
 *  property value; estimates only, never a listing forecast. */
function platformFeesFor(l: Listing): {
  buyPct: number;
  sellPct: number;
  note: string;
} {
  if (l.platform === "Lofty")
    return {
      buyPct: 2.5,
      sellPct: 3,
      note: "Lofty states 2.5% on purchases and 3% on sales; applied here to the invested amount with no change in property value. Market orders can add a separate 2.5% market-maker fee, not included. Property, payment or network costs may also apply.",
    };
  return {
    buyPct: 1.5,
    sellPct: 1.5,
    note: "Oceanpoint states a 1.5% transaction fee; applied here to both the purchase and a later sale of the invested amount. Network gas and any property or issuer costs are extra and not included.",
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
  "Snapshot: 4 Nov 2026. 84 Lofty listings and 21 Oceanpoint listings captured from their catalogs. Oceanpoint reports 77 properties; 56 are not captured in this view, so coverage is incomplete. Quotes and status can change. Platform terms below are checked separately from property metrics. Exact order minimums and full property costs remain unverified. Country selection is context only, not an eligibility filter.";

type Term = { label: string; value: string };
function termsFor(l: Listing): Term[] {
  const lofty = l.platform === "Lofty";
  return [
    { label: "Minimum investment", value: "Exact order minimum unverified" },
    { label: "Occupancy", value: "Not disclosed in the 4 Nov snapshot" },
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
      &ldquo;Join&rdquo; opens the platform&rsquo;s sign-up page via a referral
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
      Join {platform} &#8599;
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

  const [calcId, setCalcId] = useState(1);
  const [calcMode, setCalcMode] = useState<"invest" | "goal">("invest");
  const [goal, setGoal] = useState("500");
  const [amount, setAmount] = useState("1000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("5");
  const [upfront, setUpfront] = useState("0");
  const [annualFees, setAnnualFees] = useState("0");
  const [includeFees, setIncludeFees] = useState(true);
  const calcListing = LISTINGS.find((l) => l.id === calcId) ?? LISTINGS[0];
  const calcFees = platformFeesFor(calcListing);
  const calculatorRef = useRef<HTMLElement>(null);
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
  const gross = (a * r) / 100;
  const annual = gross - f;
  const platformFeeEstimate = includeFees
    ? (a * (calcFees.buyPct + calcFees.sellPct)) / 100
    : 0;
  const income = annual * t - u - platformFeeEstimate;
  const goalNumeric = [goal, rate, annualFees].map(Number);
  const validGoal =
    [goal, rate, annualFees].every((v) => v.trim() !== "") &&
    goalNumeric.every(Number.isFinite) &&
    goalNumeric[0] > 0 &&
    goalNumeric[0] <= 1000000 &&
    goalNumeric[1] > 0 &&
    goalNumeric[1] <= 100 &&
    goalNumeric[2] >= 0;
  const [g, gr, gf] = goalNumeric;
  const goalAnnualAfterCosts = g * 12;
  const goalInvestment = ((goalAnnualAfterCosts + gf) * 100) / gr;
  const openCalculator = (listing: Listing) => {
    setCalcId(listing.id);
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
            <a href="#compare">Compare</a>
            <a href="#how">How it works</a>
            <a href="#income">Calculator</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="sb-nav-explore" href="#compare">
            Explore listings <span aria-hidden="true">↗</span>
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
            Compare offerings <span aria-hidden="true">↗</span>
          </a>
          <a href="#how" onClick={() => setMenuOpen(false)}>
            How it works <span aria-hidden="true">↗</span>
          </a>
          <a href="#income" onClick={() => setMenuOpen(false)}>
            Calculator <span aria-hidden="true">↗</span>
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ <span aria-hidden="true">↗</span>
          </a>
          <p>Dated source snapshots · Informational only</p>
        </nav>
      </header>

      <main id="top">
        <section className="sb-hero">
          <div className="sb-hero-copy">
            <h1>
              <span>
                A slice of <em>property.</em>
              </span>
              <span>A clearer choice.</span>
            </h1>
            <p className="sb-sub">
              Compare tokenized properties across platforms. See the costs,
              terms and risks before you invest.
            </p>
            <div className="sb-actions">
              <a className="sb-btn sb-btn--solid" href="#compare">
                Compare offerings <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="sb-quiet-link" href="#how">
                How it works <span aria-hidden="true">&#8599;</span>
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
            <div className="sb-sculpture-caption">
              <span />
              One property. Many possibilities.
            </div>
          </div>
        </section>

        <div className="sb-below-hero">
          <p className="sb-eyebrow">
            Independent &middot; informational &middot; no custody
          </p>
          <ul className="sb-strip">
            <li>
              <strong>Side-by-side offerings</strong>
              <span>Yields, fees and terms in one view</span>
            </li>
            <li>
              <strong>Access rules up front</strong>
              <span>Eligibility and restrictions flagged on every card</span>
            </li>
            <li>
              <strong>Independent by design</strong>
              <span>No sponsored rankings</span>
            </li>
            <li>
              <strong>Informational only</strong>
              <span>We never hold money or tokens</span>
            </li>
          </ul>
        </div>

        <section id="compare" className="sb-section sb-directory">
          <div className="sb-directory-head">
            <div className="sb-head">
              <p className="sb-eyebrow">The directory</p>
              <h2>Compare properties.</h2>
              <p className="sb-section-sub">
                One view. The numbers that matter.
              </p>
            </div>
            <span className="sb-demo-label">
              Source-linked snapshot · Not live quotes
            </span>
          </div>
          <div className="sb-index-banner">
            <div>
              <strong>{INDEX_STATS.listings}</strong>
              <span>
                listings indexed across {INDEX_STATS.platforms} platforms
              </span>
            </div>
            <div>
              <strong>{compactMoney(INDEX_STATS.oceanValue)}</strong>
              <span>
                published valuations indexed ({INDEX_STATS.oceanCount}{" "}
                Oceanpoint listings, USD)
              </span>
            </div>
          </div>
          <p className="sb-index-note">
            Listings captured 4 Nov 2026; this page last reviewed 5 Nov
            2026. &ldquo;Indexed&rdquo; counts only listings captured in this
            directory, as published - a few listings are multi-property
            packages, DAOs or individual units of one building. Per-listing
            valuations are not published in our Lofty snapshot, so the
            valuation total above covers Oceanpoint listings only. Oceanpoint
            sectors are read from each listing's own title. A secondary
            market does not guarantee a buyer or your price.{" "}
            <TextLink href="https://oceanpoint.fi/stats">
              Oceanpoint stats ↗
            </TextLink>
          </p>
          <section
            id="income"
            ref={calculatorRef}
            className="sb-calculator"
            aria-labelledby="calculator-title"
          >
            <div className="sb-calculator-heading">
              <p className="sb-eyebrow">Run the numbers</p>
              <h3 id="calculator-title">What could the income look like?</h3>
              <p>
                Your own cash-income scenario, separate from platform metrics.
                Run it from an investment amount, or backward from a monthly
                income goal. The 8% starting rate is an example, not a listing
                forecast. Platform APY and avg yield are never loaded as
                cash-income assumptions. Platform-stated transaction fees are
                included by default; turn them off below to see income before
                fees.
              </p>
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
                  Property context
                  <span className="sb-calc-property-hint">
                    Sets which platform's stated fees are estimated below.
                    Platform yields are never loaded into this calculator.
                  </span>
                  <select
                    value={calcId}
                    onChange={(e) => {
                      const l = LISTINGS.find(
                        (x) => x.id === Number(e.target.value),
                      )!;
                      setCalcId(l.id);
                    }}
                  >
                    {LISTINGS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </label>
                {calcMode === "invest" && (
                  <div className="sb-calc-fees">
                    <label>
                      <input
                        type="checkbox"
                        checked={includeFees}
                        onChange={(e) => setIncludeFees(e.target.checked)}
                      />
                      <span>
                        Include {calcListing.platform}&apos;s stated transaction
                        fees: {calcFees.buyPct}% buy + {calcFees.sellPct}% sell
                        {validCalc && includeFees
                          ? ` (about ${money(platformFeeEstimate)} on ${money(a)})`
                          : ""}
                        .
                      </span>
                    </label>
                    <p>{calcFees.note}</p>
                  </div>
                )}
                {(calcMode === "invest"
                  ? [
                      [
                        "Investment ($)",
                        amount,
                        setAmount,
                        "1",
                        "100000000",
                      ],
                      ["Annual income rate (%)", rate, setRate, "0", "100"],
                      ["Holding period (years)", years, setYears, "1", "30"],
                      [
                        "Upfront costs ($)",
                        upfront,
                        setUpfront,
                        "0",
                        "100000000",
                      ],
                      [
                        "Annual costs ($)",
                        annualFees,
                        setAnnualFees,
                        "0",
                        "100000000",
                      ],
                    ]
                  : [
                      [
                        "Monthly income goal ($)",
                        goal,
                        setGoal,
                        "1",
                        "1000000",
                      ],
                      ["Annual income rate (%)", rate, setRate, "0", "100"],
                      [
                        "Annual costs ($)",
                        annualFees,
                        setAnnualFees,
                        "0",
                        "100000000",
                      ],
                    ]
                ).map(([label, value, setter, min, max]) => (
                  <label key={String(label)}>
                    {String(label)}
                    <input
                      type="number"
                      inputMode="decimal"
                      min={String(min)}
                      max={String(max)}
                      step="any"
                      value={String(value)}
                      onChange={(e) =>
                        (
                          setter as React.Dispatch<React.SetStateAction<string>>
                        )(e.target.value)
                      }
                    />
                  </label>
                ))}
                {calcMode === "invest" ? (
                  <p>
                    No reinvestment, tax or change in property value is
                    included. Income can fall to zero and capital can be lost.
                    The cost fields stay at $0 for any extra costs you know
                    of; platform transaction fees are already included above
                    unless you turn them off. Enter only costs not already
                    counted, to avoid counting them twice.
                  </p>
                ) : (
                  <p>
                    Goal mode works backward from your target: the same rate
                    assumption, solved for the investment instead. The result is
                    an estimate, not a plan or a forecast. Income can fall to
                    zero and capital can be lost. Upfront costs are not included
                    in the result; add them separately. Platform transaction
                    fees are not included either - on {calcListing.platform}{" "}
                    they run about {calcFees.buyPct + calcFees.sellPct}% of the
                    amount invested across a purchase and later sale.
                  </p>
                )}
              </div>
              <div className="sb-calculator-output" aria-live="polite">
                {calcMode === "goal" ? (
                  validGoal ? (
                    <>
                      <span>
                        Investment needed to target {money(g)} per month
                      </span>
                      <strong>{money(goalInvestment)}</strong>
                      <dl>
                        <div>
                          <dt>Target annual income after costs</dt>
                          <dd>{money(goalAnnualAfterCosts)}</dd>
                        </div>
                        <div>
                          <dt>Annual income before costs</dt>
                          <dd>{money(goalAnnualAfterCosts + gf)}</dd>
                        </div>
                        <div>
                          <dt>Assumed annual income rate</dt>
                          <dd>{gr}%</dd>
                        </div>
                      </dl>
                      <p>
                        Estimate only. The rate is your own assumption; income
                        can fall to zero and capital can be lost.
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
                      Income over {t} {t === 1 ? "year" : "years"}, after
                      entered costs
                    </span>
                    <strong>{money(income)}</strong>
                    <dl>
                      <div>
                        <dt>Average monthly income*</dt>
                        <dd>{money(annual / 12)}</dd>
                      </div>
                      <div>
                        <dt>Annual income after entered costs</dt>
                        <dd>{money(annual)}</dd>
                      </div>
                      <div>
                        <dt>Income before costs, over period</dt>
                        <dd>{money(gross * t)}</dd>
                      </div>
                      {includeFees && (
                        <div>
                          <dt>Estimated platform transaction fees</dt>
                          <dd>{money(platformFeeEstimate)}</dd>
                        </div>
                      )}
                      <div>
                        <dt>Total costs, including fees</dt>
                        <dd>{money(u + f * t + platformFeeEstimate)}</dd>
                      </div>
                    </dl>
                    <p>
                      *Monthly average, not a payout schedule. Upfront costs are
                      deducted from the period total, not the monthly figure.
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
            <details className="sb-calculator-method">
              <summary>Assumptions and calculation</summary>
              <p>
                Annual income = investment × annual rate / 100 − annual costs.
                Period income = annual income × years − upfront costs. The rate
                stays constant; income is not reinvested. Investment amount
                excludes upfront costs. The rate is your own assumption, not a
                copied platform return. Oceanpoint APY and Lofty avg yield are
                not treated as equivalent cash-income rates. No taxes, currency
                changes, appreciation, depreciation or sale proceeds are
                included. This is an income estimate, not total return, IRR or a
                forecast. Actual income can be lower or zero, and capital can be
                lost. In goal mode, required investment = (12 × monthly goal +
                annual costs) × 100 ÷ annual rate; every limit above applies
                unchanged. When platform transaction fees are included, the
                selected platform's stated buy and sell percentages (see the
                card's Terms, scope & sources) are applied to the investment
                and deducted from period income; the sale fee assumes no
                change in property value.
              </p>
            </details>
          </section>
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
                <option value="name">Property name</option>
                <option value="platform">Platform</option>
              </select>
            </div>
          </div>
          <p className="sb-directory-notice">{ELIGIBILITY_NOTE}</p>
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
                    <span>
                      {l.platform} photo · {String(l.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sb-property-body">
                    <div className="sb-property-platform">
                      <span>{l.platform}</span>
                      <span>{l.status}</span>
                    </div>
                    <h3>{l.name}</h3>
                    <p className="sb-property-location">{l.city}</p>
                    <PropertyBadges listing={l} />
                    <dl className="sb-property-metrics">
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
                    </dl>
                    <p className="sb-yield-note">
                      {l.platform === "Lofty"
                        ? "\u201Cavg yield\u201D and the value tag are Lofty's own published figures for this listing; whether the yield is gross or net, and over what period, is not stated in our snapshot."
                        : "APY is Oceanpoint's own published figure, as the platform defines it."}{" "}
                      A higher yield does not mean lower risk.
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
                    <p className="sb-source-line">
                      Captured 4 Nov 2026 · direct property link under Terms,
                      scope &amp; sources
                      {l.assetSource && (
                        <>
                          {" "}
                          ·{" "}
                          <TextLink href={l.assetSource}>
                            Token contract ↗
                          </TextLink>
                        </>
                      )}
                    </p>
                    <div className="sb-property-actions">
                      <JoinLink platform={l.platform} />
                      <button
                        type="button"
                        className="file-hover-underline"
                        onClick={() => openCalculator(l)}
                      >
                        Estimate income ↗
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
                    <ReferralNote />
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
                Show more properties
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
                  ? "Choose 2-3 properties to compare."
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
                      Estimate income ↗
                    </button>
                    <ReferralNote />
                  </article>
                ))}
              </div>
              <p className="sb-comparison-note">
                Before choosing: verify total fees, occupancy assumptions,
                ownership rights, country restrictions and how you can sell.
                These are source snapshots, not independently audited
                investments. Platform metric definitions differ; APY and avg
                yield are not directly comparable. A higher stated yield is not
                evidence of a better investment.
              </p>
            </div>
          )}
        </section>

        <section id="how" className="sb-section">
          <div className="sb-head">
            <p className="sb-eyebrow">How it works</p>
            <h2>Compare. Calculate. Check.</h2>
          </div>
          <ol className="sb-steps">
            <li className="sb-glass">
              <span className="sb-step-num">01</span>
              <h3>Compare properties</h3>
              <p>
                Pick 2-3 properties. Compare minimum investment, stated yield,
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
                This is a dated listing snapshot. Before investing, confirm
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
              Source-linked snapshot · No capital handled
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
                  snapshots, not live offers or independently verified
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
              Compare offerings <span aria-hidden="true">↗</span>
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
              Join Lofty <span aria-hidden="true">↗</span>
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
          <span>Source snapshots · Informational only</span>
          <p>
            Listing facts and one photo per property are sourced from Lofty and
            Oceanpoint, checked 4 Nov 2026. 84 Lofty and 21 Oceanpoint records
            captured; Oceanpoint reports 77, so its coverage is incomplete. Not
            live quotes. The platforms do not sponsor or endorse Slicebase.
            Fractional property carries
            risk, including loss of capital.
          </p>
        </div>
      </footer>
    </div>
  );
}
