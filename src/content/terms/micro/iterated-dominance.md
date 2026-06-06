---
title: Iterated Dominance
subject: micro
aliases: ["IESDS", "iterated elimination of strictly dominated strategies"]
related: ["dominated-strategy", "nash-equilibrium", "travellers-dilemma"]
source_folder: micro
ai_drafted: true
---

**Iterated Elimination of Strictly Dominated Strategies (IESDS)** is the procedure of successively removing strictly [[Dominated Strategy|dominated strategies]] from a game and repeating on the reduced game until none remain. Rational players never play a dominated strategy, and they *know* their opponents are rational too — so eliminating dominated rows/columns is safe. The order of elimination does not affect the final result, and **a Nash Equilibrium is never eliminated by IESDS**: if IESDS yields a unique outcome, that outcome is the unique NE.

## When to use

Run IESDS as a pre-filter on any [[Normal-Form Game]] before searching for Nash Equilibria — it shrinks the matrix and often pinpoints the equilibrium directly. The same logic, applied to a continuous strategy space with no other equilibrium refinement, drives the [[Traveller's Dilemma]] unravelling. State explicitly whether you are using *strict* or *weak* dominance — the exam may specify, and strict is the safer default.
