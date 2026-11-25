---
title: "2026 Moed A — Transit Spending, Interactions, Chow Test & Weighted Least Squares"
type: past-paper
status: official-solution
semester: 1
year: 2
course: "Intro Econometrics"
instructor: Dr. Aluma Dembo
exam: "Final Exam 2026 — Moed A (11 Feb 2026)"
source_doc: /papers/intro-econometrics/exam-2026-moed-a-solutions.pdf
tags:
  - intro-econometrics
  - past-paper
  - official-solution
  - log-log-model
  - omitted-variable-bias
  - multicollinearity
  - dummy-variable
  - interaction-term
  - f-test
  - chow-test
  - quadratic-model
  - heteroskedasticity
  - weighted-least-squares
aliases:
  - Dembo 2026 Moed A
  - Intro Metrics 2026 A
  - Transit Spending Exam
subject: intro-econometrics
in_scope: true
---

# 2026 Moed A — Transit Spending, Interactions, Chow Test & Weighted Least Squares

> Part of: [[Intro Econometrics]]
> **Final Exam 2026, Moed A (11 February 2026, 13:45)**, Introduction to Econometrics, Dr. Aluma Dembo. 100 points, 3 hours, open notes (20 pages), significance level 5% unless stated, round to 3 significant figures. Source: `Exam-2026-A-SOLUTIONS.pdf` (the lecturer's solution copy of the exam).
> Key concepts: [[t-test]], [[F-test]], [[p-value]], [[Confidence Interval]], [[Log-Log Model]], [[Elasticity]], [[Omitted Variable Bias]], [[Perfect Multicollinearity]], [[Multicollinearity]], [[Dummy Variable]], [[Interaction Term]], [[Chow Test]], [[Quadratic Model]], [[Heteroskedasticity]], [[Weighted Least Squares]], [[Gauss-Markov Theorem]], [[Normality of Errors (A5)]]
> Builds on: [[Lec_06-Hypothesis Tests & p-values]], [[Lec_07-Multiple Hypothesis Tests]], [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]], [[Lec_13-Exam Review]]

> [!success] Official solutions: every answer here is the lecturer's
> This paper came **with the lecturer's own worked solutions**. Every answer and every method below is taken from them. Where the paper shows the answer only as a tick box or as a handwritten line, it is transcribed here with the exam's marks. All arithmetic was re-checked, and **three small slips in the official solutions** are flagged where they occur (Q8 and Q14 wording, Q9B arithmetic). None of them changes a conclusion.

> [!warning] Slips in the official solutions (conclusions unaffected)
> - **Q1B:** the official test statistic is $-9.159$; the printed coefficient and standard error give $-9.161$. Both round to $-9.16$.
> - **Q8A:** the official null is $\beta_5=\beta_6=\beta_7=0$, but the ANOVA table has **4** restrictions (Df $=4$), so the null must also include $\beta_4$ (the `is.road` dummy).
> - **Q9B:** the official shows $(287-4)+(1180-4)=1469$. The sum is **1459**, which also matches the critical value printed in the exam (`qf(0.95, 4, 1459)` $=2.378$).
> - **Q14:** the official explanation says "$W$ is between 0 and 16". The data description says $W$ is between 0 and 4 (so $W.sq$ is between 0 and 16). The elimination argument still works: a 0 to 600 scale is far too large for $Z$ (0 to 4) or $W.sq$ (0 to 16).

---

## What this paper tests

> [!info] One paper, the whole course
> **Part I (53 pts)** is about **government spending on transit infrastructure** (1,467 country-year-type observations, 1995 to 2017). It tests, in order:
> 1. A **t-test against 1** for an elasticity (Q1) and **unit changes in logs** (Q2).
> 2. **Perfect multicollinearity** from two complementary dummies (Q3), and **significance** of dummies (Q4).
> 3. **Omitted variable bias** read from a pair of regressions plus a correlation table (Q5), and the **goodness-of-fit F-test** (Q6).
> 4. **Interactions**: elasticity for one group, and a t-test of a difference (Q7), then a **joint F-test** on a block of dummies and interactions (Q8) and a **Chow test** done by hand in R (Q9).
>
> **Part II (47 pts)** is an abstract $Y$ on $Z$, $Z^2$, $W$, $X$ dataset (86 observations). It tests, in order:
> 1. **Prediction**, a **confidence interval** from a p-value, the **minimum of a quadratic** (Q10 to Q12).
> 2. **Partial multicollinearity** (Q13) and **heteroskedasticity** diagnosed from a plot (Q14).
> 3. **Weighted least squares**: writing the transformed model, the intercept trap, unbiasedness and efficiency (Q15 to Q17).
> 4. **p-value as the minimum significance level** (Q18).

---

# Part I: Transit infrastructure spending [53 pts]

> [!info] Data
> 1,467 observations on countries' government spending on road and rail infrastructure, 1995 to 2017. Variables: `country`, `is.OECD` (=1 if OECD member), `year` (1995 to 2017), `type` (`road` or `rail`, only these two), `ln_maintain` (log of spending on **maintenance**, euros), `ln_invest` (log of spending on **new investment**, euros).

**Model [0] (`lm_transit0`)**: $\ln(invest)=\beta_0+\beta_1\ln(maintain)+\beta_2\,year+u$

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | -30.480735 | 8.281789 | -3.680 | 0.000241 |
| ln_maintain | 0.867231 | 0.014493 | 59.838 | < 2e-16 |
| year | 0.016830 | 0.004131 | 4.074 | 4.87e-05 |

Residual SE 1.081 on 1464 df; $R^2=0.7132$, adjusted $R^2=0.7128$; $F=1820$ on 2 and 1464 df, p < 2.2e-16.

**Model [1] (`lm_transit1`)**: $\ln(invest)=\beta_0+\beta_1\ln(maintain)+\beta_2\,year+\beta_3\,is.OECD+\beta_4\,is.road+u$

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | -41.780197 | 7.892414 | -5.294 | 1.38e-07 |
| ln_maintain | 0.794271 | 0.015210 | 52.219 | < 2e-16 |
| year | 0.022737 | 0.003939 | 5.772 | 9.57e-09 |
| is.OECD | 0.672905 | 0.074326 | 9.053 | < 2e-16 |
| is.road | 0.559543 | 0.054952 | 10.182 | < 2e-16 |

Residual SE 1.024 on 1462 df; $R^2=0.7431$, adjusted $R^2=0.7424$; $F=1057$ on 4 and 1462 df, p < 2.2e-16.

---

## Q1 — Is the investment-maintenance elasticity equal to 1? [5 pts]

**Question.** Use the summary of `lm_transit0` to test the null hypothesis that the elasticity of investment spending with respect to maintenance spending is 1, at $\alpha=1\%$. (A) write the null; (B) the test statistic; (C) degrees of freedom and critical value; (D) the conclusion.

> [!success] Official answer
> (A) $H_0:\beta_1=1$. (B) $t=-9.159$ (official). (C) $df=N-M=1467-3=1464$; critical value $2.576$. (D) **Reject** $H_0$ at 1%.

In a [[Log-Log Model]] the slope on a logged regressor is an [[Elasticity]], so the claim "elasticity $=1$" is the claim $\beta_1=1$ (not the usual $\beta_1=0$ that R reports). Build the $t$-statistic yourself:

$$t=\frac{\hat\beta_1-1}{se(\hat\beta_1)}=\frac{0.867231-1}{0.014493}\approx-9.16$$

With 1464 degrees of freedom the two-sided 1% critical value is $2.576$ (the normal value). Since $-9.16<-2.576$, we reject: investment responds **less than one-for-one** to maintenance (about $0.87$).

> [!tip] The trap
> The $t$ value printed by R (59.838) tests $\beta_1=0$. Testing any other value means subtracting it in the numerator.

---

## Q2 — Changing euros to dollars [5 pts]

**Question.** What happens to the parameter of `year` in Model [0] if spending is converted from euros to dollars (1 USD = 0.85 EUR)? Options: increases, stays the same, decreases, cannot say.

> [!success] Official answer: **(B) stays the same**

Amounts in dollars are euro amounts divided by 0.85, so $\ln(\text{USD})=\ln(\text{EUR})+\ln\!\left(\tfrac{1}{0.85}\right)$, and $\ln\!\left(\tfrac{1}{0.85}\right)\approx0.162$. Substitute into Model [0], using $\ln(A\cdot B)=\ln A+\ln B$ on both spending variables:

$$\ln(invest^{USD})=\beta_0+(\beta_1-1)\cdot 0.162+\beta_1\ln(maintain^{USD})+\beta_2\,year+u$$

Only the **intercept** absorbs the constant. The slope on $year$ ($\beta_2$) is unchanged, and so is the slope on $\ln(maintain)$.

> [!tip] General rule
> Rescaling a variable that is already in logs just adds a constant, so only the intercept moves. See [[Change of Variables]].

---

## Q3 — Two dummies for road and rail [5 pts]

**Question.** You create `is.road` and `is.rail` (each equal to 1 for that type). (A) What is the relationship between them? (hint: re-read the data description) (B) What happens if you include both in the model?

> [!success] Official answer
> (A) There are only two types, so $is.road=1-is.rail$: each is a **linear transformation** of the other. (B) Including both creates **perfect multicollinearity**, and the parameters cannot all be estimated.

Together with the intercept column of ones, $is.road+is.rail=1$ in every row. The columns are perfectly dependent, so OLS cannot separate them. This is the [[Dummy Variable]] trap: include one dummy fewer than the number of categories (the omitted one is the [[Base Category]]).

---

## Q4 — Are `is.OECD` and `is.road` significant? [5 pts]

**Question.** Using only the R output for `lm_transit1`, which of these is right? (A) both $\beta_3$ and $\beta_4$ are significant, (B) only $\beta_3$, (C) only $\beta_4$, (D) neither, (E) none of the above / cannot say. Reference specific numbers.

> [!success] Official answer: **(A) both significant**
> Both $p$-values are $<2\text{e-}16$, far below $0.05$, so we reject $H_0:\beta_3=0$ and $H_0:\beta_4=0$ at 5%.
> *Also accepted:* **(E)**, if the explanation says that testing $\beta_3=\beta_4=0$ **jointly** needs an F-test and the output does not give enough information to compute it.

The individual $t$-statistics are $9.053$ and $10.182$. Each dummy is individually significant, which is what the question asks about.

---

## Q5 — Why the maintenance slope falls and adjusted $R^2$ rises [6 pts]

**Question.** Compare Models [0] and [1]. Why is the parameter on `ln_maintain` lower in Model [1] ($0.794$ vs $0.867$) while the adjusted $R^2$ is higher ($0.7424$ vs $0.7128$)? The correlations are given below. Options: (A) multicollinearity, (B) omitted variables bias, (C) homoskedasticity, (D) none / cannot say.

| | ln_maintain | year | is.OECD | is.road |
|---|---|---|---|---|
| ln_maintain | 1.0000 | 0.0611 | 0.4046 | 0.1157 |
| year | 0.0611 | 1.0000 | -0.0575 | -0.0595 |
| is.OECD | 0.4046 | -0.0575 | 1.0000 | -0.0304 |
| is.road | 0.1157 | -0.0595 | -0.0304 | 1.0000 |

> [!success] Official answer: **(B) omitted variables bias**
> Model [1] adds `is.OECD`, which is significant but **omitted from Model [0]**. In Model [0] it is both relevant to $\ln(invest)$ and **correlated with** the regressor $\ln(maintain)$ (correlation $0.40$). So Model [0] suffers omitted variable bias on the `ln_maintain` parameter. The adjusted $R^2$ is higher in Model [1] because adding a relevant variable explains more of the variance. (A goodness-of-fit explanation is also acceptable.)

The sign of the bias: OECD countries both maintain more and invest more (positive correlation with $\ln(maintain)$, positive effect on $\ln(invest)$), so leaving `is.OECD` out pushes the maintenance slope **up** ($0.867$ in Model [0], $0.794$ once controlled). See [[Omitted Variable Bias]].

---

## Q6 — Goodness-of-fit test for Model [1] [4 pts]

**Question.** Using the output of `lm_transit1`: (A) write the null, (B) the conclusion, (C) how you reached it, with numbers.

> [!success] Official answer
> (A) $H_0:\beta_1=\beta_2=\beta_3=\beta_4=0$. (B) **Reject** at 5%. (C) The goodness-of-fit $p$-value is $<2\text{e-}16$, far below $0.05$. *(Also acceptable: compare the F-statistic $1057$ to the critical value $2.37$ for $(4,\infty)$ degrees of freedom.)*

The F-statistic at the bottom of the R output tests that **all slopes are jointly zero**. Here that is four slopes, matching "4 and 1462 DF". See [[F-test]].

---

## Q7 — Interactions with `is.road` (Model [2]) [8 pts]

**Model [2] (`lm_transit2`)**: 

$$\ln(invest)=\beta_0+\beta_1\ln(maintain)+\beta_2\,year+\beta_3\,is.OECD+\beta_4\,is.road+\beta_5\,is.road\cdot\ln(maintain)+\beta_6\,is.road\cdot year+\beta_7\,is.road\cdot is.OECD+u$$

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | -32.172685 | 12.167057 | -2.644 | 0.00828 |
| ln_maintain | 0.788403 | 0.025349 | 31.102 | < 2e-16 |
| year | 0.017786 | 0.006078 | 2.926 | 0.00348 |
| is.OECD | 1.221477 | 0.112488 | 10.859 | < 2e-16 |
| is.road | -15.414819 | 15.820716 | -0.974 | 0.33005 |
| is.road.ln_maintain | 0.025072 | 0.031525 | 0.795 | 0.42657 |
| is.road.year | 0.008090 | 0.007901 | 1.024 | 0.30601 |
| is.road.OECD | -0.945638 | 0.148310 | -6.376 | 2.43e-10 |

Residual SE 1.009 on 1459 df; $R^2=0.751$, adjusted $R^2=0.7498$; $F=628.5$ on 7 and 1459 df.

### (A) Elasticity for road infrastructure [4 pts]

> [!success] Official answer
> $\beta_1+\beta_5=0.788403+0.025072=\mathbf{0.813475}$

For road, $is.road=1$, so $\ln(maintain)$ enters with the slope $\beta_1+\beta_5$. For rail ($is.road=0$) it is just $\beta_1=0.788403$.

### (B) "The elasticity differs between road and rail" [4 pts]

> [!success] Official answer: **FALSE**
> The difference in elasticities is exactly the interaction coefficient $\beta_5$, so test $H_0:\beta_5=0$. Its $p$-value is $0.42657$, much greater than $0.05$: **fail to reject**, so there is no significant difference.

---

## Q8 — The F-test in the `anova()` call [5 pts]

```r
anova(lm(ln_invest ~ ln_maintain + year + is.OECD, transit), lm_transit2)
```

| Model | Res.Df | RSS | Df | Sum of Sq | F | Pr(>F) |
|---|---|---|---|---|---|---|
| 1 (restricted) | 1463 | 1642.4 | | | | |
| 2 (Model [2]) | 1459 | 1486.7 | 4 | 155.74 | 38.212 | < 2.2e-16 |

**Question.** (A) Which null hypothesis is being tested, in terms of Model [2]'s parameters? (B) The conclusion at 5%. (C) How you reached it.

> [!success] Official answer
> (A) Official: $H_0:\beta_5=\beta_6=\beta_7=0$. (B) **Reject** at 5%. (C) The $p$-value is $<2.2\text{e-}16$, far below $0.05$.

> [!warning] Two wording slips in the official answer
> - **(A):** the table shows **Df $=4$**, and the restricted model drops *four* terms: `is.road`, `is.road.ln_maintain`, `is.road.year`, `is.road.OECD`. So the full null is $H_0:\beta_4=\beta_5=\beta_6=\beta_7=0$ (the official line leaves $\beta_4$ out). The decision does not change.
> - **(C):** the official says "t-statistic p-value", but this is the **F-test** $p$-value.

You can rebuild the F-statistic from the table:

$$F=\frac{(1642.4-1486.7)/4}{1486.7/1459}=\frac{38.9}{1.019}\approx38.2$$

(R shows $38.212$ using unrounded sums of squares.) Rejecting means that, jointly, road and rail differ in at least one of the intercept and the slopes on `ln_maintain`, `year`, `is.OECD`. See [[F-test]] and [[Restricted Model]].

---

## Q9 — Chow test by hand [10 pts]

**Question.** 1,180 observations are from OECD countries and 287 from non-OECD countries. Run a Chow test with separate regressions to see whether Model [1] differs between the two groups.

### (A) R code [3 pts]

> [!success] Official answer

```r
transit_OECD_only = transit[transit$is.OECD == 1,]
transit_non_OECD  = transit[transit$is.OECD == 0,]

lm_transit_OECD       = lm( ln_invest ~ ln_maintain + year + is.road, transit_OECD_only)
lm_transit_non_OECD   = lm( ln_invest ~ ln_maintain + year + is.road, transit_non_OECD)
lm_transit_restricted = lm( ln_invest ~ ln_maintain + year + is.road, transit)
```

Note to grader: `is.OECD` must **not** be in any of the three regressions. Within each subsample it is constant (all 1s or all 0s), and the restricted pooled model is the one with a single set of coefficients for everyone.

### (B) Degrees of freedom [2 pts]

> [!success] Official answer
> $q=4$ (each regression has 4 parameters: intercept, `ln_maintain`, `year`, `is.road`). $N-M=(287-4)+(1180-4)$.

> [!warning] Arithmetic slip in the official answer
> The official writes the sum as $1469$. It is $283+1176=\mathbf{1459}$ (also $1467-2\times4=1459$). The F-critical value printed in the exam, $2.378$, is consistent with $1459$.

### (C) What are `w`, `m`, `t`? [3 pts]

```r
w = sum(lm_transit_OECD$residuals^2)
m = sum(lm_transit_not_OECD$residuals^2)
t = sum(lm_transit_restricted$residuals^2)
f = ((t - (w + m)) / q) / ((w + m) / N_minus_M)      # 38.04349
qf(0.95, q, N_minus_M)                               # 2.378027
```

> [!success] Official answer
> `w` is the **RSS for `lm_transit_OECD`**, `m` is the **RSS for `lm_transit_non_OECD`**, and `t` is the **RSS for the restricted model `lm_transit_restricted`**.

$$F=\frac{(RSS_{restricted}-RSS_{unrestricted})/q}{RSS_{unrestricted}/(N-M)},\qquad RSS_{unrestricted}=w+m$$

### (D) Conclusion [2 pts]

> [!success] Official answer: **the model is different for OECD and non-OECD countries**
> $F=38.04>F_{crit}=2.378$, so reject $H_0$ (the same coefficients in both groups) at 5%.

See [[Chow Test]].

---

# Part II: Abstract Y on Z, Z², W and X [47 pts]

> [!info] Data
> `sample.data` has **86 observations**. $Y$ is the outcome. $Z$ is continuous between 0 and 4. `Z.sq` is $Z$ squared (between 0 and 16). $W$ is continuous between 0 and 4.

**Correlations:**

| | Z | Z.sq | W |
|---|---|---|---|
| Z | 1.0000 | 0.9679 | 0.7454 |
| Z.sq | 0.9679 | 1.0000 | 0.7990 |
| W | 0.7454 | 0.7990 | 1.0000 |

**Model [A] (`model.A`)**: $Y=\beta_0+\beta_1 Z+\beta_2 Z.sq+\beta_3 W$

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | 0.2980 | 2.2245 | 0.134 | 0.894 |
| Z | -2.0898 | 2.6570 | -0.787 | 0.434 |
| Z.sq | 3.1117 | 0.7303 | 4.261 | 5.40e-05 |
| W | 2.3055 | 0.3602 | 6.400 | 9.07e-09 |

Residual SE 7.032 on 82 df; $R^2=0.8888$, adjusted $R^2=0.8848$; $F=218.5$ on 3 and 82 df.

---

## Q10 — Prediction from Model [A] [5 pts]

**Question.** What is the predicted $Y$ when $Z=2$ and $W=2$? (A) $Y<8$, (B) $8\le Y<14.5$, (C) $14.5\le Y$, (D) none / cannot say.

> [!success] Official answer: **(B)**, with $\hat Y=\mathbf{13.1762}$

Remember $Z.sq=Z^2=4$:

$$\hat Y=0.2980-2.0898(2)+3.1117(4)+2.3055(2)=0.2980-4.1796+12.4468+4.6110=13.1762$$

---

## Q11 — Does the 95% CI of $\beta_0$ contain zero? [5 pts]

> [!success] Official answer: **YES**
> The interval is $\hat\beta\pm se(\hat\beta)\,t_{82,\,0.025}$. Because the $p$-value of the significance test of this parameter is $0.894>0.05$, we cannot reject $H_0:\beta=0$ at 5%, so $0$ lies inside the 95% confidence interval ($1-\alpha$).

(The official solution says the standard error is redacted in the exam copy and uses the equivalence between tests and intervals. Check with the printed standard error: $0.2980\pm1.989\times2.2245=(-4.13,\ 4.72)$, which contains 0.)

---

## Q12 — The value of $Z$ that minimises $Y$ [5 pts]

> [!success] Official answer: $\hat Z^*=\mathbf{0.336}$ (exactly $0.33580$)

Set the partial derivative with respect to $Z$ to zero. In Model [A], $Y$ depends on $Z$ through $\beta_1 Z+\beta_2 Z^2$, so

$$\frac{\partial Y}{\partial Z}=\beta_1+2\beta_2 Z=0\;\Rightarrow\;Z^*=-\frac{\beta_1}{2\beta_2}=-\frac{-2.0898}{2(3.1117)}=0.3358$$

Since $\beta_2>0$ the parabola opens upward, so this is a **minimum**. See [[Quadratic Model]].

---

## Q13 — Why not drop $Z$? [5 pts]

**Question.** The estimate of $\beta_1$ is not significant. Why might omitting $Z$ be a bad idea? (hint: the correlation table)

> [!success] Official answer
> $Z$ is highly correlated with $Z.sq$ ($0.967$) and with $W$ ($0.746$). That suggests **partial multicollinearity inflating the standard error** of $Z$'s parameter. So it is possible that $Z$ really does affect $Y$, and omitting it could cause **omitted variable bias**.

An insignificant $t$-statistic in the presence of strong correlation among regressors is weak evidence of "no effect". It may simply be an imprecise estimate. Note that $Z$ and $Z.sq$ belong together in a quadratic.

---

## Q14 — Diagnosing the problem from a plot [4 pts]

**Question.** The researcher plots a variable against `Z.sq` and decides to use weighted least squares. The plot's vertical axis runs from 0 to about 600, and the points fan out as `Z.sq` grows (nearly flat near 0, then very large spread by 10 to 15). What is on the y-axis and what is the issue?

> [!success] Official answer: **(C) squared residuals, and Model [A] suffers from heteroskedasticity**
> The only problem solved by weighted least squares is heteroskedasticity. The axis scale (0 to about 600) also rules out (A) and (B): $Z$ only goes from 0 to 4, and $W.sq$ from 0 to 16 (the official text says "$W$ between 0 and 16", which is a slip, see the note at the top).

Squared residuals that grow with a regressor mean the error variance depends on that regressor. See [[Heteroskedasticity]] and [[Lec_12-Heteroskedasticity]].

---

## Q15 — Weighted least squares with $h=Z.sq$ [8 pts]

**Question.** The researcher estimates Model [A] by WLS, reweighting by $h=Z.sq$. (A) Write the full WLS model in terms of the original variables only. (B) Does the WLS model have an intercept?

### (A) The WLS model [4 pts]

> [!success] Official answer
> Divide both sides by $\sqrt h=\sqrt{Z.sq}=Z$ (valid since $Z\ge0$):
>
> $$\frac{Y}{Z}=\frac{\beta_0}{Z}+\beta_1\frac{Z}{Z}+\beta_2\frac{Z.sq}{Z}+\beta_3\frac{W}{Z}$$
>
> and since $Z.sq/Z=Z$:
>
> $$\frac{Y}{Z}=\frac{\beta_0}{Z}+\beta_1+\beta_2 Z+\beta_3\frac{W}{Z}$$

**WLS output (`model.A.WLS`)**: `lm(Y.h ~ 0 + intercept.h + Z.h + Z.sq.h + W.h)`

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| intercept.h | 0.98051 | 0.06031 | 16.258 | < 2e-16 |
| Z.h | -3.55001 | 0.58403 | -6.078 | 3.66e-08 |
| Z.sq.h | 3.60686 | 0.31283 | 11.530 | < 2e-16 |
| W.h | 2.16168 | 0.34207 | 6.319 | 1.29e-08 |

Residual SE 2.253 on 82 df; $R^2=0.9495$ (not comparable with OLS: see Q15B); $F=385.4$ on 4 and 82 df.

### (B) Is there an intercept? [4 pts]

> [!success] Official answer
> The R code includes `0 +`, which removes the usual intercept. But in the transformed model the term $Z/\sqrt{Z.sq}$ equals **1**, so the parameter on `Z.h` ($\beta_1$) **is** the intercept. *(Either explanation is acceptable.)*

The constant in the **original** model is $\beta_0$, estimated by the coefficient on `intercept.h` ($0.981$), because that column is $1/Z$.

---

## Q16 — Unbiasedness and efficiency of OLS vs WLS [5 pts]

**Question.** OLS and WLS give different parameter estimates for Model [A]. Suppose assumptions A1 and A2 hold. Options: (A) both unbiased, (B) OLS biased and WLS unbiased, (C) OLS unbiased and WLS inefficient, (D) both biased, (E) none / cannot say.

> [!success] Official answer: **(A) both OLS and WLS estimates are unbiased**
> With A1 and A2 holding in the original model, OLS is unbiased (ruling out B and D). As shown in class, if A1 and A2 hold in the original model they also hold in the WLS-transformed model, and WLS gives the efficient estimates (ruling out C).

Unbiasedness only needs A1 and A2. Heteroskedasticity affects **efficiency and standard errors**, not unbiasedness. See [[Gauss-Markov Theorem]] and [[Unbiasedness]].

---

## Q17 — Efficiency without normality [5 pts]

**Question.** CLAIM: if A1 to A4 hold but A5 (normality) does not, the OLS estimator is no longer efficient.

> [!success] Official answer: **FALSE**
> For efficiency we need A1 to A4 only. Violating A5 means we cannot rely on the exact $t$-distribution for simple hypothesis tests, but it does not affect efficiency.

See [[Gauss-Markov Theorem]] and [[Normality of Errors (A5)]].

---

## Q18 — Minimum significance level for $X$ [5 pts]

**Model [B] (`model.B`)**: $Y=\beta_0+\beta_1 Z+\beta_2 Z.sq+\beta_3 W+\beta_4 X$

| Variable | Estimate | Std. Error | t | p |
|---|---|---|---|---|
| (Intercept) | -0.3808 | 2.4767 | -0.154 | 0.8782 |
| Z | -1.1849 | 2.9539 | -0.401 | 0.6894 |
| Z.sq | 1.9320 | 0.8127 | 2.377 | 0.0198 |
| W | 4.4403 | 0.4011 | 11.071 | < 2e-16 |
| X | -0.3529 | 0.8969 | -0.393 | 0.6950 |

**Question.** For $H_0:\beta_4=0$, what is the minimum significance level at which the researcher should reject the null?

> [!success] Official answer: **69.50%**
> The $p$-value is the lowest significance level $\alpha$ at which the variable would still count as significant. For $X$ it is $0.6950$, so the minimum $\alpha$ is $69.50\%$. At any lower significance level we **fail to reject**.

See [[p-value]].

---

# Recap table

| Q | Tool | Official answer |
|---|---|---|
| 1 | t-test against 1, 1464 df | $t\approx-9.16$, crit $2.576$: **reject** |
| 2 | Unit change in logs | $\hat\beta_{year}$ **stays the same** (B); only the intercept moves |
| 3 | Complementary dummies | $is.road=1-is.rail$: **perfect multicollinearity** |
| 4 | t-tests on dummies | **Both significant** (A); (E) also accepted with an F-test argument |
| 5 | OVB | **(B)**: `is.OECD` omitted from Model [0], correlated $0.40$ with `ln_maintain` |
| 6 | Goodness-of-fit F | $H_0$: all four slopes $=0$; **reject**, $F=1057$ |
| 7A | Interaction elasticity | $0.788403+0.025072=0.813475$ |
| 7B | Test of a difference | **FALSE**: interaction $p=0.42657$ |
| 8 | Joint F-test, $q=4$ | **Reject**, $F=38.2$ |
| 9 | Chow test | $q=4$, $N-M=1459$; $F=38.04>2.378$: **different** |
| 10 | Prediction | $\hat Y=13.1762$, option (B) |
| 11 | CI vs p-value | **YES**, contains 0 ($p=0.894$) |
| 12 | Minimum of a quadratic | $Z^*=-\beta_1/(2\beta_2)=0.336$ |
| 13 | Partial multicollinearity | Do not drop $Z$: inflated SE, risk of OVB |
| 14 | Squared residuals vs `Z.sq` | **(C)** heteroskedasticity |
| 15 | WLS with $h=Z.sq$ | $\frac{Y}{Z}=\frac{\beta_0}{Z}+\beta_1+\beta_2Z+\beta_3\frac{W}{Z}$; the `Z.h` coefficient is the intercept |
| 16 | Unbiasedness and efficiency | **(A)** both unbiased |
| 17 | Efficiency without A5 | **FALSE** |
| 18 | p-value as minimum $\alpha$ | $69.50\%$ |

---

## Related Notes

- [[Intro Econometrics]] (hub)
- [[Lec_06-Hypothesis Tests & p-values]], [[Lec_07-Multiple Hypothesis Tests]], [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]], [[Lec_13-Exam Review]]
- [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]
- Sister papers: [[PP_05-Wage Growth Dummies Chow Test & Log Models (2025 Moed A)]] · [[PP_06-Apple Demand, Dummies & Chow Test (2025 Moed B)]]
