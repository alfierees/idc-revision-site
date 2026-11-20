---
title: "Corner Solutions, Efficiency Locus, PPF & Fixed Price (2023 Example Exam)"
type: past-paper
status: worked-solution
exam: "Micro 2 Example Final Exam (2023 practice exam, not a real sitting)"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - practice-exam
  - true-false
  - production-economy
  - efficiency-locus
  - ppf
  - partial-equilibrium
  - price-floor
aliases:
  - Micro 2 Example Exam 2023
  - Micro II Example Exam
  - PP03 Micro II
subject: micro-ii
in_scope: true
---

# Corner Solutions, Efficiency Locus, PPF & Fixed Price (2023 Example Exam)

> Part of: [[Micro-Economics II]]
> **Micro 2 Example Final Exam (2023)**, Micro-Economics II, Dr. Boaz Zik. A **practice exam**, not a real sitting. 3 hours, cheat sheet and calculator allowed. Part 1 = 10 true/false statements (5 points each), Q2 = 25 points, Q3 = 25 points.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_02-Isoquants, RTS & Properties of the Profit Function]], [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!info] Source
> Answers follow the **TA recitation** "Micro 2 - 2023, Recitation 12 - Example Exam" (Yosi Ganel, 41 slides). The 2026 version of that recitation was **not** needed. Where the recitation gives a setup but no explicit verdict, that is flagged and the verdict is completed from its own working.

## What this paper tests

| Part | Core idea | Where it is taught |
|---|---|---|
| Part 1 (1), (7) | [[Perfect Substitutes]] technology: corner cost minimisation, comparing [[RTS]] with the input price ratio | [[PS_03-Cost Minimisation & Properties of the Cost Function]] |
| Part 1 (2), (4), (10) | [[Contract Curve]] of Cobb-Douglas agents: what its shape says about preferences | [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]] |
| Part 1 (3) | Profit maximisation with increasing marginal cost | [[Lec_04-Theory of the Firm, Partial & General Equilibrium]] |
| Part 1 (5) | [[PPF]] depends on technology, not on tastes | [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Part 1 (6) | [[Pareto Efficiency]] vs [[Pareto Dominance]] vs a social planner's ranking | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]] |
| Part 1 (8) | [[Externalities]] and Pareto efficiency | [[Lec_05-Production Economy & Externalities]] |
| Part 1 (9), Q3 | [[Partial Equilibrium]] with a fixed price: [[Consumer Surplus]], [[Firm Surplus]], [[Social Welfare]] | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q2 | [[Production Economy]]: [[Efficiency Locus]], PPF, optimal allocation, equilibrium prices | [[Lec_05-Production Economy & Externalities]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |

> [!tip] Intuition: the one move behind each part
> - True/false: for a "necessarily" or "always" claim, **one counterexample** makes it false. For "the contract curve is a line", go back to $MRS_1 = MRS_2$.
> - Q2: find where the two firms' RTS are equal (efficiency locus), turn it into a PPF, then set $RPT = MRS$.
> - Q3: demand is marginal utility, supply is marginal cost; a fixed price above equilibrium means the **short side (demand)** sets the quantity.

---

## Part 1 — True or false (50 points, 5 points each)

### (1) Higher $p_l/p_k$ and the same output $x_0$

**Statement.** A firm makes $x_0$ from capital and labour. The ratio $p_l/p_k$ rises and the firm keeps producing $x_0$. After the change the firm **necessarily** uses less labour and more capital.

> [!success] Answer: False

**Why.** "Necessarily" fails for a technology with corner solutions. Take $f(l,k) = a\,l + b\,k$ ([[Perfect Substitutes]]). When $p_l/p_k$ rises, the firm can:

- switch from the corner "labour only" to the corner "capital only", or
- stay at the same corner (only $l$, or only $k$), where usage does not change at all.

So labour does not have to fall and capital does not have to rise.

> [!tip] Intuition
> With smooth (Cobb-Douglas) isoquants a higher $p_l/p_k$ does shift the firm towards capital. The statement is only false because the claim covers **every** technology. See the bang-bang behaviour in [[PS_03-Cost Minimisation & Properties of the Cost Function]].

### (2) Agent 2's taste parameter moves from $a$ to $b > a$

**Statement.** $U_1 = x_1^a y_1^{1-a}$ and $U_2 = x_2^a y_2^{1-a}$, resources $\bar X, \bar Y$. Agent 2's utility changes to $x_2^b y_2^{1-b}$ with $a<b<1$. Any **interior** allocation on the old contract curve is **no longer Pareto efficient**.

> [!success] Answer: True
> The recitation sets up the two contract curves and the check but stops before stating the verdict. The verdict below is completed from its working.

**Before the change.** $MRS_1 = MRS_2$ gives

$$
\frac{a\,y_1}{(1-a)\,x_1} = \frac{a\,y_2}{(1-a)\,x_2}
\;\Rightarrow\;
\frac{y_1}{x_1} = \frac{y_2}{x_2} = \frac{\bar Y - y_1}{\bar X - x_1}
$$

Cross-multiplying, $\bar X y_1 = \bar Y x_1$: the old contract curve is the **diagonal** of the [[Edgeworth Box]].

**After the change.** The condition becomes

$$
\frac{a\,y_1}{(1-a)\,x_1} = \frac{b\,(\bar Y - y_1)}{(1-b)\,(\bar X - x_1)}
$$

**Check an old point.** Take any interior point $(\tilde x_1, \tilde y_1)$ on the old diagonal. There $\frac{\tilde y_1}{\tilde x_1} = \frac{\bar Y - \tilde y_1}{\bar X - \tilde x_1}$, so the common ratio $y/x$ cancels from both sides and the new condition would need

$$
\frac{a}{1-a} = \frac{b}{1-b}
$$

But $\frac{a}{1-a}$ is strictly increasing in $a$, so $a<b$ gives $\frac{a}{1-a} < \frac{b}{1-b}$. The MRS are **not equal** at the old point, so it is no longer Pareto efficient.

> [!tip] Intuition
> The diagonal was efficient only because both agents had the **same** tastes. Once agent 2 values $x$ relatively more, trade is possible at every interior diagonal point (agent 2 buys $x$ from agent 1 for $y$). The edge points are excluded because there one agent holds nothing of a good and the MRS comparison is not interior.

### (3) $C'(0) > p$ and $C''(x) > 0$

> [!success] Answer: True

The marginal cost of the very first unit already exceeds the price. Since $C''>0$, marginal cost is **rising**, so every further unit costs even more. At every positive quantity the firm would make a loss on the margin, so the profit-maximising quantity is **0**.

### (4) Two exchange economies with $a$ vs $b$

**Statement.** Economy 1: both agents have $x^a y^{1-a}$. Economy 2: both agents have $x^b y^{1-b}$, with $0<a<b<1$. Resources $\bar X = 50$, $\bar Y = 70$ in both. The contract curve is the same.

> [!success] Answer: True
> Again the recitation derives both contract curves, finds them identical, and does not print the word "True".

In economy 1:

$$
\frac{a\,y_1}{(1-a)\,x_1} = \frac{a\,y_2}{(1-a)\,x_2}
\;\Rightarrow\;
\frac{y_1}{x_1} = \frac{70 - y_1}{50 - x_1}
\;\Rightarrow\;
x_1 = \frac{50\,y_1}{70}
$$

In economy 2 the same steps give the same equation, because $\frac{b}{1-b}$ cancels exactly as $\frac{a}{1-a}$ did. When the two agents have **identical** preferences, the contract curve is the box diagonal whatever the parameter is.

> [!warning] Contrast with (2)
> (4) changes **both** agents together, so the tastes stay identical and the curve does not move. (2) changes **only agent 2**, so the tastes diverge and the curve moves.

### (5) Representative consumer's $a$ rises to $b$: does the PPF shift?

> [!success] Answer: False

The PPF depends only on **technology and resource endowments**. The consumer's utility chooses **which point** on the PPF is produced (the tangency $RPT = MRS$), but it does not move the frontier itself.

### (6) Efficient $a$, inefficient $b$, planner prefers $a$

**Statement.** If a social planner prefers allocation $a$ (Pareto efficient) to $b$ (not efficient), then $a$ Pareto dominates $b$.

> [!success] Answer: False

**Counterexample (official).** $U_1 = x_1 y_1$, $U_2 = x_2 y_2$, endowments $(10,10)$ each, planner welfare $W = U_1 \cdot U_2$. The contract curve is $x_1 = y_1$.

| Allocation | $(x_1,y_1)$, $(x_2,y_2)$ | On contract curve? | $U_1$ | $U_2$ | $W$ |
|---|---|---|---|---|---|
| $a$ | $(10,10)$, $(10,10)$ | yes, Pareto efficient | 100 | 100 | 10,000 |
| $b$ | $(1,2)$, $(19,18)$ | no ($y_1/x_1 = 2 \ne 18/19$), not efficient | 2 | 342 | 684 |

The planner prefers $a$ to $b$ (10,000 vs 684), yet **agent 2 is worse off** at $a$ ($100 < 342$). So $a$ does not Pareto dominate $b$.

> [!tip] Intuition
> [[Pareto Dominance]] needs **every** agent weakly better off. A planner's score trades one agent's gain against another's loss, so it can rank $a$ higher while someone loses. See [[PS_05-Pareto Efficiency, Dominance & Social Welfare]].

### (7) $f = 2l + 3k$, $p_l = 4$, $p_k = 5$, output 6

**Statement.** The firm uses only labour.

> [!success] Answer: False

$$
RTS = \frac{MP_l}{MP_k} = \frac23, \qquad \frac{p_l}{p_k} = \frac45
$$

Since $\frac23 < \frac45$, labour is relatively too expensive for what it delivers: the firm uses **only capital** ($k = 6/3 = 2$).

> [!tip] Intuition: output per dollar
> Labour gives $\frac{2}{4} = 0.5$ units per dollar, capital gives $\frac{3}{5} = 0.6$ units per dollar. Capital is the better buy, so the corner is "capital only". This is the same test as $\frac{a}{p_l}$ vs $\frac{b}{p_k}$ for perfect substitutes.

### (8) Exchange economy with externalities

**Statement.** The equilibrium is **necessarily** not Pareto efficient.

> [!success] Answer: False

Use the whisky and cigars example from the lecture ([[Lec_05-Production Economy & Externalities]]). There can be a situation where, at every point in the box, the marginal utility gain from smoking one more cigar is **larger** than the damage it does to the other agent. Then cutting a cigar would **lower** total benefit, so the equilibrium is still efficient.

> [!warning] Exam trap
> "Externality" does not automatically mean "market failure". Inefficiency arises only when the external damage outweighs the private gain at the margin. The word "necessarily" is the clue that a single counterexample is enough.

### (9) A maximal price always raises consumer surplus

> [!success] Answer: False

A [[Price Ceiling]] has two opposing effects on [[Consumer Surplus]]:

- the **lower price** raises surplus on every unit still bought;
- the **lower quantity** (a binding ceiling cuts quantity traded to what firms supply) loses surplus on the units that are no longer sold.

The net effect can go either way, so "always" is false. The recitation points to the problem set on this topic; in this vault that is [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] (the recitation calls it "Problem set 3", a numbering mismatch).

### (10) Straight-line contract curve

**Statement.** $U_1 = x_1^a y_1^{1-a}$ and $U_2 = c\,(x_2^b y_2^{1-b})$. The contract curve is a straight line (a diagonal, as the box figure shows). Then we must have $b = a$.

> [!success] Answer: True

If $b \neq a$, the tangency condition

$$
\frac{a\,y_1}{(1-a)\,x_1} = \frac{b\,y_2}{(1-b)\,x_2}
$$

does not reduce to $\frac{y_1}{x_1} = \frac{y_2}{x_2}$, so the contract curve is **not** the straight diagonal. Only $b = a$ gives the line. The constant $c$ scales utility but does not enter the MRS.

---

## Q2 — Production economy (25 points)

Firms: $f_1(l_1,k_1) = 2\,l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = 2\,l_2^{1/3}k_2^{2/3}$ (firm 1 makes $X$, firm 2 makes $Y$). The representative consumer has $U(x,y) = x^{1/3}y^{2/3}$. Resources: $k_1 + k_2 = 50$ and $l_1 + l_2 = 50$.

> [!warning] Typos in the printed question and recitation
> The question prints the utility as $x^{1/3}l^{2/3}$; the second good is $y$ ($U = x^{1/3}y^{2/3}$), as the solution uses. The recitation also labels firm 2's function "$f_1(l_2,k_2)$"; it is $f_2$.

### a. Efficiency locus (5 points)

> [!success] Answer
> $k_1 = l_1$

Marginal products of firm 1:

$$
MP_{l_1} = \frac{2\,l_1^{-2/3}k_1^{2/3}}{3}, \qquad MP_{k_1} = \frac{4\,l_1^{1/3}k_1^{-1/3}}{3}
$$

$$
RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \frac{k_1}{2\,l_1}, \qquad RTS_2 = \frac{k_2}{2\,l_2}
$$

Equate the RTS and substitute $k_2 = 50 - k_1$, $l_2 = 50 - l_1$:

$$
\frac{k_1}{2\,l_1} = \frac{50 - k_1}{2\,(50 - l_1)}
\;\Rightarrow\;
k_1 = l_1
$$

![[PP03_q2_efficiency_locus.png|440]]

*The efficiency locus is the diagonal of the input box. The dot marks the optimum found in part c.*

> [!tip] Intuition
> Both firms have the same Cobb-Douglas exponents, so their RTS are equal exactly when both use the same capital-labour ratio. With the same totals of 50 each, that is the diagonal. Same logic as the identical-agents contract curve in Part 1. See [[PS_08-Production Economy, Efficiency Locus & Input Allocation]].

### b. Production possibility frontier (5 points)

> [!success] Answer
> $y = 100 - x$

On the locus $k_1 = l_1$:

$$
x = 2\,l_1^{1/3}l_1^{2/3} = 2\,l_1
$$

$$
y = 2\,(50 - l_1)^{1/3}(50 - l_1)^{2/3} = 2\,(50 - l_1) = 100 - 2\,l_1 = 100 - x
$$

### c. Optimal allocation (5 points)

> [!success] Answer
> $x^* = \tfrac{100}{3}$, $y^* = \tfrac{200}{3}$, $l_1^* = k_1^* = \tfrac{50}{3}$, $l_2^* = k_2^* = \tfrac{100}{3}$

The slope of the PPF gives the [[RPT]]:

$$
RPT = 1
$$

The consumer's [[MRS]]:

$$
MRS = \frac{y}{2x}
$$

Set $RPT = MRS$ and use the PPF:

$$
1 = \frac{y}{2x} \;\Rightarrow\; y = 2x, \qquad 2x = 100 - x \;\Rightarrow\; x = \frac{100}{3},\; y = \frac{200}{3}
$$

Inputs follow from $x = 2\,l_1$, so $l_1 = k_1 = \frac{50}{3}$ and $l_2 = k_2 = 50 - \frac{50}{3} = \frac{100}{3}$.

![[PP03_q2_ppf_optimum.png|520]]

*The planner picks the point where the consumer's indifference curve just touches the PPF.*

### d. Equilibrium prices (5 points)

> [!success] Answer
> $p_x^* = 1$, $p_y^* = 1$, $p_l^* = \tfrac23$, $p_k^* = \tfrac43$

**Output prices.** At the optimum the consumer's MRS equals the price ratio:

$$
MRS(x^*,y^*) = \frac{y^*}{2x^*} = \frac{200/3}{2 \cdot 100/3} = 1 = p_x^*
$$

with $p_y = 1$ as the numeraire.

**Input prices.** Firm 1's RTS equals the input price ratio:

$$
RTS(k_1^*, l_1^*) = \frac{k_1}{2\,l_1} = \frac12 = \frac{p_l^*}{p_k^*}
$$

Firm 1's cost function. From $\frac{k_1}{2 l_1} = \frac{p_l}{p_k}$ we get $k_1 = 2\,l_1\,\frac{p_l}{p_k}$. Substituting into $x = 2\,l_1^{1/3}k_1^{2/3}$:

$$
x = 2^{5/3}\,l_1\left(\frac{p_l}{p_k}\right)^{2/3}
$$

so the conditional input demands are

$$
l_1 = \frac{x}{2^{5/3}}\left(\frac{p_k}{p_l}\right)^{2/3}, \qquad k_1 = \frac{x}{2^{2/3}}\left(\frac{p_l}{p_k}\right)^{1/3}
$$

$$
C(x) = p_l\,\frac{x}{2^{5/3}}\left(\frac{p_k}{p_l}\right)^{2/3} + p_k\,\frac{x}{2^{2/3}}\left(\frac{p_l}{p_k}\right)^{1/3}
$$

and $C'(x)$ is the same expression with $x$ removed. At $\frac{p_l}{p_k} = \frac12$ (so $\frac{p_k}{p_l} = 2$) this simplifies to

$$
C'(x) = \frac{p_l}{2} + \frac{p_k}{2}
$$

In equilibrium $p_x^* = C'(x^*)$ with $p_x^* = 1$:

$$
1 = \frac{p_l + p_k}{2} \;\Rightarrow\; p_l + p_k = 2
$$

With $p_k = 2\,p_l$: $3\,p_l = 2$, so $p_l^* = \frac23$ and $p_k^* = \frac43$.

> [!tip] Intuition
> Quick check: the firm's revenue at the optimum is $p_x x^* = \frac{100}{3}$, its input bill is $\frac23\cdot\frac{50}{3} + \frac43\cdot\frac{50}{3} = \frac{100}{3}$. Zero profit, as expected for constant returns to scale.

### e. Proportions with $U = x^a y^{1-a}$ (5 points)

> [!success] Answer
> $x = 100\,a$ and $y = 100\,(1-a)$, i.e. $\dfrac{x}{y} = \dfrac{a}{1-a}$

$$
RPT = 1 = \frac{a\,y}{(1-a)\,x} = MRS \;\Rightarrow\; \frac{x}{y} = \frac{a}{1-a}
$$

With $y = 100 - x$:

$$
(1-a)\,x = a\,(100 - x) \;\Rightarrow\; x = 100\,a
$$

so $y = 100\,(1 - a)$. For $a = \tfrac13$ this reproduces part c.

> [!tip] Intuition
> The PPF is a straight line of slope $-1$ (constant RPT), so the Cobb-Douglas consumer simply spends the expenditure share $a$ on $x$: the output share of $x$ is $a$.

---

## Q3 — Partial equilibrium with a fixed price (25 points)

Demand comes from a representative consumer with quasilinear utility $100x - x^2 + y$ ($y$ is money). Supply comes from a firm with $f(l,k) = l^{1/4}k^{1/4}$, $p_l = p_k = \tfrac12$.

> [!info] Setup used in every part
> For [[Quasilinear Utility]] the inverse demand is the marginal utility, $P^D(x) = 100 - 2x$. The inverse supply is marginal cost, $P^S(x) = C'(x)$.

### a. Cost function (5 points)

> [!success] Answer
> $C(x) = x^2$

The tangency condition:

$$
RTS = \frac{k}{l} = \frac{p_l}{p_k} = 1 \;\Rightarrow\; k = l
$$

On the isoquant $x = l^{1/4}k^{1/4} = l^{1/2}$, so $l(x) = k(x) = x^2$ and

$$
C(x) = \frac12\,x^2 + \frac12\,x^2 = x^2, \qquad C'(x) = 2x
$$

### b. Equilibrium (5 points)

> [!success] Answer
> $x^e = 25$, $p^e = 50$

$$
P^D = 100 - 2x = 2x = P^S \;\Rightarrow\; x^e = 25,\; p^e = 50
$$

**Competitive-equilibrium benchmarks** (used in part c):

| Quantity | Calculation | Value |
|---|---|---|
| [[Social Welfare]] | $\int_0^{25}(100 - 2x - 2x)\,dx = 100\cdot25 - 2\cdot25^2 = 2500 - 1250$ | **1,250** |
| [[Consumer Surplus]] | $\int_0^{25}(100 - 2x - 50)\,dx = 1250 - 625$ | **625** |
| [[Firm Surplus]] | $\int_0^{25}(50 - 2x)\,dx = 1250 - 625$ | **625** |

### c. Government fixes the price at 60 (10 points)

> [!success] Answer
> Quantity $x = 20$. Consumer surplus **400** (down from 625), firm surplus **800** (up from 625), social welfare **1,200** (down from 1,250).

At $p = 60$, supply would be $2x = 60 \Rightarrow x = 30$ but demand is only $100 - 2x = 60 \Rightarrow x = 20$. There is **excess supply**, so the quantity traded is the short side, demand: $x = 20$.

| Quantity | Calculation | Value | vs equilibrium |
|---|---|---|---|
| [[Social Welfare]] | $\int_0^{20}(100 - 4x)\,dx = 2000 - 800$ | 1,200 | falls ($< 1250$) |
| [[Consumer Surplus]] | $\int_0^{20}(100 - 2x - 60)\,dx = 40\cdot20 - 400$ | 400 | falls ($< 625$) |
| [[Firm Surplus]] | $\int_0^{20}(60 - 2x)\,dx = 60\cdot20 - 400$ | 800 | rises ($> 625$) |

Check: $400 + 800 = 1200$, so the [[Deadweight Loss]] is $1250 - 1200 = 50$.

![[PP03_q3_fixed_price_surplus.png|640]]

*Left: a price of 60 (quantity 20). Consumers lose, firms gain. Right: a price of 90 (quantity 5), where firm surplus falls to 425.*

### d. Government fixes the price at 90 (5 points)

> [!success] Answer
> **No**, the firm does not benefit: its surplus falls from 625 to 425.

At $p = 90$: demand gives $100 - 2x = 90$, so $x = 5$ (again excess supply, demand is the short side).

$$
\text{Firm surplus} = \int_0^5 (90 - 2x)\,dx = 90\cdot5 - 25 = 425 < 625
$$

**Economic explanation (official).** The price is higher, but the quantity sold is much lower. For the producer there is a **trade-off between price and quantity**: the extra margin on 5 units does not make up for the surplus lost on the 20 units that are no longer sold.

> [!tip] Intuition: where the break-even sits (my addition, not in the official solution)
> For any fixed price $\tilde p$ above 50, $x = \frac{100 - \tilde p}{2}$ and firm surplus is $\frac{(100 - \tilde p)(3\tilde p - 100)}{4}$. This equals 625 at $\tilde p = 50$ (the equilibrium) and again at $\tilde p = \frac{250}{3} \approx 83.3$, and is higher in between (for example 800 at 60). So 60 helps the firm and 90 hurts it, consistent with the official answers.

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| P1 (1) | Corner solutions | False: the firm may switch corner or stay put |
| P1 (2) | Contract curve before and after | True (verdict completed from the working): old diagonal has unequal MRS once $a<b$ |
| P1 (3) | Rising MC with $C'(0) > p$ | True: optimal quantity is 0 |
| P1 (4) | Identical agents give the diagonal | True: both economies have the same contract curve |
| P1 (5) | PPF vs tastes | False: tastes pick the point, not the frontier |
| P1 (6) | Counterexample with planner $W = U_1U_2$ | False: 10,000 vs 684 but agent 2 loses |
| P1 (7) | RTS vs $p_l/p_k$ | False: $\frac23 < \frac45$, only capital |
| P1 (8) | Whisky and cigars | False: marginal gain can exceed damage |
| P1 (9) | Price vs quantity effect on CS | False: lower price but lower quantity |
| P1 (10) | $MRS_1 = MRS_2$ | True: a straight line needs $b = a$ |
| Q2a | Equate RTS | $k_1 = l_1$ |
| Q2b | Substitute into $f_1, f_2$ | $y = 100 - x$ |
| Q2c | $RPT = MRS$ | $x = \frac{100}{3}$, $y = \frac{200}{3}$ |
| Q2d | MRS = $p_x$, $p_x = MC$ | $p_x = p_y = 1$, $p_l = \frac23$, $p_k = \frac43$ |
| Q2e | Same, general $a$ | $x = 100a$, $y = 100(1-a)$ |
| Q3a | RTS = price ratio | $C = x^2$ |
| Q3b | $P^D = P^S$ | $x = 25$, $p = 50$ |
| Q3c | Fixed price 60, short side | $CS = 400$, $FS = 800$, $W = 1200$ |
| Q3d | Fixed price 90 | $FS = 425 < 625$: firm loses |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[PS_03-Cost Minimisation & Properties of the Cost Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]
- [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]
- [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
