---
title: "Assignment 5"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-5.pdf
tags:
  - intro-econometrics
  - assignment
  - solutions
  - answer-key
  - OLS
  - F-test
  - goodness-of-fit
  - quadratic
  - dummy-variables
  - interaction-terms
  - omitted-variable-bias
  - chow-test
  - wage-regression
ai_drafted: true
questions:
  - id: "A1a"
    text: |
      **Part A, NBA salaries.** This question uses data on player statistics for 269 players in the National Basketball Association (NBA). Consider the model that predicts the number of points scored in a game (*points*) as a function of years in the league (*exper*), *age*, and years played in college (*coll*). The first version of this model (1) is estimated below and includes the variable experience squared (*expersq*).

      Model (1): `lm(points ~ exper + expersq + age + coll)`

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | 34.984 | 6.971 | 5.018 | 9.6e-07 |
      | exper | 2.337 | 0.405 | 5.776 | 2.1e-08 |
      | expersq | -0.07577 | 0.02343 | -3.234 | 0.0014 |
      | age | -1.062 | 0.294 | -3.606 | 0.0004 |
      | coll | -1.276 | 0.450 | -2.838 | 0.0049 |

      $R^2 = 0.1398$, adjusted $R^2 = 0.1268$, residual SE $=5.497$ on 264 df, F-statistic $=10.73$ on $(4,264)$, $p = 4.5\times10^{-8}$.

      **Q1. Model fit.**

      **(a)** Using the output above, conduct a test on the goodness-of-fit of the model, making sure to explicitly state the null hypothesis.
    solution: |
      The "goodness-of-fit test" is the **overall F-test** on all slopes jointly.

      1. **Hypotheses:** $H_0:\ \beta_{\text{exper}}=\beta_{\text{expersq}}=\beta_{\text{age}}=\beta_{\text{coll}}=0$ (the model has no explanatory power) vs $H_1:$ at least one $\beta_j \neq 0$.
      2. **Test statistic:** from the R output, $F = 10.73$ on $(4,\,264)$ df.
      3. **Critical value:** $\alpha=0.05$, $df_1=4$, $df_2=264$ gives $F_{0.95,4,264}\approx 2.41$.
      4. **Conclusion:** $10.73 > 2.41$, so **reject $H_0$**: the model has validity (the regressors are jointly significant).
    related_terms: ["f-test", "r-squared", "hypothesis-testing", "p-value"]
    source_doc_page: 1
  - id: "A1b"
    text: |
      **(b)** Is the model a good fit? At what significance level?
    solution: |
      **Yes, the model is statistically significant** (jointly significant at any conventional level; with $p\approx4.5\times10^{-8}$ you reject even far below the 1% level). But note the distinction: significance is not the same as explanatory power. $R^2\approx0.14$, so the fit is *real but weak*: only about 14% of scoring variation is explained.
    related_terms: ["r-squared", "adjusted-r-squared", "f-test", "p-value"]
    source_doc_page: 1
  - id: "A2"
    text: |
      **Q2. Quadratics.** Holding age and years in college fixed, at what level of experience (years in the league) does one additional year in the league lower the number of points scored in a game? Is this reasonable?
    solution: |
      The fitted scoring relationship in experience is $\widehat{\text{points}} = 2.33\,(\text{exper}) - 0.075\,(\text{exper})^2 + \dots$. Because experience enters quadratically, its marginal effect is **not** constant. Differentiate with respect to `exper`:

      $$
      \frac{\partial\,\widehat{\text{points}}}{\partial\,\text{exper}} = 2.33 - 2(0.075)\,\text{exper} = 0
      $$

      $$
      \text{exper}^\star = \frac{2.33}{2(0.075)} = \frac{2.33}{0.15} \approx 15.4\ \text{years}
      $$

      After **about 15.4 years** in the league, an additional year of experience starts to **lower** the points scored per game.

      > [!tip] Is this reasonable?
      > Yes. The parabola opens downward ($\beta_{\text{expersq}}<0$): points rise with experience early, peak around 15 years, then fall. Players who last 15+ seasons are aging veterans past their athletic prime, so the negative late-career slope is exactly what you would expect. *(The submission reports 15.42 years using the unrounded coefficients; $2.33/0.15\approx15.5$ with the rounded ones. Same conclusion.)*
    related_terms: ["quadratic-model", "marginal-effect", "functional-form"]
    source_doc_page: 2
  - id: "A3"
    text: |
      **Q3.** Why might the variable for number of years in college have a negative, statistically significant, coefficient? (Hint: the NBA can draft players before they graduate from college, and even right out of high school.)
    solution: |
      The coefficient is $\hat\beta_{\text{coll}}=-1.276$: every extra year spent in college predicts about **1.3 fewer points per game**. This is **not** "college makes you worse." The NBA can draft players *before* they graduate (even straight out of high school), so the **most talented players leave college early** to turn pro. Players who stay in college for the full four years are, on average, *less* elite prospects who were not "NBA-ready" sooner. So `coll` is acting as a negative **proxy for prospect quality**: a [[Omitted Variable Bias|selection / signalling]] effect, not a causal college effect.
    related_terms: ["omitted-variable-bias", "causality-vs-correlation", "model-misspecification"]
    source_doc_page: 2
  - id: "A4a"
    text: |
      **Q4.** The second version of the model (2) includes the variable age squared (*agesq*).

      Model (2): `lm(points ~ exper + expersq + age + agesq + coll)`

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | 73.863 | 35.850 | 2.060 | 0.040 |
      | exper | 2.844 | 0.611 | 4.652 | 5.2e-06 |
      | expersq | -0.1275 | 0.0523 | -2.437 | 0.015 |
      | age | -4.010 | 2.683 | -1.495 | 0.136 |
      | agesq | 0.05426 | 0.04908 | 1.106 | 0.270 |
      | coll | -1.303 | 0.450 | -2.894 | 0.004 |

      $R^2 = 0.1438$, adjusted $R^2 = 0.1275$, F $=8.83$ on $(5,263)$.

      **(a)** Is it necessary to include age squared in the model?
    solution: |
      **No.** In model (2), the p-value for `agesq` is $0.269$, far above the 0.05 level, so it is **not statistically significant** and there is no evidence the age effect is curved. Drop it.
    related_terms: ["quadratic-model", "t-test", "p-value"]
    source_doc_page: 2
  - id: "A4b"
    text: |
      **(b)** What does it tell us about the effect that age has, given that we control for years in the league (*exper*) and years played in college (*coll*)?
    solution: |
      In model (1), `age` was significant; as soon as `agesq` was added, **both `age` and `agesq` became insignificant**. The right reading: the relationship between age and points is essentially **linear, not quadratic** (each extra year of age is about $-1.06$ points, holding experience and college fixed). The joint insignificance in model (2) is a [[Multicollinearity|multicollinearity]] artefact: `age` and `agesq` are near-perfectly correlated, which inflates both standard errors.
    related_terms: ["multicollinearity", "quadratic-model", "functional-form"]
    source_doc_page: 2
  - id: "A5a"
    text: |
      **Q5.** The output below shows the regression of log(wage) (*lwage*) on *points*, *exper*, *expersq*, *age*, and *coll*.

      `lm(lwage ~ exper + expersq + points + age + coll)`

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | 6.793 | 0.846 | 8.033 | 2.2e-14 |
      | exper | 0.2194 | 0.0498 | 4.409 | 1.5e-05 |
      | expersq | -0.00717 | 0.00271 | -2.588 | 0.010 |
      | points | 0.07789 | 0.00713 | 10.919 | <2e-16 |
      | age | -0.04898 | 0.03496 | -1.401 | 0.163 |
      | coll | -0.04056 | 0.05290 | -0.767 | 0.444 |

      $R^2 = 0.4872$, F $=49.98$ on $(5,263)$.

      **(a)** Are *age* and *coll* statistically significant in the wage regression?
    solution: |
      **Neither is.** `age`: p-value $=0.167 > 0.05$, not significant. `coll`: p-value $=0.4438 > 0.05$, not significant. Once we control for experience and **points**, neither has a detectable independent effect on log wage.
    related_terms: ["t-test", "p-value", "hypothesis-testing"]
    source_doc_page: 2
  - id: "A5b"
    text: |
      **(b)** Given the results from the first model (1), what might we be concerned about with respect to the inclusion of experience and points in the wage equation?
    solution: |
      **Multicollinearity / a bad control.** From model (1) we know `points` is itself driven by `age`, `exper`, `expersq`, and `coll`. By putting the result (`points`) *and* its own determinants on the right-hand side, those regressors become highly correlated with each other. This makes individual coefficients (like `age` and `coll`) look insignificant even if they matter: their effect on wages runs *through* scoring, and `points` (a [[Bad Control|mediator]]) now absorbs it.
    related_terms: ["bad-control", "multicollinearity", "causality-vs-correlation", "variance-of-the-ols-estimator"]
    source_doc_page: 2
  - id: "B1ab"
    text: |
      **Part B, post-secondary education.** Use the dataset `mosad_v2026.xlsx` (*mosad* means institution in Hebrew). It is a sample dataset from the Israeli central bureau of statistics. The survey contains 31,000 individuals who completed their undergraduate degrees in the early 2000s. 46% studied at universities and the rest were at colleges ("mechlalot") which are either government subsidized or private.

      **Q1. Data exploration.**

      **(a)** Create a dummy variable for each field of study (social science, business, law, engineering, computer science, or design) using the categorical variable *thum*. (Hint: use either `as.numeric()` or `ifelse()` and make sure that your dummy variables take values of 0 or 1 and not TRUE or FALSE.)

      **(b)** Create dummy variables for each type of degree-granting institution (university, subsidized college, and non-subsidized college) using the variable *mosad_type4*.
    solution: |
      Fields from `thum`: `social_sci` (3), `business` (6), `law` (7), `engineering` (9), **`comp_sci` (12) = base**, `design` (13). Institutions from `mosad_type4`: `univ` (1), `sub_coll` (2), **`priv_coll` (3) = base**.

      ```r
      data$business <- ifelse(data$thum == 6, 1, 0)   # one per field
      data$univ     <- ifelse(data$mosad_type4 == 1, 1, 0)
      data$sub_coll <- ifelse(data$mosad_type4 == 2, 1, 0)
      ```

      A [[Dummy Variable|dummy variable]] is a 0/1 indicator for membership of a category. The `ifelse(condition, 1, 0)` form forces a genuine numeric 0/1 rather than a logical `TRUE/FALSE`.

      > [!warning] The dummy-variable trap
      > You have **six** fields and **three** institution types, but you include only **five** field dummies and **two** institution dummies in any regression. Including every category plus an intercept makes the dummies sum to a column of 1s, which is **perfect collinearity** with the intercept (the [[Dummy Variable Trap|dummy-variable trap]]). The omitted category becomes the **[[Base Category|base]]**: here **private-college, computer-science** graduates.
    related_terms: ["dummy-variable", "base-category", "dummy-variable-trap", "perfect-multicollinearity"]
    source_doc_page: 3
  - id: "B1c"
    text: |
      **(c)** Create the outcome variable *log_wageafter3*: the log of the average monthly wage three years after completing the degree (*wageafter3*). Provide a statistical description of the sample distribution for this variable.
    solution: |
      The sample distribution is **slightly negatively skewed**: the mean ($9.185$) sits *below* the median ($9.244$). The skew is driven by extreme low-income outliers (min $=0.048$). The middle 50% of the population earns between **8.79 and 9.68 log points**, which corresponds to a monthly wage of roughly **₪6,594 to ₪16,858**.
    related_terms: ["log-level-model"]
    source_doc_page: 3
  - id: "B1d"
    text: |
      **(d)** How does the distribution of *log_wageafter3* change for each type of degree-granting institution?
    solution: |
      **Subsidized colleges (type 2) have the highest median log-wage**, followed by universities, then private colleges. *(This is the raw, unconditional ranking, before controlling for field, gender, experience, or ability.)*
    related_terms: ["log-level-model", "conditional-mean"]
    source_doc_page: 3
  - id: "B1e"
    text: |
      **(e)** Create a variable *experience* measuring the total number of months worked for the first three years after graduation (including year of degree completion). (Hint: unlike in part c, you should add up all four variables on number of months worked.)
    solution: |
      `experience` is the sum of all four months-worked variables, `monthafter0` to `monthafter3` (so it ranges from 0 to 48 months).
    related_terms: []
    source_doc_page: 3
  - id: "B1f"
    text: |
      **(f)** How does the distribution of *experience* (from 1e) change for each type of degree-granting institution?
    solution: |
      Experience is **very similar between university and subsidized-college graduates**: both have a median of **44 months** worked. **Private-college graduates** have a slightly lower distribution (median **42 months**, mean **38.8 vs about 40.6**), suggesting they take slightly longer to enter the workforce.
    related_terms: ["conditional-mean"]
    source_doc_page: 3
  - id: "B1g"
    text: |
      **(g)** What is your opinion? Are students who graduate university vs. those from colleges similar in how much they earn three years out?
    solution: |
      There is only a **small difference** in earnings by institution three years out. Surprisingly, **subsidized-college graduates outperform** both university and private-college graduates on the raw numbers, a reminder that descriptive gaps need the regression controls before they can be interpreted.
    related_terms: ["causality-vs-correlation", "conditional-mean"]
    source_doc_page: 3
  - id: "B2a"
    text: |
      **Q2. Wage regression.**

      **(a)** Run a log-level regression using your outcome variable (log monthly wage 3 years after completing the degree). The explanatory variables are: degree-granting institution (use private as the base category), field of study (use computer science as the base category), gender, and experience. Use the respective dummy variables you created in Q1. (Hint: your final model should have 10 parameters including the intercept.)
    solution: |
      ```r
      model_2a <- lm(log_wageafter3 ~ univ + sub_coll +
                       social_sci + business + law + engineering + design +
                       kodmin + experience, data = data)
      ```

      Base category = **private-college, computer-science** graduates. 1 intercept + 2 institution + 5 field + 1 gender + 1 experience = **10 parameters**.
    related_terms: ["log-level-model", "dummy-variable", "base-category", "ols-estimation"]
    source_doc_page: 3
  - id: "B2b"
    text: |
      **(b)** Interpret the coefficient estimates and report on their significance.
    solution: |
      **All coefficients are significant**: their p-values are all very small (significant even at the $\alpha=0.01$ level). Reading the two headline effects (log-level means semi-elasticities):

      - **Institution:** university graduates earn **about 24.7% more** than private-college graduates, controlling for field of study, gender, and experience.
      - **Field of study:** business majors earn **about 30% LESS** than computer-science majors with the same institution type, gender, and experience.

      *(These use the linear $100\beta\%$ approximation as submitted; the exact $(e^\beta-1)$ values are about +28% for university and about -26% for business. Same direction, used for the verbal answer.)*
    related_terms: ["log-level-model", "dummy-variable", "base-category", "t-test", "marginal-effect"]
    source_doc_page: 3
  - id: "B2c"
    text: |
      **(c)** Is there a significant difference between the three types of degree-granting institutions? Conduct the appropriate hypothesis test.
    solution: |
      ```r
      linearHypothesis(model_2a, c("univ = 0", "sub_coll = 0"))
      ```

      1. **Hypotheses:** $H_0:\beta_{\text{univ}}=\beta_{\text{sub\_coll}}=0$ (no difference between institution types) vs $H_1:$ at least one $\neq 0$.
      2. **Statistic:** the $F$ from `linearHypothesis`; its $\Pr(F)$ is very small.
      3. **Conclusion:** significant even at $\alpha=0.01$, so **reject $H_0$**. There **is** a significant difference between institutions and their effect on wages.

      A joint F-test is the right tool whenever a categorical variable is split across several dummies.
    related_terms: ["f-test", "hypothesis-testing", "dummy-variable"]
    source_doc_page: 3
  - id: "B3ab"
    text: |
      **Q3. Omitted variables.**

      **(a)** Rerun the regression in (2a), this time adding the explanatory variable for IQ proxy.

      **(b)** How does inclusion of IQ proxy affect the estimation results?
    solution: |
      ```r
      model_3a <- lm(log_wageafter3 ~ univ + sub_coll + social_sci + business +
                       law + engineering + design + kodmin + experience + iqproxy,
                     data = data)
      ```

      - **IQ-proxy coefficient:** each 1-point rise in the psychometric score is associated with a rise in wages of **about 0.14%**; for a 100-point increase, wages rise **about 14%**.
      - **Institution coefficients move sharply:** `univ` falls from **about +0.05 to -0.07**; `sub_coll` falls from **about -0.09 to -0.10**.

      After controlling for innate ability, the **university advantage disappears**: holding ability constant, a university graduate is now predicted to earn **about 6.8% LESS** than a private-college graduate. Leaving IQ out of the model made universities look better than they actually are. This is textbook [[Omitted Variable Bias|omitted-variable bias]]: abler students score higher *and* sort into universities *and* earn more, so omitting IQ biased the university coefficient **upward**.
    related_terms: ["omitted-variable-bias", "log-level-model", "dummy-variable"]
    source_doc_page: 3
  - id: "B3c"
    text: |
      **(c)** A colleague of yours claims that the difference in wages between university and college graduates are not due to gaps in quality of institution but rather because better students opt to attend university. Do your regression results support this claim?
    solution: |
      **Yes, it supports the claim.** Including the IQ proxy significantly altered the results: the university coefficient dropped from about +0.05 to -0.07, **switching from a wage premium to a wage penalty** relative to private colleges. This indicates the model without IQ *overestimated* the institutional effect, and supports the colleague's claim that wage differences are driven by the **sorting of higher-ability students into universities** rather than by the quality of the institutions themselves.
    related_terms: ["omitted-variable-bias", "causality-vs-correlation"]
    source_doc_page: 3
  - id: "B4a"
    text: |
      **Q4. Interactions** (answerable after the lecture on interaction terms).

      **(a)** Use interaction terms to run a regression to check if the rate of return of wage from experience is different between university and colleges. (Hint: create new variables representing the interaction terms between your dummies on degree-granting institution and experience.)
    solution: |
      ```r
      data$univ_exp <- data$univ * data$experience
      data$sub_exp  <- data$sub_coll * data$experience
      model_int <- lm(log_wageafter3 ~ univ + sub_coll + experience +
                        univ_exp + sub_exp + social_sci + business + law +
                        engineering + design + kodmin + iqproxy, data = data)
      ```

      Interaction terms let the effect of experience on wages **differ by institution type**. Total return to a month of experience by institution:

      $$
      \text{return} = \begin{cases} \beta_{\text{experience}} & \text{private college (base)}\\ \beta_{\text{experience}} + \beta_{\text{univ\_exp}} & \text{university}\\ \beta_{\text{experience}} + \beta_{\text{sub\_exp}} & \text{subsidized college}\end{cases}
      $$
    related_terms: ["interaction-term", "dummy-variable", "marginal-effect", "log-level-model"]
    source_doc_page: 3
  - id: "B4b"
    text: |
      **(b)** Use an F-test to check if experience has a different rate of return depending on the institution type.
    solution: |
      ```r
      linearHypothesis(model_int, c("univ_exp = 0", "sub_exp = 0"))
      ```

      1. **Hypotheses:** $H_0:\beta_{\text{univ\_exp}}=\beta_{\text{sub\_exp}}=0$ vs $H_1:$ at least one $\neq 0$.
      2. **Test result:** $F = 1.475$, $p\text{-value} = 0.2286$.
      3. **Conclusion:** since $p = 0.2286$ is much larger than $\alpha=0.05$, we **fail to reject $H_0$**.
      4. **Interpretation:** the interaction terms are **not jointly significant**: there is **no evidence** that an extra month of work experience pays differently depending on whether the person graduated from a university, a subsidized college, or a private college.
    related_terms: ["f-test", "interaction-term", "hypothesis-testing", "p-value"]
    source_doc_page: 4
  - id: "B5a"
    text: |
      **Q5. Separate regressions.**

      **(a)** Run the regression from (3a) separately for each type of degree-granting institution: university, subsidized college, and non-subsidized college.
    solution: |
      ```r
      reg_univ <- lm(log_wageafter3 ~ social_sci + business + law + engineering +
                       design + kodmin + experience + iqproxy,
                     data = subset(data, univ == 1))   # repeat for sub_coll, priv_coll
      ```

      Separate regressions let **every** coefficient (field, gender, experience, IQ) differ by institution; the pooled model (3a) lets only the **intercept** shift.
    related_terms: ["chow-test", "dummy-variable", "log-level-model"]
    source_doc_page: 4
  - id: "B5b"
    text: |
      **(b)** Use the results from (5a) to compare the predicted wage between someone who studied at a non-subsidized college versus a university. The person is a woman with 35 months of experience and a psychometric entrance exam score of 710 who studied business.
    solution: |
      | Institution | Predicted log(wage) | Actual wage (NIS) |
      |---|---:|---:|
      | University | 8.8846 | ₪7,228.31 ($e^{8.8846}$) |
      | Private college | 9.1778 | ₪9,679.69 ($e^{9.1778}$) |
      | **Difference (private minus university)** | | **about ₪2,451** |

      Under the separate models, the private-college prediction is **higher**, consistent with the IQ-controlled university *penalty* from Q3.
    related_terms: ["prediction", "log-level-model", "dummy-variable"]
    source_doc_page: 4
  - id: "B5c"
    text: |
      **(c)** Repeat (5b) above except this time use the regression results from (3a).
    solution: |
      Same person, using `model_3a` (institution enters only as a dummy):

      | Institution | Predicted log(wage) | Actual wage (NIS) |
      |---|---:|---:|
      | University | 9.025 | ₪8,312.39 ($e^{9.025}$) |
      | Private college | 9.093 | ₪8,896.09 ($e^{9.093}$) |
      | **Difference (private minus university)** | | **₪583.70** |
    related_terms: ["prediction", "log-level-model", "dummy-variable"]
    source_doc_page: 4
  - id: "B5d"
    text: |
      **(d)** Explain the differences between the predictions in 5b and 5c.
    solution: |
      The **separate models (5b)** allow **all** coefficients to differ by institution. They are more flexible (but require more data) and can capture nuances like a gender gap or a return-to-business that varies across institutions. The **pooled model (5c)** forces every slope (field, gender, experience, IQ) to be equal and shifts only the intercept by institution, so it cannot capture that heterogeneity. The two predictions diverge (₪2,451 vs ₪584 gap) exactly because the separate models pick up institution-specific structure the pooled model assumes away, which the Chow-Fisher test (Q6) formalises.
    related_terms: ["chow-test", "chow-fisher-test", "interaction-term"]
    source_doc_page: 4
  - id: "B6"
    text: |
      **Q6.** Conduct a Chow-Fisher test of structural change between the three degree-granting institutions and address the significance of the test. You can use either version of the test (optional: try both!).
    solution: |
      ```r
      ssr_R  <- sum(resid(model_3a)^2)                                  # restricted (pooled)
      ssr_UR <- sum(resid(reg_univ)^2)+sum(resid(reg_sub)^2)+sum(resid(reg_priv)^2)  # unrestricted
      k <- 9; g <- 3; n <- nrow(data_complete)
      f_chow  <- ((ssr_R - ssr_UR)/(k*(g-1))) / (ssr_UR/(n - g*k))
      p_value <- pf(f_chow, k*(g-1), n - g*k, lower.tail = FALSE)
      ```

      $$
      F = \frac{\big(\text{SSR}_R - \text{SSR}_{UR}\big)/\big[k(g-1)\big]}{\text{SSR}_{UR}/\big(n - g k\big)}
      $$

      **Hypotheses:** $H_0:$ all coefficients equal across the three institution types (pooling valid) vs $H_1:$ at least some differ. **df:** numerator $k(g-1)=9\times2=18$; denominator $n-gk=n-27$. With $N\approx31{,}000$ the test is highly powered, so $p$ is essentially $0$, so **reject $H_0$**: there is **structural change**. The wage-generating relationships differ across institution types, and the separate regressions are the appropriate specification.

      > [!tip] Reconciling Q4b and Q6
      > These are not in conflict. Q4b tested only whether the **experience slope** differs (it does not: $p=0.229$). Q6 tests whether the **entire coefficient vector** differs, and with this many observations even small differences in *other* slopes (field, gender, IQ) are detected, so pooling is rejected.
    related_terms: ["chow-fisher-test", "chow-test", "f-test", "hypothesis-testing"]
    source_doc_page: 4
---

> [!info] Solutions are Alfie's submitted work, not an official key.

*Related: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]]*
