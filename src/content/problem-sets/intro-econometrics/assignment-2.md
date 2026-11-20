---
title: "Assignment 2"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-2.pdf
tags:
  - intro-econometrics
  - assignment
  - OLS
  - functional-form
  - log-log
  - log-level
  - elasticity
  - marginal-effect
  - money-supply
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Level-level model (wages vs education).** Consider the R output (from the `newdata` object of HW1) of the regression of `wage_per_hour` against `schooly`.

      Report the estimation results as a formula and interpret the slope parameter.
    solution: |
      $$
      \widehat{\text{wage\_per\_hour}} = -17.577 + 5.097\cdot\text{schooly}
      $$

      $\hat\beta_1 = 5.097$: holding everything else constant, one additional year of schooling is associated with a **\$5.10 per hour** higher predicted wage. Both sides are in natural units, so the slope *is* the marginal effect, and it is **constant**: the model imposes the same dollar reward for 8 to 9 years as for 17 to 18 years.
    related_terms: ["ols-estimation", "simple-linear-regression", "marginal-effect"]
    source_doc_page: 1
  - id: "1b"
    text: |
      The scatterplot in the assignment includes the estimated level-level model. Do you think the relationship looks linear?
    solution: |
      **No.** There is a clear upward trend but strong [[Heteroskedasticity|heteroskedasticity]]. At low schooling (0 to 10 years) wages are clustered tightly near zero; as education rises the **spread in wages grows**, with some very high outliers. The central tendency also curves upward, so the straight line over-predicts in the middle and under-predicts at the top.

      The fanning spread is the visual cue that the level-level form is mis-specified and that a **log of wage** will fit better.
    related_terms: ["functional-form", "heteroskedasticity", "model-misspecification"]
    source_doc_page: 1
  - id: "1c"
    text: |
      For the estimated level-level model, what is the predicted hourly wage for an individual with 11 years of education? What about 17 years? What about no education?
    solution: |
      A prediction is just "plug $x$ into the fitted line".

      $$
      \widehat{\text{wage}}(11) = -17.577 + 5.097(11) = 38.49
      $$

      $$
      \widehat{\text{wage}}(17) = -17.577 + 5.097(17) = 69.07
      $$

      $$
      \widehat{\text{wage}}(0) = -17.577 = -17.58
      $$

      The "no education" prediction is just the intercept and comes out **negative**, which is economically nonsensical. It is an **extrapolation** far outside the data range (nobody in the sample has 0 years of schooling), so treat it as the line's mathematical anchor, not a real worker.
    related_terms: ["prediction", "ols-estimation"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Log-level model.** The new variable `ln_wage` is defined in the assignment as the natural log of hourly wage, with a follow-up step that handles `-Inf` values.

      What does the R code do? Why is it necessary to include it before estimating the log-level model?
    solution: |
      ```r
      newdata$ln_wage <- log(newdata$wage_per_hour)   # natural log of hourly wage
      # then: find rows where ln_wage == -Inf and replace with NA
      ```

      `log()` creates a **new column** holding $\ln(\text{wage})$ for every row (R's `log()` is the natural log, base $e$, which is what the percentage interpretation relies on). It must run **before** estimation because `lm()` can only regress on variables that already exist in the data frame, so the transformed dependent variable has to be built first.

      The catch: $\log(0) = -\infty$, so any observation with a **zero wage** becomes `-Inf`. The follow-up step finds where `ln_wage = -Inf` and replaces it with `NA`. This is necessary because OLS **cannot run with `-Inf` values**; converting them to `NA` lets R drop those rows cleanly.
    related_terms: ["log-level-model", "functional-form"]
    source_doc_page: 2
  - id: "2b"
    text: |
      The scatterplot in the assignment shows log hourly wage against years of education. Does the relationship look linear?
    solution: |
      **Yes, more so than the level plot.** Taking logs compresses the extreme values at the top of the wage distribution, reduces the influence of high-wage outliers, and stabilises the vertical spread. The result is a clearer, straighter upward trend with more even scatter.

      That improvement is the whole motivation for the transformation: a constant **percentage** return to education is closer to the truth than a constant **dollar** return.
    related_terms: ["log-level-model", "functional-form", "heteroskedasticity"]
    source_doc_page: 2
  - id: "2c"
    text: |
      The regression of `ln_wage` against `schooly` is reported in the assignment. Interpret the slope.
    solution: |
      $$
      \widehat{\ln(\text{wage})} = 2.7368 + 0.0823\cdot\text{schooly}
      $$

      $\hat\beta_1 = 0.0823$ is a **semi-elasticity**: one extra year of schooling is associated with approximately a $100 \times 0.0823 = 8.23\%$ rise in hourly wage (using $\ln(1+p)\approx p$ for small $p$). This is the classic **return to a year of education**.
    related_terms: ["log-level-model", "marginal-effect", "elasticity"]
    source_doc_page: 2
  - id: "2d"
    text: |
      For the regression in (c), what is the predicted hourly wage for an individual with 11 years of education? What about 17? What about no education?
    solution: |
      The regression predicts $\ln(\text{wage})$, so to get a wage you must **exponentiate**: $\widehat{\text{wage}}(s) = \exp(\hat\beta_0 + \hat\beta_1 s)$.

      $$
      \widehat{\text{wage}}(11) = e^{2.7368 + 0.0823(11)} = e^{3.6421} = 38.17
      $$

      $$
      \widehat{\text{wage}}(17) = e^{2.7368 + 0.0823(17)} = e^{4.1359} = 62.54
      $$

      $$
      \widehat{\text{wage}}(0) = e^{2.7368} = 15.44
      $$

      > [!warning] Don't forget the $\exp(\cdot)$
      > Reporting the log as if it were a wage is the single most common error on this part.

      Contrast with the level-level model: here the "no education" prediction is a sensible **\$15.44 per hour**, not a negative number. The log form refuses to predict negative wages.
    related_terms: ["prediction", "log-level-model"]
    source_doc_page: 2
  - id: "2e"
    text: |
      For the regression in (c), what is the marginal effect of a year of education on hourly wage at the sample average hourly wage?

      (This question is tricky. Hint: recall that the regression passes through the sample averages, and that $\log(\bar x) \neq \overline{\log(x)}$.)
    solution: |
      Differentiate the fitted relationship $\ln(\text{wage}) = \hat\beta_0 + \hat\beta_1 s$. Since $\dfrac{d\ln(\text{wage})}{ds} = \dfrac{1}{\text{wage}}\dfrac{d\,\text{wage}}{ds} = \hat\beta_1$,

      $$
      \frac{d\,\text{wage}}{ds} = \hat\beta_1 \cdot \text{wage}
      $$

      So the marginal effect **depends on the wage level**; it is not constant. The hint's two facts:

      1. OLS makes the line pass through the point of means: $\overline{\ln(\text{wage})} = \hat\beta_0 + \hat\beta_1 \bar s$.
      2. $\log(\bar x) \neq \overline{\log(x)}$, so the log of the mean is **not** the mean of the logs.

      The wage the line predicts "at the average" is therefore the **geometric mean** $\exp(\overline{\ln(\text{wage})})$, not the arithmetic mean:

      $$
      \frac{d\,\text{wage}}{ds}\bigg|_{\text{mean}} = \hat\beta_1 \cdot \exp\!\big(\overline{\ln(\text{wage})}\big) = 0.0823 \cdot \exp\!\big(\overline{\ln(\text{wage})}\big)
      $$

      > [!warning] The trap
      > People grab the arithmetic mean wage $\bar W$. Because $\exp(\overline{\ln x}) \le \bar x$ (Jensen's inequality), using $\bar x$ **overstates** the marginal effect.

      > [!note] What was submitted
      > The submitted answer evaluated this at the average wage $\bar W$, giving $\text{ME} = 0.0823\,\bar W$, i.e. 8.23% of the average wage. The geometric-mean version above is the refinement the hint is pointing at.
    related_terms: ["marginal-effect", "log-level-model", "conditional-mean"]
    source_doc_page: 2
  - id: "3a"
    text: |
      **Sampling distribution of the OLS estimator.** Show that the variance of the OLS intercept estimator is equal to

      $$
      \operatorname{Var}(\hat\beta_0) = \sigma_u^2\left[\frac{1}{N} + \frac{\bar X^2}{\sum_i (X_i - \bar X)^2}\right]
      $$

      Make sure to explain each step.
    solution: |
      Work under the classical assumptions (linear model, exogeneity, homoskedasticity $\operatorname{Var}(u_i) = \sigma_u^2$, independent errors). Write $S_{XX} = \sum_i (X_i - \bar X)^2$.

      **Step 1: the estimators as linear combinations of $Y$.** The slope estimator is

      $$
      \hat\beta_1 = \frac{\sum_i (X_i - \bar X)(Y_i - \bar Y)}{S_{XX}} = \sum_i w_i Y_i, \qquad w_i = \frac{X_i - \bar X}{S_{XX}}
      $$

      and the intercept satisfies $\hat\beta_0 = \bar Y - \hat\beta_1 \bar X$.

      **Step 2: write $\hat\beta_0$ as a single weighted sum of $Y$.** Using $\bar Y = \frac{1}{N}\sum_i Y_i$,

      $$
      \hat\beta_0 = \frac{1}{N}\sum_i Y_i - \bar X \sum_i w_i Y_i = \sum_i \left(\frac{1}{N} - \bar X w_i\right) Y_i \equiv \sum_i c_i Y_i, \qquad c_i = \frac{1}{N} - \bar X w_i
      $$

      **Step 3: apply the variance operator.** The $X$'s are treated as fixed, so the $c_i$ are constants. The errors (hence the $Y_i$) are uncorrelated with common variance $\sigma_u^2$, so

      $$
      \operatorname{Var}(\hat\beta_0) = \operatorname{Var}\Big(\sum_i c_i Y_i\Big) = \sum_i c_i^2 \operatorname{Var}(Y_i) = \sigma_u^2 \sum_i c_i^2
      $$

      **Step 4: expand $\sum_i c_i^2$.**

      $$
      \sum_i c_i^2 = \sum_i \frac{1}{N^2} - 2\bar X \sum_i \frac{w_i}{N} + \bar X^2 \sum_i w_i^2
      $$

      Evaluate the three pieces using the weight identities:

      - $\sum_i \frac{1}{N^2} = \frac{N}{N^2} = \frac{1}{N}$.
      - $\sum_i w_i = \frac{\sum_i (X_i - \bar X)}{S_{XX}} = 0$ (deviations sum to zero), so the middle term vanishes.
      - $\sum_i w_i^2 = \frac{\sum_i (X_i - \bar X)^2}{S_{XX}^2} = \frac{1}{S_{XX}}$.

      **Step 5: collect.**

      $$
      \sum_i c_i^2 = \frac{1}{N} + \frac{\bar X^2}{S_{XX}}
      $$

      Multiplying by $\sigma_u^2$:

      $$
      \operatorname{Var}(\hat\beta_0) = \sigma_u^2\left[\frac{1}{N} + \frac{\bar X^2}{\sum_i (X_i - \bar X)^2}\right]
      $$

      > [!tip] What the formula tells you
      > The intercept is estimated more precisely when (i) $N$ is **large**, (ii) the regressors are **spread out** (big $S_{XX}$), and (iii) the data are **centred near zero** (small $\bar X^2$). The $\bar X^2$ term is the price of extrapolating the line back to $X = 0$.

      > [!note] Equivalent route (as submitted)
      > Substitute the true model: $\hat\beta_0 - \beta_0 = \bar u - (\hat\beta_1 - \beta_1)\bar X$. Then $\operatorname{Var}(\hat\beta_0) = \operatorname{Var}(\bar u) + \bar X^2 \operatorname{Var}(\hat\beta_1) - 2\bar X \operatorname{Cov}(\bar u, \hat\beta_1)$, with $\operatorname{Var}(\bar u) = \sigma_u^2/N$, $\operatorname{Var}(\hat\beta_1) = \sigma_u^2/S_{XX}$ and $\operatorname{Cov}(\bar u, \hat\beta_1) = \frac{\sigma_u^2}{N}\sum_i w_i = 0$. Same result.

      > [!warning] State the identities
      > Each weight identity ($\sum w_i = 0$, $\sum w_i^2 = 1/S_{XX}$) must be stated. They are *why* the cross-term dies and the $1/S_{XX}$ appears.
    related_terms: ["variance-of-the-ols-estimator", "ols-estimation", "classical-assumptions", "gauss-markov-theorem"]
    source_doc_page: 2
  - id: "4a"
    text: |
      **Modeling the money supply in R.** Use `money_v2026` (monthly US data, 1982 to 2024, $N = 516$): `MONEY` (currency in circulation, billions of current dollars), `INTEREST` (federal funds effective rate, in %), `CPI` (0 to 100).

      **Preliminaries.** Import the data and summarize the variables in the dataset.
    solution: |
      ```r
      library(rio)
      money <- import("money-2026.csv")
      summary(money$MONEY); summary(money$INTEREST); summary(money$CPI)
      ```
    related_terms: []
    source_doc_page: 3
  - id: "4b"
    text: |
      Create the variable `MONEY_REAL`, which measures the currency in circulation in units of real billions of dollars (hint: for each year divide `MONEY` by `CPI` to convert the nominal money supply to the real money supply), and summarize the new variable.
    solution: |
      ```r
      money$MONEY_REAL <- money$MONEY / money$CPI     # nominal to real
      summary(money$MONEY_REAL)
      ```

      Dividing nominal `MONEY` by `CPI` strips out price-level inflation, so the series measures the **real purchasing power** of the currency in circulation. Otherwise the 40-year rise in `MONEY` would mostly reflect rising prices, not more real money held.

      Summary of the real series: mean $\approx 10.38$, ranging from $\approx 3.87$ to $\approx 20.96$ real billion units.
    related_terms: []
    source_doc_page: 3
  - id: "4c"
    text: |
      Plot the interest rate (x-axis) against the real money supply (y-axis).
    solution: |
      ```r
      plot(money$INTEREST, money$MONEY_REAL,
           xlab = "Interest rate (%)",
           ylab = "Real money supply (billions, 1982-2024)",
           main = "Real money supply vs interest rate")
      ```

      Real money falls steeply as the interest rate rises from near zero, then flattens: a convex, hyperbola-like decay.
    related_terms: ["functional-form"]
    source_doc_page: 3
  - id: "4d"
    text: |
      Does the relationship look linear? Explain.
    solution: |
      **No.** There is a clear downward trend, but the cloud is **curved** (and the points form horizontal clusters at several interest-rate levels) rather than hugging a single straight line. A straight line in levels would fit badly.

      This curvature is exactly what a **log-log** model linearises, which motivates question 5.
    related_terms: ["functional-form", "log-log-model", "model-misspecification"]
    source_doc_page: 3
  - id: "5a"
    text: |
      **The log-log model.** According to the theory of money supply the following model holds:

      $$
      \ln(M_i) = \alpha + \beta \ln(r_i) + u_i
      $$

      where $M$ is currency in circulation adjusted to real dollars (billions) and $r$ is the interest rate.

      Create the variables for the money supply model: `ln_M` (the natural log of the variable from 4b) and `ln_r` (the natural log of the interest rate).
    solution: |
      ```r
      money$ln_M <- log(money$MONEY_REAL)
      money$ln_r <- log(money$INTEREST)
      ```
    related_terms: ["log-log-model", "functional-form"]
    source_doc_page: 3
  - id: "5b"
    text: |
      Estimate the money supply model parameters. Report the results as a formula.
    solution: |
      ```r
      model_loglog <- lm(ln_M ~ ln_r, data = money)
      summary(model_loglog)
      ```

      $$
      \widehat{\ln M} = 2.343 - 0.201\,\ln r
      $$

      with $\operatorname{se}(\hat\alpha) \approx 0.018$, $\operatorname{se}(\hat\beta) \approx 0.010$, $t_{\hat\beta} \approx -19.8$ (overwhelmingly significant), $R^2 \approx 0.433$ and $N = 516$. The interest rate alone explains about 43% of the variation in log real money.
    related_terms: ["log-log-model", "ols-estimation", "r-squared", "t-test"]
    source_doc_page: 3
  - id: "5c"
    text: |
      What is the interpretation of the slope estimate?
    solution: |
      In a log-log model the slope is the **elasticity** of $M$ with respect to $r$:

      $$
      \beta = \frac{d\ln M}{d\ln r} = \frac{\%\,\Delta M}{\%\,\Delta r}
      $$

      So $\hat\beta = -0.201$ means a **1% rise in the interest rate is associated with about a 0.20% fall in real money**. The negative sign matches money-demand theory: a higher rate raises the opportunity cost of holding non-interest-bearing cash, so people hold less. Demand is **inelastic** ($|\hat\beta| < 1$).
    related_terms: ["elasticity", "log-log-model", "marginal-effect"]
    source_doc_page: 3
  - id: "5d"
    text: |
      What is the predicted amount of real money in circulation when the interest rate is 10%?
    solution: |
      Predict in logs, then exponentiate: $\widehat M = \exp(\hat\alpha + \hat\beta \ln r)$. The model was estimated with `INTEREST` in **percent** units, so plug in $r = 10$:

      $$
      \widehat{\ln M} = 2.343 - 0.201\ln 10 = 1.880 \;\Rightarrow\; \widehat M = e^{1.880} \approx 6.55 \text{ real billion}
      $$

      > [!warning] Mind the units
      > The submitted answer plugged the rate in as a **decimal** ($r = 0.10$), which gave $\widehat M \approx 16.5$ to $16.6$ real billion. That is inconsistent with how the model was estimated: `ln_r = log(INTEREST)` uses percent units (e.g. 5.3 for 5.3%), so you must predict with $\ln(10)$, not $\ln(0.10)$. The direction of the story is identical; only the levels differ. Always predict in the same units the regressor had during estimation.
    related_terms: ["prediction", "log-log-model"]
    source_doc_page: 3
  - id: "5e"
    text: |
      What is the predicted amount of real money in circulation when the interest rate is 1%?
    solution: |
      With $r = 1$ (percent units), $\ln r = 0$, so the prediction is just $e^{\hat\alpha}$:

      $$
      \widehat{\ln M} = 2.343 - 0.201\ln 1 = 2.343 \;\Rightarrow\; \widehat M = e^{2.343} \approx 10.41 \text{ real billion}
      $$

      Cutting the rate from 10% to 1% raises predicted real money holdings by roughly **59%**, consistent with the downward-sloping demand.

      > [!note] What was submitted
      > Using decimal units the submitted figure was $\approx 26.3$ (see the units warning under 5d). The percent-unit figure above is the internally consistent one.
    related_terms: ["prediction", "log-log-model"]
    source_doc_page: 3
  - id: "5f"
    text: |
      What is the marginal effect of the interest rate on the money supply (at the point where both are at their sample average)? Interpret this result.
    solution: |
      The elasticity is **not** the marginal effect in natural units. Differentiate $\ln M = \alpha + \beta \ln r$:

      $$
      \frac{1}{M}\frac{dM}{dr} = \beta \cdot \frac{1}{r} \;\Rightarrow\; \frac{dM}{dr} = \beta \, \frac{M}{r}
      $$

      Evaluate at the point the line passes through, the **geometric** means (since $\log(\bar x) \neq \overline{\log x}$):

      $$
      M^\ast = e^{2.220} \approx 9.21, \qquad r^\ast = e^{0.613} \approx 1.85
      $$

      $$
      \frac{dM}{dr}\bigg|_{\text{mean}} = -0.201 \times \frac{9.21}{1.85} \approx -1.00
      $$

      **Reading it:** near the typical interest rate (about 1.85%), a one-percentage-point rise in the rate is associated with roughly **1 real billion less** money held. The marginal effect is large at low rates and shrinks as $r$ grows, the hallmark of the convex curve seen in 4c.
    related_terms: ["marginal-effect", "log-log-model", "elasticity", "change-of-variables"]
    source_doc_page: 3
  - id: "5g"
    text: |
      What is the rate of return at the point where both the interest rate and the real money supply are at their sample average? Interpret this result.
    solution: |
      The proportional-to-proportional response $\dfrac{dM/M}{dr/r}$ *is* the elasticity by construction, and in a log-log model it is constant and equal to the slope:

      $$
      \frac{dM/M}{dr/r} = \beta = -0.201
      $$

      So at the sample average (as everywhere on the fitted line) a **1% increase in the interest rate corresponds to about a 0.20% decrease in real money supply**.

      Unlike the level marginal effect in 5f, this elasticity does **not** depend on where you evaluate it. That constancy is the defining feature of the log-log form.
    related_terms: ["elasticity", "log-log-model"]
    source_doc_page: 3
  - id: "6a"
    text: |
      **Classical assumptions of OLS.** Plot the log real money supply against the log interest rate and add the estimated regression line. Does the relationship look linear? Explain.
    solution: |
      ```r
      plot(money$ln_r, money$ln_M,
           xlab = "log Interest rate", ylab = "log Real money supply",
           main = "log money supply vs log interest rate")
      abline(model_loglog, col = "red", lwd = 2, lty = 2)   # fitted line
      ```

      ![](/images/intro-econometrics/assign-02-loglog-money-scatter.png)

      After the double-log transform the relationship is **much closer to a straight line** than the level plot in 4c: logging both axes turns the convex decay into a roughly linear, downward-sloping band, though it still does not look perfectly linear.
    related_terms: ["log-log-model", "functional-form"]
    source_doc_page: 3
  - id: "6b"
    text: |
      Based on your plot, what (if anything) can you say about assumption A2? Explain.
    solution: |
      **A2** is the zero conditional mean assumption, $E[u \mid \ln r] = 0$: whether the error has zero mean given the regressor, i.e. whether relevant variables have been omitted.

      Because the error terms are **unobserved**, we cannot determine from the plot whether $E[u \mid \ln r] = 0$. The scatter alone cannot confirm A2. (It can only tell us about linearity in logs, which looks broadly reasonable.)
    related_terms: ["classical-assumptions", "conditional-mean", "omitted-variable-bias"]
    source_doc_page: 3
  - id: "6c"
    text: |
      Based on your plot, what (if anything) can you say about assumption A4? Explain.
    solution: |
      **A4** is homoskedasticity, $\operatorname{Var}(u \mid X) = \sigma_u^2$: constant error variance. It is judged by whether the **vertical spread** of points around the line is roughly the same all along the $\ln r$ axis.

      In the scatter the spread varies along the axis (it fans or pinches, particularly at very low rates in the post-2008 near-zero era), so A4 appears **violated**: this is [[Heteroskedasticity|heteroskedasticity]]. It does not bias $\hat\beta$, but it makes the reported standard errors unreliable. This is the cue for robust (White) standard errors or WLS, from [[Lec_12-Heteroskedasticity]].
    related_terms: ["heteroskedasticity", "classical-assumptions", "robust-standard-errors", "white-correction", "weighted-least-squares"]
    source_doc_page: 3
---

> [!info] Solutions are Alfie's submitted work, not an official key.

*Related: [[Lec_12-Heteroskedasticity]]*
