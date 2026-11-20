---
title: "Assignment 1"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-1.pdf
tags:
  - intro-econometrics
  - assignment
  - OLS
  - simple-regression
  - correlation
  - prediction
  - residuals
  - causality
ai_drafted: true
questions:
  - id: "A1a"
    text: |
      **Part A, Q1: Interpreting R output (hours worked vs education).** The variable `monthly_hrs_wrk` measures the number of hours worked in a month. Using the command `cor`, what can we learn from the R output about the relationship between hours worked and education? The output reports

      $$
      \operatorname{cor}(\text{hours},\,\text{schooling}) = -0.046
      $$
    solution: |
      The sign is negative, so more education is associated with *slightly fewer* hours worked per month. But the **magnitude is tiny**: 0.046 is almost zero on the $[-1, 1]$ scale. The relationship is **very weak and practically negligible**, so knowing someone's schooling tells you almost nothing about their monthly hours.

      > [!tip] How to judge a correlation's strength
      > $\rho \in [-1, 1]$. The **sign** gives direction; the **absolute value** gives strength. As a rough guide: $|\rho| < 0.1$ negligible, $\approx 0.3$ weak to moderate, $\approx 0.5$ moderate, $> 0.7$ strong. At $-0.046$ we are firmly in "negligible" territory.
    related_terms: ["correlation"]
    source_doc_page: 1
  - id: "A1b"
    text: |
      Why do we set the argument `use = "complete.obs"` in the function `cor`?
    solution: |
      `cor()` cannot handle missing values: if **either** variable is `NA` for an observation, the standard formula breaks (or returns `NA` for the whole result). Setting `use = "complete.obs"` tells R to **drop any row where either variable is missing** and compute the correlation on the complete cases only, so the calculation returns a number instead of `NA`.

      ```r
      cor(newdata$monthly_hrs_wrk, newdata$schooly, use = "complete.obs")
      # [1] -0.046   ->  very weak negative association
      ```
    related_terms: ["correlation"]
    source_doc_page: 1
  - id: "A2a"
    text: |
      **Part A, Q2.** You use the command `lm` in R to estimate the linear regression of hours worked on education. The estimated model is

      $$
      \widehat{\text{monthly\_hrs\_wrk}} = 184.4 - 0.859 \cdot \text{schooly}
      $$

      **a.** Interpret the intercept from the estimated model above.
    solution: |
      The intercept $\hat\beta_0 = 184.4$ is the model's **predicted monthly hours worked for someone with zero years of schooling** ($\text{schooly} = 0$): the value where the regression line crosses the $y$-axis. As often happens, $\text{schooly} = 0$ is outside the range of real data, so the intercept is a mathematical anchor for the line rather than a meaningful "type of person".

      > [!note] Different estimates in the submitted work
      > Alfie's own run on his cleaned data gave $\hat\beta_0 = 185.87$ and slope $-0.874$, slightly different from the question sheet's pre-printed output. The interpretation is identical either way; the numbers below use the question sheet's.
    related_terms: ["simple-linear-regression", "ols-estimation"]
    source_doc_page: 1
  - id: "A2b"
    text: |
      **b.** Based on the estimates above, what is the predicted number of monthly hours worked for an individual with 12 years of education? What about an individual with 16?
    solution: |
      Plug into the equation:

      $$
      \widehat{\text{hours}}(12) = 184.4 - 0.859(12) = 184.4 - 10.31 = \mathbf{174.1 \text{ hrs/month}}
      $$

      $$
      \widehat{\text{hours}}(16) = 184.4 - 0.859(16) = 184.4 - 13.74 = \mathbf{170.7 \text{ hrs/month}}
      $$

      Four extra years of schooling lowers predicted monthly hours by only $4 \times 0.859 \approx 3.4$ hours, a small change consistent with the weak correlation. (With the submitted-work estimates the predictions are 175.4 and 171.9.)
    related_terms: ["prediction", "simple-linear-regression"]
    source_doc_page: 1
  - id: "A2c"
    text: |
      **c.** What can we say about the relation between years of study and hours worked? Is the relation positive or negative? Is it strong or weak?
    solution: |
      **Direction:** negative. As years of study rise, predicted monthly hours fall.

      **Strength:** weak. The correlation of $-0.046$ shows schooling explains almost none of the variation in hours worked.

      > [!warning] A coefficient is not a correlation (common slip)
      > It is tempting to say "the relation has correlation $-0.859$". **Wrong**: $-0.859$ is the *slope* (hours per year of schooling), the correlation is $-0.046$ (unitless). They share a sign but mean different things: the slope says *how much* $y$ moves per unit $x$, the correlation says *how tightly* the points cluster around the line. Use the slope for **direction** and the correlation for **strength**.
    related_terms: ["correlation", "simple-linear-regression"]
    source_doc_page: 1
  - id: "A2d"
    text: |
      **d.** Can we make a causal claim for these results? Explain.
    solution: |
      **No.** This is a simple two-variable regression on observational data, so it shows *association*, not *causation*. There is no experiment, no random assignment of schooling, and almost certainly [[Omitted Variable Bias|omitted variables]] (see part e) that drive both schooling and hours. We can say schooling and hours *move together weakly*, not that more schooling *causes* fewer hours.
    related_terms: ["causality-vs-correlation", "omitted-variable-bias"]
    source_doc_page: 1
  - id: "A2e"
    text: |
      **e.** What other variables are likely to influence the monthly hours worked? Indicate at least 3.
    solution: |
      Plausible drivers the model leaves out:

      1. **Occupation type**: manual or shift work vs salaried professional roles imply very different hour patterns.
      2. **Age / labour-market experience**: younger and near-retirement workers often work fewer hours.
      3. **Marital status / number of children**: caregiving responsibilities cut available hours.
      4. **Wage rate**: higher hourly pay can lead some to work *fewer* hours (income effect).

      Each of these is correlated with both schooling **and** hours, so leaving them out biases the simple slope, another reason the result is not causal.
    related_terms: ["omitted-variable-bias", "causality-vs-correlation"]
    source_doc_page: 1
  - id: "B1"
    text: |
      **Part B, Q1: Data exploration** [Heiss 1.6.4]. The `BWGHT2` data come from a project that looked at the effect of smoking during pregnancy on newborn weight (1,465 births; key variables `bwght` birth weight in grams, `cigs` average cigarettes per day, `monpre` month prenatal care began).

      **a.** Import the dataset and name the data.frame object `data.BW`.

      **b.** Create a new variable called `non.smoker` indicating (`TRUE`) if a mother is a non-smoker.

      **c.** What is the proportion of smokers in the sample? (hint: do not include the `NA` observations in your calculations)
    solution: |
      Part a is just `import()` of `BWGHT2_v2026.xlsx` with `rio`.

      ```r
      data.BW$non_smoker <- data.BW$cigs == 0
      mean(data.BW$cigs > 0, na.rm = TRUE)
      # [1] 0.0848
      ```

      **About 8.5% of mothers smoked during pregnancy** (smokers are anyone with `cigs > 0`). The `na.rm = TRUE` matters: without it, any missing `cigs` value would poison the mean and return `NA`.
    related_terms: []
    source_doc_page: 2
  - id: "B2"
    text: |
      **Part B, Q2: Ordinal factor variables** [Heiss 1.6.1].

      **a.** Create a frequency table of the variable `monpre`, the month prenatal care begins (hint: use `prop.table`).

      **b.** What is the median month that prenatal care begins in the sample?
    solution: |
      ```r
      prop.table(table(data.BW$monpre, useNA = "no"))   # share of births by start-month
      median(data.BW$monpre, na.rm = TRUE)
      # [1] 2
      ```

      The **median month prenatal care began is month 2**: half of mothers started care by their second month. `monpre` is an *ordinal* variable (1st, 2nd, 3rd month...), so the median is a sensible summary; a mean of month numbers would be less interpretable.
    related_terms: []
    source_doc_page: 2
  - id: "B3"
    text: |
      **Part B, Q3: Statistical dependence.**

      **a.** What is the average daily number of cigarettes smoked during pregnancy in the entire sample?

      **b.** What is the average daily number of cigarettes smoked during pregnancy among women who are smokers?

      **c.** Compare the results from 3(a) and 3(b). Which average, if any, is a good measure for typical smoking behavior during pregnancy? Explain.
    solution: |
      ```r
      mean(data.BW$cigs, na.rm = TRUE)                    # whole sample
      # [1] 1.06
      mean(data.BW$cigs[data.BW$cigs > 0], na.rm = TRUE)  # smokers only
      # [1] 12.55
      ```

      - **Whole-sample average:** about **1.06** cigarettes/day.
      - **Among smokers only:** about **12.5** cigarettes/day (12.55 in one note, 12.54 in the answer key; rounding).

      > [!tip] Which average is meaningful? The conditional one.
      > The two numbers differ by more than 10 times. About 91.5% of mothers smoke **zero**, and those zeros drag the whole-sample mean down to 1.06, a figure that describes *no actual smoker*. The **conditional mean among smokers (about 12.5/day)** is the meaningful measure of *typical smoking behaviour*, because it answers "when a mother smokes, how much does she smoke?" Averaging over a population dominated by zeros hides the behaviour of the subgroup you care about.
    related_terms: ["conditional-mean"]
    source_doc_page: 2
  - id: "B4a"
    text: |
      **Part B, Q4: OLS regression** [Heiss 2.1, 2.2].

      **a.** Run the regression between birth weight (the dependent variable) and the number of cigarettes smoked by the mother during pregnancy (the independent variable). Report the estimation results in the form of an equation.
    solution: |
      ```r
      lm.bwght_cigs <- lm(bwght ~ cigs, data = data.BW)
      ```

      $$
      \widehat{\text{bwght}} = 3432.92 - 13.54 \cdot \text{cigs}
      $$

      Each additional cigarette per day during pregnancy is associated with a predicted **13.54 g lower birthweight**. The intercept (3432.92 g) is the predicted birthweight at `cigs = 0`.
    related_terms: ["ols-estimation", "simple-linear-regression"]
    source_doc_page: 2
  - id: "B4b"
    text: |
      **b.** Is it possible to apply a causal interpretation to these results?
    solution: |
      **No.** Same logic as Part A. This is a single-regressor model on observational data. Mothers who smoke likely differ systematically in other ways (income, diet, alcohol, prenatal care, age) that also affect birthweight. Those confounders are omitted, so $-13.54$ captures **correlation**, not the causal effect of one extra cigarette.
    related_terms: ["causality-vs-correlation", "omitted-variable-bias"]
    source_doc_page: 2
  - id: "B4c"
    text: |
      **c.** What is the predicted birthweight for mothers who do not smoke? What is the predicted birthweight for mothers who smoke a pack of cigarettes a day? (assume there are 30 cigarettes per pack)
    solution: |
      $$
      \text{cigs}=0:\quad \widehat{\text{bwght}} = 3432.92 - 13.54(0) = \mathbf{3432.92\text{ g}}
      $$

      $$
      \text{cigs}=30:\quad \widehat{\text{bwght}} = 3432.92 - 13.54(30) = 3432.92 - 406.2 = \mathbf{3026.7\text{ g}}
      $$

      A pack-a-day habit is associated with roughly **406 g (about 0.4 kg) lower** predicted birthweight.

      > [!warning] Arithmetic check
      > The answer key prints 3026.30 g, but $13.54 \times 30 = 406.2$, so the correct value is 3026.72 g.
    related_terms: ["prediction"]
    source_doc_page: 2
  - id: "B4d"
    text: |
      **d.** What value does `cigs` have to be in order to predict a birth weight of 3.4 kg?
    solution: |
      Set $\widehat{\text{bwght}} = 3400$ g and solve for `cigs`:

      $$
      3400 = 3432.92 - 13.54\cdot\text{cigs} \;\Rightarrow\; \text{cigs} = \frac{3432.92 - 3400}{13.54} = \frac{32.92}{13.54} \approx \mathbf{2.43 \text{ cigs/day}}
      $$
    related_terms: ["prediction"]
    source_doc_page: 2
  - id: "B4e"
    text: |
      **e.** A woman smokes 20 cigarettes a day and has a newborn weighing 3.2 kg. What is the residual for this woman?
    solution: |
      Her baby weighs 3.2 kg = 3200 g.

      $$
      \hat y = 3432.92 - 13.54(20) = 3432.92 - 270.8 = 3162.12\text{ g}
      $$

      $$
      \hat u = y - \hat y = 3200 - 3162.12 \approx \mathbf{+37.9\text{ g}}
      $$

      The residual is **positive (about +38 g)**: her baby weighed *more* than the model predicted for a 20-cigarette-a-day mother.

      > [!note] What a residual is
      > The residual $\hat u_i = y_i - \hat y_i$ is the vertical distance from the actual point to the regression line. Positive means above the line (the model under-predicted); negative means below. By construction $\sum \hat u_i = 0$, so residuals net out across the whole sample.
    related_terms: ["residuals", "prediction"]
    source_doc_page: 2
  - id: "B5"
    text: |
      **Part B, Q5: Scatter plots** [Heiss 1.4.1 to 1.4.5, 2.1]. Create a scatterplot of birthweight (y-axis) versus number of cigarettes smoked (x-axis) with: descriptive X and Y axis labels (what is plotted and in what units), a title, appropriate scales for the axes, and a dashed line for the OLS regression from `lm.bwght.cigs` (hint: in base plot you can use `abline`).
    solution: |
      ```r
      plot(data.BW$cigs, data.BW$bwght,
           xlab = "Cigarettes smoked/day",
           ylab = "Birthweight (grams)",
           main = "Birthweight vs. Cigarettes Smoked During Pregnancy",
           col = "red", ylim = c(1000, 5000))
      abline(lm.bwght_cigs, col = "blue", lwd = 2, lty = 2)   # dashed OLS line
      ```

      ![](/images/intro-econometrics/assign-01-bwght-cigs-scatter.png)

      > [!tip] What the picture shows (and hides)
      > First, the **huge vertical spread** at every value of `cigs`: birthweight varies by well over a kilogram among mothers who smoke the same amount. That is why a causal reading is unsafe and why $R^2$ here is low. Second, **almost all the mass sits at `cigs = 0`** (the roughly 91.5% non-smokers), so the downward-sloping line is fit largely off a sparse right tail. The negative slope is real but the cloud is wide.
    related_terms: ["simple-linear-regression", "r-squared"]
    source_doc_page: 2
---

> [!info] Solutions are Alfie's submitted work, not an official key.

Part A reasons from pre-computed R output (hours worked on years of schooling); Part B uses the `BWGHT2` birthweight and smoking data. Three habits are drilled: correlation is not slope, a regression gives predictions and residuals by plugging in, and a simple regression on observational data is never causal.

*Related: [[Lec_08-Goodness of Fit & Multicollinearity]] (why the wide scatter means a low $R^2$)*
