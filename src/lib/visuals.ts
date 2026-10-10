/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:capacity]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 *
 * Palette (dark slate + volt accents, 3:1 contrast on #fff):
 *   volt = #b8e62e, deep = #1f2937, mid = #3b82f6. Text always uses ink tokens.
 */
import { MODELS, formatWh, type StationModel } from "../data/models";

const VOLT = "#84cc16";
const DEEP = "#1f2937";
const MID = "#3b82f6";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${esc(note)}</p>` : ""}
</figure>`;
}

function barChart(
  rows: { label: string; value: number; display: string }[],
  max: number,
  color: string,
  unit: string
) {
  const bars = rows
    .map(
      (r) => `<div class="viz-row">
      <span class="viz-label">${esc(r.label)}</span>
      <span class="viz-bar"><span style="width:${((r.value / max) * 100).toFixed(1)}%;background:${color}"></span></span>
      <span class="viz-val">${esc(r.display)}</span>
    </div>`
    )
    .join("");
  return `<div class="viz-bars" role="img" aria-label="Bar chart, values in ${esc(unit)}">${bars}</div>`;
}

/** Horizontal bar chart of battery capacity across all models. */
export function capacityChart(models: StationModel[] = MODELS): string {
  const rows = [...models]
    .sort((a, b) => b.capacityWh - a.capacityWh)
    .map((m) => ({ label: m.shortName, value: m.capacityWh, display: formatWh(m.capacityWh) }));
  return figure(
    "Capacity compared",
    "Usable battery capacity, watt-hours",
    barChart(rows, Math.max(...rows.map((r) => r.value)), VOLT, "watt-hours"),
    "Expandability can multiply these figures — see each review's spec table."
  );
}

/** Horizontal bar chart of continuous AC output across all models. */
export function outputChart(models: StationModel[] = MODELS): string {
  const rows = [...models]
    .sort((a, b) => b.outputW - a.outputW)
    .map((m) => ({ label: m.shortName, value: m.outputW, display: `${m.outputW.toLocaleString("en-US")}W` }));
  return figure(
    "Continuous output compared",
    "How much load each station can sustain, watts",
    barChart(rows, Math.max(...rows.map((r) => r.value)), MID, "watts"),
    "Surge ratings are higher — check the spec table for startup loads like fridges and pumps."
  );
}

/** Watt-hours per dollar: which stations give the most capacity for the money. */
export function valueChart(models: StationModel[] = MODELS): string {
  const rows = [...models]
    .map((m) => ({ label: m.shortName, value: m.capacityWh / m.priceLow, display: `${(m.capacityWh / m.priceLow).toFixed(2)} Wh/$` }))
    .sort((a, b) => b.value - a.value);
  return figure(
    "Capacity per dollar",
    "Watt-hours per dollar at street price — higher is better value",
    barChart(rows, Math.max(...rows.map((r) => r.value)), DEEP, "watt-hours per dollar"),
    "Based on the low end of each model's street price range. Prices move weekly."
  );
}

/** Diagram: how a portable power station + solar panels cover an outage. */
export function backupDiagram(): string {
  return figure(
    "How a power station covers an outage",
    "The three paths power takes",
    `<div class="viz-diagram">
      <div class="viz-node"><strong>Solar panels</strong><span>recharge by day</span></div>
      <div class="viz-arrow" aria-hidden="true">→</div>
      <div class="viz-node hot"><strong>Power station</strong><span>stores Wh, inverts to AC</span></div>
      <div class="viz-arrow" aria-hidden="true">→</div>
      <div class="viz-node"><strong>Your loads</strong><span>fridge, router, lights</span></div>
    </div>
    <div class="viz-diagram">
      <div class="viz-node"><strong>Wall outlet</strong><span>fast recharge</span></div>
      <div class="viz-arrow" aria-hidden="true">→</div>
      <div class="viz-node hot"><strong>Power station</strong><span>UPS mode: &lt;20ms switchover</span></div>
      <div class="viz-arrow" aria-hidden="true">→</div>
      <div class="viz-node"><strong>Critical loads</strong><span>PC, modem, CPAP</span></div>
    </div>`,
    "A station is silent and indoor-safe; a gas generator is louder, needs fuel, and must run outdoors."
  );
}

/** Diagram: sizing a station — capacity vs output, the two numbers that matter. */
export function sizingDiagram(): string {
  return figure(
    "The two numbers that matter",
    "Capacity decides how long — output decides what",
    `<div class="viz-diagram">
      <div class="viz-node"><strong>Capacity (Wh)</strong><span>how long things run:<br>fridge 150W × 10h ≈ 1500Wh</span></div>
      <div class="viz-arrow" aria-hidden="true">+</div>
      <div class="viz-node"><strong>Output (W)</strong><span>what can run at once:<br>microwave needs 1000W+ sustained</span></div>
      <div class="viz-arrow" aria-hidden="true">=</div>
      <div class="viz-node hot"><strong>Right-sized station</strong><span>enough of both,<br>neither wasted</span></div>
    </div>`,
    "Our RV sizer does this math for you — see the tools page."
  );
}

export const VISUALS: Record<string, () => string> = {
  "chart:capacity": () => capacityChart(),
  "chart:output": () => outputChart(),
  "chart:value": () => valueChart(),
  "diagram:backup": backupDiagram,
  "diagram:sizing": sizingDiagram,
};
