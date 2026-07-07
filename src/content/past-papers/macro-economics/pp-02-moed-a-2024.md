---
title: "Moed A 2023–24 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed A (2023–24)"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-a-2023-24.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - public-debt-dynamics
  - unemployment
  - investment
  - production-function
  - inequality
  - inflation
  - development-accounting
  - consumption-tax
  - intertemporal-choice
aliases:
  - Moed A 2023-24
  - Moed Aleph 2023-24
  - Moed A 2024
  - Macro Moed A 2023-24
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — War and the debt-to-GDP dynamics (d, g, r)"
    text: |
      A rating agency (Moody's) forecasts that Israel's government debt ratio will rise to a peak of about **67% of GDP by 2025**, up from **60% in 2022** — whereas before the war it had expected the debt burden to *decline* towards **55% of GDP**.

      Using the short model for the evolution of the debt-to-GDP ratio studied in class, explain how each of the three contributing factors — the **primary deficit $d$**, the **growth rate $g$**, and the **interest rate $r$** — can be affected by the war in a way that is qualitatively consistent with this forecast.
    solution: |
      This is a "discussed-in-class" reasoning question built on the debt-dynamics equation. The ratio rises ($\Delta b > 0$) if the primary deficit rises, growth falls, or the interest rate rises. Start from the equation and read off the sign of each channel:

      $$\Delta b_t = d_t + \frac{r - g}{1 + g}\,b_{t-1}$$

      From this we can see the debt-to-GDP ratio $b$ **increases** if the deficit $d$ increases, the growth rate $g$ decreases, or the interest rate $r$ increases. Thinking about the war, we expect all three to push $b$ up:

      - **Deficit $d$ rises.** The war requires a large increase in government expenditure — financing the military effort, compensating people who had to evacuate their homes, and so on — so the primary deficit widens.
      - **Growth $g$ falls.** Many employees were called up to the reserves (lost labor input), and heightened uncertainty gives a more negative economic outlook, so GDP growth slows.
      - **Interest rate $r$ rises.** The country becomes a "riskier borrower," so lenders demand a higher yield. (Indeed, the yield on Israeli government debt rose at the start of the war.)

      All three forces move $\Delta b$ in the **same (positive) direction**, which is exactly what turns an expected *decline* toward 55% into a *rise* toward 67% — qualitatively consistent with the forecast.

      > [!success] Answer — a larger deficit ($d\uparrow$), slower growth ($g\downarrow$), and a higher interest rate ($r\uparrow$) all raise $\Delta b$, matching Moody's upward revision.

      > [!note] Formula sheet — debt dynamics
      > This is the [[Macro Equation Sheet#Fiscal policy & public debt|debt-dynamics equation]] $\Delta b_t = d_t + \frac{r-g}{1+g}\,b_{t-1}$. The exam wants you to map a real-world shock onto each term's sign: read off from the equation that $d\uparrow$, $g\downarrow$, $r\uparrow$ each raise $\Delta b$, then supply a plausible "story" for why the war moves each one. See [[public-debt-dynamics]], [[primary-deficit]], [[fiscal-policy]].
    related_terms:
      - public-debt-dynamics
      - primary-deficit
      - fiscal-policy
    source_doc_page: 2

  - id: q2
    title: "Q2 — Employment next period and the labor-market steady state"
    text: |
      There are **10,000,000** people in the labor force, of whom **600,000** are currently unemployed. The monthly **job-finding probability is $f = 35\%$** and the monthly **job-separation probability is $d = 3\%$**.

      How many workers will be employed next month? Is the economy in its steady state in the current period? In the next period?
    solution: |
      **Step 1 — current employment.** The labor force is $10{,}000{,}000$ and $600{,}000$ are unemployed, so

      $$E_t = 10{,}000{,}000 - 600{,}000 = 9{,}400{,}000$$

      **Step 2 — employment next month.** Use the employment evolution equation $E_{t+1} = (1-d)E_t + fU_t$:

      $$E_{t+1} = (1 - 0.03)\times 9{,}400{,}000 + 0.35\times 600{,}000 = 9{,}328{,}000$$

      Because $E_{t+1} = 9{,}328{,}000 \ne E_t = 9{,}400{,}000$, employment is **not constant** across the two periods, so the economy is **not in steady state in the current period.**

      **Step 3 — steady-state unemployment.** The steady-state unemployment rate is $u = \dfrac{d}{d+f}$:

      $$u = \frac{d}{d+f} = \frac{0.03}{0.03 + 0.35} = 0.0789 \approx 7.89\%$$

      With a labor force of $10{,}000{,}000$, steady-state unemployment is $0.0789 \times 10{,}000{,}000 \approx 789{,}000$ unemployed and therefore $\approx 9{,}211{,}000$ employed. Since the actual numbers (600,000 unemployed / 9,400,000 employed) differ from these steady-state levels, the economy is **not at steady state in either period** — and because $E_t \ne E_{t+1}$, it is still transitioning next period too.

      > [!success] Answer — $E_{t+1} = 9{,}328{,}000$; the economy is **not** in steady state in the current period (employment is changing), and it is not at the steady-state levels ($\approx 9{,}211{,}000$ employed / $789{,}000$ unemployed) in the next period either.

      > [!note] Formula sheet — labor-market dynamics
      > Two blocks from the [[Macro Equation Sheet#Unemployment & labor-market dynamics|labor-market dynamics]] section: the employment law of motion $E_{t+1} = (1-d)E_t + fU_t$ and the steady-state rate $u = \frac{d}{d+f}$. In steady state the flows in and out of employment balance, so $E$ is constant; here they don't, which is the tell that the economy is off its steady state. See [[job-finding-rate]], [[separation-rate]], [[frictional-unemployment]].
    related_terms:
      - job-finding-rate
      - separation-rate
      - frictional-unemployment
    source_doc_page: 3

  - id: q3
    title: "Q3 — Investment vs. the current and future price of capital"
    text: |
      A research assistant collects data on investment, the **current price of capital $p_K$**, and the **future price of capital $p_K^{f}$**, for firms that behave according to the investment model studied in class. The assistant plots investment against each price but forgets to label the two lines (one solid, one dashed).

      Which line describes investment vs. the **current** price of capital, and which describes investment vs. the **future** price of capital? Explain, and describe the economic interpretation of each price's effect on capital accumulation.
    solution: |
      In the investment model, investment is higher when the chosen future capital stock $K^{f}$ is higher, and $K^{f}$ is chosen so that the **future marginal product of capital equals the user cost**. Both prices enter through the **user cost**, not the marginal product:

      $$\text{user cost} = \frac{(1+r)p_K - (1-\delta)p_K^{f}}{1-\tau_K}$$

      Now read off the sign of each price:

      - **Current price $p_K$ (solid line — downward sloping).** A higher $p_K$ **raises** the user cost. The intersection of the user cost with $MPK^{f}$ then occurs at a **lower** optimal future capital, so investment **falls**. Investment is *decreasing* in $p_K$. Intuition: a higher current price means the marginal cost of an extra machine is higher, so firms buy fewer machines.
      - **Future price $p_K^{f}$ (dashed line — upward sloping).** A higher $p_K^{f}$ **lowers** the user cost (it enters with a minus sign). The intersection with $MPK^{f}$ moves to a **higher** optimal future capital, so investment **rises**. Investment is *increasing* in $p_K^{f}$. Intuition: a higher future price means firms expect to resell the machine later for more (an appreciation of the capital good), which encourages them to buy more machines today.

      So the **solid, downward-sloping** line is investment vs. the current price, and the **dashed, upward-sloping** line is investment vs. the future price.

      > [!success] Answer — solid line = investment vs. **current** price $p_K$ (downward sloping: $p_K\uparrow \Rightarrow$ user cost $\uparrow \Rightarrow I\downarrow$); dashed line = investment vs. **future** price $p_K^{f}$ (upward sloping: $p_K^{f}\uparrow \Rightarrow$ user cost $\downarrow \Rightarrow I\uparrow$).

      > [!note] Formula sheet — user cost of capital
      > Everything hinges on the [[Macro Equation Sheet#Investment & the user cost of capital|user-cost condition]] $MPK^{f} = \frac{(1+r)p_K - (1-\delta)p_K^{f}}{1-\tau_K}$. The two prices enter with **opposite signs**: $p_K$ raises the user cost (fewer machines), $p_K^{f}$ lowers it (more machines). Firms set future MPK equal to this user cost, so anything that raises the user cost cuts optimal $K^{f}$ and hence investment. See [[capital-accumulation-equation]], [[marginal-product-of-capital]], [[depreciation]].
    related_terms:
      - marginal-product-of-capital
      - capital-accumulation-equation
      - depreciation
    source_doc_page: 3

  - id: q4
    title: "Q4 — Permanent TFP rise with an additive production function"
    text: |
      An economy has production function $Y_t = A_t K_t^{\alpha} + N_t^{1-\alpha}$ (note the **additive** form). A ministry economist claims that encouraging permanent productivity ($A$) improvements will, already in the short run, deliver **more output, more investment, and stronger labor demand**. A news commentator agrees about output and investment but doubts the labor-demand claim.

      Do you agree about output and investment? What about labor demand? Explain.
    solution: |
      Evaluate each claim using the production function and its marginal products. The key is that this production function is **additively separable**, so $A$ multiplies only the capital term.

      - **Output.** For any level of $K$, a higher $A$ raises $A_t K_t^{\alpha}$ and therefore raises output. So a permanent rise in $A$ **increases output** — the economist is right.
      - **Investment.** From the investment model, a higher **future** $MPK$ raises optimal future capital $K^{f}$ and hence investment (the user cost is unchanged). Here $MPK^{f} = \alpha A^{f}\left(K^{f}\right)^{\alpha-1}$, which **increases in $A$**. So higher expected future productivity raises MPK, raises $K^{f}$, and **raises investment** — again the economist is right.
      - **Labor demand.** The optimality condition is $MPN = w$ in each period. Differentiate the production function: $MPN = (1-\alpha)N^{-\alpha}$. Crucially, **$A$ does not appear** in $MPN$ — the labor term $N^{1-\alpha}$ has no $A$ attached in this additive form. So a change in $A$ leaves the labor-demand curve **unchanged**. The **commentator is correct**: there is no effect of productivity on labor demand.

      (Side note: this additive production function violates the standard assumptions — normally, with multiplicative Cobb-Douglas, $A$ enters *both* $MPK$ and $MPN$, so productivity *would* shift labor demand.)

      > [!success] Answer — agree on output and investment (both rise with $A$), but the **commentator is right on labor demand**: with $MPN = (1-\alpha)N^{-\alpha}$ independent of $A$, higher productivity does **not** shift labor demand.

      > [!warning] Watch the functional form
      > The trap is autopiloting the standard Cobb-Douglas result. Here production is **additive** ($A K^{\alpha} + N^{1-\alpha}$), so $A$ multiplies only capital and drops out of $MPN = (1-\alpha)N^{-\alpha}$. Always differentiate the *given* function. Investment still responds because $MPK^{f} = \alpha A^{f}(K^{f})^{\alpha-1}$ does contain $A$. See [[Macro Equation Sheet#Investment & the user cost of capital|investment rule]], [[Macro Equation Sheet#Production & factor demands|marginal products]], [[labor-demand]], [[marginal-product-of-capital]].
    related_terms:
      - labor-demand
      - marginal-product-of-capital
      - production-function
    source_doc_page: 5

  - id: q5
    title: "Q5 — Inequality ratios (90/10, 90/50, 50/10) and polarization"
    text: |
      Among the measures of inequality, briefly explain what the **90/10**, **90/50**, and **50/10** ratios are (focus on wages). Then explain briefly what **"polarization in the labor market"** is, and how some of these ratios can indicate a process of polarization.
    solution: |
      This is an empirical / "discussed-in-class" question — no formula, just the stylized definitions.

      **The ratios.** All refer to positions in the wage (income) distribution:

      - **90/10** is the ratio of the wage of the person at the **90th percentile** (relatively high) to the wage of the person at the **10th percentile** (relatively low). It is a broad measure of overall wage dispersion.
      - **90/50** compares the **90th percentile** to the **50th percentile** (the median). It captures inequality in the **upper half** of the distribution — the gap between the top and the middle.
      - **50/10** compares the **median** to the **10th percentile**. It captures inequality in the **lower half** — the gap between the middle and the bottom.

      **Polarization.** Labor-market polarization is a process observed in several developed economies: when jobs (occupations) are ranked by income, over time there is **stronger growth of employment and wages at both the high-paying and low-paying ends**, while **jobs "in the middle" stagnate or decline**. The middle of the distribution hollows out relative to the two tails.

      **How the ratios reveal it.** Polarization typically shows up as a **widening 90/50 ratio** (the top pulls away from the middle) together with a **declining 50/10 ratio** (the middle no longer pulls away from — or even falls back toward — the bottom). So the gap between the rich and the middle widens while the gap between the middle and the poor shrinks.

      > [!success] Answer — 90/10, 90/50 and 50/10 are ratios of high/median/low percentile wages; polarization = employment and wage growth at the top and bottom with a hollowed-out middle, signalled by a **rising 90/50** alongside a **falling 50/10**.

      > [!tip] Empirical / "discussed-in-class" question
      > No equation to plug into — these test the stylized facts on inequality and the "hollowing of the middle." Key terms: **percentile wage ratios**, **polarization**, widening 90/50 vs. narrowing 50/10. See [[inequality-measures]], [[polarization]], [[routine-biased-technological-change]].
    related_terms:
      - inequality-measures
      - polarization
      - routine-biased-technological-change
    source_doc_page: 6

  - id: q6
    title: "Q6 — GDP-deflator vs. CPI inflation with a non-consumption good"
    text: |
      A country produces **Pasta**, **Tomatoes**, and **Industrial Robots**. There are **1,000 identical consumers**, who consume **only Pasta and Tomatoes** (robots are not consumed). Base year 2022.

      | Year | Product | Quantity | Price |
      |---|---|---|---|
      | 2022 | Pasta | 1,000 | 5 |
      | 2022 | Tomatoes | 5,000 | 2 |
      | 2022 | Industrial Robots | 100 | 500 |
      | 2023 | Pasta | 1,100 | 5.5 |
      | 2023 | Tomatoes | 4,500 | 2.2 |
      | 2023 | Industrial Robots | 101 | 450 |

      Compute inflation from the **GDP deflator** and from the **CPI** (2022 base / fixed 2022 basket). Is there a difference? If so, why?
    solution: |
      **GDP deflator** (2022 base). The deflator is $\dfrac{\text{Nominal GDP}}{\text{Real GDP}}$, where nominal GDP sums current prices × current quantities across **all** goods (robots included), and real GDP uses 2022 prices.

      | Year | Nominal GDP (all goods) | Real GDP (2022 prices) | Deflator |
      |---|---|---|---|
      | 2022 | $1000(5)+5000(2)+100(500)=65{,}000$ | $65{,}000$ | $1.000$ |
      | 2023 | $1100(5.5)+4500(2.2)+101(450)=61{,}400$ | $1100(5)+4500(2)+101(500)=65{,}000$ | $0.945$ |

      Two things to note in 2023 nominal GDP: $1100(5.5)=6050$, $4500(2.2)=9900$, $101(450)=45{,}450$, summing to $61{,}400$; and 2023 real GDP at 2022 prices: $1100(5)=5500$, $4500(2)=9000$, $101(500)=50{,}500$, summing to $65{,}000$. So the deflator is $61{,}400/65{,}000 \approx 0.945$. Deflator inflation:

      $$\pi^{\text{def}} = \frac{0.945 - 1}{1} = -0.055 = -5.5\%$$

      **CPI** (fixed 2022 basket). With 1,000 identical consumers, the representative basket is **1 Pasta + 5 Tomatoes** (robots excluded). Value that fixed basket at each year's prices:

      $$\text{CPI}_{2022} = 1(5) + 5(2) = 15, \qquad \text{CPI}_{2023} = 1(5.5) + 5(2.2) = 16.5$$

      $$\pi^{\text{CPI}} = \frac{16.5 - 15}{15} = 0.10 = 10\%$$

      **Why they differ.** There is a **large** difference: the deflator shows $-5.5\%$ while the CPI shows $+10\%$. The reason is the **robots**. The GDP deflator includes *all* products, and industrial robots are a major part of GDP in both years — their price **falls by 10%** ($500 \to 450$). That price drop drags the deflator down. The CPI, by contrast, only covers the two consumption goods, both of whose prices **rise by 10%**. So the deflator has a large falling-price category that the CPI simply doesn't see.

      > [!success] Answer — GDP-deflator inflation $\approx -5.5\%$; CPI inflation $= +10\%$. They differ because the deflator includes the robots (whose price fell 10% and are a big share of GDP), while the CPI covers only the two consumption goods (whose prices rose 10%).

      > [!note] Formula sheet — deflator and inflation
      > Uses the [[Macro Equation Sheet#National accounts & GDP|GDP deflator]] $P = \text{nominal}/\text{real}$ and [[Macro Equation Sheet#Prices, inflation & exchange rates|inflation]] $\pi = \frac{P_{t+1}-P_t}{P_t}$. The exam's twist: the **deflator covers all output** (so a non-consumption good with a falling price can pull it negative) while the **CPI fixes the consumer basket** — strip robots out for the CPI but not the deflator. See [[gdp-deflator]], [[cpi]], [[inflation]].
    related_terms:
      - gdp-deflator
      - cpi
      - inflation
    source_doc_page: 6

  - id: q7
    title: "Q7 — UK growth accounting, temporary TFP shocks, and capital choices (long)"
    text: |
      Data for the United Kingdom, 2007–2009 (Penn World Table 10.1). Assume Cobb-Douglas $Y_t = A_t K_t^{\alpha} N_t^{1-\alpha}$ with a **labor share of 0.6** (so $1-\alpha = 0.6$, i.e. $\alpha = 0.4$).

      | Year | Real GDP | Employment | Avg Hours | Capital Stock | Total Labor | TFP |
      |---|---|---|---|---|---|---|
      | 2007 | 2,635,414 | 29.32 | 1,665 | 11,698 | ? | ? |
      | 2008 | 2,628,067 | 29.66 | 1,660 | 11,934 | ? | ? |
      | 2009 | 2,519,950 | 29.29 | 1,638 | 12,080 | ? | ? |

      1. Fill in **Total Labor** (total hours) and **implied TFP** (10 pts).
      2. Using the standard labor-market model: **(a)** if TFP shocks are perceived as *temporary*, what is the short-run effect of a **negative** TFP shock on labor-market equilibrium (employment, wages) and GDP? (6 pts) **(b)** Comparing 2008-vs-2007 and 2009-vs-2008, are the model's predictions consistent with the data? (3 pts) **(c)** Name two other factors (one demand-side, one supply-side) that could reconcile the model with the data (7 pts).
      3. In the investment model, if firms *expected* these TFP changes, is the observed capital-stock path consistent with the model? (6 pts)
    solution: |
      ### Part 1 — Total labor and TFP

      **Total labor** = employment × average hours (per worker):

      $$L_{2007} = 29.32 \times 1665 \approx 48{,}817.8,\quad L_{2008} = 29.66 \times 1660 \approx 49{,}235.6,\quad L_{2009} = 29.29 \times 1638 \approx 47{,}977.0$$

      **TFP** comes from inverting the Cobb-Douglas production function (development-accounting style), reading $A$ off as the residual. With labor share $1-\alpha = 0.6$, we have $\alpha = 0.4$, and

      $$A_t = \frac{Y_t}{K_t^{\alpha} N_t^{1-\alpha}} = \frac{Y_t}{K_t^{0.4}\,L_t^{0.6}}$$

      (using total labor $L$ for $N$). Evaluating for each year gives:

      | Year | Total Labor | TFP |
      |---|---|---|
      | 2007 | 48,817.8 | 95.6 |
      | 2008 | 49,235.6 | 94.1 |
      | 2009 | 47,977.0 | 91.2 |

      So **TFP falls in both years** (95.6 → 94.1 → 91.2).

      ### Part 2 — Labor-market model

      **(a) Effect of a temporary negative TFP shock.**
      A negative TFP shock lowers the marginal product of labor at every level of labor, shifting the **labor-demand curve down / to the left**. Because the shock is perceived as **purely temporary**, workers do *not* revise their lifetime income (PVLR) — a one-period dip barely touches the present value of lifetime resources — and with no population change and no tax change, **labor supply does not shift**. Result: with demand shifting left along a fixed supply curve, **employment falls and the real wage falls**. Since both TFP and labor input decline, **GDP must fall** as well.

      **(b) Consistency with the data.**
      TFP falls in *both* years, so the model predicts **lower labor input and lower GDP for both** 2008 and 2009.

      - **Labor input:** total labor **rises** in 2008 (48,817.8 → 49,235.6) but **falls** in 2009 (49,235.6 → 47,977.0). So the model is **inconsistent with the data for 2008** (labor went the "wrong" way) but **consistent for 2009**.
      - **GDP:** GDP **declines in both years** (2,635,414 → 2,628,067 → 2,519,950), which is consistent with the production model driven by TFP, labor and capital.

      **(c) Two other factors.**
      - **Demand side — capital (we have data).** More capital raises the marginal product of labor (capital-labor complementarity), shifting labor **demand right**. The data show the **capital stock rising every year** (11,698 → 11,934 → 12,080), which could strengthen labor demand and **offset** some of the negative TFP shock — helping explain the 2008 rise in labor despite falling TFP.
      - **Supply side — PVLR / population (we lack data).** (i) A **PVLR effect**: if workers expect a broader economic slowdown, their present value of lifetime resources falls, and (poorer) they **supply more labor** — labor supply shifts right. Combined with falling demand, equilibrium labor becomes **ambiguous**. (ii) **Population growth** would also shift supply right, again making the equilibrium labor effect ambiguous (though one-year population changes are usually small).

      ### Part 3 — Investment model and the capital path

      In the investment model, firms choose future capital so that the **future marginal product of capital equals the user cost**; TFP drives $MPK^{f}$ but **not** the user cost. When future TFP is expected to be **lower**, the $MPK^{f}$ curve shifts **down**, so optimal $K^{f}$ should be **lower** — i.e. we would expect a **declining** capital stock.

      In the data, TFP falls over 2007–2009, so *if firms anticipated this fall*, the model predicts a **falling** capital stock. But the data show capital **rising** every year (11,698 → 11,934 → 12,080). So the observed capital path is **inconsistent** with the model under the assumption that firms expected the TFP decline.

      (Not for grading — useful context: capital *growth* does slow in the second year, where TFP falls more sharply; and firms plan investment over horizons longer than one year — over a longer window TFP actually rebounded, which can rationalize continued capital accumulation.)

      > [!success] Answer — TFP falls each year (95.6, 94.1, 91.2); a temporary negative TFP shock shifts labor demand left (supply fixed) → lower employment, lower wage, lower GDP; predictions are **inconsistent for 2008** (labor rose) but **consistent for 2009**, with rising capital (demand) and PVLR/population (supply) as reconciling factors; and the **rising** capital stock is **inconsistent** with firms having expected the TFP decline.

      > [!note] Formula sheet — Cobb-Douglas, marginal products, user cost
      > Part 1 inverts the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas production function]] $Y = A K^{\alpha}N^{1-\alpha}$ to read off TFP as the residual $A = Y/(K^{\alpha}N^{1-\alpha})$. Part 2 uses the labor-demand shift from $MPN = A F_N$ (a lower $A$ lowers $MPN$). Part 3 uses the [[Macro Equation Sheet#Investment & the user cost of capital|investment rule]]: firms set $MPK^{f}$ equal to the user cost, so lower expected TFP → lower $MPK^{f}$ → lower optimal $K^{f}$. See [[development-accounting]], [[solow-residual]], [[labor-demand]], [[pvlr]], [[penn-world-table]].
    related_terms:
      - development-accounting
      - solow-residual
      - labor-demand
      - pvlr
      - marginal-product-of-capital
    source_doc_page: 8

  - id: q8
    title: "Q8 — Two-period consumption model with a consumption tax (long)"
    text: |
      A two-period consumption model with a **consumption tax** ($\tau_0, \tau_1$ in periods 0 and 1) that makes consumption more expensive. Budget constraint:

      $$(1+\tau_0)c_0 + \frac{(1+\tau_1)c_1}{1+r} = y_0 + \frac{y_1}{1+r}$$

      Per-period utility is $\ln(c_t)$; lifetime utility is $\ln(c_0) + \beta\ln(c_1)$ with discount factor $0<\beta<1$. Income $y_0, y_1$ is known; $r$ is taken as given.

      1. Write the Lagrangian; state the choice variables; derive the first-order conditions (5 pts).
      2. Show the Euler equation is $\dfrac{1}{c_0} = \beta(1+r)\dfrac{1+\tau_0}{1+\tau_1}\dfrac{1}{c_1}$ (4 pts).
      3. Show $c_0 = \dfrac{1}{1+\tau_0}\dfrac{1}{1+\beta}\left(y_0 + \dfrac{y_1}{1+r}\right)$ (4 pts).
      4. The government raises $\tau_0$, effective immediately. What happens to $c_0$? Explain mathematically and intuitively (2 pts).
      5. Effect on aggregate saving and goods-market equilibrium (assume period-0 production $A,K,N$ unchanged): **(a)** what happens to consumption expenditure $(1+\tau_0)c_0$ and to private saving? (6 pts) **(b)** government tax revenue and government saving, if $G$ rises with revenue in period 0 vs. period 1 (6 pts). **(c)** the new goods-market equilibrium for one of those scenarios (5 pts).
    solution: |
      ### Part 1 — Lagrangian and FOCs

      The choice variables are current and future consumption, $c_0$ and $c_1$. The Lagrangian attaches multiplier $\lambda$ to the budget constraint:

      $$\mathcal{L} = \ln(c_0) + \beta\ln(c_1) + \lambda\left[y_0 + \frac{y_1}{1+r} - (1+\tau_0)c_0 - \frac{(1+\tau_1)c_1}{1+r}\right]$$

      There are three unknowns ($c_0, c_1, \lambda$), so three first-order conditions:

      $$\frac{\partial\mathcal{L}}{\partial c_0} = \frac{1}{c_0} - \lambda(1+\tau_0) = 0$$

      $$\frac{\partial\mathcal{L}}{\partial c_1} = \beta\frac{1}{c_1} - \lambda\frac{1+\tau_1}{1+r} = 0$$

      $$\frac{\partial\mathcal{L}}{\partial \lambda} = y_0 + \frac{y_1}{1+r} - (1+\tau_0)c_0 - \frac{(1+\tau_1)c_1}{1+r} = 0$$

      ### Part 2 — Euler equation

      Eliminate $\lambda$ between the first two FOCs. The first gives $\lambda = \dfrac{1}{c_0}\dfrac{1}{1+\tau_0}$. Substitute into the second:

      $$\beta\frac{1}{c_1} - \frac{1}{c_0}\frac{1}{1+\tau_0}\frac{1+\tau_1}{1+r} = 0 \quad\Longrightarrow\quad \frac{1}{c_0}\frac{1}{1+\tau_0}\frac{1+\tau_1}{1+r} = \beta\frac{1}{c_1}$$

      Rearranging:

      $$\frac{1}{c_0} = \beta(1+r)\frac{1+\tau_0}{1+\tau_1}\frac{1}{c_1}$$

      as required.

      ### Part 3 — Solve for $c_0$

      From the Euler equation, express $c_1$ in terms of $c_0$:

      $$c_1 = \beta(1+r)\frac{1+\tau_0}{1+\tau_1}\,c_0$$

      Substitute into the budget constraint. The future-consumption term becomes

      $$\frac{(1+\tau_1)}{1+r}\,c_1 = \frac{(1+\tau_1)}{1+r}\,\beta(1+r)\frac{1+\tau_0}{1+\tau_1}\,c_0 = \beta(1+\tau_0)c_0$$

      so the budget constraint collapses:

      $$(1+\tau_0)c_0 + \beta(1+\tau_0)c_0 = y_0 + \frac{y_1}{1+r} \quad\Longrightarrow\quad (1+\tau_0)(1+\beta)c_0 = y_0 + \frac{y_1}{1+r}$$

      $$\boxed{c_0 = \frac{1}{1+\tau_0}\frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right)}$$

      ### Part 4 — Effect of raising $\tau_0$ on $c_0$

      In the solution, $\tau_0$ appears in the **denominator** (through $\tfrac{1}{1+\tau_0}$), so **raising $\tau_0$ lowers $c_0$**. Intuitively, a higher consumption tax makes each unit of current consumption more expensive, so consumers respond by consuming **less** today.

      ### Part 5 — Saving and goods-market equilibrium

      Assume period-0 production is fixed ($A, K, N$ unchanged), so aggregate income $y_0$ is unchanged.

      **(a) Consumption expenditure and private saving.**
      Private saving is income minus consumption expenditure (tax-inclusive): $s_0 = y_0 - (1+\tau_0)c_0$. Since $y_0$ is fixed, the question is whether the **expenditure** $(1+\tau_0)c_0$ changes. Multiply the solution for $c_0$ by $(1+\tau_0)$:

      $$(1+\tau_0)c_0 = (1+\tau_0)\frac{1}{1+\tau_0}\frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right) = \frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right)$$

      The $(1+\tau_0)$ factors **cancel** — consumption expenditure is **completely independent of $\tau_0$**. Reason (given log utility): the consumer chooses to buy *fewer* units, but the tax-inclusive price per unit rises by *exactly* the same factor, so total spending is unchanged. Therefore, with $y_0$ fixed and expenditure fixed, **private saving does not change**.

      (Equivalent framing: disposable income is $y_0$ minus taxes paid, so saving $= y_0 - \tau_0 c_0 - c_0$, which is algebraically identical to $y_0 - (1+\tau_0)c_0$.)

      **(b) Government tax revenue and government saving.**
      Tax revenue in period 0 is the tax rate times consumption:

      $$T_0 = \tau_0 c_0 = \frac{\tau_0}{1+\tau_0}\frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right)$$

      (This is increasing in $\tau_0$ — students weren't required to prove it.)

      - **If $G_0$ rises by exactly the extra revenue** (spending in period 0): the budget deficit is unchanged, so the government's borrowing/saving is unchanged — **government saving is unchanged.**
      - **If revenue is collected in period 0 but $G_1$ (not $G_0$) rises** (spending deferred to period 1): current tax revenue is higher while current spending is unchanged, so **current government saving increases.**

      **(c) New goods-market equilibrium.**
      In both scenarios: (i) private saving does not change (Part a), and (ii) the **investment ($I$) curve does not shift** — nothing here changes the user cost or $MPK^{f}$. So the outcome depends only on the *timing* of government spending. Take the two cases:

      - **Case i — $G_0$ rises with revenue (spend now):** government saving is unchanged, so **aggregate saving is unchanged**. (Equivalently, in $Y_0 - C_0 - G_0$, $G_0$ rises 1-for-1 with the fall in $C_0$.) So the **$S$ curve does not shift** and there is **no change in the goods-market equilibrium** — same $r$, same $I$.
      - **Case ii — $G_0$ unchanged, $G_1$ rises (spend later):** current government saving rises while private saving is unchanged, so **aggregate saving rises** — the **$S$ curve shifts right**. (In $Y_0 - C_0 - G_0$, $C_0$ falls while $G_0$ is unchanged.) The new equilibrium has **more saving and more investment at a lower real interest rate $r$**.

      > [!success] Answer — $c_0 = \frac{1}{1+\tau_0}\frac{1}{1+\beta}\left(y_0 + \frac{y_1}{1+r}\right)$, so raising $\tau_0$ lowers $c_0$ but leaves **consumption expenditure and private saving unchanged**; if extra revenue is spent in period 0 the goods market is unchanged, but if spent in period 1 the $S$ curve shifts right → lower $r$, higher $I$.

      > [!note] Formula sheet — Euler equation and lifetime budget
      > This is the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|Euler equation and lifetime budget constraint]], here modified with consumption taxes. The **log-utility signature** does the heavy lifting: current consumption is a fixed fraction of lifetime wealth, so the tax-inclusive expenditure $(1+\tau_0)c_0$ is invariant to $\tau_0$. Standard recipe: set up the Lagrangian, take FOCs, combine into the Euler equation, substitute into the budget constraint, solve for $c_0$. See [[euler-equation]], [[lagrangian-optimisation]], [[consumption-tax]], [[intertemporal-choice]], [[consumption-smoothing]].
    related_terms:
      - euler-equation
      - lagrangian-optimisation
      - consumption-tax
      - intertemporal-choice
      - present-value
    source_doc_page: 10
---

> [!info] About this paper
> **Moed A (Aleph), Intermediate Macro, February 26, 2024.** An **open-notes** final with a very different format from the MCQ sample: **6 short questions** (1–6, worth **6 points each**) and **2 long questions** (7–8, worth **32 points each**). Q7 is a UK growth-accounting / labor-market problem off the Penn World Table; Q8 is a full two-period consumption model with a consumption tax (Lagrangian, Euler equation, saving and goods-market analysis). Each solution below is transcribed from the official answer key and tags the formula-sheet block it draws on. The [[Macro Equation Sheet|formula sheet]] is provided in the exam.
