---
title: "Power Station for a Well Pump: Sizing, 240V Split-Phase, and Safe Hookup (2026)"
seoTitle: "Power Station for Well Pump: Sizing & 240V Guide"
description: "Can a power station run a well pump? Startup surge sizing, why most 120V stations cannot feed a 240V pump, and the safe transfer-switch hookup."
pubDate: 2026-10-27
category: guide
tag: "Guide"
order: 50
heroKeywords: ["power station for well pump", "well pump power station sizing", "240v well pump backup power"]
picks:
  - id: anker-solix-f3800
    label: "Single-unit 240V pick — 3840Wh, 6000W, 9000W surge"
  - id: ecoflow-delta-pro-3
    label: "240V via two paired units — 4096Wh, 4000W, 8000W surge"
  - id: jackery-explorer-2000-plus
    label: "120V pump pick — 2043Wh, 3000W, 6000W surge"
takeaways:
  - "<strong>A well pump's startup surge decides everything.</strong> A 1/2 HP pump may run on ~1,000W but need 2,000–4,000W for a second or two at startup; a 1 HP pump can surge past 6,000W."
  - "<strong>Most deep well pumps are 240V.</strong> A standard 120V-only power station cannot feed one, no matter how many watts it has — you need a split-phase-capable setup."
  - "<strong>Size from the nameplate, not the horsepower label.</strong> Volts × amps gives running watts; the surge rating of the station must clear the pump's locked-rotor startup draw."
  - "<strong>Hardwired pumps need transfer equipment and an electrician.</strong> Never backfeed through a wall outlet — a transfer switch or interlock kit is the safe, code-compliant route."
faq:
  - q: "Can a power station run a well pump?"
    a: "Yes, when three things match: the voltage (120V or 240V), the continuous wattage, and the startup surge. A 120V jet pump with a modest surge is the easiest case. A 240V submersible pump rules out every 120V-only station and needs a split-phase-capable unit such as the Anker SOLIX F3800 or a manufacturer-approved paired setup — plus transfer equipment installed by an electrician."
  - q: "How many watts does a well pump need to start?"
    a: "It varies widely by pump. Sizing guides put a 1/2 HP pump at roughly 1,000–1,500W running and 2,000–4,000W starting, and a 1 HP pump at roughly 1,500–2,400W running and 3,750–7,200W starting. Those are ranges, not ratings for your pump — read the nameplate or control-box label for volts and amps, multiply them for running watts, and treat the surge as two to three times running watts unless the manufacturer states otherwise."
  - q: "Can I plug my well pump into a power station with an extension cord?"
    a: "Only if the pump actually has a plug, the voltage matches, and the cord is rated for the surge current — which describes some above-ground jet pumps and almost no submersible pumps. Most submersible well pumps are hardwired with no plug at all, so there is nothing to plug in: the connection has to go through a transfer switch or interlock kit wired by a licensed electrician. Never use a double-male cord into a wall outlet; that backfeeds the grid and can electrocute utility workers."
  - q: "Do I need a transfer switch to run a well pump from a power station?"
    a: "For any pump wired into your house panel, yes — a manual transfer switch or an approved breaker interlock kit, installed by a licensed electrician, is what physically prevents the station and the grid from feeding the house at the same time. It also lets you isolate just the pump circuit so a fridge or dryer cannot accidentally overload the station at the worst moment."
---

**Quick answer: a power station can run a well pump, but the pump — not the power station — sets the terms.** Well pumps are motor loads with a brutal startup surge, and most deep-well pumps run on 240V, which most portable power stations cannot supply at all. Get the voltage and the surge right and the job is straightforward; get either wrong and the station will trip, stall the pump, or have no outlet the pump can use. This guide covers reading your pump's nameplate, the sizing math with two worked examples, and connecting it safely.

## First, find your pump's voltage: 120V or 240V?

Settle this before shopping — it is the fork in the road. The two common residential setups:

- **Submersible pumps** sit down in the well casing, often hundreds of feet deep. You cannot see the pump or read a nameplate on it. Most are fed from a **240V double-pole breaker**, and many use a control box near the pressure tank (on 3-wire models) that carries the electrical ratings.
- **Jet pumps** sit above ground, usually in a basement, crawl space, or pump house. They are more likely to be 120V, and the motor nameplate is right on the housing: horsepower, volts, and amps.

If installer paperwork is gone, check the breaker labeled "well" or "pump" (a double-pole breaker strongly suggests 240V), the control box near the pressure tank, and the label on an above-ground jet pump. A well contractor can also confirm it from their records. Do not guess from horsepower alone — two pumps with the same horsepower label can run on different voltages. Voltage is binary: a 120V-only station has no way to feed a 240V pump — no adapter, no setting, no cord changes that. Our [sizing guide](/posts/what-size-power-station/) covers the general math, but the voltage question comes first for well pumps.

## Startup surge is the number that decides everything

An electric motor at standstill briefly draws locked-rotor current — several times its normal running current — until the rotor gets moving. For a well pump that surge lasts roughly a second or two, but the station has to survive it or the pump never starts. A station that handles the running watts but not the surge will trip its overload protection the first time you open a tap, every time.

Typical ranges from pump and generator sizing guides (your nameplate decides — treat these as ballparks):

| Pump size | Running watts | Starting watts |
|---|---|---|
| 1/3 HP | ~1,000 | ~3,000 |
| 1/2 HP | 1,000–1,500 | 2,000–4,000 |
| 1 HP | 1,500–2,400 | 3,750–7,200 |
| 1.5 HP | 2,500–2,880 | 5,000–8,400 |

The surge runs roughly two to three times running watts, sometimes more on older or deeper pumps: one supplier quoted a 6,500W startup surge for a 1 HP, 230V pump on a 500-foot well. Depth, pump design, motor age, and controller type all move the number, so horsepower rules of thumb are a starting point, never a purchase decision.

**Reading the nameplate.** If the label gives volts and amps instead of watts, multiply: 240V × 6.5A is about 1,560W running. If it gives locked-rotor amps (LRA), multiply LRA × volts for startup watts directly — the most honest number you will find. Size the station's surge rating above the pump's startup watts with margin, and switch off other heavy loads for the moment the pump starts. Our [sump pump guide](/posts/power-station-for-sump-pump-outage/) shows the same surge logic for a smaller motor load.

## Sizing math, with two worked examples

Well pumps do not run continuously. A pressure tank does the smoothing: the pump switches on at cut-in pressure, refills the tank in a minute or two, and switches off at cut-out. Energy use therefore depends on minutes per hour of actual run time, which depends on household water use — a larger tank means fewer, longer cycles; laundry or irrigation means more minutes. Estimate a realistic busy case, not a best case.

The formula: running watts = volts × amps; startup watts = two to three times running watts (or LRA × volts); the station needs continuous output above running watts, surge above startup watts, and the right voltage; energy = running watts × minutes per hour ÷ 60 × outage hours, divided by ~0.85 for inverter efficiency, plus a 20% reserve if you can manage it.

### Example A: 1/2 HP, 120V jet pump

Nameplate: 120V × 10A = 1,200W running; startup at 2.5× = 3,000W. The station needs 120V output, ≥1,200W continuous, ≥3,000W surge. At 10 minutes per hour, energy is 1,200 × 10 ÷ 60 = 200Wh per hour, or 2,400Wh over 12 hours — about 2,824Wh after efficiency, roughly 3,390Wh with reserve. So a 2,048Wh station covers about 8–9 hours at this duty cycle, while a 3,072Wh-class unit covers the full 12 hours. A station like the [EcoFlow DELTA 2 Max](/power-stations/ecoflow-delta-2-max/) (2,400W continuous, 4,800W surge) clears the power requirements easily — here it is energy, not watts, that limits runtime.

### Example B: 1 HP, 240V submersible pump

Nameplate: 240V × 8A = 1,920W running; supplier-quoted startup surge 6,500W. The station needs 240V split-phase output, ≥1,920W continuous, and ≥6,500W surge — a combination that eliminates nearly every mainstream station (next section). At 8 minutes per hour, energy is 1,920 × 8 ÷ 60 = 256Wh per hour, or 3,072Wh over 12 hours — about 3,614Wh after efficiency, roughly 4,340Wh with reserve. The [Anker SOLIX F3800](/power-stations/anker-solix-f3800/) (3,840Wh, 6,000W continuous, 9,000W surge) clears the power numbers with room to spare and covers the 12-hour energy on paper with little reserve left; add an expansion battery or daytime solar top-up (see our [solar pairing guide](/posts/solar-panel-pairing-guide/)) for real margin. The lesson: for well pumps, surge and voltage are usually the binding constraints, and capacity decides how many hours you get, not whether the pump starts.

## The 240V problem: most power stations are 120V only

Residential 240V in North America is split-phase: two 120V legs, 180 degrees apart, combining to 240V across them. A standard station produces a single 120V phase, so its outlets top out at 120V. Delivering 240V requires a station built with a split-phase inverter, or two compatible units paired by the manufacturer to produce the two legs in sync. In the models this guide tracks:

- **One unit, native 240V:** the [Anker SOLIX F3800](/power-stations/anker-solix-f3800/) is the only station here with dual-voltage 120V/240V output from a single box — 6,000W continuous and 9,000W of surge, which is why it is the default answer for 240V well pumps.
- **Two units, paired:** the [EcoFlow DELTA Pro 3](/power-stations/ecoflow-delta-pro-3/) delivers 240V only when two units are paired with EcoFlow's Smart Home Panel 2 — a second 4,096Wh unit plus panel hardware, not a cable trick. Budget for the pair if you go this route.
- **120V only:** everything else, including the [Anker SOLIX F3000](/power-stations/anker-solix-f3000/) (3,600W, explicitly no 240V output) and the [Jackery Explorer 2000 Plus](/power-stations/jackery-explorer-2000-plus/) (3,000W, 6,000W surge — a strong 120V pump unit, useless for a 240V pump).

Do not try to synthesize 240V yourself. Step-up transformers, autotransformers, and paralleling two ordinary 120V units are electrician-and-manufacturer territory; improvised wiring can damage the pump motor, the station, or both, and can create a shock hazard. If your pump is 240V and you lack a split-phase-capable setup, the honest options are the F3800, a manufacturer-approved paired setup, or a conventional generator with a proper transfer switch — see our [power station vs. generator comparison](/posts/power-station-vs-generator/). One more trap: boost modes for resistive loads (heaters, kettles) do not help a motor's locked-rotor surge. Size from the published surge rating, not a boost figure.

## Safe hookup: transfer switch or interlock, never backfeed

Most submersible pumps are hardwired into the house panel — there is no plug, so "plug it into the station" is not an available move. The connection has to happen at the panel, and it must physically prevent the station and the grid from feeding the house at the same time:

- **Manual transfer switch.** A dedicated switch near the main panel, pre-wired to a handful of chosen circuits (well pump, fridge, a few lights). Flip it to the station position and the grid connection is physically broken for those circuits. You cannot accidentally overload the station with the dryer, because the dryer is not on the switch.
- **Breaker interlock kit.** A mechanical sliding plate on the main panel that prevents the main breaker and the generator breaker from being on simultaneously. Cheaper and more flexible, but it powers the whole panel, so load discipline is on you.

Both need a power inlet on an outside wall, a matching cord, and in most jurisdictions a permit — and both need a licensed electrician, who also confirms neutral/ground bonding, inlet and cord ratings for the pump's surge current, and anything special about the pump circuit. The non-negotiable rule: never plug a generator or power station into a wall outlet with a double-male cord. That backfeeds utility lines, can electrocute line workers and neighbors on the same transformer, bypasses your breakers, and can start a fire when grid power returns.

On outage day: station placed per its manual, cord to the inlet, transfer equipment switched to the station, other heavy loads off, then start the pump circuit and listen for a normal start. If the pump hums without starting or the station trips, stop — repeated stall attempts overheat the motor. Test the whole setup before you need it, on a calm day.

## Soft starters, and running the whole house

If the surge is the problem, one legitimate fix is to shrink it. A soft starter (or a variable-frequency drive on some setups) ramps the motor's voltage up over a second or two instead of slamming it with full current, cutting the locked-rotor spike substantially. These are electrician-installed devices matched to the pump motor — not plug-in accessories — and they do not change running watts or energy math. Ask your well contractor or electrician whether your pump supports one, and what the reduced starting current would be, before counting on it.

For the whole house plus the pump, the discipline matches any [home backup outage plan](/posts/home-backup-outage-scenarios/): total the running watts of everything running together, add only the largest startup surge, and keep the total under the station's ratings. In practice, let the pump start alone — pause the microwave for the two seconds it kicks in. If the combined load keeps tripping the station, the answer is a bigger station, an expansion battery, or fewer simultaneous loads, in that order of cost.

## FAQ

### Will a 2,000W power station run my 1/2 HP well pump?

Maybe — check surge rating and voltage, not headline watts. A 1/2 HP pump surging to 3,000–4,000W needs a surge rating that clears that number, and a 240V pump needs split-phase output regardless of watts. A 2,000W station with a 4,000W surge rating and the right voltage can do it; one with a 2,400W surge rating cannot, even though both say "2,000W" on the box.

### Can I combine two 120V power stations to make 240V?

Only with a manufacturer-approved pairing system designed for exactly that — two matched units, the maker's pairing hardware, and usually a smart panel. Never wire two ordinary stations together or bridge outlets with adapters. If the manufacturer does not document a 240V pairing mode for your exact models, it does not exist.

### How long will a power station run my well pump in an outage?

It depends on duty cycle, not just capacity. A pump drawing 1,920W for 8 minutes per hour uses about 256Wh per hour, so a 3,840Wh station lasts roughly 12 hours before efficiency losses — less with heavier water use, more with lighter use. Use the minutes-per-hour formula above with your own numbers; every other load on the station shortens the answer.

### Can solar panels keep the station topped up while it runs the pump?

Yes, with realistic expectations. A station with 2,400W of solar input can meaningfully recharge on a sunny day, but a pump plus a fridge can out-consume panels in winter or overcast weather. Treat solar as runtime extension, not unlimited runtime — our [solar pairing guide](/posts/solar-panel-pairing-guide/) and [solar pairing tool](/tools/solar-pairing/) help size the array.

## Bottom line

A power station is a good well-pump backup when the voltage matches, the surge rating clears the startup spike, and the connection runs through proper transfer equipment. For a 120V jet pump, several mainstream stations qualify — size capacity to your duty cycle. For a 240V submersible, the field narrows to one single-unit answer, the Anker SOLIX F3800, or a paired EcoFlow setup — and the electrician is not optional either way. Read the nameplate, do the two minutes of math, test before the storm, and never backfeed. Water during an outage is worth doing right.
