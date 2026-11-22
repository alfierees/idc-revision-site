import { describe, it, expect } from "vitest";
import { fitScale, MATH_FIT_FLOOR } from "../src/lib/fit-display-math";

describe("fitScale", () => {
  it("leaves a formula that fits alone", () => {
    expect(fitScale(289, 289)).toBe(1);
    expect(fitScale(289, 200)).toBe(1);
  });

  it("tolerates a pixel of sub-pixel rounding", () => {
    expect(fitScale(289, 290)).toBe(1);
  });

  it("shrinks a wider formula to fit, rounding down so no 1px scrollbar is left", () => {
    // PP_04 "New shares = Current shares × p / (1 − p)": 367px of content in 289px.
    expect(fitScale(289, 367)).toBe(0.78);
    expect(fitScale(200, 300)).toBe(0.66);
  });

  it("never goes below the readable floor, however wide the formula", () => {
    expect(fitScale(289, 441)).toBe(MATH_FIT_FLOOR); // 0.655 exact -> floor
    expect(fitScale(100, 1000)).toBe(MATH_FIT_FLOOR);
    expect(fitScale(100, 1000, 0.5)).toBe(0.5);
  });

  it("ignores hidden or empty formulas (display: none gives 0 widths)", () => {
    expect(fitScale(0, 0)).toBe(1);
    expect(fitScale(0, 400)).toBe(1);
    expect(fitScale(289, 0)).toBe(1);
  });
});
