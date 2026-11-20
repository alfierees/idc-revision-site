---
title: "Assignment 3"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-3.pdf
tags:
  - intro-econometrics
  - assignment
  - OLS
  - change-of-variables
  - regression-through-origin
  - classical-assumptions
  - confidence-interval
  - hypothesis-testing
  - log-log
  - housing
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Change of variables: Income-Consumption model.** The model $\text{Consumption} = \beta_0 + \beta_1\,\text{GDP} + u$ is estimated first for observations from Israel and then for a US dataset:

      | Estimates | Israel | United States |
      |---|---|---|
      | intercept $\beta_0$ | $-21.894$ | $515.784$ |
      | slope $\beta_1$ | $0.815$ | $0.645$ |

      Consumption and GDP in Israel are measured in millions of NIS, in the US in billions of dollars. Assume the exchange rate is 3.4 NIS to \$1, and translate the slope and intercept from Israel into identical units to the US.
    solution: |
      **Slope: unchanged.** The slope is a ratio of changes in two variables measured in the **same** units (millions of NIS), $\beta_1 = \Delta\text{Cons} / \Delta\text{GDP}$. Converting both to billions of dollars divides numerator and denominator by the same factor, which cancels:

      $$
      \beta_1^{\text{(US units)}} = 0.815
      $$

      The marginal propensity to consume is a dimensionless **0.815** either way (above the US estimate of 0.645).

      **Intercept: converted.** The intercept is an *amount of consumption*, so it lives in $y$-units and must be re-currencied (NIS to dollars) and re-scaled (millions to billions). The combined factor is $3.4 \times 1000 = 3400$:

      $$
      \beta_0^{\text{(US units)}} = \frac{-21.894}{3.4 \times 1000} = \frac{-21.894}{3400} \approx -0.00644 \text{ (billion \$)}
      $$

      $$
      \widehat{\text{Cons}}_{\text{IL}} = -0.00644 + 0.815\,\text{GDP} \quad (\text{billions of \$})
      $$

      > [!tip] The two rules behind every Part A answer
      > A **level** variable passes re-scaling straight through to its coefficient ($y \to cy$ multiplies both $\beta$'s by $c$; $x \to kx$ divides the slope by $k$). A **logged** variable absorbs a constant factor into the **intercept** and leaves the slope alone. Here both axes get the same factor, so the slope cancels and only the intercept moves.

    related_terms: ["change-of-variables"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Change of variables: Wage model.** The model $\ln(\text{wage}_{\$}) = \beta_0 + \beta_1 \cdot \text{education} + u$ is estimated for women who work, aged 25 to 65, where wage is in dollars and education in years. The estimates are $\hat\beta_0 = 2.497$ and $\hat\beta_1 = 0.0788$.

      Translate the results from dollars to NIS: what is the estimate for the intercept and what is the estimate for the slope? (Hint: use $\ln(cY) = \ln(c) + \ln(Y)$ and assume 3.4 NIS to 1 USD.)
    solution: |
      The wage is **logged**, so the currency factor enters *additively*. With $\text{wage}_{\text{NIS}} = 3.4\,\text{wage}_{\$}$ and $\ln(cY) = \ln c + \ln Y$:

      $$
      \ln(\text{wage}_{\text{NIS}}) = \ln(3.4) + \big(2.497 + 0.0788\,\text{educ}\big) = (2.497 + 1.2238) + 0.0788\,\text{educ}
      $$

      $$
      \widehat{\ln(\text{wage}_{\text{NIS}})} = 3.72 + 0.0788\,\text{educ}
      $$

      **Slope unchanged at 0.0788.** The return to a year of education is a *percentage*, and a percentage does not care whether wages are quoted in shekels or dollars. The whole conversion is absorbed into the intercept as an additive shift of $\ln(3.4) = 1.2238$, so $2.497 \to 3.72$.

      > [!warning] Don't multiply the slope by 3.4
      > "Wages went up 3.4 times, so multiply everything by 3.4" is right for a **level** wage model but wrong here. Because $y$ is logged, the multiplicative factor becomes an **additive** $\ln(3.4)$ on the intercept, and the slope is untouched. This mix-up is the single most common error in change-of-variables questions.
    related_terms: ["change-of-variables", "log-level-model", "functional-form"]
    source_doc_page: 2
  - id: "3a"
    text: |
      **Regression through the origin: the Income-consumption model revisited.** A colleague estimates $\text{Consumption} = \beta_0 + \beta_1\,\text{GDP} + u$ and sends you the R output (in the assignment PDF).

      She claims it is not reasonable for the intercept to be negative, since negative consumption is impossible, so she estimates a model without an intercept (a regression through the origin), $\text{Consumption} = \beta_1\,\text{GDP} + u$, and sends you that output too.

      Is the intercept of the first model significant?
    solution: |
      **Yes.** Read it straight off the R output: the intercept's t-statistic and p-value (or build $t = \hat\beta_0 / \operatorname{se}(\hat\beta_0)$ and compare $|t|$ with $t_{0.975,\,df}$). The intercept's p-value is $\approx 0$, so we reject $H_0: \beta_0 = 0$. There is strong evidence the intercept is genuinely non-zero.

      > [!info] What "regression through the origin" means
      > Dropping the intercept forces the fitted line through $(0,0)$: $\text{Cons}_i = \beta_1\,\text{GDP}_i + u_i$. In R this is `lm(y ~ 0 + x)` or `lm(y ~ x - 1)`. It is only appropriate when theory genuinely requires $y = 0$ at $x = 0$ **and** the data support it.
    related_terms: ["regression-through-the-origin", "t-test", "p-value", "hypothesis-testing"]
    source_doc_page: 3
  - id: "3b"
    text: |
      Given the estimated results, what is the correct model to use in this context?
    solution: |
      **The first model, with the intercept.** Two reasons:

      1. **Statistical significance.** The intercept is significant ($p \approx 0$), so the data reject $\beta_0 = 0$.
      2. **Bias from a false restriction.** Since the intercept really is non-zero, forcing the regression through $(0,0)$ imposes a false restriction that **biases the slope**. Here the slope collapses from $0.815$ to about $0.515$, a large distortion.

      The colleague's argument is not valid. The intercept is **not** a prediction of consumption at any observed data point: no country in the sample has $\text{GDP} = 0$, so $\hat\beta_0$ is a pure extrapolation, a mathematical anchor for the line. A negative anchor is not a logical contradiction.

      > [!tip] Decision rule
      > Keep the intercept **unless** (i) it is statistically insignificant *and* (ii) theory genuinely demands the line pass through the origin. In an income-consumption model you almost always retain it (it captures autonomous consumption). Also, $R^2$ from a regression through the origin is computed against a different benchmark and is not comparable with the with-intercept model.
    related_terms: ["regression-through-the-origin", "r-squared", "model-misspecification"]
    source_doc_page: 3
  - id: "4a"
    text: |
      **Part B: the housing model.** We model the housing market with model (1):

      $$
      \text{price}_i = \beta_0 + \beta_1\,\text{bdrms}_i + \beta_2\,\text{lotsize}_i + u_i
      $$

      using `HPRICE1_v2026` ($N = 68$ house sales). `price` is the sale price in USD, `bdrms` the number of bedrooms, `lotsize` the lot area in square feet, and `lprice`, `llotsize` the logs of price and lot size. Sample means: price $\approx \$291{,}074$, bdrms $\approx 3.68$, lotsize $\approx 7{,}528$ sq ft.

      **The classical assumptions.** Write the four classical assumptions A1 to A4 in terms of this model.
    solution: |
      The submitted answer states the assumptions as properties of the error:

      - **A1, zero mean of errors:** $E[u_i] = 0$. On average the unobserved factors balance to zero; the line passes through the centre of the data.
      - **A2, exogeneity:** $E[u_i \mid \text{bdrms}, \text{lotsize}] = 0$. Once we control for bedrooms and lot size, the omitted factors have no systematic relationship with them.
      - **A3, no serial correlation:** $\operatorname{Cov}(u_i, u_j) = 0$ for $i \neq j$. The unobserved shock to one house tells you nothing about another's.
      - **A4, homoskedasticity:** $\operatorname{Var}(u_i \mid \text{bdrms}, \text{lotsize}) = \sigma^2$. The error spread is the same for small 2-bedroom and large 5-bedroom houses.

      > [!note] Alternative numbering
      > The equivalent textbook set reads A1 = linearity in parameters ($\text{price} = \beta_0 + \beta_1\text{bdrms} + \beta_2\text{lotsize} + u$) and A3 = no perfect collinearity plus sample variation (bdrms and lotsize are not exact linear functions of each other). Either numbering is acceptable; A2 and A4 are the same in both.
    related_terms: ["classical-assumptions", "heteroskedasticity", "perfect-multicollinearity", "conditional-mean"]
    source_doc_page: 3
  - id: "4b"
    text: |
      What are some other variables that might affect housing price, aside from size and number of bedrooms?
    solution: |
      Location and neighbourhood, the actual house size (square footage, `sqrft`), age and condition of the property, building type (e.g. `colonial`), number of bathrooms, school quality, distance to the centre, year of sale.

      Each of these, if omitted from model (1), lands in the error $u$.
    related_terms: ["omitted-variable-bias", "hedonic-pricing"]
    source_doc_page: 3
  - id: "4c"
    text: |
      For each assumption A1 to A4, explain in a sentence or two whether you think the assumption is reasonable in the context of housing prices. (Hint: any variables not included in the model but that affect price will be part of the random error $u$.)
    solution: |
      - **A1 (zero mean):** applies. It just says the model is not systematically too high or too low on average.
      - **A2 (exogeneity): does not hold.** Location, condition and age are correlated with bedrooms and lot size, so omitting them correlates $X$ with $u$. Big lots tend to sit in nicer neighbourhoods, so $\hat\beta_2$ partly captures the value of the *location*, not the land alone. A classic [[Omitted Variable Bias|omitted-variable]] worry.
      - **A3 (no serial correlation): holds poorly.** Houses in the same neighbourhood share unobserved factors (crime rate, view, distance to centre), so errors for nearby houses may be correlated.
      - **A4 (homoskedasticity): often untrue.** Luxury houses have more variation in unobserved factors (design, view, modernity), so their prices spread out far more than smaller houses'. Logging the dependent variable usually tames this, another reason to prefer the log model later.

      > [!note] Under the alternative numbering
      > Linearity (A1) is a reasonable first approximation, though price probably rises *less* than proportionally with lot size (diminishing returns), which motivates the log model. No perfect collinearity (A3) is fine: bedrooms and lot size are related but not perfectly, and both vary.
    related_terms: ["classical-assumptions", "omitted-variable-bias", "heteroskedasticity", "conditional-mean"]
    source_doc_page: 3
  - id: "5a"
    text: |
      **Model estimation I and II.** Estimate model (1) using the `lm` command in R and write the results as a formula.
    solution: |
      ```r
      m1 <- lm(price ~ bdrms + lotsize, data = hprice)
      summary(m1)
      ```

      $$
      \widehat{\text{price}} = 16{,}433.87 + 42{,}575.12\,\text{bdrms} + 15.69\,\text{lotsize}
      $$

      with $\operatorname{se}(\hat\beta_0) = 35{,}123.7$, $\operatorname{se}(\hat\beta_1) = 9{,}564.1$, $\operatorname{se}(\hat\beta_2) = 2.05$, $R^2 = 0.618$ ($N = 68$, $df = 65$).

      Each extra **bedroom** adds about \$42,575 to predicted price, and each extra **square foot of lot** adds about \$15.69, holding the other fixed.
    related_terms: ["ols-estimation", "r-squared", "marginal-effect"]
    source_doc_page: 3
  - id: "5b"
    text: |
      Your colleague points out that when the lot size and the number of bedrooms are zero, the price should also be zero. Test this hypothesis using the estimation results in 5a.
    solution: |
      The hypothesis is $H_0: \beta_0 = 0$. Run the four steps:

      1. **Hypotheses:** $H_0: \beta_0 = 0$ vs $H_1: \beta_0 \neq 0$.
      2. **Test statistic:**

         $$
         t = \frac{\hat\beta_0 - 0}{\operatorname{se}(\hat\beta_0)} = \frac{16{,}433.87}{35{,}123.73} = 0.468
         $$

      3. **Critical value:** $t_{0.975,\,65} \approx 1.997$ (two-sided, 5%). The submitted answer used $\approx 2.00$.
      4. **Conclusion:** $|0.468| < 1.997$ (equivalently $p \approx 0.64 > 0.05$), so we **fail to reject $H_0$**. There is no statistical evidence the intercept differs from zero, so we cannot rule out that the true intercept is 0. This invites the no-intercept model in 5c.
    related_terms: ["hypothesis-testing", "t-test", "p-value", "regression-through-the-origin"]
    source_doc_page: 3
  - id: "5c"
    text: |
      Estimate model (2) below (hint: in `lm` use the formula `price ~ 0 + bdrms + lotsize`):

      $$
      \text{price}_i = \beta_1\,\text{bdrms}_i + \beta_2\,\text{lotsize}_i + u_i
      $$
    solution: |
      ```r
      m2 <- lm(price ~ 0 + bdrms + lotsize, data = hprice)
      summary(m2)
      ```

      $$
      \widehat{\text{price}} = 46{,}513.16\,\text{bdrms} + 15.85\,\text{lotsize}
      $$

      Dropping the insignificant intercept barely moves the lot-size slope ($15.69 \to 15.85$) but **inflates the bedroom coefficient** ($42{,}575 \to 46{,}513$): with no constant to absorb the baseline, the line must reach the origin and the bedroom term picks up the slack.

      > [!warning] The $R^2$ trap
      > The reported $R^2$ jumps to about $0.96$, but it is **not comparable** with model (1)'s $R^2$. A regression through the origin measures $R^2$ against a different (uncentred) benchmark, so the apparent "improvement" is an artefact, not evidence the model is better.
    related_terms: ["regression-through-the-origin", "r-squared", "total-sum-of-squares"]
    source_doc_page: 3
  - id: "6a"
    text: |
      **Linearity of the model.** Create a scatterplot between price and lot size (price on the y-axis).
    solution: |
      ```r
      plot(hprice$lotsize, hprice$price, pch = 19, col = "blue",
           xlab = "Lotsize", ylab = "House Price")
      abline(lm(price ~ lotsize, data = hprice), col = "red", lwd = 2, lty = 2)
      ```

      ![](/images/intro-econometrics/assign-03-price-lotsize-scatter.png)

      The cloud **fans out**: at small lots the points sit in a tight band, but at large lots the vertical spread explodes and a few big-lot houses sit far from the line. The relationship looks curved and heteroskedastic.
    related_terms: ["functional-form", "heteroskedasticity"]
    source_doc_page: 4
  - id: "6b"
    text: |
      Create a scatterplot between log price and log lot size (log price on the y-axis).
    solution: |
      ```r
      hprice$lprice   <- log(hprice$price)
      hprice$llotsize <- log(hprice$lotsize)
      plot(hprice$llotsize, hprice$lprice, pch = 19, col = "blue",
           xlab = "Log Lot Size", ylab = "Log Price")
      abline(lm(lprice ~ llotsize, data = hprice), col = "red", lwd = 2, lty = 2)
      ```

      ![](/images/intro-econometrics/assign-03-loglog-price-lotsize-scatter.png)

      After the double-log transform the points form a tighter, straighter upward-sloping band with roughly constant spread across the whole range.
    related_terms: ["log-log-model", "functional-form"]
    source_doc_page: 4
  - id: "6c"
    text: |
      Which of the two relationships (6a and 6b) seems more linear?
    solution: |
      The **log-log** plot (6b). Logging both axes compresses the long right tails of price and lot size, converts the curved, fanning level relationship into an approximately straight band, and stabilises the variance, which is what the linearity and homoskedasticity assumptions want. This is the empirical justification for switching to model (3).
    related_terms: ["log-log-model", "functional-form", "model-misspecification"]
    source_doc_page: 4
  - id: "7a"
    text: |
      For the remainder of the problem we consider model (3):

      $$
      \log(\text{price})_i = \beta_0 + \beta_1\,\text{bdrms}_i + \beta_2\,\log(\text{lotsize})_i + u_i
      $$

      **Model estimation III.** Estimate model (3) above and report the results as a formula.
    solution: |
      ```r
      m3 <- lm(lprice ~ bdrms + llotsize, data = hprice)
      summary(m3)
      ```

      $$
      \widehat{\log\text{price}} = 8.0779 + 0.1217\,\text{bdrms} + 0.4532\,\log\text{lotsize}
      $$

      with $\operatorname{se} = (0.599,\ 0.0326,\ 0.0701)$, all highly significant ($t = 13.5,\ 3.74,\ 6.47$), $R^2 = 0.532$ ($df = 65$).

      $\beta_2 = 0.453$ is the **elasticity** of price with respect to lot size: a 1% bigger lot is associated with about a 0.45% higher price. $\beta_1 = 0.122$ is a **semi-elasticity**: one extra bedroom raises price by about 12.2%.
    related_terms: ["log-log-model", "elasticity", "log-level-model", "ols-estimation"]
    source_doc_page: 4
  - id: "7b"
    text: |
      By how much does the log price of a house change if the log lot size increases by 4 (all else equal)?
    solution: |
      Only the lot-size term moves:

      $$
      \Delta\log\text{price} = \beta_2 \times 4 = 0.4532 \times 4 = 1.813
      $$

      Log price rises by about **1.81** (price rises by a factor of $e^{1.813} \approx 6.1$). A change of 4 in $\log(\text{lotsize})$ is enormous: lot size grew by a factor of $e^4 \approx 54.6$, so a large response is sensible.
    related_terms: ["log-log-model", "elasticity"]
    source_doc_page: 4
  - id: "7c"
    text: |
      By how much does the log price of an apartment change if the log lot size increases by 4 and the number of bedrooms increases by 2? Compare this to the result in 7b.
    solution: |
      Add the bedroom contribution:

      $$
      \Delta\log\text{price} = \beta_2 \times 4 + \beta_1 \times 2 = 1.813 + 0.1217 \times 2 = 1.813 + 0.2435 = 2.056
      $$

      This is **larger than 7b by exactly $0.2435$**, the two-bedroom contribution $2\beta_1$. Because the model is additive in logs, the two effects simply add; there is no interaction.
    related_terms: ["log-log-model", "interaction-term"]
    source_doc_page: 4
  - id: "7d"
    text: |
      A house has 4 bedrooms and a lot size of 6,000. What is the predicted price of this house?
    solution: |
      Predict in logs, then exponentiate:

      $$
      \widehat{\log\text{price}} = 8.0779 + 0.1217(4) + 0.4532\,\ln(6000) \approx 12.508
      $$

      $$
      \widehat{\text{price}} = e^{12.508} \approx \$270{,}300
      $$

      Forgetting the final $\exp(\cdot)$, and reporting 12.5 as if it were a price, is the classic slip.

      > [!note] Rounding
      > The submitted answer carried more decimals and reported $\$270{,}313.84$. Results of about \$270,300 to \$270,400 depending on rounding of the coefficients all agree on "about \$270k".
    related_terms: ["prediction", "log-log-model"]
    source_doc_page: 4
  - id: "8a"
    text: |
      **Confidence intervals.** Calculate the 95% confidence interval for $\beta_2$ and explain in a sentence or two the economic interpretation for this range.
    solution: |
      $$
      \hat\beta_2 \pm t_{0.975,\,65} \cdot \operatorname{se}(\hat\beta_2) = 0.4532 \pm 1.997 \times 0.0701 \;\Rightarrow\; [0.313,\ 0.593]
      $$

      **Economic reading:** we are 95% confident that the **elasticity** of house price with respect to lot size lies between 0.31 and 0.59. A 1% larger lot is associated with somewhere between a 0.31% and 0.59% higher price. The whole interval is positive and below 1, so the effect is reliably positive but **inelastic**.

      > [!note] $z$ versus $t$
      > The submitted answer used the normal critical value $z = 1.96$, giving $[0.316,\ 0.591]$. With $df = 65$ the exact $t_{0.975,65} \approx 1.997$ gives the interval above. The difference is in the third decimal and changes nothing.
    related_terms: ["confidence-interval", "elasticity", "t-test"]
    source_doc_page: 4
  - id: "8b"
    text: |
      Calculate the 90% and 99% confidence intervals for $\beta_2$ and, in a couple of sentences, explain which one is wider and why. Make sure to relate your answer to the definition of a confidence interval.
    solution: |
      $$
      \text{90\%: } [0.336,\ 0.570] \qquad \text{99\%: } [0.267,\ 0.639]
      $$

      The **99% interval is wider**. A confidence interval is $\hat\beta_2 \pm t_{\text{crit}} \cdot \operatorname{se}$, and only the **critical value** changes: $t_{0.95} = 1.67 < t_{0.975} = 2.00 < t_{0.995} = 2.65$.

      A 99% interval is constructed so that, over repeated samples, 99% of such intervals contain the true $\beta_2$. Covering more of them requires casting a **wider net**: the price of more certainty is less precision.
    related_terms: ["confidence-interval", "t-test"]
    source_doc_page: 4
  - id: "9a"
    text: |
      **Hypothesis testing.** Test the hypothesis that increasing the log lot size by 1 (holding the number of bedrooms fixed) will not change the house price (at 5% significance).
    solution: |
      1. **Hypotheses:** $H_0: \beta_2 = 0$ vs $H_1: \beta_2 \neq 0$.
      2. **Test statistic:**

         $$
         t = \frac{0.4532}{0.0701} = 6.47
         $$

      3. **Critical value:** $t_{0.975,\,65} \approx 1.997$ (the submitted answer used about 2).
      4. **Conclusion:** $|6.47| > 1.997$, so **reject $H_0$**. Increasing log lot size *does* change price; the effect is strongly significant.
    related_terms: ["hypothesis-testing", "t-test", "p-value"]
    source_doc_page: 4
  - id: "9b"
    text: |
      What is the lowest significance level for which you would reject the null hypothesis in 9a?
    solution: |
      That is exactly the **p-value** of the $\beta_2$ coefficient: $p \approx 1.5 \times 10^{-8}$. You would reject $H_0$ at any significance level above this minuscule number, far below any conventional level.
    related_terms: ["p-value", "hypothesis-testing"]
    source_doc_page: 4
  - id: "9c"
    text: |
      Test the hypothesis (at 5% significance) that increasing the number of bedrooms by one increases the log price by 1.
    solution: |
      The null is **not zero** this time, so subtract the hypothesised value in the numerator:

      1. **Hypotheses:** $H_0: \beta_1 = 1$ vs $H_1: \beta_1 \neq 1$.
      2. **Test statistic:**

         $$
         t = \frac{\hat\beta_1 - 1}{\operatorname{se}(\hat\beta_1)} = \frac{0.1217 - 1}{0.0326} = -26.97
         $$

      3. **Critical value:** $t_{0.975,\,65} \approx 1.997$.
      4. **Conclusion:** $|-26.97| \gg 1.997$, so **reject $H_0$** overwhelmingly. An extra bedroom does **not** raise log price by 1 (that would be roughly a 172% jump per bedroom); the data say about 12%.

      > [!warning] The general-null trap
      > The R output's printed t-stat and p-value **always test against zero**. Whenever the null is a non-zero number, rebuild the statistic by hand as $t = (\hat\beta - \text{hypothesised value}) / \operatorname{se}$.
    related_terms: ["hypothesis-testing", "t-test", "p-value"]
    source_doc_page: 4
  - id: "10a"
    text: |
      **Change of variables.** Suppose you want to translate the lot size from square feet to square metres. What will be the value of $\beta_2$ in the new model where lot size is measured in square metres? (Hint: $1\ \text{ft}^2 = 0.093\ \text{m}^2$.)
    solution: |
      The model uses $\log(\text{lotsize})$, and $\text{lotsize}_{\text{m}} = 0.093\,\text{lotsize}_{\text{ft}}$. Inside a log this is an **additive** shift:

      $$
      \ln(0.093 \cdot \text{lotsize}) = \ln(0.093) + \ln(\text{lotsize})
      $$

      so it only moves the intercept and leaves $\beta_2$ unchanged:

      $$
      \beta_2^{(\text{m}^2)} = \beta_2^{(\text{ft}^2)} = 0.4532
      $$

      An **elasticity is unit-free**: the percentage response of price to a *percentage* change in lot size does not care whether area is measured in feet or metres.

      The intercept absorbs the change. Since $\ln(\text{lotsize}_{\text{ft}}) = \ln(\text{lotsize}_{\text{m}}) - \ln(0.093)$, the new intercept is $\beta_0 - \beta_2\ln(0.093) = 8.078 + 0.4532 \times 2.375 \approx 9.154$.
    related_terms: ["change-of-variables", "elasticity", "log-log-model"]
    source_doc_page: 4
  - id: "10b"
    text: |
      Confirm your answer in R: create a new variable `llotsize.m` which measures the log lot size in metres squared. Estimate model (3) using this new variable. Compare the results to the estimation in 7a.
    solution: |
      ```r
      hprice$llotsize.m <- log(hprice$lotsize * 0.093)   # log lot size in m^2
      m3_m <- lm(lprice ~ bdrms + llotsize.m, data = hprice)
      summary(m3_m)
      ```

      $$
      \widehat{\log\text{price}} = 9.1544 + 0.1217\,\text{bdrms} + 0.4532\,\text{llotsize.m}
      $$

      Exactly as predicted: $\hat\beta_1$ and $\hat\beta_2$ are **identical** to 7a, and the standard errors, t-statistics and $R^2$ are all unchanged. **Only the intercept** moved ($8.078 \to 9.154$). The fit is the same model wearing different units.
    related_terms: ["change-of-variables", "log-log-model"]
    source_doc_page: 4
---

> [!info] Solutions are Alfie's submitted work, not an official key.

*Related: [[Lec_08-Goodness of Fit & Multicollinearity]]*
