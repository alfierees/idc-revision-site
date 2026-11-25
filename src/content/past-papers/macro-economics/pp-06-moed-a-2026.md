---
title: "Moed A 2026 — Worked Solutions"
label: "2026 Moed A"
topics: "Investment & foreign aid, efficient allocation, Ricardian evidence, SBTC/RBTC, labor supply & taxes, debt steady state, task-based model, search model, development accounting, institutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed Aleph (A) 2026"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-a-2026.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - investment
  - misallocation
  - development-accounting
  - labor-supply
  - public-debt-dynamics
  - task-based-model
  - euler-equation
  - unemployment
  - institutions
  - human-capital
aliases:
  - Moed A 2026
  - Moed Aleph 2026
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — Foreign aid: capital vs. a permanent technology transfer"
    text: |
      All firms in country X make optimal investment decisions according to the investment model. A foreign country considers aid to X in one of two forms: a direct transfer of capital goods ($K$), or a transfer of new technology that improves productivity in X **permanently** (current and future periods). There are no other changes in the economy.

      Which claim is correct?
    options:
      - label: "1"
        text: |
          Foreign aid in the form of capital will increase current investment; foreign aid in the form of technology will decrease current investment.
        correct: false
        why: |
          Backwards on both counts: free capital means firms need to invest *less*, and permanent technology raises the return to capital, so investment goes *up*.
      - label: "2"
        text: |
          Both types of foreign aid will increase current investment.
        correct: false
        why: |
          Only the technology transfer raises investment. Receiving capital for free lets firms hit the same target with less of their own investment.
      - label: "3"
        text: |
          Foreign aid in the form of capital will decrease current investment; foreign aid in the form of technology will increase current investment.
        correct: true
        why: |
          A capital gift leaves the optimal future capital unchanged, so own investment falls; a permanent TFP gain raises future $MPK$, so optimal future capital and investment rise.
      - label: "4"
        text: |
          Both types of foreign aid will decrease current investment.
        correct: false
        why: |
          Technology aid raises future $MPK$, which pushes the optimal capital stock *up*, so investment cannot fall.
    solution: |
      Current investment is driven by the **optimal level of future capital**, which is pinned down by $MPK^{f} = \text{user cost}$. The question says nothing else changes, so the user cost is unchanged and everything depends on **future $MPK$**.

      - **Technology transfer (permanent):** future TFP rises, so $MPK^{f}$ rises at any capital level. Hitting $MPK^{f}=\text{user cost}$ now needs **more** future capital, so investment **increases**.
      - **Capital transfer:** future TFP, future labor and the user cost are all unchanged, so the **optimal future capital is unchanged**. Since the country receives capital "for free", it has to invest **less** to reach the same target: investment **decreases**.

      > [!success] Answer — **3. Foreign aid in the form of capital will decrease current investment; foreign aid in the form of technology will increase current investment.**

      > [!tip] 🗣️ In plain English
      > Think of the target as a fixed number of machines for next year. A gift of machines means you buy fewer yourself. A permanent technology boost makes each machine more valuable, so the target rises and you buy **more**.
    related_terms:
      - marginal-product-of-capital
      - user-cost-of-capital
      - capital-accumulation-equation
    source_doc_page: 2

  - id: q2
    title: "Q2 — Efficient allocation of labor and aggregate TFP"
    text: |
      - Labor is the only factor of production and it is freely mobile; there are $1{,}000$ units of labor and two firms.
      - Production: $Y_i = A_i N_i^{0.5}$ with $A_1 = 1$ and $A_2 = 3$.
      - Aggregate measured TFP (development accounting): $A = \dfrac{Y_1 + Y_2}{(N_1+N_2)^{0.5}}$.
      - The current allocation is $500$ units of labor in each firm.

      If the economy switches to the efficient allocation, aggregate measured TFP will:
    options:
      - label: "1"
        text: |
          Increase by 11.8%.
        correct: true
        why: |
          Measured TFP moves from $2.828$ (equal split) to $3.162$ (efficient $100/900$ split), a gain of $3.162/2.828 - 1 \approx 11.8\%$.
      - label: "2"
        text: |
          Increase by 10%
        correct: false
        why: |
          Close, but the exact calculation gives $11.8\%$.
      - label: "3"
        text: |
          There is insufficient information to calculate.
        correct: false
        why: |
          The planner's problem is fully specified by $A_i$, the exponent and the $1{,}000$ workers, so it can be solved.
      - label: "4"
        text: |
          Not change. The allocation is already efficient.
        correct: false
        why: |
          An equal split is not efficient here: the equal-$MPN$ condition requires $N_2 = 9N_1$.
    solution: |
      **Step 1 — current measured TFP** (500 each):

      $$A = \frac{1\times 500^{0.5} + 3\times 500^{0.5}}{1000^{0.5}} = 2.828$$

      **Step 2 — efficient allocation.** Equalize marginal products of labor, with $MPN_i = 0.5\,A_i N_i^{-0.5}$:

      $$0.5\,N_1^{-0.5} = 1.5\,N_2^{-0.5} \;\Longrightarrow\; \left(\frac{N_2}{N_1}\right)^{0.5} = 3 \;\Longrightarrow\; \frac{N_2}{N_1} = 9$$

      With $1{,}000$ workers in total: $N_2 = 900$ and $N_1 = 100$.

      **Step 3 — measured TFP at the efficient allocation:**

      $$A = \frac{1\times 100^{0.5} + 3\times 900^{0.5}}{1000^{0.5}} = 3.162$$

      Growth: $3.162 / 2.828 \approx 1.118$, an increase of **11.8%**.

      > [!success] Answer — **1. Increase by 11.8%.**

      > [!tip] 🗣️ In plain English
      > Moving workers toward the more productive firm (but not all of them, because of diminishing returns) lifts aggregate TFP by about **11.8%**. The efficient split is 100 workers in firm 1 and 900 in firm 2, the point where one more worker adds the same output in either firm.
    related_terms:
      - misallocation
      - marginal-product-of-labor
      - total-factor-productivity
    source_doc_page: 2

  - id: q3
    title: "Q3 — Evidence on cash transfers and Ricardian equivalence"
    text: |
      The empirical findings described in class on consumer responses to **cash transfers from the government** indicate that:
    options:
      - label: "1"
        text: |
          All consumers behave as consumption smoothers, consistent with the prediction of Ricardian equivalence.
        correct: false
        why: |
          The evidence is heterogeneous: some consumers say they would mostly spend the transfer, which is not smoothing.
      - label: "2"
        text: |
          All consumers behave as consumption smoothers, inconsistent with the prediction of Ricardian equivalence.
        correct: false
        why: |
          Not all are smoothers, and smoothing behavior is what Ricardian equivalence *would* predict, so this is internally off too.
      - label: "3"
        text: |
          Some consumers behave as consumption smoothers, while others do not. This heterogeneity is consistent with Ricardian equivalence.
        correct: false
        why: |
          Ricardian equivalence predicts that **no one** substantially raises current consumption after a debt-financed transfer, so a group of spenders is inconsistent with it.
      - label: "4"
        text: |
          Some consumers behave as consumption smoothers, while others do not. This heterogeneity is inconsistent with Ricardian equivalence.
        correct: true
        why: |
          Some report saving the transfer or repaying debt (smoothers), others mostly spending it. The spenders contradict the Ricardian prediction.
    solution: |
      The evidence shows **heterogeneous responses**: some consumers report they would mostly **save** the transfer or **repay debt** (consumption smoothers), while others would mostly **spend** it.

      [[Ricardian Equivalence]] predicts that consumers should **not** substantially increase current consumption in response to a debt-financed transfer, because it is offset by higher future taxes. Because a meaningful group does spend it, the heterogeneity is **inconsistent** with Ricardian equivalence.

      > [!success] Answer — **4. Some consumers behave as consumption smoothers, while others do not. This heterogeneity is inconsistent with Ricardian equivalence.**

      > [!tip] 🗣️ In plain English
      > Some people squirrel the cheque away, others spend it. Ricardian equivalence says nobody should spend it (higher taxes are coming), so the spenders are evidence **against** the theory.
    related_terms:
      - ricardian-equivalence
      - consumption-smoothing
      - fiscal-policy
    source_doc_page: 4

  - id: q4
    title: "Q4 — Skill-biased vs. routine-biased technological change"
    text: |
      The empirical findings discussed in class on **skill-biased** and **routine-biased** technological change indicate that:
    options:
      - label: "1"
        text: |
          Skill-biased technological change helps explain the wage premium associated with education; routine-biased technological change helps explain the stronger wage growth experienced in routine occupations.
        correct: false
        why: |
          Routine-biased change works the other way: new technology substitutes for routine tasks, so wage growth in routine occupations is *slower*.
      - label: "2"
        text: |
          Both skill-biased and routine-biased technological change help explain the wage premium associated with education.
        correct: false
        why: |
          Routine-biased change is about **tasks** (which occupations are replaced), not about the education premium.
      - label: "3"
        text: |
          Skill-biased technological change helps explain the wage premium associated with education; routine-biased technological change helps explain the slower wage growth experienced in routine occupations relative to other occupations.
        correct: true
        why: |
          SBTC raises relative demand for skilled workers (education premium); RBTC substitutes for routine tasks (slower wage growth in routine jobs).
      - label: "4"
        text: |
          Both skill-biased and routine-biased technological change help explain the slower wage growth experienced in routine occupations relative to other occupations.
        correct: false
        why: |
          SBTC is about education, not routine occupations.
    solution: |
      - **Skill-biased technological change** raises the relative demand for more educated or skilled workers, so it helps explain the **education wage premium**.
      - **Routine-biased technological change** focuses on tasks: technology substitutes for **routine tasks**, contributing to **slower wage growth in routine occupations** relative to non-routine occupations (see the inequality and polarization lecture).

      > [!success] Answer — **3. Skill-biased technological change helps explain the wage premium associated with education; routine-biased technological change helps explain the slower wage growth experienced in routine occupations relative to other occupations.**

      > [!tip] 🗣️ In plain English
      > SBTC is about **who** you are (educated or not): skilled workers gain. RBTC is about **what** you do (routine tasks): machines replace routine work, so routine jobs lag behind.
    related_terms:
      - skill-biased-technological-change
      - routine-biased-technological-change
      - polarization
    source_doc_page: 4

  - id: q5
    title: "Q5 — A lump-sum tax with no income effect on labor supply"
    text: |
      Workers derive utility from consumption $C$ and labor $N$:

      $$U(C,N) = \ln\!\left(C - \frac{1}{1+\psi}N^{1+\psi}\right), \qquad \psi > 0$$

      They receive the market wage $w$ and may pay a lump-sum tax $T>0$, so $C = wN - T$. The labor market is in equilibrium and the government announces a tax increase (larger $T$).

      *(Hint: solve for the labor supply function; assume consumption stays positive and the solution is interior.)* Which statement is correct?
    options:
      - label: "1"
        text: |
          The increase in the lump-sum tax does not affect labor supply. Labor demand does not change. Therefore equilibrium employment and wages do not change.
        correct: true
        why: |
          The static FOC gives $N = w^{1/\psi}$, with no $T$ in it. Labor demand depends only on $A$ and $K$. Neither curve moves.
      - label: "2"
        text: |
          The increase in the lump-sum tax shifts labor supply to the right because workers become poorer. Labor demand does not change. Therefore employment increases and wages fall.
        correct: false
        why: |
          This is what a *normal* income effect would do, but with this utility labor supply has **no income effect**.
      - label: "3"
        text: |
          The increase in the lump-sum tax does not affect labor supply, but labor demand shifts to the left because lower disposable income reduces demand for output. Therefore employment and wages fall.
        correct: false
        why: |
          In this model labor demand shifts only with TFP or capital, not with disposable income.
      - label: "4"
        text: |
          The increase in the lump-sum tax shifts labor supply to the right because workers become poorer, while labor demand shifts to the left because demand for output declines. Therefore wages fall, while the effect on employment is ambiguous.
        correct: false
        why: |
          Neither shift happens: supply has no income effect and demand is unaffected by $T$.
    solution: |
      **Labor demand** is set by $MPN = w$, so its position depends only on TFP and capital. It does not move with $T$. That leaves options 1 or 2.

      **Labor supply:** use the static first-order condition $-U_N = wU_C$ with the utility function:

      $$\frac{N^{\psi}}{C - \frac{1}{1+\psi}N^{1+\psi}} = w\cdot\frac{1}{C - \frac{1}{1+\psi}N^{1+\psi}} \;\Longrightarrow\; N^{\psi} = w \;\Longrightarrow\; N = w^{1/\psi}$$

      Labor supply depends on the **wage only**. The tax $T$ does not enter, so the supply curve does not shift: this is a utility function with **no income effect** (non-labor income and lump-sum taxes do not affect labor supply). With neither curve moving, employment and wages are unchanged.

      > [!success] Answer — **1. The increase in the lump-sum tax does not affect labor supply. Labor demand does not change. Therefore equilibrium employment and wages do not change.**

      > [!tip] 🗣️ In plain English
      > Normally a tax makes you poorer, so you work more. With this particular utility function, wealth has **zero** pull on how much you work, so the lump-sum tax changes nothing in the labor market.
    related_terms:
      - labor-supply
      - lump-sum-tax
      - income-effect
      - static-foc
    source_doc_page: 5

  - id: q6
    title: "Q6 — Two consumers, one of them cannot borrow"
    text: |
      Two consumers live for two periods and maximize $U(c_0,c_1) = u(c_0) + \beta u(c_1)$, with the same $\beta$ and the same utility ($u'>0$, $u''<0$). Neither has initial assets. The budget constraint is

      $$c_0 + \frac{1}{1+r}c_1 = y_0 + \frac{1}{1+r}y_1$$

      Assume $r = 0.02$, $\beta(1+r) = 1$, and **no borrowing** (saving is allowed).

      - Consumer A: $y_0 = 1500$, $y_1 = 1000$.
      - Consumer B: $y_0 = 15000$, $y_1 = 16000$.
    options:
      - label: "1"
        text: |
          For A: $c_0^A = c_1^A = 1252.5$. For B: $c_0^B = c_1^B = 15{,}495$.
        correct: false
        why: |
          This is the **unconstrained** solution. It is correct for A, but B would have to borrow in period 0 to get there, which is not allowed. (Partial credit: 1 point for solving the unconstrained problem.)
      - label: "2"
        text: |
          For A: $c_0^A = c_1^A = 1250$. For B: $c_0^B = c_1^B = 15{,}500$.
        correct: false
        why: |
          These numbers do not come from the budget constraint; the smoothed level is $1252.5$ and $15{,}495$.
      - label: "3"
        text: |
          For A: $c_0^A = c_1^A = 1252.5$. For B: $c_0^B = 15{,}000$, $c_1^B = 16{,}000$.
        correct: true
        why: |
          A is a saver, so smoothing is feasible. B's income rises over time, so smoothing would require borrowing; with no borrowing B consumes income each period.
      - label: "4"
        text: |
          For A: $c_0^A = 1500$, $c_1^A = 1000$. For B: $c_0^B = 15{,}000$, $c_1^B = 16{,}000$.
        correct: false
        why: |
          A can save, so A smooths down to $1252.5$ in each period rather than consuming income.
    solution: |
      Since $\beta(1+r)=1$, the Euler equation says consumption is **constant** over time, $c_0 = c_1$. Substituting into the budget constraint:

      $$c_0\left(1 + \frac{1}{1.02}\right) = y_0 + \frac{y_1}{1.02} \;\Longrightarrow\; c_0 = \frac{y_0 + \frac{y_1}{1.02}}{1 + \frac{1}{1.02}}$$

      - **A:** $c_0 = c_1 = 1252.5$. A has high income today, so to smooth A **saves** in period 0. Saving is allowed, so this is feasible.
      - **B:** $c_0 = c_1 = 15{,}495$ would require consuming more than $y_0 = 15{,}000$ today, i.e. **borrowing**. That is not allowed, so B consumes income each period: $c_0 = 15{,}000$, $c_1 = 16{,}000$.

      > [!success] Answer — **3. For A: $c_0^A = c_1^A = 1252.5$. For B: $c_0^B = 15{,}000$, $c_1^B = 16{,}000$.**

      > [!tip] 🗣️ In plain English
      > A earns more now than later, so A saves some and smooths. B earns less now than later and would love to borrow, but cannot, so B is stuck consuming exactly their income each period.
    related_terms:
      - euler-equation
      - borrowing-constraints
      - consumption-smoothing
    source_doc_page: 6

  - id: q7
    title: "Q7 — Steady-state debt-to-GDP and its stability"
    text: |
      Data: real GDP is expected to grow at $3\%$ in all periods; the planned primary deficit is $1.5\%$ of GDP in all periods; the real interest rate on government debt is $2\%$ in all periods.

      Which statement is correct about the steady state (a constant debt-to-GDP ratio)?
    options:
      - label: "1"
        text: |
          The steady-state debt-to-GDP ratio is $1.545$; this steady state is stable.
        correct: true
        why: |
          $b^* = -d\frac{1+g}{r-g} = 1.545$, and because $r<g$ debt-to-GDP converges back to it from either side.
      - label: "2"
        text: |
          The steady-state debt-to-GDP ratio is $1.545$; this steady state is unstable.
        correct: false
        why: |
          The level is right (2 points partial credit), but it is stable, not unstable.
      - label: "3"
        text: |
          The steady-state debt-to-GDP ratio is $-1.545$; this steady state is stable.
        correct: false
        why: |
          Stability is right (2 points partial credit) but the sign is wrong: with $r<g$ and a deficit, the steady state is positive.
      - label: "4"
        text: |
          The steady-state debt-to-GDP ratio is $-1.545$; this steady state is unstable.
        correct: false
        why: |
          Both the sign and the stability are wrong.
    solution: |
      Set $\Delta b = 0$ in the debt-dynamics equation:

      $$\Delta b = d + \frac{r-g}{1+g}\,b = 0 \;\Longrightarrow\; b = -d\,\frac{1+g}{r-g} = -0.015\times\frac{1.03}{-0.01} = 1.545$$

      **Stability:** start on either side of $1.545$ and apply $b_t = d + \frac{1+r}{1+g}b_{t-1}$.

      - From $b=1$: $b_t = 0.015 + \frac{1.02}{1.03}\times 1 \approx 1.005 > 1$ (moves up, towards $1.545$).
      - From $b=2$: $b_t = 0.015 + \frac{1.02}{1.03}\times 2 \approx 1.995 < 2$ (moves down, towards $1.545$).

      Either way the ratio heads back to the steady state, so it is **stable**. (This is the usual case when $r<g$.)

      > [!success] Answer — **1. The steady-state debt-to-GDP ratio is $1.545$; this steady state is stable.**

      > [!tip] 🗣️ In plain English
      > With growth (3%) above the interest rate (2%), the economy outgrows its debt: the debt ratio settles at about **154.5% of GDP** and is pulled back there if it drifts away.
    related_terms:
      - public-debt-dynamics
      - primary-deficit
      - government-budget-constraint
    source_doc_page: 8

  - id: q8
    title: "Q8 — Optimism about future income in the goods market"
    text: |
      The goods market is in equilibrium with $S = I$, and all the regular assumptions on consumption, saving and investment hold. Labor supply is constant (no change in labor).

      Consumers become **optimistic about their future income**: they believe their future disposable income will be higher than previously expected. Assume no change in current disposable income and no change in firms' beliefs.

      In the new short-run equilibrium:
    options:
      - label: "1"
        text: |
          Current consumption increases and both the saving and investment curves shift to the left. Equilibrium saving and investment decrease, while the effect on the real interest rate is ambiguous.
        correct: false
        why: |
          Investment depends on firms' beliefs, which did not change, so the investment curve does not shift.
      - label: "2"
        text: |
          Current consumption increases and the saving curve shifts to the left. The investment curve does not shift. The real interest rate rises, while equilibrium saving and investment decrease.
        correct: true
        why: |
          Higher expected PVLR raises consumption today; with current income fixed, saving ($Y-C$) falls, so the $S$ curve moves left, $r$ rises, and $S=I$ falls along a fixed investment curve.
      - label: "3"
        text: |
          Current consumption decreases and the saving curve shifts to the right. The investment curve does not shift. The real interest rate falls, while equilibrium saving and investment increase.
        correct: false
        why: |
          Richer households consume *more*, not less.
      - label: "4"
        text: |
          Current consumption, saving, and investment remain unchanged because current income and firms' expectations have not changed.
        correct: false
        why: |
          Consumers' *expected* future income matters through PVLR, so consumption does change.
    solution: |
      Higher expected future disposable income means a higher expected **PVLR**, so consumers want to consume more in **every** period, including today.

      Current disposable income is unchanged, so with $S = Y - C$, saving **falls**: the **saving curve shifts left**. The investment curve depends on firms' beliefs, which did not change, so it stays put.

      In the new equilibrium the real interest rate is **higher**, and since we move along the unchanged investment curve, equilibrium $S = I$ is **lower**.

      > [!success] Answer — **2. Current consumption increases and the saving curve shifts to the left. The investment curve does not shift. The real interest rate rises, while equilibrium saving and investment decrease.**

      > [!tip] 🗣️ In plain English
      > Households feel richer and spend more today. With the same income today, that means less saving, fewer funds for investment, a higher interest rate, and so less investment.
    related_terms:
      - savings-investment-equilibrium
      - pvlr
      - real-interest-rate
    source_doc_page: 9

  - id: q9
    title: "Q9 — A consumption tax with power utility: slide or shift?"
    text: |
      Workers have utility

      $$U(C,N) = \frac{C^{1-\sigma}}{1-\sigma} - \theta\frac{N^{1+\psi}}{1+\psi}, \qquad \sigma>0,\ \sigma\neq 1,\ \theta>0,\ \psi>0$$

      and the budget constraint $(1+\tau_C)C = wN$, where $w$ is the market real wage and $\tau_C$ a consumption tax that consumers take as given. The government raises $\tau_C$ (the proceeds are wasted). Which statement is correct?
    options:
      - label: "1"
        text: |
          If $\sigma > 1$ then workers reduce labor supply: the labor supply curve shifts left.
        correct: false
        why: |
          For $\sigma>1$ the exponent on $(1+\tau_C)$ is positive, so the tax *raises* labor supply (income effect dominates).
      - label: "2"
        text: |
          If $\sigma > 1$ then workers reduce labor supply: workers "slide down" the labor supply curve.
        correct: false
        why: |
          A tax change is not a change in the endogenous wage, so it shifts the curve rather than moving workers along it; and for $\sigma>1$ labor supply rises anyway.
      - label: "3"
        text: |
          If $\sigma < 1$ then workers reduce labor supply: workers "slide down" the labor supply curve.
        correct: false
        why: |
          Right direction for $\sigma<1$, but a tax change **shifts** the supply curve; sliding along it happens when the wage $w$ changes.
      - label: "4"
        text: |
          If $\sigma < 1$ then workers reduce labor supply: the labor supply curve shifts left.
        correct: true
        why: |
          For $\sigma<1$ the power on $(1+\tau_C)$ is negative, so a higher tax lowers $N$ at every wage: a leftward shift.
    solution: |
      First, options 2 and 3 can be dismissed: a change in the tax rate is not a change in the equilibrium wage $w$, so it must **shift** the labor supply curve rather than slide workers along it.

      To find the direction, derive labor supply. The optimality condition with a consumption tax is

      $$-U_N = \frac{1}{1+\tau_C}\,wU_C \;\Longrightarrow\; \theta N^{\psi} = \frac{1}{1+\tau_C}\,wC^{-\sigma}$$

      Substitute $C = \dfrac{wN}{1+\tau_C}$:

      $$\theta N^{\psi} = w\left(\frac{wN}{1+\tau_C}\right)^{-\sigma}\frac{1}{1+\tau_C} = (1+\tau_C)^{\sigma-1}\,w^{1-\sigma}N^{-\sigma}$$

      $$N = \left(\frac{1}{\theta}\right)^{\frac{1}{\psi+\sigma}}(1+\tau_C)^{\frac{\sigma-1}{\psi+\sigma}}\,w^{\frac{1-\sigma}{\psi+\sigma}}$$

      The effect of $\tau_C$ is through the power $\frac{\sigma-1}{\psi+\sigma}$. If $\sigma<1$ it is **negative**, so a higher tax lowers $N$ at every wage: the supply curve **shifts left**. (This is the case where the distortion (substitution) effect dominates the income effect.)

      > [!success] Answer — **4. If $\sigma < 1$ then workers reduce labor supply: the labor supply curve shifts left.**

      > [!tip] 🗣️ In plain English
      > A higher consumption tax makes every wage buy fewer goods. Whether you respond by working less depends on $\sigma$. When $\sigma<1$ the discouraging substitution effect wins, so at any given wage people supply less labor: the whole curve **shifts left**.
    related_terms:
      - labor-supply
      - consumption-tax
      - static-foc
      - substitution-effect
    source_doc_page: 10

  - id: q10
    title: "Q10 — Task-based model: new task and better capital in task 2"
    text: |
      Task $j$ is produced by $y(j) = \psi_N(j)N(j) + \psi_K(j)K(j)$, where $\psi_N$ and $\psi_K$ are labor and capital productivity in task $j$. One unit of each task must be produced.

      **2020:** $w = 5$, $r = 10$.

      | Task | $\psi_K(j)$ | $\psi_N(j)$ |
      |---|---|---|
      | 1 | 5 | 2 |
      | 2 | 4 | 4 |

      **2025:** task 3 is introduced and capital productivity in task 2 rises.

      | Task | $\psi_K(j)$ | $\psi_N(j)$ |
      |---|---|---|
      | 1 | 5 | 2 |
      | 2 | 6 | 4 |
      | 3 | 10 | 10 |

      Initially assume factor prices stay unchanged. Then suppose labor and capital supply curves slope upward; for simplicity assume the task allocation does not change when factor prices adjust. Which statement is correct?
    options:
      - label: "1"
        text: |
          In 2020, task 1 uses capital and task 2 uses labor. In 2025, task 1 uses capital, while tasks 2 and 3 use labor. Labor demand increases and capital demand is unchanged; therefore the equilibrium wage rises while the price of capital is unchanged.
        correct: true
        why: |
          Unit costs show task 2 stays with labor ($1.25 < 1.667$) and the new task 3 goes to labor ($0.5 < 1$). More tasks for labor, none lost by capital.
      - label: "2"
        text: |
          In 2020, task 1 uses capital and task 2 uses labor. In 2025, the increase in capital productivity causes task 2 to switch to capital, while task 3 uses labor. Labor demand falls and capital demand increases; therefore the equilibrium wage falls while the price of capital rises.
        correct: false
        why: |
          Task 2 does **not** switch: even after the improvement, capital costs $10/6=1.667$ vs. labor $1.25$.
      - label: "3"
        text: |
          In 2020, task 1 uses capital and task 2 uses labor. In 2025, tasks 1 and 2 use capital, while task 3 uses labor. Labor demand is unchanged because the same number of tasks is assigned to labor; therefore the wage is unchanged while the price of capital rises.
        correct: false
        why: |
          Task 2 stays with labor, so labor ends up with two tasks (2 and 3), not one.
      - label: "4"
        text: |
          In 2025, tasks 2 and 3 are produced with labor, but the introduction of task 3 reduces capital demand. Therefore the equilibrium wage rises while the price of capital falls.
        correct: false
        why: |
          Capital still produces task 1 only, so capital demand is unchanged, not reduced; the price of capital does not fall.
    solution: |
      For each task compare the **cost of one unit** produced with capital, $r/\psi_K(j)$, and with labor, $w/\psi_N(j)$, and pick the cheaper factor.

      **2020:**

      | Task | Capital cost $r/\psi_K$ | Labor cost $w/\psi_N$ |
      |---|---|---|
      | 1 | $10/5 = 2$ | $5/2 = 2.5$ |
      | 2 | $10/4 = 2.5$ | $5/4 = 1.25$ |

      Task 1 uses **capital**, task 2 uses **labor**.

      **2025** (using the assumption that the allocation does not change when prices adjust, we can keep the old prices):

      | Task | Capital cost | Labor cost |
      |---|---|---|
      | 1 | $10/5 = 2$ | $5/2 = 2.5$ |
      | 2 | $10/6 = 1.667$ | $5/4 = 1.25$ |
      | 3 | $10/10 = 1$ | $5/10 = 0.5$ |

      Task 1 stays with capital, task 2 stays with labor, and the **new task 3 goes to labor**. So **labor demand rises** (an extra task) while **capital demand is unchanged**: with upward-sloping supply the **wage rises** and the **price of capital is unchanged**.

      > [!success] Answer — **1. In 2020, task 1 uses capital and task 2 uses labor. In 2025, task 1 uses capital, while tasks 2 and 3 use labor. Labor demand increases and capital demand is unchanged; therefore the equilibrium wage rises while the price of capital is unchanged.**

      > [!tip] 🗣️ In plain English
      > Capital got better at task 2, but not enough to beat labor on cost, so labor keeps it. The brand-new task 3 is cheapest with workers, so workers gain a task and nobody loses one: wages go up, the rental price of capital stays put.
    related_terms:
      - task-based-model
      - automation
      - labor-demand
    source_doc_page: 11

  - id: q11
    title: "Q11 — Two claims: steady-state unemployment and the future price of capital"
    text: |
      Consider two claims.

      **Claim 1:** Unemployed workers in country X are twice as likely to find a job as unemployed workers in country Z. Employed workers in X are also twice as likely to lose their jobs as employed workers in Z. Because workers lose their jobs more frequently, the steady-state unemployment rate in X is higher.

      **Claim 2:** Holding all other factors constant, an increase in the future price of capital reduces the user cost of capital and increases firms' demand for investment.

      Which is correct?
    options:
      - label: "1"
        text: |
          Only Claim 1 is correct.
        correct: false
        why: |
          Claim 1 is wrong: doubling both $d$ and $f$ leaves $u = d/(d+f)$ unchanged.
      - label: "2"
        text: |
          Only Claim 2 is correct.
        correct: true
        why: |
          Claim 1 fails because $u = \frac{2d}{2d+2f} = \frac{d}{d+f}$; Claim 2 holds because a higher $p_k^f$ lowers the user cost.
      - label: "3"
        text: |
          Both claims are correct.
        correct: false
        why: |
          Claim 1 is incorrect: higher separation is exactly offset by higher job finding.
      - label: "4"
        text: |
          Both claims are incorrect.
        correct: false
        why: |
          Claim 2 is correct: capital that is expected to appreciate is cheaper to hold, so the user cost falls.
    solution: |
      **Claim 1 is incorrect.** Steady-state unemployment is $u = \dfrac{d}{d+f}$. Country X has $2d$ and $2f$, and

      $$\frac{2d}{2d+2f} = \frac{d}{d+f}$$

      so the two unemployment rates are **equal**.

      **Claim 2 is correct.** In the user cost

      $$\frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K}$$

      a higher future price $p_k^{f}$ **lowers** the user cost. Intuitively, capital expected to appreciate in value is cheaper to use. A lower user cost raises optimal future capital and therefore investment.

      > [!success] Answer — **2. Only Claim 2 is correct.**

      > [!tip] 🗣️ In plain English
      > Claim 1 sounds plausible but the two doubled rates cancel, so unemployment is identical. Claim 2 is right: if your machines will be worth more later, owning them costs you less today, so you invest more.
    related_terms:
      - steady-state-unemployment
      - user-cost-of-capital
      - job-finding-rate
      - separation-rate
    source_doc_page: 13

  - id: q12
    title: "Q12 — A permanent cut in the capital tax: short run vs. long run"
    text: |
      Consumers and firms behave according to the standard consumption, labor-supply, production and investment models. The utility function is such that there is **no income/wealth effect on labor supply**. Firms choose labor demand and investment according to the standard model. The economy starts in a long-run equilibrium.

      The government announces a **permanent reduction in the tax rate on capital** $\tau_K$, with no change in government spending, transfers or other taxes. "Short run" means the period before the capital stock can adjust. As a result:
    options:
      - label: "1"
        text: |
          Short run: labor and output are unchanged. Long run: labor, output and capital increase.
        correct: true
        why: |
          In the short run $A$, $K$, $N$ are all unchanged; in the long run higher $K$ raises $MPN$ (complementarity), shifting labor demand right, so $N$, $K$ and $Y$ all rise.
      - label: "2"
        text: |
          Short run: labor and output increase. Long run: labor, output and capital increase.
        correct: false
        why: |
          Nothing in the short-run labor market shifts, since $A$ and $K$ cannot change within the period.
      - label: "3"
        text: |
          Short run: labor and output increase. Long run: labor, output and capital are unchanged.
        correct: false
        why: |
          Both halves fail: no short-run change, and the long run has more capital.
      - label: "4"
        text: |
          Short run: labor and output are unchanged. Long run: labor is unchanged, while output and capital increase.
        correct: false
        why: |
          In the long run higher capital raises $MPN$ and labor demand, so labor *does* increase.
    solution: |
      The tax cut lowers the **user cost of capital**, so optimal future capital (and current investment) must **increase**.

      **Short run:** $A$, $K$ and $N$ do not change in the current period, so labor demand is unchanged. With no income effect on labor supply, any change in lifetime resources does not matter for labor supply either. So the labor market, and hence **output**, is **unchanged**.

      **Long run:** once capital has adjusted upward, $MPN$ is higher (complementarity), so the labor demand curve **shifts right** and equilibrium **labor increases**. More capital and more labor mean **more output** through the production function.

      > [!success] Answer — **1. Short run: labor and output are unchanged. Long run: labor, output and capital increase.**

      > [!tip] 🗣️ In plain English
      > Cheaper capital makes firms invest, but the extra machines only show up later. Today nothing in the labor market changes. Once the machines are in place they make workers more productive, so employment, capital and output are all higher in the long run.
    related_terms:
      - user-cost-of-capital
      - labor-demand
      - marginal-product-of-labor
      - capital-accumulation-equation
    source_doc_page: 14

  - id: q13
    title: "Q13 — Search model: unemployed workers before and after a shock"
    text: |
      In a standard search model the entire population is in the labor force: $10{,}000{,}000$ workers. Each period the probability of losing a job is $d$ and the probability of finding one is $f$.

      At the beginning of the period the market is in steady state with $d = 2\%$ and $f = 38\%$. During the period, $d$ rises to $4\%$ and $f$ falls to $18\%$.

      Which statement is correct?
    options:
      - label: "1"
        text: |
          At the beginning of the period there are 500,000 unemployed workers; at the end there are 790,000 unemployed workers.
        correct: true
        why: |
          Steady state: $u = 0.02/0.40 = 5\%$, i.e. $500{,}000$. Next period: $0.82\times500{,}000 + 0.04\times9{,}500{,}000 = 790{,}000$.
      - label: "2"
        text: |
          At the beginning of the period there are 500,000 unemployed workers; at the end there are approximately 1,818,181 unemployed workers.
        correct: false
        why: |
          $1{,}818{,}181$ is the *new steady state* ($0.04/0.22$), which takes many periods to reach, not the end-of-period level.
      - label: "3"
        text: |
          At the beginning of the period there are 200,000 unemployed workers; at the end there are 556,000 unemployed workers.
        correct: false
        why: |
          The initial steady state is $d/(d+f)=5\%$, not $2\%$.
      - label: "4"
        text: |
          At the beginning of the period there are 790,000 unemployed workers; at the end there are 1,818,181 unemployed workers.
        correct: false
        why: |
          The two numbers are swapped into the wrong places: $790{,}000$ is the end-of-period figure and $1{,}818{,}181$ is the new steady state.
    solution: |
      **Start of the period (steady state):**

      $$u = \frac{d}{d+f} = \frac{0.02}{0.02+0.38} = 0.05$$

      so $U_0 = 0.05\times 10{,}000{,}000 = 500{,}000$ unemployed (and $E_0 = 9{,}500{,}000$).

      **End of the period.** Use the evolution equation with the new probabilities:

      $$U_{t+1} = (1-f)U_t + d\,E_t = (1-0.18)\times 500{,}000 + 0.04\times 9{,}500{,}000 = 790{,}000$$

      > [!success] Answer — **1. At the beginning of the period there are 500,000 unemployed workers; at the end there are 790,000 unemployed workers.**

      > [!tip] 🗣️ In plain English
      > Starting from 5% unemployment (500,000 people), a worse labor market puts the count at **790,000** after one period. It keeps climbing towards the new steady state of about 1.8 million, but that takes many periods.
    related_terms:
      - stocks-and-flows-model
      - steady-state-unemployment
      - job-finding-rate
      - separation-rate
    source_doc_page: 15

  - id: q14
    title: "Q14 — Did TFP rise? Growth accounting with per-capita data"
    text: |
      The production function is $Y_t = A_t K_t^{0.3} N_t^{0.7}$ ($N_t$ is population; assume everyone works). You have per-capita data:

      | Year | GDP per capita | Capital per capita |
      |---|---|---|
      | 2024 | 10,000 | 20,000 |
      | 2025 | 11,000 | 24,000 |

      Which statement is correct?
    options:
      - label: "1"
        text: |
          TFP declined between 2024 and 2025.
        correct: false
        why: |
          Computed TFP rises from about $512.5$ to $533.8$.
      - label: "2"
        text: |
          TFP increased between 2024 and 2025.
        correct: true
        why: |
          $A = y/k^{0.3}$ gives $512.5$ in 2024 and $533.8$ in 2025.
      - label: "3"
        text: |
          TFP did not change between 2024 and 2025.
        correct: false
        why: |
          The two values differ, so TFP is not constant.
      - label: "4"
        text: |
          The direction of the change in TFP depends on population growth: TFP increased if population grew by less than approximately 6%, but declined if population grew by more than approximately 6%.
        correct: false
        why: |
          Per-capita output and per-capita capital are all you need: the population cancels out once the function is written per capita.
    solution: |
      The data are per capita, so rewrite the production function in per-capita terms (divide by $N$):

      $$y_t = \frac{Y_t}{N_t} = \frac{A_tK_t^{0.3}N_t^{0.7}}{N_t} = A_t\left(\frac{K_t}{N_t}\right)^{0.3} = A_t\,k_t^{0.3}$$

      Population drops out, and TFP is

      $$A_{2024} = \frac{10{,}000}{20{,}000^{0.3}} = 512.5, \qquad A_{2025} = \frac{11{,}000}{24{,}000^{0.3}} = 533.8$$

      TFP **increased**.

      > [!success] Answer — **2. TFP increased between 2024 and 2025.**

      > [!tip] 🗣️ In plain English
      > Output per person grew 10% while capital per person grew 20%. Because capital only gets a weight of 0.3, the extra capital explains only part of the output gain, and the remainder (a rise in **TFP**) is left over.
    related_terms:
      - total-factor-productivity
      - development-accounting
      - cobb-douglas
    source_doc_page: 16

  - id: q15
    title: "Q15 — True vs. measured TFP when human capital is ignored"
    text: |
      Production is $Y_t = A_tK_t^{0.3}(h_tN_t)^{0.7}$, where $h_t$ is average human capital per worker. Between 2024 and 2025:

      - GDP increases by $20\%$;
      - the physical capital stock increases by $10\%$;
      - the number of workers is unchanged;
      - average human capital per worker increases by $10\%$.

      An economist without human-capital data measures TFP as $\tilde A_t = \dfrac{Y_t}{K_t^{0.3}N_t^{0.7}}$. Which statement is correct?
    options:
      - label: "1"
        text: |
          True TFP increases by approximately 16.6%, while measured TFP increases by approximately 9.1%.
        correct: false
        why: |
          Reversed: ignoring $h$ *overstates* TFP growth, so the measured number is the larger one.
      - label: "2"
        text: |
          True TFP increases by approximately 9.1%, while measured TFP increases by approximately 16.6%.
        correct: true
        why: |
          True: $1.2/(1.1^{0.3}\times1.1^{0.7}) = 1.2/1.1 \approx 1.091$. Measured: $1.2/1.1^{0.3}\approx 1.166$.
      - label: "3"
        text: |
          True TFP and measured TFP both increase by approximately 9.1%.
        correct: false
        why: |
          Measured TFP absorbs the human-capital gain, so it grows faster than true TFP.
      - label: "4"
        text: |
          True TFP is unchanged, while measured TFP increases by approximately 16.6%.
        correct: false
        why: |
          True TFP is not flat: ratio $1.2/1.1\approx1.091$, so it rises about $9.1\%$.
    solution: |
      **True TFP growth** uses the full production function:

      $$\frac{A_{2025}}{A_{2024}} = \frac{Y_{2025}/Y_{2024}}{(K_{2025}/K_{2024})^{0.3}(h_{2025}/h_{2024})^{0.7}(N_{2025}/N_{2024})^{0.7}} = \frac{1.2}{1.1^{0.3}\times1.1^{0.7}\times 1^{0.7}} = \frac{1.2}{1.1}\approx 1.091$$

      **Measured TFP** ignores $h$:

      $$\frac{\tilde A_{2025}}{\tilde A_{2024}} = \frac{1.2}{1.1^{0.3}\times 1^{0.7}} \approx 1.166$$

      Measured TFP growth ($16.6\%$) is larger than true TFP growth ($9.1\%$): the economist wrongly attributes the contribution of higher human capital to TFP.

      > [!success] Answer — **2. True TFP increases by approximately 9.1%, while measured TFP increases by approximately 16.6%.**

      > [!tip] 🗣️ In plain English
      > If workers get better (more human capital) and you don't measure it, the extra output looks like a technology improvement. So measured TFP growth (about **16.6%**) overstates the true figure (about **9.1%**).
    related_terms:
      - human-capital
      - total-factor-productivity
      - development-accounting
    source_doc_page: 17

  - id: q16
    title: "Q16 — Chain-weighted real GDP growth"
    text: |
      An economy produces cucumbers, rice and computers:

      | Year | Q cucumbers | Q rice | Q computers | P cucumbers | P rice | P computers |
      |---|---|---|---|---|---|---|
      | 2024 | 10,000 | 1,000 | 100 | 20 | 50 | 1,000 |
      | 2025 | 9,000 | 1,400 | 100 | 20 | 80 | 950 |

      The chain-weighted real GDP growth rate between 2024 and 2025 is approximately:
    options:
      - label: "1"
        text: |
          0%
        correct: false
        why: |
          This is the growth rate with 2024 as the base year only (1 point partial credit).
      - label: "2"
        text: |
          3.2%
        correct: false
        why: |
          This is the growth rate with 2025 as the base year only (1 point partial credit).
      - label: "3"
        text: |
          10.6%
        correct: false
        why: |
          This is not a growth rate under either base year.
      - label: "4"
        text: |
          1.6%
        correct: true
        why: |
          The geometric average of $0\%$ (base 2024) and $3.2\%$ (base 2025): $\sqrt{1.00\times1.032}-1\approx1.6\%$.
    solution: |
      Chain weighting averages (geometrically) the growth rates computed with each year as the base.

      **Nominal GDP:** 2024: $10{,}000\times20 + 1{,}000\times50 + 100\times1{,}000 = 350{,}000$. 2025: $9{,}000\times20 + 1{,}400\times80 + 100\times950 = 387{,}000$.

      - **Base year 2024:** real GDP 2024 $=350{,}000$; real GDP 2025 (2025 quantities, 2024 prices) $= 9{,}000\times20+1{,}400\times50+100\times1{,}000 = 350{,}000$. Growth $=0\%$.
      - **Base year 2025:** real GDP 2024 (2024 quantities, 2025 prices) $=10{,}000\times20+1{,}000\times80+100\times950=375{,}000$; real GDP 2025 $=387{,}000$. Growth $=\dfrac{387{,}000}{375{,}000}-1 = 3.2\%$.

      **Chain-weighted growth:**

      $$\left(1\times1.032\right)^{0.5}-1 \approx 0.016 = 1.6\%$$

      > [!success] Answer — **4. 1.6%**

      > [!tip] 🗣️ In plain English
      > Using 2024 prices says there was no growth, using 2025 prices says 3.2%. Chain weighting splits the difference with a geometric average: about **1.6%**.
    related_terms:
      - gdp
      - real-vs-nominal
      - gdp-deflator
    source_doc_page: 18

  - id: q17
    title: "Q17 — Back out the optimal future capital and the real interest rate"
    text: |
      Firms invest optimally according to the standard investment model, with $Y_t = A_tK_t^{0.5}N_t^{0.5}$ in every period. Information:

      - current capital stock $300$; current investment $130$; depreciation rate $10\%$;
      - future TFP $=100$; future labor $=100$;
      - current price of capital $200$; expected future price of capital $210$;
      - tax rate on capital $20\%$.

      Which pair gives the optimal future capital stock and the real interest rate consistent with the observed investment?
    options:
      - label: "1"
        text: |
          Future capital is 400, and the real interest rate is 4.5%.
        correct: true
        why: |
          $K^{f} = 0.9\times300+130=400$, $MPK^{f}=25$, and setting this equal to the user cost gives $r = 4.5\%$.
      - label: "2"
        text: |
          Future capital is 430, and the real interest rate is approximately 4.1%.
        correct: false
        why: |
          $430$ would come from forgetting depreciation ($300+130$).
      - label: "3"
        text: |
          Future capital is 400, and the real interest rate is 7%.
        correct: false
        why: |
          The capital stock is right (1 point partial credit) but the interest rate does not solve the user-cost equation.
      - label: "4"
        text: |
          Future capital is 430, and the real interest rate is approximately 6.6%.
        correct: false
        why: |
          $K^{f}=430$ ignores depreciation, and the rate follows from that wrong capital stock.
    solution: |
      **Step 1 — future capital** from the capital-accumulation equation:

      $$K^{f} = (1-\delta)K + I = 0.9\times300 + 130 = 400$$

      **Step 2 — future marginal product of capital:**

      $$MPK^{f} = 0.5\times A^{f}(K^{f})^{-0.5}(N^{f})^{0.5} = 0.5\times100\times400^{-0.5}\times100^{0.5} = 0.5\times100\times\tfrac{1}{20}\times10 = 25$$

      **Step 3 — set it equal to the user cost** and solve for $r$:

      $$25 = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K} = \frac{200 + 200r - 0.9\times210}{0.8} \;\Longrightarrow\; 20 = 200r + 11 \;\Longrightarrow\; r = 0.045$$

      > [!success] Answer — **1. Future capital is 400, and the real interest rate is 4.5%.**

      > [!tip] 🗣️ In plain English
      > Work out next year's capital from what the firm bought (400), see what an extra machine would then earn (25), and the only interest rate that makes that earning equal to the cost of owning a machine is **4.5%**.
    related_terms:
      - user-cost-of-capital
      - capital-accumulation-equation
      - marginal-product-of-capital
    source_doc_page: 19

  - id: q18
    title: "Q18 — A permanent improvement in capital quality"
    text: |
      An economy in equilibrium produces $Y_t = A_t(q_tK_t)^{\alpha}N_t^{1-\alpha}$ with $0<\alpha<1$, where capital quality $q_t$ is exogenously given and known. Households' preferences satisfy the usual assumptions. Capital quality improves **permanently** starting this period.

      As a result, in the short run:
    options:
      - label: "1"
        text: |
          The labor demand curve shifts right; the labor supply curve does not shift.
        correct: false
        why: |
          A permanent rise in income raises PVLR, so (with the usual preferences) labor supply does shift.
      - label: "2"
        text: |
          The labor demand curve does not shift; the labor supply curve does not shift.
        correct: false
        why: |
          $MPN$ rises with $q$, so demand shifts.
      - label: "3"
        text: |
          The labor demand curve shifts right; the labor supply curve shifts left.
        correct: true
        why: |
          $MPN_t = (1-\alpha)A_t(q_tK_t)^{\alpha}N_t^{-\alpha}$ rises with $q$ (demand right); the permanent income gain raises PVLR, so people supply less labor (supply left).
      - label: "4"
        text: |
          The labor demand curve does not shift; the labor supply curve shifts left.
        correct: false
        why: |
          Supply shifts left, but demand shifts right because $MPN$ rises with $q$.
    solution: |
      **Labor demand** sets $MPN = w$, where

      $$MPN_t = (1-\alpha)A_t(q_tK_t)^{\alpha}N_t^{-\alpha}$$

      A higher $q_t$ raises $MPN$ at every wage, so the demand curve **shifts right**.

      **Labor supply:** the improvement is **permanent**, so households know income (GDP) will be permanently higher. Their **PVLR** rises and they supply less labor at every wage: the supply curve **shifts left**.

      > [!success] Answer — **3. The labor demand curve shifts right; the labor supply curve shifts left.**

      > [!tip] 🗣️ In plain English
      > Better machines make workers more valuable, so firms want more labor (demand right). But the gain is permanent and households feel richer for life, so they want to work less (supply left).
    related_terms:
      - labor-demand
      - labor-supply
      - pvlr
      - marginal-product-of-labor
    source_doc_page: 21

  - id: q19
    title: "Q19 — Ranking sources of GDP-per-capita differences"
    text: |
      All countries share the per-capita production function $y_t = A_t\,x_t^{0.3}\,k_t^{0.7}$, where $y$ is GDP per capita, $A$ is TFP, $x$ is infrastructure per capita and $k$ is capital per capita. Data:

      | | Population | Total capital | TFP | Total infrastructure |
      |---|---|---|---|---|
      | Country Z | 125,000 | 600,000 | 2 | 500,000 |
      | Country B | 100,000 | 150,000 | 1 | 100,000 |

      Based on these data, the ranking of importance of the factors in explaining GDP-per-capita differences is:
    options:
      - label: "1"
        text: |
          TFP > Capital > Infrastructure.
        correct: false
        why: |
          TFP contributes a factor of $2$, which is below the capital factor of about $2.26$.
      - label: "2"
        text: |
          Infrastructure > TFP > Capital.
        correct: false
        why: |
          Infrastructure contributes only about $1.52$, the smallest factor.
      - label: "3"
        text: |
          Infrastructure > Capital > TFP.
        correct: false
        why: |
          Infrastructure is the smallest contributor, not the largest.
      - label: "4"
        text: |
          Capital > TFP > Infrastructure.
        correct: true
        why: |
          Factors of about $2.26$ (capital), $2$ (TFP) and $1.52$ (infrastructure).
    solution: |
      Convert to per capita: $k_Z = 600{,}000/125{,}000 = 4.8$, $x_Z = 4$; $k_B = 1.5$, $x_B = 1$. Then take the ratio of outputs:

      $$\frac{y_Z}{y_B} = \frac{A_Z}{A_B}\left(\frac{x_Z}{x_B}\right)^{0.3}\left(\frac{k_Z}{k_B}\right)^{0.7} = 2\times 4^{0.3}\times 3.2^{0.7} \approx 2\times1.52\times2.26$$

      Each factor's contribution is its own multiplicative term: **capital $\approx 2.26$**, **TFP $=2$**, **infrastructure $\approx 1.52$**. Ranking: capital > TFP > infrastructure.

      > [!success] Answer — **4. Capital > TFP > Infrastructure.**

      > [!tip] 🗣️ In plain English
      > Output per person is a product of three pieces, so compare the pieces: capital per person contributes the biggest multiplier (about 2.26), TFP the next (2), and infrastructure the smallest (about 1.5).
    related_terms:
      - development-accounting
      - total-factor-productivity
      - cobb-douglas
    source_doc_page: 21

  - id: q20
    title: "Q20 — Institutions: inclusive institutions and causality"
    text: |
      Consider two claims.

      **Claim 1:** Inclusive economic institutions are characterized by secure property rights, enforcement of contracts, and broad access to economic opportunities.

      **Claim 2:** A positive correlation across countries between the quality of institutions and GDP per capita **proves** that better institutions cause higher GDP per capita.

      Which is correct?
    options:
      - label: "1"
        text: |
          Only Claim 1 is correct.
        correct: true
        why: |
          Claim 1 describes inclusive institutions. Claim 2 treats a correlation as proof of causality, which it is not.
      - label: "2"
        text: |
          Only Claim 2 is correct.
        correct: false
        why: |
          A correlation is also consistent with reverse causality or a third factor, so it proves nothing.
      - label: "3"
        text: |
          Both claims are correct.
        correct: false
        why: |
          Claim 2 is wrong: correlation does not prove causation.
      - label: "4"
        text: |
          Both claims are incorrect.
        correct: false
        why: |
          Claim 1 is a correct description of inclusive economic institutions.
    solution: |
      **Claim 1 is correct.** Inclusive economic institutions protect property rights, enforce contracts and allow broad participation in economic activity. These features can encourage investment, entrepreneurship and a more efficient allocation of resources.

      **Claim 2 is incorrect.** A positive correlation is consistent with institutions raising income, but it does **not prove** causality: higher income may also improve institutions, and other factors may affect both institutions and GDP per capita.

      > [!success] Answer — **1. Only Claim 1 is correct.**

      > [!tip] 🗣️ In plain English
      > Good institutions (property rights, contracts, open opportunity) do help growth, but "rich countries have good institutions" cannot by itself show which way the arrow points.
    related_terms:
      - institutions
      - total-factor-productivity
    source_doc_page: 23

  - id: q21
    title: "Q21 — The marginal propensity to consume with log utility"
    text: |
      Consumers live for two periods, 0 and 1, and maximize $\ln(c_0) + \beta\ln(c_1)$ with $0<\beta<1$. They have no initial assets and receive incomes $y_0$ and $y_1$, and can borrow or save at the real interest rate $r$.

      Define the **marginal propensity to consume** as the response of current consumption to a surprise change in current income, $\dfrac{\Delta c_0}{\Delta y_0}$. Which statement is correct?
    options:
      - label: "1"
        text: |
          The MPC equals $\beta$; the higher the discount factor, the higher the MPC.
        correct: false
        why: |
          The MPC is not $\beta$; it is $1/(1+\beta)$.
      - label: "2"
        text: |
          The MPC equals $\dfrac{1}{1+\beta}$; the higher the discount factor, the lower the MPC.
        correct: true
        why: |
          From the Euler equation and budget constraint, $c_0 = \frac{1}{1+\beta}\left(y_0+\frac{y_1}{1+r}\right)$; a larger $\beta$ means a larger share is saved.
      - label: "3"
        text: |
          The MPC equals $\dfrac{1}{1-\beta}$; the higher the discount factor, the higher the MPC.
        correct: false
        why: |
          This would exceed 1 for $0<\beta<1$, which cannot be a propensity to consume out of a one-unit income change.
      - label: "4"
        text: |
          The MPC equals $\dfrac{1}{\beta}$; the higher the discount factor, the lower the MPC.
        correct: false
        why: |
          $1/\beta>1$, again impossible for an MPC; and it is not what the algebra gives.
    solution: |
      **Euler equation** with log utility: $\dfrac{1}{c_0} = \beta(1+r)\dfrac{1}{c_1}$, so $c_1 = \beta(1+r)c_0$.

      Substitute into the budget constraint $c_0 + \dfrac{c_1}{1+r} = y_0 + \dfrac{y_1}{1+r}$:

      $$c_0 + \beta c_0 = y_0 + \frac{y_1}{1+r} \;\Longrightarrow\; c_0 = \frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right)$$

      The response to a change in current income $y_0$ is

      $$\text{MPC} = \frac{\Delta c_0}{\Delta y_0} = \frac{1}{1+\beta}$$

      A higher $\beta$ (more patient) lowers the MPC.

      > [!success] Answer — **2. The MPC equals $\dfrac{1}{1+\beta}$; the higher the discount factor, the lower the MPC.**

      > [!tip] 🗣️ In plain English
      > With log utility you spend a fixed fraction, $1/(1+\beta)$, of your lifetime resources today. A more patient person (higher $\beta$) spends a smaller share today and saves more, so the MPC is **lower**.
    related_terms:
      - euler-equation
      - consumption-smoothing
      - intertemporal-choice
    source_doc_page: 23

  - id: q22
    title: "Q22 — (Miluim question) A temporary TFP shock in the labor market"
    text: |
      *This is the "Miluim question" at the end of the exam, answered only by eligible students.*

      The labor market is in equilibrium with standard labor demand and labor supply. The economy experiences a positive **temporary** shock to TFP (TFP increases this period and goes back to normal next period). As a result, in the short run:
    options:
      - label: "1"
        text: |
          Labor increases, the real wage is unchanged.
        correct: false
        why: |
          Labor demand shifts right along an upward-sloping supply curve, so the wage also rises.
      - label: "2"
        text: |
          The real wage increases, labor is unchanged.
        correct: false
        why: |
          Supply does not shift, so the rightward demand shift raises employment as well as the wage.
      - label: "3"
        text: |
          Both labor and the real wage increase.
        correct: true
        why: |
          Higher $A$ raises $MPN$ at every wage (demand right); a temporary shock leaves supply unchanged, so both $N$ and $w$ rise.
      - label: "4"
        text: |
          Both labor and the real wage are unchanged.
        correct: false
        why: |
          TFP enters $MPN$ directly, so demand shifts.
    solution: |
      A higher $A$ raises the marginal product of labor at any wage, so **labor demand shifts right**. Because the shock is **temporary**, lifetime resources barely change and **labor supply does not shift** (as discussed in class).

      Moving along the upward-sloping supply curve to the new intersection: **both labor and the real wage increase**.

      > [!success] Answer — **3. Both labor and the real wage increase.**

      > [!tip] 🗣️ In plain English
      > A one-period productivity boom makes firms want more workers, and since workers' lifetime wealth hardly changes, supply stays put. So more people work, at a higher wage.
    related_terms:
      - labor-demand
      - labor-supply
      - supply-shock
      - total-factor-productivity
    source_doc_page: 24

---

> [!info] About this paper
> The **official Moed A 2026** final for Intermediate Macro: **21 multiple-choice questions**, 5 points each (up to 105 points, capped at 100), plus a 5-point **Miluim question** (Q22) for eligible students. Closed notes, 3 hours, with the [[Macro Equation Sheet|formula sheet]] attached. Every answer below is the **official answer key**; where the key gives partial credit for a near-miss option, it is noted on that option.

