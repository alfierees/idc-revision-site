---
title: "PS3"
subject: macro-economics
source_doc: /papers/macro-economics/ps-3.pdf
tags:
  - macroeconomics
  - problem-set
  - cobb-douglas
  - production-function
  - labor-share
  - tfp
  - total-factor-productivity
  - growth-accounting
  - development-accounting
  - constant-returns-to-scale
  - marginal-product
  - penn-world-table
ai_drafted: true
questions:
  - id: "setup"
    text: |
      ## Background Theory — Read This First

      Before diving in, here is a self-contained explanation of the four properties production functions are usually required to satisfy, and why **Cobb–Douglas** is the workhorse choice.

      ### The Production Function

      A production function maps inputs (capital $K$, labor $L$) into output $Y$. We add a productivity shifter $A$ (TFP) that scales output up or down for given inputs:

      $$Y = A \cdot F(K, L)$$

      For Cobb–Douglas:

      $$Y = A K^{\alpha} L^{1-\alpha}, \qquad 0 < \alpha < 1$$

      The exponents $\alpha$ and $1-\alpha$ are the **output elasticities** of capital and labor respectively, and they sum to 1 (this is what gives constant returns to scale).

      ---

      ### The Four Properties of Cobb–Douglas

      | #   | Property                        | Plain meaning                                              |
      | --- | ------------------------------- | ---------------------------------------------------------- |
      | 1   | $MP_K, MP_L > 0$                | More inputs → more output                                  |
      | 2   | $MP_K, MP_L$ diminishing        | Each extra unit adds less than the one before              |
      | 3   | Complementarity                 | More of one input raises the marginal product of the other |
      | 4   | Constant returns to scale (CRS) | Doubling all inputs doubles output                         |

      ---

      ### Why the Labor Share Pins Down $\alpha$

      In a competitive economy, factors are paid their marginal products:

      $$w = MP_L, \qquad r = MP_K$$

      Total labor compensation is $w \cdot N$, and the **labor share of income** is:

      $$\text{labor share} = \frac{wL}{Y}$$

      For Cobb–Douglas with $w = (1-\alpha) Y/L$:

      $$\frac{wL}{Y} = \frac{(1-\alpha)\,Y/L \cdot L}{Y} = 1-\alpha$$

      > [!tip] Headline result
      > **Labor share $= 1-\alpha$** in Cobb–Douglas.
      > So the **average labor share in the data directly identifies $\alpha$**: $\alpha = 1 - \overline{\text{labsh}}$.

      ---

      ### Total Factor Productivity (TFP)

      Rearranging $Y = A K^{\alpha} N^{1-\alpha}$:

      $$A = \frac{Y}{K^{\alpha} N^{1-\alpha}}$$

      This is the **Solow residual** — output left unexplained after accounting for the contributions of capital and labor. It captures technology, institutions, management, etc.

      Two ways to use it in the data:

      1. **Development accounting (levels):** plug the level of $K$, $N$, $Y$, and an estimated $\alpha$ into the formula above.
      2. **Growth accounting:** differentiate the formula and use elasticities:

      $$g_A \;=\; g_Y \;-\; \alpha\, g_K \;-\; (1-\alpha)\, g_N$$
    solution: ""
    related_terms: ["production-function", "cobb-douglas", "total-factor-productivity", "labor-share", "solow-residual"]
  - id: "1"
    text: |
      **The nice properties of Cobb-Douglas — Part 1**

      In class we mentioned four properties that we typically require production functions to satisfy. Assume that the production function is $Y = AK^{\alpha}N^{1-\alpha}$, where $Y$ denotes output, $A$ denotes total factor productivity, $K$ denotes capital, $0 < \alpha < 1$. Show that:

      1. The marginal products of capital and labor are always positive.
      2. The marginal products of capital and labor are diminishing.
      3. Complementarity. For example, if the labor input increases, then the marginal product of capital is higher.
      4. Constant returns to scale.
    solution: |
      **Setup:** $Y = A K^{\alpha} N^{1-\alpha}$, with $A > 0$, $K, N > 0$, and $0 < \alpha < 1$. This question **proves the four common-sense properties** a good production function should have — and each proof is really just checking the **sign of a derivative**.

      ---

      ### Q1.1 — The marginal products are always positive

      **Marginal product of capital $MP_K$:** the partial derivative of $Y$ with respect to $K$, holding $N$ fixed.

      $$MP_K = \frac{\partial Y}{\partial K} = A\,\alpha\, K^{\alpha-1}\, N^{1-\alpha} = \alpha \cdot \frac{Y}{K}$$

      Each piece is positive: $A > 0$, $\alpha \in (0,1) > 0$, $Y/K > 0$. Therefore:

      $$\boxed{MP_K > 0}$$

      **Marginal product of labor $MP_N$:**

      $$MP_N = \frac{\partial Y}{\partial N} = A K^{\alpha}\,(1-\alpha)\, N^{-\alpha} = (1-\alpha) \cdot \frac{Y}{N}$$

      Again all factors are strictly positive:

      $$\boxed{MP_N > 0}$$

      > [!tip] 🗣️ In plain English
      > Adding more capital or more labor always increases output. There is no "saturation point" beyond which extra inputs become harmful. ✓

      ---

      ### Q1.2 — The marginal products are diminishing

      We need to show that $\partial MP_K/\partial K < 0$ and $\partial MP_N/\partial N < 0$ — a statement about the **second derivatives**.

      **Diminishing $MP_K$:** differentiate $MP_K = A\alpha K^{\alpha-1} N^{1-\alpha}$ with respect to $K$:

      $$\frac{\partial MP_K}{\partial K} = A\,\alpha\,(\alpha-1)\, K^{\alpha-2}\, N^{1-\alpha}$$

      Sign analysis: $A > 0$, $\alpha > 0$, $K^{\alpha-2} > 0$, $N^{1-\alpha} > 0$, and crucially $(\alpha - 1) < 0$ since $\alpha < 1$. Therefore:

      $$\boxed{\frac{\partial MP_K}{\partial K} < 0}$$

      **Diminishing $MP_N$:** differentiate $MP_N = A(1-\alpha) K^{\alpha} N^{-\alpha}$ with respect to $N$:

      $$\frac{\partial MP_N}{\partial N} = A\,(1-\alpha)\,(-\alpha)\, K^{\alpha}\, N^{-\alpha-1}$$

      The factor $-\alpha < 0$ and everything else is positive, so:

      $$\boxed{\frac{\partial MP_N}{\partial N} < 0}$$

      The assumption $0 < \alpha < 1$ is doing the work in both signs.

      > [!tip] 🗣️ In plain English
      > The 100th worker adds less to output than the 99th, and the 100th machine adds less than the 99th. This is the classic "law of diminishing returns" — and it's exactly what makes capital deepening alone unable to sustain growth forever. ✓

      ---

      ### Q1.3 — Complementarity (cross-partials are positive)

      We need to show that more labor raises $MP_K$, and equivalently more capital raises $MP_N$. This is the **cross-partial derivative** condition.

      $$\frac{\partial MP_K}{\partial N} = \frac{\partial}{\partial N}\left[A\alpha K^{\alpha-1} N^{1-\alpha}\right] = A\,\alpha\,(1-\alpha)\, K^{\alpha-1}\, N^{-\alpha}$$

      Sign analysis: $A > 0$, $\alpha \in (0,1)$, $(1-\alpha) > 0$, and the powers of $K, N$ are positive. Therefore:

      $$\boxed{\frac{\partial MP_K}{\partial N} > 0}$$

      By Young's theorem (mixed partials commute), the symmetric statement also holds:

      $$\frac{\partial MP_N}{\partial K} = \frac{\partial MP_K}{\partial N} > 0$$

      The first says that when $N$ increases the marginal product of capital increases; the second, that when $K$ increases the marginal product of labor increases.

      > [!tip] 🗣️ In plain English
      > Capital and labor make each other more valuable. Hand a worker a more powerful computer and they produce more — and conversely, a computer is more useful when there is a worker to operate it. This is why specialisation and capital accumulation reinforce each other. ✓

      ---

      ### Q1.4 — Constant returns to scale (CRS)

      We have to show the function is **homogeneous of degree one**: scale *both* inputs by a factor $\lambda > 0$ and check whether output also scales by $\lambda$.

      $$F(\lambda K, \lambda N) = A (\lambda K)^{\alpha} (\lambda N)^{1-\alpha}$$

      $$= A\, \lambda^{\alpha}\, K^{\alpha} \cdot \lambda^{1-\alpha}\, N^{1-\alpha}$$

      $$= \lambda^{\alpha + (1-\alpha)} \cdot A K^{\alpha} N^{1-\alpha}$$

      $$= \lambda^{1} \cdot Y \;=\; \lambda Y$$

      $$\boxed{F(\lambda K, \lambda N) = \lambda \cdot Y \quad \text{(CRS)}}$$

      > [!info] Why we want CRS
      > CRS lets us write things in **per-worker** terms cleanly: $y \equiv Y/N$ is a function of $k \equiv K/N$ alone, $y = A k^{\alpha}$. This is the foundation of the Solow growth model.

      > [!tip] 🗣️ In plain English
      > Doubling capital *and* labor exactly doubles output. The exponents $\alpha + (1-\alpha) = 1$ are what make CRS happen — this is also why the labor share equals exactly $1-\alpha$ (Euler's theorem). ✓
    related_terms: ["cobb-douglas", "production-function", "marginal-product-of-capital", "marginal-product-of-labor", "constant-returns-to-scale"]
  - id: "2"
    text: |
      **Data on labor shares**

      1. Briefly describe what is the labor share of income.
      2. Penn World Table (available at https://www.rug.nl/ggdc/productivity/pwt/) is a data set (in Excel format) that includes a few data series for many countries. In it, the series tagged `labsh` reports the labor share for each country over time. (See the legend tab for definitions of all variables.)

         Download the data on labor shares for two different countries of your choice and answer the following:

         (a) Plot the series starting 1990 until the most recent data point. Put the year on the horizontal axis and the labor share on the vertical axis.

         (b) For each country, calculate the average labor share from 1990 until the most recent year available.

         (c) Describe whether the labor share (for each country) appears to be stable or appears to involve a distinct trend.

         (d) Now assume that all countries in the world have a Cobb-Douglas production function $Y = K^{\alpha}N^{1-\alpha}$ where $K$ is capital and $N$ is labor. Assume that $\alpha$ may be different across countries. What is the value for $\alpha$ that you would assign for each country? Show mathematically how $\alpha$ is related to the labor share using the production function.
    solution: |
      I chose **United States (USA)** and **United Kingdom (GBR)** from PWT 11.0, using the series `labsh`. (The official solution uses Japan, Israel, Sweden, and the US — the method is identical, and your exact numbers will depend on your country choice.)

      ---

      ### Q2.1 — What is the labor share of income?

      The **labor share** is the total wage bill (wages times total hours of work) divided by the value of GDP — the fraction of national income paid to workers as compensation:

      $$\text{labor share} = \frac{\text{Total labor compensation}}{\text{GDP}} = \frac{wN}{Y}$$

      The remainder, $1 - \text{labor share}$, is the **capital share** — income flowing to owners of capital (interest, profits, rents). In a Cobb–Douglas world with competitive markets, this exactly identifies the production parameter $\alpha$.

      > [!info] PWT's `labsh` definition
      > "Share of labour compensation in GDP at current national prices." It corrects for the labor portion of self-employment income (otherwise the labor share would be biased downward in countries with lots of self-employment).

      > [!tip] 🗣️ In plain English
      > The **labor share** is simply the slice of GDP paid out to **workers** as wages; whatever's left goes to owners of machines and buildings. In the Cobb–Douglas world that slice is exactly $1-\alpha$, which is what makes it so useful here.

      ---

      ### Q2.2 (a) — Plot of the series

      ![](/images/macro-economics/q2-labor-share.png)

      *Both series cover 1990–2023 from PWT 11.0.*

      **What the picture shows:**

      - The **USA labor share** sits a touch above 0.60 throughout the 1990s, peaks around 2000–2001 (≈ 0.64), then drifts downward through the 2000s and 2010s. By 2023 it is at 0.568 — the lowest in the sample. This is consistent with the well-known "declining labor share" stylized fact discussed in macro literature (Karabarbounis & Neiman, 2014).
      - The **UK labor share** is more volatile and starts noticeably *below* the US (≈ 0.59 in 1990, dipping to 0.54 in 1996), then catches up by the early 2000s and converges with the US around 0.60 throughout the 2010s. By 2023, the UK labor share (0.595) is actually **above** the US (0.568).

      > [!tip] 🗣️ In plain English
      > The picture in one line: the **US** share drifts steadily **down** (~0.60 → 0.57) — the well-known "declining labor share" — while the **UK** just bounces around **~0.60** with no clear direction.

      ---

      ### Q2.2 (b) — Average labor share, 1990–2023

      I computed the simple mean of `labsh` over the 1990–2023 window:

      | Country | Years | Mean `labsh` | Std. dev. |
      |---|---|---|---|
      | **USA** | 1990–2023 (34 obs) | **0.6040** | 0.0170 |
      | **UK (GBR)** | 1990–2023 (34 obs) | **0.5942** | 0.0178 |

      So in long-run average terms, the US has paid out roughly **60.4%** of GDP to labor and the UK roughly **59.4%** — very close. (For reference, the official solution's averages over 1990–2019 are 0.57 for Japan, 0.57 for Israel, 0.54 for Sweden, and 0.61 for the US.)

      > [!tip] 🗣️ In plain English
      > Averaged over 34 years, both countries hand roughly **60%** of GDP to workers — on this measure the US and UK are near-identical.

      ---

      ### Q2.2 (c) — Stable or trending?

      | Country | Verdict | Justification |
      |---|---|---|
      | USA | **Distinct downward trend** | From ~0.62 in the early 1990s to ~0.57 in 2023; the 2000–2010 decade especially shows a clear decline. The variation is not random noise around a constant mean. |
      | UK | **Mostly stable, but volatile** | After a sharp dip in the mid-1990s and recovery, the series oscillates roughly around 0.60 from 2000 onwards. No clear long-run drift; just cyclical movement. |

      The official solution reaches a similar "mixed evidence" verdict for its four countries: some trends appear (Japan declining then stabilising, US drifting down from 2000), but the begin-to-end differences are not huge, so treating the labor share as roughly constant and using its **average as a proxy** is a reasonable approximation.

      > [!warning] Why this matters
      > The Cobb–Douglas model assumes labor share is *constant* (since $1-\alpha$ is a parameter, not a variable). The US data show this assumption is at best a long-run approximation — there is a real downward trend that Cobb–Douglas cannot generate. This is a research frontier in macro: explanations include rising market power, automation, and globalisation.

      > [!tip] 🗣️ In plain English
      > Verdict: the **US is genuinely trending down**, the **UK is just noisy around a flat line**. That's slightly awkward for Cobb–Douglas, which assumes the share is a fixed constant — but the drift is small enough that using the average is fine.

      ---

      ### Q2.2 (d) — Mapping labor share to $\alpha$ (and the math)

      **Derivation.** Start from the production function $Y = K^{\alpha} N^{1-\alpha}$. Under perfect competition, firms' optimality means the wage equals the marginal product of labor:

      $$w = MP_N = (1-\alpha) \frac{Y}{N}$$

      Total labor compensation is $wN = (1-\alpha) \cdot Y$. Divide by GDP:

      $$\frac{wN}{Y} = 1-\alpha \quad \Longrightarrow \quad \boxed{\alpha = 1 - \text{labor share}}$$

      So I assign each country's $\alpha$ to be one minus its average labor share:

      | Country | Avg. labor share $(1-\alpha)$ | Implied $\alpha$ |
      |---|---|---|
      | **USA** | 0.6040 | **$\alpha_{\text{USA}} = 0.3960$** |
      | **UK (GBR)** | 0.5942 | **$\alpha_{\text{GBR}} = 0.4058$** |

      > [!example] Interpreting $\alpha$
      > The US's slightly *lower* $\alpha$ (0.396 vs 0.406) means a slightly higher share of income goes to labor than in the UK. Both numbers cluster around the textbook "one-third capital, two-thirds labor" benchmark. The official solution's side note applies here too: measured labor shares come out slightly lower than the class benchmark, highlighting how hard these variables are to measure — different datasets attribute compensation and hours differently.

      > [!tip] 🗣️ In plain English
      > Since labor share $= 1-\alpha$, you get $\alpha$ by just **flipping it**. Both countries land near **$\alpha \approx 0.40$** — close to the textbook "one-third to capital, two-thirds to labor" rule.
    related_terms: ["labor-share", "cobb-douglas", "marginal-product-of-labor", "production-function", "penn-world-table"]
  - id: "3"
    text: |
      **Total Factor Productivity and Development Accounting**

      Our production model assumed that there exists a Total Factor Productivity component (TFP, in short), which is exogenous and scales productivity up or down for given levels of capital and labor input. As we mentioned, there are many factors that may affect TFP. The purpose of this question is to use real data and attempt to measure TFP from real data.

      1. Use the Penn World Table data that you downloaded in the previous question. Pick two countries and use the following series for each country:
         - Real GDP at constant 2017 national prices (in mil 2017US$), series code `rgdpna`
         - Capital stock at constant 2017 national prices (in mil 2017US$), series code `rnna`
         - TFP at constant national prices (2017=1), series code `rtfpna`
         - Number of persons engaged (in millions), `emp`
         - Average annual hours worked by persons engaged, series code `avh`
         - Human capital index, series code `hc`
         - Share of labour compensation in GDP at current national prices, series code `labsh`

      2. For each of the two countries calculate the implied TFP from 1990 to the latest period you have, as follows:
         - Calculate the average labor share for each country. Denote this by $1-\alpha_i$ for each country $i$.
         - Assume that the production function is Cobb-Douglas: $Y_t = A_t K_t^{\alpha} N_t^{1-\alpha}$. Use this formula to compute TFP as follows: $A_t = \frac{Y_t}{K_t^{\alpha} N_t^{1-\alpha}}$, where $K_t$ is the capital stock for country $i$; $N_t$ is the labor input for country $i$, computed as the product of the number of people engaged and the average hours of work; for each country use the $\alpha$ that you calculated before.
         - Compute the correlation between the resulting TFP series and the one reported in the dataset (series `rtfpna`). Suppose that the procedure we performed is accurate — do you *expect* the correlation to be high or low? In your data, is it high? low? positive? negative?

      3. *(TA session)* The rest is for discussion in the TA session; no need to submit:
         - What happens if you change the weights that you assign to capital and labor such that both countries have the same coefficient?
         - What happens if you change the weights that you assign to capital and labor such that they are allowed to change by country and year using the labor share data?
         - Show mathematically that if you were using the production function above, but the true/actual production function includes one more factor of production, then measuring TFP based on capital and labor alone will be inaccurate.
    solution: |
      **Series used (PWT 11.0):**

      | Series | Variable name | Unit |
      |---|---|---|
      | `rgdpna` | Real GDP at constant 2017 national prices | mil. 2017 USD |
      | `rnna` | Capital stock at constant 2017 national prices | mil. 2017 USD |
      | `rtfpna` | TFP at constant national prices | index, 2017=1 |
      | `emp` | Persons engaged | millions |
      | `avh` | Average annual hours per worker | hours/year |
      | `hc` | Human capital index | index |
      | `labsh` | Labor share | share, [0,1] |

      **Construction of labor input:** $N_t = \text{emp}_t \times \text{avh}_t$ (total hours worked).

      I use the same two countries as in Q2 (**USA** and **UK**). The official solution uses the UK and Switzerland — same procedure, and your exact numbers will depend on your country choice.

      ---

      ### Q3.1 — Computing implied TFP

      Using each country's average labor share to set $\alpha$ as in Q2.2(d):

      $$A_t \;=\; \frac{Y_t}{K_t^{\alpha}\, N_t^{1-\alpha}}$$

      with $\alpha_{\text{USA}} = 0.3960$ and $\alpha_{\text{GBR}} = 0.4058$.

      I computed $A_t$ for every year 1990–2023 and compared it to PWT's own `rtfpna` series.

      **Implied TFP plots (each normalised to 2017 = 1 for comparability with `rtfpna`):**

      ![](/images/macro-economics/q3-tfp-usa.png)

      ![](/images/macro-economics/q3-tfp-gbr.png)

      > [!tip] 🗣️ In plain English
      > **Productivity (TFP)** is the **leftover** — the part of a country's output you *can't* explain from its machines and hours worked alone. Rearranging the production formula isolates that leftover as $A$, and we've just computed it for every year from 1990 to 2023.

      ---

      ### Q3.2 — Correlation with PWT's `rtfpna`

      | Country | Correlation $\rho(A_t^{\text{implied}},\; \text{rtfpna}_t)$ |
      |---|---|
      | **USA** | **0.9951** |
      | **UK (GBR)** | **0.9001** |

      > [!tip] Should we expect high or low correlation?
      > **High.** `rtfpna` is PWT's own TFP calculation using a presumably more accurate accounting of the same underlying $Y, K, N$ data. If the Cobb–Douglas approximation is good, our simpler calculation should track it closely. The differences come from (i) $\alpha$: PWT allows more flexible factor shares, ours uses a fixed average; (ii) PWT's labor input includes a **human capital** correction via `hc`, ours does not; (iii) PWT uses more sophisticated capital aggregation.

      **What the data show:**

      - **USA: 0.995.** Essentially identical movements — the two series track each other almost perfectly. The level differs (because we omit the human-capital adjustment), but the *direction and magnitude of changes* line up.
      - **UK: 0.900.** Still high but visibly looser. Looking at the GBR plot, my implied series rises faster than `rtfpna` in the 1990s, suggesting that part of the apparent productivity gain in our calculation is actually being absorbed by human capital growth in PWT's series. After ≈2007 the two series move in lockstep.
      - The official solution (UK and Switzerland) finds correlations around **0.95** for each — the same qualitative result. Note it does not *have* to work this way: for some countries the Cobb–Douglas approximation is not as good, and the correlation will be lower.

      > [!warning] Levels vs. growth
      > The vertical *level* of the implied TFP series is not directly meaningful — it depends on how we normalise. What matters is *changes over time*, and these are what the correlation captures.

      > [!tip] 🗣️ In plain English
      > Our home-made TFP series matches the official one **almost perfectly for the US** (correlation 0.995) and **strongly for the UK** (0.90). Both measure the same thing; the small gaps come from the official series also adjusting for workers' **education** (human capital), which we skip.

      ---

      ### Q3.3 — TA-session discussion items

      #### (a) Same coefficient for both countries

      Changing the weights mechanically changes the implied TFP series, but it is hard to say in advance exactly *how*. Suppose two researchers make the same calculation with different parameters — researcher 1 uses $\alpha$ and researcher 2 uses $\gamma \neq \alpha$. Using the **same data**, they get:

      $$A_t = \frac{Y_t}{K_t^{\alpha} N_t^{1-\alpha}}, \qquad \tilde{A}_t = \frac{Y_t}{K_t^{\gamma} N_t^{1-\gamma}}$$

      Different weights give different TFP series. In practice, imposing a common $\alpha$ on my two countries barely moves anything, because $\alpha_{\text{USA}} \approx 0.396$ and $\alpha_{\text{GBR}} \approx 0.406$ are already nearly identical. It matters more when the countries' labor shares genuinely differ — in the official solution's pair, the UK average is 0.5828 but Switzerland's is 0.6801, so forcing a common coefficient visibly shifts the Swiss series.

      > [!tip] 🗣️ In plain English
      > Swap in a common weight and the TFP series changes — by a little if the two countries' labor shares were similar anyway (US vs UK), by a lot if they weren't (UK vs Switzerland).

      #### (b) Time-varying weights ($\alpha_t = 1 - \text{labsh}_t$ each year)

      Allowing $\alpha$ to change by country and year again produces a different implied series. The official solution's finding is striking: of all the options tried, the **time-varying $\alpha$ delivers the *least* correlated series with `rtfpna`** — the year-by-year version whipsaws around while the constant-share versions track PWT closely. Two possible readings:

      - The labor share moves period to period for reasons that are *not* changes in production technology (cyclical fluctuations, measurement), so feeding it in year-by-year injects noise into the TFP calculation.
      - Alternatively, it may indicate that when the PWT project computes `rtfpna` it assumes an $\alpha$ that does not change every period, so a constant-$\alpha$ replication naturally matches it best.

      > [!tip] 🗣️ In plain English
      > Letting the weight jump around every year makes the TFP series *worse*, not better — the yearly wiggles in the labor share are mostly noise, not real changes in technology.

      #### (c) Missing a factor of production (the proof)

      Suppose the *true* production function includes a third factor $R$:

      $$Y = A K^{\alpha} N^{\beta} R^{1-\alpha-\beta}, \qquad 0 < \alpha, \beta < 1, \quad 0 < \alpha + \beta < 1$$

      (so the function still satisfies the four properties from Q1). TFP *should* then be measured as:

      $$A_t = \frac{Y_t}{K^{\alpha} N^{\beta} R^{1-\alpha-\beta}}$$

      But if we only account for capital and labor, with $\gamma$ as our calibration for the capital share, we measure:

      $$\tilde{A}_t = \frac{Y_t}{K^{\gamma} N^{1-\gamma}}$$

      Take the ratio of true to measured TFP:

      $$\frac{A}{\tilde{A}} = \frac{\dfrac{Y_t}{K^{\alpha} N^{\beta} R^{1-\alpha-\beta}}}{\dfrac{Y_t}{K^{\gamma} N^{1-\gamma}}} = \frac{K^{\gamma-\alpha}\, N^{\beta+\gamma-1}}{R^{1-\alpha-\beta}}$$

      This ratio is not 1 in general, so $\tilde{A} \neq A$: the measurement is inaccurate, with **two sources of bias** — one from the **missing factor** $R$, and one from the **mis-specified parameters** ($\gamma$ vs. the true $\alpha, \beta$).

      The broad point: it is very challenging to account accurately for all factors, their quality, and the intensity with which they are used. The official solution illustrates this with human capital as the "missing factor" $R$: including it improves the accounting exercise, and some form of *constant* labor share stays closest to the PWT calculations. (A serious ongoing attempt to measure US TFP is the San Francisco Fed's TFP project.)

      > [!tip] 🗣️ In plain English
      > Leave an input like **education** out of the calculation and your "productivity" number **secretly absorbs it** — plus any error in your chosen weights. So whenever the workforce gets more educated, measured TFP overstates the true *technology* gains — exactly the pattern in the UK chart above.
    related_terms: ["total-factor-productivity", "development-accounting", "solow-residual", "cobb-douglas", "production-function", "penn-world-table"]
  - id: "4"
    text: |
      *(extra, not for submission)* **Growth Accounting**

      Use the data on the same two countries that you chose in the previous question, and calculate TFP growth according to the growth accounting formula:

      - Calculate the cumulative growth rate of GDP, capital, and labor. For example: $g_Y = \frac{\Delta Y}{Y} = \frac{Y_{2019} - Y_{1990}}{Y_{1990}}$.
      - Assume that the elasticity of output with respect to capital is $\epsilon_{Y,K} = \alpha$ and the elasticity of output with respect to labor is $\epsilon_{Y,N} = 1-\alpha$.
      - Calculate the growth rate of TFP according to: $g_A = g_Y - \epsilon_{Y,K} \times g_K - \epsilon_{Y,N} \times g_N$

      Compare this growth rate to the growth rate of TFP that results from the development accounting exercise from the previous question.
    solution: |
      Using the same two countries and the formula:

      $$g_A = g_Y - \alpha\, g_K - (1-\alpha)\, g_N$$

      with cumulative growth rates from 1990 to 2023 (33-year span):

      | Country      | $g_Y$ (cum) | $g_K$ (cum) | $g_N$ (cum) | $\alpha$ | Implied $g_A$ (cum) | Annualised $g_A$ |
      | ------------ | ----------- | ----------- | ----------- | -------- | ------------------- | ---------------- |
      | **USA**      | 125.5%      | 104.9%      | 31.7%       | 0.396    | **64.7%**           | **1.52% / yr**   |
      | **UK (GBR)** | 83.0%       | 101.3%      | 18.0%       | 0.406    | **31.2%**           | **0.83% / yr**   |

      For comparison, PWT's `rtfpna` cumulative growth 1990 → 2023 is **22.7%** for the USA and **6.7%** for the UK.

      The official solution runs the same exercise for its pair (1990–2019): for the **UK**, $g_Y = 0.77$, $g_K = 0.86$, $g_N = 0.18$ gives $g_A = 0.31$ (31%), versus 24.5% from the development accounting exercise; for **Switzerland**, $g_Y = 0.61$, $g_K = 0.84$, $g_N = 0.19$ gives $g_A = 0.21$ (21%), versus 17.7% from development accounting. The two procedures give *similar but not identical* answers — growth accounting is a linear approximation of the level-based calculation, so the gap widens over long horizons with large cumulative changes.

      **Why the gap between our numbers and PWT's `rtfpna`?** PWT adjusts labor input by human capital `hc`, so part of what *we* attribute to TFP, PWT attributes to labor. Both procedures are mechanically valid; they answer slightly different questions:

      - **Our $g_A$** measures: "Output growth in excess of *raw* capital and labor growth."
      - **PWT's `rtfpna`**: "Output growth in excess of capital and *human-capital-adjusted* labor growth."

      > [!info] Reading the headline
      > The US grew faster (in $Y$, $K$, $N$, and TFP) than the UK over this 33-year window. Roughly half of US output growth is accounted for by capital and labor accumulation, and half by TFP. For the UK, capital and labor accumulation explain even more — TFP growth has been notably weaker (the so-called "UK productivity puzzle").

      > [!tip] 🗣️ In plain English
      > This splits output **growth** into three parts: growth from **more machines**, growth from **more labor**, and the **leftover** — productivity growth. The US out-grew the UK on every measure, including productivity (~1.5%/yr vs ~0.8%/yr — the famous "UK productivity puzzle"), and our number looks bigger than PWT's because PWT credits some growth to a more-educated workforce rather than to pure productivity.
    related_terms: ["growth-accounting", "total-factor-productivity", "solow-residual", "development-accounting", "penn-world-table"]
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Problem Set 1]] — value added, GDP, deflators, CPI
- [[Problem Set 2]] — life-cycle consumption with log utility
- Theoretical links: [[Cobb-Douglas Production Function]], [[Marginal Product of Capital]], [[Marginal Product of Labor]], [[Constant Returns to Scale]], [[Total Factor Productivity]], [[Growth Accounting]], [[Labor Share]], [[Penn World Table]]

---

## 📊 Source Files

- Data: PWT 11.0 (`pwt110.xlsx`), Penn World Table, Groningen Growth and Development Centre.
- Analysis script: `analysis.py` in the working folder — reproduces every number above.
- Output CSVs (in working folder): `labor_share_summary.csv`, `tfp_USA.csv`, `tfp_GBR.csv`, `tfp_correlations.csv`, `growth_accounting.csv`.
