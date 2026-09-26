// How long Play holds each step before moving on: long enough to read the
// narration (about 215 words a minute), plus time for the ink to draw and, when
// there is one, to glance at the live equation. Clamped so one-word notes still
// get a beat and long notes never stall the run.

export const PLAYBACK_MS_PER_WORD = 280;
export const PLAYBACK_DRAW_MS = 1500;
export const PLAYBACK_EQUATION_MS = 1000;
export const PLAYBACK_MIN_MS = 3000;
export const PLAYBACK_MAX_MS = 12000;

export function stepDwellMs(note: string, tex?: string): number {
  const wordCount = note.trim().split(/\s+/).filter(Boolean).length;
  const equationTime = tex && tex.trim() ? PLAYBACK_EQUATION_MS : 0;
  const total = PLAYBACK_DRAW_MS + wordCount * PLAYBACK_MS_PER_WORD + equationTime;
  return Math.min(PLAYBACK_MAX_MS, Math.max(PLAYBACK_MIN_MS, total));
}
