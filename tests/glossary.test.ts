import { describe, it, expect } from "vitest";
import { parseGlossary } from "../src/lib/glossary";

const SAMPLE = `---
title: Econometrics Concepts
---

# Econometrics Concepts

> Intro blockquote, ignored.

---

## Foundations, OLS & inference

### OLS Estimation
Ordinary Least Squares: minimises squared residuals. → [[Lec_01-Introduction & Treatment Effects|Lec 1]]

### F-test
Joint-significance test comparing **nested** models. → [[PP_01-Emotions & Risky Choice (Practice Exam)|PP1 Q1a]]

---

## Difference-in-differences

### Difference-in-Differences
(Treatment change) − (control change). → [[Lec_10-Difference-in-Differences|Lec 10]]

---

## Aliases & shorthands

### LPM
See [[#Linear Probability Model]].

### OLS
See [[#OLS Estimation]].
`;

describe("parseGlossary", () => {
  const g = parseGlossary(SAMPLE);

  it("parses topic sections excluding aliases & intro", () => {
    expect(g.topics.map((t) => t.title)).toEqual([
      "Foundations, OLS & inference",
      "Difference-in-differences",
    ]);
  });

  it("parses entries with slug, definition, and lecture ref", () => {
    const ols = g.topics[0].entries[0];
    expect(ols.term).toBe("OLS Estimation");
    expect(ols.slug).toBe("ols-estimation");
    expect(ols.definition).toBe("Ordinary Least Squares: minimises squared residuals.");
    expect(ols.lectureRef).toBe("[[Lec_01-Introduction & Treatment Effects|Lec 1]]");
  });

  it("strips the trailing citation from the definition only", () => {
    const f = g.topics[0].entries[1];
    expect(f.definition).toBe("Joint-significance test comparing **nested** models.");
    expect(f.lectureRef).toBe("[[PP_01-Emotions & Risky Choice (Practice Exam)|PP1 Q1a]]");
  });

  it("registers aliases from the Aliases & shorthands section", () => {
    expect(g.aliases.get("lpm")).toBe("linear-probability-model");
    expect(g.aliases.get("ols")).toBe("ols-estimation");
  });

  it("flattens to all entries via a helper", () => {
    expect(g.entries.map((e) => e.slug)).toContain("difference-in-differences");
    expect(g.entries.length).toBe(3);
  });
});
