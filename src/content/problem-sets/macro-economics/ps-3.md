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
      Background Theory — Read This First
    solution: |
      Before diving in, here is a self-contained explanation of the four properties production functions are usually required to satisfy, and why **Cobb–Douglas** is the workhorse choice.

      ### The Production Function

      A production function maps inputs (capital $K$, labor $L$) into output $Y$. We add a productivity shifter $A$ (TFP) that scales output up or down for given inputs:

      $$Y = A \cdot F(K, L
      )$$

      For Cobb–Douglas:

      $$Y = A K^{\alpha} L^{1-\alpha}, \qquad 0 < \alpha < 1$$

      The exponents $\alpha$ and $1-\alpha$ are the **output elasticities** of capital and labor respectively, and they sum to 1 (this is what gives constant returns to scale).

      ---

      ### The Four Properties of Cobb Douglas

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
    related_terms: ["production-function", "cobb-douglas", "total-factor-productivity", "labor-share", "solow-residual"]
  - id: "1"
    text: |
      Cobb–Douglas Properties (mathematical proofs)
    solution: |
      **Setup:** $Y = A K^{\alpha} N^{1-\alpha}$, with $A > 0$, $K, N > 0$, and $0 < \alpha < 1$.

      > [!tip] 🗣️ In plain English
      > This question **proves the four common-sense properties** a good production function should have — for the Cobb–Douglas formula. Each proof is really just checking the **sign of a derivative**.
      >
      > - **Q1.1 (more is better):** Adding more machines *or* more workers always raises output — the marginal products are positive. No "too much" point.
      > - **Q1.2 (diminishing returns):** Each extra machine or worker adds **less** than the one before. The 100th worker helps less than the 99th.
      > - **Q1.3 (they help each other):** More capital makes each worker more productive, and more workers make each machine more useful. Capital and labor are **complements**.
      > - **Q1.4 (constant returns to scale):** Double *both* inputs and output **exactly doubles** — because the two exponents add up to 1.

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

      > [!info] 🗣️ In plain English
      > Adding more capital or more labor always increases output. There is no "saturation point" beyond which extra inputs become harmful. ✓

      ---

      ### Q1.2 — The marginal products are diminishing

      We need to show that $\partial MP_K/\partial K < 0$ and $\partial MP_N/\partial N < 0$.

      **Diminishing $MP_K$:** differentiate $MP_K = A\alpha K^{\alpha-1} N^{1-\alpha}$ with respect to $K$:

      $$\frac{\partial MP_K}{\partial K} = A\,\alpha\,(\alpha-1)\, K^{\alpha-2}\, N^{1-\alpha}$$

      Sign analysis: $A > 0$, $\alpha > 0$, $K^{\alpha-2} > 0$, $N^{1-\alpha} > 0$, and crucially $(\alpha - 1) < 0$ since $\alpha < 1$. Therefore:

      $$\boxed{\frac{\partial MP_K}{\partial K} < 0}$$

      **Diminishing $MP_N$:** differentiate $MP_N = A(1-\alpha) K^{\alpha} N^{-\alpha}$ with respect to $N$:

      $$\frac{\partial MP_N}{\partial N} = A\,(1-\alpha)\,(-\alpha)\, K^{\alpha}\, N^{-\alpha-1}$$

      The factor $-\alpha < 0$ and everything else is positive, so:

      $$\boxed{\frac{\partial MP_N}{\partial N} < 0}$$

      > [!info] 🗣️ In plain English
      > The 100th worker adds less to output than the 99th, and the 100th machine adds less than the 99th. This is the classic "law of diminishing returns" — and it's exactly what makes capital deepening alone unable to sustain growth forever. ✓

      ---

      ### Q1.3 — Complementarity (cross-partials are positive)

      We need to show that more labor raises $MP_K$, and equivalently more capital raises $MP_N$. This is the **cross-partial derivative** condition.

      $$\frac{\partial MP_K}{\partial N} = \frac{\partial}{\partial N}\left[A\alpha K^{\alpha-1} N^{1-\alpha}\right] = A\,\alpha\,(1-\alpha)\, K^{\alpha-1}\, N^{-\alpha}$$

      Sign analysis: $A > 0$, $\alpha \in (0,1)$, $(1-\alpha) > 0$, and the powers of $K, N$ are positive. Therefore:

      $$\boxed{\frac{\partial MP_K}{\partial N} > 0}$$

      By Young's theorem (mixed partials commute), the symmetric statement also holds:

      $$\frac{\partial MP_N}{\partial K} = \frac{\partial MP_K}{\partial N} > 0$$

      > [!info] 🗣️ In plain English
      > Capital and labor make each other more valuable. Hand a worker a more powerful computer and they produce more — and conversely, a computer is more useful when there is a worker to operate it. This is why specialisation and capital accumulation reinforce each other. ✓

      ---

      ### Q1.4 — Constant returns to scale (CRS)

      Scale all inputs by a factor $\lambda > 0$ and check whether output also scales by $\lambda$.

      $$F(\lambda K, \lambda N) = A (\lambda K)^{\alpha} (\lambda N)^{1-\alpha}$$

      $$= A\, \lambda^{\alpha}\, K^{\alpha} \cdot \lambda^{1-\alpha}\, N^{1-\alpha}$$

      $$= \lambda^{\alpha + (1-\alpha)} \cdot A K^{\alpha} N^{1-\alpha}$$

      $$= \lambda^{1} \cdot Y \;=\; \lambda Y$$

      $$\boxed{F(\lambda K, \lambda N) = \lambda \cdot Y \quad \text{(CRS)}}$$

      > [!info] 🗣️ In plain English
      > Doubling capital *and* labor exactly doubles output. The exponents $\alpha + (1-\alpha) = 1$ are what make CRS happen — this is also why the labor share equals exactly $1-\alpha$ (Euler's theorem). ✓

      > [!tip] Why we want CRS
      > CRS lets us write things in **per-worker** terms cleanly: $y \equiv Y/N$ is a function of $k \equiv K/N$ alone, $y = A k^{\alpha}$. This is the foundation of the Solow growth model.
    related_terms: ["cobb-douglas", "production-function", "marginal-product-of-capital", "marginal-product-of-labor", "constant-returns-to-scale"]
  - id: "2"
    text: |
      Labor Shares: USA & UK
    solution: |
      I chose **United States (USA)** and **United Kingdom (GBR)** from PWT 11.0, using the series `labsh`.

      > [!tip] 🗣️ In plain English
      > This question uses **real-world data** to measure the slice of national income that goes to **workers** (as opposed to owners of machines and buildings), for the US and UK — then turns that slice into the model's capital exponent $\alpha$.
      >
      > - **Q2.1 (what it is):** The labor share is the fraction of GDP paid out as wages; whatever's left goes to capital. In this model that fraction is exactly $1-\alpha$.
      > - **Q2.2 a–c (the picture):** Plot both countries from 1990–2023. The **US** share drifts steadily **down** (~0.60 → 0.57) — the well-known "declining labor share." The **UK** bounces around **~0.60** with no clear trend.
      > - **Q2.2 d (get $\alpha$):** Since labor share $=1-\alpha$, just flip it: both countries land near **$\alpha\approx0.40$** — close to the textbook "one-third to capital, two-thirds to labor" rule.

      ---

      ### Q2.1 — What is the labor share of income?

      The **labor share** is the fraction of national income paid to workers as compensation (wages, salaries, benefits, plus the labor-income portion of self-employed earnings):

      $$\text{labor share} = \frac{\text{Total labor compensation}}{\text{GDP}} = \frac{wN}{Y}$$

      The remainder, $1 - \text{labor share}$, is the **capital share** — income flowing to owners of capital (interest, profits, rents). In a Cobb–Douglas world with competitive markets, this exactly identifies the production parameter $\alpha$.

      > [!info] PWT's `labsh` definition
      > "Share of labour compensation in GDP at current national prices." It corrects for the labor portion of self-employment income (otherwise the labor share would be biased downward in countries with lots of self-employment).

      ---

      ### Q2.2 (a) — Plot of the series

      ![](/images/macro-economics/q2-labor-share.png)

      *Both series cover 1990–2023 from PWT 11.0.*

      **What the picture shows:**

      - The **USA labor share** sits a touch above 0.60 throughout the 1990s, peaks around 2000–2001 (≈ 0.64), then drifts downward through the 2000s and 2010s. By 2023 it is at 0.568 — the lowest in the sample. This is consistent with the well-known "declining labor share" stylized fact discussed in macro literature (Karabarbounis & Neiman, 2014).
      - The **UK labor share** is more volatile and starts noticeably *below* the US (≈ 0.59 in 1990, dipping to 0.54 in 1996), then catches up by the early 2000s and converges with the US around 0.60 throughout the 2010s. By 2023, the UK labor share (0.595) is actually **above** the US (0.568).

      ---

      ### Q2.2 (b) — Average labor share, 1990–2023

      I computed the simple mean of `labsh` over the 1990–2023 window:

      | Country | Years | Mean `labsh` | Std. dev. |
      |---|---|---|---|
      | **USA** | 1990–2023 (34 obs) | **0.6040** | 0.0170 |
      | **UK (GBR)** | 1990–2023 (34 obs) | **0.5942** | 0.0178 |

      So in long-run average terms, the US has paid out roughly **60.4%** of GDP to labor and the UK roughly **59.4%** — very close.

      ---

      ### Q2.2 (c) — Stable or trending?

      | Country | Verdict | Justification |
      |---|---|---|
      | USA | **Distinct downward trend** | From ~0.62 in the early 1990s to ~0.57 in 2023; the 2000–2010 decade especially shows a clear decline. The variation is not random noise around a constant mean. |
      | UK | **Mostly stable, but volatile** | After a sharp dip in the mid-1990s and recovery, the series oscillates roughly around 0.60 from 2000 onwards. No clear long-run drift; just cyclical movement. |

      > [!warning] Why this matters
      > The Cobb–Douglas model assumes labor share is *constant* (since $1-\alpha$ is a parameter, not a variable). The US data show this assumption is at best a long-run approximation — there is a real downward trend that Cobb–Douglas cannot generate. This is a research frontier in macro: explanations include rising market power, automation, and globalisation.

      ---

      ### Q2.2 (d) — Mapping labor share to $\alpha$ (and the math)

      **Derivation.** Start from the production function $Y = K^{\alpha} N^{1-\alpha}$. Under perfect competition, the wage equals the marginal product of labor:

      $$w = MP_N = (1-\alpha) \frac{Y}{N}$$

      Total labor compensation is $wN = (1-\alpha) \cdot Y$. Divide by GDP:

      $$\frac{wN}{Y} = 1-\alpha \quad \Longrightarrow \quad \boxed{\alpha = 1 - \text{labor share}}$$

      So I assign each country's $\alpha$ to be one minus its average labor share:

      | Country | Avg. labor share $(1-\alpha)$ | Implied $\alpha$ |
      |---|---|---|
      | **USA** | 0.6040 | **$\alpha_{\text{USA}} = 0.3960$** |
      | **UK (GBR)** | 0.5942 | **$\alpha_{\text{GBR}} = 0.4058$** |

      > [!example] Interpreting $\alpha$
      > The US's slightly *lower* $\alpha$ (0.396 vs 0.406) means a slightly higher share of income goes to labor than in the UK. Both numbers cluster around the textbook "one-third capital, two-thirds labor" benchmark.
    related_terms: ["labor-share", "cobb-douglas", "marginal-product-of-labor", "production-function"]
  - id: "3"
    text: |
      Implied TFP & Development Accounting
    solution: |
      **Series used (PWT 11.0):**

      | Series | Variable name | Unit |
      |---|---|---|
      | `rgdpna` | Real GDP at constant 2017 national prices | mil. 2017 USD |
      | `rnna` | Capital stock at constant 2017 national prices | mil. 2017 USD |
      | `rtfpna` | TFP at constant national prices | index, 2017=1 |
      | `emp` | Persons engaged | millions |
      | `avh` | Average annual hours per worker | hours/year |
      | `labsh` | Labor share | share, [0,1] |

      **Construction of labor input:** $N_t = \text{emp}_t \times \text{avh}_t$ (total hours worked).

      > [!tip] 🗣️ In plain English
      > **Productivity (TFP)** is the part of a country's output you *can't* explain from its machines and workers alone — the **leftover**. Here you compute that leftover from the data and check it against the official published series.
      >
      > - **Q3.1 (compute it):** Rearrange the production formula to isolate $A$ (the leftover), and calculate it for every year.
      > - **Q3.2 (does it match?):** Almost perfectly for the **US** (correlation 0.995) and strongly for the **UK** (0.90). Both measure the same thing; the small gaps come from the official series also adjusting for workers' **education** (human capital).
      > - **Q3.3 (the catch):** If you leave out an input like education, your "productivity" number **secretly absorbs it** — so measured TFP overstates true *technology* gains whenever the workforce gets more educated.

      ---

      ### Q3.1 — Computing implied TFP

      Using each country's average labor share to set $\alpha$ as in Q2.2(d):

      $$A_t \;=\; \frac{Y_t}{K_t^{\alpha}\, N_t^{1-\alpha}}$$

      with $\alpha_{\text{USA}} = 0.3960$ and $\alpha_{\text{GBR}} = 0.4058$.

      I computed $A_t$ for every year 1990–2023 and compared it to PWT's own `rtfpna` series.

      **Implied TFP plots (each normalised to 2017 = 1 for comparability with `rtfpna`):**

      ![](/images/macro-economics/q3-tfp-usa.png)

      ![](/images/macro-economics/q3-tfp-gbr.png)

      ---

      ### Q3.2 — Correlation with PWT's `rtfpna`

      | Country | Correlation $\rho(A_t^{\text{implied}},\; \text{rtfpna}_t)$ |
      |---|---|
      | **USA** | **0.9951** |
      | **UK (GBR)** | **0.9001** |

      > [!tip] Should we expect high or low correlation?
      > **High.** Both series try to measure the same object (the Solow residual) using the same underlying $Y, K, N$ data. The differences come from (i) $\alpha$: PWT's `rtfpna` allows time-varying labor shares, ours uses a fixed average; (ii) PWT's labor input includes a **human capital** correction via `hc`, ours does not; (iii) PWT uses more sophisticated capital aggregation. Despite these differences, the underlying drivers (output growth net of input growth) are identical — so we expect high correlation.

      **What the data show:**

      - **USA: 0.995.** Essentially identical movements — the two series track each other almost perfectly. The level differs (because we omit the human-capital adjustment), but the *direction and magnitude of changes* line up.
      - **UK: 0.900.** Still high but visibly looser. Looking at the GBR plot, my implied series rises faster than `rtfpna` in the 1990s, suggesting that part of the apparent productivity gain in our calculation is actually being absorbed by human capital growth in PWT's series. After ≈2007 the two series move in lockstep.

      > [!warning] Levels vs. growth
      > The vertical *level* of the implied TFP series is not directly meaningful — it depends on how we normalise. What matters is *changes over time*, and these are what the correlation captures.

      ---

      ### Q3.3 — Discussion items (TA session, sketch only)

      **(a) What if both countries used the same $\alpha$?** Replacing each country's $\alpha$ with a common value (e.g. $\alpha = 0.4$) barely moves the implied TFP series here, because both $\alpha$'s already sit near 0.40. In a comparison between, say, the US and a country with much higher self-employment or very different industrial structure, this would matter much more.

      **(b) What if we let $\alpha_t$ vary year by year?** Using $\alpha_t = 1 - \text{labsh}_t$ each year produces an implied TFP series even closer to PWT's `rtfpna` — because that is essentially what `rtfpna` already does (Tornqvist-style aggregation with time-varying shares).

      **(c) Bias from omitted factor.** Suppose the *true* function is $Y = A^* K^{\alpha} N^{\beta} H^{\gamma}$ (where $H$ is e.g. human capital and $\alpha + \beta + \gamma = 1$), but we estimate TFP using only $K$ and $N$ with weights $\alpha$ and $1-\alpha = \beta + \gamma$:

      $$A^{\text{measured}} = \frac{Y}{K^{\alpha} N^{1-\alpha}} = \frac{A^* K^{\alpha} N^{\beta} H^{\gamma}}{K^{\alpha} N^{\beta+\gamma}} = A^* \cdot \frac{H^{\gamma}}{N^{\gamma}} = A^* \cdot \left(\frac{H}{N}\right)^{\gamma}$$

      So $A^{\text{measured}}$ confounds true productivity $A^*$ with **human capital per worker** raised to the power $\gamma$. Whenever $H/N$ rises (e.g. as workers become more educated), our measure overstates the rise in *technological* TFP — exactly the pattern visible in the UK chart.
    related_terms: ["total-factor-productivity", "development-accounting", "solow-residual", "cobb-douglas", "production-function"]
  - id: "4"
    text: |
      Growth Accounting (extra, not for submission)
    solution: |
      Using the same two countries and the formula:

      $$g_A = g_Y - \alpha\, g_K - (1-\alpha)\, g_N$$

      with cumulative growth rates from 1990 to 2023 (33-year span):

      > [!tip] 🗣️ In plain English
      > Instead of levels, this splits output **growth** into three parts: growth from **more machines**, growth from **more labor**, and the **leftover** — productivity growth.
      >
      > - **The numbers:** The US grew faster than the UK on every measure, including productivity (**~1.5%/yr vs ~0.8%/yr**). Roughly *half* of US growth came from productivity and half from piling up capital and labor.
      > - **The UK puzzle:** The UK's productivity growth was notably weak — the famous "**UK productivity puzzle**."
      > - **Why our number looks bigger than PWT's:** PWT credits some of the growth to a **more-educated workforce**, so it counts less as pure productivity than our simpler calculation does.

      | Country      | $g_Y$ (cum) | $g_K$ (cum) | $g_N$ (cum) | $\alpha$ | Implied $g_A$ (cum) | Annualised $g_A$ |
      | ------------ | ----------- | ----------- | ----------- | -------- | ------------------- | ---------------- |
      | **USA**      | 125.5%      | 104.9%      | 31.7%       | 0.396    | **64.7%**           | **1.52% / yr**   |
      | **UK (GBR)** | 83.0%       | 101.3%      | 18.0%       | 0.406    | **31.2%**           | **0.83% / yr**   |

      For comparison, PWT's `rtfpna` cumulative growth 1990 → 2023 is **22.7%** for the USA and **6.7%** for the UK.

      **Why the gap between development accounting and growth accounting in PWT?** PWT's `rtfpna` adjusts labor input by human capital `hc`, so part of what *we* attribute to TFP, PWT attributes to labor. Both procedures are mechanically valid; they answer slightly different questions:

      - **Our $g_A$** measures: "Output growth in excess of *raw* capital and labor growth."
      - **PWT's `rtfpna`**: "Output growth in excess of capital and *human-capital-adjusted* labor growth."

      > [!info] Reading the headline
      > The US grew faster (in $Y$, $K$, $N$, and TFP) than the UK over this 33-year window. Roughly half of US output growth is accounted for by capital and labor accumulation, and half by TFP. For the UK, capital and labor accumulation explain even more — TFP growth has been notably weaker (the so-called "UK productivity puzzle").
    related_terms: ["growth-accounting", "total-factor-productivity", "solow-residual"]
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
