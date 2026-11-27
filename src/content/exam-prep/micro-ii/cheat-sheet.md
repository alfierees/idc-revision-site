---
title: "Micro II Cheat Sheet"
subject: micro-ii
type: reference
description: "Everything the final uses, in exam order: the firm and its cost function, partial equilibrium and price controls, Pareto efficiency and the planner, the exchange economy, the production economy, externalities and public goods, each with a worked example from a past paper."
course: Micro-Economics II
instructor: Dr. Boaz Zik
semester: 1
year: 2
order: 1
pinned: true
tags:
  - micro-ii
  - exam-prep
  - cheat-sheet
aliases:
  - Micro 2 Cheat Sheet
  - Welfare and General Equilibrium Cheat Sheet
---

> **The exam:** 3 hours, calculator (2023 allowed a cheat sheet, 2024 was open material, 2025 calculator only). Two layouts have been used:
>
> | Layout | Years | What it is |
> |---|---|---|
> | **10 true/false + 2 open** | 2023 A, 2023 B, 2023 example, 2025 A, 2025 B | Part 1: ten claims, 5 points each (50). Q2: a production economy (25). Q3: a partial-equilibrium market with a price control or subsidy (25) |
> | **4 open questions** | 2024 A, 2024 B, 2026 A | 25 points each: a firm's cost function, an exchange economy, a price-control market, and one of a planner, a public good or an externality (2026 put 5 true/false items in Q1) |
>
> "An answer without an argument scores zero" on the true/false part: give a one-line proof or a concrete counterexample. The same market ($100x - x^2 + y$ or $Ax - x^2 + y$ with a firm $f = l^{1/4}k^{1/4}$) has appeared in **every** paper since 2023, and every 10-claim paper has a production economy with two Cobb-Douglas firms. See the [[Past Paper Topic Map]].

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| One input, $f(l)$, "cost function" | $C(q) = w\,f^{-1}(q)$, then $MC = w/f'(l)$ | §1 |
| "Profit if $w$ (only) is multiplied by $t$" | Homogeneity of degree 1 needs **both** $p$ and $w$ scaled | §1 |
| $f(l,k)$ and input prices, "cost-minimising bundle" | $RTS = MP_l/MP_k = p_l/p_k$ plus the isoquant | §2 |
| $al + bk$ | Perfect substitutes: compare $a/b$ with $p_l/p_k$, a corner | §2 |
| $g(l) + k$ (e.g. $\sqrt l + k$) | Labour only up to $g(l^*)$ with $g'(l^*) = p_l/p_k$, then capital: kinked cost | §2 |
| Quasi-linear consumer $Ax - x^2 + y$ | Inverse demand $= MU = A - 2x$ | §3 |
| "Maximal price", "minimal price", "fixed price" | Quantity = **short side**; ceiling: supply short; floor: demand short | §3 |
| Subsidy to consumers | Demand shifts up by the subsidy; subtract the government's bill | §3 |
| "Pareto dominates", "the planner prefers" | Dominance: nobody worse, someone better. A planner's $W$ can trade gains for losses | §4 |
| Two agents, endowments, Cobb-Douglas | Contract curve $MRS_1 = MRS_2$; Walrasian price from one market clearing | §5 |
| "Social planner maximises $U_1^aU_2^{1-a}$" | Utility frontier along the contract curve, then tangency | §6 |
| Two firms, $\bar L$, $\bar K$, a consumer $U(x,y)$ | Efficiency locus → PPF → $MRS = RPT$ → prices | §7 |
| Consumer $cx + y$ and a straight PPF | Corner: compare $c$ with the RPT | §7 |
| One firm's action enters another's cost | Equilibrium ignores it, planner adds it; tax = marginal external damage | §8 |
| $V_1(g) + V_2(g)$, "contribute to a public good" | Planner: $V_1' + V_2' = 1$. Nash: $V_i' = 1$ for the keener agent only | §9 |

---

## 1. The firm with one input (Presentation 4, PS1, PS2)

The firm maximises $\Pi(q) = R(q) - C(q)$. With a concave $\Pi$ the first-order condition is

$$
MR(q^*) = MC(q^*), \qquad \text{price taker: } p = C'(q^*)
$$

**Cost with one input.** To make $q$ you need $l = f^{-1}(q)$ workers:

$$
C(q) = w\,f^{-1}(q), \qquad MC(q) = \frac{w}{f'(l(q))}
$$

| Technology | $MC$ | Why |
|---|---|---|
| $f$ **concave** (diminishing marginal product) | rising | each extra unit needs more and more labour |
| $f$ **convex** (increasing returns) | **falling** | 2026 Moed A Q1.2: "MC is increasing" is **false** |
| $f$ linear | constant | supply is flat, profit is zero |

> [!example] PS1 Q1 and 2023 Moed A T/F 2: $f(l) = \sqrt l$
> $l = q^2$, so $C = wq^2$ and $p = 2wq$ gives $q^* = \dfrac{p}{2w}$, $\Pi^* = \dfrac{p^2}{4w}$. Doubling **only** $w$ halves profit, it does not double it.

**The optimal profit function** $\Pi^*(p, w)$:

| Property | Statement | One-line proof |
|---|---|---|
| Homogeneous of degree 1 | $\Pi^*(tp, tw) = t\,\Pi^*(p,w)$ | $q^*$ only depends on $p/w$, so revenue and cost both scale by $t$ |
| Increasing in $p$ | $\hat p > \tilde p \Rightarrow \Pi^*(\hat p) > \Pi^*(\tilde p)$ | at $\hat p$ the old $\tilde q$ is still possible and already earns more |
| Decreasing in $w$ | higher $w$, lower $\Pi^*$ | same revealed-profit argument |

**Corners in the firm's problem** (all past true/false items):
- $C'' > 0$ and $p > C'(0)$: interior optimum with $C'(q^*) = p$ (2023 A, T/F 4).
- $C'' > 0$ and $C'(0) > p$: every unit loses money at the margin, so $q^* = 0$ (2023 example, T/F 3).
- $\Pi$ convex: produce nothing or as much as possible (PS1 Q3c).
- Zero-profit trap: with **constant** marginal cost $p = MC$ in equilibrium, profit is zero whatever demand does (2025 A, T/F 8).

---

## 2. Cost minimisation with two inputs (Presentation 4, PS2, PS3)

$$
\min_{l,k}\; p_l\,l + p_k\,k \quad\text{s.t. } f(l,k) = q_0
$$

- **Isoquant:** all $(l,k)$ with $f = q_0$. **RTS** = its slope = $\dfrac{MP_l}{MP_k}$.
- **Isocost:** $p_l l + p_k k = c_0$, slope $p_l/p_k$.
- **Interior optimum:** $RTS(l^*, k^*) = \dfrac{p_l}{p_k}$, then substitute into the isoquant.

| $RTS$ against $p_l/p_k$ | Meaning | Move |
|---|---|---|
| $RTS > p_l/p_k$ | labour gives more output per shekel | use more labour |
| $RTS < p_l/p_k$ | capital gives more per shekel | use more capital |
| equal | cost minimised | stay |

### The three technologies the exam uses

| $f(l,k)$ | Rule | Cost function |
|---|---|---|
| $l^\alpha k^\beta$ | $\dfrac{k}{l} = \dfrac{\beta\,p_l}{\alpha\,p_k}$ | With $\alpha + \beta = 1$ the cost is linear, $C = c\,q$. $l^{1/2}k^{1/2}$: $C = 2q\sqrt{p_lp_k}$ |
| $l^{1/4}k^{1/4}$ with $p_l = p_k = p$ | $k = l = q^2$ | $C(q) = 2p\,q^2$, $MC = 4pq$ (the exam's favourite firm) |
| $al + bk$ (perfect substitutes) | $\dfrac{a}{b} > \dfrac{p_l}{p_k}$: labour only. $<$: capital only | $C = \min\left\{\dfrac{p_l}{a}, \dfrac{p_k}{b}\right\} q$, flat supply |
| $g(l) + k$, $g$ concave | $g'(l^*) = \dfrac{p_l}{p_k}$ fixes $l^*$ | $q \le g(l^*)$: $C = p_l\,g^{-1}(q)$. Above: $C = p_l l^* + p_k(q - g(l^*))$, so $MC = p_k$ |

> [!example] 2024 Moed B Q1: $f = \sqrt l + k$, $p_l = 3$, $p_k = 12$
> $\dfrac{1}{2\sqrt l} = \dfrac{3}{12}$ gives $l^* = 4$, which makes $\sqrt 4 = 2$ units. So
>
> $$
> C(q) = \begin{cases} 3q^2 & q \le 2 \\ 3\cdot 4 + 12(q - 2) = 12q - 12 & q > 2 \end{cases}
> $$
>
> Against the one-input firm $\sqrt l$ (cost $3q^2$), the gap above $q = 2$ is $3(q-2)^2 > 0$. With $p_k = 24$ the kink moves to $q = 4$: dearer capital delays the switch.

> [!example] 2023 example T/F 7: $f = 2l + 3k$, $p_l = 4$, $p_k = 5$
> $RTS = \tfrac23 < \tfrac45$: capital is the better buy, so **only capital**, $k = q/3$.

**Properties of the cost function** (PS3 Q5): homogeneous of degree 1 in $(p_l, p_k)$, increasing in $p_l$, $p_k$ and $q$. The **bundle** depends only on the ratio $p_l/p_k$: triple both prices and the same $(l, k)$ is chosen at triple the cost (2023 A, T/F 5; 2025 B, T/F 3).

> [!warning] "Necessarily uses less labour" is false
> When $p_l/p_k$ rises, a perfect-substitutes or $g(l) + k$ firm may not move at all (it stays at the same corner, or below the kink it still uses labour only). That is the counterexample to every "necessarily" claim about input use (2023 example T/F 1, 2025 B T/F 1, 2023 A T/F 3, 2026 A Q1.3).

---

## 3. Partial equilibrium (Presentation 4, PS4)

With a **quasi-linear** consumer $U = v(x) + y$ ($y$ is money):

$$
P^D(x) = v'(x) \;(\text{demand} = MU), \qquad P^S(x) = C'(x) \;(\text{supply} = MC)
$$

$$
CS = v(x) - p\,x, \qquad FS = p\,x - C(x), \qquad W = CS + FS = v(x) - C(x)
$$

The competitive quantity solves $v'(x) = C'(x)$, which is exactly the welfare maximum: the **first welfare theorem** for one market. With income effects CS is not an exact welfare measure.

> [!example] The market that appears every year: $U = 100x - x^2 + y$, $f = l^{1/4}k^{1/4}$, $p_l = p_k = \tfrac12$
> $C = x^2$, so $P^S = 2x$; $P^D = 100 - 2x$. Equilibrium $x^e = 25$, $p^e = 50$, $CS = FS = 625$, $W = 1250$ (2023 A Q3, 2023 example Q3, 2026 A Q2).

### Price controls: the short side decides

| Control | Binding when | Quantity traded | CS | FS |
|---|---|---|---|---|
| **Maximal price** $\bar p$ (ceiling) | $\bar p < p^e$ | supply: $C'(x) = \bar p$ | can rise or fall | falls |
| **Minimal price** $\underline p$ (floor) | $\underline p > p^e$ | demand: $v'(x) = \underline p$ | falls | can rise or fall |
| **Fixed price** | either side | the smaller of demand and supply | | |

Welfare always falls by the triangle between demand and MC from the traded quantity to $x^e$, whichever way the price moves. Two prices that leave the **same quantity** give the **same welfare** and only split it differently.

> [!example] 2023 Moed B Q3 and 2025 Moed A Q3: $U = 120x - x^2 + y$, $C = 2x^2$
> Equilibrium $x = 20$, $p = 80$, $CS = 400$, $FS = 800$, $W = 1200$.
>
> | Fixed price | Short side | $x$ | $CS$ | $FS$ | $W$ |
> |---|---|---|---|---|---|
> | 90 | demand: $120 - 2x = 90$ | 15 | 225 | 900 | 1125 |
> | 60 | supply: $4x = 60$ | 15 | 675 | 450 | 1125 |
>
> Same quantity, same welfare: the price only decides who gets the surplus.

**Best control for a government that weights $a\cdot CS + b\cdot FS$** (2026 A Q2, with $P^D = A - 2x$, $C = cx^2$):

| Weights | Optimal policy | 2026 A numbers ($A = 100$, $c = 1$) |
|---|---|---|
| $a = b$ | leave the market (or a non-binding control) | $p = 50$ |
| only CS | the ceiling that maximises CS: $\bar p = \dfrac{cA}{1 + 2c}$ | $\bar p = 33.33$ |
| only FS | the floor that maximises FS: $\underline p = \dfrac{A(1+c)}{2+c}$ | $\underline p = 66.67$ |
| $a > b > 0$ | never a floor $\ge p^e$, never a ceiling below the CS peak | not: floors $\ge 50$, ceilings $< 33.33$ |
| $b > a > 0$ | never a ceiling $\le p^e$, never a floor above the FS peak | not: ceilings $\le 50$, floors $> 66.67$ |

**Comparative statics under a binding ceiling** (2024 B Q3, 2025 B Q3): the quantity is set by **supply**. A demand increase leaves $x$, $p$ and FS unchanged and raises CS by $\Delta A\cdot x$. A cost fall raises $x$ and **both** surpluses.

**A firm with constant MC** (2024 A Q3g): zero surplus at equilibrium, so a price floor can only help it. With rising MC a high floor eventually hurts the firm: in 2024 A ($U = 60x - x^2 + y$, $C = 4x^2$) FS peaks at $\underline p = 50$ and falls below its equilibrium 144 once $\underline p > 52$.

### Subsidies

A per-unit consumer subsidy $s$ shifts demand **up** by $s$: solve $P^D(x) + s = P^S(x)$. CS and FS both rise, the government pays $s\cdot x_{new}$, and that bill is larger than the gain.

> [!example] 2023 Moed A Q3c: subsidy 20 on the $100x - x^2 + y$ market
> $120 - 2x = 2x$: $x = 30$, firms get 60, consumers pay 40. $\Delta CS = \Delta FS = 275$, cost $20\cdot 30 = 600$, net loss $50$. A price cap at 10 instead keeps only $W = 450$, so the subsidy ($W = 1200$) is the better of the two.

Financing the subsidy with a lump-sum tax on consumers makes CS **fall** overall (2025 B T/F 4). A minimum price equal to the subsidised producer price leaves the firm worse off than the subsidy: same price, fewer units (2025 B T/F 5).

---

## 4. Pareto efficiency, dominance and the planner (PS5)

| Concept | Definition |
|---|---|
| $A$ **Pareto dominates** $B$ | everyone at least as well off in $A$, someone strictly better |
| $A$ is **Pareto efficient** | no feasible allocation dominates it |
| **Social planner** | maximises $W(U_1, U_2)$, increasing in each utility (e.g. $U_1\cdot U_2$, $U_1^aU_2^{1-a}$) |

The true/false part tests the gap between these three. Learn the standard counterexample: $U_i = x_iy_i$, endowments $(10,10)$ each, $W = U_1U_2$.

| Allocation | Agent 1 | Agent 2 | $U_1$ | $U_2$ | $W$ |
|---|---|---|---|---|---|
| $A$ | $(1, 2)$ | $(19, 18)$ | 2 | 342 | 684 |
| $A'$ | $(10, 10)$ | $(10, 10)$ | 100 | 100 | 10,000 |

The planner prefers $A'$ (efficient) to $A$ (inefficient), but $A'$ does **not** dominate $A$: agent 2 falls from 342 to 100.

| Claim | Verdict |
|---|---|
| Planner prefers $A$ to $B$ $\Rightarrow$ $A$ dominates $B$ | **False** (table above; 2026 A Q1.1, 2023 example T/F 6) |
| $A$ efficient, $B$ not $\Rightarrow$ $A$ dominates $B$ | **False** (PS5 Q1, 2025 A T/F 2: $C = (100, 0)$ is efficient but does not beat $B = (9, 9)$) |
| $A$ dominates $B$ $\Rightarrow$ every planner prefers $A$ | **True** (2023 A T/F 8) |
| Planner prefers $a$ to $b$, $b$ dominates $c$ $\Rightarrow$ planner prefers $a$ to $c$ | **True**: transitivity plus respect for dominance (2023 B T/F 4) |
| A benevolent planner never picks an inefficient allocation | **True** (2025 B T/F 10) |
| The planner always prefers the equilibrium to any inefficient allocation | **False**: heavy weight on one agent (2023 B T/F 8) |
| An inefficient allocation is dominated by some allocation | **True**, by definition (2025 A T/F 5) |

---

## 5. The exchange economy (Presentation 4, PS5 to PS7)

Two agents, two goods, endowments $\omega^i = (\omega^i_x, \omega^i_y)$, totals $X$ and $Y$. In the **Edgeworth box** agent 1 measures from $0_1$ (bottom left), agent 2 from $0_2$ (top right); every point is a feasible allocation that uses everything.

**Contract curve** (all interior Pareto efficient allocations):

$$
MRS_1(x_1, y_1) = MRS_2(X - x_1,\, Y - y_1)
$$

For Cobb-Douglas $U_1 = x^ay^{1-a}$, $U_2 = x^by^{1-b}$, write $k = \tfrac{a}{1-a}$, $m = \tfrac{b}{1-b}$:

$$
y_1 = \frac{m\,Y\,x_1}{k\,X + (m - k)\,x_1}
$$

| Fact | Why |
|---|---|
| $a = b$ $\Leftrightarrow$ the contract curve is the diagonal $y_1 = \tfrac{Y}{X}x_1$ | the MRS factors cancel (2024 A Q2b, 2023 example T/F 4 and 10) |
| A constant in front of a utility ($A\cdot x^ay^{1-a}$) changes nothing | it cancels from the MRS (2024 B Q2, 2025 A T/F 4) |
| Swapping $a$ and $b$ between the agents moves the curve unless $a = b$ | 2023 B T/F 1 |
| $a \ne b$: the midpoint $(\tfrac X2, \tfrac Y2)$ is **not** efficient | 2026 A Q1.4 |
| Curve above the centre at $x_1 = X/2$ means agent 1 cares more about $y$: $a < b$ | 2024 A Q2d |
| The origins $0_1$ and $0_2$ are always Pareto efficient | one agent has everything (2023 B T/F 5) |
| A change in $Y$ moves the whole curve | 2023 A T/F 1 |

**Walrasian equilibrium.** Prices $(p_x, p_y)$, income $I_i = p_x\omega^i_x + p_y\omega^i_y$, each agent maximises on her budget line through the endowment, and markets clear. Only the **ratio** matters: set $p_y = 1$.

Cobb-Douglas demands: $x_i = \dfrac{a_i\,I_i}{p_x}$, $y_i = (1 - a_i)\,I_i$. Clearing the $x$ market gives

$$
p_x^* = \frac{a\,\omega^1_y + b\,\omega^2_y}{X - a\,\omega^1_x - b\,\omega^2_x}
$$

> [!example] 2024 Moed A Q2a: $a = \tfrac23$, $b = \tfrac13$, $\omega^1 = \omega^2 = (50, 70)$
> $p_x = \dfrac{\tfrac23\cdot 70 + \tfrac13\cdot 70}{100 - \tfrac23\cdot 50 - \tfrac13\cdot 50} = \dfrac{70}{50} = \dfrac75$. Then $x_1 = \tfrac{100}{3} + \tfrac{140}{3p_x} = \tfrac{200}{3}$, $y_1 = \tfrac{140}{3}$, $x_2 = \tfrac{100}{3}$, $y_2 = \tfrac{280}{3}$.

> [!example] 2024 Moed B Q2a: $a = b = 0.4$, $\omega^1 = (30, 70)$, $\omega^2 = (70, 30)$
> Diagonal contract curve. $x_1 = 12 + \tfrac{28}{p_x}$, $x_2 = 28 + \tfrac{12}{p_x}$, clearing gives $p_x = \tfrac23$ and $(54, 54)$, $(46, 46)$.

| Equilibrium fact | Why |
|---|---|
| **Walras' law:** $p_xz_x + p_yz_y = 0$ for excess demands $z$ | each agent spends her income. Clear one market and the other clears |
| At non-equilibrium prices one good is in excess demand, the other in excess supply | Walras' law with positive prices (2023 B T/F 9) |
| Equilibrium utility $\ge$ endowment utility | the endowment is always affordable: individual rationality (2023 B T/F 10) |
| Equilibrium is on the contract curve **and** in the lens of allocations both prefer to $\omega$ | PS7 Q1 |
| Endowment on the contract curve: no trade | 2025 B T/F 6, 2024 B Q2b |
| Identical tastes and identical endowments: no trade | 2023 B T/F 2 |
| Endowment at $0_1$: any prices are an equilibrium, allocation $0_1$ | PS7 Q2 |
| Total $x$ consumed is always $X$, so both agents cannot consume less | 2025 B T/F 7 |

---

## 6. The welfare theorems and the planner's optimum (Presentations 4 and 5, PS6, PS7)

- **First welfare theorem:** every competitive equilibrium is Pareto efficient. Proof: if a feasible allocation made both strictly better off, each would have to be unaffordable; summing the budgets contradicts feasibility. Needs no externalities, price-taking, complete markets.
- **Second welfare theorem:** any Pareto efficient allocation can be reached as an equilibrium after redistributing endowments. Lump-sum transfers do not distort margins; price controls and per-unit taxes do. Real governments lack the information, hence the equity-efficiency trade-off.

**The planner's problem in an exchange economy** (2024 A Q4): restrict to the contract curve, write both utilities along it (the **utility frontier**), then set the planner's MRS equal to the frontier's slope.

> [!example] 2024 Moed A Q4: $U_1 = x^{1/3}y^{2/3}$, $U_2 = 2x^{1/3}y^{2/3}$, $X = Y = 50$, $W = U_1^{1/3}U_2^{2/3}$
> Contract curve $y_1 = x_1$, so $U_1 = x_1$ and $U_2 = 2(50 - x_1) = 100 - 2U_1$: a straight frontier with slope $-2$. Planner: $\dfrac{U_2}{2U_1} = 2$, so $U_2 = 4U_1$, $U_1 = \tfrac{50}{3}$, $U_2 = \tfrac{200}{3}$, $x_1 = y_1 = \tfrac{50}{3}$. With weight $a$ on agent 1: $\tfrac{a}{1-a}\tfrac{U_2}{U_1} = 2$, so $\tfrac{U_2}{U_1} = \tfrac{2(1-a)}{a}$ (the official slide prints $\tfrac{2a}{1-a}$, which disagrees with its own $a = \tfrac13$ answer).

---

## 7. The production economy (Presentation 5, PS8, PS9)

Two firms ($x = f_1(l_1, k_1)$, $y = f_2(l_2, k_2)$), fixed $\bar L$ and $\bar K$, one representative consumer who owns everything. The recipe the exam always follows:

| Step | Condition | Result |
|---|---|---|
| 1. Efficiency locus | $RTS_1 = RTS_2$ with $l_2 = \bar L - l_1$, $k_2 = \bar K - k_1$ | e.g. $k_1 = l_1$ |
| 2. PPF | substitute the locus into $f_1$ and $f_2$, eliminate $l_1$ | e.g. $y = b(50 - x)$ |
| 3. Optimum | $MRS(x, y) = RPT(x, y) = -\dfrac{dy}{dx}\Big\vert_{PPF}$ | $(x^*, y^*)$ |
| 4. Output prices | $p_y = 1$, $p_x = MRS(x^*, y^*) = RPT$ | |
| 5. Input prices | firm's RTS $= p_l/p_k$, then $p_x = C_1'(x^*)$ | $(p_l, p_k)$ |
| 6. Check | $p_xx^* + p_yy^* = p_l\bar L + p_k\bar K + \text{profits}$ (zero with constant returns) | |

**The standard economy.** $f_1 = l^ak^{1-a}$, $f_2 = b\cdot l^ak^{1-a}$, $\bar L = \bar K = D$. The factor $b$ cancels from $RTS_2$ and the exponents match, so $k_1 = l_1$, $x = l_1$, $y = b(D - x)$: a **straight PPF with $RPT = b$**. The exponent $a$ does not appear anywhere (2023 A Q2d).

| Consumer | Optimum on $y = b(D - x)$ | Source |
|---|---|---|
| $x^cy^{1-c}$ | $x^* = cD$, $y^* = (1-c)bD$, $p_x/p_y = b$ | 2023 A Q2, 2026 A Q3 |
| $cx + y$ | corner: $c > b$ all $x$; $c < b$ all $y$ | 2025 A Q2, PS9 Q1 |
| $\sqrt x + y$ (quasi-linear) | $\tfrac{1}{2\sqrt x} = b$: $x$ fixed, extra resources all go to $y$ | 2025 A Q2 |

> [!example] 2023 Moed B Q2: $f_1 = f_2 = 2l^{1/3}k^{2/3}$, $\bar L = \bar K = 50$, $U = x^{1/3}y^{2/3}$
> $RTS_i = \tfrac{k_i}{2l_i}$, so $k_1 = l_1$. Then $x = 2l_1$, $y = 2(50 - l_1)$, PPF $y = 100 - x$, $RPT = 1$. $MRS = \tfrac{y}{2x} = 1$: $x^* = \tfrac{100}{3}$, $y^* = \tfrac{200}{3}$. Prices: $p_x = 1$; firm 1's RTS at $k = l$ is $\tfrac12 = p_l/p_k$, and $C_1(x) = p_l\tfrac x2 + p_k\tfrac x2$, so $\tfrac{p_l + p_k}{2} = 1$: $p_l = \tfrac23$, $p_k = \tfrac43$. Check: $\tfrac23\cdot 50 + \tfrac43\cdot 50 = 100 = x^* + y^*$.

> [!example] 2026 Moed A Q3.2: $a = \tfrac12$, $b = 1$, $\alpha = \tfrac12$
> $x^* = y^* = 25$, all inputs 25, $p_x = 1$. Firm 1: $C(x) = 2x\sqrt{p_lp_k} = p_x = 1$ with $p_l = p_k$, so $p_l = p_k = \tfrac12$.

**Comparative statics (every production question ends with these):**

| Change | PPF | Optimum |
|---|---|---|
| Firm 2 more productive ($b\uparrow$) | $y$-intercept up, slope steeper | $p_x/p_y = b$ rises; $x^*/y^*$ falls (Cobb-Douglas: $x$ unchanged, $y$ up) |
| Taste for $x$ up ($c\uparrow$) | **unchanged**: the PPF is technology only | moves along the PPF to more $x$ |
| Resources scaled ($D\uparrow$) | shifts out in proportion | Cobb-Douglas: both up in proportion, ratio fixed. Quasi-linear: only $y$ rises |
| A common exponent $a$ | unchanged | unchanged |

**Non-linear PPFs** (Presentation 5, PS9): $f_i = l_ik_i$ gives $y = (50 - \sqrt x)^2$, $RPT = \tfrac{50}{\sqrt x} - 1$; $f_i = \tfrac12(\sqrt{l_i} + \sqrt{k_i})$ gives the circle $x^2 + y^2 = 50$, $RPT = x/y$. Concave PPFs have a rising RPT: the opportunity cost of $x$ grows as you make more of it.

| Claim | Verdict |
|---|---|
| On the PPF, $RTS_1 = RTS_2$ for **any** bundles on the two isoquants | **False**: only for the efficient split (2023 A T/F 9) |
| A point on the PPF is produced by some allocation with $RTS_1 = RTS_2$ | **True** (2025 B T/F 9) |
| $MRS > RPT$ at a point: the optimum has **more** $x$ | the statement "less $x$" is false (2025 A T/F 10) |
| A change in the consumer's preferences moves the PPF | **False** (2023 B T/F 3, 2023 example T/F 5) |

---

## 8. Externalities (Presentation 5, PS10)

An **externality**: one agent's choice enters another's utility or cost **directly**, not through a price. A price rise that hurts other buyers is not an externality.

**Production externality recipe** (steel and fishery, the 2026 exporters, PS10 noise):
1. **Equilibrium:** each firm maximises its own profit, taking the other's action as given. The damage term is a constant to the firm that causes it.
2. **Planner:** maximise the **sum** of profits. The damage now shows up in the polluter's first-order condition.
3. **Pigouvian tax:** $t = $ marginal external damage at the optimum. Then the polluter's FOC is the planner's.

> [!example] 2026 Moed A Q4: two exporters, $p = 60$
> $C_A = x_A^2 + \tfrac12(x_A - e_A)^2 + 4e_B$ and symmetrically for $B$.
>
> | | $x_i$ | $e_i$ | profit each |
> |---|---|---|---|
> | Equilibrium: $e_A = x_A$, $60 = 2x_A$ | 30 | 30 | 780 |
> | Planner: $x_A - e_A = 4$, $60 - 2x_A - 4 = 0$ | 28 | 24 | 792 |
>
> Less output but **more** profit: each firm's effort costs the rival 4, and the planner stops the mutual overuse. Pigouvian tax $= 4$ per unit of effort.

> [!example] Presentation 5: steel and fishery
> $C_S = s^2 + \tfrac12(s - x)^2$, $C_F = f^2 + fx$, $p_S = 65$, $p_F = 39$. Equilibrium: $x = s$ (S makes its own cost term vanish), $3s - x = 65$, so $s = x = 32.5$, $f = 3.25$, total profit $1066.81$. Planner: $s - x = f$ as well, giving $x^* = 13$, $s^* = 26$, $f^* = 13$, total $1098.5$. Tax $t^* = \partial C_F/\partial x = f^* = 13$.

| Remedy | How | Needs |
|---|---|---|
| Pigouvian tax | $t = $ marginal damage on each unit | the government knows both cost functions |
| Tradeable rights (Coase) | give someone the right, let them trade it | clear property rights, low transaction costs; the efficient outcome does not depend on who holds the right |
| Quantity cap | set $x = x^*$ | knowing $x^*$ |
| **Lump-sum tax** | does **not** work: it does not change the margin | (2023 A T/F 10) |

**Consumption externalities** (Homer and Barney): each agent's MRS ignores the other, so demand is as if there were no externality and the market over-consumes the harmful good. But "the equilibrium is **necessarily** inefficient" is false: if the private benefit of a cigar exceeds the harm everywhere, the equilibrium stays efficient (2023 example T/F 8).

---

## 9. Public goods (Presentation 6, PS10)

Everyone consumes the same total $g = g_1 + g_2$. $U_i = V_i(g) + y_i$, a unit costs 1.

| | Condition | Total |
|---|---|---|
| **Planner** (Samuelson) | $V_1'(g^*) + V_2'(g^*) = 1$ | $g^*$, any split |
| **Stand-alone** level of agent $i$ | $V_i'(g_i^o) = 1$ | $g_i^o$ |
| **Best response** | $BR_i(g_j) = \max\{0,\; g_i^o - g_j\}$ | tops up to her own ideal |
| **Nash equilibrium** | $g_1^o = g_2^o$: every split of $g^o$. Otherwise the keener agent pays it all | $\max\{g_1^o, g_2^o\} < g^*$ |

> [!example] 2024 Moed B Q4: $U_A = a\sqrt g + y$, $U_B = b\sqrt g + y$
> Stand-alone: $\tfrac{a}{2\sqrt g} = 1$, so $g^o = \tfrac{a^2}{4}$: Alice ($a = 4$) wants 4, Bob ($b = 6$) wants 9. With $a = b = 6$: planner $\tfrac{6}{\sqrt g} = 1$, $g^* = 36$; Nash: every $(g_A, g_B)$ with $g_A + g_B = 9$. With $a = 4$, $b = 6$: unique Nash $(0, 9)$.

- **Under-provision:** at the equilibrium the non-contributor still has $V_j' > 0$, so $V_1' + V_2' > 1$ and more would be efficient.
- **Free riding:** the agent who wants less contributes nothing.
- **Identical agents do not give a unique symmetric equilibrium**: infinitely many splits (2026 A Q1.5).
- **$N$ agents** (PS10 Q3): the symmetric equilibrium gives $g^o/N$ each, total $g^o$ for any $N$; the planner's $V'(g^*) = 1/N$ rises with $N$. The failure grows with the economy.
- **Altruism** (PS10 Q4): $U_1 = V_1 + y_1 + \alpha(V_2 + y_2)$. Agent 1's FOC becomes $V_1' + \alpha V_2' = 1$, so provision rises with $\alpha$ and $\beta$, and $\alpha = 1$ (or $\beta = 1$) gives exactly $g^*$.
- **Alice and Bob's seminar** (Presentation 6): Bob free rides ($e_B = 0$, Alice 3, grade B); forcing Bob to invest 1 and having Alice pay him a fee $0.4 < f < 0.5$ makes both better off.

---

## Where to go next

- [[Micro II Formula Sheet]]: every formula on one page.
- [[Exam Question Playbook]]: the steps for each question type.
- [[Common Mistakes]] and the [[Quick Self-Test]].
- [[Graph Gallery]]: the price-control market, the Edgeworth box, the PPF and the public good game, all interactive.
