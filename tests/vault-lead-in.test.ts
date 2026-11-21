import { describe, expect, it } from "vitest";
import { splitPaperLeadIn, stripVaultLeadIn } from "../src/lib/vault-lead-in";

describe("stripVaultLeadIn", () => {
  it("removes the repeated title and the vault navigation lines", () => {
    const body = "# Inflation\n\n> Part of: [[Macro II]] | Key concepts: [[Velocity]], [[Fisher Effect]]\n> Previous: [[Lec 4]] | Next: %%TODO%%\n\n---\n\nThe chapter starts here.\n\n## Part 1\n";
    expect(stripVaultLeadIn(body, "Inflation").trimStart()).toBe("The chapter starts here.\n\n## Part 1\n");
  });
  it("keeps an H1 that says more than the page title", () => {
    const body = "# Session 2 — Accounting Fundamentals\n\nText";
    expect(stripVaultLeadIn(body, "Accounting Fundamentals")).toContain("# Session 2");
  });
  it("keeps facts that share the blockquote", () => {
    const body = "> Part of: [[Macro II]]\n> **Moed B, 17 March 2025**: 25 questions, 2.5 hours.\n\n## Q1\n";
    const result = stripVaultLeadIn(body, "Paper");
    expect(result).toContain("> **Moed B, 17 March 2025**");
    expect(result).not.toContain("Part of");
  });
  it("keeps other segments on a navigation line, and pipes inside wiki-links", () => {
    const result = stripVaultLeadIn("> Part of: [[Macro]] | Teaching notes: [[Notes|my notes]]\n\nText", "Paper");
    expect(result).toContain("> Teaching notes: [[Notes|my notes]]");
    expect(result).not.toContain("Part of");
  });
  it("leaves the same words alone after the first section", () => {
    const body = "Intro\n\n## Related\n\n> Previous: [[Lec 4]]\n";
    expect(stripVaultLeadIn(body, "Paper")).toContain("> Previous: [[Lec 4]]");
  });
});

describe("splitPaperLeadIn", () => {
  const body = [
    "> Builds on: [[Lec 3]] · [[Lec 4]]",
    "",
    "> [!info] Which sitting is this?",
    "> It is Moed B.",
    "",
    "> [!warning] AI-solved questions: **ALL 25**",
    "> There is no official key.",
    "",
    "Some real intro.",
    "",
    "## What this paper tests",
    "",
    "> [!info] Stays here",
    "> Inside the paper.",
  ].join("\n");

  it("moves provenance into About and leaves the real intro", () => {
    const { mainMarkdown, aboutMarkdown } = splitPaperLeadIn(body);
    expect(aboutMarkdown).toContain("Which sitting");
    expect(aboutMarkdown).toContain("AI-solved");
    expect(aboutMarkdown).toContain("Builds on");
    expect(mainMarkdown).not.toContain("Which sitting");
    expect(mainMarkdown).toContain("Some real intro.");
  });
  it("only touches callouts before the first section", () => {
    expect(splitPaperLeadIn(body).mainMarkdown).toContain("Stays here");
  });
  it("surfaces warning titles so answer caveats stay visible", () => {
    expect(splitPaperLeadIn(body).warningTitles).toEqual(["AI-solved questions: ALL 25"]);
  });
  it("gives an untitled warning a readable label", () => {
    expect(splitPaperLeadIn("> [!warning]\n> Careful.\n").warningTitles).toEqual(["Check these answers before relying on them"]);
  });
});
