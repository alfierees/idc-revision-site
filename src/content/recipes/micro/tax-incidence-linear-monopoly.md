---
title: "Tax incidence on a linear-demand monopoly"
subject: micro
related_terms: ["per-unit-tax", "lump-sum-tax", "lerner-index"]
source_folder: micro
ai_drafted: true
---

How a tax shifts the monopolist's optimum depends entirely on whether it enters the *marginal* condition. A [[Per-Unit Tax]] raises $MC$; a [[Lump-Sum Tax]] does not.

1. Classify the tax. Per-unit (paid per unit produced) → enters MC. Lump-sum, profit-tax, or fixed-cost shock → does *not* enter MC.
2. For a lump-sum / profit tax, $(Q^*, P^*)$ are unchanged. Just subtract the tax from profit and check the participation constraint: if post-tax profit is still positive, the firm stays.
3. For a per-unit tax $t$, replace $MC$ with $MC + t$ everywhere and re-solve. With linear demand $P = A - bQ$ and linear MC $= c + mQ$: $MR = A - 2bQ = c + mQ + t$, giving $Q^{**} = (A - c - t)/(2b + m)$.
4. Compute the pass-through: $\Delta P / \Delta t = b / (2b + m)$. With constant MC ($m = 0$), exactly half the tax is passed on. With rising MC ($m > 0$), less than half.
5. Tax revenue is $t \cdot Q^{**}$; firm bears $(1 - \Delta P/\Delta t) \cdot t$ per unit; consumer bears $\Delta P / \Delta t \cdot t$ per unit.

## Common pitfalls

- Assuming a per-unit tax is fully passed on to consumers. The monopolist optimally absorbs part of the tax — the share depends on the demand and MC slopes.
- Treating a lump-sum tax as if it shifted price. It only shifts profit; the marginal condition $MR = MC$ is unchanged.
- Forgetting the participation check. A large enough lump-sum tax (or a sufficiently negative post-tax profit at the per-unit-adjusted optimum) drives the firm to shut down.

## Worked example

$P = 1300 - 5q$, $MC = 50 + 10q$ (see [[EX-4 - Micro 3]] Q3). Pre-tax: $q^* = 62.5$, $P^* = \$987.50$. Lump-sum tax \$5,000 → unchanged $(q, P)$; profit drops from \$39,062.50 to \$34,062.50, still positive. Per-unit tax \$300 → $MC_{\text{new}} = 350 + 10q$, $q^{**} = 47.5$, $P^{**} = \$1,062.50$ — price rises by only \$75 (25% pass-through, matching the formula $5/(2 \cdot 5 + 10) = 0.25$).
