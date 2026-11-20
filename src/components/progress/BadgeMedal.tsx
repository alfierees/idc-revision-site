import type { BadgeDef, BadgeFamily } from "../../lib/progress/badges";
import { earnedLabel } from "../../lib/progress/days";

export const FAMILY_GLYPH: Record<BadgeFamily, string> = {
  lectures: "M4 6c3-1 5-1 8 1 3-2 5-2 8-1v12c-3-1-5-1-8 1-3-2-5-2-8-1z M12 7v12",
  practice: "M5 19l2-6 9-9 4 4-9 9-6 2z M14 6l4 4",
  papers: "M7 3h8l4 4v14H7z M15 3v4h4 M10 12h6 M10 16h6",
  coverage: "M12 3a9 9 0 1 0 9 9h-9z M14 3.2A9 9 0 0 1 20.8 10H14z",
  breadth: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18",
  habit: "M12 3c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3-1-5 1-8z",
  keepsakes: "M20 14A8 8 0 1 1 10 4a6 6 0 0 0 10 10z",
};

interface Props {
  badge: BadgeDef;
  earnedOn?: string;
  progress?: { have: number; need: number };
  size?: "sm" | "md";
}

export default function BadgeMedal({ badge, earnedOn, progress, size = "md" }: Props) {
  const earned = earnedOn !== undefined;
  const label = earned ? `${badge.name}, ${earnedLabel(earnedOn).toLowerCase()}` : `${badge.name}, locked: ${badge.rule}`;
  const pips = Math.max(0, Math.min(badge.step, 6));
  const pipAngles = Array.from({ length: pips }, (_, i) => {
    const spread = Math.min(70, 16 * (pips - 1));
    const angle = pips === 1 ? 90 : 90 - spread / 2 + (spread / (pips - 1)) * i;
    const radians = (angle * Math.PI) / 180;
    return { cx: 28 + 24 * Math.cos(radians), cy: 28 + 24 * Math.sin(radians) };
  });
  return (
    <figure class={`medal medal-${size}${earned ? " medal-earned" : " medal-locked"}`} aria-label={label} role="group">
      <svg viewBox="0 0 56 56" class="medal-seal" aria-hidden="true">
        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" stroke-width="1.2" class="medal-ring-outer" />
        <circle cx="28" cy="28" r="22" fill="none" stroke="currentColor" stroke-width="0.8" class="medal-ring-inner" />
        <svg x="16" y="16" width="24" height="24" viewBox="0 0 24 24">
          <path d={FAMILY_GLYPH[badge.family]} fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {pipAngles.map((p) => (
          <circle cx={p.cx} cy={p.cy} r="1.5" class="medal-pip" />
        ))}
      </svg>
      <figcaption class="medal-name">{badge.name}</figcaption>
      {!earned && <span class="medal-note">{progress ? `${progress.have} of ${progress.need}` : badge.rule}</span>}
      {earned && size === "md" && <span class="medal-note">{earnedLabel(earnedOn)}</span>}
    </figure>
  );
}
