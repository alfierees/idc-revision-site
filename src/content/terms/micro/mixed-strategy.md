---
title: Mixed Strategy
subject: micro
aliases: ["randomised strategy", "mixed-strategy Nash equilibrium"]
related: ["nash-equilibrium", "best-response", "game-theory"]
source_folder: micro
ai_drafted: true
---

A **mixed strategy** assigns a probability distribution over pure strategies: player $i$ plays strategy $s_i^k$ with probability $p_k$, where $\sum_k p_k = 1$. A **mixed-strategy Nash Equilibrium** requires every player to be *indifferent* between all pure strategies they play with positive probability — otherwise they would deviate entirely to the strictly better one:
$$EU_i(s_i^k) = EU_i(s_i^j) \quad \text{for all } k, j \text{ played with positive probability}.$$

![](/images/micro/t3-rps-cycle.png)

Rock-Paper-Scissors is the canonical example: best responses cycle around the loop and no pure-strategy NE exists, so the unique equilibrium is to randomise uniformly over the three actions.

## When to use

Solve for a mixed-strategy NE whenever a game has no pure-strategy [[Nash Equilibrium]] (e.g. Rock-Paper-Scissors, zero-sum games), or when you are asked for *all* equilibria of a coordination game (Battle of the Sexes has two pure NE plus one mixed NE). The trick is to make the *opponent* indifferent: solve $EU_j(\text{strategy A}) = EU_j(\text{strategy B})$ for your own mixing probability.
