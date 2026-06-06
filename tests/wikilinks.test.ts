import { describe, it, expect } from "vitest";
import { slugifyTerm, resolveWikiLink } from "../src/lib/wikilinks";

describe("slugifyTerm", () => {
  it("lowercases and hyphenates simple terms", () => {
    expect(slugifyTerm("Heteroskedasticity")).toBe("heteroskedasticity");
    expect(slugifyTerm("OLS Estimator")).toBe("ols-estimator");
  });
  it("collapses multiple spaces and strips punctuation", () => {
    expect(slugifyTerm("Breusch–Pagan Test")).toBe("breusch-pagan-test");
    expect(slugifyTerm("R^2")).toBe("r2");
  });
});

describe("resolveWikiLink", () => {
  const knownSlugs = new Set(["heteroskedasticity", "ols-estimator"]);
  const aliases = new Map([["heteroscedasticity", "heteroskedasticity"]]);

  it("resolves a known slug to a subject-scoped URL", () => {
    const r = resolveWikiLink("Heteroskedasticity", "econometrics", knownSlugs, aliases);
    expect(r).toEqual({ found: true, url: "/subjects/econometrics/dictionary/heteroskedasticity" });
  });
  it("resolves an alias to its canonical slug", () => {
    const r = resolveWikiLink("heteroscedasticity", "econometrics", knownSlugs, aliases);
    expect(r).toEqual({ found: true, url: "/subjects/econometrics/dictionary/heteroskedasticity" });
  });
  it("reports a missing target", () => {
    const r = resolveWikiLink("Cointegration", "econometrics", knownSlugs, aliases);
    expect(r).toEqual({ found: false, url: null });
  });
});
