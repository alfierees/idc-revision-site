---
title: "Solving a linear-demand monopoly"
subject: micro
related_terms: ["lerner-index", "lump-sum-tax", "per-unit-tax"]
source_folder: micro
ai_drafted: true
---

The fastest path to a monopoly's profit-maximising $(P^*, Q^*)$ when demand is linear: derive marginal revenue by the linear-demand shortcut, set $MR = MC$, and read the price off the demand curve. Use this for every linear-demand monopoly problem on a problem set.

1. Write demand as $P = A - bQ$.
2. Apply the linear-demand shortcut: $MR = A - 2bQ$ (same intercept, twice the slope).
3. Set $MR = MC$ and solve for $Q^*$.
4. Read $P^*$ off the demand curve: $P^* = A - b Q^*$.
5. Compute profit $\pi^* = (P^* - AC)\,Q^*$ — and if there's a fixed cost, subtract it.

![](/images/micro/t2-monopoly-mrmc.png)

The monopolist sets $MR = MC$ (purple meets green), then reads the *price* off the demand curve above that quantity — never off the MR curve. The red triangle is the deadweight loss: trades worth more to buyers than they cost to produce, but which don't happen.

## Common pitfalls

- Reading $P^*$ off the MR curve instead of the demand curve. $MR$ is the marginal-revenue *gradient* of demand; the price the consumer pays sits on the demand curve, not on MR.
- Forgetting to check capacity / non-negativity constraints. The unconstrained $Q^*$ might exceed capacity (e.g. the LA Dodgers stadium fills before $MR = 0$ — see [[EX-4 - Micro 3]] Q2).
- Ignoring elasticity. If demand is *non-linear* (e.g. [[Constant Elasticity Demand]]), don't use the linear-demand shortcut — apply the [[Lerner pricing rule]] instead.

## Worked example

Demand $P = 1300 - 5q$, $MC = 50 + 10q$ (see [[EX-4 - Micro 3]] Q3). Step 1: $A = 1300$, $b = 5$. Step 2: $MR = 1300 - 10q$. Step 3: $1300 - 10q = 50 + 10q \Rightarrow q^* = 62.5$. Step 4: $P^* = 1300 - 5(62.5) = \$987.50$.
