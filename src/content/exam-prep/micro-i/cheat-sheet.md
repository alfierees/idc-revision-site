---
title: "Cheat Sheet (Lec 1–9)"
subject: micro-i
type: reference
description: "Everything the final uses from the 9 lectures, in exam order: budget lines, preferences and utility, the optimal bundle for every utility family, demand, revealed preference, Slutsky and Hicks, endowments, labor supply and two-period consumption, each with a worked example from a past paper."
course: Micro-Economics I
instructor: Ido Eisdorfer and Yosi Ganel
semester: 2
year: 1
order: 1
pinned: true
tags:
  - micro-i
  - exam-prep
  - cheat-sheet
aliases:
  - Micro I Cheat Sheet
  - Consumer Theory Cheat Sheet
---

> **The exam:** 3 hours, four A4 pages of your own notes, a calculator. Every recent paper has the same two halves:
>
> | Part | What it is | Section |
> |---|---|---|
> | **Multiple choice** | 10 questions, answer **any 8**, 5 points each. Shapes of indifference curves, monotonicity, corners, quasilinear income effects, Slutsky vs Hicks, endowments, Giffen goods | §1 to §7 |
> | **Open Q1: labor supply** (25 to 35 points) | Leisure demand, labor supply, a wage change, a lump sum $W_0$, then a twist: an hours cap, a welfare floor, a corner where she stops working | §8 |
> | **Open Q2: two periods** (30 to 35 points) | Budget line through the endowment, saver or borrower, inflation or the interest rate changes, a Slutsky graph, a kink when only one rate changes | §9 |
>
> "Answers without explanations are not graded", and the utility function is **convex unless stated otherwise**. The open questions have barely changed since 2018: the same seven sub-parts with new numbers. Doing the six open-question papers on this site is the best single preparation.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| Income or prices change, "draw the new budget line" | Income: parallel shift. Own price: pivot on the **other** intercept. All prices and income $\times t$: nothing moves | §1 |
| "10% discount above 10 units", food stamps, a ration | Kinked line: price changes the slope after the threshold | §1 |
| "Is X a good, a bad or neutral?" "Monotonic?" | Sign of $\partial U/\partial x$: in a denominator or subtracted means a bad | §2, §3 |
| Two utility functions, "same preferences?" | Is one an **increasing** function of the other? | §3 |
| $\min\{ax, y\}$ | Perfect complements: kink, $y = ax$ plus the budget | §4 |
| $ax + by$ | Perfect substitutes: compare $a/p_x$ with $b/p_y$, all on the better one | §4 |
| $x^a + y^b$ with $a, b > 1$, or "concave utility" / curves bowed out | **Corner.** Tangency is the *worst* point. Compare the two corners | §4 |
| $f(x) + y$ | Quasilinear: $f'(x) = p_x/p_y$ fixes $x$; extra income all goes to $y$ | §4 |
| $x^a y^b$ | Cobb-Douglas: share $\tfrac{a}{a+b}$ of income on $x$; $x$ ignores $p_y$ | §4 |
| "Price of Y rose and Y rose" | Giffen, so Y inferior, so X normal | §7 |
| Substitution or income effect, Slutsky or Hicks | Slutsky line through the **old bundle**; Hicks line tangent to the **old curve** | §7 |
| "Is she better off?" after a budget change | Is the **old bundle** still affordable? Is the chosen new one affordable before? | §6 |
| An endowment, "she sells / buys", a price falls | Line pivots **on the endowment**. Net seller of the good that got cheaper loses purchasing power | §8 |
| Hours, wage, leisure, $U(L, Y)$ | $MRS_{L,Y} = W/P_Y$ and $Y = W(T - L) + W_0$ | §8 |
| "Can she choose not to work?" | Corner at $L = T$: compare the wage with $MRS$ at $(T, W_0)$ | §8 |
| $C_1$, $C_2$, interest, inflation | Slope $-(1+\rho)$, $1 + \rho = \tfrac{1+r}{1+\pi}$, pivot on the endowment. First: saver or borrower? | §9 |
| Only the borrowing (or only the saving) rate changes | Kink at the endowment; only one branch rotates | §9 |
| A fair lottery, risk-averse or risk-loving | Concave $u$: refuse a fair bet. Convex: take it | §10 |

---

## 1. Lec 01 — The budget line

$$
p_1x_1 + p_2x_2 = m \qquad\Longleftrightarrow\qquad x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}\,x_1
$$

| Feature | Value | Meaning |
|---|---|---|
| Vertical intercept | $m/p_2$ | Everything on good 2 |
| Horizontal intercept | $m/p_1$ | Everything on good 1 |
| Slope | $-p_1/p_2$ | Opportunity cost of good 1 in units of good 2 (the **market** trade-off) |

**How it moves** (others fixed):

| Change | Line |
|---|---|
| $m$ up or down | Parallel shift, slope unchanged |
| $p_1$ falls | Pivots out around the **vertical** intercept $m/p_2$, flatter |
| $p_2$ falls | Pivots out around the **horizontal** intercept $m/p_1$, steeper |
| $p_1, p_2, m$ all multiplied by $t$ | **Nothing moves.** $(tp_1, tp_2, tm)$ is the same line |
| Both prices up by the same % | Same as a fall in income: parallel shift in |

**Kinked lines.** A price that changes after a threshold changes the slope there.

> [!example] 2025 Moed A Q10: 10% off every unit above 10
> Up to 10 units the slope is $P_x/P_y$ (in absolute value); above 10 it is $0.9\,P_x/P_y$: **flatter** after the kink. The first 10 units still cost full price. Answer: "both b and c".

> [!example] Lec 01: food stamps
> 100 to spend, 40 in food-only stamps. The line is **flat** at $G = 100$ up to $F = 40$ (food is free), then slope $-1$ down to $F = 140$. A black market in stamps would remove the flat part's kink.

**Use it when the question says:** "draw the budget set", "which price change leaves the set unchanged", "a discount", "a subsidy for good X only".

---

## 2. Lec 02 — Preferences and indifference curves

**Relations:** $x \succ y$ (strict), $x \sim y$ (indifferent), $x \succsim y$ (weak: either of the two).

**Axioms:** completeness (any two bundles compare), reflexivity ($x \succsim x$), transitivity ($x \succsim y \succsim z \Rightarrow x \succsim z$). Transitivity is why **indifference curves never cross**.

**Goods, bads, neutrals:**

| One extra unit… | Curve with the other a good | "Better" direction |
|---|---|---|
| **Good**: raises utility | Slopes **down** | Up and right |
| **Bad**: lowers utility (pollution) | Slopes **up** | More good, less bad |
| **Neutral**: no change | Vertical or horizontal line | Only the good counts |

**Well-behaved** = monotonic (more is better, curves slope down) + convex (averages beat extremes, curves bow **toward** the origin). Strictly convex: the mix is strictly better. Perfect substitutes are convex but not strictly.

**The MRS** is the slope of the indifference curve: how much of good 2 she is **willing** to give up for one more unit of good 1.

$$
MRS = \frac{dx_2}{dx_1}\Big|_{U\text{ fixed}} = -\frac{MU_1}{MU_2}
$$

**Diminishing MRS** ($\lvert MRS\rvert$ falls as $x_1$ rises) $\iff$ strictly convex curves. Some papers state MRS in absolute value, so "MRS decreases as X increases" means convex (2025 Moed A Q7d, true).

**Satiation (bliss point):** curves are rings; beyond the bliss point a good turns into a bad.

**Use it when the question says:** "monotonic", "convex", "can the curves cross", "rational".

---

## 3. Lec 03 — Utility functions

**Ordinal utility:** only the **order** matters. $U = 6$ vs $U = 2$ says $x \succ y$, not "three times as good".

**Monotonic transformation:** if $f$ is **strictly increasing**, $V = f(U)$ represents the same preferences: same curves, same MRS, same choices. Adding a constant, multiplying by a positive number, $\ln U$, $U^2$ (for $U > 0$) and $\sqrt U$ all qualify. Multiplying by a **negative** number, or $1/U$, reverses the order.

> [!example] 2025 Moed A Q1
> $U_1 = 100(X^a + Y^b)^{-1}$ and $U_2 = (X^a + Y^b)^{-1}$ with $X, Y > 1$. Both goods are **bads** (they sit in the denominator), and $U_1 = 100\,U_2$ is an increasing transformation, so both consumers rank bundles identically for **any** $a, b$. Same ranking does not mean the same utility **level**.

> [!example] 2025 Moed A Q2 (iii)
> $\left(\frac{U + 1000}{2}\right)^2$ is increasing while $U > -1000$, so it represents the same preferences as $U$.

**The four families** (and the one that breaks tangency):

| Family | Form | Indifference curves | $\lvert MRS\rvert = MU_1/MU_2$ |
|---|---|---|---|
| Perfect substitutes | $ax_1 + bx_2$ | Straight lines | $a/b$, constant |
| Perfect complements | $\min\{ax_1, bx_2\}$ | L-shapes, corners on $ax_1 = bx_2$ | $0$, $\infty$, undefined at the kink |
| Quasilinear | $f(x_1) + x_2$ | Vertical copies of each other | $f'(x_1)$: depends on $x_1$ only |
| Cobb-Douglas | $x_1^a x_2^b$ | Smooth, convex, never touch the axes | $\dfrac{a\,x_2}{b\,x_1}$ |
| Concave ("bowed out") | $x_1^a + x_2^a$, $a > 1$ | Bow **away** from the origin | Rises along the curve |

> [!tip] The one-line MRS shortcuts
> $U = xy$: $\lvert MRS\rvert = y/x$. $U = x^2y$: $2y/x$. $U = \sqrt x + \sqrt y$: $\sqrt{y/x}$. $U = \ln x + y$: $1/x$. $U = xy + 4y = y(x + 4)$: $\tfrac{y}{x + 4}$.

**Use it when the question says:** "do the two consumers have the same preferences", "the same level of utility", "classify the goods".

---

## 4. Lec 04 — The optimal bundle

**Interior, convex case:** willingness to trade = market rate, and the whole budget is spent.

$$
\frac{MU_1}{MU_2} = \frac{p_1}{p_2} \quad\Longleftrightarrow\quad \frac{MU_1}{p_1} = \frac{MU_2}{p_2}, \qquad p_1x_1 + p_2x_2 = m
$$

If $MU_1/p_1 > MU_2/p_2$, move a dollar to good 1. Diamond-water paradox: price follows **marginal**, not total, utility.

**Recipe:** (1) MRS = price ratio gives a line through the origin, e.g. $x_2 = 64x_1$. (2) Substitute into the budget. (3) Check it is interior and the curves are convex.

**Ready-made demands:**

| Family | Demand | Notes |
|---|---|---|
| Cobb-Douglas $x_1^a x_2^b$ | $x_1^* = \dfrac{a}{a+b}\cdot\dfrac{m}{p_1}$, $x_2^* = \dfrac{b}{a+b}\cdot\dfrac{m}{p_2}$ | Fixed spending shares. $x_1$ **ignores** $p_2$, so a change in $p_2$ moves only $x_2$. Both goods normal |
| Perfect complements $\min\{ax_1, x_2\}$ | $x_1^* = \dfrac{m}{p_1 + ap_2}$, $x_2^* = ax_1^*$ | No substitution effect at all |
| Perfect substitutes $ax_1 + bx_2$ | All on good 1 if $\tfrac{a}{p_1} > \tfrac{b}{p_2}$, all on good 2 if less | Any point on the line if equal |
| Quasilinear $f(x_1) + x_2$ | $f'(x_1) = p_1/p_2$ fixes $x_1$; $x_2 = (m - p_1x_1)/p_2$ | **Zero income effect on $x_1$** while interior. If income is too small: corner with $x_2 = 0$ |
| Concave / bowed out | A corner: compare $U(m/p_1, 0)$ with $U(0, m/p_2)$ | Tangency is the **minimum** on the line. Never "both goods" |

> [!example] 2025 Moed A Q8: $\sqrt{x_1} + \sqrt{x_2}$, $p_1 = 8$, $p_2 = 1$
> $\sqrt{x_2/x_1} = 8$, so $x_2 = 64x_1$. Whatever the income, he buys **less $x_1$ than $x_2$**. With income $m$: $x_1 = m/72$. (Income was not needed, which rules out "not enough information".)

> [!example] 2025 Moed A Q9: $X^a + Y^a$, $a > 1$, $P_X = P_Y$, then $P_Y$ falls
> Concave in the goods, so a corner. At equal prices both corners tie at $(I/P)^a$. Once $P_Y$ falls, only-$Y$ gives $(I/P_Y)^a > (I/P_X)^a$: she consumes **only Y**.

> [!example] 2020 papers, closed Q2: concave utility
> Statements "MRS = $P_X/P_Y$ at the optimum" and "she buys both goods" are **false**; "she buys only X or only Y" is true.

**Use it when the question says:** "find the optimal bundle", "will she consume more X than Y", "is the tangency the optimum".

---

## 5. Lec 05 — Demand

- **Quantity demanded** moves **along** the curve (own price). **Demand** shifts with income, wealth, other prices, tastes, expectations.
- **Normal good:** demand rises with income. **Inferior:** falls. **Neutral:** unchanged (a quasilinear good, or a good with $MU = 0$). Not every good can be inferior: extra income must go somewhere.
- **Substitutes:** $p_A$ up raises demand for B. **Complements:** $p_A$ up lowers demand for B. **Independent:** no effect (Cobb-Douglas goods are independent of each other's price).
- **Engel curve:** quantity against income. Perfect complements and Cobb-Douglas: straight rays from the origin. Quasilinear: vertical in the nonlinear good once interior.
- **Market demand** is the **horizontal** sum: add quantities at each price.

**Use it when the question says:** "normal, inferior or neutral", "Engel curve", "the price of tea rose, what happens to sugar".

---

## 6. Lec 06 — Revealed preference

- **Directly revealed preferred:** $x$ chosen when $y$ was affordable $\Rightarrow x \succ_D y$.
- **Indirectly:** chain direct links by transitivity, $x \succ_D y \succ_D z \Rightarrow x \succ_I z$.
- **WARP:** if $x \succ_D y$ then never $y \succ_D x$. A violation: each chosen bundle sits **inside** the other's budget set. Necessary for rationality, not sufficient.

**The two welfare tests that answer most "better off?" questions:**

| Situation | Verdict |
|---|---|
| The **old** bundle is still affordable after the change (and the set grew) | Not worse off; better off if she moves |
| The **new** chosen bundle was affordable **before** (and she chose something else) | **Worse off** now |
| Old bundle lost and new options gained | **Cannot tell** without the utility function |

> [!example] 2018 sample exam Q2: Ruth's welfare floor and 50% tax
> Wage 5, 24 hours. Income below 30 is topped up to 30; every dollar above 30 is taxed 50%. The new line is flat at $C = 30$ for $L \ge 18$, then slope $-2.5$.
> - She worked **6 hours before** (at the kink): old bundle still affordable, more leisure at the same $C$ now possible, so **better off, more leisure**.
> - She worked **8 hours before**: old bundle lost, new options gained: **cannot tell**.
> - She works **8 hours after**: that bundle lies below the old line, so it was affordable before and she chose otherwise: **worse off**.

---

## 7. Lec 07 — Substitution and income effects (Slutsky, Hicks)

Every price change is two moves: **total = substitution + income**.

**Slutsky (the course default):** keep the **old bundle just affordable**.
1. Old choice $A$ on the old line.
2. Draw a line with the **new slope through $A$**. Its income is $m' = p_1'x_1^A + p_2x_2^A$, and the **Slutsky compensation** is $m' - m = \Delta p_1 \cdot x_1^A$.
3. The best point on it is $B$: $A \to B$ is the **substitution effect**.
4. Shift out (or in) to the real new line, best point $C$: $B \to C$ is the **income effect**.

**Hicks:** keep the **old utility**: the line with the new slope **tangent to the old indifference curve**. The Hicks line always sits **on or below** the Slutsky line (the Slutsky line lets her reach a higher curve), so **Hicks compensation $\le$ Slutsky compensation**.

**Signs** (for a **fall** in $p_1$; reverse for a rise):

| Good | Substitution on $x_1$ | Income on $x_1$ | Total | Demand curve |
|---|---|---|---|---|
| Normal | $+$ | $+$ | $+$ | Slopes down |
| Inferior | $+$ | $-$ | $+$ (substitution bigger) | Slopes down, less steep |
| Giffen | $+$ | $-$ | $-$ (income bigger) | Slopes **up** |
| Perfect complements | $0$ | all of it | income only | |
| Quasilinear (nonlinear good) | all of it | $0$ | substitution only | |

> [!tip] The substitution effect never changes sign
> It always moves toward the good that got relatively cheaper. Only the income effect can flip, and it has the sign of the good's income response. A Giffen good must be inferior (not every inferior good is Giffen), so the other good is normal (2025 Moed A Q5).

> [!example] Lec 07 worked numbers, $U = x_1x_2$, $m = 100$, $p_2 = 1$, $p_1$: $2 \to 1$
> $A = (25, 50)$. Slutsky income $= 1(25) + 1(50) = 75$, so compensation $-25$. $B = (37.5, 37.5)$: substitution $+12.5$. $C = (50, 50)$: income $+12.5$. Total $+25$.

> [!example] 2025 Moed A Q3: $U = XY$, $P_Y$ rises
> $X = I/2P_X$ does not move, so the substitution and income effects on $X$ are **equal in size** and cancel (answer a). With $I = 100$, $P_X = 1$, $P_Y: 1 \to 2$: Slutsky income 150, Hicks income $\sqrt{20000} \approx 141.4$, so Hicks (41.4) $<$ Slutsky (50).

> [!warning] Cobb-Douglas with Slutsky: the effects on the good whose price moved are also equal
> For $U = XY$ the Slutsky substitution and income effects on the good whose price changed are equal in size too ($\pm 12.5$ above, $\pm 25$ for a fall from 1 to 0.5). Under Hicks they are not. The 2020 Moed A key did not accept that option, so read which compensation the question means.

---

## 8. Lec 08 — Endowments and labor supply

**Endowment budget:** $p_1x_1 + p_2x_2 = p_1\omega_1 + p_2\omega_2$. The endowment is **always on the line**, so a price change **pivots the line around $\omega$**.

- **Net demand** $x_i - \omega_i$: positive = buyer, negative = seller. The values sum to zero.
- A price **rise** helps a net **seller** of that good and hurts a net **buyer**. A seller of a good whose price falls may end up worse off.
- **Consuming exactly the endowment:** a price change leaves purchasing power intact, the **Slutsky compensation is zero**, and the whole move is substitution. Utility cannot fall and may rise (2025 Moed A Q4).
- With an endowment the total effect has three parts: substitution + ordinary income + **endowment income** effect.

**Labor supply.** Leisure $L$ is a good whose price is the wage $W$. $T$ hours, $H = T - L$, non-labor income $W_0$, $P_Y$ usually 1:

$$
Y = W(T - L) + W_0, \qquad \text{slope } -\frac{W}{P_Y}\ (\text{real wage}), \qquad \frac{MU_L}{MU_Y} = \frac{W}{P_Y}
$$

**The open-question recipe:** (1) MRS = $W$ gives $Y$ in terms of $L$. (2) Substitute into the budget. (3) Solve for $L^*$, then $H = T - L^*$, then $Y$. (4) Check $0 \le L^* \le T$.

| Utility | Leisure demand | Labor supply | Wage rise | Lump sum $W_0$ |
|---|---|---|---|---|
| Cobb-Douglas $L^aY^b$ | $L = \dfrac{a}{a+b}\,T$ (for $W_0 = 0$) | **Vertical**: ignores $W$ | Hours unchanged, $Y$ up | Leisure up by $\frac{a}{a+b}\cdot\frac{W_0}{W}$; now a wage **fall** cuts hours |
| Quasilinear $f(L) + Y$ | $f'(L) = W$ | Slopes **up** | $L$ down, $H$ up, $Y$ up (substitution only) | No effect on $L$ or $H$; $Y$ up by $W_0$ |
| $Y(L + c)$ | $L + c = \tfrac12(T + c)$ | Vertical | Hours unchanged | $L$ up by $\frac{W_0}{2W}$ |

> [!example] 2025 Moed A Q11: Sharon, $U = L^2Y$, 18 hours, university caps work at 4
> $MRS = \frac{2LY}{L^2} = \frac{2Y}{L} = W$, so $Y = \frac{WL}{2}$. With $Y = (18 - L)W$: $L = 12$, $H = 6$, independent of $W$. University: she wants 6 but may work 4, so $H = 4$, $L = 14$ (the cap binds). Compare: $U_1 = 14^2 \cdot 4W = 784W < U_2 = 12^2 \cdot 6W = 864W$, so she prefers no university. The allowance that makes her indifferent at $W = 100$: $196(400 + W_0) = 86{,}400$, $W_0 \approx 40.8$.

> [!example] 2020 Moed B Q1: Yaron, $U = L^{0.5} + Y$, 24 hours
> $\frac{1}{2\sqrt L} = W$, so $L = \frac{1}{4W^2}$, $H = 24 - \frac{1}{4W^2}$ (upward sloping). A wage rise: $L$ down, $H$ up, $Y = 24W - \frac{1}{4W}$ up. A lump sum $W_0$: $L$ and $H$ unchanged, $Y$ up. Corner: $L = 24$ (no work) once $W \le \frac{1}{2\sqrt{24}} \approx 0.10$.

> [!example] 2022 Moed A Q1e: does she ever stop working? $U = LY + L^2$, 16 hours
> At the no-work corner $(L, Y) = (16, 0)$, $MRS = \frac{Y + 2L}{L} = 2$. If the wage is **at most 2** (her reservation wage), an hour of work is worth less to her than the hour of leisure it costs: $H = 0$. Above 2 she works, $L = \frac{16W}{2W - 2}$.

**Twists that appear in part (e):** an hours cap (constraint binds: take the cap), a welfare floor or tax (kinked line, use §6), overtime pay (steeper segment), a fixed cost of working (jump in the line).

---

## 9. Lec 09 — Two periods: saving, borrowing, interest and inflation

The two goods are $C_1$ (now) and $C_2$ (later). Endowment $E = (I_1, I_2)$.

$$
C_1 + \frac{C_2}{1+\rho} = I_1 + \frac{I_2}{1+\rho}, \qquad 1 + \rho = \frac{1 + r}{1 + \pi}, \qquad \text{slope } -(1 + \rho)
$$

- Intercepts: $C_1$-axis $I_1 + \frac{I_2}{1+\rho}$ (borrow against everything), $C_2$-axis $I_2 + (1+\rho)I_1$ (save everything).
- If $r = \pi$, the real rate is zero and the slope is $-1$: both intercepts are $I_1 + I_2$.
- **Saver:** $C_1 < I_1$ (optimum left of $E$). **Borrower:** $C_1 > I_1$ (right of $E$). Savings $S = I_1 - C_1$.
- **Present-lover / future-lover / indifferent:** at slope $-1$ the optimum is below, above or on the $C_1 = C_2$ line. "Indifferent between present and future" with slope $-1$: optimum at $C_1 = C_2$.

**Step 1 of every part: saver or borrower?** A change in the real rate pivots the line around $E$.

| Real rate | Who gains | Substitution | Income | Net |
|---|---|---|---|---|
| $\rho$ **up** ($r$ up or $\pi$ down) | Saver better off, borrower worse off | $C_1$ down, $C_2$ up | Saver: both up. Borrower: both down | Saver: $C_1$ ?, $C_2$ up. Borrower: $C_1$ down, $C_2$ ? |
| $\rho$ **down** ($\pi$ up or $r$ down) | Borrower better off, saver worse off | $C_1$ up, $C_2$ down | Borrower: both up. Saver: both down | Borrower: $C_1$ up, $C_2$ ?. Saver: $C_1$ ?, $C_2$ down |

> [!tip] Why the winner is certain
> After the pivot, the old bundle of the side that gains lies strictly **inside** the new set, so she can only do better. The other side's old bundle is outside the new set.

**Slutsky graph in two periods:** the line through the **old bundle $A$** with the new slope. For a borrower facing a lower real rate the Slutsky line lies **below** the new line (the compensation is negative: you would have to take money away).

**Only one rate changes:** the line gets a **kink at the endowment**. Borrowing happens to the right of $E$, saving to the left. A borrower is untouched by a change in the savers' rate (unless the new branch now beats her bundle), and vice versa.

> [!example] 2025 Moed A Q12: Yoni, $I_1 = 0$, $I_2 = I_0$, future-lover, $r = \pi$
> Slope $-1$, intercepts $(I_0, 0)$ and $(0, I_0)$, optimum above $C_1 = C_2$. He has no income now and consumes, so savings are **negative** (a borrower). Inflation rises: the real rate falls, the line flattens around $(0, I_0)$, so he is **better off**; $C_1$ up (both effects), $C_2$ ambiguous. With equal incomes and indifference between periods, the optimum is the endowment $(I_0, I_0)$; if only the borrowing rate then falls, the right branch flattens and he moves right: $C_1$ up, $C_2$ down.

> [!example] 2020 Moed A Q2: Yudit, $I_1 < I_2$, indifferent between periods, $r = \pi$
> Optimum $C_1 = C_2$ on a slope $-1$ line, so $C_1 > I_1$: a borrower. The interest rate rises: steeper line, utility falls, $C_1$ down, $C_2$ ?. Only the lenders' rate rises: her (borrowing) side is unchanged, so she stays at $A$.

---

## 10. Uncertainty (one MCQ, 2025)

A **fair lottery** has an expected payoff equal to its price. **Risk-averse** (concave utility of wealth): prefers the certain expected value, so refuses it, and dislikes it more the wider the spread between winning and losing. **Risk-loving** (convex): takes it. **Risk-neutral** (linear): indifferent.

---

## Before you hand in

- Did you **say which family** the utility is before using a formula? Tangency only for convex, interior cases.
- For every graph: axes labelled, intercepts and slope written, old and new points named ($A$, $B$, $C$).
- For every "what happens to…": a small **substitution / income / total** table, one column per good.
- For labor supply: is $0 \le L^* \le T$? Does a cap bind?
- For two periods: did you decide **saver or borrower** first?

Next: [[Consumer Theory Formula Sheet]] for the formulas only, [[Exam Question Playbook]] for the seven-part open questions, [[Quick Self-Test]] to check yourself.
