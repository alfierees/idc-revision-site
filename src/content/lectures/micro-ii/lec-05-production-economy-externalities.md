---
title: "General Equilibrium Production Economy & Externalities"
week: 5
semester: 1
year: 2
academic_year: "2025-26"
course: Micro-Economics II
lecture: "Presentation 5 — Production Economy, Second Welfare Theorem & Externalities"
instructor: Dr. Boaz Zik
date: 2026-05-27
tags:
  - micro-economics-ii
  - general-equilibrium
  - production-economy
  - edgeworth-box-production
  - efficiency-locus
  - PPF
  - RPT
  - second-welfare-theorem
  - externalities
  - pigouvian-tax
  - coase-theorem
  - market-failure
aliases:
  - Micro II Presentation 5
  - Production Economy Micro II
  - Externalities Micro II
subject: micro-ii
in_scope: true
---

# General Equilibrium Production Economy & Externalities

> Part of: [[Micro-Economics II]] | Key concepts: [[Production Economy]], [[Efficiency Locus]], [[PPF]], [[RPT]], [[Second Welfare Theorem]], [[Externalities]], [[Pigouvian Tax]], [[Coase Theorem]], [[Market Failure]]

---

## 🗺️ What This Presentation Is About

This note picks up from [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], which established the **First Welfare Theorem** in an exchange economy. Here we:

1. **Complete the welfare theorems** — the Second Welfare Theorem and why lump-sum taxes dominate distortionary taxes.
2. **Extend general equilibrium to production** — two firms produce two goods using two inputs. We find what "efficiency" means, how the Production Possibility Frontier is derived, and why competitive markets attain the efficient outcome (MRS = RPT).
3. **Analyse externalities** — one of the main reasons markets *fail* to be efficient. We cover consumption externalities, production externalities, the Pigouvian tax, and the Coase theorem.

---

## 📐 Part 1 — Completing the Welfare Theorems

### Recap of the First Welfare Theorem

In a competitive exchange economy, the equilibrium allocation is ==Pareto efficient==. This is remarkable: no government coordination is required — free agents pursuing their own interests, guided only by prices, achieve a socially efficient outcome.

### The Second Welfare Theorem

> [!info] Second Welfare Theorem
> In a competitive free market, **any** Pareto efficient allocation can be achieved as a competitive equilibrium, provided the right initial endowments are chosen. ^second-welfare-theorem

**What this tells us about redistribution:** If society wants a particular "fair" allocation — not just any efficient one — it can achieve it by *redistributing endowments* and then letting markets work. This is better, in principle, than direct intervention in prices (subsidies, price controls), because:

- Distortionary taxes/price controls alter agents' incentive margins, potentially pushing the economy off the Pareto frontier.
- A ==lump-sum tax== (a tax independent of the agent's choices) does *not* distort margins — the agent still faces the same relative prices and will trade to an efficient outcome.

> [!warning] The practical caveat
> The Second Welfare Theorem is partly hypothetical. To implement the "right" endowment, the government would need complete information about preferences and production functions — computationally impossible. In practice, taxes always create *some* distortion, so there is an unavoidable **equity–efficiency tradeoff**: redistributing income for fairness costs efficiency.

---

## 🏭 Part 2 — General Equilibrium: Production Economy

### Setting Up the Economy

We now consider an economy with **production**:

- Two goods: $X$ and $Y$.
- Two inputs: labour $L$ and capital $K$ (fixed quantities $\bar{L}$ and $\bar{K}$).
- Two firms: Firm 1 produces $X$ with $f_1(k_1, l_1)$; Firm 2 produces $Y$ with $f_2(k_2, l_2)$.
- A ==representative consumer== with utility $U(x, y)$ who owns all inputs and firm profits.

The feasibility constraint is $k_1 + k_2 = \bar{K}$ and $l_1 + l_2 = \bar{L}$.

---

### The Edgeworth Box for Production

Just as in the exchange economy we used an Edgeworth box for consumption bundles, we use one here for **input allocation**:

- Horizontal axis = total labour $\bar{L}$.
- Vertical axis = total capital $\bar{K}$.
- Origin $O_1$ (bottom-left): Firm 1's input allocation.
- Origin $O_2$ (top-right, flipped): Firm 2's input allocation.
- Each point in the box is a feasible $(k_1, l_1, k_2, l_2)$ allocation.

**Firm 1's isoquants** run from $O_1$ in the standard orientation. **Firm 2's isoquants** are flipped around $O_2$ and overlaid on the box.

> [!info] Efficiency in Production
> An input allocation is ==Pareto efficient== if there is no reallocation that strictly increases one firm's output without reducing the other's. Graphically, this occurs precisely where the two firms' isoquants are **tangent**. ^production-pareto-efficiency

At a tangency, the firms have the same ==Rate of Technical Substitution==:
$$\boxed{RTS_1(l_1, k_1) = RTS_2(l_2, k_2)}$$ ^efficiency-locus-condition

The ==**efficiency locus**== (also called the *Pareto set*) is the set of all Pareto efficient input allocations — all points where the isoquants are tangent.

---

### From Efficiency Locus to the PPF

Each point on the efficiency locus corresponds to a specific $(x, y)$ pair (the outputs of the two firms). Tracing out all these pairs gives the ==**Production Possibility Frontier (PPF)**==.

> [!info] Production Possibility Frontier (PPF)
> The PPF shows all combinations of $(x, y)$ that can be produced when the economy uses its inputs *efficiently*. Points inside the frontier are feasible but inefficient; points outside are infeasible. ^ppf-definition

**Shape:** We assume the PPF is concave (bowed out), because of **diminishing marginal productivity** — transferring inputs from $Y$ to $X$ yields diminishing returns as $X$ grows.

---

### Rate of Product Transformation (RPT)

> [!info] Rate of Product Transformation (RPT)
> The ==RPT== at a point $(x, y)$ on the PPF is the number of units of $Y$ that must be sacrificed to produce one more unit of $X$ while remaining on the frontier:
> $$RPT(x, y) = -\frac{dy}{dx}\bigg|_{\text{PPF}}$$
> We assume RPT is **increasing** in $x$ (the PPF gets steeper as more $X$ is produced). ^rpt-definition

> [!tip] Why RPT increases
> As the economy shifts production toward $X$, the inputs employed in $X$ have lower marginal products (diminishing returns), while the inputs released from $Y$ are the *least* productive ones first. The opportunity cost of an extra unit of $X$ therefore rises — RPT increases.

---

### Optimal Production: MRS = RPT

The ==representative consumer== maximises $U(x, y)$ subject to the feasibility constraint that $(x, y)$ lies on (or below) the PPF. Since $U$ is increasing, the optimum is on the PPF, and:

> [!info] Efficiency condition for a production economy
> The socially optimal allocation $(x^*, y^*)$ is the point on the PPF where:
> $$\boxed{MRS(x^*, y^*) = RPT(x^*, y^*)}$$ ^mrs-equals-rpt
>
> The **MRS** (consumer side) equals the **RPT** (production side).

**Intuition:** MRS tells us how much $Y$ the consumer is *willing* to give up for one more unit of $X$ (without losing utility). RPT tells us how much $Y$ must be *sacrificed* in production to get one more $X$. When MRS > RPT, shifting production toward $X$ makes the consumer better off (they value the extra $X$ more than it costs). When MRS < RPT, shift back. At MRS = RPT, no reallocation can improve welfare.

| Scenario | Implication | Direction to move |
|---|---|---|
| $MRS > RPT$ | Consumer values $X$ more than it costs to produce | Increase $X$ |
| $MRS < RPT$ | Producing $X$ costs more than consumer values it | Decrease $X$ |
| $MRS = RPT$ | **Optimal — cannot improve welfare** | Stay here |

---

### Equilibrium in a Production Economy

In a competitive equilibrium:

1. **Firms minimise costs** → each firm's RTS equals the input price ratio $p_l/p_k$. Since both firms face the same input prices, **both have the same RTS** → they operate on the efficiency locus → production is on the PPF. ✓

2. **Key result — RPT equals cost ratio:** Along the PPF, total cost $C = p_l \bar{L} + p_k \bar{K}$ is fixed. At any point $(x, y)$, this means $C(x) + C(y) = \text{const}$. Differentiating, the slope of the iso-cost locus is:
$$RPT(x,y) = \frac{C'(x)}{C'(y)}$$

3. **Firms price at marginal cost** (perfect competition) → $p_x^* = C'(x^*)$ and $p_y^* = C'(y^*)$. Therefore:
$$\boxed{RPT(x^*, y^*) = \frac{p_x^*}{p_y^*}}$$

4. **Consumer maximises utility** → sets $MRS(x^*, y^*) = p_x^*/p_y^*$.

Combining: $MRS = p_x^*/p_y^* = RPT$ — the competitive equilibrium achieves the **socially optimal** outcome. This is the **Third Welfare Theorem** result for a production economy (an extension of Theorem 1).

> [!tip] How equilibrium prices are found in practice
> To find the full equilibrium:
> 1. Derive the efficiency locus (set $RTS_1 = RTS_2$ using resource constraints).
> 2. Derive the PPF.
> 3. Find $(x^*, y^*)$ by solving $MRS = RPT$.
> 4. Normalise one output price (e.g., $p_y = 1$), set $p_x = MRS(x^*, y^*)$.
> 5. Use the cost function and $p_x^* = C'(x^*)$ to find input prices.
> 6. Verify the budget constraint holds: $p_x x^* + p_y y^* = p_l \bar{L} + p_k \bar{K} + \pi_1^* + \pi_2^*$.

---

### Worked Examples

#### Example 1 — Linear PPF

**Economy:**
$$f_1(k_1,l_1) = l_1^{1/4} k_1^{3/4}, \quad f_2(k_2,l_2) = 2 l_2^{1/4} k_2^{3/4}$$
$$\bar{K} = \bar{L} = 50, \quad U(x,y) = x^{1/2} y^{1/2}$$

> [!example] Step-by-step solution
> **Efficiency locus:** $RTS_1 = k_1/(3l_1)$, $RTS_2 = k_2/(3l_2)$. Setting equal with $k_2 = 50-k_1$, $l_2=50-l_1$ gives $k_1 = l_1$.
>
> **PPF:** Substituting $k_1=l_1$ into $f_1$: $x = l_1$. For $Y$: $y = 100 - 2l_1 = 100 - 2x$.
> So the PPF is $2x + y = 100$ — a **straight line**, with $RPT = 2$.
>
> **Optimal point:** $MRS = y/x$. Set $y/x = 2$ so $y = 2x$. Substituting into PPF: $4x = 100 \Rightarrow x^* = 25, y^* = 50$.

#### Example 2 — Quadratic PPF

**Economy:**
$$f_1(k_1,l_1) = l_1 k_1, \quad f_2(k_2,l_2) = l_2 k_2$$
$$\bar{K} = \bar{L} = 50, \quad U(x,y) = x^{1/4} y^{3/4}$$

> [!example] Step-by-step solution
> **Efficiency locus:** $RTS_1 = k_1/l_1 = k_2/l_2 = RTS_2 \Rightarrow k_1 = l_1$.
>
> **PPF:** $x = l_1^2$, so $l_1 = \sqrt{x}$. Then $y = (50 - l_1)^2 = (50-\sqrt{x})^2$.
> PPF: $y + 100\sqrt{x} - x = 2500$.
>
> **RPT:** $RPT = 50x^{-1/2} - 1$.
>
> **Optimal point:** $MRS = y/(3x)$. Setting $MRS = RPT$: $y = 150\sqrt{x} - 3x$.
> Substituting into PPF and solving: $x^* = 625/4$, $y^* = 5625/4$.

#### Example 3 — Symmetric PPF

**Economy:**
$$f_1(k_1,l_1) = \tfrac{1}{2}(\sqrt{l_1}+\sqrt{k_1}), \quad f_2(k_2,l_2) = \tfrac{1}{2}(\sqrt{l_2}+\sqrt{k_2})$$
$$\bar{K} = \bar{L} = 50, \quad U(x,y) = x^{1/2} y^{1/2}$$

> [!example] Step-by-step solution
> **Efficiency locus:** $RTS_1 = \sqrt{k_1}/\sqrt{l_1} = \sqrt{k_2}/\sqrt{l_2} \Rightarrow k_1 = l_1$.
>
> **PPF:** $x = \sqrt{l_1}$, $y = \sqrt{50 - l_1} = \sqrt{50 - x^2}$.
> PPF: $x^2 + y^2 = 50$.
>
> **RPT:** $RPT = x/\sqrt{50-x^2}$.
>
> **Optimal point:** $MRS = y/x$. Set $y/x = x/\sqrt{50-x^2} \Rightarrow y = x^2/\sqrt{50-x^2}$.
> Substituting into PPF: $x^2 = 50 - x^2 \Rightarrow x^* = y^* = 5$.

---

## ⚡ Part 3 — Externalities and Market Failure

### Why Markets Can Fail

The First Welfare Theorem assumed:
- **Competitive markets** (price-taking firms and consumers)
- **Perfect information** (no hidden quality)
- **No externalities** (agents' decisions affect only themselves)

A violation of any of these creates a ==market failure== — the competitive equilibrium is no longer Pareto efficient. This section analyses externalities.

> [!info] Externality (definition)
> An ==externality== exists when the choices of one agent directly enter the utility function of a consumer or the cost function of a firm — **without being reflected in market prices**.
>
> Note: If A's purchases raise the *price* of a good and this hurts B, that is **not** an externality — it is transmitted via the price mechanism. An externality bypasses the price mechanism entirely. ^externality-definition

**Examples:** Second-hand smoke (negative), vaccination (positive), R&D spillovers (positive), river pollution (negative).

---

### Externalities in Consumption

#### Why the Market Equilibrium Fails

Consider Homer and Barney, each consuming cigars $c$ and whiskey $w$:
$$U^H(c_H, w_H, c_B) = v(c_H, w_H) - \phi(c_B), \quad U^B(c_B, w_B, c_H) = v(c_B, w_B) - \phi(c_H)$$

**Key observation:** Each agent's MRS (between their own cigars and whiskey) is independent of the *other's* consumption. So each agent's demand function is the same as if there were no externality — the equilibrium allocation is computed as if $\phi$ doesn't exist.

But if $\partial v/\partial c_i < \partial \phi / \partial c_i$ at the equilibrium (marginal private benefit of smoking < marginal harm imposed on the other), then **both agents would be better off smoking less**. The equilibrium is not Pareto efficient.

> [!example] Worked Example
> $U^H = c_H^{1/2} w_H^{1/2} - \frac{2}{3} c_B$, $U^B = c_B^{1/2} w_B^{1/2} - \frac{2}{3} c_H$. Endowments $(10,10)$ each.
>
> **Equilibrium:** Each agent's demand (ignoring the external term) gives $c^* = 5 + 5/p_c$. Market clearing: $c_H + c_B = 20 \Rightarrow p_c^* = 1 \Rightarrow c_H^* = c_B^* = 10$, $w_H^* = w_B^* = 10$.
>
> Each agent's utility = $10^{1/2} \cdot 10^{1/2} - \frac{2}{3} \cdot 10 = 10 - 6.67 = 3.33$.
>
> **Compare** the allocation $c_H = c_B = 9$, $w_H = w_B = 10$:
> Utility = $9^{1/2} \cdot 10^{1/2} - \frac{2}{3} \cdot 9 = 9.49 - 6 = 3.49 > 3.33$.
>
> Both agents are better off at $(9,10)$ than at the equilibrium $(10,10)$. The market overproduces cigars.

#### The Coase Theorem — Tradeable Externalities

Why does the market fail? Because the harm from smoking is ==non-tradeable== — Homer cannot pay Barney to smoke less through a market transaction.

**The fix:** Make the externality tradeable. Suppose we create a market for *"smoking rights"*. Barney is assigned a maximum quota $\bar{C}$ of cigars; Homer can *buy* reductions from Barney. Now:

- Barney's utility over $(w_B, c_B)$ is unchanged.
- Homer's utility is $U^H(w_H, \bar{C} - c_B)$, where $(\bar{C} - c_B)$ is the amount Barney *doesn't* smoke — which Homer buys.

This is structurally **identical to the exchange economy** — two agents trading two goods. By the First Welfare Theorem, the competitive equilibrium is Pareto efficient.

> [!info] Coase Theorem (informal)
> If property rights over externalities are clearly defined and transaction costs are zero, then market participants can negotiate to an efficient outcome, regardless of the initial assignment of rights. ^coase-theorem

> [!warning] Coase Theorem limitations
> The Coase theorem requires: (1) well-defined property rights, (2) low transaction costs, and (3) no wealth effects. In practice, many externalities involve millions of parties (e.g., global pollution), making negotiation infeasible.

---

### Externalities in Production

#### Setup — Steel Mill and Fishery

- **Firm S** (steel) produces output $s$ and pollution $x$, with cost $C_S(s, x)$.
- **Firm F** (fishery) produces fish $f$, but is harmed by pollution: cost $C_F(f, x)$ with $\partial C_F / \partial x > 0$.

Key properties of $C_S$:
- $\partial C_S/\partial s > 0$ (producing more steel costs more).
- $C_S$ is convex in $x$: it decreases in pollution up to a level $\bar{x}(s)$, then increases. So firm S *benefits* from some pollution (it reduces abatement costs) up to the point $\partial C_S/\partial x = 0$.

#### The Competitive Equilibrium Produces Too Much Pollution

**Firm S's problem** (ignoring F):
$$\max_{s,x} \; p_s \cdot s - C_S(s, x)$$
FOCs: $p_s = \partial C_S/\partial s$ and $\partial C_S/\partial x = 0$.

**Firm F's problem** (treating $x$ as given):
$$\max_f \; p_F \cdot f - C_F(f, x)$$
FOC: $p_F = \partial C_F/\partial f$.

**Social optimum** (maximise combined profits):
$$\max_{f,s,x} \; p_s s - C_S(s,x) + p_F f - C_F(f,x)$$
FOCs:
$$p_s = \frac{\partial C_S}{\partial s}, \quad p_F = \frac{\partial C_F}{\partial f}, \quad \underbrace{-\frac{\partial C_S}{\partial x}}_{\text{abatement benefit}} = \underbrace{\frac{\partial C_F}{\partial x}}_{\text{harm to fishery}}$$

The last condition says that at the optimum, the *marginal saving to S from emitting one more unit of pollution* must equal the *marginal harm to F*. Since $\partial C_F / \partial x > 0$, the right-hand side is positive, so $\partial C_S/\partial x < 0$ at the optimum — meaning S should be producing *to the left* of where $\partial C_S/\partial x = 0$.

$$\boxed{x^* < x^e}$$

**Conclusion:** Firm S overproduces pollution in the competitive equilibrium because it does not internalise the harm it imposes on F.

#### Remedy 1 — Pigouvian Tax

> [!info] Pigouvian Tax
> A ==Pigouvian tax== is a per-unit charge $t$ on pollution imposed on the polluter. Set at:
> $$t^* = \frac{\partial C_F}{\partial x}(f^*, x^*)$$
> This makes S face the full social cost of its pollution. ^pigouvian-tax

**How it works:** Firm S's problem becomes $\max_{s,x} p_s s - C_S(s,x) - t \cdot x$. The FOC for $x$ becomes:
$$t = -\frac{\partial C_S}{\partial x}$$
Setting $t = \partial C_F/\partial x$ restores the social optimum condition.

> [!warning] Practical difficulty
> Implementing the Pigouvian tax requires the government to know the firms' technology $C_S$ and $C_F$ — which is private information. In practice, regulators use approximations.

#### Remedy 2 — Creating a Pollution Market (Coase)

Assign F the right to clean water, which it can *sell* to S. Let $q$ be the price per unit of pollution and $x$ the quantity of pollution S is allowed to buy:

- **Firm S:** $\max_{s,x} p_s s - q \cdot x - C_S(s,x)$ → FOC for $x$: $q = -\partial C_S/\partial x$.
- **Firm F:** $\max_{f,x} p_F f + q \cdot x - C_F(f,x)$ → FOC for $x$: $q = \partial C_F/\partial x$.

Market clearing ($q$ same for both): $\partial C_F/\partial x = -\partial C_S/\partial x$ ✓ — the social optimum is achieved.

The efficient outcome is the **same regardless of whether F or S holds the property right** (Coase Theorem) — only the distribution of profits differs.

| Approach | Mechanism | Requires |
|---|---|---|
| Pigouvian tax | Government sets $t^* = \partial C_F/\partial x$ | Full knowledge of $C_F$, $C_S$ |
| Pollution market | Create tradeable rights, let markets clear | Well-defined property rights; low transaction costs |
| Command & control | Regulation caps $x$ at $x^*$ | Knowledge of social optimum $x^*$ |

#### Worked Example

**Setup:** $C_S(s,x) = s^2 - \frac{1}{2}(s-x)^2$, $C_F(f,x) = f^2 + fx$. Prices: $p_S = 65$, $p_F = 39$.

> [!example] Competitive equilibrium
> FOCs for S: $p_S = \partial C_S/\partial s = 2s - (s-x) = s+x \Rightarrow s+x=65$ ... and $\partial C_S/\partial x = s-x = 0 \Rightarrow s^e = x^e = 32.5$.
>
> FOC for F: $p_F = 2f + x \Rightarrow 2f + 32.5 = 39 \Rightarrow f^e = 3.25$.
>
> Profits: $\pi_S^e = 65 \times 32.5 - 32.5^2 = 1056.25$, $\pi_F^e = 39 \times 3.25 - 3.25^2 - 3.25 \times 32.5 = 10.56$.
> **Total: 1066.81**

> [!example] Social optimum
> FOCs: $p_F = 2f + x \Rightarrow f = (39-x)/2$; $p_S = s + x \Rightarrow s = (65-x)/2$; $-\partial C_S/\partial x = \partial C_F/\partial x \Rightarrow s-x = f$.
>
> Substituting: $(65-x)/2 - x = (39-x)/2 \Rightarrow 65-3x = 39 \Rightarrow x^* = \mathbf{13}$; $s^* = 26$; $f^* = 13$.
>
> **Total profit: 1098.5** — higher than the competitive case (1066.81). The market failure destroyed 31.69 in total surplus.

> [!tip] Pigouvian tax for this example
> $t^* = \partial C_F/\partial x\big|_{f^*=13} = f^* = 13$. The tax on pollution should be set at 13 per unit of $x$.

---

## 📝 Summary

| Concept | Key formula / idea |
|---|---|
| Second Welfare Theorem | Any Pareto efficient allocation is achievable; redistribute via lump-sum taxes to avoid distortions |
| Efficiency locus (production) | $RTS_1 = RTS_2$ — both firms have same rate of technical substitution |
| PPF | Maps efficiency locus into output space; concave due to diminishing marginal returns |
| RPT | Opportunity cost of $X$ in terms of $Y$ along the PPF; $RPT = C'(x)/C'(y)$ in equilibrium |
| Optimal production | $MRS = RPT$ — consumer's willingness to trade must equal production's opportunity cost |
| Competitive equilibrium | Firms price at MC → $p_x/p_y = RPT = MRS$ → First Best achieved |
| Externality | Effect of one agent's choices on another's utility/cost, not priced by the market |
| Consumption externality | Market overproduces the externality-generating good; marginal private benefit < social cost |
| Coase theorem | Tradeable rights restore efficiency if transaction costs are low |
| Production externality | Polluter sets $\partial C_S/\partial x = 0$ but optimum requires $-\partial C_S/\partial x = \partial C_F/\partial x$ |
| Pigouvian tax | $t^* = \partial C_F/\partial x\big|_{\text{optimum}}$ — internalises the externality |

---

## 🔗 Related Notes

- [[Lec_04-Theory of the Firm, Partial & General Equilibrium]] — Theory of the Firm, Partial Equilibrium, Exchange Economy, First Welfare Theorem
- [[Micro-Economics II]] — subject hub
- [[_Wiki-Link Registry]] — all wiki-links for this subject
