---
title: "Quasilinear Production Economy, Exchange Equilibrium & Price Controls (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed A (February 2025)"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - production-economy
  - quasilinear-utility
  - corner-solution
  - partial-equilibrium
  - price-controls
  - true-false
aliases:
  - Micro 2 Moed A 2025
  - Micro II Exam February 2025
  - PP06 Micro II
subject: micro-ii
in_scope: true
---

# Quasilinear Production Economy, Exchange Equilibrium & Price Controls (2025 Moed A)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed A (February 2025)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, calculator only. Part 1 is 10 true/false statements (50 points); Q2 is 25 points; Q3 is 25 points.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_02-Isoquants, RTS & Properties of the Profit Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!info] Source
> Answers follow the **official solutions**: the 4-page Part 1 file and the 24-page open-question slides (Q2 and Q3). Where the official text has a typo or a gap, the answer is kept and a `> [!warning]` callout flags it.

> [!note] Question text transcribed from a scan
> The question paper is an **image-only scan** with no text layer. All question text below was transcribed by hand from the rendered pages and cross-checked against the statements restated in the solution files. If a symbol looks odd (for example "$a<0<1$" in statement 4, which is printed that way in the scan), the note says so.

## What this paper tests

| Part | Core idea | Where it is taught |
|---|---|---|
| Part 1 (1) | [[Convex Isoquant]] / Cobb-Douglas isoquants: a counter-example | [[PS_02-Isoquants, RTS & Properties of the Profit Function]] |
| Part 1 (2) | [[Pareto Dominance]] is not transitive through a [[Pareto Efficiency]] label | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]] |
| Part 1 (3), (9), (10) | [[Production Economy]]: [[PPF]], [[RPT]], [[Efficiency Locus]], preferences | [[Lec_05-Production Economy & Externalities]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Part 1 (4), (5) | [[Contract Curve]] of an [[Exchange Economy]] with Cobb-Douglas agents | [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]] |
| Part 1 (6), (7), (8) | [[Partial Equilibrium]]: [[Price Ceiling]], price floor, [[Consumer Surplus]], [[Firm Surplus]] | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q2 | [[Production Economy]] with [[Quasilinear Utility]]: linear [[PPF]], corner solutions, interior solution, scaling resources | [[Lec_05-Production Economy & Externalities]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Q3 | [[Cost Function]], supply, [[Social Welfare]] and who gets the surplus under a fixed price | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |

> [!tip] Intuition: the one move behind each part
> - Part 1: every statement is a "never/necessarily" claim, so one counter-example kills it. Look for the extreme case (price near zero, a lopsided allocation).
> - Q2: with a **linear PPF** the optimum is a corner unless the consumer's MRS happens to equal the RPT. Compare MRS with RPT.
> - Q3: a fixed price sets the quantity at the **short side** of the market. Here both prices give $x = 15$, so welfare is identical and only the split of surplus changes.

---

## Part 1 — True or false (50 points, 5 each)

The instructions say each answer needs a written argument; an answer without one scores zero.

### (1) Same isoquant, shifted bundle — **False**

**Statement.** $f(l,k) = l\cdot k$. Bundles $(l_A,k_A)$ and $(l_B,k_B)$ lie on the same isoquant. Then $f(l_A,k_A) = f(l_B,k_B) < f(l_A+1,\,k_B+1)$.

> [!success] Answer
> False. Counter-example: $(l_A,k_A) = (1,9)$ and $(l_B,k_B) = (9,1)$.

Both bundles give $f = 9$, but the bundle $(l_A+1,\,k_B+1) = (2,2)$ gives $f = 4 < 9$, which is a **lower** isoquant.

> [!tip] Intuition
> The statement adds one unit of each input, but it mixes $l_A$ with $k_B$. When the two bundles are far apart, $l_A$ is small and $k_B$ is small, so "adding one" to the wrong pair does not help much. The claim would be safe only for the same bundle: $(l+1,k+1)$ always beats $(l,k)$ here.

### (2) Pareto dominance and a Pareto efficient allocation — **False**

**Statement.** If $A$ Pareto dominates $B$ and $C$ is Pareto efficient, then $C$ Pareto dominates $B$.

> [!success] Answer
> False. Counter-example (utilities):
>
> | Allocation | Agent 1 | Agent 2 |
> |---|---|---|
> | A | 10 | 10 |
> | B | 9 | 9 |
> | C | 100 | 0 |

$A$ dominates $B$ (both agents strictly better). $C$ is Pareto efficient (agent 1 gets everything). But $C$ does **not** dominate $B$: agent 2 gets $0 < 9$.

> [!tip] Intuition
> "Pareto efficient" says nothing about being better than a particular allocation. Efficient allocations can be extremely unequal, and some of them leave one agent worse off than at $B$. Only the efficient allocations that make everyone at least as well off as at $B$ dominate it.

### (3) Change in the consumer's preferences — **False**

**Statement.** In a production economy the representative consumer's utility moves from $U(x,y) = x^a y^{1-a}$ to $U(x,y) = x^b y^{1-b}$ with $b<a$. In the figure (an Edgeworth box of the two firms' inputs, with the blue efficiency locus as the diagonal), point $A$ is the optimal input allocation before the change and $B$ is the allocation after. True or false?

> [!success] Answer
> False. The figure shows a move to **more $X$ and less $Y$**, but the change should do the opposite.

The [[PPF]] is the same before and after, because only preferences changed, not technology. With $b<a$ the consumer weights $y$ more heavily (the exponent on $y$ rises from $1-a$ to $1-b$). The new optimum on the same PPF therefore has **less $X$ and more $Y$**. The figure moves $A \to B$ along the locus in the direction of more $X$, so it cannot be right.

> [!tip] Intuition
> Moving along the [[Efficiency Locus]] is moving along the [[PPF]]. A taste shift towards $y$ must slide the economy towards $y$.

### (4) Equilibrium never equals the endowment — **True**

**Statement.** $U_1 = x_1^{a} y_1^{1-a}$ and $U_2 = 4\cdot x_2^{a} y_2^{1-a}$, with $a<0<1$ (as printed; clearly meant $0<a<1$). Endowments: $\omega_1 = (20,30)$, $\omega_2 = (30,20)$. The equilibrium allocation never equals the endowment allocation.

> [!success] Answer
> True. The contract curve is the straight line $y_1 = x_1$ for any $a$, and the endowment is **not** on it.

The two agents have the same Cobb-Douglas shares (the factor 4 does not change the MRS). So $MRS_1 = MRS_2$ gives $\frac{y_1}{x_1} = \frac{y_2}{x_2}$, i.e. each agent holds the same ratio as the economy as a whole: $\frac{Y}{X} = \frac{50}{50} = 1$, so $y_1 = x_1$. A competitive equilibrium is Pareto efficient ([[First Welfare Theorem]]), so it lies on this line. The endowment $\omega_1 = (20,30)$ has $\omega_{1y} = 30 \neq 20 = \omega_{1x}$, so it is off the line.

> [!tip] Intuition
> At the endowment agent 1 holds $y/x = 1.5$ and agent 2 holds $y/x = 2/3$. Their MRSs differ, so there are gains from trade and the endowment cannot be an equilibrium.

### (5) An allocation not Pareto dominated — **False**

**Statement.** Same preferences, $\overline{X} = 10$, $\overline{Y} = 40$. The allocation $(x_1,y_1) = (1,5)$, $(x_2,y_2) = (9,35)$ is not Pareto dominated by any allocation.

> [!success] Answer
> False. The contract curve is $y_1 = 4x_1$, and $(1,5)$ is not on it, so the allocation is **not Pareto efficient**, hence it is Pareto dominated by some allocation.

Same logic as (4): $\frac{y_1}{x_1} = \frac{Y}{X} = 4$. At $(1,5)$ the ratio is $5 \ne 4$. By definition, an allocation that is not Pareto efficient is dominated by some feasible allocation.

### (6) A maximal price improves consumer surplus — **False**

**Statement.** In the partial equilibrium model, setting a maximal price necessarily improves consumer surplus.

> [!success] Answer
> False. Take increasing marginal cost and a ceiling close to zero.

The firm then supplies almost nothing, so quantity traded is almost zero and consumer surplus is almost zero. Without the ceiling, consumer surplus at the equilibrium price is strictly positive. So the ceiling made consumers **worse off**.

> [!tip] Intuition
> A ceiling gives consumers a lower price on the units still traded but cuts the number of units. For a mild ceiling the first effect wins; for a harsh one the second does. "Necessarily" is the word that makes the statement false. See [[Price Ceiling]].

### (7) A minimal price impairs consumer surplus — **True**

**Statement.** In the partial equilibrium model, setting a minimal price necessarily impairs consumer surplus.

> [!success] Answer
> True. A minimum price forces the market price **strictly above** the equilibrium price, so consumer surplus is smaller than at equilibrium.

Two things hurt consumers at once: they pay more per unit, and the quantity traded falls (the short side is demand). Both effects reduce the area under the demand curve and above the price.

> [!warning] Reading of "minimal price"
> The official solution treats the floor as **binding** (set above the equilibrium price). A floor at or below equilibrium changes nothing, so consumer surplus would be unchanged rather than lower. State the binding assumption in your answer.

### (8) Constant marginal cost and a demand increase — **False**

**Statement.** The firm's cost function is $C(x) = a\cdot x$, $a>0$. An increase in demand raises the firm's equilibrium profit.

> [!success] Answer
> False. Marginal cost is the constant $C'(x) = a$, so in equilibrium $p = a$ and the firm earns **zero profit** whatever the demand.

Demand moves quantity, not price. Each unit sells at marginal cost, so profit per unit is zero.

> [!tip] Intuition
> Same logic as the perfect-substitutes supply in [[PP_04-Perfect Substitutes, Exchange Equilibrium, Minimum Price & Social Planner (2024 Moed A)|PP_04]]: a flat supply curve leaves no surplus for the firm.

### (9) Forced quantities and the efficiency locus — **False**

**Statement.** In an equilibrium of a production economy, firm 1 (2) is required to produce $x$ ($y$) different from the equilibrium quantity $x^*$ ($y^*$). The demanded quantities of labour and capital necessarily correspond to a point on the efficiency locus.

> [!success] Answer
> False. As in the class proof that the equilibrium allocation is optimal, equilibrium prices only clear the input markets **at the equilibrium quantities**.

At other forced quantities, the firms' cost-minimising demands at those prices need not add up to the available inputs: one input is over-demanded and the other under-demanded. Inputs would not be fully allocated, so the point is not on the [[Efficiency Locus]].

### (10) MRS above RPT — **False**

**Statement.** On the PPF at a point where the consumer's MRS is strictly greater than the RPT, the amount of $X$ is greater than under the optimal allocation.

> [!success] Answer
> False. The amount of $X$ at that point is **smaller** than at the optimum.

If $MRS > RPT$, the consumer values an extra unit of $X$ (in terms of $Y$) more than the economy has to give up to produce it. The economy should move along the [[PPF]] towards **more $X$ and less $Y$**, so the optimal $X$ is greater than at this point.

---

## Q2 — Production economy with quasilinear utility (25 points)

**Setup.** Two firms: $f_1(l_1,k_1) = l_1^{a}k_1^{1-a}$ and $f_2(l_2,k_2) = l_2^{a}k_2^{1-a}$, $0<a<1$. The representative consumer has $U(x,y) = c\cdot x + y$. Resources: $k_1+k_2 = 50$ and $l_1+l_2 = 50$. Firm 1 makes $X$, firm 2 makes $Y$.

> [!warning] A stray "b" in the official slides
> The printed question has **no** $b$ in $f_2$, but the official slides carry a factor $b$ in $y = b\,(50-l_1)$ and in the corner answer $y = 50b$. The slide that gives the PPF drops it ($y = 50 - x$), and the later answers ($y = 49\tfrac34$, $y = 99\tfrac34$) also use $b=1$. This note follows the printed question, so **$b = 1$**. See the "Economic reasoning" box in part 2 for the role $b$ plays when it is present.

### 1a — Efficiency locus (3 points)

> [!success] Answer
> $k_1 = l_1$ (the diagonal of the input box).

$$
MP_{l_1} = a\,l_1^{a-1}k_1^{1-a}, \qquad MP_{k_1} = (1-a)\,l_1^{a}k_1^{-a}
$$

$$
RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \frac{a\,k_1}{(1-a)\,l_1}, \qquad RTS_2 = \frac{a\,k_2}{(1-a)\,l_2}
$$

Efficiency needs $RTS_1 = RTS_2$ (see [[Efficiency Locus]]), so $\frac{k_1}{l_1} = \frac{k_2}{l_2} = \frac{50-k_1}{50-l_1}$. Cross-multiplying: $k_1(50-l_1) = l_1(50-k_1)$, so $50k_1 = 50l_1$, i.e. $k_1 = l_1$.

### 1b — Production possibility frontier (3 points)

> [!success] Answer
> $y = 50 - x$

On the locus $k_1 = l_1$, so $x = l_1^{a}l_1^{1-a} = l_1$. Firm 2 gets the rest, $l_2 = k_2 = 50-l_1$, so $y = (50-l_1)^{a}(50-l_1)^{1-a} = 50-l_1 = 50-x$.

> [!tip] Intuition
> Both firms are constant returns to scale and have the same technology, so at equal input ratios one unit of "input pair" makes one unit of either good. The [[RPT]] is therefore $1$ at every point: the PPF is a straight line.

### 1c — Optimal allocation with $c = 2$ (4 points)

> [!success] Answer
> $x = 50$, $y = 0$, $l_1 = k_1 = 50$, $l_2 = k_2 = 0$.

With $U = 2x + y$ the $MRS = 2$ at every point, while the $RPT = 1$ everywhere. Since $\frac{p_x}{p_y} < MRS$ (the consumer would pay 2 units of $y$ for a unit of $x$ but only has to give up 1), the economy should keep shifting resources to $X$ until it runs out: a **corner solution**. All inputs go to firm 1.

![[PP06_q2_ppf_corner_vs_interior.png|760]]

*Left panel: the indifference line (slope $-2$) is steeper than the PPF (slope $-1$), so utility is highest at the $X$ corner.*

### 2 — Optimum with $c = 0.5$, and why it differs (5 points)

> [!success] Answer
> $x = 0$, $y = 50$ (the official slides write $y = 50b$), with $l_2 = k_2 = 50$ and $l_1 = k_1 = 0$.

Now $MRS = 0.5 < RPT = 1$: giving up a unit of $y$ to make a unit of $x$ costs more (1) than the consumer will pay (0.5). So only $Y$ is produced. The corner flips from $X$ (part 1c) to $Y$ (middle panel above).

> [!success] Official economic reasoning
> The optimum is a corner: only $X$ or only $Y$ is produced. Two things decide which:
> - the **relative productivity of $Y$**, shown by $b$: how many units of $y$ the economy gets for giving up one unit of $x$ (the slope of the PPF);
> - the **relative utility of $X$**, shown by $c$: how many units of $y$ the consumer would pay for one unit of $x$.
>
> If $c$ is above the PPF slope, produce only $X$; if below, produce only $Y$.

> [!tip] Intuition
> With a linear PPF and linear utility, there is no curvature to balance the two goods. The comparison is "my willingness to pay" against "the economy's opportunity cost", and the larger one wins everything.

### 3 — Optimum with $U = \sqrt{x} + y$ (5 points)

> [!success] Answer
> $x = \tfrac14$, $y = 49\tfrac34$.

The PPF is unchanged ($y = 50 - x$, $RPT = 1$), but the MRS now depends on $x$, so an **interior** solution exists. Set $MRS = RPT$:

$$
MRS = \frac{1}{2\sqrt{x}} = 1 \;\Rightarrow\; \sqrt{x} = \tfrac12 \;\Rightarrow\; x = \tfrac14
$$

Then $y = 50 - \tfrac14 = 49\tfrac34$ (right panel above).

### 4 — Doubling the resources (5 points)

> [!success] Answer
> $x$ stays at $\tfrac14$; $y$ rises to $99\tfrac34$.

Doubling both inputs ($k_1+k_2 = 100$, $l_1+l_2 = 100$) shifts the PPF out to $y = 100 - x$. The RPT is still $1$, and the MRS still equals $\frac{1}{2\sqrt{x}}$, which depends only on $x$. So $MRS = RPT$ gives $x = \tfrac14$ again, and $y = 100 - \tfrac14 = 99\tfrac34$.

> [!success] Official economic reasoning
> Because utility is **quasilinear**, the demand for $x$ does not depend on income or resources (no income effect). All the extra resources go to $y$.

See [[Quasilinear Utility]] for why the good that enters linearly absorbs all changes in wealth.

---

## Q3 — Partial equilibrium with fixed prices (25 points)

**Setup.** Two goods: $X$ and $Y$ (money). Consumer utility $120x - x^2 + y$ (income high enough that there are no corner solutions). Supply by a representative firm with $f(k,l) = l^{1/4}k^{1/4}$, input prices $p_k = p_l = 1$.

### (a) Cost function (8 points)

> [!success] Answer
> $C(x) = 2x^2$, with supply $C'(x) = 4x$.

Cost minimisation: $RTS = \frac{k}{l} = \frac{p_l}{p_k} = 1$, so $k = l$. Then $x = l^{1/4}k^{1/4} = k^{1/2}$, so $k(x) = l(x) = x^2$. Therefore

$$
C(x) = p_l\,l(x) + p_k\,k(x) = x^2 + x^2 = 2x^2, \qquad P^S(x) = C'(x) = 4x
$$

### (b) Competitive equilibrium (7 points)

> [!success] Answer
> $x^e = 20$, $p^e = 80$.

Demand is the marginal utility: $P^D(x) = 120 - 2x$ (see [[Quasilinear Utility]]). Setting $P^D = P^S$ gives $120 - 2x = 4x$, so $x = 20$ and $p = 4\cdot 20 = 80$.

> [!example] Surpluses at the competitive equilibrium (used in (c))
> $$CS = \int_0^{20}(120 - 2x - 80)\,dx = \big[40x - x^2\big]_0^{20} = 800 - 400 = 400$$
> $$PS = \int_0^{20}(80 - 4x)\,dx = \big[80x - 2x^2\big]_0^{20} = 1600 - 800 = 800$$
> $$W = 400 + 800 = 1200$$

### (c) Government fixes $p = 90$ (5 points)

> [!success] Answer
> $x = 15$, $CS = 225$, $PS = 900$, $W = 1125$. Changes: $\Delta CS = -175$, $\Delta PS = +100$, $\Delta W = -75$.

A price of 90 is **above** the equilibrium price (a floor). At 90, demand is $120 - 2x = 90 \Rightarrow x = 15$, while the firm would supply $4x = 90 \Rightarrow x = 22.5$. The short side is demand, so trade is $x = 15$.

$$
CS = \int_0^{15}(120 - 2x - 90)\,dx = \big[30x - x^2\big]_0^{15} = 450 - 225 = 225
$$

$$
PS = \int_0^{15}(90 - 4x)\,dx = \big[90x - 2x^2\big]_0^{15} = 1350 - 450 = 900
$$

$$
W = CS + PS = 225 + 900 = 1125
$$

Against the competitive equilibrium: $\Delta CS = 225 - 400 = -175$, $\Delta PS = 900 - 800 = +100$, $\Delta W = 1125 - 1200 = -75$.

> [!warning] Official wording
> The slide says "there would be excess demand" at 90. In fact at $p = 90 > p^e$ there is excess **supply** ($22.5$ supplied versus $15$ demanded). The number $x = 15$ is correct and is what the calculation uses.

### (d) Government fixes $p = 60$ (5 points)

> [!success] Answer
> $x = 15$, $CS = 675$, $PS = 450$, $W = 1125$.

A price of 60 is **below** equilibrium (a ceiling). At 60, the firm supplies $4x = 60 \Rightarrow x = 15$, while demand is $120 - 2x = 60 \Rightarrow x = 30$. The short side is supply, so trade is again $x = 15$.

$$
CS = \int_0^{15}(120 - 2x - 60)\,dx = \big[60x - x^2\big]_0^{15} = 900 - 225 = 675
$$

$$
PS = \int_0^{15}(60 - 4x)\,dx = \big[60x - 2x^2\big]_0^{15} = 900 - 450 = 450
$$

$$
W = 675 + 450 = 1125
$$

![[PP06_q3_price_controls.png|760]]

*Same quantity (15) at both prices. At 90 the firm collects the rent between demand and supply; at 60 the consumers do.*

> [!success] Official comparison of (c) and (d)
> At both prices the quantity traded is $15$. The difference is **who gets the "green" surplus** on the traded units: the firm when $p = 90$, the consumers when $p = 60$. Total welfare is the same ($1125$) because the quantity is the same; both prices lose $75$ against the competitive $1200$, the [[Deadweight Loss]] from the units between $x = 15$ and $x = 20$ that are not traded.

> [!warning] Assumption behind the numbers
> The consumer surplus integral $\int_0^{15}(P^D - p)\,dx$ assumes that the 15 units go to the consumers who value them most (efficient rationing). If the units were allocated differently, $CS$ at $p=60$ would be lower. The official solution makes this assumption without saying so.

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| P1 (1) | Counter-example on $l\cdot k$ | False: $(1,9),(9,1)$ give $9$, but $(2,2)$ gives $4$ |
| P1 (2) | Utility table | False: $C=(100,0)$ efficient but not above $B=(9,9)$ |
| P1 (3) | Same PPF, taste shift | False: $b<a$ means more $Y$, less $X$ |
| P1 (4) | Contract curve $y_1=x_1$ | True: endowment $(20,30)$ is off the line |
| P1 (5) | Contract curve $y_1=4x_1$ | False: $(1,5)$ is inefficient, so dominated |
| P1 (6) | Ceiling near zero | False: quantity and $CS$ go to about $0$ |
| P1 (7) | Binding floor | True: higher price, lower quantity |
| P1 (8) | Constant MC | False: $p = MC$, profit is $0$ |
| P1 (9) | Prices clear only at equilibrium quantities | False: inputs not fully allocated |
| P1 (10) | $MRS > RPT$ | False: optimum has more $X$ |
| Q2-1a | $RTS_1 = RTS_2$ | $k_1 = l_1$ |
| Q2-1b | Substitute the locus | $y = 50 - x$ |
| Q2-1c | $MRS = 2 > RPT = 1$ | $x = 50$, $y = 0$ |
| Q2-2 | $MRS = 0.5 < RPT = 1$ | $x = 0$, $y = 50$ |
| Q2-3 | $MRS = RPT$ | $x = \tfrac14$, $y = 49\tfrac34$ |
| Q2-4 | Quasilinear: no income effect | $x = \tfrac14$, $y = 99\tfrac34$ |
| Q3a | RTS = price ratio | $C = 2x^2$, $P^S = 4x$ |
| Q3b | $P^D = P^S$ | $x = 20$, $p = 80$ |
| Q3c | Short side at $p=90$ | $CS=225$, $PS=900$, $W=1125$ |
| Q3d | Short side at $p=60$ | $CS=675$, $PS=450$, $W=1125$ |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[PS_02-Isoquants, RTS & Properties of the Profit Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]
- [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]]
- [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
