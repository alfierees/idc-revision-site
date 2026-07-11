---
title: "Moed B 2023–24 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed B (2023–24)"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-b-2023-24.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - borrowing-constraints
  - public-debt-dynamics
  - production-function
  - investment
  - business-cycles
  - purchasing-power-parity
  - intertemporal-choice
  - labor-supply
aliases:
  - Moed B 2023-24
  - Moed Bet 2023-24
  - Moed B Macro 2024
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — Liquidity constraints across the income distribution and the MPC"
    text: |
      A figure (from McKay and Wolf, 2023, *Monetary Policy and Inequality*) plots the fraction of US households defined as **liquidity (borrowing) constrained** on the vertical axis against **income quintile** on the horizontal axis (1 = bottom 20% of the income distribution, 5 = top 20%). The relationship is **negative**.

      **(a)** Briefly explain what can drive the negative relationship between income and being liquidity constrained. What can explain the fact that even among households in the top quintiles some are still liquidity constrained? *(3 pts)*

      **(b)** Using the principles of the consumption model, would you expect the **marginal propensity to consume (MPC)** to be positively or negatively correlated with income quintile? (No formal reasoning required.) *(3 pts)*
    solution: |
      **(a) Why the relationship is negative.** When household income is higher, households can simply save more and accumulate more wealth. With a larger buffer of wealth to draw on, fewer of them are liquidity constrained, so the fraction of constrained households **falls as we move up the income distribution.**

      Why some high-income households are *still* constrained: in class we described the **"wealthy hand-to-mouth"** households. They own positive amounts of wealth, but most of that wealth is held in **illiquid assets** (e.g. housing, retirement accounts) that can't easily be tapped to smooth consumption. So even at the top quintiles a slice of households behaves as if constrained.

      > [!tip] 🗣️ In plain English
      > Richer households have a **savings cushion**, so they rarely hit a borrowing wall — that's the downward slope. The rich exceptions are the **"wealthy hand-to-mouth"**: plenty of wealth, but locked up in houses and pensions they can't quickly turn into cash.

      **(b) Sign of the MPC–income relationship.** In class we showed that **liquidity-constrained consumers have a higher MPC** because they are pushed *away* from their optimal (smoothed) consumption choice — an extra dollar of income relaxes the constraint and gets spent rather than saved. Combining this with the figure (constraints concentrate at low incomes), we expect a **negative correlation between income quintile and the MPC**: the MPC is highest at the bottom of the distribution and declines with income.

      > [!tip] 🗣️ In plain English
      > Hand a constrained household an extra pound and they **spend most of it** — they were being forced to underspend. Since constraints pile up at the bottom of the income ladder, the **MPC falls as income rises**.

      > [!success] Answer — **Negative relationship (constraints fall with income); MPC is negatively correlated with income** (constrained low-income households have the highest MPC, with "wealthy hand-to-mouth" as the top-quintile exception).

      > [!tip] Empirical / "discussed-in-class" question
      > No formula here — this tests the stylized facts. Key terms: **liquidity-constrained**, **wealthy hand-to-mouth**, **MPC decreasing in income**. The intuition is that constrained households can't borrow to smooth, so they spend a larger share of any extra income. See [[borrowing-constraints]], [[consumption-smoothing]], [[heterogeneity]].
    related_terms:
      - borrowing-constraints
      - consumption-smoothing
      - heterogeneity
    source_doc_page: 2

  - id: q2
    title: "Q2 — Forecasting the change in debt-to-GDP"
    text: |
      You must forecast next year's **change in the debt-to-GDP ratio** for a country. You collect:

      - current ratio $b = 100\%$;
      - planned primary deficit $d = 4\%$ of GDP;
      - nominal interest rate on government debt $i = 5\%$;
      - expected inflation $\pi^e = 3\%$.

      In addition, 20 years ago real GDP per capita was $10{,}000$, this year it is $18{,}000$, and it is expected to grow in the future at the **same rate as the average growth over the last 20 years**.

      What is your forecast?
    solution: |
      Use the debt-dynamics equation and substitute the data:

      $$\Delta b = d + \frac{r - g}{1 + g}\, b$$

      From the question $b = 1$ and $d = 0.04$. Two inputs are not handed to you directly — the **real rate** and the **growth rate** — so back them out.

      **Real rate (Fisher).** With data on the nominal rate and expected inflation:

      $$r = i - \pi^e = 0.05 - 0.03 = 0.02$$

      **Average real growth over 20 years.** The GDP data pins down the compound growth rate:

      $$18{,}000 = 10{,}000 \times (1 + g)^{20} \quad\Longrightarrow\quad g = 1.8^{\frac{1}{20}} - 1 = 0.0298$$

      **Substitute:**

      $$\Delta b = 0.04 + \frac{0.02 - 0.0298}{1 + 0.0298} \times 1 = 0.03$$

      Given the data, the debt-to-GDP ratio will **increase by about 3 percentage points** (from $100\%$ to about $103\%$).

      > [!success] Answer — **The debt-to-GDP ratio rises by about 3 points, to roughly 103%.**

      > [!tip] 🗣️ In plain English
      > Two missing ingredients had to be dug out first: the **real rate** ($5\%$ nominal minus $3\%$ expected inflation $= 2\%$) and **growth** ($\approx 3\%$ a year, from GDP per head rising 1.8× over 20 years). Growth slightly outpaces the interest rate, which nibbles at the burden — but the $4\%$ deficit swamps that, so the debt ratio still **climbs about 3 points to ~103%**.

      > [!note] Formula sheet — debt dynamics + Fisher
      > Two sheet entries combine here: [[Macro Equation Sheet#Fiscal policy & public debt|debt dynamics]] $\Delta b = d + \frac{r-g}{1+g}b$ and the [[Macro Equation Sheet#Prices, inflation & exchange rates|Fisher equation]] $r = i - \pi^e$. The exam's game is that the data never gives $r$ or $g$ directly — get $r$ from Fisher, get $g$ from the 20-year compound-growth relation, *then* plug in. See [[public-debt-dynamics]], [[primary-deficit]], [[fisher-equation]].
    related_terms:
      - public-debt-dynamics
      - primary-deficit
      - fisher-equation
    source_doc_page: 3

  - id: q3
    title: "Q3 — Backing out TFP using the capital income share"
    text: |
      An economy has production function

      $$Y = A K^{\alpha} N^{1-\alpha}, \qquad 0 < \alpha < 1.$$

      For year $t$: GDP $= 10{,}000$ units, capital stock $K = 5{,}000$, labor input $N = 10{,}000$. To use capital, producers rent it at real rental price $R = 0.5$. What is **total factor productivity** $A$ in year $t$?

      *(Hint: which parameter is missing from your data, and how can you find it?)*
    solution: |
      To get $A$, rearrange the production function:

      $$A = \frac{Y}{K^{\alpha} N^{1-\alpha}} = \frac{10{,}000}{5{,}000^{\alpha} \times 10{,}000^{\,1-\alpha}}$$

      The missing parameter is $\alpha$. **Find it from the capital income share.** With Cobb-Douglas the exponents *are* the factor income shares, and capital's share equals rental payments over output. Using the rental rate and the capital stock:

      $$\alpha = \text{capital share} = \frac{R \times K}{Y} = \frac{0.5 \times 5{,}000}{10{,}000} = \frac{2{,}500}{10{,}000} = 0.25$$

      Substitute $\alpha = 0.25$:

      $$A = \frac{10{,}000}{5{,}000^{0.25} \times 10{,}000^{0.75}} \approx 1.19$$

      > [!success] Answer — **$\alpha = 0.25$ and TFP $A \approx 1.19$.**

      > [!tip] 🗣️ In plain English
      > The missing exponent $\alpha$ is **capital's slice of national income**: rental payments ($0.5 \times 5{,}000 = 2{,}500$) are a quarter of GDP, so $\alpha = 0.25$. With that in hand, TFP is just what's left when you divide output by the inputs — about $1.19$.

      > [!note] Formula sheet — Cobb-Douglas + capital's share
      > This uses the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas production function]] $Y = AK^{\alpha}N^{1-\alpha}$ together with the fact that under competition each exponent equals that factor's income share — capital's share is $\frac{R K}{Y} = \alpha$. The trick is recognising that the "missing" exponent is recoverable from the rental data, after which $A$ is just a plug-in. See [[cobb-douglas]], [[solow-residual]], [[labor-share]].
    related_terms:
      - cobb-douglas
      - production-function
      - solow-residual
    source_doc_page: 4

  - id: q4
    title: "Q4 — Capital tax that keeps the capital stock constant"
    text: |
      Firms invest optimally under the standard investment model:

      - Cobb-Douglas production $Y_t = 10 \times K_t^{1/3} N_t^{2/3}$;
      - current price of capital $p_k = 15$; future price of capital $p_k^{f} = 14$;
      - real interest rate $r = 4\%$; depreciation rate $\delta = 10\%$;
      - current capital stock $K = 700$; labor constant at $N = 1{,}000$.

      The government wants to pick a **capital tax rate that keeps the capital stock constant**. What tax rate achieves this *(5 pts)*, and what is the implied level of current investment *(1 pt)*?
    solution: |
      **Step 1 — investment needed to hold capital constant.** If the stock is constant, firms only have to replace depreciated capital, so investment equals depreciation:

      $$I = \delta K = 0.1 \times 700 = 70$$

      **Step 2 — set up the tax rate.** Firms choose future capital $K^{f}$ so that the **future marginal product of capital equals the user cost**. Every input is given except $\tau_K$, so this is one equation in one unknown. Since capital is held constant, $K^{f} = K = 700$ and $N^{f} = 1000$:

      $$MPK^{f} = \frac{\partial Y^{f}}{\partial K^{f}} = \frac{1}{3}\times 10 \times \left(K^{f}\right)^{-\frac{2}{3}} \left(N^{f}\right)^{\frac{2}{3}} = \frac{1}{3}\times 10 \times (700)^{-\frac{2}{3}} (1000)^{\frac{2}{3}} = 4.23$$

      The user cost, with the tax rate left as the unknown:

      $$\text{user cost} = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1 - \tau_K} = \frac{1.04 \times 15 - 0.9 \times 14}{1 - \tau_K} = \frac{3}{1 - \tau_K}$$

      **Step 3 — equate and solve for $\tau_K$:**

      $$\frac{3}{1 - \tau_K} = 4.23 \quad\Longrightarrow\quad 4.23 - 4.23\,\tau_K = 3 \quad\Longrightarrow\quad 4.23\,\tau_K = 1.23 \quad\Longrightarrow\quad \tau_K = 0.29$$

      So the capital tax rate should be about **29%**, and the implied current investment is **70 units**.

      > [!success] Answer — **$\tau_K \approx 29\%$; implied current investment $I = 70$ units.**

      > [!tip] 🗣️ In plain English
      > Keeping the capital stock steady means investment only has to cover wear and tear — **$I = \delta K = 70$**. Then the firm's rule (future MPK = user cost) has just one dial left to turn: the **tax rate**, which has to sit at about **29%** for firms to be happy holding exactly the capital they've already got.

      > [!note] Formula sheet — user cost = future MPK
      > This is the [[Macro Equation Sheet#Investment & the user cost of capital|investment rule]]: firms set $MPK^{f} = \dfrac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K}$ (the user cost). Because "keep capital constant" fixes $K^{f} = K$, the only free variable is $\tau_K$, so you solve one equation for it. Investment then comes from the [[Macro Equation Sheet#Investment & the user cost of capital|capital-accumulation equation]] $K_{t+1} = (1-\delta)K_t + I_t$ with $K_{t+1} = K_t$, giving $I = \delta K$. See [[marginal-product-of-capital]], [[depreciation]], [[capital-accumulation-equation]].
    related_terms:
      - marginal-product-of-capital
      - capital-accumulation-equation
      - depreciation
    source_doc_page: 5

  - id: q5
    title: "Q5 — Pessimism about future productivity in the goods market"
    text: |
      An economy is at its goods-market equilibrium. Consumers and firms become **pessimistic about the future level of productivity**, believing it will be lower than usual starting next period. Describe the new goods-market equilibrium. In equilibrium, will consumption and investment change **in the same direction** (both up or both down)?

      *(Assume (i) no change in the labor market, and (ii) no government.)*
    solution: |
      Analyse the **saving ($S$) curve** and the **investment ($I$) curve** in isolation, then combine.

      **Saving curve.** Consumers who expect lower future productivity expect **lower future income**. Because they smooth consumption (current consumption depends on future income as well as current income), they **raise current consumption** to spread the anticipated loss over both periods. Higher current consumption at any given $r$ means lower saving, so the **$S$ curve shifts right** (equivalently, $S = Y - C$ falls with $Y$ fixed and $C$ up).

      **Investment curve.** Firms who expect lower future productivity expect a **lower future marginal product of capital** ($A^{f}$ enters $MPK^{f}$). The user cost is unchanged, so firms choose **lower future capital and lower investment** — the **$I$ curve shifts left**.

      **New equilibrium.** With $S$ shifting right and $I$ shifting left, the **real interest rate falls with certainty**. But the two shifts push the *quantity* of saving/investment in opposite directions, so we **cannot sign the change in $S$ and $I$** without more information.

      **Consumption vs. investment.** Output is fixed by the production function ($A$, $K$, $N$ all fixed in the short run), so it does not change. With no government, $Y = C + I$; since $Y$ is constant, any rise in $C$ must be matched by a fall in $I$. Therefore **consumption and investment move in opposite directions** — here $C$ rises and $I$ falls.

      > [!success] Answer — **The real interest rate falls; consumption and investment move in opposite directions** (current consumption rises, investment falls). The change in the level of $S$ and $I$ is ambiguous.

      > [!tip] 🗣️ In plain English
      > Gloomy households spend more *now* to soften the coming pain (**saving shifts right**); gloomy firms see less payoff from machines (**investment shifts left**). Both shifts drag the **interest rate down for certain**, but they fight over the quantities. And since output can't move in the short run, $Y = C + I$ forces **consumption up and investment down — opposite directions**.

      > [!tip] Two curves, opposite shifts → price certain, quantities ambiguous
      > When the $S$ and $I$ curves shift in opposite directions the price (here the real rate) is pinned down but the quantities are not. The clean anchor for the last part is the resource constraint $Y = C + I$: with $Y$ fixed, whatever leaves investment shows up as consumption. See [[business-cycles]], [[consumption-smoothing]], [[real-interest-rate]], [[marginal-product-of-capital]].
    related_terms:
      - business-cycles
      - consumption-smoothing
      - real-interest-rate
    source_doc_page: 5

  - id: q6
    title: "Q6 — PPP GDP per capita growth and catch-up"
    text: |
      Fake data for two countries $A$ and $B$ over two years. Assume every country produces and consumes the same representative basket.

      | | Country A | Country B |
      |---|---|---|
      | **Year 1** population | 500 | 25,000 |
      | Year 1 GDP (local) | 1,500,000 | 85,000,000 |
      | Year 1 Price (local) | 5 | 4 |
      | Year 1 Price (US) | 3 | 3 |
      | **Year 2** population | 550 | 27,000 |
      | Year 2 GDP (local) | 2,000,000 | 100,000,000 |
      | Year 2 Price (local) | 6 | 5 |
      | Year 2 Price (US) | 4 | 4 |

      **(a)** Compute the **growth rate of PPP GDP per capita** for each country. *(4 pts)*
      **(b)** If these growth rates persist forever, will the **poorer country ever catch up** with the richer one? (Explain, no calculation needed.) *(2 pts)*
    solution: |
      **(a) PPP GDP per capita.** The PPP formula converts local-currency GDP to a common (US-price) basis:

      $$GDP_i^{PPP} = \frac{GDP_i^{local}}{P_i^{local}} \times P^{US}$$

      Then divide by population for per-capita terms (order doesn't matter). Working each cell:

      | | Country A | Country B |
      |---|---|---|
      | Year 1 | $\dfrac{1{,}500{,}000}{5}\times 3 \div 500 = 1{,}800$ | $\dfrac{85{,}000{,}000}{4}\times 3 \div 25{,}000 = 2{,}550$ |
      | Year 2 | $\dfrac{2{,}000{,}000}{6}\times 4 \div 550 = 2{,}424$ | $\dfrac{100{,}000{,}000}{5}\times 4 \div 27{,}000 = 2{,}963$ |

      So (rounded) $y_1^A = 1{,}800$, $y_1^B = 2{,}550$, $y_2^A = 2{,}424$, $y_2^B = 2{,}963$. Growth rates $g = \left(\frac{y_2}{y_1} - 1\right)\times 100$:

      $$g^A = \frac{2{,}424}{1{,}800} - 1 \approx 34.68\%, \qquad g^B = \frac{2{,}963}{2{,}550} - 1 \approx 16.19\%$$

      > [!tip] 🗣️ In plain English
      > Strip out local prices, re-price everything at **US prices**, then divide by heads. On that common yardstick country $A$'s living standard grew about **34.7%** and country $B$'s about **16.2%**.

      **(b) Catch-up.** Country $A$ is **poorer in both years** ($1{,}800 < 2{,}550$ and $2{,}424 < 2{,}963$) but **grows faster** ($34.68\% > 16.19\%$). Since the poorer economy compounds at a higher rate, it will eventually **catch up with — and overtake — the richer country $B$**.

      > [!tip] 🗣️ In plain English
      > $A$ is behind but running nearly twice as fast. Keep compounding at a higher rate and the gap must close — **the poorer country catches up and eventually overtakes**.

      > [!success] Answer — **$g^A \approx 34.68\%$, $g^B \approx 16.19\%$; yes, the poorer country ($A$) catches up because it grows faster.**

      > [!note] Formula sheet — PPP conversion
      > This is the [[Macro Equation Sheet#Prices, inflation & exchange rates|PPP GDP formula]] $GDP^{PPP} = \frac{\text{GDP in local currency}}{e^{pp}}$ with $e^{pp} = P_i^{local}/P^{US}$, i.e. $GDP^{PPP} = \frac{GDP^{local}}{P^{local}}\times P^{US}$, then divided by population and turned into a growth rate $g = \frac{y_2}{y_1}-1$. See [[purchasing-power-parity]], [[real-vs-nominal]], [[growth-models]].
    related_terms:
      - purchasing-power-parity
      - real-vs-nominal
      - growth-models
    source_doc_page: 6

  - id: q7
    title: "Q7 — Can lower discount factors cause recessions? Two-period CRRA consumption"
    text: |
      Economists sometimes claim that recessions are triggered by **lower discount factors**. Evaluate this using the two-period consumption model and goods-market equilibrium.

      Consumers live two periods with disposable income $y_0 > 0$, $y_1 > 0$, no initial assets, and utility from consumption only:

      $$u(c_t) = \frac{c_t^{\,1 - \frac{1}{\sigma}}}{1 - \frac{1}{\sigma}}, \qquad \sigma > 1,$$

      each period $t = 0, 1$. They discount future utility with $0 < \beta < 1$ and take $r > 0$ as given. TFP, labor and capital are constant in the short run.

      1. Write the consumer's optimization problem (objective, budget constraint, choice variables). *(6 pts)*
      2. Use the Euler equation and budget constraint to solve for the optimal plan $c_0, c_1$ as functions of $y_0, y_1, r, \beta, \sigma$. *(7 pts)*
      3. Let $s_1$ be current saving (period-0 saving). Express $s_1$ as a function of $y_0, y_1, r, \beta, \sigma$. *(3 pts)*
      4. Suppose $\beta$ is unexpectedly **lower**. Effects on current consumption and current saving? Show mathematically and explain. *(5 pts)*
      5. Describe the new short-run **goods-market equilibrium**: does the $S$ curve shift? the $I$ curve? what is the resulting equilibrium? *(6 pts)*
      6. In a typical recession GDP, consumption **and** investment all fall. **(a)** Does the model generate this in the short run from a $\beta$ shock? *(2 pts)* **(b)** What happens to future capital and output? *(3 pts)*
    solution: |
      **Part 1 — the optimization problem.** Maximise discounted lifetime utility subject to the lifetime budget constraint:

      $$\max_{c_0, c_1}\ \frac{c_0^{\,1 - \frac{1}{\sigma}}}{1 - \frac{1}{\sigma}} + \beta\,\frac{c_1^{\,1 - \frac{1}{\sigma}}}{1 - \frac{1}{\sigma}} \qquad \text{s.t.}\quad c_0 + \frac{1}{1+r}c_1 = y_0 + \frac{1}{1+r}y_1$$

      The **choice variables are $c_0$ and $c_1$**.

      > [!tip] 🗣️ In plain English
      > The set-up in one line: pick spending now ($c_0$) and later ($c_1$) to make yourself happiest, with the pot fixed at the **present value of lifetime income** $y_0 + \frac{y_1}{1+r}$.

      **Part 2 — solve with the Euler equation.** The marginal utility here is $u'(c_t) = c_t^{-1/\sigma}$. Plug both periods into the Euler equation $u'(c_0) = \beta(1+r)u'(c_1)$:

      $$c_0^{-\frac{1}{\sigma}} = \beta(1+r)c_1^{-\frac{1}{\sigma}} \quad\Longrightarrow\quad c_1^{\frac{1}{\sigma}} = \beta(1+r)c_0^{\frac{1}{\sigma}} \quad\Longrightarrow\quad c_1 = \beta^{\sigma}(1+r)^{\sigma}c_0$$

      Substitute into the budget constraint:

      $$c_0 + \frac{1}{1+r}\beta^{\sigma}(1+r)^{\sigma}c_0 = y_0 + \frac{1}{1+r}y_1 \quad\Longrightarrow\quad c_0\left[1 + \beta^{\sigma}(1+r)^{\sigma-1}\right] = y_0 + \frac{1}{1+r}y_1$$

      Therefore:

      $$\boxed{\,c_0 = \frac{1}{1 + \beta^{\sigma}(1+r)^{\sigma-1}}\left(y_0 + \frac{1}{1+r}y_1\right)\,}$$

      $$c_1 = \beta^{\sigma}(1+r)^{\sigma}c_0 = \frac{\beta^{\sigma}(1+r)^{\sigma}}{1 + \beta^{\sigma}(1+r)^{\sigma-1}}\left(y_0 + \frac{1}{1+r}y_1\right)$$

      > [!tip] 🗣️ In plain English
      > The **Euler equation** links tomorrow's spending to today's; feed that into the budget and today's consumption comes out as a fixed **fraction of lifetime wealth** — a fraction that shrinks the more patient the consumer is.

      **Part 3 — current saving.** Saving is income minus consumption, $s_1 = y_0 - c_0$:

      $$s_1 = y_0 - \frac{1}{1 + \beta^{\sigma}(1+r)^{\sigma-1}}\left(y_0 + \frac{1}{1+r}y_1\right)$$

      which can be simplified (not required) to

      $$s_1 = \left(1 - \frac{1}{1 + \beta^{\sigma}(1+r)^{\sigma-1}}\right)y_0 - \frac{1}{1 + \beta^{\sigma}(1+r)^{\sigma-1}}\times \frac{1}{1+r}\,y_1$$

      > [!tip] 🗣️ In plain English
      > Saving is simply the income you don't spend: **$s_1 = y_0 - c_0$**, with the $c_0$ from part 2 plugged straight in.

      **Part 4 — a lower $\beta$.** In the denominator of $c_0$ the term $\beta^{\sigma}$ is **increasing in $\beta$** (since $\sigma > 0$). So a **lower $\beta$ shrinks the denominator, raising $c_0$**. Current income is unchanged, so with $s_1 = y_0 - c_0$, **current saving falls**. Intuitively, a lower $\beta$ means the consumer is **less patient** — they put less relative weight on future utility — so they shift consumption toward the present, consuming more now and saving less.

      > [!tip] 🗣️ In plain English
      > A **lower $\beta$ means less patience**: the consumer front-loads life, so **$c_0$ rises and saving falls**. You can read it straight off the algebra — $\beta^{\sigma}$ sits in the denominator of $c_0$, so shrinking it pumps consumption up.

      **Part 5 — new goods-market equilibrium.** Take each curve:

      - **$I$ curve — no shift.** $\beta$ does not enter the user cost or the future marginal product of capital, so the investment curve is unaffected.
      - **$S$ curve — shifts left.** At any given $r$, consumers now want to consume more / save less (Part 4), so saving falls. (Equivalently, $Y$ and $G$ are unchanged in the short run while $C$ rises, so $S = Y - C - G$ declines.)

      With $S$ shifting left against a fixed $I$ curve, the **new equilibrium has a higher real interest rate and lower $S$ and $I$**. (The lower investment comes purely from the equilibrium adjustment: as $r$ rises, firms move *up along* the unchanged $I$ curve.)

      > [!tip] 🗣️ In plain English
      > Impatient households save less at every interest rate, so the **$S$ curve shifts left**; the $I$ curve doesn't care about $\beta$ and stays put. The new equilibrium has a **higher interest rate** and **less saving and investment**.

      **Part 6 — contrast with the data.**

      - **(a)** In the short run output $Y$ is **constant** (none of $A$, $K$, $N$ change), consumption is **higher**, and investment is **lower**. A real recession has all three *falling*, so the model **fails** to reproduce the recession pattern from a $\beta$ shock — GDP doesn't fall and consumption moves the wrong way.
      - **(b)** In the **future** period, the lower period-0 investment leaves a **lower capital stock**, which (with $A$ and $N$ unchanged) produces **lower future output**.

      > [!tip] 🗣️ In plain English
      > The punchline: an impatience shock leaves GDP flat and pushes consumption *up*, while a real recession has all three **falling** — so the story **fails in the short run**. The damage arrives later: less investment today means **less capital and lower output tomorrow**.

      > [!success] Answer — **A lower $\beta$ raises $c_0$ and lowers saving, pushing the real rate up and investment down, but leaves output up/flat and consumption higher in the short run — so the "recessions come from lower discount factors" story fails to match the data (though future capital and output do fall).**

      > [!note] Formula sheet — Euler + lifetime budget
      > The engine is the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|Euler equation and lifetime budget constraint]]: $u'(c_0) = \beta(1+r)u'(c_1)$ with $c_0 + \frac{1}{1+r}c_1 = y_0 + \frac{1}{1+r}y_1$. Standard recipe — Euler links $c_1$ to $c_0$, substitute into the budget constraint, solve for $c_0$, then read the comparative static (here w.r.t. $\beta$) off the denominator. See [[euler-equation]], [[intertemporal-choice]], [[consumption-smoothing]], [[business-cycles]].
    related_terms:
      - euler-equation
      - intertemporal-choice
      - business-cycles
    source_doc_page: 8

  - id: q8
    title: "Q8 — Labor income tax, the revenue Laffer curve, and productive spending"
    text: |
      Workers have utility over consumption $C$ and labor $N$:

      $$U(C, N) = \ln\!\left(C - \frac{1}{\psi + 1}N^{\psi + 1}\right), \qquad \psi > 0.$$

      They earn wage $w$ per unit of labor, pay a labor income tax $\tau_N > 0$, and may pay a lump-sum tax $T > 0$ or receive a transfer $T < 0$. Budget constraint: $C = (1 - \tau_N)wN - T$.

      1. Show that labor supply is $N = (1 - \tau_N)^{1/\psi}\, w^{1/\psi}$. (You may start from the general static first-order condition.) *(8 pts)*
      2. What is government **tax revenue from the labor income tax**, as a function of $\tau_N, w, \psi$? *(5 pts)*
      3. The government wants to raise labor-tax revenue. One economist says raise $\tau_N$; another says lower it.
         **(a)** With the wage **fixed** at its initial level, can you tell with certainty how revenue changes? Explain mathematically and economically. *(5 pts)*
         **(b)** Now let labor demand be standard so the **wage adjusts**. Is there a new equilibrium wage? How does it change revenue relative to (a)? Explain all sources of difference. *(5 pts)*
         **(c)** Use this to explain why the revenue-maximizing tax rate is **neither 0% nor 100%**. *(3 pts)*
      4. Now suppose new tax revenue is **invested in useful projects that immediately raise TFP** (instead of being thrown away). Is the revenue-maximizing tax rate **lower or higher** than before? Explain the labor-market differences. *(6 pts)*
    solution: |
      **Part 1 — derive labor supply.** The general static optimality condition is $-U_N = \frac{1 - \tau_N}{1 + \tau_C}\,wU_C$. With only a labor income tax ($\tau_C = 0$) this is $-U_N = (1 - \tau_N)wU_C$. Take the derivatives of $U = \ln\!\left(C - \frac{1}{\psi+1}N^{\psi+1}\right)$:

      $$U_N = \frac{1}{C - \frac{1}{\psi+1}N^{\psi+1}}\left(-N^{\psi}\right), \qquad U_C = \frac{1}{C - \frac{1}{\psi+1}N^{\psi+1}}$$

      Substitute into $-U_N = (1-\tau_N)wU_C$. The common $\frac{1}{C - \frac{1}{\psi+1}N^{\psi+1}}$ factor cancels:

      $$N^{\psi} = (1 - \tau_N)\,w \quad\Longrightarrow\quad \boxed{\,N = (1 - \tau_N)^{\frac{1}{\psi}}\, w^{\frac{1}{\psi}}\,}$$

      (This utility form is the classic "no wealth/income effect on labor supply" case — the lump-sum tax $T$ drops out of the labor-supply decision.)

      > [!tip] 🗣️ In plain English
      > Plug the utility into the static FOC and the messy log term **cancels clean out**, leaving $N = [(1-\tau_N)w]^{1/\psi}$. This utility has **no income effect** on hours — even the lump-sum tax vanishes from the labour choice.

      **Part 2 — tax revenue.** Revenue is the tax rate times the total wage bill, $\tau_N \times w \times N$:

      $$\text{Tax Revenue} = \tau_N\, w\, N = \tau_N\, w\,(1 - \tau_N)^{\frac{1}{\psi}} w^{\frac{1}{\psi}} = \tau_N\,(1 - \tau_N)^{\frac{1}{\psi}}\, w^{\,1 + \frac{1}{\psi}}$$

      > [!tip] 🗣️ In plain English
      > Revenue is just the **tax rate times the wage bill** — $\tau_N \times wN$ — with the part-1 labour-supply formula substituted in for $N$.

      **Part 3(a) — wage fixed.** Look at how revenue depends on $\tau_N$. The factor $\tau_N$ is **increasing** in $\tau_N$, but the factor $(1 - \tau_N)^{1/\psi}$ is **decreasing** in $\tau_N$ (since $\psi > 0$). These pull in opposite directions, so **you cannot sign the effect with certainty**. Economically: raising $\tau_N$ lets the government take a **larger fraction of the wage bill**, but the higher tax **lowers labor supply**, so the total wage bill being taxed shrinks. Whether revenue rises or falls depends on which effect dominates.

      **Part 3(b) — wage adjusts.** With a standard labor demand curve: (i) **labor demand does not shift** (no change in $A$ or $K$); (ii) the **labor-supply curve shifts left** because of the tax distortion (same mechanism as (a)). The new equilibrium therefore has **lower labor and a higher wage**. Relative to (a), the effect on revenue is **more positive**, for two reasons:

      - a **direct effect** — for any given labor and tax rate, a higher wage means a bigger wage bill and thus more revenue;
      - an **equilibrium effect** — as the wage rises, part of the tax's negative distortion on labor is **mitigated**, because workers "crawl back up" the new supply curve toward higher hours.

      **Part 3(c) — why the optimum is interior (not 0% or 100%).** Plug in the extremes: at **$\tau_N = 0\%$** revenue is zero (no tax); at **$\tau_N = 100\%$** revenue is also zero (labor supply collapses to zero — no one works for zero net wage). For any rate strictly between, revenue is positive. As you raise $\tau_N$ from 0, revenue **rises as long as labor doesn't fall too much**, but past some point the labor-supply contraction dominates and revenue **falls**. Hence the revenue-maximizing rate is **strictly between 0% and 100%** — this is the Laffer-curve logic.

      > [!tip] 🗣️ In plain English
      > This is the **Laffer curve**. With the wage frozen, a higher rate grabs a bigger slice of a shrinking pie — direction ambiguous. Let the wage rise in equilibrium and revenue fares **better** (bigger wage bill, and workers crawl back up the supply curve). And the extremes both raise **nothing** — 0% taxes nothing, at 100% nobody works — so the best rate sits strictly in between.

      **Part 4 — revenue recycled into TFP.** The revenue-maximizing tax rate is now **higher**. When tax proceeds raise **TFP ($A$)**, the **marginal product of labor rises**, shifting the **labor-demand curve right**. This **partially offsets** the leftward shift in labor supply caused by the tax. As a result the drop in equilibrium labor is **smaller** than before and the rise in the wage is **larger**, so the tax base holds up better as $\tau_N$ increases — pushing the revenue-maximizing rate **up** relative to the "thrown-away revenue" case.

      > [!tip] 🗣️ In plain English
      > If the tax money buys **higher TFP**, workers become more productive and labour demand shifts right — cushioning the blow from the tax. The tax base survives higher rates, so the **revenue-maximising rate rises**.

      > [!success] Answer — **$N = (1-\tau_N)^{1/\psi}w^{1/\psi}$; revenue $= \tau_N(1-\tau_N)^{1/\psi}w^{1+1/\psi}$; with the wage fixed the direction is ambiguous (Laffer trade-off), and letting the wage adjust makes higher $\tau_N$ more favourable; the revenue-maximizing rate is interior (0% and 100% both give zero); recycling revenue into TFP raises the revenue-maximizing tax rate.**

      > [!note] Formula sheet — static FOC + labor's share
      > Built on the [[Macro Equation Sheet#Labor supply & consumption optimality|static first-order condition]] $-U_N = \frac{1-\tau_N}{1+\tau_C}wU_C$ to derive $N(w)$, then revenue $= \tau_N w N$. The comparative statics run through the labor market — a tax shifts **supply** left while productivity-raising spending shifts **demand** right (via a higher $MPN = (1-\alpha)Y/N$, see [[Macro Equation Sheet#Production & factor demands|MPN]]). See [[labor-supply]], [[labor-income-tax]], [[labor-demand]], [[income-effect]].
    related_terms:
      - labor-supply
      - labor-income-tax
      - labor-demand
    source_doc_page: 11
---

> [!info] About this paper
> **Moed B (the second-sitting / "resit" final) for Intermediate Macro, 2023–24**, sat 27 March 2024. Unlike the multiple-choice format of your real exam, this paper is **entirely open-ended**: **6 short questions** (Q1–Q6, 6 points each) and **2 long multi-part questions** (Q7–Q8, 32 points each), 3 hours, open-notes with the [[Macro Equation Sheet|formula sheet]] provided. Every solution below is transcribed from the official answer key and tags the formula-sheet block it draws on. Because there are no answer options, each question renders a plain **"Show solution"** toggle rather than multiple choice.
