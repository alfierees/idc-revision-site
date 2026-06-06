---
title: "Lerner pricing rule (constant elasticity)"
subject: micro
related_terms: ["lerner-index", "constant-elasticity-demand", "third-degree-price-discrimination"]
source_folder: micro
ai_drafted: true
---

When demand has constant elasticity $|E|$, the monopolist's profit-maximising price is a one-step computation from the [[Lerner Index]] identity — no MR curve, no algebra over $Q$.

1. Read off (or compute) the marginal cost $MC$ and the price elasticity $|E|$.
2. Apply the rule: $\displaystyle P^* = \frac{MC}{1 - 1/|E|}$.
3. (Optional) Compute the markup ratio (Lerner Index): $L = (P^* - MC)/P^* = 1/|E|$.
4. (Optional) If the demand curve is calibrated $Q = k P^{-|E|}$, back out $k$ from any observed $(P, Q)$ point, then evaluate $Q^* = k (P^*)^{-|E|}$ to get the new quantity.

## Common pitfalls

- The rule only applies when $|E|$ is constant (i.e. demand of the form $Q = k P^{-|E|}$). For linear demand, $|E|$ varies along the curve — use [[Solving a linear-demand monopoly|the linear-demand recipe]] instead.
- The rule breaks down at $|E| = 1$: the denominator goes to zero. With $|E| < 1$ the formula returns a negative price — the lecture's reminder that monopolists never operate in the inelastic region.
- More-elastic segments always get a *lower* markup. If you apply the rule to two segments (e.g. business vs students) and the elastic group ends up with the higher price, recheck your arithmetic.

## Worked example

Magazine: $MC = \$16$, $|E| = 5$ (see [[EX-5 - Micro 3]] Q1a). $P^* = 16 / (1 - 1/5) = 16 / (4/5) = \$20$. Markup ratio $L = 1/5 = 20\%$. Calibrated at $(P, Q) = (40, 1000)$ gives $k = 1.024 \times 10^{11}$, so $Q^* = k / 20^5 = 32{,}000$ copies.
