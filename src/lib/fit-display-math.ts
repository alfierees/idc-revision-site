// Shrink display formulas that are wider than their box, down to a readable
// floor. Beyond the floor the formula stays at the floor size and scrolls
// sideways; those get `data-math-scrolls`, and globals.css draws an edge shadow
// on them so it reads as "this continues" (see `.eqn .katex-display`).
//
// KaTeX sizes everything in em, so one font-size on `.katex-display` scales the
// whole formula linearly. The scale is published as `--math-fit`, which
// globals.css applies as `font-size: calc(var(--math-fit, 1) * 1em)`.

// KaTeX display math renders at ~21px; 0.66 of that is ~14px, about the size of
// the surrounding prose. Smaller than that and a phone reader can't make out
// subscripts, so past this point we scroll instead of shrinking.
export const MATH_FIT_FLOOR = 0.66;

// Scale (0.xx, never above 1) that makes content `contentWidth` px wide fit a
// box `boxWidth` px wide, clamped to `floor`. Rounds down so sub-pixel
// rounding can't leave a 1px scrollbar.
export function fitScale(boxWidth: number, contentWidth: number, floor: number = MATH_FIT_FLOOR): number {
  if (boxWidth <= 0 || contentWidth <= 0) return 1; // hidden (display: none) or empty
  if (contentWidth <= boxWidth + 1) return 1; // already fits
  const exactScale = boxWidth / contentWidth;
  return Math.max(floor, Math.floor(exactScale * 100) / 100);
}

function fitOne(display: HTMLElement): void {
  // Measure at full size, so the answer doesn't depend on any earlier fit.
  display.style.removeProperty("--math-fit");
  const scale = fitScale(display.clientWidth, display.scrollWidth);
  if (scale < 1) display.style.setProperty("--math-fit", String(scale));
  // Still wider than the box at the floor size: it scrolls, so show the cue.
  display.toggleAttribute("data-math-scrolls", display.scrollWidth > display.clientWidth + 1);
}

export function fitDisplayMath(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(".katex-display").forEach(fitOne);
}

// Fit every display formula now and keep them fitted when the box changes
// width (rotation, resize), when a hidden solution is opened (width goes from
// 0 to real), when web fonts finish loading, and when new formulas appear.
export function keepDisplayMathFitted(): void {
  if (typeof ResizeObserver === "undefined") return;
  const watched = new WeakSet<Element>();
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) fitOne(entry.target as HTMLElement);
  });
  const watchAll = () => {
    document.querySelectorAll<HTMLElement>(".katex-display").forEach((display) => {
      if (watched.has(display)) return;
      watched.add(display);
      resizeObserver.observe(display); // also fires once straight away
    });
  };

  watchAll();
  new MutationObserver(watchAll).observe(document.body, { childList: true, subtree: true });
  // Glyph widths change once KaTeX's web fonts load; measure again then.
  void document.fonts?.ready.then(() => fitDisplayMath());
}
