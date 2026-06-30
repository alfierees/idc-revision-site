---
title: "EX-8"
subject: micro
tags:
  - microeconomics
  - assignment-solution
  - cournot-competition
  - stackelberg-model
  - quantity-competition
  - nash-equilibrium
  - cartel
  - collusion
  - merger
  - common-resource
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Cournot vs Stackelberg.** $P = 120 - Q$ with $Q = q_1 + q_2$. Each firm has constant MC = 70.

      Find the Cournot–Nash equilibrium quantities, total quantity, price, and profits.
    solution: |
      Apply the standard symmetric [[Cournot Competition|Cournot]] recipe.

      **Firm 1's FOC:** $\pi_1 = (120 - q_1 - q_2) q_1 - 70 q_1$, $\partial \pi_1 / \partial q_1 = 120 - 2 q_1 - q_2 - 70 = 0$ ⇒
      $$q_1 = \frac{50 - q_2}{2}$$

      Symmetric: $q_2 = (50 - q_1)/2$. By symmetry $q_1 = q_2 = q$: $q = (50 - q)/2 \Rightarrow 3q = 50 \Rightarrow q = 50/3 \approx 16.67$.

      $$Q = \tfrac{100}{3} \approx 33.3, \qquad P = 120 - \tfrac{100}{3} = \tfrac{260}{3} \approx 86.67$$

      $$\pi_1 = \pi_2 = (P - 70) q = \tfrac{50}{3} \cdot \tfrac{50}{3} = \tfrac{2{,}500}{9} \approx 277.8$$

      > [!success] Cournot–Nash
      > $q_1 = q_2 = 50/3$, $Q = 100/3$, $P \approx 86.67$, $\pi_i \approx 277.8$.
    related_terms: ["cournot-competition", "best-response-function", "nash-equilibrium"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Same setup as 1a. Firm 1 is now the Stackelberg leader (chooses $q_1$ first; Firm 2 observes and best-responds). Find $q_1$, $q_2$, $Q$, $P$, and profits.
    solution: |
      **Follower's reaction function** (same as Cournot): $q_2 = (50 - q_1)/2$.

      **Substitute into leader's profit:**
      $$\pi_1 = (50 - q_1 - q_2) q_1 = \left(50 - q_1 - \tfrac{50 - q_1}{2}\right) q_1 = \frac{50 - q_1}{2} q_1$$

      **Leader's FOC:** $d\pi_1/dq_1 = (50 - 2 q_1)/2 = 0 \Rightarrow q_1 = 25$, and then $q_2 = (50 - 25)/2 = 12.5$.

      $$Q = 37.5, \quad P = 120 - 37.5 = 82.5$$
      $$\pi_1 = (82.5 - 70) \cdot 25 = 312.5, \qquad \pi_2 = 12.5 \cdot 12.5 = 156.25$$

      ![](/images/micro/ex8-q1-cournot-stackelberg.png)

      > [!tip] Reading the picture
      > Both reaction lines slope **down** — outputs are strategic substitutes. Their crossing is the Cournot point $(16.7, 16.7)$. The leader, knowing Firm 2 will sit on its reaction line, picks the point on that line best for itself — pushing out to $q_1 = 25$ and forcing the follower down to $12.5$.

      > [!success] Stackelberg
      > $q_1 = 25$, $q_2 = 12.5$, $P = 82.5$. Leader earns **312.5**, follower **156.25**.

      > [!tip] First-mover advantage
      > Committing to a larger quantity forces the follower to scale back along its [[Best Response Function|reaction function]]. The leader's profit rises ($312.5 > 277.8$) while the follower's falls ($156.25 < 277.8$). Total output rises and price falls — consumers gain too.
    related_terms: ["stackelberg-model", "cournot-competition", "best-response-function"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Compare the Cournot (1a) and Stackelberg (1b) outcomes and explain the differences.
    solution: |
      | Outcome | Cournot | Stackelberg |
      |---|---|---|
      | $q_1$ | $16.67$ | $25$ ↑ |
      | $q_2$ | $16.67$ | $12.5$ ↓ |
      | $Q$ | $33.3$ | $37.5$ ↑ |
      | $P$ | $86.67$ | $82.5$ ↓ |
      | $\pi_1$ | $277.8$ | $312.5$ ↑ |
      | $\pi_2$ | $277.8$ | $156.25$ ↓ |

      > [!success] First-mover advantage
      > Moving first is a credible commitment: Firm 1 produces a large quantity *before* Firm 2 chooses, and the rational follower scales back. The leader captures a bigger slice of a slightly bigger pie; the follower loses on both fronts. Consumers gain because total output is higher.

      > [!tip] Visualise it — reaction functions
      > The two best-response lines cross at the Cournot–Nash point ($q_1 = q_2 = 50/3$). The Stackelberg leader moves first and slides out along Firm 2's reaction line to $(25, 12.5)$. Drag the marginal cost to see both shift.

      ```graph
      type: cournot-reaction
      ```
    related_terms: ["stackelberg-model", "cournot-competition"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Cournot vs monopoly (acquisition).** Identical firms with $TC(q) = 80 q$ ($MC = 80$). Inverse demand $P = 200 - Q$.

      Find the Cournot equilibrium quantities, total quantity, price, and per-firm profits.
    solution: |
      **Firm 1's FOC:** $\pi_1 = (200 - q_1 - q_2) q_1 - 80 q_1$, $200 - 2 q_1 - q_2 - 80 = 0 \Rightarrow q_1 = (120 - q_2)/2$. Symmetric.

      $q_1 = q_2 = q$: $q = (120 - q)/2 \Rightarrow 3q = 120 \Rightarrow q = 40$.

      $$Q = 80, \quad P = 200 - 80 = 120, \quad \pi_1 = \pi_2 = (120 - 80) \times 40 = 1{,}600$$

      > [!success] Cournot equilibrium
      > $q_1 = q_2 = 40$, $P = 120$, $\pi_i = 1{,}600$.
    related_terms: ["cournot-competition"]
    source_doc_page: 2
  - id: "2b"
    text: |
      Same setup as 2a. How much would Firm 1 be willing to pay to acquire Firm 2 (turning the duopoly into a monopoly)? What is the minimum Firm 2 would accept?
    solution: |
      If Firm 1 owns both firms it becomes a monopoly: $\Pi^M = (200 - Q - 80) Q = (120 - Q) Q$. FOC: $120 - 2Q = 0 \Rightarrow Q^M = 60$. So $P^M = 140$ and $\Pi^M = (140 - 80) \cdot 60 = 3{,}600$.

      **Maximum Firm 1 will pay** = extra profit from acquisition = monopoly profit − own duopoly profit:
      $$\overline{X} = 3{,}600 - 1{,}600 = 2{,}000$$

      **Minimum Firm 2 will accept** = profit it gives up by selling:
      $$\underline{X} = 1{,}600$$

      > [!success] Answer
      > $\overline{X} = 2{,}000 > \underline{X} = 1{,}600$ — there's a **bargaining surplus of 400**, so the deal can happen at any price between 1,600 and 2,000. Removing Cournot competition unlocks enough monopoly profit to compensate the seller and still leave the buyer ahead.
    related_terms: ["cournot-competition", "vertical-integration"]
    source_doc_page: 2
  - id: "3a"
    text: |
      **Cournot with asymmetric, increasing MC.** $P = 550 - Q$. $TC(q_1) = 0.5 q_1^2$ (so $MC_1 = q_1$) and $TC(q_2) = q_2^2$ (so $MC_2 = 2 q_2$). Firm 1 is lower-cost.

      Find the Cournot equilibrium.
    solution: |
      **Firm 1's FOC:** $\pi_1 = (550 - q_1 - q_2) q_1 - 0.5 q_1^2$, $550 - 2 q_1 - q_2 - q_1 = 0 \Rightarrow$
      $$q_1 = \frac{550 - q_2}{3}$$

      **Firm 2's FOC:** $\pi_2 = (550 - q_1 - q_2) q_2 - q_2^2$, $550 - q_1 - 2 q_2 - 2 q_2 = 0 \Rightarrow$
      $$q_2 = \frac{550 - q_1}{4}$$

      **Solving simultaneously:**
      $$q_1 = \frac{550 - (550 - q_1)/4}{3} = \frac{1650 + q_1}{12} \Rightarrow 11 q_1 = 1{,}650 \Rightarrow q_1 = 150$$
      $$q_2 = (550 - 150)/4 = 100$$

      $$Q = 250, \quad P = 300$$
      $$\pi_1 = 300 \cdot 150 - 0.5 \cdot 150^2 = 45{,}000 - 11{,}250 = 33{,}750$$
      $$\pi_2 = 300 \cdot 100 - 100^2 = 30{,}000 - 10{,}000 = 20{,}000$$

      ![](/images/micro/ex8-q3-reaction-functions.png)

      > [!success] Cournot–Nash
      > $q_1 = 150$, $q_2 = 100$, $P = 300$, $\pi_1 = 33{,}750$, $\pi_2 = 20{,}000$.

      > [!note] Why Firm 1's reaction line is steeper
      > Firm 1's MC rises at slope 1, Firm 2's at slope 2. The cheaper firm wants the larger market share, so the Cournot point sits at $q_1 > q_2$.
    related_terms: ["cournot-competition", "best-response-function"]
    source_doc_page: 3
  - id: "3b"
    text: |
      Same setup as 3a. Now Firm 1 is the Stackelberg leader. Find equilibrium quantities, price, and profits.
    solution: |
      **Follower's reaction function:** $q_2 = (550 - q_1)/4$.

      **Substitute into leader's profit:** $550 - q_1 - q_2 = 3 (550 - q_1) / 4$, so
      $$\pi_1 = \tfrac{3 (550 - q_1)}{4} q_1 - 0.5 q_1^2 = 412.5 q_1 - 1.25 q_1^2$$

      **Leader's FOC:** $412.5 - 2.5 q_1 = 0 \Rightarrow q_1 = 165$. Then $q_2 = (550 - 165)/4 = 96.25$.

      $$Q = 261.25, \quad P = 288.75$$
      $$\pi_1 = 288.75 \cdot 165 - 0.5 \cdot 165^2 = 47{,}643.75 - 13{,}612.5 = 34{,}031.25$$
      $$\pi_2 = 288.75 \cdot 96.25 - 96.25^2 = 27{,}792.19 - 9{,}264.06 = 18{,}528.13$$

      > [!success] Stackelberg outcome
      > $q_1 = 165$, $q_2 = 96.25$, $\pi_1 = 34{,}031$, $\pi_2 = 18{,}528$. Leader gains 281; follower loses 1,472.
    related_terms: ["stackelberg-model", "cournot-competition"]
    source_doc_page: 3
  - id: "3c"
    text: |
      Compare the Cournot and Stackelberg outcomes from 3a/3b. Why is the first-mover advantage smaller than in Q1?
    solution: |
      | Outcome | Cournot | Stackelberg |
      |---|---|---|
      | $q_1$ | $150$ | $165$ ↑ |
      | $q_2$ | $100$ | $96.25$ ↓ |
      | $Q$ | $250$ | $261.25$ ↑ |
      | $P$ | $300$ | $288.75$ ↓ |
      | $\pi_1$ | $33{,}750$ | $34{,}031$ ↑ |
      | $\pi_2$ | $20{,}000$ | $18{,}528$ ↓ |

      Qualitatively identical to Q1 — leader expands, follower contracts. But the shifts are **much smaller** ($q_1$ rises only $150 \to 165$).

      > [!success] Why the muted effect
      > **Increasing marginal cost.** Every extra unit the leader produces is more expensive, so over-expanding becomes self-limiting. Convex costs blunt the first-mover advantage. With *constant* MC (Q1) the leader could ramp up cheaply; with *rising* MC the marginal expansion quickly hits its own cost wall.
    related_terms: ["cournot-competition", "stackelberg-model"]
    source_doc_page: 3
  - id: "4a"
    text: |
      **Cournot, cartel, and cheating.** Identical firms with $TC(q) = 80 q$ ($MC = 80$), $P = 200 - Q$. (Same numbers as Q2.)

      Find the Cournot equilibrium.
    solution: |
      Identical to Q2a:
      $$q_1 = q_2 = 40, \quad Q = 80, \quad P = 120, \quad \pi_i = 1{,}600, \quad \Pi = 3{,}200$$

      > [!success] Cournot
      > Each firm earns 1,600; industry profit 3,200.
    related_terms: ["cournot-competition"]
    source_doc_page: 4
  - id: "4b"
    text: |
      Same setup as 4a. The two firms form a cartel to maximise joint profit. Find each firm's quota and profit.
    solution: |
      The [[Cartel]] acts as one monopolist: $\Pi = (200 - Q - 80) Q = (120 - Q) Q$. FOC: $120 - 2Q = 0 \Rightarrow Q^{\text{cartel}} = 60$, $P = 140$.

      Splitting equally, each firm produces $q = 30$:
      $$\pi_i = (140 - 80) \cdot 30 = 1{,}800, \qquad \Pi = 3{,}600$$

      > [!success] Cartel quota
      > Each firm produces 30 and earns **1,800** — joint profit 3,600 (vs Cournot 3,200, a gain of 400).
    related_terms: ["cartel"]
    source_doc_page: 4
  - id: "4c"
    text: |
      Same setup as 4a/4b. Firm 1 cheats on the cartel agreement by best-responding to Firm 2's cartel quota $q_2 = 30$. Find Firm 1's optimal deviation and profit.
    solution: |
      Given $q_2 = 30$, Firm 1's reaction function is $q_1 = (120 - q_2)/2 = (120 - 30)/2 = 45$.

      $$Q = 75, \quad P = 200 - 75 = 125, \quad \pi_1 = (125 - 80) \cdot 45 = 2{,}025$$

      > [!success] Cheating payoff
      > Firm 1 expands to $q_1 = 45$ and earns **2,025** — strictly more than the cartel quota's 1,800. (Meanwhile Firm 2 loses on both quantity and price.)
    related_terms: ["cartel", "prisoners-dilemma"]
    source_doc_page: 4
  - id: "4d"
    text: |
      Compare Firm 1's profit across the three scenarios (Cournot, cartel, cheating). Why are cartels unstable?
    solution: |
      | Scenario | $q_1$ | Firm 1 profit |
      |---|---|---|
      | (a) Cournot | $40$ | $1{,}600$ |
      | (b) Cartel (cooperate) | $30$ | $1{,}800$ |
      | (c) Cheat on the cartel | $45$ | $\mathbf{2{,}025}$ |

      Ranking: **cheating (2,025) > cartel (1,800) > Cournot (1,600)**.

      ![](/images/micro/ex8-q4-cartel-deviation.png)

      > [!warning] Why cartels collapse
      > The cartel is jointly optimal (industry profit 3,600 > 3,200), but it is **not a Nash Equilibrium**: holding the partner at $q = 30$, Firm 1 earns *more* by secretly expanding to 45. Both firms feel this pull, both over-produce, and the agreement unravels back toward Cournot. This is exactly the [[Prisoner's Dilemma]] structure. Real cartels need credible punishment under repeated interaction to survive.
    related_terms: ["cartel", "prisoners-dilemma", "cournot-competition"]
    source_doc_page: 4
  - id: "4e"
    text: |
      Instead of colluding, suppose Firm 1 considers acquiring Firm 2. What is the maximum it would pay, and the minimum Firm 2 would accept?
    solution: |
      Same arithmetic as Q2b. Monopoly profit $\Pi^M = 3{,}600$. Firm 1's duopoly profit $= 1{,}600$. Firm 2's duopoly profit $= 1{,}600$.

      $$\overline{X} = 3{,}600 - 1{,}600 = 2{,}000, \qquad \underline{X} = 1{,}600$$

      > [!success] Answer
      > Acquisition is feasible — surplus 400. Buying the rival achieves the monopoly outcome **permanently**, sidestepping the cheating problem that makes the cartel in (b) unstable. Acquisitions ⊃ cartels in the space of joint-profit-maximising strategies.
    related_terms: ["cartel", "vertical-integration"]
    source_doc_page: 4
  - id: "5a"
    text: |
      **Common fishery (commons with externality).** Two countries share a fishery. Country $i$ catches $q_i$; cost $TC_i = (q_i + B q_j)^2$ with $0 < B < 1$ ($B$ = how much the rival's catch raises your cost — congestion / depletion). Utility $U_i = q_i - TC_i$.

      Find the Cournot (simultaneous) Nash Equilibrium catches and utilities.
    solution: |
      **FOC for country $i$:** $\partial U_i / \partial q_i = 1 - 2(q_i + B q_j) = 0 \Rightarrow q_i + B q_j = 1/2$, so the reaction function is
      $$q_i = \tfrac{1}{2} - B q_j$$

      **By symmetry** $q_1 = q_2 = q$: $q(1 + B) = 1/2 \Rightarrow q = 1/[2(1 + B)]$.

      At the symmetric point $q_i + B q_j = 1/2$, so $TC_i = 1/4$, and

      $$U_i = \frac{1}{2(1 + B)} - \frac{1}{4} = \frac{1 - B}{4 (1 + B)}$$

      > [!success] Cournot
      > $q_1 = q_2 = \frac{1}{2(1 + B)}$, $U_1 = U_2 = \frac{1 - B}{4(1 + B)}$.
    related_terms: ["cournot-competition", "best-response-function"]
    source_doc_page: 5
  - id: "5b"
    text: |
      Same fishery setup as 5a. Now Country 1 is the Stackelberg leader. Find $q_1, q_2$ and utilities.
    solution: |
      **Follower's reaction function:** $q_2 = 1/2 - B q_1$.

      **Substitute into leader's utility.** $q_1 + B q_2 = q_1 + B(1/2 - B q_1) = (1 - B^2) q_1 + B/2$, so
      $$U_1 = q_1 - \Big[(1 - B^2) q_1 + \tfrac{B}{2}\Big]^2$$

      **Leader's FOC:** $1 - 2(1 - B^2)\Big[(1 - B^2) q_1 + B/2\Big] = 0 \Rightarrow (1 - B^2) q_1 + B/2 = 1/[2(1 - B^2)]$.

      $$q_1 = \frac{1 - B + B^3}{2(1 - B^2)^2}, \qquad q_2 = \frac{1 - B - B^2}{2(1 - B^2)^2}$$

      $$U_1 = \frac{1 - 2B + 2 B^3}{4 (1 - B^2)^2}, \qquad U_2 = \frac{1 - 2B - B^4}{4 (1 - B^2)^2}$$

      > [!example] Numerical check at $B = 1/2$
      > **Cournot:** $q_1 = q_2 = 1/3$, $U_1 = U_2 = 1/12 \approx 0.083$.
      > **Stackelberg:** $q_1 = 5/9 \approx 0.556$, $q_2 = 2/9 \approx 0.222$, $U_1 = 1/9 \approx 0.111$, $U_2 \approx -0.028$. The follower's utility is **negative** — externality damage exceeds catch value.

      ![](/images/micro/ex8-q5-commons-utility.png)
    related_terms: ["stackelberg-model", "cournot-competition"]
    source_doc_page: 5
  - id: "5c"
    text: |
      Compare 5a and 5b. Is there really a difference between Cournot and Stackelberg here? Explain why or why not, focusing on the role of the externality parameter $B$.
    solution: |
      **Yes — there is a difference whenever $B > 0$.** The leader commits to a larger catch; the follower best-responds by shrinking; the leader's utility rises while the follower's falls. Same first-mover logic as Q1 and Q3.

      **The driver is the externality $B$.** When $B > 0$ the reaction functions are downward-sloping ($q_i = 1/2 - B q_j$) — the catches are **strategic substitutes** — so first-mover commitment is valuable.

      > [!success] Knife-edge case $B = 0$
      > If the rival's catch did not raise your cost, $TC_i = q_i^2$ and each country's optimum $q_i = 1/2$ would be **independent** of the rival's choice. Reaction functions would be flat, no strategic interaction, and **Cournot = Stackelberg** — moving first buys you nothing. So Stackelberg's first-mover advantage exists *precisely because* $B > 0$ links the countries.

      > [!warning] Tragedy of the commons twist
      > $TC_i = (q_i + B q_j)^2$ depends on the rival's catch even if you fish nothing. When Country 1 over-fishes as leader, it pushes Country 2's cost up so far that Country 2's best attainable utility can fall **below zero** — the externality, not just lost market share, is what hurts the follower.
    related_terms: ["cournot-competition", "stackelberg-model", "pricing-externality"]
    source_doc_page: 5
---

> [!abstract] Toolkit used in this assignment
> 1. **[[Cournot Competition|Cournot]]:** simultaneous quantities. Each firm's FOC gives its [[Best Response Function|reaction function]]; intersect for the NE.
> 2. **[[Stackelberg Model|Stackelberg]]:** sequential quantities. Substitute the follower's reaction function into the leader's profit *before* the leader optimises (backward induction).
> 3. **[[Cartel]]:** maximise *joint* profit as a single monopolist, then split. Profitable but unstable — each firm has a unilateral incentive to deviate ([[Prisoner's Dilemma]]).
> 4. **Acquisition pricing:** max buyer pays = (monopoly profit − buyer's duopoly profit); min seller accepts = seller's duopoly profit. Deal possible iff buyer's ceiling exceeds seller's floor.

Recipes used here: [[Solving a linear-demand monopoly]] (for monopoly benchmarks) and the general Cournot/Stackelberg patterns above.
