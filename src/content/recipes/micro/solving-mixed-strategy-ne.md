---
title: "Solving for a mixed-strategy NE"
subject: micro
related_terms: ["mixed-strategy", "nash-equilibrium", "best-response"]
source_folder: micro
ai_drafted: true
---

Mixed-strategy Nash Equilibrium is found by the **opponent indifference principle**: you don't pick your own mixing probability to maximise your own payoff — you pick it to make the *opponent* indifferent between the strategies they mix over.

1. Write the payoff matrix. Let player 1 play strategy $A$ with probability $p$ (and $B$ with $1 - p$). Let player 2 play strategy $L$ with probability $q$ (and $R$ with $1 - q$).
2. **Find $q$** (player 2's mix) by making **player 1** indifferent: solve $EU_1(A) = EU_1(B)$ as a function of $q$.
3. **Find $p$** (player 1's mix) by making **player 2** indifferent: solve $EU_2(L) = EU_2(R)$ as a function of $p$.
4. Report the mixed NE as the pair of probability vectors.
5. (Optional) Compute each player's expected payoff at the NE; both should equal whichever pure-strategy expected payoff you used in the indifference condition.

## Common pitfalls

- Trying to maximise your own expected payoff over your own mixing probability. At a mixed NE you are indifferent — every mixing probability gives the same expected payoff, so calculus over $p$ is meaningless.
- Forgetting which probability solves which indifference. Mnemonic: **opponent's mix makes you indifferent**, so to find player 2's mix you set player 1 indifferent, and vice versa.
- Asserting a mixed NE exists when one strategy strictly dominates. Discard strictly dominated strategies first; the mixed NE is supported only over the surviving strategies.

## Worked example

| | L | R |
|---|---|---|
| U | 0, 2 | 3, 0 |
| D | 2, 0 | 0, 3 |

(See Topic 3 Q4.) Step 2 — set $EU_1(U) = EU_1(D)$: $0 \cdot q + 3(1-q) = 2 q + 0 \cdot (1-q) \Rightarrow 3 - 3q = 2q \Rightarrow q = 3/5$. Step 3 — set $EU_2(L) = EU_2(R)$: $2p + 0 = 0 + 3(1-p) \Rightarrow 2p = 3 - 3p \Rightarrow p = 3/5$. Mixed NE: $(\tfrac{3}{5} U + \tfrac{2}{5} D,\ \tfrac{3}{5} L + \tfrac{2}{5} R)$.
