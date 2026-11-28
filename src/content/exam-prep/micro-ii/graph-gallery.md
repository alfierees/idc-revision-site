---
title: "Graph Gallery"
subject: micro-ii
type: reference
description: "Every diagram the exam asks you to draw, four of them interactive: a market under a price ceiling or floor (all six past-paper markets), the Edgeworth box with the contract curve and the Walrasian equilibrium, the production economy's PPF with MRS = RPT, and the public good game's best responses."
course: Micro-Economics II
semester: 1
year: 2
order: 7
tags:
  - micro-ii
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore. The toggle at the top switches between the past-paper versions. The static figures below each one are the worked-solution sketches from the papers, with the one thing to read off each. In the exam every graph needs labelled axes, the curves named, and the key point's coordinates.

## 1. A market with a price control (every paper, §3 of the cheat sheet)

Demand is marginal utility, supply is marginal cost. Under a **maximal** price supply is the short side; under a **minimal** price demand is. The toggle picks the market: 2026 A uses $100x - x^2 + y$ with $C = x^2$, and its steps 3 and 4 are the CS-maximising ceiling (33.33) and the FS-maximising floor (66.67).

```graph
type: microii-price-control
paper: a26
```

The 2023 B / 2025 A market at the fixed prices 90 and 60: the same 15 units are traded, so the welfare (1125) is the same, and only the split changes.

```graph
type: microii-price-control
paper: b23
```

The official sketches: the 2026 government that weights CS and FS, the 2024 B cap at 80, and the 2023 A subsidy against a cap at 10.

![[PP08_q2_price_controls.png]]

![[PP05_q3_price_cap.png]]

Under a binding cap, a demand increase (left) leaves the quantity where it was; a cost fall (right) raises it.

![[PP05_q3_cap_comparative_statics.png]]

![[PP01_q3_subsidy_surplus.png]]

A minimum price with rising marginal cost (2024 A): firm surplus peaks at 50 and drops below its equilibrium value above 52.

![[PP04_q3_min_price_surplus.png]]

## 2. Cost functions (2024 A Q1, 2024 B Q1)

A perfect-substitutes isoquant is a straight line, so the cheapest point is a corner and supply is flat at $p_l/a$.

![[PP04_q1_linear_isoquant.png]]

![[PP04_q1_flat_supply.png]]

$\sqrt l + k$ against $\sqrt l$ alone: the two cost curves agree up to the kink at $q = 2$ ($p_k = 12$), then the two-input firm switches to capital and is cheaper.

![[PP05_q1_cost_functions.png]]

## 3. The Edgeworth box (2024 A Q2, 2024 B Q2, §5)

Agent 1 from the bottom left, agent 2 from the top right. Step through the contract curve, then the budget line through the endowment, then the price at which both agents choose the same point. In the last step change the tastes $a$ and $b$ or the endowment.

```graph
type: microii-edgeworth
paper: a24
```

Equal Cobb-Douglas shares (2024 B): the contract curve is the diagonal and the equilibrium $(54, 54)$ lies on it.

```graph
type: microii-edgeworth
paper: b24
```

![[PP04_q2_contract_curve_equilibrium.png]]

![[PP05_q2_edgeworth_equilibrium.png]]

The planner's problem in 2024 A Q4: along the diagonal the utilities trace a straight frontier $U_2 = 100 - 2U_1$, and the planner's indifference curve touches it at $U_1 = \tfrac{50}{3}$.

![[PP04_q4_utility_frontier.png]]

## 4. The production economy (2023 to 2026, §7)

Equal RTS gives the straight PPF $y = b(D - x)$. In equilibrium the budget line coincides with it, and the consumer picks the point where $MRS = RPT$. Switch the consumer at the top: Cobb-Douglas gives a tangency, $c\cdot x + y$ a corner, $10\sqrt x + y$ a tangency whose $x$ ignores the resources.

```graph
type: microii-ppf
utility: cd
```

```graph
type: microii-ppf
utility: linear
```

The efficiency locus in the input box, and the PPF it produces (2023 A Q2):

![[PP01_q2_efficiency_locus_ppf_optimum.png]]

2023 B Q2e: firm 2's productivity doubles, so the $y$-intercept doubles (100 to 200), the $x$-intercept stays at 100, and the RPT goes from 1 to 2.

![[PP02_q2_new_technology_ppf.png]]

2025 A Q2: the same PPF with a linear consumer gives a corner on one axis or the other; $\sqrt x + y$ gives an interior point.

![[PP06_q2_ppf_corner_vs_interior.png]]

2026 A Q3: a higher $b$ moves the $y$-intercept up and keeps the $x$-intercept at 50.

![[PP08_q3_ppf_and_b.png]]

The circular PPF of Presentation 5 example 3 (PS9 Q3), $x^2 + y^2 = 50$:

![[PS09_q3_circular_ppf.png]]

## 5. Externalities (PS10, 2026 A Q4, §8)

Firm B's first-order condition is the same in both problems; firm A's moves once the damage it causes is counted, and the efficient point has less $a$ and more $b$.

![[PS10_q1_externality_equilibrium_vs_efficient.png]]

## 6. Public goods (2024 B Q4, §9)

Each agent tops the total up to her own stand-alone level. The equilibria are where the best responses meet; the planner's total (dashed) is far outside them.

```graph
type: microii-public-good
paper: b24eq
```

```graph
type: microii-public-good
paper: b24
```

![[PP05_q4_best_responses.png]]

With $N$ agents the equilibrium stops where one agent's marginal benefit is 1, the planner where it is $1/N$:

![[PS10_q3_public_good_under_provision.png]]
