import { describe, it, expect } from "vitest";
import { computeBacklinks } from "../src/lib/backlinks";

describe("computeBacklinks", () => {
  it("finds [[Term]] references across recipes, problem sets and past papers", () => {
    const result = computeBacklinks({
      subject: "econometrics",
      knownTermSlugs: new Set(["heteroskedasticity", "ols-estimator"]),
      aliases: new Map([["heteroscedasticity", "heteroskedasticity"]]),
      recipes: [
        { slug: "testing-heteroskedasticity", title: "Testing for heteroskedasticity", body: "Refer to [[Heteroskedasticity]] and [[OLS Estimator]]." },
      ],
      problemSets: [
        { slug: "ps1", title: "Problem Set 1", questions: [
          { id: "Q1", text: "Talk about [[Heteroscedasticity]].", solution: "" },
        ] },
      ],
      pastPapers: [
        { slug: "2023-exam", title: "2023 Final Exam", questions: [
          { id: "Q1a", text: "Define [[Heteroskedasticity]].", solution: "" },
        ] },
      ],
    });

    expect(result.get("heteroskedasticity")).toEqual([
      { type: "recipe",       ref: "testing-heteroskedasticity", title: "Testing for heteroskedasticity" },
      { type: "problem-set",  ref: "ps1",         title: "Problem Set 1",      question: "Q1"  },
      { type: "past-paper",   ref: "2023-exam",   title: "2023 Final Exam",    question: "Q1a" },
    ]);
    expect(result.get("ols-estimator")).toEqual([
      { type: "recipe", ref: "testing-heteroskedasticity", title: "Testing for heteroskedasticity" },
    ]);
  });

  it("ignores [[term]] references whose slug is not in knownTermSlugs", () => {
    const result = computeBacklinks({
      subject: "econometrics",
      knownTermSlugs: new Set(["heteroskedasticity"]),
      aliases: new Map(),
      recipes: [],
      problemSets: [{ slug: "ps1", title: "PS1", questions: [
        { id: "Q1", text: "[[Cointegration]] is unknown.", solution: "" },
      ] }],
      pastPapers: [],
    });
    expect(result.size).toBe(0);
  });
});
