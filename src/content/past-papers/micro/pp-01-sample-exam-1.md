---
title: "Sample Exam 1 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Exam 1 (practice)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
source_doc: /papers/micro/sample-exam-1.docx
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - bundling
  - moral-hazard
  - price-discrimination
  - two-part-tariff
  - bertrand-competition
  - game-theory
  - perfect-competition
aliases:
  - Sample Exam 1 Solutions
  - Micro 3 Practice Exam 1
  - PP01 Micro
subject: micro
in_scope: true
questions:
  - id: q1
    title: "Q1 — Bundling vs. separate sales"
    text: |
      A profit-maximizing firm sells computers and screens. The marginal cost of a computer is \$1,000 and the marginal cost of a screen is \$300. The willingness to pay for computers is:

      | Customer | Computer |
      |---|---|
      | 1 | 900 |
      | 2 | 1,100 |
      | 3 | 1,300 |
      | 4 | 1,500 |

      If the firm sells computers **separately**, what price maximizes profit from computers?
    options:
      - label: "A"
        text: |
          \$900
        correct: false
        why: |
          At $p=900$ all four buy but each unit loses \$100 ($p<MC=1000$), for profit $-400$.
      - label: "B"
        text: |
          \$1,100
        correct: false
        why: |
          Three buyers at margin \$100 gives profit 300 — beaten by \$1,300.
      - label: "C"
        text: |
          \$1,300
        correct: true
        why: |
          Customers 3 and 4 buy at margin \$300 each, for profit $2\times300 = 600$, the highest of any price.
      - label: "D"
        text: |
          \$1,500
        correct: false
        why: |
          Only customer 4 buys, giving profit $1\times500 = 500$ — less than the \$1,300 optimum.
    solution: |
      Selling "separately" means one **uniform price** $p$ — every buyer with $WTP \ge p$ buys one unit at $p$. Profit $= (\text{buyers})\times(p - 1000)$. Walk the four candidate prices:

      | Price $p$ | Buyers ($WTP\ge p$) | Profit $=n(p-1000)$ |
      |---|---|---|
      | 900 | 4 | $4(-100) = -400$ |
      | 1100 | 3 | $3(100) = 300$ |
      | **1300** | **2** | $\mathbf{2(300) = 600}$ |
      | 1500 | 1 | $1(500) = 500$ |

      > [!success] Answer — **C. \$1,300**
      > A uniform price of **\$1,300** sells to customers 3 and 4 for a profit of **\$600**, beating every other price.

      ![[PP01_q1_uniform_pricing.png|640]]

      > [!tip] Why this is a bundling question in disguise
      > Charging one price to heterogeneous buyers always leaves money on the table — here customer 4's extra \$200 of value and customers 1–2 entirely. [[_Micro Concepts#Bundling|Bundling]] the computer with the screen (or [[_Micro Concepts#Price Discrimination|price discriminating]]) is precisely how a monopolist recovers that lost surplus. Knowing the *separate-sales* benchmark is what lets you show bundling does better.

  - id: q2
    title: "Q2 — Expected medical expenditure when uninsured"
    text: |
      The probabilities of the health states are:

      $$Pr(\text{Mild-1}) = \frac{1}{2},\quad Pr(\text{Moderate-2}) = \frac{1}{3},\quad Pr(\text{Severe-3}) = \frac{1}{6}$$

      The demand functions for medical services are: $Q1 = 5 - P$, $Q2 = 15 - P$, $Q3 = 20$. The marginal cost of medical treatment is $MC = 2$. What is the individual's expected medical expenditure if he is uninsured?
    options:
      - label: "A"
        text: |
          $18.33$
        correct: true
        why: |
          Uninsured ⟹ $P=MC=2$, giving $Q=3,13,20$ and $E[\text{spend}] = \tfrac12(6)+\tfrac13(26)+\tfrac16(40) = 18.33$.
      - label: "B"
        text: |
          $21.67$
        correct: false
        why: |
          This uses the *insured* quantities ($Q=5,15,20$) at $P=0$ — that's the next question's fair premium, not uninsured spend.
      - label: "C"
        text: |
          $26$
        correct: false
        why: |
          Does not match the probability-weighted spend at $P=MC=2$.
      - label: "D"
        text: |
          $40$
        correct: false
        why: |
          Does not match the probability-weighted spend at $P=MC=2$.
    solution: |
      > [!info] The unlocking idea
      > An **uninsured** person faces the true price of care, $P = MC = 2$, and chooses quantity off their own demand curve. Expenditure in a state is $P\times Q = 2Q$.

      $$Q_1 = 5-2 = 3,\quad Q_2 = 15-2 = 13,\quad Q_3 = 20\ (\text{perfectly inelastic}).$$

      $$E[\text{spend}] = \tfrac12(2\cdot 3) + \tfrac13(2\cdot 13) + \tfrac16(2\cdot 20) = \tfrac12(6) + \tfrac13(26) + \tfrac16(40)$$
      $$= 3 + 8.67 + 6.67 = \boxed{18.33}$$

      > [!success] Answer — **A. 18.33**

      > [!warning] Don't use the $P=0$ quantities here
      > The tempting wrong move is to plug the *insured* quantities ($Q=5,15,20$). That gives 21.67 — which is the answer to the **next** question (the fair premium), not this one. "Uninsured" ⟹ $P=MC=2$.

  - id: q3
    title: "Q3 — Will a risk-averse person buy full insurance?"
    text: |
      **Continuing with the data from the previous question**, the actuarially fair premium for full insurance. Which of the following statements is correct?
    options:
      - label: "A"
        text: |
          A risk-averse individual will always purchase full insurance.
        correct: false
        why: |
          "Always buy" ignores the moral-hazard loading on the fair premium.
      - label: "B"
        text: |
          A risk-averse individual will never purchase full insurance because moral hazard exists.
        correct: false
        why: |
          "Never buy" overstates the loss — a sufficiently risk-averse person still might.
      - label: "C"
        text: |
          It is impossible to determine with certainty whether the individual will purchase full insurance; the answer depends on the degree of risk aversion relative to the welfare loss caused by moral hazard.
        correct: true
        why: |
          The fair premium is loaded by the moral-hazard welfare loss, so the choice depends on risk aversion versus that loss — exactly an ambiguous outcome.
      - label: "D"
        text: |
          A risk-averse individual will always prefer partial insurance to full insurance.
        correct: false
        why: |
          This is B in disguise; whether partial beats full is itself ambiguous.
    solution: |
      A fully insured consumer pays a per-unit price of **0**, so they consume the [[_Micro Concepts#Moral Hazard|moral-hazard]] quantities $Q=5,\,15,\,20$. The insurer's expected cost — the fair premium — is

      $$\pi^{\text{fair}} = \tfrac12(2\cdot 5) + \tfrac13(2\cdot 15) + \tfrac16(2\cdot 20) = 5 + 10 + 6.67 = 21.67.$$

      This **exceeds** the \$18.33 the person would have spent uninsured. The gap is the resource cost of over-consumption, and the pure **welfare loss** (units consumed whose value is below $MC$) is

      $$E[\text{DWL}] = \tfrac12\underbrace{(\tfrac12\cdot 2\cdot 2)}_{\text{mild}} + \tfrac13\underbrace{(\tfrac12\cdot 2\cdot 2)}_{\text{moderate}} + \tfrac16\cdot 0 = 1 + 0.67 = 1.67.$$

      > [!success] Answer — **C.**
      > *It is impossible to say with certainty.* A [[_Micro Concepts#Risk Aversion|risk-averse]] person values the **elimination of risk** that full insurance gives, but the fair premium is **loaded** by the moral-hazard welfare loss (≈1.67). Whether they buy full insurance depends on how their risk aversion stacks up against that loss — exactly statement C.

      > [!warning] Why A, B, D are wrong
      > **A** ("always buy") ignores the moral-hazard loading. **B** ("never buy") overstates it — a sufficiently risk-averse person still might. **D** ("always prefer partial") is just B in disguise; partial insurance trades less risk-reduction for less moral hazard, and which wins is again ambiguous.

  - id: q4
    title: "Q4 — Price discrimination: public vs. government"
    text: |
      The public demand curve for the monopolist's product is: $P = 100 - X$. The marginal cost of producing the product is: $MC = X$. The government is willing to buy up to 10 units from the monopolist at a price of 50 per unit. Assume the monopolist can price discriminate between the public and the government.

      How much will the monopolist sell?
    options:
      - label: "A"
        text: |
          10 units to the government at 50 and 40 units to the public at 60.
        correct: false
        why: |
          Selling 40 to the public gives $MR_{\text{pub}} = 20 < MC = 50$ at $Q=50$ — the firm loses on those units.
      - label: "B"
        text: |
          5 units to the government at 50 and 40 units to the public at 60.
        correct: false
        why: |
          The government channel pays $50 > MC$, so the firm fills it to the full cap of 10, not 5; and 40 to the public is too many.
      - label: "C"
        text: |
          10 units to the government at 50 and 30 units to the public at 70.
        correct: true
        why: |
          Fill the government cap (10 units, $50>MC$) then set $MR_{\text{pub}} = MC$: $100-2X = X+10 \Rightarrow X=30$, $P=70$, $MC=40$ ✓.
      - label: "D"
        text: |
          5 units to the government at 50 and 35 units to the public at 65.
        correct: false
        why: |
          The government cap should be filled to 10 (not 5), and the public optimum is 30 at 70, not 35 at 65.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: false
        why: |
          C is correct, so E is wrong.
    solution: |
      Treat the government as a flat marginal-revenue source of **50/unit, capped at 10 units**, and the public as the usual downward-sloping segment with $MR_{\text{pub}} = 100 - 2X_{\text{pub}}$. At the optimum, marginal revenue in each *used* channel equals $MC = Q = X_{\text{pub}} + X_{\text{gov}}$.

      The government channel pays 50 while $MC<50$, so the firm fills it to the **cap, $X_{\text{gov}}=10$**. For the public:

      $$MR_{\text{pub}} = MC:\quad 100 - 2X_{\text{pub}} = X_{\text{pub}} + 10 \;\Rightarrow\; 90 = 3X_{\text{pub}} \;\Rightarrow\; X_{\text{pub}} = 30.$$

      $$P_{\text{pub}} = 100 - 30 = 70,\qquad Q = 30+10 = 40,\qquad MC = 40.$$

      **Consistency checks:** $MR_{\text{pub}}(30) = 100 - 60 = 40 = MC$ ✓, and the last government unit yields $50 > MC = 40$ ✓ (so filling the cap is profitable).

      > [!success] Answer — **C. 10 units to the government at 50 and 30 units to the public at 70.**

      ![[PP01_q4_govt_price_discrim.png|640]]

      > [!warning] The trap — answer A (40 to the public)
      > Selling 40 to the public gives $MR_{\text{pub}} = 100 - 80 = 20$, far below $MC = 50$ at $Q=50$ — the firm would be losing money on those marginal units. The rising $MC = Q$ is what disciplines total output to 40.

  - id: q5
    title: "Q5 — \"Odd or even\" game"
    text: |
      Two players, A and B, play an "odd or even" game. Each player chooses a number. If the sum of the numbers is even, Player A wins. If the sum is odd, Player B wins. Which statement is correct?
    options:
      - label: "A"
        text: |
          There is an equilibrium in dominant strategies, and therefore there is a unique Nash equilibrium.
        correct: false
        why: |
          Matching pennies has no dominant strategy — whoever is "winning", the opponent wants to switch.
      - label: "B"
        text: |
          There is no equilibrium in dominant strategies and no Nash equilibrium.
        correct: false
        why: |
          "No Nash equilibrium" is true only for *pure* strategies; a unique mixed-strategy NE exists.
      - label: "C"
        text: |
          There is no equilibrium in dominant strategies, but there is a unique Nash equilibrium.
        correct: true
        why: |
          No dominant strategy, no pure NE, but a unique mixed-strategy NE (each plays even/odd with probability $\tfrac12$).
      - label: "D"
        text: |
          There is no equilibrium in dominant strategies, but there are exactly four Nash equilibria.
        correct: false
        why: |
          Matching pennies has exactly one (mixed) Nash equilibrium, not four.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: false
        why: |
          C is correct, so E is wrong.
    solution: |
      Only the **parity** of each choice matters, so the game collapses to a 2×2 *matching-pennies* / [[_Micro Concepts#Zero-Sum Game|zero-sum]] game (A wants parities to **match**, B wants them to **differ**):

      | A \ B | B even | B odd |
      |---|---|---|
      | **A even** | A wins (+1, −1) | B wins (−1, +1) |
      | **A odd** | B wins (−1, +1) | A wins (+1, −1) |

      No row or column is a [[_Micro Concepts#Best Response|best response]] to everything, so there is **no [[_Micro Concepts#Dominant Strategy|dominant strategy]]** and **no pure-strategy [[_Micro Concepts#Nash Equilibrium|Nash equilibrium]]** (whoever is "winning" the opponent wants to switch). There is a **unique [[_Micro Concepts#Mixed Strategy|mixed-strategy]] equilibrium**: each player plays even/odd with probability $\tfrac12$.

      > [!success] Answer — **C.** No equilibrium in dominant strategies, but a **unique** Nash equilibrium (the mixed one).

      > [!warning] Why B is the trap
      > **B** says "no Nash equilibrium" — true only for *pure* strategies. Every finite game has at least one Nash equilibrium once mixing is allowed (Nash's theorem); here it is unique. **D** ("four NE") and **A** ("dominant strategies") are simply wrong about matching pennies.

  - id: q6
    title: "Q6 — Bertrand with asymmetric costs"
    text: |
      In market $X$, two producers, A and B, compete in prices à la Bertrand. Producer A has a higher marginal cost than Producer B. Which statement is correct?
    options:
      - label: "A"
        text: |
          The product price may be Producer A's monopoly price.
        correct: false
        why: |
          A is the inefficient firm; it never sets the price.
      - label: "B"
        text: |
          The product price may be Producer B's monopoly price.
        correct: false
        why: |
          True on its own (if $p_B^m \le MC_A$), but C is also true, so the complete answer is E.
      - label: "C"
        text: |
          The product price may be Producer A's marginal cost.
        correct: false
        why: |
          True on its own (if $p_B^m > MC_A$, B limit-prices at $MC_A$), but B is also true, so the complete answer is E.
      - label: "D"
        text: |
          The product price may be Producer B's marginal cost.
        correct: false
        why: |
          B never prices at its own cost when it can profitably go up to $MC_A$; that zero-margin case is the symmetric-cost paradox, not this one.
      - label: "E"
        text: |
          Answers B and C are correct.
        correct: true
        why: |
          Both cases can occur: B charges $p_B^m$ if $p_B^m \le MC_A$, otherwise it limit-prices at $MC_A$.
    solution: |
      The low-cost firm B captures the market by undercutting. Two cases pin the equilibrium price:

      - If B's **unconstrained monopoly price** $p_B^m \le MC_A$, B simply charges $p_B^m$ — A can't profitably enter. → **price may be B's monopoly price** (B correct).
      - If $p_B^m > MC_A$, B is held back by A and charges (just at/below) $MC_A$ via [[_Micro Concepts#Limit Pricing|limit pricing]]. → **price may be A's marginal cost** (C correct).

      > [!success] Answer — **E. Answers B and C are correct.**

      > [!tip] Eliminate the rest fast
      > **A** (A's monopoly price) — A is the inefficient firm, it never sets the price. **D** (B's marginal cost) — B never prices at its *own* cost when it could profitably go all the way up to $MC_A$; it only earns zero-margin in the symmetric-cost Bertrand paradox, not here.

  - id: o1a
    title: "Open 1a — Equilibrium before the standard"
    text: |
      Two firms, 1 and 2, produce differentiated products and compete by simultaneously setting prices $p_{1}$ and $p_{2}$. Both firms have the same constant marginal cost: $c = 6$ and no fixed costs.

      Demand is given by:

      $$q_{1} = 29 - p_{1} + \tfrac{1}{4}p_{2}, \qquad q_{2} = 29 - p_{2} + \tfrac{1}{4}p_{1}.$$

      **a.** Find the equilibrium prices, quantities, and profits of each firm.
    solution: |
      Each firm maximises $\pi_i = (p_i - 6)\,q_i$ on its own demand curve — this is [[_Micro Concepts#Monopolistic Competition|monopolistic (differentiated Bertrand) competition]].

      Demand $q_1 = 29 - p_1 + \tfrac14 p_2$. FOC:

      $$\frac{\partial \pi_1}{\partial p_1} = (29 - p_1 + \tfrac14 p_2) - (p_1 - 6) = 35 - 2p_1 + \tfrac14 p_2 = 0 \;\Rightarrow\; p_1 = 17.5 + 0.125\,p_2.$$

      By symmetry $p_1 = p_2 = p$: $\,p = 17.5 + 0.125p \Rightarrow 0.875p = 17.5 \Rightarrow p = 20$.

      $$q = 29 - 20 + \tfrac14(20) = 14, \qquad \pi = (20-6)\cdot 14 = 196.$$

      > [!success] Answer (a)
      > $p_1^* = p_2^* = 20,\quad q_1^* = q_2^* = 14,\quad \pi_1^* = \pi_2^* = 196.$

  - id: o1b
    title: "Open 1b — Equilibrium with the standard"
    text: |
      Now, the firms may jointly adopt a common product standard that makes products easier to compare and substitute. Demand becomes:

      $$q_{1} = 27 - 2p_{1} + p_{2}, \qquad q_{2} = 27 - 2p_{2} + p_{1}.$$

      Adopting the standard requires each firm to incur a fixed cost: $K = 30$. The standard is adopted only if both firms agree.

      **b.** Assume both firms adopt the standard. Find equilibrium prices, quantities, and profits after subtracting the adoption cost. Compare prices, quantities, and profits with part (a).
    solution: |
      FOC: $\dfrac{\partial \pi_1}{\partial p_1} = (27 - 2p_1 + p_2) - 2(p_1 - 6) = 39 - 4p_1 + p_2 = 0 \Rightarrow p_1 = \dfrac{39 + p_2}{4}.$

      Symmetric: $p = \dfrac{39+p}{4} \Rightarrow 3p = 39 \Rightarrow p = 13.$

      $$q = 27 - 2(13) + 13 = 14, \qquad \pi^{\text{gross}} = (13-6)\cdot 14 = 98, \qquad \pi^{\text{net}} = 98 - 30 = 68.$$

      > [!success] Answer (b)
      > $p^* = 13,\ q^* = 14,\ \pi^{\text{gross}} = 98,\ \pi^{\text{net}} = 68.$
      > **Versus (a):** price **falls** $20 \to 13$, quantity is **unchanged** at 14, profit **collapses** $196 \to 68$ (even before the fee, gross profit halves to 98).

      ![[PP01_open1_bertrand_br.png|620]]

      > [!warning] Why the standard hurts the firms
      > Making products "easier to compare and substitute" raises the **cross-price sensitivity** (the own-price slope goes from $-1$ to $-2$ and the rival term from $+\tfrac14$ to $+1$). More substitutability ⟹ fiercer price competition ⟹ lower margins. The standard is great for *consumers*, bad for *firms* — which sets up parts (c)–(d).

  - id: o1c
    title: "Open 1c — Will both firms adopt?"
    text: |
      **c.** Suppose firms simultaneously decide whether to adopt the standard. Is there an equilibrium in which both firms adopt?
    solution: |
      The standard forms **only if both agree**, so the adoption game has payoffs (using net profits from a and b):

      | 1 \ 2 | Adopt | Don't |
      |---|---|---|
      | **Adopt** | $(68,\ 68)$ | $(196,\ 196)$ |
      | **Don't** | $(196,\ 196)$ | $(196,\ 196)$ |

      *(If either firm declines, no standard forms and both get the part-(a) profit of 196.)*

      From $(\text{Adopt},\text{Adopt})$ a firm deviating to *Don't* jumps $68 \to 196$. So **"Don't adopt" is a (weakly) dominant strategy** and $(\text{Adopt},\text{Adopt})$ is **not** a Nash equilibrium.

      > [!success] Answer (c)
      > **No.** There is no equilibrium in which both adopt. Each firm prefers the high-margin status quo (196) to the cut-throat standardised market (68), and a single refusal blocks the standard. The unique outcome is **no adoption**.

      > [!tip] It's a (mild) prisoner's-dilemma cousin
      > Both would be fine staying differentiated; the standard would only help if it *expanded* the pie enough to offset tougher competition — here it doesn't.

  - id: o1d
    title: "Open 1d — For which K is adoption guaranteed?"
    text: |
      **d.** For which values of $K$ is adoption by both firms guaranteed in equilibrium? (Hint: $K$ may be also a subsidy, i.e., negative values.)
    solution: |
      For $(\text{Adopt},\text{Adopt})$ to be an equilibrium, adopting must beat deviating, given the rival adopts:

      $$\underbrace{98 - K}_{\text{adopt}} \;\ge\; \underbrace{196}_{\text{deviate to Don't}} \;\Longrightarrow\; K \le -98.$$

      > [!success] Answer (d)
      > Adoption is guaranteed only if $\boxed{K \le -98}$ — i.e. the "fee" must be a **subsidy of at least 98 per firm**. At $K = -98$ each firm's net profit under the standard is $98 + 98 = 196$, exactly matching the no-standard payoff; any larger subsidy makes adoption strictly dominant. The hint ("$K$ may be negative") is the giveaway: only a subsidy ≥ 98 overturns the firms' preference for soft competition.

  - id: o2a
    title: "Open 2a — Industry supply & competitive equilibrium"
    text: |
      Four coffee carts operate in a perfectly competitive market.

      Each cart has cost: $TC(q_{i}) = q_{i}^{2} + 64$. Market demand: $Q = 440 - 20p$.

      **a.** Find the industry supply function and the short-run equilibrium.
    solution: |
      Each [[_Micro Concepts#Price Taker|price-taking]] cart sets $P = MC$. With $MC = 2q_i$: $\;p = 2q_i \Rightarrow q_i = \tfrac{p}{2}$. Four carts give industry supply

      $$Q_s = 4\cdot \tfrac{p}{2} = 2p.$$

      Clear the market: $2p = 440 - 20p \Rightarrow 22p = 440 \Rightarrow \boxed{p = 20}$, so $Q = 40$ and each cart makes $q_i = 10$.

      > [!success] Answer (a)
      > Supply $Q_s = 2p$; equilibrium $p^* = 20,\ Q^* = 40,\ q_i = 10$. (Check: cart profit $= 20\cdot 10 - (10^2 + 64) = 200 - 164 = 36 > 0$, fine in the short run.)

  - id: o2b
    title: "Open 2b — Merger to monopoly + coffee card"
    text: |
      **b.** Suppose the four carts merge into a monopoly with: $TC = 0.25Q^{2}$. The monopoly sells a coffee card at price $T$ that includes several free coffees. Find $T$.
    solution: |
      The card is a [[_Micro Concepts#Two-Part Tariff|two-part tariff]]: a fixed fee $T$ plus a per-coffee price. The **optimal** two-part tariff sets the per-unit price at marginal cost and captures all [[_Micro Concepts#Consumer Surplus|consumer surplus]] through $T$ — i.e. [[_Micro Concepts#First-Degree Price Discrimination|first-degree price discrimination]].

      $MC = 0.5Q$. Efficient quantity where demand meets $MC$:

      $$22 - \tfrac{Q}{20} = 0.5Q \;\Rightarrow\; 22 = 0.55Q \;\Rightarrow\; Q = 40, \qquad p = MC = 20.$$

      Consumer surplus at $p=20$ (the card fee):

      $$T = \tfrac12(P_{\max} - p)\,Q = \tfrac12(22 - 20)\cdot 40 = \boxed{40}.$$

      > [!success] Answer (b)
      > Per-coffee price $= MC = 20$ and **card fee $T = 40$** (= the consumer surplus). Total firm profit $= 840 - TC(40) = 840 - 400 = 440$.

      ![[PP01_open2b_two_part_tariff.png|620]]

      > [!warning] "Free coffees" ≠ price-zero coffees
      > The card is described as including "free coffees", but the optimum is **not** to make coffee literally free. With rising $MC$, a zero per-unit price would push consumption to $Q=440$ (where demand hits 0) and cost $0.25(440)^2 = 48{,}400$ — a catastrophic loss. The per-unit price must equal $MC=20$ to hold consumption at the efficient 40; the fixed fee then skims the surplus. *(If your course instead wants a pure all-you-can-drink fee with marginal price 0, say so — the model and number change.)*

  - id: o2c
    title: "Open 2c — One uniform price, two groups"
    text: |
      **c.** MBA demand: $Q_{M} = 220 - 10p$, Other students: $Q_{R} = 220 - 20p$. The monopoly cannot price discriminate. Find the monopoly price.
    solution: |
      MBA demand $Q_M = 220 - 10p$ (chokes at $p = 22$); other students $Q_R = 220 - 20p$ (chokes at $p = 11$). The monopoly sets **one** price.

      Guess the optimum lies above 11 (so only MBAs buy) and verify. With only MBAs, $p = 22 - \tfrac{Q}{10}$, $MR = 22 - \tfrac{Q}{5}$, $MC = 0.5Q$:

      $$22 - \tfrac{Q}{5} = 0.5Q \;\Rightarrow\; 22 = 0.7Q \;\Rightarrow\; Q = \tfrac{220}{7} \approx 31.4, \quad p = 22 - \tfrac{Q}{10} = \tfrac{132}{7} \approx \boxed{18.86}.$$

      Since $18.86 > 11$, the other students indeed buy nothing — the guess is consistent. A grid search over all $p$ confirms this is the **global** optimum (profit ≈ 345.7; trying to serve both groups forces such a large $Q$ that the rising $MC$ wipes out profit — e.g. at $p=11$, $Q=110$, $MC=55 \gg p$, a huge loss).

      > [!success] Answer (c)
      > Monopoly price $p^* = \dfrac{132}{7} \approx 18.86$, serving MBAs only.

  - id: o2d
    title: "Open 2d — Price discrimination across days"
    text: |
      **d.** Now MBA students attend only on Fridays, and all other students attend only during weekdays. The monopoly can price discriminate. Find the prices.
    solution: |
      MBAs (Fri) and others (weekdays) are now **separable markets**, so set $MR_i = MC_i$ in each. Because the two groups are served on different days, each day's output carries its own cost $MC_i = 0.5Q_i$ ([[_Micro Concepts#Third-Degree Price Discrimination|third-degree price discrimination]]).

      **MBA (Friday):** $p = 22 - \tfrac{Q}{10},\ MR = 22 - \tfrac{Q}{5} = 0.5Q \Rightarrow Q = \tfrac{220}{7},\ p_M = \tfrac{132}{7} \approx 18.86.$

      **Others (weekday):** $p = 11 - \tfrac{Q}{20},\ MR = 11 - \tfrac{Q}{10} = 0.5Q \Rightarrow 11 = 0.6Q \Rightarrow Q = \tfrac{55}{3},\ p_R = \tfrac{121}{12} \approx 10.08.$

      > [!success] Answer (d)
      > $p_M = \dfrac{132}{7} \approx 18.86$ (MBAs, Fri) and $p_R = \dfrac{121}{12} \approx 10.08$ (others, weekdays). The high-WTP, *less* elastic MBA segment pays more — the standard third-degree result.

      ![[PP01_open2cd_coffee_pd.png|640]]

      > [!warning] Assumption — separable daily costs
      > Splitting the markets by day makes each day's production independent, so $MC$ depends only on that day's quantity. If instead one common $MC = 0.5(Q_M + Q_R)$ applied, solving $MR_M = MR_R = MC$ drives the weekday quantity **negative** (the low-value group gets dropped) — a sign that the per-day reading is the intended one. The MBA price is unchanged from (c) because MBAs were the only buyers there anyway.
---

# Sample Exam 1 — Worked Solutions

> Part of: [[Microeconomics]]
> **Sample Exam 1** (practice) — Micro 3 — Advanced Microeconomics | Tyomkin School of Economics, Reichman University
> Builds on: [[Topic 1 - Asymmetric Information]] · [[Topic 2 - Equilibrium in Different Market Structures]] · [[Topic 3 - Game Theory]] · [[Topic 4 - Price Competition with Complementary Goods]]
> Key concepts: [[_Micro Concepts#Bundling|Bundling]], [[_Micro Concepts#Moral Hazard|Moral Hazard]], [[_Micro Concepts#Actuarially Fair Premium|Actuarially Fair Premium]], [[_Micro Concepts#Price Discrimination|Price Discrimination]], [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]], [[_Micro Concepts#Bertrand Competition|Bertrand Competition]], [[_Micro Concepts#Nash Equilibrium|Nash Equilibrium]], [[_Micro Concepts#Mixed Strategy|Mixed Strategy]], [[_Micro Concepts#Perfect Competition|Perfect Competition]]

> [!warning] No official solutions
> This practice paper came **without** an answer key, so every answer below is **solved from scratch** and the arithmetic checked programmatically. Where the wording leaves room for interpretation (Q2-b "free coffees", Q2-d cost across days) the assumption is flagged in a callout. Treat the letter answers as well-reasoned, not gospel.

---

## 🧰 What this paper tests

> [!info] One paper, the whole course
> The six MC questions and two open questions sweep all four topics. The single most useful framing for revision:
> 1. **Q1, Q4, Open Q2** — [[_Micro Concepts#Monopoly|monopoly]] pricing tools: [[_Micro Concepts#Bundling|bundling]] vs separate sales, [[_Micro Concepts#Price Discrimination|price discrimination]], the [[_Micro Concepts#Two-Part Tariff|two-part tariff]]. Always start from **MR = MC** in each segment.
> 2. **Q2, Q3** — insurance under [[_Micro Concepts#Moral Hazard|moral hazard]]: an *uninsured* consumer pays $P = MC$; a *fully insured* one pays $P = 0$ and over-consumes. Every number falls out of that one idea.
> 3. **Q5, Open Q1c–d** — [[_Micro Concepts#Game Theory|game theory]]: dominant strategies, [[_Micro Concepts#Nash Equilibrium|Nash equilibrium]] (pure *and* mixed), and reading a 2×2 payoff matrix.
> 4. **Q6, Open Q1** — [[_Micro Concepts#Bertrand Competition|Bertrand]] price competition, homogeneous (Q6) and [[_Micro Concepts#Differentiated Products|differentiated]] (Open Q1).

<!--questions-->

---

## 🎯 One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **MC1** | Bundling | Uniform price over WTP ladder | **C** — \$1,300 (profit 600) |
| **MC2** | Insurance | Uninsured ⟹ $P=MC=2$ | **A** — 18.33 |
| **MC3** | Moral hazard | Fair premium 21.67 > 18.33 (loss 1.67) | **C** — ambiguous |
| **MC4** | Price discrimination | Fill govt cap, $MR_{\text{pub}}=MC=Q$ | **C** — 10@50 (govt), 30@70 (public) |
| **MC5** | Game theory | Matching pennies | **C** — no dominant strat., unique mixed NE |
| **MC6** | Bertrand (asym.) | Limit price at $MC_A$ or $p_B^m$ | **E** — B and C both correct |
| **Open 1a** | Diff. Bertrand | $MR=MC$, symmetry | $p=20,\ q=14,\ \pi=196$ |
| **Open 1b** | Diff. Bertrand | tougher demand, $-K$ | $p=13,\ q=14,\ \pi^{\text{net}}=68$ |
| **Open 1c** | Adoption game | "Don't" dominant | No adoption equilibrium |
| **Open 1d** | Adoption game | $98-K \ge 196$ | $K \le -98$ (subsidy ≥ 98) |
| **Open 2a** | Perfect comp. | $P=MC$, sum supplies | $Q_s=2p,\ p=20,\ Q=40$ |
| **Open 2b** | Two-part tariff | $p=MC$, $T=CS$ | $p=20,\ T=40$ |
| **Open 2c** | Uniform monopoly | MBAs only, $MR=MC$ | $p=132/7\approx 18.86$ |
| **Open 2d** | 3rd-degree PD | $MR_i=MC_i$ per day | $p_M\approx 18.86,\ p_R\approx 10.08$ |

> [!tip] Exam reflexes
> - **"Sold separately / single price"** → walk the WTP ladder; profit $= n(p-MC)$.
> - **"Uninsured"** → $P=MC$. **"Fully insured"** → $P=0$, over-consumption, fair premium computed on the *insured* quantities.
> - **Price discrimination / government buyer** → treat each channel's $MR$ separately; with rising $MC$, $MC$ depends on **total** output.
> - **"Two-part tariff / membership card"** → $p=MC$, fixed fee $=CS$; never literally price the good at zero when $MC$ rises.
> - **Matching-pennies wording** → no pure NE, **unique mixed** NE; "no Nash equilibrium" is the trap.
> - **Asymmetric Bertrand** → efficient firm limit-prices at the rival's $MC$ (or its own monopoly price, whichever is lower).

---

## 📎 Related Notes

- [[Topic 1 - Asymmetric Information]] — moral hazard & insurance (Q2–Q3)
- [[Topic 2 - Equilibrium in Different Market Structures]] — bundling, price discrimination, two-part tariffs, Bertrand, perfect competition (Q1, Q4, Q6, Open Q2)
- [[Topic 3 - Game Theory]] — dominant strategies, pure & mixed Nash equilibrium (Q5, Open Q1c–d)
- [[Topic 4 - Price Competition with Complementary Goods]] — Bertrand & best-response functions (Open Q1)
- [[Exercise 5 - Solutions]] — price discrimination & two-part tariffs (same toolkit as Open Q2)
- [[Exercise 7 - Solutions]] — Bertrand and monopolistic competition (Q6, Open Q1)
- [[Exercise 9 - Solutions]] — perfect competition & two-part tariff (Open Q2)
- [[Microeconomics]] — subject hub
