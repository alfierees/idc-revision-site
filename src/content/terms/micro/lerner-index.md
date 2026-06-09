---
title: Lerner Index
subject: micro
aliases: ["markup ratio", "L"]
related: ["price-discrimination", "constant-elasticity-demand", "monopolistic-competition"]
source_folder: micro
ai_drafted: true
---

The **Lerner Index** is a direct measure of monopoly power:
$$L = \frac{P - MC}{P} = \frac{1}{|E|} \in [0, 1].$$
It is derived by rearranging the monopolist's optimality condition $MR = MC$ together with the identity $MR = P(1 - 1/|E|)$. $L \to 0$ corresponds to perfect competition (price equals marginal cost); $L \to 1$ corresponds to maximum monopoly power on highly inelastic demand.

![](/images/micro/t2-mr-elasticity.png)

Along a linear demand curve, $MR$ is positive on the elastic upper half ($|E| > 1$), zero at the midpoint, and negative on the inelastic lower half — so $MR = MC$ always lands the monopolist on the elastic portion.

## When to use

Compute the Lerner Index whenever you have either (a) a price and a marginal cost, or (b) a marginal cost and an elasticity. The inversion $P^* = MC / (1 - 1/|E|)$ is the standard *pricing rule of thumb* for a monopolist facing a [[Constant Elasticity Demand|constant-elasticity demand]] — used in the cake-mix example with $MC = \$0.75$, $|E| = 3$ → $P^* = \$1.125$. A monopolist never operates where $|E| \leq 1$, because then $L \geq 1$ would imply non-positive marginal cost.
