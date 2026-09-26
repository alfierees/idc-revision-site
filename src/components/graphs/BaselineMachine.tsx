import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, Note, Toggle, INK, MARKER, WASH } from "./sketch";

// One hundred loan applicants (14 will default) scored by three rules:
// "approve everyone" (no model, 86% accuracy, catches nobody), the notebook's
// leaky 98% model (it read columns from the future), and an honest model that
// scores LOWER than doing nothing on accuracy yet is the only useful one.
// Accuracy is the wrong yardstick when the baseline is 86% for free.

const DEFAULTERS = new Set([3, 9, 17, 22, 31, 38, 44, 52, 57, 63, 68, 76, 84, 91]);
const LEAKY_MISSED = 57, LEAKY_FLAGGED = new Set([40]);
const HONEST_CAUGHT = new Set([9, 31, 52, 68, 84]);
const HONEST_REJECTED = new Set([1, 7, 14, 26, 35, 41, 48, 55, 61, 70, 79, 88, 95]);

type Rule = "none" | "leaky" | "honest";
type Status = "repays" | "missed" | "caught" | "rejected";

function statusOf(applicant: number, rule: Rule): Status {
  if (DEFAULTERS.has(applicant)) {
    if (rule === "none") return "missed";
    if (rule === "leaky") return applicant === LEAKY_MISSED ? "missed" : "caught";
    return HONEST_CAUGHT.has(applicant) ? "caught" : "missed";
  }
  if (rule === "leaky" && LEAKY_FLAGGED.has(applicant)) return "rejected";
  if (rule === "honest" && HONEST_REJECTED.has(applicant)) return "rejected";
  return "repays";
}

const SUMMARY: Record<Rule, { accuracy: number; caught: string; rejected: number }> = {
  none: { accuracy: 86, caught: "0 / 14", rejected: 0 },
  leaky: { accuracy: 98, caught: "13 / 14", rejected: 1 },
  honest: { accuracy: 78, caught: "5 / 14", rejected: 13 },
};

const NOTES = [
  "One hundred applicants. Fourteen of them will default.",
  "Approve everyone, no model at all: 86% accuracy. It catches nobody.",
  "The notebook's model: 98%. But it read columns from the future (Cell 3), so the score isn't real.",
  "An honest model on fixed data: 78%, lower than doing nothing, yet the only one that catches anyone. Accuracy is the wrong yardstick here.",
];

export default function BaselineMachine(): VNode {
  const [exploreRule, setExploreRule] = useState<Rule>("honest");
  const sketch = useSketch({ stepCount: NOTES.length + 1, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.62, minHeight: 280, maxHeight: 400, maxWidth: 620, padding: { left: 0, right: 0, top: 0, bottom: 0 } });
  const { step } = sketch;
  const rule: Rule | null = step === 0 ? null : step === 1 ? "none" : step === 2 ? "leaky" : step === 3 ? "honest" : exploreRule;
  const size = Math.min(sketch.width - 20, sketch.height - 22);
  const gap = size / 10, radius = gap * 0.36;
  const originX = (sketch.width - gap * 10) / 2 + gap / 2, originY = 14 + gap / 2;
  const styles: Record<Status, string> = {
    repays: `fill:${WASH.green};stroke:${MARKER.green};stroke-width:1.2`,
    missed: `fill:${WASH.red};stroke:${MARKER.red};stroke-width:1.2`,
    caught: `fill:${MARKER.red};stroke:${INK};stroke-width:2.6`,
    rejected: `fill:${WASH.amber};stroke:${MARKER.amber};stroke-width:1.6`,
  };
  const drawing: VNode[] = [];
  for (let applicant = 0; applicant < 100; applicant++) {
    const status: Status = rule === null ? (DEFAULTERS.has(applicant) ? "missed" : "repays") : statusOf(applicant, rule);
    drawing.push(<circle cx={originX + (applicant % 10) * gap} cy={originY + Math.floor(applicant / 10) * gap} r={radius} style={`${styles[status]};transition:fill .4s ease, stroke .4s ease, stroke-width .4s ease`} />);
  }
  if (rule === "leaky") drawing.push(<Note x={sketch.width / 2} y={originY + gap * 4.7} text="built on leaked columns" color={MARKER.red} anchor="middle" size={26} />);
  const summary = rule ? SUMMARY[rule] : null;
  const tex = summary ? `\\text{accuracy } ${summary.accuracy}\\%,\\quad \\text{defaulters caught } ${summary.caught},\\quad \\text{wrongly rejected } ${summary.rejected}` : "14 \\text{ of } 100 \\text{ will default}";
  return (
    <SketchGraph sketch={sketch} note={step < NOTES.length ? NOTES[step] : "Your turn. Switch between the three rules."} tex={tex}
      ariaLabel={summary ? `Accuracy ${summary.accuracy} percent, defaulters caught ${summary.caught}, wrongly rejected ${summary.rejected}.` : "One hundred applicants, 14 defaulters."}
      footnote="Green: repays · pale red: defaulter missed · solid red: defaulter caught · amber: good customer wrongly rejected"
      explore={<Toggle label="Rule" options={[{ key: "none", label: "Approve everyone" }, { key: "leaky", label: "The notebook's model" }, { key: "honest", label: "An honest model" }]} active={exploreRule} onPick={(key) => setExploreRule(key as Rule)} />}>
      {drawing}
    </SketchGraph>
  );
}
