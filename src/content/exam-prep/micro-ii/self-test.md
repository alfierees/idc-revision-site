---
title: "Quick Self-Test"
subject: micro-ii
type: self-test
description: "18 new exam-style questions in course order, each with the full working: cost functions, price controls and subsidies, Pareto dominance, the exchange economy, the production economy, externalities and public goods. Six are quick multiple-choice checks."
course: Micro-Economics II
semester: 1
year: 2
order: 6
tags:
  - micro-ii
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · A one-input firm"
    text: |
      A price-taking firm has $f(l) = l^{1/3}$ and wage $w = 2$.

      a. Find the cost function and the marginal cost.

      b. At $p = 24$, find the optimal quantity and the profit.

      c. Both $p$ and $w$ double. What happens to the quantity and the profit?
    solution: |
      a. $q = l^{1/3}$, so $l = q^3$ and $C(q) = 2q^3$, $MC = 6q^2$ (rising: $f$ is concave).

      b. $6q^2 = 24$, so $q^* = 2$. Profit $= 24\cdot 2 - 2\cdot 8 = 32$.

      c. The quantity depends only on $p/w$: $q^* = \sqrt{p/(3w)}$ stays 2. Profit doubles to 64: the profit function is homogeneous of degree 1.
  - id: "2"
    title: "2 · Convex technology"
    text: |
      A firm uses only labour, with $f(l)$ increasing and strictly convex. Which statement is correct?
    options:
      - label: a
        text: |
          Marginal cost is increasing in output.
        why: |
          That is the concave case: diminishing marginal product makes each extra unit need more labour.
      - label: b
        text: |
          Marginal cost is decreasing in output.
        correct: true
        why: |
          $MC = w/f'(l(q))$. Convex $f$ means $f'$ rises with $l$, and $l$ rises with $q$, so MC falls.
      - label: c
        text: |
          Marginal cost is constant and equal to $w$.
        why: |
          Constant MC needs a linear $f$, and even then it is $w$ divided by the slope.
      - label: d
        text: |
          The sign of the slope of MC depends on the wage.
        why: |
          $w$ only scales MC; the slope's sign comes from $f''$.
    solution: |
      $C(q) = w\,f^{-1}(q)$ and $MC = \dfrac{w}{f'(l)}$. With increasing returns each extra unit needs less extra labour. **Answer (b).** This was 2026 Moed A Q1.2.
  - id: "3"
    title: "3 · Cost minimisation, Cobb-Douglas"
    text: |
      $f(l,k) = l^{1/2}k^{1/2}$, $p_l = 4$, $p_k = 1$. Find the cheapest way to make $q_0 = 10$, and the cost function $C(q)$.
    solution: |
      $RTS = \dfrac{k}{l} = \dfrac{p_l}{p_k} = 4$, so $k = 4l$.

      Isoquant: $\sqrt{l\cdot 4l} = 2l = 10$, so $l = 5$, $k = 20$, cost $4\cdot 5 + 1\cdot 20 = 40$.

      In general $l = q/2$, $k = 2q$ and $C(q) = 4q$ (check: $2q\sqrt{p_lp_k} = 2q\cdot 2 = 4q$). Constant returns, so constant marginal cost.
  - id: "4"
    title: "4 · Perfect substitutes"
    text: |
      $f(l,k) = 3l + k$, $p_l = 6$, $p_k = 3$. What is the cost-minimising way to produce $q = 12$?
    options:
      - label: a
        text: |
          Only capital: $k = 12$, cost 36.
        why: |
          Capital gives $1/3$ unit per shekel; labour gives $3/6 = 1/2$. Capital is the worse buy.
      - label: b
        text: |
          $l = k = 3$, cost 27.
        why: |
          With a constant RTS there is no interior tangency, and $l = k = 3$ only makes 12 at a higher cost than the corner.
      - label: c
        text: |
          Any mix on the isoquant: the firm is indifferent.
        why: |
          Indifference needs $a/b = p_l/p_k$, here $3 \ne 2$.
      - label: d
        text: |
          Only labour: $l = 4$, cost 24.
        correct: true
        why: |
          $RTS = 3 > p_l/p_k = 2$: labour delivers more output per shekel, so use only labour, $3l = 12$.
    solution: |
      Compare $\dfrac{a}{b} = 3$ with $\dfrac{p_l}{p_k} = 2$. The isoquant is steeper than the isocost, so the corner on the labour axis wins: $l = 4$, $k = 0$, $C = 24$. **Answer (d).**
  - id: "5"
    title: "5 · A kinked cost function"
    text: |
      $f(l,k) = 2\sqrt l + k$, $p_l = 1$, $p_k = 4$.

      a. Find the cost function.

      b. What is marginal cost at high output?
    solution: |
      a. $MP_l = 1/\sqrt l$, $MP_k = 1$, so $RTS = 1/\sqrt l$. Set $1/\sqrt l = p_l/p_k = 1/4$: $l^* = 16$, which makes $2\sqrt{16} = 8$ units.

      $$
      C(q) = \begin{cases} \dfrac{q^2}{4} & q \le 8 \quad (l = q^2/4,\ k = 0)\\[4pt] 16 + 4(q - 8) = 4q - 16 & q > 8 \quad (l = 16,\ k = q - 8)\end{cases}
      $$

      b. Above $q = 8$ every extra unit comes from capital: $MC = p_k = 4$. At the kink the two pieces agree: $64/4 = 16 = 32 - 16$, and both give $MC = 4$.
  - id: "6"
    title: "6 · A market with a ceiling and a floor"
    text: |
      $U = 80x - x^2 + y$; the firm has $f = l^{1/4}k^{1/4}$ with $p_l = p_k = \tfrac12$.

      a. Find the equilibrium, $CS$, $FS$ and $W$.

      b. A maximal price of 30. Find the traded quantity, $CS$, $FS$, $W$.

      c. A minimal price of 50. Same questions.

      d. Which ceiling maximises consumer surplus?
    solution: |
      a. $C = x^2$, $P^S = 2x$, $P^D = 80 - 2x$: $x^e = 20$, $p^e = 40$. $CS = (80 - 40)\cdot 20 - 400 = 400$, $FS = 40\cdot 20 - 400 = 400$, $W = 800$.

      b. 30 < 40 binds; **supply** is short: $2x = 30$, $x = 15$. $CS = (80 - 30)\cdot 15 - 225 = 525$, $FS = 30\cdot 15 - 225 = 225$, $W = 750$ (loss 50).

      c. 50 > 40 binds; **demand** is short: $80 - 2x = 50$, $x = 15$. $CS = 225$, $FS = 50\cdot 15 - 225 = 525$, $W = 750$. Same quantity, same welfare, opposite split.

      d. Under a ceiling $x = \bar p/2$ and $CS(\bar p) = (80 - \bar p)\tfrac{\bar p}{2} - \tfrac{\bar p^2}{4} = 40\bar p - \tfrac34\bar p^2$. FOC: $40 = \tfrac32\bar p$, so $\bar p = 26.67$ (the formula $\tfrac{cA}{1+2c}$ with $c = 1$, $A = 80$).
  - id: "7"
    title: "7 · A consumer subsidy"
    text: |
      Same market as question 6. The government pays consumers 10 per unit bought. Find the new quantity, the prices, $CS$, $FS$, the government's bill and the change in welfare.
    solution: |
      Demand shifts up by 10: $90 - 2x = 2x$, so $x = 22.5$. Firms receive $45$; consumers pay $35$.

      $CS = (80 - 35)\cdot 22.5 - 22.5^2 = 1012.5 - 506.25 = 506.25$.

      $FS = 45\cdot 22.5 - 506.25 = 506.25$.

      Bill $= 10\cdot 22.5 = 225$. Welfare $= 506.25 + 506.25 - 225 = 787.5 < 800$: a deadweight loss of $12.5 = \tfrac12\cdot 2.5\cdot 10$, from units whose cost exceeds their value.
  - id: "8"
    title: "8 · Dominance and the planner"
    text: |
      Which statement is always true?
    options:
      - label: a
        text: |
          If a social planner prefers $A$ to $B$, then $A$ Pareto dominates $B$.
        why: |
          A planner can trade one agent's loss for another's gain: $(10,10),(10,10)$ beats $(1,2),(19,18)$ under $W = U_1U_2$, yet agent 2 loses.
      - label: b
        text: |
          If $A$ is Pareto efficient and $B$ is not, then $A$ Pareto dominates $B$.
        why: |
          $A$ can give one agent everything: efficient, but the other agent prefers $B$.
      - label: c
        text: |
          If $A$ Pareto dominates $B$, every planner whose welfare is increasing in each utility prefers $A$ to $B$.
        correct: true
        why: |
          Nobody is worse off and someone is better off, so an increasing $W$ rises.
      - label: d
        text: |
          Every Pareto efficient allocation dominates every inefficient one.
        why: |
          This is (b) for all pairs at once, and fails for the same reason.
    solution: |
      Dominance is a strong condition (no losers), so it implies the planner's ranking. The reverse fails. **Answer (c).**
  - id: "9"
    title: "9 · An exchange economy"
    text: |
      $U_1 = x_1^{1/2}y_1^{1/2}$, $U_2 = x_2^{1/4}y_2^{3/4}$, $\omega^1 = (40, 20)$, $\omega^2 = (20, 40)$.

      a. Find the contract curve.

      b. Find the equilibrium price ratio and allocation.
    solution: |
      Totals $X = Y = 60$. $MRS_1 = \dfrac{y_1}{x_1}$, $MRS_2 = \dfrac{1}{3}\cdot\dfrac{y_2}{x_2}$.

      a. $\dfrac{y_1}{x_1} = \dfrac{60 - y_1}{3(60 - x_1)}$, so $3y_1(60 - x_1) = x_1(60 - y_1)$, $180y_1 - 2x_1y_1 = 60x_1$:

      $$
      y_1 = \frac{30x_1}{90 - x_1}
      $$

      b. With $p_y = 1$: $I_1 = 40p + 20$, $I_2 = 20p + 40$. Demands $x_1 = \dfrac{I_1}{2p}$, $x_2 = \dfrac{I_2}{4p}$. Clearing $x$:

      $$
      20 + \frac{10}{p} + 5 + \frac{10}{p} = 60 \;\Rightarrow\; \frac{20}{p} = 35 \;\Rightarrow\; p_x = \frac47
      $$

      Then $I_1 = \tfrac{300}{7}$: $x_1 = 37.5$, $y_1 = \tfrac{150}{7} \approx 21.43$. $I_2 = \tfrac{360}{7}$: $x_2 = 22.5$, $y_2 = \tfrac{270}{7} \approx 38.57$. Check on the contract curve: $\tfrac{30\cdot 37.5}{52.5} = 21.43$. ✓
  - id: "10"
    title: "10 · Walras' law"
    text: |
      In a two-good exchange economy, at the prices $(p_x, p_y) > 0$ there is excess demand for $x$. What follows?
    options:
      - label: a
        text: |
          There is excess supply of $y$.
        correct: true
        why: |
          Walras' law: $p_xz_x + p_yz_y = 0$. With $z_x > 0$ and positive prices, $z_y < 0$.
      - label: b
        text: |
          There is excess demand for $y$ as well.
        why: |
          Then $p_xz_x + p_yz_y > 0$, which the agents' budget constraints rule out.
      - label: c
        text: |
          The $y$ market clears.
        why: |
          If $z_y = 0$ then $p_xz_x = 0$, so $z_x = 0$ too: contradiction.
      - label: d
        text: |
          Nothing can be said without the utility functions.
        why: |
          Walras' law holds for any preferences as long as each agent spends her whole income.
    solution: |
      Summing the budget constraints gives $p_xz_x + p_yz_y = 0$. **Answer (a).** To reach equilibrium $p_x/p_y$ must rise.
  - id: "11"
    title: "11 · A production economy with prices"
    text: |
      $f_1 = l_1^{1/2}k_1^{1/2}$ makes $x$, $f_2 = 3\,l_2^{1/2}k_2^{1/2}$ makes $y$, $\bar L = \bar K = 60$, $U = x^{1/3}y^{2/3}$.

      a. Efficiency locus and PPF.

      b. The optimal allocation.

      c. Equilibrium prices of the goods and the inputs.
    solution: |
      a. $RTS_1 = \tfrac{k_1}{l_1}$, $RTS_2 = \tfrac{k_2}{l_2}$ (the 3 cancels), so $k_1 = l_1$. Then $x = l_1$, $y = 3(60 - l_1)$: PPF $y = 180 - 3x$, $RPT = 3$.

      b. $MRS = \dfrac{\tfrac13 y}{\tfrac23 x} = \dfrac{y}{2x} = 3$, so $y = 6x$. On the PPF $6x = 180 - 3x$: $x^* = 20$, $y^* = 120$. Inputs: $l_1 = k_1 = 20$, $l_2 = k_2 = 40$.

      c. $p_y = 1$, $p_x = MRS = 3$. Firm 1: $RTS = 1 = p_l/p_k$, so $p_l = p_k = w$, and $C_1 = 2x\sqrt{p_lp_k} = 2wx$, so $MC = 2w = p_x = 3$: $w = 1.5$. Check firm 2: $C_2 = \tfrac{2wy}{3} = y$, $MC = 1 = p_y$ ✓. Incomes: $1.5\cdot 60 + 1.5\cdot 60 = 180 = 3\cdot 20 + 120$ ✓.
  - id: "12"
    title: "12 · A linear consumer"
    text: |
      Same PPF as question 11, $y = 180 - 3x$, but the consumer has $U = 2x + y$. What is produced?
    options:
      - label: a
        text: |
          Only $x$: $(60, 0)$.
        why: |
          That needs $MRS = 2 > RPT = 3$, which is false.
      - label: b
        text: |
          Only $y$: $(0, 180)$.
        correct: true
        why: |
          The consumer would give up 2 units of $y$ for one $x$, but producing one $x$ costs 3 units of $y$. Make no $x$.
      - label: c
        text: |
          $x = 20$, $y = 120$, as in question 11.
        why: |
          That was the Cobb-Douglas consumer's tangency; a linear utility has a constant MRS.
      - label: d
        text: |
          Any point on the PPF.
        why: |
          Indifference along the PPF needs $MRS = RPT$ everywhere, i.e. $c = 3$.
    solution: |
      $MRS = 2 < RPT = 3$, so every unit of $x$ costs more $y$ than it is worth to the consumer: the corner with all resources in firm 2. **Answer (b).** Compare 2025 Moed A Q2.
  - id: "13"
    title: "13 · A production externality"
    text: |
      Firm A sells at $p_a = 50$ with $C_A = a^2$. Firm B sells at $p_b = 60$ with $C_B = b^2 + ab$: A's output raises B's cost.

      a. Find the competitive outcome and both profits.

      b. Find the joint-profit maximum.

      c. Find the Pigouvian tax on A's output.
    solution: |
      a. A ignores B: $50 = 2a$, $a = 25$, $\pi_A = 625$. B takes $a$ as given: $60 - 2b - 25 = 0$, $b = 17.5$, $\pi_B = 1050 - 306.25 - 437.5 = 306.25$. Total $931.25$.

      b. Planner: $\dfrac{\partial}{\partial a}: 50 - 2a - b = 0$, $\dfrac{\partial}{\partial b}: 60 - 2b - a = 0$. From the second $a = 60 - 2b$; then $50 - 120 + 4b - b = 0$, $b^* = \tfrac{70}{3}$, $a^* = \tfrac{40}{3}$. Profits $\tfrac{4400}{9} \approx 488.9$ and $\tfrac{4900}{9} \approx 544.4$, total $\approx 1033.3 > 931.25$.

      c. Marginal damage of $a$ is $\partial C_B/\partial a = b$, evaluated at the optimum: $t^* = \tfrac{70}{3} \approx 23.3$ per unit. Check: $50 - 2a - t = 0$ gives $a = \tfrac{40}{3}$. ✓
  - id: "14"
    title: "14 · Public good with altruism"
    text: |
      $U_1 = 8\sqrt g + y_1$, $U_2 = 4\sqrt g + y_2$, $g = g_1 + g_2$, one unit costs 1.

      a. Stand-alone levels, the Nash equilibrium and the planner's total.

      b. Agent 2 becomes fully altruistic: $U_2 = 4\sqrt g + y_2 + (8\sqrt g + y_1)$. Agent 1 stays selfish. What is the new equilibrium?
    solution: |
      a. $\tfrac{8}{2\sqrt g} = 1$: $g_1^o = 16$. $\tfrac{4}{2\sqrt g} = 1$: $g_2^o = 4$. Unique Nash equilibrium $(16, 0)$: agent 2 free rides. Planner: $\tfrac{12}{2\sqrt g} = 1$, $g^* = 36$.

      b. Agent 2's FOC is now $V_2' + V_1' = \tfrac{12}{2\sqrt g} = 1$, so her ideal total is $36 > 16$. She tops up to 36; at that total agent 1's own marginal benefit $\tfrac{8}{12} < 1$, so he gives nothing. Equilibrium $(0, 36)$: the planner's quantity, paid entirely by the altruist.
  - id: "15"
    title: "15 · Identical agents and a public good"
    text: |
      Two agents with identical utility $V(g) + y_i$ play the public good game from class. Which describes the Nash equilibria?
    options:
      - label: a
        text: |
          A unique equilibrium in which each contributes $g^o/2$.
        why: |
          The equal split is an equilibrium, but not the only one.
      - label: b
        text: |
          No contribution at all: each waits for the other.
        why: |
          If the other gives nothing, an agent's best response is the whole $g^o$.
      - label: c
        text: |
          Each contributes $g^o$, so the total is $2g^o$.
        why: |
          Given the other's $g^o$, an agent's best response is zero: her ideal total is already reached.
      - label: d
        text: |
          Infinitely many: every pair with $g_1 + g_2 = g^o$.
        correct: true
        why: |
          Each only cares about the total. At any split summing to $g^o$, $g_i = g^o - g_j$ is a best response for both.
    solution: |
      $BR_i(g_j) = \max\{0, g^o - g_j\}$ for both agents. **Answer (d).** This was 2026 Moed A Q1.5 ("unique symmetric equilibrium" is false).
  - id: "16"
    title: "16 · True or false: a lump-sum tax on the polluter"
    text: |
      "A lump-sum tax on a polluting firm restores the efficient level of pollution." True or false? Explain.
    solution: |
      **False.** A lump-sum tax does not depend on the firm's choices, so its first-order conditions, and its pollution, do not change. The inefficiency is a wedge **at the margin** between private and social cost. Only a per-unit (Pigouvian) tax equal to the marginal external damage, or a market for pollution rights, moves the margin.
  - id: "17"
    title: "17 · True or false: the endowment on the contract curve"
    text: |
      "In an exchange economy, if the endowment is on the contract curve, the agents do not trade in equilibrium." True or false? Explain.
    solution: |
      **True.** At an interior point of the contract curve $MRS_1 = MRS_2$. Take the common MRS as the price ratio: the budget line through the endowment is tangent to both indifference curves there, so each agent's best bundle is her endowment and both markets clear. No mutually beneficial trade exists, because the endowment is already Pareto efficient. (2025 Moed B T/F 6.)
  - id: "18"
    title: "18 · The planner on a utility frontier"
    text: |
      $U_1 = x_1^{1/2}y_1^{1/2}$, $U_2 = 3x_2^{1/2}y_2^{1/2}$, $X = Y = 60$. A planner maximises $W = U_1\cdot U_2$. Find the optimal allocation.
    solution: |
      Equal shares, so the contract curve is the diagonal $y_1 = x_1$. Along it $U_1 = x_1$ and $U_2 = 3(60 - x_1) = 180 - 3U_1$: a straight frontier with slope $-3$.

      Planner: $MRS_W = \dfrac{U_2}{U_1} = 3$, so $U_2 = 3U_1$ and $3U_1 = 180 - 3U_1$: $U_1 = 30$, $U_2 = 90$.

      Allocation: $x_1 = y_1 = 30$, $x_2 = y_2 = 30$. The factor 3 does not tilt the goods: with $W = U_1U_2$ it multiplies $W$ by a constant, so the planner splits the goods equally.
---

Eighteen questions in course order. Try each on paper before revealing the working. The multiple-choice items mirror the true/false part of the exam: for every wrong option, the "why" is the counterexample you would write.
