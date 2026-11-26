---
title: "Quick Self-Test"
subject: micro-i
type: self-test
description: "19 new exam-style questions in course order, each with the full working: budget lines, utility families, Slutsky and Hicks, endowments, labor supply and two periods. Five are quick multiple-choice checks."
course: Micro-Economics I
semester: 2
year: 1
order: 6
tags:
  - micro-i
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · A budget line and two changes"
    text: |
      $m = 120$, $p_1 = 4$, $p_2 = 3$.

      a. Give the intercepts and the slope.

      b. $p_1$ falls to 3. Which intercept moves?

      c. Starting again from (a), all prices and income rise by 25%. What happens to the line?
    solution: |
      a. $x_1$-intercept $120/4 = 30$, $x_2$-intercept $120/3 = 40$, slope $-4/3$.

      b. Only the $x_1$-intercept moves, to $120/3 = 40$. The line pivots out around $(0, 40)$ and becomes flatter (slope $-1$).

      c. **Nothing.** $(1.25p_1, 1.25p_2, 1.25m)$ gives the same intercepts and slope.
  - id: "2"
    title: "2 · Same preferences?"
    text: |
      For $x, y > 0$, which utility function represents the same preferences as $U = xy$?
    options:
      - label: a
        text: |
          $V = -xy$
        why: |
          Multiplying by $-1$ reverses every ranking.
      - label: b
        text: |
          $V = 2\ln x + 2\ln y + 5$
        correct: true
        why: |
          $V = 2\ln(xy) + 5$ is a strictly increasing function of $U$, so the ranking, curves and MRS are identical.
      - label: c
        text: |
          $V = \dfrac{1}{xy}$
        why: |
          $1/U$ is decreasing in $U$: bigger bundles get lower numbers.
      - label: d
        text: |
          $V = x + y$
        why: |
          That is perfect substitutes: straight-line curves, a different MRS ($1$ instead of $y/x$).
    solution: |
      Only a strictly increasing transformation keeps the preferences. $\ln$, multiplying by 2 and adding 5 are all increasing. **Answer (b).**
  - id: "3"
    title: "3 · Goods and bads"
    text: |
      $U(x, y) = \dfrac{x^2}{y + 1}$ for $x, y \ge 0$. Classify each commodity and say which way the indifference curves slope.
    solution: |
      $\partial U/\partial x = \dfrac{2x}{y+1} > 0$ for $x > 0$: $x$ is a **good**. $\partial U/\partial y = -\dfrac{x^2}{(y+1)^2} < 0$: $y$ is a **bad**.

      With one good and one bad, more of the bad must be offset by more of the good: the curves **slope up**, and "better" is toward more $x$ and less $y$.
  - id: "4"
    title: "4 · Cobb-Douglas demand"
    text: |
      $U = x^2y$, $m = 90$, $p_x = 3$, $p_y = 2$. Find the optimal bundle. What happens to $x$ if $p_y$ doubles?
    solution: |
      Shares: $\tfrac23$ of income on $x$, $\tfrac13$ on $y$.

      $$
      x^* = \frac23\cdot\frac{90}{3} = 20, \qquad y^* = \frac13\cdot\frac{90}{2} = 15
      $$

      Check by tangency: $\lvert MRS\rvert = \frac{2xy}{x^2} = \frac{2y}{x} = \frac{30}{20} = 1.5 = \frac{p_x}{p_y}$. ✓

      If $p_y$ doubles, **$x$ does not change** (still $20$): Cobb-Douglas demand for $x$ has no $p_y$ in it. Only $y$ falls, to $7.5$.
  - id: "5"
    title: "5 · Perfect complements"
    text: |
      $U = \min\{2x, y\}$, $m = 60$, $p_x = 2$, $p_y = 1$. Find the bundle. What is the substitution effect of a rise in $p_x$?
    solution: |
      At the kink $y = 2x$. Budget: $2x + 1(2x) = 60$, so $x = 15$, $y = 30$.

      A rise in $p_x$ has **zero substitution effect**: the corners stay on the ray $y = 2x$ whatever the slope, so the whole change is an income effect.
  - id: "6"
    title: "6 · Perfect substitutes"
    text: |
      $U = 2x + y$, $m = 30$, $p_x = 3$, $p_y = 1$. What does she buy? At what $p_x$ does the choice switch?
    solution: |
      Utility per shekel: $x$ gives $2/3$, $y$ gives $1/1 = 1$. $y$ is the better deal, so she spends everything on it: $(x, y) = (0, 30)$.

      She switches when $2/p_x > 1$, that is $p_x < 2$. At exactly $p_x = 2$ every bundle on the line is optimal.
  - id: "7"
    title: "7 · Quasilinear and income"
    text: |
      $U = \ln x + y$, $p_x = 2$, $p_y = 1$. Income rises from 10 to 20. What happens?
    options:
      - label: a
        text: |
          Both $x$ and $y$ double.
        why: |
          That is the Cobb-Douglas pattern, not quasilinear.
      - label: b
        text: |
          $x$ rises and $y$ is unchanged.
        why: |
          Backwards: the linear good absorbs the income.
      - label: c
        text: |
          $x$ stays at $0.5$ and $y$ rises from 9 to 19.
        correct: true
        why: |
          $MRS = 1/x = 2$ pins $x = 0.5$ at any income; all extra income goes to $y$.
      - label: d
        text: |
          $x$ is an inferior good.
        why: |
          Its income effect is zero (neutral), not negative.
    solution: |
      $\lvert MRS\rvert = \dfrac{1/x}{1} = \dfrac{p_x}{p_y} = 2$, so $x = 0.5$ and spending on $x$ is $1$. At $m = 10$, $y = 9$; at $m = 20$, $y = 19$. **Answer (c).** The Engel curve for $x$ is vertical.
  - id: "8"
    title: "8 · Concave utility"
    text: |
      $U = x^2 + y^2$, $m = 12$, $p_x = 2$, $p_y = 3$. Find the optimum. Is the tangency point the answer?
    solution: |
      $x^2 + y^2$ gives curves bowed **away** from the origin (circles), so the tangency is the **worst** point on the line. Compare the corners:

      - only $x$: $x = 6$, $U = 36$
      - only $y$: $y = 4$, $U = 16$

      **Optimum $(6, 0)$**: only the good that gives more units per shekel.
  - id: "9"
    title: "9 · Slutsky and Hicks with numbers"
    text: |
      $U = xy$, $m = 120$, $p_y = 1$. $p_x$ rises from 2 to 3.

      a. Old and new bundles.

      b. Slutsky compensation, the substitution and income effects on $x$.

      c. Hicks compensation. Which is larger?
    solution: |
      a. Old $A$: $x = 120/4 = 30$, $y = 60$. New: $x = 120/6 = 20$, $y = 60$.

      b. Cost of $A$ at the new prices: $3(30) + 60 = 150$. **Slutsky compensation $= +30$.** With 150: $x = 150/6 = 25$, $y = 75$.

      | | $x$ | $y$ |
      |---|---|---|
      | Substitution ($A \to B$) | $30 \to 25$: $-5$ | $60 \to 75$: $+15$ |
      | Income ($B \to C$) | $25 \to 20$: $-5$ | $75 \to 60$: $-15$ |
      | Total | $-10$ | $0$ |

      c. Old utility $30 \times 60 = 1800$. At the new prices $U = \frac{M}{6}\cdot\frac{M}{2} = \frac{M^2}{12}$, so $M^2 = 21{,}600$, $M \approx 146.97$. **Hicks compensation $\approx 26.97 < 30$.** Slutsky is larger, as always.
  - id: "10"
    title: "10 · A rising price that raises demand"
    text: |
      When the price of good X rises, she buys **more** X. Which statement must be true?
    options:
      - label: a
        text: |
          X is a normal good.
        why: |
          For a normal good the income effect reinforces the substitution effect, so demand must fall.
      - label: b
        text: |
          Her utility could be Cobb-Douglas.
        why: |
          Cobb-Douglas demand $x = \tfrac{a}{a+b}\tfrac{m}{p_x}$ falls when $p_x$ rises.
      - label: c
        text: |
          The substitution effect on X is positive.
        why: |
          The substitution effect of a price rise is always **negative** on that good.
      - label: d
        text: |
          X is inferior and the other good is normal.
        correct: true
        why: |
          Only an income effect bigger than the substitution effect can push demand up: X is Giffen, hence inferior, so the other good must be normal.
    solution: |
      Total $=$ substitution ($-$) $+$ income. For the total to be positive the income effect must be positive and bigger. A price rise makes her poorer, so a positive income effect means X **falls with income**: inferior (Giffen). Both goods cannot be inferior. **Answer (d).**
  - id: "11"
    title: "11 · An endowment and a price rise"
    text: |
      Endowment $\omega = (10, 4)$, prices $(2, 1)$, $U = xy$.

      a. Her optimal bundle and net demands.

      b. $p_1$ rises to 3. Is she better or worse off?
    solution: |
      a. Value of the endowment: $2(10) + 1(4) = 24$. $x = 24/4 = 6$, $y = 24/2 = 12$. Net demands: $6 - 10 = -4$ (sells 4 units of good 1), $12 - 4 = +8$ (buys 8 of good 2). Check: $2(-4) + 1(8) = 0$ ✓.

      b. She is a **net seller** of good 1, so a higher $p_1$ helps her. New value $3(10) + 4 = 34$: $x = 34/6 \approx 5.67$, $y = 17$. Utility $\approx 96.3 > 72$: **better off**. (Her old bundle $(6, 12)$ costs $30 \le 34$ at the new prices, so it is still affordable.)
  - id: "12"
    title: "12 · Labor supply, Cobb-Douglas"
    text: |
      $T = 24$ hours, $U = LY$, $P_Y = 1$, wage $W = 10$.

      a. Leisure and hours worked. Do they depend on $W$?

      b. She receives $W_0 = 60$ a day. Re-solve.
    solution: |
      a. $\lvert MRS\rvert = \frac{Y}{L} = W$, so $Y = WL$. Budget $Y = W(24 - L)$: $L = 12$, $H = 12$, **for every wage**. Labor supply is vertical.

      b. Budget $Y = 10(24 - L) + 60$. With $Y = 10L$: $20L = 300$, $L = 15$, $H = 9$, $Y = 150$.

      Formula check: $L = \tfrac12\cdot\frac{24W + W_0}{W} = 12 + \frac{W_0}{2W} = 15$. ✓ Now a lower wage would raise leisure further.
  - id: "13"
    title: "13 · Labor supply, quasilinear, and the no-work corner"
    text: |
      $T = 24$, $U = 4\sqrt L + Y$, $P_Y = 1$.

      a. Leisure and labor supply as functions of $W$.

      b. Below which wage does she not work at all?

      c. A lump sum $W_0$ is added. Effect on hours?
    solution: |
      a. $MU_L = \frac{2}{\sqrt L}$, $MU_Y = 1$: $\frac{2}{\sqrt L} = W$, so $L = \frac{4}{W^2}$ and $H = 24 - \frac{4}{W^2}$ (upward sloping).

      b. $L = 24$ when $\frac{4}{W^2} = 24$: $W = \frac{2}{\sqrt{24}} \approx 0.41$. For $W \le 0.41$ she takes all 24 hours as leisure.

      c. **None** while she still works: the MRS condition does not contain $W_0$, so $L$ and $H$ are unchanged and $Y$ rises by $W_0$.
  - id: "14"
    title: "14 · An hours cap"
    text: |
      $T = 24$, $U = L^2Y$, wage $W$. A rule limits work to 6 hours a day. Find $L$ and $H$ with and without the rule, and compare utility.
    solution: |
      Unconstrained: $\frac{2Y}{L} = W$, $Y = \frac{WL}{2} = W(24 - L)$, so $L = 16$, $H = 8$.

      With the cap she wants 8 but may work 6: the cap binds, $H = 6$, $L = 18$.

      $U_{\text{free}} = 16^2 \cdot 8W = 2048W$, $U_{\text{cap}} = 18^2 \cdot 6W = 1944W$: the cap makes her worse off.
  - id: "15"
    title: "15 · Revealed preference and WARP"
    text: |
      At prices $(1, 2)$ and income 10 she buys $x = (2, 4)$. At prices $(2, 1)$ and income 10 she buys $y = (4, 2)$. Is WARP violated?
    solution: |
      $y$ at the first prices costs $4 + 4 = 8 \le 10$: affordable, yet she chose $x$. So $x \succ_D y$.

      $x$ at the second prices costs $4 + 4 = 8 \le 10$: affordable, yet she chose $y$. So $y \succ_D x$.

      Each is revealed preferred to the other: **WARP is violated**, so no fixed, rational preferences produce these choices.
  - id: "16"
    title: "16 · Two periods: a saver and inflation"
    text: |
      $I_1 = 150$, $I_2 = 55$, $r = 10\%$, $\pi = 0$, $U = C_1C_2$.

      a. Optimal $C_1$, $C_2$ and savings.

      b. Inflation rises to 10% with $r$ unchanged. Re-solve. Is she better off?
    solution: |
      a. $1 + \rho = 1.1$. Present value $150 + \frac{55}{1.1} = 200$. Half on each period: $C_1 = 100$, $C_2 = 1.1 \times 100 = 110$. Savings $150 - 100 = 50$: a **saver**.

      b. $1 + \rho = \frac{1.1}{1.1} = 1$: slope $-1$. Present value $205$: $C_1 = C_2 = 102.5$.

      Utility $102.5^2 \approx 10{,}506 < 100 \times 110 = 11{,}000$: **worse off**. A lower real rate hurts savers. $C_2$ fell (both effects), $C_1$ rose here (in general ambiguous for a saver).
  - id: "17"
    title: "17 · Only the savers' rate rises"
    text: |
      A **borrower** faces separate rates for borrowing and saving. Only the rate for savers rises. What happens?
    options:
      - label: a
        text: |
          Nothing: she stays at her bundle.
        correct: true
        why: |
          Her branch (right of the endowment) is unchanged, and the steeper saving branch only helps people left of the endowment. A borrower with convex preferences does not jump to it.
      - label: b
        text: |
          She is worse off.
        why: |
          Her old bundle is still on her unchanged branch, so she cannot lose.
      - label: c
        text: |
          She saves more.
        why: |
          She is a borrower: she has no savings to earn the new rate on.
      - label: d
        text: |
          The whole budget line pivots around the endowment.
        why: |
          Only one branch rotates, so the line gets a kink at the endowment.
    solution: |
      Kink at the endowment: left branch steeper, right branch unchanged. She is on the right branch, so her bundle is still the best she can do. **Answer (a).** (Exam answers sometimes add "unless a point on the new branch is better", which with convex preferences and a tangency on the right branch cannot happen.)
  - id: "18"
    title: "18 · Hicks against Slutsky"
    text: |
      The price of a good she buys rises. Compare the two compensations.
    options:
      - label: a
        text: |
          Hicks compensation is larger, because utility must be restored exactly.
        why: |
          Restoring utility needs **less** money than restoring the old bundle.
      - label: b
        text: |
          Slutsky compensation is at least as large as Hicks.
        correct: true
        why: |
          With the Slutsky income she can buy the old bundle, and usually do better, so she needs at least that much less to stay at the old utility.
      - label: c
        text: |
          They are always equal.
        why: |
          Only for perfect complements (no substitution) do they coincide.
      - label: d
        text: |
          It depends on whether the good is normal.
        why: |
          The ordering comes from geometry, not from the sign of the income effect.
    solution: |
      The Slutsky line passes through the old bundle; the Hicks line is tangent to the old indifference curve, which lies on or below the Slutsky line. **Answer (b).**
  - id: "19"
    title: "19 · A fair lottery"
    text: |
      A ticket costs 10 and pays 100 with probability 0.1, else 0. Who buys it?
    solution: |
      Expected payoff $0.1 \times 100 = 10$, equal to the price: a **fair** lottery.

      - Risk-averse (concave utility of wealth): prefers the sure 10, **does not buy**.
      - Risk-loving (convex): **buys**.
      - Risk-neutral: indifferent.

      A wider spread (say 1,000 with probability 0.01) is even less attractive to the risk-averse buyer.
---

> Solve each one on paper first, then reveal the answer. Every question is new, but each is built like a past-paper part: the labor-supply questions (12 to 14) and the two-period questions (16, 17) follow the open-question script in the [[Exam Question Playbook]].
