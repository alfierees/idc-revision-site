---
title: "Topic 2 — Equilibrium in Different Market Structures"
topic: 2
semester: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
tags:
  - microeconomics
  - monopoly
  - oligopoly
  - bertrand
  - cournot
  - stackelberg
  - price-discrimination
  - bundling
  - perfect-competition
  - vertical-relations
  - lerner-index
subject: micro
in_scope: true
---
# Topic 2 — Equilibrium in Different Market Structures

> Part of: [[Microeconomics]]
> Micro 3 — Semester A | Tyomkin School of Economics, Reichman University
> Previous topic: [[Topic 1 - Asymmetric Information]]
> Key concepts: [[Monopoly]], [[Price Discrimination]], [[Bundling]], [[Bertrand Competition]], [[Cournot Competition]], [[Stackelberg Model]], [[Perfect Competition]], [[Vertical Relations]]

---

## 🎯 Overview

This topic builds a ladder of market structures — from the firm's cost structure all the way up to welfare analysis — and shows how **equilibrium price, quantity and surplus** depend on who has market power and how they compete.

> [!info] The ladder
> 1. [[#Costs of Production|Costs]] — the firm's side of every market
> 2. [[#Monopoly — Single Output|Monopoly]] (single output, then multi-output with bundling)
> 3. [[#Market Power and the Lerner Index|Market power & elasticity]]
> 4. [[#Price Discrimination|Price discrimination]] (1st, 2nd, 3rd degree)
> 5. [[#Oligopoly|Oligopoly]] — Bertrand, Cournot, Stackelberg
> 6. [[#Perfect Competition|Perfect competition]]
> 7. [[#Vertical Relations|Vertical relations]] — double marginalisation

---

## Costs of Production

### Economic vs accounting costs

$$\text{Total cost} = \text{Explicit costs} + \text{Implicit costs}$$

- **Explicit costs** — require an outlay of money (wages, rent, materials).
- **Implicit costs** — opportunity costs with no money changing hands (owner's forgone salary).
- Accountants ignore implicit costs → **economic profit < accounting profit**.

### Key distinctions

| Concept | Meaning |
|---|---|
| **Fixed cost (FC)** | Doesn't vary with $Q$ |
| **Variable cost (VC)** | Varies with $Q$ |
| **Marginal cost (MC)** | $\partial TC / \partial Q$ — cost of one more unit |
| **Avoidable cost** | Can be recovered in full |
| **Sunk cost** | Already spent, cannot be recovered — **ignore in decisions** |

> [!warning] Sunk cost fallacy
> If you've already paid a non-refundable deposit on Building A, that deposit must **not** enter the decision to switch to Building B. Compare only the *avoidable* costs going forward.

### Marginal cost shapes

- **Type 1 — Fixed MC:** $TC(Q) = F + cQ$, so $MC = c$ (horizontal line).
- **Type 2 — Increasing MC:** $TC$ curve gets steeper as $Q$ rises (diminishing marginal product of inputs).

---

## Monopoly — Single Output

A **monopoly** is the sole seller of a product with no close substitutes — a **price maker** subject only to the consumer's demand curve.

### Why monopolies arise

1. **Monopoly resources** — sole ownership of a key input.
2. **Government regulation** — patents, copyrights, exclusive licenses.
3. **Natural monopoly** — economies of scale over the relevant output range (one firm supplies the whole market more cheaply than two could).

### Profit maximisation

$$\Pi(Q) = P(Q)\cdot Q - TC(Q)$$

**FOC:** set $\partial \Pi / \partial Q = 0$:

$$\boxed{MR(Q) = MC(Q)}$$

Then charge the price the demand curve supports at that $Q$: $P^* = P(Q^*)$.

### Linear demand worked example

Demand $P = A - bQ$ with $MC = c$:

$$TR = (A - bQ)Q \Rightarrow MR = A - 2bQ$$

Setting $MR = MC$:

$$Q^M = \frac{A - c}{2b}, \qquad P^M = \frac{A + c}{2}$$

> [!tip] The MR shortcut for linear demand
> If $P = A - bQ$, then $MR = A - 2bQ$ — **same intercept, twice the slope**. Worth memorising.

![[T2_monopoly_mrmc.png|620]]

> [!example] The classic monopoly diagram
> The monopolist produces where $MR = MC$ (purple dashes meet green) and then reads the *price* off the demand curve above that quantity — never off the MR curve. Compared with the competitive outcome ($P = MC$, where the green line meets demand at $Q = A-c$), the monopolist restricts output and charges more. The red triangle is the **deadweight loss**: trades that are worth more to buyers than they cost to produce but don't happen.

### Non-flexible (perfectly elastic) price

When the price is fixed (e.g. the firm faces a world price), $MR = P$ at every $Q$. Profit max condition collapses to $MC = P$.

### Example B — a tax on profit does *not* change the monopoly price

> [!example] The OPEC oil-tax puzzle (1970s)
> Oil producers paid OPEC countries a fixed tax of \$9 per barrel (a *per-unit* tax). A proposal was floated to switch to a tax of **90% of gross profit** instead. Would producers raise their price in response?
>
> **No.** A proportional tax on profit scales the *objective* $\,(1-t)\,\Pi(Q)$ but leaves its maximiser unchanged: if $\Pi(Q)$ is largest at $Q^*$, so is $(1-t)\Pi(Q)$. The firm prices "as if there were no tax." A **per-unit** tax, by contrast, raises effective $MC$ and *does* push price up. This is the key distinction: profit taxes are non-distortionary for the monopolist's price; per-unit taxes are not.

### Example C — unitary-elastic demand

If demand has **constant unit elasticity** ($E = 1$ everywhere, e.g. $P = k/Q$), then total revenue $PQ = k$ is constant and $MR = 0$ at every quantity. With positive $MC$ the firm wants to sell the smallest possible quantity at the highest price — there is no interior profit-maximising quantity, so the standard $MR = MC$ tangency breaks down. A useful edge case to recognise in exam questions.

---

## Monopoly — Multi-Output & Bundling

### The bundling intuition

> [!example] Gone With the Wind (1939)
> LOEW's told theatres that wanted *Gone With the Wind* (GWTW) they must also rent *Getting Gertie's Garter* (GGG). Why?
>
> | Theatre | RP(GWTW) | RP(GGG) |
> |---|---|---|
> | A | $12,000 | $1,000 |
> | B | $10,000 | $4,000 |
>
> Selling separately: best price for GWTW is $10k (both theatres buy) → $20k; best for GGG is $1k → $2k. Total **$22k**.
>
> Bundle price = $13k (A's total RP) or $14k (B's total RP). At $13k, both buy → **$26k**. Bundling wins by $4k.

> [!success] Bundling rule
> Bundling is profitable when the two goods' **reservation prices are negatively correlated** across consumers. The bundle smooths out heterogeneity and extracts more surplus.

![[T2_bundling.png|600]]

> [!tip] Why negative correlation is the whole game
> Each dot is a consumer placed by how much they value good X (horizontal) versus good Y (vertical). When valuations are **negatively correlated** — high-X consumers are low-Y and vice versa — every consumer's *total* willingness to pay clusters near the same value, here ≈ \$100. A single bundle price (green line) then captures almost everyone with little surplus left on the table. Selling separately forces the monopolist to pick one price per good and lose either the low-value or the high-value buyers.

### Bundling strategies

1. **Pure bundling** — only sell the bundle.
2. **Mixed bundling** — offer bundle *and* individual goods, usually at a premium.
3. **Separate pricing** — optimal when RPs are positively correlated.

> [!example] Mixed bundling beats both pure strategies (Example 3)
> Four customers value Excel and Word as follows:
>
> | Customer | RP(Excel) | RP(Word) | Total RP |
> |---|---|---|---|
> | 1 | 90 | 10 | 100 |
> | 2 | 80 | 40 | 120 |
> | 3 | 40 | 80 | 120 |
> | 4 | 10 | 90 | 100 |
>
> - **Separate pricing:** best single price for Excel is \$80 (customers 1–2 buy → \$160); same for Word (\$160). Total ≈ **\$320**.
> - **Pure bundling** at \$100: all four buy → **\$400**.
> - **Mixed bundling:** offer the bundle at \$120 *and* each good alone at \$90. Customers 2 and 3 take the bundle (\$240); customers 1 and 4 buy just their high-value good at \$90 (\$180) → **\$420**.
>
> Mixed bundling dominates because it sells the bundle to the "balanced" consumers while still skimming the high-value single-good buyers at a premium.

---

## Market Power and the Lerner Index

### Elasticity of demand

$$E = -\frac{\%\Delta Q}{\%\Delta P}$$

- $E > 1$ — **elastic** (close substitutes exist) → $MR > 0$.
- $E = 1$ — **unit elastic** → $MR = 0$.
- $E < 1$ — **inelastic** (few substitutes) → $MR < 0$.

### The MR–elasticity formula

At every point on the demand curve:

$$\boxed{MR = P\left(1 - \tfrac{1}{E}\right)}$$

![[T2_mr_elasticity.png|600]]

> [!tip] Why a monopolist never operates on the inelastic part of demand
> Along a linear demand curve, MR is positive on the elastic upper half ($E>1$), zero at the midpoint ($E=1$), and negative on the inelastic lower half ($E<1$). Since $MC \geq 0$, setting $MR = MC$ always lands the monopolist on the **elastic** portion — selling into the inelastic region would mean cutting price while losing revenue. The formula $MR = P(1-1/E)$ makes this visible: as $E \to 1$, MR collapses to zero.

### Pricing "rule of thumb"

Setting $MR = MC$ and rearranging:

$$\frac{P - MC}{P} = \frac{1}{E}$$

This is the **[[Lerner Index]]** — a direct measure of monopoly power:

$$L = \frac{P - MC}{P} \in [0, 1]$$

- $L \to 0$: price competition (perfect competition).
- $L \to 1$: maximum monopoly power.

> [!example] Cake-mix problem
> $MC = \$0.75$, $E = 3$:
> $P^* = \dfrac{MC}{1 - 1/E} = \dfrac{0.75}{2/3} = \$1.125$

---

## Price Discrimination

**Definition:** charging different prices for similar goods that don't reflect cost differences. Goal — capture more consumer surplus.

### Essential conditions

1. **Segmented markets** with different elasticities.
2. **Control over price.**
3. **Ability to infer willingness to pay** (age, location, timing, etc.).
4. **Prevent arbitrage** — or the cheap segment resells to the expensive one.

### Arbitrage-prevention toolkit

- **Warranties** void on resale (value drops).
- **Services** (dental, haircut) — inherently non-resellable.
- **Adulteration** — make the cheap version unfit for premium uses.
- **Transport costs / remote outlets** — stores "out of the way".
- **Contractual** — resale bans.
- **Coupons** — require time/effort, filtering by willingness to pay.

### Third-degree (segmentation)

Segment the market; in each segment set $MR_i = MC$. **More inelastic segment → higher price.**

> [!example] Two-segment monopoly
> $MC = \$50$, Segment 1: $P_1 = 100 - Q_1$, Segment 2: $P_2 = 80 - 2Q_2$.
> In each: $MR_i = MC \Rightarrow$ pick $Q_i^*$ and $P_i^*$ separately.

![[T2_price_discrim_3rd.png|640]]

> [!tip] One firm, two prices
> The monopolist treats each segment as its own little market and sets $MR_i = MC$ in each. Here that gives $P_1 = \$75$ in the less-elastic segment and $P_2 = \$65$ in the more-elastic one. The rule is general: **the segment with less elastic demand pays the higher price**, because those consumers are less willing to walk away from a price rise.

### First-degree (perfect price discrimination)

Charge each consumer her exact reservation price. In practice approximated by:

- **Two-part tariff (TPT):** entry fee $F$ + per-unit price $P$. Optimal: $P = MC$, $F = CS$ at that price → captures *all* surplus from the segment.
- Examples: gyms, amusement parks, Gillette razors, telephone plans.

### Second-degree (package / non-linear pricing)

Monopolist knows the *types* but can't identify which consumer is which. Offer a **menu** of bundles so each type self-selects.

**The logic (IC-constraint style):**

1. If you tried perfect-PD with menu, the "rich" consumer would **mimic** the "poor" bundle and pocket the surplus difference.
2. **Reduce the poor consumer's bundle** quantity by $\Delta q$:
   - **Loss ($b$):** revenue on the removed units from the poor consumer.
   - **Gain ($a$):** shrinks the rich consumer's mimicking surplus → allows charging them more.
3. Keep reducing while $a > b$. **Optimum: $a = b$.**

> [!tip] When to distort
> If $a \geq b$ everywhere — distort until only the rich type buys.
> If $a \leq b$ everywhere — keep the poor's bundle at its first-best quantity; the rich end up buying the same bundle (pooling).
> Works for *any* demand curves, not just parallel ones.

![[T2_second_degree.png|620]]

> [!example] The a-vs-b trade-off, drawn
> Shrinking the poor type's bundle by $\Delta q$ has two effects. The **loss $b$** (red, under the poor type's demand) is the revenue the monopolist gives up on those units. The **gain $a$** (green, between the two demand curves) is how much *more* it can now charge the rich type, because the poor bundle is less tempting to mimic. The monopolist keeps cutting while $a > b$ and stops at $a = b$. This is why the low type's bundle is distorted downward but the high type's never is ("no distortion at the top").

---

## Oligopoly

**Oligopoly** — a small number of firms, each aware that its price/quantity choices move the market. Each firm must **predict its rivals' strategies**. The equilibrium concept is **[[Nash Equilibrium]]**.

### Bertrand (1883) — Price competition

**Assumptions:** homogeneous product, firms set prices simultaneously, consumers buy from the cheapest.

**Symmetric case:** two firms with the same $MC = c$. The unique Nash equilibrium is:

$$P_1^* = P_2^* = c, \quad \Pi_i = 0$$

**"Bertrand paradox":** just two firms suffice for perfect-competition outcomes.

**Asymmetric case:** firm 1 has $MC_1 = c_1 < c_2$. Firm 1 undercuts firm 2 just enough — equilibrium price = $\min(c_2, P_1^M)$, where $P_1^M$ is firm 1's unconstrained monopoly price.

> [!warning] Bertrand's knife-edge
> The result collapses if any assumption breaks: non-constant MC, differentiated products, multiple periods, or imperfect information. These extensions motivate everything that follows.

### Monopolistic (price) competition

Differentiated products with inverse demands:

$$P_i = a - Q_i - g\cdot Q_j$$

where $g \in [0,1]$ measures how similar the products are. Each firm has some market power — derive best-response functions from $\partial \Pi_i / \partial P_i = 0$, intersect them for the Nash equilibrium.

### Cournot (1838) — Quantity competition

Firms simultaneously choose quantities; market price = $P(q_1 + q_2)$.

**Symmetric duopoly:** $P = A - Q$, $C_i(q_i) = c q_i$.

Firm 1's FOC: $\dfrac{\partial \Pi_1}{\partial q_1} = A - 2q_1 - q_2 - c = 0$

**Best response:** $q_1 = \dfrac{A - c - q_2}{2}$ (symmetric for firm 2).

Solving the system:

$$q_1^* = q_2^* = \frac{A - c}{3}, \quad P^* = \frac{A + 2c}{3}, \quad \Pi_i = \left(\frac{A-c}{3}\right)^2$$

![[T2_cournot_br.png|600]]

> [!tip] Where the best responses cross
> Each firm's best-response line shows its profit-maximising output *given* the rival's output — both slope downward because quantities are **strategic substitutes** (if your rival floods the market, you cut back). The Nash equilibrium is the single point where both are simultaneously best-responding: $q_1 = q_2 = (A-c)/3$. Note each firm produces less than the monopoly output $(A-c)/2$ but the two together produce *more*, which is why price falls below the monopoly level.

### Comparison table — linear demand, $MC = c$

| Structure | $Q^{total}$ | $P$ | Industry profit |
|---|---|---|---|
| Monopoly | $(A-c)/2$ | $(A+c)/2$ | $(A-c)^2/4$ |
| Cournot (2 firms) | $2(A-c)/3$ | $(A+2c)/3$ | $2(A-c)^2/9$ |
| Bertrand / PC | $A-c$ | $c$ | $0$ |

> [!success] Intuition
> More competitors → more quantity, lower price, less industry profit. Cournot sits *between* monopoly and perfect competition.

![[T2_structure_comparison.png|640]]

> [!example] The three structures side by side ($A=10$, $c=2$)
> Reading left to right — monopoly to Cournot to Bertrand — **quantity climbs** (blue: 4 → 5.3 → 8), **price falls** (orange: 6 → 4.7 → 2 = MC), and **industry profit collapses** (green: 16 → 14.2 → 0). Cournot is genuinely intermediate; Bertrand with just two firms already reaches the competitive outcome (the "Bertrand paradox").

### Stackelberg (1934) — Sequential quantity

Firm 1 (leader) sets $q_1$ first; firm 2 (follower) observes and responds with its Cournot best-response $q_2(q_1)$. Firm 1 maximises knowing this.

Plugging firm 2's BR into firm 1's profit and optimising:

$$q_1^* = \frac{A-c}{2}, \quad q_2^* = \frac{A-c}{4}, \quad Q^* = \frac{3(A-c)}{4}$$

![[T2_stackelberg.png|600]]

> [!tip] The leader exploits the follower's best response
> Because the follower will always react along its best-response line, the leader treats that line as a constraint and picks the point on it that maximises its *own* profit. That point is further down the line than the Cournot equilibrium — the leader commits to a *larger* quantity $(A-c)/2$, forcing the follower to scale back to $(A-c)/4$. Commitment is the whole advantage: it only works because the leader moves first and can't be undone.

**First-mover advantage:** the leader produces more and earns more than in Cournot; the follower earns less.

---

## Perfect Competition

**Assumptions:** many buyers and sellers, identical product, free entry/exit, everyone is a **price taker**.

### Equilibrium mechanics

- **Excess demand** (shortage): $Q_d > Q_s$ at current $P$ → $P$ rises.
- **Excess supply** (surplus): $Q_s > Q_d$ at current $P$ → $P$ falls.
- **Equilibrium:** $Q_s = Q_d$, no tendency for $P$ to change.

### Welfare

$$\text{Total surplus} = \text{CS} + \text{PS}$$

**First Welfare Theorem (informal):** competitive equilibrium **maximises total surplus** — Adam Smith's invisible hand.

> [!tip] Benchmark role
> Perfect competition is the efficiency benchmark. Deadweight loss (DWL) in every other market structure is measured relative to this outcome.

---

## Vertical Relations — Double Marginalisation

A producer sells via a retailer — each stage marks up price above marginal cost. The stacked markups can hurt **both** firms and consumers.

### Setup

- Market demand: $P = A - Q$
- Producer's $MC = k$; charges wholesale $w$ per unit to retailer.
- Retailer faces $w$ as its own MC; sets $P$ for consumers.

### Backward induction

**Stage 2 (retailer):**
Retailer's problem: $\max_Q (P - w)Q$ with $P = A - Q$.
$MR_r(Q) = A - 2Q = w \Rightarrow Q = \dfrac{A - w}{2}$.

This implicitly defines the retailer's **derived demand** for the wholesale good:

$$w = A - 2Q$$

**Stage 1 (producer):**
Producer faces derived demand $w(Q) = A - 2Q$, so $MR_p(Q) = A - 4Q$.
Set $MR_p = k$:

$$Q^{VR} = \frac{A - k}{4}, \quad w^* = \frac{A + k}{2}, \quad P^* = \frac{3A + k}{4}$$

### Compare to vertical merger (integrated monopoly)

A single firm with $MC = k$ would set:

$$Q^M = \frac{A - k}{2}, \quad P^M = \frac{A + k}{2}$$

> [!warning] Double marginalisation
> The two-stage chain produces **half the quantity** and **higher final price** than the integrated monopoly — even though both are monopolies. Worse for consumers *and* worse for total industry profit.

![[T2_double_marginalisation.png|620]]

> [!example] Three outcomes on one demand curve ($A=10$, $k=2$)
> Perfect competition prices at $MC$ ($P=2$, $Q=8$). A single integrated monopolist restricts to $Q=4$, $P=6$. The **vertical chain stacks two markups** and ends up even worse — $Q=2$, $P=8$ — because the producer marks up over its cost, then the retailer marks up over the wholesale price. Each link ignores the demand it destroys for the other, so the final price overshoots even the monopoly level. Merging the two (or a two-part tariff) collapses the chain back to the integrated point.

**Remedy:** vertical integration, two-part tariff wholesale contracts, or resale price maintenance — all recover the integrated outcome.

### Welfare ordering (linear demand)

$$\text{Perfect Competition} \;\succ\; \text{Integrated Monopoly} \;\succ\; \text{Vertical Chain}$$

(in terms of total surplus; DWL grows along the chain).

---

## 🎯 Summary — What Topic 2 Teaches

1. **Market structure determines the wedge** between price and marginal cost. The Lerner index $L = (P-MC)/P = 1/E$ captures this in one number.
2. **Monopoly pricing** balances the marginal-revenue trade-off; **bundling** extracts more surplus when RPs are negatively correlated.
3. **Price discrimination** needs segmentation, price control, willingness-to-pay inference, and arbitrage prevention. Second-degree PD uses a self-selecting menu — distort the low type's bundle until marginal loss $b$ = mimicking gain $a$.
4. **Oligopoly** ranges from Bertrand (price → $MC$) to Cournot (interior) to Stackelberg (first-mover advantage). More firms in Cournot ≈ perfect competition in the limit.
5. **Perfect competition** is the welfare benchmark; every departure creates DWL.
6. **Vertical relations** cause double marginalisation — stacked monopolies are *worse* than one integrated monopoly.

---

## 📎 Related Notes

- Previous topic: [[Topic 1 - Asymmetric Information]]
- Foundational: [[Nash Equilibrium]], [[Consumer Surplus]], [[Producer Surplus]], [[Deadweight Loss]]
- Related: [[Lerner Index]], [[Price Discrimination]], [[Bundling]], [[Cournot Competition]], [[Bertrand Competition]], [[Stackelberg Model]], [[Vertical Integration]]
