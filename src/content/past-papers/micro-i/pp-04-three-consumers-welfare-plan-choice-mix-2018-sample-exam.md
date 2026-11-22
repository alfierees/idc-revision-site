---
title: "Three Consumers, Welfare Plan & Choice Mix (2018 Sample Exam)"
type: past-paper
status: worked-solution
exam: "Micro-Economics I, Sample Exam (2018)"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - micro-i
  - past-paper
  - worked-solution
  - optimal-choice
  - labor-supply
  - intertemporal-choice
aliases:
  - Micro I Sample Exam 2018
  - PP04 Micro I
subject: micro-i
in_scope: true
---

# Three Consumers, Welfare Plan & Choice Mix (2018 Sample Exam)

> Part of: [[Micro-Economics I]]
> **Sample Exam (2018)**, Micro-Economics I, Ido Eisdorfer and Yosi Ganel. Open questions 65 points (two questions), closed questions 40 points (choose 8 out of 10).
> Builds on: [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]], [[Lec_06-Revealed Preference]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]

> [!info] Source
> The open questions follow the **official solution** (a separate 4-page file). The closed questions have **yellow highlights** on the typed paper; every highlight is reproduced below and explained. Where the official solution has a typo, the answer is kept and a warning callout flags it. Nothing in this note is AI-solved: **all 12 questions have an official answer**.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Three unusual [[Utility Function]]s ([[Perfect Complements]], max utility, [[Quasilinear Utility]]): indifference curves, [[Optimal Choice]], [[Demand Function]] | [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]] |
| Q2 | [[Labor Supply]] with a kinked budget line (welfare floor plus 50% tax), using revealed preference | [[Lec_08-Labor Supply]], [[Lec_06-Revealed Preference]] |
| Closed 1 to 4 | Quasilinear income effect, interest rate in a two-period model, a price change that leaves the budget set unchanged, Cobb-Douglas intertemporal | [[Lec_04-Optimal Bundle]], [[Lec_09-Intertemporal Choice]] |
| Closed 5 to 10 | [[Income Effect]] and [[Substitution Effect]] (Slutsky and Hicks), net buyers and sellers, MRS statements, goods classification, present and future lovers | [[Lec_07-Substitution and Income Effects]], [[Lec_09-Intertemporal Choice]] |

> [!tip] Intuition: the move behind each question
> - Q1: when preferences are not smooth, **draw the indifference curve first** and read the optimum off the picture (corner, kink or tangency).
> - Q2: compare the new budget set with the old one. If the old bundle is still affordable (and the set grew), the consumer is better off. If the old bundle is lost, only revealed preference can say anything.
> - Closed: most statements are decided by one of three tools: the tangency condition $MRS = P_X/P_Y$, "can she still afford the old bundle?", or "net buyer or net seller?".

---

# Open questions (65 points)

## Q1 — Three consumers: min, max and ln X + Y

There are 3 consumers with the following utility functions:

1. $U(X,Y) = \min(2X, Y)$
2. $U(X,Y) = \max(X, 3Y)$
3. $U(X,Y) = \ln X + Y$

### a. Indifference curves and the budget constraint

**Question.** Each consumer has income $I = 12$, and the prices are $P_X = 2$, $P_Y = 1$. Draw a typical indifference curve for each consumer and the budget constraint.

> [!success] Answer
> 1. **L-shaped** curve (perfect complements) with its kink where $Y = 2X$. The official sketch labels the kink at $(1, 2)$ on the curve $U = 2$.
> 2. **Reversed L** (max utility): the curve is a horizontal segment at $Y = U/3$ plus a vertical segment at $X = U$, with the corner pointing **away** from the origin. The official sketch shows the corner at $(3, 1)$ on the curve $U = 3$.
> 3. A **smooth convex** curve, steep near the $Y$ axis and flattening out as $X$ grows. It becomes flat quickly but never touches the $X$ axis.
>
> The budget line is $2X + Y = 12$, with intercepts $X = 6$ and $Y = 12$.

![[PP04_q1_three_consumers.png|900]]

*Budget line in red, indifference curve through the optimum in dark blue. Optima come from part b. In panel 2 the horizontal segment at $Y = 12$ is the curve $U = 36$, and its vertical part sits far to the right at $X = 36$, off the chart.*

> [!tip] Intuition
> $\min(2X,Y)$ wants the goods in the fixed ratio $Y = 2X$: extra of either good alone adds nothing. $\max(X,3Y)$ is the opposite: only the **better** of the two goods counts, so the consumer wants to specialise. That makes the indifference curve bend the "wrong" way (concave to the origin), which is why the optimum will be a corner. See [[Perfect Complements]] and [[Indifference Curve]].

### b. Optimal bundle for each consumer

> [!success] Answer
> 1. $(X, Y) = (3, 6)$
> 2. $(X, Y) = (0, 12)$
> 3. $(X, Y) = (\tfrac12, 11)$

**Consumer 1, $U = \min(2X, Y)$.** The optimum sits at the kink, where $2X = Y$ (the income expansion path). Substitute into the budget:

$$
12 = 2X + Y = 2X + 2X = 4X \quad\Rightarrow\quad X = 3,\; Y = 6
$$

**Consumer 2, $U = \max(X, 3Y)$.** The indifference curves are concave, so tangency is a **minimum**, not a maximum. Compare the two corners of the budget line:

$$
U(0, 12) = \max(0, 36) = 36 \qquad U(6, 0) = \max(6, 0) = 6
$$

The best affordable bundle is $(0, 12)$: all income on $Y$. (The official text writes the second corner as $U(1\cdot 6, 0) = 6$.)

**Consumer 3, $U = \ln X + Y$.** Quasilinear. Use the tangency condition $MRS = P_X/P_Y$:

$$
\frac{1}{X} = \frac{2}{1} \quad\Rightarrow\quad X = \tfrac12
$$

Then $Y$ from the budget: $12 = 2\cdot\tfrac12 + 1\cdot Y$, so $Y = 11$.

> [!tip] Intuition
> For consumer 3, the marginal utility of $Y$ is always 1, so the $MRS$ depends on $X$ only: $MRS = 1/X$. The consumer buys $X$ until its marginal value $1/X$ falls to its relative price $P_X/P_Y = 2$, and spends everything else on $Y$. This is why the demand for $X$ will not depend on income (part c). See [[Quasilinear Utility]] and [[Marginal Rate of Substitution]].

### c. Demand function of each consumer

**Question.** What is the demand function for each consumer as a function of $I$, $P_X$ and $P_Y$?

> [!success] Answer
> 1. $X = \dfrac{I}{P_X + 2P_Y}$ (and $Y = 2X$)
> 2. If $P_X < P_Y/3$: $X = I/P_X$, $Y = 0$. If $P_X > P_Y/3$: $X = 0$, $Y = I/P_Y$.
> 3. $X = P_Y/P_X$ if $P_Y < I$; otherwise the consumer spends everything on $X$ (see the warning below).

**Consumer 1.** Kink condition $2X = Y$ in the budget $I = P_X X + P_Y Y$:

$$
I = P_X X + P_Y (2X) = X\,(P_X + 2P_Y) \quad\Rightarrow\quad X = \frac{I}{P_X + 2P_Y}
$$

**Consumer 2.** Compare the two corners. All income on $X$ gives $U = I/P_X$. All income on $Y$ gives $U = 3I/P_Y$. The consumer buys $X$ only if $I/P_X > 3I/P_Y$, that is $P_X < P_Y/3$. Otherwise all income goes to $Y$. At $P_X = P_Y/3$ the consumer is indifferent between the two corners. This is the only demand function with a jump: demand for $X$ falls from $I/P_X$ to 0 as soon as $P_X$ crosses $P_Y/3$.

**Consumer 3.** Tangency $1/X = P_X/P_Y$ gives $X = P_Y/P_X$. This is valid only if the consumer can afford it, so the spending on $X$ must be below income: $P_X X = P_Y < I$. If $P_Y \ge I$, the consumer would want to spend more on $X$ than the whole income, so the choice is the corner $X = I/P_X$, $Y = 0$. When the interior case holds, $Y = (I - P_Y)/P_Y = I/P_Y - 1$.

> [!warning] Typo in the official solution (consumer 3)
> The official text ends with "$X_d = I/P_Y$ if $P_Y > I$". That cannot be right dimensionally: units of $X$ cost $P_X$, so the corner demand is $I/P_X$, not $I/P_Y$. **Check:** with $P_X = 2$, $P_Y = 20$, $I = 12$ the consumer would want $X = 10$, costing 20 > 12, so spends all income on $X$ and buys $12/2 = 6$ units, not $12/20 = 0.6$. The condition "$P_Y < I$ versus $P_Y > I$" is the official one and is kept; only the $P_Y$ in the numerator-over-denominator is flagged.

> [!example] Check against part b
> With $I = 12$, $P_X = 2$, $P_Y = 1$: consumer 1 gives $X = 12/(2 + 2) = 3$. Consumer 3 gives $X = 1/2$ since $P_Y = 1 < 12$. Both match part b.

---

## Q2 — Ruth, a welfare floor and a 50% tax

Ruth has 24 hours a day to allocate to leisure or work. The wage rate is 5 dollars per hour. She spends her whole income on one consumption good priced at 1 dollar per unit. Her preferences over leisure and consumption are monotonic and convex.

### a. Budget constraint

**Question.** Show Ruth's budget constraint in a diagram with consumption on the vertical axis and leisure on the horizontal axis.

> [!success] Answer
> A straight line from $(L, C) = (24, 0)$ to $(0, 120)$, with slope $-5$ (the wage).

If she takes all 24 hours as leisure she earns nothing. Every hour of leisure given up buys 5 units of consumption, up to $24 \times 5 = 120$ at $L = 0$. See [[Labor Supply]] and [[Budget Line]].

### b. The government plan

**Question.** Anyone who earns less than 30 dollars gets a welfare payment that brings income to **exactly 30**. Anyone who earns more than 30 pays an income tax of 50% on each dollar beyond 30. Show Ruth's new budget constraint.

> [!success] Answer
> The new budget line (blue in the figure) has two pieces:
> - **Flat at $C = 30$** for $L$ between 18 and 24 (working 0 to 6 hours: income 30 at $L = 18$, topped up to 30 below that).
> - **Slope $-2.5$** for $L < 18$: each extra hour worked adds 5 but loses half to tax, so 2.5 net. At $L = 0$ the line reaches $30 + 0.5 \times 90 = 75$.

![[PP04_q2_ruth_welfare_plan.png|900]]

*Left: the original budget line. Right: the new line (blue) against the old one (red). The kink is at $L = 18$, $C = 30$, exactly the point $A$ (6 hours of work) on the old line. The black square marks the old bundle for 8 hours of work ($L = 16$), which lies **above** the new line.*

> [!tip] Intuition
> The plan **adds** the flat piece (a guarantee for people who earn under 30) and **removes** consumption above 30 (the tax). The old and new lines meet at the kink, because 30 is the income where neither the payment nor the tax applies. Left of the kink the new line is **below** the old one; right of it the new line is **above** the old one (the guaranteed 30 versus the old line that falls to 0 at $L = 24$).

### c. Ruth worked exactly 6 hours before the plan

**Question.** How does the plan affect Ruth's utility, labor supply and consumption if she was working exactly 6 hours a day before the plan?

> [!success] Answer
> Utility **increases**. Leisure **increases** (so she works less).

Six hours of work means $L = 18$ and income $5 \times 6 = 30$: she was at the kink (point A in the official diagram). Under the plan the old bundle is still affordable, and new bundles with **more leisure at the same consumption of 30** (the flat part, $L > 18$) are now affordable too. With monotonic preferences, more leisure at the same consumption is strictly better, so she is better off, and she moves to the right along the flat part (point B).

> [!tip] Intuition
> At the kink the old $MRS$ equals 5. Going **left** (working more), the plan pays only 2.5 per hour, which is worse than her required 5, so she will not. Going **right**, she gives up no consumption at all. So she takes more leisure.

### d. Ruth worked 8 hours before the plan

**Question.** How does the plan affect her utility, labor supply and consumption if she was working 8 hours a day before the plan?

> [!success] Answer
> We **cannot know** what happens to utility or to leisure.

Eight hours of work means $L = 16$ and consumption $40$ (on the old line, left of the kink). The plan cuts her net wage to 2.5 per hour for every hour above 6, so the old bundle is **no longer affordable** (the black square in the figure lies above the blue line). Also, new bundles (the flat piece on the right, or bundles at the kink) have become affordable. Whether she ends up better or worse off, and whether she works more or fewer hours, depends on how she trades off consumption against leisure; the information given does not say.

> [!warning] Why not "worse off"?
> It is tempting to say worse off because the budget line went down at her bundle. But the new budget **set** is not a subset of the old one: it contains extra bundles (flat piece). Losing the old bundle does not by itself rule out a better new bundle. This is the same logic as the "net seller or net buyer" questions in [[Lec_06-Revealed Preference]].

### e. Ruth works 8 hours after the plan

**Question.** What is the effect of the plan on Ruth's utility, labor supply and consumption if she was working 8 hours a day **after** the introduction of the plan?

> [!success] Answer
> Utility **decreases**. We cannot know what happens to leisure.

Now the 8 hours is the observed choice **under the plan**: $L = 16$ on the blue line, consumption $30 + 2.5 \times 2 = 35$. That bundle (B in the official diagram) lies **below** the old line, so it was **affordable before** the plan. Before the plan she chose a different bundle A on the old line, which therefore must have been **better** than this one (revealed preference). So her utility after the plan, at B, is lower than before.

Leisure cannot be pinned down: the income effect (poorer, so less leisure if it is normal) and substitution effect (lower net wage, so more leisure) go in opposite directions.

> [!tip] Intuition
> Compare c and e. In c, the old choice is still available under the plan, so utility can only go up. In e, the **new** choice was available under the old regime and was passed over, so utility can only have gone down.

---

# Closed questions (40 points, choose 8 out of 10)

## Closed 1 — Quasilinear income effect

Ambrose's utility is $U(x_1, x_2) = 4x_1^{1/2} + x_2$. The price of nuts (good 1) is 1 dollar, the price of berries (good 2) is 4 dollars, and his income is 108 dollars. If his income increases to 216 dollars, what is the **change** in the amount of nuts?

- a) 128
- b) **0**
- c) 64
- d) 32

> [!success] Answer: b) 0

Tangency: $MRS = MU_1/MU_2 = 2/\sqrt{x_1}$ must equal $P_1/P_2 = 1/4$. So $\sqrt{x_1} = 8$ and $x_1 = 64$. This costs 64 dollars, which is less than 108, so the choice is interior: $x_2 = (108 - 64)/4 = 11$. The condition does not involve income, so at 216 dollars the consumer still buys $x_1 = 64$ nuts and spends all the extra on berries ($x_2 = (216-64)/4 = 38$).

- **a), c), d):** each would need nut demand to respond to income. With [[Quasilinear Utility]] in good 1, it does not (while the choice stays interior).

## Closed 2 — Interest rate and impatience

Patience has utility $U(c_1, c_2) = c_1^{1/2} + 0.87\,c_2^{1/2}$. At what interest rate will she choose to consume **half** as much in period 1 as in period 2? (Choose the closest answer.)

- a) **0.625**
- b) 0.315
- c) 0.152
- d) 0.233

> [!success] Answer: a) 0.625

At the optimum $MRS = 1 + r$:

$$
MRS = \frac{MU_1}{MU_2} = \frac{\tfrac12 c_1^{-1/2}}{0.87 \cdot \tfrac12 c_2^{-1/2}} = \frac{1}{0.87}\sqrt{\frac{c_2}{c_1}}
$$

With $c_1 = c_2/2$, we have $c_2/c_1 = 2$:

$$
1 + r = \frac{\sqrt{2}}{0.87} \approx 1.625 \quad\Rightarrow\quad r \approx 0.625
$$

- **b), c), d):** these correspond to other ratios $c_2/c_1$. For example $r = 0.315$ would need $\sqrt{c_2/c_1} = 1.14$, so $c_2/c_1 \approx 1.3$, not 2.

## Closed 3 — A proportional price fall for a net trader

Fanny consumes $x$ and $y$. The price of $x$ is 10, the price of $y$ is 10. Her only income is 24 units of $x$ and 24 units of $y$ that she can buy or sell at the going prices. She plans to consume 26 of $x$ and 22 of $y$. If the prices decrease to 4 for $x$ and 4 for $y$:

- a) she is better off
- b) she is worse off
- c) **she is neither better off nor worse off**
- d) we can't tell unless we know her utility function

> [!success] Answer: c)

At the old prices, her endowment is worth $24 \times 10 + 24 \times 10 = 480$ and the plan costs $26 \times 10 + 22 \times 10 = 480$. At the new prices both numbers scale by $4/10$: endowment worth 192, plan costs 192. The prices fell **proportionally**, so the relative price (the slope of the budget line) and the endowment point are unchanged: the budget set is **exactly the same**. Same choice set, same optimum, same utility.

- **a), b):** these need the budget set to change. d) is wrong because we do not need the utility function when the choice set is identical.

## Closed 4 — Cobb-Douglas over two periods

Molly has income 400 in period 1 and 800 in period 2. The interest rate is zero. Her utility is $c_1^a c_2^{1-a}$ with $a = 0.5$. If her period-1 income **doubled** and period-2 income stayed the same, her consumption in period 1 would:

- a) stay constant
- b) increase by 400
- c) increase by 160
- d) **increase by 200**

> [!success] Answer: d) increase by 200

With $r = 0$, wealth is $c_1 + c_2 = m_1 + m_2$. A Cobb-Douglas consumer spends the fixed share $a$ of wealth on good 1 (here period-1 consumption). Before: wealth $= 1200$, so $c_1 = 0.5 \times 1200 = 600$. After: wealth $= 800 + 800 = 1600$, so $c_1 = 800$. Change $= 800 - 600 = 200$.

> [!tip] Intuition
> Half of every extra dollar of wealth goes to each period: the extra 400 raises $c_1$ by 200 and $c_2$ by 200. See [[Cobb-Douglas Utility]] and [[Lec_09-Intertemporal Choice]].

## Closed 5 — Price of X rises (Cobb-Douglas)

A consumer has $U(X,Y) = XY$. If the price of $X$ **increases**, the conclusion is that:

- a) the substitution effect on $X$ = the real income effect on $X$.
- b) HICKS substitution effect > SLUTSKY substitution effect in absolute values.
- c) real income effect on $Y$ = the substitution effect on $Y$.
- d) **More than one answer is correct.**

> [!success] Answer: d) more than one answer is correct

Let $p$ be the old price and $p'$ the new one, with income $I$. Demand is $X = I/(2P_X)$.

- **a) is true.** Total change: $\frac{I}{2}\left(\frac1{p'} - \frac1p\right)$. Slutsky compensation raises income to $I' = I + (p' - p)X_0 = I\,\frac{p + p'}{2p}$. The Slutsky substitution effect is $\frac{I'}{2p'} - \frac{I}{2p} = \frac{I}{4p}\cdot\frac{p - p'}{p'}$, which is **exactly half** the total change, so the income effect is the other half. For Cobb-Douglas the two are equal.
- **b) is true.** The Hicks compensation is smaller than the Slutsky compensation (see Closed 9). With less income and $X$ normal, the Hicks-compensated demand for $X$ is lower, so its substitution effect (a fall in $X$) is **larger in absolute value**.
- **c) holds in size.** $Y = I/(2P_Y)$ does not depend on $P_X$, so the total effect on $Y$ is zero: the substitution effect (a rise in $Y$) and the income effect (a fall in $Y$) are **equal and opposite**. Read as "equal in absolute value" it is true; as "equal with sign" it is not. Either way it is consistent with d.

See [[Slutsky Compensation]], [[Hicks Compensation]], [[Income Effect]] and [[Substitution Effect]].

## Closed 6 — Net buyer or seller when $P_Y$ falls

A consumer has real income of $(X = 10, Y = 10)$. He can change those quantities by selling each good and buying new quantities. If $P_Y$ **decreases**:

- a) and in his original optimal basket the consumer bought $X$ and sold $Y$, his utility will increase.
- b) and in his original optimal basket the consumer bought $X$ and sold $Y$, it is not possible that he will still buy $X$ and sell $Y$.
- c) **and in his original optimal basket the consumer sold $X$ and bought $Y$, his utility will increase.**
- d) none of the above are correct.

> [!success] Answer: c)

A fall in $P_Y$ is good news for a **net buyer of $Y$** (he pays less for what he buys) and bad news for a **net seller of $Y$** (he earns less from what he sells).

- **c) true.** Selling $X$ and buying $Y$ means he is a net buyer of $Y$. After the fall his old bundle is still affordable (his cost of $Y$ went down, his income from $X$ is unchanged), so with strictly better bundles now available he is at least as well off, and in fact better off.
- **a) false.** Buying $X$ and selling $Y$ means he is a net **seller** of $Y$, who loses from the fall. His old bundle becomes unaffordable.
- **b) false.** Nothing rules out that he is still a net seller of $Y$ after a small price fall.

See [[Lec_06-Revealed Preference]].

## Closed 7 — Three statements

Statements: (1) If $U = XY$ and $MRS > P_X/P_Y$, then the consumer must increase $X$ and decrease $Y$ to reach his optimal basket. (2) If $U = \min(X/2, Y)$ then $MRS = 0.5$. (3) If $U = aX + bY$ then it is **not possible** that $MRS > P_X/P_Y$ at the optimal point.

- a) **Only statement 1 is correct**
- b) Only statements 1+3 are correct
- c) Statement 3 is correct
- d) Only statements 1+2 are correct

> [!success] Answer: a)

1. **True.** $MRS > P_X/P_Y$ means the consumer values $X$ more (in terms of $Y$) than the market charges. He should buy more $X$ and less $Y$ until the two are equal (smooth, convex preferences).
2. **False.** For perfect complements the indifference curve is L-shaped: the $MRS$ is **0 or infinite on the arms and undefined at the kink**. It is never "0.5". (The 0.5 only appears as the ratio of goods, $X/2 = Y$.)
3. **False.** With perfect substitutes, the optimum is a corner. If $a/b > P_X/P_Y$ the consumer spends everything on $X$, and at that optimum $MRS = a/b > P_X/P_Y$. So it **is** possible.

See [[Marginal Rate of Substitution]] and [[Perfect Substitutes]].

## Closed 8 — Classifying two utility functions

There are two consumers: $U_1 = \min(aX, bY)$ and $U_2 = X^a Y^b$.

- a) **For consumer 2 the goods are "undependable" [independent] and for consumer 1 they are complementary.**
- b) For consumer 1 the goods are normal and for consumer 2 the goods are neutral.
- c) For consumer 1 the goods are substitutive and for consumer 2 the goods are complementary.
- d) None of the above.

> [!success] Answer: a)

$\min(aX, bY)$ is [[Perfect Complements]]. $X^a Y^b$ is [[Cobb-Douglas Utility]], whose demand for each good is $X = \frac{a}{a+b}\frac{I}{P_X}$: it depends only on its **own** price, not on the other good's price, which is the sense of **independent** goods.

- **b) wrong:** "normal" and "neutral" describe how demand reacts to income or whether a good adds utility, not how the two goods relate; and neither good is neutral in Cobb-Douglas.
- **c) wrong:** consumer 1 has complements, not substitutes, and consumer 2's goods are not complements.

> [!warning] Typos in the printed options
> The paper writes "undependable" and "complemantry". The reading above ("independent", "complementary") is the only one that makes the highlighted option sensible.

## Closed 9 — Which statement is correct?

- a) For a present-lover consumer, savings are always negative.
- b) **For positive compensation, Slutsky's compensation > Hicks compensation.**
- c) A rational consumer never changes his preferences.
- d) None of the above.

> [!success] Answer: b)

Slutsky compensation hands over exactly enough income to **afford the old bundle** at the new prices. Hicks compensation hands over only enough to reach the **old utility**. Since the consumer will re-optimise at the new prices, he reaches the old utility with a cheaper bundle than the old one (unless the bundle is already optimal), so Hicks $\le$ Slutsky, and strictly less in the usual case.

- **a) false:** a present lover prefers consumption early, but at a high enough interest rate (or with enough income in period 1) he still saves.
- **c) false:** this statement is not a theorem; rationality (complete, transitive preferences) says nothing about preferences being fixed forever.

## Closed 10 — The future lover

The future-lover consumer will:

- a) always save money for every interest rate and income
- b) **will definitely borrow money if he has only income in the future.**
- c) will consume more in the future than in the present
- d) more than one answer is correct

> [!success] Answer: b)

A future lover has smooth convex preferences that make him want a positive amount in **both** periods. If all his income comes in period 2, then any consumption in period 1 has to be borrowed, so he borrows.

- **a) false:** with income only in the future he cannot save at all.
- **c) false:** a high enough interest rate, or an income stream tilted to the present, can reverse the pattern; the statement is not a certainty.
- **d) false:** only b is correct.

> [!tip] Intuition
> The word "definitely" is what makes b safe: the only way to have $c_1 > 0$ with zero income in period 1 is to borrow. This relies on the textbook assumption that the consumer wants some consumption in each period (an interior optimum).

---

## Recap

| Question | Tool | Answer |
|---|---|---|
| Q1a | Draw indifference curves | L-shape, reversed L, smooth convex; budget $2X + Y = 12$ |
| Q1b | Kink, corner compare, tangency | $(3,6)$, $(0,12)$, $(\tfrac12, 11)$ |
| Q1c | Same, with $I, P_X, P_Y$ | $\frac{I}{P_X + 2P_Y}$; corner switch at $P_X = P_Y/3$; $P_Y/P_X$ if $P_Y < I$ |
| Q2a | Budget line | $(24, 0)$ to $(0, 120)$ |
| Q2b | Kinked budget | Flat at 30 for $L \ge 18$, slope $-2.5$ to $(0, 75)$ |
| Q2c | Old bundle still affordable | Utility up, leisure up |
| Q2d | Old bundle lost | Cannot know |
| Q2e | Chosen bundle was affordable before | Utility down, leisure unknown |
| Closed 1 | Quasilinear | b) 0 |
| Closed 2 | $MRS = 1 + r$ | a) 0.625 |
| Closed 3 | Budget set unchanged | c) neither |
| Closed 4 | Cobb-Douglas share | d) +200 |
| Closed 5 | Slutsky vs Hicks | d) more than one |
| Closed 6 | Net buyer of $Y$ | c) |
| Closed 7 | $MRS$ statements | a) only 1 |
| Closed 8 | Classify utilities | a) |
| Closed 9 | Compensation | b) Slutsky > Hicks |
| Closed 10 | Future lover | b) borrows |

## Related notes

[[Micro-Economics I]] · [[Lec_04-Optimal Bundle]] · [[Lec_07-Substitution and Income Effects]] · [[Lec_08-Labor Supply]] · [[Lec_09-Intertemporal Choice]] · [[PS_04-Optimal Choice]] · [[PS_07-Labor Supply]]
