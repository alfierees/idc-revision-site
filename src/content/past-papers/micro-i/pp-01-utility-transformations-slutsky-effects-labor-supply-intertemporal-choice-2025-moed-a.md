---
title: "Utility Transformations, Slutsky Effects, Labor Supply & Intertemporal Choice (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro I Final Exam, Term A (Moed A), 2025"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - micro-i
  - past-paper
  - worked-solution
  - utility-function
  - income-effect
  - substitution-effect
  - labor-supply
  - intertemporal-choice
  - uncertainty
aliases:
  - Micro I Moed A 2025
  - Micro I Final 2025 Term A
  - PP01 Micro I
subject: micro-i
in_scope: true
---

# Utility Transformations, Slutsky Effects, Labor Supply & Intertemporal Choice (2025 Moed A)

> Part of: [[Micro-Economics I]]
> **Micro-Economics I final exam, Term A (Moed A), academic year 2024-25.** Lecturer on the paper: Ido Eisdorfer. 3 hours, four A4 pages of notes allowed, calculators allowed.
> Builds on: [[Lec_02-Preferences]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]
> Practice: [[PS_03-The Utility Function]], [[PS_04-Optimal Choice]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]], [[PS_07-Labor Supply]]

> [!info] Paper format
> **Part A (40 points):** 10 multiple-choice questions, each worth 5 points, **choose any 8** (if you answer more, the first 8 are marked). One correct answer each. **Part B (65 points):** two open questions, both compulsory (35 and 30 points). The paper states that the utility function is **always convex unless stated otherwise** (read: preferences are convex, indifference curves bow toward the origin), and that **answers without explanations are not graded**. Question numbers below follow the paper: Part A is Q1 to Q10, Part B is Q11 and Q12.

> [!warning] Which answers are official
> The source PDF contains **no answer key for Part A** (no highlights and no answer table). Q1 to Q10 are therefore **AI-written answers, not official**, each flagged. Q11 and Q12 follow the **official worked solution** (typed in red, with slide-style diagrams for Q12). Two official slips in Q11 are flagged with a warning.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Monotonic transformations: when two utility functions give the same ranking; goods versus bads | [[Lec_03-Utility and MRS]], [[Lec_02-Preferences]] |
| Q2 | Concave versus convex utility, income effects, order-preserving transformations | [[Lec_04-Optimal Bundle]], [[Lec_03-Utility and MRS]] |
| Q3 | Slutsky decomposition for Cobb-Douglas; Hicks versus Slutsky compensation | [[Lec_07-Substitution and Income Effects]] |
| Q4 | Consumer sitting on her endowment when a price falls | [[Lec_08-Labor Supply]], [[Lec_07-Substitution and Income Effects]] |
| Q5 | A rising price that raises demand: Giffen, so inferior | [[Lec_07-Substitution and Income Effects]] |
| Q6 | Fair lotteries and risk attitudes | no lecture note; see homework 8 (not linked here) |
| Q7 | True/false round-up of Slutsky and convexity ideas | [[Lec_07-Substitution and Income Effects]], [[Lec_02-Preferences]] |
| Q8 | Optimum with $\sqrt{x_1}+\sqrt{x_2}$ | [[Lec_04-Optimal Bundle]] |
| Q9 | Non-convex preferences: corner solutions | [[Lec_04-Optimal Bundle]], [[Lec_02-Preferences]] |
| Q10 | Quantity-discount budget line (kink) | [[Lec_01-Budget Constraint]] |
| Q11 | Labor supply with an hours cap, comparing two options, an allowance | [[Lec_08-Labor Supply]], [[PS_07-Labor Supply]] |
| Q12 | Two-period consumption: inflation, Slutsky, kinked budget line | [[Lec_09-Intertemporal Choice]] |

> [!tip] Intuition: the moves that carry the paper
> - **Ranking, not numbers:** [[Ordinal Utility]] means only the order matters, so any increasing transformation gives the same preferences (Q1, Q2).
> - **Original bundle affordable = Slutsky compensation is the cost of that bundle at new prices minus old income.** If the old bundle is already exactly affordable the compensation is zero (Q4).
> - **Labor supply is consumption-leisure choice** with leisure priced at the wage, and the budget line $Y=(18-L)W$ (Q11).
> - **Intertemporal choice is the ordinary two-good problem** with slope $-(1+r_{\text{real}})$ (Q12).

---

# Part A: multiple choice (answers are AI-written)

> [!warning] Questions solved by AI: Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10
> There is no official key for Part A in the source. Every answer below is derived from first principles and checked numerically where it involves numbers. **Check before relying on them.** Q3 has a wrinkle (two options can both be defended) and is flagged.

## Q1 — Two utility functions and monotonicity

$$
U_1 = 100\,(X^a + Y^b)^{-1}, \qquad U_2 = \frac{1}{X^a + Y^b}, \qquad a,b>0,\; X,Y>1.
$$

- a. Answers b and c are correct.
- b. In both utility functions, both goods are negatively monotonic.
- c. If $a=b$, both consumers will rank their bundles in the same order.
- d. If $a=b=1$, both consumers will get the same level of utility if they consume the same bundle.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

**b is true.** Since $X,Y>1$ and $a,b>0$, both $X^a$ and $Y^b$ rise with $X$ and $Y$, so the denominator $X^a+Y^b$ rises, and $U_1=100/(\cdot)$ and $U_2=1/(\cdot)$ **fall**. More of either good lowers utility, so both goods are [[Goods and Bads|bads]] for both consumers (negatively monotonic).

**c is true.** $U_1 = 100\,U_2$ for every bundle, and this holds for any $a,b$, in particular when $a=b$. Multiplying by 100 is an increasing transformation, so the two consumers rank every pair of bundles the same way. (They actually share the same ranking whether or not $a=b$; the condition is a distractor.)

**d is false.** With $a=b=1$: $U_1 = 100/(X+Y)$ and $U_2 = 1/(X+Y)$, so for the same bundle $U_1$ is 100 times $U_2$. Same ranking does not mean same level.

Since b and c are both right, the answer is **a** ("b and c are correct"). See [[Ordinal Utility]].

## Q2 — Three statements about a utility function

Statements: (i) if utility is **concave**, at the optimum always $MRS=P_x/P_y$; (ii) if utility is **convex**, when income rises the quantity of both goods rises; (iii) $U(X,Y)$ and $\left(\frac{U(X,Y)+1000}{2}\right)^2$ represent the same preferences.

- a. Only statement 3 is correct.
- b. Only statement 1 is correct.
- c. Only statement 2 is correct.
- d. Only statements 1 and 3 are correct.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

- **(i) False.** With a concave utility function the indifference curves bow **away** from the origin (non-convex preferences). The tangency point is then the worst point on the budget line, not the best, and the optimum is a [[Corner Solution]]. The condition $MRS=P_x/P_y$ is only an optimum condition for convex preferences. See Q9.
- **(ii) False.** Convexity does not rule out an [[Income Effect]] that is negative: for an **inferior good** more income means less of that good. "Both goods increase" is not guaranteed.
- **(iii) True** (with a caveat below). $f(u)=\left(\frac{u+1000}{2}\right)^2$ is increasing whenever $u+1000>0$, so it is an order-preserving transformation of $U$, giving the same ranking.

> [!note] Caveat on (iii)
> Squaring reverses the order for negative numbers, so the transformation is increasing only while $U>-1000$. The exam obviously intends the usual case of utility values above $-1000$, so (iii) is counted as correct.

Only statement 3 is correct, so the answer is **a**.

## Q3 — Cobb-Douglas, the price of Y rises

$U(X,Y)=X\cdot Y$. If the price of $Y$ increases:

- a. The absolute value of the substitution effect on **X** equals the absolute value of the real income effect on **X**.
- b. HICKS compensation $>$ the SLUTSKY compensation.
- c. The absolute value of the real income effect on **Y** equals the absolute value of the substitution effect on **Y**.
- d. None of the answers is correct.

> [!warning] AI-written answer, not official. Check before relying on it. This question has two defensible options under the course's own (Slutsky) decomposition.
> **Answer: (a)** is the intended one.

With $U=XY$ and income $I$: $X=\frac{I}{2P_x}$ and $Y=\frac{I}{2P_y}$. A rise in $P_y$ **does not change $X$ at all** (Cobb-Douglas spends a fixed share of income on each good).

**a is true.** The total effect on $X$ is zero, and total effect = substitution effect + income effect. The substitution effect on $X$ is positive (X becomes relatively cheaper) and the real income effect is negative (the consumer is poorer), so they must be **equal in absolute value** and cancel.

> [!example] Numerical check
> Take $I=100$, $P_x=1$, $P_y$ rising from 1 to 2. Original bundle $(50,50)$; new bundle $(50,25)$.
> Slutsky income $=1\cdot50+2\cdot50=150$, giving the Slutsky bundle $(75,37.5)$.
>
> | Good | Substitution effect (original to Slutsky) | Real income effect (Slutsky to new) |
> |---|---|---|
> | X | $+25$ | $-25$ |
> | Y | $-12.5$ | $-12.5$ |

**b is false.** The Slutsky bundle is affordable and at least as good as the original, so reaching the original utility level costs **less**: Hicks compensation $\le$ Slutsky compensation (here about 41.4 versus 50). Hicks is never larger.

**c** says the two effects on $Y$ are equal in size. In the numbers above they are ($-12.5$ and $-12.5$) under the **Slutsky** decomposition, so c also holds there; under the **Hicks** decomposition they are not equal ($-14.6$ and $-10.4$).

> [!warning] Two answers can be defended
> The question is written with a single correct answer. Option **a** holds under **both** decompositions (it is forced by "X does not move"), while c holds only under the Slutsky decomposition. The lecturer's intent is almost surely a ("the price of Y does not change X"). I answer **a** and flag c as a possible second correct option.

## Q4 — Consumer on her endowment, the price of X falls

A consumer has real income (endowment) $(X=5,Y=5)$ and can sell and buy. Convex utility. In the original bundle she consumed exactly her endowment. If $P_x$ decreases:

- a. All answers are wrong.
- b. Her utility may increase.
- c. X must decrease and Y must increase in the new bundle.
- d. Slutsky's compensation is positive.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (b).**

![[PP01_q4_endowment_pivot.png|560]]

The budget line always passes through the endowment, so a price change **pivots** it around $(5,5)$. The old bundle stays affordable, so she can never be worse off.

- **b is true.** Her old bundle is on the new line. If her indifference curve is not tangent to the new line at that point (the typical case) she moves and reaches a higher curve. The word "may" covers the exceptions (for example perfect complements, where she does not move and utility is unchanged).
- **c is false.** X is cheaper, so with the pivot she moves **toward more X and less Y** (the pure [[Substitution Effect]]), the opposite of c.
- **d is false.** [[Slutsky Compensation]] is the change in income that lets her afford the old bundle at the new prices. Because she consumes exactly her endowment, its value is her income at any prices, so the compensation is **zero**, not positive. The whole move is a substitution effect.
- **a is false** because b is true.

> [!tip] Intuition
> Someone who neither buys nor sells has no exposure to the price: her purchasing power is unaffected. Only the relative price changes, so only substitution acts.

## Q5 — The price of Y rises and the quantity of Y rises

- a. X is a normal good and Y is an inferior good.
- b. X is an inferior good and Y is a normal good.
- c. It is possible that the utility function is Cobb-Douglas.
- d. Both a and b are correct.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

When $P_y$ rises the [[Substitution Effect]] on $Y$ is always negative. For $Y$ to rise anyway the [[Income Effect]] must be positive and larger. A price rise lowers real income, so a **positive** income effect on a price **rise** means demand falls when income falls: $Y$ is **inferior** (indeed a Giffen good). A consumer cannot treat both goods as inferior (more income has to be spent on something), so with $Y$ inferior, $X$ must be **normal**. Hence a.

- **b** is the reverse. **d** is false since b is false.
- **c is false.** For Cobb-Douglas $Y=\frac{\alpha I}{P_y}$ falls when $P_y$ rises, and there are no inferior goods.

## Q6 — A fair lottery

Shayna faces a **fair** lottery (expected payoff equals its price). Therefore:

- a. All of the answers are correct.
- b. If Shayna is risk-averse, she will not join the lottery.
- c. If Shayna enjoys risk, she will join the lottery.
- d. If Shayna is risk-averse, the larger the gap between winning and losing, the less attractive the lottery is to her.

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes; reasoned from the standard expected-utility model.
> **Answer: (a).**

- **b is true.** A risk-averse person (concave utility of wealth) prefers the **certain expected value** to a fair gamble with the same expected value, so she declines.
- **c is true.** A risk-lover (convex utility) prefers the gamble to its expected value, so she joins.
- **d is true.** The wider the spread between winning and losing (at the same expected value), the bigger the gap between $U(\text{expected wealth})$ and expected utility, so the less attractive the gamble is.

All three hold, so **a**.

## Q7 — Which statement is wrong?

- a. The real income effect is **always** equal to the substitution effect.
- b. Slutsky's compensation always increases the consumer's utility compared to the initial situation.
- c. If one good is inferior to the consumer, the other good must be normal.
- d. If the MRS between X and Y decreases as X increases, then the indifference curve is convex.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a)** is the wrong statement.

- **a is wrong.** The two effects are different in size and (for inferior goods) different in sign. They are equal only in special cases such as the Cobb-Douglas good in Q3.
- **b is right** (in the weak sense used in class): the old bundle is affordable at the Slutsky line, so the consumer is at least as well off, and strictly better off when she changes bundle.
- **c is right** for the reason in Q5: not both goods can be inferior.
- **d is right.** A diminishing MRS (slope flattening as X rises) is the definition of a convex indifference curve. See [[Marginal Rate of Substitution]].

## Q8 — Ambrose, $\sqrt{x_1}+\sqrt{x_2}$

$U(x_1,x_2)=x_1^{1/2}+x_2^{1/2}$, $P_1=\$8$, $P_2=\$1$.

- a. Ambrose will consume less $x_1$ than $x_2$.
- b. Ambrose will consume more $x_1$ than $x_2$.
- c. Ambrose will consume an equal amount.
- d. There is not enough information to determine the levels.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

The preferences are convex (diminishing MRS), so the tangency is the optimum:

$$
MRS=\frac{MU_1}{MU_2}=\frac{\tfrac{1}{2}x_1^{-1/2}}{\tfrac{1}{2}x_2^{-1/2}}=\sqrt{\frac{x_2}{x_1}}=\frac{P_1}{P_2}=8 \;\Rightarrow\; x_2 = 64\,x_1 .
$$

Whatever the income, $x_2=64x_1>x_1$ for any positive consumption, so he buys **less $x_1$ than $x_2$**. With income $m$: $8x_1+64x_1=m$, so $x_1=m/72$ and $x_2=64m/72$. (Income is not needed to answer, which rules out d.) See [[Optimal Choice]].

## Q9 — $U=X^a+Y^a$ with $a>1$

At the start $P_x=P_y$. If the price of $Y$ decreases:

- a. The consumer will consume only $Y$.
- b. The consumer will consume both $X$ and $Y$.
- c. It is possible that the level of $Y$ will not change.
- d. Only the level of $X$ will decrease.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

![[PP01_q9_nonconvex_corner.png|560]]

For $a>1$ the function is convex in $X$ and $Y$, so the indifference curves bow **away** from the origin: non-convex preferences, with the tangency being the worst point on the budget line. The optimum is a [[Corner Solution]]: spend everything on one good.

- With $P_x=P_y=P$ and income $I$, the two corners give $U=(I/P)^a$ each, an exact tie. The consumer is initially at one corner (either X only or Y only).
- When $P_y$ falls, buying only $Y$ gives $(I/P_y)^a>(I/P)^a$, strictly better than buying only X. She now consumes **only Y**.

So **a**. **b** is false (corner). **c** is false: Y rises whether she was at the X corner (Y goes from 0 up) or at the Y corner (Y becomes $I/P_y$, larger). **d** is false: X falls only if she was at the X corner, and not "only" X changes.

## Q10 — A 10% discount above 10 units

If she buys more than 10 units of X, she gets a 10% discount on each unit above 10.

- a. b + c are correct.
- b. If $0<X<10$, the slope of the budget constraint is $P_x/P_y$.
- c. If $X>10$, the slope is $0.9\,P_x/P_y$.
- d. If $X>10$, the slope is $1.1\,P_x/P_y$.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (a).**

![[PP01_q10_discount_kink.png|560]]

Slopes here are in absolute value (the line slopes down). Up to 10 units each unit of X costs $P_x$, giving slope $P_x/P_y$ (b true). Each unit **above** 10 costs $0.9\,P_x$, so the slope is $0.9\,P_x/P_y$, **flatter** (c true, d false). The line has a kink at $X=10$. The price of the first 10 units is unchanged because the discount applies only to units above 10. See [[Lec_01-Budget Constraint]]. Hence **a**.

---

# Part B: open questions (official solution)

## Q11 — Sharon: university or full-time work (35 points)

Sharon has 18 hours a day to split between leisure $L$ and work $H$ (so $H=18-L$). **Option 1:** attend university, which limits her to **at most 4 hours** of work. **Option 2:** no university, no restriction on hours. Utility $U(L,Y)=L^2Y$ with $Y$ consumption bought from labour income, $P_y=1$ and hourly wage $W>0$.

> [!info] The setup in one picture
> The budget line is $Y=(18-L)W$ (income = hours worked times wage). Leisure is a good priced at the wage ([[Labor Supply]], [[Leisure]]). Option 1 adds a cap $H\le4$, that is $L\ge14$.

![[PP01_q11_leisure_cap.png|560]]

*The figure plots consumption in units of $W$, so the budget line is $Y/W=18-L$. Green is the unconstrained optimum (option 2), red the capped bundle (option 1). The green indifference curve is above the red one because option 2 gives more utility. Illustrative curve shapes; the marked points are from the official solution.*

### 11.1 — Option 1: demand for L and labor supply (9 points)

**Question.** Calculate Sharon's demand for $L$ and her labor supply $H$ as a function of $W$ for option 1 (attending university).

> [!success] Answer (official)
> $L_D=14$, $H_s=4$.

The official solution first finds the **unconstrained** optimum, then applies the cap.

> [!example] Working
> Optimality, $MRS=\frac{MU_L}{MU_Y}=\frac{2LY}{L^2}=\frac{2Y}{L}=W$, so $Y=\frac{WL}{2}$.
>
> Budget constraint $Y=(18-L)W$. Substituting:
>
> $$
> \frac{WL}{2}=(18-L)W \;\Rightarrow\; 3L=36 \;\Rightarrow\; L_D=12,\quad H_s=6 .
> $$
>
> She wants to work 6 hours, but university allows only 4. Her best feasible choice is the maximum allowed: $H_s=4$, $L_D=14$.

> [!tip] Intuition
> Because 6 hours is better than 4 and utility is smooth, the constraint binds and she works as many hours as allowed. Notice that neither $L$ nor $H$ depends on $W$: with $U=L^2Y$ the substitution and income effects of a wage change exactly cancel, so labor supply is a vertical line. The question says "as a function of $W$" but the answer is constant.

### 11.2 — Option 2: demand for L and labor supply (8 points)

**Question.** The same for option 2 (not attending university).

> [!success] Answer (official)
> $L_D=12$, $H_s=6$.

Without the cap, the unconstrained solution from 11.1 applies: $MRS=W$ gives $Y=WL/2$, and combined with the budget line, $L=12$, $H=6$. Her income is $Y=6W$.

### 11.3 — Which option does she choose? (8 points)

**Question.** Which option would Sharon choose? Explain.

> [!success] Answer (official, as printed)
> The official text computes $U_1=14^2\cdot4W=784W$ and $U_2=12^2\cdot6W=864W$ and concludes "She will prefer Option 1".

> [!warning] The official conclusion contradicts its own numbers
> $864W>784W$, so option 2 (full-time, no university) gives **higher** utility. The printed "Option 1" looks like a slip. My check: $14^2\cdot 4=196\cdot4=784$ and $12^2\cdot6=144\cdot6=864$. The next part (11.4) also only makes sense if Sharon **prefers option 2** (otherwise no allowance would be needed to make her "indifferent"). The official answer is kept as printed above, and the utilities it computes show option 2 is preferred.

> [!example] Working
> $$
> U_1=L^2Y=14^2\cdot(4W)=784W,\qquad U_2=L^2Y=12^2\cdot(6W)=864W .
> $$
>
> The cap forces her to give up the optimum, so option 1 is worse for any $W>0$.

### 11.4 — The allowance that makes her indifferent (5 points)

**Question.** Her parents offer an allowance $W_0$ not tied to labor income. With $W=\$100$, what is the minimum $W_0$ that makes her indifferent between attending and not attending?

> [!success] Answer (official)
> $W_0\approx 40.82$.

> [!example] Working
> Option 2: $U_2=864W=864\cdot100=86{,}400$.
>
> Option 1 with the allowance: she still works 4 hours, so $Y=4W+W_0=400+W_0$ and
>
> $$
> U_1=14^2\,(400+W_0)=78{,}400+196\,W_0 .
> $$
>
> Set $U_1=U_2$: $86{,}400=78{,}400+196\,W_0$, so $W_0=\frac{8{,}000}{196}\approx 40.82$.

> [!tip] Check that the cap still binds
> With the allowance her unconstrained leisure rises to $L=12+\frac{2W_0}{3W}\approx12.27$ (about 5.7 hours of work), still above 4 hours, so the cap still binds and she keeps $L=14$. Using $L=14$ is therefore right.

### 11.5 — Bonus (5 points): the coach changes her utility

**Question.** Ignore 11.4. After a coach, utility becomes $U=L^2Y+L^2$. How does this change her optimal hours $H$ in both options?

> [!success] Answer (official)
> $L_D=12+\dfrac{2}{3W}$, $H_s=6-\dfrac{2}{3W}$. **Option 2:** she works less than before. **Option 1:** if $W>\tfrac13$ she works 4 hours (the cap binds); if $W<\tfrac13$ she works less than 4 hours.

> [!warning] Typo in the official working
> The official page writes the new utility as $L^2Y-L^2$ on one line, but the question (and every step of the working, whose marginal utility is $2LY+2L$) uses $+L^2$. I followed the **question and the working** ($+L^2$) and re-derived the official result.

> [!example] Working
> Budget line: $Y=(18-L)W$.
>
> $$
> MRS=\frac{2LY+2L}{L^2}=W \;\Rightarrow\; LW=2Y+2 \;\Rightarrow\; Y=\frac{LW}{2}-1 .
> $$
>
> Substitute into the budget line:
>
> $$
> \frac{LW}{2}-1=(18-L)W \;\Rightarrow\; LW-2=36W-2LW \;\Rightarrow\; L_D=12+\frac{2}{3W} .
> $$
>
> So $H_s=18-L_D=6-\dfrac{2}{3W}$, which is **below 6** for every $W>0$: option 2 she works less than before.
>
> Option 1: the cap binds when the desired hours exceed 4:
>
> $$
> 6-\frac{2}{3W}>4 \;\Rightarrow\; \frac{2}{3W}<2 \;\Rightarrow\; W>\frac13 .
> $$
>
> For $W>\frac13$ she works the maximum 4 hours; for $W<\frac13$ she wants fewer than 4 hours, so she works $6-\frac{2}{3W}$.

> [!note] My addition, not in the official solution
> The extra $+L^2$ term is a fixed bonus from leisure, so the lower the wage, the less she works, and labor supply now **rises with the wage** (no longer vertical). The formula $H_s=6-\frac{2}{3W}$ is non-negative only for $W\ge\frac19$; for lower wages she would not work at all (a corner at $H=0$).

---

## Q12 — Yoni: consumption across two periods (30 points)

Yoni splits his income between consumption now $C_1$ and later $C_2$. Both are **normal** goods. Initially his income in period 1 is **zero** and in period 2 is $I_0$. He **prefers the future** over the present and has convex utility. The interest rate equals the inflation rate initially (so the **real** interest rate is zero). See [[Lec_09-Intertemporal Choice]].

### 12.1 — Budget constraint and optimal bundle (6 points)

**Question.** Draw the budget constraint and the optimal bundle. Mark $C_1$, $C_2$, the intercepts and the slope.

> [!success] Answer (official diagram, redrawn)
> Budget line from $(0,I_0)$ to $(I_0,0)$, slope $-1$, with the optimum $A$ on it **above the $C_1=C_2$ line** (more $C_2$ than $C_1$).

![[PP01_q12_1_budget_optimum.png|560]]

*Redrawn from the official slide. The curve is an illustrative indifference curve, not a computed one.*

Since the real interest rate is zero, giving up one unit of $C_1$ buys one unit of $C_2$: the slope is $-1$. His endowment is $(0,I_0)$ (all income in period 2), so the intercepts are $(0,I_0)$ on the $C_2$ axis and $(I_0,0)$ on the $C_1$ axis (what he could consume now by borrowing against all his future income). Because he **prefers the future**, the optimum sits where $C_2>C_1$, above the 45-degree line.

### 12.2 — His savings (3 points)

**Question.** Are Yoni's savings positive, negative or zero?

> [!success] Answer (official)
> **Negative.** Savings $=I_1-C_1<0$.

His first-period income is zero but $C_1>0$ at the optimum, so he is **borrowing** in period 1: $I_1-C_1=0-C_1<0$.

### 12.3 — Inflation rises: effect on utility and range of the new bundle (5 points)

**Question.** What happens to Yoni's utility if inflation rises? Point out the range of the new bundle.

> [!success] Answer (official)
> His utility **rises for sure**: the new bundle is on a higher indifference curve. The new bundle $B$ lies on the new, flatter budget line; $C_1$ rises, and the effect on $C_2$ is unclear (the table shows "?").

Higher inflation at an unchanged nominal rate **lowers the real interest rate**. The budget line pivots around the endowment $(0,I_0)$ and becomes **flatter**: borrowing against future income is cheaper. His old bundle is still affordable (it lies on the old line, below the new one), so he cannot be worse off, and since he is a borrower he is strictly better off.

> [!example] Decomposing the move
> | Effect | $C_1$ | $C_2$ |
> |---|---|---|
> | Substitution (the real rate falls, present consumption is cheaper) | up | down |
> | Real income effect (richer, both goods normal) | up | up |
> | New point $B$ | **up** | **?** |
>
> $C_1$ rises in both effects; for $C_2$ they pull in opposite directions, so it is ambiguous.

> [!note] Range of B (reading of the official diagram)
> The official diagram shades a region along the new budget line. In words: $B$ is on the **new line, to the right of $A$'s $C_1$** (more present consumption), with $C_2$ either higher or lower than at $A$.

### 12.4 — Slutsky compensation, new bundle and effects (6 points)

**Question.** Show in a new graph Slutsky compensation due to the change in 12.3, point out the new bundle, and the substitution and real income effects.

> [!success] Answer (official diagram, redrawn)
> Draw the Slutsky line through $A$ parallel to the new budget line. $A\to C$ is the **substitution effect**; $C\to B$ is the **income effect**.

![[PP01_q12_4_slutsky_inflation.png|560]]

*Redrawn from the official slide with illustrative positions (the official figure also has no numbers). Red: old line through $A$; green: new budget line with bundle $B$; navy: the Slutsky line through $A$ with the new slope, touching the indifference curve at $C$.*

[[Slutsky Compensation]] keeps the old bundle $A$ just affordable at the new relative price, so the navy line goes through $A$ with the new, flatter slope. Her best point on it, $C$, shows the pure [[Substitution Effect]]: more $C_1$, less $C_2$. Moving out to the actual new budget line is the [[Income Effect]], $C\to B$: both rise.

### 12.5 — War: equal incomes, indifferent between present and future (6 points)

**Question.** Ignore 12.1 to 12.4. Because of the war, (1) his present income becomes **equal** to his future income, and (2) he becomes **indifferent** between present and future consumption. Draw the budget constraint and optimal bundle. Mark the optimal $C_1,C_2$, intercepts and slope.

> [!success] Answer (official diagram)
> Endowment and optimum $A=(I_0,I_0)$ on the $C_1=C_2$ line. Intercepts $(2I_0,0)$ and $(0,2I_0)$. Slope $-1$.

Both periods now yield $I_0$, so the endowment is $(I_0,I_0)$ and, with the real interest rate still zero, the line through it with slope $-1$ meets the axes at $2I_0$. Indifference between present and future means he values the two equally at the margin, so the optimum is the equal-consumption point $C_1=C_2=I_0$, i.e. no borrowing and no saving.

> [!tip] Intuition
> If utility treats the two periods as interchangeable at a one-for-one rate (slope $-1$, matching the budget line), any bundle on the line is as good. The official answer picks the symmetric point $A$, which is also his endowment.

### 12.6 — Only the borrowing rate falls (4 points)

**Question.** Continuing from 12.5: only the interest rate for **borrowers** decreased. What happens to $C_1$ and $C_2$? Explain.

> [!success] Answer (official)
> There are higher-utility points **to the right of the kink**. He increases present consumption and reduces future consumption: $C_1$ **up**, $C_2$ **down**.

![[PP01_q12_6_borrow_rate_falls.png|560]]

*Redrawn from the official slide. The kink is at $A=(I_0,I_0)$: to the right (borrowing) the line is flatter; to the left (saving) it is unchanged.*

Borrowers are on the right of the endowment, saver on the left, so a lower borrowing rate flattens only the **right-hand branch**, producing a kink at $A$. On the right, one unit of future consumption now buys more than one unit of present consumption, which beats his one-for-one indifference. He borrows and moves along the flatter branch to $B$: $C_1$ up, $C_2$ down. The left branch (saving) is unchanged, so he does not want to move there.

---

## Recap table

| Question | Tool | Answer |
|---|---|---|
| Q1 | Monotonic transformation, bads | **a** (b and c true) |
| Q2 | Concave utility, income effect, order-preserving transform | **a** (only statement 3) |
| Q3 | Slutsky decomposition, Cobb-Douglas | **a** (X unchanged, so effects cancel); c also fits Slutsky |
| Q4 | Pivot on endowment | **b** (utility may rise; compensation is zero) |
| Q5 | Giffen goods | **a** (X normal, Y inferior) |
| Q6 | Risk attitudes | **a** (all correct) |
| Q7 | Slutsky true/false | **a** is the wrong statement |
| Q8 | MRS $=P_1/P_2$ | **a** ($x_2=64x_1$) |
| Q9 | Non-convex corner | **a** (only Y) |
| Q10 | Kinked budget line | **a** (b + c) |
| 11.1 | Cap on hours | $L=14$, $H=4$ |
| 11.2 | Unconstrained | $L=12$, $H=6$ |
| 11.3 | Compare utilities | $784W$ versus $864W$ (official text says option 1; numbers favour option 2) |
| 11.4 | Allowance | $W_0\approx40.82$ |
| 11.5 | Bonus | $H=6-\frac{2}{3W}$; cap binds if $W>\frac13$ |
| 12.1 | Two-period budget line | Slope $-1$, intercepts $I_0$; optimum with $C_2>C_1$ |
| 12.2 | Savings | Negative (borrower) |
| 12.3 | Inflation up | Utility up; $C_1$ up, $C_2$ ambiguous |
| 12.4 | Slutsky | $A\to C$ substitution, $C\to B$ income |
| 12.5 | Symmetric case | $(I_0,I_0)$, intercepts $2I_0$, slope $-1$ |
| 12.6 | Lower borrowing rate | $C_1$ up, $C_2$ down |

## Related notes

- [[Micro-Economics I]]
- [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_07-Substitution and Income Effects]], [[Lec_08-Labor Supply]], [[Lec_09-Intertemporal Choice]]
- [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]], [[PS_07-Labor Supply]]
