---
title: "Quick Self-Test"
subject: intro-econometrics
type: self-test
description: "18 new exam-style questions in course order, each with the full working: t-tests, CIs, F-tests, anova, the Chow test, units, log interpretations, quadratics, dummies and interactions, omitted variables, multicollinearity, adjusted R-squared and WLS. Six are quick multiple-choice checks."
course: Intro to Econometrics
semester: 1
year: 2
order: 6
tags:
  - intro-econometrics
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Three t-tests on one coefficient"
    text: |
      A regression with an intercept and three regressors on $N = 64$ observations gives $\hat\beta_1 = 0.42$ with $se = 0.15$. Use $\alpha = 5\%$.

      a. Test $H_0: \beta_1 = 0$ against a two-sided alternative.

      b. Test $H_0: \beta_1 = 1$ against a two-sided alternative.

      c. Test whether $\beta_1$ is greater than 0.2.
    solution: |
      df $= N - M = 64 - 4 = 60$. Critical values: $t_{0.025}(60) = 2.000$, $t_{0.05}(60) = 1.671$.

      a. $t = 0.42/0.15 = 2.80 > 2.000$: reject. $\beta_1$ is significant.

      b. $t = (0.42 - 1)/0.15 = -3.87$, $\vert -3.87\vert > 2.000$: reject. R's printed 2.80 is useless here.

      c. $H_0: \beta_1 \le 0.2$, $H_1: \beta_1 > 0.2$. $t = (0.42 - 0.2)/0.15 = 1.47 < 1.671$: fail to reject. The data do not show $\beta_1 > 0.2$ at 5%.
  - id: "2"
    title: "2 · A one-sided p-value"
    text: |
      R prints $t = 1.78$ and $\Pr(>\vert t\vert) = 0.08$ for $\hat\beta_2$. The claim is that $X_2$ **raises** $Y$. What do you conclude at 5%?
    options:
      - label: a
        text: |
          Fail to reject, because $0.08 > 0.05$.
        why: |
          That compares the two-sided p-value. The claim is one-sided, so all of $\alpha$ sits in the right tail.
      - label: b
        text: |
          Reject, because the two-sided test rejects at 5%.
        why: |
          The two-sided test does not reject: $0.08 > 0.05$.
      - label: c
        text: |
          Reject, because the one-sided p-value is $0.08/2 = 0.04 < 0.05$.
        correct: true
        why: |
          $t$ is positive, the side $H_1$ points to, so the one-sided p-value is half the printed one.
      - label: d
        text: |
          Cannot say without the standard error.
        why: |
          The p-value already contains everything needed.
    solution: |
      $H_0: \beta_2 \le 0$, $H_1: \beta_2 > 0$. Since $t = 1.78 > 0$, the one-sided p-value is $0.08/2 = 0.04 < 0.05$: reject. **(c)**
  - id: "3"
    title: "3 · Confidence intervals and the p-value"
    text: |
      $\hat\beta = -1.2$, $se = 0.5$, 100 degrees of freedom ($t_{0.025} = 1.984$, $t_{0.005} = 2.626$).

      a. Build the 95% and the 99% confidence intervals.

      b. Without a table of p-values, between which two numbers must the p-value of $H_0: \beta = 0$ lie?
    solution: |
      a. 95%: $-1.2 \pm 1.984 \cdot 0.5 = -1.2 \pm 0.992 = (-2.192,\ -0.208)$.
      99%: $-1.2 \pm 2.626 \cdot 0.5 = -1.2 \pm 1.313 = (-2.513,\ 0.113)$.

      b. 0 is outside the 95% CI, so the test rejects at 5%: $p < 0.05$. 0 is inside the 99% CI, so it does not reject at 1%: $p > 0.01$. So $0.01 < p < 0.05$ (in fact $t = -2.4$, $p \approx 0.018$).
  - id: "4"
    title: "4 · A joint F-test in R-squared form"
    text: |
      A house-price model has an intercept, two continuous regressors and three neighbourhood dummies ($N = 150$, $R^2 = 0.42$). Without the three dummies $R^2 = 0.36$. Do the neighbourhoods matter at 5%? ($F_{0.05}(3, 144) \approx 2.67$.)
    solution: |
      $H_0$: the three dummy coefficients are all 0. Restricted model: drop the dummies. $q = 3$, $N - M = 150 - 6 = 144$.

      $$F = \frac{(0.42 - 0.36)/3}{(1 - 0.42)/144} = \frac{0.02}{0.004028} = 4.97 > 2.67.$$

      Reject: the neighbourhoods are jointly significant. The $R^2$ form is allowed because both models have the same dependent variable.
  - id: "5"
    title: "5 · What does anova test?"
    text: |
      `anova(lm(y ~ x1 + d), lm(y ~ x1 + d + x1:d + x2 + I(x2^2)))` is run. Which null hypothesis does its F-test check?
    options:
      - label: a
        text: |
          The coefficients on `x1:d`, `x2` and `x2^2` are all 0 ($q = 3$).
        correct: true
        why: |
          `anova(small, big)` tests that every term in the big model and not in the small one is 0.
      - label: b
        text: |
          All five slopes of the big model are 0.
        why: |
          That is the overall F at the bottom of `summary` for the big model.
      - label: c
        text: |
          The coefficients on `d` and `x1:d` are both 0.
        why: |
          `d` is in both models, so it is not restricted.
      - label: d
        text: |
          The two models have the same $R^2$.
        why: |
          The hypotheses are about parameters, never about statistics.
    solution: |
      The restricted model is `y ~ x1 + d`; the unrestricted one adds `x1:d`, `x2` and `x2^2`. The null sets those three coefficients to 0, so `Df` in the table is 3. **(a)**
  - id: "6"
    title: "6 · A Chow test from three RSS values"
    text: |
      A model with an intercept and three regressors is run on group A (60 observations, RSS 210), group B (40 observations, RSS 230) and on everyone (RSS 520). Do the groups need separate models at 5%? ($F_{0.05}(4, 92) \approx 2.47$.)
    solution: |
      $H_0$: all four coefficients are the same in both groups. $M = 4$, so $q = 4$ and $N - 2M = 100 - 8 = 92$.

      $$F = \frac{(520 - (210 + 230))/4}{(210 + 230)/92} = \frac{20}{4.783} = 4.18 > 2.47.$$

      Reject: estimate the two groups separately.
  - id: "7"
    title: "7 · Changing units in a level model"
    text: |
      $\widehat{wage} = 3000 + 450\,educ + 25\,exp$, with wage in NIS per month and experience in years.

      a. Wage is re-measured in thousands of NIS. What is the new equation?

      b. Experience is instead measured in months (wage back in NIS). What changes?

      c. What happens to the t-statistics in each case?
    solution: |
      a. $wage_{old} = 1000\cdot wage_{new}$, so dividing through by 1000: $\widehat{wage}_{new} = 3 + 0.45\,educ + 0.025\,exp$. Every coefficient is divided by 1000.

      b. $exp_{years} = exp_{months}/12$, so $25\,exp_{years} = \tfrac{25}{12}exp_{months}$: the slope becomes $2.083$. The intercept and the education slope do not change.

      c. Nothing: each $\hat\beta$ and its standard error scale by the same factor.
  - id: "8"
    title: "8 · Units inside a log"
    text: |
      A demand curve is estimated as $\widehat{\ln Q} = 4.1 - 1.3\ln P$ with $P$ in shekels. Price is re-measured in agorot (1 shekel = 100 agorot). What happens?
    options:
      - label: a
        text: |
          The slope becomes $-0.013$.
        why: |
          That would be the rule for a level regressor. Inside a log, a factor becomes an added constant.
      - label: b
        text: |
          The slope becomes $-130$.
        why: |
          Same mistake, in the other direction.
      - label: c
        text: |
          Nothing changes.
        why: |
          The intercept absorbs the constant, so it does change.
      - label: d
        text: |
          The slope stays $-1.3$ and the intercept becomes about 10.09.
        correct: true
        why: |
          $\ln P_{shekel} = \ln P_{agorot} - \ln 100$, so the intercept gains $1.3\ln 100 = 5.99$.
    solution: |
      Substitute $\ln P_{shekel} = \ln P_{agorot} - \ln 100$: $\ln Q = 4.1 - 1.3(\ln P_{agorot} - 4.605) = 10.09 - 1.3\ln P_{agorot}$. The elasticity is unit-free, so it cannot change. **(d)**
  - id: "9"
    title: "9 · Interpreting a log wage equation"
    text: |
      $\widehat{\ln wage} = 1.8 + 0.07\,educ + 0.25\ln hours - 0.12\,female$.

      Interpret each of the three slopes, and give the exact percent for the two that are approximations.
    solution: |
      - $educ$ (log-level): one more year of education is associated with about **7%** higher wage, holding the rest fixed. Exactly $e^{0.07} - 1 = 7.25\%$.
      - $\ln hours$ (log-log): a 1% rise in hours is associated with a **0.25%** rise in wage. This is an elasticity, exact by construction.
      - $female$ (dummy in a log model): women earn about **12%** less than men with the same education and hours. Exactly $e^{-0.12} - 1 = -11.3\%$.
  - id: "10"
    title: "10 · A quadratic"
    text: |
      $\hat Y = 50 + 12X - 0.4X^2$.

      a. Find the marginal effect at $X = 10$ and at $X = 20$.

      b. Find the $X$ that maximises or minimises $\hat Y$, say which, and the predicted $Y$ there.
    solution: |
      a. $\partial \hat Y/\partial X = 12 - 0.8X$: at $X = 10$ it is $+4$, at $X = 20$ it is $-4$.

      b. $12 - 0.8X = 0 \Rightarrow X^* = 15$. The coefficient on $X^2$ is negative, so it is a **maximum**: $\hat Y = 50 + 180 - 90 = 140$.
  - id: "11"
    title: "11 · An interaction"
    text: |
      $\hat Y = 5 + 2X + 3D - 1.5\,D\cdot X$, where $D$ is a dummy. What is the effect of one more unit of $X$ for the $D = 1$ group?
    options:
      - label: a
        text: |
          $-1.5$
        why: |
          That is the difference between the two groups' slopes, not the slope itself.
      - label: b
        text: |
          $0.5$
        correct: true
        why: |
          The base slope plus the interaction: $2 - 1.5$.
      - label: c
        text: |
          $2$
        why: |
          That is the slope for the $D = 0$ group.
      - label: d
        text: |
          $3.5$
        why: |
          That adds the intercept shift to a slope.
    solution: |
      For $D = 1$: $\hat Y = (5 + 3) + (2 - 1.5)X = 8 + 0.5X$. The slope is **0.5**. **(b)**
  - id: "12"
    title: "12 · Three regions"
    text: |
      A log-price model includes dummies `north` and `south`; the centre is the base. $\hat\gamma_{north} = -0.08$ ($p = 0.03$), $\hat\gamma_{south} = 0.05$ ($p = 0.20$).

      a. Which region is cheapest, and by about how much compared with the most expensive?

      b. A classmate says "south is insignificant, so region does not matter". What is wrong, and how do you test it?
    solution: |
      a. Centre $= 0$, north $= -0.08$, south $= +0.05$. North is cheapest, about $0.05 - (-0.08) = 0.13$, i.e. 13% below the south.

      b. The south's t-test only compares the south with the **centre**. Whether region matters at all is the joint null $\gamma_{north} = \gamma_{south} = 0$: an F-test with $q = 2$, restricted model without both dummies.
  - id: "13"
    title: "13 · Omitted ability"
    text: |
      The true model is $\ln wage = \beta_0 + \beta_1 educ + \beta_2\,ability + u$ with $\beta_1 = 0.06$ and $\beta_2 = 0.5$. Regressing $ability$ on $educ$ gives a slope of $0.04$. Ability is not in the data, so you run $\ln wage$ on $educ$ alone.

      a. What slope do you expect, and which assumption fails?

      b. When would leaving out ability cause no bias?
    solution: |
      a. $\tilde\beta_1 = \beta_1 + \beta_2\,\delta_1 = 0.06 + 0.5 \cdot 0.04 = 0.08$: biased **upward** (both factors positive). Ability sits in the error and is correlated with education, so A2 ($E[u \mid educ] = 0$) fails.

      b. If ability had no effect on wages ($\beta_2 = 0$), or if it were uncorrelated with education ($\delta_1 = 0$). Both conditions are needed for bias.
  - id: "14"
    title: "14 · Insignificant, but jointly strong"
    text: |
      $X_1$ and $X_2$ have correlation 0.92. In the model with both, neither is significant at 5%, but the F-test that both are 0 has $p < 0.001$. What is the best reading?
    options:
      - label: a
        text: |
          Partial multicollinearity: keep both and report the joint test.
        correct: true
        why: |
          The textbook signature: individually insignificant, jointly significant, highly correlated.
      - label: b
        text: |
          Drop both: neither is significant.
        why: |
          The joint test says they matter. Dropping them causes omitted variable bias.
      - label: c
        text: |
          The OLS estimates are biased.
        why: |
          Multicollinearity breaks no assumption: OLS stays unbiased, only the variances grow.
      - label: d
        text: |
          Heteroskedasticity.
        why: |
          Nothing here is about the variance of the errors.
    solution: |
      High correlation inflates $\operatorname{Var}(\hat\beta_j) = \sigma^2/((1 - R_j^2)S_{jj})$, so each t-statistic is small even though together they explain a lot. **(a)**
  - id: "15"
    title: "15 · Choosing between two models"
    text: |
      On $N = 40$: model A has an intercept and 2 regressors, $R^2 = 0.50$. Model B adds 3 more regressors, $R^2 = 0.53$. Which fits better once size is accounted for?
    solution: |
      $\bar R^2 = 1 - (1 - R^2)\frac{N - 1}{N - M}$.

      A: $1 - 0.50 \cdot \frac{39}{37} = 0.473$. B: $1 - 0.47 \cdot \frac{39}{34} = 0.461$.

      Model A: the three extra regressors raise $R^2$ by less than chance would, so adjusted $R^2$ falls. (A joint F-test of the three gives $F = \frac{0.03/3}{0.47/34} = 0.72$, insignificant, which agrees.)
  - id: "16"
    title: "16 · Writing the WLS model"
    text: |
      $y = \beta_0 + \beta_1 x + \beta_2 w + u$ with $\operatorname{Var}(u \mid x, w) = \sigma^2 x$ ($x > 0$).

      a. Write the WLS model and show its errors are homoskedastic.

      b. Does it have an intercept? Write the R call.
    solution: |
      a. $h = x$, divide every term by $\sqrt x$:
      $$\frac{y}{\sqrt x} = \beta_0\frac{1}{\sqrt x} + \beta_1\sqrt x + \beta_2\frac{w}{\sqrt x} + \frac{u}{\sqrt x},\qquad \operatorname{Var}\!\left(\frac{u}{\sqrt x}\right) = \frac{\sigma^2 x}{x} = \sigma^2.$$

      b. No regressor is a constant any more, so there is no intercept: `lm(y.h ~ 0 + intercept.h + x.h + w.h)` with `y.h = y/sqrt(x)`, `intercept.h = 1/sqrt(x)`, `x.h = sqrt(x)`, `w.h = w/sqrt(x)`. The same three $\beta$s are estimated.
  - id: "17"
    title: "17 · What heteroskedasticity breaks"
    text: |
      A1 to A3 hold but the residuals fan out against $X$. Which statement is right?
    options:
      - label: a
        text: |
          The OLS estimates are biased.
        why: |
          Unbiasedness needs only A1 and A2.
      - label: b
        text: |
          OLS is still BLUE, only the standard errors are wrong.
        why: |
          Gauss-Markov needs A4, so OLS is no longer best.
      - label: c
        text: |
          OLS is unbiased but not efficient, and the usual standard errors are biased.
        correct: true
        why: |
          A4 fails: the estimates are fine on average, but inference and efficiency are not.
      - label: d
        text: |
          With a large sample nothing needs fixing.
        why: |
          The standard-error formula stays wrong at any sample size; use White SEs or WLS.
    solution: |
      Heteroskedasticity violates A4 only. **(c)** The fixes: WLS when the variance form is known, White (robust) standard errors when it is not.
  - id: "18"
    title: "18 · Three quick claims"
    text: |
      True or false?

      a. Adding a regressor can never lower $R^2$.

      b. OLS residuals sum to zero in a regression through the origin.

      c. For a single restriction the F-statistic is the square of the t-statistic.
    solution: |
      a. **True.** OLS could set the new coefficient to 0 and do no worse, so RSS cannot rise. That is why adjusted $R^2$ exists.

      b. **False.** $\sum \hat u_i = 0$ comes from the first-order condition for the intercept. Without an intercept there is no such condition.

      c. **True.** $F(1, N - M) = t^2(N - M)$, and the two tests always agree.
---

> New questions in the style of the finals, in course order. Try each before opening the solution. For the past-paper versions see the [[Past Paper Topic Map]].
