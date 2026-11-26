---
title: "Exam Question Playbook"
subject: micro-i
type: reference
description: "Every question type the final asks, with the steps that earn the points and a model answer from a real past paper: the seven-part labor-supply question, the seven-part two-period question and the MCQ families."
course: Micro-Economics I
semester: 2
year: 1
order: 4
tags:
  - micro-i
  - exam-prep
  - playbook
---

> **Game plan (3 hours).** Do the two open questions first: they are 60% of the paper and follow the same script every year. Then the MCQs: answer the 8 you are surest of (the first 8 answered are marked if you answer more). In every open part write one line of **why**: "answers without explanations are not graded".

---

## A · Leisure demand and labor supply (Open Q1 a, b)

**Steps**
1. Write the budget: $Y = W(T - L) + W_0$ (with $P_Y = 1$). Leisure costs $W$ an hour.
2. $MRS = \dfrac{MU_L}{MU_Y} = W$. Solve for $Y$ in terms of $L$.
3. Substitute into the budget, solve for $L^*$. Then $H^* = T - L^*$.
4. Graph $L$ and $H$ **against $W$**: a horizontal line if $W$ cancels (Cobb-Douglas type), downward/upward curves otherwise. Mark where $L$ hits $T$ (no work).

> [!example] 2022 Moed A Q1a, b: $U = LY + 4Y$, 16 hours
> $MU_L = Y$, $MU_Y = L + 4$: $\frac{Y}{L + 4} = W$, so $Y = W(L + 4)$. Budget $Y = (16 - L)W$. Then $L + 4 = 16 - L$, $L_D = 6$ and $H^S = 10$, both **flat in $W$**: the wage cancels.

---

## B · The wage changes (Open Q1 c)

**Steps**
1. Read the sign from your formulas for $L$, $H$ and $Y = WH + W_0$.
2. Explain with the effects: a higher wage makes leisure dearer (substitution: less leisure) and makes her richer (income: more leisure if normal).
3. Name the case: Cobb-Douglas, effects cancel, hours fixed, $Y$ moves with $W$. Quasilinear in $Y$: no income effect, hours rise with $W$.

> [!example] 2020 Moed B Q1c: $U = L^{0.5} + Y$
> $L = \frac{1}{4W^2}$ falls, $H = 24 - L$ rises, $Y = 24W - \frac{1}{4W}$ rises. Only the substitution effect acts.

---

## C · Non-labor income $W_0$ (Open Q1 d)

**Steps**
1. Add $W_0$ to the budget only. The MRS condition does not change.
2. Re-solve. In Cobb-Douglas-type utilities $W_0$ now appears divided by $W$, so the wage matters again.
3. Quasilinear in $Y$: $L$ is pinned by $MRS = W$, so $W_0$ only raises $Y$.

> [!example] 2022 Moed A Q1d: $U = LY + 4Y$ with $W_0$
> $W(L + 4) = (16 - L)W + W_0$: $L_D = 6 + \frac{W_0}{2W}$, $H^S = 10 - \frac{W_0}{2W}$, $Y = 10W + \frac{W_0}{2}$. A **wage fall** now raises leisure and cuts hours.

---

## D · The twist (Open Q1 e): caps, comparisons, corners

**Hours cap.** Solve unconstrained. If the desired hours exceed the cap, she works exactly the cap (the constraint binds); if not, the cap does nothing.

**Compare two options.** Put each option's bundle into the utility function and compare the numbers. For an "allowance that makes her indifferent", set the two utilities equal and solve for $W_0$, then check the cap still binds.

**Does she ever stop working?** Evaluate the MRS at the no-work corner $(T, W_0)$. If $W \le$ that MRS, she works zero hours.

> [!example] 2025 Moed A Q11: Sharon, $U = L^2Y$, 18 hours, university caps work at 4
> Unconstrained $L = 12$, $H = 6 > 4$, so with university $H = 4$, $L = 14$. $U_1 = 784W < U_2 = 864W$: she prefers to work full time. Allowance at $W = 100$: $196(400 + W_0) = 86{,}400$, $W_0 \approx 40.82$. With the allowance she would like $L \approx 12.27$ (5.7 hours), still above the cap, so $L = 14$ is right.

---

## E · Kinked labor budgets and welfare (2018 sample Q2, extra practice Q4, Q5)

**Steps**
1. Draw the original line. Mark where the rule starts (the earnings threshold, the overtime hour).
2. Draw each segment with its own slope: a welfare top-up is flat, a tax makes it flatter, overtime steeper.
3. For "better or worse off": old bundle still affordable? new bundle affordable before? Otherwise **cannot tell**.

> [!example] 2018 sample Q2: floor of 30, 50% tax above 30, wage 5
> Flat at $C = 30$ from $L = 18$ to 24, slope $-2.5$ for $L < 18$ reaching 75 at $L = 0$. Six hours before: better off, more leisure. Eight hours before: cannot tell. Eight hours after: worse off.

---

## F · Two periods: the budget line and savings (Open Q2 a, b)

**Steps**
1. Endowment $E = (I_1, I_2)$, real rate $1 + \rho = \frac{1+r}{1+\pi}$. If $r = \pi$, slope $-1$.
2. Intercepts: $I_1 + \frac{I_2}{1+\rho}$ and $I_2 + (1+\rho)I_1$.
3. Place the optimum: future-lover above $C_1 = C_2$, present-lover below, indifferent on it (at slope $-1$).
4. Savings $S = I_1 - C_1$: decide **saver or borrower** and say so.

> [!example] 2020 Moed A Q2a, b: Yudit, $I_1 < I_2$, indifferent, $r = \pi$
> Slope $-1$, both intercepts $I_1 + I_2$, optimum at $C_1 = C_2$. Since $I_1 < I_2$, $C_1 = \frac{I_1 + I_2}{2} > I_1$: savings **negative**, she borrows.

---

## G · Inflation or the interest rate changes (Open Q2 c, e)

**Steps**
1. Which way does the real rate move? Inflation up or $r$ down: $\rho$ falls, line **flatter**. $r$ up or inflation down: steeper.
2. Pivot the line **around the endowment**.
3. Utility: if her old bundle is now strictly inside the set (borrower and $\rho$ down, saver and $\rho$ up), she is **better off for sure**; otherwise worse off.
4. Fill the table: substitution, income, total, for $C_1$ and $C_2$. Mark the "range of B" on the new line.

> [!example] 2025 Moed A Q12.3: Yoni, a borrower, inflation rises
> Real rate falls, line flattens around $(0, I_0)$, his old bundle is inside the new set: utility **up**. Substitution: $C_1$ up, $C_2$ down. Income: both up. Total: $C_1$ up, $C_2$ ?. $B$ lies on the new line to the right of $A$.

---

## H · The Slutsky graph (Open Q2 d, and MCQs)

**Steps**
1. Old line, old bundle $A$.
2. Slutsky line: **through $A$** with the **new** slope.
3. Her best point on it, $C$ (the paper's letters vary): $A \to C$ is the substitution effect, toward the good that got cheaper.
4. Parallel shift to the real new line, point $B$: $C \to B$ is the income effect.
5. Say whether the compensation is positive or negative: for a borrower whose real rate fell it is negative (the Slutsky line is below the new line).

> [!example] 2020 Moed A Q2d
> Through $A$ with the new flatter slope, her choice $C$ has more $C_1$ and less $C_2$ (substitution). The real line through $E$ is above it; $C \to B$ is the income effect.

---

## I · Only one rate changes (Open Q2 f)

**Steps**
1. Kink at the endowment $E$. Right of $E$ = borrowing, left = saving.
2. Rotate only the branch whose rate changed.
3. If she is on the untouched branch, she stays put unless the new branch now offers a better point.

> [!example] 2025 Moed A Q12.6: Yoni at $E = (I_0, I_0)$, the borrowing rate falls
> The right branch flattens. He values the periods one-for-one, and the new right branch trades better than one-for-one, so he borrows: $C_1$ up, $C_2$ down.

---

## J · MCQ families and the one test each needs

| Family | The test |
|---|---|
| Goods, bads, monotonic | Sign of each partial derivative over the stated domain |
| Same preferences? | Is one function an increasing transformation of the other? Same **ranking**, not the same **level** |
| Concave or "$X^a + Y^a$, $a > 1$" | Corner, compare the two extremes |
| Quasilinear | Income change: only the linear good moves (while interior) |
| Perfect complements | On the kink; substitution effect zero |
| Cobb-Douglas price change | The other good does not move; its two effects cancel |
| Slutsky vs Hicks | Hicks line on or below the Slutsky line: Hicks compensation $\le$ Slutsky |
| Endowment | Pivot on the endowment; net seller gains from a rise in her good's price |
| Giffen | Price up, quantity up: inferior with a large income effect; the other good is normal |
| Budget unchanged | All prices and income scaled together, or both price changes offset |

> [!example] 2020 Moed A closed Q1
> $U_1 = X^a/Y^b$ and $U_2 = X^a - Y^b$: $Y$ lowers utility in both, so neither has both goods positively monotonic. Answer (d), "none".
