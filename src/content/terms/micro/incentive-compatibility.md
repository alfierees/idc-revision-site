---
title: Incentive Compatibility
subject: micro
aliases: ["IC", "IC constraint"]
related: ["screening", "second-degree-price-discrimination", "information-rent"]
source_folder: micro
ai_drafted: true
---

**Incentive compatibility (IC)** is the constraint, in a [[Screening]] menu, that each consumer type weakly prefers the contract designed for *its* type over any other contract in the menu. With two types $L$ and $H$ and contracts $(p_L, q_L)$ and $(p_H, q_H)$, the IC pair is
$$U_L(p_L, q_L) \geq U_L(p_H, q_H), \qquad U_H(p_H, q_H) \geq U_H(p_L, q_L).$$
The binding constraint is typically the high type's IC — the high type is the one most tempted to mimic the low type.

## When to use

Always check IC after writing a screening menu — without it the menu collapses to pooling. In the lecture's a-vs-b trade-off, the high type's IC is what *forces* the firm to leave [[Information Rent]] on the table; the low type's IC is typically slack at the optimum. Combined with individual rationality (each type's outside option), IC pins down the optimal menu.
