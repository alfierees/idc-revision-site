---
title: "Lec 08: Labor Supply"
semester: 2
year: 1
course: "Micro-Economics I"
lecture: 8
tags:
  - micro-i
  - endowment
  - budget-constraint
  - labor-supply
  - leisure
  - slutsky-equation
  - income-effect
  - substitution-effect
subject: micro-i
in_scope: true
---

# Lec_08: Buying and Selling, Labor Supply and the Slutsky Equation Revisited

> Part of: [[Micro-Economics I]]
> Key concepts: [[Endowment]], [[Net Demand]], [[Budget Constraint]], [[Price Offer Curve]], [[Labor Supply]], [[Leisure]], [[Non-Labor Income]], [[Real Wage Rate]], [[Endowment Income Effect]], [[Income Effect]], [[Substitution Effect]]

> [!info] Where this lecture fits
> Until now income $m$ was a fixed number. Here the consumer starts with a **bundle of goods** (an endowment) and earns income by **selling part of it**. So income depends on prices, which changes how a price change affects demand. Labor supply is the main application: the thing being sold is hours of time.

## 1. Endowments

A consumer's **endowment** $\omega = (\omega_1, \omega_2)$ is the quantity of each good they hold before trading. If $\omega = (10, 2)$ they hold 10 units of good 1 and 2 of good 2.

At prices $(p_1, p_2)$ the endowment has a **market value**:

$$
p_1\omega_1 + p_2\omega_2
$$

With $p_1 = 2$, $p_2 = 3$ and $\omega = (10, 2)$ the value is $2(10) + 3(2) = 26$. The consumer can swap the endowment for **any bundle costing no more than 26**.

## 2. The budget constraint with an endowment

Replace "income $m$" with "value of the endowment":

$$
p_1 x_1 + p_2 x_2 = p_1 \omega_1 + p_2 \omega_2
$$

The budget set is every $(x_1, x_2) \ge 0$ with $p_1 x_1 + p_2 x_2 \le p_1\omega_1 + p_2\omega_2$.

> [!tip] The endowment point is always affordable
> Plugging $x = \omega$ into the constraint gives equality, so the endowment lies on the budget line **whatever the prices**. A price change therefore **pivots the budget line around the endowment point** instead of just shifting or rotating it around an intercept.

![[Lec08_endowment_pivot.png]]

### Net demands

The **net demand** for a good is gross demand minus endowment, $x_i^* - \omega_i$. Positive means the consumer is a net **buyer**; negative means a net **seller**. Rearranging the constraint:

$$
p_1(x_1 - \omega_1) + p_2(x_2 - \omega_2) = 0
$$

so the **value of the net demands sums to zero**: what you spend buying is funded exactly by what you earn selling.

> [!example] Worked example from the lecture
> $\omega = (10, 2)$, $p = (2, 3)$, chosen bundle $(7, 4)$. Net demands are $7 - 10 = -3$ for good 1 and $4 - 2 = +2$ for good 2. Check: $2(-3) + 3(+2) = -6 + 6 = 0$. The consumer sells 3 units of good 1 (receiving 6) and uses it to buy 2 units of good 2 (costing 6).

### Which way does trade go?

| Prices | Net position | What the consumer does |
|---|---|---|
| Good 1 relatively expensive (steep line) | $x_1^* < \omega_1$, $x_2^* > \omega_2$ | Sells good 1, buys good 2 |
| Good 1 relatively cheap (flat line) | $x_1^* > \omega_1$, $x_2^* < \omega_2$ | Buys good 1, sells good 2 |
| Prices at which the optimum is the endowment itself | $x^* = \omega$ | No trade, all net demands zero |

> [!note] Price offer curve
> As prices vary, the utility-maximising bundles trace out the **price offer curve**. In this setting it contains every gross demand for which the endowment can be exchanged. The part of it **to the left of $\omega_1$** is where the consumer sells good 1 and buys good 2; the part **to the right** is where they buy good 1 and sell good 2.

## 3. Labor supply

Treat a worker as someone endowed with two things:

- **Non-labor income** $m$ in dollars (for example from savings or transfers).
- A total of $\bar R$ hours, to be split between **labor** and **[[Leisure]]**.

So the endowment is $\omega = (\bar R, m)$. There is one consumption good with price $p_c$, and the **wage** $w$ is the price of an hour of leisure, because each hour not worked gives up $w$ of earnings. Let $C$ and $R$ be gross demands for consumption and leisure.

The budget constraint is spending equals endowment value:

$$
p_c C + wR = w\bar R + m
$$

Solving for $C$:

$$
C = -\frac{w}{p_c}R + \frac{m + w\bar R}{p_c}
$$

![[Lec08_labor_supply_budget.png]]

Reading the diagram (leisure $R$ on the horizontal axis, consumption on the vertical):

- The endowment sits at $(\bar R, m/p_c)$: all time as leisure, only non-labor income to spend.
- The vertical intercept $(m + w\bar R)/p_c$ is what you could consume by giving up **all** leisure and working every hour.
- The slope is $-w/p_c$, the **real wage rate**: how many units of consumption one more hour of work buys.
- At the chosen point the indifference curve is tangent to the budget line (the usual [[Optimal Choice]] condition, $MRS = w/p_c$). Leisure demanded is $R^*$ and **labor supplied is $\bar R - R^*$**.

> [!example] Illustration (numbers are mine, not from the slides)
> Take $\bar R = 24$, $m = 40$, $w = 10$, $p_c = 2$, so the line is $C = 140 - 5R$. With utility $U = RC$, the tangency gives $C = 5R$, hence $R^* = 14$, $C^* = 70$, and the worker supplies $24 - 14 = 10$ hours. The figure above uses exactly these numbers.

> [!warning] Common mistakes
> - The consumption good is on the vertical axis and **leisure, not labor**, is on the horizontal. Labor supplied is the distance from $R^*$ back to $\bar R$.
> - The slope is the **real** wage $w/p_c$, not $w$.
> - $m$ is *non-labor* income. Earnings are not in the endowment point; they appear as the line rises as you give up leisure.

## 4. Slutsky's equation revisited

The earlier [[Slutsky Compensation]] decomposition split a demand change into a [[Substitution Effect]] and an [[Income Effect]], and **held income fixed** as prices changed. With an endowment that fails: income $y = p_1\omega_1 + p_2\omega_2$ itself moves when a price moves. A new, third piece appears.

| Component | What changes | Budget line used |
|---|---|---|
| Pure substitution effect | Relative prices change; purchasing power is kept so the **old bundle is just affordable** | New prices, passing through the original bundle |
| Ordinary income effect | Purchasing power moves from "old bundle affordable" to **old endowment value at the new prices** | New prices, passing through the point costing what the old endowment cost |
| Endowment income effect | Income moves from the **old endowment value to the new one** | New prices, passing through the endowment point |

> [!note] Reconstructed from the slides
> The slides animate the three steps with coloured arrows and give no formulae for the budget lines. The line descriptions in the table are my reading of the diagrams (grey line through the original bundle, green line parallel to it and higher in the lecture's example, red line through $\omega$).

Total change in demand $=$ **(i) pure substitution** $+$ **(ii) ordinary income** $+$ **(iii) endowment income**.

![[Lec08_slutsky_endowment.png]]

> [!example] Numerical check of the three steps (my own numbers)
> Let $\omega = (10, 2)$, $U = x_1x_2$ (so demands are $x_1 = y/2p_1$, $x_2 = y/2p_2$). Price of good 1 falls from 2 to 1, $p_2 = 3$.
>
> | Step | Income at new prices | Bundle | Change in $x_1$ |
> |---|---|---|---|
> | Start (A) | 26 | (6.5, 4.33) | |
> | Substitution (B) | 19.5 (old bundle just affordable) | (9.75, 3.25) | +3.25 |
> | Ordinary income (C) | 26 (old endowment value) | (13, 4.33) | +3.25 |
> | Endowment income (D) | 16 (new endowment value) | (8, 2.67) | -5.00 |
>
> Total change in $x_1$ is $+3.25 + 3.25 - 5 = +1.5$.

> [!tip] Why the endowment income effect has this sign
> The endowment effect is the income effect of the change in the endowment's value, $\Delta(p_1\omega_1 + p_2\omega_2)$. Here $p_1$ falls, so the endowment is worth less (26 down to 16), the consumer is poorer, and demand for a normal good falls. The consumer is a net **seller** of good 1, so this loss outweighs the gain in purchasing power from cheaper good 1 (the ordinary income effect), and it pulls $x_1$ down against the substitution response. For a net buyer the ordinary effect is the stronger one.

## Summary

- An **endowment** replaces fixed income: the budget line is $p_1x_1 + p_2x_2 = p_1\omega_1 + p_2\omega_2$ and always passes through $\omega$, so price changes **pivot** it around $\omega$.
- **Net demands** $x_i - \omega_i$ have zero total value; negative is selling, positive is buying. The **price offer curve** traces the optimal bundles as prices vary.
- **Labor supply**: endowment $(\bar R, m)$, line $C = -\frac{w}{p_c}R + \frac{m+w\bar R}{p_c}$, slope $-w/p_c$ (the real wage). Labor supplied is $\bar R - R^*$.
- **Slutsky revisited**: total price effect $=$ substitution $+$ ordinary income $+$ **endowment income** effect, because the value of the endowment moves with prices.

## Related notes

- [[Micro-Economics I]]
- [[Budget Constraint]], [[Budget Line]], [[Optimal Choice]]
- [[Substitution Effect]], [[Income Effect]], [[Slutsky Compensation]]
- [[PS_07-Labor Supply]]
