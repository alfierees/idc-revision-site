---
title: "Labor Supply, Intertemporal Choice & Consumer Theory MCQ (2020 Moed B)"
type: past-paper
status: worked-solution
exam: "Micro-Economics 1 Final Exam, Moed B (2020)"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - labor-supply
  - intertemporal-choice
  - quasilinear
  - slutsky
aliases:
  - Micro 1 Moed B 2020
  - PP06 Micro I
subject: micro-i
in_scope: true
---

# Labor Supply, Intertemporal Choice & Consumer Theory MCQ (2020 Moed B)

> Part of: [[Micro-Economics I]]
> **Micro-Economics 1, Moed B (2020)**, Micro-Economics I, Ido Eisdorfer and Yosi Ganel. 3 hours, calculators and two formula sheets allowed.
> Builds on: [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]]
> Practice: [[PS_07-Labor Supply]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]

> [!info] Source
> Answers follow the **official handwritten solution** (7 pages). I checked that it matches this paper question by question (open Q1 and Q2, closed Q1 to Q10): same utility functions, same numbers, same letters. Every question has an official key. Nothing in this note is AI-solved; my own checks are flagged with warning or tip.

> [!info] Exam format
> Two mandatory open questions (65 points plus 5 bonus), then ten multiple-choice questions of which the student answers 8 (5 points each). Multiple-choice answers must be **explained**. The paper states that the utility function is convex unless said otherwise.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Open Q1 | [[Quasilinear Utility]] with leisure: demand for [[Leisure]], [[Labor Supply]], effect of a wage rise, effect of [[Non-Labor Income]] | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Open Q2 | Two-period consumption: budget line, saver vs borrower, inflation and interest rate changes, Slutsky decomposition, kinked budget line | [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]] |
| MCQ 1 | Monotonic preferences | [[Lec_02-Preferences]] |
| MCQ 2, 6 | Convex vs non-convex utility, interior vs corner choice | [[Lec_04-Optimal Bundle]] |
| MCQ 3, 4, 5 | [[Slutsky Compensation]], [[Hicks Compensation]], income and substitution effects, endowment | [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]] |
| MCQ 7 | [[Perfect Complements]] | [[Lec_03-Utility and MRS]] |
| MCQ 8, 9 | Quasilinear utility, income effect that vanishes | [[Lec_03-Utility and MRS]], [[Lec_05-Demand]] |
| MCQ 10 | Normal, inferior and neutral goods | [[Lec_07-Substitution and Income Effects]] |

> [!tip] Intuition: the one move behind each part
> - Open Q1: with $U = L^{0.5} + Y$ the price of $Y$ is 1, so the tangency $MRS = W$ gives $L$ from the wage alone. Income never enters, which is why leisure ignores any extra money.
> - Open Q2: in a two-period problem the "price" of present consumption in terms of future consumption is set by the **real** interest rate, $\frac{1+r}{1+\pi}$. Every question is "which way does the line pivot around the endowment, and is the person a saver or a borrower?"
> - MCQ: always ask whether the question is at an interior optimum, a corner, or a kink, because the answer changes with it.

---

## Open Q1 — Yaron: leisure, work and wages (27 points)

Yaron has 24 hours to split between leisure $L$ and work. He is paid $W$ dollars per hour worked and spends his income on $Y$ with $P_y = 1$. His utility is $U(L,Y) = L^{0.5} + Y$.

### a. Demand for leisure and its graph (6 points)

**Question.** Calculate the demand function for $L$ and show it on a graph of $L$ against $W$.

> [!success] Answer
> $L^* = \left(\dfrac{1}{2W}\right)^2 = \dfrac{1}{4W^2}$

Set the [[Marginal Rate of Substitution]] equal to the price ratio. Leisure is the "good" whose price is the wage $W$ (each hour of leisure gives up $W$ dollars of income), and the price of $Y$ is 1.

$$
MRS = \frac{MU_L}{MU_Y} = \frac{\frac{1}{2\sqrt{L}}}{1} = \frac{W}{P_y} = W
$$

$$
\sqrt{L} = \frac{1}{2W} \quad\Longrightarrow\quad L = \left(\frac{1}{2W}\right)^2
$$

The demand curve slopes down (higher wage, less leisure). It stops at $L = 24$, because Yaron cannot take more leisure than he has hours. $L = 24$ is reached when $\frac{1}{4W^2} = 24$, that is $W = \frac{1}{2\sqrt{24}} \approx 0.102$. Below that wage he takes all 24 hours as leisure (a [[Corner Solution]]).

![[PP06_q1_leisure_demand_labor_supply.png|700]]

*Left: the demand for leisure, a downward-sloping curve that hits the vertical line $L = 24$ at $W = \frac{1}{2\sqrt{24}}$. Right: the labor supply derived in part b.*

> [!warning] Corner below the threshold wage
> The official graph shows the curve ending at $L = 24$ with a dashed vertical line; the threshold value of the wage was written on the axis. The value $0.102$ is my own evaluation of $\frac{1}{2\sqrt{24}}$.

### b. Labor supply and its graph (6 points)

**Question.** Calculate the labor supply $H$ and show it on a graph of $H$ against $W$.

> [!success] Answer
> $H = 24 - L^* = 24 - \left(\dfrac{1}{2W}\right)^2$

Hours worked are whatever is not leisure. The curve slopes **upward** (a higher wage means more hours worked) and approaches, but never reaches, $H = 24$. It starts at $H = 0$ at the threshold wage $W = \frac{1}{2\sqrt{24}}$ from part a (see the right panel above).

### c. A higher wage (7 points)

**Question.** What happens to $L$, $Y$ and $H$ if the wage rises?

> [!success] Answer
> $L$ falls, $H$ rises, $Y$ rises.

- $L = \frac{1}{4W^2}$ falls as $W$ rises.
- $H = 24 - L$ therefore rises.
- Income spent on $Y$ is
$$
Y = H \cdot W = 24W - \frac{1}{4W}
$$
which rises with $W$, because both terms $24W$ and $-\frac{1}{4W}$ increase with $W$.

> [!tip] Intuition
> This is [[Quasilinear Utility]] in leisure. There is no income effect on leisure, so only the [[Substitution Effect]] acts: leisure is now more expensive in lost wages, so Yaron buys less of it and works more.

### d. A fixed amount of money $W_0$ (8 points)

**Question.** How does your answer to c change if the consumer also has a fixed amount $W_0$ that does not depend on the wage?

> [!success] Answer
> $L$ and $H$ do not change. $Y$ rises.

With [[Non-Labor Income]] $W_0$ the budget is $Y = (24 - L)\,W + W_0$. The tangency condition $MRS = W$ is the same as before, so $L = \frac{1}{4W^2}$ and $H = 24 - L$ are unchanged by $W_0$ (while the choice stays interior). Spending on $Y$ is

$$
Y = H\,W + W_0 = 24W - \frac{1}{4W} + W_0
$$

and still rises with $W$ (it also rises with $W_0$ itself).

> [!tip] Intuition
> Quasilinear utility has no income effect on the non-linear good. Extra cash from $W_0$ all goes to $Y$ and none to leisure, so the wage rise looks exactly like part c for $L$ and $H$.

### e. A different utility function (5 points)

**Question.** If $U = L^{0.5} + Y^{0.5}$, can Yaron choose not to work at all? No calculation needed.

> [!success] Answer
> No. The utility function is convex, so he always consumes both $L$ and $Y$.

Not working means $H = 0$, hence $Y = 0$ (no income, no other source), which is a corner with zero of the good $Y$. With $U = L^{0.5} + Y^{0.5}$ the marginal utility of $Y$ is $\frac{1}{2\sqrt{Y}}$, which becomes infinitely large as $Y \to 0$. A tiny amount of income is worth a huge amount of utility, so he will give up some leisure to get it. Compare with part a, where $MU_Y = 1$ is constant and a corner at $H = 0$ is possible when the wage is low.

> [!warning] Official reasoning is shorter
> The official note says only that the function is convex so he always consumes both goods. The marginal-utility argument above is my own explanation of why.

---

## Open Q2 — Yudit: consumption across two periods (33 points)

Yudit splits income between consumption $C_1$ and $C_2$ in two periods. Both are normal goods. Her first-period income $I_1$ is bigger than her second-period income $I_2$. She is **indifferent between present and future** and has a convex utility function. In the initial position the interest rate $r$ equals the inflation rate $\pi$, so the real interest rate is zero and $\frac{1+r}{1+\pi} = 1$.

### a. Budget line and optimal bundle (6 points)

**Question.** Draw Yudit's budget line and her optimal bundle. Point out $C_1$ and $C_2$ in the optimal bundle, the intercepts and the slope.

> [!success] Answer
> Budget line with slope $-1$, intercepts $I_1 + I_2$ on both axes. The optimum $A$ lies on the line to the left of the endowment, with $C_1 < I_1$ and $C_2 > I_2$.

- **Slope.** Slope of the line is $-\frac{1+r}{1+\pi} = -1$.
- **Intercepts.** The line passes through the endowment $(I_1, I_2)$. Going all the way to $C_2 = 0$ gives $C_1 = I_1 + I_2$ (the horizontal intercept), and going to $C_1 = 0$ gives $C_2 = I_1 + I_2$ (the vertical intercept), because with a zero real rate a dollar moves between periods one for one.
- **Optimum.** Being "indifferent between present and future" with a convex utility function means she wants to consume equally in the two periods, so $A$ sits on the 45-degree line, $C_1 = C_2 = \frac{I_1 + I_2}{2}$. Since $I_1 > I_2$, this gives $C_1 < I_1$ and $C_2 > I_2$.

![[PP06_q2a_budget_line_optimum.png|520]]

*The budget line through the endowment with slope $-1$, intercepts $I_1 + I_2$, and the optimum $A$ on the 45-degree line (dashed). Drawn to scale only qualitatively; the endowment values are illustrative.*

### b. Savings (3 points)

**Question.** Are Yudit's savings positive, negative or zero? Explain.

> [!success] Answer
> Positive. $I_1 > C_1$, so she saves $S = I_1 - C_1 > 0$ (she is a saver).

> [!tip] Intuition
> She has more income now than she wants to consume now, so the excess is saved and spent in period two.

### c. A fall in inflation: utility and the range of the new bundle (5 points)

**Question.** What happens to Yudit's utility if the inflation rate decreases? Point out the range of the new bundle.

> [!success] Answer
> Utility **increases**. The real rate $\frac{1+r}{1+\pi}$ rises, so the budget line becomes **steeper**, pivoting around the endowment. The new bundle $B$ lies on the new line to the left of the endowment.

Lower inflation with an unchanged nominal rate means a higher real rate of return on saving. Yudit is a saver, so she is better off: the old bundle $A$ is strictly inside the new budget set (the new line is above the old one to the left of the endowment), so she can reach a higher indifference curve.

The official table for the Slutsky steps (see part d) gives the direction of each good:

| Step | $C_2$ | $C_1$ | Real interest rate |
|---|---|---|---|
| [[Substitution Effect]] ($A$ to $C$) | up | down | up |
| [[Income Effect]] ($C$ to $B$) | up | up | up |
| Total | up | ? | |

$C_2$ rises for sure. $C_1$ is ambiguous: the substitution effect lowers it and the income effect (normal good) raises it. The new bundle $B$ is on the new line, to the left of the endowment (savers stay savers when the return rises).

### d. Slutsky compensation and the two effects (6 points)

**Question.** Show in a new graph the Slutsky compensation needed due to the (change in the) inflation rate and point out the new bundle. Show also the substitution and real income effects on the same graph.

> [!success] Answer
> Slutsky line through $A$ with the new slope; $A \to C$ is the substitution effect; $C \to B$ (to the new, parallel budget line) is the real income effect.

![[PP06_q2cd_inflation_fall_slutsky.png|560]]

*Lower inflation steepens the line (red). The dashed Slutsky line has the new slope and passes through the old bundle $A$. $A \to C$ is the substitution effect (less $C_1$, more $C_2$), $C \to B$ the income effect (more of both, since both are normal). The possible position of $B$ is on the red line, to the upper right of $C$ and left of the endowment.*

Steps:

1. Draw the new budget line, pivoted (steeper) around the endowment.
2. Draw a line **parallel** to it that passes through the original bundle $A$. This is the Slutsky-compensated budget line. In this case the compensation is a negative payment, because the new line is above the Slutsky line.
3. On the Slutsky line, the consumer chooses $C$. Moving $A \to C$ is the substitution effect.
4. Shift from the Slutsky line out to the new budget line. Both goods are normal, so both rise: $C \to B$ is the income effect.

> [!warning] The question says "increase" but the official answer draws a decrease
> Part d is written as "due to the increase in the inflation rate", yet the official solution repeats the picture and the table of part c (the **fall** in inflation: steeper line, $C_2$ up). I kept the official picture. For an **increase** in inflation (or a fall in the interest rate) the line flattens: use part e.

### e. A fall in the interest rate (7 points)

**Question.** Ignore b and c (go back to a). Suppose the interest rate decreases. Show the change on a graph and point out the new bundle.

> [!success] Answer
> The real rate falls, so the line gets **flatter**, pivoting around the endowment. $C_2$ falls, $C_1$ is ambiguous, and the effect on utility cannot be determined.

| Step | $C_2$ | $C_1$ | Real interest rate |
|---|---|---|---|
| Substitution effect ($A$ to $C$) | down | up | down |
| Income effect ($C$ to $B$) | down | down | down |
| Total | down | ? | |

![[PP06_q2e_interest_rate_fall.png|560]]

*The red line is flatter than the blue one and crosses it at the endowment. To the left of the endowment the new line is below the old one, so $A$ is no longer affordable.*

> [!warning] Why utility is "unknown"
> The official note says only "we don't know what will happen to the utility". My reading: Yudit is a saver, so if she stays a saver (stays to the left of the endowment) she is **worse off**, because the point she picks on the new line was affordable under the old line yet she preferred $A$. If she switches to borrowing (right of the endowment) the new line is above the old one there, and the utility change cannot be signed from the information given.

### f. Only the borrowing rate falls (6 points)

**Question.** How would your answer to e change if only the interest rate for those who borrow money changed, not the rate for those who lend it? Explain. You may use a graph.

> [!success] Answer
> The budget line becomes **kinked** at the endowment: unchanged to the left (saver side), flatter to the right (borrower side). Utility: unknown (the official says "?"). The new bundle $B$ is either unchanged at $A$, or to the right of $I_1$.

Yudit is a saver, so she lends at the lender's rate, which has not changed. Her old bundle $A$ is still on the budget line. The new region is the part of the budget set to the right of the endowment, where she would borrow.

![[PP06_q2f_borrowing_rate_only.png|560]]

*Left of the kink the new line coincides with the old one, so $A$ is still affordable. Only the borrowing part (right of the endowment) pivots outwards.*

- If she still prefers $A$ to anything on the new borrowing segment, she **stays at $A$**.
- If some point on the borrowing segment beats $A$, she moves there, so $C_1 > I_1$.

> [!tip] Intuition
> Nothing she was doing gets worse, so she is never hurt by a better borrowing rate. The official key writes "?" for utility; since $A$ stays affordable, utility cannot fall, and it rises only if she switches to borrowing.

---

## Closed questions (choose 8 of 10, 5 points each)

### MCQ 1 — Monotonic preferences

**Question.** Two consumers have $U_1 = \dfrac{X^a}{Y^b}$ and $U_2 = X^{-a} + Y^b$.

- a) In both utility functions, both goods are positively monotonic.
- b) In $U_1$, $X$ is positively monotonic and in $U_2$, $Y$ is positively monotonic.
- c) Only in $U_2$ both goods are positively monotonic.
- d) None of the above.

> [!success] Answer: **b)**

A good is positively monotonic if more of it always raises utility (with $a, b > 0$).

- $U_1 = X^a Y^{-b}$: raising $X$ raises utility; raising $Y$ **lowers** it (it is in the denominator). $X$ is monotonic, $Y$ is not (it is a bad).
- $U_2 = X^{-a} + Y^b$: raising $X$ lowers utility ($X^{-a}$ falls as $X$ rises), so $X$ is a bad. Raising $Y$ raises utility, so $Y$ is monotonic.

So only $X$ in $U_1$ and only $Y$ in $U_2$ are monotonic: that is b. a is wrong (each function has one bad), c is wrong (neither has both goods monotonic), d is wrong because b holds. See [[Economic Bad]] and [[Preferences]].

### MCQ 2 — Convex utility functions

**Question.** Statements about convex utility functions: (1) at the optimal bundle $MRS \ge \frac{P_x}{P_y}$; (2) the consumer always buys a positive quantity of both goods; (3) the consumer may buy only $X$ or only $Y$. Options: a) only 1; b) 1+3; c) only 2; d) 1+2.

> [!success] Answer: **c)**

- Statement 1 is **false**. At the optimum of a convex utility function the tangency gives $MRS = \frac{P_x}{P_y}$ exactly, not "at least".
- Statement 2 is **true** here: the paper says to assume convex utility, which gives an interior solution (the official note: "it is an inner solution, always buys two goods").
- Statement 3 is **false**: a corner choice arises for non-convex or linear utility, not for a convex one.

Only statement 2 is correct: c. See [[Optimal Choice]] and [[Marginal Rate of Substitution]].

### MCQ 3 — Cobb-Douglas, price of Y falls

**Question.** $U(X,Y) = X \cdot Y$. If the price of $Y$ decreases, then:

- a) |Substitution effect on $X$| > |real income effect on $X$|.
- b) |Hicks substitution effect on $X$| = |Slutsky substitution effect on $X$|.
- c) |Real income effect on $Y$| = |substitution effect on $Y$|.
- d) None of the above.

> [!success] Answer: **d)**

Official table, for $P_y$ falling: $Y$ rises through both effects; for $X$ the substitution effect is negative (relative price $P_x/P_y$ rises) and the income effect is positive, and in total **$X$ does not change** for Cobb-Douglas. See [[Cobb-Douglas Utility]].

- a) is false. The two effects on $X$ cancel exactly, so they are **equal** in absolute value, not larger.
- b) is false. The official picture shows that the Hicks substitution effect on $X$ is **larger** than the Slutsky one.
- c) is false (official).
- So d.

> [!warning] My check on option c
> I worked option c out with $I = 2$, $P_x = 1$ and $P_y$ falling from 1 to 0.5. Hicks: $Y$ goes from 1 to 1.414 on the substitution step, then to 2 on the income step, so the two effects are 0.414 and 0.586: not equal. Slutsky: the compensated bundle is $(0.75,\, 1.5)$, so the substitution effect on $Y$ is 0.5 and the income effect is 0.5: **equal**. In fact for Cobb-Douglas with a Slutsky decomposition the two effects on $Y$ are always equal. The official key is d, and its reasoning rests on the Hicks decomposition (and on b, which is robustly false). I keep d. The question does not say which decomposition to use, so be ready to state it in an exam.

See [[Hicks Compensation]], [[Slutsky Compensation]], [[Substitution Effect]], [[Income Effect]].

### MCQ 4 — Endowment (10, 0) and a rise in $P_x$

**Question.** A consumer's real income is $(X = 10, Y = 0)$, which she can sell and rebuy in new quantities. Utility is convex. If $P_x$ rises:

- a) Her utility will definitely increase.
- b) Her utility will definitely decrease.
- c) The Slutsky compensation will be negative.
- d) None of the above.

> [!success] Answer: **a)**

She owns only $X$, so she is a **net seller of $X$**. A higher $P_x$ means her endowment is worth more, so the budget line pivots **outwards** around the endowment point $(10, 0)$ and the old bundle is strictly inside the new budget set. Utility increases. The same logic as [[Lec_08-Labor Supply]] on endowments: a seller gains when the price of what she sells goes up.

> [!warning] My check on option c
> I derived the Slutsky compensation as $(P_x' - P_x)(x_0 - 10)$, where $x_0$ is the old consumption of $X$. This is negative whenever she kept less than 10 units of $X$, which is the interesting case (she sold some). So c can also hold. The official key is a, which is certain whenever she sells any $X$; it keeps the word "definitely". I keep a.

### MCQ 5 — $P_y$ falls, $X$ unchanged

**Question.** If the price of $Y$ decreases and the quantity of $X$ in the new bundle does not change, the conclusion is:

- a) $X$ is a normal good and the real income effect on $Y$ is unknown.
- b) The utility function could be Cobb-Douglas.
- c) $X$ is an inferior good.
- d) a + b are correct.

> [!success] Answer: **d)**

Official table: the substitution effect lowers $X$ (relative price $P_x/P_y$ rises); the income effect on $X$ is positive if $X$ is normal. For the total to be zero, the two must cancel, which requires the income effect on $X$ to be positive: $X$ is **normal**. The official table marks the effect on $Y$ as unknown, so a is accepted. Cobb-Douglas demand for $X$ does not depend on $P_y$, so b is possible. c is wrong (an inferior $X$ would make the income effect negative, so $X$ would fall further). Hence a and b: d.

### MCQ 6 — Non-convex utility, corner solution

**Question.** Hadas has 100 dollars; $P_x = 20$, $P_y = 10$; $U = X^2 + \dfrac{Y^2}{2}$. Her optimal bundle:

- a) $X = 2.5$ and $Y = 5$
- b) $X = 4$ and $Y = 2$
- c) $Y = 10$
- d) $X = 5$

> [!success] Answer: **c)**

This utility function is **not convex** (it is concave in each good), so the optimum is at a corner, not at a tangency. Compare the two corners of the budget line:

| Bundle | Calculation | Utility |
|---|---|---|
| $X = 5,\ Y = 0$ | $5^2$ | 25 |
| $X = 0,\ Y = 10$ | $\frac{10^2}{2}$ | 50 |

She buys only $Y$: c. The other options are not optimal:

- a) $(2.5, 5)$ costs $50 + 50 = 100$ and gives $6.25 + 12.5 = 18.75$, less than 50.
- b) $(4, 2)$ costs $80 + 20 = 100$ and gives $16 + 2 = 18$, less than 50.
- d) $X = 5$ gives 25, less than 50.

> [!warning] The tangency point is a minimum
> $MRS = \frac{2X}{Y} = \frac{P_x}{P_y} = 2$ gives $Y = X$, so $X = Y = \frac{10}{3}$ with utility about 16.7, which is lower than both corners. Interior tangency on a non-convex function is a utility **minimum** along the budget line. This is a trap for anyone who equates $MRS$ and the price ratio automatically. See [[Marginal Rate of Substitution]], [[Corner Solution]].

### MCQ 7 — Perfect complements

**Question.** For $U = \min(aX, bY)$:

- a) An increase of $Y$ only will increase the consumer's utility.
- b) An increase of $Y$ and a decrease in $X$ may not change utility.
- c) An increase of $X$ only will not affect utility.
- d) None of the above.

> [!success] Answer: **c)**

The official note: you need a fixed ratio; more of one good does not change utility, less of a good decreases utility. At the kink $aX = bY$, extra $X$ alone leaves the minimum unchanged (the other good is the binding one), so c holds. a is false for the same reason (extra $Y$ alone does nothing at the kink). b is false because cutting $X$ below the kink lowers the minimum. See [[Perfect Complements]].

> [!warning] Reading it at the kink
> Away from the kink the statements can change: if $X$ is the scarce good, extra $X$ does raise utility, and if $X$ is in excess, cutting it a bit while raising $Y$ can leave utility unchanged. The official key treats the question as evaluated at the kink (the optimal bundle), so I keep c.

### MCQ 8 — Quasilinear nuts and berries

**Question.** $U(x_1, x_2) = x_1^{1/2} + x_2$. $P_1 = 1$, $P_2 = 8$, income $10$. If income rises to 20, how much does the quantity of berries (good 2) change?

- a) 6
- b) 0
- c) 0.5
- d) None of the above

> [!success] Answer: **c)**

Before the change, the tangency $MRS = \frac{P_1}{P_2}$ gives

$$
\frac{1}{2\sqrt{x_1}} = \frac{1}{8} \quad\Longrightarrow\quad \sqrt{x_1} = 4 \quad\Longrightarrow\quad x_1 = 16.
$$

With income 10 she can afford only 10 units of $x_1$, so she is at a **corner**: $x_1 = 10$, $x_2 = 0$.

After the change, income 20 covers the 16 units of $x_1$ (cost 16), leaving 4 dollars for berries: $x_2 = \frac{4}{8} = 0.5$. The change is $0.5 - 0 = 0.5$: c.

Check of the other options: b would be right only if berries stayed at zero. a and d are not the computed change. See [[Quasilinear Utility]].

### MCQ 9 — Quasilinear $X^a + Y$ with $P_y$ rising

**Question.** $U = X^a + Y$, $0 < a < 1$. If the price of $Y$ increases:

- a) $X$ and $Y$ may change in the optimal bundle.
- b) For a certain range of income $X$ is normal, and for a certain range $X$ is neutral.
- c) For a certain range of income $Y$ is normal, and for a certain range $Y$ is neutral.
- d) Both b and c are correct.

> [!success] Answer: **d)**

This is a [[Quasilinear Utility]] function. The consumer buys $X$ as income rises until the quantity set by the tangency $MRS = \frac{P_x}{P_y}$ is reached; then all extra income goes to $Y$ only.

- Low income: all income goes to $X$ (and some $Y$ is zero), so $X$ is normal and $Y$ is neutral-at-zero.
- High income: $X$ is held at its tangency level (so $X$ is **neutral**: extra income does not change it) and $Y$ absorbs all extra income (so $Y$ is **normal**).

Both b and c hold: d. (Statement a is also true as a general remark about a price change, but the official key picks d, which includes b and c.)

> [!warning] Reading note
> Statement a is also true, so strictly more than one option is "correct". The official answer is d; I keep it.

### MCQ 10 — A neutral good

**Question.** A consumer consumes two goods. If one good is neutral, then:

- a) The other good must be normal.
- b) The other good can be normal.
- c) The other good can be inferior.
- d) The other good can be neutral.

> [!success] Answer: **a)**

The official note: at least one good has to be normal. When income rises the consumer's total spending rises, and a **neutral** good takes none of the extra spending, so the extra must go entirely to the other good, which therefore has to be **normal**. b is weaker than a (it says "can", but it is forced), c and d are impossible (an inferior or neutral second good would leave the extra income unspent, which violates the budget constraint). See [[Lec_07-Substitution and Income Effects]].

---

## Recap table

| Question | Official answer | One-line reason |
|---|---|---|
| Open 1a | $L = \frac{1}{4W^2}$ | $MRS = W$, price of $Y$ is 1 |
| 1b | $H = 24 - \frac{1}{4W^2}$ | $24 - L$, upward-sloping |
| 1c | $L$ down, $H$ up, $Y$ up | only a substitution effect (quasilinear) |
| 1d | $L$ and $H$ unchanged, $Y$ up | $W_0$ affects only $Y$ |
| 1e | No | $MU_Y$ infinite at zero, convex, interior |
| Open 2a | Slope $-1$, intercepts $I_1 + I_2$, $A$ on the line left of the endowment | zero real rate, indifferent between periods |
| 2b | Positive saving | $I_1 > C_1$ |
| 2c | Utility up; new bundle left of the endowment | real rate up, saver gains |
| 2d | $A \to C$ substitution, $C \to B$ income | Slutsky line through $A$ with the new slope |
| 2e | $C_2$ down, $C_1$ ?, utility ? | flatter line pivoting around the endowment |
| 2f | Kink at endowment; $B$ stays at $A$ or moves right of $I_1$ | lender's rate unchanged |
| MCQ 1 | b | $X$ is monotonic in $U_1$, $Y$ in $U_2$ |
| MCQ 2 | c | convex gives an interior optimum with $MRS = \frac{P_x}{P_y}$ |
| MCQ 3 | d | Hicks effect on $X$ is bigger than Slutsky; effects on $X$ cancel |
| MCQ 4 | a | net seller of $X$ gains when $P_x$ rises |
| MCQ 5 | d | $X$ normal; Cobb-Douglas possible |
| MCQ 6 | c | non-convex, corner: $50 > 25$ |
| MCQ 7 | c | at the kink extra $X$ alone changes nothing |
| MCQ 8 | c | $x_1 = 16$, leaving 4 dollars for berries: $0.5$ |
| MCQ 9 | d | quasilinear: $X$ neutral at high income, $Y$ normal |
| MCQ 10 | a | the other good must absorb the extra income |

## Related Notes

- [[Micro-Economics I]]
- [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]]
- [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]]
- [[PS_07-Labor Supply]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
