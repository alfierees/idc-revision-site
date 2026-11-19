---
title: "Perfect Substitutes, Exchange Equilibrium, Minimum Price & Social Planner (2024 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed A (March 2024)"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - perfect-substitutes
  - cost-function
  - exchange-economy
  - contract-curve
  - minimum-price
  - social-planner
aliases:
  - Micro 2 Moed A 2024
  - Micro II Exam March 2024
  - PP04 Micro II
subject: micro-ii
in_scope: true
---

# Perfect Substitutes, Exchange Equilibrium, Minimum Price & Social Planner (2024 Moed A)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed A (March 2024)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, open material, 4 questions, 25 points each.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]]

> [!info] Source
> Answers follow the **official solution** (12 pages). Where the official text has a typo or a gap, the answer is kept and a `> [!warning]` callout flags it.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | [[Perfect Substitutes]] technology: linear isoquants, corner cost minimisation, flat supply, zero profit | [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[Lec_04-Theory of the Firm, Partial & General Equilibrium]] |
| Q2 | [[Exchange Economy]] with Cobb-Douglas agents: [[Contract Curve]], [[Walrasian Equilibrium]], what the shape of the contract curve says about preferences | [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]] |
| Q3 | [[Partial Equilibrium]] with quasilinear demand and a **minimum price** (price floor): how [[Consumer Surplus]] and [[Firm Surplus]] move with the floor, increasing vs constant marginal cost | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q4 | Contract curve, **utility frontier** and a Cobb-Douglas **social planner** | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]] |

> [!tip] Intuition: the one move behind each question
> - Q1: with perfect substitutes the firm just uses whichever input gives more output per dollar, so the answer is always a corner (or a tie).
> - Q2 and Q4: find the contract curve by setting $MRS_1 = MRS_2$ and substituting the resource constraints.
> - Q3: price = marginal cost on the supply side, price = marginal utility on the demand side. A floor above equilibrium means the **short side of the market** (demand) decides the quantity.

---

## Q1 — Perfect substitutes technology (25 points)

Production function $f(l,k) = a\cdot l + b\cdot k$.

### 1a — Quantity at a convex combination of two isoquant points (7 points)

**Question.** Take two bundles $A$ and $B$ on the same isoquant and $C = rA + (1-r)B$ with $0<r<1$. How does the quantity under $C$ compare with the quantity under $A$ and $B$? Prove it.

> [!success] Answer
> $C$ produces **exactly the same quantity** as $A$ and $B$.

**Proof (official).** Let $A=(l_A,k_A)$ and $B=(l_B,k_B)$ both produce $q_0$:

$$
a\,l_A + b\,k_A = q_0 \quad\Rightarrow\quad k_A = \frac{q_0}{b} - \frac{a}{b}\,l_A
$$

$$
a\,l_B + b\,k_B = q_0 \quad\Rightarrow\quad k_B = \frac{q_0}{b} - \frac{a}{b}\,l_B
$$

By definition of $C$:

$$
k_C = r k_A + (1-r)k_B, \qquad l_C = r l_A + (1-r) l_B
$$

Substituting the two isoquant equations into $k_C$:

$$
k_C = \frac{q_0}{b} - \frac{a}{b}\Big(r l_A + (1-r) l_B\Big) = \frac{q_0}{b} - \frac{a}{b}\,l_C
$$

So $C$ lies on the same line $a\,l + b\,k = q_0$, hence produces $q_0$.

![[PP04_q1_linear_isoquant.png|560]]

*The isoquant is a straight line, so every point between $A$ and $B$ stays on it.*

> [!tip] Intuition
> This is the knife-edge case of the convex isoquant property from [[PS_02-Isoquants, RTS & Properties of the Profit Function]]. For a strictly convex isoquant (Cobb-Douglas), the midpoint of $A$ and $B$ lies on a **higher** isoquant. For perfect substitutes the isoquant is flat-straight, so the midpoint is on the **same** one: there is no gain from "mixing" inputs. That is exactly why the cost-minimiser ends up at a corner.

### 1b — Cost function when $a/b > p_l/p_k$ (6 points)

> [!success] Answer
> $l(q_0) = q_0/a$, $k(q_0) = 0$, so
> $$C(q_0) = p_l \cdot \frac{q_0}{a}$$

**Why.** The condition $\frac{a}{b} > \frac{p_l}{p_k}$ is the same as $\frac{a}{p_l} > \frac{b}{p_k}$: labour gives **more output per dollar** than capital. The [[RTS]] is the constant $a/b$ (slope of the isoquant) and the isocost slope is $p_l/p_k$. Since the isoquant is steeper than the isocost line, the isocost line touches the isoquant only at the labour-axis corner. The firm uses labour only: $a\,l = q_0 \Rightarrow l = q_0/a$.

### 1c — A fall in $p_k$ (6 points)

**Question.** What happens to the chosen $k(q_0)$ and to $C(q_0)$ when $p_k$ falls?

> [!success] Answer
> It depends on where $p_l/p_k$ ends up relative to $a/b$ (a fall in $p_k$ **raises** $p_l/p_k$):
>
> | After the fall | Regime | $k(q_0)$ | $C(q_0)$ |
> |---|---|---|---|
> | $\frac{a}{b} > \frac{p_l}{p_k}$ still | labour corner | stays $0$ | unchanged, $p_l q_0/a$ |
> | $\frac{a}{b} = \frac{p_l}{p_k}$ | indifferent | anywhere from $0$ to $q_0/b$ | unchanged, $p_l q_0/a$ |
> | $\frac{a}{b} < \frac{p_l}{p_k}$ | capital corner | jumps to $q_0/b$ | changes to $p_k q_0/b$ |

**Why.** The firm is bang-bang: small price changes do nothing while the same input stays cheaper per unit of output, and the firm switches entirely once the ranking flips. In the third case the new cost $p_k q_0/b$ is below the old $p_l q_0/a$ (that is what $\frac{a}{b}<\frac{p_l}{p_k}$ means), so cost falls.

### 1d — Supply function and equilibrium profit (6 points)

> [!success] Answer
> $C(q) = p_l q/a$, so the supply (inverse) function is the marginal cost
> $$P^S(q) = C'(q) = \frac{p_l}{a},$$
> a **horizontal line**. In equilibrium $p = MC$, so profit per marginal unit is zero for every $q$ and the firm makes **zero profit**.

![[PP04_q1_flat_supply.png|520]]

*Constant marginal cost gives a perfectly elastic supply curve at height $p_l/a$.*

> [!tip] Intuition
> Constant returns to scale (the cost is linear in $q$) means no fixed cost and no rising marginal cost to earn a rent on. Competition pushes price to $p_l/a$ and nothing is left over. This zero-profit result is used again in Q3(g).

---

## Q2 — Exchange economy with Cobb-Douglas agents (25 points)

$U_1 = x_1^{a} y_1^{1-a}$ and $U_2 = x_2^{b} y_2^{1-b}$, total resources $X$ and $Y$.

### 2a — Numerical case: $a=\tfrac23$, $b=\tfrac13$, $\omega_{x1}=\omega_{x2}=50$, $\omega_{y1}=\omega_{y2}=70$

#### (1) Contract curve (5 points)

> [!success] Answer
> $$y_1 = \frac{140\,x_1}{400 - 3x_1}$$

The [[Contract Curve]] is where $MRS_1 = MRS_2$.

$$
MRS_1 = \frac{2y_1}{x_1}, \qquad MRS_2 = \frac{y_2}{2x_2}
$$

With $x_2 = 100 - x_1$ and $y_2 = 140 - y_1$:

$$
\frac{2y_1}{x_1} = \frac{140 - y_1}{200 - 2x_1}
$$

Cross-multiplying: $4y_1(100-x_1) = x_1(140-y_1)$, so $400y_1 - 4x_1y_1 = 140x_1 - x_1y_1$, giving $y_1(400-3x_1) = 140x_1$, the stated curve.

#### (2) Equilibrium prices and quantities (5 points)

> [!success] Answer
> $p_x = \tfrac75$ (good $y$ is the numeraire), and
> $$x_1 = \tfrac{200}{3},\; y_1 = \tfrac{140}{3},\; x_2 = \tfrac{100}{3},\; y_2 = \tfrac{280}{3}$$

Agent 1 maximises $x_1^{2/3}y_1^{1/3}$ subject to $p_x x_1 + y_1 = 50p_x + 70$. Cobb-Douglas spends the share $a$ of income on $x$:

$$
x_1 = \frac{100}{3} + \frac{140}{3p_x}
$$

Agent 2 maximises $x_2^{1/3}y_2^{2/3}$ on the same budget form:

$$
x_2 = \frac{50}{3} + \frac{70}{3p_x}
$$

Market clearing for $x$ ($x_1 + x_2 = 100$):

$$
\frac{100}{3} + \frac{140}{3p_x} + \frac{50}{3} + \frac{70}{3p_x} = 100 \;\Rightarrow\; 50 + \frac{70}{p_x} = 100 \;\Rightarrow\; p_x = \frac{7}{5}
$$

Plugging back gives the allocation above. By [[Walras' Law]] the $y$ market clears automatically.

![[PP04_q2_contract_curve_equilibrium.png|520]]

*The equilibrium allocation lies on the contract curve, as the [[First Welfare Theorem]] requires. Agent 1, who likes $x$ more, ends up with more $x$ than the endowment.*

> [!tip] Intuition
> Agent 1 has $a = 2/3$ (loves $x$), agent 2 has $b = 1/3$ (loves $y$). Both start with the same bundle, so agent 1 sells $y$ and buys $x$. The allocation sits below the diagonal: $y_1 < 70$ and $x_1 > 50$.

### 2b — Contract curve $y_1 = \frac{Y}{X}x_1$ (5 points)

> [!success] Answer
> This holds if and only if $a = b$.

**Proof (official), both directions.**

*($a=b \Rightarrow$ line).* Equal MRS gives
$$\frac{a}{1-a}\cdot\frac{y_1}{x_1} = \frac{a}{1-a}\cdot\frac{y_2}{x_2}$$
and with $x_2 = X - x_1$, $y_2 = Y - y_1$:
$$\frac{y_1}{x_1} = \frac{Y-y_1}{X-x_1}$$
Cross-multiplying: $y_1X - y_1x_1 = x_1Y - y_1x_1$, so $y_1 = \frac{Y}{X}x_1$.

*(line $\Rightarrow a=b$).* If $y_1 = \frac{Y}{X}x_1$ then $y_1X - y_1x_1 = x_1Y - y_1x_1$, so $\frac{y_1}{x_1} = \frac{Y-y_1}{X-x_1} = \frac{y_2}{x_2}$. The contract curve condition $\frac{a}{1-a}\frac{y_1}{x_1} = \frac{b}{1-b}\frac{y_2}{x_2}$ then forces $\frac{a}{1-a} = \frac{b}{1-b}$, i.e. $a=b$.

> [!tip] Intuition
> Identical tastes mean that when both agents face the same ratio $y/x$ their MRS is equal. The contract curve is then the Edgeworth box diagonal: efficient allocations give both agents the same bundle proportions.

### 2c — Price ratio when $X = Y$, diagonal contract curve, $a = \tfrac15$ (5 points)

> [!success] Answer
> $p_x = \tfrac14$

With $X=Y$ the diagonal is $y_1 = x_1$. A competitive equilibrium in the interior is Pareto efficient, so it sits on the contract curve, and the price ratio equals the MRS:

$$
\frac{a}{1-a}\cdot\frac{y_1}{x_1} = p_x
$$

On the diagonal $y_1/x_1 = 1$, so $p_x = \frac{a}{1-a} = \frac{1/5}{4/5} = \frac14$.

### 2d — Contract curve passes above the centre: $y_1(X/2) > Y/2$ (5 points)

> [!success] Answer
> $a \neq b$, and more precisely $a < b$.

**Why (official).** By 2b, if $a=b$ the contract curve is the diagonal and passes through the centre $(X/2, Y/2)$. A curve strictly above the centre therefore means $a \neq b$. At the point where $x$ is split evenly, agent 1 gets more $y$ than agent 2, so agent 1 values $y$ more relative to $x$: $a < b$.

> [!tip] Intuition: check it with the MRS
> At $x_1 = x_2 = X/2$: equal MRS requires $\frac{a}{1-a}y_1 = \frac{b}{1-b}y_2$. If $y_1 > y_2$, then $\frac{a}{1-a}$ must be **smaller** than $\frac{b}{1-b}$, so $a<b$. The agent who weights $y$ more (agent 1) gets more $y$ when $x$ is split equally.

---

## Q3 — Partial equilibrium and a minimum price (25 points: parts 3, 3, 7, 3, 3, 3, 3)

Demand comes from a consumer with quasilinear utility $60x - x^2 + y$ ($y$ is money). Supply comes from a representative firm.

> [!info] Setup used in every part
> For [[Quasilinear Utility]], the inverse demand is the marginal utility of $x$: $P^D(x) = 60 - 2x$. The inverse supply is the marginal cost: $P^S(x) = C'(x)$. See [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]].

### Part I: firm with $f = l^{1/4}k^{1/4}$, $p_k = p_l = 2$

#### 3a — Cost function (3 points)

> [!success] Answer
> $C(x) = 4x^2$

Set RTS equal to the price ratio: $\frac{k}{l} = \frac{p_l}{p_k} = 1$, so $l = k$. The isoquant is $l^{1/4}k^{1/4} = l^{1/2} = x$, so $l(x)=k(x)=x^2$ and

$$
C(x) = 2x^2 + 2x^2 = 4x^2
$$

#### 3b — Equilibrium (3 points)

> [!success] Answer
> $x^* = 6$, $p^* = 48$

$P^S(x) = C'(x) = 8x$. Equate $60 - 2x = 8x$, so $x^*=6$ and $p^* = 48$.

#### 3c — Minimum price $\tilde p$ (7 points)

**Question.** Find the consumer surplus and the firm's surplus as functions of $\tilde p$, and where each is increasing or decreasing.

> [!success] Answer
> - If $\tilde p \le 48$: the floor does not bind, price is 48 and quantity 6. $CS = 60x - x^2 - px = 36$ and firm surplus $= px - 4x^2 = 144$. Both are constant.
> - If $\tilde p > 48$: quantity is set by demand, $x = \frac{60-\tilde p}{2}$.
>   - $CS$ **decreases** in $\tilde p$ throughout (down to 0 at $\tilde p = 60$).
>   - Firm surplus is $-\frac{3\tilde p^2}{2} + 150\tilde p - 3600$, which **increases** until $\tilde p = 50$ and **decreases** afterwards.

**Derivation.** Above the equilibrium price, firms would gladly supply more than consumers want to buy, so the quantity traded is the **short side**, which is demand: $60 - 2x = \tilde p$.

Firm surplus:

$$
\tilde p\cdot\frac{60-\tilde p}{2} - 4\left(\frac{60-\tilde p}{2}\right)^2 = -\frac{3\tilde p^2}{2} + 150\tilde p - 3600
$$

First-order condition: $-3\tilde p + 150 = 0$, so $\tilde p = 50$ is the peak.

> [!warning] Typo in the official consumer surplus
> The solution prints $CS = \frac{(60-\tilde p)^2}{2}$. Computing it: $CS = x(60 - \tilde p) - x^2 = 2x^2 - x^2 = x^2 = \frac{(60-\tilde p)^2}{4}$. At $\tilde p = 48$ this gives $\frac{12^2}{4} = 36$, matching the "36" in the first case (with $/2$ it would be 72, which breaks continuity). The conclusion (decreasing in $\tilde p$) is unaffected. The $/4$ version is used here.

![[PP04_q3_min_price_surplus.png|640]]

*Left: consumer surplus is flat at 36 and then falls once the floor binds. Right: firm surplus rises from 144 to a peak of 150 at $\tilde p = 50$, then falls and crosses back through 144 at $\tilde p = 52$.*

> [!tip] Intuition
> A small floor above 48 makes the firm earn more per unit, which outweighs the units lost. Beyond 50 the lost sales dominate. This is the standard price-floor trade-off: the producer benefits from the higher price only while the volume loss is small, because the firm has **rising marginal cost** so the units lost were not very profitable.

#### 3d — When is the firm worse off than in equilibrium? (3 points)

> [!success] Answer
> For $\tilde p > 52$.

Set firm surplus equal to its equilibrium value, 144:

$$
-\frac{3\tilde p^2}{2} + 150\tilde p - 3744 = 0
$$

which has roots $\tilde p = 48$ and $\tilde p = 52$ (the official solution reports the positive root 52 that is relevant above 48). Above 52 firm surplus is strictly below 144.

### Part II: firm with $f = l^{1/2}k^{1/2}$, $p_k = 4$, $p_l = 1$

#### 3e — Cost function (3 points)

> [!success] Answer
> $C(x) = 4x$

RTS equals the price ratio: $\frac{k}{l} = \frac{p_l}{p_k} = \frac14$, so $k = l/4$. The isoquant $l^{1/2}k^{1/2} = l/2 = x$ gives $l = 2x$ and $k = x/2$. Then

$$
C(x) = 1\cdot 2x + 4\cdot\frac{x}{2} = 4x
$$

> [!warning] Printed typo
> The official text writes the condition as "$k = 4l$" in one place but the numbers it then uses ($l = 2x$, $k = x/2$, $C = 4x$) correspond to $k = l/4$, which is the correct tangency above.

#### 3f — Equilibrium (3 points)

> [!success] Answer
> $x^* = 28$, $p^* = 4$

$P^S = C'(x) = 4$. Equate $60 - 2x = 4$, so $x^* = 28$ and $p^* = 4$.

#### 3g — Minimum price with constant marginal cost (3 points)

> [!success] Answer
> The firm makes **zero** surplus in equilibrium, whereas any floor $\tilde p > 4$ gives it a positive surplus. So the firm **never loses** from a minimum price, unlike part (d), where a high enough floor leaves it worse off.

**Economic explanation.** In (d) the firm had **increasing** marginal cost, so extra production earned a rent, and a high floor that cut the quantity destroyed more rent than the higher price created. Here marginal cost is **constant** (as in Q1d), so there is no rent from the quantity in equilibrium to lose: the equilibrium surplus is zero, and any floor above 4 can only help.

> [!warning] Gap in the official solution
> The last sentence of the official explanation is cut off ("The explanation for the difference is that when the firm has constant marginal cost."). The reading above is the natural completion. Also, strictly, at $\tilde p \ge 60$ demand is zero, so quantity and surplus are $0$, which equals (not exceeds) the equilibrium surplus. The statement "never loses" is therefore weakly true.

---

## Q4 — Exchange economy and the social planner (25 points)

$U_1 = x_1^{1/3}y_1^{2/3}$, $U_2 = 2\,x_2^{1/3}y_2^{2/3}$, $X = Y = 50$.

### 4a — Contract curve (5 points)

> [!success] Answer
> $y_1 = x_1$ (the diagonal of the box)

$MRS_1 = \frac{y_1}{2x_1}$ and $MRS_2 = \frac{y_2}{2x_2}$. With $x_2 = 50-x_1$, $y_2 = 50-y_1$:

$$
\frac{y_1}{2x_1} = \frac{50 - y_1}{100 - 2x_1}
$$

Cross-multiplying: $y_1(100 - 2x_1) = 2x_1(50 - y_1)$, so $100y_1 = 100x_1$, i.e. $y_1 = x_1$.

> [!tip] Intuition
> Both agents have the same Cobb-Douglas exponents ($a = b = 1/3$). The factor 2 in $U_2$ scales the utility level but leaves the MRS unchanged, so it does not move the contract curve. This is the $a=b$ case from Q2(b) with $X=Y$.

### 4b — The planner's problem (5 points)

> [!success] Answer
> $$
> \max_{(x_1,y_1),(x_2,y_2)}\; \big(x_1^{1/3}y_1^{2/3}\big)^{1/3}\cdot\big(2\,x_2^{1/3}y_2^{2/3}\big)^{2/3}
> $$
> subject to $x_1 + x_2 = 50$ and $y_1 + y_2 = 50$.

This is $SW(U_1,U_2) = U_1^{1/3}U_2^{2/3}$ with the utilities substituted in.

### 4c — Optimal allocation (10 points)

> [!success] Answer
> $x_1 = y_1 = \tfrac{100}{6} = \tfrac{50}{3}$, $\;x_2 = y_2 = \tfrac{100}{3}$, $\;U_1 = \tfrac{50}{3}$, $\;U_2 = \tfrac{200}{3}$.

**Method (official).** This is the same algorithm as the planner in a production economy: first restrict to efficient allocations, then trace the **utility frontier**, then find the tangency with the planner's indifference curve.

*Step 1: utility frontier.* On the contract curve $y_1 = x_1$:

$$
U_1 = x_1^{1/3}x_1^{2/3} = x_1
$$

$$
U_2 = 2\,(50 - x_1)^{1/3}(50 - x_1)^{2/3} = 2(50 - x_1) = 100 - 2U_1
$$

So the frontier is $U_2 = 100 - 2U_1$, a straight line with slope $-2$.

*Step 2: the planner's MRS.* For $SW = U_1^{1/3}U_2^{2/3}$:

$$
MRS_{SW} = \frac{\tfrac13 U_1^{-2/3}U_2^{2/3}}{\tfrac23 U_1^{1/3}U_2^{-1/3}} = \frac{U_2}{2U_1}
$$

*Step 3: tangency.* Set $\frac{U_2}{2U_1} = 2$, so $U_2 = 4U_1$. Plug into the frontier:

$$
4U_1 = 100 - 2U_1 \;\Rightarrow\; U_1 = \frac{50}{3},\quad U_2 = \frac{200}{3}
$$

Since $U_1 = x_1$: $x_1 = y_1 = \frac{50}{3} = \frac{100}{6}$, and $x_2 = y_2 = 50 - \frac{50}{3} = \frac{100}{3}$. Check: $U_2 = 2\cdot\frac{100}{3} = \frac{200}{3}$.

![[PP04_q4_utility_frontier.png|560]]

*The planner picks the point where the highest social-welfare indifference curve just touches the utility frontier.*

> [!tip] Intuition
> The planner weights agent 2 twice as much (exponent $2/3$ vs $1/3$), and agent 2's utility is also scaled up by the factor 2. Agent 2 therefore ends up with more of the resources (two thirds of each good) and four times the utility of agent 1.

### 4d — General weight $a$: $SW = U_1^{a}U_2^{1-a}$ (5 points)

> [!success] Answer (official)
> The official solution states
> $$\frac{U_2}{U_1} = \frac{2a}{1-a}$$
> obtained from $\frac{1-a}{a}\cdot\frac{U_2}{U_1} = 2$, and explains that the planner divides utility according to the weights in its Cobb-Douglas objective: with equal weights ($a=\tfrac12$) the resources are split equally and agent 2 gets twice the utility; **when $a$ falls, agent 2 gets more**.

> [!warning] Concern: the official formula looks inverted
> Differentiating $SW = U_1^{a}U_2^{1-a}$ gives
> $$MRS_{SW} = \frac{\partial SW/\partial U_1}{\partial SW/\partial U_2} = \frac{a}{1-a}\cdot\frac{U_2}{U_1}$$
> (the weight on $U_1$ is in the **numerator**). Setting this equal to the frontier slope 2 gives
> $$\frac{U_2}{U_1} = 2\cdot\frac{1-a}{a}$$
> Check against part (c): $a=\tfrac13$ gives $U_2/U_1 = 2\cdot 2 = 4$, which is the $U_2 = 4U_1$ found in 4c. The official formula would give $\frac{2/3}{2/3}=1$ at $a=\tfrac13$, contradicting 4c. The corrected form is also what the question seems to be after (ratio of utilities as a function of $\frac{1-a}{a}$: proportional, factor 2). It also agrees with the official explanation that a lower $a$ gives agent 2 more. The official wording is kept above; check with the lecturer before relying on either form in an exam.

**Derivation with the check.** The frontier $U_2 = 100 - 2U_1$ does not depend on the planner's weights, so its slope is $2$ for any $a$. Tangency: $\frac{a}{1-a}\cdot\frac{U_2}{U_1} = 2$. Equal weights ($a=\tfrac12$): $U_2 = 2U_1$ and $U_2 = 100-2U_1$ give $U_1 = 25$, $U_2 = 50$, so $x_1 = y_1 = 25$ and resources are split equally while utilities are $1:2$ (the extra factor 2 in $U_2$ does that). Both versions agree at $a=\tfrac12$, which is why the typo is easy to miss.

> [!tip] Intuition
> The weight $a$ is how much the planner cares about agent 1. A smaller $a$ (larger $\frac{1-a}{a}$) tilts utility, and resources, towards agent 2.

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| 1a | Linear isoquant algebra | $C$ is on the same isoquant: same output $q_0$ |
| 1b | Corner solution, $\frac{a}{b} > \frac{p_l}{p_k}$ | $C = p_l q_0 / a$, labour only |
| 1c | Comparative statics on a corner | $k$ stays 0, becomes any value up to $q_0/b$, or jumps to $q_0/b$ depending on $\frac{p_l}{p_k}$ vs $\frac ab$ |
| 1d | $P^S = MC$ | Flat supply at $p_l/a$, zero profit |
| 2a1 | $MRS_1 = MRS_2$ | $y_1 = 140x_1/(400-3x_1)$ |
| 2a2 | Walrasian equilibrium | $p_x = 7/5$, $(x_1,y_1) = (200/3, 140/3)$ |
| 2b | Equal MRS with identical shares | $a = b$ iff contract curve is $y_1 = \frac{Y}{X}x_1$ |
| 2c | Price = MRS on the diagonal | $p_x = 1/4$ |
| 2d | Curve above the centre | $a < b$ |
| 3a | RTS = price ratio | $C = 4x^2$ |
| 3b | $P^D = P^S$ | $x^*=6$, $p^*=48$ |
| 3c | Short side of the market | $CS$ falls, firm surplus peaks at $\tilde p = 50$ |
| 3d | Solve $FS = 144$ | Firm worse off for $\tilde p > 52$ |
| 3e | RTS = price ratio | $C = 4x$ |
| 3f | $P^D = P^S$ | $x^*=28$, $p^*=4$ |
| 3g | Constant MC, zero equilibrium surplus | Firm never loses from a floor |
| 4a | $MRS_1 = MRS_2$ | $y_1 = x_1$ |
| 4b | Planner's problem | maximise $SW$ s.t. resource constraints |
| 4c | Utility frontier tangency | $U_1 = 50/3$, $U_2 = 200/3$, $x_1 = y_1 = 50/3$ |
| 4d | Frontier slope = planner MRS | Official $U_2/U_1 = 2a/(1-a)$ (flagged; correct tangency gives $2(1-a)/a$) |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[PS_03-Cost Minimisation & Properties of the Cost Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]
- [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]
- [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]]
