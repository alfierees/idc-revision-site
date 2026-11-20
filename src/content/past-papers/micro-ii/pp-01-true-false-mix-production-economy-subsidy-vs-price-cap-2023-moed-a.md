---
title: "True-False Mix, Production Economy & Subsidy vs Price Cap (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "Micro 2 Final Exam, Moed A (20 February 2023)"
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
  - subsidy
  - price-ceiling
aliases:
  - Micro 2 Moed A 2023
  - Micro II Exam February 2023
  - PP01 Micro II
subject: micro-ii
in_scope: true
---

# True-False Mix, Production Economy & Subsidy vs Price Cap (2023 Moed A)

> Part of: [[Micro-Economics II]]
> **Micro 2 Final Exam, Moed A (20/02/2023)**, Micro-Economics II, Dr. Boaz Zik. 3 hours, cheat sheet and calculator allowed. Part 1: ten true/false statements (5 points each, 50 total). Part 2: two open questions (Q2 = 25 points, Q3 = 25 points).
> Builds on: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]
> Practice: [[PS_01-Profit Maximisation & Properties of the Profit Function]], [[PS_02-Isoquants, RTS & Properties of the Profit Function]], [[PS_03-Cost Minimisation & Properties of the Cost Function]], [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]], [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]], [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]

> [!info] Source
> Answers follow the **official solutions**. The true/false key is a 2-page PDF that repeats the statements with the correct word underlined (no explanations), so the **reasons below are written for revision**, not copied. The open-question solution is 6 pages. Where the official text has a typo or a gap, the answer is kept and a `> [!warning]` flags it.

## What this paper tests

| Part | Core idea | Where it is taught |
|---|---|---|
| Part 1 (1, 7, 8) | [[Exchange Economy]], [[Edgeworth Box]], [[Contract Curve]], [[Pareto Efficiency]], [[Pareto Dominance]] and social planners | [[PS_05-Pareto Efficiency, Dominance & Social Welfare]], [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]] |
| Part 1 (2, 3, 4, 5, 6) | Firm theory: [[Optimal Profit Function]], quasilinear technology, [[Cost Function]], [[Cost Minimisation]], [[Diminishing RTS]] | [[PS_01-Profit Maximisation & Properties of the Profit Function]], [[PS_02-Isoquants, RTS & Properties of the Profit Function]], [[PS_03-Cost Minimisation & Properties of the Cost Function]] |
| Part 1 (9, 10) | [[Production Economy]] efficiency and [[Externalities]] | [[Lec_05-Production Economy & Externalities]] |
| Q2 | [[Efficiency Locus]], [[PPF]], [[RPT]] equals [[MRS]], and comparative statics in $a$, $b$, $c$, $D$ | [[PS_08-Production Economy, Efficiency Locus & Input Allocation]] |
| Q3 | [[Partial Equilibrium]] with [[Quasilinear Utility]]: a **consumer subsidy** versus a [[Price Ceiling]], compared through [[Social Welfare]] | [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]] |

> [!tip] Intuition: the one move behind each part
> - True/false: for each statement ask "what is held fixed, and what does the statement quietly assume?". Most false statements fail on a hidden *"for any"* or *"at every level"*.
> - Q2: equalise the two firms' [[RTS]] to get the efficiency locus, plug into the outputs to get the PPF, then set [[RPT]] equal to the consumer's [[MRS]].
> - Q3: price equals marginal cost on the supply side, price equals marginal utility on the demand side. A subsidy shifts a curve; a price cap makes the **short side** of the market decide the quantity.

---

## Part 1 — True / False (50 points)

Verdicts in the table are the official underlined answers. The explanations follow.

| # | Topic | Official verdict |
|---|---|---|
| 1 | Endowment of $Y$ rises by one unit: old contract curve | **True** |
| 2 | Wage multiplied by $t$: profit multiplied by $t$ | **False** |
| 3 | Quasilinear production: $l$ never rises with output | **False** |
| 4 | $p > C'(0)$ and $C''>0$ give $C'(x^*)=p$ | **True** |
| 5 | Prices multiplied by 3: same input bundle for $x_0$ | **True** |
| 6 | Diminishing RTS: $(8,16)$ strictly above the isoquant of $(10,20)$ and $(5,10)$ | **False** (the key marks both words, see the warning) |
| 7 | The Edgeworth box allocation drawn in the exam | **False** |
| 8 | $a$ Pareto dominates $b$: every social planner prefers $a$ | **True** |
| 9 | On the PPF, $RTS_1=RTS_2$ for any bundles on the two isoquants | **False** |
| 10 | Lump-sum tax on firms fixes an externality | **False** |

### (1) Contract curve after the endowment of $Y$ rises — True

> [!success] Answer
> **True.** Almost every old contract-curve allocation stops being Pareto efficient.

Take $\alpha = \frac{a}{1-a}$ and $\beta = \frac{b}{1-b}$. On the contract curve $MRS_1 = MRS_2$:

$$
\alpha\,\frac{y_1}{x_1} = \beta\,\frac{Y - y_1}{X - x_1}
\quad\Longrightarrow\quad
y_1 = \frac{\beta\, Y\, x_1}{\alpha X + (\beta - \alpha)\,x_1}
$$

Replacing $Y$ by $Y+1$ raises $y_1$ for every $x_1 > 0$, so the whole curve shifts up. An old allocation therefore fails in one of two ways:

- If the extra unit of $Y$ is left unallocated, giving it to either agent is a [[Pareto Dominance]] improvement (more of a good the agent likes, nobody loses).
- If the extra unit goes to one agent, the two [[MRS]] values no longer match, so the agents can still trade to a Pareto improvement.

> [!warning] Edge case
> The statement says "any allocation". The endpoints of the curve (one agent holds nothing, the other everything, including the new unit) *remain* efficient. The exam intends the interior points, which is why the official answer is True.

### (2) Wage multiplied by $t$ — False

> [!success] Answer
> **False.** [[Homogeneity of Degree 1]] needs **both** prices scaled: $\Pi^*(tp, tw) = t\,\Pi^*(p,w)$. Scaling only the wage does not scale profit by $t$.

> [!example] Counterexample
> Take $f(l)=\sqrt{l}$. Then $l^* = \left(\frac{p}{2w}\right)^2$ and
> $$
> \Pi^*(p,w) = \frac{p^2}{4w}.
> $$
> With wage $tw$ the profit is $\frac{p^2}{4tw} = \frac{1}{t}\Pi^*(p,w)$, which is **divided** by $t$, not multiplied.

> [!tip] Intuition
> The statement mixes up homogeneity (everything scales) with a one-price change. A higher wage never raises profit (the profit function is decreasing in $w$ by the [[Envelope Theorem]]: $\partial \Pi^*/\partial w = -l^*$), so a multiple of $t>1$ cannot be right.

### (3) Quasilinear production $f(k,l) = g(l) + k$ — False

> [!success] Answer
> **False.** Not "at any level of production": at low output, more output does need more labour.

For cost minimisation the [[RTS]] is $MP_l / MP_k = g'(l)/1 = g'(l)$ and the tangency condition sets it equal to $\frac{p_l}{p_k}$. So there is one cost-efficient labour level $l^*$ with $g'(l^*) = p_l/p_k$, independent of output.

- **High output** (above $g(l^*)$): the firm holds $l=l^*$ and gets all extra output from capital $k$. Labour does not increase.
- **Low output** (below $g(l^*)$, assuming $g(0)=0$): using $l^*$ would already overshoot the target, so the optimum is the corner $k=0$ with $g(l)=x$ and $l=g^{-1}(x)$, which **does** rise with $x$.

> [!tip] Intuition
> The statement is true only above a threshold output. Because it says "at any level", one low-output counterexample makes it false.

### (4) $p > C'(0)$ and $C''>0$ — True

> [!success] Answer
> **True.** $C''>0$ means marginal cost is strictly rising, and $p > C'(0)$ means the first unit is profitable. Profit $\Pi(x) = px - C(x)$ is strictly concave with $\Pi'(0) = p - C'(0) > 0$, so the optimum is interior, where $\Pi'(x^*) = 0$, i.e. $C'(x^*) = p$.

> [!warning] Hidden assumption
> This needs marginal cost to climb above $p$ eventually (otherwise the firm never stops). With $C''>0$ and a normal cost function that is automatic; the official key does not discuss it.

### (5) Prices multiplied by 3, same output $x_0$ — True

> [!success] Answer
> **True.** For a fixed output $x_0$ the firm solves [[Cost Minimisation]], and the solution depends only on the **price ratio** and the technology.

Multiplying both input prices by 3 leaves $\frac{p_l}{p_k}$ unchanged, so the tangency $RTS = \frac{p_l}{p_k}$ and the isoquant constraint pick the same bundle. Only the *level* of cost triples. 

> [!warning] Wording
> The exam says "prices of both **outputs**" although there is a single product $X$; "both **inputs**" (capital and labour) is clearly meant. The verdict is True either way: with output held at $x_0$, the chosen input bundle does not depend on the output price at all.

### (6) Diminishing RTS and the bundle $(8,16)$ — False (with a caveat)

> [!success] Answer
> Official key: the line shows both **True** and **False** underlined, with **False** in bold. The consistent answer is **False**.

Note $(8,16) = 0.6\cdot(10,20) + 0.4\cdot(5,10)$, a convex combination of the two bundles.

- If isoquants are only **weakly** convex ([[Convex Isoquant]]), the midpoint lies on the same or a higher isoquant: "weakly higher", not "strictly".
- But $(10,20)$ and $(5,10)$ are on the same ray, and a **straight line** through them lying in one isoquant means the RTS is constant on that stretch, so the isoquant is linear there and $(8,16)$ is on the **same** isoquant, not a strictly higher one.

> [!warning] Ambiguous key
> The official key underlines both words for (6). Taking "diminishing RTS" as *strictly* diminishing would make the premise impossible (two collinear points cannot both lie on a strictly convex isoquant), so the statement could not be shown true. **False** is the defensible answer; flagging that the key is ambiguous.

> [!tip] Intuition
> The "strictly higher" claim is the Cobb-Douglas case from [[PS_02-Isoquants, RTS & Properties of the Profit Function]] only when the two bundles are *different directions*. Here the examiner picked proportional bundles on purpose: it is the perfect-substitutes (flat isoquant) knife edge.

### (7) The Edgeworth box allocation drawn in the exam — False

> [!success] Answer
> **False.** The allocation is not Pareto efficient.

In the picture, agent 1's bundle $(x_1^a, y_1^a)$ is measured from the bottom-left corner and agent 2's bundle $(x_2^a, y_2^a)$ is measured from the top-right corner, and the **two dots are different points**. Agent 2's dot is above and to the right of agent 1's dot, so

$$
x_1^a + x_2^a < X, \qquad y_1^a + y_2^a < Y .
$$

Some of both goods is **left over**. Giving the leftovers to either agent makes that agent strictly better off and the other no worse off (with monotone preferences, see [[Local Nonsatiation]]), so the allocation is Pareto dominated by a feasible one.

> [!tip] Intuition
> A point in an Edgeworth box has to be a single point, because an allocation must hand out all the goods. Two dots mean wasted resources, and wasteful allocations are never Pareto efficient.

### (8) Pareto dominance and social planners — True

> [!success] Answer
> **True.** If $a$ [[Pareto Dominance|Pareto dominates]] $b$, nobody is worse off and somebody is strictly better off. A social planner with welfare function $W(U_1, U_2)$ **increasing** in each agent's utility therefore ranks $a$ above $b$.

> [!tip] Intuition
> "Any social planner" means any planner who cares about every agent's utility in the standard way (strictly increasing $W$, e.g. the Cobb-Douglas planner of the course). A planner such as $\min(U_1,U_2)$ is only *weakly* increasing and could be indifferent, but that is not what the exam has in mind. See [[PS_05-Pareto Efficiency, Dominance & Social Welfare]].

### (9) RTS equal on the PPF — False

> [!success] Answer
> **False.** On the PPF the **efficient** input split has $RTS_1 = RTS_2$ (that is the [[Efficiency Locus]]). The statement says this holds for **any** bundles on the isoquants $f_1 = x_0$ and $f_2 = y_0$.

Those isoquants contain many bundles, most of which **do not** use the economy's resources efficiently (for example, bundles that do not add up to the total labour and capital, or that sit away from the tangency). Only the particular pair of bundles that uses all resources and is tangent satisfies $RTS_1 = RTS_2$.

> [!tip] Intuition
> "Any" is the word to circle. The condition describes the *best* input split for producing the point on the PPF, not every input pair that gives the same outputs.

### (10) Lump-sum tax and an externality — False

> [!success] Answer
> **False.** A lump-sum tax does not depend on what the firm produces, so it does not change the firm's marginal cost or its choice. The inefficiency comes from a wedge at the margin between private and social cost.

The fix is a **per-unit** [[Pigouvian Tax]] equal to the marginal external damage, which moves the firm's marginal cost up to the social marginal cost.

> [!tip] Intuition
> Lump-sum taxes are the *good* tool for redistribution because they leave margins alone ([[Second Welfare Theorem]]). For the same reason they are useless for correcting a distorted margin.

---

## Q2 — Production economy (25 points)

Firms: $f_1(l_1,k_1) = l_1^{a} k_1^{1-a}$ and $f_2(l_2,k_2) = b\cdot\big(l_2^{a} k_2^{1-a}\big)$. Representative consumer: $U(x,y) = x^{c} y^{1-c}$. Resources: $k_1 + k_2 = l_1 + l_2 = D$. Parameters: $a=\tfrac12$, $b=1$, $c=\tfrac12$, $D=50$.

### 2a — Efficiency locus (6 points)

> [!success] Answer
> $$
> k_1 = l_1
> $$
> (equivalently $k_2 = l_2$): both firms use the same capital-labour ratio.

**Working.** Marginal products of firm 1:

$$
MP_{l_1} = a\,l_1^{a-1}k_1^{1-a}, \qquad MP_{k_1} = (1-a)\,l_1^{a}k_1^{-a}
$$

so

$$
RTS_1 = \frac{MP_{l_1}}{MP_{k_1}} = \frac{a\,k_1}{(1-a)\,l_1}
$$

Firm 2 has the same shape with an extra factor $b$ in **both** marginal products, which cancels:

$$
RTS_2 = \frac{b\,a\,l_2^{a-1}k_2^{1-a}}{b\,(1-a)\,l_2^{a}k_2^{-a}} = \frac{a\,k_2}{(1-a)\,l_2}
$$

Efficiency needs $RTS_1 = RTS_2$:

$$
\frac{k_1}{l_1} = \frac{k_2}{l_2}
$$

Substitute $k_2 = D - k_1$ and $l_2 = D - l_1$, cross-multiply, and the $k_1 l_1$ terms cancel:

$$
k_1(D - l_1) = l_1(D - k_1) \;\Longrightarrow\; \boxed{k_1 = l_1}
$$

> [!warning] Typos in the official text
> The key writes $f_1$ for firm 2's function and, in the $RTS_2$ line, uses $b$ as an exponent ($l_2^{b-1}k_2^{1-b}$) where the exponent should be $a$. The final result is unaffected.

> [!tip] Intuition
> Both firms use the same Cobb-Douglas shape, so their RTS depends only on their own input ratio. The factor $b$ is just a productivity multiplier and does not change the **shape** of the isoquants, so it drops out of the locus. In the Edgeworth box for inputs the locus is the 45 degree diagonal.

### 2b — Production possibility frontier (6 points)

> [!success] Answer
> $$
> y = 50 - x
> $$

**Working.** On the locus $k_1 = l_1$ the firm-1 output is $x = l_1^{a}l_1^{1-a} = l_1$. Firm 2 gets $l_2 = k_2 = 50 - l_1$, and with $b=1$:

$$
y = (50-l_1)^{a}(50-l_1)^{1-a} = 50 - l_1 = 50 - x
$$

So the PPF is a straight line, and $RPT = 1$ everywhere (constant returns and identical technology, since $b = 1$).

### 2c — Optimal allocation (5 points)

> [!success] Answer
> $x^* = y^* = 25$ and $l_1^* = k_1^* = l_2^* = k_2^* = 25$.

**Working.** The optimum has $RPT = MRS$. The consumer's marginal rate of substitution is

$$
MRS = \frac{c\,y}{(1-c)\,x} = \frac{y}{x} \quad\text{when } c = \tfrac12
$$

$$
RPT = 1 = \frac{y}{x} = MRS \;\Longrightarrow\; y = x
$$

and on the PPF $x = 50 - x$, so $x = y = 25$. The input split follows from $x = l_1 = k_1 = 25$ and the remaining $25$ of each input goes to firm 2.

![[PP01_q2_efficiency_locus_ppf_optimum.png|640]]

*Left: the efficiency locus is the diagonal of the input box, and the optimum sits in the middle at $(25,25)$. Right: the straight-line PPF is tangent to the indifference curve $xy = 625$ (utility $25$) at $(25,25)$, where $RPT = MRS = 1$.*

### 2d — A higher $a$ (2 points)

> [!success] Answer
> **Nothing changes**: the quantities and the ratio $y/x$ stay the same.

The efficiency locus $k_1/l_1 = k_2/l_2$ does not contain $a$ at all, and with $b=1$ the outputs on the locus are still $x = l_1$ and $y = 50 - l_1$. So the PPF, the optimum, and $y/x = 1$ are unchanged.

> [!tip] Intuition
> $a$ changes how much firms rely on labour versus capital, but both firms share it, and the total supply of the two inputs is the same ($D$ each). On the diagonal the two inputs are used in equal amounts, so the labour share parameter never matters.

### 2e — A higher $b$ (2 points)

> [!success] Answer
> The ratio $y/x$ **rises**.

Now $y = b(50 - x)$: the PPF has a steeper slope ($RPT = b$) and a higher $y$-intercept ($50b$). The optimum needs $MRS = y/x = b$, so with $c=\tfrac12$ the ratio $y/x$ equals $b$ and is higher.

> [!tip] Intuition
> Checking the numbers myself: $y = bx$ and $y = b(50-x)$ give $x = 25$ and $y = 25b$. So with $c=\tfrac12$, the quantity of $X$ stays at 25 and the quantity of $Y$ grows with $b$, which is why the ratio grows. This is my own check, the official solution states only the direction of the ratio.

### 2f — A higher $c$ (2 points)

> [!success] Answer
> The ratio $y/x$ **falls**: the consumer spends a larger share on $X$ and a smaller share on $Y$.

> [!tip] Intuition
> The condition $RPT = MRS$ with $RPT = 1$ gives $\frac{c\,y}{(1-c)\,x} = 1$, so $\frac{y}{x} = \frac{1-c}{c}$, which falls in $c$. On the PPF $y = 50-x$ this gives $x = 50c$ and $y = 50(1-c)$: more $X$, less $Y$. Again my own check of the official direction.

### 2g — A higher $D$ (2 points)

> [!success] Answer
> The ratio is **unchanged**; quantities of both goods **rise**.

The efficiency locus and the RPT do not depend on $D$, so the ratio is the same. The PPF shifts outwards (income rises) and both quantities rise in the same proportion.

> [!tip] Intuition
> With constant returns, doubling the resources doubles output of everything along the ray with the same ratio. Using the same working, $x = y = D/2$.

---

## Q3 — Partial equilibrium, subsidy and price cap (25 points)

Quasilinear consumer $U = 100x - x^2 + y$ ($y$ is money, no corner solutions). Firm $f(k,l) = l^{1/4}k^{1/4}$ with $p_k = p_l = \tfrac12$.

> [!warning] Numbering
> The exam labels the last part **(e)**, there is no (d); the official solution calls it **(d)**. They are the same question (subsidy versus price cap).

### 3a — Cost function (8 points)

> [!success] Answer
> $$
> C(x) = x^2
> $$

**Working.** [[Cost Minimisation]]: set the [[RTS]] equal to the input price ratio:

$$
RTS = \frac{k}{l} = \frac{p_l}{p_k} = 1 \;\Longrightarrow\; k = l
$$

Plug into the isoquant for output $x$:

$$
x = l^{1/4}k^{1/4} = k^{1/4}k^{1/4} = k^{1/2} \;\Longrightarrow\; k(x) = l(x) = x^2
$$

$$
C(x) = p_l\, l(x) + p_k\, k(x) = \tfrac12 x^2 + \tfrac12 x^2 = x^2
$$

Supply is marginal cost: $P^S(x) = C'(x) = 2x$.

### 3b — Equilibrium price and quantity (7 points)

> [!success] Answer
> $x^e = 25$ and $P^e = 50$.

For a [[Quasilinear Utility]] consumer, demand is marginal utility of $x$ (the marginal utility of money is 1):

$$
P^D(x) = 100 - 2x
$$

$$
100 - 2x = 2x \;\Longrightarrow\; x^e = 25,\quad P^e = 50
$$

### 3c — Consumer subsidy of 20 (5 points)

> [!success] Answer
> - $\Delta CS = 275$ and $\Delta$ firm surplus $= 275$.
> - Government pays $20 \times 30 = 600$.
> - Added welfare is $550 < 600$, so the gain **does not cover the cost** (net loss of $50$).

**Before the subsidy** ([[Consumer Surplus]] and [[Firm Surplus]]):

$$
CS = \int_0^{25} (100 - 2x - 50)\,dx = \Big[50x - x^2\Big]_0^{25} = 1250 - 625 = 625
$$

$$
FS = \int_0^{25} (50 - 2x)\,dx = \Big[50x - x^2\Big]_0^{25} = 625
$$

**After the subsidy.** The official solution adds the subsidy to the demand curve, $P^D(x) = 120 - 2x$ (the price the producer effectively receives is the consumer's willingness to pay plus 20):

$$
120 - 2x = 2x \;\Longrightarrow\; x^e = 30,\quad P^e = 60
$$

$$
CS = \int_0^{30} (120 - 2x - 60)\,dx = \Big[60x - x^2\Big]_0^{30} = 1800 - 900 = 900
$$

$$
FS = \int_0^{30} (60 - 2x)\,dx = 900
$$

$$
\Delta CS = 900 - 625 = 275,\qquad \Delta FS = 900 - 625 = 275
$$

$$
\text{Subsidy cost} = 20 \times 30 = 600,\qquad \text{added welfare} = 275 + 275 = 550 < 600
$$

> [!tip] Intuition
> Here "60" is the price the **firm receives**; the consumer pays $60 - 20 = 40$ (the point on the original demand curve at $x=30$). The consumer surplus calculated with $120 - 2x$ against the price 60 equals the surplus on the original demand against the price 40, so the same 900. The net loss of $50$ is the standard deadweight triangle: $\tfrac12 \times 20 \times (30-25) = 50$, because the subsidy pushes $x$ past the efficient quantity where value (marginal utility $40$ at $x=30$) falls below marginal cost ($60$).

![[PP01_q3_subsidy_surplus.png|700]]

*Left: surpluses at the competitive equilibrium. Right: with the subsidy, producers receive 60 and consumers pay 40 at $x = 30$; each surplus rises from 625 to 900.*

### 3d — Which policy gives higher welfare? (5 points)

> [!success] Answer
> The **subsidy** gives higher welfare: $1{,}200 > 450$ (price cap at 10).

**Price cap at 10.** At price $10$ supply is $2x = 10$, so only $x = 5$ is produced, and demand exceeds supply (excess demand). Quantity is the **short side**, supply. Welfare is total value minus cost on the units traded:

$$
\int_0^{5} \big(100 - 2x - 2x\big)\,dx = \Big[100x - 2x^2\Big]_0^{5} = 500 - 50 = 450
$$

**Subsidy.** Welfare is the surplus gain less the cost of the subsidy: $1800 - 600 = 1200$.

$$
450 < 1{,}200
$$

![[PP01_q3_price_cap.png|520]]

*Under the cap at 10 only 5 units are traded; the shaded green area is the $450$ of welfare kept, and the large red triangle is the surplus lost compared with the efficient quantity.*

> [!tip] Intuition
> The price cap is far below the equilibrium price of 50, so it chokes supply down to 5 units (against an efficient 25). The subsidy overshoots to 30, but the overshoot costs only a small triangle of 50 compared with the efficient welfare of 1,250. 

> [!warning] Assumption in the official welfare of 450
> The figure $450 = \int (v' - C')$ treats the 5 units as going to the consumers who value them most (efficient rationing). With random queuing the welfare would be even lower, so the ranking does not change.

---

## Recap table

| Part | Tool | One-line answer |
|---|---|---|
| 1 | Contract curve shifts when $Y$ changes | True |
| 2 | Homogeneity needs both prices scaled | False, profit is divided by $t$ in the example |
| 3 | Quasilinear: $g'(l^*) = p_l/p_k$ | False, at low output labour rises |
| 4 | Strictly convex cost, $p > C'(0)$ | True, interior optimum $C'(x^*) = p$ |
| 5 | Cost minimisation uses only price ratio | True |
| 6 | Collinear bundles on one isoquant | False (key marks both words) |
| 7 | Two different dots, resources wasted | False |
| 8 | Planner with increasing $W$ | True |
| 9 | RTS equal only at the efficient input split | False |
| 10 | Lump-sum tax does not change margins | False |
| 2a | $RTS_1 = RTS_2$ | $k_1 = l_1$ |
| 2b | Outputs on the locus | $y = 50 - x$ |
| 2c | $RPT = MRS$ | $x^* = y^* = 25$ |
| 2d | $a$ not in the locus | No change |
| 2e | RPT $= b$ | $y/x$ rises |
| 2f | $y/x = (1-c)/c$ | $y/x$ falls |
| 2g | Scale economy | Ratio same, quantities up |
| 3a | RTS = price ratio | $C = x^2$ |
| 3b | $P^D = P^S$ | $x = 25$, $P = 50$ |
| 3c | Shift demand up by 20 | $x = 30$, $\Delta CS = \Delta FS = 275$, cost 600, net $-50$ |
| 3d | Welfare under a cap | $450 < 1{,}200$, subsidy better |

## Related notes

- [[Micro-Economics II]] (hub)
- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]
- [[Lec_05-Production Economy & Externalities]]
- [[PS_01-Profit Maximisation & Properties of the Profit Function]]
- [[PS_02-Isoquants, RTS & Properties of the Profit Function]]
- [[PS_03-Cost Minimisation & Properties of the Cost Function]]
- [[PS_04-Partial Equilibrium, Welfare & Price Ceilings]]
- [[PS_05-Pareto Efficiency, Dominance & Social Welfare]]
- [[PS_06-Exchange Equilibrium, Walrasian Prices & the Social Planner]]
- [[PS_08-Production Economy, Efficiency Locus & Input Allocation]]
