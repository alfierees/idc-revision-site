---
title: "PP_02 Fruits and Tofu Multiple Choice (Undated Moed B)"
type: past-paper
status: worked-solution
exam: "Moed B (year not stated), 20 multiple-choice questions"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - micro-i
  - past-paper
  - worked-solution
  - multiple-choice
  - utility
  - slutsky
  - intertemporal-choice
aliases:
  - Micro I Moed B
  - Shany Fruits Tofu practice
  - PP02 Micro I
subject: micro-i
in_scope: true
---

# PP_02 Fruits and Tofu Multiple Choice (Undated Moed B)

> Part of: [[Micro-Economics I]]
> **Moed B** (the sitting's year is not stated on the files), Micro-Economics I, Ido Eisdorfer and Yosi Ganel
> Builds on: [[Lec_01-Budget Constraint]], [[Lec_02-Preferences]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]], [[Lec_07-Substitution and Income Effects]], [[Lec_09-Intertemporal Choice]]
> Key concepts: [[Budget Constraint]], [[Indifference Curve]], [[Marginal Rate of Substitution]], [[Perfect Complements]], [[Quasilinear Utility]], [[Optimal Choice]], [[Slutsky Compensation]], [[Hicks Compensation]], [[Income Effect]], [[Substitution Effect]]

> [!info] Source and answer key
> The question paper is the practice file "Shany, Fruits, Tofu". The official answers are the **yellow highlights** on the solution file. Moodle carries a **correction note on that solution file**: Q6 is **(a) and (d)** and Q18 is **(b)** ("according to this year"). These two corrections replace the highlights, and the two answers say so. Every other answer follows the highlights. Two other highlighted answers look doubtful (Q5 and Q17), flagged in place with my own check.

> [!success] Answer provenance
> All 20 questions have an official answer. **No AI-solved questions.** The working shown is mine, expanded from a key that only gives the letter.

## What this paper tests

Twenty multiple-choice questions across the whole course. Roughly:

| Block | Questions | Core idea |
|---|---|---|
| Budget set and preference shapes | Q1, Q2, Q3, Q8, Q9, Q16, Q17, Q20 | Read the utility function as a shape: perfect substitutes, perfect complements, concave preferences, MRS |
| Optimal choice | Q4, Q10 | Tangency rule, and quasilinear utility |
| Price and income effects | Q5, Q7, Q14, Q15 | Hicks versus Slutsky, independent goods, endowment income |
| Endowments and exchange | Q12 | Equal proportional price changes leave the budget unchanged |
| Intertemporal choice | Q6, Q11, Q13, Q18, Q19 | Borrowers, lenders, interest and inflation, Cobb-Douglas across time |

> [!tip] Intuition
> Most traps are about **what is held fixed**. Hicks keeps utility, Slutsky keeps the original bundle affordable. A price cut helps you only if you are a net buyer of that good. A quasilinear consumer spends extra income only on the linear good.

---

## Q1 — Shany, fruits and tofu

Shany is a health addict who eats only fruits and tofu. A fruit costs 4 dollars and has 200 calories, tofu costs 4 dollars and has 160 calories. She has at most 44 dollars and eats 1600 calories a day. Which is true?

a) Shany can consume only fruits per day.
b) Shany will always have extra change of money for every basket she consumes.
c) If Shany consumes only fruits per day she will have more change than if she consumes only tofu.
d) All the above.

> [!success] Official answer: d) all the above

> [!example] Working
> Calories give the constraint $200f + 160t = 1600$, which simplifies to $5f + 4t = 40$.
>
> - **Only fruits**: $f = 8$, $t = 0$. Cost $8 \times 4 = 32$, change $44 - 32 = 12$.
> - **Only tofu**: $t = 10$, $f = 0$. Cost $10 \times 4 = 40$, change $44 - 40 = 4$.
> - **Any basket on the calorie line**: with equal prices the cost is $4(f+t)$. From $5f + 4t = 40$ we get $f + t = 10 - f/4 \le 10$, so cost is at most 40 and change is at least 4, never zero.

So (a) is true (8 fruits is affordable), (b) is true (change is always at least 4), (c) is true (12 against 4). All three hold, so (d).

> [!tip] Intuition
> Fruits give more calories per dollar than tofu, so hitting the calorie target with fruits costs less. The two goods are perfect substitutes **for the calorie target**, and the cheapest route is the more calorie-dense good. See [[Budget Constraint]].

---

## Q2 — Mr E's weighted assignments

The first assignment grade $x$ is weighted four times the second $y$. A student's indifference curve will be:

a) a down trended concave line with slope 4
b) an up trended linear line with slope 1/4
c) a down trended linear line with slope 1/4
d) a down trended linear line with slope 4

> [!success] Official answer: d) a down trended linear line with slope 4

> [!example] Working
> A weighted grade is $U = 4x + y$. This is the utility of [[Perfect Substitutes]].
>
> Along an [[Indifference Curve]] $4x + y = \bar U$, so $y = \bar U - 4x$: a straight line sloping down with slope $-4$ (steepness 4).

- (a) is wrong because the curve is a straight line, not concave.
- (b) is wrong because it slopes up. More of $x$ must be traded for less $y$ to stay equally well off.
- (c) is wrong because the slope is 4, not 1/4. One extra point of $x$ is worth four points of $y$. The slope 1/4 would describe the case where $y$ is the heavier-weighted grade.

The [[Marginal Rate of Substitution]] is 4 everywhere. See [[Lec_03-Utility and MRS]].

---

## Q3 — Silvia's max utility

Silvia has $U = \max(5x + 3y,\ 3x + 5y)$.

a) Her indifference curve is represented with two down trended linear lines.
b) It is possible that Silvia consumes both $x$ and $y$.
c) $x$ and $y$ are substitute goods.
d) a + b is correct.

> [!success] Official answer: d) a + b

> [!example] Working
> The set where $\max(5x+3y,\ 3x+5y) \le k$ lies under **both** lines $5x + 3y = k$ and $3x + 5y = k$. Its boundary, the indifference curve, is the lower of the two lines. The curve is therefore **two straight segments** meeting at the kink on the 45 degree line, as in the figure.

![[PP02_q3_max_utility_ic.png|520]]

The segments slope down, so (a) holds. The curve is bowed **away** from the origin (non-convex): the kink points outward.

(b): consuming both goods is possible, since any bundle with positive $x$ and $y$ is a feasible bundle with a utility level. The official key accepts it.

> [!warning] Check on (b) and (c)
> With non-convex preferences the **optimal** bundle is at a corner (all $x$ or all $y$), because an interior mix scores below a corner: for example $(1,1)$ gives 8 while $(2,0)$ gives 10. Read literally, "consumes both" is then not an optimal choice. The official key still counts (b) as true, so read it as "a bundle containing both goods exists". (c) is not accepted by the key: these preferences are not the straight-line indifference curves of [[Perfect Substitutes]] that "substitutes" refers to. I keep the official answer.

---

## Q4 — Hadas, square roots

Hadas has 100 dollars, $P_X = P_Y = 20$, and $U = X^{0.5} + Y^{0.5}$.

a) Hadas will buy equal amounts of $X$ and $Y$.
b) only $X$.
c) only $Y$.
d) None of the above.

> [!success] Official answer: a) equal amounts of X and Y

> [!example] Working
> $MU_X = \tfrac{1}{2}X^{-0.5}$ and $MU_Y = \tfrac{1}{2}Y^{-0.5}$, so
>
> $$MRS = \frac{MU_X}{MU_Y} = \sqrt{\frac{Y}{X}}$$
>
> Prices are equal, so the tangency $MRS = P_X/P_Y = 1$ gives $Y = X$. With income 100: $20X + 20Y = 100$, so $X = Y = 2.5$.

These preferences are convex (diminishing MRS), so the tangency is a maximum and there is no corner solution. See [[Optimal Choice]] and [[Lec_04-Optimal Bundle]].

---

## Q5 — Cobb-Douglas, price of Y rises

$U = XY$. The price of $Y$ **increased**. The conclusion is:

a) the substitution effect on $X$ < the real income effect on $X$
b) the HICKS substitution effect > the SLUTSKY substitution effect in absolute values
c) real income effect on $Y$ = the substitution effect on $Y$
d) None of the above

> [!success] Official answer: b) Hicks substitution effect > Slutsky substitution effect in absolute values

> [!example] Working with illustrative numbers
> Take $P_X = 1$, $P_Y$ rising from 1 to 2, income 100. Cobb-Douglas demand is $X = I/(2P_X)$, $Y = I/(2P_Y)$.
>
> - Original bundle $(50, 50)$, utility 2500. New bundle after the rise: $X = 50$, $Y = 25$.
> - **Slutsky**: income that keeps $(50, 50)$ affordable is $150$. Then $X = 75$, $Y = 37.5$. Substitution effect on $Y$ is $-12.5$.
> - **Hicks**: income that keeps utility at 2500 gives $X \approx 70.7$, $Y \approx 35.4$. Substitution effect on $Y$ is $\approx -14.6$.

For the good whose price changed, the Hicks substitution effect is larger in absolute value than the Slutsky one, so (b) is true. The reason: the [[Slutsky Compensation]] hands over the cost of the old bundle, which is more than the [[Hicks Compensation]] needs, because the consumer can reach the old utility by re-optimising. See [[Lec_07-Substitution and Income Effects]].

- (a) is wrong: demand for $X$ does not move with $P_Y$ for Cobb-Douglas, so the total effect on $X$ is zero and the substitution and income effects on $X$ are **equal and opposite**, not smaller.
- (c) is wrong under the Hicks split: $|SE_Y| \approx 14.6$ against $|IE_Y| \approx 10.4$.

> [!warning] Decomposition used by the key
> Under the **Slutsky** split, (c) would also be true ($-12.5$ each), so the key only works if the paper means the **Hicks** decomposition. This matches Q14, which also works under Hicks. I keep the official (b).

---

## Q6 — Borrower and inflation

It is known that $I_1 = I_2$, the inflation rate is 0.1, $r = 0.1$ and the consumer is a borrower ($I_1 < C_1$). The inflation rate **increases** and the consumer stays a borrower.

a) Consumer's utility has increased.
b) The consumer's time preference has changed.
c) Consumer's utility has decreased.
d) $C_1$ can be a normal or inferior good.

> [!success] Official answer (as corrected by Moodle): a) and d)
> The highlighted key shows (c). The Moodle correction note on the solution file overrides it: **the correct answer is (a) + (d)**. Corrected official answer, not a highlight.

> [!example] Working
> A borrower repays in future dollars. If inflation rises while the nominal rate stays at 0.1, the **real interest rate falls**: the real value of the debt shrinks. With the nominal rate equal to inflation (0.1 each) the real rate started near zero, and after the rise it is negative.
>
> A lower real rate is a cheaper loan, so the budget set expands for a borrower. They remain a borrower, so they can reach a higher [[Indifference Curve]]. Utility **increases**: (a) is true.

- (b) is wrong: time preference is a taste. A change in the interest rate or inflation moves the budget line, not the indifference map.
- (c) is wrong, as the correction states.
- (d) is true: a falling real rate moves $C_1$ through a substitution effect (now cheaper, so up) and an income effect (the borrower is richer). The sign of the income effect depends on whether $C_1$ is normal or inferior, and both are consistent with staying a borrower.

> [!tip] Intuition
> Inflation helps debtors and hurts savers. The highlight (c) is the saver's answer. See [[Lec_09-Intertemporal Choice]].

> [!warning] Assumption
> I read $r$ as the nominal rate, so the real rate is the nominal rate minus inflation. The correction is what settles the answer.

---

## Q7 — Y does not move when price of X falls

It is known that if the price of $X$ decreases, the quantity of $Y$ does not change. The conclusion:

a) $X$ is a normal good and the real income effect on $Y$ is unknown.
b) $Y$ and $X$ are independent goods.
c) $Y$ and $X$ are complementary goods.
d) $Y$ and $X$ are substitute goods.

> [!success] Official answer: b) independent goods

> [!example] Working
> Goods are classified by the sign of the cross-price response of demand:
>
> - If a cheaper $X$ **raises** $Y$: complements.
> - If a cheaper $X$ **lowers** $Y$: substitutes.
> - If $Y$ is **unchanged**: independent.

(a) is not implied: the observation is about the cross-price response, which says nothing about whether $X$ is normal. (c) and (d) each need a non-zero change in $Y$. The Cobb-Douglas $U = X^aY^b$ is the standard example: the substitution and income effects on $Y$ cancel exactly.

---

## Q8 — Yamit's indifference between corners

Yamit has 200 dollars, $P_X = 10$, $P_Y = 20$, and $U = X^2/a + Y^2$. She is indifferent between consuming only $X$ or only $Y$. What is $a$?

a) $a = 2$
b) $a = 8$
c) any $a > 1$
d) $a = 4$

> [!success] Official answer: d) a = 4

> [!example] Working
> - Only $X$: $X = 200/10 = 20$, utility $20^2/a = 400/a$.
> - Only $Y$: $Y = 200/20 = 10$, utility $10^2 = 100$.
>
> Indifference means $400/a = 100$, so $a = 4$.

The squares make the indifference curves bow away from the origin (concave preferences), so the optimum is at a corner and comparing the two corners is the right method. Check the others: $a=2$ gives 200 for $X$ only, $a=8$ gives 50. See [[Lec_04-Optimal Bundle]].

---

## Q9 — Concave preferences

If two goods are both desirable and preferences are **concave**, then:

a) indifference curves must be straight lines
b) if two bundles are indifferent, then an average of the two bundles is worse than either one
c) the marginal rate of substitution is constant along indifference curves
d) None of the above.

> [!success] Official answer: b)

> [!example] Reasoning
> Convex preferences like averages: the mix of two indifferent bundles is at least as good. **Concave** preferences are the opposite: the average of two indifferent bundles is **strictly worse**. That is (b).

- (a) is wrong: straight lines are the borderline case (weakly convex and weakly concave), but concave preferences are usually curved, as in Q3.
- (c) is wrong: constant MRS belongs to straight-line curves. See [[Lec_02-Preferences]] and [[Marginal Rate of Substitution]].

---

## Q10 — Ambrose, nuts and berries

$U(x_1, x_2) = 4x_1^{1/2} + x_2$, price of nuts 1, price of berries 4, income 108. If income rises to 216, what is the **change in nuts**?

a) 128 b) 0 c) 64 d) 32

> [!success] Official answer: b) 0

> [!example] Working
> This is [[Quasilinear Utility]]. $MRS = \dfrac{2x_1^{-1/2}}{1} = \dfrac{2}{\sqrt{x_1}}$.
>
> Tangency: $\dfrac{2}{\sqrt{x_1}} = \dfrac{P_1}{P_2} = \dfrac{1}{4}$, so $\sqrt{x_1} = 8$ and $x_1 = 64$.
>
> - Income 108: spend $64$ on nuts, $x_2 = (108 - 64)/4 = 11$.
> - Income 216: nuts are still $64$, $x_2 = (216 - 64)/4 = 38$.

The MRS depends on $x_1$ only, so the tangency fixes $x_1$ regardless of income. All the extra income goes to berries. Nuts change by **0**.

![[PP02_q10_quasilinear_income_shift.png|520]]

---

## Q11 — Patience, consumption half as large

$U(c_1, c_2) = c_1^{1/2} + 0.87\,c_2^{1/2}$. At what interest rate does she choose $c_1$ equal to half of $c_2$? (Choose the closest answer.)

a) 0.625 b) 0.315 c) 0.152 d) 0.233

> [!success] Official answer: a) 0.625

> [!example] Working
> The price of period 1 consumption in terms of period 2 is $1 + r$, so the optimum satisfies $MRS = 1 + r$.
>
> $$MRS = \frac{\tfrac{1}{2}c_1^{-1/2}}{0.87 \cdot \tfrac{1}{2}c_2^{-1/2}} = \frac{1}{0.87}\sqrt{\frac{c_2}{c_1}}$$
>
> With $c_1 = \tfrac{1}{2}c_2$, $c_2/c_1 = 2$, so $MRS = \sqrt{2}/0.87 = 1.4142/0.87 \approx 1.6256$.
>
> Then $1 + r = 1.6256$ and $r \approx 0.6256$, closest to **0.625**.

---

## Q12 — Fanny, an equal fall in both prices

Fanny's income is an endowment of 24 units of $x$ and 24 of $y$, tradable at market prices. Both prices are 10. She plans to consume 26 of $x$ and 22 of $y$. If both prices fall to 4:

a) she is better off
b) she is worse off
c) she is neither better off nor worse off
d) we cannot tell unless we know her utility function

> [!success] Official answer: c) neither better off nor worse off

> [!example] Working
> Her budget equation is $P_x x + P_y y = 24P_x + 24P_y$. With equal prices this reduces to $x + y = 48$, whatever the common price is.
>
> - At 10 and 10: $10x + 10y = 480$, so $x + y = 48$.
> - At 4 and 4: $4x + 4y = 192$, so $x + y = 48$.
>
> The planned bundle $(26, 22)$ sums to 48, so it is on the line in both cases.

The budget set is **identical**. Only relative prices matter, and they have not changed. Her optimal choice and her utility are unchanged, with no need to know her utility function. See [[Budget Constraint]].

![[PP02_q12_unchanged_budget.png|520]]

---

## Q13 — Molly, Cobb-Douglas over two periods

Molly has income 400 in period 1 and 800 in period 2. $U = c_1^{a}c_2^{1-a}$ with $a = 0.5$, and the interest rate is zero. If period 1 income doubles and period 2 stays, her period 1 consumption would:

a) stay constant b) increase by 400 c) increase by 160 d) increase by 200

> [!success] Official answer: d) increase by 200

> [!example] Working
> Cobb-Douglas spends the share $a$ of lifetime wealth on $c_1$. With $r = 0$, wealth is $I_1 + I_2$.
>
> - Before: wealth $400 + 800 = 1200$, $c_1 = 0.5 \times 1200 = 600$.
> - After: wealth $800 + 800 = 1600$, $c_1 = 0.5 \times 1600 = 800$.
>
> The change is $800 - 600 = $ **200**.

Half of every extra dollar of wealth goes to each period, so doubling by 400 raises $c_1$ by 200.

---

## Q14 — Cobb-Douglas, price of X rises

$U = XY$. The price of $X$ **increases**. The conclusion:

a) the substitution effect on $X$ = real income effect on $X$
b) HICKS substitution effect > SLUTSKY substitution effect in absolute values
c) real income effect on $Y$ = the substitution effect on $Y$
d) more than one answer is correct

> [!success] Official answer: d) more than one answer is correct

> [!example] Working with illustrative numbers
> Take $P_Y = 1$, $P_X$ rising from 1 to 2, income 100. Original bundle $(50, 50)$, new bundle $(25, 50)$.
>
> - **Hicks**: utility held at 2500 gives $X \approx 35.4$, $Y \approx 70.7$. On $X$: substitution $\approx -14.6$, income $\approx -10.4$. On $Y$: substitution $\approx +20.7$, income $\approx -20.7$.
> - **Slutsky**: income 150 gives $X = 37.5$, $Y = 75$. Substitution effect on $X$ is $-12.5$, smaller in absolute value than Hicks's 14.6.

- (b) is true: for the good whose price changed, Hicks is larger in absolute value, as in Q5.
- (c) is true in absolute value (20.7 against 20.7) under Hicks: $Y$ does not respond in total, so the two effects cancel.
- (a) is not true under Hicks (14.6 against 10.4).

So (b) and (c) are both true, hence (d). The same Hicks reading as Q5 makes the two answers consistent.

> [!warning] Reading used
> The key calls (d) but does not say which statements it counts. Under the Hicks split my check gives (b) and (c). Under the Slutsky split it gives (a) and (b). Either way two statements hold, so (d) is safe.

---

## Q15 — Endowment (10, 10), price of Y falls

A consumer has the endowment $(X = 10, Y = 10)$ and can sell goods and buy new quantities. If $P_Y$ decreases:

a) and in his original optimal basket he bought $X$ and sold $Y$, his utility will increase
b) and in his original optimal basket he bought $X$ and sold $Y$, it is not possible that he will still buy $X$ and sell $Y$
c) and in his original optimal basket he sold $X$ and bought $Y$, his utility will increase
d) none of the above

> [!success] Official answer: c)

> [!example] Reasoning
> A price change raises welfare for a **net buyer** of the good and lowers it for a **net seller**, because the endowment is worth more or less.
>
> - A fall in $P_Y$ makes the endowment worth less. A net **seller** of $Y$ (case a) can no longer afford the old bundle: the old bundle is out of reach and utility **falls**. So (a) is false.
> - A net **buyer** of $Y$ (case c) finds the old bundle cheaper and still affordable, so utility **rises**. (c) is true.
> - (b) is false: a seller of $Y$ may stay a seller, with a lower utility. A small price cut does not force him to switch.

See [[Lec_07-Substitution and Income Effects]] on the income effect from an endowment.

---

## Q16 — Three statements about MRS

1. If $U = XY$ and $MRS > P_X/P_Y$, the consumer must increase $X$ and decrease $Y$ to reach the optimum.
2. If $U = \min(X/2, Y)$ then $MRS = 0.5$.
3. If $U = aX + bY$ then it is not possible that $MRS > P_X/P_Y$ at the optimal point.

a) Only 1 b) Only 1 + 3 c) Only 3 d) Only 1 + 2

> [!success] Official answer: a) only statement 1

> [!example] Working
> 1. **True.** $MRS = Y/X$ is the value of $X$ in terms of $Y$. If it exceeds the price ratio, $X$ is worth more than it costs, so buy more $X$ and less $Y$ until the MRS falls to $P_X/P_Y$.
> 2. **False.** For perfect complements the MRS is undefined at the kink, zero on the flat segment and infinite on the vertical one. It is never 0.5. The 0.5 is the ratio of the goods at the kink, not an MRS.
> 3. **False.** With perfect substitutes the MRS is the constant $a/b$. If $a/b > P_X/P_Y$ the consumer spends everything on $X$, a corner, and at that optimum the MRS **is** greater than the price ratio. See [[Perfect Substitutes]] and [[Marginal Rate of Substitution]].

---

## Q17 — Two consumers, two utility functions

Consumer 1: $U_1 = \min(aX, bY)$. Consumer 2: $U_2 = X^aY^b$.

a) For consumer 1 the goods are independent and for consumer 2 they are complementary.
b) For consumer 1 the goods are normal and for consumer 2 the goods are neutral.
c) For consumer 1 the goods are substitutive and for consumer 2 the goods are complementary.
d) None of the above.

> [!success] Official answer: a) as highlighted

> [!warning] My check disagrees with the highlight
> The textbook classification runs the other way round:
>
> - $U_1 = \min(aX, bY)$ is [[Perfect Complements]]: a rise in $P_X$ lowers the quantity of **both** goods, so they are complements.
> - $U_2 = X^aY^b$ is Cobb-Douglas: the demand for $Y$ does not depend on $P_X$, so the goods are **independent** (the key's own Q7 treats this case as independent).
>
> That would make the statement in (a) reversed, and my answer would be (d). The key highlights (a) and Moodle's correction note does not list Q17, so (a) stays as the official answer. It may be that the paper's labels are swapped by a typo. Treat it with caution.

---

## Q18 — Which statement is correct?

a) For a present-lover consumer, savings are always negative.
b) Slutsky's compensation > Hicks compensation.
c) A rational consumer never changes his preferences.
d) None of the above.

> [!success] Official answer (as corrected by Moodle): b)
> The highlighted key shows (d). The Moodle correction note says **answer (b) is correct (according to this year)**. Corrected official answer, not the highlight.

> [!example] Working
> After a price rise, [[Slutsky Compensation]] gives enough income to buy the **original bundle**. [[Hicks Compensation]] gives only enough to reach the **original indifference curve**. The original bundle lies on that curve, so affording it is at least as good as the curve: Slutsky compensation is at least Hicks compensation, and **strictly larger** unless the indifference curve is kinked at the bundle (perfect complements). That is (b).

- (a) is wrong: a present-lover leans towards consuming now, but if income is large and the interest rate high they may still save. "Always negative" is too strong.
- (c) is wrong: rationality means consistent choice, not fixed tastes. Preferences can change over time.

> [!tip] Intuition
> Slutsky is the more generous compensation. The "this year" in the note signals that the course may have taught otherwise before, so use the corrected answer. See [[Lec_07-Substitution and Income Effects]].

---

## Q19 — The future lover

The future-lover consumer will:

a) always save money for every interest rate and income
b) definitely borrow money if he has only income in the future
c) consume more in the future than in the present
d) more than one answer is correct

> [!success] Official answer: b)

> [!example] Reasoning
> A future-lover has an indifference map that puts weight on both periods. With **zero income now**, the only way to consume anything in period 1 is to **borrow** against future income. A smooth preference for both periods demands positive consumption in both, so he borrows (the key's reading).

- (a) is wrong: "always" fails, because with no current income he cannot save.
- (c) is not guaranteed: it depends on the interest rate and the income stream, so it need not hold for every case.
- (d) is wrong because only (b) is accepted.

> [!warning] My caveat on (b)
> "Definitely borrow" holds only if his preferences need positive consumption now (an interior solution). A consumer so extreme that he consumes nothing now would neither borrow nor save. I keep the official (b). See [[Lec_09-Intertemporal Choice]].

---

## Q20 — Engel curve for a minimum utility function

For a minimum (Leontief) utility function:

a) the Engel curve is horizontal
b) the Engel curve is vertical
c) the Engel curve is a linear uptrend line
d) the Engel curve is a linear downtrend line

> [!success] Official answer: c) a linear uptrend line

> [!example] Working
> With $U = \min(aX, bY)$ the consumer buys at the kink $aX = bY$. Substituting into the budget: $X = I/(P_X + \tfrac{a}{b}P_Y)$. Demand is a **constant multiple of income**: a straight line through the origin, sloping up.

The Engel curve plots quantity against income. Horizontal would mean demand ignores income, and vertical would be impossible for an income-normal good. See [[Perfect Complements]].

![[PP02_q20_leontief_engel.png|520]]

---

## Answer recap

| Q | Answer | Source | Idea |
|---|---|---|---|
| 1 | d | official | Calorie line gives change of at least 4 |
| 2 | d | official | $U = 4x + y$, slope 4 |
| 3 | d | official | max utility, kinked non-convex curves |
| 4 | a | official | Equal prices, symmetric root utility, $X = Y$ |
| 5 | b | official (check noted) | Hicks effect larger for own price |
| 6 | a + d | Moodle correction | Inflation helps a borrower |
| 7 | b | official | Zero cross response, independent goods |
| 8 | d | official | $400/a = 100$ |
| 9 | b | official | Concave: averages are worse |
| 10 | b | official | Quasilinear: income goes to berries |
| 11 | a | official | $1+r = \sqrt{2}/0.87$ |
| 12 | c | official | Budget set unchanged |
| 13 | d | official | $c_1 = 0.5 \times$ wealth |
| 14 | d | official | Hicks: statements b and c |
| 15 | c | official | Net buyer of the cheaper good gains |
| 16 | a | official | Only statement 1 |
| 17 | a | official (doubtful) | Highlight reverses the usual labels |
| 18 | b | Moodle correction | Slutsky compensation is larger |
| 19 | b | official | Zero income now means borrowing |
| 20 | c | official | Leontief Engel curve is a ray |

## Related notes

- [[Micro-Economics I]]
- [[PS_04-Optimal Choice]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]
