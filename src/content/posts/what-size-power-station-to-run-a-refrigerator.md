---
title: "What Size Power Station to Run a Refrigerator? Runtime Math That Actually Works (2026)"
seoTitle: "What Size Power Station for a Refrigerator? (2026)"
description: "How long will a power station run a fridge? Runtime math for full-size, mini-fridge, and chest freezer, plus a 12-model runtime table and surge warnings."
pubDate: 2026-10-10
category: guide
tag: "Buying advice"
order: 40
heroKeywords: ["what size power station to run a refrigerator", "power station for refrigerator", "how long will a power station run a fridge"]
picks:
  - id: anker-solix-c1000
    label: "Mini-fridge and day-trip duty — cheapest viable option"
  - id: anker-solix-c2000-gen2
    label: "The 2kWh sweet spot for full-size fridge backup"
  - id: ecoflow-delta-2-max
    label: "2kWh alternative with faster solar charging"
  - id: anker-solix-f3000
    label: "Fridge + freezer + extras for multi-day outages"
takeaways:
  - "A full-size fridge needs about <strong>1kWh of station per 6–8 hours</strong> of runtime. Plan for <strong>2kWh minimum</strong> for a realistic overnight outage."
  - "The real gotcha isn't capacity — it's the <strong>startup surge</strong>. Compressor surge can hit 800–1,200W for 1–3 seconds; the station's <strong>surge rating</strong> must cover it."
  - "The 2kWh class is the sweet spot for fridge backup. The 3–4kWh class runs <strong>fridge + freezer + extras</strong> through multi-day outages."
  - "Run your own numbers in the <a href=\"/tools/rv-sizer/\">RV sizer tool</a> — it has the fridge built into its device list."
faq:
  - q: "How long will a 1000Wh power station run a refrigerator?"
    a: "Roughly 6 hours for a typical full-size fridge (~150W average draw) after inverter losses. A mini-fridge (~60W average) lasts about 14 hours on the same station. Keep the door closed — every opening shortens that."
  - q: "Can a small power station start a refrigerator's compressor?"
    a: "Usually yes, if its surge rating covers the startup spike. A full-size fridge can surge to 800–1,200W for a second or two at startup, so the station needs a surge rating above that. All 12 models in our runtime table below meet it — but a 300–500W station with a 600W surge likely won't."
  - q: "Is 2000Wh enough for a refrigerator overnight?"
    a: "Yes — about 11–12 hours for a full-size fridge, longer with the door kept closed. That's why 2kWh is our recommended minimum for real outage backup."
  - q: "Do I need 240V to run a refrigerator?"
    a: "No. Residential refrigerators run on standard 120V. No 240V split-phase output is needed — that's only relevant for well pumps, EV chargers, and big appliances."
  - q: "Can I run a fridge and a freezer off one power station?"
    a: "Yes, but size for it: roughly double the capacity. Two compressors can also surge back-to-back, so keep the combined surge under the station's rating. The 3kWh class (e.g. SOLIX F3000) is the comfortable starting point."
---

The refrigerator is the #1 load people buy power stations for — and the #1 load people size wrong. The mistake is almost always the same: someone buys a big battery and forgets the compressor's startup surge, or buys a punchy little inverter and discovers it empties in four hours. Here's the quick answer, the math, and a runtime table for all 12 models we cover.

## The quick answer

**Full-size fridge:** you need about **1kWh of station capacity per 6–8 hours** of runtime. A 2kWh station (our recommended minimum for real backup) runs a full-size fridge ~11–12 hours — through a typical overnight outage.

**Mini-fridge:** about **1kWh per 14–15 hours**. The little guys are easy.

**The catch:** the fridge's compressor surges to **800–1,200W for 1–3 seconds** every time it starts. The station's **surge rating** must be higher than that, or the inverter trips the moment the compressor kicks on — no matter how big the battery is. Every model in our table below clears it; stations below ~600W surge don't.

## The math: watts, hours, and the 0.85

Runtime follows one formula:

**Runtime (hours) = Capacity (Wh) × 0.85 ÷ Average watts**

The 0.85 accounts for inverter losses (~10%) plus a margin for not draining the battery to absolute zero. Your two inputs:

**Average watts** — the *running* draw, not the label. Fridges cycle: the compressor runs 30–50% of the time under normal conditions. A fridge drawing 150W while the compressor runs averages out to roughly 50–75W over the day — but for outage sizing, plan on the **warmer end** (hot kitchen, door opened more often) and use ~100–150W average for a full-size fridge, ~60W for a mini-fridge, ~80W for a chest freezer. When in doubt, plug in an energy meter for 24 hours — the daily kWh it reports is the single most reliable number you can get.

**Startup surge** — 3–6× the running draw, lasting 1–3 seconds. Full-size: typically 800–1,200W. This is the number that trips undersized inverters. Always check the station's *surge* (peak) rating against it.

Note one more hidden load: frost-free fridges run a **defrost heater** (300–700W for 15–30 minutes, on a timer). It's within every station's rating here, but it adds to the day's total Wh. If you want the full capacity-vs-output framework this builds on, read our [sizing guide](/posts/what-size-power-station/).

## Runtime table: all 12 models, full-size fridge (~150W average)

| Model | Capacity | Surge rating | Fridge runtime (~150W avg) |
|---|---|---|---|
| [Anker SOLIX C1000](amazon:anker-solix-c1000) | 1,056Wh | 2,400W (SurgePad) | ~6 hours |
| [EcoFlow DELTA 3 Plus](amazon:ecoflow-delta-3-plus) | 1,024Wh | 4,800W | ~6 hours |
| [DJI Power 1000](amazon:dji-power-1000) | 1,024Wh | 4,400W | ~6 hours |
| [Jackery Explorer 1000 Plus](amazon:jackery-explorer-1000-plus) | 1,264Wh | 4,000W | ~7 hours |
| [Anker SOLIX C2000 Gen 2](amazon:anker-solix-c2000-gen2) | 2,048Wh | 4,000W | ~11.5 hours |
| [EcoFlow DELTA 2 Max](amazon:ecoflow-delta-2-max) | 2,048Wh | 4,800W | ~11.5 hours |
| [BLUETTI Elite 200 V2](amazon:bluetti-elite-200-v2) | 2,073Wh | 3,900W | ~12 hours |
| [BLUETTI AC200L](amazon:bluetti-ac200l) | 2,048Wh | 3,600W | ~11.5 hours |
| [Jackery Explorer 2000 Plus](amazon:jackery-explorer-2000-plus) | 2,043Wh | 6,000W | ~11.5 hours |
| [Anker SOLIX F3000](amazon:anker-solix-f3000) | 3,072Wh | 7,200W | ~17 hours |
| [Anker SOLIX F3800](amazon:anker-solix-f3800) | 3,840Wh | 9,000W | ~22 hours |
| [EcoFlow DELTA Pro 3](amazon:ecoflow-delta-pro-3) | 4,096Wh | 8,000W | ~23 hours |

Calculated as capacity × 0.85 ÷ 150. Real-world runtimes run a bit longer if the door stays closed and a bit shorter in a hot kitchen. Every model here has surge headroom for the compressor's 800–1,200W startup spike.

**Mini-fridge (~60W average)** — multiply the full-size numbers by about 2.5×. The 1kWh class gets you ~14–15 hours; the 2kWh class ~29 hours; the F3000 ~43 hours. The [Anker SOLIX C1000](amazon:anker-solix-c1000) is the natural pick here: light (28.4 lb), cheap relative to the class, and its 2,400W SurgePad rating has headroom for anything a mini-fridge throws at it.

## The surge gotcha, in detail

This deserves its own section because it's where sizing fails. A fridge compressor at startup draws its **locked-rotor current** — a brief spike of 3–6× the running draw. Real-world measured numbers:

- **Mini-fridge (50–80W running):** 200–600W surge. Nearly any station handles it.
- **Small full-size, 15–18 cu ft (~100W running):** 500–700W surge. Needs ≥700W peak rating.
- **Mid full-size, 19–22 cu ft (~150W running):** 800–1,200W surge. Needs ≥1,200W peak rating.
- **Large French-door, 23–26 cu ft (~200W running):** up to 1,200–1,800W surge. Needs ≥1,800W peak rating.

Practical consequence: a large French-door fridge on a [DJI Power 1000](amazon:dji-power-1000) is fine (4,400W surge). The same fridge on a hypothetical 500W/1,000W-peak station is **not** fine — it has plenty of Wh for hours of runtime but trips instantly at compressor start. Always compare your fridge's surge to the station's *peak* rating, not its continuous watts. If your fridge is the large French-door type, the [DELTA 2 Max](amazon:ecoflow-delta-2-max) or [Explorer 2000 Plus](amazon:jackery-explorer-2000-plus) (4,800W and 6,000W surge respectively) buy you real margin.

Older fridges surge harder and run less efficiently than ENERGY STAR models — a 15-year-old fridge can easily draw 50% more than its modern equivalent. If yours is old, round your average up toward 200W.

## Mini-fridge vs full-size vs chest freezer

**Mini-fridge (dorm/office, ~60W average, 200–600W surge):** any 1kWh station works. The 1kWh class is lighter, cheaper, and does double duty for camping. Our pick: the [SOLIX C1000](amazon:anker-solix-c1000). See the [budget power station guide](/posts/best-budget-power-station/) for the full 1kWh field.

**Full-size fridge (~150W average, 800–1,200W surge):** the 2kWh class is the sweet spot — ~11–12 hours of runtime, enough for most outages, at a reasonable weight (~42–50 lb). Either the [SOLIX C2000 Gen 2](amazon:anker-solix-c2000-gen2) or the [DELTA 2 Max](amazon:ecoflow-delta-2-max) (the DELTA 2 Max charges faster from solar at 1,000W vs 800W).

**Chest freezer (~80W average, 600–1,000W surge):** freezers run longer per kWh than fridges because they're opened less — ~18 hours per 1kWh. But if you're backing up **fridge + freezer together**, size them as one ~250W combined load: you want the 3kWh class ([SOLIX F3000](amazon:anker-solix-f3000), ~17 hours combined runtime) or the 4kWh flagships — the [DELTA Pro 3](amazon:ecoflow-delta-pro-3) and [SOLIX F3800](amazon:anker-solix-f3800) give ~22–23 hours combined. Compare those two directly in our [flagship head-to-head](/posts/ecoflow-delta-pro-3-vs-anker-solix-f3800/).

## Solar top-up for multi-day outages

A battery only covers day one. For outages past ~24 hours, the station has to **recharge faster than the fridge drains it** — roughly 150W average drain means you need ~150W of sustained solar production to break even, and realistically 400W+ of panels to recover ground. Two things matter:

1. **Solar input wattage of the station** — the 1kWh units cap out at 500–800W, fine for fridge-only duty; the flagships take 2,400–2,600W, enough to recharge a whole day's fridge use in a couple of hours of sun.
2. **Panel sizing to your roof/yard** — our [solar pairing guide](/posts/solar-panel-pairing-guide/) and the [/tools/solar-pairing/](/tools/solar-pairing/) tool size panels to each model, including how many watts you need to keep a fridge neutral through a cloudy day.

Rule of thumb: pair any fridge-backup station with at least **2× the fridge's average draw** in panel wattage (300W+ of panels for a 150W fridge), and keep the panels somewhere you can deploy them in 5 minutes. Our [outage scenario walkthroughs](/posts/home-backup-outage-scenarios/) model this for 4-, 24-, and 72-hour blackouts.

## Picks by scenario

- **Day trips and dorm rooms (mini-fridge):** [Anker SOLIX C1000](amazon:anker-solix-c1000) — 1,056Wh, 28.4 lb, 2,400W SurgePad. Cheap, light, plenty.
- **Full-size fridge, overnight outage:** [Anker SOLIX C2000 Gen 2](amazon:anker-solix-c2000-gen2) or [EcoFlow DELTA 2 Max](amazon:ecoflow-delta-2-max) — both ~2kWh, ~11–12 hours of fridge runtime. The DELTA 2 Max if you plan to add solar (1,000W input).
- **Fridge + freezer, multi-day outage:** [Anker SOLIX F3000](amazon:anker-solix-f3000) — 3,072Wh, 3,600W continuous, 7,200W surge. The comfortable middle ground.
- **Fridge + freezer + the rest of the house:** [EcoFlow DELTA Pro 3](amazon:ecoflow-delta-pro-3) or [Anker SOLIX F3800](amazon:anker-solix-f3800) — 4kWh-class, ~22–23 hours combined runtime, and expandable. The head-to-head comparison above breaks the tie.

Want the numbers for your whole load list, not just the fridge? The [/tools/rv-sizer/](/tools/rv-sizer/) runs the full arithmetic, and our general [sizing guide](/posts/what-size-power-station/) covers capacity vs output for everything else.
