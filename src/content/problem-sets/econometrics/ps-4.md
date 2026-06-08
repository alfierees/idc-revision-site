---
title: "PS4"
subject: econometrics
source_doc: /papers/econometrics/ps-4.pdf
tags:
  - econometrics
  - problem-set
  - panel-data
  - fixed-effects
  - two-way-fixed-effects
  - within-estimator
  - clustered-standard-errors
  - pooled-OLS
  - causal-diagram
  - omitted-variable-bias
  - policy-evaluation
  - difference-in-differences
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Primary seatbelt laws & traffic fatalities (Anderson 2008).** What is the effect of a *primary* seatbelt law on traffic fatalities per capita?
    solution: |
      A **primary** seatbelt law lets police pull over and ticket a driver *solely* for not wearing a seatbelt. A **secondary** law only allows a seatbelt ticket if the driver was already stopped for something else (e.g. speeding). Primary laws have more "teeth," so we expect them to raise belt-wearing and therefore *reduce* deaths.

      Between 1981 and 2003 the 48 contiguous US states switched on primary laws at **different times**. That staggered timing is what makes this a [[Panel Data]] problem rather than a single before/after comparison — we can compare each state to *itself* before and after its own law.

      - **Outcome:** `ln_fatal_pc` — log of traffic fatalities per capita.
      - **Treatment:** `primary` — = 1 from the year a state's primary law passes onward, 0 before.
      - **Structure:** 48 states × 23 years = **1,104 observations**, no missing values.

      > Because the outcome is in **logs**, a coefficient β on `primary` means the law changes fatalities by approximately **β × 100 %**. The exact figure is $(e^\beta - 1) \times 100\%$.

      ### The big idea behind this problem set

      This is the [[Fixed Effects]] lecture made concrete:

      1. **Pooled OLS** (Q2) — throw all 1,104 rows in together and ignore that they are repeated states. Simple, but **biased**: states that adopt primary laws differ from states that don't in fixed, unobserved ways (road design, driving culture, politics).
      2. **State fixed effects** (Q3) — give every state its own intercept $\alpha_i$. Wipes out *all* time-invariant differences between states, so the law's effect is now identified **only from within-state changes over time**. Add a linear time trend to soak up nationwide improvement.
      3. **Two-way fixed effects** (Q4) — replace the rigid linear trend with a full set of **year dummies** $\lambda_t$, absorbing *any* nationwide shock each year (recessions, airbag mandates, fuel prices). This is the most credible specification and is the panel version of [[Difference-in-Differences]].
    related_terms: ["panel-data", "fixed-effects"]
  - id: "1"
    text: |
      Causal diagram
    solution: |
      ![](/images/econometrics/ps04-causal-diagram.png)

      Three slots hang off the `primary seatbelt law → fatalities` arrow:

      - **A** has arrows pointing to **both** the law *and* fatalities → a **confounder** (a backdoor path). These **must** be controlled or β̂ is biased.
      - **B** has an arrow pointing to **fatalities only** → a pure cause of the outcome. Controlling for it doesn't fix bias but **shrinks the residual variance**, making β̂ more precise.
      - **C** points to **neither** the outcome (sits off to the side with no arrow into fatalities) → controlling for it does nothing useful, and if it were a consequence of the treatment it would be a **bad control**.

      > Rule of thumb: **A you must include, B you want to include (precision), C you should not include.**

      ### Categorisation and reasoning

      | Variable | Category | Reasoning |
      |---|---|---|
      | `secondary` | **A** | A secondary law is almost always the *political stepping-stone* to a primary law (states upgrade secondary → primary), so it predicts treatment timing; it *also* directly raises belt use and lowers fatalities. Classic confounder. Must control. |
      | `beer` | **A** | Per-capita drinking proxies a state's risk/regulation culture, which plausibly influences *both* the appetite to pass strict traffic laws *and* fatalities (drunk driving). Including it never causes bias, so include it. |
      | `totalvmt` | **B** | Vehicle-miles travelled mechanically drives fatalities (more exposure → more crashes) but does not cause a legislature to pass a seatbelt law. Pure outcome cause → include for precision. |
      | `precip` | **B** | Rain worsens road conditions and crash rates, but weather doesn't influence seatbelt politics. Outcome-only control. |
      | `snow32` | **B** | Same logic as `precip` — snow affects fatalities, not legislation. Outcome-only control. |
      | `rural_speed` | **B** | Higher rural-interstate speed limits make crashes more lethal. Plausibly A if the same safety-minded legislatures set both speed limits and belt laws, but the dominant channel is the outcome, so B. |

      No variable cleanly belongs in C — every candidate plausibly touches fatalities.

      > **Controls carried into every model below:** `secondary`, `beer`, `totalvmt`, `precip`, `snow32`, `rural_speed` (= A ∪ B). Using the same set throughout keeps Q2–Q4 comparable.
    related_terms: ["causal-diagram"]
  - id: "2"
    text: |
      Pooled OLS
    solution: |
      ### 2a — The model

      $$\log(\textit{fatal.pc}_{it}) = \beta_0 + \beta_1\,\textit{primary}_{it} + \boldsymbol{\gamma}'X_{it} + u_{it}$$

      where $X_{it}$ = {`secondary`, `beer`, `totalvmt`, `precip`, `snow32`, `rural_speed`}.

      - **Coefficient of interest:** $\beta_1$ — the average difference in log fatalities per capita between observations with vs. without a primary law.
      - "Pooled" means we **ignore the panel structure** — pretend all 1,104 rows are independent draws and estimate one common intercept.

      ```r
      lm(ln_fatal_pc ~ primary + secondary + beer + totalvmt + precip + snow32 + rural_speed,
         data = traffic.data)   # reported with HC1 robust SEs
      ```

      ### 2b — Results and why they're biased

      | Term | Coef. | Robust SE | p-value |
      |---|---:|---:|---:|
      | **primary** | **−0.200** | 0.027 | <0.001 |
      | secondary | −0.178 | 0.022 | <0.001 |
      | beer | 0.347 | 0.034 | <0.001 |
      | totalvmt | −1.6e-06 | 1.4e-07 | <0.001 |
      | precip | 0.004 | 0.006 | 0.49 |
      | snow32 | −0.419 | 0.023 | <0.001 |
      | rural_speed | 0.007 | 0.002 | <0.001 |

      *N = 1,104, R² = 0.41.*

      **Reading β̂₁:** −0.200 → primary-law states have about $(e^{-0.200} - 1) = -18\%$ lower fatalities per capita. Statistically very significant.

      **Why this is biased:** pooled OLS compares *different states* to each other. But states that adopted primary laws are not a random sample — they may differ in fixed, **unobserved** ways (road quality, terrain, urbanisation, demographics, baseline driving norms) that also affect fatalities. Those fixed traits land in the error term $u_{it}$ and are correlated with `primary` → [[Omitted Variable Bias]]. Pooled OLS confounds [[Between Variation]] (across states — contaminated) with [[Within Variation]] (within a state over time — what we want).

      The −18 % almost certainly **overstates** the true effect: it partly reflects that early-adopting states were already safer.
    related_terms: ["pooled-ols", "omitted-variable-bias"]
  - id: "3"
    text: |
      Fixed effects (FE1)
    solution: |
      $$\log(\textit{fatal.pc}_{it}) = \alpha_i + \beta_1\,\textit{primary}_{it} + \beta_2\,\textit{year}_t + \boldsymbol{\gamma}'X_{it} + u_{it}$$

      ### 3a — Interpretation

      - **$\alpha_i$ (state fixed effect):** a separate intercept for each state — absorbs **every time-invariant characteristic of that state** (geography, climate baseline, road network, long-run culture, demographics). We don't have to measure these; the dummy soaks them all up. See [[Individual Fixed Effect]], [[Within Estimator]], [[Demeaning]].
      - **$\beta_1$ (the answer):** the **within-state** effect of the law. Identified by states that *switch* `primary` from 0 → 1 during the sample: on average, how much do a state's own log fatalities change after it adopts the law, holding its fixed traits, the national trend, and controls constant.
      - **$\beta_2$ (linear time trend):** a common nationwide drift in log fatalities per year — secular improvements shared by all states (safer cars, better trauma medicine, seatbelt-culture diffusion). Stops the law's coefficient from absorbing a downward trend that was happening anyway. See [[Deterministic Time Trend]].

      ### 3b — Why cluster standard errors at the state level

      Two reasons:

      1. **Serial correlation within a state.** $u_{it}$ is correlated across years — local conditions persist. Default OLS SEs assume independence and come out **too small**, t-stats too big, p-values misleadingly tiny.
      2. **Treatment turns on at the state level** and stays on, so the information is really "48 states' worth," not "1,104 independent rows." Clustering by state delivers SEs valid under arbitrary within-state correlation and heteroskedasticity. See [[Clustered Standard Errors]].

      ```r
      feols(ln_fatal_pc ~ primary + year + secondary + beer + totalvmt + precip + snow32 + rural_speed | state,
            cluster = ~state, data = traffic.data)
      ```

      ### 3c — Results

      | Term | Coef. | Clustered SE | p-value |
      |---|---:|---:|---:|
      | **primary** | **−0.073** | 0.034 | **0.030** |
      | year (trend) | −0.010 | 0.002 | <0.001 |
      | secondary | −0.010 | 0.020 | 0.62 |
      | beer | 0.823 | 0.079 | <0.001 |
      | totalvmt | −2.0e-07 | n.s. | 0.73 |
      | precip | −0.033 | 0.006 | <0.001 |
      | snow32 | −0.003 | 0.017 | 0.85 |
      | rural_speed | 0.003 | 0.001 | 0.027 |

      *N = 1,104, within R² high (~0.93 overall with state dummies).*

      **Conclusion:** $\hat\beta_1 = -0.073, p = 0.030$ → adopting a primary seatbelt law reduces traffic fatalities per capita by about $(e^{-0.073} - 1) \approx -7\%$, significant at the 5 % level. The trend $\beta_2 = -0.010$ says fatalities fell ~1 % per year nationally regardless of the law.

      > Notice the jump from Q2: −18 % → −7 %. More than half the pooled "effect" was **between-state** confounding. Once each state is compared to itself, the credible effect is roughly a third of the naive number.
    related_terms: ["fixed-effects", "individual-fixed-effect", "clustered-standard-errors", "deterministic-time-trend"]
  - id: "4"
    text: |
      Two-way fixed effects (FE2)
    solution: |
      $$\log(\textit{fatal.pc}_{it}) = \alpha_i + \lambda_t + \beta_1\,\textit{primary}_{it} + \boldsymbol{\gamma}'X_{it} + u_{it}$$

      ### 4a — What $\lambda_t$ captures, and why prefer it over a linear trend

      - **$\lambda_t$ (year fixed effect):** one dummy per year, capturing **whatever happened nationwide in that specific year** that hit all states alike — recessions, gas-price spikes, federal airbag/CAFE rules, the 1995 repeal of the national 55 mph limit, etc. See [[Time Fixed Effects]], [[Two-Way Fixed Effects]].
      - **Why better than the linear trend in FE1:** the linear trend $\beta_2 \cdot \text{year}_t$ forces national change to be a **straight line**. Reality isn't straight — there are shocks and non-linear bends. Year dummies impose **no functional-form assumption**: they flexibly absorb *any* pattern of common annual shocks. The cost is only a handful of degrees of freedom (22 dummies), which a 1,104-row panel easily affords. This is the textbook [[Difference-in-Differences]] design: $\alpha_i$ removes fixed state differences, $\lambda_t$ removes common time shocks, and $\beta_1$ is identified from the **differential timing** of when states switch the law on.

      ### 4b — Results

      ```r
      feols(ln_fatal_pc ~ primary + secondary + beer + totalvmt + precip + snow32 + rural_speed | state + year,
            cluster = ~state, data = traffic.data)
      ```

      | Term | Coef. | Clustered SE | p-value |
      |---|---:|---:|---:|
      | **primary** | **−0.080** | 0.032 | **0.013** |
      | secondary | −0.006 | 0.022 | 0.78 |
      | beer | 0.807 | 0.082 | <0.001 |
      | totalvmt | −1.7e-07 | n.s. | 0.76 |
      | precip | −0.018 | 0.006 | 0.003 |
      | snow32 | 0.006 | 0.018 | 0.73 |
      | rural_speed | 0.004 | 0.002 | 0.055 |

      *N = 1,104.*

      **Conclusion:** $\hat\beta_1 = -0.080, p = 0.013$ → with both state and year fixed effects, a primary seatbelt law reduces traffic fatalities per capita by about $(e^{-0.080} - 1) \approx -7.7\%$, significant at the 5 % level.

      > The estimate barely moves from FE1 (−7.1 % → −7.7 %) and stays significant. That **robustness** to swapping a rigid trend for flexible year dummies is reassuring: the result isn't an artefact of how we modelled national time effects.
    related_terms: ["two-way-fixed-effects", "time-fixed-effects", "difference-in-differences"]
  - id: "summary"
    text: |
      Overall takeaway
    solution: |
      | Specification | $\hat\beta_1$ (primary) | Implied % effect | SE | p | What it controls |
      |---|---:|---:|---:|---:|---|
      | Q2 Pooled OLS | −0.200 | −18.1 % | 0.027 | <0.001 | controls only (biased) |
      | Q3 FE1 (state FE + linear trend) | −0.073 | −7.1 % | 0.034 | 0.030 | + state FE, national trend |
      | Q4 FE2 (state + year FE) | −0.080 | −7.7 % | 0.032 | 0.013 | + flexible year shocks |

      > [!success] The story
      > A clean illustration of the fixed-effects lecture: **the naive cross-sectional estimate (−18 %) is badly inflated by unobserved fixed differences between states**; once we identify off within-state changes (FE) and absorb national shocks (two-way FE), the credible causal effect of a primary seatbelt law settles at a **~7–8 % reduction in traffic fatalities per capita**.
    related_terms: []
---
