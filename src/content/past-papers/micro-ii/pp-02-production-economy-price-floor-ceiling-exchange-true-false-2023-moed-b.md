---
title: "Production Economy, Price Floor & Ceiling, Exchange True-False (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed B (March 2023)"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - true-false
  - production-economy
  - efficiency-locus
  - ppf
  - social-planner
  - partial-equilibrium
  - price-floor
  - price-ceiling
aliases:
  - Micro 2 Moed B 2023
  - Micro II Exam March 2023 Moed Bet
  - PP02 Micro II
subject: micro-ii
in_scope: true
---

# Production Economy, Price Floor & Ceiling, Exchange True-False (2023 Moed B)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed Bet (March 2023)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, cheat sheet and calculator allowed. Part 1 is 50 points (ten true/false items, 5 points each); Q2 and Q3 are open questions.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!info] Source
> The paper has two official solution files. **Part 1** has only the circled True/False verdicts (no reasoning), so every explanation below is written here, not copied. **Q2 and Q3** follow the worked official solution (the 7th page of that file is blank). All ten verdicts and every number were re-checked and agree with the official ones. Where the official text has a typo it is flagged with a `> [!warning]`.

## What this paper tests

| Part | Core idea | Where it is taught |
|---|---|---|
| Part 1, items 1, 2, 5, 8, 9, 10 | [[Exchange Economy]]: [[Contract Curve]], [[Walrasian Equilibrium]], [[Walras' Law]], [[Individual Rationality]], the planner | [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]] |
| Part 1, items 3, 6 | [[PPF]] depends on technology only; quasilinear production and marginal cost | [[PS_08-Production Economy, Efficiency Locus & Input Allocation]], [[PS_03-Cost Minimisation & Properties of the Cost Function]] |
| Part 1, items 4, 7 | Planner preferences and [[Pareto Dominance]]; consumer subsidy in [[Partial Equilibrium]] | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q2 | [[Production Economy]]: [[Efficiency Locus]], [[PPF]], [[RPT]] = [[MRS]], equilibrium input prices, a technology shock | [[Lec_05-Production Economy & Externalities]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Q3 | Partial equilibrium with [[Quasilinear Utility]]: a price **above** equilibrium vs a price **below** it, [[Consumer Surplus]], [[Firm Surplus]], [[Social Welfare]], [[Deadweight Loss]] | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |

> [!tip] Intuition: the one move behind each open question
> - Q2: efficient production means equal [[RTS]] across firms, which gives the efficiency locus; the [[PPF]] then turns inputs into outputs, and the optimum is where the consumer's [[MRS]] equals the [[RPT]] (the PPF slope).
> - Q3: demand is the marginal utility, supply is marginal cost. A price fixed by the government means the **short side of the market** trades: demand if the price is above equilibrium, supply if it is below.

---

## Part 1 — True or false (50 points)

### Answer key

| # | Statement in short | Official verdict |
|---|---|---|
| 1 | Swapping the Cobb-Douglas exponents between the agents leaves the contract curve unchanged | **False** |
| 2 | Economy 2 equilibrium gives each agent twice the $x$ of economy 1 | **True** |
| 3 | A higher $b$ in the consumer's utility shifts the PPF out in $x$ | **False** |
| 4 | Planner prefers $a$ to $b$, and $b$ Pareto dominates $c$, so planner prefers $a$ to $c$ | **True** |
| 5 | $0_1$ and $0_2$ are always on the contract curve | **True** |
| 6 | Quasilinear technology: marginal cost equals $p_k$ beyond some quantity | **True** |
| 7 | A consumer price subsidy lowers social welfare | **True** |
| 8 | The planner always prefers equilibrium to any allocation off the contract curve | **False** |
| 9 | Non-equilibrium positive prices give excess demand for one good and excess supply of the other | **True** |
| 10 | Equilibrium utility is at least endowment utility | **True** |

### 1. Same contract curve after swapping exponents? (False)

> [!success] Answer
> **False.** Swapping which agent has exponent $a$ and which has $b$ changes the contract curve unless $a=b$.

Write $k = \frac{a}{1-a}$ and $m = \frac{b}{1-b}$, with $k<m$ because $a<b$. The [[Contract Curve]] is where $MRS_1 = MRS_2$, with $X=Y=50$:

$$
MRS_1 = k\,\frac{y_1}{x_1}, \qquad MRS_2 = m\,\frac{50-y_1}{50-x_1}
$$

Economy 1 (agent 1 has $a$, agent 2 has $b$):

$$
y_1 = \frac{50\,m\,x_1}{50k + (m-k)\,x_1}
$$

Economy 2 swaps the roles ($k$ and $m$ exchange places):

$$
y_1 = \frac{50\,k\,x_1}{50m + (k-m)\,x_1}
$$

At the box centre $x_1 = 25$ economy 1 gives $y_1 = \frac{50m}{k+m}$ and economy 2 gives $\frac{50k}{k+m}$. These differ whenever $k \neq m$, so the curves differ.

> [!tip] Intuition
> The curve bows towards the agent who likes $y$ more. In economy 1 that is agent 1 (who has the smaller exponent $a$ on $x$); in economy 2 it is agent 2. The curves are mirror images of each other, not the same curve.

### 2. Twice the $x$ in economy 2? (True)

> [!success] Answer
> **True.**

In each economy the two agents are **identical** (same Cobb-Douglas exponent) **and have the same endowment**. Then the equilibrium is the no-trade allocation: each agent consumes their own endowment. Both want the same bundle at any price ratio, so the market clears with each keeping what they have.

- Economy 1: each agent consumes $(20, 20)$, so $x = 20$.
- Economy 2: each agent consumes $(40, 30)$, so $x = 40$.

$40 = 2\times 20$.

> [!tip] Intuition
> The exponents $a$ and $b$ are a distraction. When both agents are clones with identical endowments, there are no gains from trade, so the equilibrium allocation equals the endowment.

### 3. Does a change in preferences move the PPF? (False)

> [!success] Answer
> **False.** The [[PPF]] is built from the firms' technologies and the resource constraints only. Preferences do not enter it.

A move from $a$ to $b>a$ puts more weight on $x$, which moves the **optimal point along** the PPF towards more $x$ (the MRS curve changes), but the frontier itself stays where it is.

### 4. Transitivity with Pareto dominance (True)

> [!success] Answer
> **True.**

Two facts about the planner: (i) the planner's preferences are **transitive**; (ii) the planner respects Pareto dominance, because social welfare is increasing in each agent's utility, so if $b$ dominates $c$ the planner prefers $b$ to $c$. Then $a \succ b$ and $b \succ c$ give $a \succ c$.

> [!warning] Assumption
> This needs a planner whose welfare is increasing in the agents' utilities (as in the course's Cobb-Douglas planner of [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]). A planner who ignored Pareto dominance could break the chain.

### 5. Are the origins always on the contract curve? (True)

> [!success] Answer
> **True.**

At $0_1$ agent 2 holds the entire endowment of both goods. Any move gives agent 1 something and so must take it from agent 2, who strictly prefers more of each good ([[Local Nonsatiation]]). So no Pareto improvement exists: the allocation is [[Pareto Efficiency|Pareto efficient]]. The same holds for $0_2$.

> [!tip] Intuition
> The contract curve in the Edgeworth box runs corner to corner, from $0_1$ to $0_2$. Efficiency says nothing about fairness, so "one agent gets everything" is efficient.

### 6. Quasilinear technology and marginal cost (True)

> [!success] Answer
> **True.**

With $f = g(l) + k$ and $g$ concave, $MP_l = g'(l)$ (decreasing) and $MP_k = 1$. The [[RTS]] is $g'(l)$, and the [[Tangency Condition]] is $g'(l^*) = p_l/p_k$, which fixes labour at one constant level $l^*$ regardless of output.

- For small $q$ (below $g(l^*)$) the firm hits the corner $k=0$ and uses only labour.
- For $q \ge g(l^*)$ labour stays at $l^*$ and all extra output comes from capital: $k = q - g(l^*)$.

So for large $q$:

$$
C(q) = p_l\,l^* + p_k\,\big(q - g(l^*)\big), \qquad C'(q) = p_k
$$

Beyond the threshold $g(l^*)$, marginal cost equals the price of capital.

### 7. Consumer price subsidy in partial equilibrium (True)

> [!success] Answer
> **True** (social welfare falls).

A subsidy to buyers pushes trade **above** the competitive quantity. For the extra units, the marginal cost exceeds the marginal value, so each extra unit destroys value. Counting the government's cost of the subsidy, social welfare falls by the [[Deadweight Loss]] triangle. Only at the competitive quantity is $W(x) = v(x) - C(x)$ maximised.

### 8. Planner prefers equilibrium to any off-curve allocation? (False)

> [!success] Answer
> **False.**

A planner who puts heavy weight on one agent can prefer an allocation that gives that agent much more, even if that allocation is inefficient, to a balanced equilibrium. Being off the contract curve only means *some* allocation Pareto dominates it, not that the equilibrium beats it **for this planner**.

> [!tip] What would make it true
> The statement would be true for any allocation that the equilibrium **Pareto dominates**, since a planner who respects Pareto dominance prefers the equilibrium to those. It is not true for every off-curve allocation.

### 9. Prices that are not an equilibrium (True)

> [!success] Answer
> **True.**

[[Walras' Law]]: for any positive prices, $p_x z_x + p_y z_y = 0$ where $z$ is excess demand. If $z_x = 0$ then $p_y z_y = 0$ forces $z_y = 0$, which would be an equilibrium. So at non-equilibrium prices both $z_x$ and $z_y$ are non-zero, and since $p_x z_x = -p_y z_y$ with positive prices they have **opposite signs**: excess demand for one good and excess supply of the other.

### 10. Equilibrium utility vs endowment utility (True)

> [!success] Answer
> **True.**

The endowment is always affordable (it costs exactly the agent's income), so the agent could choose it. The optimum on the same budget set is at least as good: $U_i(x_i^*) \ge U_i(\omega_i)$. This is [[Individual Rationality]]; it is why every equilibrium lies in the [[Core]]-style "lens" inside the box.

---

## Q2 — Production economy (points not stated in the sources)

Firms: $f_1(l_1,k_1) = 2\,l_1^{1/3}k_1^{2/3}$ and $f_2(l_2,k_2) = 2\,l_2^{1/3}k_2^{2/3}$. Representative consumer $U(x,y) = x^{1/3}y^{2/3}$. Resources: $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

> [!warning] Typo in the question paper
> The printed utility reads $U(x,y) = x^{1/3}\,l^{2/3}$. The solution uses $U(x,y) = x^{1/3}y^{2/3}$, so the "$l$" is a typo for $y$.

### a. Efficiency locus

> [!success] Answer
> $k_1 = l_1$

Efficient production needs $RTS_1 = RTS_2$ ([[Efficiency Locus]]). For firm 1:

$$
MP_{l_1} = \tfrac23\,l_1^{-2/3}k_1^{2/3}, \qquad MP_{k_1} = \tfrac43\,l_1^{1/3}k_1^{-1/3}
$$

$$
RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \frac{k_1}{2\,l_1}
$$

Firm 2 is identical, so $RTS_2 = \frac{k_2}{2\,l_2}$. Equating:

$$
\frac{k_1}{l_1} = \frac{k_2}{l_2} = \frac{50 - k_1}{50 - l_1}
$$

Cross-multiplying: $k_1(50 - l_1) = l_1(50 - k_1)$, so $50k_1 = 50 l_1$, i.e. $k_1 = l_1$.

> [!warning] Minor typo in the official working
> The official text prints the marginal products without the constant 2 from the production function ($\frac13 l^{-2/3}k^{2/3}$ and $\frac23 l^{1/3}k^{-1/3}$). The factor 2 multiplies both and cancels in the ratio, so $RTS = \frac{k}{2l}$ and the answer are unaffected.

> [!tip] Intuition
> Both firms have the same technology, so efficiency means they use inputs in the same proportion. In the input box that is the diagonal.

### b. Production possibility frontier

> [!success] Answer
> $y = 100 - x$

On the locus $k_1 = l_1$ and $k_2 = l_2 = 50 - l_1$:

$$
x = 2\,l_1^{1/3}l_1^{2/3} = 2\,l_1, \qquad y = 2\,(50 - l_1)
$$

So $l_1 = x/2$ and $y = 100 - 2\,l_1 = 100 - x$.

### c. Optimal allocation

> [!success] Answer
> $x^* = 33\tfrac13$, $y^* = 66\tfrac23$, $l_1^* = k_1^* = 16\tfrac23$, $l_2^* = k_2^* = 33\tfrac13$.

The [[RPT]] is the (absolute) slope of the PPF, which is $1$. The consumer's [[MRS]]:

$$
MRS = \frac{\tfrac13 x^{-2/3}y^{2/3}}{\tfrac23 x^{1/3}y^{-1/3}} = \frac{y}{2x}
$$

Set $RPT = MRS$: $1 = \frac{y}{2x}$, so $y = 2x$. Into the PPF: $2x = 100 - x$, so $x^* = \frac{100}{3}$ and $y^* = \frac{200}{3}$. Then $l_1 = x/2 = \frac{50}{3} = 16\tfrac23$ and $l_2 = 50 - l_1 = 33\tfrac13$, with $k = l$ in each firm.

![[PP02_q2_efficiency_locus_and_ppf.png|700]]

*Left: the efficiency locus is the diagonal of the input box and the optimum sits on it. Right: the optimum is where the indifference curve is tangent to the PPF.*

### d. Equilibrium prices

> [!success] Answer
> $p_x = 1$ (with $p_y = 1$ as numeraire), $p_l^* = \tfrac23$, $p_k^* = \tfrac43$.

At the optimum $MRS = \frac{p_x}{p_y}$. With $p_y = 1$:

$$
MRS(x^*,y^*) = \frac{66\tfrac23}{2\cdot 33\tfrac13} = 1 = p_x^*
$$

Firms: cost minimisation requires $RTS = \frac{p_l}{p_k}$. At $k_1^* = l_1^*$ this is $\frac12$, so $p_k = 2p_l$ and $k_1 = l_1$ as expected. Firm 1's cost to produce $x = 2l_1$ (so $l_1 = k_1 = x/2$):

$$
C(x) = p_l\,\frac{x}{2} + p_k\,\frac{x}{2} = \frac{3}{2}\,p_l\,x
$$

Profit maximisation gives $C'(x) = p_x = 1$, so $\frac32 p_l = 1$:

$$
p_l^* = \tfrac23, \qquad p_k^* = 2p_l^* = \tfrac43
$$

> [!example] Check (not in the official solution)
> Firm 1 revenue $= 1\cdot\frac{100}{3}$, cost $= \frac23\cdot\frac{50}{3} + \frac43\cdot\frac{50}{3} = \frac{100}{3}$, so profit is zero, as constant returns require. Total input income $= \frac23\cdot 50 + \frac43\cdot 50 = 100 = x^* + y^*$.

### e. Technology change: $f_2 = 4\,l_2^{1/3}k_2^{2/3}$

> [!success] Answer
> $x^*$ **stays the same**, $y^*$ **increases**, so the ratio $\frac{y^*}{x^*}$ **increases**. Good $y$ is now relatively cheaper to produce.

The efficiency locus is still $k_1 = l_1$ (the constant 4 cancels in the RTS). With $l_2 = 50 - l_1$:

$$
x = 2\,l_1, \qquad y = 4\,(50 - l_1) = 200 - 2x
$$

The new PPF has $RPT = 2$. With $MRS = \frac{y}{2x} = 2$ we get $y = 4x$, so $4x = 200 - 2x$ and $x^* = \frac{100}{3}$, $y^* = \frac{400}{3}$. The ratio rises from $2$ to $4$.

![[PP02_q2_new_technology_ppf.png|560]]

*The PPF pivots out around its $x$-intercept (100, 0), because only the $y$-technology improved. The optimum moves up along the ray $y = 4x$ (steeper than the old ray $y = 2x$).*

> [!tip] Intuition
> The official answer is graphical: $y$ production is relatively better, and with Cobb-Douglas preferences the consumer's choice of $x$ does not change, while $y$ rises. The algebra above confirms it: $x^* = \frac{100}{3}$ before and after, $y^*$ goes from $\frac{200}{3}$ to $\frac{400}{3}$.

---

## Q3 — Partial equilibrium, a price above and a price below equilibrium

Demand from a consumer with $U = 120x - x^2 + y$ ($y$ is money, income high enough for an interior solution). Supply from a firm with $f(k,l) = l^{1/4}k^{1/4}$ and $p_k = p_l = 1$.

### a. Cost function

> [!success] Answer
> $C(x) = 2x^2$

The tangency condition is $\frac{k}{l} = \frac{p_l}{p_k} = 1$, so $k = l$. The isoquant is $x = l^{1/4}l^{1/4} = l^{1/2}$, so $l(x) = k(x) = x^2$, and

$$
C(x) = 1\cdot x^2 + 1\cdot x^2 = 2x^2
$$

Marginal cost, which is the supply curve, is $C'(x) = 4x$.

### b. Equilibrium

> [!success] Answer
> $x^e = 20$, $p^e = 80$

For [[Quasilinear Utility]] the inverse demand is the marginal utility of $x$: $P^D(x) = 120 - 2x$. The inverse supply is $P^S(x) = C'(x) = 4x$. Equate: $120 - 2x = 4x$, so $x^e = 20$ and $p^e = 80$.

At equilibrium (reference level for parts c and d):

$$
CS = \int_0^{20} (120 - 2x - 80)\,dx = \Big[40x - x^2\Big]_0^{20} = 400
$$

$$
PS = \int_0^{20} (80 - 4x)\,dx = \Big[80x - 2x^2\Big]_0^{20} = 800
$$

$$
SW = 400 + 800 = 1200
$$

### c. Government price of 90

> [!success] Answer
> Quantity traded $x = 15$. $CS = 225$ (down 175), $PS = 900$ (up 100), $SW = 1125$ (down 75).

Price $90$ is **above** the equilibrium price of 80. At 90 buyers want $120 - 2x = 90$, so $x = 15$ units, while firms would supply $4x = 90$, i.e. $22.5$ units. Supply exceeds demand, so the short side, **demand**, sets the quantity: $x = 15$.

$$
CS = \int_0^{15} (120 - 2x - 90)\,dx = \Big[30x - x^2\Big]_0^{15} = 450 - 225 = 225
$$

$$
PS = \int_0^{15} (90 - 4x)\,dx = \Big[90x - 2x^2\Big]_0^{15} = 1350 - 450 = 900
$$

| | Equilibrium (80) | Price 90 | Change |
|---|---|---|---|
| Consumer surplus | 400 | 225 | $-175$ |
| Firm surplus | 800 | 900 | $+100$ |
| Social welfare | 1200 | 1125 | $-75$ |

Firms gain because they sell fewer units but at a much higher price; consumers lose on both price and quantity; the net loss of 75 is the [[Deadweight Loss]].

> [!warning] Mislabelled in the official text
> The official solution calls the situation at 90 "excess demand". At a price **above** equilibrium there is **excess supply** (22.5 supplied vs 15 demanded). The number $x = 15$ is correct. It also writes "the supply in the market would be $P^D(x) = 120 - 2x$", meaning the quantity traded is read off the demand curve.

### d. Government price of 60

> [!success] Answer
> Quantity traded $x = 15$. $CS = 675$, $PS = 450$, $SW = 1125$.

Price $60$ is **below** equilibrium. At 60 buyers want $120 - 2x = 60$, i.e. $30$ units, but firms supply only $4x = 60$, i.e. $15$ units. Now **supply** is the short side and $x = 15$.

$$
CS = \int_0^{15} (120 - 2x - 60)\,dx = \Big[60x - x^2\Big]_0^{15} = 900 - 225 = 675
$$

$$
PS = \int_0^{15} (60 - 4x)\,dx = \Big[60x - 2x^2\Big]_0^{15} = 900 - 450 = 450
$$

| | Price 90 | Price 60 |
|---|---|---|
| Quantity traded | 15 | 15 |
| Consumer surplus | 225 | 675 |
| Firm surplus | 900 | 450 |
| Social welfare | 1125 | 1125 |

![[PP02_q3_price_90_and_60.png|700]]

*Both prices cut trade to 15 units, so both lose the same deadweight triangle between 15 and 20 (area 75). Only the split between consumers and the firm differs.*

> [!success] Explanation (comparison with part c)
> Social welfare is the **same** (1125) because welfare depends only on the quantity traded, and the quantity is 15 in both cases. The price only decides **who gets the surplus**. At 90 the firm captures more of the pie; at 60 consumers do. The gap between equilibrium welfare (1200) and 1125 is the deadweight loss of 75 in both.

> [!warning] Assumption in the consumer surplus
> Computing $CS$ as $\int_0^{15}(P^D - p)\,dx$ assumes the 15 units go to the buyers who value them most (efficient rationing). With a price at 60 and demand for 30 units, a different rationing rule would give a lower $CS$.

---

## Recap table

| Item | Tool | Answer |
|---|---|---|
| P1 (1) | Contract curve from MRS equality, swap $a$ and $b$ | False |
| P1 (2) | Identical agents and endowments: no trade | True |
| P1 (3) | PPF is technology only | False |
| P1 (4) | Transitivity plus Pareto-respecting planner | True |
| P1 (5) | Origins are efficient (one agent holds everything) | True |
| P1 (6) | Quasilinear technology: capital is the marginal input | True |
| P1 (7) | Subsidy pushes quantity above efficient | True |
| P1 (8) | Planner weights can favour an inefficient allocation | False |
| P1 (9) | Walras' Law with non-equilibrium prices | True |
| P1 (10) | Endowment is affordable | True |
| Q2a | RTS equality | $k_1 = l_1$ |
| Q2b | Substitute locus into production | $y = 100 - x$ |
| Q2c | $RPT = MRS$ | $(33\tfrac13,\, 66\tfrac23)$ |
| Q2d | Cost function and $MC = p_x$ | $p_l = \tfrac23$, $p_k = \tfrac43$ |
| Q2e | New PPF $y = 200 - 2x$ | $x^*$ same, $y^*$ up, ratio 2 to 4 |
| Q3a | Tangency | $C = 2x^2$ |
| Q3b | Demand = supply | $(20, 80)$ |
| Q3c | Price 90, demand is short side | $CS=225$, $PS=900$, $SW=1125$ |
| Q3d | Price 60, supply is short side | $CS=675$, $PS=450$, $SW=1125$ |

## Related notes

- [[Micro-Economics II]]
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
