---
title: "Topic 3 — Game Theory"
topic: 3
semester: 2
course: "Micro 3 — Advanced Microeconomics"
tags:
  - microeconomics
  - game-theory
  - nash-equilibrium
  - strategic-interaction
  - dominated-strategies
  - mixed-strategy
  - prisoners-dilemma
subject: micro
in_scope: true
---
# Topic 3 — Game Theory

> Part of: [[Microeconomics]]
> Strategic Interaction, Normal-Form Games, Dominated Strategies, Nash Equilibrium, Mixed Strategies
> Micro 3 — Tiomkin School of Economics, Reichman University
> Key concepts: [[Game Theory]] · [[Nash Equilibrium]] · [[Dominated Strategy]] · [[Normal-Form Game]] · [[Mixed Strategy]] · [[Best Response]] · [[Prisoner's Dilemma]] · [[Coordination Game]]

---

## 🎮 1. What is Game Theory?

[[Game Theory]] provides formal tools to model and analyse **strategic situations** — situations where:
- Each player's outcome depends not just on their own actions, but on the **actions of others**.
- Rational players must account for others' behaviour when deciding what to do.

| Feature | Description |
|---|---|
| **Players** | The decision-makers in the game |
| **Strategies** | The actions available to each player |
| **Payoffs** | What each player receives for every combination of strategies |
| **Strategic situation** | My best action depends on what you do — and vice versa |

> [!info] Definition: A Game
> A **game** is a formal description of a strategic situation. It specifies the players, their available strategies, and the payoffs they receive for every possible strategy combination.

**Classic example:** Two firms in the same industry — each firm's profit depends on both its own decisions (hiring, pricing, advertising) and its rival's decisions. Neither can choose optimally without considering what the other will do.

---

## 📋 2. Normal-Form (Matrix) Representation

The **normal form** is the standard way to represent a simultaneous game — all strategies and payoffs in a **payoff matrix**.

> [!info] Reading a Payoff Matrix
> - **Rows** = strategies for Player 1
> - **Columns** = strategies for Player 2
> - Each **cell** = (payoff to P1, payoff to P2)
> - The **first number** is always Player 1's payoff

---

## 🎲 3. Types of Simultaneous Games

### 3.1 Zero-Sum (Competitive) Game

One player's gain is exactly the other's loss. Payoffs in every cell sum to zero.

**Example — Odd/Even:**

| | **O** (Even) | **E** (Odd) |
|---|---|---|
| **O** (Even) | 1, −1 | −1, 1 |
| **E** (Odd) | −1, 1 | 1, −1 |

> [!tip] Intuition
> In zero-sum games there is **pure conflict** — what's good for one player is bad for the other. There is no scope for cooperation.

---

### 3.2 Battle of the Sexes

A coordination game with **conflicting preferences** — both players prefer to coordinate, but disagree on where.

**Example:** A couple chooses between Football (F) and Ballet (B). Player 1 prefers Football, Player 2 prefers Ballet — but both prefer being together over being apart.

| | **F** (Football) | **B** (Ballet) |
|---|---|---|
| **F** (Football) | **2, 1** | 0, 0 |
| **B** (Ballet) | 0, 0 | **1, 2** |

> [!example] Key feature
> There are **two Nash Equilibria** in pure strategies: (F, F) and (B, B). The players face a coordination problem — which equilibrium will they land on?

---

### 3.3 Coordination Game

Both players want to coordinate, and one outcome is **Pareto-dominant** (better for both), but there's also a "safe" but worse equilibrium.

**Version 1 — Simple:**

| | **T** | **M** |
|---|---|---|
| **T** | **3, 3** | 0, 0 |
| **M** | 0, 0 | **1, 1** |

**Version 2 — With catastrophic downside:**

| | **A** | **B** |
|---|---|---|
| **A** | **3, 3** | −100, 0 |
| **B** | 0, −100 | **1, 1** |

> [!warning] Common exam point
> In Version 2, **(A, A) is Pareto-dominant** but **(B, B) is risk-dominant** — the "safe" choice, because deviating to A when the other plays B is catastrophic (payoff = −100). Exam questions often ask you to identify both equilibria and comment on which is more likely to emerge.

---

### 3.4 Marketing Competition / Prisoner's Dilemma

Two firms decide whether to **hire a marketing agent** or not.

| | **Not hire** | **Hire** |
|---|---|---|
| **Not hire** | 5, 5 | 3, 6 |
| **Hire** | 6, 3 | **4, 4** |

> [!info] This is the structure of the **Prisoner's Dilemma**
> - Mutual cooperation (Not hire, Not hire) → (5, 5): the collectively best outcome.
> - But each firm has an incentive to deviate: "Hire" always yields more regardless of the opponent's choice (6 > 5; 4 > 3).
> - The Nash Equilibrium is **(Hire, Hire) → (4, 4)**, which is **worse for both** than (Not hire, Not hire) → (5, 5).
> - **"Hire" is a dominant strategy** for each player.

> [!tip] Intuition — The Prisoner's Dilemma Tragedy
> Individual rationality leads to a collectively irrational outcome. Neither player can trust the other to cooperate, so both defect and end up worse off. This explains why cartels need enforcement, countries need treaties, etc.

### Comparison: Game Types

| Game Type | Conflict | Coordination | # Pure NE | Key Feature |
|---|---|---|---|---|
| **Zero-Sum** | Full | None | 0 (usually) | Gains = Losses |
| **Prisoner's Dilemma** | Partial | Possible | 1 (Pareto-inferior) | Dominant strategy → bad outcome |
| **Battle of the Sexes** | Partial | Yes | 2 | Which equilibrium? |
| **Coordination Game** | None | Yes | 2 | Risk vs Pareto dominance |
| **Rock-Paper-Scissors** | Full | None | 0 pure, 1 mixed | Only mixed NE exists |

---

## ❌ 4. Dominated Strategies

> [!info] Definition: Strictly Dominated Strategy
> Strategy $s_i$ is **strictly dominated** by $s_i'$ if, for **every** possible strategy of the opponent, $s_i'$ gives a strictly higher payoff:
> $$u_i(s_i', s_{-i}) > u_i(s_i, s_{-i}) \quad \forall \, s_{-i}$$
> A rational player will **never** play a strictly dominated strategy.

> [!info] Definition: Weakly Dominated Strategy
> Strategy $s_i$ is **weakly dominated** by $s_i'$ if $s_i'$ does at least as well in all cases and strictly better in at least one:
> $$u_i(s_i', s_{-i}) \geq u_i(s_i, s_{-i}) \quad \forall \, s_{-i}, \quad \text{with strict inequality for some } s_{-i}$$

> [!warning] Common mistake
> Don't confuse **dominant strategy** with **best response**. A dominant strategy beats all others *regardless* of what the opponent does. A best response is only optimal *given a specific* opponent strategy. Every dominant strategy is a best response, but not vice versa.

### Worked Example — Marketing Competition

| | **Not hire** | **Hire** |
|---|---|---|
| **Not hire** | 5, 5 | 3, 6 |
| **Hire** | 6, 3 | 4, 4 |

For **Player 1**:
- If P2 plays "Not hire": Hire gives 6 > Not hire gives 5 ✓
- If P2 plays "Hire": Hire gives 4 > Not hire gives 3 ✓

→ **"Hire" strictly dominates "Not hire"** for Player 1. By symmetry, the same holds for Player 2.

---

## 🔁 5. Iterated Elimination of Strictly Dominated Strategies (IESDS)

Since rational players never play dominated strategies — and they *know* their opponents are rational too — we can **iteratively eliminate** dominated strategies until none remain.

> [!info] IESDS Algorithm
> 1. Find any strictly dominated strategy for any player and eliminate it.
> 2. Repeat on the reduced game.
> 3. Stop when no strictly dominated strategies remain.
> The **order of elimination does not affect the final result**.

> [!tip] Key Theorem
> **A Nash Equilibrium is never eliminated by IESDS.** If IESDS yields a unique outcome, that outcome is the unique Nash Equilibrium. Use this as a sanity check.

### Worked Example — 4×4 Game

| | **A** | **B** | **C** | **D** |
|---|---|---|---|---|
| **A** | 5, 2 | 2, 6 | 1, 4 | 0, 4 |
| **B** | 0, 0 | 3, 2 | 2, 1 | 1, 1 |
| **C** | 7, 0 | 2, 2 | 1, 5 | 5, 1 |
| **D** | 9, 5 | 1, 3 | 0, 2 | 4, 8 |

> [!example] How to approach IESDS
> 1. **For the row player (P1):** For each pair of rows, check if one gives a strictly higher payoff across **all columns**. If yes, eliminate the dominated row.
> 2. **For the column player (P2):** For each pair of columns, check if one gives a strictly higher payoff across **all rows**. If yes, eliminate the dominated column.
> 3. Repeat on the smaller matrix until nothing more can be eliminated.

> [!tip] Exam shortcut
> When checking whether row $X$ dominates row $Y$ for Player 1: go column by column and check if $X > Y$ in **every** column. If even one column has $Y \geq X$, it's not strict dominance.

---

## ⚖️ 6. Nash Equilibrium

> [!info] Definition: Nash Equilibrium
> A **Nash Equilibrium (NE)** is a strategy profile $(s_1^*, s_2^*, \ldots, s_n^*)$ such that **no player can improve their payoff by unilaterally deviating**, given the strategies of all others:
> $$\boxed{u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \forall \, s_i, \; \forall \, i}$$

> [!tip] Intuition
> At a Nash Equilibrium, every player is playing a **best response** to what the others are doing. There is no regret: knowing everyone else's strategy, no one wants to change theirs unilaterally.

### How to Find Nash Equilibria — Best Response Method

1. For each **column**, find the **row** that gives Player 1 the highest payoff → underline that payoff.
2. For each **row**, find the **column** that gives Player 2 the highest payoff → underline that payoff.
3. Any cell where **both payoffs are underlined** is a Nash Equilibrium.

> [!example] Best Response Method — Prisoner's Dilemma

| | **Not hire** | **Hire** |
|---|---|---|
| **Not hire** | 5, 5 | 3, **<u>6</u>** |
| **Hire** | **<u>6</u>**, 3 | **<u>4</u>**, **<u>4</u>** |

- P1's BR: "Hire" is best regardless of P2 (6 > 5; 4 > 3) → underline 6 and 4 in "Hire" row.
- P2's BR: "Hire" is best regardless of P1 (6 > 5; 4 > 3) → underline 6 and 4 in "Hire" column.
- **Nash Equilibrium: (Hire, Hire) → (4, 4)** ✓

### Nash Equilibria for Each Game

**Prisoner's Dilemma:**
$$\boxed{NE = (\text{Hire, Hire}) \rightarrow (4,\, 4)}$$
Only one NE, even though (Not hire, Not hire) → (5, 5) is Pareto-superior. This is the dilemma.

---

**Battle of the Sexes:**

| | **F** | **B** |
|---|---|---|
| **F** | **<u>2</u>**, **<u>1</u>** | 0, 0 |
| **B** | 0, 0 | **<u>1</u>**, **<u>2</u>** |

$$\boxed{NE_1 = (F,\, F) \rightarrow (2,\,1) \qquad NE_2 = (B,\, B) \rightarrow (1,\,2)}$$

Two pure-strategy NE. Coordination problem: each player prefers a different one.

---

**Coordination Game (with catastrophe):**

| | **A** | **B** |
|---|---|---|
| **A** | **<u>3</u>**, **<u>3</u>** | −100, 0 |
| **B** | 0, −100 | **<u>1</u>**, **<u>1</u>** |

$$\boxed{NE_1 = (A,\, A) \rightarrow (3,\,3) \qquad NE_2 = (B,\, B) \rightarrow (1,\,1)}$$

(A, A) is Pareto-dominant; (B, B) is risk-dominant.

---

## 🎰 7. Mixed Strategy Nash Equilibrium

Not every game has a pure-strategy Nash Equilibrium. When players **randomise** over their strategies, we get a **mixed-strategy equilibrium**.

> [!info] Definition: Mixed Strategy
> A **mixed strategy** assigns a **probability distribution** over pure strategies. Player $i$ plays strategy $s_i^k$ with probability $p_k$, where $\sum_k p_k = 1$.

> [!info] Key Condition for a Mixed NE
> At a mixed-strategy NE, a player must be **indifferent** between all strategies played with positive probability — otherwise they would deviate entirely to the strictly better one:
> $$EU_i(s_i^k) = EU_i(s_i^j) \quad \text{for all strategies played with positive probability}$$

### Classic Example — Rock, Paper, Scissors

|       | **R** | **P** | **S** |
| ----- | ----- | ----- | ----- |
| **R** | 0, 0  | −1, 1 | 1, −1 |
| **P** | 1, −1 | 0, 0  | −1, 1 |
| **S** | −1, 1 | 1, −1 | 0, 0  |

**Is there a pure-strategy NE?**

No — R → P → S → R → ... Best responses cycle and never settle. No pure NE exists.

![[T3_rps_cycle.png|520]]

> [!tip] Why the cycle rules out a pure equilibrium
> Whatever your opponent commits to, your best response beats it — but then *their* best response beats *yours*, and so on around the loop. No strategy profile is stable, so there can be no pure-strategy Nash equilibrium. The only equilibrium is to randomise uniformly, $(\tfrac13,\tfrac13,\tfrac13)$, which leaves your opponent indifferent and unable to exploit you.

**Mixed-strategy NE:**

$$\boxed{NE = \left(\tfrac{1}{3}R + \tfrac{1}{3}P + \tfrac{1}{3}S, \;\; \tfrac{1}{3}R + \tfrac{1}{3}P + \tfrac{1}{3}S\right)}$$

**Verification** — if P2 plays $(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$, Player 1's expected payoffs are:

$$EU_1(R) = 0 \cdot \tfrac{1}{3} + (-1) \cdot \tfrac{1}{3} + 1 \cdot \tfrac{1}{3} = 0$$
$$EU_1(P) = 1 \cdot \tfrac{1}{3} + 0 \cdot \tfrac{1}{3} + (-1) \cdot \tfrac{1}{3} = 0$$
$$EU_1(S) = (-1) \cdot \tfrac{1}{3} + 1 \cdot \tfrac{1}{3} + 0 \cdot \tfrac{1}{3} = 0$$

Player 1 is indifferent → any mixing is a best response → $(\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$ is rational. ✓

> [!tip] Mixed NE in Battle of the Sexes (beyond pure NE)
> Let Player 1 play F with probability $p$, Player 2 play F with probability $q$.
>
> **Make P1 indifferent** (P2 chooses $q$):
> $$EU_1(F) = EU_1(B) \implies 2q = 1(1-q) \implies 3q = 1 \implies q = \tfrac{1}{3}$$
>
> **Make P2 indifferent** (P1 chooses $p$):
> $$EU_2(F) = EU_2(B) \implies 1 \cdot p = 2(1-p) \implies 3p = 2 \implies p = \tfrac{2}{3}$$
>
> **Mixed NE:** P1 plays F with prob $\frac{2}{3}$; P2 plays F with prob $\frac{1}{3}$.

![[T3_bos_mixed_br.png|600]]

> [!example] All three equilibria in one picture
> Each axis is a player's probability of choosing Football. The blue and red step-functions are the two players' best responses: a player jumps from "definitely Ballet" to "definitely Football" once the other is likely enough to play Football. The correspondences intersect in **three** places — the two corners are the pure equilibria (F,F) and (B,B), and the interior crossing at $(p=\tfrac23,\,q=\tfrac13)$ is the mixed equilibrium. The mixed NE is the one where each player makes the *other* exactly indifferent.

---

## 📐 8. Solution Concepts — Summary Table

| Concept | Logic | Requires | Strength |
|---|---|---|---|
| **Strict dominance** | Never play a strategy worse in all cases | Rationality | Weak — few games have dominant strategies |
| **IESDS** | Iteratively remove dominated strategies | Common knowledge of rationality | Medium — narrows down outcomes |
| **Nash Equilibrium** | No player wants to deviate | Mutual best responses | Strong — stable prediction |
| **Mixed NE** | Players randomise; opponents indifferent | Correct beliefs about mixing probabilities | Always exists in finite games |

---

## 📝 9. Practice Questions & Worked Answers

### Q1 — Find all Nash Equilibria

**Game:**

| | **L** | **R** |
|---|---|---|
| **U** | 3, 2 | 1, 4 |
| **D** | 2, 1 | 4, 3 |

**Method — underline best responses:**

- P1 vs col L: max(3, 2) = 3 → underline U. P1 vs col R: max(1, 4) = 4 → underline D.
- P2 vs row U: max(2, 4) = 4 → underline R. P2 vs row D: max(1, 3) = 3 → underline R.

| | **L** | **R** |
|---|---|---|
| **U** | <u>3</u>, 2 | 1, <u>4</u> |
| **D** | 2, 1 | <u>4</u>, <u>3</u> |

**Nash Equilibrium: (D, R) → (4, 3).** Only cell with both underlined. ✓

---

### Q2 — Identify dominated strategies

**Is "U" dominated in the game above?**

- vs L: U gives 3, D gives 2 → U > D ✓
- vs R: U gives 1, D gives 4 → D > U ✗

→ **U is not dominated** (it wins in one column). Neither strategy is strictly dominated here.

---

### Q3 — Apply IESDS step by step

**Game:**

| | **L** | **C** | **R** |
|---|---|---|---|
| **T** | 4, 3 | 2, 1 | 3, 2 |
| **M** | 3, 4 | 3, 3 | 2, 3 |
| **B** | 2, 2 | 1, 2 | 4, 4 |

**Step 1 — Player 2's columns:**
Does C dominate L? P2 gets: C=(3,1,2) vs L=(3,4,2). Row M: 1 < 4 ✗. No.
Does R dominate C? P2 gets: R=(2,3,4) vs C=(1,3,2). All R ≥ C, and Row T: 2>1, Row B: 4>2 → **R weakly dominates C**. Eliminate C (if using weak dominance — check if exam allows).

**Step 1 (strict only) — Player 1's rows:**
Does T dominate B? T=(4,2,3) vs B=(2,1,4). Col R: 3 < 4 ✗. No.
Does M dominate B? M=(3,3,2) vs B=(2,1,4). Col R: 2 < 4 ✗. No.

> [!note]
> Always state whether you're using **strict** or **weak** dominance — the exam may specify. Strict dominance is the default.

---

### Q4 — Solve for the Mixed-Strategy NE

**Find the mixed NE of:**

| | **L** | **R** |
|---|---|---|
| **U** | 0, 2 | 3, 0 |
| **D** | 2, 0 | 0, 3 |

**Step 1: Find $q$ (prob P2 plays L) to make P1 indifferent:**
$$EU_1(U) = 0 \cdot q + 3(1-q) = 3 - 3q$$
$$EU_1(D) = 2 \cdot q + 0(1-q) = 2q$$
Set equal: $3 - 3q = 2q \implies 3 = 5q \implies q = \tfrac{3}{5}$

**Step 2: Find $p$ (prob P1 plays U) to make P2 indifferent:**
$$EU_2(L) = 2p + 0(1-p) = 2p$$
$$EU_2(R) = 0 \cdot p + 3(1-p) = 3 - 3p$$
Set equal: $2p = 3 - 3p \implies 5p = 3 \implies p = \tfrac{3}{5}$

$$\boxed{NE = \left(\tfrac{3}{5}U + \tfrac{2}{5}D, \;\; \tfrac{3}{5}L + \tfrac{2}{5}R\right)}$$

---

### Q5 — Essay: Why is the Prisoner's Dilemma NE Pareto-Inefficient, and How Can Players Escape It?

**Model answer:**

In the Prisoner's Dilemma, "Hire" is a **dominant strategy** for both players — it yields a higher payoff regardless of the opponent's action (6 > 5 if the other cooperates; 4 > 3 if the other defects). Rational players therefore both choose "Hire", yielding payoffs (4, 4).

This outcome is **Pareto-inefficient** because an alternative allocation — (Not hire, Not hire) → (5, 5) — makes both players strictly better off. The problem is that individual rationality and collective rationality diverge: following the dominant strategy is individually optimal but collectively disastrous.

**Escaping the Prisoner's Dilemma requires changing the structure:**

- **Repeated interaction (Folk Theorem):** If the game is played infinitely (or with uncertain end), cooperation can be sustained via strategies like "Tit for Tat" — cooperate first, then mirror the opponent's last move. The threat of future punishment disciplines defection.
- **Binding contracts:** If players can make enforceable pre-game commitments (e.g., via a regulator or legal agreement), they can credibly commit to cooperating.
- **Internalised social preferences:** If payoffs include the opponent's welfare (altruism or guilt from defection), the dominant strategy may shift toward cooperation.
- **Communication:** Pre-play "cheap talk" can coordinate expectations in some settings, though it is not binding.

---

## ✅ 10. Summary

Game theory provides the tools to analyse any situation where outcomes are interdependent. From this topic:

- **Normal form:** represent games as payoff matrices; rows = P1 strategies, columns = P2 strategies, cells = (P1 payoff, P2 payoff).
- **Dominated strategies:** never played by rational agents. Eliminate them iteratively (IESDS) to narrow the strategy space.
- **Nash Equilibrium:** a strategy profile where no one wants to deviate. Find it by underlining best responses — doubly underlined cells are NE.
- **Multiple NE:** games can have 0, 1, or many pure-strategy NE (but always at least one mixed-strategy NE in finite games).
- **Prisoner's Dilemma:** dominant strategies lead to a Pareto-inferior outcome — escaping requires repeated play, contracts, or preference changes.
- **Mixed-strategy NE:** solve by making the *opponent* indifferent between their strategies.

> [!tip] Exam Checklist
> 1. Write out the payoff matrix clearly.
> 2. Underline best responses — find pure NE (doubly underlined cells).
> 3. Check for dominant strategies — if one exists, it's always played.
> 4. Apply IESDS if asked — be systematic, check strict dominance column by column.
> 5. For mixed NE: set $EU_i(s^k) = EU_i(s^j)$ and solve for the opponent's mixing probability.
> 6. Sanity check: NE must survive IESDS — if it doesn't, re-check your work.

---

## 🔗 Related Notes

- [[Microeconomics]] — subject hub
- [[Topic 1 - Asymmetric Information]]
- [[Topic 2 - Equilibrium in Different Market Structures]]
