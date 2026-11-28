---
title: "Quick Self-Test"
subject: macro-ii
type: self-test
description: "18 new questions in course order, 12 of them multiple choice like the final: classical saving, money and Fisher, the multiplier, Solow and the golden rule, AK growth, the Keynesian cross, IS-LM, Mundell-Fleming, AD-AS, sticky prices and the Phillips curve with hysteresis. Every one has the full working."
course: Macro-Economics II
semester: 1
year: 2
order: 6
tags:
  - macro-ii
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Deficit-financed spending in the long run"
    text: |
      In the classical model with $MPC = 0.8$, the government raises $G$ by 50 and keeps taxes unchanged. What happens?
    options:
      - label: a
        text: |
          National saving and $r$ are unchanged.
        why: |
          Public saving $T - G$ falls by 50 and private saving does not move.
      - label: b
        text: |
          National saving falls by 40.
        why: |
          That multiplies by $MPC$, which is the rule for a tax change, not for $G$.
      - label: c
        text: |
          National saving falls by 50, $r$ rises, investment falls by 50.
        correct: true
        why: |
          Output is fixed, consumption does not move, so all of $G$ comes out of saving and crowds out investment one for one.
      - label: d
        text: |
          National saving falls by 50, investment is unchanged.
        why: |
          Saving equals investment in equilibrium; $r$ rises until investment falls by 50.
    solution: |
      $S = \bar Y - C(\bar Y - T) - G$: with $\bar Y$ and $T$ fixed, $\Delta S = -\Delta G = -50$. The vertical saving line shifts left, $r$ rises, and $I$ falls by 50. **(c)**
  - id: "2"
    title: "2 · Money growth, inflation and the nominal rate"
    text: |
      Money grows at 6% a year, real output at 2%, velocity is constant, and the real interest rate is 3%.

      a. Find inflation and the nominal interest rate in the long run.

      b. The central bank announces that money growth will rise to 8% next year. What happens to $i$ and to the price level today?
    solution: |
      a. $\pi = 6\% - 2\% = 4\%$, and Fisher gives $i = 3\% + 4\% = 7\%$.

      b. Expected inflation rises to 6%, so $i$ rises to 9%. A higher $i$ lowers real money demand $L(i, Y)$. Today's $M$ has not changed, so $M/P$ must fall: **the price level jumps today**, before any new money is printed.
  - id: "3"
    title: "3 · The money multiplier"
    text: |
      The currency-deposit ratio is 0.25, the reserve ratio 0.05 and the monetary base 100. What is the money supply, and what happens if banks raise their reserve ratio to 0.10?
    options:
      - label: a
        text: |
          About 417, falling to about 357.
        correct: true
        why: |
          $m = 1.25/0.30 = 4.17$, then $1.25/0.35 = 3.57$.
      - label: b
        text: |
          400, falling to 350.
        why: |
          Rounded multipliers of 4 and 3.5 that ignore the currency ratio in the denominator.
      - label: c
        text: |
          About 417, rising to about 450.
        why: |
          More reserves mean fewer loans and a smaller multiplier.
      - label: d
        text: |
          125, unchanged.
        why: |
          That is only $B(1 + cr)$: it forgets the deposits created by lending.
    solution: |
      $m = \dfrac{1 + cr}{cr + rr} = \dfrac{1.25}{0.30} = 4.17$, so $M = 417$. With $rr = 0.10$: $m = 1.25/0.35 = 3.57$, $M = 357$. **(a)**
  - id: "4"
    title: "4 · A Solow steady state and the golden rule"
    text: |
      $y = k^{0.5}$ per effective worker, $s = 0.3$, $\delta = 0.05$, $n = 0.01$, $g = 0.04$.

      a. Find $k^*$, $y^*$ and consumption per effective worker.

      b. Find the golden-rule saving rate and its consumption. Should this country save more?

      c. At what rates do output per worker and total output grow in the steady state?
    solution: |
      a. $0.3\sqrt k = 0.10k \Rightarrow \sqrt k = 3$: $k^* = 9$, $y^* = 3$, $c^* = 0.7 \times 3 = 2.1$.

      b. Cobb-Douglas: $s_{gold} = \alpha = 0.5$. Then $\sqrt k = 5$, $k = 25$, $y = 5$, $c = 2.5 > 2.1$. Check: $MPK = 0.5/\sqrt{25} = 0.1 = \delta + n + g$. Yes, saving more raises steady-state consumption (after a fall at first).

      c. Output per worker grows at $g = 4\%$; total output at $n + g = 5\%$.
  - id: "5"
    title: "5 · What grows at the rate of technology?"
    text: |
      In the Solow steady state with $n = 1\%$ and $g = 2\%$, which grows at 2% a year?
    options:
      - label: a
        text: |
          Total output.
        why: |
          Total output grows at $n + g = 3\%$.
      - label: b
        text: |
          The real wage.
        correct: true
        why: |
          The real wage tracks output per worker, which grows at $g$.
      - label: c
        text: |
          The real rental rate of capital.
        why: |
          $MPK = f'(k)$ with $k$ per effective worker constant: it does not grow.
      - label: d
        text: |
          Capital per effective worker.
        why: |
          Constant by definition of the steady state.
    solution: |
      Per effective worker: 0. Per worker (and the wage): $g = 2\%$. Total: $n + g = 3\%$. The rental rate and the factor shares are constant. **(b)**
  - id: "6"
    title: "6 · Above or below the golden rule?"
    text: |
      $MPK = 12\%$, $\delta = 6\%$, $n + g = 3\%$. What should the government do to maximise steady-state consumption, and what happens on the way?
    options:
      - label: a
        text: |
          Capital is above the golden rule; lower saving.
        why: |
          $MPK - \delta = 6\% > 3\%$ means capital is scarce, not excessive.
      - label: b
        text: |
          The economy is at the golden rule; do nothing.
        why: |
          That needs $MPK - \delta = n + g$.
      - label: c
        text: |
          Capital is below the golden rule; raise saving, and consumption rises at once.
        why: |
          Raising saving cuts consumption immediately; the gain comes later.
      - label: d
        text: |
          Capital is below the golden rule; raise saving. Consumption falls first, then ends higher.
        correct: true
        why: |
          The net return $6\%$ exceeds growth $3\%$: more capital pays off, after a period of lower consumption.
    solution: |
      Golden rule: $MPK - \delta = n + g$. Here $12\% - 6\% = 6\% > 3\%$, so $k$ is too low. **(d)**
  - id: "7"
    title: "7 · The AK model"
    text: |
      $Y = 0.4K$, $\delta = 0.06$, no population growth.

      a. With $s = 0.2$, at what rate does income grow?

      b. What is the lowest saving rate that gives permanent growth?
    solution: |
      a. $\Delta K/K = sA - \delta = 0.2 \times 0.4 - 0.06 = 0.02$. Since $Y = 0.4K$, income grows at **2%** forever.

      b. Growth needs $0.4s > 0.06$, so $s > 15\%$. Unlike Solow, the saving rate sets the long-run growth rate.
  - id: "8"
    title: "8 · Closing a gap in the Keynesian cross"
    text: |
      $MPC = 0.75$, equilibrium income 1,800, target 2,000. Which policies each close the gap on their own?
    options:
      - label: a
        text: |
          Raise $G$ by 50, or cut $T$ by about 66.7.
        correct: true
        why: |
          Spending multiplier 4: $200/4 = 50$. Tax multiplier 3: $200/3 = 66.7$.
      - label: b
        text: |
          Raise $G$ by 200, or cut $T$ by 200.
        why: |
          That ignores the multiplier.
      - label: c
        text: |
          Raise $G$ by 50, or cut $T$ by 50.
        why: |
          A tax cut is weaker than spending: only $MPC$ of it is spent at first.
      - label: d
        text: |
          Raise $G$ by 66.7, or cut $T$ by 50.
        why: |
          The two multipliers are swapped.
    solution: |
      $\Delta Y = 200$. $\Delta G = 200(1 - 0.75) = 50$. $\Delta T = -200 \times \frac{1 - 0.75}{0.75} = -66.7$. **(a)**
  - id: "9"
    title: "9 · Solving IS-LM, then a fiscal expansion"
    text: |
      $C = 100 + 0.8(Y - T)$, $I = 200 - 20r$, $G = 100$, $T = 100$, money demand $L = Y - 100r$, $M = 800$, $P = 2$.

      a. Find the equilibrium $r$ and $Y$.

      b. $G$ rises by 40. Find the new equilibrium, the Keynesian-cross change, and how much investment is crowded out.
    solution: |
      a. IS: $Y = 100 + 0.8(Y - 100) + 200 - 20r + 100 \Rightarrow 0.2Y = 320 - 20r \Rightarrow Y = 1600 - 100r$. LM: $Y - 100r = 400 \Rightarrow Y = 400 + 100r$. So $r = 6$, $Y = 1000$.

      b. IS becomes $Y = 1800 - 100r$: $r = 7$, $Y = 1100$. The cross would give $5 \times 40 = 200$; IS-LM gives 100. Investment: $\Delta I = -20 \times 1 = -20$ (check: $\Delta Y(1 - MPC) - \Delta G = 20 - 40 = -20$).
  - id: "10"
    title: "10 · When is monetary policy strongest?"
    text: |
      In IS-LM, a given increase in $M$ raises output the most when:
    options:
      - label: a
        text: |
          Money demand is very sensitive to $r$, and investment is insensitive.
        why: |
          That is the weakest case: $r$ barely falls and investment barely reacts.
      - label: b
        text: |
          Both are insensitive to $r$.
        why: |
          $r$ falls a lot but investment does not respond.
      - label: c
        text: |
          Money demand is insensitive to $r$, and investment is very sensitive.
        correct: true
        why: |
          A steep LM means a big fall in $r$; a flat IS turns it into a big rise in investment.
      - label: d
        text: |
          Money demand is very sensitive to $r$, and investment is very sensitive.
        why: |
          The fall in $r$ is small, so the strong investment response has little to work with.
    solution: |
      Monetary policy works through $M \uparrow \Rightarrow r \downarrow \Rightarrow I \uparrow$. Both links must be strong. **(c)**
  - id: "11"
    title: "11 · A tax cut under floating rates"
    text: |
      A small open economy with perfect capital mobility and a floating exchange rate cuts taxes. What happens?
    options:
      - label: a
        text: |
          $Y$ rises and the currency appreciates.
        why: |
          $LM^*$ is vertical: $Y$ cannot rise unless $M/P$ does.
      - label: b
        text: |
          $Y$ rises and the exchange rate is unchanged.
        why: |
          That is the fixed-rate outcome.
      - label: c
        text: |
          $Y$ is unchanged and the currency depreciates.
        why: |
          $IS^*$ shifts right, so $e$ rises.
      - label: d
        text: |
          $Y$ is unchanged, the currency appreciates, and net exports fall.
        correct: true
        why: |
          The appreciation crowds out net exports by exactly the stimulus.
    solution: |
      $IS^*$ right along a vertical $LM^*$: $e$ up, $Y$ unchanged, $NX$ down. **(d)**
  - id: "12"
    title: "12 · Monetary expansion under a fixed rate"
    text: |
      A small open economy with a fixed exchange rate raises $M$. What is the final outcome?
    options:
      - label: a
        text: |
          $Y$ rises and the currency depreciates.
        why: |
          That is the floating-rate outcome.
      - label: b
        text: |
          Nothing changes: the central bank must buy back its currency and $M$ returns to where it was.
        correct: true
        why: |
          The depreciation pressure forces the bank to reverse the expansion.
      - label: c
        text: |
          $Y$ rises and the exchange rate is unchanged.
        why: |
          Only possible if $LM^*$ could stay to the right, which the peg rules out.
      - label: d
        text: |
          $Y$ falls.
        why: |
          The bank only undoes its own move; it does not overshoot.
    solution: |
      $LM^*$ right pushes $e$ down. To hold the peg the central bank sells foreign reserves and buys home currency, shrinking $M$ until $LM^*$ is back. Monetary policy is powerless under a fixed rate. **(b)**
  - id: "13"
    title: "13 · An import quota under floating rates"
    text: |
      A small open economy with a floating rate imposes an import quota. What happens to $Y$, $e$ and $NX$?
    options:
      - label: a
        text: |
          $Y$ and $NX$ rise.
        why: |
          That is the fixed-rate outcome.
      - label: b
        text: |
          $Y$ and $NX$ are unchanged; $e$ rises; imports and exports both fall.
        correct: true
        why: |
          The appreciation offsets the quota.
      - label: c
        text: |
          $Y$ is unchanged and $NX$ rises.
        why: |
          With $Y$ fixed by $LM^*$ and $r = r^*$, $NX$ must return to its old level for $IS^*$ to hold.
      - label: d
        text: |
          The currency depreciates.
        why: |
          Higher net exports at every $e$ shift $IS^*$ right: appreciation.
    solution: |
      $IS^*$ shifts right, $e$ rises until exports fall by as much as imports did. $Y = $ the $LM^*$ level, and $NX = Y - C - I - G$ is unchanged. **(b)**
  - id: "14"
    title: "14 · An unexpected cut in the money supply"
    text: |
      With an upward-sloping SRAS, the central bank unexpectedly cuts $M$. What happens?
    options:
      - label: a
        text: |
          In the long run output stays below its natural level.
        why: |
          Money is neutral in the long run.
      - label: b
        text: |
          In the short run output is unchanged and only prices fall.
        why: |
          That would need a vertical SRAS: the cut was unexpected, so prices are sticky.
      - label: c
        text: |
          Short run: $Y$ and $P$ both fall. Long run: $Y$ back at $\bar Y$, $P$ lower.
        correct: true
        why: |
          AD shifts left along SRAS; then expectations fall and SRAS shifts down.
      - label: d
        text: |
          In the short run prices rise.
        why: |
          Lower demand moves the economy down the SRAS curve.
    solution: |
      AD left: the short-run point is lower $Y$ and slightly lower $P$. With $Y < \bar Y$, expected prices fall, SRAS shifts down until $Y = \bar Y$ at a lower $P$. **(c)**
  - id: "15"
    title: "15 · A supply shock and a price-level target"
    text: |
      An oil shock shifts SRAS up. The central bank cares only about keeping the price level stable. What does it do?
    options:
      - label: a
        text: |
          It cuts $M$, and output falls further.
        correct: true
        why: |
          To pull $P$ back it must shift AD left, deepening the recession.
      - label: b
        text: |
          It raises $M$.
        why: |
          That is what an output-targeting bank does: it accommodates and locks in the higher prices.
      - label: c
        text: |
          Nothing: the shock fixes itself.
        why: |
          It would, eventually, but prices are above target until it does.
      - label: d
        text: |
          It raises $M$, and prices fall.
        why: |
          More money raises AD and prices.
    solution: |
      A supply shock creates a trade-off: stabilising prices means cutting demand (lower output), stabilising output means accommodating (higher prices). **(a)**
  - id: "16"
    title: "16 · The cost of disinflation"
    text: |
      $\pi = \pi_{-1} - 0.5(u - 5\%)$, Okun's law: each point of cyclical unemployment costs 2% of GDP.

      a. Inflation is 8%. How high must unemployment be to bring it to 4% in one year, and what does that cost?

      b. What is the sacrifice ratio? Does spreading the disinflation over four years change the total cost?
    solution: |
      a. $4 - 8 = -0.5(u - 5) \Rightarrow u - 5 = 8$: unemployment **13%** for a year, costing $2 \times 8 = 16\%$ of a year's GDP.

      b. Sacrifice ratio $= 16/4 = 4$ ($= 2/\beta$). Over four years: $u - 5 = 2$ each year, $4\%$ of GDP a year, total 16%: the same total. Only credibility (lower expected inflation) reduces it.
  - id: "17"
    title: "17 · More firms with sticky prices"
    text: |
      In the sticky-price model, the share $s$ of firms that set prices in advance rises. What happens?
    options:
      - label: a
        text: |
          SRAS gets steeper; demand shocks have smaller output effects.
        why: |
          That is what happens when $s$ falls, for example in high inflation.
      - label: b
        text: |
          SRAS becomes vertical.
        why: |
          Vertical needs fully flexible prices, $s = 0$.
      - label: c
        text: |
          SRAS gets flatter; demand shocks have smaller output effects.
        why: |
          Flatter SRAS means bigger output effects.
      - label: d
        text: |
          SRAS gets flatter; demand shocks have larger and longer output effects.
        correct: true
        why: |
          $\alpha = s/((1 - s)a)$ rises with $s$.
    solution: |
      $Y = \bar Y + \alpha(P - EP)$ with $\alpha = \frac{s}{(1 - s)a}$. More sticky firms: bigger $\alpha$, flatter SRAS, output moves more and returns more slowly. **(d)**
  - id: "18"
    title: "18 · Hysteresis"
    text: |
      $u^n = 5\%$ in long-run equilibrium. Hysteresis: $u^n_t = 0.5u_{t-1} + 0.5u_{t-2}$. Phillips curve: $\pi = \pi_{-1} - 0.5(u - u^n_t)$. The central bank cuts inflation by 1 point in period 1, then holds it constant. Find unemployment in periods 1 to 4.
    solution: |
      Period 1: $u^n_1 = 5$; $-1 = -0.5(u_1 - 5) \Rightarrow u_1 = 7$.

      Period 2: inflation held, so $u_2 = u^n_2 = 0.5(7) + 0.5(5) = 6$.

      Period 3: $u_3 = u^n_3 = 0.5(6) + 0.5(7) = 6.5$.

      Period 4: $u_4 = 0.5(6.5) + 0.5(6) = 6.25$.

      A one-off recession keeps normal unemployment above 5% for years: it settles near $6\tfrac13\%$ (the weights carry $\tfrac23 u_1 + \tfrac13 u_0$ forward), not back at 5%.
---

> New questions in the style of the final, in course order. Twelve are multiple choice like the exam; for each wrong option the "why" names the trap. See the [[Past Paper Topic Map]] for the real questions.
