---
title: "Theory of the Firm, Partial Equilibrium & General Equilibrium"
week: 4
semester: 1
year: 2
academic_year: "2025-26"
course: Micro-Economics II
lecture: "Presentation 4 — Theory of the Firm, Partial Equilibrium & General Equilibrium"
instructor: Dr. Boaz Zik
date: 2026-05-26
tags:
  - micro-economics-ii
  - theory-of-the-firm
  - cost-function
  - isoquant
  - RTS
  - isocost
  - partial-equilibrium
  - consumer-surplus
  - firm-surplus
  - social-welfare
  - general-equilibrium
  - edgeworth-box
  - pareto-efficiency
  - first-welfare-theorem
  - walras-law
  - exchange-economy
aliases:
  - Micro II Presentation 4
  - Theory of the Firm Micro II
  - General Equilibrium Micro II
subject: micro-ii
in_scope: true
---

# Theory of the Firm, Partial Equilibrium & General Equilibrium

> Part of: [[Micro-Economics II]] | Key concepts: [[Theory of the Firm]], [[Cost Function]], [[Isoquant]], [[RTS]], [[Partial Equilibrium]], [[Consumer Surplus]], [[Firm Surplus]], [[Edgeworth Box]], [[Pareto Efficiency]], [[First Welfare Theorem]], [[Walras' Law]]

---

## 🗺️ What This Presentation Is About

This presentation builds the supply side of the market from first principles. It has three major sections:

1. **Theory of the Firm** — how firms choose output to maximise profit, and how the cost function is derived from the firm's production technology (one input, then two inputs).
2. **Partial Equilibrium** — how supply and demand interact in a single market, why competitive equilibria are efficient, and what government subsidies do to welfare.
3. **General Equilibrium** — moving beyond a single market to analyse an exchange economy with multiple agents, using the Edgeworth box, the concept of Pareto efficiency, the contract curve, and the First Welfare Theorem.

---

## 📦 Part 1 — Theory of the Firm

### The Firm's Problem

> [!info] Definition: Firm
> A firm transforms inputs (labour and capital) into outputs with the objective of **profit maximisation**.
> $$\Pi(q) = R(q) - C(q)$$
> where $q$ is the quantity produced, $R(q)$ is revenue, and $C(q)$ is cost. ^firm-definition

The firm chooses $q^*$ to solve:
$$\max_q \; \Pi(q) = R(q) - C(q)$$

We assume $\Pi(q)$ is ==concave==, meaning $\Pi''(q) < 0$ — the marginal profit $\Pi'(q)$ is decreasing. This guarantees the FOC gives a maximum.

**First-Order Condition:** Differentiate and set to zero:
$$R'(q^*) = C'(q^*)$$

$$\boxed{\text{Marginal Revenue} = \text{Marginal Cost}}$$ ^mr-equals-mc

> [!tip] Why MR = MC?
> If MR > MC, producing one more unit increases profit — so you should produce more. If MR < MC, producing one more unit costs more than it earns — so you should produce less. The optimum is where these are equal. The concavity of $\Pi$ guarantees that to the left of $q^*$ we have MR > MC (keep going) and to the right MR < MC (stop).

> [!example] Example
> $R(q) = 100q - q^2$, $C(q) = q^3$.
> $R'(q) = 100 - 2q$, $C'(q) = 3q^2$.
> FOC: $100 - 2q = 3q^2 \Rightarrow 3q^2 + 2q - 100 = 0$.
> Solutions: $q_{1,2} = \frac{-2 \pm \sqrt{4 + 1200}}{6}$. Taking the positive root: $q^* \approx 5.45$.

---

### Cost Function — One Input

When the firm uses only labour $l$ with wage $w$, and the technology is $f(l)$:

- To produce $q$ units, the firm must hire $f^{-1}(q)$ units of labour.
- The cost function is:
$$\boxed{C(q) = w \cdot f^{-1}(q)}$$

**How to find $f^{-1}(q)$:** Start from $q = f(l)$ and isolate $l$.

> [!example] Examples
> - $f(l) = \sqrt{l}$ → $l = q^2$ → $C(q) = w \cdot q^2$
> - $f(l) = \frac{l}{2}$ → $l = 2q$ → $C(q) = 2wq$

**Diminishing Marginal Productivity:** We assume $f''(l) < 0$, meaning each additional worker adds less output than the previous one. This is economically intuitive: a kitchen with 10 cooks is not 10 times as productive as a kitchen with 1 cook.

> [!tip] Why does this make $C(q)$ convex?
> If $f(l)$ is concave, then $f^{-1}(q)$ is convex. Since $C(q) = w \cdot f^{-1}(q)$, the cost function is convex, meaning $C''(q) > 0$. In plain terms: it costs more to produce each extra unit as output rises, because you need disproportionately more labour.

#### Optimal Profit Function Properties

For a price-taking firm with $R(q) = p \cdot q$, define:
$$\Pi^*(w, p) = p \cdot q^*(w,p) - w \cdot f^{-1}(q^*(w,p))$$

This function has three key properties: ^profit-function-properties

| Property | Statement | Intuition |
|---|---|---|
| **Homogeneous degree 1** | $\Pi^*(tw, tp) = t \cdot \Pi^*(w,p)$ for $t>0$ | Doubling all prices doubles profit — the optimal quantity doesn't change |
| **Increasing in $p$** | $\hat{p} > \tilde{p} \Rightarrow \Pi^*(\hat{p},w) > \Pi^*(\tilde{p},w)$ | Higher output price → higher revenue for any quantity produced |
| **Decreasing in $w$** | Higher $w$ → higher costs → lower profit | A wage rise squeezes margins |

> [!tip] Proof sketch (increasing in $p$)
> Under $\hat{p}$, the firm *could* still produce $\tilde{q}^*$ — but it won't, because it can do better by optimising again. So:
> $$\Pi^*(\hat{p},w) \geq \hat{p} \cdot \tilde{q}^* - w \cdot f^{-1}(\tilde{q}^*) > \tilde{p} \cdot \tilde{q}^* - w \cdot f^{-1}(\tilde{q}^*) = \Pi^*(\tilde{p},w)$$

---

### Cost Function — Multiple Inputs

In reality, firms use multiple inputs. With ==labour $L$== and ==capital $K$== at prices $p_l$ and $p_k$, and production function $f(l,k)$, the firm's problem is:

$$\min_{l,k} \; p_l \cdot l + p_k \cdot k \quad \text{subject to} \quad f(l,k) = q_0$$ ^cost-minimisation

This is the **dual** of the consumer's expenditure minimisation problem from Micro 1.

#### Key Concepts

> [!info] Marginal Physical Product (MP)
> - $MP_l(l,k) = \frac{\partial f}{\partial l}(l,k)$ — extra output from one more unit of labour, holding capital fixed
> - $MP_k(l,k) = \frac{\partial f}{\partial k}(l,k)$ — extra output from one more unit of capital, holding labour fixed ^marginal-physical-product

> [!info] Isoquant
> An ==isoquant== records all combinations $(l,k)$ that produce the same quantity $q_0$:
> $$\{(l,k) : f(l,k) = q_0\}$$
> Higher isoquants correspond to higher output. ^isoquant-definition

> [!info] Rate of Technical Substitution (RTS)
> The ==RTS== is the rate at which labour can be substituted for capital while keeping output constant (the slope of the isoquant):
> $$\boxed{RTS(l,k) = \frac{MP_l}{MP_k}(l,k)}$$
> Intuition: if you increase labour by one unit (gaining $MP_l$ in output), how many units of capital must you give up to stay on the isoquant? You need to reduce output by $MP_l$, and each unit of capital you drop saves $MP_k$ in output — so you drop $MP_l / MP_k$ units of capital. ^rts-definition

**Assumption — Diminishing RTS:** As $l$ increases along an isoquant, the RTS decreases. This means the isoquant is convex. Economically: when you have lots of labour relative to capital, substituting one more unit of labour for capital creates less and less gain — you'd need to give up less and less capital to compensate.

> [!tip] Diversity in production pays
> Diminishing RTS implies that a *blend* of inputs produces more than an extreme bundle. If $(4,2)$ and $(2,4)$ both lie on the isoquant $f=8$, then $(3,3)$ lies on a *higher* isoquant: $f(3,3) = 9 > 8$ under $f(l,k) = l \cdot k$.

#### The Optimality Condition

> [!info] Isocost Line
> An ==isocost== is the set of all $(l,k)$ bundles with the same total cost $c_0$:
> $$p_l \cdot l + p_k \cdot k = c_0$$
> The slope of an isocost equals $-\frac{p_l}{p_k}$. ^isocost-definition

The firm minimises cost on the isoquant by finding the isocost with the lowest value that still touches the isoquant. At an **interior solution**, the isocost is tangent to the isoquant:

$$\boxed{RTS(l^*, k^*) = \frac{p_l}{p_k}}$$ ^cost-minimisation-condition

**Why this is right:** The RTS tells you how much capital you can sacrifice for one more unit of labour while staying on the isoquant. The price ratio tells you how much capital one unit of labour costs. If RTS > price ratio, you can swap labour for capital, produce the same output, and pay less — so that can't be optimal. Similarly if RTS < price ratio. Only when they're equal can't you do better.

| RTS vs $p_l/p_k$ | Implication | Firm's action |
|---|---|---|
| $RTS > p_l/p_k$ | Labour is "cheap" relative to its productivity gain | Increase labour (move right along isoquant) |
| $RTS < p_l/p_k$ | Capital is "cheap" relative to its productivity gain | Decrease labour (move left along isoquant) |
| $RTS = p_l/p_k$ | Cost is minimised | **Optimal point** |

#### Interior Solution: Cobb-Douglas

For $f(l,k) = l^\alpha k^\beta$:
$$MP_l = \alpha l^{\alpha-1} k^\beta, \quad MP_k = \beta l^\alpha k^{\beta-1}$$
$$RTS = \frac{\alpha}{\beta} \cdot \frac{k}{l}$$

Setting $RTS = p_l/p_k$ gives the cost-minimising ratio $k/l = \frac{\beta p_l}{\alpha p_k}$.

> [!example] Worked Example (Cobb-Douglas)
> $f(l,k) = l^{0.5} k^{0.5}$, $p_l = 1$, $p_k = 4$.
> $RTS = k/l$. Set $k/l = 1/4$, so $l = 4k$.
> Substitute into $f = q_0$: $k^{0.5}(4k)^{0.5} = q_0 \Rightarrow 2k = q_0 \Rightarrow k(q_0) = q_0/2$, $l(q_0) = 2q_0$.
> Cost: $C(q_0) = 1 \cdot 2q_0 + 4 \cdot q_0/2 = 2q_0 + 2q_0 = 4q_0$.

#### Corner Solutions

When the RTS is either always above or always below the price ratio on the isoquant, the optimal bundle uses only one input:

| Scenario | Corner solution |
|---|---|
| $RTS > p_l/p_k$ everywhere on isoquant | Use only labour: $k(q_0) = 0$, $l(q_0)$ from $f(l,0) = q_0$ |
| $RTS < p_l/p_k$ everywhere on isoquant | Use only capital: $l(q_0) = 0$, $k(q_0)$ from $f(0,k) = q_0$ |

> [!example] Corner Solution Example
> $f(k,l) = k + l$, $p_l = 10$, $p_k = 20$.
> $MP_l = MP_k = 1 \Rightarrow RTS = 1$. Price ratio $= 10/20 = 1/2$.
> Since $RTS = 1 > 1/2$: corner solution with $k = 0$.
> $l(q_0) = q_0$, so $C(q_0) = 10 q_0$.

#### Quasi-Linear Production: $f(k,l) = g(l) + k$

This special case has $MP_l = g'(l)$ and $MP_k = 1$, so $RTS = g'(l)$.

The optimal labour $l^*$ satisfies $g'(l^*) = p_l / p_k$, independent of $q_0$.

- If $q_0 \leq g(l^*)$: firm only uses labour. $l(q_0) = g^{-1}(q_0)$, $k(q_0) = 0$.
- If $q_0 > g(l^*)$: firm uses $l^*$ units of labour plus capital for the rest. $l(q_0) = l^*$, $k(q_0) = q_0 - g(l^*)$.

$$C(q) = \begin{cases} p_l \cdot g^{-1}(q) & \text{if } q \leq g(l^*) \\ p_l \cdot l^* + p_k \cdot (q - g(l^*)) & \text{if } q > g(l^*) \end{cases}$$

> [!example] Quasi-Linear Example
> $f(k,l) = \ln(1+l) + k$, $p_l = 2$, $p_k = 6$.
> $g'(l) = \frac{1}{1+l}$. Set $= p_l/p_k = 1/3$: $1+l^* = 3 \Rightarrow l^* = 2$.
> $g(l^*) = \ln(3)$.
> - If $q_0 \leq \ln(3)$: $l(q_0) = e^{q_0} - 1$, $C = 2(e^{q_0}-1)$.
> - If $q_0 > \ln(3)$: $l = 2$, $k = q_0 - \ln(3)$, $C = 4 + 6(q_0 - \ln(3))$.

---

## ⚖️ Part 2 — Partial Equilibrium

### What Is Partial Equilibrium?

==Partial equilibrium== analyses a *single* market (good $X$) holding all other prices and incomes fixed. This is an approximation — it works well when the market for $X$ is not too interlinked with other markets.

> [!info] Partial Equilibrium (Definition)
> A partial equilibrium is a price $p^e$ such that the quantity supplied by profit-maximising firms equals the quantity demanded by utility-maximising consumers:
> $$X^D(p^e) = X^S(p^e)$$ ^partial-equilibrium-definition

### The Demand Side

Each consumer maximises utility subject to a budget constraint (from Micro 1). We aggregate to get the ==market demand== $X^D(p)$, which is decreasing in $p$.

- **Demand curve:** pairs $(p, x)$ on $X^D(p)$.
- **Inverse demand:** $P^D(x)$ — price at which consumers demand exactly $x$ units.

### The Supply Side

Each firm is a ==price taker== (takes $p$ as given). With $R(x) = p \cdot x$:
$$p = C'(x) \quad \Rightarrow \quad x^S(p) = (C')^{-1}(p) = P^S(x)$$

Firms supply until price equals marginal cost. The supply curve is thus the marginal cost curve.

### Finding Equilibrium

Equilibrium is where $P^D(x^e) = P^S(x^e)$: the demand and supply curves cross.

### Efficiency in Partial Equilibrium

To connect equilibrium to welfare, we make two special assumptions:

1. **Quasi-linear consumer:** Utility $U(x,y) = v(x) + y$ where $v''(x) < 0$.
   - Optimal demand: $v'(x) = p_x$, so $X^D(p) = v'^{-1}(p)$.
   - Inverse demand: $P^D(x) = v'(x)$ — **the demand curve equals marginal utility**.

2. **Representative firm:** $C(0) = 0$, $C''(x) \geq 0$.
   - Supply: $P^S(x) = C'(x)$ — **the supply curve equals marginal cost**.

Under these assumptions, **social welfare** is:
$$W(x) = v(x) - C(x)$$

The socially optimal $x^*$ satisfies $v'(x^*) = C'(x^*)$, which is *exactly* the competitive equilibrium condition. This proves: ^first-theorem-partial

> [!info] First Welfare Theorem (Partial Equilibrium Version)
> Under quasi-linear preferences, the competitive equilibrium quantity **maximises social welfare**. ^partial-welfare-theorem

### Consumer Surplus and Firm Surplus

Welfare is distributed between consumers and firms:

$$CS = \int_0^{x_1} P^D(x) - p_1 \; dx = v(x_1) - p_1 x_1$$

$$FS = \int_0^{x_1} p_1 - P^S(x) \; dx = p_1 x_1 - C(x_1)$$

$$\boxed{CS + FS = v(x_1) - C(x_1) = W(x_1)}$$

**CS** is the area between the demand curve and the price (value consumers get above what they pay). **FS** is the area between the price and the supply curve (revenue minus cost).

> [!warning] Common mistake
> CS and FS are *not* always accurate welfare measures. They only equal social welfare under the quasi-linear preference assumption. In general, income effects mean that CS can overstate or understate true welfare gains.

### Government Intervention: Subsidies

A subsidy $\Delta$ per unit means consumers pay $p - \Delta$ instead of $p$. This shifts the demand curve **up** by $\Delta$ (or equivalently, demand at price $p$ rises to $X^D(p - \Delta)$).

**Effect:** Equilibrium quantity rises. CS and FS both increase. But the government spends $\Delta \cdot x^e_{\text{new}}$ — and this cost exceeds the combined gain in CS + FS, creating a ==deadweight loss==.

> [!example] Numerical Subsidy Example
> Demand: $X^D(p) = 100 - p$. Cost: $C(x) = x^2/2$.
>
> **Without subsidy:**
> Equil: $100 - x = x \Rightarrow x^* = 50$, $p^* = 50$.
> $CS = \int_0^{50}(100-x-50)dx = 1250$. $FS = 1250$. Total welfare = $2500$.
>
> **With subsidy $\Delta = 20$:** Demand becomes $X^D(p) = 120 - p$.
> Equil: $120 - x = x \Rightarrow x^* = 60$, $p^* = 60$ (firm price); consumer pays $40$.
> $CS = \int_0^{60}(120-x-60)dx = 1800$. $FS = 1800$. Gains = $3600$.
> Government cost = $20 \times 60 = 1200$.
> Net welfare = $3600 - 1200 = 2400 < 2500$. **Deadweight loss = 100.**

> [!tip] Intuition for the welfare loss
> At the competitive equilibrium, $P^D = P^S$ — the last unit produced is worth exactly what it costs. A subsidy induces production of units where $P^D < P^S$, i.e., units that cost more to produce than consumers value them at. The government pays the difference, creating waste.

### Limitations of Partial Equilibrium

Partial equilibrium **ignores** price interactions across markets. If goods $X$ and $Y$ are substitutes or complements, a price change in $X$ shifts the demand curve for $Y$, affecting welfare in ways not captured by partial equilibrium. For the full picture, we need ==general equilibrium==.

---

## 🌍 Part 3 — General Equilibrium

### Why General Equilibrium?

Partial equilibrium treated the prices of other goods as fixed. In reality:
- Substitutes and complements create cross-market spillovers.
- Income effects from one market affect demand in others.
- Government policy in market $X$ creates ripple effects across the economy.

General equilibrium models all markets simultaneously.

### The Exchange Economy

We simplify by removing production: agents trade their ==endowments==.

> [!info] Exchange Economy
> - Two agents (1 and 2) with utility functions $U_1(x_1, y_1)$ and $U_2(x_2, y_2)$.
> - Two goods $X$ and $Y$.
> - Agent $i$'s initial endowment: $(\omega^i_x, \omega^i_y)$.
> - An **allocation** is feasible if: $x_1 + x_2 = \omega^1_x + \omega^2_x$ and $y_1 + y_2 = \omega^1_y + \omega^2_y$.
> - The initial allocation $(\omega^1_x, \omega^1_y), (\omega^2_x, \omega^2_y)$ is called the **endowment**. ^exchange-economy-definition

### The Edgeworth Box

The ==Edgeworth box== is a graphical tool for visualising all feasible allocations simultaneously.

- **Agent 1's perspective:** bottom-left origin $O_1$; axes measure $x_1$ (right) and $y_1$ (up).
- **Agent 2's perspective:** top-right origin $O_2$; axes measure $x_2$ (left) and $y_2$ (down) — agent 2's diagram is "flipped" and overlaid.
- **Box dimensions:** width $= \omega^1_x + \omega^2_x$, height $= \omega^1_y + \omega^2_y$.
- **Each point** in the box represents a unique feasible allocation.

Agent 1's indifference curves look normal (convex to $O_1$). Agent 2's are convex to $O_2$ (flipped upside-down). ^edgeworth-box

### Pareto Efficiency

> [!info] Pareto Efficiency
> An allocation is ==Pareto efficient== if there is no feasible alternative allocation that makes every agent at least as well off and at least one agent strictly better off.
> Equivalently: it is impossible to make someone better off without making someone else worse off. ^pareto-efficient-definition

> [!warning] Pareto efficiency ≠ fairness
> There can be many Pareto efficient allocations, including very unequal ones. Pareto efficiency is a *necessary* condition for a good outcome, not a *sufficient* one. It says nothing about distributional equity.

**Condition for interior Pareto efficiency:**

An interior allocation is Pareto efficient **if and only if** the indifference curves of both agents are **tangent** at that point:

$$\boxed{MRS_1 = MRS_2}$$ ^pareto-condition

If $MRS_1 \neq MRS_2$ at an allocation, there exists a trade that makes both better off:
- If $MRS_1 < MRS_2$: take 1 unit of $X$ from agent 1, give it to agent 2, compensate agent 1 with $MRS_1$ units of $Y$ from agent 2. Agent 1 is indifferent; agent 2 gains because agent 2 valued that unit of $X$ at $MRS_2 > MRS_1$ units of $Y$.
- If $MRS_1 > MRS_2$: the reverse trade improves both.

### The Contract Curve

The ==contract curve== (or ==Pareto set==) is the set of all Pareto efficient allocations in the Edgeworth box. It is found by: ^contract-curve

$$MRS_1(x_1, y_1) = MRS_2(x_2, y_2)$$
$$x_1 + x_2 = X, \quad y_1 + y_2 = Y$$

Three equations, four unknowns → infinitely many solutions (a curve).

> [!example] Contract Curve Example 1
> $U_1 = (x_1)^2 y_1$, $U_2 = (x_2)^2 y_2$, $X = 30$, $Y = 40$.
> $MRS_1 = \frac{2y_1}{x_1}$, $MRS_2 = \frac{2y_2}{x_2}$.
> Tangency: $\frac{y_1}{x_1} = \frac{y_2}{x_2}$.
> Resource constraints: $x_2 = 30 - x_1$, $y_2 = 40 - y_1$.
> Substituting: $y_1 = \frac{4}{3} x_1$. This is the contract curve — a straight line through both origins.

> [!example] Contract Curve Example 2 (asymmetric)
> $U_1 = x_1 y_1$, $U_2 = (x_2)^2 y_2$, $X = 30$, $Y = 40$.
> $MRS_1 = y_1/x_1$, $MRS_2 = 2y_2/x_2$.
> Solving with resource constraints: $y_1 = \frac{80 x_1}{30 + x_1}$. Note the egalitarian point $(15, 20)$ is **not** on this curve.

### Equilibrium in the Exchange Economy

Agents face prices $(p_x, p_y)$. Agent $i$'s income is $I_i = p_x \omega^i_x + p_y \omega^i_y$ — the market value of their endowment.

Agent $i$ maximises utility subject to: $p_x x_i + p_y y_i = I_i$.

In the Edgeworth box, each agent's budget constraint is a line through the endowment point with slope $-p_x/p_y$. Both agents face the **same line** (since the endowment is a single point in the box).

> [!info] Equilibrium in an Exchange Economy
> An equilibrium is an allocation $\{(x^*_1, y^*_1), (x^*_2, y^*_2)\}$ and prices $(p^*_x, p^*_y)$ such that:
> 1. Each agent's bundle is utility-maximising given their budget constraint.
> 2. Markets clear: $x^*_1 + x^*_2 = \omega^1_x + \omega^2_x$ and $y^*_1 + y^*_2 = \omega^1_y + \omega^2_y$. ^equilibrium-exchange-economy

In the Edgeworth box, equilibrium is the point where both agents' chosen bundles coincide — and their indifference curves are tangent to the budget line.

**Finding the equilibrium:** Adjust the price ratio $p_x/p_y$ until supply equals demand for both goods.

#### Walras' Law

> [!info] Walras' Law
> For any prices $(p_x, p_y)$ and any bundles on the agents' budget constraints:
> $$p_x [x_1(p) + x_2(p) - \omega^1_x - \omega^2_x] + p_y [y_1(p) + y_2(p) - \omega^1_y - \omega^2_y] = 0$$ ^walras-law

**Proof:** Each agent spends exactly their income:
$$p_x(x_i - \omega^i_x) + p_y(y_i - \omega^i_y) = 0$$
Summing over both agents gives Walras' Law.

**Key implication:** If the market for good $X$ clears, the market for good $Y$ **must automatically clear** (and vice versa). So to find equilibrium, you only need to clear one market.

#### Relative Prices

Equilibrium prices are only determined **up to a positive scalar** — only the *ratio* $p_x/p_y$ matters. Multiplying all prices by $t > 0$ leaves budgets unchanged and thus leaves all demands unchanged. Convention: normalise $p_y = 1$ and solve for $p_x$.

> [!example] Equilibrium Example
> $U_1 = U_2 = (x_i)^2 y_i$, $\omega^1 = \omega^2 = (15, 20)$.
> Demand: solving FOC with budget constraint gives $x^*_i = 10 + \frac{40}{3p_x}$.
> Market clearing: $x^*_1 + x^*_2 = 30 \Rightarrow 20 + \frac{80}{3p^*_x} = 30 \Rightarrow p^*_x = \frac{8}{3}$.
> Equilibrium allocation: each agent keeps their endowment $(15, 20)$ — symmetric agents never trade!

### The First Welfare Theorem

> [!info] First Welfare Theorem
> **Every competitive equilibrium allocation is Pareto efficient.**
> $$\text{Equilibrium} \Rightarrow \text{Pareto Efficiency}$$ ^first-welfare-theorem

**Proof by contradiction:** Suppose the equilibrium $\{(x^*_1, y^*_1), (x^*_2, y^*_2)\}$ is NOT Pareto efficient. Then there exists a feasible allocation $\{(x'_1, y'_1), (x'_2, y'_2)\}$ that both agents strictly prefer.

Since each agent is choosing the best bundle they can afford in equilibrium, if $(x'_i, y'_i) \succ_i (x^*_i, y^*_i)$, then agent $i$ must not be able to afford it:
$$p_x x'_i + p_y y'_i > p_x \omega^i_x + p_y \omega^i_y$$

Summing over both agents:
$$p_x(x'_1 + x'_2) + p_y(y'_1 + y'_2) > p_x(\omega^1_x + \omega^2_x) + p_y(\omega^1_y + \omega^2_y)$$

But feasibility requires $x'_1 + x'_2 = \omega^1_x + \omega^2_x$ and $y'_1 + y'_2 = \omega^1_y + \omega^2_y$. Substituting gives $0 > 0$ — a contradiction. ∎

> [!tip] What the First Welfare Theorem tells us
> Competitive markets, left alone, produce allocations that can't be improved without making someone worse off. This is the theoretical foundation for the efficiency case for free markets. However:
> - It says nothing about *fairness* — the equilibrium can be very unequal.
> - It requires complete markets, no externalities, no market power, and perfect information.
> - The **Second Welfare Theorem** (not covered here) says any Pareto efficient allocation can be achieved as a competitive equilibrium, provided we can redistribute initial endowments.

---

## 📝 Summary

| Topic | Core Result |
|---|---|
| **Firm's optimum** | $MR = MC$ |
| **One-input cost function** | $C(q) = w \cdot f^{-1}(q)$; convex if $f$ concave |
| **Two-input cost minimisation** | Interior: $RTS = p_l/p_k$; corner solutions exist |
| **Partial equilibrium** | $P^D(x^e) = P^S(x^e)$; $CS + FS = $ social welfare (quasi-linear) |
| **Subsidy** | Increases CS and FS but creates deadweight loss |
| **Pareto efficiency** | Interior: $MRS_1 = MRS_2$ |
| **Contract curve** | Set of all Pareto efficient allocations; $MRS_1 = MRS_2$ + resource constraints |
| **Exchange equilibrium** | Utility max + market clearing; unique up to price normalisation |
| **Walras' Law** | One market clearing implies all markets clear |
| **First Welfare Theorem** | Every competitive equilibrium is Pareto efficient |

---

## 🔗 Related Notes

- [[Micro-Economics II]] — subject hub
- [[Lec_05-...]] — next presentation (Micro II)
- [[Macro-Economics II]] — uses partial equilibrium concepts (IS-LM is a general equilibrium model)
- [[_Wiki-Link Registry]] — all wiki-links for this subject
