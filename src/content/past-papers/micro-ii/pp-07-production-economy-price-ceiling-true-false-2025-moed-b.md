---
title: "Production Economy, Price Ceiling & True-False (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed B (March 2025)"
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
  - price-ceiling
  - partial-equilibrium
  - social-welfare
aliases:
  - Micro 2 Moed B 2025
  - Micro II Exam March 2025 Moed B
  - PP07 Micro II
subject: micro-ii
in_scope: true
---

# Production Economy, Price Ceiling & True-False (2025 Moed B)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed B (March 2025)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, calculator only. Part 1 (10 true/false, 5 points each = 50 points), Question 2 (25 points), Question 3 (25 points).
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_01-Profit Maximisation & Properties of the Profit Function]], [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!info] Source
> The question paper is an **image-only scan**, so the question text below was **transcribed from the scan by eye** (a few handwritten marks on the scan are ignored). Part 1 and Q3 follow the **official solutions**. **Question 2 has no official solution anywhere**, so its text is transcribed and every part is marked as unsolved.

> [!warning] Question 2 is unsolved
> No official solution exists for Q2 in the course materials. It is deliberately **not** solved here. See [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] and [[Lec_05-Production Economy & Externalities]] for the method.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Part 1, (1) to (3) | Cost minimisation and the optimal profit function: [[Perfect Substitutes]]-type corner, [[Homogeneity of Degree 1]], only the price ratio matters | [[PS_01-Profit Maximisation & Properties of the Profit Function]], [[PS_03-Cost Minimisation & Properties of the Cost Function]] |
| Part 1, (4) to (5) | [[Partial Equilibrium]]: a subsidy financed by a lump-sum tax vs a [[Price Ceiling]]-type price floor (minimum price) | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Part 1, (6) to (7) | [[Exchange Economy]]: endowment on the [[Contract Curve]], what an equilibrium price change can and cannot do | [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]] |
| Part 1, (8) to (9) | [[Production Economy]]: scaling the resources, [[PPF]] and the [[Efficiency Locus]] | [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Part 1, (10) | [[Pareto Efficiency]] and the social planner | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]] |
| Q2 | Production economy with Cobb-Douglas firms (no official solution) | [[Lec_05-Production Economy & Externalities]] |
| Q3 | [[Quasilinear Utility]] demand, Cobb-Douglas supply, **maximal price**, comparative statics | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |

> [!tip] Intuition: the one move behind each block
> - Part 1: for each statement ask "what is the object, and what does it depend on?" (a price ratio, a homogeneous function, an aggregate endowment).
> - Q3: with a binding maximal price the **short side** decides quantity. Supply is the short side, so quantity solves $MC = \bar p$, and the demand curve only enters through consumer surplus.

---

## Part 1 — True or false (50 points)

*For each statement, state if it is true or false and provide a written argument for your answer (an answer without an argument will be marked zero).*

### (1) Cost after a rise in $p_k$ (5 points)

**Question.** Consider a firm with production function $f(l,k) = \sqrt{l} + k$. Suppose the price of $k$, $p_k$, increases while $p_l$ remains constant. Following this change, the cost of producing any quantity $q$ strictly increases. True/False.

> [!success] Answer: **False**
> For small enough quantities the firm would choose to produce only with labour, both before and after the change in $p_k$. For these quantities the cost of production **remains the same**.

**Why.** The statement says "any quantity", so one counterexample is enough. A rise in $p_k$ can only hurt through the capital the firm uses. If the firm uses no capital at $q$, the rise changes nothing.

> [!tip] Intuition (mine, consistent with the official argument)
> The marginal product of labour, $\frac{1}{2\sqrt{l}}$, is huge when $l$ is small, while the marginal product of capital is constant at 1. So at small $q$ labour is the better buy per dollar even at the old $p_k$, and the firm is at the labour corner ([[Corner Solution]]). Raising $p_k$ makes capital even less attractive. At large $q$ the firm does use capital and cost does rise, which is why the statement fails only because of the word "any".

### (2) Wage and product price rise together (5 points)

**Question.** A firm produces $X$ using only labour, with diminishing marginal productivity: $f(l)$ with $f$ strictly concave. If both the wage $w$ and the product price $p_x$ increase by the same proportion, then the firm's optimal profit remains unchanged. True/False.

> [!success] Answer: **False**
> The firm's optimal profit **increases in the same proportion** as $p_x$ and $w$.

**Why.** The firm solves $\max_l\; p_x f(l) - w l$. Scaling $(p_x, w)$ by $t$ scales the whole objective by $t$, so the optimal $l$ is unchanged but the profit is $t$ times larger. This is [[Homogeneity of Degree 1]] of the [[Optimal Profit Function]]: $\Pi^*(t p_x, t w) = t\,\Pi^*(p_x, w)$. Only **relative** prices change the firm's decision; the **level** of profit scales with them.

### (3) Both input prices rise together (5 points)

**Question.** A firm has $f(l,k) = l^{\alpha}k^{1-\alpha}$. If both $p_l$ and $p_k$ increase by the same proportion, then the firm's optimal input bundle for producing a given quantity $q$ remains unchanged. True/False.

> [!success] Answer: **True**
> The cost-minimising bundle for $q$ depends only on the input price ratio $\frac{p_k}{p_l}$, and this ratio does not change when both prices rise by the same proportion.

**Why.** The tangency condition [[Tangency Condition]] is $RTS = \frac{p_l}{p_k}$, and with Cobb-Douglas $RTS = \frac{\alpha}{1-\alpha}\cdot\frac{k}{l}$. Together with $f(l,k)=q$ this pins down $(l,k)$ using the ratio alone. The **cost** rises by the same proportion, but the **bundle** does not. See [[Cost Minimisation]] and [[Conditional Input Demand]].

### (4) Subsidy financed by a lump-sum tax (5 points)

**Question.** In a partial equilibrium model the government subsidises the price for consumers. To finance the subsidy, the government imposes a direct (lump-sum) tax on consumers. As a result, consumer surplus decreases compared to the scenario with no intervention. True/False.

> [!success] Answer: **True**
> If we ignore the financing, both consumer surplus and firm surplus increase. When we account for financing, overall welfare **decreases**. Since the consumers pay for the subsidy, consumer surplus decreases.

**Why.** The subsidy pushes the quantity above the efficient level, creating a [[Deadweight Loss]]. The firm gains from the subsidy and the consumer gains from the lower price, but the consumer also pays the **entire** bill through the lump-sum tax. Total welfare is the sum of the surpluses (the tax is a transfer from consumers to the government that is paid back to firms and consumers through the subsidy). Welfare falls by the deadweight loss, and the firm is better off, so the consumer must be worse off than with no intervention.

> [!tip] Intuition (mine)
> The consumer is paying the firm to sell extra units that the consumer values at less than they cost to produce. The firm is happy to be paid; the consumer carries both the transfer and the waste.

### (5) Minimum price equal to the subsidised price (5 points)

**Question.** The government does not implement a subsidy but instead sets a minimum price equal to the price under the subsidy policy of (4). Under this policy, the firm's surplus remains the same as it was following the subsidy policy in (4). True/False.

> [!success] Answer: **False**
> When the minimum price equals the subsidy price (and is above the equilibrium price), consumers demand less. The firm therefore sells a smaller quantity at the same price per unit, so its profit **decreases** relative to the subsidy policy of (4).

**Why.** Under a minimum price above equilibrium, the market is on the **demand** curve (the short side), so quantity is whatever consumers want at that price. Under the subsidy the quantity is larger (consumers face a lower effective price). Same unit price, fewer units sold, and units beyond the new quantity carried positive firm surplus, so the firm's surplus falls.

### (6) Endowment on the contract curve (5 points)

**Question.** In an exchange economy where the initial endowment allocation lies on the contract curve, agents do not benefit from trade. True/False.

> [!success] Answer: **True**
> If the endowment is on the contract curve, the equilibrium allocation equals the endowment. Agents therefore do not benefit from trade.

**Why.** On the [[Contract Curve]] the allocation is already [[Pareto Efficiency|Pareto efficient]], so no trade can make someone better off without hurting the other. The Walrasian equilibrium is [[Individual Rationality|individually rational]] and efficient, so it must be the endowment itself. See [[Walrasian Equilibrium]] and [[Core]].

### (7) A higher equilibrium $p_x$ (5 points)

**Question.** In an exchange economy a change raises the equilibrium price $p_x$ relative to its previous level. In the new equilibrium, both agents consume less of good $X$. True/False.

> [!success] Answer: **False**
> In an exchange-economy equilibrium the agents consume the overall endowment. So total consumption of $X$ is the same under any equilibrium. It is impossible for **both** agents to consume less.

**Why.** Market clearing gives $x_1 + x_2 = \omega_{x1} + \omega_{x2}$, a fixed number. A price change can **shift** $X$ from one agent to the other, but cannot lower both. A rise in $p_x$ can at most move $X$ between the two agents.

### (8) Doubling the input endowments (5 points)

**Question.** In a production economy the representative consumer has $U(x,y) = x^{\alpha}y^{1-\alpha}$. The firms have $f_1(l_1,k_1) = l_1^{a}k_1^{1-a}$ and $f_2(l_2,k_2) = l_2^{a}k_2^{1-a}$, with $k_1+k_2 = 100$ and $l_1+l_2 = 100$. The input endowments change to $k_1+k_2 = 200$ and $l_1+l_2 = 200$. In the new equilibrium, the quantities of both $X$ and $Y$ are twice their previous equilibrium levels. True/False.

> [!success] Answer: **True**
> If $k_1+k_2 = A$ and $l_1+l_2 = A$, the optimal consumption of $X$ and $Y$ is **proportional to $A$**. It is the same as the Cobb-Douglas consumer problem with price ratio 1 and income $A$. Since the resource constraints doubled, so do the optimal quantities.

**Why.** Both firms are constant-returns Cobb-Douglas with the same technology, so the PPF is the line $x + y = A$ when $k$ and $l$ both equal $A$ (the official solution treats the price ratio as 1). The consumer then spends the share $\alpha$ of income $A$ on $X$ and $1-\alpha$ on $Y$: $x^* = \alpha A$ and $y^* = (1-\alpha)A$. Doubling $A$ doubles both. See [[Production Economy]] and [[PS_08-Production Economy, Efficiency Locus & Input Allocation]].

### (9) A point on the PPF and equal RTS (5 points)

**Question.** In a production economy, assume $(x_0, y_0)$ lies on the production possibility frontier. There exist two points $(l_1,k_1)$ on the isoquant of $x_0$ and $(l_2,k_2)$ on the isoquant of $y_0$, such that $RTS_1(l_1,k_1) = RTS_2(l_2,k_2)$. True/False.

> [!success] Answer: **True**
> If $(x_0,y_0)$ is on the PPF there is an allocation of inputs $((l_1,k_1),(l_2,k_2))$ **along the efficiency locus** that produces this output. That allocation has $(l_1,k_1)$ on the isoquant of $x_0$ and $(l_2,k_2)$ on the isoquant of $y_0$, and satisfies $RTS_1 = RTS_2$.

**Why.** The [[PPF]] is built from the [[Efficiency Locus]], where the two firms' isoquants are tangent (equal [[RTS]]). A point is on the PPF **only** if it is produced efficiently, which means equal RTS across firms.

### (10) A non-Pareto-efficient allocation and the planner (5 points)

**Question.** If allocation $A$ is not Pareto efficient, then no central benevolent designer would select it. True/False.

> [!success] Answer: **True**
> A benevolent designer's utility must increase in the utilities of the agents. Since $A$ is not Pareto efficient, there is another allocation $B$ giving **higher utility to all** agents. Any benevolent designer prefers $B$ to $A$, so no such designer would select $A$.

**Why.** A planner's objective is increasing in each agent's utility ([[Social Welfare]]). A [[Pareto Dominance|Pareto-dominating]] allocation raises every argument, so it raises the objective. See [[PS_05-Pareto Efficiency, Dominance & Social Welfare]].

---

## Q2 — Production economy (25 points)

> [!warning] No official solution
> The question is transcribed from the scan. There is no official solution for Q2 in any of the course files, so no part is solved here.

**Question.** Consider the following production economy. The firms' production functions are $f_1(l_1,k_1) = 2\cdot\left(l_1^{1/3}k_1^{2/3}\right)$ and $f_2(l_2,k_2) = 2\cdot\left(l_2^{1/3}k_2^{2/3}\right)$. The representative consumer's utility function is $U(x,y) = x^{1/3}y^{2/3}$ and the resource constraints are $k_1+k_2 = 50$ and $l_1+l_2 = 50$.

### a. Efficiency locus (5 points)

*Find the efficiency locus in the economy.*

> [!todo] No official solution

### b. Production possibility frontier (5 points)

*Find the production possibility frontier.*

> [!todo] No official solution

### c. Optimal allocation (5 points)

*Find the optimal allocation in the economy.*

> [!todo] No official solution

### d. Equilibrium prices (5 points)

*Find the equilibrium prices.*

> [!todo] No official solution

### e. Change in firm 2's technology (5 points)

*Assume now that $f_1(l_1,k_1) = 2\cdot\left(l_1^{1/3}k_1^{2/3}\right)$ and $f_2(l_2,k_2) = 4\cdot\left(l_2^{1/3}k_2^{2/3}\right)$. What will happen to the ratio $\frac{y^*}{x^*}$ in the optimal allocation of $X$ and $Y$? Explain your answer via graphical illustration.*

> [!todo] No official solution

---

## Q3 — Partial equilibrium with a maximal price (25 points)

**Setup.** A market with two products $X$ and $Y$, where $Y$ represents money. Demand comes from a representative consumer with utility

$$
U = A\cdot x - x^{2} + y
$$

(income is high enough that there are no corner solutions). Supply is set by a representative firm with production function

$$
f(k,l) = l^{1/4}\cdot k^{1/4}
$$

and input prices $p_l$ and $p_k$.

### a. Numerical case: $A = 180$ and $p_l = p_k = 1$

#### (i) The firm's cost function (4 points)

> [!success] Answer
> $$C(x) = 2x^{2}$$

Cost minimisation ([[Cost Minimisation]]): set $RTS = \frac{p_l}{p_k}$. For this production function $RTS = \frac{k}{l}$, and with equal prices this equals 1, so $l = k$. Put this in the isoquant $x = l^{1/4}k^{1/4} = l^{1/2}$, so

$$
l(x) = x^{2}, \qquad k(x) = x^{2}, \qquad C(x) = l + k = 2x^{2}.
$$

#### (ii) Equilibrium price, quantity and surpluses (4 points)

> [!success] Answer
> $x^* = 30$, $p^* = 120$, consumer surplus $= 900$, firm surplus $= 1800$, social welfare $= 2700$.

The consumer maximises $Ax - x^2 + y$ subject to $p x + y = $ income. Quasilinearity gives inverse demand $p = A - 2x = 180 - 2x$ ([[Quasilinear Utility]]). Marginal cost is $C'(x) = 4x$. Equilibrium solves

$$
180 - 2x^{*} = 4x^{*} \;\Rightarrow\; x^{*} = 30, \qquad p^{*} = 4(30) = 120.
$$

The surpluses are

$$
CS = 180x^{*} - (x^{*})^{2} - 120x^{*} = 5400 - 900 - 3600 = 900,
$$

$$
FS = 120x^{*} - 2(x^{*})^{2} = 3600 - 1800 = 1800,
$$

and [[Social Welfare]] is $900 + 1800 = 2700$. See [[Consumer Surplus]] and [[Firm Surplus]].

#### (iii) A maximal price of 80 (4 points)

> [!success] Answer
> Quantity $= 20$, consumer surplus $= 1600$, firm surplus $= 800$, social welfare $= 2400$.
>
> | | Equilibrium | Maximal price 80 | Change |
> |---|---|---|---|
> | Quantity | 30 | 20 | falls |
> | Consumer surplus | 900 | 1600 | **rises** |
> | Firm surplus | 1800 | 800 | **falls** |
> | Social welfare | 2700 | 2400 | falls |

The maximal price 80 is below the equilibrium price 120, so it binds. At price 80 consumers want more than firms will supply, so supply is the short side and quantity solves $C'(x) = 80$:

$$
4x = 80 \;\Rightarrow\; x = 20.
$$

$$
CS = 180(20) - 20^{2} - 80(20) = 3600 - 400 - 1600 = 1600,
$$

$$
FS = 80(20) - 2(20)^{2} = 1600 - 800 = 800.
$$

Social welfare is $1600 + 800 = 2400$, a [[Deadweight Loss]] of $300$ relative to $2700$.

![[PP07_q3_max_price_numerical.png|560]]

*The maximal price caps the quantity at 20 where marginal cost meets the price cap. The grey triangle is the welfare lost relative to the equilibrium.*

**Explanation (official).** Consumer surplus **increases**: the lower price more than compensates the consumer for the lower quantity. Firm surplus **decreases**: the firm sells fewer units and at a lower price. Social welfare **decreases** because the allocation no longer coincides with the equilibrium allocation.

> [!warning] Typos in the official solution
> The official text says "The consumer surplus equal $80x - 2x^2$" and later "The consumer surplus decreased". Both slips should read **firm** surplus. The numbers (1600 and 800) are right: $180(20) - 400 - 1600 = 1600$ and $80(20) - 2(400) = 800$.

> [!tip] Intuition
> Welfare drops because some trades worth doing (units between 20 and 30, where willingness to pay exceeds marginal cost) no longer happen. The consumer wins on the units that **do** trade (price 80 instead of 120), the firm loses on them.

### b. Demand rises under a binding maximal price (5 points)

**Question.** Consider the general market (not the numbers of (a)). The government sets a maximal price smaller than the equilibrium price. Now there is an increase in demand, captured by an increase in the parameter $A$ (same maximal price). What happens to firm surplus and consumer surplus compared with before the change? Give verbal and graphical explanations.

> [!success] Answer
> **Firm surplus is unchanged. Consumer surplus increases.**

An increase in $A$ shifts demand up, so the equilibrium price rises and the maximal price is **still** below it. The quantity is therefore still set where marginal cost equals the maximal price. Marginal cost does not depend on $A$, so the quantity is **unchanged**. The firm sells the same quantity at the same price with the same cost, so

$$
FS = p\cdot x - C(x)
$$

does not change. Consumer surplus is

$$
CS = A\cdot x - x^{2} - p\cdot x,
$$

and even though $x$ and $p$ do not change, **$A$ rises**, so $CS$ rises.

### c. Input prices fall under a binding maximal price (5 points)

**Question.** Same setup, but now the input prices $p_l$ and $p_k$ **decrease** (same maximal price). What happens to firm surplus and consumer surplus?

> [!success] Answer
> **Both consumer surplus and firm surplus increase.**

A fall in input prices lowers marginal cost. Quantity is set where price equals marginal cost, so the quantity **rises**. The price stays equal to the maximal price. Consumer surplus rises because it increases in the quantity at a given price. Firm surplus also rises because marginal cost fell, so the firm earns more on every unit sold.

![[PP07_q3_max_price_shifts.png|680]]

*Left: a demand shift (b) leaves the quantity at the unchanged supply point. Right: a fall in costs (c) moves that point to the right. Schematic, no numbers.*

### d. Why (b) and (c) differ (3 points)

> [!success] Answer
> In (b) a demand increase leaves the quantity unchanged because, under a binding maximal price, the quantity is set by **supply**, which did not change. Only the consumer benefits. In (c) a cost decrease raises the supply, so the quantity changes, and **both** the firm and the consumer benefit.

> [!tip] Intuition
> A price cap makes the market **supply-determined**. Anything that shifts only demand is invisible to the firm and benefits consumers through the surplus formula. Anything that shifts supply changes the quantity actually traded, so it matters to both sides.

---

## Recap

| Item | Verdict or answer | One-line reason |
|---|---|---|
| (1) | False | Small $q$: labour only, so cost does not change |
| (2) | False | Profit is homogeneous of degree 1, scales with the prices |
| (3) | True | Bundle depends only on $p_l/p_k$ |
| (4) | True | Consumer bears the lump-sum tax and the deadweight loss |
| (5) | False | A minimum price cuts quantity, firm sells less |
| (6) | True | Endowment on contract curve means no trade |
| (7) | False | Total $X$ fixed, one agent can only gain what the other loses |
| (8) | True | Doubling $A$ doubles $x^*$ and $y^*$ (Cobb-Douglas, price ratio 1) |
| (9) | True | PPF points are produced on the efficiency locus (equal RTS) |
| (10) | True | A Pareto-dominating allocation raises any planner's objective |
| Q2 | No official solution | Not solved |
| Q3(a)(i) | $C(x) = 2x^2$ | $l = k = x^2$ |
| Q3(a)(ii) | $x^*=30$, $p^*=120$, $CS=900$, $FS=1800$, $W=2700$ | $180-2x = 4x$ |
| Q3(a)(iii) | $x=20$, $CS=1600$, $FS=800$, $W=2400$ | $4x = 80$ |
| Q3(b) | $FS$ same, $CS$ up | Quantity set by unchanged supply |
| Q3(c) | $FS$ up, $CS$ up | Lower $MC$ raises quantity |
| Q3(d) | Different | Only supply shifts move the quantity under a cap |

## Related Notes

- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
- [[Micro-Economics II]]
