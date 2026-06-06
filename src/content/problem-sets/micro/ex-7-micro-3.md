---
title: "EX-7 - Micro 3"
subject: micro
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Bertrand competition with asymmetric costs.** Demand $P = 100 - Q$. Firm 1: $MC_1 = 10$. Firm 2: $MC_2 = 80$. Tie-breaking: if $p_1 = p_2$, all consumers buy from Firm 1.

      What is the maximum price Firm 1 can charge while still excluding Firm 2 from the market?
    solution: |
      Firm 2 enters only if it can set a price below Firm 1 *and* earn positive profit, i.e. $p_2 > MC_2 = 80$. If Firm 1 sets $p_1 \leq 80$, then any price Firm 2 could use to undercut ($p_2 < p_1 \leq 80$) would be below its own MC.

      **Maximum exclusionary price:** $p_1^* = 80 = MC_2$.

      $$Q = 100 - 80 = 20, \qquad \pi_1 = (80 - 10) \times 20 = 1{,}400$$

      > [!success] Answer (a)
      > Firm 1 can charge up to **\$80** (= $MC_2$) while excluding Firm 2. At this price Firm 1 earns 1,400.
    related_terms: ["bertrand-competition", "limit-pricing"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Is $p_1 = 80$ profit-maximising for Firm 1?
    solution: |
      Check Firm 1's unconstrained monopoly price first.

      Monopoly profit: $\pi_1 = (P - 10)(100 - P)$. FOC: $(100 - P) - (P - 10) = 0 \Rightarrow P^m = 55$.

      $P^m = 55 < 80 = MC_2$, so even at the monopoly price Firm 2 cannot profitably undercut (any $p_2 < 55$ is below $MC_2 = 80$).

      | Price | Quantity | Profit |
      |---|---|---|
      | $p_1 = 80$ (limit price) | $20$ | $1{,}400$ |
      | $p_1 = 55$ (monopoly) | $45$ | $\mathbf{2{,}025}$ |

      > [!success] Answer (b)
      > **No** — Firm 1 should set the **monopoly price \$55**, earning **2,025**. Limit-pricing at 80 leaves money on the table because the monopoly price already excludes Firm 2.
    related_terms: ["bertrand-competition", "limit-pricing"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Now $MC_2$ drops to 50 (with $MC_1 = 10$ unchanged). What is the Nash Equilibrium?
    solution: |
      Check if the monopoly price still blocks entry: $P^m = 55 > MC_2 = 50$. If Firm 1 charges 55, Firm 2 can set $p_2 = 54$ (above its MC of 50) and steal all customers. So Firm 1 **cannot** charge its monopoly price — it must [[Limit Pricing|limit-price]].

      **Limit price:** $p_1 = MC_2 = 50$. At $p_1 = p_2 = 50$ the tie-breaking rule sends all demand to Firm 1; Firm 2 cannot profitably undercut ($p_2 < 50$ means negative profit).

      $$Q = 100 - 50 = 50, \quad \pi_1 = (50 - 10) \times 50 = \mathbf{2{,}000}, \quad \pi_2 = 0$$

      > [!success] Nash Equilibrium
      > **$p_1^{NE} = 50$, $p_2^{NE} = 50$** (or any $p_2 \geq 50$). Firm 1 captures the whole market and earns 2,000; Firm 2 sells nothing.
    related_terms: ["bertrand-competition", "limit-pricing", "nash-equilibrium"]
    source_doc_page: 1
  - id: "1d"
    text: |
      With $MC_2 = 50$, suppose Firm 1 must pay a fixed entry cost $F$ to enter the market. What is the maximum $F$ for which Firm 1 still enters?
    solution: |
      From part (c), Firm 1's maximum post-entry profit is $\pi_1 = 2{,}000$. Firm 1 enters iff $\pi_1 - F \geq 0$:

      $$F_{\max} = 2{,}000 \text{ NIS}$$

      > [!success] Answer (d)
      > **Maximum entry cost: 2,000 NIS.** If $F > 2{,}000$, Firm 1 stays out and Firm 2 becomes the monopolist.
    related_terms: ["limit-pricing"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Bertrand with two cost regimes.** Demand $Q = 10 - P$. Firm 1: $C_1(q_1) = 6 q_1$ ($MC_1 = 6$). Firm 2: $C_2(q_2) = c q_2$ ($MC_2 = c$). Tie-breaking: if $p_1 = p_2$, all demand goes to Firm 2. Neither firm prices below its own MC.

      Find the Nash Equilibrium when $2 < c < 6$.
    solution: |
      Firm 2 is more efficient ($c < 6 = MC_1$). Firm 2's unconstrained monopoly price: $P^m_2 = (10 + c)/2$. When $c > 2$ this is $> 6 = MC_1$, so if Firm 2 set the monopoly price, Firm 1 could undercut. Firm 2 must [[Limit Pricing|limit-price]] at Firm 1's MC.

      **Limit price:** $p_2 = MC_1 = 6$. At $p_1 = p_2 = 6$ the tie rule sends all demand to Firm 2:

      $$q_1 = 0, \quad q_2 = 10 - 6 = 4, \quad \pi_1 = 0, \quad \pi_2 = (6 - c) \times 4 = 4(6 - c)$$

      > [!success] NE for $2 < c < 6$
      > $p_1^{NE} = p_2^{NE} = 6$. Firm 2 captures the market and earns $4(6 - c)$.

      > [!example] Sanity check at $c = 4$
      > $\pi_2 = 4(6 - 4) = 8$. Firm 1 can't profitably undercut (would require $p_1 < 6 = MC_1$). ✓
    related_terms: ["bertrand-competition", "limit-pricing"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Same setup as 2a but now $c < 2$. Find the Nash Equilibrium.
    solution: |
      Firm 2's unconstrained monopoly price is now $P^m_2 = (10 + c)/2 < 6 = MC_1$. If Firm 2 sets $P^m_2$, Firm 1 would have to set $p_1 < P^m_2 < MC_1$ to undercut — losing money. So Firm 2 simply acts as an unconstrained monopolist.

      $$p_2^{NE} = \frac{10 + c}{2}, \qquad q_2 = \frac{10 - c}{2}$$

      $$\pi_2 = \left(\frac{10 + c}{2} - c\right) \cdot \frac{10 - c}{2} = \left(\frac{10 - c}{2}\right)^2$$

      Firm 1 sets any $p_1 \geq 6$ and sells nothing.

      > [!success] NE for $c < 2$
      > Firm 2 monopolises at $p_2 = (10 + c)/2$ with quantity $(10 - c)/2$ and profit $\left((10 - c)/2\right)^2$. Firm 1 earns zero.

      > [!warning] Why the cutoff at $c = 2$?
      > At $c = 2$: $P^m_2 = 6 = MC_1$ — the boundary where Firm 2's monopoly price equals Firm 1's MC. Above 2 → limit-price. Below 2 → free monopoly.

      | Condition | $p_1^{NE}$ | $p_2^{NE}$ | $q_2$ | $\pi_2$ |
      |---|---|---|---|---|
      | $2 < c < 6$ | $6$ | $6$ | $4$ | $4(6 - c)$ |
      | $c < 2$ | $\geq 6$ | $(10 + c)/2$ | $(10 - c)/2$ | $((10 - c)/2)^2$ |
    related_terms: ["bertrand-competition"]
    source_doc_page: 2
  - id: "3a"
    text: |
      **Monopolistic competition (differentiated Bertrand).** Two firms with demand curves $q_1 = 168 - 2 P_1 + P_2$ and $q_2 = 168 - 2 P_2 + P_1$. Zero production costs. Firms set prices simultaneously.

      Find the Nash Equilibrium prices, quantities, and profits.
    solution: |
      Each firm maximises its own profit taking the rival's price as fixed — derive [[Best Response Function|best-response functions]] and intersect.

      **Firm 1's FOC:** $\pi_1 = P_1 (168 - 2 P_1 + P_2)$. $\partial \pi_1 / \partial P_1 = 168 - 4 P_1 + P_2 = 0$ ⇒
      $$P_1 = \frac{168 + P_2}{4}$$

      **Firm 2's FOC (by symmetry):** $P_2 = (168 + P_1)/4$.

      **Solve simultaneously:**

      $$P_1 = \frac{168 + (168 + P_1)/4}{4} = 42 + 10.5 + \frac{P_1}{16}$$
      $$\frac{15}{16} P_1 = 52.5 \;\Rightarrow\; P_1^* = 56$$

      By symmetry $P_2^* = 56$. Then $q_1 = q_2 = 168 - 112 + 56 = 112$ and $\pi_1 = \pi_2 = 56 \times 112 = \mathbf{6{,}272}$.

      > [!success] Nash Equilibrium
      > $P_1 = P_2 = 56$, $q_1 = q_2 = 112$, $\pi_1 = \pi_2 = 6{,}272$.
    related_terms: ["monopolistic-competition", "best-response-function", "nash-equilibrium"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Would a merger of the two firms (creating a multi-product monopoly) benefit both? Show the price, quantity, and profit comparison.
    solution: |
      The merged firm maximises joint profit $\Pi = \pi_1 + \pi_2 = P_1(168 - 2 P_1 + P_2) + P_2(168 - 2 P_2 + P_1)$.

      **By symmetry $P_1 = P_2 = P$:** $q_1 = q_2 = 168 - P$. So $\Pi = 2 P (168 - P) = 336 P - 2 P^2$.

      **FOC:** $336 - 4 P = 0 \Rightarrow P^M = 84$. Then $q_i = 168 - 84 = 84$ and $\Pi = 2 \cdot 84 \cdot 84 = \mathbf{14{,}112}$, so each firm gets $7{,}056$.

      | Scenario | Price per firm | Quantity per firm | Profit per firm |
      |---|---|---|---|
      | Nash (compete) | 56 | 112 | 6,272 |
      | Merged monopoly | 84 | 84 | **7,056** |

      > [!success] Conclusion
      > **Yes — the merger is mutually beneficial.** Each firm earns 7,056 under monopoly vs 6,272 under competition (gain of 784 each). The merger internalises the positive cross-price externality (raising one firm's price *helps* the other) that competing firms neglect.

      > [!warning] Why competing firms underprice
      > Raising $P_1$ pushes some consumers to Firm 2 — a *benefit* to Firm 2 that Firm 1 ignores. Each firm acts as if it bore the full cost of higher prices but received none of the benefit. The monopolist sees both sides and prices higher.
    related_terms: ["monopolistic-competition", "vertical-integration"]
    source_doc_page: 2
  - id: "4a"
    text: |
      **Price competition with complementary goods (the road problem).** Two firms each charge a toll for a segment of a road. Demand for completing the trip: $Q = 10 - P$ where $P = p_1 + p_2$. Zero costs. Firms set tolls simultaneously.

      Find the Nash Equilibrium tolls, total price, quantity, and profits.
    solution: |
      Apply the [[N-complementary firms]] logic with $N = 2$. Each firm maximises $\pi_i = p_i (10 - p_1 - p_2)$.

      **Firm 1's FOC:** $\partial \pi_1 / \partial p_1 = 10 - 2 p_1 - p_2 = 0 \Rightarrow p_1 = (10 - p_2)/2$. By symmetry $p_2 = (10 - p_1)/2$.

      **Solving simultaneously:**

      $$p_1 = \frac{10 - (10 - p_1)/2}{2} = \frac{10 + p_1}{4} \Rightarrow 4 p_1 = 10 + p_1 \Rightarrow p_1^* = \frac{10}{3}$$

      Symmetric: $p_2^* = 10/3$.

      $$P^* = \frac{20}{3} \approx 6.67, \quad Q^* = \frac{10}{3} \approx 3.33, \quad \pi_1 = \pi_2 = \frac{100}{9} \approx 11.11$$

      > [!success] NE for two complementary firms
      > $p_1 = p_2 = 10/3$. Total price $20/3$. Each firm earns $100/9$.

      > [!note] Comparison to a single road owner
      > A single integrated owner sets $P^M = 5$, $Q^M = 5$, $\pi^M = 25$ — well above the duopoly's combined $200/9 \approx 22.2$. The firms collectively destroy value via [[Double Marginalization]].
    related_terms: ["double-marginalization", "perfect-complements", "complementary-monopolist"]
    source_doc_page: 3
  - id: "4b"
    text: |
      Same road setup as 4a, but Firm 1 owns 75% of the road and Firm 2 owns 25%. Does the ownership split change the Nash Equilibrium?
    solution: |
      Each firm still sets its own toll independently to maximise its own revenue over the *same* total demand. The objective functions are unchanged:

      $$\pi_1 = p_1 (10 - p_1 - p_2), \qquad \pi_2 = p_2 (10 - p_1 - p_2)$$

      The best-response functions and the equilibrium are identical to part (a): $p_1 = p_2 = 10/3$, profits $100/9$ each.

      > [!success] Answer
      > **No — ownership fraction doesn't matter for equilibrium pricing.** What matters is the *number of independent decision-makers*, not how much of the road each owns. Two firms = two independent tolls = the part-(a) result.
    related_terms: ["double-marginalization", "perfect-complements"]
    source_doc_page: 3
  - id: "4c"
    text: |
      Same road setup, but now $N$ firms each own $1/N$ of the road. Derive the symmetric Nash Equilibrium and discuss what happens as $N \to \infty$.
    solution: |
      Firm $i$ maximises $\pi_i = p_i (10 - \sum_j p_j)$. FOC: $10 - p_i - \sum_{j \neq i} p_j - p_i = 0 \Rightarrow 10 = 2 p_i + \sum_{j \neq i} p_j$.

      **By symmetry $p_i = p^*$:** $10 = 2 p^* + (N - 1) p^* = (N + 1) p^*$.

      $$p^* = \frac{10}{N + 1}, \qquad P^* = N p^* = \frac{10 N}{N + 1}, \qquad Q^* = \frac{10}{N + 1}, \qquad \pi_i = \frac{100}{(N + 1)^2}$$

      | $N$ | $p^*$ per firm | Total $P^*$ | $Q^*$ | $\pi_i$ | Total $\Pi$ |
      |---|---|---|---|---|---|
      | 1 (integrated) | 5 | 5 | 5 | 25 | 25 |
      | 2 | 3.33 | 6.67 | 3.33 | 11.11 | 22.22 |
      | 3 | 2.5 | 7.5 | 2.5 | 6.25 | 18.75 |
      | 5 | 1.67 | 8.33 | 1.67 | 2.78 | 13.89 |
      | $N$ | $10/(N+1)$ | $10N/(N+1)$ | $10/(N+1)$ | $100/(N+1)^2$ | $100N/(N+1)^2$ |
      | $\to \infty$ | $\to 0$ | $\to 10$ | $\to 0$ | $\to 0$ | $\to 0$ |

      > [!success] Conclusion
      > As $N$ grows, **total price climbs toward 10** (the choke price) and **quantity falls toward zero** — the market unravels. This is the [[Double Marginalization]] tragedy: each firm independently marks up a complementary good, ignoring the negative [[Pricing Externality]] it imposes on the others.

      > [!warning] Opposite of substitute-goods competition
      > With substitutes (Cournot/Bertrand), more firms → price falls → consumers gain. With complements, more firms → price *rises* → both consumers AND firms lose. [[Vertical Integration]] reverses the outcome.
    related_terms: ["double-marginalization", "perfect-complements", "comparative-statics", "vertical-integration"]
    source_doc_page: 3
---

> [!abstract] Toolkit used in this assignment
> 1. **[[Bertrand Competition]]:** homogeneous goods, simultaneous prices, consumers buy from the cheapest. Symmetric → $P = MC$. Asymmetric costs → efficient firm [[Limit Pricing|limit-prices]] at the rival's MC.
> 2. **[[Limit Pricing]]:** charge just enough to deter entry. Only worth doing when the monopoly price would otherwise admit a rival.
> 3. **[[Monopolistic Competition]]:** differentiated demand, simultaneous prices. Derive [[Best Response Function|best responses]] and intersect.
> 4. **[[Double Marginalization]] / N-complementary firms:** more firms → higher total price, lower quantity, lower industry profit. The opposite of substitute-goods competition.
