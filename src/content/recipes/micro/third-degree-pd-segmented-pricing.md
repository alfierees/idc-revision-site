---
title: "Third-degree PD across segments"
subject: micro
related_terms: ["third-degree-price-discrimination", "lerner-index", "consumer-surplus"]
source_folder: micro
ai_drafted: true
---

When the firm can observe consumer type (student vs business, weekday vs weekend, domestic vs international), each segment becomes its own little monopoly problem and the optimum is solved segment by segment.

1. Write each segment's inverse demand $P_i = A_i - b_i Q_i$.
2. Derive each segment's marginal revenue: $MR_i = A_i - 2 b_i Q_i$ (linear-demand shortcut).
3. Set $MR_i = MC$ in each segment independently and solve for $Q_i^*$.
4. Read each segment's price off its own demand curve: $P_i^* = A_i - b_i Q_i^*$.
5. Add up: total quantity, total revenue, total profit. If [[Consumer Surplus]] is asked for, compute $CS_i = \tfrac{1}{2}(A_i - P_i^*)\, Q_i^*$ per segment.

## Common pitfalls

- Forgetting to **check that demands are consistent with total demand**: $Q_1^* + Q_2^* + \ldots$ should match the aggregate demand at any uniform price. The lecture's Elizabeth-Airlines example uses this as a sanity check ($Q_A + Q_B = 500 - P$).
- Assuming the less-elastic segment is the higher-WTP one. It is not necessarily — elasticity, not choke price, drives the markup. The [[Lerner Index]] is $L_i = 1/|E_i|$ for each segment.
- Skipping the arbitrage-prevention sanity check. If consumers can resell across segments, the high-price segment unravels. Standard tools: warranties void on resale, location, contractual bans, coupons.

## Worked example

Elizabeth Airlines (see [[EX-5 - Micro 3]] Q2c). $MC = \$100$. Business: $Q_A = 260 - 0.4P \Rightarrow P_A = 650 - 2.5 Q_A$. Students: $Q_B = 240 - 0.6P \Rightarrow P_B = 400 - (5/3) Q_B$. Business: $MR_A = 650 - 5 Q_A = 100 \Rightarrow Q_A^* = 110$, $P_A^* = \$375$. Students: $MR_B = 400 - (10/3) Q_B = 100 \Rightarrow Q_B^* = 90$, $P_B^* = \$250$. Total quantity 200, total revenue \$63,750.
