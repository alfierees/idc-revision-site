export interface RecipeCandidate {
  title: string;
  stepCount: number;
}

const VERB_LED = /^(to\s+|how\s+to|steps?\s+|procedure|method)/i;
const HEADING = /^(#{2,3})\s+(.+?)\s*$/;
const ORDERED_ITEM = /^\d+\.\s+/;

export function detectRecipes(markdown: string): RecipeCandidate[] {
  const lines = markdown.split("\n");
  const out: RecipeCandidate[] = [];

  for (let i = 0; i < lines.length; i++) {
    const h = lines[i].match(HEADING);
    if (!h) continue;
    const title = h[2];
    const isVerbLed = VERB_LED.test(title);

    // Find the first ordered-list item within the next 3 non-blank lines.
    let j = i + 1, seenLines = 0, listStart = -1;
    while (j < lines.length && seenLines < 3) {
      if (lines[j].trim().length === 0) { j++; continue; }
      if (ORDERED_ITEM.test(lines[j].trim())) { listStart = j; break; }
      seenLines++;
      j++;
    }
    if (listStart === -1) continue;

    let stepCount = 0, k = listStart;
    while (k < lines.length && ORDERED_ITEM.test(lines[k].trim())) {
      stepCount++; k++;
    }

    if (isVerbLed || stepCount >= 3) {
      out.push({ title, stepCount });
    }
  }
  return out;
}
