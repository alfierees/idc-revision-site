---
title: "Sample Exam 2026 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro (Sample, 2026)"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/sample-exam-2026.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - development-accounting
  - production-function
  - labor-supply
  - gdp
  - inflation
  - investment
  - fiscal-policy
  - task-based-model
aliases:
  - Sample Exam 2026
  - Macro Sample Exam
  - Intermediate Macro Sample
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — TFP vs. capital in a growth-accounting comparison"
    text: |
      Two economies share the production function $Y = A K^{1/3} N^{2/3}$, population $1$, all employed ($N_1 = N_2 = 1$):

      | Country | TFP ($A$) | Capital ($K$) | Labor ($N$) |
      |---|---|---|---|
      | 1 | 4 | 8,000 | 1 |
      | 2 | 2 | 1,000 | 1 |

      Economist A says capital explains most of the GDP gap (country 1 has $8\times$ the capital). Economist B says TFP differences contribute much more. Who is right?
    options:
      - label: "1"
        text: |
          A is correct; B is wrong.
        correct: false
        why: |
          Capital's contribution runs through $K^{1/3}$, so $8\times$ the capital is only $8^{1/3}=2\times$ the output — not "most" of the gap.
      - label: "2"
        text: |
          B is correct; A is wrong.
        correct: false
        why: |
          TFP enters linearly ($A$), giving a $2\times$ factor — but that's *equal* to capital's $2\times$, not "much more."
      - label: "3"
        text: |
          Both economists are wrong.
        correct: true
        why: |
          TFP contributes a factor of $2$ and capital contributes a factor of $2$ — they matter **equally** here, so both one-sided claims are wrong.
      - label: "4"
        text: |
          Not enough information.
        correct: false
        why: |
          The production function plus the table is all you need — the ratio is fully determined.
    solution: |
      Take the ratio of outputs directly from the production function (the $N$ terms are both $1$ and cancel):

      $$\frac{Y_1}{Y_2} = \frac{A_1 K_1^{1/3}}{A_2 K_2^{1/3}} = \underbrace{\frac{4}{2}}_{\text{TFP} = 2}\times \underbrace{\left(\frac{8000}{1000}\right)^{1/3}}_{\text{capital} = 8^{1/3}=2} = 2 \times 2 = 4$$

      TFP multiplies output by $2$ and capital multiplies it by $2$: **the two forces are exactly equal.** Economist A (capital dominates) and Economist B (TFP dominates) are *both* wrong.

      > [!success] Answer — **3. Both economists are wrong**

      > [!note] Formula sheet — Cobb-Douglas + development accounting
      > This is the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas]] block. The trick the sheet sets up: because $K$ enters as $K^{\alpha}$ with $\alpha = \tfrac13$, an $8\times$ capital gap only buys $8^{1/3}=2\times$ output. Whenever a question compares two economies, take the **ratio** of $Y = AK^{\alpha}N^{1-\alpha}$ and let the shared terms cancel. See [[development-accounting]].
    related_terms:
      - development-accounting
      - cobb-douglas
      - production-function
    source_doc_page: 2

  - id: q2
    title: "Q2 — Immigration and the demand for robots"
    text: |
      Firms produce $Y = A K^{\alpha}[R + N]^{1-\alpha}$ with capital $K$ fixed in the short run, competitive wages, and a positive number of robots $R$. Immigration raises the supply of workers (new workers identical to residents); the price of robots is constant. Short-run effect on the demand for robots?
    options:
      - label: "1"
        text: |
          Demand for robots increases.
        correct: false
        why: |
          That would need $MPR$ to *rise* with $N$, but $R$ and $N$ are substitutes here — more labor lowers $MPR$.
      - label: "2"
        text: |
          Demand for robots does not change.
        correct: false
        why: |
          $MPR$ depends on $R+N$, so a change in $N$ does move it — it isn't neutral.
      - label: "3"
        text: |
          Demand for robots declines.
        correct: true
        why: |
          $R$ and $N$ enter additively as $[R+N]$, so they're substitutes: more workers push $MPR$ down, and with a fixed robot price firms demand fewer robots.
      - label: "4"
        text: |
          Ambiguous — robots and labor are perfect substitutes.
        correct: false
        why: |
          They're substitutes but the sign is *not* ambiguous: $\partial MPR/\partial N < 0$ unambiguously.
    solution: |
      With the robot price fixed, robot demand moves with the **marginal product of robots**. From the production function:

      $$MPR = (1-\alpha)K^{\alpha}[R+N]^{-\alpha}$$

      $$\frac{\partial MPR}{\partial N} = -\alpha(1-\alpha)K^{\alpha}[R+N]^{-\alpha-1} < 0$$

      Immigration shifts labor **supply** right, so equilibrium $N$ rises. A higher $N$ lowers $MPR$, and since the robot price is unchanged, firms cut robot demand.

      > [!success] Answer — **3. The demand for robots declines**

      > [!tip] The intuition to carry into the real exam
      > Anything that enters production **additively** with another factor (here $R+N$) is a **substitute** for it. Add more of one and the marginal product of the other falls. Robots-and-labor questions are just factor-demand questions in disguise — check the sign of the cross-partial. See [[labor-demand]], [[automation]].
    related_terms:
      - labor-demand
      - automation
      - marginal-product-of-labor
    source_doc_page: 3

  - id: q3
    title: "Q3 — Labor income tax with log-power utility"
    text: |
      Workers have $U(C,N) = \ln(C) - \theta\dfrac{N^{1+\psi}}{1+\psi}$ and budget constraint $C = (1-\tau_N)wN$ (labor income tax is the only tax). How does an increase in $\tau_N$ affect optimal labor supply?
    options:
      - label: "1"
        text: |
          A tax increase lowers labor supply.
        correct: false
        why: |
          Here the income and substitution effects exactly offset — labor supply doesn't move with $\tau_N$ at all.
      - label: "2"
        text: |
          A tax increase does not affect labor supply.
        correct: true
        why: |
          Substituting the budget constraint into the FOC makes $\tau_N$ cancel: $\theta N^{\psi} = 1/N$, so $N=(1/\theta)^{1/(1+\psi)}$ is independent of the tax.
      - label: "3"
        text: |
          A tax increase increases labor supply.
        correct: false
        why: |
          With **log** consumption utility the two effects cancel exactly — no net rise.
      - label: "4"
        text: |
          The sign depends on the tax level.
        correct: false
        why: |
          $\tau_N$ drops out of the solution entirely, so there's no range where it matters.
    solution: |
      Use the static optimality condition and the budget constraint. With only a labor tax the FOC is

      $$-U_N = w(1-\tau_N)U_C \quad\Longrightarrow\quad \theta N^{\psi} = w(1-\tau_N)\frac{1}{C}$$

      Substitute the budget constraint $C = w(1-\tau_N)N$:

      $$\theta N^{\psi} = w(1-\tau_N)\frac{1}{w(1-\tau_N)N} = \frac{1}{N} \quad\Longrightarrow\quad N^{1+\psi} = \frac{1}{\theta} \quad\Longrightarrow\quad N = \left(\frac{1}{\theta}\right)^{\frac{1}{1+\psi}}$$

      The tax rate has **cancelled out** — labor supply is unchanged.

      > [!success] Answer — **2. A tax increase does not affect labor supply**

      > [!note] Formula sheet — static first-order condition
      > This is the [[Macro Equation Sheet#Labor supply & consumption optimality|labor-consumption FOC]] $-U_N = \frac{1-\tau_N}{1+\tau_C}wU_C$ (here $\tau_C = 0$). With **log** consumption utility, the income effect of the tax (poorer → work more) exactly cancels the substitution effect (lower net wage → work less). You don't need a Lagrangian — plug utility and the budget constraint straight into the sheet's FOC. See [[labor-supply]], [[income-effect]].
    related_terms:
      - labor-supply
      - labor-income-tax
      - income-effect
    source_doc_page: 3

  - id: q4
    title: "Q4 — Emigration: GDP, GNP and NFP"
    text: |
      Ukrainian workers leave Ukraine (not replaced) and take jobs abroad at the same wage they earned at home. What happens to Ukrainian **GDP**, **GNP** and **Net Factor Payments (NFP)**?
    options:
      - label: "1"
        text: |
          GDP declines, GNP unchanged, NFP increases.
        correct: true
        why: |
          Fewer workers *inside* Ukraine → GDP falls; same income earned by Ukrainians *by nationality* → GNP unchanged; from $GNP = GDP + NFP$, NFP must rise.
      - label: "2"
        text: |
          GDP increases, GNP increases, NFP increases.
        correct: false
        why: |
          GDP measures production *inside* the country, which falls when workers leave — it can't increase.
      - label: "3"
        text: |
          GDP declines, GNP declines, NFP declines.
        correct: false
        why: |
          GNP is nationality-based and the workers earn the same abroad, so GNP is unchanged, not lower.
      - label: "4"
        text: |
          GDP unchanged, GNP declines, NFP declines.
        correct: false
        why: |
          Production inside Ukraine falls, so GDP *does* change (down).
    solution: |
      Anchor on the identity $GNP = GDP + NFP$.

      - **GDP** measures output produced *within* Ukraine. Fewer workers, not replaced ⟹ **GDP falls.**
      - **GNP** measures income of Ukrainians *by nationality*. They earn the same wage abroad ⟹ total national income unchanged ⟹ **GNP unchanged.**
      - Rearranging, $NFP = GNP - GDP$. GNP flat while GDP falls ⟹ **NFP rises** (income now flows in from abroad).

      > [!success] Answer — **1. GDP declines, GNP unchanged, NFP increases**

      > [!note] Formula sheet — the GNP identity
      > Reach for the [[Macro Equation Sheet#National accounts & GDP|GNP identity]] $GNP = GDP + NFP$. The exam loves the GDP-vs-GNP distinction: **GDP = where production happens; GNP = who earns the income.** Emigration separates the two and NFP is the plug that balances the identity. See [[gdp]], [[gnp]], [[national-accounts]].
    related_terms:
      - gdp
      - gnp
      - national-accounts
    source_doc_page: 5

  - id: q5
    title: "Q5 — Unemployment rate from participation data"
    text: |
      Population $=5{,}000{,}000$; employed $=4{,}000{,}000$; not-employed $=1{,}000{,}000$; labor-force participation rate $=85\%$. The unemployment rate is:
    options:
      - label: "1"
        text: |
          20%
        correct: false
        why: |
          This divides the $1{,}000{,}000$ *not-employed* by employment — but "not employed" isn't "unemployed" and the denominator should be the labor force.
      - label: "2"
        text: |
          5.9%
        correct: true
        why: |
          Labor force $=0.85\times5{,}000{,}000 = 4{,}250{,}000$; unemployed $=4{,}250{,}000-4{,}000{,}000=250{,}000$; $u = 250{,}000/4{,}250{,}000 \approx 5.9\%$.
      - label: "3"
        text: |
          15%
        correct: false
        why: |
          Doesn't match the ratio of unemployed to labor force.
      - label: "4"
        text: |
          25%
        correct: false
        why: |
          Uses the wrong denominator — the labor force is $4.25$m, not the number employed.
    solution: |
      The catch: **"not employed" $\neq$ "unemployed."** Unemployed = in the labor force *and* not employed. So first find the labor force.

      $$\text{Labor force} = 0.85 \times 5{,}000{,}000 = 4{,}250{,}000$$

      $$\text{Unemployed} = 4{,}250{,}000 - 4{,}000{,}000 = 250{,}000$$

      $$u = \frac{\text{Unemployed}}{\text{Labor force}} = \frac{250{,}000}{4{,}250{,}000} \approx 0.059 = 5.9\%$$

      > [!success] Answer — **2. 5.9%**

      > [!note] Formula sheet — unemployment rate
      > The [[Macro Equation Sheet#Unemployment & labor-market dynamics|unemployment-rate formula]] $u = \frac{U}{U+E}$. The whole trap is the denominator: the $1{,}000{,}000$ "not employed" includes people *outside* the labor force. Use participation to back out the labor force, subtract employment to isolate the unemployed. See [[labor-force-participation]], [[epop]].
    related_terms:
      - labor-force-participation
      - frictional-unemployment
      - epop
    source_doc_page: 6

  - id: q6
    title: "Q6 — PCE deflator vs. CPI inflation"
    text: |
      A country produces oranges, bread and machines; 100 identical consumers consume only oranges and bread. Base year 2023.

      | Year | Product | Qty | Price |
      |---|---|---|---|
      | 2023 | Oranges | 1,000 | 5 |
      | 2023 | Bread | 2,000 | 10 |
      | 2023 | Machines | 120 | 200 |
      | 2024 | Oranges | 1,100 | 6 |
      | 2024 | Bread | 1,500 | 15 |
      | 2024 | Machines | 125 | 180 |

      Find inflation from the **PCE deflator** and from the **CPI** (2023 basket).
    options:
      - label: "1"
        text: |
          PCE 42%; CPI 42%.
        correct: false
        why: |
          The CPI fixes the 2023 basket, giving 44% — the two measures don't coincide here.
      - label: "2"
        text: |
          PCE 42%; CPI 44%.
        correct: true
        why: |
          Deflator: nominal consumption 29,100 / real 20,500 $=1.42$ → 42%. CPI: basket price 250 → 360 → 44%.
      - label: "3"
        text: |
          PCE 44%; CPI 44%.
        correct: false
        why: |
          The PCE deflator uses *current* quantities and works out to 42%, not 44%.
      - label: "4"
        text: |
          PCE 44%; CPI 42%.
        correct: false
        why: |
          The two are swapped — it's the CPI (fixed basket) that gives the higher 44%.
    solution: |
      **Ignore machines** — they aren't consumed. The PCE deflator only covers the consumption goods.

      **PCE deflator** (2023 base). Nominal = current-price consumption; real = current quantities at 2023 prices.

      | Year | Nominal consumption | Real consumption (2023 prices) | Deflator |
      |---|---|---|---|
      | 2023 | $1000(5)+2000(10)=25{,}000$ | $25{,}000$ | $1.00$ |
      | 2024 | $1100(6)+1500(15)=29{,}100$ | $1100(5)+1500(10)=20{,}500$ | $1.42$ |

      $$\pi^{PCE} = \frac{1.42 - 1}{1} = 0.42 = 42\%$$

      **CPI** (fixed 2023 basket). With 100 consumers the representative basket is $10$ oranges $+ 20$ bread. Basket price: $2023 = 10(5)+20(10) = 250$; $2024 = 10(6)+20(15) = 360$.

      $$\pi^{CPI} = \frac{360 - 250}{250} = 0.44 = 44\%$$

      They differ because the **deflator lets quantities change** (Paasche-style) while the **CPI fixes the base-year basket** (Laspeyres).

      > [!success] Answer — **2. PCE deflator 42%, CPI 44%**

      > [!note] Formula sheet — deflator and inflation
      > Uses the [[Macro Equation Sheet#National accounts & GDP|GDP deflator]] $P = \text{nominal}/\text{real}$ and [[Macro Equation Sheet#Prices, inflation & exchange rates|inflation]] $\pi = \frac{P_{t+1}-P_t}{P_t}$. Two rules that win this question: **(1)** strip out non-consumption goods for both consumer measures; **(2)** deflator = changing basket, CPI = fixed basket — so in an inflation with shifting quantities the two generally disagree. See [[gdp-deflator]], [[cpi]], [[inflation]].
    related_terms:
      - gdp-deflator
      - cpi
      - inflation
    source_doc_page: 7

  - id: q7
    title: "Q7 — Backing out depreciation and investment from the investment rule"
    text: |
      Data: at $t$, $(N,K,Y)=(1000,100,100)$; at $t{+}1$, $(1050,105,120)$. Production $Y=A_tK_t^{0.3}N_t^{0.7}$; real rate $r=2\%$; capital tax $\tau_K=10\%$; price of capital constant at $10$. Capital at $t{+}1$ was chosen optimally (firms knew $A_{t+1}$). Find depreciation $\delta$ and investment $I_t$.
    options:
      - label: "1"
        text: |
          $\delta \approx 1\%$, $I \approx 6$ units.
        correct: true
        why: |
          Setting future $MPK = 0.30\cdot\frac{120}{105}\approx0.343$ equal to the user cost gives $\delta\approx0.011$; then $I = 105 - (1-\delta)100 \approx 6.1$.
      - label: "2"
        text: |
          $\delta \approx 10\%$, $I \approx 15$ units.
        correct: false
        why: |
          $\delta=10\%$ contradicts the user-cost equation, which pins $\delta\approx1\%$.
      - label: "3"
        text: |
          $\delta \approx 1\%$, $I \approx 5$ units.
        correct: false
        why: |
          $\delta$ is right but $I = K_{t+1}-(1-\delta)K_t = 105-98.9\approx6.1$, not 5.
      - label: "4"
        text: |
          $\delta \approx 10\%$, $I \approx 5$ units.
        correct: false
        why: |
          Both pieces are off — the optimality condition gives $\delta\approx1\%$ and $I\approx6$.
    solution: |
      **Step 1 — future MPK.** With Cobb-Douglas, $MPK = \alpha\frac{Y}{K}$, so

      $$MPK^{f} = 0.3\times\frac{120}{105} \approx 0.343$$

      **Step 2 — set MPK = user cost** and solve for $\delta$ (the only unknown):

      $$0.343 = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K} = \frac{10(1.02) - (1-\delta)10}{0.9} = \frac{0.2 + 10\delta}{0.9}$$

      $$\delta = \frac{0.9(0.343) - 0.2}{10} \approx 0.011 \approx 1\%$$

      **Step 3 — investment** from capital accumulation:

      $$I_t = K_{t+1} - (1-\delta)K_t = 105 - (0.989)(100) \approx 6.1$$

      > [!success] Answer — **1. $\delta \approx 1\%$, investment $\approx 6$ units**

      > [!warning] Why you can't shortcut with $I = K_{t+1}-K_t$
      > That naïve gap ($105-100=5$) ignores depreciation and matches a *wrong* option. You **must** find $\delta$ from the [[Macro Equation Sheet#Investment & the user cost of capital|user-cost condition]] first, then feed it into the [[Macro Equation Sheet#Investment & the user cost of capital|capital-accumulation equation]] $K_{t+1}=(1-\delta)K_t+I_t$. See [[marginal-product-of-capital]], [[depreciation]], [[capital-accumulation-equation]].
    related_terms:
      - marginal-product-of-capital
      - depreciation
      - capital-accumulation-equation
    source_doc_page: 8

  - id: q8
    title: "Q8 — Efficient labor allocation across firms"
    text: |
      Two firms, $Y_i = A_i K_i^{\alpha}N_i^{1-\alpha}$. Labor is fully mobile; capital is fixed at each firm with $K_1 > K_2$; TFP is equal, $A_1 = A_2$. In the efficient allocation:
    options:
      - label: "1"
        text: |
          Firm 1 employs more labor; $K/N$ is equalized across firms.
        correct: true
        why: |
          Efficiency equates $MPN$ across firms; with equal $A$ and $\alpha$ this forces $K_1/N_1 = K_2/N_2$, so more capital ⟹ more labor.
      - label: "2"
        text: |
          Not enough information.
        correct: false
        why: |
          Equal $A$ and $\alpha$ plus $K_1>K_2$ fully determine the ranking $N_1 > N_2$.
      - label: "3"
        text: |
          Same labor at both firms because TFPs are equal.
        correct: false
        why: |
          Equal TFP doesn't equalize labor — the firm with more capital needs more labor to keep $K/N$ equal.
      - label: "4"
        text: |
          Firm 1 employs more labor; its $K/N$ should be *higher*.
        correct: false
        why: |
          Right conclusion (more labor) but wrong reason — efficiency **equalizes** $K/N$, it doesn't raise firm 1's.
    solution: |
      Labor is the only mobile factor, so efficiency equates the marginal product of labor across firms:

      $$MPN_1 = (1-\alpha)A_1 K_1^{\alpha}N_1^{-\alpha} = (1-\alpha)A_2 K_2^{\alpha}N_2^{-\alpha} = MPN_2$$

      With $A_1 = A_2$ and equal $\alpha$, cancel to get

      $$\left(\frac{K_1}{N_1}\right)^{\alpha} = \left(\frac{K_2}{N_2}\right)^{\alpha} \quad\Longrightarrow\quad \frac{K_1}{N_1} = \frac{K_2}{N_2}$$

      The capital-labor ratio is **equalized**. Since $K_1 > K_2$, it must be that $N_1 > N_2$.

      > [!success] Answer — **1. Firm 1 employs more labor; $K/N$ equalized**

      > [!tip] The efficiency principle
      > Efficient allocation of a mobile factor ⟹ **equalize its marginal product** everywhere it can go. With Cobb-Douglas and common $A,\alpha$ that collapses to equalizing $K/N$. See [[Macro Equation Sheet#Production & factor demands|MPN]], [[marginal-product-of-labor]], [[partial-vs-general-equilibrium]].
    related_terms:
      - marginal-product-of-labor
      - cobb-douglas
      - production-function
    source_doc_page: 10

  - id: q9
    title: "Q9 — Liquidity constraints and the MPC across the income distribution"
    text: |
      The empirical findings discussed in class on liquidity constraints across the income distribution indicate that:
    options:
      - label: "1"
        text: |
          Higher-income households are more constrained, so they have a higher MPC.
        correct: false
        why: |
          It's *lower*-income households that are typically constrained; the income–constraint relationship is reversed here.
      - label: "2"
        text: |
          Lower-income households are more likely constrained (plus some "wealthy hand-to-mouth"), so the MPC falls with income.
        correct: true
        why: |
          Constrained households spend more of extra income; constraints concentrate at low incomes (with illiquid-wealthy exceptions), so MPC declines with income.
      - label: "3"
        text: |
          Lower-income households are constrained, but constraints don't affect the MPC.
        correct: false
        why: |
          Constraints are precisely *why* the MPC is higher for these households — they can't smooth.
      - label: "4"
        text: |
          Constraints are unrelated to income because anyone can borrow against future income.
        correct: false
        why: |
          The entire empirical point is that many households *cannot* freely borrow.
    solution: |
      Lower-income households tend to hold little liquid wealth and can't borrow to smooth consumption, so they're more likely **liquidity constrained**. Some higher-income "**wealthy hand-to-mouth**" households are also constrained because their wealth is illiquid. Constrained households spend a larger share of any extra income, so the **marginal propensity to consume (MPC) is higher at low incomes and declines with income**.

      > [!success] Answer — **2. Lower incomes more constrained; MPC declines with income**

      > [!tip] Empirical/"discussed-in-class" questions
      > No formula here — these test the stylized facts. Key terms: **liquidity-constrained**, **wealthy hand-to-mouth**, **MPC decreasing in income**. See [[borrowing-constraints]], [[consumption-smoothing]], [[heterogeneity]].
    related_terms:
      - borrowing-constraints
      - consumption-smoothing
      - heterogeneity
    source_doc_page: 11

  - id: q10
    title: "Q10 — PPP-adjusted GDP growth"
    text: |
      You measure Israel's PPP-adjusted GDP in current US dollars between $t$ and $t{+}1$. Assume: in Israel, inflation $=$ nominal-GDP growth; in the US, inflation was positive; GDP reflects the same basket in both countries. PPP-adjusted GDP in Israel:
    options:
      - label: "1"
        text: |
          Increased.
        correct: true
        why: |
          Israeli real GDP is flat (nominal growth = inflation), while $P_{US}$ rose, and $GDP^{PPP}\propto P_{US}$ — so it increases.
      - label: "2"
        text: |
          Decreased.
        correct: false
        why: |
          A higher $P_{US}$ raises PPP-adjusted GDP, it can't lower it.
      - label: "3"
        text: |
          Unchanged.
        correct: false
        why: |
          The US price level rose, and PPP-adjusted GDP scales with $P_{US}$, so it moves.
      - label: "4"
        text: |
          Can't be computed without US nominal-GDP growth.
        correct: false
        why: |
          You only need the *direction* of $P_{US}$ (positive US inflation), which is given.
    solution: |
      From the sheet, PPP-adjusted GDP is

      $$GDP_i = \frac{GDP_i^{local}}{P_i}\times P_{US}$$

      - In Israel, nominal-GDP growth $=$ inflation ⟹ $GDP^{local}_i$ and $P_i$ grow at the **same rate** ⟹ the fraction $\tfrac{GDP^{local}_i}{P_i}$ (real GDP) is **constant**.
      - US inflation positive ⟹ $P_{US}$ **rose**.

      A constant real term multiplied by a rising $P_{US}$ ⟹ PPP-adjusted GDP **increased**.

      > [!success] Answer — **1. Increased**

      > [!note] Formula sheet — PPP conversion
      > This is the [[Macro Equation Sheet#Prices, inflation & exchange rates|PPP conversion]] $GDP^{PPP} = \frac{\text{GDP in local currency}}{e^{pp}}$ with $e^{pp} = P_i / P_{US}$, i.e. $GDP^{PPP} = \frac{GDP^{local}}{P_i}P_{US}$. Split it into (real local GDP) $\times$ ($US$ price level) and track each piece. See [[purchasing-power-parity]], [[real-vs-nominal]].
    related_terms:
      - purchasing-power-parity
      - real-vs-nominal
      - exchange-rates
    source_doc_page: 12

  - id: q11
    title: "Q11 — Two-period consumption with CRRA utility and the role of β"
    text: |
      Consumers live two periods with income $y_0, y_1 > 0$, no initial assets, utility $u(c_t) = \dfrac{c_t^{1-1/\sigma}}{1-1/\sigma}$ each period ($\sigma > 1$), discount factor $0<\beta<1$, real rate $r>0$. Which is correct?
    options:
      - label: "1"
        text: |
          $c_0 = \frac{1}{1+\beta^{\sigma}(1+r)^{\sigma-1}}\left[y_0 + \frac{y_1}{1+r}\right]$; higher $\beta$ → consumption responds **more** to a rise in $y_0$.
        correct: false
        why: |
          The formula is right but the comparative static is backwards — higher $\beta$ (more patience) means $c_0$ responds *less*.
      - label: "2"
        text: |
          $c_0 = \frac{1}{1+\beta^{\sigma}(1+r)^{\sigma-1}}\left[y_0 + \frac{y_1}{1+r}\right]$; higher $\beta$ → consumption responds **less** to a rise in $y_0$.
        correct: true
        why: |
          Correct demand function *and* correct sign: $\beta$ sits in the denominator, so $\partial c_0/\partial y_0$ falls as $\beta$ rises.
      - label: "3"
        text: |
          $c_0 = \frac{1}{1+\beta^{\sigma}(1+r)^{\sigma}}\left[\cdots\right]$; responds **more**.
        correct: false
        why: |
          The exponent on $(1+r)$ should be $\sigma-1$, not $\sigma$ — and the sign is wrong too.
      - label: "4"
        text: |
          $c_0 = \frac{1}{1+\beta^{\sigma}(1+r)^{\sigma}}\left[\cdots\right]$; responds **less**.
        correct: false
        why: |
          Right intuition on $\beta$, but the exponent on $(1+r)$ is wrong — it's $\sigma-1$.
    solution: |
      **Euler equation** with this CRRA utility ($u'(c)=c^{-1/\sigma}$):

      $$c_0^{-1/\sigma} = \beta(1+r)c_1^{-1/\sigma} \quad\Longrightarrow\quad c_1 = \beta^{\sigma}(1+r)^{\sigma}c_0$$

      **Lifetime budget constraint** $c_0 + \frac{c_1}{1+r} = y_0 + \frac{y_1}{1+r}$. Substitute:

      $$c_0\left[1 + \beta^{\sigma}(1+r)^{\sigma-1}\right] = y_0 + \frac{y_1}{1+r} \quad\Longrightarrow\quad c_0 = \frac{1}{1+\beta^{\sigma}(1+r)^{\sigma-1}}\left[y_0 + \frac{y_1}{1+r}\right]$$

      The marginal response $\dfrac{\partial c_0}{\partial y_0} = \dfrac{1}{1+\beta^{\sigma}(1+r)^{\sigma-1}}$ **decreases in $\beta$**: a more patient consumer saves more of a windfall, so current consumption reacts less.

      > [!success] Answer — **2** (correct formula, responds *less* as $\beta$ rises)

      > [!note] Formula sheet — Euler + lifetime budget
      > The two tools are [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|the Euler equation and the lifetime budget constraint]]. Standard recipe: Euler links $c_1$ to $c_0$, sub into the budget constraint, solve for $c_0$. Then read the comparative static off the denominator. Higher $\beta$ = more patience = smaller MPC out of current income. See [[euler-equation]], [[intertemporal-choice]], [[consumption-smoothing]].
    related_terms:
      - euler-equation
      - intertemporal-choice
      - present-value
    source_doc_page: 13

  - id: q12
    title: "Q12 — Forecasting the debt-to-GDP ratio"
    text: |
      Forecast next year's change in debt-to-GDP. Current ratio $b = 100\%$; planned primary deficit $d = 4\%$ of GDP; nominal rate $i = 5\%$; expected inflation $\pi^e = 3\%$. Also: 20 years ago real GDP $=10{,}000$, now $=18{,}000$, and future growth equals the 20-year average. Next year's ratio is about:
    options:
      - label: "1"
        text: |
          107%
        correct: false
        why: |
          Overstates the interest–growth term; the correct $\Delta b \approx +3$ points, not $+7$.
      - label: "2"
        text: |
          106%
        correct: false
        why: |
          Too high — you'd get this by using the nominal rate instead of the real rate $r = i-\pi^e = 2\%$.
      - label: "3"
        text: |
          104%
        correct: false
        why: |
          Close, but the debt-dynamics formula gives $\Delta b\approx 3$ points → $103\%$, not $104\%$.
      - label: "4"
        text: |
          103%
        correct: true
        why: |
          $r = 2\%$, $g = 1.8^{1/20}-1 \approx 2.98\%$; $\Delta b = 0.04 + \frac{0.02-0.0298}{1.0298}(1)\approx 0.03$ → $103\%$.
    solution: |
      Use the debt-dynamics equation $\Delta b = d + \frac{r-g}{1+g}b$. You have $b=1$, $d=0.04$, but need $r$ and $g$.

      **Real rate** (Fisher): $r = i - \pi^e = 0.05 - 0.03 = 0.02$.

      **Average real growth** over 20 years: $18{,}000 = 10{,}000(1+g)^{20}$, so

      $$g = 1.8^{1/20} - 1 \approx 0.0298$$

      Substitute:

      $$\Delta b = 0.04 + \frac{0.02 - 0.0298}{1 + 0.0298}\times 1 \approx 0.04 - 0.0095 \approx 0.03$$

      The ratio rises about **3 points**, from $100\%$ to $\approx 103\%$.

      > [!success] Answer — **4. Approximately 103%**

      > [!note] Formula sheet — debt dynamics + Fisher
      > Two sheet entries combine: [[Macro Equation Sheet#Fiscal policy & public debt|debt dynamics]] $\Delta b = d + \frac{r-g}{1+g}b$ and the [[Macro Equation Sheet#Prices, inflation & exchange rates|Fisher equation]] $r = i - \pi^e$. The data never hands you $r$ or $g$ directly — that's the exam's game: get $r$ from Fisher, get $g$ from the 20-year compound-growth relation, *then* plug in. See [[public-debt-dynamics]], [[primary-deficit]], [[fisher-equation]].
    related_terms:
      - public-debt-dynamics
      - primary-deficit
      - fisher-equation
    source_doc_page: 14

  - id: q13
    title: "Q13 — GDP per capita vs. welfare"
    text: |
      The empirical findings discussed in class on GDP per capita vs. broader welfare / standard-of-living measures indicate that:
    options:
      - label: "1"
        text: |
          GDP per capita is only weakly related to welfare, so it's not a useful proxy.
        correct: false
        why: |
          The correlation is actually **strong** and positive — GDP per capita *is* a useful proxy.
      - label: "2"
        text: |
          Strong positive correlation, but substantial deviations from one-to-one (welfare also reflects consumption, leisure, life expectancy, inequality).
        correct: true
        why: |
          Matches the stylized fact: strongly correlated yet not one-to-one, because welfare has extra dimensions.
      - label: "3"
        text: |
          After PPP adjustment, GDP per capita gives almost exactly the same country ranking as welfare.
        correct: false
        why: |
          "Almost exactly the same ranking" overstates it — meaningful deviations remain.
      - label: "4"
        text: |
          GDP per capita overstates welfare in rich countries and understates it in poor ones.
        correct: false
        why: |
          There's no such systematic direction of bias in the findings.
    solution: |
      Broader welfare measures are **strongly positively correlated** with GDP per capita, so GDP is a useful proxy for living standards. But the relationship is **not one-to-one**: welfare also reflects consumption, leisure, life expectancy and inequality, so countries with similar GDP per capita can have substantially different welfare.

      > [!success] Answer — **2. Strong correlation, but substantial deviations from one-to-one**

      > [!tip] Reading these options
      > The right answer to a "welfare vs. GDP" question is almost always the **nuanced** one — strong correlation *and* important caveats. Extreme claims ("useless proxy", "exactly the same ranking", "systematic bias") are the distractors. See [[national-accounts]], [[inequality-measures]].
    related_terms:
      - national-accounts
      - inequality-measures
      - gdp
    source_doc_page: 16

  - id: q14
    title: "Q14 — Permanent TFP shock: investment vs. labor demand"
    text: |
      Production $Y_t = A_t K_t^{\alpha} + N_t^{1-\alpha}$ (note the **additive** form). Goods and labor markets in equilibrium. $A$ rises permanently. In the short run:
    options:
      - label: "1"
        text: |
          Investment demand shifts right; labor demand shifts right.
        correct: false
        why: |
          In this additive production function $MPN = (1-\alpha)N^{-\alpha}$ has **no $A$** in it — labor demand doesn't move.
      - label: "2"
        text: |
          Investment demand shifts right; labor demand unchanged.
        correct: true
        why: |
          Higher permanent $A$ raises future $MPK$ (investment up), but $MPN$ here is independent of $A$, so labor demand is flat.
      - label: "3"
        text: |
          Investment demand unchanged; labor demand unchanged.
        correct: false
        why: |
          Future $MPK = \alpha A K^{\alpha-1}$ *does* rise with $A$, so investment demand moves.
      - label: "4"
        text: |
          Investment demand unchanged; labor demand shifts right.
        correct: false
        why: |
          Exactly backwards for this functional form — it's investment that responds, not labor demand.
    solution: |
      Read the marginal products off this **additively separable** production function.

      - **Investment:** future $MPK = \alpha A_t K_t^{\alpha-1}$. A permanent rise in $A$ raises future MPK; with the user cost unchanged, optimal future capital rises ⟹ **investment demand shifts right.**
      - **Labor demand:** $MPN = (1-\alpha)N_t^{-\alpha}$ — **$A$ does not appear.** So higher $A$ leaves the labor-demand curve **unchanged.**

      > [!success] Answer — **2. Investment demand right; labor demand unchanged**

      > [!warning] Watch the functional form
      > This is the classic trap: with the usual **multiplicative** Cobb-Douglas, $A$ enters *both* $MPK$ and $MPN$. Here the production function is **additive** ($AK^{\alpha} + N^{1-\alpha}$), so $A$ multiplies only the capital term and drops out of $MPN$. Always differentiate the *given* function — don't autopilot the standard result. See [[Macro Equation Sheet#Investment & the user cost of capital|investment rule]], [[labor-demand]].
    related_terms:
      - marginal-product-of-capital
      - labor-demand
      - production-function
    source_doc_page: 16

  - id: q15
    title: "Q15 — Slope of the labor-supply curve with CRRA utility"
    text: |
      Workers have $U(C,N) = \dfrac{C^{1-\sigma}}{1-\sigma} - \theta\dfrac{N^{1+\psi}}{1+\psi}$ ($\sigma>0,\ \sigma\neq1,\ \theta,\psi>0$) with budget $C = wN$. Which is correct?
    options:
      - label: "1"
        text: |
          If $\sigma>1$: income effect dominates, labor supply is **downward** sloping.
        correct: true
        why: |
          The supply function $N = (1/\theta)^{1/(\psi+\sigma)}w^{(1-\sigma)/(\psi+\sigma)}$ has a *negative* exponent on $w$ when $\sigma>1$.
      - label: "2"
        text: |
          If $\sigma>1$: substitution effect dominates, labor supply is upward sloping.
        correct: false
        why: |
          For $\sigma>1$ the exponent on $w$ is negative, so supply slopes **down** — income effect dominates.
      - label: "3"
        text: |
          If $\sigma<1$: income effect dominates, labor supply is upward sloping.
        correct: false
        why: |
          For $\sigma<1$ the exponent is positive (upward-sloping), but that's the **substitution** effect dominating, not income.
      - label: "4"
        text: |
          If $\sigma<1$: substitution effect dominates, labor supply is downward sloping.
        correct: false
        why: |
          $\sigma<1$ gives a positive exponent → **upward** sloping, not downward.
    solution: |
      Derive the supply function. Optimality $-U_N = wU_C$ gives $\theta N^{\psi} = wC^{-\sigma}$. Substitute $C = wN$:

      $$\theta N^{\psi} = w(wN)^{-\sigma} = w^{1-\sigma}N^{-\sigma} \quad\Longrightarrow\quad N = \left(\frac{1}{\theta}\right)^{\frac{1}{\psi+\sigma}} w^{\frac{1-\sigma}{\psi+\sigma}}$$

      The slope is governed by the exponent $\frac{1-\sigma}{\psi+\sigma}$ on $w$:

      - $\sigma > 1$ ⟹ exponent **negative** ⟹ $N$ falls as $w$ rises ⟹ **downward-sloping** supply ⟹ **income effect dominates.**
      - $\sigma < 1$ ⟹ exponent positive ⟹ upward-sloping ⟹ substitution effect dominates.

      > [!success] Answer — **1. $\sigma>1$: income effect dominates, downward-sloping supply**

      > [!note] Formula sheet — static FOC again
      > Same [[Macro Equation Sheet#Labor supply & consumption optimality|static first-order condition]] $-U_N = wU_C$ machinery as Q3, but now the **curvature $\sigma$** decides the slope. The sign of $(1-\sigma)$ is the whole answer: it flips whether income or substitution effect wins. See [[labor-supply]], [[income-effect]].
    related_terms:
      - labor-supply
      - income-effect
      - real-wage
    source_doc_page: 17

  - id: q16
    title: "Q16 — Consumption tax financing a TFP-raising project"
    text: |
      Labor market in equilibrium; utility has **no income/wealth effect** on labor supply. Government raises the consumption tax $\tau_c$ and uses the proceeds on a productive project that raises TFP immediately and permanently. In the short run:
    options:
      - label: "1"
        text: |
          Demand right, supply right; labor up, wage ambiguous.
        correct: false
        why: |
          A higher $\tau_c$ distorts labor supply **leftward** (no income effect to offset it), not rightward.
      - label: "2"
        text: |
          Demand unchanged, supply left; labor down, wage up.
        correct: false
        why: |
          Higher TFP *does* shift labor **demand** right — it isn't unchanged.
      - label: "3"
        text: |
          Demand right, supply left; labor ambiguous, wage up.
        correct: true
        why: |
          TFP↑ shifts demand right; $\tau_c$↑ shifts supply left; wage rises unambiguously, but the labor quantity is ambiguous.
      - label: "4"
        text: |
          Demand unchanged, supply right; labor up, wage down.
        correct: false
        why: |
          Both shifts are wrong-signed: demand rises (TFP) and supply falls (tax distortion).
    solution: |
      Two shifts, worked separately:

      - **Labor demand:** higher TFP raises $MPN$ at every wage ⟹ demand shifts **right.**
      - **Labor supply:** a higher consumption tax is a **distortion** that lowers labor supply. Normally there's an offsetting income effect, but here it's assumed away ⟹ supply shifts **left.**

      Demand right + supply left ⟹ the **real wage rises unambiguously**, but the effect on the **quantity of labor is ambiguous** (the two shifts push it in opposite directions).

      > [!success] Answer — **3. Demand right, supply left; wage up, labor ambiguous**

      > [!tip] Two curves, opposite directions → price certain, quantity ambiguous
      > When demand and supply shift in **opposite** directions, the price effect (here the wage) is pinned down but the quantity effect isn't. The "no income effect" assumption is doing real work — it strips the offset and leaves only the tax distortion on supply. See [[consumption-tax]], [[labor-supply]], [[labor-demand]].
    related_terms:
      - consumption-tax
      - labor-supply
      - labor-demand
    source_doc_page: 18

  - id: q17
    title: "Q17 — Task-based model: productivity vs. displacement effects"
    text: |
      Task-based production $y(j) = \psi_N(j)N(j) + \psi_K(j)K(j)$; one unit of each task must be produced. $w=6$, $r=12$. Initial productivities:

      | Task | $\psi_K(j)$ | $\psi_N(j)$ |
      |---|---|---|
      | 1 | 6 | 2 |
      | 2 | 4 | 3 |
      | 3 | 3 | 6 |

      Capital productivity in task 2 rises from $\psi_K(2)=4$ to $8$. Hold prices fixed first; supply curves upward-sloping; task allocation fixed after prices adjust. Which is correct?
    options:
      - label: "1"
        text: |
          Task 2 stays with labor; only a productivity effect; demands and prices unchanged.
        correct: false
        why: |
          At fixed prices capital becomes cheaper for task 2 ($12/8=1.5 < 6/3=2$), so task 2 **switches** to capital.
      - label: "2"
        text: |
          Task 2 switches to capital; both productivity **and** displacement effects; labor demand falls, capital demand rises → wage falls, rental rises.
        correct: true
        why: |
          Cost via capital drops from 3 to 1.5 (< labor's 2), so task 2 reassigns to capital: a productivity effect (lower cost) plus a displacement effect (labor→capital), moving wage down and rental up.
      - label: "3"
        text: |
          Task 2 switches to capital; a reinstatement effect; labor demand and wage rise.
        correct: false
        why: |
          Moving a task *from* labor *to* capital displaces labor — it's not reinstatement, and the wage falls.
      - label: "4"
        text: |
          Task 2 switches to capital; displacement but no productivity effect; wage falls, rental unchanged.
        correct: false
        why: |
          There *is* a productivity effect (task 2's minimum cost drops from 3 to 1.5), and higher capital demand raises the rental.
    solution: |
      Compare the **cost of producing task 2** each way (cost $=$ factor price $\div$ productivity).

      - **Before:** labor cost $= \frac{w}{\psi_N(2)} = \frac{6}{3} = 2$; capital cost $= \frac{r}{\psi_K(2)} = \frac{12}{4} = 3$. Labor is cheaper ⟹ task 2 done by **labor.**
      - **After** (prices fixed): capital cost $= \frac{12}{8} = 1.5 < 2$. Capital is now cheaper ⟹ task 2 **switches to capital.**

      Two effects: the fall in task 2's minimum cost ($3\to1.5$) is a **productivity effect**; the reassignment labor→capital is a **displacement effect**. So labor demand falls and capital demand rises. With upward-sloping factor supplies, the **wage falls and the rental price of capital rises.**

      > [!success] Answer — **2. Switches to capital; productivity + displacement; wage↓, rental↑**

      > [!tip] Task-based model = compare unit costs
      > A task goes to whichever factor is **cheaper per unit of the task**: $\frac{w}{\psi_N}$ vs. $\frac{r}{\psi_K}$. Automation news raises $\psi_K$, which can flip a task to capital — a **displacement** effect on labor — while also lowering its cost — a **productivity** effect. See [[automation]], [[routine-biased-technological-change]], [[labor-demand]].
    related_terms:
      - automation
      - routine-biased-technological-change
      - labor-demand
    source_doc_page: 19

  - id: q18
    title: "Q18 — Interest-rate rise with log utility and only initial assets"
    text: |
      A consumer lives two periods, has initial assets $a>0$, no income ($y_0=y_1=0$), can borrow/save at $r>0$, discount factor $0<\beta<1$, and maximizes $\ln c_0 + \beta\ln c_1$. After choosing optimally, $r$ **increases**. As a result:
    options:
      - label: "1"
        text: |
          $c_0$ decreases and $c_1$ increases.
        correct: false
        why: |
          With log utility $c_0 = a/(1+\beta)$ is independent of $r$ — $c_0$ doesn't fall.
      - label: "2"
        text: |
          Both unchanged.
        correct: false
        why: |
          $c_1 = \beta(1+r)\frac{a}{1+\beta}$ rises with $r$, so it's not unchanged.
      - label: "3"
        text: |
          $c_0$ decreases and $c_1$ unchanged.
        correct: false
        why: |
          $c_0$ is flat (not falling) and $c_1$ rises (not flat) — both parts wrong.
      - label: "4"
        text: |
          $c_0$ unchanged and $c_1$ increases.
        correct: true
        why: |
          Log utility: income and substitution effects on $c_0$ cancel, so $c_0 = a/(1+\beta)$ is $r$-independent; $c_1 = \beta(1+r)c_0$ rises with $r$.
    solution: |
      **Euler:** $\frac{1}{c_0} = \beta(1+r)\frac{1}{c_1} \Rightarrow c_1 = \beta(1+r)c_0$. **Budget** (only initial assets): $c_0 + \frac{c_1}{1+r} = a$. Substitute:

      $$c_0 + \frac{\beta(1+r)c_0}{1+r} = a \quad\Longrightarrow\quad c_0(1+\beta) = a \quad\Longrightarrow\quad c_0 = \frac{a}{1+\beta}$$

      $$c_1 = \beta(1+r)\frac{a}{1+\beta}$$

      So **$c_0$ is independent of $r$** (log utility: income and substitution effects exactly offset), while **$c_1$ rises with $r$** (saving earns a higher return).

      > [!success] Answer — **4. $c_0$ unchanged, $c_1$ increases**

      > [!note] Formula sheet — Euler + budget, log case
      > [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|Euler + lifetime budget]] with $u=\ln c$. The signature of **log utility** is that current consumption is a fixed fraction of wealth, immune to $r$ — the cleanest case where income and substitution effects cancel. See [[euler-equation]], [[consumption-smoothing]], [[real-interest-rate]].
    related_terms:
      - euler-equation
      - consumption-smoothing
      - real-interest-rate
    source_doc_page: 20

  - id: q19
    title: "Q19 — Two claims: deflator/nominal-GDP and labor's share"
    text: |
      **Claim 1:** If the GDP deflator rises between two periods, nominal GDP grows faster than real GDP. **Claim 2:** If firms are competitive with $Y = AK^{\alpha}N^{1-\alpha}$ and hire labor optimally, labor's share of income is $(1-\alpha)$. Which is correct?
    options:
      - label: "1"
        text: |
          Only Claim 1.
        correct: false
        why: |
          Claim 2 is also true — competitive Cobb-Douglas gives labor share exactly $(1-\alpha)$.
      - label: "2"
        text: |
          Only Claim 2.
        correct: false
        why: |
          Claim 1 is true as well: nominal $=$ deflator $\times$ real, so a rising deflator means nominal outpaces real.
      - label: "3"
        text: |
          Both claims are correct.
        correct: true
        why: |
          Nominal $= P\times$ real (Claim 1 holds), and $\frac{wN}{Y} = \frac{(1-\alpha)AK^{\alpha}N^{-\alpha}\cdot N}{Y} = 1-\alpha$ (Claim 2 holds).
      - label: "4"
        text: |
          Both claims are incorrect.
        correct: false
        why: |
          Both are standard results and both are true.
    solution: |
      **Claim 1 ✓.** Nominal GDP $= P \times$ real GDP (with $P$ the deflator). If the deflator rises, nominal GDP grows faster than real GDP by construction.

      **Claim 2 ✓.** Under competition the real wage equals $MPN = (1-\alpha)AK^{\alpha}N^{-\alpha}$. Then

      $$\frac{wN}{Y} = \frac{(1-\alpha)AK^{\alpha}N^{-\alpha}\cdot N}{AK^{\alpha}N^{1-\alpha}} = 1-\alpha$$

      Both claims hold.

      > [!success] Answer — **3. Both claims are correct**

      > [!note] Formula sheet — two identities at once
      > Claim 1 is the [[Macro Equation Sheet#National accounts & GDP|nominal-GDP identity]] $\text{Nominal} = P\times Y$; Claim 2 is [[Macro Equation Sheet#Production & factor demands|labor's share]] $wN/Y$ evaluated at $w = MPN$. The Cobb-Douglas fact that **labor's share $= 1-\alpha$ exactly** (and capital's $= \alpha$) is one of the most reused results in the course. See [[gdp-deflator]], [[labor-share]].
    related_terms:
      - gdp-deflator
      - labor-share
      - real-vs-nominal
    source_doc_page: 21

  - id: q20
    title: "Q20 — Permanent capital-tax rise, proceeds rebated"
    text: |
      Standard consumption/labor/production/investment models; **no income/wealth effect** on labor supply. Government permanently raises the capital tax $\tau_K$ and **rebates** the proceeds lump-sum (net household income unchanged each period). "Short run" = before capital adjusts. As a result, in the short run:
    options:
      - label: "1"
        text: |
          Investment, output and consumption all decrease.
        correct: false
        why: |
          Output is unchanged in the short run ($A,K,N$ fixed), so not everything falls.
      - label: "2"
        text: |
          Investment decreases, output unchanged, consumption increases.
        correct: true
        why: |
          Higher $\tau_K$ raises the user cost → investment falls; $A,K,N$ fixed → output flat; with $Y=C+I+G$ and $I\downarrow$, $G$ flat, $C$ must rise.
      - label: "3"
        text: |
          Investment increases, output unchanged, consumption decreases.
        correct: false
        why: |
          A higher capital tax raises the user cost, which *lowers* investment, not raises it.
      - label: "4"
        text: |
          All unchanged.
        correct: false
        why: |
          The user cost rises, so investment must fall — the economy doesn't stand still.
    solution: |
      **Investment.** A higher $\tau_K$ raises the **user cost of capital**, so optimal future capital (current investment) falls — the investment curve shifts **left**. (Saving could move if income changed, but the rebate keeps household income fixed, so that channel is shut.)

      **Output.** In the short run $A$, $K$ and $N$ are all fixed ($N$ because there's no income effect to shift labor supply), so **output is unchanged.**

      **Consumption.** From the resource constraint $Y = C + I + G$ with $Y$ fixed, $I\downarrow$ and $G$ unchanged ⟹ **consumption rises.**

      > [!success] Answer — **2. Investment down, output unchanged, consumption up**

      > [!note] Formula sheet — user cost drives it
      > The lever is the [[Macro Equation Sheet#Investment & the user cost of capital|user cost]] $\frac{(1+r)p_k-(1-\delta)p_k^f}{1-\tau_K}$: raising $\tau_K$ raises the user cost and cuts investment. Then close the loop with the goods-market identity $Y = C+I+G$ — with $Y$ and $G$ fixed, whatever leaves investment shows up as consumption. See [[crowding-out]], [[goods-market-equilibrium]] via [[Macro-Economics]].
    related_terms:
      - marginal-product-of-capital
      - fiscal-policy
      - crowding-out
    source_doc_page: 22
---

> [!info] About this paper
> The **official sample** for the Intermediate Macro final (the format your real exam follows): **21 multiple-choice questions**, 5 points each, closed-notes with the [[Macro Equation Sheet|formula sheet]] provided. The published sample carries worked solutions for **20** questions (the 21st slot and the "Miluim" question appear only on the real exam). Every solution below tags the formula-sheet block it draws on, so you can see exactly *which* equation the question was testing.
