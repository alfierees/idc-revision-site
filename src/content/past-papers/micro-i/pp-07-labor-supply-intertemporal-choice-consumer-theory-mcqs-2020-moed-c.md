---
title: "Labor Supply, Intertemporal Choice & Consumer Theory MCQs (2020 Moed C)"
type: past-paper
status: worked-solution
exam: "Micro-Economics 1 Final Exam, Moed C (2020)"
semester: 2
year: 1
academic_year: "2024-25"
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - micro-economics-i
  - past-paper
  - worked-solution
  - labor-supply
  - intertemporal-choice
  - slutsky
  - multiple-choice
aliases:
  - Micro I Moed C 2020
  - PP07 Micro I
  - Micro 1 Moed C
subject: micro-i
in_scope: true
---

# Labor Supply, Intertemporal Choice & Consumer Theory MCQs (2020 Moed C)

> Part of: [[Micro-Economics I]]
> **Micro-Economics 1 (consumer theory), Moed C, 2020**, Ido Eisdorfer and Yosi Ganel. 3 hours, calculator and two formula sheets allowed. Two mandatory open questions (65 points, 5 bonus) plus 8 of 10 multiple-choice questions (5 points each, explanation required). Convex utility unless stated otherwise.
> Builds on: [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]], [[Lec_04-Optimal Bundle]], [[Lec_03-Utility and MRS]], [[Lec_02-Preferences]], [[Lec_05-Demand]]
> Practice: [[PS_07-Labor Supply]]

> [!info] Source
> Answers follow the **official handwritten solution** (8 pages), checked page by page: it matches this paper's questions. One question (closed Q8) has an official number that is not among the printed options, flagged below. The solution is terse and mostly sketches, so the steps below are expanded; every official answer is kept.

> [!note] AI-solved questions
> None. Every question has an official answer. Where I add a check or an extension it sits in a warning or tip callout.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Open Q1 | Leisure demand and [[Labor Supply]] from a non-linear utility, wage changes, non-labor income | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Open Q2 | Two-period consumption, borrower or saver, inflation vs interest-rate change, Slutsky split | [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]] |
| MCQ 1 | Monotonicity: goods, bads and neutrals | [[Lec_02-Preferences]] |
| MCQ 2, 6 | Concave utility gives corner solutions | [[Lec_04-Optimal Bundle]] |
| MCQ 3, 4, 5 | [[Substitution Effect]] and [[Income Effect]], Slutsky vs Hicks, endowment | [[Lec_07-Substitution and Income Effects]] |
| MCQ 7 | [[Perfect Complements]] | [[Lec_03-Utility and MRS]] |
| MCQ 8, 9 | [[Quasilinear Utility]] | [[Lec_03-Utility and MRS]], [[Lec_05-Demand]] |
| MCQ 10 | Normal and inferior goods | [[Lec_05-Demand]] |

---

# Open questions

## Q1 — Leisure and labor supply [32 points]

Yaron spends his 18 hours between leisure $L$ and work, and consumes good $Y$ from his labor income ($P_y = 1$). He earns $W$ dollars per hour. Utility is:

$$
U(L, Y) = L^{0.25} + Y^{0.5}
$$

a. (6) Calculate the demand function for $L$ and show it on a graph ($L$ vs $W$).
b. (6) Calculate the labor supply $H$ and show it on a graph ($H$ vs $W$).
c. (7) What happens to $L$, $Y$ and $H$ if the wage $W$ increases?
d. (8) How does your answer to (c) change if the consumer also has a fixed amount of money $W_0$ not connected to $W$?
e. (5) If instead $U = L + Y^{0.25}$, is it possible that he chooses not to work at all? Explain. No calculation needed.

### a. Demand for leisure

> [!success] Answer
> $W = \dfrac{18 - L}{4 L^{1.5}}$, a decreasing curve in the $(L, W)$ plane that hits $W = 0$ at $L = 18$.

Leisure is a good whose price is the wage $W$ (each hour of leisure costs one hour of earnings), and $Y$ has price 1. [[Optimal Choice]] needs $\text{MRS} = W / P_y$, plus the budget constraint.

**Step 1, tangency.**

$$
\text{MRS} = \frac{MU_L}{MU_Y} = \frac{\tfrac14 L^{-0.75}}{\tfrac12 Y^{-0.5}} = \frac{\sqrt{Y}}{2 L^{0.75}} = W
$$

Solving for $Y$:

$$
Y = 4 W^2 L^{1.5}
$$

**Step 2, budget.** Spending equals labor income: $P_y Y = (18 - L) W$, so $Y = (18 - L)W$.

**Step 3, combine.**

$$
4 W^2 L^{1.5} = (18 - L) W \quad \Longrightarrow \quad W = \frac{18 - L}{4 L^{1.5}}
$$

> [!tip] Intuition
> There is no neat closed form for $L$ as a function of $W$, so the demand curve is given as the inverse ($W$ as a function of $L$). As $L \to 18$ the numerator goes to zero (wage so low that he takes all 18 hours as leisure). As $L \to 0$ the wage needed goes to infinity.

### b. Labor supply

> [!success] Answer
> $W = \dfrac{H}{4(18 - H)^{1.5}}$, an increasing curve from the origin with a vertical asymptote at $H = 18$.

Hours worked are $H = 18 - L$, so substitute $L = 18 - H$ into the answer to (a):

$$
W = \frac{H}{4 (18 - H)^{1.5}}
$$

![[PP07_q1_leisure_demand_labor_supply.png|700]]

*Left: leisure demand (curve ends at $L = 18$ when $W = 0$). Right: labor supply, the mirror image, rising and becoming vertical at 18 hours.*

### c. A higher wage

> [!success] Answer
> $L$ falls, $H$ rises, and $Y$ rises (because $Y = WH$ and both $W$ and $H$ rise).

From the demand curve in (a), a higher $W$ needs a lower $L$ to satisfy the equation, so leisure falls and hours worked rise. With $P_y = 1$, $Y = W \cdot H$, and both factors rise, so $Y$ rises.

> [!warning] Check
> Not in the official solution, but the formula agrees. Solving numerically: at $W = 0.1$, $L \approx 8.35$, $H \approx 9.65$, $Y \approx 0.97$. At $W = 1$, $L \approx 2.47$, $H \approx 15.53$, $Y \approx 15.53$. At $W = 5$, $L \approx 0.90$, $H \approx 17.10$, $Y \approx 85.5$. So $L$ falls, $H$ and $Y$ rise throughout.

> [!tip] Intuition
> A higher wage has a [[Substitution Effect]] (leisure is more expensive, so take less) and an [[Income Effect]] (richer, so buy more of normal goods including leisure). Here the substitution effect wins everywhere, so the labor supply curve slopes up. The income effect would matter if the curve bent backward, which it does not for this utility.

### d. Adding fixed non-labor income $W_0$

> [!success] Answer
> The same qualitative results as (c): $L$ falls, $H$ rises, $Y$ rises, but starting from a higher level of $L$ and $Y$.

With $W_0 > 0$ the budget is $Y = W(18 - L) + W_0$. The person is richer at every wage, so (leisure being normal) he starts with more leisure and more $Y$. The wage response keeps the same direction.

> [!warning] Check and extension (mine, not in the official solution)
> I solved this numerically to confirm. With $W_0 = 1$: at $W = 0.2$ the optimum is $L \approx 7.28$, $H \approx 10.72$; at $W = 1$, $L \approx 2.57$, $H \approx 15.44$; at $W = 5$, $L \approx 0.91$, $H \approx 17.09$, so $H$ still rises with $W$ and $L$ falls. One difference worth knowing: at a very low wage (for $W_0 = 1$, around $W = 0.05$) the person chooses $L = 18$, $H = 0$, because the non-labor income already pays for enough consumption. The upward-sloping labor supply starts only once $W$ is above that threshold.

### e. Can he choose not to work?

> [!success] Answer
> No. With $U = L + Y^{0.25}$ he always wants $Y > 0$, so he must work: $H > 0$.

The marginal utility of $Y$ is $0.25 Y^{-0.75}$, which goes to infinity as $Y \to 0$. So the first dollar of consumption is worth more than any amount of leisure, and the person will always buy some $Y > 0$. The only source of $Y$ is labor income, so $H > 0$ (assuming no $W_0$).

> [!tip] Intuition
> A corner at $Y = 0$ is impossible whenever the utility has infinite marginal utility at zero consumption, since a tiny bit of $Y$ is always worth more than the hours of leisure given up. The linear term in $L$ is what would make a corner at $L = 18$ possible in other utilities, but not here.

## Q2 — Two-period consumption (Yudit) [33 points]

Yudit chooses consumption in two periods, $C_1$ and $C_2$, both normal goods. Initially her income in period 1 equals her income in period 2 ($I_1 = I_2$). She **prefers the present** to the future, has convex utility, and the interest rate equals the inflation rate in the initial position.

a. (6) Draw her budget constraint and optimal bundle. Point out $C_1$ and $C_2$ at the optimum, the intercepts and the slope.
b. (3) Are her savings positive, negative or zero? Explain.
c. (5) What happens to her utility if the inflation rate increases? Point out the range of the new bundle.
d. (6) Show in a new graph the Slutsky compensation needed due to the inflation increase and the new bundle. Show the substitution and real income effects.
e. (7) Ignore (b) and (c): go back to (a). Suppose the interest rate increases. Show the change and point out the new bundle.
f. (6) How would your answer to (e) change if only the interest rate for those who **borrow** changed, not for those who lend? Explain; a graph may help.

> [!info] Set-up (see [[Lec_09-Intertemporal Choice]])
> The slope of the intertemporal budget line is $-\dfrac{1+r}{1+\pi}$ ($r$ = interest rate, $\pi$ = inflation). It passes through the endowment $(I_1, I_2)$. Because $r = \pi$ initially, the slope is $-1$, a 45 degree line (the official sketch marks this with the angle $1$). Intercepts: $C_1 = I_1 + \dfrac{I_2}{\text{slope magnitude}}$ and $C_2 = I_2 + (\text{slope magnitude}) \cdot I_1$; with slope $-1$ both equal $I_1 + I_2$.

### a. Budget line and optimum

> [!success] Answer
> A line of slope $-1$ through the endowment $(I_1, I_2)$ with intercepts $I_1 + I_2$. Because she prefers the present, the tangency point A has $C_1 > I_1$ and $C_2 < I_2$.

![[PP07_q2a_budget_line_borrower.png|600]]

*The endowment is on the budget line; the optimum A is to its right and below (consumption brought forward).*

### b. Savings

> [!success] Answer
> Negative. At A, $C_1 > I_1$, so she spends more than she earns in period 1: she borrows.

Savings in period 1 are $I_1 - C_1 < 0$. She repays out of period 2 income, which is why $C_2 < I_2$.

### c. Higher inflation

> [!success] Answer
> Her utility **increases**. The new bundle B has higher $C_1$; $C_2$ cannot be determined. On the graph, B lies on the new, flatter line to the right of A's $C_1$.

Higher inflation lowers the slope magnitude $\dfrac{1+r}{1+\pi}$, so the line pivots (flatter) around the endowment point. The old bundle A is on the borrowing side, so it lies **below** the new line: it is still affordable and she has strictly more options. A borrower repays in cheaper money, so she is better off.

The official table decomposes the move (see (d)):

| | $C_2$ | $C_1$ | |
|---|---|---|---|
| Substitution effect (the future is relatively cheaper to give up) | down | up | price of $C_1$ in terms of $C_2$ falls |
| Real income effect (higher purchasing power) | up | up | both normal |
| Total (B) | ? | up | |

$C_1$ rises in both effects. $C_2$ falls in one and rises in the other, so the sign is unknown.

### d. Slutsky compensation, with effects

> [!success] Answer
> Pivot the **new** (flatter) line parallel down until it passes through A. That downward shift is the Slutsky compensation (here **negative**: income is taken away because she is better off). Tangency on that line is C. **A to C** is the substitution effect, **C to B** is the real income effect.

![[PP07_q2c_q2d_inflation_slutsky.png|600]]

*Blue: old budget line. Orange: new, flatter line, with the new optimum B. Dashed purple: Slutsky line through A. C is to the right of and below A (substitution). B is to the right of and above C (income effect).*

> [!tip] Intuition
> For a borrower, higher inflation is a windfall: the loan is repaid with money worth less. That is a rise in real income (and a cheaper way to bring consumption forward), which is why the Slutsky compensation is negative and both effects push $C_1$ up.

### e. Higher interest rate

> [!success] Answer
> The line gets **steeper** around the endowment. A is now outside the budget set (above the new line for a borrower). New bundle B has lower $C_1$; $C_2$ is unknown.

Effects, from the official table:

| | $C_2$ | $C_1$ | |
|---|---|---|---|
| Substitution effect (slope up) | up | down | present consumption is more expensive |
| Real income effect (borrower loses) | down | down | both normal |
| Total (B) | ? | down | |

Compensation: shift the new steeper line out until it passes through A (positive compensation). C is up and to the left of A; the income effect then pulls both goods down to B. $C_1$ falls in both effects; $C_2$ is ambiguous.

![[PP07_q2e_interest_rate_up.png|600]]

*Blue: old line. Orange: new steeper line and optimum B. Dashed purple: Slutsky line through A with its tangency C. B is to the left of A (lower $C_1$).*

### f. Only the borrowing rate rises

> [!success] Answer
> The budget line becomes **kinked at the endowment**: the lending part (left of the endowment) keeps the old slope, the borrowing part (right of the endowment) is steeper. Because Yudit is a borrower at A, she is affected exactly as in (e): A is no longer affordable, utility falls, and the new bundle B has lower $C_1$, with $C_2$ unknown.

![[PP07_q2f_borrow_rate_only_kink.png|600]]

*Orange: the new kinked budget line (lending side unchanged). The dotted blue line is the old line, which would have contained A.*

The only difference from (e) is the shape of the set. In (e) the whole line is steeper, so a point to the left of the endowment would also be on a steeper (lender's) line. Here, any bundle with $C_1 \le I_1$ (a saver) faces the old, unchanged interest rate. The official sketch marks the range of B along the kinked line on the side of lower $C_1$.

> [!tip] Intuition (mine)
> A kink means the new optimum could even be exactly at the endowment point: if her indifference curve at that point lies between the two slopes, she neither borrows nor lends. This is a possibility consistent with the diagram, not something the official solution states.

---

# Closed questions (8 of 10)

## MCQ 1 — Monotonicity

$U_1 = X^a$ and $U_2 = X^a - Y^b$.
a) In both, the goods are negatively monotonic. b) Only in $U_1$ both goods are positively monotonic. c) Only in $U_2$ both goods are positively monotonic. d) None of the above.

> [!success] Answer: d
> $U_1$ does not contain $Y$ at all: the consumer is **indifferent to $Y$** (neutral good). In $U_2$, more $Y$ lowers utility, so $Y$ is an [[Economic Bad]] (and X is still a good).

- **a** is false: $X$ is positive in both utilities (for $a > 0$).
- **b** is false: in $U_1$ only $X$ is a good, $Y$ is neutral, not positively monotonic.
- **c** is false: in $U_2$, $Y$ is a bad.
- **d** is correct.

## MCQ 2 — Concave utility

Statements about concave utility: (1) At the optimum $\text{MRS} > P_x/P_y$. (2) The consumer always buys equal quantities of both goods. (3) The consumer always buys from X.
a) Only 1. b) 1+3. c) None. d) 1+2.

> [!success] Answer: c
> With a concave utility the optimum is a [[Corner Solution]]: the consumer buys **either X or Y**, not both.

- **(1)** is not always true: if the consumer buys only X then $\text{MRS} \ge P_x/P_y$, but if she buys only Y then $\text{MRS} \le P_x/P_y$. The official answer: it is either one.
- **(2)** is false: she buys one good only.
- **(3)** is false: she may buy only Y.

## MCQ 3 — Cobb-Douglas, price of X falls

$U = X \cdot Y$, price of X decreases.
a) |substitution effect on X| > |real income effect on X|. b) Hicks substitution effect on X = Slutsky substitution effect on X (absolute values). c) |real income effect on Y| = |substitution effect on Y|. d) None.

> [!success] Answer: c
> For [[Cobb-Douglas Utility]] the demand for Y does not depend on $P_x$, so Y does not change in total. The substitution effect on Y is negative and the income effect is positive, and they exactly offset: equal in absolute value.

Official table: Y: substitution down, income up, total unchanged. X: substitution up, income up, total up.

> [!warning] My check of the other options
> Let $I$ be income, old price $p$, new price $p'$. $X_0 = I/(2p)$. The [[Slutsky Compensation]] bundle uses income $I(p + p')/(2p)$, so the Slutsky substitution effect on X is $\dfrac{I(p - p')}{4 p p'}$. The total change is $\dfrac{I}{2p'} - \dfrac{I}{2p} = \dfrac{I(p - p')}{2pp'}$, so the income effect is also $\dfrac{I(p - p')}{4pp'}$. They are **equal**, so (a) is false (equal, not greater). For (b), the [[Hicks Compensation]] substitution effect keeps utility constant: $X_h = X_0 \sqrt{p/p'}$, which is a different number from the Slutsky bundle, so (b) is false. Only (c) holds.

## MCQ 4 — Endowment and a price rise

Real income is $(X = 10, Y = 5)$; she can change quantities by selling each good and buying new ones. Convex utility. If $P_x$ rises:
a) Utility will definitely increase. b) Utility will definitely decrease. c) The Slutsky compensation will be negative. d) None.

> [!success] Answer: d
> The consumption point is **unknown**. The budget line pivots around the endowment (10, 5). If she is a net **buyer** of X her utility falls and the compensation is positive; if she is a net **seller** of X (consumption of X below 10) her utility rises and the compensation is negative.

Official sketch: the budget line pivots about the endowment, with a possible consumption point on either side (A or B).

- **a, b** are false: the direction depends on whether she is a net seller or net buyer.
- **c** is not definitely true: only for a net seller.

## MCQ 5 — Price of Y falls, X unchanged

> [!success] Answer: d (a and b are correct)
> Official table: when the price of Y falls, the price ratio $P_x/P_y$ rises. The [[Substitution Effect]] on X is **down**. Since the total change in X is zero, the [[Income Effect]] on X must be **up**, so X is a normal good. The income effect on Y is unknown (the official table marks it with a question mark).

- **a** correct: X is normal (income effect positive); nothing is concluded about Y's income effect.
- **b** correct: for Cobb-Douglas the demand for X does not depend on $P_y$, so the two effects offset exactly, as here.
- **c** false: X is not inferior (an inferior X would have both effects pushing it down, so X would fall).
- **d** (a + b) is therefore the answer.

## MCQ 6 — Hadas

$I = 1000$, $P_x = P_y = 100$, $U = X^2 + Y^2/0.5$.
a) $X = 2.5$, $Y = 5$. b) $X = 4$, $Y = 2$. c) $Y = 10$. d) $X = 5$.

> [!success] Answer: c
> $U = X^2 + 2Y^2$ is **concave** (indifference curves bulge towards the origin), so the optimum is a corner: all income on one good.

Maximum affordable: $X = 10$ or $Y = 10$.

$$
U(X = 10) = 10^2 = 100, \qquad U(Y = 10) = \frac{10^2}{0.5} = 200
$$

She buys only Y: $Y = 10$. Options a, b and d are interior or all-X bundles, which give less utility (for example (a) gives $6.25 + 50 = 56.25$, and $X = 5$ spends only half of income).

## MCQ 7 — Perfect complements

$U = \min(aX, bY)$.
a) An increase in $a$ definitely increases utility. b) An increase in $b$ definitely increases utility. c) An increase of Y only may not affect utility. d) a+b+c.

> [!success] Answer: c
> The official reasoning: if the bundle is on the kink $Y = \tfrac{a}{b}X$, adding more Y does not improve utility, because X is the binding good.

- **c** correct: extra Y raises utility only if Y is the binding side, i.e. when $bY < aX$.
- **a, b**: holding the bundle fixed, a higher $a$ only matters when $aX$ is the smaller term, and a higher $b$ only when $bY$ is. At the kink neither is definite.

> [!warning] Check
> If you let the consumer re-optimise, utility at the optimum is $U^* = \dfrac{I}{P_x/a + P_y/b}$, which rises in both $a$ and $b$. So (a) and (b) would hold under that reading. The official answer is (c), and it reads the question as a change at the given bundle. Keep (c).

## MCQ 8 — Ambrose

$U = x_1^{1/2} + 2x_2$, $P_1 = 1$, $P_2 = 4$, income rises from 10 to 20. What is the change in berries ($x_2$)?
a) 10 b) 0 c) 6 d) 8

> [!warning] Official answer is not among the options
> The official solution gives **2.5**, and none of the printed options (10, 0, 6, 8) is 2.5. I could not match the key to an option, so I keep the official value. If a version of the paper existed with 2.5 as an option, that would be it.

> [!success] Official working: change in berries = 2.5
> This is [[Quasilinear Utility]] with the linear good being $x_2$. $\text{MRS} = \dfrac{\tfrac12 x_1^{-1/2}}{2} = \dfrac{1}{4\sqrt{x_1}}$. Setting it equal to $P_1/P_2 = \tfrac14$ gives $x_1 = 1$.

The demand for $x_1$ does not depend on income, so the whole extra income goes to $x_2$:

$$
\Delta x_2 = \frac{\Delta I}{P_2} = \frac{10}{4} = 2.5
$$

Check: at $I = 10$, $x_2 = (10 - 1)/4 = 2.25$; at $I = 20$, $x_2 = (20 - 1)/4 = 4.75$; the difference is $2.5$.

## MCQ 9 — Quasilinear

$U = X^a + Y$, $0 < a < 1$. If the price of Y decreases:
a) X and Y necessarily change. b) For some incomes X is normal and for others neutral. c) For some incomes Y is normal and for others neutral. d) All of the above.

> [!success] Answer: d
> This is [[Quasilinear Utility]]. In the interior case, X depends only on $P_x/P_y$ (not on income), and Y absorbs the rest.

- **a**: for the interior solution, the price of Y falls, $P_x/P_y$ rises, so X changes (falls) and Y changes (rises). The official solution treats this as correct.
- **b**: when income rises, X first rises (low income, corner where all income buys X) and then stops changing once the interior solution is reached: normal, then neutral.
- **c**: Y is zero at low incomes (neutral), then rises one-for-one with extra income (normal).

So all three are correct: d.

> [!warning] Caveat
> Statement (a) fails at very low incomes where the consumer is at the corner $Y = 0$ both before and after the price change (neither good changes if the price drop does not move her off the corner). The official answer is still d.

## MCQ 10 — Inferior goods

If one good is inferior then:
a) The other must be normal. b) The other can be normal. c) The other can be inferior. d) The other can be neutral.

> [!success] Answer: the official solution says (a): the other good must be normal.
> The budget constraint requires that when income rises, the extra income is spent: $P_x \Delta x + P_y \Delta y = \Delta I > 0$. If $x$ falls (inferior), then $y$ must rise by enough to absorb that spending, so $y$ is normal.

- **b, c, d** are wrong: the other good cannot be inferior (spending would fall, not rise) and cannot be neutral (spending on the first good falls, so the other must absorb more than the extra income).

---

## Recap

| Question | Tool | Answer |
|---|---|---|
| Open 1a | MRS = W, budget | $W = (18 - L)/(4L^{1.5})$ |
| Open 1b | $H = 18 - L$ | $W = H/(4(18 - H)^{1.5})$ |
| Open 1c | Wage effect | $L$ down, $H$ up, $Y$ up |
| Open 1d | Add $W_0$ | same direction, higher starting $L$ and $Y$ |
| Open 1e | Infinite MU of Y | must work, $H > 0$ |
| Open 2a/b | Budget line slope $-1$ | A right of endowment, savings negative |
| Open 2c/d | Inflation up | utility up, $C_1$ up, $C_2$ unknown; Slutsky shift is negative |
| Open 2e | Interest rate up | $C_1$ down, $C_2$ unknown, utility down |
| Open 2f | Borrowing rate only | kinked line, same effect as (e) for a borrower |
| MCQ 1 | Monotonicity | d |
| MCQ 2 | Concave: corner | c |
| MCQ 3 | Cobb-Douglas effects | c |
| MCQ 4 | Endowment | d |
| MCQ 5 | Price of Y falls, X flat | d |
| MCQ 6 | Concave corner | c ($Y = 10$) |
| MCQ 7 | Perfect complements | c |
| MCQ 8 | Quasilinear | 2.5 (not an option) |
| MCQ 9 | Quasilinear | d |
| MCQ 10 | Inferior goods | a |

## Related Notes

- [[Micro-Economics I]]
- [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]]
- [[PS_07-Labor Supply]]
