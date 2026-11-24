---
title: "Labour Supply & Intertemporal Choice, Open Questions (2022 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro Economics 1, The consumer theory, Moed A 2022 (open questions only)"
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
  - corner-solution
aliases:
  - Micro 1 Moed A 2022
  - PP10 Micro I
subject: micro-i
in_scope: true
---

# Labour Supply & Intertemporal Choice, Open Questions (2022 Moed A)

> Part of: [[Micro-Economics I]]
> **Micro Economics 1, The consumer theory, Moed A 2022**, Ido Eisdorfer and Yosi Ganel. 3 hours, two mandatory open questions (65 points, 5 bonus). Calculators and two double-sided formula pages allowed. "Answers without explanations won't be graded." Utility is convex unless stated otherwise.
> Builds on: [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]
> Practice: [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]], [[PS_07-Labor Supply]]

> [!info] Source and what counts as official
> The paper here contains only the two open questions. The multiple-choice part (10 questions, choose 8) was not handed out with it, so it is **not** in this note.
>
> The Moodle file listed as the solution is **Recitation 12, "Exam practice questions" (2023, Yosi Ganel)**. I compared it with the paper question by question. **Both questions and every sub-part (1a to 1e, 2a to 2f) are word for word the same as this paper**, and the recitation works each one. So **all answers below are official**, taken from that recitation. It is a lecturer's worked solution used as practice, not the marking scheme of the sitting, so mark allocations are the paper's but the working is the recitation's.
>
> | Question | Matches recitation? | Answer status |
> |---|---|---|
> | 1a to 1e | yes, identical | official (recitation) |
> | 2a to 2f | yes, identical | official (recitation) |
>
> Where the recitation only sketches or is terse, I expand the reasoning and say so. **No answer in this note is AI-solved in place of an official one.** Two places where I add to the official text (Q1e condition, Q2 interpretation) are marked.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | [[Labor Supply]] with $U=LY+4Y$: a flat leisure demand, effect of a wage fall, extra [[Non-Labor Income]], and when a person chooses **not to work at all** (corner solution) | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Q2 | Two-period consumption for a **present-lover with income only in period 2**: a borrower's budget line, how the real interest rate shifts utility and the bundle, [[Slutsky Compensation]], and a rate that changes only for savers | [[Lec_09-Intertemporal Choice]], [[Lec_07-Substitution and Income Effects]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $MRS = W/P_Y$ and $Y = W(16-L)$ give two equations in $L$ and $Y$. With $P_Y=1$ this is quick.
> - Q2: ask first **saver or borrower?** The endowment is on the $C_2$ axis, so Yoni can only borrow. A change in the savers' rate cannot touch him.

---

## Q1 — Sharon's labour supply (25 points)

Sharon splits 16 hours between leisure $L$ and work, and consumes $Y$ out of her wage income ($P_Y=1$). She earns $W>0$ per hour. $U(L,Y)=LY+4Y$.

### a. Demand for leisure (6 points)

**Question.** Calculate the demand function for $L$ and show it on a graph ($L$ vs $W$).

> [!success] Answer (official)
> $L_D = 6$, independent of $W$ (a flat line in the $L$ vs $W$ graph).

**Working.** The marginal utilities are $MU_L = Y$ and $MU_Y = L + 4$, so

$$
MRS = \frac{MU_L}{MU_Y} = \frac{Y}{L+4} = W
\quad\Rightarrow\quad
Y = W(L+4)
$$

Budget constraint: $Y = (16-L)W$. Equate the two:

$$
W(L+4) = (16-L)W
\quad\Rightarrow\quad
L + 4 = 16 - L
\quad\Rightarrow\quad
L_D = 6
$$

$W$ cancels (it divides out of both sides), so leisure does not react to the wage.

![[PP10_q1ab_leisure_demand_labor_supply.png|640]]

*Left: leisure demand is a horizontal line at 6 hours. Right: labour supply (part b) is a horizontal line at 10 hours.*

> [!tip] Intuition
> $U = Y(L+4)$ is Cobb-Douglas in $Y$ and $(L+4)$. Spending a fixed share of "full income" $16W + 4W = 20W$ on $(L+4)$ means $(L+4) = 10$, whatever the wage. The wage lifts both the price and the income of leisure by the same proportion, so the [[Income Effect]] and [[Substitution Effect]] cancel.

### b. Labour supply (6 points)

**Question.** Calculate the labour supply $H$ and show it on a graph ($H$ vs $W$).

> [!success] Answer (official)
> $H^S = 16 - L = 16 - 6 = 10$, flat in $W$.

See the right panel of the figure above.

### c. The wage falls (7 points)

**Question.** What happens to $L$, $Y$ and $H$ if the wage decreases?

> [!success] Answer (official)
> $L_D$ and $H^S$ **do not change**. $Y$ **decreases**.

**Working.** $Y = (16-L)W = (16-6)W = 10W$. So when $W$ falls, $Y$ falls in proportion, while the hours of leisure and work stay at 6 and 10.

### d. A fixed money amount $W_0$ (8 points)

**Question.** How does the answer to (c) change if Sharon has a fixed amount of money $W_0$ that is not connected to $W$?

> [!success] Answer (official)
> $L_D = 6 + \dfrac{W_0}{2W}$, $H^S = 10 - \dfrac{W_0}{2W}$, $Y = 10W + \dfrac{W_0}{2}$. When $W$ **falls**: **$L$ rises, $H$ falls, $Y$ falls.**

**Working.** The tangency condition is unchanged, $Y = W(L+4)$. The budget gains $W_0$: $Y = (16-L)W + W_0$.

$$
WL + 4W = 16W - LW + W_0
\quad\Rightarrow\quad
2WL = 12W + W_0
\quad\Rightarrow\quad
L_D = 6 + \frac{W_0}{2W}
$$

Hours of work:

$$
H^S = 16 - L_D = 10 - \frac{W_0}{2W}
$$

Consumption:

$$
Y = (16 - L)W + W_0 = 10W - \frac{W_0}{2} + W_0 = 10W + \frac{W_0}{2}
$$

When $W$ falls, $W_0/2W$ rises, so $L_D$ rises and $H^S$ falls. $Y = 10W + W_0/2$ falls.

> [!tip] Intuition
> Without $W_0$ a wage cut changes nothing in hours. With a fixed $W_0$, a lower wage makes that lump sum large relative to wage income, so Sharon "can afford" more leisure and works less.

### e. Can she choose not to work? $U = LY + L^2$ (5 points)

**Question.** Ignore part d. If her utility is $U=LY+L^2$, is it possible that she will choose not to work at all? Explain and show the condition.

> [!success] Answer (official)
> **Yes.** $L_D = \dfrac{16W}{2W-2}$, and at $W=2$, $L_D = 16$ and $H^S = 0$.

**Working (official).**

$$
MRS = \frac{MU_L}{MU_Y} = \frac{Y + 2L}{L} = W
\quad\Rightarrow\quad
Y = L(W-2)
$$

Budget: $Y = (16-L)W$. Equate:

$$
L(W-2) = 16W - LW
\quad\Rightarrow\quad
L(2W-2) = 16W
\quad\Rightarrow\quad
L_D = \frac{16W}{2W-2}
$$

At $W = 2$: $L_D = 32/2 = 16$, so $H^S = 0$.

> [!tip] My expansion: the full condition (not in the recitation)
> The recitation stops at the single wage $W=2$. The complete condition comes from the corner $L=16$, $Y=0$. There the marginal rate of substitution is $MRS = \dfrac{0 + 2(16)}{16} = 2$. She prefers to work only if the wage beats that "reservation wage":
>
> - $W > 2$: interior solution $L_D = \frac{16W}{2W-2} < 16$, she works.
> - $W \le 2$: the formula would give $L_D \ge 16$, which is impossible, so she takes the corner $L = 16$ and **does not work**.
>
> This is also why the answer in part a shows she always works: with $U=LY+4Y$ the $MRS$ at $L=16$ is $0/(16+4)=0 < W$, so the corner is never chosen.

![[PP10_q1e_no_work_region.png|520]]

*Leisure demand flat at 16 hours up to $W=2$ (no work), then falling as the wage passes 2. The kink at $W=2$ is the official point. The flat part for $W<2$ is my addition from the corner argument.*

---

## Q2 — Yoni's consumption over two periods (40 points)

Yoni consumes in two periods, $C_1$ and $C_2$. Both are normal goods. His income in period 1 is **zero** and in period 2 it is $I_0$. He **prefers the present over the future** and has convex preferences. The interest rate equals the inflation rate at the start.

> [!info] The key reading
> The real interest rate factor is $r_r = \dfrac{1+r}{1+\pi}$. At the start $r=\pi$, so $r_r = 1$ and the budget line has slope $-1$. Because his endowment sits at $(0, I_0)$ on the **$C_2$ axis**, any consumption in period 1 has to be **borrowed**. A change in the rate that pays savers does not affect him.

### a. Budget line and optimum (6 points)

**Question.** Draw Yoni's budget constraint and his optimal bundle. Point out $C_1$ and $C_2$ at the optimum, the intercepts and the slope.

> [!success] Answer (official)
> Budget line from $(0, I_0)$ to $(I_0, 0)$, **slope $-1$**. The optimum $A$ lies **below the $C_1 = C_2$ line** because he prefers the present.

![[PP10_q2a_budget_and_optimum.png|480]]

*Intercepts: $I_0$ on each axis. A present-lover chooses a bundle with more $C_1$ than $C_2$, below the 45-degree line. The curve is an indifference curve, illustrative.*

### b. Savings (3 points)

**Question.** Are Yoni's savings positive, negative or zero? Explain.

> [!success] Answer (official)
> **Negative.** Savings are $S = I_1 - C_1$. With $I_1 = 0$ and $C_1 > 0$, $S = -C_1 < 0$. He is a **borrower**.

### c. Inflation falls and interest rises (5 points)

**Question.** What happens to Yoni's utility if the inflation rate falls and the interest rate rises? Point out the range of the new bundle.

> [!success] Answer (official)
> The real rate $r_r$ **rises**. His **utility decreases**. At the new bundle $B$: **$C_1$ falls** and $C_2$ is **ambiguous** ($?$).

The official table:

| | $C_1$ | $C_2$ |
|---|---|---|
| Real-rate substitution effect | down | up |
| [[Income Effect]] | down | down |
| **Total ($B$)** | **down** | **?** |

**Why.** A higher real rate pivots the budget line **steeper around $(0, I_0)$**: borrowing is costlier. The old bundle $A$ is no longer affordable, so he lands on a lower indifference curve. Substitution says "present consumption is now dearer": less $C_1$, more $C_2$. As a borrower he is poorer, so the income effect lowers both normal goods. $C_1$ falls on both counts. $C_2$ has a rise and a fall, so its sign is not determined. The **range of $B$** is the part of the new line to the **left of $A$'s $C_1$**.

### d. Slutsky compensation (6 points)

**Question.** Show in a new graph the Slutsky compensation needed due to the fall in inflation and rise in interest, and mark the new bundle. Show the substitution and real-income effects on the same graph.

> [!success] Answer (official)
> Draw the **Slutsky line**: the new (steeper) slope passing **through $A$**. The best point on it is $C$. **$A \to C$ is the substitution effect**; **$C \to B$ is the income effect**, where $B$ is on the new budget line.

![[PP10_q2cd_real_rate_up.png|540]]

*Red: old line. Green: new, steeper line. Grey dashed: Slutsky line through $A$. $A\to C$: up and to the left (substitution). $C\to B$: down and to the left (income). Curves are Cobb-Douglas, drawn as an illustration, so $C_2$ happens not to change overall; in general it is ambiguous, as the table says.*

See [[Slutsky Compensation]] and [[Lec_07-Substitution and Income Effects]].

### e. Inflation rises and interest falls (7 points)

**Question.** Ignore b to d (go back to a). Suppose inflation rises and the interest rate falls. Show the change on a graph and point out the new bundle.

> [!success] Answer (official)
> The real rate **falls**: the budget line becomes **flatter, pivoting on $(0, I_0)$**. At $B$: **$C_1$ rises** and $C_2$ is **ambiguous**.

| | $C_1$ | $C_2$ |
|---|---|---|
| Real-rate substitution effect | up | down |
| [[Income Effect]] | up | up |
| **Total ($B$)** | **up** | **?** |

![[PP10_q2e_real_rate_down.png|520]]

*The new flatter line lies outside the old one, so $A$ is affordable with room to spare. The range of $B$ is the part of the new line to the right of $A$'s $C_1$.*

**Why.** Borrowing becomes cheaper, so a borrower is **better off**: the old bundle is inside the new budget set. Substitution favours the cheaper $C_1$ and reduces $C_2$. The income effect raises both. $C_1$ rises on both counts; $C_2$ has a fall and a rise, so it is ambiguous.

### f. Only the savers' rate changes (6 points)

**Question.** How would the answer to e change if only the interest rate for those who **save** changed, and not the rate for those who **borrow**?

> [!success] Answer (official)
> **Nothing changes.** Yoni has income only in the second period, so he is **not going to save**.

**Why.** The savers' rate applies to the part of the budget line on the side of the endowment that corresponds to saving. His endowment is at $(0,I_0)$, and he sits at a point with $C_1 > 0$, so he is on the **borrowing** side. Moving the savers' rate leaves that side untouched, so $A$ remains his optimum. Compare Q2f of the 2018 sitting, where the same logic runs the other way (a saver facing a change in the borrowing rate).

---

## Recap

| Part | Tool | Answer |
|---|---|---|
| 1a | $MRS = W$, budget | $L_D = 6$, flat |
| 1b | $H = 16 - L$ | $H^S = 10$ |
| 1c | $Y = 10W$ | $L,H$ unchanged; $Y$ down |
| 1d | Add $W_0$ | $L_D = 6 + \frac{W_0}{2W}$; $L$ up, $H$ down, $Y$ down |
| 1e | Corner at $L=16$ | $L_D = \frac{16W}{2W-2}$; no work at $W=2$ (and below, my addition) |
| 2a | Slope $-1$, endowment $(0,I_0)$ | $A$ below the 45-degree line |
| 2b | $S = I_1 - C_1$ | negative (borrower) |
| 2c | Real rate up | utility down; $C_1$ down, $C_2$ ? |
| 2d | Slutsky line through $A$ | $A\to C$ substitution, $C\to B$ income |
| 2e | Real rate down | $C_1$ up, $C_2$ ? |
| 2f | Savers' rate only | no change (a borrower) |

## Related notes

- [[Micro-Economics I]] (hub)
- [[Lec_03-Utility and MRS]]
- [[Lec_04-Optimal Bundle]]
- [[Lec_07-Substitution and Income Effects]]
- [[Lec_08-Labor Supply]]
- [[Lec_09-Intertemporal Choice]]
- [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
- [[PS_07-Labor Supply]]
