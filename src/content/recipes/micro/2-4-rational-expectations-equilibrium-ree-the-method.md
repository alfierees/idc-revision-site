---
title: "2.4 Rational Expectations Equilibrium (REE) — The Method"
subject: micro
related_terms: []
source_folder: micro
ai_drafted: true
---

Use this recipe whenever a market has multiple quality types and you need to find the **Rational Expectations Equilibrium** — the largest self-consistent set of types that trade given the expected buyer value implied by their participation.

1. Start by testing whether ALL types could be in the market.
2. Calculate $E[\text{buyer value}]$ using the full distribution.
3. Check if $E[\text{buyer value}] \geq$ each seller's reservation value. If the highest type fails, remove them.
4. Recalculate $E[\text{buyer value}]$ with the remaining types and repeat.
5. The equilibrium is the largest self-consistent set — the one where $E[\text{buyer value}]$ satisfies all remaining sellers.

## Common pitfalls

- Forgetting that multiple REE can co-exist — even when the threshold for the "good" equilibrium is met (e.g. $p \geq 0.8$ in the lemons example), the "bad" lemons-only equilibrium still exists, because beliefs are self-fulfilling.
- Mixing up buyer value with seller value when checking the participation constraint.

## Worked example

Two-type lemons market: good cars (buyer \$3,000, seller \$2,800), bad cars (buyer \$2,000, seller \$1,800), $p = 0.75$. Step 1 — test all types: $E[\text{buyer value}] = 0.75 \times 3000 + 0.25 \times 2000 = \$2{,}750$, which is below the good-seller reservation of \$2,800 → drop good cars. Step 2 — test only bad cars: buyer value \$2,000 ≥ seller reservation \$1,800 → REE is "only bad cars trade at \$2,000." Threshold analysis: good equilibrium requires $3000p + 2000(1-p) \geq 2800 \Rightarrow p \geq 0.8$.
