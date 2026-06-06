---
title: "How to Find Nash Equilibria — Best Response Method"
subject: micro
related_terms: ["nash-equilibrium", "best-response", "normal-form-game", "dominated-strategy"]
source_folder: micro
ai_drafted: true
---

Use this recipe to find all pure-strategy [[Nash Equilibrium|Nash Equilibria]] in a small [[Normal-Form Game]]. The underlining (or "doubly-circled") method is mechanical, fast, and the standard exam approach.

1. For each **column**, find the **row** that gives Player 1 the highest payoff → underline that payoff.
2. For each **row**, find the **column** that gives Player 2 the highest payoff → underline that payoff.
3. Any cell where **both payoffs are underlined** is a Nash Equilibrium.

## Common pitfalls

- Confusing the first and second payoffs in each cell. By convention the first number is Player 1's payoff (row chooser), the second is Player 2's (column chooser).
- Stopping at the first NE. Games can have 0, 1, or multiple pure-strategy NE — finish the full underlining pass before reporting.
- Forgetting the mixed-strategy NE. If the underlining produces zero pure NE (or you've been asked for *all* equilibria), set up an indifference condition and solve for the [[Mixed Strategy]] equilibrium.
- Treating ties carelessly: if a row and column tie at the same payoff, both are underlined. Do not silently break the tie.

## Worked example

Prisoner's Dilemma (marketing game):

|             | Not hire | Hire     |
|-------------|----------|----------|
| Not hire    | 5, 5     | 3, **<u>6</u>** |
| Hire        | **<u>6</u>**, 3 | **<u>4</u>**, **<u>4</u>** |

P1's best response is "Hire" against both columns (6 > 5 and 4 > 3) — underline 6 and 4 in the Hire row. P2's best response is "Hire" against both rows — underline 6 and 4 in the Hire column. The only doubly underlined cell is (Hire, Hire) → (4, 4), the unique Nash Equilibrium.
