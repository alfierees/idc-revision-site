---
title: "Cost Functions, Exchange Equilibrium, Price Cap & Public Good Provision (2024 Moed B)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed B (April 2024)"
semester: 1
year: 2
course: "Micro-Economics II"
instructor: Dr. Boaz Zik
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - cost-function
  - corner-solution
  - exchange-economy
  - contract-curve
  - price-ceiling
  - public-goods
  - nash-equilibrium
aliases:
  - Micro 2 Moed B 2024
  - Micro II Exam April 2024
  - PP05 Micro II
subject: micro-ii
in_scope: true
---

# Cost Functions, Exchange Equilibrium, Price Cap & Public Good Provision (2024 Moed B)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed B (April 2024)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, open material, 4 questions, 25 points each.
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]], [[Lec_06-Public Goods & Altruism]]
> Practice: [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]

> [!info] Source
> Answers follow the **official solution** (8 pages). Where the official text has a typo or a gap, the answer is kept and a `> [!warning]` callout says so. Part 4d has no worked official solution.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | [[Cost Minimisation]] with a technology that mixes a concave input and a linear input: a **kinked** [[Cost Function]], and when the two-input firm is cheaper than the one-input firm | [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[Lec_04-Theory of the Firm, Partial & General Equilibrium]] |
| Q2 | [[Exchange Economy]] with Cobb-Douglas agents: [[Contract Curve]], [[Walrasian Equilibrium]], and what happens when agent 2's utility is scaled by $A$ | [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]] |
| Q3 | [[Partial Equilibrium]] with [[Quasilinear Utility]] and a **maximum price** ([[Price Ceiling]]): welfare effects, then shifts in demand and in costs under a binding cap | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |
| Q4 | Public good with square-root benefits: stand-alone provision, social optimum, Nash equilibria, free riding | [[Lec_06-Public Goods & Altruism]] |

> [!tip] Intuition: the one move behind each question
> - Q1: compare **marginal product per dollar** of each input. Labour is used first (its marginal product falls), capital takes over once labour's marginal product per dollar has dropped to capital's.
> - Q2: identical Cobb-Douglas exponents mean identical [[MRS]] at any common ratio $y/x$, so the contract curve is the box diagonal. Scaling a utility function by $A$ changes nothing real.
> - Q3: under a binding cap, the quantity is set by the **supply side** ($MC$ equals the cap). Everything that does not move $MC$ leaves quantity unchanged.
> - Q4: each player equates **her own** marginal benefit to the price; the planner equates the **sum**.

---

## Q1 — Cost functions with one and two inputs (25 points)

Input prices: $p_l = 3$, $p_k = 12$ in parts a to c, then $p_k = 24$ in part d.

### 1a — Cost function for $f(l,k) = \sqrt{l} + k$ (10 points)

> [!success] Answer
> $$
> C(q) = \begin{cases} 3q^2 & q \le 2 \\ 12q - 12 & q > 2 \end{cases}
> $$

**Step 1: where does the firm switch inputs?** The technology has [[Diminishing RTS]] in labour: $MP_l = \frac{1}{2\sqrt l}$ falls with $l$, while $MP_k = 1$ is constant. The [[Tangency Condition]] sets the [[RTS]] equal to the price ratio:

$$
\frac{MP_l}{MP_k} = \frac{1}{2\sqrt{l}} = \frac{p_l}{p_k} = \frac{3}{12}
$$

so $2\sqrt{l} = 4$, i.e. $\sqrt{l} = 2$ and $l = 4$.

**Step 2: read off the two regimes.** Labour alone can produce at most $\sqrt{4} = 2$ units while its marginal product per dollar is still at least capital's.

- **If $q \le 2$:** use labour only, $l(q) = q^2$ and $k(q) = 0$. Cost $= 3q^2$.
- **If $q > 2$:** labour is held at the tangency level $l = 4$ (which delivers $\sqrt 4 = 2$ units) and capital supplies the rest, $k(q) = q - 2$. Cost $= 3\cdot 4 + 12(q-2) = 12q - 12$.

> [!tip] Intuition
> Labour is cheap but has diminishing returns, capital is dear but each unit always adds exactly one unit of output. The first units of output come from labour. Once labour's marginal cost has risen to $12$ (the cost of a unit of output via capital), the firm stops adding labour and buys capital. Check: $MC = 6q$ for $q<2$ reaches $12$ at $q = 2$, and is $12$ ever after. The cost function is continuous at the kink: $3\cdot 2^2 = 12 = 12\cdot 2 - 12$.

### 1b — Cost function for $f(l) = \sqrt{l}$ (5 points)

> [!success] Answer
> $C(q) = 3q^2$

With one input there is no choice: $q = \sqrt l$ gives $l = q^2$ and cost $= p_l\,q^2 = 3q^2$.

### 1c — When is the two-input firm strictly cheaper? $p_k = 12$ (5 points)

> [!success] Answer
> For all $q > 2$.

Compare the two cost functions from 1a and 1b:

- For $q \le 2$ they are identical, $3q^2$ (the two-input firm chooses labour only, so it behaves like the one-input firm).
- For $q > 2$ the difference is

$$
3q^2 - (12q - 12) = 3(q-2)^2 > 0
$$

so the two-input firm is strictly cheaper.

### 1d — The same question with $p_k = 24$, and the economics (5 points)

> [!success] Answer
> $$
> C(q) = \begin{cases} 3q^2 & q \le 4 \\ 24q - 48 & q > 4 \end{cases}
> $$
> The two-input firm is strictly cheaper for all $q > 4$ (compare $q > 2$ in part c).

**Derivation.** Tangency: $\frac{1}{2\sqrt l} = \frac{3}{24}$, so $2\sqrt l = 8$, $\sqrt l = 4$, $l = 16$. For $q \le 4$ use labour only ($l = q^2$, cost $3q^2$). For $q > 4$: $l = 16$, $k = q - 4$, cost $= 3\cdot 16 + 24(q-4) = 24q - 48$. The gap is $3q^2 - (24q - 48) = 3(q-4)^2 > 0$ for $q>4$.

![[PP05_q1_cost_functions.png|640]]

*Left: $p_k = 12$, kink at $q = 2$. Right: $p_k = 24$, kink at $q = 4$. The dashed curve is the one-input cost $3q^2$. The two-input cost never lies above it and separates from it only after the kink.*

> [!success] Economic explanation (official)
> The quantity beyond which the two-input firm is cheaper depends on relative prices. The more expensive capital is, the later the firm moves from producing with labour to producing with capital, so the two-input firm has an advantage only at a larger quantity.

> [!tip] Intuition
> Capital is a "backup" input. It only has value once labour has become expensive at the margin. If capital costs twice as much, labour must run twice as far up its marginal-cost curve ($6q$ must reach $24$, not $12$) before capital is worth buying. So the kink moves from $q = 2$ to $q = 4$.

---

## Q2 — Exchange economy with a scale factor $A$ (25 points)

$U_1(x_1,y_1) = x_1^{a}y_1^{1-a}$ and $U_2(x_2,y_2) = A\cdot x_2^{a}y_2^{1-a}$. Total resources $\overline X$ and $\overline Y$.

### 2a — Numerical case: $a = 0.4$, $A = 1$, $\omega^1 = (30, 70)$, $\omega^2 = (70, 30)$

Totals: $\overline X = \overline Y = 100$.

#### (1) Contract curve (6 points)

> [!success] Answer
> $y_1 = x_1$

On the [[Contract Curve]], $MRS_1 = MRS_2$. Both agents have exponent $a$ and $A=1$:

$$
\frac{a}{1-a}\cdot\frac{y_1}{x_1} = \frac{a}{1-a}\cdot\frac{y_2}{x_2}
$$

so $\frac{y_1}{x_1} = \frac{y_2}{x_2} = \frac{100 - y_1}{100 - x_1}$. Cross-multiplying gives $100\,y_1 - x_1y_1 = 100\,x_1 - x_1y_1$, so $y_1 = x_1$. The contract curve is the diagonal of the [[Edgeworth Box]].

#### (2) Equilibrium prices and quantities (6 points)

> [!success] Answer
> $x_1 = y_1 = 54$, $\;x_2 = y_2 = 46$, $\;p_x = \frac{2}{3}$ (good $y$ is the numeraire, $p_y = 1$).

A Cobb-Douglas consumer spends the share $a$ of wealth on $x$. Agent 1 has wealth $30p_x + 70$:

$$
x_1 = \frac{0.4\,(30p_x + 70)}{p_x} = 12 + \frac{28}{p_x}
$$

Agent 2 has wealth $70p_x + 30$:

$$
x_2 = \frac{0.4\,(70p_x + 30)}{p_x} = 28 + \frac{12}{p_x}
$$

Market clearing for $x$, $x_1 + x_2 = 100$:

$$
40 + \frac{40}{p_x} = 100 \;\Rightarrow\; p_x = \frac{2}{3}
$$

Then $x_1 = 12 + 28\cdot\frac32 = 54$ and $x_2 = 28 + 12\cdot\frac32 = 46$. For $y$: $y_1 = 0.6\,(30\cdot\frac23 + 70) = 0.6\cdot 90 = 54$ and $y_2 = 46$. By [[Walras' Law]] the $y$ market clears too.

![[PP05_q2_edgeworth_equilibrium.png|420]]

*Trade moves agent 1 from the endowment $(30, 70)$ to $(54, 54)$, which lies on the diagonal contract curve, as the [[First Welfare Theorem]] requires.*

> [!tip] Intuition
> Agent 1 starts with a lot of $y$ and little $x$, agent 2 the reverse, and they have the same tastes. Trade moves them to the same bundle proportions. Agent 1 ends with slightly more than half of each good because $x$ is cheap relative to $y$ ($p_x = \frac23$), and agent 1 holds more $y$-wealth: at these prices agent 1's wealth is $90$ against agent 2's $76.67$.

### 2b — Equal split endowments: agent 2's utility is $A$ times agent 1's (7 points)

Endowments: $\omega^1 = \omega^2 = (\overline X/2, \overline Y/2)$.

> [!success] Answer
> The equilibrium is at the endowment (no trade), so $U_2 = A\cdot U_1$ in equilibrium.

**Why (official).** Both agents hold the same bundle, and they have the same $MRS$ (the factor $A$ does not enter the $MRS$, because it multiplies the whole utility function). So at the endowment $MRS_1 = MRS_2$: the endowment is already on the contract curve, and no mutually beneficial trade exists. The price ratio that supports it is the common $MRS$, and each agent demands exactly her endowment. Then

$$
U_1 = \left(\tfrac{\overline X}{2}\right)^{a}\left(\tfrac{\overline Y}{2}\right)^{1-a}, \qquad U_2 = A\cdot\left(\tfrac{\overline X}{2}\right)^{a}\left(\tfrac{\overline Y}{2}\right)^{1-a} = A\cdot U_1 .
$$

> [!tip] Intuition
> Same bundle plus same tastes means nothing to trade. The only difference between the agents is the scale factor $A$, which multiplies utility but has no effect on choices.

### 2c — Moving from $A = L$ to $A = H$ with $L < H$ (6 points)

> [!success] Answer
> The equilibrium allocation **does not change**. It is the endowment under both values of $A$.

**Why (official).** Part (b) holds for any $A$, and the $MRS$ does not depend on $A$. So the equilibrium is at the common endowment whether $A = L$ or $A = H$. Only the utility **level** of agent 2 changes (it scales up with $A$); the allocation and prices stay the same.

> [!tip] Intuition
> Utility is ordinal. Multiplying a utility function by a positive constant represents the same preferences, so demands, prices and allocations are unaffected. Agent 2 is "happier" in $H$ only in the sense of the number attached to the same bundle, which has no economic meaning by itself. (It would matter for a **social planner** who adds utilities, as in [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]].)

---

## Q3 — Partial equilibrium and a maximum price (25 points)

Demand comes from a representative consumer with [[Quasilinear Utility]] $A\cdot x - x^2 + y$ (income high enough for an interior solution). Supply comes from a representative firm with $f(k,l) = l^{1/4}k^{1/4}$ and input prices $p_l$, $p_k$.

> [!info] Setup used in every part
> For quasilinear utility, the inverse demand equals the marginal utility of $x$: $P^D(x) = A - 2x$. The inverse supply is the marginal cost, $C'(x)$. Surplus formulas: $CS = Ax - x^2 - px$ and $FS = px - C(x)$.

### 3a — $A = 180$, $p_l = p_k = 1$

#### (i) Cost function (4 points)

> [!success] Answer
> $C(x) = 2x^2$

Tangency: $RTS = \frac{k}{l} = \frac{p_l}{p_k} = 1$, so $l = k$. The isoquant is $l^{1/4}k^{1/4} = l^{1/2} = x$, so $l(x) = k(x) = x^2$ and

$$
C(x) = 1\cdot x^2 + 1\cdot x^2 = 2x^2 .
$$

The marginal cost is $MC = 4x$.

#### (ii) Equilibrium and welfare (4 points)

> [!success] Answer
> $x^* = 30$, $p^* = 120$, $CS = 900$, $FS = 1800$, $SW = 2700$.

Inverse demand is $180 - 2x$. Set it equal to marginal cost, $180 - 2x = 4x$, so $x^* = 30$ and $p^* = 120$.

$$
CS = 180\cdot 30 - 30^2 - 120\cdot 30 = 5400 - 900 - 3600 = 900
$$

$$
FS = 120\cdot 30 - 2\cdot 30^2 = 3600 - 1800 = 1800
$$

$$
SW = CS + FS = 2700 .
$$

#### (iii) A maximum price of 80 (4 points)

> [!success] Answer
> $x = 20$, $CS = 1600$, $FS = 800$, $SW = 2400$.
>
> | | Equilibrium | Cap of 80 | Change |
> |---|---|---|---|
> | Quantity | 30 | 20 | down 10 |
> | $CS$ | 900 | 1600 | up 700 |
> | $FS$ | 1800 | 800 | down 1000 |
> | $SW$ | 2700 | 2400 | down 300 |

The cap of 80 is below the equilibrium price 120, so it binds. At a price of 80 consumers want $180 - 2x = 80$, i.e. $x = 50$, but the firm supplies only where $MC = 80$, i.e. $4x = 80$, $x = 20$. The quantity traded is the **short side**, supply: $x = 20$.

$$
CS = 180\cdot 20 - 20^2 - 80\cdot 20 = 3600 - 400 - 1600 = 1600
$$

$$
FS = 80\cdot 20 - 2\cdot 20^2 = 1600 - 800 = 800
$$

> [!warning] Typo in the official solution
> The official text calls the second expression "the consumer surplus" twice: it says "The consumer surplus equal $80x - 2x^2$" (this is the **firm** surplus, giving 800) and later "The consumer surplus decreased" (it means the **firm** surplus). The numbers (1600 and 800) and the direction of each change are right.

**Explanation (official).** The consumer surplus rises: the lower price compensates the consumer for the lower quantity. The firm surplus falls because both the quantity and the price fall. Social welfare falls because the allocation no longer coincides with the equilibrium allocation.

> [!tip] Intuition: where the lost welfare goes
> The $300$ loss is the [[Deadweight Loss]] triangle between demand and marginal cost over the units from $20$ to $30$: at $x = 20$ demand is $140$ and $MC = 80$, so the triangle is $\frac12\cdot 10\cdot 60 = 300$. Splitting it up: on the $20$ units still traded, the price drop transfers $(120-80)\cdot 20 = 800$ from firm to consumer. On the $10$ units no longer traded, the consumer loses $100$ and the firm loses $200$. So $CS$ changes by $+800 - 100 = +700$, $FS$ by $-800 - 200 = -1000$, and the net is $-300$. This treats the $20$ units as going to the consumers who value them most, as the official $CS$ formula does.

![[PP05_q3_price_cap.png|600]]

*Blue: consumer surplus with the cap. Red: firm surplus with the cap. Grey: the deadweight loss triangle, units 20 to 30.*

### 3b — Demand rises ($A$ increases) under a binding cap (5 points)

> [!success] Answer
> The firm surplus is **unchanged**. The consumer surplus **rises**.

**Why (official).** A higher $A$ shifts demand out, so the equilibrium price rises and the cap is still below it. The cap still binds, so the quantity is set where $MC$ equals the cap. $MC$ does not depend on $A$, so the **quantity is unchanged**, and so is the price (it is the cap).

- Firm surplus $= p\cdot x - C(x)$: $p$, $x$ and $C$ are all unchanged, so it does not change.
- Consumer surplus $= A\cdot x - x^2 - p\cdot x$: $x$ and $p$ are unchanged, but $A$ is larger, so it rises by $\Delta A\cdot x$.

![[PP05_q3_cap_comparative_statics.png|680]]

*Left panel: demand shifts up, the quantity stays at the same point (set by the cap meeting MC), so the shaded consumer-surplus area grows while the firm's triangle does not move. Shapes are illustrative; no numbers are implied.*

> [!tip] Intuition
> The consumer values every unit more, but the firm will not supply any more at a price of the cap. So the consumer enjoys a bigger gain from the same units. The extra demand only produces a bigger shortage.

### 3c — Input prices $p_l$ and $p_k$ fall under a binding cap (5 points)

> [!success] Answer
> The quantity **rises**, the price stays at the cap, and **both** the consumer surplus and the firm surplus **rise**.

**Why (official).** A fall in input prices lowers the marginal cost curve. The quantity is where $MC$ equals the cap, so it rises. The price stays equal to the cap.

- Consumer surplus: for a given price it increases in the quantity, so it rises.
- Firm surplus: the marginal cost has decreased, so the firm earns more on the same price and sells more, so it rises.

> [!tip] Intuition: a quick check with this firm's costs (mine)
> With $C(x) = c\,x^2$ where $c = 2\sqrt{p_lp_k}$ (the general version of part a(i)), the firm supplies $x = \frac{\text{cap}}{2c}$ and earns $FS = \frac{\text{cap}^2}{4c}$. A lower $c$ raises both the quantity and $FS$. The result needs the cap to **still bind** after the fall: if costs fell so far that the equilibrium price dropped below the cap, the cap would stop mattering. The question says the cap is kept, so we assume it still binds.

*The right panel of the figure above shows the downward shift in $MC$ and the larger quantity.*

### 3d — How (b) and (c) differ (3 points)

> [!success] Answer (official)
> In (b), demand rose. With a maximum price the quantity is set by **supply**, which did not change, so only the **consumer** benefits. In (c), costs fell, which increases supply, so the **quantity** changes and **both** the firm and the consumer benefit.

> [!tip] Intuition
> Under a cap the short side of the market is demand-heavy: there is a shortage. In a shortage the side that is not rationed (the supply side) decides the quantity. Shocks on the demand side just make the shortage bigger. Shocks on the supply side are the ones that actually change what gets traded.

---

## Q4 — Public good provision (25 points)

Alice has utility $a\sqrt{g} + y$ and Bob has utility $b\sqrt{g} + y$, where $g = g_a + g_b$ is the total public good and $y$ is money. Both have the same income $I$ (large enough never to bind). One unit of $g$ costs $1$ dollar. See [[Public Goods]] and [[Lec_06-Public Goods & Altruism]].

### 4a — Provision when the other contributes nothing (5 points)

> [!success] Answer
> Alice buys $g = 4$ (with $a = 4$). Bob buys $g = 9$ (with $b = 6$).

A buyer stops where her marginal utility from the public good equals its price. For Alice, with Bob buying nothing:

$$
\frac{a}{2\sqrt g} = 1 \;\Rightarrow\; g = \frac{a^2}{4} = \frac{16}{4} = 4 .
$$

For Bob, with Alice buying nothing:

$$
\frac{b}{2\sqrt g} = 1 \;\Rightarrow\; g = \frac{b^2}{4} = \frac{36}{4} = 9 .
$$

### 4b — $a = b = 6$: optimum, equilibria and efficiency (7 points)

> [!success] Answer
> - **Social optimum:** $g = 36$.
> - **Nash equilibria:** all pairs $(g_a, g_b)$ with $g_a + g_b = 9$.
> - **Level of $g$:** $9$ in equilibrium, which is **less than** the optimum of $36$.
> - **Efficiency:** the equilibrium is inefficient (under-provision).

**Social optimum.** The planner equates the **sum** of marginal utilities to the cost:

$$
\frac{6}{2\sqrt g} + \frac{6}{2\sqrt g} = \frac{6}{\sqrt g} = 1 \;\Rightarrow\; \sqrt g = 6 \;\Rightarrow\; g = 36 .
$$

**Nash equilibria.** From part (a), each player alone wants a total of $\frac{36}{4} = 9$. If the other contributes $g_b$, Alice tops up to reach a total of $9$ (or contributes nothing if $g_b \ge 9$):

$$
BR_a(g_b) = \max\{0,\; 9 - g_b\}, \qquad BR_b(g_a) = \max\{0,\; 9 - g_a\}.
$$

At any pair with $g_a + g_b = 9$, $g_a = 9 - g_b = BR_a(g_b)$ and $g_b = 9 - g_a = BR_b(g_a)$, so each choice is a best response to the other. These are all Nash equilibria, and the total is $9$ in each.

**Why they differ.** Each player compares **her own** marginal utility with the cost and ignores the benefit her contribution gives the other player (a positive [[Externalities|externality]]). The planner counts both benefits. The equilibrium total of $9$ is a quarter of the efficient $36$.

> [!tip] Intuition (mine): the welfare loss in numbers
> Total surplus from a total of $g$ is $12\sqrt g - g$ ($6\sqrt g + 6\sqrt g$ for the two players, minus the cost of $g$). At $g = 36$ it is $72 - 36 = 36$. At $g = 9$ it is $36 - 9 = 27$. The market equilibrium leaves $9$ units of surplus on the table, which is why it is not [[Pareto Efficiency|Pareto efficient]]: a move to $g = 36$ with a suitable split of the cost can make both players better off.

### 4c — $a = 4$, $b = 6$: a unique equilibrium where only Bob contributes (5 points)

> [!success] Answer
> The only Nash equilibrium is $(g_a, g_b) = (0, 9)$.

By 4a, Alice alone wants a total of $4$ and Bob wants a total of $9$. The best responses are:

$$
BR_a(g_b) = \max\{0,\; 4 - g_b\}, \qquad BR_b(g_a) = \max\{0,\; 9 - g_a\}.
$$

**Showing uniqueness.**

- *Candidate $(0, 9)$.* Bob's best response to $g_a = 0$ is $9$. Alice's best response to $g_b = 9$ is $\max\{0, 4 - 9\} = 0$. Each is a best response, so $(0,9)$ is a Nash equilibrium.
- *No equilibrium with $g_a > 0$.* Alice contributes only if $g_b < 4$, and then $g_a = 4 - g_b$, so the total is $4$. But then Bob, who wants a total of $9$ and so contributes $g_b = 9 - g_a \ge 5$, cannot be playing $g_b < 4$. Contradiction.
- *Hence $g_a = 0$,* and Bob's best response is $g_b = 9$. This is the unique equilibrium.

![[PP05_q4_best_responses.png|680]]

*Left: with $a = b = 6$ the two best-response curves coincide along $g_a + g_b = 9$, giving a continuum of equilibria. Right: with $a = 4$, the curves cross only where Alice contributes nothing, at $(0, 9)$.*

> [!tip] Intuition
> Bob wants a total of $9$; Alice only wants a total of $4$. Once Bob has bought $9$, Alice's wish is already met, so she free rides. The one with the stronger taste for the good ($b > a$) provides it all.

### 4d — Verbal explanation of under-provision and free riding (8 points)

> [!todo] No official solution
> The official solution only says "See the discussion in class." No worked answer is given, so none is written here. The discussion it points to is in [[Lec_06-Public Goods & Altruism]], Part 3c (the Nash equilibria by case) and Part 3d ("Why the Market Under-Provides"), with the results [[Under-Provision]] and [[Free Riding]]. Parts 4b and 4c above are the numerical examples of those two results.

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| 1a | Tangency $\frac{1}{2\sqrt l} = \frac{p_l}{p_k}$, then split at the kink | $C = 3q^2$ for $q \le 2$; $12q - 12$ for $q > 2$ |
| 1b | One input, no choice | $C = 3q^2$ |
| 1c | Compare 1a and 1b | Two-input firm strictly cheaper for $q > 2$ |
| 1d | Same with $p_k = 24$ | $C = 3q^2$ for $q \le 4$; $24q - 48$ for $q > 4$; cheaper for $q > 4$; dearer capital delays the switch |
| 2a1 | $MRS_1 = MRS_2$ | $y_1 = x_1$ |
| 2a2 | Cobb-Douglas demands plus market clearing | $p_x = 2/3$; agent 1 gets $(54, 54)$, agent 2 gets $(46, 46)$ |
| 2b | Same bundle, same $MRS$, so no trade | Equilibrium at the endowment, $U_2 = A\cdot U_1$ |
| 2c | $MRS$ is independent of $A$ | Allocation unchanged when $A$ goes from $L$ to $H$ |
| 3a(i) | RTS = price ratio, so $l = k = x^2$ | $C = 2x^2$ |
| 3a(ii) | $180 - 2x = 4x$ | $x = 30$, $p = 120$, $CS = 900$, $FS = 1800$, $SW = 2700$ |
| 3a(iii) | Cap binds, quantity from $MC = 80$ | $x = 20$, $CS = 1600$, $FS = 800$, $SW = 2400$ |
| 3b | Quantity set by $MC = $ cap, which does not move with $A$ | $FS$ unchanged, $CS$ up |
| 3c | $MC$ falls, so quantity at the cap rises | $CS$ and $FS$ both up |
| 3d | Supply side decides quantity under a cap | (b) only consumers gain; (c) both gain |
| 4a | Own marginal utility = 1 | Alice $g = 4$; Bob $g = 9$ |
| 4b | Sum of marginal utilities = 1; best responses | Optimum $36$; Nash: $g_a + g_b = 9$; under-provision |
| 4c | Best responses $\max\{0, 4 - g_b\}$, $\max\{0, 9 - g_a\}$ | Unique Nash equilibrium $(0, 9)$ |
| 4d | Class discussion | No official solution |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[Lec_06-Public Goods & Altruism]]
- [[PS_03-Cost Minimisation & Properties of the Cost Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]
- [[PS_07-Core, Corner Endowments & Equilibrium vs the Social Planner]]
