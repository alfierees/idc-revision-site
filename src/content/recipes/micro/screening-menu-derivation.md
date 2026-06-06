---
title: "Screening menu derivation (2nd-degree PD)"
subject: micro
related_terms: ["screening", "second-degree-price-discrimination", "incentive-compatibility", "information-rent", "two-part-tariff"]
source_folder: micro
ai_drafted: true
---

When consumer types are unobservable, the optimal menu of [[Two-Part Tariff|two-part tariffs]] is derived by binding the *low* type's participation constraint and the *high* type's mimicking constraint, then optimising each contract independently.

1. Identify the two types. Label the one with the *higher* surplus at any given price the "high" type; the other is the "low" type.
2. Bind the low type's individual-rationality (IR) constraint: set $T_2 = CS_2(p_2)$ so the low type is exactly indifferent between buying and walking away.
3. Bind the high type's [[Incentive Compatibility|IC]] constraint: the high type must (weakly) prefer their own contract to the low-type bundle. This gives $T_1 = CS_1(p_1) - \big[CS_1(p_2) - CS_2(p_2)\big]$. The bracket is the [[Information Rent]] left to the high type.
4. Write firm profit as the sum of fees plus per-unit margin: $\pi = T_1 + T_2 + (p_1 - MC) q_1(p_1) + (p_2 - MC) q_2(p_2)$. Substitute the bound constraints and the problem **separates** into two independent maximisations over $p_1$ and $p_2$.
5. Take FOCs. The high-type's optimum gives $p_1^* = MC$ (no distortion at the top). The low-type's optimum gives $p_2^* > MC$ (downward distortion).
6. Compute the final fees, quantities, profit. Verify IC for *both* directions and IR for both types.

## Common pitfalls

- Treating both contracts as independent and setting both $p_i = MC$. This violates IC: the high type would prefer the cheap low-type contract and pocket the surplus difference.
- Mis-identifying the binding constraints. **Always**: IR binds for the low type, IC binds for the high type. The other two constraints (high's IR, low's IC) are slack at the optimum.
- Forgetting to leave the information rent. The high type's profit margin $T_1 < CS_1(p_1)$ by exactly $CS_1(p_2) - CS_2(p_2)$ — try to extract that and the high type defects.
- "Distortion at the bottom, no distortion at the top" — memorise the direction. The low type is the one whose quantity is reduced, *not* the high type.

## Worked example

Two consumers $q_1 = 40 - 2P$, $q_2 = 20 - P$, $MC = 6$ (see [[EX-5 - Micro 3]] Q3e). Useful identity: $CS_1(p) = 2 \cdot CS_2(p) = (20 - p)^2$.

Step 5 — pick $p_1$ to maximise $CS_1(p_1) + (p_1 - 6)(40 - 2p_1)$: $\to p_1^* = 6 = MC$. Pick $p_2$ to maximise $(p_2 - 6)(20 - p_2)$: $\to p_2^* = 13$. Quantities $q_1^* = 28$, $q_2^* = 7$.

Step 6 — $T_2 = CS_2(13) = \tfrac{1}{2}(7)^2 = \$24.50$. $T_1 = CS_1(6) - CS_2(13) = 196 - 24.5 = \$171.50$ — the high type keeps \$24.50 of information rent. Profit $= 171.5 + 24.5 + 0 + 7 \times 7 = \$245$. Ranking across regimes: uniform (\$220.50) < screening (\$245) < perfect PD (\$294).
