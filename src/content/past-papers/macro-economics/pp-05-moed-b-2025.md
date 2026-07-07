---
title: "Moed B 2025 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed B (2025)"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-b-2025.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - investment
  - public-debt-dynamics
  - growth-accounting
  - euler-equation
  - unemployment
  - labor-supply
  - fiscal-policy
  - automation
aliases:
  - Moed B 2025
  - Moed Bet 2025
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — Backing out future TFP from the investment rule"
    text: |
      Firms make optimal investment decisions according to the standard investment model:

      - Cobb-Douglas production function $Y_t = A_t\,K_t^{1/3}\,N_t^{2/3}$ (all periods)
      - Current price of capital $p_k = 180$; future price of capital $p_k^{f} = 200$
      - Real interest rate $r = 3\%$
      - Depreciation rate $\delta = 8\%$
      - Capital tax $\tau_K = 20\%$
      - Current capital stock $K = 350$; labor constant at $N = 5{,}000$
      - Current investment $I = 53$; current TFP $A = 1$

      An analyst claims: "since we observe positive investment this period, firms must expect a **higher** future TFP." Is the analyst right? Assuming firms invest optimally, compute the implied future TFP $A^{f}$.
    solution: |
      The whole question runs off the investment optimality condition **future MPK = user cost**.

      **Step 1 — user cost.** Plug the prices, rate, depreciation and tax into the user-cost formula:

      $$\text{user cost} = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K} = \frac{1.03\times 180 - 0.92\times 200}{0.8} = \frac{185.4 - 184}{0.8} = 1.75$$

      **Step 2 — future capital.** We aren't handed $K^{f}$, but the capital-accumulation equation gives it from current capital and investment:

      $$K^{f} = (1-\delta)K + I = 0.92\times 350 + 53 = 322 + 53 = 375$$

      **Step 3 — future MPK.** For Cobb-Douglas with $\alpha = \tfrac13$,

      $$MPK^{f} = \frac{\partial Y^{f}}{\partial K^{f}} = A^{f}\times\tfrac13\times \left(K^{f}\right)^{-2/3}\times N^{2/3} = A^{f}\times\tfrac13\times(375)^{-2/3}\times(5000)^{2/3}$$

      **Step 4 — set MPK equal to the user cost and solve for the only unknown, $A^{f}$:**

      $$1.75 = A^{f}\times\tfrac13\times(375)^{-2/3}\times(5000)^{2/3}$$

      $$A^{f} = \frac{1.75}{\tfrac13\times(375)^{-2/3}\times(5000)^{2/3}} \approx 0.934$$

      The implied future TFP ($\approx 0.934$) is **lower** than current TFP ($A = 1$). So the analyst is **incorrect**: positive investment does not require firms to expect higher future TFP. Here investment is positive even though expected TFP is falling, because the numbers still make future MPK worth the (relatively low) user cost.

      > [!success] Answer — **The analyst is wrong; implied future TFP $A^{f}\approx 0.934 < 1$.**

      > [!note] Formula sheet — investment rule + capital accumulation
      > Two sheet entries combine here: the [[Macro Equation Sheet#Investment & the user cost of capital|user-cost condition]] $MPK^{f} = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K}$ and the [[Macro Equation Sheet#Investment & the user cost of capital|capital-accumulation equation]] $K^{f} = (1-\delta)K + I$. The exam's trick is that $K^{f}$ isn't given directly — you build it from $K$ and $I$, then invert the MPK expression for $A^{f}$. See [[marginal-product-of-capital]], [[capital-accumulation-equation]], [[depreciation]].
    related_terms:
      - marginal-product-of-capital
      - capital-accumulation-equation
      - depreciation
    source_doc_page: 2

  - id: q2
    title: "Q2 — Forecasting GDP, debt-to-GDP and total debt"
    text: |
      An economy has:

      - Real GDP in 2000 $= 1{,}000{,}000$; real GDP in 2020 $= 1{,}400{,}000$
      - Future real GDP grows at the average 2000–2020 rate
      - Debt-to-GDP ratio in 2020 $= 80\%$
      - Expected primary deficit $= 2.5\%$ of GDP
      - Real interest rate $r = 4\%$

      Find the predicted **real GDP**, **debt-to-GDP ratio**, and **total debt** in 2021.
    solution: |
      **Step 1 — average growth rate** over the 20-year window (compound):

      $$g = \left(\frac{1{,}400{,}000}{1{,}000{,}000}\right)^{1/20} - 1 = 1.4^{1/20} - 1 \approx 0.017$$

      i.e. about $1.7\%$ per year.

      **Step 2 — predicted 2021 GDP.** Grow 2020 GDP one year at $g$:

      $$Y_{2021} = (1+g)\,Y_{2020} = 1.017\times 1{,}400{,}000 = 1{,}423{,}800$$

      **Step 3 — predicted debt-to-GDP ratio.** Use the level form of the debt-dynamics equation $b_t = d_t + \frac{1+r}{1+g}b_{t-1}$:

      $$b_{2021} = 0.025 + \frac{1.04}{1.017}\times 0.80 = 0.025 + 1.0226\times 0.80 \approx 0.843$$

      So the expected debt-to-GDP ratio is about $84.3\%$.

      **Step 4 — total (stock of) debt.** Debt $=$ ratio $\times$ GDP:

      $$B_{2021} = b_{2021}\times Y_{2021} = 0.843\times 1{,}423{,}800 \approx 1{,}200{,}263$$

      > [!success] Answer — **$Y_{2021}\approx 1{,}423{,}800$; debt-to-GDP $\approx 84.3\%$; total debt $\approx 1{,}200{,}263$.**

      > [!note] Formula sheet — debt dynamics
      > This uses the [[Macro Equation Sheet#Fiscal policy & public debt|debt-to-GDP evolution equation]] $b_t = d_t + \frac{1+r}{1+g}b_{t-1}$. The data never hand you $g$ directly — get it from the 20-year compound-growth relation first, then plug into the debt equation, and finally multiply the ratio by forecast GDP to recover the debt *stock*. See [[public-debt-dynamics]], [[primary-deficit]], [[government-budget-constraint]].
    related_terms:
      - public-debt-dynamics
      - primary-deficit
      - government-budget-constraint
    source_doc_page: 3

  - id: q3
    title: "Q3 — TFP level, TFP growth and the real wage from data"
    text: |
      You have the following data, with production function $Y_t = A_t K_t^{\alpha}N_t^{1-\alpha}$ and real wage in 2020 equal to $3$:

      | Variable | 2020 | 2021 |
      |---|---|---|
      | GDP | 100,000 | 110,000 |
      | Capital stock | 10,000 | 11,000 |
      | Labor input | 20,000 | 22,000 |

      Calculate the level of TFP in 2020, the growth rate of TFP between 2020 and 2021, and the real wage in 2021.
    solution: |
      **Step 1 — pin down $\alpha$ from the labor share.** Under competition, labor's share $= 1-\alpha = \frac{wN}{Y}$. Using 2020 data:

      $$1-\alpha = \frac{wN}{Y} = \frac{3\times 20{,}000}{100{,}000} = 0.6 \quad\Longrightarrow\quad \alpha = 0.4$$

      **Step 2 — TFP in 2020.** Invert the production function $A = \dfrac{Y}{K^{\alpha}N^{1-\alpha}}$:

      $$A_{2020} = \frac{100{,}000}{10{,}000^{0.4}\,20{,}000^{0.6}} \approx 6.6$$

      **Step 3 — TFP growth.** Compute $A_{2021}$ the same way:

      $$A_{2021} = \frac{110{,}000}{11{,}000^{0.4}\,22{,}000^{0.6}} \approx 6.6$$

      TFP is **unchanged — zero growth**. You can also see this without computing: $Y$, $K$ and $N$ all grew by the same $10\%$, and the Cobb-Douglas technology has **constant returns to scale**, so a proportional increase in all inputs raises output proportionally with no change in $A$.

      **Step 4 — real wage in 2021.** Two equivalent routes:

      - From the labor share, $\frac{wN}{Y} = 0.6 \Rightarrow w = 0.6\times\frac{Y}{N} = 0.6\times\frac{110{,}000}{22{,}000} = 3$.
      - Or from $MPN = (1-\alpha)AK^{\alpha}N^{-\alpha}$, which also gives $w = 3$.

      Because all the relevant ratios ($Y/N$, $K/N$) are unchanged when everything grows by the same factor, the real wage stays at $3$.

      > [!success] Answer — **$A_{2020}\approx 6.6$; TFP growth $= 0\%$; $w_{2021} = 3$.**

      > [!note] Formula sheet — production function + labor share
      > This leans on the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas production function]] $Y = AK^{\alpha}N^{1-\alpha}$, the [[Macro Equation Sheet#Production & factor demands|labor share]] $\frac{wN}{Y} = 1-\alpha$, and $MPN = (1-\alpha)\tfrac{Y}{N}$. The labor share is how you recover $\alpha$ before you can back out TFP. See [[cobb-douglas]], [[labor-share]], [[constant-returns-to-scale]], [[solow-residual]].
    related_terms:
      - cobb-douglas
      - labor-share
      - constant-returns-to-scale
    source_doc_page: 4

  - id: q4
    title: "Q4 — Reading σ and β off a consumption-growth vs. interest-rate figure"
    text: |
      Two consumers share the utility function $u(c) = \dfrac{c^{1-\sigma}}{1-\sigma}$ and the same discount factor $0<\beta<1$. A figure plots the real interest rate $r$ on the horizontal axis against consumption growth $\dfrac{c_{t+1}}{c_t}$ on the vertical axis, with two upward-sloping lines (one solid, one dashed, the dashed being flatter).

      1. Which line corresponds to the consumer with the **higher** $\sigma$? (You may reason from the Euler equation — no need to solve the full problem.)
      2. From the figure, what is the value of $\beta$? Explain.
    solution: |
      **Part 1 — which line is the higher-σ consumer.** Start from the Euler equation for this CRRA utility ($u'(c) = c^{-\sigma}$):

      $$c_t^{-\sigma} = \beta(1+r)\,c_{t+1}^{-\sigma} \quad\Longrightarrow\quad \frac{c_{t+1}^{\sigma}}{c_t^{\sigma}} = \beta(1+r) \quad\Longrightarrow\quad \frac{c_{t+1}}{c_t} = \left[\beta(1+r)\right]^{1/\sigma}$$

      Consumption growth rises with $r$, but the **exponent $1/\sigma$** controls how strongly. A **larger $\sigma$** means a smaller $1/\sigma$, so the response of consumption growth to $r$ is **weaker** — a **flatter** line. Hence the higher-$\sigma$ consumer is the **dashed (flatter)** line.

      (Equivalent intuition: $\sigma$ governs the desire to smooth consumption. A larger $\sigma$ means a stronger incentive to smooth, so consumption is more stable across periods — a flatter slope.)

      **Part 2 — the value of β.** From the Euler equation, consumption is **constant over time** ($c_{t+1}/c_t = 1$) exactly when $\beta(1+r) = 1$. So find the point on the figure where consumption growth equals $1$; at that interest rate,

      $$\beta = \frac{1}{1+r}$$

      The figure shows this crossing at $r = 0.02$, so

      $$\beta = \frac{1}{1.02} \approx 0.98$$

      > [!success] Answer — **1. The flatter (dashed) line is the higher-σ consumer. 2. $\beta = \frac{1}{1+r}$ read at the $c_{t+1}/c_t = 1$ point ($r=0.02$), so $\beta = \frac{1}{1.02}\approx 0.98$.**

      > [!note] Formula sheet — the Euler equation
      > Everything comes from the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|consumption Euler equation]] $u'(c_t) = \beta(1+r)u'(c_{t+1})$. With CRRA utility it rearranges to $\frac{c_{t+1}}{c_t} = [\beta(1+r)]^{1/\sigma}$: the **slope** in $r$ reveals $\sigma$ and the **point where growth $=1$** reveals $\beta$. See [[euler-equation]], [[consumption-smoothing]], [[intertemporal-choice]].
    related_terms:
      - euler-equation
      - consumption-smoothing
      - intertemporal-choice
    source_doc_page: 6

  - id: q5
    title: "Q5 — Unemployment rate, job-finding, separation and steady state from flows"
    text: |
      Labor-market data for two months (assume the entire population is in the labor force):

      | Month | Continuing employed | New employed | Continuing unemployed | New unemployed |
      |---|---|---|---|---|
      | 1 | 180,000 | 9,000 | 15,000 | 6,000 |
      | 2 | 180,000 | 12,000 | 13,000 | 5,000 |

      "Continuing employed" = employed this month and last; "new employed" = employed this month but unemployed last month (similarly for unemployed). Calculate: the unemployment rates in months 1 and 2; the job-finding probability $f$; the separation probability $d$; and the steady-state unemployment rate if these probabilities persist.
    solution: |
      **Step 1 — unemployment rates.** Total unemployed $=$ continuing $+$ new unemployed; labor force $=$ everyone. So:

      $$u_1 = \frac{15{,}000 + 6{,}000}{180{,}000 + 9{,}000 + 15{,}000 + 6{,}000} = \frac{21{,}000}{210{,}000} = 0.10$$

      $$u_2 = \frac{13{,}000 + 5{,}000}{180{,}000 + 12{,}000 + 13{,}000 + 5{,}000} = \frac{18{,}000}{210{,}000} \approx 0.0857$$

      So $10\%$ in month 1 and $8.57\%$ in month 2.

      **Step 2 — job-finding probability $f$.** Of those unemployed in month 1, the fraction who become employed in month 2. The newly employed in month 2 ($12{,}000$) came out of month-1 unemployment ($15{,}000 + 6{,}000 = 21{,}000$):

      $$f = \frac{12{,}000}{15{,}000 + 6{,}000} = \frac{12{,}000}{21{,}000} \approx 0.57 = 57\%$$

      **Step 3 — separation probability $d$.** Of those employed in month 1, the fraction who become unemployed in month 2. The newly unemployed in month 2 ($5{,}000$) came out of month-1 employment ($180{,}000 + 9{,}000 = 189{,}000$):

      $$d = \frac{5{,}000}{180{,}000 + 9{,}000} = \frac{5{,}000}{189{,}000} \approx 0.0264 = 2.64\%$$

      **Step 4 — steady-state unemployment rate.** Using the steady-state formula:

      $$u^{ss} = \frac{d}{d+f} = \frac{0.0264}{0.0264 + 0.57} \approx 0.044 = 4.4\%$$

      > [!success] Answer — **$u_1 = 10\%$, $u_2 \approx 8.57\%$; $f \approx 57\%$; $d \approx 2.64\%$; steady-state $u^{ss}\approx 4.4\%$.**

      > [!note] Formula sheet — unemployment rate and flows
      > This uses the [[Macro Equation Sheet#Unemployment & labor-market dynamics|unemployment rate]] $u = \frac{U}{U+E}$ and the [[Macro Equation Sheet#Unemployment & labor-market dynamics|steady-state formula]] $u^{ss} = \frac{d}{d+f}$. The care point is the denominators for the flow probabilities: $f$ is out of month-1 **unemployment**, $d$ is out of month-1 **employment**. See [[job-finding-rate]], [[separation-rate]], [[frictional-unemployment]].
    related_terms:
      - job-finding-rate
      - separation-rate
      - frictional-unemployment
    source_doc_page: 7

  - id: q6
    title: "Q6 — Optimistic firms, pessimistic consumers: the saving-investment market"
    text: |
      An economy is in goods-market equilibrium, labor is constant, and there is no government. News leads **firms to become more optimistic about future TFP** while **consumers become more pessimistic** (about their future income). Describe the new short-run goods-market equilibrium: how do the saving ($S$) and investment ($I$) curves shift, and what happens to saving, investment, and the real interest rate?
    solution: |
      Work each curve separately, then combine.

      - **Investment curve.** The $I$-curve reflects firms' optimal investment decisions. When firms expect **higher future TFP** (and nothing else changes), future MPK is higher, so they want to invest more at any interest rate — the **$I$-curve shifts right**.
      - **Saving curve.** Pessimistic consumers expect **lower future income**, so they cut **current** consumption to prepare. Their current income is unchanged, so lower consumption means **higher saving** — the **$S$-curve shifts right**.

      Both curves shift right, so in the new equilibrium **saving and investment both rise**. The effect on the **real interest rate is ambiguous**: a rightward shift of $I$ alone pushes $r$ up, a rightward shift of $S$ alone pushes $r$ down, so the net direction depends on **which curve shifts more**.

      > [!success] Answer — **Both $S$ and $I$ shift right; saving and investment rise; the real interest rate is ambiguous (depends on the relative size of the two shifts).**

      > [!tip] Two curves shifting the same way → quantity certain, price ambiguous
      > When supply of and demand for loanable funds both shift **right**, the equilibrium quantity (saving = investment) rises unambiguously, but the price (the real interest rate) can move either way. Firm optimism works through investment demand; consumer pessimism works through precautionary saving. See [[real-interest-rate]], [[consumption-smoothing]], [[crowding-out]].
    related_terms:
      - real-interest-rate
      - consumption-smoothing
      - intertemporal-choice
    source_doc_page: 8

  - id: q7
    title: "Q7 (long) — Three-period cake-eating problem with log utility"
    text: |
      A consumer lives three periods ($0,1,2$), has initial assets $a>0$ and no income ($y_0=y_1=y_2=0$), with per-period utility $u(c_t) = \ln(c_t)$, discount factor $0<\beta<1$, and takes the real rate $r$ as given.

      1. Write the optimization problem, stating the choice variables and the lifetime budget constraint. (5 pts)
      2. Write the Lagrangian and derive the four first-order conditions. (5 pts)
      3. Derive the two Euler equations (periods 0–1 and 1–2); show the general form $\frac{1}{c_t} = \beta(1+r)\frac{1}{c_{t+1}}$. (5 pts)
      4. Solve for the optimal consumption plan $c_0, c_1, c_2$. (6 pts)
      5. Analyze the effect of a higher $\beta$ on $c_0$ (fully) and explain how you would sign $c_1, c_2$; give the intuition for $c_0$. (5 pts)
      6. Analyze the effect of a higher $r$ on $c_0, c_1, c_2$ and give the economic intuition. (6 pts)
    solution: |
      **Part 1 — the problem.** The choice variables are $c_0, c_1, c_2$. The consumer maximizes discounted lifetime utility subject to the lifetime budget constraint (present value of consumption equals initial assets, since there is no income):

      $$\max_{c_0,c_1,c_2}\ \ln(c_0) + \beta\ln(c_1) + \beta^2\ln(c_2) \quad\text{s.t.}\quad c_0 + \frac{c_1}{1+r} + \frac{c_2}{(1+r)^2} = a$$

      **Part 2 — Lagrangian and FOCs.** With multiplier $\lambda$:

      $$\mathcal{L} = \ln(c_0) + \beta\ln(c_1) + \beta^2\ln(c_2) + \lambda\left[a - c_0 - \frac{c_1}{1+r} - \frac{c_2}{(1+r)^2}\right]$$

      There are four unknowns ($c_0,c_1,c_2,\lambda$), so four FOCs:

      $$\frac{\partial\mathcal{L}}{\partial c_0} = \frac{1}{c_0} - \lambda = 0, \qquad \frac{\partial\mathcal{L}}{\partial c_1} = \beta\frac{1}{c_1} - \frac{\lambda}{1+r} = 0$$

      $$\frac{\partial\mathcal{L}}{\partial c_2} = \beta^2\frac{1}{c_2} - \frac{\lambda}{(1+r)^2} = 0, \qquad \frac{\partial\mathcal{L}}{\partial\lambda} = a - c_0 - \frac{c_1}{1+r} - \frac{c_2}{(1+r)^2} = 0$$

      **Part 3 — Euler equations.** From the first two FOCs, $\lambda = \frac{1}{c_0}$ and $\beta\frac{1}{c_1} = \frac{\lambda}{1+r} = \frac{1}{c_0}\frac{1}{1+r}$, giving

      $$\frac{1}{c_0} = \beta(1+r)\frac{1}{c_1}$$

      From the first and third FOCs, $\beta^2\frac{1}{c_2} = \frac{1}{c_0}\frac{1}{(1+r)^2}$, i.e. $\frac{1}{c_0} = \beta^2(1+r)^2\frac{1}{c_2}$. Combining with the 0–1 Euler equation gives the 1–2 Euler equation:

      $$\frac{1}{c_1} = \beta(1+r)\frac{1}{c_2}$$

      So the general structure is $\dfrac{1}{c_t} = \beta(1+r)\dfrac{1}{c_{t+1}}$.

      **Part 4 — optimal plan.** Use the Euler equations to write $c_1$ and $c_2$ in terms of $c_0$:

      $$c_1 = \beta(1+r)\,c_0, \qquad c_2 = \beta^2(1+r)^2\,c_0$$

      Substitute into the budget constraint:

      $$c_0 + \frac{\beta(1+r)c_0}{1+r} + \frac{\beta^2(1+r)^2 c_0}{(1+r)^2} = a \quad\Longrightarrow\quad (1 + \beta + \beta^2)\,c_0 = a$$

      $$\boxed{\,c_0 = \frac{a}{1+\beta+\beta^2}, \quad c_1 = \beta(1+r)\frac{a}{1+\beta+\beta^2}, \quad c_2 = \beta^2(1+r)^2\frac{a}{1+\beta+\beta^2}\,}$$

      **Part 5 — effect of higher β.** For $c_0 = \frac{a}{1+\beta+\beta^2}$: a higher $\beta$ raises the denominator, so **$c_0$ falls** — a more patient consumer defers consumption to the future. To sign $c_1$ and $c_2$ you would **differentiate their expressions with respect to $\beta$**. Doing so:

      $$\frac{\partial c_1}{\partial\beta} = (1+r)\,a\,\frac{(1+\beta+\beta^2) - \beta(1+2\beta)}{(1+\beta+\beta^2)^2} = (1+r)\,a\,\frac{1-\beta^2}{(1+\beta+\beta^2)^2} > 0 \ \text{ for } 0<\beta<1$$

      $$\frac{\partial c_2}{\partial\beta} = (1+r)^2\,a\,\frac{2\beta(1+\beta+\beta^2) - \beta^2(1+2\beta)}{(1+\beta+\beta^2)^2} = (1+r)^2\,a\,\frac{2\beta+\beta^2}{(1+\beta+\beta^2)^2} > 0$$

      So a more patient consumer **lowers current consumption and raises consumption in both future periods** — exactly the intuition: higher $\beta$ shifts weight toward the future.

      **Part 6 — effect of higher r.** Notice $r$ **does not appear** in $c_0 = \frac{a}{1+\beta+\beta^2}$, but enters **positively** in $c_1$ and $c_2$. Therefore **$c_0$ is unchanged**, while **$c_1$ and $c_2$ both rise**. Intuition: with log utility the income and substitution effects on $c_0$ cancel, so the consumer sets aside the same resources $(a - c_0)$ regardless of $r$; those savings now earn a higher return, so they finance more consumption in both future periods.

      > [!success] Answer — **$c_0 = \frac{a}{1+\beta+\beta^2}$, $c_1 = \beta(1+r)c_0$, $c_2 = \beta^2(1+r)^2 c_0$. Higher $\beta$: $c_0\downarrow$, $c_1\uparrow$, $c_2\uparrow$. Higher $r$: $c_0$ unchanged, $c_1\uparrow$, $c_2\uparrow$.**

      > [!note] Formula sheet — Euler + lifetime budget (log case)
      > The two engines are the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|Euler equation]] $u'(c_t) = \beta(1+r)u'(c_{t+1})$ and the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|lifetime budget constraint]] $\sum_t (1+r)^{-t}c_t = a$. With **log** utility current consumption is a fixed fraction of wealth ($c_0 = a/(1+\beta+\beta^2)$), immune to $r$ — the cleanest case where income and substitution effects offset. See [[euler-equation]], [[lagrangian-optimisation]], [[consumption-smoothing]], [[real-interest-rate]].
    related_terms:
      - euler-equation
      - lagrangian-optimisation
      - consumption-smoothing
    source_doc_page: 10

  - id: q8
    title: "Q8 (long) — Inelastic labor supply, TFP and θ shocks, and investment"
    text: |
      Workers have $U(C,N) = \ln(C) - \theta\dfrac{N^{1+\psi}}{1+\psi}$ ($\theta>0,\ \psi>0$), no income other than labor, budget $C = wN$. Firms produce with a standard $AF(K,N)$.

      1. Show the labor supply function is $N = \left(\dfrac{1}{\theta}\right)^{\frac{1}{1+\psi}}$ (you may start from the static FOC — no Lagrangian needed). (7 pts)
      2. What does this labor-supply curve look like? Is it increasing in $w$? What does it imply about income vs. substitution effects? (5 pts)
      3. TFP ($A$) is **permanently higher**. In the short run: (a) what happens to wages, labor input and output? (b) what happens to optimal future capital and current investment demand? (5+5 pts)
      4. Instead, $\theta$ is **permanently lower** ($A$ constant). In the short run: (a) wages, labor, output? (b) optimal future capital and investment demand? (5+5 pts)
    solution: |
      **Part 1 — labor supply function.** Start from the static first-order condition $-U_N = wU_C$. Here $U_N = -\theta N^{\psi}$ and $U_C = 1/C$, so:

      $$\theta N^{\psi} = w\frac{1}{C}$$

      Substitute the budget constraint $C = wN$:

      $$\theta N^{\psi} = w\frac{1}{wN} = \frac{1}{N} \quad\Longrightarrow\quad \theta N^{1+\psi} = 1 \quad\Longrightarrow\quad N^{1+\psi} = \frac{1}{\theta} \quad\Longrightarrow\quad N = \left(\frac{1}{\theta}\right)^{\frac{1}{1+\psi}}$$

      **Part 2 — shape of the curve.** The wage $w$ **does not appear** in $N$, so labor supply is **neither increasing nor decreasing in wages** — it is a **perfectly inelastic (vertical) labor-supply curve** at a constant $N$. Our usual test for an upward-sloping supply curve is whether the substitution effect dominates the income effect; here labor is constant, so the **income and substitution effects offset exactly**.

      **Part 3 — permanent rise in TFP.**

      (a) A higher $A$ raises the marginal product of labor, so **labor demand shifts right**. Labor supply is fixed (vertical), so equilibrium $N$ is **unchanged** while the **real wage rises**. Because $A$ also directly raises production, **output increases** (both from higher $A$ directly).

      (b) Higher future TFP raises **future MPK**. Nothing changes the user cost, so with $MPK^{f}$ up and user cost unchanged, firms want **more future capital $K^{f}$ and higher current investment**.

      **Part 4 — permanent fall in θ.**

      (a) Labor demand is **unchanged** (no change in $A$ or $K$). But a lower $\theta$ raises $\frac{1}{\theta}$, hence raises $N = (1/\theta)^{1/(1+\psi)}$ — the **labor-supply curve shifts right**. So equilibrium has **more labor $N$ and a lower wage $w$**. Because $N$ rises with technology and capital unchanged, **output increases**.

      (b) The change is permanent, so firms expect **more labor in the future** too. More future labor raises **future MPK** through capital-labor **complementarity**. The user cost is unchanged, so again **optimal future capital and investment are higher**.

      > [!success] Answer — **1. $N = (1/\theta)^{1/(1+\psi)}$. 2. Vertical (perfectly inelastic) supply; income and substitution effects exactly offset. 3. TFP↑: $w\uparrow$, $N$ unchanged, output↑; $K^{f}$ and investment↑. 4. $\theta\downarrow$: $N\uparrow$, $w\downarrow$, output↑; $K^{f}$ and investment↑.**

      > [!note] Formula sheet — static FOC + investment rule
      > Part 1 is the [[Macro Equation Sheet#Labor supply & consumption optimality|static first-order condition]] $-U_N = \frac{1-\tau_N}{1+\tau_C}wU_C$ (here $\tau_N = \tau_C = 0$); with **log** consumption utility the wage cancels and labor supply is a constant. Parts 3–4 use $MPN$ and the [[Macro Equation Sheet#Investment & the user cost of capital|investment rule]] "future MPK = user cost". See [[labor-supply]], [[income-effect]], [[marginal-product-of-capital]], [[capital-accumulation-equation]].
    related_terms:
      - labor-supply
      - income-effect
      - marginal-product-of-capital
    source_doc_page: 14

  - id: q9
    title: "Miluim — Skill-biased technological change, inequality and polarization"
    text: |
      *(Miluim question, 10 pts — only eligible students receive credit.)*

      1. Briefly explain what **skill-biased technological change (SBTC)** is and how it may relate to rising **wage inequality** and the **college wage premium**. (6 pts)
      2. Does SBTC provide a good explanation for **polarization** in the labor market? Briefly explain. (4 pts)
    solution: |
      **Part 1 — SBTC, inequality and the college premium.** Skill-biased technological change is the idea that new technology affects workers **asymmetrically**, benefiting **high-skill** workers more than low-skill workers. Through standard labor demand: technology raises the demand for skilled labor by more than for unskilled labor (it can even raise demand for one type while reducing demand for the other), which **widens the wage gap** between skilled and unskilled workers in equilibrium. To the extent that skill is proxied by education, this also matches the observation that the **wage gap between college and non-college graduates (the college wage premium) has risen** over time.

      **Part 2 — SBTC and polarization.** **Polarization** is related but distinct: wage and employment growth has been strong at **both** the **lowest-skill** and the **highest-skill** ends of the distribution, while **stagnating for the middle**. SBTC predicts a **monotone** relationship (higher skill → higher wage growth), so it **cannot fully account for polarization**, where the relationship between skill and wage growth is **non-monotone** (U-shaped). A fuller explanation needs task-based / routine-biased technological change, which hollows out routine middle-skill jobs.

      > [!success] Answer — **1. SBTC raises relative demand for skilled labor, widening wage inequality and the college premium. 2. No — polarization is non-monotone (both tails grow, the middle stagnates), which monotone SBTC cannot explain on its own.**

      > [!tip] Empirical / "discussed-in-class" question
      > No formula here — this tests the stylized facts. Key contrast: **SBTC ⟹ monotone** skill-wage relationship (explains inequality and the college premium); **polarization ⟹ non-monotone** (U-shaped), which points to routine-biased technological change instead. See [[polarization]], [[routine-biased-technological-change]], [[inequality-measures]], [[automation]].
    related_terms:
      - polarization
      - routine-biased-technological-change
      - inequality-measures
    source_doc_page: 16
---

> [!info] About this paper
> The **Moed B (second-sitting) final** for Intermediate Macro, August 2025 — **open-notes**, 3 hours, with the [[Macro Equation Sheet|formula sheet]] provided. Structure: **6 short questions** (6 points each) and **2 long questions** (32 points each), plus a **Miluim question** (10 points, for eligible students only). Unlike your real exam, this paper is **fully open-ended** (no multiple choice), so each entry below shows a "Show solution" toggle rather than answer options — but the modelling toolkit is identical. Every solution tags the formula-sheet block it draws on.
