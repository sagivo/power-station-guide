---
title: "What Size Power Station Do I Need? Capacity vs Output Explained (2026)"
seoTitle: "What Size Power Station Do I Need? (2026 Guide)"
description: "Capacity (Wh) vs output (W): the two numbers that size a portable power station, with real appliance math and a 2-minute method."
pubDate: 2026-10-10
updatedDate: 2026-10-10
category: explainer
tag: "Explainer"
order: 50
heroKeywords: ["what size power station do i need", "power station capacity vs output", "how many watt hours do i need"]
picks:
  - id: anker-solix-c1000
    label: "Start here for light use"
  - id: anker-solix-c2000-gen2
    label: "The 2kWh sweet spot"
takeaways:
  - "<strong>Capacity (Wh)</strong> = how long things run. <strong>Output (W)</strong> = what can run at once. You need enough of both."
  - "The 2-minute method: list devices, multiply <strong>watts × hours</strong>, add 20% headroom."
  - "Check the <strong>biggest single load</strong> against output watts — a 1kWh station with a 2400W inverter beats a 2kWh station with 1000W for power tools."
  - "When in doubt, our <a href=\"/tools/rv-sizer/\">RV sizer</a> does the arithmetic for you."
faq:
  - q: "Is a bigger battery always better?"
    a: "No. A bigger battery with a small inverter can't run high-wattage appliances, and you're paying for capacity you'll never use. Match both numbers to your loads — capacity for runtime, output for peak draw."
  - q: "What does 1000Wh actually mean in practice?"
    a: "It means the battery holds 1000 watt-hours: 100W for 10 hours, 500W for 2 hours, or 1000W for 1 hour (minus ~10–15% inverter losses). A fridge (~150W average) runs roughly 6 hours per 1000Wh."
  - q: "How much headroom should I add?"
    a: "20% minimum. Batteries shouldn't routinely run to zero, inverter losses eat 10–15%, and loads are always bigger than you estimate. For critical backup (medical devices, sump pumps), add 50%."
---

Every power station is described by two numbers, and confusing them is the #1 sizing mistake. Here's the 2-minute method that gets it right.

## The two numbers

**Capacity (Wh)** — how much energy the battery holds. Decides *how long* things run. A 2000Wh station holds twice the energy of a 1000Wh one.

**Output (W)** — how much power the inverter delivers at once. Decides *what* can run. A 2400W inverter runs a microwave; a 1000W inverter trips trying.

You need enough of **both**. A 4kWh station with a 1000W inverter can't run a 1500W kettle. A 1kWh station with a 2400W inverter ([DELTA 3 Plus](amazon:ecoflow-delta-3-plus)) runs the kettle — briefly.

[[diagram:sizing]]

## The 2-minute method

1. **List your devices** with their watts (check the label or our [RV sizer's device list](/tools/rv-sizer/)).
2. **Multiply watts × hours per day** for each, and add them up. That's your Wh/day.
3. **Add 20% headroom.** That's your target capacity.
4. **Find your biggest single load** (or two simultaneous loads). Your output watts must exceed it.

Example — home office backup: laptop 65W × 8h = 520Wh, monitor 30W × 8h = 240Wh, modem/router 20W × 8h = 160Wh, phones 60Wh. Total ≈ 980Wh → +20% ≈ **1,200Wh target**. Biggest load: 65W. Any 1kWh station works — the [Anker C1000](amazon:anker-solix-c1000) is plenty.

## The common traps

- **Forgetting surge:** fridge compressors and pumps draw 2–3x their rated watts for a second at startup. Check the station's *surge* rating, not just continuous.
- **Sizing for the average, not the peak:** your *average* load might be 300W, but the microwave's 1000W is what trips the inverter.
- **Ignoring recharge:** a perfectly sized battery that's empty on day two of an outage is a brick. Size the solar (or the wall-recharge plan) too — see our [solar pairing guide](/posts/solar-panel-pairing-guide/).

## Quick reference

| Daily need | Station size | Example pick |
|---|---|---|
| Phones, lights, laptop (~500Wh) | 500Wh–1kWh | [Anker C1000](amazon:anker-solix-c1000) |
| + 12V fridge (~1,500Wh) | 1–2kWh | [DELTA 3 Plus](amazon:ecoflow-delta-3-plus) |
| + cooking/Starlink (~3,000Wh) | 2–3kWh | [C2000 Gen 2](amazon:anker-solix-c2000-gen2) |
| Fridge + freezer 24h (~3,200Wh) | 3kWh+ | [Anker F3000](amazon:anker-solix-f3000) |
| Multi-day home backup | 4kWh + solar | [DELTA Pro 3](amazon:ecoflow-delta-pro-3) |

## Sizing for specific appliances

The table above is a starting point — here's the appliance-level math for the loads people actually ask about (using the 0.85 efficiency factor):

| Appliance | Typical draw | 1kWh station | 2kWh station | 4kWh station |
|---|---|---|---|---|
| Full-size fridge | ~150W avg | ~6h | ~11h | ~23h |
| Chest freezer | ~100W avg | ~8.5h | ~17h | ~34h |
| CPAP (no humidifier) | ~40W × 8h | 2–3 nights | 5+ nights | 10+ nights |
| Laptop + monitor | ~95W × 8h | ~1 workday | ~2 workdays | ~4 workdays |
| Portable AC (8k BTU) | ~1000W | ~50 min | ~1.7h | ~3.4h |
| Microwave | 1000W × 15min | ~4 meals | ~8 meals | ~16 meals |

Two deep dives: [what size power station runs a refrigerator](/posts/what-size-power-station-to-run-a-refrigerator/) does the full fridge math including compressor surge, and [home backup scenarios](/posts/home-backup-outage-scenarios/) walks through 4-hour, 24-hour and multi-day outages hour by hour.
