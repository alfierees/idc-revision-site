---
title: "Sample Exam 2 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Exam 2 (practice)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
source_doc: /papers/micro/sample-exam-2.docx
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - two-part-tariff
  - price-discrimination
  - bundling
  - moral-hazard
  - cournot-competition
  - bertrand-competition
  - game-theory
aliases:
  - Sample Exam 2 Solutions
  - Micro 3 Practice Exam 2
  - PP02 Micro
subject: micro
in_scope: true
questions:
  - id: q1
    title: "Q1 — Screens sold separately"
    text: |
      A profit-maximizing firm sells computers and screens. The willingness to pay for **screens** is:

      | Customer | Screen |
      |---|---|
      | 1 | 800 |
      | 2 | 600 |
      | 3 | 400 |
      | 4 | 200 |

      The marginal cost of a screen is \$300. If the firm sells screens separately, what price maximizes profit from screens?
    options:
      - label: "A"
        text: |
          \$200
        correct: false
        why: |
          At \$200 all four buy but the margin is negative ($200-300$), giving profit $-400$.
      - label: "B"
        text: |
          \$400
        correct: false
        why: |
          Three buyers at margin \$100 give profit 300 — less than the optimum.
      - label: "C"
        text: |
          \$600
        correct: true
        why: |
          Two buyers (customers 1 and 2) at margin \$300 give profit 600, the highest on the WTP ladder.
      - label: "D"
        text: |
          \$800
        correct: false
        why: |
          Only customer 1 buys at margin \$500, giving profit 500 — below the \$600 price.
    solution: |
      | Price | Buyers | Profit |
      |---|---|---|
      | 200 | 4 | $-400$ |
      | 400 | 3 | $300$ |
      | **600** | **2** | $\mathbf{600}$ |
      | 800 | 1 | $500$ |

      > [!success] Answer — **C. \$600** (sell to customers 1 and 2, profit 600).

      ![[PP02_q1_screens_uniform.png|640]]

      > [!tip] Same engine as Exam 1 Q1
      > Walk the WTP ladder; the best uniform price trades off margin against the number of buyers. See [[PP_01-Sample Exam 1#Q1 — Bundling vs. separate sales (uniform price)|PP01 Q1]] for the computers version.

  - id: q2
    title: "Q2 — Physician maximises the patient's expected utility"
    text: |
      *The following data is for questions 2-3.*

      Two treatment alternatives are available:

      | Treatment | Cost | Probability of Success |
      |---|---|---|
      | A | 1,200 | 0.5 |
      | B | 2,400 | 0.75 |

      Treatment (B) yields 20 utility units and treatment (A) yields 4 utility units.

      A physician seeks to maximize the expected utility units of an **individual patient**. Which treatment will the physician choose?
    options:
      - label: "A"
        text: |
          Treatment A because it is less expensive.
        correct: false
        why: |
          The physician acts for the patient and ignores cost, so cheapness is irrelevant.
      - label: "B"
        text: |
          Treatment A because it generates more utility units per dollar.
        correct: false
        why: |
          Utility-per-dollar is the payer's criterion, not the physician's, and it doesn't select A here anyway.
      - label: "C"
        text: |
          Treatment B because its expected utility units is 16 compared to 12 for Treatment A.
        correct: true
        why: |
          B has the higher expected utility ($E[U_B]=15>E[U_A]=2$) so the physician picks it — though the option's "16 vs 12" figures are a typo (see full working).
      - label: "D"
        text: |
          The physician is indifferent between the two treatments.
        correct: false
        why: |
          B's expected utility (15) far exceeds A's (2), so the physician is not indifferent.
    solution: |
      The physician ignores cost (acts for the patient).

      $$E[U_A] = 0.5\times 4 = 2, \qquad E[U_B] = 0.75\times 20 = 15.$$

      $B$ delivers far more expected health utility, and the physician — who doesn't pay — chooses it.

      > [!success] Answer — **C. Treatment B** (higher expected utility units).

      > [!question] The numbers in option C don't match the data
      > Option C states "16 vs 12". With the data given, the expected utilities are **15 vs 2**, not 16 vs 12 — the option's figures look like a typo. C is still the only choice that selects **B for the right reason** (maximising expected utility), so it's the answer; just don't trust its arithmetic.

  - id: q3
    title: "Q3 — HMO maximises utility per fixed budget"
    text: |
      *The following data is for questions 2-3.*

      Two treatment alternatives are available:

      | Treatment | Cost | Probability of Success |
      |---|---|---|
      | A | 1,200 | 0.5 |
      | B | 2,400 | 0.75 |

      Treatment (B) yields 20 utility units and treatment (A) yields 4 utility units.

      Suppose the Health Maintenance Organization (HMO) seeks to maximize **total** expected utility units subject to a **fixed budget**. Which statement is correct?
    options:
      - label: "A"
        text: |
          The physician and the HMO will always choose the same treatment.
        correct: false
        why: |
          Their objectives differ (patient utility vs utility-per-budget), so they need not agree.
      - label: "B"
        text: |
          Treatment B provides more utility units per dollar than Treatment A.
        correct: false
        why: |
          This is factually true by the numbers, but it isn't the intended key (which pairs C with D).
      - label: "C"
        text: |
          Treatment A provides more utility units per dollar than Treatment B.
        correct: false
        why: |
          Factually questionable — by the data B is the more cost-effective option, not A.
      - label: "D"
        text: |
          Moral hazard can arise because treatment goals between the physician and the HMO.
        correct: false
        why: |
          True on its own, but the intended key combines it with statement C as option E.
      - label: "E"
        text: |
          Both C and D are correct.
        correct: true
        why: |
          Intended key (moral hazard + cost-effectiveness); see full working — statement C's wording is disputed.
    solution: |
      Cost-effectiveness (expected utility per dollar):

      $$\frac{E[U_A]}{\text{cost}_A} = \frac{2}{1200} \approx 0.0017, \qquad \frac{E[U_B]}{\text{cost}_B} = \frac{15}{2400} \approx 0.0063.$$

      So **Treatment B is the more cost-effective** option (about 3.7× better per dollar), and **[[_Micro Concepts#Moral Hazard|moral hazard]] / agency conflict can arise** because the physician (maximising the patient's utility, ignoring cost) and the HMO (maximising utility per budget) need not share the same objective.

      > [!question] Likely keyed **E**, but the numbers contradict statement C
      > The intended answer is almost certainly **E (C and D)** — the classic "physician over-treats, payer wants cost-effectiveness" story. **D is definitely correct.** But statement **C says Treatment A is more cost-effective, and that is false**: by the given numbers **B** has the higher utility-per-dollar (statement **B** is the true one). So strictly, the defensible answer is **D** (moral hazard), and if forced to pick the *correct factual* cost-effectiveness statement it's **B**, not C. Flag this with your instructor — the exam likely assumed the cheaper Treatment A is "more efficient", which the data doesn't support.

      > [!tip] The concept that's being tested
      > Regardless of the arithmetic slip, the point is the **agency problem in healthcare**: when the decision-maker (physician/patient) doesn't bear the cost, treatment can diverge from what a budget-holder would choose — a form of [[_Micro Concepts#Moral Hazard|moral hazard]].

  - id: q4
    title: "Q4 — Substitute products"
    text: |
      Two producers, $i$ and $j$, produce similar substitute products.

      Producer $i$ faces demand: $q_{i} = A - p_{i} + p_{j}$
      Producer $j$ faces demand: $q_{j} = A - p_{j} + p_{i}$
      Both have constant marginal cost equal to zero. Which statement is correct?
    options:
      - label: "A"
        text: |
          In equilibrium, the two prices will be equal.
        correct: false
        why: |
          Prices are indeed equal by symmetry, but this is incomplete — B is also correct, so D is the answer.
      - label: "B"
        text: |
          Total market welfare from the two products is higher in equilibrium than it would be if the two products were sold as independent products.
        correct: false
        why: |
          Welfare is higher (substitutes raise output), but this alone is incomplete — A is also correct, so D is the answer.
      - label: "C"
        text: |
          Total market welfare from the two products is lower in equilibrium than it would be if the two products were sold as independent products.
        correct: false
        why: |
          Wrong sign — competing substitutes raise output and hence welfare, not lower it.
      - label: "D"
        text: |
          Answers A and B are correct.
        correct: true
        why: |
          Prices are equal by symmetry (A) and welfare exceeds the independent-products benchmark (B).
      - label: "E"
        text: |
          Answers A and C are correct.
        correct: false
        why: |
          A is correct but C has the welfare comparison backwards, so this pairing fails.
    solution: |
      By symmetry the equilibrium has **equal prices** (statement A true). To compare welfare with the "independent products" benchmark, generalise the cross-term to $q_i = A - p_i + \gamma p_j$ and solve:

      $$\pi_i = p_i(A - p_i + \gamma p_j),\quad \text{FOC } A - 2p_i + \gamma p_j = 0 \;\Rightarrow\; p^* = \frac{A}{2-\gamma},\quad q^* = \frac{A}{2-\gamma}.$$

      - **Independent products** ($\gamma = 0$): $p = A/2,\ q = A/2$, total output $A$.
      - **Substitutes** ($\gamma > 0$): total output $\dfrac{2A}{2-\gamma} > A$.

      With $MC = 0$, more output ⟹ more total surplus, so **welfare is higher in the substitute equilibrium** (statement B true).

      > [!success] Answer — **D. A and B are correct.** Prices are equal, and welfare exceeds the independent-products benchmark.

      > [!warning] Substitutes vs complements — opposite welfare signs
      > Competing **substitutes** push prices toward cost and *raise* welfare. Competing **complements** suffer [[_Micro Concepts#Double Marginalization|double marginalization]] — independent pricing makes the total price *too high* and *lowers* welfare (Topic 4). Read the sign of the cross-price term before answering. *(As literally printed with $\gamma=1$ the demand is degenerate — $q_1+q_2 = 2A$ regardless of price — so the conclusion is cleanest argued via the $\gamma<1$ limit above.)*

  - id: q5
    title: "Q5 — Ronit & Dan at the movies"
    text: |
      Ronit and Dan want to go to the movies. Each must choose between "Rambo 5" and "Sense and Sensibility." Ronit has already seen "Rambo 5," so she prefers "Sense and Sensibility." However, if Dan goes to "Rambo 5," she prefers watching "Rambo 5" with him over watching "Sense and Sensibility" alone. Dan has not seen "Rambo 5" and prefers it to "Sense and Sensibility." However, he prefers watching "Sense and Sensibility" with Ronit over watching "Rambo 5" alone. How many Nash equilibria does this game have?
    options:
      - label: "A"
        text: |
          1
        correct: false
        why: |
          There are two pure equilibria alone, so a single equilibrium undercounts.
      - label: "B"
        text: |
          2
        correct: false
        why: |
          This counts only the two pure equilibria and misses the mixed-strategy one.
      - label: "C"
        text: |
          3
        correct: true
        why: |
          Battle of the Sexes has two pure equilibria plus one mixed-strategy equilibrium.
      - label: "D"
        text: |
          4
        correct: false
        why: |
          There are only three equilibria in total (two pure + one mixed).
      - label: "E"
        text: |
          0
        correct: false
        why: |
          The game has equilibria — both watching the same film are pure Nash equilibria.
    solution: |
      Both prefer to be **together**; Ronit's favoured joint film is *Sense & Sensibility*, Dan's is *Rambo 5*. Going alone is the worst outcome for each. That is textbook **[[_Micro Concepts#Coordination Game|Battle of the Sexes]]**:

      | Ronit \ Dan | Rambo | S&S |
      |---|---|---|
      | **Rambo** | $(1, 2)$ ✓NE | $(0,0)$ |
      | **S&S** | $(0,0)$ | $(2, 1)$ ✓NE |

      Two **pure** Nash equilibria — both watch Rambo, or both watch S&S — plus one **[[_Micro Concepts#Mixed Strategy|mixed-strategy]]** equilibrium where each randomises over their preferred film.

      > [!success] Answer — **C. 3** (two pure + one mixed).

      > [!warning] 2 or 3? Know your course's convention
      > If only **pure-strategy** equilibria are counted the answer is **2 (B)**. Because Topic 3 explicitly teaches mixed strategies (and computes the Battle-of-the-Sexes mixed NE — see [[Topic 3 - Game Theory#3.2 Battle of the Sexes|the lecture]]), the complete count of **3** is the intended answer here.

  - id: q6
    title: "Q6 — Value of identifying consumer types"
    text: |
      A monopolist produces a product for two consumers.

      Consumer 1's demand is: $q_{1} = 9 - p$
      Consumer 2's demand is: $q_{2} = 12 - p$
      The monopolist has a constant marginal cost of: $MC = 2$
      The monopolist cannot distinguish between consumers and must offer the same two-part tariff (TPT) to both consumers. A private investigation company offers to identify each consumer type.

      Assuming the monopolist sells only once, what is the maximum amount it should be willing to pay the investigation company?
    options:
      - label: "A"
        text: |
          97.75
        correct: false
        why: |
          Not the value of information; the gain from discriminating is 23.25.
      - label: "B"
        text: |
          124
        correct: false
        why: |
          Not the value of information; the gain from discriminating is 23.25.
      - label: "C"
        text: |
          51.25
        correct: false
        why: |
          This is the uniform-tariff profit itself, not the value of the information (the trap answer).
      - label: "D"
        text: |
          49
        correct: false
        why: |
          Not the value of information; the gain from discriminating is 23.25.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: true
        why: |
          The maximum willingness to pay is the profit gain $\pi^{\text{disc}}-\pi^{\text{uni}} = 74.5 - 51.25 = 23.25$, which is not listed.
    solution: |
      With perfect type info the monopolist runs **separate** first-degree two-part tariffs; without it, a single **uniform** $(p,T)$.

      **With info (first-degree, $p = MC = 2$, $T = CS$):**

      $$CS_1 = \tfrac12(9-2)^2 = 24.5,\quad CS_2 = \tfrac12(12-2)^2 = 50 \;\Rightarrow\; \pi^{\text{disc}} = 74.5.$$

      **Without info (uniform).** The fee is capped by the *smaller* consumer 1: $T = \tfrac12(9-p)^2$. Profit serving both:

      $$\pi(p) = (9-p)^2 + (p-2)(21-2p) = -p^2 + 7p + 39,$$
      $$p^* = 3.5,\quad T = 15.125,\quad \pi^{\text{uni}} = 51.25.$$

      (Serving only consumer 2 yields 50 < 51.25, so the monopolist keeps both.)

      **Value of the information** $= \pi^{\text{disc}} - \pi^{\text{uni}} = 74.5 - 51.25 = \boxed{23.25}.$

      > [!question] Answer — **E. None of the answers is correct** (value $= 23.25$)
      > The maximum the monopolist should pay is the profit *gain* from discriminating, **23.25**, which is not among 97.75 / 124 / 51.25 / 49. Note the trap: **51.25 is the uniform-tariff profit itself**, not the value of the information. If your key insists on 51.25, it is answering "what is the uniform-TPT profit" rather than the question asked. By the literal question (willingness to pay = extra profit), the answer is **E**.

  - id: o1a
    title: "Open 1a — Pay M: separate two-part tariffs"
    text: |
      A monopolist sells a product to two consumers, Consumer 1 and Consumer 2. The monopolist's cost function is: $TC(Q) = 20Q$, where: $Q = q_{1} + q_{2}$
      Consumer 1's demand is: $p = 200 - q_{1}$
      Consumer 2's demand is: $p = 150 - q_{2}$

      **A.** Assume the monopolist can pay a fixed one-time amount $M$, allowing it to distinguish between the two consumers and offer each consumer a separate two-part tariff: $(p_{1},T_{1}),(p_{2},T_{2})$, where $p_{i}$ is the per-unit price and $T_{i}$ is the fixed fee. Find the tariffs chosen by the monopolist.
    solution: |
      Set each per-unit price to $MC$ and the fee to that consumer's surplus:

      $$p_1 = p_2 = MC = 20,\qquad T_1 = \tfrac12(200-20)^2 = 16{,}200,\qquad T_2 = \tfrac12(150-20)^2 = 8{,}450.$$

      > [!success] Answer (A)
      > $(p_1, T_1) = (20,\ 16{,}200)$ and $(p_2, T_2) = (20,\ 8{,}450)$. Total profit $= 24{,}650$.

      ![[PP02_open1_two_part_tariff.png|620]]

  - id: o1b
    title: "Open 1b — No M: uniform tariff and maximum M"
    text: |
      **B.** If the monopolist does not pay $M$, it must charge a uniform two-part tariff: $(p,T)$ to both consumers. Find the maximum $M$ the monopolist is willing to pay.
    solution: |
      A single fee can't exceed the **smaller** surplus, so $T = CS_2(p) = \tfrac12(150-p)^2$ (binds on consumer 2). Profit serving both:

      $$\pi(p) = (150-p)^2 + (p-20)(350 - 2p) = -p^2 + 90p + 15{,}500,$$
      $$p^* = 45,\quad T = 5{,}512.5,\quad \pi^{\text{uni}} = 17{,}525.$$

      > [!success] Answer (B)
      > Uniform tariff $(p,T) = (45,\ 5{,}512.5)$, profit $17{,}525$. The monopolist pays at most
      > $$M_{\max} = \pi^{\text{disc}} - \pi^{\text{uni}} = 24{,}650 - 17{,}525 = \boxed{7{,}125}.$$

      > [!warning] Why the uniform price jumps from 20 to 45
      > Under discrimination the per-unit price is $MC=20$. Under a uniform tariff the fee is throttled by consumer 2, so the firm leans on the **per-unit margin** instead, raising $p$ to 45 to claw back profit from the larger consumer 1. That higher price is exactly the inefficiency that makes type information worth 7,125.

  - id: o1c
    title: "Open 1c — Uniform tariff with general A"
    text: |
      **C.** Now the monopolist must set a uniform tariff $(p,T)$, and Consumer 2's demand is:

      $p = A - q_{2}$ where: $A \leq 200$. Assume the monopolist wants to sell to both consumers.

      Find the optimal tariff $(p,T)$ as a function of $A$. How does $p$ depend on $A$?
    solution: |
      Same logic, fee pinned by consumer 2: $T = \tfrac12(A-p)^2$. Profit serving both:

      $$\pi(p) = (A-p)^2 + (p-20)(200 + A - 2p) = -p^2 + (240 - A)p + (A^2 - 20A - 4000).$$

      $$\boxed{p^*(A) = 120 - \tfrac{A}{2}}, \qquad T^*(A) = \tfrac{9}{8}(A-80)^2.$$

      > [!success] Answer (C)
      > Optimal uniform tariff $p^*(A) = 120 - \tfrac{A}{2}$, fee $T^*(A) = \tfrac{9}{8}(A-80)^2$. **The per-unit price *falls* as $A$ rises** ($dp^*/dA = -\tfrac12$). *(Check: $A=150$ reproduces part B's $p=45$.)*

      ![[PP02_open1cd_price_vs_A.png|700]]

      > [!tip] The counter-intuitive comparative static
      > As consumer 2 becomes more valuable (higher $A$), the firm *lowers* the per-unit price. Why? A bigger consumer 2 means more surplus to harvest through the **fixed fee**, so the firm prices closer to $MC$ to expand quantity and lets $T$ do the extracting — the two-part-tariff instinct of "price near cost, charge for entry".

  - id: o1d
    title: "Open 1d — Serving only one consumer"
    text: |
      **D. Following section C,** for which values of *A* the monopolist will prefer to sell only to one consumer?
    solution: |
      Serving **only consumer 1** (first-degree) gives the constant $16{,}200$. Serving **both** gives $\pi^{\text{both}}(A) = \tfrac54 A^2 - 140A + 10{,}400$. Set them equal:

      $$\tfrac54 A^2 - 140A + 10{,}400 = 16{,}200 \;\Rightarrow\; A^* = 56 + 36\sqrt{6} \approx 144.2.$$

      > [!success] Answer (D)
      > The monopolist drops consumer 2 and serves **only consumer 1** when $A < 56 + 36\sqrt{6} \approx 144.2$ (for $A$ above that, serving both wins). Intuitively, when consumer 2 is weak, including them only drags the fee $T$ down and sacrifices extraction from consumer 1 — better to forgo the small market entirely.

  - id: o2a
    title: "Open 2a — Cournot (simultaneous quantities)"
    text: |
      Two firms produce differentiated products $q_{1}$ and $q_{2}$. Inverse demands are:

      $$p_{1} = 24 - q_{1} - 0.5q_{2}$$
      $$p_{2} = 24 - q_{2} - 0.5q_{1}$$

      Marginal costs are zero.

      **A.** Find the Simultaneous quantity competition equilibrium and profit.
    solution: |
      $\pi_i = (24 - q_i - 0.5q_j)q_i$; FOC $24 - 2q_i - 0.5q_j = 0 \Rightarrow q_i = 12 - 0.25q_j$. Symmetric:

      $$q^* = 9.6,\qquad p^* = 9.6,\qquad \pi^* = 92.16.$$

  - id: o2b
    title: "Open 2b — Bertrand (simultaneous prices)"
    text: |
      **B.** Find the Simultaneous Price competition equilibrium and profit (Hint: find both demand functions $q_i$ as a function of $p_1$ and $p_2$).
    solution: |
      Invert the demands first: $q_i = 16 - \tfrac43 p_i + \tfrac23 p_j$. Then $\pi_i = p_i q_i$, FOC $\Rightarrow p_i = 6 + 0.25 p_j$. Symmetric:

      $$p^* = 8,\qquad q^* = \tfrac{32}{3} \approx 10.67,\qquad \pi^* = \tfrac{256}{3} \approx 85.33.$$

      > [!warning] Price competition is tougher
      > $p^{\text{Bertrand}} = 8 < p^{\text{Cournot}} = 9.6$ and profit drops $92.16 \to 85.33$. With differentiated goods, competing in **prices** is more aggressive than competing in **quantities** — the key fact that drives part D.

  - id: o2c
    title: "Open 2c — Firm 1 sets quantity, Firm 2 sets price"
    text: |
      **C.** Find Equilibrium results if Firm 1 chooses quantity and Firm 2 chooses price (Hint: firm 2 price responds to $q_1$, and firm 1 quantity responds to $p_2$).
    solution: |
      Firm 2's residual: $q_2 = 24 - p_2 - 0.5q_1$, so $p_1 = 12 - 0.75q_1 + 0.5p_2$. Each best-responds:

      $$q_1 = 8 + \tfrac13 p_2,\qquad p_2 = 12 - \tfrac14 q_1 \;\Rightarrow\; q_1 = \tfrac{144}{13},\ p_2 = \tfrac{120}{13}.$$

      $$p_1 = \tfrac{108}{13} \approx 8.31,\ q_2 = \tfrac{120}{13} \approx 9.23,\qquad \pi_1 = \tfrac{15552}{169} \approx 92.02,\ \pi_2 = \tfrac{14400}{169} \approx 85.21.$$

      > [!success] Answer (C)
      > $q_1 = \tfrac{144}{13},\ p_1 \approx 8.31,\ \pi_1 \approx 92.02$; $p_2 = \tfrac{120}{13},\ q_2 \approx 9.23,\ \pi_2 \approx 85.21$. The **quantity-setter (Firm 1) earns more** than the price-setter.

  - id: o2d
    title: "Open 2d — The strategy game: choose Quantity or Price"
    text: |
      **D.** Show in a matrix the two strategies each firm faces and find Nash Equilibrium.

      | Firm 1 / Firm 2 | Quantity | Price |
      |---|---|---|
      | **Quantity** | | |
      | **Price** | | |
    solution: |
      | Firm 1 \ Firm 2 | Quantity | Price |
      |---|---|---|
      | **Quantity** | $(92.16,\ 92.16)$ | $(92.02,\ 85.21)$ |
      | **Price** | $(85.21,\ 92.02)$ | $(85.33,\ 85.33)$ |

      For each firm, **Quantity beats Price against either rival choice** ($92.16 > 85.21$ and $92.02 > 85.33$): Quantity is a **[[_Micro Concepts#Dominant Strategy|dominant strategy]]**.

      > [!success] Answer (D)
      > Unique Nash equilibrium **(Quantity, Quantity)** — i.e. Cournot — with profits $(92.16, 92.16)$. Each firm prefers to compete in quantities because it softens competition.

      ![[PP02_open2_qp_game.png|700]]

      > [!tip] Why firms "choose" Cournot
      > Committing to a quantity is a softer move than committing to a price; both firms anticipating this end up at the higher-profit Cournot outcome. This is the classic result that, when firms can pick the *mode* of competition, they gravitate to quantity competition.
---

# Sample Exam 2 — Worked Solutions

> Part of: [[Microeconomics]]
> **Sample Exam 2** (practice) — Micro 3 — Advanced Microeconomics | Tyomkin School of Economics, Reichman University
> Builds on: [[Topic 1 - Asymmetric Information]] · [[Topic 2 - Equilibrium in Different Market Structures]] · [[Topic 3 - Game Theory]] · [[Topic 4 - Price Competition with Complementary Goods]]
> Key concepts: [[_Micro Concepts#Bundling|Bundling]], [[_Micro Concepts#Moral Hazard|Moral Hazard]], [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]], [[_Micro Concepts#First-Degree Price Discrimination|First-Degree Price Discrimination]], [[_Micro Concepts#Coordination Game|Coordination Game]], [[_Micro Concepts#Cournot Competition|Cournot Competition]], [[_Micro Concepts#Bertrand Competition|Bertrand Competition]], [[_Micro Concepts#Nash Equilibrium|Nash Equilibrium]]

> [!warning] No official solutions
> Solved from scratch and checked in Python. Two questions are genuinely awkward as printed — **Q3** (the cost-effectiveness numbers point the opposite way to the keyed pairing) and **Q6** (the value works out to a number not in the option list). Both are flagged with a `[!question]` callout; check them against your instructor's key.

---

## 🧰 What this paper tests

> [!info] The throughline: extracting surplus from heterogeneous buyers
> Exam 2 leans hard on **[[_Micro Concepts#Two-Part Tariff|two-part tariffs]]** and **[[_Micro Concepts#Price Discrimination|price discrimination]]** (Q6, Open Q1) plus the **quantity-vs-price** competition contrast (Open Q2). The single most useful reflex: a first-degree two-part tariff sets **per-unit price = MC** and **fixed fee = consumer surplus**; a *uniform* tariff for two types has its fee pinned by the **smaller** consumer.
> - **Q1, Q6, Open Q1** — bundling & two-part tariffs.
> - **Q2, Q3** — health insurance, cost-effectiveness, [[_Micro Concepts#Moral Hazard|moral hazard]].
> - **Q4, Open Q2** — differentiated competition: substitutes, [[_Micro Concepts#Cournot Competition|Cournot]] vs [[_Micro Concepts#Bertrand Competition|Bertrand]].
> - **Q5** — [[_Micro Concepts#Coordination Game|Battle of the Sexes]] and counting equilibria.

<!--questions-->

---

## 🎯 One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **MC1** | Bundling | Uniform price over WTP ladder | **C** — \$600 (profit 600) |
| **MC2** | Insurance | Physician max expected utility | **C** — Treatment B ($E[U]=15>2$) |
| **MC3** | Cost-effectiveness | Utility per \$ + moral hazard | **D / likely-keyed E** — see flag (B is the cost-effective one) |
| **MC4** | Substitutes | Symmetric eq.; output ↑ | **D** — prices equal & welfare higher |
| **MC5** | Battle of the Sexes | Count NE | **C** — 3 (2 pure + 1 mixed) |
| **MC6** | Two-part tariff | $\pi^{\text{disc}}-\pi^{\text{uni}}$ | **E** — value $=23.25$ (not listed) |
| **Open 1A** | First-degree TPT | $p=MC$, $T=CS$ | $(20,16200),(20,8450)$; $\pi=24{,}650$ |
| **Open 1B** | Uniform TPT | $T=CS_2$ | $p=45,\ T=5512.5$; $M_{\max}=7{,}125$ |
| **Open 1C** | Uniform TPT, general $A$ | maximise over $p$ | $p^*=120-\tfrac A2,\ T^*=\tfrac98(A-80)^2$ |
| **Open 1D** | Serve one vs both | $\pi^{\text{both}}=\pi^{\text{only1}}$ | serve one iff $A<56+36\sqrt6\approx144.2$ |
| **Open 2A** | Cournot | $MR=MC$ | $q=p=9.6,\ \pi=92.16$ |
| **Open 2B** | Bertrand | invert demand, $MR=MC$ | $p=8,\ q=\tfrac{32}3,\ \pi=\tfrac{256}3$ |
| **Open 2C** | Mixed Q/P | cross best-responses | $\pi_1\approx92.0,\ \pi_2\approx85.2$ |
| **Open 2D** | Mode game | dominance | NE $=$ (Quantity, Quantity) = Cournot |

> [!tip] Exam reflexes
> - **First-degree TPT** → $p = MC$, $T = CS_i$. **Uniform TPT for two types** → fee pinned by the *smaller* consumer; lean on the per-unit margin.
> - **"Value of information / identifying types"** → $\pi^{\text{discriminate}} - \pi^{\text{uniform}}$, *not* either profit on its own.
> - **Substitutes** competing → lower prices, *higher* welfare. **Complements** → double marginalisation, *lower* welfare.
> - **Cournot vs Bertrand (differentiated)** → Bertrand price & profit are lower; given the choice of mode, **Quantity dominates** → firms land at Cournot.
> - **Battle of the Sexes** → 2 pure + 1 mixed = **3** equilibria.

---

## 📎 Related Notes

- [[PP_01-Sample Exam 1]] — companion practice paper (same toolkit: bundling, PD, two-part tariffs, Bertrand, game theory)
- [[Topic 1 - Asymmetric Information]] — insurance & moral hazard (Q2–Q3)
- [[Topic 2 - Equilibrium in Different Market Structures]] — bundling, price discrimination, two-part tariffs, Cournot/Bertrand (Q1, Q4, Q6, Open Q1–Q2)
- [[Topic 3 - Game Theory]] — Battle of the Sexes, dominant strategies, mixed NE (Q5, Open Q2D)
- [[Topic 4 - Price Competition with Complementary Goods]] — substitutes vs complements, best-response functions (Q4, Open Q2)
- [[Exercise 5 - Solutions]] — price discrimination & two-part tariffs (Open Q1)
- [[Exercise 8 - Solutions]] — Cournot & Stackelberg quantity competition (Open Q2)
- [[Microeconomics]] — subject hub
