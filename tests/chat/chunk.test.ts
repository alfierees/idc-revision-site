import { describe, it, expect } from "vitest";
import { chunkDocument } from "../../src/lib/chat/chunk";

describe("chunkDocument", () => {
  it("emits a single chunk for a short term with metadata + url", () => {
    const chunks = chunkDocument({
      kind: "term",
      subject: "micro",
      slug: "risk-aversion",
      data: { title: "Risk Aversion", aliases: [], related: ["insurance"] },
      body: "A preference for a certain outcome over a fair gamble.",
    });
    expect(chunks).toHaveLength(1);
    expect(chunks[0]).toMatchObject({
      title: "Risk Aversion",
      subject: "micro",
      kind: "term",
      url: "/subjects/micro/dictionary/risk-aversion",
      concepts: ["insurance"],
    });
    expect(chunks[0].text).toContain("certain outcome");
    expect(chunks[0].id).toBe("micro/term/risk-aversion#0");
  });

  it("splits a long lecture body on h2 headings", () => {
    const body = "# Lec\n\n## Intro\n" + "x ".repeat(50) + "\n\n## Method\n" + "y ".repeat(50);
    const chunks = chunkDocument({
      kind: "lecture",
      subject: "econometrics",
      slug: "lec-10-did",
      data: { title: "DiD", tags: ["did"] },
      body,
    });
    expect(chunks.length).toBeGreaterThanOrEqual(2);
    expect(chunks.every((c) => c.url === "/subjects/econometrics/lectures/lec-10-did")).toBe(true);
    expect(chunks[0].concepts).toEqual(["did"]);
  });

  it("builds one chunk per question for a problem-set (from frontmatter)", () => {
    const chunks = chunkDocument({
      kind: "problem-set",
      subject: "micro",
      slug: "ex-9-micro-3",
      data: {
        title: "EX-9",
        tags: ["double-marginalization"],
        source_doc: "/papers/micro/ex-9-micro-3.docx",
        questions: [
          { id: "1a", text: "Monopolist sells directly.", solution: "Q=100." },
          { id: "1b", text: "Through a distributor.", solution: "w=100." },
        ],
      },
      body: "",
    });
    expect(chunks).toHaveLength(2);
    expect(chunks[0].text).toContain("Monopolist sells directly");
    expect(chunks[0].text).toContain("Q=100");
    expect(chunks[0].sourceDoc).toBe("/papers/micro/ex-9-micro-3.docx");
    expect(chunks[0].id).toBe("micro/problem-set/ex-9-micro-3#0");
  });
});
