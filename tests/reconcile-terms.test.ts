import { describe, it, expect } from "vitest";
import { buildTermStub } from "../scripts/ingest/reconcile-terms";

describe("buildTermStub", () => {
  it("renders a term file from a glossary entry with a lecture ref", () => {
    const out = buildTermStub({
      term: "Counterfactual",
      slug: "counterfactual",
      definition: "The unobserved potential outcome under the other treatment status.",
      lectureRef: "[[Lec_10-Difference-in-Differences|Lec 10]]",
    }, "econometrics");
    expect(out).toContain("title: Counterfactual");
    expect(out).toContain("subject: econometrics");
    expect(out).toContain("ai_drafted: true");
    expect(out).toContain("The unobserved potential outcome");
    expect(out).toContain("See [[Lec_10-Difference-in-Differences|Lec 10]].");
  });

  it("omits the See line when there is no lecture ref", () => {
    const out = buildTermStub({ term: "X", slug: "x", definition: "A thing.", lectureRef: null }, "econometrics");
    expect(out).not.toContain("See [[");
    expect(out).toContain("A thing.");
  });
});
