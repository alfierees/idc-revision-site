---
title: "Topic 4 — Price Competition with Complementary Goods"
topic: 4
semester: 2
course: "Micro 3 — Advanced Microeconomics"
tags:
  - microeconomics
  - complementary-goods
  - double-marginalization
  - pricing-externality
  - vertical-integration
  - oligopoly
  - market-structure
subject: micro
in_scope: true
---
# Topic 4 — Price Competition with Complementary Goods

> Part of: [[Microeconomics]]
> Perfect Complements, Double Marginalization, Pricing Externality, N-Firm Equilibrium, Vertical Integration
> Micro 3 — Tiomkin School of Economics, Reichman University
> Key concepts: [[Perfect Complements]] · [[Double Marginalization]] · [[Pricing Externality]] · [[Vertical Integration]] · [[Complementary Monopolist]] · [[Best Response Function]] · [[Comparative Statics]]

---

## 🧩 1. Motivation — Why Complements Are Special

Most of industrial organisation focuses on **substitute goods** — where firms compete for the same consumers and more competitors means lower prices. This topic flips that logic entirely.

> [!info] Setup: Perfect Complements
> A consumer must purchase **all components** of a product to consume any of it. There is no partial consumption — the goods are **perfect complements**.
> The consumer cares only about the **total price** $P$, which is the sum of all component prices:
> $$\boxed{P = \sum_{i=1}^{N} p_i}$$

**Real-world examples:**

| Example               | Component 1          | Component 2       | Why they're complements                     |
| --------------------- | -------------------- | ----------------- | ------------------------------------------- |
| Sequential toll roads | Toll booth A         | Toll booth B      | Must pay both to complete the journey       |
| Supply chain          | Manufacturer's price | Retailer's markup | Consumer pays both to get the finished good |
| Platform ecosystem    | App store fee        | Hardware price    | Must have both to use the app               |
| Video game hardware   | Console              | Game cartridge    | Neither useful without the other            |

> [!tip] Intuition — Why this matters
> When goods are substitutes, more competitors fight over the same consumer → prices fall. When goods are **complements**, each firm is essentially adding to the price the consumer pays for the same final good. More firms with pricing power over different components doesn't help the consumer — it hurts them.

---

## 📊 2. Demand — The Model Setup

The market has a simple linear demand function:

$$\boxed{Q = A - P, \quad A > 0}$$

where $P$ is the **total price** paid by the consumer across all components, and $A$ is the maximum willingness to pay (the demand intercept).

> [!note] Why total price?
> Because the goods are perfect complements, the consumer's decision to buy depends only on the total cost of the bundle, not on how that total is split between firms. A consumer who must cross two toll booths cares about the total toll, not which booth charges more.

---

## 🏛️ 3. Benchmark: The Integrated Monopolist

Before analysing decentralised firms, establish the efficient benchmark — a **single monopolist** who controls all components and chooses the total price $P$.

**The monopolist's problem:**
$$\max_{P} \quad \pi = P(A - P)$$

**First-Order Condition (FOC):**
$$\frac{d\pi}{dP} = A - 2P = 0 \implies \boxed{P^M = \frac{A}{2}}$$

**Equilibrium outcomes:**

$$Q^M = A - P^M = A - \frac{A}{2} = \frac{A}{2}$$

$$\pi^M = P^M \cdot Q^M = \frac{A}{2} \cdot \frac{A}{2} = \frac{A^2}{4}$$

> [!tip] Intuition
> The monopolist internalises everything: raising price reduces both demand and profit, and they weigh this trade-off optimally. The standard monopoly result: price = $A/2$, quantity = $A/2$. This will be the **upper benchmark** — the best possible outcome for firms, and the least bad for consumers in a world with market power.

---

## 🏭 4. Two Complementary Firms — The Decentralised Case

Now split control: **Firm 1** controls component 1 (sets $p_1$), **Firm 2** controls component 2 (sets $p_2$). They choose simultaneously.

**Each firm's total price contribution:** $P = p_1 + p_2$

**Firm $i$'s problem** (taking the other firm's price as given):
$$\max_{p_i} \quad \pi_i = p_i \cdot Q = p_i(A - p_1 - p_2)$$

### Deriving the Best Response Function

Take the FOC with respect to $p_i$:
$$\frac{\partial \pi_i}{\partial p_i} = A - p_1 - p_2 - p_i = 0$$
$$\implies A - P - p_i = 0$$

Firm 1 maximises $p_1(A - p_1 - p_2)$. Differentiating and collecting the $p_1$ terms:
$$A - 2p_1 - p_2 = 0 \implies \boxed{p_1^*(p_2) = \frac{A - p_2}{2}}$$

By symmetry: $p_2^*(p_1) = \dfrac{A - p_1}{2}$

> [!info] Best Response Function
> Each firm's optimal price **falls** as the other firm raises its price. This is the key: if Firm 2 raises $p_2$, total demand falls, which makes demand less elastic — but it also reduces Firm 1's residual market. In equilibrium, they account for each other.

### Finding the Nash Equilibrium

Substitute $p_2^* = \frac{A - p_1}{2}$ into $p_1^* = \frac{A - p_2}{2}$:

$$p_1 = \frac{A - \frac{A - p_1}{2}}{2} = \frac{\frac{2A - A + p_1}{2}}{2} = \frac{A + p_1}{4}$$

$$4p_1 = A + p_1 \implies 3p_1 = A \implies \boxed{p_1 = \frac{A}{3}}$$

By symmetry, $p_2 = \frac{A}{3}$.

![[T4_complement_br.png|600]]

> [!tip] Best responses that cross *above* the monopoly total
> Just like Cournot, each firm's best response slopes down — but here the variables are **prices**, not quantities. The equilibrium is where they cross: $p_1 = p_2 = A/3$, so the consumer pays $P = 2A/3$. Crucially that total is *higher* than the integrated monopoly price $A/2$. The decentralised firms over-price because each one ignores how its markup shrinks demand for the other — the pricing externality made geometric.

### Equilibrium Outcomes — Two Firms

$$p_1 = p_2 = \frac{A}{3}$$

$$P^{DM} = p_1 + p_2 = \frac{2A}{3}$$

$$Q^{DM} = A - P^{DM} = A - \frac{2A}{3} = \frac{A}{3}$$

$$\pi_i^{DM} = p_i \cdot Q^{DM} = \frac{A}{3} \cdot \frac{A}{3} = \frac{A^2}{9}$$

$$\pi_{total}^{DM} = 2 \cdot \frac{A^2}{9} = \frac{2A^2}{9}$$

> [!warning] Shocking result
> Combined industry profits are $\frac{2A^2}{9} < \frac{A^2}{4}$ (the monopoly profit). The firms would collectively earn **more** under a single integrated firm! Splitting control has destroyed value — not just for consumers, but for the firms themselves.

---

## 🔢 5. General Case: N Complementary Firms

Extend to $N$ firms, each controlling one component. By symmetry in equilibrium $p_i = p$ for all $i$, so $P = Np$.

**Each firm solves:**
$$\max_{p_i} \quad p_i(A - P) \quad \text{where } P = \sum_{j=1}^N p_j$$

**FOC for firm $i$:**
$$A - P - p_i = 0$$

**Using symmetry** $p_i = P/N$:
$$A - P - \frac{P}{N} = 0 \implies A = P\left(1 + \frac{1}{N}\right) = P \cdot \frac{N+1}{N}$$

$$\boxed{P^N = \frac{AN}{N+1}}$$

**Individual price:**
$$\boxed{p_i^N = \frac{P^N}{N} = \frac{A}{N+1}}$$

**Quantity:**
$$\boxed{Q^N = A - P^N = A - \frac{AN}{N+1} = \frac{A}{N+1}}$$

**Individual profit:**
$$\pi_i^N = p_i^N \cdot Q^N = \frac{A}{N+1} \cdot \frac{A}{N+1} = \frac{A^2}{(N+1)^2}$$

**Total industry profit:**
$$\pi_{total}^N = N \cdot \frac{A^2}{(N+1)^2} = \frac{NA^2}{(N+1)^2}$$

---

## ⚖️ 6. The Key Comparison: Monopoly vs. N Complementary Firms

| Market Structure | Total Price $P$ | Quantity $Q$ | Per-Firm Profit | Industry Profit |
|---|---|---|---|---|
| **Monopoly** ($N=1$) | $\dfrac{A}{2}$ | $\dfrac{A}{2}$ | $\dfrac{A^2}{4}$ | $\dfrac{A^2}{4}$ |
| **Two firms** ($N=2$) | $\dfrac{2A}{3}$ | $\dfrac{A}{3}$ | $\dfrac{A^2}{9}$ | $\dfrac{2A^2}{9}$ |
| **Three firms** ($N=3$) | $\dfrac{3A}{4}$ | $\dfrac{A}{4}$ | $\dfrac{A^2}{16}$ | $\dfrac{3A^2}{16}$ |
| **N firms** | $\dfrac{AN}{N+1}$ | $\dfrac{A}{N+1}$ | $\dfrac{A^2}{(N+1)^2}$ | $\dfrac{NA^2}{(N+1)^2}$ |
| **$N \to \infty$** | $\to A$ | $\to 0$ | $\to 0$ | $\to 0$ |

> [!warning] The Counter-Intuitive Result
> **Price rises and quantity falls as the number of complementary firms increases.** This is the *exact opposite* of standard Cournot/Bertrand competition with substitute goods, where more firms drive prices toward marginal cost.

![[T4_N_effects.png|680]]

> [!example] The signature result, plotted ($A=6$)
> **Left:** as more firms each control a separate component, the total price $P^N = AN/(N+1)$ climbs toward the choke price $A$, while quantity $Q^N = A/(N+1)$ falls toward zero. **Right:** industry profit $NA^2/(N+1)^2$ is *maximised at $N=1$* (the integrated monopoly) and declines monotonically as the chain fragments. More firms hurt consumers *and* firms — the opposite of competition among substitutes.

> [!tip] Verify the Monopoly Is Better
> Compare $P^M = A/2$ vs $P^{DM} = 2A/3$: since $2/3 > 1/2$, the two-firm case has a **higher** total price. And compare total profits: $A^2/4$ vs $2A^2/9$. Since $9 > 8$, the monopoly earns more. The firms are **hurting themselves** by staying separate.

---

## 📉 7. Comparative Statics: What Happens as N Grows?

As $N$ increases:

$$P^N = \frac{AN}{N+1} \nearrow A \qquad Q^N = \frac{A}{N+1} \searrow 0$$

- More complementary firms → **higher total price** (approaching maximum willingness to pay $A$)
- More complementary firms → **lower quantity** (approaching zero)
- At the extreme, the market **collapses entirely** — too expensive for anyone to buy

> [!info] This is the opposite of standard competition
> With **substitutes** (Cournot): more firms → price falls toward marginal cost → welfare improves
> With **complements**: more firms → price rises toward monopoly-level WTP → welfare collapses

This phenomenon is called **Double Marginalization** (or **Multiple Marginalization** when $N > 2$).

> [!info] Definition: Double Marginalization
> **Double Marginalization** occurs when two or more firms in a vertical supply chain each apply a markup to the final consumer price, independently. Each firm sets its price to maximise its own profit, ignoring the **negative pricing externality** it imposes on the other firms — because its higher price reduces the total demand that all firms share.

### The Negative Pricing Externality Explained

When Firm 1 raises $p_1$:
1. Total price $P = p_1 + p_2$ rises
2. Quantity demanded $Q = A - P$ falls
3. Firm 2's revenue $\pi_2 = p_2 \cdot Q$ falls — **Firm 1 does not account for this**

Each firm only considers the effect on its own profit, not on the other firms' profits. This is a **negative externality in prices**, analogous to a pollution externality: individual action harms others, leading to a socially suboptimal outcome.

---

## 🏗️ 8. Solutions: Internalising the Externality

Since the core problem is that firms ignore their impact on each other, the solution is to make one entity bear all the consequences of pricing decisions.

| Solution | Mechanism | How it Internalises the Externality |
|---|---|---|
| **Vertical Integration** | Merge the firms into one entity | The merged firm maximises combined profit — identical to the monopolist problem |
| **Two-Part Tariff** | Upstream firm charges a fixed fee + low per-unit price | Per-unit price set at MC, fixed fee extracts surplus; eliminates double markup |
| **Revenue Sharing** | Firms agree to share a fraction of total revenue | Aligns incentives — each firm cares about the total |
| **Exclusive Dealing + Contract** | Long-term contract specifying prices | Contractually removes the pricing externality |

> [!tip] Why Vertical Integration Works
> If Firms 1 and 2 merge, the combined entity solves:
> $$\max_{p_1, p_2} (p_1 + p_2)(A - p_1 - p_2) = \max_P P(A - P)$$
> This is exactly the monopolist's problem → $P^* = A/2$. The merger restores efficiency (relative to the decentralised outcome, not relative to perfect competition).

> [!warning] Important caveat
> Vertical integration solves the double marginalization problem but may raise other antitrust concerns (market foreclosure, etc.). Regulators must weigh the efficiency gains against the risk of increased market power.

---

## 📝 9. Practice Questions with Step-by-Step Solutions

### Q1 — Two Complementary Firms: Full Derivation

**Question:** Two firms each produce one component of a good. Consumer demand is $Q = 10 - P$ where $P = p_1 + p_2$. Both firms have zero marginal cost. Find: (a) the Nash Equilibrium prices, (b) the total price, (c) the quantity, (d) each firm's profit.

**Step-by-step solution:**

**Step 1: Write each firm's profit function.**
$$\pi_1 = p_1 \cdot Q = p_1(10 - p_1 - p_2)$$
$$\pi_2 = p_2 \cdot Q = p_2(10 - p_1 - p_2)$$

**Step 2: Derive best response functions via FOC.**

For Firm 1: $\dfrac{\partial \pi_1}{\partial p_1} = 10 - 2p_1 - p_2 = 0$
$$\implies p_1^*(p_2) = \frac{10 - p_2}{2}$$

For Firm 2 (symmetric): $p_2^*(p_1) = \dfrac{10 - p_1}{2}$

**Step 3: Solve simultaneously.**

Substitute $p_2^* = \frac{10 - p_1}{2}$ into $p_1^* = \frac{10 - p_2}{2}$:
$$p_1 = \frac{10 - \frac{10 - p_1}{2}}{2} = \frac{20 - 10 + p_1}{4} = \frac{10 + p_1}{4}$$
$$4p_1 = 10 + p_1 \implies 3p_1 = 10 \implies p_1 = \frac{10}{3}$$

**Step 4: Compute equilibrium outcomes.**
$$p_1 = p_2 = \frac{10}{3} \approx 3.33$$
$$P^{DM} = \frac{20}{3} \approx 6.67$$
$$Q^{DM} = 10 - \frac{20}{3} = \frac{10}{3} \approx 3.33$$
$$\pi_i = \frac{10}{3} \cdot \frac{10}{3} = \frac{100}{9} \approx 11.11$$

**Step 5: Compare to monopoly benchmark.**
Monopoly: $P^M = 5$, $Q^M = 5$, $\pi^M = 25$
Two firms: $P^{DM} = 20/3$, $Q^{DM} = 10/3$, $\pi_{total} = 200/9 \approx 22.22$

→ Price is higher, quantity is lower, and total profits are lower than monopoly. ✓

---

### Q2 — Three Complementary Firms

**Question:** There are 3 complementary monopolists. Demand is $Q = 12 - P$ with zero marginal costs. Find the equilibrium price, quantity, and each firm's profit. Compare to the integrated monopolist.

**Step 1: Use the general formula.**

With $N = 3$ and $A = 12$:
$$P^N = \frac{AN}{N+1} = \frac{12 \times 3}{4} = \frac{36}{4} = 9$$
$$Q^N = \frac{A}{N+1} = \frac{12}{4} = 3$$
$$p_i = \frac{A}{N+1} = \frac{12}{4} = 3$$
$$\pi_i = p_i \cdot Q^N = 3 \times 3 = 9$$

**Step 2: Compare to monopoly.**
$$P^M = \frac{12}{2} = 6, \quad Q^M = 6, \quad \pi^M = 36$$

| | Price | Quantity | Total Profit |
|---|---|---|---|
| Monopoly | 6 | 6 | 36 |
| 3 firms | 9 | 3 | 27 |

Total profits fell from 36 to 27. Price rose from 6 to 9. Quantity fell from 6 to 3.

> [!example] Quick formula check
> For $N$ firms: $P^N = \frac{AN}{N+1}$. Verify $N=1$: $P = A/2$ ✓. Verify $N=2$: $P = 2A/3$ ✓.

---

### Q3 — Comparative Statics Question

**Question:** Suppose $A = 6$. Fill in the table for $N = 1, 2, 3, 4$, and $\infty$. What happens to total industry profit as $N$ grows?

| $N$ | $P^N = \frac{6N}{N+1}$ | $Q^N = \frac{6}{N+1}$ | $\pi_i = \frac{36}{(N+1)^2}$ | $\pi_{total} = \frac{36N}{(N+1)^2}$ |
|---|---|---|---|---|
| 1 | 3 | 3 | 9 | 9 |
| 2 | 4 | 2 | 4 | 8 |
| 3 | 4.5 | 1.5 | 2.25 | 6.75 |
| 4 | 4.8 | 1.2 | 1.44 | 5.76 |
| $\infty$ | 6 | 0 | 0 | 0 |

→ Industry profit falls monotonically with $N$. Both firms AND consumers are worse off as the market becomes more fragmented — the textbook definition of a lose-lose outcome.

---

### Q4 — Identifying the Pricing Externality (Essay-Style)

**Question:** Explain why decentralised complementary firms set a higher price than an integrated monopolist. What is the "pricing externality" and why do firms fail to internalise it?

**Model answer:**

When two complementary firms each set their price independently, they solve separate profit-maximisation problems. Firm 1 chooses $p_1$ to maximise $\pi_1 = p_1(A - p_1 - p_2)$.

The FOC yields $A - 2p_1 - p_2 = 0$, or equivalently: $A - P - p_1 = 0$.

The key term is $A - P - p_i = 0$. This says Firm 1 equates its **own** contribution to the markup against demand. But when Firm 1 raises $p_1$ by $\Delta$:
- Total price $P$ rises by $\Delta$
- Quantity $Q = A - P$ falls by $\Delta$
- **Firm 2's revenue** $\pi_2 = p_2 Q$ falls by $p_2 \cdot \Delta$

Firm 1 **ignores this loss to Firm 2**. This is the **negative pricing externality** — like a factory that ignores the pollution cost its production imposes on others. Each firm only bears the cost to its own revenues (lower quantity × own price), not the full social cost (lower quantity × all firms' prices combined).

An integrated monopolist, by contrast, maximises total profit $P(A-P)$ and fully internalises the fact that a higher price reduces demand for the entire bundle. This is why the monopolist prices at $A/2$, while decentralised firms push the total price to $2A/3$ (with $N=2$) or higher.

---

### Q5 — Vertical Integration Question

**Question:** With $A = 9$ and $N = 2$, what are the gains from vertical integration? Show the improvement in price, quantity, and total profit.

**Decentralised equilibrium ($N = 2$):**
$$P^{DM} = \frac{2 \times 9}{3} = 6, \quad Q^{DM} = 3, \quad \pi_i = 3 \times 3 = 9, \quad \pi_{total} = 18$$

**Integrated monopolist:**
$$P^M = \frac{9}{2} = 4.5, \quad Q^M = 4.5, \quad \pi^M = 4.5 \times 4.5 = 20.25$$

**Gains from integration:**

| Metric | Separate | Integrated | Change |
|---|---|---|---|
| Total price | 6 | 4.5 | **↓ 25%** |
| Quantity | 3 | 4.5 | **↑ 50%** |
| Total profit | 18 | 20.25 | **↑ 12.5%** |
| Consumer surplus | $3^2/2 = 4.5$ | $4.5^2/2 = 10.125$ | **↑ 125%** |

Integration is **Pareto-improving** in this context: both firms profit more and consumers pay less. This provides the economic rationale for why vertical mergers are sometimes efficiency-enhancing.

---

## ✅ 10. Summary

This topic reveals a striking and counter-intuitive result in industrial organisation:

- **Perfect complements** create a unique strategic environment: the consumer cares only about the total price $P = \sum p_i$, making each firm's pricing decision an externality on all others.
- The **decentralised equilibrium** with $N$ firms yields: $P^N = \frac{AN}{N+1}$, $Q^N = \frac{A}{N+1}$.
- **More complementary firms = worse outcomes**: higher prices, lower quantities, lower total profits. The polar opposite of standard competition.
- This is **Double Marginalization** — each firm applies an independent markup, stacking markups on top of each other.
- The **negative pricing externality**: each firm ignores how its price raises the total price and destroys demand for everyone.
- **Solutions**: vertical integration (merging the firms) or contractual remedies (two-part tariffs, revenue sharing) that internalise the externality.
- Vertical integration in this context is efficiency-enhancing — it eliminates double marginalization and increases both profits and consumer welfare.

> [!tip] Exam Checklist
> 1. Set up each firm's profit function: $\pi_i = p_i(A - \sum_j p_j)$.
> 2. Take FOC for firm $i$: $A - P - p_i = 0$.
> 3. Apply symmetry: $p_i = P/N$ in equilibrium → solve for $P^N = \frac{AN}{N+1}$.
> 4. State the key result: more firms → higher price (opposite of standard competition).
> 5. Name the mechanism: **negative pricing externality / double marginalization**.
> 6. Compare to monopoly: $P^M = A/2 < P^N$ for $N \geq 2$.
> 7. Discuss solutions: vertical integration, two-part tariffs, revenue sharing.

---

## 🔗 Related Notes

- [[Microeconomics]] — subject hub
- [[Topic 2 - Equilibrium in Different Market Structures]]
- [[Topic 3 - Game Theory]]
- [[_Wiki-Link Registry]]
