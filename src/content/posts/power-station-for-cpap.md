---
title: "Power Station for CPAP: How Many Nights of Backup You Actually Get (2026)"
seoTitle: "Power Station for CPAP: Backup Power Guide 2026"
description: "How long a power station runs a CPAP: real wattage numbers, the 12V DC trick that doubles runtime, humidifier trade-offs, and travel picks."
pubDate: 2026-10-10
category: guide
tag: "Buying advice"
order: 42
heroKeywords: ["power station for cpap", "cpap battery backup", "cpap power outage"]
picks:
  - id: dji-power-1000
    label: "Travel pick — 1024Wh, 29 lb, whisper-quiet"
  - id: anker-solix-c2000-gen2
    label: "Home backup pick — 2048Wh for multi-night outages"
takeaways:
  - "<strong>A CPAP is a light load</strong> — even a 1kWh station runs one for 2–4 nights. This is one of the easiest devices to back up with a power station."
  - "The heated humidifier is the big variable: it can <strong>triple</strong> power draw. Turning it off (or using passive humidification) dramatically extends runtime."
  - "A <strong>12V DC car adapter</strong> skips the AC inverter entirely and buys you 15–25% more runtime versus the wall brick — the single best efficiency trick."
  - "For multi-day outage planning with a medical device, talk to your <strong>sleep doctor</strong> and keep a layered backup plan — this guide covers the power math, not medical advice."
faq:
  - q: "How many watts does a CPAP use?"
    a: "A ResMed AirSense 10 draws roughly 10–17W with no humidifier, 30–60W with the humidifier on moderate heat, and 50–80W+ with heated tubing — against a rated typical consumption of 53W and 104W peak. The AirSense 11 is more efficient at around 9W without humidification. Always check your machine's nameplate."
  - q: "Will a power station damage my CPAP?"
    a: "A quality station with a pure sine wave inverter is safe — all 12 models we cover output pure sine wave. The bigger risk is a dead battery mid-night, so size with margin and test your setup before you depend on it."
  - q: "Can I take a power station on a plane for my CPAP?"
    a: "No — not the ones in this guide. Airlines cap lithium batteries at 100Wh carry-on (160Wh with airline approval), and every station here is 1,000Wh+. For flights, use a dedicated CPAP battery (typically 90–100Wh, FAA-compliant) and the FAA-approved machine itself as a medical device."
  - q: "Should I run my CPAP on DC or AC from the power station?"
    a: "DC, when possible. A 12V DC adapter for your CPAP (ResMed and Philips both sell them) bypasses the station's AC inverter, avoiding 10–15% conversion losses and the inverter's idle draw — worth roughly an extra night of runtime on a 1kWh station."
  - q: "How long will a 1000Wh power station run my CPAP?"
    a: "About 2–4 nights of 8-hour sleep: roughly 4–6 nights without the humidifier (~15W → ~55 hours), or 2 nights with humidifier and heated tube (~70W → ~12 hours). See the runtime math section for the exact formula."
---
**Quick answer: a power station is one of the best CPAP backup options there is.** A CPAP machine is a light, steady load — even a modest 1kWh station delivers multiple nights of sleep through a power outage. No fumes, no noise, no 2 AM gas station run. Here's exactly how to size it, the one setting that triples your runtime, and the DC trick most people miss.

> **A note on scope:** this guide covers the *power* side — watts, runtime, and equipment. It is not medical advice. If you depend on CPAP therapy, talk to your sleep doctor about multi-day outage planning, and keep a layered backup plan (more on that below).

## How much power a CPAP actually uses

CPAP power draw varies enormously with one variable: **the heated humidifier.** Published specs for the most common machine, the ResMed AirSense 10 (rated typical 53W, peak 104W):

| Configuration | Typical draw | What that means |
|---|---|---|
| Blower only, no humidifier | 10–17W | Barely more than a phone charger |
| Humidifier, moderate heat | 30–60W | The common real-world case |
| Humidifier + heated tube, high | 50–80W+ | Approaches the 90W adapter limit |

The newer AirSense 11 is more efficient — around 9W in normal operation without humidification, shipping with a 65W adapter. Philips Respironics machines land in a similar band.

Two practical consequences: first, **the humidifier setting matters more than the station you buy** — dropping from 70W to 15W more than quadruples your runtime. Second, pressures and masks matter a little (higher pressure = slightly more blower work), but humidifier heat dominates.

If you use an oxygen concentrator or a BiPAP with higher pressures, the numbers rise — measure your actual draw with a watt meter rather than guessing. Our [sizing guide](/posts/what-size-power-station/) explains the method.

## The runtime math

Same formula as everything else, but the numbers are friendlier here:

**(Battery capacity in Wh × 0.85) ÷ CPAP watts × ... per 8-hour night**

Worked examples for an 8-hour night:

- **1,024Wh station ([DJI Power 1000](amazon:dji-power-1000)) + CPAP at 15W (no humidifier):** (1024 × 0.85) ÷ 15 ≈ **58 hours ≈ 7 nights**
- **1,024Wh station + CPAP at 50W (humidifier on):** (1024 × 0.85) ÷ 50 ≈ **17 hours ≈ 2 nights**
- **2,048Wh station ([Anker SOLIX C2000 Gen 2](amazon:anker-solix-c2000-gen2)) + CPAP at 15W:** ≈ **116 hours ≈ 14 nights**
- **2,048Wh station + CPAP at 70W (humidifier + heated tube):** ≈ **25 hours ≈ 3 nights**

The 0.85 factor covers inverter losses and keeps you from draining to zero nightly — batteries last longer when they don't bottom out. The headline: **even the smallest station in this guide runs a humidifier-off CPAP for the better part of a week.** This is the opposite of air conditioning (our [AC guide](/posts/can-a-power-station-run-an-air-conditioner/) shows what a *hard* load looks like) — CPAP is about as easy as backup loads get.

## The 12V DC trick: skip the inverter, gain a night

Here's the single best efficiency move, and it's cheap: **run your CPAP from the power station's 12V DC output instead of the AC outlets.**

Your CPAP's wall brick converts AC → DC (ResMed machines run on 24V DC internally). When you plug that brick into a power station, the station converts battery DC → AC, then the brick converts AC → DC again. Each conversion wastes 10–15%, and the inverter itself draws idle power all night just for being on.

A 12V DC car adapter for your CPAP (ResMed and Philips both sell official ones, roughly $80–100) plugs into the station's cigarette-lighter-style port and feeds the machine directly. Real-world gains:

- **15–25% more runtime** from eliminated conversion losses
- **No inverter hum** — the station stays silent, which matters when it's sitting on your nightstand
- **Lower heat** in the bedroom

On a 1,024Wh station running a 15W CPAP, that efficiency gain is worth roughly an extra night. Note the adapters step 12V up to the 24V most CPAPs need — buy the adapter made for your specific machine, not a generic cable, because the connector and voltage handshake are proprietary.

## Humidifier on vs off: the big trade-off

The heated humidifier is the difference between 7 nights and 2 nights on the same battery. During an outage, you have three options:

1. **Humidifier off, passive water chamber in place.** The chamber still adds some moisture passively as air flows over it. Draw drops to ~10–17W. This is the maximum-runtime setting.
2. **Humidifier on low.** A compromise — meaningful comfort, moderate draw (~30W). Roughly halves runtime versus off.
3. **Humidifier + heated tube on normal settings.** Full comfort, full draw. Plan for ~2 nights per kWh.

What you choose is personal and comfort-related — some people genuinely can't sleep without heated humidification, and **therapy you abandon at 3 AM helps nobody.** The practical move: test it. Run a normal night at home on the station with your usual settings, check the battery percentage in the morning, and you'll know your real number. Never let an outage be the first time you test the setup.

One more consideration: in winter outages, a cold bedroom increases condensation ("rainout") in the tube, which tempts people to crank the heated tube — exactly when the battery is also colder and less efficient. Keep the station itself in the room (not the freezing garage) and consider a tube cover as a no-power rainout fix.

## Picking the right station: travel vs home backup

**For travel and camping:** you want light, quiet, and just enough capacity. The [DJI Power 1000](amazon:dji-power-1000) (1,024Wh, 2,200W, 29 lb, 23–26dB) is the standout — genuinely quiet enough for a tent or hotel room, light enough to carry one-handed, and 1kWh is 2–4+ nights of CPAP depending on humidifier settings. The [Anker SOLIX C1000](amazon:anker-solix-c1000) (1,056Wh, 28.4 lb) is a close alternative in the same class. Both are dramatically lighter than the 2kWh units, which matters when the station rides in luggage.

**For multi-night home backup:** step up to 2kWh so the CPAP shares the battery with the fridge, phones, and a lamp without anxiety. The [Anker SOLIX C2000 Gen 2](amazon:anker-solix-c2000-gen2) (2,048Wh, 2,400W, 41.7 lb) and [EcoFlow DELTA 3 Plus](amazon:ecoflow-delta-3-plus) (1,024Wh, 2,400W, 28 lb) are both strong — the C2000 Gen 2 for maximum nights, the DELTA 3 Plus if you want the lighter unit. Our full [CPAP-relevant reviews](/power-stations/anker-solix-c2000-gen2/) cover the details, and the [home backup outage scenarios](/posts/home-backup-outage-scenarios/) show how CPAP fits into a whole-house plan.

**What about bigger?** A 3–4kWh station ([Anker SOLIX F3000](amazon:anker-solix-f3000), [EcoFlow DELTA Pro 3](amazon:ecoflow-delta-pro-3)) for CPAP alone is overkill — but if it's also your fridge, freezer, and home-office backup, the CPAP's ~120Wh/night becomes a rounding error. Size for the biggest load, not the CPAP.

**The FAA question:** none of these stations can fly with you — airlines cap lithium batteries at 100Wh carry-on (160Wh with prior approval), and the smallest unit here is 1,024Wh. For air travel, that's what dedicated FAA-compliant CPAP batteries (typically 90–100Wh, roughly one night) are for. The CPAP machine itself flies as a medical device and doesn't count against carry-on limits, but the power station ships ground or stays home.

## The layered backup plan

For a medical device, one battery is a plan; two layers is a *reliable* plan:

1. **Primary:** the power station, sized for 2–3x your expected outage length.
2. **Secondary:** the 12V DC adapter + your car's outlet, or a small dedicated CPAP battery — enough for one more night if the station dies.
3. **Recharge path:** solar panels (even a single 200W panel refills a 1kWh station in a day of decent sun — see our [solar pairing guide](/posts/solar-panel-pairing-guide/) and the [solar pairing tool](/tools/solar-pairing/)), or a car charger for driving recharge.
4. **The human layer:** know which neighbor, hotel, or urgent-care has power; keep your DME provider's number in your phone; and discuss extended-outage planning with your sleep doctor — including whether your prescription allows any flexibility in humidifier settings during emergencies.

Also: **keep the station charged.** A backup battery at 20% is decoration. Top it off monthly, and if your station has an app with charge scheduling, use it. LiFePO4 batteries (all 12 models we cover) hold charge for months with minimal self-discharge, which makes them ideal for this role — far better than the older NCM chemistry.

## What about a generator instead?

A fuel generator runs a CPAP indefinitely — but it's loud, it can't run indoors or in a tent, and refueling at 2 AM is miserable. For CPAP specifically, the power station wins on every axis except multi-week runtime: silent, bedroom-safe, and the load is so light that even a small station covers days. Our [power station vs generator comparison](/posts/power-station-vs-generator/) has the full breakdown; for a medical-adjacent load, the indoor-safe, silent option is usually the right call.

## Bottom line

CPAP backup is the rare problem where the cheap, simple answer is also the best one: a 1kWh-class station, a 12V DC adapter for your machine, and the humidifier dialed to whatever you can tolerate. Test it once on a normal night, keep it charged, keep a second layer in the plan, and loop in your sleep doctor for anything beyond a night or two. Sleep is health infrastructure — treat the power behind it that way.
