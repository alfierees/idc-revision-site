---
title: "Shuki Shakes and Salads: 20 Multiple Choice (2017 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro-Economics I, Semester B, Moed A (2017), multiple choice"
semester: 2
year: 1
course: "Micro-Economics I"
instructor: Ido Eisdorfer and Yosi Ganel
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - multiple-choice
  - utility
  - slutsky
  - intertemporal-choice
aliases:
  - Micro I Moed A 2017
  - Shuki Shakes Salads
  - PP03 Micro I
subject: micro-i
in_scope: true
---

# Shuki Shakes and Salads: 20 Multiple Choice (2017 Moed A)

> Part of: [[Micro-Economics I]]
> **Micro-Economics I, Semester B, Moed A (2017)**, Ido Eisdorfer and Yosi Ganel. 20 multiple-choice questions, one correct answer each (apart from a few oddly marked ones, flagged below).
> Builds on: [[Lec_01-Budget Constraint]], [[Lec_02-Preferences]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_05-Demand]], [[Lec_07-Substitution and Income Effects]], [[Lec_09-Intertemporal Choice]]
> Practice: [[PS_04-Optimal Choice]], [[PS_05-Revealed Preference, Compensation & Income and Substitution Effects]]

> [!info] Source and answers
> The solution file is the typed paper with the official answer **highlighted in green**. It has no working, so every explanation below is written to justify the highlighted option. Q3 and Q16 have more than one option highlighted; see their warnings.

> [!note] AI-solved questions
> None. Every question has an official highlighted answer. Where I disagree with a highlight (Q14 and Q16) the official answer is kept and a warning shows my check.

## What this paper tests

| Questions | Core idea |
|---|---|
| Q1, Q10, Q12 | Budget lines, optimal choice with quasilinear utility, endowment budget sets |
| Q2, Q3, Q8, Q9, Q16, Q19 | Shape of indifference curves, convexity, MRS, rationality |
| Q4, Q8 | Concave (bowed-out) utility gives a corner optimum |
| Q5, Q7, Q14, Q15, Q18 | Income and substitution effects, Slutsky versus Hicks, net buyers and sellers |
| Q6, Q11, Q13, Q18 | Intertemporal choice and the interest rate |
| Q17, Q20 | Complements versus [[Cobb-Douglas Utility]], Engel curves |

---

## Q1: Calories and budget

**Question.** Shuki consumes only shakes (price \$4, 400 calories) and salads (price \$2, 1700 calories). He spends \$40 and consumes 16,000 calories per day. Which is true?

a) Only shakes. b) At least 9 shakes and more than 6 salads. c) Only salads. d) None of the above.

> [!success] Official answer: (d)

Two conditions pin down both quantities, with $S$ shakes and $L$ salads:

$$4S + 2L = 40, \qquad 400S + 1700L = 16000$$

From the budget, $S = 10 - 0.5L$. Substituting into the calorie equation:

$$400(10 - 0.5L) + 1700L = 16000 \;\Rightarrow\; 4000 + 1500L = 16000 \;\Rightarrow\; L = 8,\; S = 6$$

Check: $4(6)+2(8)=40$ and $400(6)+1700(8)=16000$.

- (a) wrong: he buys 8 salads too. (c) wrong: he buys 6 shakes too.
- (b) wrong: 6 shakes is not "at least 9".
- So (d). See [[Budget Line]] for how a budget plus a second linear constraint fixes one point.

---

## Q2: Weighted assignments

**Question.** Mr M weights the first assignment grade $x$ as one third of the second grade $y$. A student's indifference curve will be:

a) down-sloping line, slope 3. b) up-sloping line, slope 1/3. c) down-sloping line, slope 1/3. d) down-sloping line, slope 2/3.

> [!success] Official answer: (c)

Weight $x$ at one third of $y$, so $U = \tfrac13 x + y$ (or any multiple, such as $x + 3y$). The two grades add up linearly, so they are [[Perfect Substitutes]]. An indifference curve is $y = U - \tfrac13 x$: a straight line sloping **down** with slope $-1/3$ in magnitude $1/3$.

- (a) has the weights the wrong way round (that would be $3x + y$).
- (b) slopes up, which would mean one grade is a bad.
- (d) is not any ratio of the given weights.

> [!tip] Intuition
> To lose one point of $x$ and stay equally happy, you need only a third of a point of $y$, because $x$ counts for a third as much.

---

## Q3: $U = \max(5x - 3y,\; 5y - 2x)$

**Question.** Which is true?

a) The indifference curve is two up-sloping lines. b) $x$ and $y$ are complements. c) $x$ and $y$ are substitutes. d) a + c is correct.

> [!success] Official answer: (d), a + c (options a, c and d are all highlighted)

Each branch is a line. Setting $5x - 3y = U$ gives $y = (5x - U)/3$, slope $5/3$. Setting $5y - 2x = U$ gives $y = (U + 2x)/5$, slope $2/5$. Both slope **up**, so (a) holds. The curve follows whichever branch is larger, switching where $5x - 3y = 5y - 2x$, i.e. $7x = 8y$.

![[PP03_q3_max_utility_indifference.png|520]]

Each indifference curve is an inverted V: one up-sloping piece from the horizontal axis, one from the vertical axis, meeting at the kink on the line $7x = 8y$.

Why (c): the curves are not L-shaped, so these are not complements (b is out). On each branch more of one good must be offset by more of the other good being given up in a bad-like role (on the first branch $y$ enters with a negative sign, on the second $x$ does), so the goods trade off against each other rather than being used together. The paper counts this as "substitutes", so (a) and (c) are both true and (d) is the combined answer.

> [!warning] Reading of "substitutes"
> The official solution marks a, c and d together. "Substitutes" here is the loose sense of "traded off against each other". Strictly, upward-sloping curves mean that on each branch one good is a bad. I keep the official (d).

---

## Q4: Concave utility, corner optimum

**Question.** Hadas has \$100, $P_x = 10$, $P_y = 20$, and $U = X^2/5 + Y^2$. Her optimal basket is:

a) X = 5, Y = 2.5. b) X = 2.5, Y = 5. c) X = 10. d) Y = 5.

> [!success] Official answer: (d), Y = 5

The utility function is convex in each good, so the indifference curves bow **out** (away from the origin) and the tangency point is a minimum, not a maximum. Check the tangency: $MRS = \dfrac{2X/5}{2Y} = \dfrac{X}{5Y}$, set equal to $P_x/P_y = 1/2$, giving $X = 2.5Y$. With the budget $10X + 20Y = 100$ this gives $Y = 20/9$, $X = 50/9$ and $U \approx 11.1$, which is lower than either corner.

Compare the corners:

$$X = 10,\; Y = 0: \quad U = \tfrac{100}{5} = 20 \qquad\qquad X = 0,\; Y = 5: \quad U = 25$$

![[PP03_q4_concave_corner.png|520]]

The higher indifference curve ($U = 25$) touches the budget line only at $Y = 5$.

- (a) $(5, 2.5)$ is affordable ($50 + 50 = 100$) but gives only $U = 5 + 6.25 = 11.25$.
- (b) $(2.5, 5)$ costs $25 + 100 = 125$, so it is not affordable.
- (c) $X = 10$ is a corner but gives $U = 20 < 25$.

See [[Optimal Choice]] and [[Lec_04-Optimal Bundle]] on non-convex preferences and corner solutions.

---

## Q5: $U = X^2 Y$, price of X falls

**Question.** The price of $X$ decreased. The conclusion is:

a) substitution effect on X = real income effect on X. b) Hicks substitution effect > Slutsky substitution effect in absolute value. c) real income effect on Y = substitution effect on Y. d) more than one answer is correct.

> [!success] Official answer: (c)

For $U = X^2 Y$ the demands are $X = \tfrac{2}{3}\,m/P_x$ and $Y = \tfrac{1}{3}\,m/P_y$. The demand for $Y$ does not depend on $P_x$, so the **total** change in $Y$ is zero. The total effect is the sum of the [[Substitution Effect]] and the [[Income Effect]], so the two effects on $Y$ must be equal in size and opposite in sign: after the price fall, the consumer swaps some $Y$ for the now cheaper $X$ (negative substitution effect on $Y$), and feels richer, so buys more $Y$ (positive income effect on $Y$). That is (c).

- (a) wrong: $X$ rises a lot in total; its substitution and income effects do not cancel.
- (b) wrong: after a price fall, the [[Slutsky Compensation]] leaves the consumer on a higher indifference curve than the [[Hicks Compensation]], so the Slutsky substitution effect is the larger one in absolute value.
- (d) wrong: only (c) holds.

![[PP03_q5_slutsky_vs_hicks.png|520]]

The Slutsky line (red) runs through the old bundle. The Hicks line (green) is tangent to the old indifference curve at the Hicks point, so it sits just below the Slutsky line.

> [!example] Numeric check (my own numbers, not in the source)
> Take $m = 90$, $P_y = 10$, $P_x: 10 \to 5$. Old bundle $(6, 3)$, new bundle $(12, 3)$. Slutsky substitution effect on $X$ is $+2.0$, Hicks is $+1.56$, so Slutsky is larger. Effects on $Y$: substitution $-1$, income $+1$ (Slutsky), cancelling. Effects on $X$ are $+2$ and $+4$, not equal.

---

## Q6: Inflation falls, saver becomes borrower

**Question.** Inflation = 0, $r = 0.1$, the consumer is a saver ($I_1 > C_1$). Inflation then **decreased** and the consumer became a borrower ($I_1 < C_1$).

a) Utility increased. b) Time preference changed. c) Utility decreased. d) $C_1$ can be normal or inferior.

> [!success] Official answer: (b)

Lower inflation raises the **real** interest rate, so saving becomes more rewarding. The budget line pivots around the endowment point and gets steeper. A saver facing a higher real rate keeps saving, because the old savings bundle stays affordable and the choice shifts only along the part of the line she already preferred (see [[Revealed Preference]]). So a rise in the real rate cannot turn her into a borrower.

If she nonetheless switches to borrowing, the cause cannot be the price (rate) change: her preferences between $C_1$ and $C_2$ must have changed, i.e. her **time preference** changed.

- (a) and (c): the question gives no basis to rank her utility before and after, and with changed preferences the two are not comparable.
- (d): not what the evidence says; it describes an income effect, which cannot reverse saver to borrower here.

See [[Lec_09-Intertemporal Choice]] on saver and borrower under an interest-rate change.

---

## Q7: Price of X falls, quantity of Y falls

**Question.** If the price of $X$ decreases, the quantity of $Y$ decreases. The conclusion is:

a) $X$ is normal and the real income effect on $Y$ is unknown. b) $Y$ is normal and the real income effect on $X$ is unknown. c) $Y$ is inferior. d) $X$ and $Y$ are normal.

> [!success] Official answer: (a)

When $P_x$ falls, the substitution effect pushes the consumer towards $X$ and away from $Y$, so the substitution effect on $Y$ is negative. The total change in $Y$ is negative as well, which tells us nothing definite about the sign of the income effect on $Y$: it could be negative (inferior) or positive but too small to offset the substitution effect. So the income effect on $Y$ is **unknown**, which rules out (b), (c) and (d), each of which claims a sign for it.

The official answer also asserts that $X$ is normal. Intuition: the consumer spends more on $X$ after the price fall, and the extra purchasing power shows up as more $X$.

> [!warning] Weak step
> Strictly, the data give the sign of the effect on $X$ only if one assumes the income effect on $X$ is positive. The official answer takes $X$ to be normal; I keep it. The decisive point for choosing (a) is that the income effect on $Y$ cannot be determined.

See [[Lec_07-Substitution and Income Effects]].

---

## Q8: Finding $a$

**Question.** Yamit has \$100, $P_x = 10$, $P_y = 20$, $U = X^2/a + Y^2$. She is indifferent between consuming only $X$ or only $Y$. What is $a$?

a) 1. b) 4. c) $a > 1$. d) 2.

> [!success] Official answer: (b), $a = 4$

Only $X$: $X = 100/10 = 10$, so $U = 100/a$. Only $Y$: $Y = 100/20 = 5$, so $U = 25$. Indifference means $100/a = 25$:

$$a = 4$$

- (a) $a = 1$: $U_X = 100 > 25$, she prefers only $X$.
- (d) $a = 2$: $U_X = 50 > 25$, again only $X$.
- (c) $a > 1$ is a range, not one value; it covers values with $U_X > 25$ and $U_X < 25$.

This is the same corner logic as Q4 (utility is convex, so only the corners matter).

---

## Q9: Convex preferences

**Question.** If two goods are both desirable and preferences are convex, then:

a) indifference curves must be straight lines. b) if two bundles are indifferent, an average of them is worse than either. c) MRS is constant along indifference curves. d) None of the above.

> [!success] Official answer: (d)

- (a) false: convex indifference curves can be bowed towards the origin. Straight lines are the special weakly convex case of perfect substitutes.
- (b) false: convexity says the average of two indifferent bundles is **at least as good** as each, not worse. This is the statement that would make preferences non-convex.
- (c) false: a constant MRS holds only for perfect substitutes. In the typical convex case the MRS diminishes as $x$ rises.

See [[Lec_02-Preferences]] and [[Indifference Curve]].

---

## Q10: Ambrose's nuts and berries

**Question.** $U(x_1, x_2) = 4\sqrt{x_1} + x_2$, $p_1 = 1$, $p_2 = 4$, income \$108. How many nuts?

a) 128. b) 64. c) 67. d) 32.

> [!success] Official answer: (b), 64

This is [[Quasilinear Utility]], so the tangency condition fixes $x_1$ without involving income. The [[Marginal Rate of Substitution]] is

$$MRS = \frac{2/\sqrt{x_1}}{1} = \frac{p_1}{p_2} = \frac{1}{4} \;\Rightarrow\; \sqrt{x_1} = 8 \;\Rightarrow\; x_1 = 64$$

Nuts cost \$64, leaving \$44 for berries, so $x_2 = 11 \ge 0$ and the interior solution is valid.

- (a) 128 costs \$128, more than his \$108 income.
- (c) 67 and (d) 32 do not satisfy the tangency condition.

---

## Q11: Patience, equal consumption

**Question.** $U(c_1, c_2) = \sqrt{c_1} + 0.87\sqrt{c_2}$. Her period-1 income is twice her period-2 income. At what interest rate will she consume the same in both periods? (Closest answer.)

a) 0.08. b) 0.3. c) 0.15. d) 0.23.

> [!success] Official answer: (c), 0.15

At the optimum the MRS between $c_1$ and $c_2$ equals $1 + r$:

$$\frac{1/(2\sqrt{c_1})}{0.87/(2\sqrt{c_2})} = \frac{\sqrt{c_2}}{0.87\sqrt{c_1}} = 1 + r$$

With $c_1 = c_2$ the left side is $1/0.87 \approx 1.149$, so $r \approx 0.149$, closest to **0.15**. The income ratio only ensures that such a plan is affordable; it does not change this condition.

- (a) 0.08, (b) 0.3 and (d) 0.23 are all further from 0.149 than 0.15 is.

> [!tip] Intuition
> She discounts the future (weight 0.87 on period 2). To make her *willing* to consume equally in both periods, the market must reward waiting by about the amount she under-weights it: 1.149 per dollar.

See [[Lec_09-Intertemporal Choice]].

---

## Q12: Fanny's endowment

**Question.** Fanny's prices are \$18 for $x$ and \$18 for $y$. Her income is an endowment of 24 units each. She plans to consume 26 of $x$ and 22 of $y$. Prices change to \$24 and \$24. She is:

a) better off. b) worse off. c) neither. d) cannot tell without the utility function.

> [!success] Official answer: (c)

Endowment value before: $18 \cdot 24 + 18 \cdot 24 = 864$. Planned bundle cost: $18 \cdot 26 + 18 \cdot 22 = 864$. Both prices move by the same factor, so relative prices are unchanged and the endowment's value moves in proportion to the prices. After: $24 \cdot 24 + 24 \cdot 24 = 1152$ and $24 \cdot 26 + 24 \cdot 22 = 1152$. The **budget set is identical**, so she chooses the same bundle and her utility is unchanged.

![[PP03_q12_budget_line_unchanged.png|520]]

- (a), (b) wrong: the budget set has not moved, so no change in welfare.
- (d) wrong: we do not need the utility function, because the opportunity set is unchanged.

> [!tip] Intuition
> She is both buyer and seller at the same prices. Scaling both prices and her income-in-kind by the same factor changes nothing real.

See [[Lec_08-Labor Supply]] for the same endowment-budget logic applied to labor.

---

## Q13: Molly, consumption over time

**Question.** Income \$400 in period 1 and \$690 in period 2, $U = c_1^{a} c_2^{1-a}$ with $a = 0.80$, $r = 15\%$. Her period-1 income doubles and period-2 income stays the same. Her period-1 consumption:

a) stays constant. b) increases by \$320. c) increases by \$160. d) increases by \$400.

> [!success] Official answer: (b), increases by \$320

With Cobb-Douglas utility the consumer spends the share $a$ of the present value of lifetime income on $c_1$:

$$c_1 = a \cdot \left(m_1 + \frac{m_2}{1 + r}\right)$$

Before: $PV = 400 + 690/1.15 = 400 + 600 = 1000$, so $c_1 = 0.8 \cdot 1000 = 800$.

After: $PV = 800 + 600 = 1400$, so $c_1 = 0.8 \cdot 1400 = 1120$.

$$\Delta c_1 = 1120 - 800 = 320$$

- (a) wrong: the extra \$400 income raises wealth, so $c_1$ rises.
- (c) \$160 is half of the right amount, (d) \$400 would mean spending all of the extra income in period 1 rather than only 80% of it ($0.8 \cdot 400 = 320$).

See [[Cobb-Douglas Utility]] and [[Lec_09-Intertemporal Choice]].

---

## Q14: $U = XY$, price of Y falls

**Question.** The price of $Y$ decreased. The conclusion is:

a) substitution effect on X = real income effect on X. b) Hicks substitution effect > Slutsky substitution effect in absolute value. c) real income effect on Y = substitution effect on Y. d) more than one answer is correct.

> [!success] Official answer: (a)

For $U = XY$, $X = m/(2P_x)$ does not depend on $P_y$, so the total effect on $X$ is zero. The substitution effect on $X$ (negative, since $Y$ became cheaper) and the income effect on $X$ (positive) therefore cancel exactly: equal in size. That is (a). The argument is the same as Q5, with the roles of $X$ and $Y$ swapped.

- (b) wrong, as in Q5: the Slutsky substitution effect is the larger one after a price fall.
- (c) is judged false by the official key.

> [!warning] Check on (c)
> My check gives a subtlety. With the **Hicks** decomposition, $m = 100$, $P_x = 10$, $P_y: 10 \to 5$: effects on $Y$ are substitution $+2.07$ and income $+2.93$, **not** equal, so (c) is false and (a) is the only correct statement. With the **Slutsky** decomposition both effects on $Y$ equal $+2.5$, which would make (c) true as well, and then (d) would be right. The official key picks (a), consistent with the Hicks decomposition, so I keep (a). Numbers are mine, not from the source.

---

## Q15: Net buyers and sellers when $P_x$ rises

**Question.** A consumer has an endowment of $(X = 5, Y = 5)$ and can sell goods and buy others. $P_x$ increases.

a) Originally he bought $X$ and sold $Y$: his utility will increase. b) Originally he bought $X$ and sold $Y$: he cannot still buy $X$ and sell $Y$. c) Originally he sold $X$ and bought $Y$: his utility will increase. d) Originally he sold $X$ and bought $Y$: his utility will not change.

> [!success] Official answer: (c)

Here income is the value of the endowment, so a price change moves both the cost of what he buys and the value of what he sells.

- A **net seller of $X$** gains when $P_x$ rises: his endowment is worth more and the old bundle is still affordable. The budget line pivots through the endowment point, so the old optimum lies strictly inside the new budget set, and he can reach a higher indifference curve. Utility **increases**: (c) correct, (d) wrong.
- A **net buyer of $X$** loses purchasing power: the old bundle is no longer affordable, so utility falls: (a) wrong.
- (b) is wrong: he may still be a net buyer of $X$, only with a smaller quantity or the same direction at a worse price.

See [[Lec_08-Labor Supply]] and [[Lec_07-Substitution and Income Effects]] for the endowment income effect.

---

## Q16: Three statements

**Question.** Which of the following are correct?

1. If $MRS < P_x/P_y$, the consumer must increase $X$ and decrease $Y$.
2. If $U = \min(X/2, Y)$, then $MRS = 2$.
3. If $U = aX + bY$, then $MRS < P_x/P_y$ is possible at the optimum.

a) Only 1. b) Only 1 + 3. c) Only 3. d) Only 1 + 2.

> [!success] Official answer: highlighted (a), (b) and (c). My reading: (c)

> [!warning] Three options are highlighted
> The key highlights a, b and c, so it does not give a single answer. Checking each statement myself:
> 1. **False.** $MRS < P_x/P_y$ means $MU_x/P_x < MU_y/P_y$: the last dollar buys more utility from $Y$, so the consumer should buy **more $Y$ and less $X$**. The statement has the direction reversed.
> 2. **False.** For perfect complements the curves are L-shaped: the MRS is 0 on the flat part and undefined at the kink, never 2. The kink sits at $X = 2Y$.
> 3. **True.** With perfect substitutes the MRS is constant, and at a corner optimum (the consumer buys only $Y$) the MRS stays below the price ratio.
>
> So only statement 3 holds: (c). I list this as a likely official inconsistency (a and b would require statement 1).

See [[Marginal Rate of Substitution]], [[Perfect Complements]], [[Perfect Substitutes]].

---

## Q17: Two consumers

**Question.** $U_1 = \min(aX, bY)$ and $U_2 = X^a Y^b$.

a) For consumer 1 the goods are "undependable" (independent) and for consumer 2 "substantive" (substitutes). b) For consumer 1 the goods are normal and for consumer 2 complementary. c) For consumer 1 the goods are substitutes and for consumer 2 complementary. d) None of the above.

> [!success] Official answer: (d)

Consumer 1 has [[Perfect Complements]] (L-shaped curves, goods always used in the fixed ratio $aX = bY$). Consumer 2 has [[Cobb-Douglas Utility]]: smooth convex curves, neither complements nor perfect substitutes, and the demand for each good does not depend on the other good's price.

- (a), (c) describe consumer 1 wrongly (he has complements, not independent goods or substitutes).
- (b) wrong: "normal" is about income, not the relationship between goods, and consumer 2 is not a complements case.
- So none fits: (d).

---

## Q18: Which statement is correct?

**Question.**

a) For a future lover, savings are positive. b) Slutsky compensation = Hicks compensation. c) If the period-1 optimal basket A is **on** the second-period budget constraint, utility rises in the second period. d) If A is **not on** the second-period budget constraint, utility falls in the second period.

> [!success] Official answer: (c)

- (c) true: the interest rate (or inflation) changed, so the budget line pivoted. A is still affordable, but A was tangent to the *old* line and the new line has a different slope, so A is no longer tangent and a better bundle exists on the new line. Utility rises (see [[Revealed Preference]]).
- (a) false: whether someone saves depends on endowment and preferences together; patience alone does not guarantee positive savings.
- (b) false: [[Slutsky Compensation]] holds the old bundle affordable, [[Hicks Compensation]] holds the old utility level. They coincide only at a point, not in general.
- (d) false: if A is no longer affordable, utility can fall, but a pivot can also put A outside while still leaving higher utility available elsewhere, so a fall is not guaranteed.

---

## Q19: The rational consumer

**Question.** The rational consumer is:

a) a consumer with only transitive behavior. b) a consumer with transitive and complete behavior. c) a consumer who thinks logically. d) a consumer who never changes his preferences.

> [!success] Official answer: (b)

In this course "rational" has a precise meaning: preferences are **complete** (any two bundles can be compared) and **transitive** (if $A \succ B$ and $B \succ C$ then $A \succ C$). Transitivity alone, (a), is not enough; (c) is vague and not the definition; (d) is about stability over time, not rationality. See [[Preferences]] and [[Lec_02-Preferences]].

---

## Q20: Engel curve for Cobb-Douglas

**Question.** For a Cobb-Douglas utility function the Engel curve is:

a) horizontal. b) vertical. c) a linear up-sloping line. d) a linear down-sloping line.

> [!success] Official answer: (c)

With $U = X^a Y^b$ the demand is $x = \dfrac{a}{a+b}\cdot\dfrac{m}{p_x}$, a constant share of income. Plotting $x$ against income $m$ gives a straight line through the origin with positive slope: a **linear up-sloping** Engel curve. Horizontal or vertical Engel curves (a, b) would mean demand ignoring income or income having no link to demand, and down-sloping (d) would mean an inferior good. See [[Cobb-Douglas Utility]] and [[Lec_05-Demand]].

---

## Recap

| Q | Topic | Answer |
|---|---|---|
| 1 | Budget plus calories | d |
| 2 | Weighted grades, perfect substitutes | c |
| 3 | $\max$ utility | d (a + c) |
| 4 | Convex utility, corner | d |
| 5 | $X^2Y$, price of X falls | c |
| 6 | Saver becomes borrower | b |
| 7 | Price of X falls, Y falls | a |
| 8 | Value of $a$ | b |
| 9 | Convex preferences | d |
| 10 | Quasilinear, nuts | b |
| 11 | Equal consumption, $r$ | c |
| 12 | Proportional price change | c |
| 13 | Cobb-Douglas over time | b |
| 14 | $XY$, price of Y falls | a |
| 15 | Net seller, price rises | c |
| 16 | Three statements | c (key highlights a, b, c) |
| 17 | Complements versus CD | d |
| 18 | Period-1 basket on new line | c |
| 19 | Rationality | b |
| 20 | Engel curve | c |

## Related notes

[[Micro-Economics I]], [[Lec_03-Utility and MRS]], [[Lec_04-Optimal Bundle]], [[Lec_07-Substitution and Income Effects]], [[Lec_09-Intertemporal Choice]]
