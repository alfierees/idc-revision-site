---
title: "EX-9"
subject: micro
source_doc: /papers/micro/ex-9-micro-3.docx
tags:
  - microeconomics
  - assignment-solution
  - vertical-relations
  - double-marginalization
  - two-part-tariff
  - franchise-contract
  - perfect-competition
  - long-run-equilibrium
  - free-entry
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Vertical Relations and Double Marginalization.** An international monopolist produces at zero marginal cost ($MC = 0$). Demand in a country is $P = 200 - Q$.

      Suppose the monopolist sells **directly** to consumers. Calculate the equilibrium quantity, price, and profit.
    solution: |
      The textbook integrated monopoly. Set $MR = MC$:

      $$\pi = (200-Q)Q, \qquad MR = 200 - 2Q = 0 \implies \boxed{Q = 100}$$

      $$P = 200 - 100 = \boxed{100}, \qquad \pi = P\cdot Q = 100 \times 100 = \boxed{10{,}000}$$

      > [!success] Answer (A)
      > $Q^* = 100,\quad P^* = 100,\quad \pi^* = 10{,}000.$
    related_terms: ["double-marginalization", "vertical-relations"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Same setup ($MC = 0$, $P = 200 - Q$). Now the monopolist sells through **one exclusive distributor**. Timing: the monopolist sets a wholesale price $w$; then the distributor chooses how many units to sell to consumers.

      Calculate the wholesale price $w$, final market price, quantity sold, the monopolist's profit, and the distributor's profit.
    solution: |
      Two decision-makers — solve by **backward induction** (the distributor moves last).

      **Stage 2 — the distributor.** It buys at $w$ (so its marginal cost is $w$) and resells facing $P = 200 - Q$:

      $$\max_Q (200 - Q - w)Q \;\Rightarrow\; 200 - 2Q - w = 0 \implies Q = 100 - \tfrac{w}{2}$$

      **Stage 1 — the monopolist.** With $MC = 0$ it anticipates $Q(w)$ and maximises wholesale revenue:

      $$\max_w \; w\left(100 - \tfrac{w}{2}\right) \;\Rightarrow\; 100 - w = 0 \implies \boxed{w = 100}$$

      **Plug back:**

      $$Q = 100 - \tfrac{100}{2} = \boxed{50}, \qquad P = 200 - 50 = \boxed{150}$$
      $$\pi_{\text{monopolist}} = wQ = 100 \times 50 = \boxed{5{,}000}, \qquad \pi_{\text{distributor}} = (P-w)Q = 50\times 50 = \boxed{2{,}500}$$

      ![](/images/micro/ex9-q1-double-marginalisation.png)

      > [!success] Answer (B)
      > $w = 100,\ P = 150,\ Q = 50.$ Monopolist $= 5{,}000$, distributor $= 2{,}500$, **combined $= 7{,}500$.**

      > [!warning] Double marginalisation — the whole point
      > Combined profit is only **7,500 vs 10,000** under direct sale, and consumers pay **more** ($150 > 100$) for **less** ($50 < 100$). Each firm marks up over its own marginal cost and neither internalises the demand its markup destroys for the other, so the chain overshoots even the monopoly price.
    related_terms: ["double-marginalization", "vertical-relations"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Is there an alternative arrangement that could improve the profit of at least one party **without reducing** the profit of the other? Explain.
    solution: |
      **Yes.** A **[[Two-Part Tariff]]** (franchise) contract eliminates double marginalisation. The producer sets the wholesale price to its marginal cost, $w = MC = 0$, plus a **fixed fee** $F$. Facing $w = 0$, the distributor behaves like the integrated monopolist — selling $Q = 100$ at $P = 100$ for the full $10{,}000$ — and the fixed fee redistributes that surplus.

      The pie rises from $7{,}500$ to $10{,}000$; the extra $2{,}500$ can be split so at least one party is strictly better off and neither is worse off (a Pareto improvement). E.g. $F = 7{,}000$ leaves the producer at $7{,}000$ and the distributor at $3{,}000$ — both better off.

      > [!tip] Equivalent remedies
      > [[Vertical Integration]] (merging the two firms) achieves the same $10{,}000$, as does resale price maintenance ($P = 100$). All three collapse the two markups into one.
    related_terms: ["two-part-tariff", "vertical-integration", "double-marginalization"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Vertical Relations: Conceptual.** A manufacturer sells through an independent retailer and chooses between a **wholesale-price contract** (price $w$ per unit) and a **franchise contract** (fixed fee $F$ plus $w = MC$). No calculations required.

      Which contract is more likely to maximise total industry profit?
    solution: |
      The **franchise contract**. Setting $w = MC$ removes the retailer's input markup, so the retailer faces true marginal cost and chooses the quantity an *integrated monopolist* would — the joint-profit-maximising quantity. The wholesale-price contract leaves $w > MC$, producing [[Double Marginalization]] and a smaller total pie.
    related_terms: ["two-part-tariff", "double-marginalization", "vertical-relations"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Which contract gives the manufacturer greater flexibility in extracting profit?
    solution: |
      The **franchise contract**. It gives the manufacturer **two instruments** — the per-unit price $w$ (to control quantity) and the fixed fee $F$ (to extract surplus). Set $w = MC$ for efficiency, then use $F$ to skim the retailer's profit, capturing almost the *entire* monopoly profit. The wholesale-price contract has only one instrument, $w$, which must do both jobs at once.
    related_terms: ["two-part-tariff"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Explain the role of double marginalization.
    solution: |
      [[Double Marginalization]] is the inefficiency the franchise contract is designed to cure. When both firms have market power and each adds a markup over its own marginal cost, the final price is **higher** and quantity **lower** than the integrated optimum — hurting consumers *and* shrinking joint profit. A wholesale-price contract ($w > MC$) creates exactly this stacking; a franchise contract ($w = MC$) eliminates the second markup so the chain prices as one firm, and the fixed fee redistributes the recovered surplus.

      > [!note] Why this is Q1 in words
      > The franchise fee $F$ here is the $F \le 10{,}000$ of Q1C; the "double markup" is the $7{,}500 < 10{,}000$ gap of Q1B.
    related_terms: ["double-marginalization", "two-part-tariff"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Perfect Competition: Long-Term Rental vs. Airbnb.** Danny and Yossi own identical apartments. Danny furnishes his and rents to tourists via Airbnb; Yossi rents his empty to long-term tenants. A long-term rental is let empty; an Airbnb unit must be furnished.

      How can the difference between Danny's and Yossi's choices be explained?
    solution: |
      In a competitive market with [[Free Entry]] the two activities must offer the **same net return** — owners arbitrage between them. If furnished Airbnb earned more *net of the furniture cost*, every owner would switch, driving Airbnb rates down (and/or long-term rents up) until the advantage vanished; the reverse if long-term were better. So in equilibrium Danny and Yossi are **indifferent**: their choices look different but yield identical net returns. The observed difference is sustained precisely because the market has equalised the *net* payoff, not the gross one.
    related_terms: ["free-entry", "long-run-equilibrium", "perfect-competition"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Assume all apartments are identical, furniture wears out completely within one year and must be replaced, and the annual cost of furniture is **10,000 NIS**. What must be the difference between annual Airbnb income and annual long-term rental income in long-run equilibrium if both types coexist?
    solution: |
      The annual **Airbnb income must exceed the long-term rental income by exactly 10,000 NIS** — the annual furniture cost.

      Let $R_{LT}$ be the annual long-term rent and $R_{AB}$ the annual Airbnb income. Airbnb owners bear the extra $10{,}000$, so their net return is $R_{AB} - 10{,}000$. For both types to coexist, net returns must be equal ([[Zero-Profit Condition|no-arbitrage]]):

      $$R_{AB} - 10{,}000 = R_{LT} \implies \boxed{R_{AB} - R_{LT} = 10{,}000 \text{ NIS}}$$

      ![](/images/micro/ex9-q3-arbitrage.png)

      > [!tip] This is a "compensating differential"
      > The higher gross Airbnb income isn't a free lunch — it exactly offsets a real cost. Whenever two options coexist in a competitive long-run equilibrium, any difference in gross returns equals the difference in costs.
    related_terms: ["zero-profit-condition", "free-entry", "long-run-equilibrium"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Perfect Competition.** Inverse industry demand is $P = \dfrac{1000}{X}$ ($X$ = total output). Each firm's cost is $C(x) = 12.5 + 0.5x^2$, so $MC(x) = x$, $AC(x) = \dfrac{12.5}{x} + 0.5x$, $AVC(x) = 0.5x$. There are **10 identical firms** in the short run.

      Find the short-run equilibrium price, each firm's output, total industry output, and each firm's profit.
    solution: |
      > [!note] The insight that unlocks Q4
      > $P = 1000/X$ means total revenue $P\cdot X = 1000$ is constant — unit-elastic demand. A [[Price Taker|price-taking]] firm sets $P = MC = x$, so each firm's output equals the price, and with $n$ firms $X = nP$.

      **Firm supply:** $P = MC \Rightarrow x = P$. **Industry supply:** $X = 10x = 10P$. **Clear the market:**

      $$P = \frac{1000}{10P} = \frac{100}{P} \implies P^2 = 100 \implies \boxed{P = 10}$$

      $$x = P = \boxed{10}, \qquad X = 100, \qquad \pi_{\text{firm}} = 10(10) - \big(12.5 + 0.5(10)^2\big) = 100 - 62.5 = \boxed{37.5}$$

      ![](/images/micro/ex9-q4a-firm-market.png)

      > [!success] Answer (A)
      > $P = 10,\ x = 10,\ X = 100,\ \pi_{\text{firm}} = 37.5$ (industry profit $= 375$).

      > [!tip] Interactive — short run vs long run (covers parts b–d)
      > Here at $P = 10$ the firm makes a profit (green), so entry follows. Drag **price** down (a demand fall, part b) to see a short-run loss; cut **fixed cost** (a cost improvement, part c) to shift AC down. Long run: entry/exit drives $P$ to min AC $= 5$.

      ```graph
      type: perfect-competition-firm
      p: 10
      ```
    related_terms: ["perfect-competition", "price-taker"]
    source_doc_page: 1
  - id: "4b"
    text: |
      What happens in the short run, with the number of firms fixed, if demand **decreases**? Explain and show graphically.
    solution: |
      A fall in demand shifts the demand curve **left**. With 10 firms locked in, the **market price falls**; each firm slides **down its $MC$ curve**, producing **less**; and **profit falls** (and can turn into a loss). Firms keep producing as long as $P \ge \min AVC$ ([[Shutdown Condition]]).

      Because $AVC = 0.5x$ has $\min AVC \to 0$, the shutdown condition is essentially always satisfied — all 10 firms keep operating in the short run, just at a loss.

      ![](/images/micro/ex9-q4b-demand-decrease.png)

      > [!warning] Short run vs long run
      > Losses are tolerated in the short run because fixed costs ($12.5$) are sunk. The exit decision belongs to the long run (Part D).
    related_terms: ["shutdown-condition", "perfect-competition", "price-taker"]
    source_doc_page: 1
  - id: "4c"
    text: |
      What happens in the short run if a technological improvement reduces both marginal cost and average cost at every output level? Explain and show graphically. No calculation required.
    solution: |
      A technology that lowers both $MC$ and $AC$ shifts every firm's cost curves **down**. Each firm's $P = MC$ supply curve shifts **right/down**, so industry supply shifts **right**: the **market price falls** and **total output rises**. Each firm produces **more**, and because costs are lower, **profit per firm rises**.

      ![](/images/micro/ex9-q4c-tech-improvement.png)

      > [!tip] Same symptom, opposite cause
      > Both a demand fall and a cost cut lower the price. But a demand fall makes firms **worse off** (less output, lower profit); a cost cut makes them **better off** (more output, higher profit).
    related_terms: ["perfect-competition"]
    source_doc_page: 1
  - id: "4d"
    text: |
      Compare the **long-run** outcomes following a demand decrease and a technological improvement. Explain and show graphically. No calculation required.
    solution: |
      In the long run [[Free Entry]]/exit drives economic profit to **zero**, so price is pinned to **minimum average cost** and each firm produces at its [[Minimum Efficient Scale|efficient scale]]:

      $$AC'(x) = -\frac{12.5}{x^2} + 0.5 = 0 \implies x^* = 5, \qquad \min AC = \frac{12.5}{5} + 0.5(5) = 5.$$

      Long-run supply is horizontal at $P = 5$ (constant-cost industry); each firm produces $x^* = 5$, total output $X = 1000/5 = 200$, and the number of firms is $200/5 = \mathbf{40}$ — entry from the initial 10, since short-run profit $37.5 > 0$ attracts firms.

      ![](/images/micro/ex9-q4d-longrun-comparison.png)

      > [!success] Answer (D)
      > - **Demand decrease:** firms **exit** until survivors earn zero profit; the price **returns to $\min AC = 5$** (unchanged) — only the number of firms and total output fall.
      > - **Technological improvement:** the new lower $\min AC'$ becomes the long-run price, so the price **falls permanently**; total output rises and firm count adjusts.
      > - **Contrast:** a demand shock changes quantity and firm count but leaves the long-run price unchanged; a cost shock lowers the long-run price.

      > [!warning] The classic exam trap
      > "Demand fell, so the long-run price must be lower." **Wrong.** With free entry the long-run price is set entirely by the cost curves ($\min AC$), not by demand. Demand decides *how many* firms and *how much* output — never the long-run price (in a constant-cost industry).
    related_terms: ["free-entry", "minimum-efficient-scale", "long-run-equilibrium", "perfect-competition"]
    source_doc_page: 1
---

> [!info] Core ideas for this assignment
> 1. **[[Vertical Relations]] & [[Double Marginalization]]:** when an upstream and a downstream firm *each* have market power, each adds its own markup. The markups stack, so the final price is too high and quantity too low — joint profit falls below the integrated monopoly.
> 2. **The fix — [[Two-Part Tariff]] / [[Vertical Integration]]:** set the wholesale price to marginal cost (kills the second markup) and recover lost profit via a fixed fee, or merge the firms.
> 3. **[[Perfect Competition]], short run:** firms are [[Price Taker|price takers]] producing where $P = MC$; a firm keeps producing while $P \ge \min AVC$ ([[Shutdown Condition]]).
> 4. **[[Perfect Competition]], long run:** [[Free Entry]]/exit drives profit to **zero**, pinning price to **minimum average cost** with each firm at its [[Minimum Efficient Scale|efficient scale]].
