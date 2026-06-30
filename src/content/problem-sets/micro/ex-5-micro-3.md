---
title: "EX-5"
subject: micro
tags:
  - microeconomics
  - assignment-solution
  - price-discrimination
  - third-degree-price-discrimination
  - two-part-tariff
  - monopoly
  - consumer-surplus
  - screening
  - information-rent
  - constant-elasticity
source_doc: /papers/micro/ex-5-micro-3.docx
ai_drafted: true
questions:
  - id: "1a"
    source_doc_page: 1
    related_terms:
      - constant-elasticity-demand
      - lerner-index
      - price-discrimination
    text: |
      A monthly magazine sells 1,000 copies each month at a price of \$40 a copy. The magazine's costs are \$16 per unit plus a fixed cost of \$10,000 a month. The firm believes that the elasticity of demand is constant at 5.

      Does the firm maximize profit in this case? If not, what price should the firm charge if it wishes to maximize profit? By how much would its profit increase in this case?
    solution: |
      **Setup:** Monthly magazine · $Q = 1{,}000$ copies at $P = \$40$ · $MC = \$16$ · $FC = \$10{,}000$/month · $|E| = 5$ (constant)

      Apply the optimal monopoly pricing rule derived from $MR = MC$ combined with the [[Lerner Index]]:

      $$P^* = \frac{MC}{1 - 1/|E|} = \frac{16}{1 - \tfrac{1}{5}} = \frac{16}{\tfrac{4}{5}} = 16 \times \frac{5}{4} = \$20$$

      The current price is $\$40 \neq \$20$, so the firm is **not** profit-maximising. It should **lower** its price.

      **Finding the new quantity** with [[Constant Elasticity Demand]] $Q = k \cdot P^{-|E|}$:

      At $(P, Q) = (40, 1{,}000)$: $\quad k = 1{,}000 \times 40^5 = 1.024 \times 10^{11}$

      At $P^* = 20$:
      $$Q^* = \frac{1.024 \times 10^{11}}{20^5} = \frac{1.024 \times 10^{11}}{3.2 \times 10^6} = 32{,}000 \text{ copies}$$

      **Profit comparison:**

      | | Price | Quantity | Revenue | VC | FC | Profit |
      |---|---|---|---|---|---|---|
      | **Current** | \$40 | 1,000 | \$40,000 | \$16,000 | \$10,000 | **\$14,000** |
      | **Optimal** | \$20 | 32,000 | \$640,000 | \$512,000 | \$10,000 | **\$118,000** |
      | **Change** | −\$20 | +31,000 | — | — | — | **+\$104,000** |

      > [!success] Answer (a)
      > **No — the firm is not profit-maximising.** The optimal price is $P^* = \$20$.
      > - Optimal quantity: $Q^* = 32{,}000$ copies
      > - Profit increases by **\$104,000** (from \$14,000 → \$118,000)

      > [!tip] Intuition
      > With $|E| = 5$, demand is highly elastic — a 1% price cut raises quantity by 5%. Cutting the price from \$40 to \$20 (−50%) causes a +3,100% volume increase. The revenue gain on extra copies (\$4 margin × 31,000 extra units) swamps the margin lost on the original 1,000.

  - id: "1b"
    source_doc_page: 1
    related_terms:
      - third-degree-price-discrimination
      - constant-elasticity-demand
      - lerner-index
      - price-discrimination
    text: |
      The firm finds out that students refrain from buying the magazine because the price is too high. The firm estimates that students' elasticity of demand is constant at 9. What discount (in percentage terms) should the firm offer to students, relative to the optimal price you found in part a above?
    solution: |
      Students have higher elasticity, so [[Third-Degree Price Discrimination]] applies: charge each group its own optimal price.

      $$P^*_s = \frac{MC}{1 - 1/|E|_s} = \frac{16}{1 - \tfrac{1}{9}} = \frac{16}{\tfrac{8}{9}} = 16 \times \frac{9}{8} = \$18$$

      Discount relative to the general optimal price $P^* = \$20$:

      $$\text{Discount} = \frac{P^* - P^*_s}{P^*} = \frac{20 - 18}{20} = \boxed{10\%}$$

      > [!success] Answer (b)
      > The firm should offer students a **10% discount**: general price \$20, student price \$18.

      > [!tip] The Lerner–elasticity rule
      > $L = 1/|E|$, so more elastic buyers always get a lower markup. General market: $L = 1/5 = 20\%$. Students: $L = 1/9 \approx 11\%$. The ratio of prices equals $\dfrac{|E|_s - 1}{|E|_s} \div \dfrac{|E| - 1}{|E|}$.

  - id: "2a"
    source_doc_page: 1
    related_terms:
      - cournot-competition
      - lerner-index
    text: |
      Elizabeth Airlines is the only company that flies one route: Chicago-Honolulu. The demand for each flight on this route is: Q = 500 – P. Elizabeth's costs of running each flight is \$30,000 plus \$100 per passenger.

      What is the profit maximizing price EA will charge and how many people will be on each flight? What is EA's profit for each flight?
    solution: |
      **Setup:** Monopoly on Chicago–Honolulu · Demand: $Q = 500 - P$ (i.e. $P = 500 - Q$) · $FC = \$30{,}000$/flight · $MC = \$100$/passenger

      **Step 1 — Derive MR** using the linear-demand shortcut:
      $$MR = 500 - 2Q$$

      **Step 2 — Set $MR = MC$:**
      $$500 - 2Q = 100 \implies Q^* = 200 \text{ passengers}$$

      **Step 3 — Read price off demand:**
      $$P^* = 500 - 200 = \$300$$

      **Step 4 — Profit:**
      $$\pi = TR - TC = (300 \times 200) - (30{,}000 + 100 \times 200) = 60{,}000 - 50{,}000 = \boxed{\$10{,}000}$$

      > [!success] Answer (a)
      > $P^* = \$300$ · $Q^* = 200$ passengers · $\pi = \$10{,}000$ per flight

  - id: "2b"
    source_doc_page: 1
    related_terms:
      - lerner-index
    text: |
      Elizabeth learns that the fixed costs per flight are \$41,000 instead of \$30,000. Will she stay in Business long?
    solution: |
      Fixed costs do **not** change the marginal condition $MR = MC$, so $Q^* = 200$ and $P^* = \$300$ are unchanged.

      $$\pi = 60{,}000 - (41{,}000 + 20{,}000) = -\$1{,}000 \text{ per flight}$$

      **Short-run vs long-run logic:**

      | Decision horizon | Rule | Outcome |
      |---|---|---|
      | **Short run** | Continue if $TR \geq VC$ | $TR = \$60{,}000 \gg VC = \$20{,}000$ → **fly** |
      | **Long run** | Continue only if $\pi \geq 0$ | $\pi = -\$1{,}000 < 0$ → **exit** |

      > [!success] Answer (b)
      > EA will **not** stay in business long. She covers variable costs in the short run but earns negative economic profit — she will exit in the long run.

      > [!warning] Common mistake
      > Don't confuse the short-run shut-down condition ($TR < VC$) with long-run exit ($\pi < 0$). Fixed costs are irrelevant to the short-run operating decision — only whether revenue covers variable costs matters.

  - id: "2c"
    source_doc_page: 1
    related_terms:
      - third-degree-price-discrimination
      - price-discrimination
      - consumer-surplus
    text: |
      Elizabeth finds out that two different types of people fly to Honolulu. Type A is business people with a demand of Q_A = 260 – 0.4P. Type B is students with a demand Q_B = 240 – 0.6P. The students are easy to spot, so Elizabeth decides to charge them different prices. What price does Elizabeth charge the students? What price does Elizabeth charge the other customers? How many of each type are on each flight? What would EA's profit be for each flight? Would she stay in business? Calculate the consumer surplus of each consumer group. What is the total consumer surplus?
    solution: |
      **Demands:**
      - Type A (business): $Q_A = 260 - 0.4P \implies P_A = 650 - 2.5Q_A$
      - Type B (students): $Q_B = 240 - 0.6P \implies P_B = 400 - \tfrac{5}{3}Q_B$

      *Check consistency:* $Q_A + Q_B = (260 - 0.4P) + (240 - 0.6P) = 500 - P$ ✓

      **Profit-maximising prices** — set $MR_i = MC$ for each group independently:

      **Type A:**
      $$MR_A = 650 - 5Q_A = 100 \implies Q_A^* = 110, \quad P_A^* = 650 - 2.5(110) = \$375$$

      **Type B:**
      $$MR_B = 400 - \tfrac{10}{3}Q_B = 100 \implies Q_B^* = 90, \quad P_B^* = 400 - \tfrac{5}{3}(90) = \$250$$

      **Profit and [[Consumer Surplus]]:**

      $$TR = 375(110) + 250(90) = 41{,}250 + 22{,}500 = \$63{,}750$$
      $$TC = 30{,}000 + 100(200) = \$50{,}000$$
      $$\pi = \$13{,}750 \quad \text{(FC = \$30k)}$$
      $$\pi = \$2{,}750 \quad \text{(FC = \$41k)} > 0 \implies \textbf{stays in business!}$$

      $$CS_A = \tfrac{1}{2}(650 - 375)(110) = \tfrac{1}{2}(275)(110) = \$15{,}125$$
      $$CS_B = \tfrac{1}{2}(400 - 250)(90) = \tfrac{1}{2}(150)(90) = \$6{,}750$$
      $$CS_{\text{total}} = \$21{,}875$$

      > [!success] Answer (c)
      > | | Price | Passengers | CS |
      > |---|---|---|---|
      > | **Type A (Business)** | \$375 | 110 | \$15,125 |
      > | **Type B (Students)** | \$250 | 90 | \$6,750 |
      > | **Total** | — | 200 | **\$21,875** |
      >
      > Profit: **\$13,750** (FC = \$30k) or **\$2,750** (FC = \$41k) → **Yes, stays in business either way.**

  - id: "2d"
    source_doc_page: 1
    related_terms:
      - third-degree-price-discrimination
      - price-discrimination
      - consumer-surplus
    text: |
      Before EA started price discrimination (a), how much consumer surplus was the Type A demand getting from air travel to Honolulu? Type B? Why did the total consumer surplus decline with price discrimination, even though the total quantity sold was unchanged?
    solution: |
      **Before PD** ($P^* = \$300$ for everyone):

      At $P = \$300$: $Q_A = 260 - 0.4(300) = 140$, $Q_B = 240 - 0.6(300) = 60$, total $= 200$ ✓

      $$CS_A = \tfrac{1}{2}(650 - 300)(140) = \tfrac{1}{2}(350)(140) = \$24{,}500$$
      $$CS_B = \tfrac{1}{2}(400 - 300)(60) = \tfrac{1}{2}(100)(60) = \$3{,}000$$
      $$CS_{\text{total}} = \$27{,}500$$

      **Comparison:**

      | | CS Type A | CS Type B | Total CS | Profit |
      |---|---|---|---|---|
      | **No PD** (P = \$300) | \$24,500 | \$3,000 | **\$27,500** | \$10,000 |
      | **With PD** | \$15,125 | \$6,750 | **\$21,875** | \$13,750 |
      | **Change** | −\$9,375 | +\$3,750 | **−\$5,625** | +\$3,750 |

      > [!success] Answer (d)
      > Before PD: $CS_A = \$24{,}500$, $CS_B = \$3{,}000$, total $= \$27{,}500$.
      > Total CS **fell by \$5,625** with price discrimination, even though total quantity stayed at 200.

      > [!tip] Why does total CS fall even though Q is unchanged?
      > Price discrimination **redistributes surplus from consumers to the firm**, especially from the high-WTP group:
      > - **Type A** faces a *higher* price (\$300 → \$375): loses **\$9,375** of CS
      > - **Type B** faces a *lower* price (\$300 → \$250): gains **\$3,750** of CS
      > - **Net:** −\$9,375 + \$3,750 = −\$5,625 transferred to the firm
      >
      > The asymmetry arises because Type A has a much richer demand curve (choke price \$650 vs \$400): they have more surplus to lose when price rises. The firm exploits this by charging high-WTP consumers more — which is exactly the point of [[Third-Degree Price Discrimination]].

  - id: "3a"
    source_doc_page: 1
    related_terms:
      - two-part-tariff
      - first-degree-price-discrimination
      - price-discrimination
      - consumer-surplus
    text: |
      In a monopolistic market there are two consumers, i = 1, 2, each with a different demand function: $q_1 = 40 - 2P$, $q_2 = 20 - P$. The firm's cost function is $TC = 6Q$ where $Q = q_1 + q_2$.

      Assume that the monopoly can charge different TPT contracts for each consumer. What are the TPT fees in this case?
    solution: |
      **Setup:**
      - Consumer 1: $q_1 = 40 - 2P \implies P = 20 - \tfrac{q_1}{2}$ (choke price = 20)
      - Consumer 2: $q_2 = 20 - P \implies P = 20 - q_2$ (choke price = 20)
      - Cost function: $TC = 6Q$ where $Q = q_1 + q_2$, so $MC = 6$, $FC = 0$

      > [!info] Useful consumer surplus formulae (derive these once)
      > At any per-unit price $p$:
      > $$CS_1(p) = \tfrac{1}{2}(20 - p)(40 - 2p) = \tfrac{1}{2}(20-p) \cdot 2(20-p) = (20-p)^2$$
      > $$CS_2(p) = \tfrac{1}{2}(20 - p)(20 - p) = \tfrac{1}{2}(20-p)^2$$
      > $$\therefore CS_1(p) = 2 \cdot CS_2(p) \text{ for any } p$$
      > Consumer 1 always has exactly **twice** the surplus of Consumer 2 at any given price.

      With [[First-Degree Price Discrimination]], the firm can offer each consumer a bespoke contract. The optimal strategy: set $p_i = MC$ (maximises total surplus, no deadweight loss) and extract **all** consumer surplus as the lump-sum entry fee $T_i$.

      $$p_1^* = p_2^* = MC = 6$$

      $$q_1 = 40 - 2(6) = 28, \qquad q_2 = 20 - 6 = 14$$

      $$T_1^* = CS_1(6) = (20 - 6)^2 = 14^2 = \$196$$
      $$T_2^* = CS_2(6) = \tfrac{1}{2}(20 - 6)^2 = \tfrac{1}{2}(196) = \$98$$

      $$\pi = T_1 + T_2 + \underbrace{(p - MC)(q_1 + q_2)}_{= 0} = 196 + 98 = \boxed{\$294}$$

      > [!success] Answer (a)
      > - Contract 1: $p_1 = \$6$, $T_1 = \$196$, $q_1 = 28$
      > - Contract 2: $p_2 = \$6$, $T_2 = \$98$, $q_2 = 14$
      > - Firm profit: $\pi = \$294$
      >
      > Both consumers are left with **zero surplus** — the firm captures 100% of total surplus.

      > [!tip] Interactive — toggle parts (a)–(e)
      > Both consumers' demand (AR), MC = 6, and the fee / rent / per-unit-margin / deadweight-loss regions. Flip the parts to see how the single-contract cap (b), the value of discriminating (d), and the hidden-types menu (e) change the picture.

      ```graph
      type: two-part-tariff
      ```

  - id: "3b"
    source_doc_page: 1
    related_terms:
      - two-part-tariff
      - consumer-surplus
    text: |
      Assume now that the monopoly cannot charge different TPT contracts for each consumer. What are the TPT fees in this case?
    solution: |
      The firm must charge a single $(p, T)$ to everyone. The binding constraint is Consumer 2 (lower CS), so:

      $$T^* = CS_2(p) = \tfrac{1}{2}(20 - p)^2$$

      **Write firm profit** (both consumers participate):

      $$\pi(p) = 2T + (p - 6)(q_1 + q_2) = (20 - p)^2 + (p - 6)(60 - 3p)$$

      **Expand:**

      $$\pi(p) = (400 - 40p + p^2) + (-3p^2 + 78p - 360) = 40 + 38p - 2p^2$$

      **Maximise:**

      $$\frac{d\pi}{dp} = 38 - 4p = 0 \implies \boxed{p^* = 9.5}$$

      $$T^* = \tfrac{1}{2}(20 - 9.5)^2 = \tfrac{1}{2}(10.5)^2 = \$55.125$$

      $$q_1 = 40 - 2(9.5) = 21, \qquad q_2 = 20 - 9.5 = 10.5$$

      $$\pi = 2(55.125) + (9.5 - 6)(31.5) = 110.25 + 110.25 = \$220.50$$

      > [!note] Should the firm exclude Consumer 2?
      > If serving only Consumer 1: $\pi = (20-p)^2 + (p-6)(40-2p)$, maximised at $p = 6$ giving $\pi = \$196 < \$220.50$. Serve both. ✓

      > [!success] Answer (b)
      > - Uniform contract: $p^* = \$9.50$, $T^* = \$55.13$
      > - Consumer 1: $q_1 = 21$ · Consumer 2: $q_2 = 10.5$
      > - Firm profit: $\pi = \$220.50$
      >
      > Profit falls from \$294 (part a) to \$220.50 — the cost of being **unable to price discriminate**.

  - id: "3c"
    source_doc_page: 1
    related_terms:
      - two-part-tariff
    text: |
      How would your answer to b change if there exist 100 consumers for each type?
    solution: |
      With $n = 100$ of each type, the per-consumer optimisation is identical. The constraint and objective both scale by 100:

      $$\pi(p) = 100 \times [2T + (p-6)(q_1+q_2)] = 100 \times [40 + 38p - 2p^2]$$

      The $p$ that maximises $100f(p)$ is the same as the $p$ that maximises $f(p)$.

      $$p^* = \$9.50, \qquad T^* = \$55.13 \quad \text{(unchanged)}$$
      $$\pi_{\text{total}} = 100 \times \$220.50 = \boxed{\$22{,}050}$$

      > [!success] Answer (c)
      > The **optimal contract is unchanged** at $p^* = \$9.50$, $T^* = \$55.13$. Total profit scales linearly to **\$22,050**.

  - id: "3d"
    source_doc_page: 1
    related_terms:
      - two-part-tariff
      - first-degree-price-discrimination
      - price-discrimination
    text: |
      What is the maximum payment that the firm will be willing to pay in order to remove the restriction in b and determine a different TPT contract for each consumer?
    solution: |
      Compare profit under and without the uniform-contract restriction (100 consumers each):

      | Regime | Profit |
      |---|---|
      | **Different contracts** (part a × 100) | $100 \times \$294 = \$29{,}400$ |
      | **Uniform contract** (part c) | $\$22{,}050$ |
      | **Gain from removing restriction** | $\boxed{\$7{,}350}$ |

      > [!success] Answer (d)
      > The firm would pay up to **\$7,350** to regain the ability to set different contracts. This is the profit gain from perfect price discrimination across all 200 consumers.

  - id: "3e"
    source_doc_page: 1
    related_terms:
      - second-degree-price-discrimination
      - screening
      - incentive-compatibility
      - information-rent
      - two-part-tariff
      - price-discrimination
    text: |
      Assume that the monopolist cannot identify each consumer's type but can offer a menu of different two-part tariff (TPT) contracts (second-degree price discrimination). What are the optimal TPT contracts in this case?
    solution: |
      The firm cannot observe types, but can offer a **menu** of contracts and let consumers self-select. This is [[Second-Degree Price Discrimination]] / [[Screening]].

      **Binding constraints at the optimum:**
      - $IR_2$ (type 2 just willing to participate): $T_2 = CS_2(p_2)$
      - $IC_1$ (type 1 prefers contract 1 over contract 2): $T_1 = CS_1(p_1) - [CS_1(p_2) - CS_2(p_2)]$

      Since $CS_1(p) = 2 \cdot CS_2(p)$, the info rent left to type 1 is $CS_1(p_2) - CS_2(p_2) = CS_2(p_2)$, so:

      $$T_1 = CS_1(p_1) - CS_2(p_2)$$

      **Firm profit** (substituting both binding constraints):

      $$\pi = T_1 + T_2 + (p_1 - 6)q_1(p_1) + (p_2 - 6)q_2(p_2)$$
      $$= CS_1(p_1) + (p_1 - 6)(40 - 2p_1) + (p_2 - 6)(20 - p_2)$$

      This separates into two independent maximisation problems.

      **Optimal $p_1$** — maximise $(20 - p_1)^2 + (p_1 - 6)(40 - 2p_1)$:

      $$= 160 + 12p_1 - p_1^2 \implies \frac{d}{dp_1}(\cdot) = 12 - 2p_1 = 0 \implies \boxed{p_1^* = 6 = MC}$$

      **Optimal $p_2$** — maximise $(p_2 - 6)(20 - p_2)$:

      $$= -p_2^2 + 26p_2 - 120 \implies \frac{d}{dp_2}(\cdot) = -2p_2 + 26 = 0 \implies \boxed{p_2^* = 13 > MC}$$

      **Fees and quantities:**

      $$q_1^* = 40 - 2(6) = 28, \qquad T_1^* = CS_1(6) - CS_2(13) = 196 - 24.5 = \$171.50$$
      $$q_2^* = 20 - 13 = 7, \qquad T_2^* = CS_2(13) = \tfrac{1}{2}(7)^2 = \$24.50$$

      $$\pi = T_1 + T_2 + (6-6)(28) + (13-6)(7) = 171.50 + 24.50 + 49 = \boxed{\$245}$$

      **Verification:**

      | Check | Condition | Value | Pass? |
      |---|---|---|---|
      | $IR_2$ | $CS_2(p_2) - T_2 \geq 0$ | $24.5 - 24.5 = 0$ | ✓ |
      | $IR_1$ | $CS_1(p_1) - T_1 \geq 0$ | $196 - 171.5 = 24.5 \geq 0$ | ✓ |
      | $IC_1$ | Type 1 won't mimic type 2 | $(196 - 171.5) \geq (CS_1(13) - T_2) = 98 - 24.5 = 73.5$? → $24.5 \geq 73.5$? ✗ |  |

      > [!warning] Re-check $IC_1$
      > $IC_1$: type 1 prefers contract 1 to contract 2:
      > $CS_1(p_1) - T_1 \geq CS_1(p_2) - T_2$
      > $196 - 171.5 \geq (20-13)^2 - 24.5 = 49 - 24.5 = 24.5$
      > $24.5 \geq 24.5$ ✓ (binding — type 1 is exactly indifferent, confirming IC₁ is binding)
      >
      > $IC_2$: type 2 won't mimic type 1:
      > $CS_2(p_2) - T_2 \geq CS_2(p_1) - T_1$
      > $0 \geq \tfrac{1}{2}(14)^2 - 171.5 = 98 - 171.5 = -73.5$ ✓

      > [!success] Answer (e)
      > - **Contract 1** (for high type / Consumer 1): $p_1^* = \$6$, $T_1^* = \$171.50$, $q_1 = 28$
      > - **Contract 2** (for low type / Consumer 2): $p_2^* = \$13$, $T_2^* = \$24.50$, $q_2 = 7$
      > - **Firm profit:** $\pi = \$245$

      > [!tip] The canonical results of screening
      > 1. **High type** gets $p = MC$ — no quantity distortion, but pays a **lower** entry fee (retains [[Information Rent]]).
      > 2. **Low type** gets $p > MC$ — quantity is distorted downward ($q_2 = 7$ vs 14 under first-degree PD).
      > 3. **[[Information Rent]]**: the high type retains $CS_2(p_2^*) = \$24.50$ — the firm cannot extract it without violating $IC_1$.
      > 4. The distortion to the low type ($p_2 > MC$) is the price the firm pays to reduce the information rent it must leave the high type.
---
