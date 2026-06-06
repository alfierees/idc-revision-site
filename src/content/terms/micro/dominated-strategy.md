---
title: Dominated Strategy
subject: micro
aliases: ["strictly dominated strategy", "weakly dominated strategy"]
related: ["iterated-dominance", "best-response", "nash-equilibrium"]
source_folder: micro
ai_drafted: true
---

A strategy $s_i$ is **strictly dominated** by $s_i'$ if, for every possible strategy of the opponent, $s_i'$ gives a strictly higher payoff:
$$u_i(s_i', s_{-i}) > u_i(s_i, s_{-i}) \quad \forall \, s_{-i}.$$
A rational player will never play a strictly dominated strategy. **Weak dominance** is the same condition with $\geq$ everywhere and strict inequality in at least one case.

## When to use

Check for dominated strategies as the first move when solving any [[Normal-Form Game]]. If a strategy is strictly dominated, eliminate it and recurse — this is [[Iterated Dominance]] (IESDS). Any Nash Equilibrium survives IESDS, so the procedure is a safe pre-filter before searching for NE. Don't confuse "dominated" with "not a best response": dominance must hold *against every* opponent strategy.
