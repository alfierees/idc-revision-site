---
title: "PS3"
subject: econometrics
source_doc: /papers/econometrics/ps-3.pdf
tags:
  - econometrics
  - problem-set
  - OLS
  - time-series
  - event-study
  - serial-correlation
  - HAC
  - newey-west
  - difference-in-means
  - causal-diagram
  - policy-evaluation
  - air-quality
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Driving restrictions & air quality (Davis 2008).** What is the causal effect of the *Hoy No Circula* (HNC) driving restriction on ground-level NOₓ emissions in Mexico City?
    solution: |
      HNC (introduced Nov 20 1989) bans most cars from driving one weekday per week based on their license plate's last digit — preventing roughly 20% of cars from being used on any given weekday.

      - **Outcome:** `log_nox` (log of daily mean NOₓ across all monitoring stations).
      - **Treatment indicator:** `hnc` (= 1 if date ≥ Nov 20 1989).
      - **Data:** daily, ~8 years (1986–1993), `davis2008_daily.csv`.
    related_terms: []
  - id: "1"
    text: |
      Background & causal diagram
    solution: |
      ### 1a — Why might HNC reduce / fail to reduce pollution?

      *Why it should work:*

      - HNC removes ~20% of cars from roads on any weekday → fewer combustion sources → lower NOₓ emissions directly.

      *Why it might fail (behavioural responses):*

      - **Second car purchase:** households buy an additional (often older, dirtier) car so they always have one available — net emissions could *rise*. Davis (2008) documents this directly.
      - **Modal shift** to taxis/buses/motorcycles — higher-emission per-passenger vehicles offset gains.
      - **Temporal shifting:** people shift discretionary trips to weekends when the ban doesn't apply.
      - **Exemptions:** newer cars (post-1993 model year) eventually exempted, eroding the policy's reach.

      The punchline of Davis (2008): NOₓ did *not* fall — and may have risen.

      ### 1b — Causal diagram

      ```
      HNC ──────────────────────────────────────────────► NOₓ levels
                                                              ▲
      Weather (tmp, rh, wsp) ─────────────────────────────────┤
      Seasonality (month-of-year, day-of-week) ───────────────┤
      Long-run trend (vehicle stock growth, t) ────────────────┘

      HNC ──► Behavioural substitution (car purchases, modal shifts) ──► NOₓ
      ```

      - **Weather → NOₓ:** wind disperses pollutants; temperature inversions trap them; humidity affects particle formation.
      - **Seasonality → NOₓ:** Mexico City's basin geography causes winter thermal inversions (cold dense air traps pollution). NOₓ peaks in winter, drops in summer.
      - **DOW → NOₓ:** weekday commuting creates a Mon–Fri peak; weekends are noticeably lower.
      - **Long-run trend → NOₓ:** vehicle fleet grew through the 1980s–90s, creating a secular upward trend. **This is a key confounder** — the post-1989 period has more cars regardless of HNC.
      - The behavioural-substitution path (HNC → car purchases → NOₓ) is why the policy might *backfire*.

      ### 1c — Why can't we just compare average NOₓ before vs. after Nov 20 1989?

      Confounders evolve over time. A simple before/after comparison attributes *any* post-1989 change in NOₓ entirely to HNC. But multiple things changed simultaneously:

      1. **Secular upward trend:** the vehicle fleet was growing → NOₓ would have risen even without HNC.
      2. **Seasonality:** Nov 20 falls in winter, when NOₓ is naturally elevated. The post-period is partly winter; the pre-period ends in autumn.
      3. **Weather shocks:** an unusually cold or still winter inflates post-HNC NOₓ independently of the policy.
      4. **Other concurrent policies:** Mexico City introduced additional environmental regulations around this period.

      > Conclusion: the post-period is not a valid counterfactual without controlling for trend, season, and weather. We need to model what NOₓ *would have been* absent HNC.
    related_terms: ["causal-diagram"]
  - id: "2"
    text: |
      Baseline model — HNC only
    solution: |
      ### 2a — Estimate and interpret β̂₁

      $$\log(NO_x)_t = \beta_0 + \beta_1 HNC_t + u_t$$

      ```r
      lm(log_nox ~ hnc, data = df)
      ```

      - Log-linear → β̂₁ is approximately the proportional change in NOₓ when HNC = 1.
      - Exact % effect = $(e^{\hat\beta_1} - 1) \times 100\%$.
      - **Expected sign:** *positive* (higher NOₓ after HNC) — counter-intuitive but driven by uncontrolled confounders (rising vehicle stock, seasonal patterns).
      - **Caveat:** this estimate is biased upward because it confounds HNC with the secular trend and seasonal effects. Not a credible causal estimate.

      ### 2b — Plot log(NOₓ) over time

      ```r
      plot(df$date, df$log_nox)
      abline(v = as.Date("1989-11-20"))
      ```

      Describe: visible **upward secular trend** from 1986 → ~1989–90, then a possible levelling. Strong **seasonal oscillations** every year (winter peaks, summer troughs). No visible drop right at Nov 20 1989 — which motivates the need for controls.
    related_terms: []
  - id: "3"
    text: |
      Seasonality (month + day-of-week)
    solution: |
      ### 3a — Average log(NOₓ) by month-of-year

      `tapply(df$log_nox, df$month, mean, na.rm = TRUE)` → bar/line chart.

      Expected: **higher in winter (Nov–Feb)** because Mexico City sits in a 2,240m basin and winter temperature inversions trap pollutants near the ground. **Lower in summer (Jun–Sep)** because the rainy season brings convective mixing and washes out pollutants. U-shaped curve across months.

      ### 3b — Average log(NOₓ) by day-of-week

      `tapply(df$log_nox, df$dow, mean, na.rm = TRUE)`. Clear weekday peak (Mon–Fri) from commuting traffic; noticeable weekend dip (Sat–Sun). Validates using DOW fixed effects — the variation is large and systematic.

      ### 3c — Baseline + seasonality model

      $$\log(NO_x)_t = \beta_0 + \beta_1 HNC_t + \sum_{m=2}^{12}\gamma_m \mathbf{1}[\text{month}=m]_t + \sum_{d=1}^{6}\delta_d \mathbf{1}[\text{dow}=d]_t + u_t$$

      ```r
      lm(log_nox ~ hnc + factor(month) + factor(dow), data = df)
      ```

      Each month dummy absorbs the average level of log(NOₓ) specific to that month — so β̂₁ is estimated from variation *within a given month* across years. The DOW dummies similarly absorb the weekday/weekend pattern.

      **Expected change vs 2a:** β̂₁ falls in magnitude (or changes sign). The naive estimate was capturing seasonal and day-of-week variation; once those are held fixed, the HNC effect looks different.
    related_terms: []
  - id: "4"
    text: |
      Distributed lag in weather
    solution: |
      ### 4a — Contemporaneous weather controls

      Add `tmp`, `rh`, `wsp` (all at time $t$) to the Q3c model.

      $$\log(NO_x)_t = \beta_0 + \beta_1 HNC_t + \text{season dummies} + \beta_{tmp}tmp_t + \beta_{rh}rh_t + \beta_{wsp}wsp_t + u_t$$

      Expected signs:

      - **`wsp` (wind speed): negative** — wind disperses and dilutes pollution.
      - **`rh` (humidity): ambiguous** — likely positive or near zero.
      - **`tmp` (temperature): ambiguous** — higher temps → more photochemical activity (could increase secondary NOₓ formation) but also more atmospheric convection.

      ### 4b — Adding lagged weather (`tmp_l1`, `rh_l1`, `wsp_l1`)

      Why yesterday's weather affects today's NOₓ:

      - **Atmospheric persistence:** pollutants don't instantaneously clear; calm conditions yesterday mean residual NOₓ is still suspended today.
      - **Nocturnal boundary layer:** overnight, a shallow inversion layer forms close to the ground; yesterday's evening conditions set up the morning's deep inversion before traffic even starts.
      - **Wind trends:** multi-day weather patterns make yesterday's wind a strong predictor of today's dispersal capacity.

      Check: do the contemporaneous β̂ coefficients change much when lags are added? Significant changes suggest the contemporaneous variables were partly proxying for persistent conditions captured better by the lags.
    related_terms: ["distributed-lag-model"]
  - id: "5"
    text: |
      Adding a time trend
    solution: |
      ### 5a — Linear time trend

      Add `t` (days since Jan 1 1986) to the Q4a model.

      $$\log(NO_x)_t = \beta_0 + \beta_1 HNC_t + \text{season dummies} + \beta_{tmp}tmp_t + \beta_{rh}rh_t + \beta_{wsp}wsp_t + \beta_t \cdot t + u_t$$

      `t` captures the slow, continuous drift in NOₓ over the full 1986–1993 window — primarily growth in the vehicle fleet and gradual changes in fuel quality and engine technology. This is a confound because HNC = 1 is perfectly collinear with the second half of the sample. Without `t`, the coefficient on HNC absorbs some of the secular trend.

      **Expected: β̂₁ should become smaller in magnitude** (or flip negative) once the trend is controlled — the upward drift was previously inflating the naive estimate.

      ### 5b — Comparison table

      | Specification | β̂₁ | SE(β̂₁) | Adj. R² |
      |---|---|---|---|
      | 2a: Baseline (HNC only) | | | |
      | 3c: + Season (month + DOW) | | | |
      | 4a: + Weather (contemporaneous) | | | |
      | 5a: + Time trend ($t$) | | | |

      Discussion:

      - Adj. R² should jump sharply when seasonal dummies are added — they explain a huge fraction of daily NOₓ variation.
      - β̂₁ likely falls (in absolute value) and may change sign as controls are added — classic omitted-variable bias being removed step by step.
      - 5a is the most credible single-equation estimate; the sign and significance of β̂₁ here is the headline result.
    related_terms: ["deterministic-time-trend"]
  - id: "6"
    text: |
      Serial correlation & HAC standard errors
    solution: |
      ### 6a — Why might there be serial correlation?

      Daily time-series. Tomorrow's pollution correlates with today's because:

      - The atmosphere has **physical persistence** (pollutants don't disappear overnight).
      - **Weather is autocorrelated** (warm spells, cold fronts last multiple days).
      - Any **unmodelled seasonal or trend component** leaves autocorrelated residuals.

      Consequence: OLS assumes errors are uncorrelated. If they aren't, OLS standard errors are **too small**, t-stats are **too large**, and p-values are **misleadingly low** — we over-reject the null.

      ### 6b — Test for serial correlation

      ```r
      library(lmtest)
      bgtest(model_trend, order = 7)   # Breusch-Godfrey test, up to 7 lags
      acf(residuals(model_trend))       # Visual check: are lags 1–7 significant?
      ```

      - Breusch-Godfrey is preferred over Durbin-Watson here (DW only tests lag-1; BG handles multiple lags and works with lagged regressors).
      - Expected finding: strong serial correlation at lags 1–3+ (daily time series almost always show this).

      ### 6c — Newey-West (HAC) standard errors

      ```r
      library(sandwich)
      library(lmtest)
      coeftest(model_trend, vcov = NeweyWest(model_trend))
      ```

      Newey-West standard errors correct for *both* heteroskedasticity and autocorrelation in the residuals. They are generally **larger** than OLS SEs.

      **Key question:** does the t-statistic on β̂₁ remain significant after correcting for serial correlation? If it drops below 2, you cannot reject $H_0: \beta_1 = 0$ — HNC had no detectable effect on NOₓ.
    related_terms: ["serial-correlation", "hac-standard-errors"]
  - id: "7"
    text: |
      Event study
    solution: |
      ### 7a — Define estimation and observation periods

      - **Estimation period:** Jan 1 1986 – Nov 19 1989 (~3.9 years of pre-policy data).
      - **Observation period:** Nov 20 1989 – Dec 31 1993 (~4.1 years of post-policy data).

      The pre-period is long enough to estimate seasonal, weather, and trend parameters reliably (4 complete annual cycles). Using *only* pre-period data avoids contaminating the "normal" model with any post-HNC behavioural changes. The post-period is long enough to detect delayed effects (e.g. gradual car purchases as behavioural response).

      ### 7b — Fit pre-period model (without HNC)

      ```r
      df_pre <- subset(df, hnc == 0)
      model_event <- lm(log_nox ~ t + factor(month) + factor(dow) + tmp + rh + wsp,
                        data = df_pre)
      ```

      Drop `hnc` because it has no variation in the pre-period (always = 0) — collinear with the intercept.

      ### 7c — Compute abnormal pollution ($AP_t$)

      $$AP_t = \log(NO_x)_t - \widehat{\log(NO_x)}_t$$

      ```r
      df$log_nox_hat <- predict(model_event, newdata = df)
      df$AP         <- df$log_nox - df$log_nox_hat
      ```

      $AP_t$ = the difference between *actual* NOₓ and what the pre-period model predicts given observed weather, season, and trend. What's left over that can't be explained by "business as usual"? Plot `AP` against `date` with a vertical line at 1989-11-20.

      ### 7d — Anticipation and effect

      | What you see | What it means |
      |---|---|
      | $AP_t \approx 0$ in pre-period | Model fits pre-period well; no systematic pre-event deviation |
      | $AP_t$ deviates *before* Nov 20 1989 | **Anticipation** — households started adjusting behaviour before the policy |
      | $AP_t < 0$ after Nov 20 1989 | HNC *reduced* pollution relative to trend (genuine policy effect) |
      | $AP_t \approx 0$ after Nov 20 1989 | HNC had no effect on NOₓ |
      | $AP_t > 0$ after Nov 20 1989 | HNC may have *backfired* (substitution increased total emissions) |

      Davis (2008) finding: expect $AP_t \approx 0$ or slightly positive in the post-period.

      ### 7e — Compare event-study estimate to β̂₁ from 5a

      - **Event study:** `mean(df$AP[df$hnc == 1], na.rm = TRUE)` — average abnormal pollution in post-period.
      - **Regression:** β̂₁ from 5a.

      Both should tell a similar story — they use the same control variables, just different identification strategies (out-of-sample prediction vs. within-sample regression). Any discrepancy reflects how each approach constructs the counterfactual.
    related_terms: ["event-study", "estimation-period", "observation-period", "abnormal-returns"]
  - id: "8"
    text: |
      Discussion paragraph
    solution: |
      Structure your paragraph around these three moves:

      1. **Summarise the finding:** "Across all specifications, the coefficient on HNC is [sign/magnitude] and [significant/insignificant] at the 5% level after correcting for serial correlation (Newey-West SE = [value]). The event study confirms this: average abnormal pollution in the post-period is [value], indicating [effect or no effect]."

      2. **Behavioural implication:** "Since NOₓ is emitted *directly* by motor vehicles, a null (or positive) effect implies that drivers circumvented the restriction — most likely by purchasing additional vehicles, shifting to exempt or older vehicles, or rerouting trips to unrestricted days. The 20% reduction in vehicles on any given day did not translate to a 20% reduction in total vehicle-kilometres travelled."

      3. **Policy implication:** "License-plate rotation policies may be ineffective or counterproductive in cities with growing middle classes and easy access to used-car markets. More robust alternatives include congestion pricing (which creates a continuous financial disincentive), fuel taxes, mandatory catalytic converter retrofits, or strict vehicle-age bans."
    related_terms: []
---
