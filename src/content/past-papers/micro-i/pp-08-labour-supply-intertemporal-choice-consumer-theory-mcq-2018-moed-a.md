---
title: "Labour Supply, Intertemporal Choice & Consumer Theory MCQ (2018 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro-Economics 1 (consumer theory), Moed A 2018, open and closed questions"
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
  - income-effect
  - substitution-effect
  - quasilinear
aliases:
  - Micro 1 Moed A 2018
  - PP08 Micro I
subject: micro-i
in_scope: true
---

# Labour Supply, Intertemporal Choice & Consumer Theory MCQ (2018 Moed A)

> Part of: [[Micro-Economics I]]
> **Micro-Economics 1, Moed A 2018**, Micro-Economics I, Ido Eisdorfer and Yosi Ganel. Open part 65 points (5 bonus), closed part 40 points (answer 8 of 10, 5 points each).
> Builds on: [[Lec_01-Budget Constraint]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]
> Practice: [[PS_04-Optimal Choice]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]], [[PS_07-Labor Supply]]

> [!info] Source
> Open questions follow the **official handwritten solution** (image only, 5 pages, transcribed from the rendered pages). The multiple-choice answers are the **yellow highlights** on the typed paper. The paper has no written solutions for the closed part, so the explanations of **why** each option is right or wrong are mine.

> [!warning] Two answers need your attention
> - **Q8 (closed):** the highlighted answer is (b) 0, but my calculation gives (c) 4. The official highlight is kept and the check is shown under Q8.
> - **Q10 (closed):** **two** options are highlighted, (e) and (h). Only (e) follows from theory, see Q10.
>
> Nothing in this note is AI-written *instead of* an official answer. Everything has an official answer or highlight.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Open Q1 | [[Labor Supply]] with $U=L^2X$ (Cobb-Douglas): flat leisure demand, effect of a wage rise, extra [[Non-Labor Income]], and perfect complements | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Open Q2 | Two-period consumption: budget line, inflation, [[Slutsky Compensation]], a change in the interest rate, borrowing vs saving | [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]] |
| Closed Q1 to Q10 | Classifying goods by utility function, [[Marginal Rate of Substitution]] rules, [[Income Effect]] vs [[Substitution Effect]], corner solutions, [[Quasilinear Utility]] | [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_07-Substitution and Income Effects]] |

> [!tip] Intuition: the three moves behind the open part
> - Cobb-Douglas leisure and consumption: the consumer always spends a fixed **share of full income** on each good, so the wage cancels out of leisure demand.
> - Add a lump sum $W_0$ and leisure becomes a normal good in income, so the wage now matters.
> - In two-period problems, work out first whether the person is a **saver or a borrower** from where the endowment sits. That settles who gains or loses from a rate change.

---

# Open questions (65 points, 5 bonus)

## Q1 — Udi's labour supply

Udi splits his time (24 hours) between leisure $L$ and work, and consumes a product $X$ out of his labour income. He earns $W$ per hour. His utility is $U(L,X)=L^2X$.

### a. Demand for leisure (5 points)

**Question.** Calculate the demand function for $L$ and show it on a graph.

> [!success] Answer (official)
> $L_D = 16$, a vertical line in the $(L, W)$ graph: leisure demand does not depend on the wage.

**Working (official, expanded).** At the optimum $MRS = W/P_X$. The marginal utilities are $MU_L = 2LX$ and $MU_X = L^2$, so

$$
MRS = \frac{2LX}{L^2} = \frac{2X}{L}
$$

Setting it equal to the price ratio gives the income-consumption condition:

$$
\frac{2X}{L} = \frac{W}{P_X} \quad\Rightarrow\quad X P_X = \frac{WL}{2}
$$

The budget constraint spends the wage on goods, $X P_X = (24-L)W$. Substitute:

$$
\frac{WL}{2} = (24-L)\,W \quad\Rightarrow\quad L = 48 - 2L \quad\Rightarrow\quad L_D = 16
$$

The wage $W$ cancels from both sides, which is why demand is a vertical line.

![[PP08_q1_leisure_demand_labor_supply.png|640]]

*Left panel: leisure demand is vertical at 16 hours. Right panel: labour supply (part b) is vertical at 8 hours.*

> [!tip] Intuition
> Cobb-Douglas with exponents 2 and 1: the consumer spends $2/3$ of full income ($24W$) on leisure, and the price of leisure is $W$ itself, so the hours bought are $\frac{2}{3}\cdot 24 = 16$ whatever $W$ is. The income effect and the substitution effect of a wage change exactly cancel.

### b. Labour supply (5 points)

**Question.** Calculate the labour supply $H$ and show it on a graph.

> [!success] Answer (official)
> $H^S = 24 - L_D = 24 - 16 = 8$, a vertical line at 8 hours.

Hours worked are whatever is left after leisure. See the right panel of the figure above.

### c. A wage increase (6 points)

**Question.** What happens to $L$, $X$ and $H$ if the wage $W$ increases?

> [!success] Answer (official)
> $L$ and $H$ **do not change**. $X$ **rises**.

**Why.** From part a, $X P_X = \frac{WL}{2} = 8W$, so $X = 8W/P_X$ goes up one for one with the wage. Hours are unchanged (16 and 8), but each hour pays more, so more is bought.

### d. A fixed non-labour income $W_0$ (8 points)

**Question.** How does the answer to (c) change if the consumer also has a fixed amount of money $W_0$ that is not connected to $W$?

> [!success] Answer (official)
> $L_D = 16 + \dfrac{2W_0}{3W}$ and $H^S = 8 - \dfrac{2W_0}{3W}$. When $W$ rises: **$L$ falls, $H$ rises, $X$ rises.**

**Working (official, expanded).** The tangency condition is unchanged, $X P_X = \frac{WL}{2}$. The budget constraint gains $W_0$:

$$
X P_X = (24-L)\,W + W_0
$$

Substitute and solve:

$$
\frac{WL}{2} = 24W - LW + W_0
\quad\Rightarrow\quad
\frac{3WL}{2} = 24W + W_0
\quad\Rightarrow\quad
L_D = 16 + \frac{2W_0}{3W}
$$

$$
H^S = 24 - L_D = 8 - \frac{2W_0}{3W}
$$

Spending then is $X P_X = \frac{W}{2}L_D = 8W + \frac{W_0}{3}$, which rises with $W$.

> [!tip] Intuition
> The lump sum $W_0$ does not scale with the wage. A higher wage makes an hour of leisure dearer, so the lump sum funds fewer extra hours of leisure (the term $2W_0/3W$ shrinks) and the person works more. Without $W_0$ the income and substitution effects cancel exactly; with it, the extra leisure it buys is the part that shrinks.

### e. Perfect complements, $U=\min(3L, X)$ (8 points)

**Question.** How does the answer to (c) change if the utility function is $U=\min(3L,X)$?

> [!success] Answer (official)
> $L_D = \dfrac{24W}{3P_X+W}$ and $H^S = 24 - \dfrac{24W}{3P_X+W}$. When $W$ rises: **$L$ rises, $X$ rises, $H$ falls.**

**Working (official, expanded).** For [[Perfect Complements]] the optimum sits at the kink, $3L = X$. The budget constraint is $X P_X = (24-L)W$:

$$
3L\,P_X = 24W - LW
\quad\Rightarrow\quad
L(3P_X + W) = 24W
\quad\Rightarrow\quad
L_D = \frac{24W}{3P_X+W}
$$

The slope with respect to $W$ is positive (the numerator grows proportionally faster than the denominator), so $L$ rises and $H = 24-L$ falls. Since $X = 3L$, consumption rises too.

> [!tip] Intuition
> With perfect complements there is **no substitution effect**, only the income effect. A higher wage makes the person richer, and because leisure is a normal good they buy more of it (and of $X$), so they work fewer hours. This is the backward-bending case.

**Contrast with part c.**

| Utility | $L$ | $X$ | $H$ |
|---|---|---|---|
| $L^2X$ (c) | unchanged | up | unchanged |
| $L^2X$ plus $W_0$ (d) | down | up | up |
| $\min(3L,X)$ (e) | up | up | down |

---

## Q2 — Ilanit's consumption over two periods

Ilanit spends her income on consumption in two periods, $C_1$ and $C_2$. Both are normal goods. She has income only in period 1 and none in period 2. She is indifferent between the present and the future, and the interest rate equals the inflation rate.

> [!info] The key reading
> Her endowment is **on the $C_1$ axis** at $(I_1, 0)$, so she can only **save** (she has nothing in period 2 to borrow against). With $r=\pi$ the real interest rate factor $\dfrac{1+r}{1+\pi}$ equals 1, so the budget line has slope $-1$. Indifferent between present and future means her optimum lies on the $C_1 = C_2$ line.

### a. Budget constraint and optimal bundle (6 points)

**Question.** Draw her budget constraint and her optimal bundle. Point out $C_1$ and $C_2$ at the optimum, the intercepts and the slope.

> [!success] Answer (official)
> Budget line from $(I_1, 0)$ to $(0, I_1)$, slope $-1$ because $\dfrac{1+r}{1+\pi}=1$. The optimum $A$ is a tangency point with $(C_1, C_2)$ marked on the axes.

![[PP08_q2a_budget_and_optimum.png|480]]

*The budget line pivots on its $C_1$ intercept $(I_1,0)$. Intercepts: $(I_1,0)$ on the $C_1$ axis and $(0, I_1\frac{1+r}{1+\pi}) = (0, I_1)$ on the $C_2$ axis. The curved line is an indifference curve, illustrative.*

See [[Lec_09-Intertemporal Choice]] for how the budget line is built.

### b. Inflation rises: utility and the new bundle (6 points)

**Question.** What happens to Ilanit's utility if the inflation rate increases? Point out the range of the new bundle.

> [!success] Answer (official)
> The real rate $\dfrac{1+r}{1+\pi}$ **falls**, so the budget line becomes **flatter, pivoting on $(I_1,0)$**. Her **utility decreases**. At the new bundle $B$: $C_2$ **falls** and $C_1$ is **ambiguous**.

The official table splits the move into two effects:

| | $C_1$ | $C_2$ |
|---|---|---|
| [[Substitution Effect]] | up | down |
| [[Income Effect]] | down | down |
| **Total ($B$)** | **?** | **down** |

**Why.** Her endowment point $(I_1,0)$ stays affordable, but the old bundle $A$ is above the new line, so she cannot afford $A$ any more. She ends on a lower indifference curve: utility falls. A flatter line means future consumption is relatively more expensive, so the substitution effect shifts her toward $C_1$ (up) and away from $C_2$ (down). Being poorer, both normal goods fall (income effect). $C_2$ falls twice. $C_1$ rises through substitution and falls through income, so its sign is unknown. The new bundle lies on the new line with $C_2$ below $A$'s $C_2$.

### c. Slutsky compensation (6 points)

**Question.** Show in a new graph the Slutsky compensation needed because of the inflation increase and mark the new bundle. Show the substitution and real-income effects on the same graph.

> [!success] Answer (official)
> Draw the **Slutsky line**: the new slope, passing **through $A$**. The optimum on it is $C$. Then $A \to C$ is the substitution effect and $C \to B$ the income effect, with $B$ on the new budget line.

![[PP08_q2bc_inflation_slutsky.png|540]]

*Grey dashed line: the compensated budget (new slope through A). $A\to C$ substitution (more $C_1$). $C\to B$ income effect (both fall). The curves are drawn with Cobb-Douglas preferences purely as an illustration; in that special case $C_1$ does not move overall. In general it is ambiguous, as the official table says.*

Compare [[Slutsky Compensation]] and the general method in [[Lec_07-Substitution and Income Effects]].

### d. The interest rate rises (8 points)

**Question.** Ignore b and c (go back to a). Suppose the interest rate increases. Show the change on a graph and point out the new bundle.

> [!success] Answer (official)
> $\dfrac{1+r}{1+\pi}$ **rises**: the budget line becomes **steeper, pivoting on $(I_1,0)$**. The result is the **opposite of part b**: **$C_2$ rises**, $C_1$ is ambiguous.

![[PP08_q2d_interest_rise.png|480]]

*Old line (red) and new, steeper line (green). Her old bundle $A$ lies inside the new budget set, so she is better off and picks a point $B$ with more $C_2$.*

**Why.** A saver gains when the return rises. Now $A$ is affordable with money to spare, so utility rises. Substitution pushes toward $C_2$ (future cheaper) and away from $C_1$; the income effect raises both. So $C_2$ unambiguously rises and $C_1$ is unknown.

### e. Only the borrowing rate rises (8 points)

**Question.** How does the answer to d change if only the interest rate for **borrowers** changed, not the rate for savers? No graph needed.

> [!success] Answer (official)
> **No change**, because Ilanit has no option to borrow.

**Why.** With no income in period 2 she never wants to move consumption from the future to the present. She is a saver, and the savers' rate is unchanged. Compare the same logic in [[Lec_09-Intertemporal Choice]].

---

# Closed questions (choose 8 of 10, 5 points each)

> [!info] Where the answers come from
> The highlighted option on the typed paper is the official answer. The reasons below are my own derivations. Q9 and Q10 label their options (e) to (h) on the paper; the labels are kept as printed.

## Closed Q1 — Two utility functions

**Question.** Two consumers: $U_1 = X^a + Y^b$ and $U_2 = X^a \cdot Y^b$.

a) For consumer 1 the goods are independent and for consumer 2 they are substitutes.
b) For consumer 1 the goods are normal and for consumer 2 they are complements.
c) For consumer 1 the goods are substitutes and for consumer 2 they are complements.
d) None of the above.

> [!success] Answer (highlighted): d
> None of the above.

**Why each option fails.**
- a) Consumer 2 has a Cobb-Douglas form. Its goods are not substitutes in the sense of constant exchange; the exponents give an interior, smoothly curved trade-off, and demand for $X$ does not depend on the price of $Y$.
- b) Consumer 2 is not complements (that needs a $\min$ function). Consumer 1 is not guaranteed normal: depending on $a$ and $b$ it can have corner solutions where one good is neutral.
- c) Consumer 1 would be [[Perfect Substitutes]] only if $a=b=1$; for general $a,b$ the curves are not straight lines. Consumer 2 is not complements.

So (d).

## Closed Q2 — MRS statements

**Question.** Three statements:
1) If $MRS > P_X/P_Y$, the consumer must increase $X$ and decrease $Y$.
2) If $U = \min(X/2, Y)$, there is no MRS.
3) If $U = aX + bY$, it is **not** possible that $MRS < P_X/P_Y$ at the optimal point.

a) Only 1. b) Only 1 and 3. c) Only 3. d) Only 1 and 2.

> [!success] Answer (highlighted): d
> Only statements 1 and 2.

- **1 is true.** $MRS$ is the most the person will pay for one more $X$ in units of $Y$. If it exceeds the market price ratio, trading $Y$ for $X$ makes them better off, so they buy more $X$ and less $Y$.
- **2 is true.** At the kink of a [[Perfect Complements]] indifference curve the slope is undefined (zero on one side, infinite on the other), so no MRS exists.
- **3 is false.** With [[Perfect Substitutes]], $MRS = a/b$ is constant. If $a/b < P_X/P_Y$, the consumer spends everything on $Y$, a corner solution where $MRS < P_X/P_Y$ **does** hold at the optimum.

## Closed Q3 — $U=XY$, the price of $Y$ falls

**Question.** $U(X,Y)=X\cdot Y$. If $P_Y$ decreases:

a) The absolute value of the substitution effect on $X$ equals the absolute value of the real-income effect on $X$.
b) The Hicks substitution effect is larger than the Slutsky substitution effect in absolute value.
c) The absolute value of the real-income effect on $Y$ equals the absolute value of the substitution effect on $Y$.
d) More than one answer is correct.

> [!success] Answer (highlighted): a
> Substitution effect on $X$ equals the income effect on $X$ in absolute value.

**Why (a) holds.** For Cobb-Douglas, the demand for $X$ is $X = I/(2P_X)$ and does not depend on $P_Y$. So the **total** effect on $X$ is zero: the substitution effect (a little less $X$, because $Y$ became cheaper) and the income effect (a little more $X$, because real income rose) cancel, equal in size and opposite in sign.

**Why (b) fails.** For a price fall the Hicks substitution effect is the smaller one in absolute value, since the Hicks bundle sits on the original indifference curve while the Slutsky bundle is on a higher one. So Hicks > Slutsky is false.

> [!warning] Care with option (c)
> Under **Slutsky** compensation, for $U=XY$ the substitution and income effects on $Y$ turn out equal too (I checked: with $P_Y$ falling to $kP_Y$, both equal $\frac{I(1-k)}{4kP_Y}$). Under **Hicks** compensation they are not equal (for example $I=2$, $P=(1,1)$, $P_Y$ halved: substitution $+0.41$, income $+0.59$). The highlighted (a) is consistent with using the Hicks decomposition for the "substitution effect". If the course used Slutsky throughout, (a) and (c) would both hold and (d) would be right. Keep the official (a).

## Closed Q4 — Endowment $(0,10)$, $P_X$ rises

**Question.** A consumer's real income is the endowment $(X=0, Y=10)$. He can trade by selling each good and buying new quantities. If $P_X$ increases:

a) His utility will increase.
b) His utility will decrease.
c) The Slutsky compensation will be negative.
d) More than one answer is correct.

> [!success] Answer (highlighted): b
> His utility will decrease.

**Why.** The endowment is worth $0\cdot P_X + 10 P_Y = 10P_Y$, which does **not** depend on $P_X$. A higher $P_X$ therefore does not raise his wealth, but it makes $X$ more expensive. The budget line pivots around the endowment point and the budget set shrinks, so he can no longer afford his old bundle if it contained $X$. His utility falls.

- a) wrong: no way to gain, he owns no $X$ to sell at the higher price.
- c) wrong: the Slutsky compensation for a price **rise** is positive (extra money needed to buy the old bundle), not negative.
- d) wrong: only (b) is correct.

## Closed Q5 — $P_Y$ rises and $X$ falls

**Question.** If the price of $Y$ increases, the quantity of $X$ in the new bundle decreases. The conclusion is:

a) $X$ is a normal good and the real-income effect on $Y$ is unknown.
b) $Y$ is a normal good and the real-income effect on $X$ is unknown.
c) $X$ is an inferior good.
d) $X$ and $Y$ are normal goods.

> [!success] Answer (highlighted): a
> $X$ is normal; the income effect on $Y$ is unknown.

**Why.** The substitution effect of a rise in $P_Y$ moves the consumer **toward** $X$ (it becomes relatively cheaper), so $X$ would go up. The total effect is a fall, so the income effect on $X$ must be negative and large. A price rise cuts real income, so a **negative** income effect means $X$ is **normal**. Nothing in the data tells us whether $Y$ is normal or inferior, so its income effect is unknown.

- b) wrong: we learn about $X$, not $Y$.
- c) wrong: an inferior $X$ would rise as income falls, making the fall in $X$ harder to explain.
- d) wrong: normality of $Y$ is not implied.

## Closed Q6 — $U = X^2 + Y^2/5$

**Question.** Hadas has $\$100$ for $X$ and $Y$, $P_X=\$20$, $P_Y=\$10$, $U=X^2+Y^2/5$. Her optimal bundle is:

a) $X=5$, $Y=2.5$. b) $X=2.5$, $Y=5$. c) $Y=10$. d) $X=5$.

> [!success] Answer (highlighted): d
> $X=5$ (and $Y=0$).

**Working.** Both exponents are 2, so marginal utility rises with quantity: preferences are **not convex** (a concave-to-the-origin shape), and the tangency point is a minimum. The optimum is a **corner**. Compare the two corners:

| Corner | Bundle | Utility |
|---|---|---|
| All on $X$ | $X = 100/20 = 5$ | $5^2 = 25$ |
| All on $Y$ | $Y = 100/10 = 10$ | $10^2/5 = 20$ |

So she spends everything on $X$: $X=5$, $Y=0$. Option (a) needs $20(5)+10(2.5)=125 > 100$, not affordable. Option (b) is affordable but gives only $2.5^2 + 5^2/5 = 6.25 + 5 = 11.25$, well below 25.

> [!warning] Exam trap
> Setting $MRS = P_X/P_Y$ gives the interior point $(X,Y)=(2.5,5)$, which is option (b). It is a **minimum**, not a maximum.

## Closed Q7 — $U=\max(aX,bY)$

**Question.** For $U=\max(aX, bY)$:

a) Both goods are always normal.
b) Goods are complementary.
c) One good is always neutral.
d) None of the above.

> [!success] Answer (highlighted): c
> One good is always neutral.

**Why.** The consumer only cares about whichever of $aX$ and $bY$ is larger, so she spends all income on one good. Buying only $X$ gives $a I/P_X$; buying only $Y$ gives $b I/P_Y$. The comparison $a/P_X$ versus $b/P_Y$ does **not** depend on income, so she never switches good when income changes. The good she does not buy has zero demand at every income: it is **neutral** (the income effect on it is zero). (a) is wrong (the unbought good is not normal), (b) is wrong (these are not complements; the maximum is the opposite of a fixed proportion).

## Closed Q8 — Quasilinear nuts and berries

**Question.** $U(x_1,x_2)=4x_1^{1/2}+x_2$. The price of nuts is $\$1$, berries $\$4$, income $\$60$. If income rises to $\$70$, what is the change in nuts?

a) 10. b) 0. c) 4. d) 8.

> [!success] Answer (highlighted): b
> 0.

**The reasoning behind 0.** This is [[Quasilinear Utility]] in $x_2$. When the optimum is **interior**, the tangency condition fixes $x_1$ independently of income, so extra income goes entirely to berries and nuts do not change.

> [!warning] My check gives (c) 4, not (b) 0
> Tangency: $MRS = \dfrac{2x_1^{-1/2}}{1} = \dfrac{P_1}{P_2} = \dfrac{1}{4}$, so $\sqrt{x_1}=8$ and $x_1^* = 64$ (interior solution).
> - At income $\$60$ she cannot afford 64 nuts (it costs $\$64$). So she is at the **corner**: $x_1=60$, $x_2=0$.
> - At income $\$70$ she can afford it: $x_1 = 64$, $x_2 = (70-64)/4 = 1.5$.
> - Change in nuts: $64 - 60 = 4$.
>
> Option (b) is right only if both incomes are above $\$64$. Because $\$60$ lies **below** the interior threshold, nuts do change. The official highlight is kept, but a student answering from this calculation should get (c). Please check this one against the original source.

## Closed Q9 — $U = X^a + Y$, $P_Y$ falls

**Question.** $U=X^a+Y$ with $0<a<1$. If $P_Y$ decreases:

e) It is possible that the Hicks compensation equals the Slutsky compensation.
f) For a certain range of income $X$ is a normal good and for a certain range $X$ is a neutral good.
g) For a certain range of income $Y$ is a normal good and for a certain range $Y$ is a neutral good.
h) All of the above are correct.

> [!success] Answer (highlighted): h
> All of the above.

**Working.** [[Quasilinear Utility]] with $MRS = aX^{a-1}$. At an interior optimum $aX^{a-1}=P_X/P_Y$ fixes $X^* = \left(\dfrac{aP_Y}{P_X}\right)^{1/(1-a)}$ regardless of income. There are two regimes:

| Income | Bundle | $X$ | $Y$ |
|---|---|---|---|
| Low (below $P_X X^*$) | corner, only $X$: $X = I/P_X$, $Y=0$ | normal | neutral |
| High | interior: $X = X^*$, $Y=(I-P_XX^*)/P_Y$ | neutral | normal |

- f) true: normal at low income, neutral at high income.
- g) true: neutral at low income, normal at high income.
- e) true: if the consumer is at the corner with $Y=0$ before and after, the Slutsky compensation (the money to rebuy the old bundle) is zero and the Hicks compensation is zero too, so they are equal.

So all of e, f and g hold: (h).

## Closed Q10 — $P_Y$ falls and $X$ does not change

**Question.** If $P_Y$ decreases the quantity of $X$ in the new bundle does not change. The conclusion is:

e) $X$ is a normal good and the real-income effect on $Y$ is unknown.
f) $Y$ is a normal good and the real-income effect on $X$ is unknown.
g) $X$ is an inferior good.
h) $X$ and $Y$ are normal goods.

> [!success] Answer (highlighted): e
> $X$ is normal; the income effect on $Y$ is unknown. The paper shows **two** highlights here, (e) **and** (h).

**Why (e).** A fall in $P_Y$ raises real income. The substitution effect on $X$ is **negative** (it is now relatively dearer than $Y$). Total change zero means the income effect on $X$ must be **positive**, so $X$ is normal. The data say nothing about whether $Y$ is normal or inferior.

- f) wrong: it reverses the roles.
- g) wrong: an inferior $X$ would add to the fall, not cancel it.
- h) not implied: the normality of $Y$ is not forced.

> [!warning] Two highlights
> The typed paper highlights both (e) and (h). By the argument above only (e) follows, and (e) mirrors the pattern of Q5 (where (a) is the answer). I treat **(e)** as the intended answer and flag (h) as a probable stray highlight. Check with your lecturer if it matters.

---

## Recap

| Question | Tool | Answer |
|---|---|---|
| Open 1a | Cobb-Douglas tangency | $L_D=16$, vertical |
| Open 1b | $H=24-L$ | $H^S=8$ |
| Open 1c | Wage rise | $L,H$ unchanged; $X$ up |
| Open 1d | Add $W_0$ | $L_D=16+\frac{2W_0}{3W}$; $L$ down, $H$ up, $X$ up |
| Open 1e | Perfect complements | $L_D=\frac{24W}{3P_X+W}$; $L$ up, $X$ up, $H$ down |
| Open 2a | Slope $-1$, $A$ on $C_1=C_2$ | endowment $(I_1,0)$ |
| Open 2b | Real rate falls | utility down; $C_2$ down, $C_1$ ? |
| Open 2c | Slutsky line through $A$ | $A\to C$ substitution, $C\to B$ income |
| Open 2d | Real rate rises | $C_2$ up, $C_1$ ? |
| Open 2e | Only borrowing rate | no change (cannot borrow) |
| Closed 1 | Classify goods | d |
| Closed 2 | MRS rules | d (1 and 2) |
| Closed 3 | Cobb-Douglas effects | a |
| Closed 4 | Endowment value | b |
| Closed 5 | Normal vs inferior | a |
| Closed 6 | Convex utility, corner | d ($X=5$) |
| Closed 7 | Max utility | c |
| Closed 8 | Quasilinear | b (highlight; my check says c) |
| Closed 9 | Quasilinear regimes | h |
| Closed 10 | Income effect inference | e (also h highlighted) |

## Related notes

- [[Micro-Economics I]] (hub)
- [[Lec_01-Budget Constraint]]
- [[Lec_03-Utility and MRS]]
- [[Lec_04-Optimal Bundle]]
- [[Lec_07-Substitution and Income Effects]]
- [[Lec_08-Labor Supply]]
- [[Lec_09-Intertemporal Choice]]
- [[PS_04-Optimal Choice]]
- [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
- [[PS_07-Labor Supply]]
