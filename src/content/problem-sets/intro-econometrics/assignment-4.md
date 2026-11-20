---
title: "Assignment 4"
subject: intro-econometrics
source_doc: /papers/intro-econometrics/assignment-4.pdf
tags:
  - intro-econometrics
  - assignment
  - OLS
  - omitted-variable-bias
  - F-test
  - t-test
  - quadratic
  - multicollinearity
  - log-log
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Q1.** In each of the following situations will the OLS estimator be biased? Explain why or why not.

      **(a)** The variance of the random errors is not constant.
    solution: |
      **No, not biased.** Heteroskedasticity breaks the homoskedasticity assumption (the 4th), so OLS is no longer BLUE, but it stays **unbiased and consistent**. The real problem is that the usual standard errors are wrong, so t and F tests become unreliable. See [[Lec_12-Heteroskedasticity]].
    related_terms: ["heteroskedasticity", "classical-assumptions", "gauss-markov-theorem", "ols-estimation"]
    source_doc_page: 1
  - id: "1b"
    text: |
      **(b)** A variable that affects the outcome variable is missing from the model.
    solution: |
      **Yes, biased, if** the missing variable is correlated with an included explanatory variable. If it is uncorrelated with all of them, OLS stays unbiased (but less efficient). See [[Omitted Variable Bias]].
    related_terms: ["omitted-variable-bias", "model-misspecification"]
    source_doc_page: 1
  - id: "1c"
    text: |
      **(c)** Two of the explanatory variables have a high correlation of 0.95.
    solution: |
      **No, not biased.** High (imperfect) [[Multicollinearity]] does not cause bias. It **inflates the variance (standard errors)** of the affected coefficients, making it harder to find individual variables significant.

      > [!tip] Intuition
      > Bias is about the *average* of the estimator being off target (needs a violated exogeneity assumption). Heteroskedasticity and multicollinearity only change how *noisy* the estimates or their standard errors are.
    related_terms: ["multicollinearity", "variance-of-the-ols-estimator", "correlation"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Q2.** Consider the following estimated regression on $N = 706$ observations.

      $$
      \widehat{sleep} = 3{,}638.25 - 0.148\,totwrk - 11.13\,educ + 2.20\,age
      $$

      Standard errors: intercept 112.28, totwrk 0.017, educ 5.88, age 1.45. The goodness-of-fit is $R^2 = 0.113$.

      **(a)** Are *educ* and *age* each statistically significantly different from zero at $\alpha = 5\%$? (Make sure to show how you calculate the t-statistic.)
    solution: |
      $$
      t=\frac{\hat\beta_j-0}{SE(\hat\beta_j)}
      $$

      - `educ`: $t=\dfrac{-11.13}{5.88}=-1.89$
      - `age`: $t=\dfrac{2.20}{1.45}=1.517$
      - Critical value: $t_{0.025}[\infty]=1.96$

      Both $|t|<1.96$, so **neither is statistically significant**; we fail to reject $H_0$ at 5%.
    related_terms: ["t-test", "hypothesis-testing", "p-value"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **(b)** Test the hypothesis that the effect size of *totwrk* is positive (at $\alpha = 5\%$).
    solution: |
      1. $H_0:\beta_{totwrk}\le 0$ vs $H_1:\beta_{totwrk}>0$
      2. $t=\dfrac{-0.148-0}{0.017}=-8.7$
      3. Critical value $t_{0.05}[\infty]=1.65$
      4. Since $-8.7<1.65$ we **fail to reject** $H_0$. The data suggest a strong **negative** relationship, not a positive one.
    related_terms: ["t-test", "hypothesis-testing"]
    source_doc_page: 1
  - id: "2c"
    text: |
      **(c)** Running the regression omitting *educ* and *age* we estimate the following, with $R^2 = 0.103$:

      $$
      \widehat{sleep} = 3{,}586.38 - 0.151\,totwrk
      $$

      Standard errors: intercept 38.91, totwrk 0.017.

      Are *educ* and *age* jointly statistically significant in the original estimation at $\alpha = 5\%$? (Hint: when the unrestricted and restricted models have the same outcome variable, there are two ways to calculate the F-statistic, one using the sums of squared residuals and one using the $R^2$ values.)
    solution: |
      Restricted model: $R^2_R=0.103$. Unrestricted $R^2_{UR}=0.113$, $q=2$ restrictions, $N-M=706-4$.

      $$
      F=\frac{(R^2_{UR}-R^2_R)/q}{(1-R^2_{UR})/(N-M)}=\frac{(0.113-0.103)/2}{(1-0.113)/(706-4)}=3.96
      $$

      Critical value $F_{0.05}[2,\infty]=3$. Since $3.96>3$, **educ and age are jointly significant at 5%** (reject $H_0:\beta_{educ}=\beta_{age}=0$).

      > [!tip] Intuition
      > Each is insignificant alone (2a) but significant together. Two weak signals can add up, and the joint F-test is the correct tool for a group. See [[F-test]].
    related_terms: ["f-test", "r-squared", "hypothesis-testing"]
    source_doc_page: 1
  - id: "2d"
    text: |
      **(d)** Does inclusion of *educ* and *age* have an impact on the marginal effect of *totwrk* on *sleep*?
    solution: |
      Unrestricted $\hat\beta_{totwrk}=-0.148$; restricted $-0.151$. Including them makes the negative effect of work on sleep **slightly smaller in size, but the change is very small**. Omitting them could in principle create bias, but the near-identical coefficients suggest any bias is minimal.
    related_terms: ["omitted-variable-bias", "marginal-effect"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Questions 3 to 5** use the dataset BWGHT2_v2026 on child birthweight (the same data as [[Assignment 1]]). No R is needed for these questions.

      **Q3. All-controls regression.** The results below show the estimated effect of the average number of cigarettes smoked on child birthweight, controlling for *npvis*, *mage* and *drink*. The variable *magesq* is the mother's age squared and *npvissq* is the number of physician visits squared.

      Model `lm.BW.control`: `bwght ~ cigs + npvis + npvissq + mage + magesq + drink`

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | 2188.3556 | 459.9037 | 4.758 | 2.17e-06 |
      | cigs | -10.9866 | 3.9199 | -2.803 | 0.00514 |
      | npvis | 30.9516 | 11.4014 | 2.715 | 0.00672 |
      | npvissq | -0.5838 | 0.3595 | -1.624 | 0.10465 |
      | mage | 62.7780 | 31.0093 | 2.024 | 0.04312 |
      | magesq | -0.9919 | 0.5199 | -1.908 | 0.05660 |
      | drink | -5.1426 | 56.5638 | -0.091 | 0.92757 |

      Residual SE 567.7 on 1325 df (133 observations deleted for missingness); $R^2=0.02363$, adjusted $R^2=0.01921$; $F=5.344$ on (6, 1325), $p=1.836\times10^{-5}$.

      **(a)** Test the significance of the control variables in the regression. Report which ones are statistically significant at $\alpha = 5\%$ and which ones are not.
    solution: |
      Using the p-values against 0.05:

      - **Significant:** `npvis` (0.007), `mage` (0.043)
      - **Not significant:** `npvissq` (0.104), `magesq` (0.056), `drink` (0.927)
      - `cigs` is significant too, but it is the variable of interest, not a control.

      > [!warning] Small transcription slip
      > The submission writes `npvis` p as 0.006; the output shows 0.00672 (0.007 rounded). The classification is unchanged.
    related_terms: ["t-test", "p-value", "hypothesis-testing"]
    source_doc_page: 2
  - id: "3b"
    text: |
      **(b)** For any variables that are statistically significant, interpret the coefficient estimates.
    solution: |
      - **cigs (-10.98):** each extra cigarette smoked per day lowers predicted birthweight by 10.98 units (grams).
      - **npvis (30.95):** each extra physician visit raises predicted birthweight by 30.95 units.
      - **mage (62.78):** each extra year of mother's age raises predicted birthweight by 62.78, but `magesq` is $-0.99$. Although `magesq` is not quite significant at 5%, it indicates (1) birthweight rises with mother's age, and (2) at a decreasing rate, eventually peaking and then declining (a [[Quadratic Model]]).
    related_terms: ["quadratic-model", "marginal-effect", "ols-estimation"]
    source_doc_page: 2
  - id: "3c"
    text: |
      **(c)** What is the predicted birthweight for a woman aged 30, who smokes 20 cigarettes a day, does not drink, and visited the physician 5 times during her pregnancy? What is the birthweight of a baby born to a woman with identical characteristics except she does not smoke?
    solution: |
      Coefficients rounded as in the submission:

      $$
      \widehat{bwght}=2188.35-10.98(cigs)+30.95(5)-0.58(5)^2+62.77(30)-0.99(30)^2-5.14(0)
      $$

      - **Mother A (20 cigarettes): $\widehat{bwght}=3101.1$**
      - **Mother B (0 cigarettes): $\widehat{bwght}=3320.7$**

      > [!warning] Rounding check
      > With the unrounded coefficients from the output I get 3099.4 (A) and 3319.1 (B), about 1.7 lower. The gap comes from rounding $-0.9919$ to $-0.99$ (it multiplies 900). The submitted values are kept. The gap between A and B is 219.6 either way (20 x 10.98).
    related_terms: ["prediction", "quadratic-model", "ols-estimation"]
    source_doc_page: 2
  - id: "3d"
    text: |
      **(d)** What is the predicted difference in birthweight of a baby whose mother never visited the doctor and who smoked 20 cigarettes a day, and one whose mother visited the doctor 8 times and who never smoked? Assume both mothers are the same age and drink the same amount.
    solution: |
      Same age and drinking, so those terms cancel. Only `cigs`, `npvis`, `npvissq` differ:

      - Mother A (0 visits, 20 cigs): $-10.98(20)+30.95(0)-0.58(0)^2=-219.6$
      - Mother B (8 visits, 0 cigs): $-10.98(0)+30.95(8)-0.58(8)^2=210.48$
      - **Difference $=210.48-(-219.6)=430.08$ units**, in favour of Mother B.

      > [!warning] Rounding check
      > Unrounded coefficients give about 429.98. Same conclusion.
    related_terms: ["prediction", "quadratic-model", "marginal-effect"]
    source_doc_page: 2
  - id: "4a"
    text: |
      **Q4. Quadratic terms.**

      **(a)** Consider the variable measuring the squared number of visits to the physician (*npvissq*). Why might we want to include this variable in our model? Given the level of significance of this variable, what can we say about the relationship between child birthweight and number of physician visits?
    solution: |
      We include it to see whether there are **diminishing returns** to doctor visits. Its p-value is 0.104, above 0.05, so the quadratic effect is **not statistically significant** at 5%, and the relationship between birthweight and visits is **mostly linear**.
    related_terms: ["quadratic-model", "p-value", "functional-form"]
    source_doc_page: 2
  - id: "4b"
    text: |
      **(b)** What is the optimal age to give birth if the goal is to reach the highest birthweight?
    solution: |
      The age part of the model is $f(x)=-0.99x^2+62.77x$. Set the derivative to zero:

      $$
      f'(x)=-1.98x+62.77=0\quad\Rightarrow\quad x=\frac{62.77}{1.98}=31.7
      $$

      The birthweight-maximising age is about **31.7 years**.

      ![](/images/intro-econometrics/assign-04-q4-age-turning-point.png)

      > [!tip] Intuition
      > Because $\beta_{magesq}<0$ the parabola opens downward, so the stationary point is a maximum. Caveat: `magesq` is only marginally significant (p = 0.057), so the peak is imprecisely estimated.
    related_terms: ["quadratic-model", "marginal-effect"]
    source_doc_page: 2
  - id: "5a"
    text: |
      **Q5. Model specification.** The researcher wishes to test the significance of all the controls jointly. The R call `anova(lm.BW.control, lm.BW)`, comparing the model with all controls to `lm.BW` (`bwght ~ cigs`), returns an error.

      **(a)** Explain the error above. Why does it occur?
    solution: |
      The two models were fitted on **different numbers of observations** (1383 for `lm.BW`, 1332 for `lm.BW.control`). The control variables contain NAs, so `lm.BW.control` drops rows that `lm.BW` keeps. An F-test comparison requires both models to be fitted on **the same sample**.
    related_terms: ["f-test", "model-misspecification"]
    source_doc_page: 3
  - id: "5b"
    text: |
      **(b)** Consider the output below (`lm.BW.R` is `bwght ~ cigs`, refitted on the control model's sample). What null hypothesis is being tested? What is the alternative hypothesis? What is the test statistic? Can we reject the null hypothesis at the 5% significance level?

      | Model | Res.Df | RSS | Df | Sum of Sq | F | p-value |
      |---|---:|---:|---:|---:|---:|---:|
      | 1 (unrestricted) | 1325 | 426969123 | | | | |
      | 2 (restricted) | 1330 | 433648214 | -5 | -6679091 | 4.1454 | 0.0009681 |
    solution: |
      - **$H_0$:** all control coefficients are zero. The submission writes $\beta_{npvis}=\beta_{mage}=\beta_{magesq}=\beta_{drink}=0$.
      - **$H_1$:** at least one control coefficient is non-zero (not written out in the submission).
      - **Test statistic:** $F=4.15$, $p=0.0009<0.05$, so we **reject $H_0$**: the controls are jointly significant.

      > [!warning] Hypothesis list is incomplete
      > There are five controls and five restrictions (Df = -5 in the output), so $H_0$ should also include $\beta_{npvissq}=0$. The submitted list omits it. The F and p are unaffected.
    related_terms: ["f-test", "hypothesis-testing", "p-value"]
    source_doc_page: 3
  - id: "5c"
    text: |
      **(c)** The coefficient on number of cigarettes smoked each day in `lm.BW.R` is $-12.906$. What can we learn from the comparison of this with the coefficient from `lm.BW.control` ($-10.98$)? (Hint: in your answer refer to A2 in the Gauss-Markov assumptions.)
    solution: |
      The coefficient on `cigs` changed from $-10.98$ (controlled) to $-12.906$ (uncontrolled). This suggests the simple regression suffered from **omitted variable bias**, violating A2 (zero conditional mean) if we think of the error term as containing these factors. The controls were **correlated with smoking habits**.

      > [!tip] Intuition
      > If the controls mattered but were unrelated to smoking, the `cigs` coefficient would not move when they are added. It moved, so they are related to smoking and to birthweight. See [[Omitted Variable Bias]].
    related_terms: ["omitted-variable-bias", "classical-assumptions", "gauss-markov-theorem"]
    source_doc_page: 3
  - id: "6a"
    text: |
      **Part B. Multivariate regression, discrimination dataset.** Use the file DISCRIM_v2026. This dataset was taken from research on discrimination in the United States. The claim was that fast-food restaurants charge higher prices in neighborhoods where a higher percentage of the population was black. Each observation $i$ is a different zipcode in New Jersey. The variables measure prices for different items at the restaurants and demographic characteristics of the populations living in the area.

      **Q6. Data exploration.**

      **(a)** Calculate the sample averages and standard deviations for the variables *prpblck*, *psoda* and *density*.
    solution: |
      ```r
      vars <- c("prpblck", "psoda", "density")
      means <- sapply(df[vars], mean, na.rm = TRUE)
      sds   <- sapply(df[vars], sd, na.rm = TRUE)
      ```

      | Variable | Mean | Std. dev. |
      |---|---:|---:|
      | prpblck | 0.1285852 | 0.1966039 |
      | psoda | 1.0624806 | 0.08434256 |
      | density | 4585.9734848 | 5241.439 |
    related_terms: []
    source_doc_page: 3
  - id: "6b"
    text: |
      **(b)** Create a scatterplot comparing price of soda (y-axis) against the proportion of black people.

      **(c)** Create a scatterplot comparing price of soda (y-axis) against income.
    solution: |
      ```r
      plot(df$prpblck, df$psoda, ...); abline(lm(psoda ~ prpblck, data = df), col = "red", lty = 2)
      plot(df$income, df$psoda, ...);  abline(lm(psoda ~ income,  data = df), col = "red", lty = 2)
      ```

      ![](/images/intro-econometrics/assign-04-q6-soda-scatterplots.png)

      *(The R plots from the submission.)*
    related_terms: ["correlation"]
    source_doc_page: 3
  - id: "6d"
    text: |
      **(d)** What can we learn from the scatterplots about the correct model and the relation between these variables?
    solution: |
      Both show **very weak positive relationships** between `psoda` and the explanatory variables. Neither variable alone explains much of the variation in soda prices.
    related_terms: ["functional-form", "correlation"]
    source_doc_page: 3
  - id: "7a"
    text: |
      **Q7. Regression model.** Consider the log-log model that explains the price of soda as a function of the proportion of black people living in the zipcode, and population density. Model (1):

      $$
      \log(psoda_i)=\beta_0+\beta_1\log(prpblck_i)+\beta_2\log(density_i)+u_i
      $$

      **(a)** Report the results of the OLS estimation of this regression in the form of a formula. (Hint: use the variables *lpsoda*, *lprpblck*, *ldensity*.)
    solution: |
      Output of `lm(lpsoda ~ lprpblck + ldensity)`:

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | -0.085683 | 0.045773 | -1.872 | 0.06238 |
      | lprpblck | -0.005805 | 0.003332 | -1.742 | 0.08265 |
      | ldensity | 0.015671 | 0.005137 | 3.051 | 0.00253 |

      Residual SE 0.07708 on 252 df (9 observations deleted); $R^2=0.03744$, adjusted $R^2=0.02978$; $F=4.901$ on (2, 252), $p=0.008167$.

      $$
      \widehat{\log(psoda)}=-0.086-0.0058\,\log(prpblck)+0.016\,\log(density)
      $$
    related_terms: ["log-log-model", "ols-estimation"]
    source_doc_page: 4
  - id: "7b"
    text: |
      **(b)** Test if the estimated parameters are each (separately) statistically significant (at $\alpha = 10\%$), and report the minimal statistical significance level for each variable.
    solution: |
      | Variable | p-value | Significant at 10%? | Minimal significance level |
      |---|---:|---|---|
      | lprpblck | 0.08265 | yes (0.08265 < 0.1) | 10% |
      | ldensity | 0.00253 | yes (0.00253 < 0.1) | 1% |
    related_terms: ["t-test", "p-value", "hypothesis-testing"]
    source_doc_page: 4
  - id: "7c"
    text: |
      **(c)** Interpret the estimated coefficient of *lprpblck*. Discuss whether or not you think it is economically significant (meaningful).
    solution: |
      Holding density constant, a **1% increase** in the proportion of black residents is associated with a **0.006% decrease** in soda price (the log-log coefficient is an elasticity; see [[Log-Log Model]]).

      The effect is very small: although marginally statistically significant, there is **no economic significance**, since 0.006% of a soda price is less than a penny.

      > [!tip] Intuition
      > Statistical significance says the effect is distinguishable from zero. Economic significance asks whether it is big enough to matter. Here the sign even goes the opposite way to the discrimination claim, and the size is trivial.
    related_terms: ["elasticity", "log-log-model", "t-test"]
    source_doc_page: 4
  - id: "8a"
    text: |
      **Q8. Restricted model.**

      **(a)** Run the single-variate regression of *lpsoda* (outcome) on *lprpblck*. Model (2):

      $$
      \log(psoda_i)=\beta_0+\beta_1\log(prpblck_i)+u_i
      $$
    solution: |
      $$
      \widehat{\log(psoda)}=0.0501-0.0022\,\log(prpblck)
      $$

      Output of `lm(lpsoda ~ lprpblck)`: intercept 0.050146 (SE 0.010783, t 4.651, p 5.34e-06); lprpblck -0.002192 (SE 0.003165, t -0.693, p 0.489). Residual SE 0.07833 on 253 df; $R^2=0.001892$, adjusted $R^2=-0.002053$; $F=0.4797$ on (1, 253), $p=0.4892$.
    related_terms: ["log-log-model", "simple-linear-regression", "ols-estimation"]
    source_doc_page: 4
  - id: "8b"
    text: |
      **(b)** Compare the estimated $\beta_1$ in Model (1) to that from Model (2). Is the effect of discrimination larger or smaller when we control for population density?
    solution: |
      - Model 1: $\hat\beta_1=-0.0058$
      - Model 2: $\hat\beta_1=-0.0022$

      The estimated discrimination effect is **larger (more negative) when controlling for density**.

      > [!warning] Wording slip in the submission
      > The handwritten reason says "because the $\hat\beta$ on lprpblck becomes less negative". That is the wrong direction: moving from Model 2 to Model 1 the coefficient goes from -0.0022 to -0.0058, i.e. it becomes **more** negative. The conclusion ("larger, more negative") is right; only the explanation's wording is backwards. Also note Model 2's $\hat\beta_1$ is insignificant (p = 0.489).
    related_terms: ["omitted-variable-bias", "log-log-model"]
    source_doc_page: 4
  - id: "8c"
    text: |
      **(c)** Use an F-test to test the null hypothesis that $\beta_2 = 0$ in Model (1).
    solution: |
      1. $H_0:\beta_2=0$ vs $H_1:\beta_2\ne 0$
      2. For a single restriction $F=t^2=(3.051)^2=9.31$
      3. Critical value $F_{0.05}[1,252]\approx 3.92$
      4. Since $9.31>3.92$, **reject $H_0$ at 5%**: population density belongs in the model, as it has a statistically significant effect on `psoda`.

      The R script also runs the nested comparison (output not in the write-up):

      ```r
      anova(model2, model1)
      ```

      > [!warning] Critical value
      > The submission uses 3.92 (the table value for about 120 denominator df). The exact value for (1, 252) is about 3.88. The conclusion is unchanged either way.
    related_terms: ["f-test", "hypothesis-testing", "t-test"]
    source_doc_page: 4
  - id: "9a"
    text: |
      **Q9. Control model.** Add another explanatory variable to create Model (3):

      $$
      \log(psoda_i)=\beta_0+\beta_1\log(prpblck_i)+\beta_2\log(density_i)+\beta_3\log(hseval_i)+\beta_4\log(income_i)+u_i
      $$

      **(a)** Report the results of adding the variables *lhseval* and *lincome* to the model. Write the new estimated regression model in the form of a formula.
    solution: |
      Output of Model (3):

      | Term | Estimate | Std. Error | t | p-value |
      |---|---:|---:|---:|---:|
      | (Intercept) | -0.2544301 | 0.2233268 | -1.139 | 0.25568 |
      | lprpblck | -0.0003421 | 0.0037856 | -0.090 | 0.92807 |
      | ldensity | 0.0060985 | 0.0056995 | 1.070 | 0.28565 |
      | lhseval | 0.0960493 | 0.0232040 | 4.139 | 4.76e-05 |
      | lincome | -0.0818597 | 0.0307252 | -2.664 | 0.00822 |

      Residual SE 0.07479 on 250 df (9 observations deleted); $R^2=0.101$, adjusted $R^2=0.08659$; $F=7.02$ on (4, 250), $p=2.269\times10^{-5}$.

      As submitted:

      $$
      \widehat{\log(psoda)}=-0.2544-0.00034\,\log(prpblck)+0.0061\,\log(density)+0.096\,\log(hseval)
      $$

      > [!warning] Equation is missing a term
      > The submitted formula stops after `lhseval`. The output also has `lincome` with coefficient $-0.0819$, so the full fitted equation is
      >
      > $$
      > \widehat{\log(psoda)}=-0.2544-0.00034\,\log(prpblck)+0.0061\,\log(density)+0.096\,\log(hseval)-0.082\,\log(income)
      > $$
    related_terms: ["log-log-model", "ols-estimation"]
    source_doc_page: 4
  - id: "9b"
    text: |
      **(b)** Test the hypothesis that these two newly added variables do not belong in the model.
    solution: "TODO"
    related_terms: ["f-test", "hypothesis-testing", "t-test"]
    source_doc_page: 4
  - id: "9c"
    text: |
      **(c)** Compare $\hat\beta_1$, the estimated coefficient of *lprpblck*, to your estimate from Model (1).
    solution: |
      - Model 1: $\hat\beta_{prpblck}=-0.0058$ (significant at 10%)
      - Model 3: $\hat\beta_{prpblck}=-0.00034$ (p = 0.93, not significant)

      After controlling for population density, income and house values, the coefficient on log(prpblck) becomes **much smaller and statistically insignificant**. The original negative relationship between `psoda` and `prpblck` was **driven by omitted variables**.
    related_terms: ["omitted-variable-bias", "log-log-model"]
    source_doc_page: 4
  - id: "10a"
    text: |
      **Q10. Multicollinearity.**

      **(a)** What is the linear correlation between the variables *lprpblck* and *ldensity*? What are the implications of this correlation (if any) on your OLS estimates for Model (1)?
    solution: |
      ```r
      cor(df$lprpblck, df$ldensity, use = "complete.obs")   # 0.3567
      ```

      A correlation of about 0.3 implies **partial multicollinearity**. This causes higher variance and standard errors for the OLS coefficients of Model 1.
    related_terms: ["multicollinearity", "correlation", "variance-of-the-ols-estimator"]
    source_doc_page: 4
  - id: "10b"
    text: |
      **(b)** What is the linear correlation between the variables *lhseval* and *lincome*? What are the implications of this correlation (if any) on your OLS estimates for Model (3)?
    solution: |
      ```r
      cor(df$lhseval, df$lincome, use = "complete.obs")     # 0.7785
      ```

      A correlation of about 0.78 implies **strong partial multicollinearity**, causing higher variance and standard errors for the OLS coefficients.

      > [!warning] Wrong model named
      > The handwritten answer to 10b says "of Model 1", but `lhseval` and `lincome` only appear in **Model 3**, which is what the question asks about. Read it as Model 3. (Also, 0.3567 is a moderate correlation; "partial multicollinearity" is the submission's phrasing.)

      > [!tip] Intuition
      > Despite the 0.78 correlation, both `lhseval` and `lincome` are individually significant in Model 3: the collinearity inflates their standard errors, but their effects are large enough to stay significant. See [[Multicollinearity]].
    related_terms: ["multicollinearity", "correlation", "variance-of-the-ols-estimator"]
    source_doc_page: 4
---

> [!info] Solutions are Alfie's submitted work, not an official key.

*Related: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_13-Exam Review]]*
