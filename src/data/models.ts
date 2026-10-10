export type Tier = "budget" | "mid" | "premium";

export interface StationModel {
  /** URL slug: /power-stations/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons, e.g. "DELTA Pro 3". */
  shortName: string;
  brand: string;
  tier: Tier;
  releaseYear: number;
  /** Battery capacity in watt-hours */
  capacityWh: number;
  /** Continuous AC output in watts */
  outputW: number;
  /** Surge/peak AC output in watts */
  surgeW: number;
  /** Battery chemistry, e.g. "LiFePO4" */
  batteryType: string;
  /** Rated charge cycles to 80% capacity (undefined when the maker rates differently) */
  cycleCount?: number;
  /** Max solar input in watts */
  solarInputW: number;
  /** Human-readable AC recharge summary */
  rechargeTime: string;
  /** Weight in pounds */
  weightLb: number;
  /** Max expandable capacity in Wh (undefined when not expandable) */
  expandableWh?: number;
  /** UPS switchover time in ms (undefined when not published) */
  upsMs?: number;
  /** typical US street price range (sale low → list high) */
  priceLow: number;
  priceHigh: number;
  /** Caveats shown under the spec table (variant differences, unverified figures). */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** One-paragraph verdict (no numeric scores on this site — research-based only) */
  verdict: string;
  sources: string[];
}

/**
 * Specs and US street prices as of October 10, 2026, compiled from manufacturer
 * US pages, dated retailer listings and published reviews (see `sources`).
 * Treat as guidance — prices move weekly; verify before buying.
 */
export const MODELS: StationModel[] = [
  {
    id: "ecoflow-delta-pro-3",
    name: "EcoFlow DELTA Pro 3",
    shortName: "DELTA Pro 3",
    brand: "EcoFlow",
    tier: "premium",
    releaseYear: 2024,
    capacityWh: 4096,
    outputW: 4000,
    surgeW: 8000,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 2600,
    rechargeTime: "0–80% in ~50 min (X-Stream AC)",
    weightLb: 113.5,
    expandableWh: 12000,
    upsMs: 10,
    priceLow: 3199,
    priceHigh: 3699,
    specNotes: ["X-Boost supports resistive loads up to 6000W.", "51.5 kg — rolls on wheels, but this is not a carry unit."],
    query: "EcoFlow DELTA Pro 3 portable power station",
    bestFor: "Whole-home backup during multi-day outages",
    pros: [
      "4096Wh with 4000W continuous output runs fridges, well pumps and power tools",
      "2600W dual-MPPT solar input — among the fastest solar recharge in its class",
      "10ms UPS switchover protects PCs and networking gear",
      "Expandable to 12kWh with extra batteries",
    ],
    cons: [
      "113 lb — effectively stationary once placed",
      "Premium price; frequent sales make list price a poor reference",
    ],
    verdict:
      "The DELTA Pro 3 is the closest thing to a silent, plug-and-play home generator: 4kWh of LiFePO4 storage, 4000W of continuous output and solar input fast enough to meaningfully recharge during a single sunny day. Buy it when whole-home backup is the job; buy smaller when it isn't.",
    sources: ["ecoflow.com", "portablepowerstations.co (Jul 2026)", "convertedvan.co"],
  },
  {
    id: "anker-solix-f3800",
    name: "Anker SOLIX F3800",
    shortName: "SOLIX F3800",
    brand: "Anker",
    tier: "premium",
    releaseYear: 2024,
    capacityWh: 3840,
    outputW: 6000,
    surgeW: 9000,
    batteryType: "LiFePO4",
    cycleCount: 3000,
    solarInputW: 2400,
    rechargeTime: "0–80% in ~1.5 h (solar, ideal sun)",
    weightLb: 132,
    expandableWh: 26900,
    upsMs: 20,
    priceLow: 1799,
    priceHigh: 3999,
    specNotes: ["List is $3,999 but US street prices are frequently $1,800–$2,200 on sale.", "Dual-voltage 120V/240V output from a single unit."],
    query: "Anker SOLIX F3800 portable power station",
    bestFor: "240V appliances and EV trickle-charging without a panel install",
    pros: [
      "6000W dual-voltage output — runs dryers, well pumps and 240V tools from one box",
      "Direct EV charging via NEMA 14-50, plus RV-ready TT-30",
      "Expands to 26.9kWh (53.8kWh with two units) for week-long outages",
      "Deep sale discounts make it the value flagship when priced under $2,200",
    ],
    cons: [
      "132 lb — the heaviest single unit we track",
      "List price is misleading; only buy on sale",
    ],
    verdict:
      "The F3800's party trick is 6000W of split-phase power from one portable box — the only station here that can directly feed 240V loads and meaningfully add miles to an EV. On sale under ~$2,200 it undercuts every rival on watts per dollar.",
    sources: ["anker.com", "bhphotovideo.com specs", "ad-hoc-news.de (Sep 2026)"],
  },
  {
    id: "jackery-explorer-2000-plus",
    name: "Jackery Explorer 2000 Plus",
    shortName: "Explorer 2000 Plus",
    brand: "Jackery",
    tier: "premium",
    releaseYear: 2023,
    capacityWh: 2043,
    outputW: 3000,
    surgeW: 6000,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 1200,
    rechargeTime: "~2 h (AC wall outlet)",
    weightLb: 61.5,
    expandableWh: 24000,
    priceLow: 2399,
    priceHigh: 2599,
    specNotes: ["Jackery rates lifespan as 10 years rather than publishing a cycle count; ~4000 cycles is the commonly cited figure.", "Runs at ~30 dB — among the quietest full-size units."],
    query: "Jackery Explorer 2000 Plus portable power station",
    bestFor: "Expandable home backup that starts at 2kWh",
    pros: [
      "3000W output from a 2kWh base — strong watts-per-Wh",
      "Expansion path from 2kWh all the way to 24kWh with battery packs",
      "Whisper-quiet ~30 dB operation",
      "5-year warranty with registration",
    ],
    cons: [
      "Solar input caps at 1200W — slower solar recharge than EcoFlow/Anker rivals",
      "Base 2kWh is small for whole-home use without add-on batteries",
    ],
    verdict:
      "The 2000 Plus is the modular pick: start with 2kWh and 3000W today, bolt on battery packs up to 24kWh as needs grow. It's the quietest big unit here, but solar recharge is the slowest of the flagships.",
    sources: ["jackery.com", "amazon.ca listing"],
  },
  {
    id: "bluetti-elite-200-v2",
    name: "BLUETTI Elite 200 V2",
    shortName: "Elite 200 V2",
    brand: "BLUETTI",
    tier: "mid",
    releaseYear: 2024,
    capacityWh: 2073,
    outputW: 2600,
    surgeW: 3900,
    batteryType: "LiFePO4",
    cycleCount: 6000,
    solarInputW: 1000,
    rechargeTime: "0–80% in ~50 min (AC)",
    weightLb: 53.4,
    priceLow: 899,
    priceHigh: 1499,
    specNotes: ["6000-cycle rating is the highest cycle life in our database.", "Not expandable — what you buy is what you get."],
    query: "BLUETTI Elite 200 V2 portable power station",
    bestFor: "Longest battery lifespan in a mid-size unit",
    pros: [
      "6000-cycle LiFePO4 rating — roughly double most rivals",
      "2600W output handles microwaves, kettles and power tools",
      "Compact 53 lb chassis for the capacity",
      "Sub-50-minute fast AC recharge",
    ],
    cons: [
      "No expansion batteries — capacity is fixed at 2073Wh",
      "1000W solar input is modest for the class",
    ],
    verdict:
      "If you plan to cycle a station daily — off-grid cabin, vanlife, time-of-use arbitrage — the Elite 200 V2's 6000-cycle rating is the standout spec in this guide. The trade-off is zero expandability.",
    sources: ["amazon.com listing", "bluetti.com"],
  },
  {
    id: "bluetti-ac200l",
    name: "BLUETTI AC200L",
    shortName: "AC200L",
    brand: "BLUETTI",
    tier: "mid",
    releaseYear: 2023,
    capacityWh: 2048,
    outputW: 2400,
    surgeW: 3600,
    batteryType: "LiFePO4",
    cycleCount: 3000,
    solarInputW: 1200,
    rechargeTime: "~1 h (2400W AC input)",
    weightLb: 61.6,
    expandableWh: 8192,
    upsMs: 20,
    priceLow: 999,
    priceHigh: 1599,
    specNotes: ["Wide 12–145V solar input range accepts third-party panels easily."],
    query: "BLUETTI AC200L portable power station",
    bestFor: "Solar-first setups with third-party panels",
    pros: [
      "1200W solar input with a wide voltage range — panel-friendly",
      "Expands to 8.2kWh with B230/B300 batteries",
      "2400W AC input recharges in about an hour",
      "Mature platform with a big owner community",
    ],
    cons: [
      "61.6 lb — heavy for a 2kWh class unit",
      "App and firmware have more owner complaints than EcoFlow/Anker",
    ],
    verdict:
      "The AC200L is the solar hobbyist's pick: 1200W of MPPT with a voltage range that welcomes third-party panels, plus real expansion headroom. It's heavier and less polished than newer rivals, but the platform is proven.",
    sources: ["amazon.com listing", "solarwaypoint.com comparison"],
  },
  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow DELTA 2 Max",
    shortName: "DELTA 2 Max",
    brand: "EcoFlow",
    tier: "mid",
    releaseYear: 2023,
    capacityWh: 2048,
    outputW: 2400,
    surgeW: 4800,
    batteryType: "LiFePO4",
    cycleCount: 3000,
    solarInputW: 1000,
    rechargeTime: "~1.4 h (AC)",
    weightLb: 50,
    expandableWh: 6144,
    upsMs: 20,
    priceLow: 1099,
    priceHigh: 1699,
    query: "EcoFlow DELTA 2 Max portable power station",
    bestFor: "The safe mainstream 2kWh pick",
    pros: [
      "2400W output with 4800W surge covers nearly all household loads",
      "Expands to 6.1kWh with DELTA 2 extra batteries",
      "Dual 500W MPPT solar inputs",
      "50 lb — the lightest 2kWh unit here",
    ],
    cons: [
      "1000W combined solar input lags the AC200L and F3000",
      "Frequently replaced on deal pages by the newer DELTA 3 series",
    ],
    verdict:
      "The DELTA 2 Max is the default answer in the 2kWh class: enough output for a fridge plus cooking, expandable, and light enough to actually carry. Shop it against the DELTA 3 Plus and Anker C2000 Gen 2 — whichever is on sale wins.",
    sources: ["ecoflow.com", "solarwaypoint.com comparison"],
  },
  {
    id: "anker-solix-f3000",
    name: "Anker SOLIX F3000",
    shortName: "SOLIX F3000",
    brand: "Anker",
    tier: "mid",
    releaseYear: 2025,
    capacityWh: 3072,
    outputW: 3600,
    surgeW: 7200,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 2400,
    rechargeTime: "~1.5 h (solar, ideal sun)",
    weightLb: 55.1,
    expandableWh: 24000,
    priceLow: 1399,
    priceHigh: 1999,
    specNotes: ["Newer model; long-term reliability data is thinner than for the F3800."],
    query: "Anker SOLIX F3000 portable power station",
    bestFor: "3kWh home backup with fast solar recharge",
    pros: [
      "3072Wh and 3600W hits the sweet spot for fridge + freezer + devices",
      "2400W solar input — fastest solar recharge in the 3kWh class",
      "Expands to 24kWh",
      "55 lb is light for 3kWh",
    ],
    cons: [
      "No 240V output — the F3800 is the pick for split-phase loads",
      "Newer platform with less owner history",
    ],
    verdict:
      "The F3000 is what the mid-range should look like in 2026: 3kWh, 3600W, genuinely fast solar recharge, and expansion to 24kWh. If you don't need 240V, it makes the older F2600 obsolete.",
    sources: ["sunenergytechnology.com (Oct 2026)", "anker.com"],
  },
  {
    id: "anker-solix-c2000-gen2",
    name: "Anker SOLIX C2000 Gen 2",
    shortName: "C2000 Gen 2",
    brand: "Anker",
    tier: "mid",
    releaseYear: 2025,
    capacityWh: 2048,
    outputW: 2400,
    surgeW: 4000,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 800,
    rechargeTime: "~1.4 h (AC)",
    weightLb: 41.7,
    expandableWh: 4096,
    upsMs: 10,
    priceLow: 899,
    priceHigh: 1299,
    query: "Anker SOLIX C2000 Gen 2 portable power station",
    bestFor: "Best value 2kWh for most buyers",
    pros: [
      "4000-cycle battery at a mid-range price",
      "41.7 lb — notably lighter than most 2kWh rivals",
      "10ms UPS switchover",
      "Strong sale pricing around $900",
    ],
    cons: [
      "800W solar input is the lowest in the 2kWh class",
      "Fewer AC outlets than the DELTA 2 Max",
    ],
    verdict:
      "The C2000 Gen 2 wins the 2kWh value argument: 4000 cycles, 10ms UPS and the lightest chassis in class for around $900 on sale. The 800W solar cap is the one real compromise.",
    sources: ["sunenergytechnology.com (Oct 2026)", "solarwaypoint.com comparison"],
  },
  {
    id: "anker-solix-c1000",
    name: "Anker SOLIX C1000",
    shortName: "SOLIX C1000",
    brand: "Anker",
    tier: "budget",
    releaseYear: 2024,
    capacityWh: 1056,
    outputW: 1800,
    surgeW: 2400,
    batteryType: "LiFePO4",
    cycleCount: 3000,
    solarInputW: 600,
    rechargeTime: "0–100% in 58 min (AC)",
    weightLb: 28.4,
    expandableWh: 2112,
    upsMs: 20,
    priceLow: 399,
    priceHigh: 999,
    specNotes: ["Street price is often $400–$500 on sale; $999 is list.", "SurgePad allows up to 2400W for resistive loads."],
    query: "Anker SOLIX C1000 portable power station",
    bestFor: "First power station / camping and short outages",
    pros: [
      "58-minute full AC recharge — fastest in its class",
      "1800W output runs fridges, microwaves and coffee makers",
      "Frequently $400–$500 on sale — the value king",
      "Expandable to 2112Wh",
    ],
    cons: [
      "1056Wh is one fridge-day, not home backup",
      "600W solar input means slow solar-only recharge",
    ],
    verdict:
      "The C1000 is the gateway power station: real 1800W output, sub-hour recharge, and sale prices that dip under $500. Buy it for camping and short outages; step up to 2kWh for real backup.",
    sources: ["bestgeneratorsolar.com", "makeuseof.com review", "slickdeals.net (May 2026)"],
  },
  {
    id: "ecoflow-delta-3-plus",
    name: "EcoFlow DELTA 3 Plus",
    shortName: "DELTA 3 Plus",
    brand: "EcoFlow",
    tier: "budget",
    releaseYear: 2025,
    capacityWh: 1024,
    outputW: 2400,
    surgeW: 4800,
    batteryType: "LiFePO4",
    cycleCount: 3000,
    solarInputW: 500,
    rechargeTime: "0–100% in 56 min (AC)",
    weightLb: 28,
    expandableWh: 5120,
    upsMs: 10,
    priceLow: 799,
    priceHigh: 999,
    query: "EcoFlow DELTA 3 Plus portable power station",
    bestFor: "Maximum output from a 1kWh box",
    pros: [
      "2400W output — the most powerful 1kWh-class inverter here",
      "Expands to 5.1kWh, the best expansion story under $1000",
      "56-minute AC recharge, 10ms UPS",
      "Excellent app",
    ],
    cons: [
      "500W solar input is the weakest here",
      "Costs roughly double the C1000 on sale for similar capacity",
    ],
    verdict:
      "The DELTA 3 Plus is for buyers who need watts more than watt-hours: 2400W from a 28 lb box, with an expansion path to 5kWh. If you mostly need capacity, the cheaper C1000 covers the same camping jobs.",
    sources: ["outputreport.com (2026)", "ecoflow.com"],
  },
  {
    id: "dji-power-1000",
    name: "DJI Power 1000",
    shortName: "Power 1000",
    brand: "DJI",
    tier: "budget",
    releaseYear: 2024,
    capacityWh: 1024,
    outputW: 2200,
    surgeW: 4400,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 800,
    rechargeTime: "0–100% in 70 min (AC)",
    weightLb: 29,
    upsMs: 20,
    priceLow: 699,
    priceHigh: 999,
    specNotes: ["DJI rates 4000 cycles to 70% capacity, not the usual 80% — not directly comparable.", "Solar charging needs the add-on MPPT module; dual 140W USB-C is best-in-class for creators."],
    query: "DJI Power 1000 portable power station",
    bestFor: "Drone owners and creators who live on USB-C",
    pros: [
      "Dual 140W USB-C — fastest laptop/drone charging here",
      "Whisper-quiet 23–26 dB operation",
      "SDC super-fast charging for DJI drone batteries",
      "26 SGS safety certifications",
    ],
    cons: [
      "No built-in MPPT — solar needs a bolt-on module",
      "Not expandable; cycle rating uses a 70% threshold",
      "Only 2 AC outlets",
    ],
    verdict:
      "DJI built a creator's power station, not a generalist's: unmatched USB-C power and drone fast-charging in a quiet 29 lb box. As a pure home-backup box, the Anker and EcoFlow 1kWh rivals are more flexible.",
    sources: ["makeuseof.com review", "store.dji.com", "slickdeals.net (Aug 2026)"],
  },
  {
    id: "jackery-explorer-1000-plus",
    name: "Jackery Explorer 1000 Plus",
    shortName: "Explorer 1000 Plus",
    brand: "Jackery",
    tier: "budget",
    releaseYear: 2023,
    capacityWh: 1264,
    outputW: 2000,
    surgeW: 4000,
    batteryType: "LiFePO4",
    cycleCount: 4000,
    solarInputW: 400,
    rechargeTime: "~100 min to 80% (AC)",
    weightLb: 32,
    expandableWh: 5056,
    priceLow: 899,
    priceHigh: 1199,
    specNotes: ["400W solar input is the lowest here — pair with Jackery's own panels for best results."],
    query: "Jackery Explorer 1000 Plus portable power station",
    bestFor: "Jackery ecosystem buyers who want expansion",
    pros: [
      "1264Wh base with expansion to 5kWh",
      "2000W output with 4000W surge",
      "Huge accessory ecosystem (panels, cases, connectors)",
      "Simple, beginner-friendly app",
    ],
    cons: [
      "400W solar input is painfully slow for the capacity",
      "Pricier per Wh than Anker's C1000 on sale",
    ],
    verdict:
      "The 1000 Plus makes sense inside the Jackery ecosystem — panels, expansion batteries and accessories all click together. On pure specs-per-dollar, though, Anker's C1000 usually wins this weight class.",
    sources: ["bestgeneratorsolar.com comparison", "jackery.com"],
  },
];

/** Price bands shown as $–$$$$ instead of dollar figures. */
export const PRICE_TIERS = [
  { level: 1, label: "Budget", range: "under $700", sym: "$" },
  { level: 2, label: "Mid-range", range: "$700–$1,500", sym: "$$" },
  { level: 3, label: "Upper mid", range: "$1,500–$2,800", sym: "$$$" },
  { level: 4, label: "Premium", range: "$2,800+", sym: "$$$$" },
] as const;

export function priceTier(m: StationModel) {
  const p = m.priceLow;
  const level = p < 700 ? 1 : p < 1500 ? 2 : p < 2800 ? 3 : 4;
  return PRICE_TIERS[level - 1];
}

export function getModel(id: string): StationModel {
  const m = MODELS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown model id: ${id}`);
  return m;
}

/** "2,048Wh" */
export function formatWh(wh: number): string {
  return `${wh.toLocaleString("en-US")}Wh`;
}

/** "2.0kWh" */
export function formatKwh(wh: number): string {
  return `${(wh / 1000).toFixed(wh % 1000 ? 1 : 0)}kWh`;
}
