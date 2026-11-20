import { describe, expect, it } from "vitest";
import { shouldOnboard } from "../src/lib/onboarding";

const fresh = { storedSemester: null, onboarded: false, hash: "" };

describe("shouldOnboard", () => {
  it("shows on a plain first visit", () => {
    expect(shouldOnboard(fresh)).toBe(true);
  });
  it("not when a semester is stored", () => {
    expect(shouldOnboard({ ...fresh, storedSemester: "y2s1" })).toBe(false);
  });
  it("not once onboarded", () => {
    expect(shouldOnboard({ ...fresh, onboarded: true })).toBe(false);
  });
  it("not with a valid semester hash", () => {
    expect(shouldOnboard({ ...fresh, hash: "#y2s1" })).toBe(false);
  });
  it("still shows with an invalid hash", () => {
    expect(shouldOnboard({ ...fresh, hash: "#foo" })).toBe(true);
  });
});
