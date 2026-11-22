---
title: "Lec 01: Budget Constraint"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 1
tags:
  - micro-i
  - budget-constraint
  - budget-line
  - income-effect
  - substitution-effect
  - opportunity-cost
subject: micro-i
in_scope: true
---

# Lec 01 - Budget Constraint

> Part of: [[Micro-Economics I]]
> Key concepts: [[Budget Constraint]], [[Budget Line]], [[Opportunity Set]], [[Real Income]], [[Opportunity Cost]], [[Income Effect]], [[Substitution Effect]]

> [!info] What this lecture does
> Every consumer problem has two halves: what the consumer **can** afford (this lecture) and what they **want** (preferences, next lectures: [[Lec_02-Preferences]]). Here we draw the feasible set precisely, see how it moves when income or prices change, and preview the two effects that every price change triggers.

## 1. Choosing within limits

A household chooses what to buy subject to limited income and fixed prices. Whatever it picks, it is implicitly **giving up everything else** the same money could have bought.

> [!tip] Opportunity cost
> With a limited budget, the real cost of any good is the value of the other goods you could have bought with the same money. That is [[Opportunity Cost]], and the slope of the budget line measures it (section 3).

**Definitions**
- **[[Budget Constraint]]**: the limits that income, wealth and prices impose on what a household can buy.
- **[[Opportunity Set]]** (also *choice set*, *budget set*): all the bundles that satisfy the constraint.
- **[[Real Income]]**: the set of real goods and services a household can buy, given its money income *and* prices. Money income can stay put while real income changes.

### A tiny example: one $1,000 monthly budget

Options spend a fixed total across rent, food and other expenses. A plan whose total comes to $1,000 is available; one that totals $1,200 is not. The constraint simply separates plans that fit the budget from those that do not.

| Option | Rent | Food | Other | Total | Affordable? |
|---|---|---|---|---|---|
| A | 400 | 250 | 350 | 1,000 | Yes |
| B | 600 | 200 | 200 | 1,000 | Yes |
| C | 700 | 150 | 150 | 1,000 | Yes |
| D | 1,000 | 100 | 100 | 1,200 | No |

## 2. The budget line with two goods

Let the consumer buy goods 1 and 2 in quantities $x_1, x_2$, at prices $p_1, p_2$, with income $m$ (the slides use $X, Y, P_X, P_Y, I$ in places: same thing).

$$
p_1 x_1 + p_2 x_2 = m
$$

- This is the **[[Budget Line]]**: bundles that cost *exactly* $m$ ("just affordable").
- Bundles **below/inside** the line cost less than $m$ (affordable, money left over).
- Bundles **above/outside** cost more than $m$ (not affordable).
- The **budget set** is the line plus everything under it.

Rearranging for $x_2$:

$$
x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}\, x_1
$$

| Feature | Value | Meaning |
|---|---|---|
| Vertical intercept | $m/p_2$ | Everything spent on good 2 |
| Horizontal intercept | $m/p_1$ | Everything spent on good 1 |
| Slope | $-p_1/p_2$ | Market trade-off between the goods |

> [!tip] Reading the slope
> $-p_1/p_2$ is how many units of good 2 you must give up to buy one more unit of good 1. It is the **opportunity cost** of good 1 measured in good 2, and it depends only on the *price ratio*, not on income.

> [!example] Worked example from the slides (Thai meals and jazz clubs)
> Income $I=20$, $P_X = 2$ (Thai meal), $P_Y = 1$ (jazz visit). All income on $Y$: 20 visits. All on $X$: 10 meals. Slope $=-20/10=-2=-P_X/P_Y$. Bundle C (5 meals, 10 visits) costs $2(5)+10=20$: on the line. Bundle D (5, 5) costs 15: affordable, money left. Bundle E (10, 5) costs 25: not affordable.

![[Lec01_budget_line_and_set.png]]

> [!warning] Common mistakes
> - Slope is $-p_1/p_2$ (good on the horizontal axis on top). Flipping it is the classic error.
> - Intercepts are $m/p$, not $p/m$.
> - The line itself is affordable; only points *beyond* it are not.

## 3. How the budget line moves

Everything depends on three numbers: $m$, $p_1$, $p_2$.

| Change (others fixed) | Effect on the line | Effect on the set |
|---|---|---|
| Income $m$ rises | Parallel shift **out** (slope unchanged) | Larger |
| Income $m$ falls | Parallel shift **in** | Smaller |
| $p_1$ falls | Pivots **outward** around the vertical intercept (flatter) | Larger |
| $p_1$ rises | Pivots **inward** around the vertical intercept (steeper) | Smaller |
| $p_2$ falls | Pivots **outward** around the horizontal intercept (steeper) | Larger |
| $p_2$ rises | Pivots **inward** around the horizontal intercept (flatter) | Smaller |
| Both prices change by the same proportion | Parallel shift | Same as an opposite change in $m$ |

> [!note] Why equal price changes equal an income change
> Doubling both prices means each dollar buys half as much, which is exactly like halving income. Both intercepts move by the same factor and the slope $p_1/p_2$ is unchanged. In general, $(p_1, p_2, m)$ and $(tp_1, tp_2, tm)$ give the **same budget line**.

![[Lec01_budget_shifts_and_pivots.png]]

> [!tip] Pivot trick
> A price only moves the intercept of the axis of *its own* good. The other intercept stays fixed, so the line pivots around that fixed point.

## 4. When the budget line is not a straight line

The slides show that the straight line is just the simplest case. Any rule that changes what you can afford changes the shape.

### 4.1 Quantity discount (kinked line)
Suppose $m=100$, $p_2=1$, and good 1 costs $p_1=2$ for the first 20 units and $p_1=1$ afterwards.
- First 20 units cost 40, leaving $x_2=60$: a point at $(20,60)$.
- Remaining 60 buys 60 more units: horizontal intercept at $x_1=80$.
- The slope is $-2$ up to 20 units, then $-1$: the line is **kinked** and the budget set is bigger than under the constant price $p_1=2$ (intercept 50).

### 4.2 Food stamps
A family has 100 to spend on food $F$ and other goods $G$ ($F+G=100$). It is given 40 in stamps usable **only on food**.
- Up to $F=40$, food is effectively free: the line is flat at $G=100$.
- Beyond 40 it follows a slope of $-1$ down to $F=140$.
- The budget set grows, but with a kink. If stamps can be traded on a **black market**, the family can turn some stamps into cash, and the kink flattens out and the line moves further out (the slide draws a line reaching 120 on the $G$ axis; it is a sketch, so treat the exact intercept as illustrative).

![[Lec01_kinked_budget_sets.png]]

### 4.3 Several constraints together
Budgets are not the only limits. There can be a minimum requirement (for example a minimum amount of food needed to survive) or a time limit. The **choice set is the intersection of all constraint sets**: only bundles that satisfy every restriction at once.

![[Lec01_choice_set_intersection.png]]

> [!note] Reconstructed from the slides
> The slides build the intersection picture step by step with unlabeled axes (food against "other stuff"). The survival-minimum and time-constraint example above is rebuilt from that sequence; the numbers on my diagram are illustrative, not from the deck.

## 5. Income and substitution effects: a preview

A price change affects a household in **two** ways at once.

**Income effect.** A price cut makes the household unequivocally better off: it could buy the same bundle and have money left over, so real income rises. A price rise makes it worse off.
- The extra purchasing power is spent more on **normal goods** and less on **inferior goods**.

**Substitution effect.** A price cut makes the good *relatively cheaper* (its opportunity cost falls), so the household substitutes towards it and away from other goods. A price rise pushes the other way.

| Price of the good | Income effect (via real income) | Substitution effect (via relative price) |
|---|---|---|
| Falls | Better off: buys more of a **normal** good | Cheaper relative to others: buys more |
| Rises | Worse off: buys less of a **normal** good | Dearer relative to others: buys less |

> [!warning] Normal versus inferior
> For a **normal good** the two effects push the same way. For an **inferior good** they push opposite ways: the substitution effect still says "buy more when cheaper", but the income effect says "richer, so buy less". Which one wins decides the overall response. The full decomposition is built in [[Lec_07-Substitution and Income Effects]].

## Summary

- The **[[Budget Constraint]]** $p_1x_1+p_2x_2=m$ splits affordable from unaffordable bundles; the affordable ones form the **[[Opportunity Set]]**.
- The line has intercepts $m/p_2$ and $m/p_1$, and slope $-p_1/p_2$ (the opportunity cost of good 1 in terms of good 2).
- **Income** changes shift the line in parallel; a **price** change pivots it around the other good's intercept; scaling all prices and income together changes nothing.
- Real-world rules (quantity discounts, rationed or restricted subsidies, minimum needs) make budget lines kinked, and the final choice set is the intersection of all constraints.
- Every price change has an **income effect** and a **substitution effect**; they reinforce each other for normal goods and conflict for inferior goods.

## Related notes
- [[Micro-Economics I]]
- [[Lec_02-Preferences]] (what the consumer wants, next half of the model)
- [[Lec_04-Optimal Bundle]] (putting budget line and preferences together)
- [[Lec_07-Substitution and Income Effects]]
- [[PS_01-Budget Constraints & Preferences]]
