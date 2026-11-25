import { describe, expect, it } from "vitest";
import { parseMcq } from "../src/lib/mcq-parse";
import { shuffleMcq, keyIsLopsided, shufflePaper } from "../src/lib/mcq-shuffle";

const listPrompt = `Assume the Solow model. The higher the population growth rate:

- A. Lower, lower, zero
- B. Higher, higher, higher
- C. Lower, higher, zero
- D. Lower, higher, higher`;

const listAnswer = `> [!success] Answer: C. Lower, higher, zero

Higher $n$ raises break-even investment, so $k^*$ falls.

> [!failure] Why the others are wrong
> - **A:** total income growth equals $n$, which rose.
> - **B and D:** income per capita growth is zero.`;

describe("parseMcq", () => {
  it("parses a lettered option list, the answer letter and per-option whys", () => {
    const m = parseMcq(listPrompt, listAnswer)!;
    expect(m).not.toBeNull();
    expect(m.stem).toBe("Assume the Solow model. The higher the population growth rate:");
    expect(m.options.map((o) => o.label)).toEqual(["A", "B", "C", "D"]);
    expect(m.options.find((o) => o.correct)!.label).toBe("C");
    expect(m.options[0].why).toMatch(/total income growth/i);
    expect(m.options[1].why).toMatch(/per capita/);
    expect(m.options[3].why).toMatch(/per capita/);
    expect(m.options[2].why).toMatch(/break-even/);
    expect(m.working).toBe(listAnswer);
  });

  it("parses inline options after 'Options:'", () => {
    const m = parseMcq(
      "Severe pollution from steel. Options: A) a tax or permits work the same. B) permits always better. C) taxes always better. D) all wrong.",
      "> [!success] Answer: A\n> Both internalise the externality.\n\nB is wrong because a correct tax adds no inefficiency.",
    )!;
    expect(m.stem).toBe("Severe pollution from steel.");
    expect(m.options).toHaveLength(4);
    expect(m.options[0].correct).toBe(true);
    expect(m.options[1].why).toMatch(/^B is wrong because/);
  });

  it("parses lower-case options on separate lines and inside a quote", () => {
    const m = parseMcq(
      "> **Question.** What is the equilibrium?\n> a. Q = 80, P = 3.6.\n> b. Q = 90, P = 4.\n> c. Q = 85, P = 2.\n> d. All the other answers are wrong.",
      "Solve.\n\n> [!success] Answer: a\n> $Q = 80$.\n\n> [!example] Why the others fail\n> b: the curves do not meet. c: demand is 3.45.",
    )!;
    expect(m.options.map((o) => o.label)).toEqual(["A", "B", "C", "D"]);
    expect(m.options[0].correct).toBe(true);
    expect(m.options[1].why).toMatch(/do not meet/);
    expect(m.options[2].why).toMatch(/3\.45/);
  });

  it("parses options in a table", () => {
    const m = parseMcq(
      "Which is unbiased?\n\n| Option | Estimator |\n|---|---|\n| a | $X_1/2$ |\n| b | $X_1/3$ |\n| c | $2X_1$ |",
      "> [!success] Official answer: A ($X_1/2$)\n\nWorking.",
    )!;
    expect(m.options.map((o) => o.text)).toEqual(["$X_1/2$", "$X_1/3$", "$2X_1$"]);
    expect(m.options[0].correct).toBe(true);
  });

  it("marks both options when the key accepts two", () => {
    const m = parseMcq(
      "- a. CS 96, PS 64\n- b. PS 64, CS 96\n- c. CS 46, PS 69",
      "> [!success] Answer: a and b (both accepted)\n> Same thing.",
    )!;
    expect(m.options.filter((o) => o.correct).map((o) => o.label)).toEqual(["A", "B"]);
  });

  it("ignores sub-part lists and answers without a letter", () => {
    expect(parseMcq("- a. Find the domain.\n- b. Find the asymptotes.\n- c. Sketch it.", "> [!success] Answer from the key\n\nWorking.")).toBeNull();
    expect(parseMcq("What is GDP?", "> [!success] Answer: 2,400")).toBeNull();
    // "Answer: A higher price…" is prose, not the letter A, when there are no options.
    expect(parseMcq("Explain.", "Answer: A higher price lowers demand.")).toBeNull();
  });
});

describe("shuffleMcq", () => {
  it("moves options, relabels them and remaps letter references in the working", () => {
    const m = parseMcq(listPrompt, listAnswer)!;
    const s = shuffleMcq(m, "seed-1");
    expect(s).not.toBe(m);
    // Same option texts, new order, labels A–D in order.
    expect(s.options.map((o) => o.label)).toEqual(["A", "B", "C", "D"]);
    expect(new Set(s.options.map((o) => o.text))).toEqual(new Set(m.options.map((o) => o.text)));
    const correct = s.options.find((o) => o.correct)!;
    expect(correct.text).toBe("Lower, higher, zero");
    expect(s.working).toContain(`Answer: ${correct.label}. Lower, higher, zero`);
    // The "why A" bullet now names the new label of the old option A.
    const oldA = s.options.find((o) => o.text === "Lower, lower, zero")!;
    expect(s.working).toContain(`**${oldA.label}:** total income growth`);
    // Math is never touched.
    expect(s.working).toContain("$k^*$");
  });

  it("keeps the article 'A' and statute sub-clauses unchanged", () => {
    const m = parseMcq(
      "- A. one\n- B. two\n- C. three\n- D. four",
      "> [!success] Answer: B\n\nA ceiling creates a shortage, see s.192(a). B is right and C is wrong.",
    )!;
    const s = shuffleMcq({ ...m, sourceUpper: true }, "x");
    expect(s.working).toContain("A ceiling creates a shortage, see s.192(a).");
  });

  it("keeps the order when an option refers to other options", () => {
    const m = parseMcq("- a) X is normal\n- b) Y is normal\n- c) b + c are correct\n- d) none", "> [!success] Answer: c")!;
    expect(shuffleMcq(m, "x")).toBe(m);
  });

  it("keeps the order when a capital letter names something else", () => {
    const m = parseMcq("- A. one\n- B. two\n- C. three\n- D. four", "> [!success] Answer: B\n\nEconomist A is right.")!;
    expect(shuffleMcq(m, "x")).toBe(m);
  });

  it("pins 'all of the above'-style options last", () => {
    const m = parseMcq("- A. one\n- B. two\n- C. three\n- D. All the other answers are wrong.", "> [!success] Answer: A")!;
    for (const seed of ["a", "b", "c", "d", "e"]) {
      const s = shuffleMcq(m, seed);
      expect(s.options[3].text).toBe("All the other answers are wrong.");
    }
  });
});

describe("paper-level shuffle", () => {
  it("only shuffles papers whose key leans on one letter", () => {
    expect(keyIsLopsided([0, 0, 0, 1, 2])).toBe(true);
    expect(keyIsLopsided([0, 1, 2, 3, 0, 1, 2, 3])).toBe(false);
    const m = parseMcq(listPrompt, listAnswer.replace("Answer: C. Lower, higher, zero", "Answer: A"))!;
    const items = ["q1", "q2", "q3", "q4", "q5", "q6"].map((id) => ({ id, seed: id, mcq: m }));
    const out = shufflePaper(items);
    const positions = out.map((x) => x.mcq!.options.findIndex((o) => o.correct));
    // Spread over at least three positions, not all on A.
    expect(new Set(positions).size).toBeGreaterThanOrEqual(3);
  });
});
