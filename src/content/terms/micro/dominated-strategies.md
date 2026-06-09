---
title: Dominated Strategies
subject: micro
aliases: ["iterated dominance", "IESDS", "iterated elimination of strictly dominated strategies"]
related: ["game-theory", "nash-equilibrium", "strategic-interaction", "dominated-strategy", "iterated-dominance", "normal-form-game"]
source_folder: micro
ai_drafted: true
---

A strategy $s_i$ is **strictly dominated** by $s_i'$ if $s_i'$ gives player $i$ a strictly higher payoff for *every* possible strategy the opponent might play. A rational player will never play a strictly dominated strategy, because there is always something strictly better — regardless of what the other side does. **Weak domination** relaxes strict to "at least as good in all cases, strictly better in at least one."

**Iterated Elimination of Strictly Dominated Strategies (IESDS)** exploits this: since rational players never play dominated strategies, and they *know* their opponents are rational too, we can iteratively eliminate dominated strategies from the game matrix until none remain. The order of elimination does not affect the final outcome, and any surviving [[Nash Equilibrium]] is never eliminated by IESDS — making IESDS a useful sanity-check. See [[Topic 3 — Game Theory]] for worked examples including the 4×4 game.

## When to use

Apply dominated-strategy elimination as the first step before searching for Nash equilibria: strip out all dominated strategies to reduce the matrix, then use best-response underlining on the reduced game. The critical distinction is between a **dominant strategy** (best regardless of the opponent's choice) and a **best response** (best only given a *specific* opponent strategy). The Prisoner's Dilemma is the canonical example where a dominant strategy exists for both players and leads directly to the unique Nash Equilibrium.
