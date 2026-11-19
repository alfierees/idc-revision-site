---
title: "True-False, Price Controls, Production Economy & Externality (2026 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed A (2026), question text reconstructed from the official solution"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - true-false
  - price-controls
  - production-economy
  - externalities
  - pigouvian-tax
aliases:
  - Micro 2 Moed A 2026
  - Micro II Exam 2026 Moed A
  - PP08 Micro II
subject: micro-ii
in_scope: true
---

# True-False, Price Controls, Production Economy & Externality (2026 Moed A)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed A (2026)**, Micro-Economics II. Four questions: Q1 is five true/false items, Q2 a price-control market, Q3 a production economy, Q4 an externality between two exporters.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]], [[Lec_06-Public Goods & Altruism]]
> Practice: [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!warning] Question text reconstructed
> There is **no original question paper** for this sitting. The wording of every question below is rebuilt from how the official solution slides restate it (the "Solution Moed A - 2026" deck, 36 slides). Mark allocations are not given anywhere in the deck, so none are shown. Where the deck does not make the full question clear, a `> [!todo] Original wording unknown` callout says so. No givens have been invented.

> [!info] Source
> Answers follow the **official solution**. Where the official text has a typo or a gap the answer is kept and a `> [!warning]` callout flags it.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Five true/false claims: [[Pareto Dominance]] vs a planner's choice, marginal cost with a convex technology, cost minimisation with quasi-linear technology, the [[Contract Curve]], and the public-good Nash equilibrium | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[Lec_06-Public Goods & Altruism]] |
| Q2 | [[Partial Equilibrium]] with quasi-linear demand and a Cobb-Douglas firm; a government that weights [[Consumer Surplus]] and [[Firm Surplus]] and chooses a price ceiling or floor | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q3 | [[Production Economy]] with a productivity parameter $b$: [[PPF]], [[RPT]] vs [[MRS]], equilibrium prices, comparative statics | [[Lec_05-Production Economy & Externalities]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Q4 | A two-firm [[Externalities]] game: equilibrium vs social planner, and the [[Pigouvian Tax]] | [[Lec_05-Production Economy & Externalities]] |

> [!tip] Intuition: the one move behind each question
> - Q1: for each claim, find one concrete counterexample (false) or run one short derivation (true).
> - Q2: price equals marginal cost on the supply side, marginal utility on the demand side; a binding control makes the **short side** decide the quantity.
> - Q3: equalise RTS across firms to get a straight-line PPF with slope $b$; then price ratio = RPT = MRS.
> - Q4: each firm's effort $e_i$ is free to itself but costs the rival 4 per unit, so the market overuses effort.

---

## Q1 — True or false (five items)

> [!todo] Original wording unknown
> The deck restates each claim as a statement to be judged true or false. The instruction line for the section (for example "determine whether each claim is true or false and explain") and the marks per item are not shown. The five claims below are quoted from the slides.

### Q1.1 — Adding a feasible alternative

**Claim.** Consider a social planner who faces a set of alternatives and chooses alternative $A$. Suppose now that an additional alternative $A'$ is added to the feasible set, after which the social planner chooses $A'$. Alternative $A'$ Pareto dominates alternative $A$.

> [!success] Answer
> **False.**

**Counterexample (official).** Exchange economy with $U_1(x_1,y_1)=x_1y_1$, $U_2(x_2,y_2)=x_2y_2$ and endowments $w_1^x=w_1^y=w_2^x=w_2^y=10$. The planner's welfare is

$$
W\big((x_1,y_1),(x_2,y_2)\big)=U_1(x_1,y_1)\cdot U_2(x_2,y_2)
$$

The contract curve is $x_1=y_1$.

| Allocation | Agent 1 gets | Agent 2 gets | $U_1$ | $U_2$ | $W$ |
|---|---|---|---|---|---|
| $A$ | $(1,2)$ | $(19,18)$ | $2$ | $342$ | $684$ |
| $A'$ | $(10,10)$ | $(10,10)$ | $100$ | $100$ | $10{,}000$ |

The planner prefers $A'$ to $A$ ($10{,}000$ against $684$), yet $A'$ does **not** Pareto dominate $A$: agent 1 gains ($2\to100$) but agent 2 loses ($342\to100$).

> [!tip] Intuition
> A welfare function can trade one person's loss against another's gain. "The planner prefers $A'$" only means the **weighted total** went up. [[Pareto Dominance]] needs **nobody** worse off. Preferred by $W$ is much weaker than dominating.

> [!warning] Typo in the official solution
> The last line says "$A'$ doesn't dominate allocation b". There is no allocation $b$ in the question; it means allocation $A$.

### Q1.2 — Convex production with one input

**Claim.** Consider a firm that produces using a single input, labour. Assume that the production function $f(l)$ is increasing and strictly convex. Then the marginal cost of production is increasing.

> [!success] Answer
> **False.** Marginal cost is **decreasing**.

**Why (official).** With one input, $C(q) = w\cdot f^{-1}(q)$, so

$$
MC(q) = C'(q) = \frac{w}{f'(l(q))}
$$

If $f$ is convex, $f'(l)$ is increasing in $l$, so $\frac{1}{f'(l)}$ is decreasing in $l$. Since $l(q)=f^{-1}(q)$ rises with $q$, $MC$ is decreasing in $q$.

> [!tip] Intuition
> Convex $f$ means each extra hour of labour adds **more** output than the last (increasing returns). So each extra unit of output needs less extra labour, and costs less at the margin. Marginal cost rising is the **concave** $f$ story (diminishing marginal product). To make the claim true you would need $f$ concave.

### Q1.3 — Quasi-linear technology

**Claim.** Consider a firm whose production function is quasi-linear, $f(k,l)=g(l)+k$, where $g$ is a concave function. Suppose that $g'(0)<1$. Then, at any output level, an increase in the firm's production level does not lead to an increase in the use of input $l$.

> [!success] Answer
> **False.**

**Why (official).** The firm minimises **cost**, which depends on input prices as well as marginal products. If there is an $l>0$ with

$$
g'(l)=\frac{P_l}{P_k}
$$

then the firm uses labour and raises its labour for output levels $q<g(l)$. For example, when labour is sufficiently cheap relative to capital, labour delivers more output per unit of cost than capital, so the cost-minimising choice uses positive labour and, as $q$ rises, the firm increases $l$.

> [!tip] Intuition
> $g$ is concave, so $g'$ falls as $l$ rises. At low output the firm uses only labour (while $g'(l) > P_l/P_k$, labour is the better buy per dollar) and $l = g^{-1}(q)$ rises with $q$. Once $l$ reaches the point where $g'(l)=P_l/P_k$, extra output comes from capital, which has a constant marginal product of $1$, so $l$ stops growing. The claim says "at any output level", so one range where $l$ rises is enough to make it false. The condition $g'(0)<1$ is compatible with this as long as $P_l/P_k$ is small enough, which is what "labour sufficiently cheap relative to capital" means.

### Q1.4 — The midpoint allocation

**Claim.** Consider an exchange economy with two agents. The agents' utility functions are $U_1(x_1,y_1)=x_1^{a}y_1^{1-a}$ and $U_2(x_2,y_2)=x_2^{b}y_2^{1-b}$, where $0<a,b<1$ and $a\neq b$. The aggregate endowments of goods $x$ and $y$ are $\bar X$ and $\bar Y$. Then the allocation $\left(\frac{\bar X}{2},\frac{\bar Y}{2}\right)$ is not on the contract curve.

> [!success] Answer
> **True.**

**Why (official).** A point on the contract curve must be Pareto efficient, so $MRS_1=MRS_2$:

$$
MRS_1=\frac{a\,y_1}{(1-a)\,x_1}, \qquad MRS_2=\frac{b\,y_2}{(1-b)\,x_2}
$$

At the midpoint each agent gets half of everything: $y_1=y_2=\bar Y/2$ and $x_1=x_2=\bar X/2$. The common factor $\frac{\bar Y/2}{\bar X/2}$ cancels, so equality would need

$$
\frac{a}{1-a}=\frac{b}{1-b}\;\Rightarrow\; a-ab=b-ab\;\Rightarrow\; a=b
$$

Since $a\neq b$, the MRS values differ, the allocation is not Pareto efficient and so is not on the contract curve.

> [!tip] Intuition
> With the same bundle each, the agent with the larger Cobb-Douglas weight on $x$ values $x$ more at the margin. They would both gain from trading, so the midpoint cannot be efficient. It lies on the contract curve **only** in the knife-edge case $a=b$ (compare [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]).

### Q1.5 — Public good game with identical agents

**Claim.** Consider a two-agent public good game, as studied in class. If the two agents have identical utility functions, then there exists a unique Nash equilibrium in which both agents contribute the same amount to the public good.

> [!success] Answer
> **False.**

**Why (official).** When both agents have the same utility function, **every** combination of $g_1$ and $g_2$ that results in the total quantity $g^0$ is a Nash equilibrium, and there are infinitely many such combinations.

**Link to the lecture.** In [[Lec_06-Public Goods & Altruism]] the best response is $BR_i(g_j)=\max(g_i^o-g_j,0)$. When $g_1^o=g_2^o=g^0$, any pair with $g_1+g_2=g^0$ satisfies both best responses. The equal split $g_1=g_2=g^0/2$ is one equilibrium among infinitely many, so the equilibrium is neither unique nor forced to be symmetric.

> [!tip] Intuition
> Each agent only cares about the **total** supply of the public good. Once the total hits what both of them want, neither wants to change, no matter who paid for how much of it.

---

## Q2 — Price controls and the government's objective

**Setup (as restated in the solution).** A market for goods $X$ and $Y$, where $Y$ represents money. Demand comes from a representative consumer with utility

$$
100x-x^2+y
$$

(income is high enough that there are no corner solutions). Supply comes from a representative firm with production function

$$
f(l,k)=l^{1/4}k^{1/4}
$$

and input prices $p_l=\tfrac12$ and $p_k=\tfrac12$.

**Questions (as restated in the solution).**

1. Derive the inverse demand function and the inverse supply function in the market. Provide an economic explanation for the derivation.
2. Find the equilibrium price and the equilibrium quantity in the market.
3. Calculate the overall welfare in equilibrium, the consumer surplus, and the firm surplus.

The government can now intervene by setting a **maximal price** or a **minimal price** for the good $x$. Its objective is $G(CS,FS)=a\cdot CS+b\cdot FS$, where $CS$ is consumer surplus and $FS$ is firm surplus.

4. Assume $a=b$. Find the government's optimal policy.
5. Assume $a>0$ and $b=0$. Find the government's optimal policy.
6. Assume $a=0$ and $b>0$. Find the government's optimal policy.
7. Assume $a>b>0$. Find the set of policies that cannot be optimal.
8. Assume $b>a>0$. Find the set of policies that cannot be optimal.

### Q2.1 — Inverse demand and inverse supply

> [!success] Answer
> $$P^D(x)=100-2x, \qquad P^S(x)=C'(x)=2x$$

**Demand.** The utility is quasi-linear with $y$ as money (price $1$), so the consumer's price equals the **marginal utility** of $x$: $P^D(x)=\frac{d}{dx}(100x-x^2)=100-2x$. The consumer buys until the last unit is worth exactly its price.

**Supply.** The firm's supply is its marginal cost, so first find the cost function.

1. Cost minimisation: $RTS=\frac{k}{l}=\frac{p_l}{p_k}=1$, so $k=l$.
2. Put this into the isoquant for output $x$: $x=l^{1/4}k^{1/4}=k^{1/2}$, hence $k(x)=x^2=l(x)$.
3. Cost: $C(x)=p_l\,l(x)+p_k\,k(x)=\tfrac12x^2+\tfrac12x^2=x^2$.
4. Supply: $P^S(x)=C'(x)=2x$.

**Why.** A price-taking firm produces until price equals marginal cost, so the MC curve is the supply curve. The consumer's marginal utility is the maximum they will pay for one more unit, so it is the demand curve.

### Q2.2 — Equilibrium

> [!success] Answer
> $x^e=25$, $P^e=50$

Set $100-2x=2x$, so $x^e=25$ and $P^e=2\cdot25=50$.

### Q2.3 — Welfare, consumer surplus, firm surplus

> [!success] Answer
> Total welfare $=1{,}250$, consumer surplus $=625$, firm surplus $=625$.

**Total welfare** is the area between marginal utility and marginal cost:

$$
\int_0^{25}\big(100-2x-2x\big)\,dx=\Big[100x-2x^2\Big]_0^{25}=2500-1250=1250
$$

**Consumer surplus** is the area between demand and the price line:

$$
\int_0^{25}\big(100-2x-50\big)\,dx=\Big[50x-x^2\Big]_0^{25}=1250-625=625
$$

**Firm surplus** is the area between the price line and supply:

$$
\int_0^{25}\big(50-2x\big)\,dx=\Big[50x-x^2\Big]_0^{25}=1250-625=625
$$

Check: $625+625=1250$.

![[PP08_q2_price_controls.png|760]]

*Left: demand, supply and the two best price controls found in parts 5 and 6. Right: how consumer surplus (CS) and firm surplus (FS) move as the regulated price moves away from $50$. The ceiling is a price below $50$, the floor a price above $50$.*

### Q2.4 — Equal weights, $a=b$

> [!success] Answer
> Total surplus $CS+FS$ is maximised at the competitive equilibrium, price $50$. The government can do nothing, set a maximal price $\ge 50$, or set a minimal price $\le 50$. All of these leave the equilibrium in place and maximise its objective.

With $a=b$ the objective is $a(CS+FS)$, a multiple of total surplus. Any binding control moves the quantity away from $25$ and loses surplus. Non-binding controls (a ceiling at or above $50$, a floor at or below $50$) change nothing.

### Q2.5 — Only consumers matter, $a>0$, $b=0$

> [!success] Answer
> Set a **maximal price** at $\tilde p=\dfrac{200}{6}=33.33$.

The government only cares about $CS$.

1. A price **floor** above $50$ lowers CS, so it cannot help. The only useful tool is a **ceiling below $50$**.
2. With a binding ceiling $\tilde p$, the quantity is set by supply (the short side): $q=\tilde p/2$.
3. Consumer surplus:

$$
CS=\int_0^{\tilde p/2}\big(100-2x-\tilde p\big)\,dx=\Big[(100-\tilde p)x-x^2\Big]_0^{\tilde p/2}
$$

$$
=100\cdot\frac{\tilde p}{2}-\frac{\tilde p^2}{2}-\Big(\frac{\tilde p}{2}\Big)^2=50\tilde p-\frac{3\tilde p^2}{4}
$$

4. First-order condition:

$$
\frac{\partial CS}{\partial \tilde p}=50-\frac{6}{4}\tilde p=0\;\Rightarrow\;\tilde p=\frac{200}{6}\approx33.33
$$

> [!tip] Intuition
> A lower ceiling gives consumers a cheaper price but cuts the quantity they can buy. Near $50$ the price gain beats the quantity loss, so the ceiling helps. Below $33.33$ the lost quantity wins. CS peaks at $33.33$ (in the figure, the blue curve on the right).

### Q2.6 — Only firms matter, $a=0$, $b>0$

> [!success] Answer
> Set a **minimal price** at $\tilde p=\dfrac{200}{3}=66.67$.

The government only cares about $FS$.

1. A price **ceiling** below $50$ lowers FS, so the only useful tool is a **floor above $50$**.
2. With a binding floor $\tilde p$, the quantity is set by demand (the short side): $q=\frac{100-\tilde p}{2}$.
3. Firm surplus:

$$
FS=\int_0^{(100-\tilde p)/2}\big(\tilde p-2x\big)\,dx=\Big[\tilde p x-x^2\Big]_0^{(100-\tilde p)/2}
$$

$$
=\tilde p\Big(\frac{100-\tilde p}{2}\Big)-\Big(\frac{100-\tilde p}{2}\Big)^2=50\tilde p-\frac{\tilde p^2}{2}-\frac14(100-\tilde p)^2
$$

4. First-order condition:

$$
\frac{\partial FS}{\partial\tilde p}=50-\tilde p+\frac12(100-\tilde p)=0\;\Rightarrow\;100-\frac32\tilde p=0\;\Rightarrow\;\tilde p=\frac{200}{3}\approx66.67
$$

### Q2.7 — Consumers weighted more, $a>b>0$

> [!success] Answer
> Policies that **cannot** be optimal: any price floor $p_{\min}\ge50$, and any price ceiling $p_{\max}<33.33$.

**Why (official).** Consumers count more than firms. Any floor at or above $50$ cannot be optimal. A ceiling below $50$ raises CS until the price reaches $33.33$, the CS maximum; a lower ceiling reduces both CS and FS, so it is worse.

> [!tip] Intuition: check with the derivative (my own check)
> Using the surplus formulas above, the objective along a **floor** has slope $-a\frac{100-\tilde p}{2}+b\big(100-\tfrac32\tilde p\big)$, which at $\tilde p=50$ equals $25(b-a)<0$ when $a>b$: raising the price above $50$ already hurts the government. Along a **ceiling**, $FS=\tilde p^2/4$ and the slope is $a(50-\tfrac32\tilde p)+\tfrac12b\tilde p$. At $\tilde p=33.33$ this is $\tfrac{50}{3}b>0$, so the objective is still **rising** there and is increasing for all lower prices too. Ceilings below $33.33$ are therefore beaten by a ceiling at $33.33$. This also shows the equilibrium itself ($p_{\min}=50$, or a non-binding ceiling) is not optimal here.

### Q2.8 — Firms weighted more, $b>a>0$

> [!success] Answer
> Policies that **cannot** be optimal: any price ceiling $p_{\max}\le50$, and any price floor $p_{\min}>66.67$.

**Why (official).** Firms count more than consumers. Any ceiling at or below $50$ cannot be optimal. A floor above $50$ raises FS until the price reaches $66.67$, the FS maximum; a higher floor reduces both FS and CS, so it is worse.

> [!warning] Typos in the official solution
> The text says "producers are weighted more than firms" in Q2.8 and "consumes surplus increases until price reaches maximum" in Q2.7. These are slips ("firms" should be "consumers" in Q2.8). The answers are unaffected. The slide writes $66.66$; the exact value is $200/3=66.67$.

---

## Q3 — A production economy with a productivity parameter

**Setup (as restated in the solution).** A production economy with two firms:

$$
f_1(l_1,k_1)=l_1^{a}k_1^{1-a}\quad\text{and}\quad f_2(l_2,k_2)=b\cdot\big(l_2^{a}k_2^{1-a}\big),\qquad 0<a<1
$$

The representative consumer has utility $U(x,y)=x^{\alpha}y^{1-\alpha}$. The resource constraints are $k_1+k_2=50$ and $l_1+l_2=50$. Firm 1 produces $x$ and firm 2 produces $y$.

> [!todo] Original wording unknown
> The deck does not say which good each firm produces. It is clear from the working that $x=f_1(l_1,k_1)$ and $y=f_2(l_2,k_2)$ ("$x=f_1(l_1,k_1)=l_1$", "$y=f_2(l_2,k_2)=b(50-l_1)$"), so that is used here.

**Questions (as restated in the solution).**

1. How does social welfare change as $b$ changes? Base your answer on an analysis of the environment (an intuitive explanation is not sufficient).
2. Assume $\alpha=1/2$ and $b=1$. Find the equilibrium allocation and the equilibrium prices.
3. Consider an arbitrary economy with the above structure (no specific values for the parameters other than those given at the start).
   - a. How does the equilibrium price ratio $p_x^*/p_y^*$ change as $b$ changes? (Hint: you do not necessarily need a full analysis of the equilibrium to give a logical answer.)
   - b. How does the equilibrium quantity ratio $x^*/y^*$ change as $b$ changes?

### Q3.1 — Social welfare as $b$ rises

> [!success] Answer
> Social welfare **increases** with $b$.

**Step 1: efficient input allocation.** Compute the RTS of each firm. For firm 1, $MP_{l_1}=a\,l_1^{a-1}k_1^{1-a}$ and $MP_{k_1}=(1-a)\,l_1^{a}k_1^{-a}$, so

$$
RTS_1=\frac{a\,k_1}{(1-a)\,l_1}, \qquad RTS_2=\frac{b\,a\,l_2^{a-1}k_2^{1-a}}{b\,(1-a)\,l_2^{a}k_2^{-a}}=\frac{a\,k_2}{(1-a)\,l_2}
$$

The factor $b$ cancels in the ratio. Efficiency needs $RTS_1=RTS_2$, so

$$
\frac{k_1}{l_1}=\frac{k_2}{l_2}=\frac{50-k_1}{50-l_1}\;\Rightarrow\;k_1=l_1
$$

**Step 2: outputs.** With $k_1=l_1$ (and $k_2=l_2=50-l_1$):

$$
x=f_1(l_1,k_1)=l_1,\qquad y=f_2(l_2,k_2)=b\,(50-l_1)^{a}(50-l_1)^{1-a}=b\,(50-l_1)
$$

**Step 3: the PPF.** Eliminating $l_1$ (so $l_1=x$):

$$
y=b\,(50-x)=50b-bx
$$

The PPF is a straight line, so **$RPT=b$ everywhere**.

![[PP08_q3_ppf_and_b.png|560]]

*The PPF is a straight line from $(0,50b)$ to $(50,0)$. A higher $b$ raises the $y$-intercept and keeps the $x$-intercept at $50$. The $b=2$ line is only illustrative; the $b=1$ point is the equilibrium from Q3.2.*

**Step 4: conclusion.** As $b$ rises, the maximum $y$ that can be produced, $50b$, rises while the maximum $x$ stays $50$. The PPF moves outward at every $x<50$, so the consumer can reach strictly more $y$ for any $x$.

> [!tip] Intuition: why this is a proof and not just a story
> Because $U$ is increasing in $y$, the bundle that was optimal at the old $b$ is still feasible at the new, larger $b$, and the same $x$ with more $y$ is strictly better. So the welfare maximum can only go up. (This last sentence is my own filling-in of the argument.)

### Q3.2 — Equilibrium for $\alpha=1/2$, $b=1$

> [!success] Answer
> $x^*=y^*=25$ and $l_1^*=k_1^*=l_2^*=k_2^*=25$. Prices: $p_x^*=1$ (taking $p_y=1$) and $p_l^*=p_k^*=\tfrac12$.

**Allocation.**

1. With $b=1$ the PPF is $y=50-x$, so $RPT=1$.
2. With $\alpha=\tfrac12$, $MRS=\frac{y}{x}$.
3. Set $MRS=RPT$: $\frac{y}{x}=1\Rightarrow y=x$.
4. Combine with the PPF: $x=y=25$. From $x=l_1$ and the efficiency condition $k_1=l_1$: $l_1^*=k_1^*=25$, and then $l_2^*=k_2^*=25$.

**Prices.**

1. Output prices: $MRS(x^*,y^*)=\frac{25}{25}=1=p_x^*$, with $y$ as the numeraire ($p_y=1$).
2. Input prices: firm 1's RTS equals the input price ratio, $\frac{k_1}{l_1}=\frac{p_l}{p_k}$, so $k_1=l_1\frac{p_l}{p_k}$. Here $\frac{k_1^*}{l_1^*}=1=\frac{p_l^*}{p_k^*}$.
3. To pin down the level, derive firm 1's cost function. Substitute $k_1=l_1\frac{p_l}{p_k}$ into $x=l_1^{1/2}k_1^{1/2}=l_1\left(\frac{p_l}{p_k}\right)^{1/2}$:

$$
l_1=x\Big(\frac{p_k}{p_l}\Big)^{1/2},\qquad k_1=x\Big(\frac{p_l}{p_k}\Big)^{1/2}
$$

$$
C(x)=p_l\,x\Big(\frac{p_k}{p_l}\Big)^{1/2}+p_k\,x\Big(\frac{p_l}{p_k}\Big)^{1/2}=2x\,(p_lp_k)^{1/2}
$$

4. Profit maximisation (price equals marginal cost): $C'(x)=2\sqrt{p_lp_k}=p_x=1$.
5. With $\frac{p_l^*}{p_k^*}=1$: $1=2\sqrt{p_l^*p_k^*}=2p_l^*$, so $p_l^*=p_k^*=\tfrac12$.

> [!warning] Note on the official working
> The slide's cost-function steps use $l_1^{1/2}k_1^{1/2}$, which means firm 1's exponent is $a=\tfrac12$. The question as restated fixes $\alpha=1/2$ and $b=1$ but not $a$, so the official solution silently takes $a=\tfrac12$ here. The allocation $x^*=y^*=25$ does not depend on $a$ (the efficiency condition $k_1=l_1$ holds for every $a$), but the input prices above do.

### Q3.3a — Price ratio as $b$ changes

> [!success] Answer
> $p_x^*/p_y^*=b$, so the price ratio **increases** with $b$.

As $b$ rises, the slope of the PPF rises. The PPF is a straight line, so it coincides with the consumer's budget line in equilibrium (the budget line has slope $p_x/p_y$). Hence in the optimal bundle $\frac{p_x^*}{p_y^*}=b$.

> [!tip] Intuition
> Producing one more unit of $x$ costs $b$ units of $y$ (the RPT). A competitive price ratio must reflect this opportunity cost, so $x$ becomes relatively more expensive as $y$ gets easier to make.

### Q3.3b — Quantity ratio as $b$ changes

> [!success] Answer
> $x^*/y^*$ **decreases** with $b$.

At the optimum $MRS=RPT=b$. For $\alpha=\tfrac12$ the slide writes $MRS=\frac{y}{x}=b$, so $\frac{x^*}{y^*}=\frac1b$ falls as $b$ rises. A higher $b$ means the economy can turn resources into $y$ more effectively, so the PPF is steeper. The consumer faces what looks like a **fall in the price of $y$** (with no change in income), and Cobb-Douglas preferences shift the consumption mix towards $y$, so $x^*/y^*$ falls.

> [!tip] Intuition (my own generalisation to any $\alpha$)
> For $U=x^\alpha y^{1-\alpha}$ the MRS is $\frac{\alpha y}{(1-\alpha)x}$, so setting it equal to $b$ gives $\frac{x^*}{y^*}=\frac{\alpha}{(1-\alpha)\,b}$. This is decreasing in $b$ for every $\alpha$, which agrees with the official conclusion.

---

## Q4 — Two exporters and an effort externality

**Setup (as restated in the solution).** A market where two firms, $A$ and $B$, export a given product $X$ abroad. The international price is $p_X=60$. The cost function of firm $A$ is

$$
C_A(x_A,e_A,e_B)=x_A^2+\frac12(x_A-e_A)^2+4e_B
$$

and of firm $B$:

$$
C_B(x_B,e_B,e_A)=x_B^2+\frac12(x_B-e_B)^2+4e_A
$$

> [!todo] Original wording unknown
> The deck does not say what $e_A$ and $e_B$ stand for (the "effort" label is used below only as a convenient name; the official explanation itself says each firm's "effort" benefits itself and harms the other). The slide itself uses $p_A$ for the price firm $A$ receives; it is the international price, $60$.

**Questions (as restated in the solution).**

- (a) Find the equilibrium in this market (an equilibrium is a choice of $(x_A,e_A)$ for firm $A$ and a choice of $(x_B,e_B)$ for firm $B$) and each firm's profit in equilibrium.
- (b) Assume now that a social planner, whose aim is to maximise the sum of the firms' profits, decides on the quantities $(x_A,x_B,e_A,e_B)$.
  - (i) Find the optimal quantities for the social planner, and each firm's profit under the planner's optimal quantities.
  - (ii) What happens to the quantity of good $X$ that each firm produces compared with the equilibrium level? On the other hand, what happens to each firm's profit compared with its profit in equilibrium? Provide an economic explanation for this seemingly puzzling result.
- (c) Find the Pigouvian tax in this setting.

### Q4a — Equilibrium

> [!success] Answer
> $e_A=x_A=e_B=x_B=30$, and $\pi_A=\pi_B=780$.

Firm $A$'s profit is

$$
\pi_A(x_A,e_A)=60\,x_A-x_A^2-\frac12(x_A-e_A)^2-4e_B
$$

1. **Choose $e_A$.** Firm $A$ treats $e_B$ as given (the term $-4e_B$ is a constant to it). The term $\frac12(x_A-e_A)^2$ is a pure cost to $A$, and $e_A$ affects nothing else in $A$'s own profit. So $A$ sets $e_A=x_A$ to make it vanish.
2. **Choose $x_A$.** With $e_A=x_A$: $\frac{\partial\pi_A}{\partial x_A}=60-2x_A=0$, so $x_A=30=e_A$.
3. By symmetry $x_B=e_B=30$.
4. **Profit.** $\pi_A=60\cdot30-30^2-0-4\cdot30=1800-900-120=780$. By symmetry $\pi_B=780$.

### Q4b(i) — The planner's optimum

> [!success] Answer
> $x_A=x_B=28$, $e_A=e_B=24$, and each firm's profit is $792$.

The planner maximises total profit:

$$
\pi_T=60(x_A+x_B)-x_A^2-\frac12(x_A-e_A)^2-4e_B-x_B^2-\frac12(x_B-e_B)^2-4e_A
$$

1. **Effort $e_A$.** Now $e_A$ appears in $A$'s own cost term and in $B$'s cost ($4e_A$):
   $$\frac{\partial\pi_T}{\partial e_A}=(x_A-e_A)-4=0\;\Rightarrow\;x_A-e_A=4$$
2. **Quantity $x_A$.**
   $$\frac{\partial\pi_T}{\partial x_A}=60-2x_A-(x_A-e_A)=0\;\Rightarrow\;60-2x_A-4=0\;\Rightarrow\;x_A=28,\;e_A=24$$
3. By symmetry $x_B=28$, $e_B=24$.
4. **Profit.** $\pi_A=60\cdot28-28^2-\frac12(28-24)^2-4\cdot24=1680-784-8-96=792$. By symmetry $\pi_B=792$.

### Q4b(ii) — Why less output but higher profit?

> [!success] Answer
> Each firm produces **less** ($28$ against $30$) but earns **more** ($792$ against $780$).

**Why (official).** Each firm's effort benefits itself but **harms the other** by raising the other firm's cost. In equilibrium firms ignore this and overuse effort. The planner internalises the externality, reduces both effort and output, and achieves higher overall efficiency and profit.

> [!tip] Intuition
> This is the classic mutual negative externality. Each firm gets a private benefit from effort (it cancels its own adjustment cost $\frac12(x-e)^2$) while the cost of $4$ per unit lands on the rival. The market is a prisoners' dilemma: both would be better off if both cut effort, but neither has a private reason to. Cutting effort from $30$ to $24$ and output from $30$ to $28$ raises profit from $780$ to $792$ each, a joint gain of $24$ ($1{,}584$ against $1{,}560$).

### Q4c — Pigouvian tax

> [!success] Answer
> The Pigouvian tax is **4** (per unit of $e_i$).

One extra unit of $e_A$ raises firm $B$'s cost by $\frac{\partial C_B}{\partial e_A}=4$, and one extra unit of $e_B$ raises firm $A$'s cost by $\frac{\partial C_A}{\partial e_B}=4$. A [[Pigouvian Tax]] equals the **marginal external damage** of the action. Here the external damage from $e_i$ is constant and equals $4$, so the tax is $4$.

> [!tip] Intuition: check against Q4b (my own check)
> With a tax of $4$ on $e_A$, firm $A$'s profit becomes $60x_A-x_A^2-\frac12(x_A-e_A)^2-4e_A-4e_B$. Its first-order conditions are $x_A-e_A=4$ (from $e_A$) and $60-2x_A-(x_A-e_A)=0$ (from $x_A$), which are exactly the planner's conditions, giving $x_A=28$ and $e_A=24$. So a tax of $4$ implements the planner's optimum.

---

## Recap table

| Part | Tool | Answer |
|---|---|---|
| Q1.1 | Welfare preference is not Pareto dominance | False ($W$: $684\to10{,}000$, but agent 2 falls $342\to100$) |
| Q1.2 | $MC=w/f'(l(q))$ with $f'$ rising | False, MC decreasing |
| Q1.3 | Cost minimisation with $g'(l)=P_l/P_k$ | False, $l$ rises at low output |
| Q1.4 | $MRS_1=MRS_2$ at the midpoint | True ($a\neq b$) |
| Q1.5 | Public good Nash equilibrium | False, infinitely many with $g_1+g_2=g^0$ |
| Q2.1 | MU = demand, MC = supply | $P^D=100-2x$, $P^S=2x$ |
| Q2.2 | $P^D=P^S$ | $x^e=25$, $P^e=50$ |
| Q2.3 | Areas under demand and supply | $W=1250$, $CS=FS=625$ |
| Q2.4 | $a=b$ means total surplus | No control, or non-binding ones |
| Q2.5 | Maximise CS under a ceiling | Ceiling at $33.33$ |
| Q2.6 | Maximise FS under a floor | Floor at $66.67$ |
| Q2.7 | $a>b>0$ | Not optimal: floors $\ge50$, ceilings $<33.33$ |
| Q2.8 | $b>a>0$ | Not optimal: ceilings $\le50$, floors $>66.67$ |
| Q3.1 | $RTS_1=RTS_2\Rightarrow k_1=l_1$, PPF $y=b(50-x)$ | Welfare rises with $b$ |
| Q3.2 | $MRS=RPT$, $C'(x)=p_x$ | $x^*=y^*=25$, all inputs $25$, $p_l=p_k=\frac12$ |
| Q3.3a | PPF coincides with budget line | $p_x/p_y=b$, rises |
| Q3.3b | $MRS=RPT=b$ | $x^*/y^*$ falls |
| Q4a | $e_i=x_i$, $p=2x_i$ | $x=e=30$, $\pi=780$ each |
| Q4b(i) | Maximise joint profit | $x=28$, $e=24$, $\pi=792$ each |
| Q4b(ii) | Internalise the externality | Less output, more profit |
| Q4c | Marginal external damage | Tax $=4$ |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[Lec_06-Public Goods & Altruism]]
- [[PS_03-Cost Minimisation & Properties of the Cost Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]
- [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]
- [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
