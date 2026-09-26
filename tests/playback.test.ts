import { describe, expect, it } from "vitest";
import { stepDwellMs, PLAYBACK_MIN_MS, PLAYBACK_MAX_MS } from "../src/components/graphs/playback";

describe("stepDwellMs", () => {
  it("gives short notes the minimum beat", () => {
    expect(stepDwellMs("Your turn.")).toBe(PLAYBACK_MIN_MS);
  });

  it("grows with the number of words to read", () => {
    const shortNote = "Pick a threshold: predict positive above it.";
    const longNote = "Pick a threshold: predict positive above it. TPR = share of positives caught; FPR = share of negatives wrongly flagged.";
    expect(stepDwellMs(longNote)).toBeGreaterThan(stepDwellMs(shortNote));
    expect(stepDwellMs(longNote)).toBe(1500 + 20 * 280);
  });

  it("adds time for a live equation", () => {
    const note = "Move each centroid to the average of its points.";
    expect(stepDwellMs(note, "\\mu_j = \\bar x_j")).toBe(stepDwellMs(note) + 1000);
    expect(stepDwellMs(note, "  ")).toBe(stepDwellMs(note));
  });

  it("never stalls on a very long note", () => {
    expect(stepDwellMs("word ".repeat(200))).toBe(PLAYBACK_MAX_MS);
  });
});
