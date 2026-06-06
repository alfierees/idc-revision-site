---
title: "Optimal Two-Part Tariff (1st-degree PD)"
subject: micro
related_terms: ["two-part-tariff", "first-degree-price-discrimination", "consumer-surplus"]
source_folder: micro
ai_drafted: true
---

With a single known consumer (or one bespoke contract per consumer), the [[Two-Part Tariff]] $(p, T)$ that captures *all* consumer surplus is the textbook constructive route to [[First-Degree Price Discrimination|perfect price discrimination]].

1. Set the per-unit price equal to marginal cost: $p = MC$. This makes consumption efficient — the consumer buys to the point where their marginal willingness to pay equals $MC$, generating maximum total surplus.
2. At $p = MC$, compute the quantity each consumer demands: $q_i = D_i(MC)$.
3. Compute each consumer's surplus at $p = MC$: for linear demand, $CS_i = \tfrac{1}{2}(P^{\max}_i - MC)\, q_i$.
4. Set the entry fee equal to that surplus: $T_i = CS_i(MC)$. The firm extracts every unit of surplus the consumer would have enjoyed; the consumer is exactly indifferent between participating and walking away.
5. Firm profit per consumer: $\pi_i = T_i + (p - MC)\,q_i = CS_i$.

## Common pitfalls

- Setting $p > MC$. Any per-unit markup creates deadweight loss that the entry fee cannot recover — the firm leaves money on the table.
- Using one $T$ when consumers have heterogeneous demand. With unobservable types, this leads to [[Screening|screening]] / [[Second-Degree Price Discrimination|second-degree PD]] — see the [[Screening menu derivation|screening recipe]]. With observable types, set $T_i = CS_i$ separately.
- Forgetting individual rationality (IR). The consumer must weakly prefer participating: $CS_i(p) - T_i \geq 0$. The optimal contract above binds IR at zero exactly.

## Worked example

Two consumers, $q_1 = 40 - 2P$, $q_2 = 20 - P$, $MC = 6$ (see [[EX-5 - Micro 3]] Q3a). At $p = MC = 6$: $q_1 = 28$, $q_2 = 14$. $CS_1(6) = (20-6)^2 = \$196$; $CS_2(6) = \tfrac{1}{2}(20-6)^2 = \$98$. Optimal contracts: $(p_1, T_1) = (6, 196)$ and $(p_2, T_2) = (6, 98)$. Firm profit \$294, consumer surplus zero for both.
