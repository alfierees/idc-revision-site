// First-visit onboarding rules. Pure, so the inline head script on the home
// page and the tests share one definition (the head script mirrors this logic).
import { isSemesterId } from "./semesters";

export const ONBOARDED_KEY = "idc-revision:onboarded";

export interface OnboardingState {
  storedSemester: string | null;
  onboarded: boolean;
  /** location.hash, with or without the leading "#". */
  hash: string;
}

/** True only for a plain visit with no semester, not yet onboarded, and no valid #y?s? deep link. */
export function shouldOnboard({ storedSemester, onboarded, hash }: OnboardingState): boolean {
  if (onboarded) return false;
  if (isSemesterId(storedSemester)) return false;
  if (isSemesterId(hash.replace(/^#/, ""))) return false;
  return true;
}
