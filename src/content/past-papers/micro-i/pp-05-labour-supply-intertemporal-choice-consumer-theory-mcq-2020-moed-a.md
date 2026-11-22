---
title: "Labour Supply, Intertemporal Choice & Consumer Theory MCQ (2020 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro-Economics 1 Final Exam, Moed A (2020)"
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
  - slutsky
  - income-and-substitution-effects
  - corner-solution
  - multiple-choice
aliases:
  - Micro 1 Moed A 2020
  - Micro I Exam 2020 Moed A
  - PP05 Micro I
subject: micro-i
in_scope: true
---

# Labour Supply, Intertemporal Choice & Consumer Theory MCQ (2020 Moed A)

> Part of: [[Micro-Economics I]]
> **Micro-Economics 1 Final Exam, Moed A (2020)**, the consumer theory, Ido Eisdorfer and Yosi Ganel, IDC. 3 hours, calculators and two formula sheets allowed.
> Builds on: [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]], [[Lec_04-Optimal Bundle]], [[Lec_03-Utility and MRS]], [[Lec_05-Demand]], [[Lec_02-Preferences]]
> Practice: [[PS_07-Labor Supply]], [[PS_04-Optimal Choice]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]

> [!info] Source and answer provenance
> Answers follow the **official handwritten solution** (12 pages), which matches this paper question by question (Open Q1, Q2 and Closed Q1 to Q10). Every question has an official answer, so **no answer in this note is AI-written**. Where the official working has a slip or a doubtful point, the official answer is kept and a warning shows my check. One page of the official solution (Q2 c and d) is a faded scan: its content is read from the figure and table, and that is said where it matters.

> [!note] Exam format
> Two open questions (65 points, 5 bonus). Then ten multiple-choice questions, **choose 8**, 5 points each, with a written explanation required for each. The printed instruction "the utility function is always concave unless stated otherwise" is used loosely in this paper: Closed Q6 has a corner solution (concave-to-origin indifference curves), while Closed Q3, Q8 and Q9 are solved with ordinary convex preferences.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Open Q1 | [[Labor Supply]] from a concave utility $L^{0.5}+Y^{0.5}$: demand for [[Leisure]], hours worked, effect of a wage rise, effect of [[Non-Labor Income]], and a [[Quasilinear Utility]] corner | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Open Q2 | Two-period consumption: budget line, saving or borrowing, inflation vs interest-rate changes, [[Slutsky Compensation]] | [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]] |
| Closed Q1, Q7 | Monotonicity (a [[Economic Bad]] in the formula) and [[Perfect Complements]] | [[Lec_02-Preferences]], [[Lec_03-Utility and MRS]] |
| Closed Q2, Q6 | Concave indifference curves force a [[Corner Solution]] | [[Lec_04-Optimal Bundle]] |
| Closed Q3, Q5 | [[Income Effect]] and [[Substitution Effect]], Hicks vs Slutsky, [[Cobb-Douglas Utility]] | [[Lec_07-Substitution and Income Effects]] |
| Closed Q4 | Endowment income and a price rise | [[Lec_01-Budget Constraint]], [[Lec_07-Substitution and Income Effects]] |
| Closed Q8, Q9 | [[Quasilinear Utility]]: income only moves the other good | [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]] |
| Closed Q10 | Normal and neutral goods | [[Lec_05-Demand]] |

> [!tip] Intuition: the move behind most of this paper
> Fill in the **substitution / income table**: write what the substitution effect does to each good, what the income effect does, then read off the total. Open Q2 and Closed Q3 and Q5 are solved this way, and quasilinear utility (Open Q1e, Closed Q8, Q9) is the case where the income effect on one good is exactly zero.

---

# Part A. Open questions

## Open Q1 — Leisure and labour supply with $U = L^{0.5} + Y^{0.5}$ (30 points)

**Question.** Yaron splits his time (18 hours) between leisure $L$ and work, and consumes a product $Y$ out of his labour income ($P_Y = 1$). He earns $W$ dollars per hour worked. His utility is

$$
U(L, Y) = L^{0.5} + Y^{0.5}.
$$

Hours worked are $H = 18 - L$, so the budget line is $Y = (18 - L)\,W$, and the price of leisure is $W$.

### a. (6) Demand for $L$, and its graph ($L$ against $W$)

> [!success] Answer
> $$
> L^{*} = \frac{18}{W+1}
> $$

At the optimum the [[Marginal Rate of Substitution]] equals the price ratio, which here is $W/1$:

$$
MRS = \frac{MU_L}{MU_Y} = \frac{0.5\,L^{-0.5}}{0.5\,Y^{-0.5}} = \frac{\sqrt{Y}}{\sqrt{L}} = W
\quad\Longrightarrow\quad Y = W^{2} L .
$$

Put this into the budget line:

$$
W^{2} L = (18 - L)\,W
\;\Longrightarrow\; W L = 18 - L
\;\Longrightarrow\; L\,(W+1) = 18
\;\Longrightarrow\; L^{*} = \frac{18}{W+1}.
$$

**Graph** (wage on the vertical axis): a downward-sloping curve that meets the $L$ axis at $18$ (at $W=0$ he takes all 18 hours as leisure) and falls toward $L = 0$ as $W$ grows. It is the left panel below.

### b. (6) Labour supply $H$, and its graph ($H$ against $W$)

> [!success] Answer
> $$
> H = 18 - L^{*} = 18 - \frac{18}{W+1} = 18\left(1 - \frac{1}{W+1}\right) = \frac{18\,W}{W+1}
> $$

**Graph:** starts at the origin, rises with $W$, and bends toward the vertical line $H = 18$ without reaching it (right panel).

![[PP05_q1_leisure_and_labour_supply.png|700]]

*Left: demand for leisure. Right: labour supply, which is increasing at every wage. The curve shapes follow the formulas above; the only number on the axes is 18 hours.*

### c. (7) What happens to $L$, $Y$, $H$ when the wage rises?

> [!success] Answer
> $W \uparrow$ gives $L \downarrow$, $H \uparrow$ and $Y \uparrow$.

- From (a) and (b): $L^{*} = 18/(W+1)$ falls and $H = 18W/(W+1)$ rises with $W$.
- Income: $Y = W^{2} L^{*} = \dfrac{18\,W^{2}}{1+W}$, which rises with $W$ (the numerator grows faster than the denominator).

> [!tip] Intuition
> A higher wage makes leisure more expensive ([[Substitution Effect]]: less leisure) but also makes him richer ([[Income Effect]]: wants more leisure, since leisure is a normal good). With this utility the substitution effect always wins, so the labour supply curve never bends backward.

### d. (8) Same question if he also has fixed income $W_0$ unrelated to $W$

> [!success] Answer (official conclusion)
> $W \uparrow$ gives $L^{*} \downarrow$, $H^{*} \uparrow$, $Y^{*} \uparrow$, as in (c).

The tangency condition is unchanged, $Y = W^{2} L$, but the budget line gains the fixed income:

$$
Y = (18 - L)\,W + W_0 .
$$

Substituting:

$$
W^{2} L = 18\,W - L\,W + W_0
\;\Longrightarrow\; L\,W\,(W+1) = 18\,W + W_0 .
$$

$$
L^{*} = \frac{18\,W + W_0}{W\,(W+1)}, \qquad
H^{*} = 18 - L^{*}, \qquad
Y^{*} = W^{2} L^{*} = \frac{W\,(18\,W + W_0)}{W+1}.
$$

> [!warning] The official working drops a term
> The official page writes $L^{*} = \dfrac{W_0}{W(1+W)}$ (and $H^{*}$, $Y^{*}$ built on it), which omits the $18W$ on the right-hand side after $W^{2}L = 18W - LW + W_0$. **Check:** take $W = 1$, $W_0 = 2$. The budget line gives $Y = (18 - L) + 2$ and the tangency gives $Y = L$, so $L = 10$. The formula above gives $(18+2)/(1\cdot 2) = 10$. The official formula gives $2/2 = 1$, which does not satisfy the budget line. The official **conclusion** is still right: differentiating the corrected $L^{*}$ gives a negative slope for every $W>0$, and $Y^{*}$ rises with $W$, so $L \downarrow$, $H \uparrow$, $Y \uparrow$. Kept as the official answer; use the corrected formula if asked to compute.

> [!tip] Intuition
> $W_0$ shifts the budget line outward, so he buys more leisure at every wage (a pure income effect), but it does not change the price of leisure. The direction of the response to $W$ is therefore unchanged.

### e. (5) With $U = L + Y^{0.5}$, can he choose not to work at all?

> [!success] Answer
> No. He will work, because this is [[Quasilinear Utility]]: he first consumes $Y$ and only then $L$, and to consume $Y$ he has to work.

> [!tip] Intuition
> Here $MRS = MU_L / MU_Y = 1/(0.5\,Y^{-0.5}) = 2\sqrt{Y}$, which is **zero when $Y = 0$**. At the no-work bundle ($L = 18$, $Y = 0$) the first unit of $Y$ is worth far more leisure than it costs at any positive wage, so giving up a little leisure always pays. No calculation is needed for the exam: state that $Y^{0.5}$ has an infinite marginal utility at zero.

---

## Open Q2 — Yudit's consumption over two periods (35 points)

**Question.** Yudit spends her income on consumption in two periods, $C_1$ and $C_2$, both normal goods. In the initial position her income in period 1 is smaller than in period 2 ($I_1 < I_2$). She is **indifferent between present and future** and has a convex utility function. The interest rate equals the inflation rate.

Notation: $r$ is the nominal interest rate, $\pi$ the inflation rate, and the **real** interest rate $\rho$ satisfies $1 + \rho = \dfrac{1+r}{1+\pi}$. The budget line passes through the endowment point $E = (I_1, I_2)$ and has slope $-(1+\rho)$ in real terms. When $r = \pi$, $1+\rho = 1$.

### a. (6) Budget constraint, optimal bundle, intercepts and slope

> [!success] Answer
> Slope $= -1$. The optimum $A$ has $C_1 = C_2$.

- Real rate $\rho = 0$, so the slope is $-1$ (the 45-degree angle marked on the official sketch).
- She is indifferent between present and future, so her indifference curves are symmetric around the 45-degree line. With a slope of $-1$ the tangency therefore sits where $C_1 = C_2$.
- Intercepts (in real terms, with $\rho = 0$): both equal $I_1 + I_2$, that is, $C_1$-axis intercept $= I_1 + I_2/(1+\rho)$ and $C_2$-axis intercept $= I_2 + (1+\rho)\,I_1$.
- The endowment $E = (I_1, I_2)$ lies on the line, above and to the left of $A$ because $I_1 < I_2$.

![[PP05_q2a_budget_line_optimum.png|520]]

*Budget line of slope $-1$ through the endowment $E$, with the tangency at $A$ where $C_1 = C_2$. The coordinates are illustrative; only the symbols come from the solution.*

### b. (3) Are her savings positive, negative or zero?

> [!success] Answer
> Negative.

Since $I_1 < I_2$ and $C_1 = C_2$, we get $C_1 > I_1$. Saving in period 1 is $S = I_1 - C_1 < 0$, so she **borrows** in period 1.

### c. (5) What happens to her utility if inflation rises? Where is the new bundle?

> [!success] Answer
> Her utility **rises**. The new bundle $B$ lies on the new, flatter budget line, with higher $C_1$ than at $A$. Whether $C_2$ rises is ambiguous.

> [!warning] Faded scan
> The first lines of this answer are unreadable on the official page. The result is read from the sketch (new line, "range of B") and the table, which shows $C_1 \uparrow$ for both effects and $C_2 \;?$. The utility statement is my derivation from the same figure.

Reasoning:

1. Higher inflation lowers the real interest rate: $\dfrac{1+r}{1+\pi}$ falls, so the budget line becomes **flatter**, pivoting around the endowment $E$.
2. $A$ is still affordable and now lies **strictly inside** the new budget set (she is a borrower, and her repayment is worth less in real terms). So she can do better than $A$: utility rises.
3. Substitution and income effects (the official table):

| Effect | $C_1$ | $C_2$ |
|---|---|---|
| [[Substitution Effect]] (present is cheaper) | up | down |
| [[Income Effect]] (richer, both normal) | up | up |
| Total (new bundle $B$) | up | unclear |

The range of $B$ is the part of the new line to the right of the point above $A$.

### d. (6) Slutsky compensation, and the two effects on the same graph

> [!success] Answer
> A to C is the substitution effect and C to B is the income effect.

- Draw the [[Slutsky Compensation]] line: **through the old bundle $A$ with the new, flatter slope**.
- The consumer's choice on that line is $C$ (more $C_1$, less $C_2$ than $A$). Moving $A \to C$ is the **substitution effect**.
- The actual new budget line passes through $E$, above the Slutsky line, and the move $C \to B$ onto it is the **income effect**.

![[PP05_q2cd_inflation_slutsky.png|560]]

*The old line, the new flatter line through $E$, the Slutsky line through $A$, and the two-step move $A \to C \to B$. The curve is the indifference curve through $A$. Positions are illustrative.*

> [!tip] Intuition
> Here the Slutsky "compensation" is negative: the Slutsky line sits **below** the new budget line, so to keep a borrower at $A$ you would have to take purchasing power away. That is exactly why the income effect then pushes consumption up.

### e. (7) Back to (a): the interest rate increases

> [!success] Answer
> The new line is steeper (slope $\dfrac{1+r}{1+\pi}$ rises), pivoting on $E$. $C_1$ falls, $C_2$ is unclear.

Official table:

| Effect | $C_1$ | $C_2$ |
|---|---|---|
| Substitution (future cheaper, present dearer) | down | up |
| Income (she is a borrower and is now poorer) | down | down |
| Total (new bundle $B$) | down | unclear |

The new bundle $B$ lies on the new steeper line, with $C_1$ below its level at $A$ (official "range of B", left panel below). Her utility **falls**, since she is a borrower and borrowing is dearer.

### f. (6) Only the rate for lenders rises, not the rate for borrowers

> [!success] Answer
> She either **stays at $A$**, or moves to the new part of the line (the red range) if that improves her utility.

Yudit is a **borrower** at $A$, so she lives on the part of the budget line to the right of $E$, which has not changed. Only the part to the left of $E$ (the lending side, where she would save) becomes steeper. So $A$ remains available. She stays at $A$ unless a point on the new steeper segment gives her higher utility.

![[PP05_q2ef_interest_rate_rise.png|760]]

*Left (e): both rates rise, the whole line pivots on $E$, shaded is the range where $B$ can lie. Right (f): only the lending side pivots, the borrowing side and $A$ are unchanged.*

---

# Part B. Closed questions (choose 8 of 10, 5 points each)

## Q1 — Monotonicity of $U_1 = X^a / Y^b$ and $U_2 = X^a - Y^b$

**Question.** Two consumers, with $U_1 = \dfrac{X^a}{Y^b}$ and $U_2 = X^a - Y^b$. (a) In both, both goods are positively monotonic. (b) Only in $U_1$. (c) Only in $U_2$. (d) None of the above.

> [!success] Answer: (d)

In both functions, more $Y$ **lowers** utility: in $U_1$ it sits in the denominator and in $U_2$ it is subtracted. So $Y$ is a [[Economic Bad]] in both, and neither function has both goods positively monotonic. (a), (b), (c) each claim it for at least one function, so they are false.

## Q2 — Statements about concave utility functions

**Question.** (1) In the optimal bundle $MRS = P_x/P_y$. (2) The consumer always buys a positive quantity of both goods. (3) The consumer always buys only X or only Y. Options: (a) only 1; (b) 1 and 3; (c) only 3; (d) 1 and 2.

> [!success] Answer: (c)

With concave (concave-to-origin) indifference curves the tangency point is a utility **minimum** along the budget line, not a maximum, so the optimum is at a corner.

- Statement 1 is false: at a [[Corner Solution]] $MRS$ can be bigger or smaller than $P_x/P_y$.
- Statement 2 is false: the consumer buys only one good.
- Statement 3 is true.

(a), (b), (d) all include statement 1 or 2 and so fail; only (c) is left.

## Q3 — $U = XY$, the price of $Y$ falls

**Question.** For $U(X,Y) = X\cdot Y$ and a fall in $P_Y$: (a) $|$substitution effect on X$| > |$income effect on X$|$; (b) Hicks substitution effect on X $=$ Slutsky substitution effect on X in absolute value; (c) $|$income effect on Y$| = |$substitution effect on Y$|$; (d) none of the above.

> [!success] Answer: (d)

Official table (the price ratio $P_X/P_Y$ rises):

| | X | Y |
|---|---|---|
| Substitution | down | up |
| Income (both normal) | up | up |
| Total | **unchanged** ([[Cobb-Douglas Utility]]) | up |

- (a) False: $X$ does not change in total, so the substitution and income effects on $X$ are **equal** in size, not one bigger.
- (b) False: the Hicks line is **lower** than the Slutsky line, so the two substitution effects differ in general.
- (c) Not accepted by the official solution.

> [!warning] Check on option (c)
> With Slutsky compensation and $U = XY$, I find $|$substitution on Y$| = |$income on Y$|$ exactly. Take income 100, $P_X = 1$, $P_Y$ from 1 to 0.5: $Y$ goes $50 \to 75$ (Slutsky line, income 75) $\to 100$, so the substitution effect is $+25$ and the income effect is $+25$. In general both equal $\dfrac{I\,(p-p')}{4\,p\,p'}$ for a fall from $p$ to $p'$. Under **Hicks** compensation they are not equal ($\approx 20.7$ and $29.3$). So (c) holds if the course's Slutsky decomposition is meant, which the table does not check. The official answer (d) is kept; if you meet this question again, read which compensation it names.

## Q4 — Endowment $(X, Y) = (0, 10)$, the price of $X$ rises

**Question.** A consumer has real income $(X=0, Y=10)$ and can sell each good to buy new quantities. Preferences are convex. If $P_X$ rises: (a) utility definitely rises; (b) utility definitely falls; (c) the Slutsky compensation is negative; (d) none.

> [!success] Answer: (b)

She owns only $Y$, so a higher $P_X$ does not change what her endowment is worth. The budget line **pivots around the endowment point $(0, 10)$** and becomes steeper: she can now buy less $X$ than before. Her budget set has shrunk, so her utility goes down.

- (a) is false for the same reason.
- (c) is false: the Slutsky compensation is the income needed to afford the old bundle at the new prices. It is zero or positive here, never negative.

> [!warning] Edge case
> Strictly, utility falls **unless** she was already consuming only $Y$ at $(0,10)$, in which case nothing changes. The official reading is that she was buying some $X$ at the start. Kept as the official answer.

## Q5 — $P_Y$ falls but the quantity of $X$ does not change

**Question.** The conclusion is: (a) $X$ is normal and the real income effect on $Y$ is unknown; (b) the utility function can be Cobb-Douglas; (c) $X$ is inferior; (d) a and b are both correct.

> [!success] Answer: (d)

When $P_Y$ falls, $P_X/P_Y$ rises, so the substitution effect **lowers** $X$. For $X$ to be unchanged in total, the income effect must **raise** it by the same amount: $X$ is a **normal good** (so (c) is false). The income effect on $Y$ is not determined by the table: the total change in $Y$ is positive, the substitution effect on $Y$ is positive, and the income effect on $Y$ is unknown. So (a) is true. (b) is true: Cobb-Douglas demand for $X$ does not depend on $P_Y$. Both (a) and (b) are right, hence (d).

## Q6 — Hadas: $U = X^2 + Y^2/5$, income 1000, $P_X = 200$, $P_Y = 100$

**Question.** The optimal bundle is: (a) $X = 2.5$, $Y = 5$; (b) $X = 4$, $Y = 2$; (c) $Y = 10$; (d) $X = 5$.

> [!success] Answer: (d)

These indifference curves are concave to the origin, so the solution is a **corner**. Compare the two corners:

- Spend everything on $Y$: $Y = 1000/100 = 10$, $U = 10^{2}/5 = 20$.
- Spend everything on $X$: $X = 1000/200 = 5$, $U = 5^{2} = 25$.

$25 > 20$, so she buys only $X$: $X = 5$.

> [!tip] Intuition: why the tangency is wrong
> The "tangency" point ($Y = 2.5X$, $X \approx 2.22$) gives only $\approx 11.1$. The interior bundles in (a) and (b) are affordable but worse: (a) gives $6.25 + 5 = 11.25$ and (b) gives $16 + 0.8 = 16.8$. (c) is the other corner, worth 20.

## Q7 — $U = \min(aX, bY)$

**Question.** (a) Increasing $Y$ only raises utility; (b) increasing $Y$ and decreasing $X$ may leave utility unchanged; (c) increasing $X$ only does not affect utility; (d) none.

> [!success] Answer: (c)

With [[Perfect Complements]] the consumer gets utility from a fixed ratio of the goods. At the (kinked) bundle where $aX = bY$, extra of one good alone adds nothing.

- (a) False: extra $Y$ alone adds nothing at the kink.
- (b) False at the kink: raising $Y$ does nothing and cutting $X$ **reduces** utility.
- (c) True at the kink.

> [!warning] Reading assumed
> The official reasoning treats the consumer as sitting at the kink, which is where a rational consumer chooses. Off the kink, extra of the scarce good would raise utility, so (c) is only true for the kinked bundle.

## Q8 — Ambrose: $U = x_1^{1/2} + 2x_2$, income rises from 10 to 20

**Question.** Prices: nuts $P_1 = 1$, berries $P_2 = 4$, income $10 \to 20$. By how much does the quantity of berries change? (a) 2.5; (b) 0; (c) 6; (d) 8.

> [!success] Answer: (a) 2.5

[[Quasilinear Utility]]. Tangency:

$$
MRS = \frac{\tfrac{1}{2}\,x_1^{-1/2}}{2} = \frac{1}{4\sqrt{x_1}} = \frac{P_1}{P_2} = \frac{1}{4}
\quad\Longrightarrow\quad x_1 = 1 .
$$

Nut demand depends only on the price ratio, so $x_1 = 1$ at both incomes. Berries take the rest:

$$
x_2 = \frac{10 - 1}{4} = \frac{9}{4} \qquad\text{and}\qquad x_2' = \frac{20 - 1}{4} = \frac{19}{4}.
$$

The change is $\Delta x_2 = \dfrac{10}{4} = 2.5$: all the extra income goes to berries.

## Q9 — $U = X^a + Y$, $0 < a < 1$, the price of $Y$ falls

**Question.** (a) $X$ and $Y$ necessarily change; (b) over some range of income $X$ is normal and over some range neutral; (c) over some range of income $Y$ is normal and over some range neutral; (d) all are correct.

> [!success] Answer: (d)

[[Quasilinear Utility]] with tangency

$$
MRS = a\,X^{a-1} = \frac{P_X}{P_Y}.
$$

- (a) If $P_Y$ changes, the demand for $X$ changes (it depends on the price ratio), and then $Y$ takes up the rest of income, so $Y$ changes too.
- (b) At low income all income goes to $X$ (normal). Once the demand for $X$ is "full" it stays fixed, and any extra income goes to $Y$, so $X$ is neutral.
- (c) The mirror image: at low income $Y = 0$ (neutral), then every extra dollar goes to $Y$ (normal).

> [!warning] Edge case on (a)
> At very low income, where the consumer spends everything on $X$ ($Y = 0$), a small change in $P_Y$ may change nothing. The official answer reads (a) for the interior solution. Kept as official.

## Q10 — One good is neutral

**Question.** If one good is neutral, then the other good: (a) must be normal; (b) can be normal; (c) can be inferior; (d) can be neutral.

> [!success] Answer: (a)

A consumer spends all of a larger income. If one good is neutral, its demand does not move with income, so the extra income must go entirely to the other good, which therefore **must be normal**. It cannot be inferior or neutral too: at least one good has to absorb the extra income, and that good is normal.

---

## Recap

| Question | Tool | Answer |
|---|---|---|
| Open 1a | $MRS = W$ and budget line | $L^{*} = 18/(W+1)$ |
| Open 1b | $H = 18 - L$ | $H = 18W/(W+1)$ |
| Open 1c | Differentiate | $L \downarrow$, $H \uparrow$, $Y \uparrow$ |
| Open 1d | Add $W_0$ to the budget | Same signs (official $L$ formula drops a term) |
| Open 1e | Quasilinear, $MRS(0) = 0$ | He works |
| Open 2a to b | Real rate 0, indifferent | $C_1 = C_2$, saving negative |
| Open 2c to d | Flatter line, Slutsky line | Utility up, A to C then C to B |
| Open 2e | Steeper line | $C_1$ down, utility down |
| Open 2f | Only lending side changes | Stay at A or move to the red range |
| Closed 1 to 10 | See above | D, C, D, B, D, D, C, A, D, A |

## Related notes

[[Micro-Economics I]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]], [[Lec_04-Optimal Bundle]], [[PS_07-Labor Supply]], [[PS_04-Optimal Choice]]
