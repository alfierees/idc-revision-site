---
title: "EX-6"
subject: micro
tags:
  - microeconomics
  - assignment-solution
  - game-theory
  - nash-equilibrium
  - simultaneous-games
  - normal-form-game
  - best-response
  - travellers-dilemma
  - coordination-game
  - iterated-dominance
ai_drafted: true
questions:
  - id: "1a"
    text: |
      The payoff matrix (Player 1 picks row, Player 2 picks column):

      |  | **Right** | **Left** |
      |---|---|---|
      | **Up**   | $(c,\ 1)$ | $(1,\ a)$ |
      | **Down** | $(d,\ 1)$ | $(2,\ b)$ |

      Each cell is (P1's payoff, P2's payoff). Find conditions on $a, b, c, d$ under which **(Right, Down)** is the **unique** Nash Equilibrium.
    solution: |
      Use the [[How to Find Nash Equilibria — Best Response Method|best-response method]].

      First, observe that **(Left, Up) is never a NE** — P1 always prefers Down over Up when P2 plays Left (payoff $2 > 1$, regardless of parameters).

      | Profile | P1's condition | P2's condition | NE? |
      |---|---|---|---|
      | (Right, Up) | $c \geq d$ | $1 \geq a$ | iff $c \geq d$ AND $a \leq 1$ |
      | (Left, Up) | $1 \geq 2$? **never** | — | ❌ Never a NE |
      | (Right, Down) | $d \geq c$ | $1 \geq b$ | iff $d \geq c$ AND $b \leq 1$ |
      | (Left, Down) | $2 \geq 1$ always | $b \geq 1$ | iff $b \geq 1$ |

      **Conditions for (Right, Down) to be a NE:** $d \geq c$ and $b \leq 1$.

      **Conditions to rule out the other NE candidates:**
      - (Right, Up) must NOT be a NE: requires $d > c$ OR $a > 1$.
      - (Left, Down) must NOT be a NE: requires $b < 1$ — stricter than $b \leq 1$.

      > [!success] Answer (a)
      > **(Right, Down) is the unique NE if and only if:**
      > $$b < 1, \quad d \geq c, \quad \text{and} \quad (d > c \text{ or } a > 1)$$

      > [!tip] Intuition
      > $b < 1$ kills (Left, Down). $d \geq c$ makes Down P1's best response to Right. The last clause kills (Right, Up): if $d > c$ then P1 strictly prefers Down; if $d = c$ we additionally need $a > 1$ so P2 prefers Left over Right given Up.
    related_terms: ["nash-equilibrium", "best-response", "normal-form-game"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Same payoff matrix as 1a. Find conditions under which **both (Right, Up) AND (Left, Down)** are Nash Equilibria.
    solution: |
      From the best-response table in part (a):
      - (Right, Up) is a NE iff $c \geq d$ AND $a \leq 1$.
      - (Left, Down) is a NE iff $b \geq 1$.

      > [!success] Answer (b)
      > Both are NE if and only if:
      > $$c \geq d, \quad a \leq 1, \quad \text{and} \quad b \geq 1$$

      > [!tip] Intuition
      > This is a [[Coordination Game]] structure — two pure-strategy equilibria, neither player wants to unilaterally deviate from either profile. The players face a coordination problem (which equilibrium will they land on?).
    related_terms: ["coordination-game", "nash-equilibrium"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Two consumers choose between computer Model A or Model B. Consumer 1's base utility: $a > 0$ from A, 0 from B. Consumer 2's base utility: 0 from A, $b > 0$ from B. Both receive a network bonus $c > 0$ if they choose the **same** model. Construct the payoff matrix.
    solution: |
      Add base utility plus network bonus (only when both choose the same model):

      |       | **A**          | **B**          |
      | ----- | -------------- | -------------- |
      | **A** | $(a + c,\; c)$ | $(a,\; b)$     |
      | **B** | $(0,\; 0)$     | $(c,\; b + c)$ |

      **Reading each cell:**
      - **(A, A):** C1 gets preferred model ($a$) plus sharing bonus ($+c$). C2 gets only the sharing bonus ($c$, since A gives them 0 base utility).
      - **(A, B):** Different models — no sharing bonus. C1 gets $a$, C2 gets $b$.
      - **(B, A):** Both get their non-preferred model and no sharing bonus → $(0, 0)$.
      - **(B, B):** C2 gets preferred model ($b$) plus bonus ($+c$). C1 gets only the bonus ($c$).
    related_terms: ["coordination-game"]
    source_doc_page: 1
  - id: "2b"
    text: |
      For the technology-adoption game in 2a, find the condition on $a, b, c$ under which (A, A) is a Nash Equilibrium.
    solution: |
      Check best-response conditions:

      - **C1's BR to A:** $a + c$ vs $0$. Since $a + c > 0$ always, C1 always prefers A when C2 plays A. ✓ (no parameter restriction)
      - **C2's BR to A:** $c$ (choose A) vs $b$ (choose B). C2 prefers A iff $c \geq b$.

      > [!success] Answer (b)
      > **(A, A) is a Nash Equilibrium iff $c \geq b$.**

      > [!tip] Intuition
      > C1 always wants to match on A (their preferred model + bonus). The binding constraint is C2: C2 only abandons their preferred model B in order to match on A if the network bonus $c$ outweighs the preference loss $b$.
    related_terms: ["nash-equilibrium", "coordination-game"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Assume $a = b < c$. Find all Nash Equilibria of the technology-adoption game.
    solution: |
      Check all four profiles:

      | Profile | C1's BR check | C2's BR check | NE? |
      |---|---|---|---|
      | (A, A) | $a + c > 0$ ✓ | $c > b$ ✓ | ✅ |
      | (A, B) | $a < c$ → C1 prefers B ✗ | — | ❌ |
      | (B, A) | $a + c > 0$ → C1 prefers A ✗ | — | ❌ |
      | (B, B) | $a < c$ → C1 prefers B ✓ | $b + c > 0$ ✓ | ✅ |

      > [!success] Answer (c)
      > **Two Nash Equilibria: (A, A) and (B, B).**
      >
      > | Equilibrium | C1's payoff | C2's payoff |
      > |---|---|---|
      > | (A, A) | $a + c$ | $c$ |
      > | (B, B) | $c$ | $b + c = a + c$ |
      >
      > By symmetry ($a = b$) the two NE are mirror images: each consumer gets $a + c$ at their preferred equilibrium and $c$ at the other's. Both NE are Pareto-efficient — no third outcome makes both players strictly better off.

      > [!warning] The coordination problem
      > Players can't coordinate on (A, B) or (B, A) — those aren't stable. *Which* equilibrium they reach depends on expectations, history, or social norms — not pure rationality. See [[Coordination Game]].
    related_terms: ["coordination-game", "nash-equilibrium"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Traveller's Dilemma.** Two passengers each independently report an integer value $x, y \in \{180, 181, \ldots, 300\}$ NIS. Compensation is determined by the **lower** report, with:
      - **Higher reporter** → penalised 5 NIS ("greedy")
      - **Lower reporter** → bonus of 5 NIS ("modest")
      - **Equal reports** → each gets exactly what they reported

      Give the formal game description: players, strategy spaces, payoff functions.
    solution: |
      **Players:** $N = \{1, 2\}$ — the two passengers.

      **Strategy spaces:** $S_1 = S_2 = \{180, 181, \ldots, 300\}$ — each player independently chooses an integer.

      **Payoff functions:** given reports $(x, y)$,

      $$u_1(x, y) = \begin{cases} x + 5 & \text{if } x < y \\ x & \text{if } x = y \\ y - 5 & \text{if } x > y \end{cases} \qquad u_2(x, y) = \begin{cases} x - 5 & \text{if } x < y \\ y & \text{if } x = y \\ y + 5 & \text{if } x > y \end{cases}$$

      This is a **symmetric simultaneous-move game** with a finite strategy space.
    related_terms: ["travellers-dilemma", "game-theory"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Find all Nash Equilibria of the Traveller's Dilemma and prove uniqueness.
    solution: |
      **Claim.** The unique Nash Equilibrium is $(180, 180)$ — both passengers report 180 NIS and each receives 180 NIS.

      **Step 1 — Verify (180, 180) IS a NE.** Each player receives 180. Can P1 deviate profitably?
      - Deviate to $x > 180$: P1 gets $180 - 5 = 175 < 180$. ✗
      - Deviate to $x < 180$: impossible (180 is the minimum).

      No profitable deviation exists; by symmetry the same holds for P2. So (180, 180) is a NE ✓.

      **Step 2 — Prove no other NE exists.**

      **Case 1 — same value $v > 180$.** At $(v, v)$ each gets $v$. P1 deviates to $v - 1 \geq 180$: gets $(v - 1) + 5 = v + 4 > v$. Profitable. So no $(v, v)$ with $v > 180$ is a NE.

      **Case 2 — different values $x < y$ (WLOG).** P2 gets $x - 5$. Deviate to reporting $x$ (tie): gets $x > x - 5$. Profitable. So no asymmetric profile is a NE.

      > [!success] Conclusion
      > **(180, 180) is the unique NE.** Each player gets 180 NIS.
      >
      > | Profile | NE? | Why |
      > |---|---|---|
      > | $(180, 180)$ | ✅ | No profitable deviation possible |
      > | $(v, v)$ with $v > 180$ | ❌ | Deviate to $v-1$: gain 4 NIS |
      > | $(x, y)$ with $x \neq y$ | ❌ | Higher reporter deviates to tie: gain 5 NIS |

      > [!warning] Pareto-inferior equilibrium
      > If both reported 300, each would get 300 NIS — a Pareto improvement over the NE of 180. But $(300, 300)$ is not a NE because each player would rationally undercut. This is the Traveller's-Dilemma version of the [[Prisoner's Dilemma]] tragedy: individually rational behaviour leads to a collectively bad outcome via [[Iterated Dominance]].
    related_terms: ["travellers-dilemma", "iterated-dominance", "prisoners-dilemma", "nash-equilibrium"]
    source_doc_page: 1
---

> [!abstract] Toolkit used in this assignment
> 1. **Find pure NE in a matrix** by the [[How to Find Nash Equilibria — Best Response Method|best-response method]] — underline each player's best response and look for cells underlined by both.
> 2. **Prove uniqueness** by showing every other strategy profile has a profitable deviation for at least one player.
> 3. **Coordination games** can have multiple NE differing only in which equilibrium is selected — symmetry/Pareto-dominance/risk-dominance helps you predict which.
> 4. **Iterated-dominance unravelling** ([[Travellers Dilemma]]) shows that "everyone benefits from coordinating high" is not sufficient for a high outcome to be a NE.
