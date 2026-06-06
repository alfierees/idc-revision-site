---
title: "EX-4"
subject: micro
tags:
  - microeconomics
  - assignment-solution
  - monopoly
  - elasticity
  - lerner-index
  - revenue-maximisation
  - lump-sum-tax
  - per-unit-tax
  - tax-incidence
source_doc: /papers/micro/ex-4-micro-3.docx
ai_drafted: true
questions:
  - id: "1a"
    text: |
      For parts (a) and (b) assume that the monopolist's marginal cost is positive at all levels of output.

      When a monopolist operates in the inelastic region of the market demand curve, it can always increase profit by producing less output. Is this statement true or false? Explain.
    source_doc_page: 1
    related_terms:
      - lerner-index
    solution: |
      **Claim:** *"In the inelastic region, the monopolist can always raise profit by producing **less**."*

      **Recall the link between MR and elasticity:**

      $$MR = P\left(1 - \frac{1}{|E|}\right)$$

      In the **inelastic region** $|E| < 1$, so $1/|E| > 1$, which gives:

      $$MR < 0$$

      Since $MC > 0$, we have $MR < 0 < MC$, i.e. **$MR < MC$ everywhere in the inelastic region**.

      **Marginal logic:** producing one more unit changes profit by $MR - MC$. With $MR - MC < 0$, expanding output **destroys** profit. Equivalently, cutting output **raises** profit until the firm exits the inelastic region (i.e. reaches $MR = 0$).

      > [!success] Answer (a)
      > **TRUE.** In the inelastic region $MR < 0 < MC$, so $MR < MC$ at every $Q$. Producing less always increases profit (it saves more on costs than it loses in revenue).
  - id: "1b"
    text: |
      When a monopolist operates in the elastic region of the market demand curve, it can always increase profit by producing more output. Is this statement true or false? Explain.
    source_doc_page: 1
    related_terms:
      - lerner-index
    solution: |
      **Claim:** *"In the elastic region, the monopolist can always raise profit by producing **more**."*

      In the **elastic region** $|E| > 1$, so $MR > 0$. But "$MR > 0$" is **not** the same as "$MR > MC$" — and only $MR > MC$ tells us to expand.

      **The decisive observation:** the profit-maximising point $Q^*$ (where $MR = MC$) **always lies in the elastic region** (because at $Q$ where $|E|\le 1$ we have $MR\le 0 < MC$). So the elastic region splits into two sub-regions:

      | Where you are | Sign of $MR - MC$ | What raises profit |
      |---|---|---|
      | Elastic, $Q < Q^*$ | $MR > MC$ | Produce **more** ✓ |
      | Elastic, $Q > Q^*$ (but still elastic) | $MR < MC$ | Produce **less** ✗ |

      So if you're already past the optimum but still in the elastic region, producing more reduces profit. The "always" makes the statement fail.

      > [!success] Answer (b)
      > **FALSE.** Being in the elastic region only tells us $MR > 0$, not $MR > MC$. For any $Q$ between $Q^*$ and the unit-elastic point, $MR < MC$ and producing more *reduces* profit. The correct rule is "produce more iff $MR > MC$" — not "produce more whenever demand is elastic."

      > [!tip] One-line summary of (a) + (b)
      > A profit-maximising monopolist always picks $Q^*$ in the **elastic** region — but the converse ("any point in the elastic region tells us to expand") is wrong.
  - id: "1c"
    text: |
      Suppose Microsoft has a monopoly in the market for operating systems in Mexico. During 2006 it faces the market demand curve $P = 100 - 10Q$, where $Q$ represents millions of operating systems sold per year.

      Suppose you know nothing about Microsoft's production costs. Assuming Microsoft behaves as a profit-maximizing monopolist, an economist predicts that the firm would never sell more than 5 million operating systems in Mexico in 2006. Is this prediction correct or incorrect? Justify your answer.
    source_doc_page: 1
    related_terms:
      - lerner-index
    solution: |
      **Demand:** $P = 100 - 10Q$ (with $Q$ in millions of OS sold per year).
      **Claim by the economist:** Microsoft will **never sell more than 5 million** units in 2006.

      **Step 1 — Find the marginal revenue.** Using the linear-demand shortcut:

      $$MR = 100 - 20Q$$

      **Step 2 — Find where $MR = 0$.** Below this $Q$ demand is elastic; above it is inelastic.

      $$100 - 20Q = 0 \implies Q = 5 \text{ (million)}$$

      **Step 3 — Apply the Q1(a) result.** For any $Q > 5$, we are in the inelastic region, so $MR < 0$. Since the firm's MC is non-negative (we know nothing precise about it, but costs cannot be negative), we have $MR < MC$, so the firm would always be better off producing less.

      Therefore a profit-maximising monopolist **never operates with $Q > 5$**, regardless of what its cost function looks like.

      > [!success] Answer (c)
      > **The prediction is correct.** A profit-maximising monopolist always operates in the elastic part of the demand curve, which here is $Q \le 5$ million. Even without knowing Microsoft's cost function, we can rule out $Q > 5$ because $MR < 0$ there and $MC \ge 0$.
  - id: "1d"
    text: |
      Calculate the Lerner Index for a monopolistic firm when: $MC = c$, and the price elasticity of demand is $|e| = 2$.
    source_doc_page: 1
    related_terms:
      - lerner-index
    solution: |
      **The pricing rule of thumb** for a monopolist (from $MR = MC$):

      $$\frac{P - MC}{P} = \frac{1}{|E|}$$

      Plug in $|E| = 2$:

      $$\boxed{L = \frac{P - MC}{P} = \frac{1}{2} = 0.5}$$

      > [!success] Answer (d)
      > **Lerner Index = 0.5.** The firm marks price up to twice its marginal cost: $P = 2 \cdot MC = 2c$. (Check: $L = (2c - c)/2c = 1/2$ ✓.)

      > [!info] Reading the index
      > $L \to 0$ → no monopoly power (perfect competition). $L \to 1$ → maximum monopoly power. $L = 0.5$ is sizeable market power, consistent with $|E| = 2$ (relatively few substitutes).
  - id: "2a"
    text: |
      The owner of the Los Angeles Dodgers commissioned a study showing that the demand for stadium seats (per game) is: $P = 40 - 0.5Q$, where $P$ is the average ticket price (in dollars) and $Q$ is the number of seats sold (in thousands). Dodger Stadium has a maximum capacity of 56,000 seats per game. The current ticket price is \$10 per seat.

      (For simplicity, assume that all seats are identical. In reality, the same analysis could be applied separately to each seating category.)

      How much revenue does the owner earn at the current ticket price?
    source_doc_page: 1
    related_terms: []
    solution: |
      **Demand:** $P = 40 - 0.5Q$, with $P$ in dollars and $Q$ in **thousands** of seats.
      **Capacity:** 56,000 seats $\Rightarrow Q \le 56$.
      **Current price:** $P = \$10$.
      **Costs:** treated as fixed (we maximise revenue, not profit).

      **Step 1 — How many seats would consumers buy at \$10?**

      $$Q^d = \frac{40 - 10}{0.5} = 60 \text{ thousand}$$

      **Step 2 — Apply the capacity constraint.** Demand (60k) exceeds capacity (56k), so the stadium fills up:

      $$Q_{\text{sold}} = 56 \text{ thousand}$$

      **Step 3 — Compute revenue.**

      $$TR = P \cdot Q = 10 \times 56{,}000 = \boxed{\$560{,}000 \text{ per game}}$$

      > [!success] Answer (a)
      > Revenue at the current \$10 ticket price = **\$560,000 per game** (every seat is sold; demand at this price exceeds capacity).
  - id: "2b"
    text: |
      Suppose the owner's primary objective is to maximize revenue. At the current price, are tickets overpriced or underpriced?
    source_doc_page: 1
    related_terms: []
    solution: |
      **Revenue-maximising rule:** Ignoring capacity and costs, revenue is maximised where $MR = 0$.

      **Step 1 — Total and marginal revenue.**

      $$TR(Q) = (40 - 0.5Q)Q = 40Q - 0.5Q^2$$
      $$MR(Q) = 40 - Q$$

      **Step 2 — Set $MR = 0$.**

      $$40 - Q = 0 \implies Q^{rev} = 40 \text{ thousand}$$

      **Step 3 — Read price off demand.**

      $$P^{rev} = 40 - 0.5(40) = \$20$$

      **Step 4 — Compare.** $P^{rev} = \$20$ but the current price is only \$10.

      $$\$10 < \$20 \implies \text{tickets are } \textbf{UNDERPRICED}$$

      > [!success] Answer (b)
      > **Underpriced.** The revenue-maximising price is **\$20**, but the owner is charging \$10. Doubling the price reduces $Q$ from 56k (capacity) to 40k, but the revenue rises (see part c).

      > [!tip] Intuition
      > At \$10 the team is sitting on the **inelastic side of the demand curve** — every \$1 price increase loses fewer % of seats than the % gain in price. Raising the price is a money pump until $|E| = 1$ at $P = 20$.
  - id: "2c"
    text: |
      The owner offers you 10% of any increase in revenue you can generate during the coming season. Assuming that the only decision variable is the ticket price, how much could you expect to earn per game?
    source_doc_page: 1
    related_terms: []
    solution: |
      **Step 1 — Set the new ticket price.** The owner wants to maximise revenue, so charge $P = \$20$.

      **Step 2 — Compute new revenue.** At $P = 20$, $Q = 40$ thousand (well below the 56k capacity, so capacity does **not** bind):

      $$TR_{\text{new}} = 20 \times 40{,}000 = \$800{,}000$$

      **Step 3 — Compute the increase.**

      $$\Delta TR = 800{,}000 - 560{,}000 = \$240{,}000 \text{ per game}$$

      **Step 4 — Take your 10%.**

      $$\text{Your fee} = 0.10 \times 240{,}000 = \boxed{\$24{,}000 \text{ per game}}$$

      > [!success] Answer (c)
      > By recommending the price increase from \$10 → \$20, revenue rises by **\$240,000 per game** and you earn **\$24,000 per game**.
  - id: "2d"
    text: |
      From the owner's perspective, is there an optimal number of empty seats per game? If so, what is that number?
    source_doc_page: 1
    related_terms:
      - price-discrimination
    solution: |
      At the revenue-maximising price ($P = \$20$), the owner **wants** to sell only 40k of the 56k seats, even though more people are willing to come at lower prices.

      $$\text{Empty seats} = 56{,}000 - 40{,}000 = \boxed{16{,}000 \text{ per game}}$$

      > [!success] Answer (d)
      > **Yes — the optimal number of empty seats is 16,000.** Filling those last 16k seats would require dropping the price below \$20, which costs more in lost revenue from the 40k inframarginal buyers than it gains from the new attendees. Empty seats are the *price* of charging the revenue-maximising price.

      > [!info] Why this is counter-intuitive
      > Stadiums look "wasteful" with empty rows — but a single uniform ticket price, combined with a downward-sloping demand curve, makes some empty seats inevitable when the goal is revenue. This is exactly the kind of inefficiency [[Price Discrimination]] (student tickets, dynamic pricing, last-minute sales) tries to mop up.
  - id: "3a"
    text: |
      A firm's marginal cost is given by: $MC = 50 + 10q$. The demand curve faced by the firm is: $P = 1300 - 5q$.

      Find the profit-maximizing price and quantity.
    source_doc_page: 1
    related_terms: []
    solution: |
      **Step 1 — Marginal revenue (linear demand shortcut).**

      $$MR = 1300 - 10q$$

      **Step 2 — Set $MR = MC$.**

      $$1300 - 10q = 50 + 10q$$
      $$1250 = 20q$$
      $$\boxed{q^* = 62.5}$$

      **Step 3 — Read the price off the demand curve.**

      $$P^* = 1300 - 5(62.5) = 1300 - 312.5 = \boxed{\$987.50}$$

      > [!success] Answer (a)
      > $q^* = 62.5$, $P^* = \$987.50$.
  - id: "3b"
    text: |
      Suppose the government imposes a lump-sum tax of 5,000, which must be paid as long as the firm produces a positive level of output (the tax is zero if the firm produces nothing). What is the new profit-maximizing price and quantity?
    source_doc_page: 1
    related_terms:
      - lump-sum-tax
    solution: |
      A **[[Lump-Sum Tax]]** is paid as a single fixed amount whenever the firm produces a positive output. Crucially:

      $$\frac{d(\text{Lump-sum tax})}{dq} = 0$$

      So the tax does **not** enter the marginal calculation. $MR = MC$ is unchanged, and the optimal $q$ and $P$ are identical to part (a).

      **Sanity check — does the firm still want to produce?** With $FC = 0$ assumed:

      $$\Pi^*_{\text{pre-tax}} = TR - TC = (987.5)(62.5) - \left[50(62.5) + 5(62.5)^2\right] = 61{,}718.75 - 22{,}656.25 = \$39{,}062.50$$

      After the tax: $\Pi = 39{,}062.50 - 5{,}000 = 34{,}062.50 > 0$ — so the firm earns **\$34,062.50** and is still strictly better off producing than shutting down.

      > [!success] Answer (b)
      > $q = 62.5$, $P = \$987.50$ (**unchanged**). A lump-sum tax acts like a fixed cost: it reduces profit by exactly the tax amount but leaves the marginal trade-off untouched, so the optimal price and quantity don't move.

      > [!tip] When a lump-sum tax *would* matter
      > If the tax were so large that profits became negative, the firm would shut down ($q = 0$). The threshold here is any lump-sum tax above \$39,062.50.
  - id: "3c"
    text: |
      Instead of the lump-sum tax, suppose the government imposes a per-unit tax of 300. What is the new profit-maximizing price and quantity?
    source_doc_page: 1
    related_terms:
      - per-unit-tax
    solution: |
      A **[[Per-Unit Tax]]** is paid for *every* unit produced, so it shifts marginal cost up by exactly the tax rate $t$:

      $$MC_{\text{new}}(q) = 50 + 10q + 300 = 350 + 10q$$

      **Set $MR = MC_{\text{new}}$:**

      $$1300 - 10q = 350 + 10q$$
      $$950 = 20q$$
      $$\boxed{q^{**} = 47.5}$$

      **Read the price off demand:**

      $$P^{**} = 1300 - 5(47.5) = 1300 - 237.5 = \boxed{\$1{,}062.50}$$

      > [!success] Answer (c)
      > $q^{**} = 47.5$, $P^{**} = \$1{,}062.50$.

      > [!info] Tax incidence (who really pays?)
      > Price rose by $\Delta P = 1{,}062.5 - 987.5 = \$75$ — **only 25% of the \$300 tax is passed on to consumers.** The firm absorbs the remaining \$225 per unit through a lower margin.
      >
      > The general formula for a monopolist with linear demand (slope $b$) and linear MC (slope $m$) is
      > $$\frac{\Delta P}{\Delta t} = \frac{b}{2b + m}.$$
      > Here $b = 5$, $m = 10$, so $\Delta P/\Delta t = 5/20 = 0.25$. ✓
---
