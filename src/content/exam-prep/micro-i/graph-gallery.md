---
title: "Graph Gallery"
subject: micro-i
type: reference
description: "Every diagram the exam asks you to draw, most of them interactive: budget lines, the five utility families and their optimum, the Slutsky and Hicks decomposition, labor supply with a lump sum, and two-period saving and borrowing under inflation."
course: Micro-Economics I
semester: 2
year: 1
order: 7
tags:
  - micro-i
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore: switch the utility function at the top, move the sliders. The static figures are the lecture and past-paper sketches, with the one thing to read off each. In the exam, **every** graph needs labelled axes, the intercepts, the slope and the points named.

## 1. The budget line and how it moves (Lec 01)

Income shifts the line in parallel; a price pivots it around the **other** good's intercept.

![[Lec01_budget_shifts_and_pivots.png]]

A quantity discount or a food-stamp scheme puts a **kink** in the line.

![[Lec01_kinked_budget_sets.png]]

The 2025 Moed A Q10 discount: full price up to 10 units, then 10% off each extra unit, so the line is flatter after the kink.

![[PP01_q10_discount_kink.png]]

## 2. Five utility functions, one budget line (Lec 02 to 04)

Switch the utility function at the top. Cobb-Douglas gives a tangency; perfect substitutes a corner; perfect complements the kink on $y = x$; quasilinear a tangency that ignores income; and $x^2 + y^2$, bowed away from the origin, a corner where the tangency is the **worst** point. Then change the prices and watch the optimum jump.

```graph
type: consumer-choice
figure: families
family: cd
```

The same idea for the concave case on its own, to see the corner jump as one price moves:

```graph
type: consumer-choice
figure: families
family: concave
```

The lecture's picture of the five families:

![[Lec03_utility_families.png]]

Goods and bads: with one bad the curves slope **up**.

![[Lec02_good_vs_bad.png]]

## 3. Substitution and income effects: Slutsky and Hicks (Lec 07)

The step that wins marks in every two-period question: the Slutsky line is the **new slope through the old bundle**. Then compare the Hicks line, tangent to the old curve and always on or below the Slutsky line.

```graph
type: consumer-choice
figure: slutsky
```

Normal, inferior and Giffen: the substitution effect always points the same way; the income effect decides the rest.

![[Lec07_effects_by_good_type.png]]

## 4. Endowments: the line pivots on the endowment (Lec 08)

A consumer at her endowment loses nothing from a price change: the old bundle stays on the new line (2025 Moed A Q4).

![[PP01_q4_endowment_pivot.png]]

## 5. Labor supply (Lec 08, Open Q1)

Switch between $U = L \cdot Y$ (Cobb-Douglas: hours ignore the wage until a lump sum appears) and $U = 4\sqrt L + Y$ (quasilinear: hours follow the wage, the lump sum only adds consumption, and at a low wage she stops working).

```graph
type: consumer-choice
figure: labor
```

The 2025 Moed A hours cap: the unconstrained optimum (6 hours) is not allowed, so she works the 4-hour maximum on a lower curve.

![[PP01_q11_leisure_cap.png]]

The 2018 sample welfare floor and 50% tax: flat at 30, then half the slope.

![[PP04_q2_ruth_welfare_plan.png]]

Leisure demand and labor supply against the wage for a quasilinear worker (2020 Moed B): leisure falls, hours rise, and both stop at the 24-hour limit.

![[PP06_q1_leisure_demand_labor_supply.png]]

## 6. Two periods: saver or borrower (Lec 09, Open Q2)

Toggle between a saver and a borrower. Inflation lowers the real rate and flattens the line around the endowment: the borrower gains, the saver loses. Then try a higher nominal rate instead.

```graph
type: consumer-choice
figure: two-period
```

The 2025 Moed A Slutsky graph in two periods: the navy line through $A$ with the new slope.

![[PP01_q12_4_slutsky_inflation.png]]

Only the borrowing rate falls: a kink at the endowment, the right-hand branch flatter.

![[PP01_q12_6_borrow_rate_falls.png]]

The 2020 Moed A rate rise: the whole line pivots on $E$ (left); only the lending side pivots (right).

![[PP05_q2ef_interest_rate_rise.png]]
