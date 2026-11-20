---
title: "2024 Moed B — Experience & Wages, Electricity Cost Function"
type: past-paper
semester: 1
year: 2
course: "Intro Econometrics"
exam: "Final Exam 2024 — Moed B"
instructor: Dr. Aluma Dembo
status: worked-solution
tags:
  - intro-econometrics
  - past-paper
  - exam-prep
  - log-models
  - quadratic
  - dummy-variables
  - omitted-variable-bias
  - r-squared
  - t-test
  - confidence-interval
  - f-test
  - heteroskedasticity
aliases:
  - Dembo 2024 Moed B
  - Intro Metrics 2024 B
  - Experience Wage Cobb-Douglas Exam
subject: intro-econometrics
in_scope: true
---

# 2024 Moed B — Experience & Wages, Electricity Cost Function

> Part of: [[Intro Econometrics]]
> **Final Exam 2024 — Moed B** (18 March, open notes, 3 hours, 100 points) — Introduction to Econometrics, Dr. Aluma Dembo
> Key concepts: [[Functional Form]], [[Log-Level Model]], [[Log-Log Model]], [[Quadratic Model]], [[Dummy Variable]], [[Base Category]], [[Omitted Variable Bias]], [[R-squared]], [[t-test]], [[Confidence Interval]], [[p-value]], [[F-test]], [[Heteroskedasticity]], [[Gauss-Markov Theorem]]
> Builds on: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_12-Heteroskedasticity]], [[Lec_13-Exam Review]], [[Assign_02-Functional Form & the Money-Supply Log-Log Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]

> [!warning] No official answer key: every answer here is AI-written
> There is **no key** for this sitting. **All 15 questions (Q1 to Q15) were solved by AI**, grounded in the lecture notes, and every number was recomputed in Python from the R output. Each answer opens with its own warning. Check before relying on any of it, especially the judgement calls flagged in Q1 and Q3.

> [!note] Numbering
> The paper has **15 questions** (Part A: Q1 to Q9, 60 points; Part B: Q10 to Q15, 40 points). Page footers read "Page x of 7" and the page-1 instructions are not reproduced below. Each multiple-choice or T/F item needs a 1 to 2 sentence justification in the exam, so every answer below gives one.

---

## What this paper tests

> [!info] Two datasets, one toolkit
> - **Part A (wages, n = 27,782):** a **log-level** model with a **quadratic**, **dummies** (university is the base) and a control (`iqproxy`). Tests: functional form, prediction from output, reading dummies in a log model, **unit changes**, a **t-test against a non-zero value**, and **omitted-variable bias** plus its effect on $R^2$ and the overall F.
> - **Part B (electricity, Cobb-Douglas, df = 94):** a **log-log** model. Tests: reading p-values as "highest significance level", confidence intervals (and their link to tests), elasticities, **heteroskedasticity consequences**, and a **joint F-test** written in $R^2$ form.
> - Easy marks everywhere: write $H_0$ with the equality, use the right df, and say which assumption fails and which property is lost.

> [!tip] Intuition: the unlocking facts
> 1. In a **log-level** model, coefficients are approximately **percent changes** ($100\beta$), and the exact change is $e^{\beta}-1$.
> 2. **Rescaling $y$** moves only the intercept in a log model (adds $\ln c$); slopes are unchanged.
> 3. Dropping a regressor **can never raise $R^2$**.

---

# Part A: Experience and wages

**Variables:** `wage` (monthly NIS), `exp` (months of experience), `exp_sq`, `men`, `iqproxy` (psychometric score), `private`, `public`, `university` (the control group).

## Q1 — Choosing a functional form [8 pts]

The five-model list on the paper is actually four models:

| | Model |
|---|---|
| i | $wage = \beta_0 + \beta_1\,exp + u$ |
| ii | $\ln(wage) = \beta_0 + \beta_1\,exp + u$ |
| iii | $\ln(wage) = \beta_0 + \beta_1\ln(exp) + u$ |
| iv | $wage = \beta_0 + \beta_1\,exp + \beta_2\,exp^2 + u$ |

### A. Linear returns (constant rate of change)

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: model (i).** Only in model (i) does one extra month of experience add the **same NIS amount** to the wage at every experience level: $\Delta wage/\Delta exp = \beta_1$, a straight line.

> [!warning] Ambiguous wording
> "Constant rate of change" could be read in the lecture's sense ($\frac{\Delta y/\Delta x}{y}$, see [[Lec_13-Exam Review]]), under which the **log-level model (ii)** has the constant "rate" $\beta_1$. I read "returns are linear" as "the wage-experience relationship is a straight line", which is model (i) only. If the grader accepts (ii) as "constant percentage returns", the answer to A is (i) and (ii), and B is (iii) and (iv).

### B. Non-linear returns

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: models (ii), (iii) and (iv).**

### C. Explanation [4 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> - **(i)** $\frac{\Delta wage}{\Delta exp}=\beta_1$: constant. Linear.
> - **(ii)** $\frac{\Delta wage}{\Delta exp}=\beta_1\,wage$: depends on the wage level, so the NIS gain per month changes as wage grows (exponential curve).
> - **(iii)** $\frac{\Delta wage}{\Delta exp}=\beta_1\frac{wage}{exp}$: depends on both wage and experience. Elasticity is constant, the slope is not.
> - **(iv)** $\frac{\Delta wage}{\Delta exp}=\beta_1+2\beta_2\,exp$: depends on $exp$ and can even change sign (turning point).

---

## Model (1) output

$$\ln(wage)=\beta_0+\beta_1\,men+\beta_2\,exp+\beta_3\,exp^2+\beta_4\,private+\beta_5\,public+\beta_6\,iqproxy+u$$

```
lm(formula = ln_wage ~ men + exp + exp_sq + private + public + iqproxy, data = m_data)

             Estimate  Std. Error  t value  Pr(>|t|)
(Intercept)  6.79      0.044       153.81   0.000
men          0.3747    0.0076       48.96   0.000
exp          0.00514   0.002112      2.44   0.015
exp_sq       0.000354  0.000032     11.22   0.000
private      0.1152    0.0094       12.20   0.000
public       0.1063    0.0092       11.48   0.000
iqproxy      0.0022    0.000046     48.51   0.000

Residual standard error: 0.60733 on 27,775 degrees of freedom
Multiple R-squared: 0.3231,  Adjusted R-squared: 0.3230
F-statistic: 2210.02 on 6 and 27775 DF,  p-value: < 0.00000000000000022
```

$N-M = 27{,}775$ and there are 6 slopes, so $N = 27{,}782$. See [[Lec_08-Goodness of Fit & Multicollinearity]] for reading this output.

---

## Q2 — Predicted wage [6 pts]

Man, `exp` = 10, `iqproxy` = 600, private college (so `public` = 0, university is the base).

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: about 5,920 NIS per month** ($\widehat{\ln wage}=8.687$).

$$\widehat{\ln(wage)} = 6.79 + 0.3747(1) + 0.00514(10) + 0.000354(10^2) + 0.1152(1) + 0.1063(0) + 0.0022(600)$$

| Term | Value |
|---|---|
| intercept | 6.7900 |
| men | 0.3747 |
| exp: $0.00514\times10$ | 0.0514 |
| exp_sq: $0.000354\times100$ | 0.0354 |
| private | 0.1152 |
| iqproxy: $0.0022\times600$ | 1.3200 |
| **Sum** | **8.6867** |

$$\widehat{wage}=e^{8.6867}\approx 5{,}924\ \text{NIS}$$

> [!note] Note on logs
> The model predicts $\ln(wage)$, so you must **exponentiate** to get a wage. (Retransformation bias, i.e. multiplying by $e^{\hat\sigma^2/2}$, is not part of this course.) The R output is rounded to 3 sig figs, so expect small differences (roughly 5,900 to 5,950).

---

## Q3 — University man vs public-college woman [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: about 30.8% higher** (approximation 26.8%).

Same experience and score, so only `men`, `public` and `private` differ:

- **University man:** `men` = 1, `private` = `public` = 0, so the group term is $0.3747$.
- **Public-college woman:** `men` = 0, `public` = 1, so the group term is $0.1063$.

$$\ln(wage_{\text{uni man}})-\ln(wage_{\text{public woman}}) = 0.3747-0.1063 = 0.2684$$

$$\frac{wage_{\text{uni man}}}{wage_{\text{public woman}}} = e^{0.2684}=1.308 \;\Rightarrow\; \textbf{+30.8\%}$$

> [!warning] Exact versus approximate
> The log-level shortcut "$100\times 0.2684 = 26.8\%$" is only accurate for small coefficients. With a gap this large the exact figure is $e^{0.2684}-1 = 30.8\%$. I give 30.8% as the answer and 26.8% as the quick approximation. If the course expects the shortcut, 26.8% is the likely "official" figure, so show both.

---

## Q4 — Shape of ln(wage) against exp [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (B)**, an increasing curve that gets steeper (convex).

$$\frac{\partial \ln(wage)}{\partial exp}=\beta_2+2\beta_3\,exp = 0.00514 + 2(0.000354)\,exp > 0$$

- The slope is **positive at $exp=0$** and **grows** with experience ($\beta_3>0$), so the curve rises and bends upward.
- **(A)** is a straight line: needs $\beta_3=0$, but $\beta_3$ is significant ($t=11.22$).
- **(C)** is increasing concave: needs $\beta_3<0$.
- **(D)** is decreasing concave: needs $\beta_2<0$ and $\beta_3<0$.
- **(E)** is wrong because (B) fits.

![[PP04_q4_convex_log_wage.png|560]]

*The model (1) fitted curve for a man at a private college with `iqproxy` = 600, over 0 to 36 months. It is a theory diagram built from the printed coefficients.*

> [!tip] Intuition
> The only coefficient pattern that gives (B) is **both $\beta_2$ and $\beta_3$ positive**. A positive squared term means returns to experience are *increasing* (the minimum of the parabola is at $exp = -\beta_2/(2\beta_3) <0$, outside the data).

---

## Q5 — Testing "+100 points raises wage by 20%" [10 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> I use the course convention that in a log-level model $100\,\beta\times$(change) is the percent change. The exact version is shown at the end.

### A. Null hypothesis [3 pts]

A 100-point rise changes $\ln(wage)$ by $100\beta_6$, which is 0.20 for a 20% change:

$$H_0:\ 100\,\beta_6 = 0.20 \;\Longleftrightarrow\; \beta_6 = 0.002 \qquad H_1:\ \beta_6 \neq 0.002$$

### B. Critical values [2 pts]

Two-sided, $df = 27{,}775$ (effectively infinite, so use the normal row of the t table):

- $\alpha = 1\%$: $t_{0.005}=\mathbf{2.576}$
- $\alpha = 5\%$: $t_{0.025}=\mathbf{1.96}$

### C. Test statistic [2 pts]

$$t=\frac{\hat\beta_6-0.002}{\operatorname{s.e.}(\hat\beta_6)}=\frac{0.0022-0.002}{0.000046}\approx \mathbf{4.35}$$

### D. Conclusion [1 pt]

$|4.35| > 2.576$, so at $\alpha=1\%$ we **can reject** the null.

### E. "The p-value is greater than 5%" [2 pts]

**FALSE.** $|t| = 4.35 > 1.96$, so we reject even at 5%, which means $p<0.05$ (in fact $p\approx 0.00001$).

> [!warning] Rounding sensitivity
> $\hat\beta_6 = 0.0022$ is printed to only 2 significant figures, so the true value could be anywhere in $[0.00215, 0.00225]$, giving $t$ between about 3.3 and 5.4. Every one of those values rejects at 1% and 5%, so the conclusions do not depend on the rounding.

> [!tip] Exact alternative
> If "increase wage by 20%" is read exactly, $e^{100\beta_6}=1.2$ gives $\beta_6=\ln(1.2)/100 = 0.001823$ and $t=(0.0022-0.001823)/0.000046\approx 8.2$. Same conclusions (reject at 1%, p-value below 5%).

---

## Q6 — Yearly instead of monthly wage [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer:**
> - $\beta_0$: **increases by $\ln 12 \approx 2.485$** (from 6.79 to about 9.275)
> - $\beta_1$ (men): **unchanged**
> - $\beta_2$ (exp): **unchanged**
> - $\beta_3$ (exp_sq): **unchanged**

Yearly wage $= 12\times$ monthly wage, so

$$\ln(12\,wage)=\ln 12+\ln(wage)=\underbrace{(\beta_0+\ln 12)}_{\text{new intercept}}+\beta_1 men+\beta_2 exp+\beta_3 exp^2+\dots$$

Multiplying the dependent variable by a constant inside a log is just **adding a constant** to $\ln(wage)$. That shifts the intercept by $\ln 12$ and leaves every slope alone. This matches the rule in [[Lec_13-Exam Review]]: "add constant $c$ to $y$: intercept $+c$, slope unchanged". Standard errors of the slopes, $R^2$ and the slope t-statistics are all unchanged; only the intercept moves.

> [!tip] Intuition
> Slopes in a log-level model are **percentages**, and a percentage does not care what currency unit or time unit you measure the level in.

---

## Model (2) for Q7 to Q9

$$\ln(wage)=\beta_0+\beta_1 men+\beta_2 exp+\beta_3 exp^2+\beta_4 private+\beta_5 public+u \qquad(\text{omits } iqproxy)$$

## Q7 — Effect on the private coefficient [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (B)**, the estimate of $\beta_4$ in model (2) is **less than** in model (1).

**Why (omitted-variable bias).** Omitting $iqproxy$ gives

$$E[\hat\beta_4^{(2)}] = \beta_4 + \beta_6\cdot \delta, \qquad \delta=\text{effect of private on iqproxy (its partial covariance)}.$$

- $\beta_6 > 0$ (estimated 0.0022, $t = 48.5$): a higher score raises wages.
- $\delta < 0$: college graduates (private and public) have **lower** average scores than university graduates (the base group), so `private` is negatively correlated with `iqproxy`.
- Bias $=\beta_6\delta<0$, so the model (2) estimate is **below** model (1).

Intuition: model (2) credits `private` with the wage penalty that really belongs to the lower test score, so the private "premium" is understated.

**Goodness-of-fit null (asked for in the exam).** The overall F-test of model (2): $H_0:\ \beta_1=\beta_2=\beta_3=\beta_4=\beta_5=0$ (no regressor explains $\ln wage$), against $H_1$: at least one is non-zero.

Why not the other options: **(A)** would need a positive bias (positive correlation); **(C)** would need $\delta=0$ or $\beta_6=0$, but both are non-zero; **(D)** is wrong because (B) holds.

## Q8 — R-squared of model (2) versus (1) [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (B)**, $R^2$ in model (2) is **less than** in model (1).

$R^2=1-RSS/TSS$ with the **same** $TSS$ (same dependent variable). Dropping a regressor can only keep $RSS$ the same or **raise** it, so $R^2$ cannot rise. It stays the same only if the dropped variable's coefficient is exactly zero. Here $iqproxy$ is highly significant ($t=48.51$), so the fit worsens strictly.

**Null of the goodness-of-fit test:** $H_0:\ \beta_1=\dots=\beta_5=0$ (all slopes zero, restricted model has $R^2=0$).

Why not the others: **(A)** is impossible (adding variables never lowers $R^2$, so removing never raises it); **(C)** needs a zero coefficient; **(D)** is wrong because (B) holds.

> [!example] How big is the drop?
> Dropping one variable is an F-test with $F=t^2=48.51^2=2353$. In $R^2$ terms $\frac{\Delta R^2}{1-R^2_{UR}}=\frac{F}{N-M}=\frac{2353}{27{,}775}=0.0847$, so $\Delta R^2 = 0.0847\times0.6769 = 0.0574$. So model (2) has $R^2\approx 0.266$ (derived from the printed t, so approximate).

## Q9 — Overall F-statistic of model (2) versus (1) [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: (B)**, the F-statistic in model (2) is **less than** in model (1).

Overall F (from [[Lec_13-Exam Review]]):

$$F=\frac{R^2/(M-1)}{(1-R^2)/(N-M)}$$

- **Model (1):** $F=\dfrac{0.3231/6}{0.6769/27775}=2210$ (matches the printout).
- **Model (2):** $R^2\approx 0.2658$ (from Q8), 5 slopes, $df = 27{,}776$:

$$F_{(2)}=\frac{0.2658/5}{0.7342/27776}\approx 2{,}011 < 2{,}210$$

> [!warning] Not a general rule
> In general the overall F can move either way when a variable is dropped: $R^2$ falls (pushes F down) but the numerator df also falls (pushes F up). Here the drop in $R^2$ dominates because $iqproxy$ is extremely significant, so (B). The comparison relies on $R^2_{(2)}$ derived from $t=48.51$, so it is approximate but the gap (about 200) is far larger than rounding error.

**Null:** $H_0:\ \beta_1=\dots=\beta_5=0$ for model (2), against $H_1$: at least one non-zero. Both models reject massively; the question is only how large F is.

---

# Part B: Electricity cost function

$$Cost = B\,X^{\beta_1}P_K^{\beta_2}P_L^{\beta_3}P_F^{\beta_4}e^{u}$$

$X$ = output, $P_K$ = capital price, $P_L$ = wage, $P_F$ = fuel price. Taking logs gives model (1):

$$\ln(Cost)=\ln B+\beta_1\ln X+\beta_2\ln P_K+\beta_3\ln P_L+\beta_4\ln P_F+u$$

```
              Estimate    Std. Error  t value  Pr(>|t|)
(Intercept)   -8.548757   1.394584    -6.13    0.000
ln_X           0.824102   0.013085    62.98    0.000
ln_pk          0.2028625  [hidden]     [hidden] 0.164
ln_pl          0.1778888  [hidden]     1.25     0.215
ln_pf          0.6932505  0.0807074    8.59     0.000

Residual standard error: 0.21197 on 94 degrees of freedom
Multiple R-squared: 0.9798,  Adjusted R-squared: 0.9790
F-statistic: 1140.68 on 4 and 94 DF,  p-value: < 2.2e-16
```

> [!note] Source detail
> The standard errors of `ln_pk` and `ln_pl` and the t-value of `ln_pk` are hidden by blue boxes on the paper on purpose; they are recovered below from what is shown. With 4 slopes and $df=94$, $N = 99$ observations (the paper mentions 1980 to 2000, which is 21 years, so the data must be several observations per year; this does not affect any answer).

## Q10 — Highest significance level at which each variable is significant [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer:** the **p-value** of each variable.
> - $\ln P_K$: **16.4%**
> - $\ln P_L$: **21.5%**
> - $\ln P_F$: **about 0% (p < 0.001)**

A variable is significant at level $\alpha$ whenever $p<\alpha$, so its p-value is the boundary level (see [[p-value]]): the smallest $\alpha$ at which $H_0:\beta=0$ is rejected. The question's wording is read as asking for this boundary.

> [!warning] Wording caveat
> Strictly, a variable is significant at *every* $\alpha$ above its p-value, so there is no highest level; the boundary is its p-value. I take that boundary to be the intended answer. For $\ln P_F$, $t=8.59$ with 94 df gives $p\approx 2\times10^{-13}$, i.e. significant at any conventional level (R prints 0.000).

## Q11 — 95% confidence interval for $\ln P_L$ [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: about $(-0.105,\ 0.461)$.**

The standard error is hidden, so recover it from the printed t-value:

$$\operatorname{s.e.}(\hat\beta_3)=\frac{\hat\beta_3}{t}=\frac{0.1778888}{1.25}=0.1423$$

Critical value: two-sided 5%, $df=94$ gives $t_{0.025}(94)\approx 1.986$ (the printed table row for 90 df gives about 1.99).

$$0.1779 \pm 1.986\times0.1423=0.1779\pm0.2826 \;\Rightarrow\; (-0.105,\ 0.460)$$

(With 1.99 from the table: $(-0.105,\ 0.461)$.) The interval **contains 0**, which agrees with the insignificant t-test ($p=0.215$): the CI and the two-sided test are the same test ([[Confidence Interval]], [[Lec_13-Exam Review]]).

## Q12 — "0 belongs to the 80% CI for $\ln P_K$" [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: FALSE.**

0 lies in the $(1-\alpha)$ CI exactly when we **fail to reject** $H_0:\beta_2=0$ at level $\alpha$. The 80% CI corresponds to $\alpha=0.20$. The p-value of $\ln P_K$ is $0.164 < 0.20$, so we **reject** $H_0$ at 20%, hence 0 is **outside** the 80% CI.

> [!tip] Intuition
> 0 would be inside the CI only for confidence levels above $1-0.164=83.6\%$. At 80% the interval is narrower than that, so it excludes 0.

## Q13 — Doubling output [6 pts]

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: cost rises by about 77% (it is multiplied by $2^{0.824}\approx 1.77$).** Quick approximation: 82.4%.

In a log-log model $\beta_1=0.824$ is an **elasticity**: a 1% rise in $X$ raises cost by 0.824%. For a doubling (a 100% rise, not small) use the exact form:

$$\Delta\ln(Cost)=\beta_1\,\Delta\ln X=0.824\times\ln 2 = 0.571 \;\Rightarrow\; \frac{Cost_{new}}{Cost_{old}}=e^{0.571}=2^{0.824}=1.770$$

> [!note] Why not 82.4%
> The "$\beta_1\%$ per 1%" reading is a small-change approximation. If the course expects it, the answer would be "about 82.4%", so show both. Also note $\beta_1<1$ means **economies of scale**: doubling output less than doubles cost.

## Q14 — Heteroskedasticity (error variance lower before 1990) [7 pts]

Assume the colleague is right, so Assumption A4 ([[Classical Assumptions]], [[Lec_12-Heteroskedasticity]]) fails.

| Statement | Answer | Reason |
|---|---|---|
| (A) OLS is unbiased | **TRUE** | Unbiasedness needs A1 and A2 only (mean-zero error, exogeneity). Changing variance does not touch them. |
| (B) OLS has minimal variance | **FALSE** | The Gauss-Markov result needs A4. Without it, OLS is not the minimum-variance linear unbiased estimator. |
| (C) OLS is efficient | **FALSE** | Efficient means smallest variance among unbiased estimators; same reason. |

> [!warning] AI-written answer, not official. Check before relying on it.
> Justification (4 pts): heteroskedasticity violates A4 only. OLS stays **unbiased** but loses **efficiency** (it gives equal weight to noisy and precise observations), and the usual standard errors are biased, so t and F tests are invalid. **WLS** (variance form known: here, run separate regressions for pre- and post-1990, or weight by the variances) would be efficient; **White robust SEs** fix the tests but not the efficiency.

> [!note] (B) versus (C)
> The paper lists "minimal variance" and "efficient" separately; in this course they both mean "smallest variance among the unbiased estimators", so both are FALSE.

## Q15 — Joint test: price of labor and price of capital [9 pts]

> [!warning] AI-written answer, not official. Check before relying on it.

### A. Null [1 pt]

$$H_0:\ \beta_2=\beta_3=0 \quad(\text{neither } P_K \text{ nor } P_L \text{ affects cost}),\qquad H_1:\ \text{at least one} \neq 0$$

### B. Restricted model [2 pts]

$$\ln(Cost)=\ln B+\beta_1\ln X+\beta_4\ln P_F+u$$

### C. F-statistic [3 pts]

The dependent variable is the same in both models, so the $R^2$ form applies: $q=2$ restrictions, $N-M=94$.

$$F=\frac{(R^2_{UR}-R^2_R)/q}{(1-R^2_{UR})/(N-M)}=\frac{(0.9798-0.977)/2}{(1-0.9798)/94}=\frac{0.0014}{0.000215}\approx \mathbf{6.51}$$

### D. Critical value and df [2 pts]

$F_{0.05}(2,\,94)\approx 3.09$ (the printed table row for 90 denominator df gives about 3.10). **Numerator df = 2, denominator df = 94.**

### E. Conclusion [1 pt]

$6.51>3.09$, so at $\alpha=5\%$ we **can reject** the null: capital and labor prices are **jointly significant** even though each is individually insignificant ($p=0.164$, $p=0.215$). This is exactly the **multicollinearity** signature ([[Lec_13-Exam Review]], [[Lec_08-Goodness of Fit & Multicollinearity]]): high correlation inflates each standard error, hiding the individual effects, but jointly they matter. So the colleague's claim (both affect cost) is supported.

![[PP04_q15_f_test.png|560]]

*The $F(2,94)$ density with the 5% critical value 3.09 and the computed statistic 6.51 in the rejection region. Theory diagram; the numbers are those of the solution above.*

> [!note] Judgement
> The test also supports a more nuanced reading: with $p$-values of 0.16 and 0.22, a high correlation is only a *possible* cause of the individual insignificance. The F-test shows the two variables matter jointly; it does not by itself prove they are collinear (that would need their correlation).

---

## Recap table

| Q | Topic | Answer (AI-solved) |
|---|---|---|
| 1 | Functional form | A: (i); B: (ii), (iii), (iv) (see ambiguity note) |
| 2 | Prediction | $\widehat{\ln wage}=8.687$, wage about 5,924 NIS |
| 3 | Dummy gap in a log model | +30.8% exact (26.8% approx) |
| 4 | Shape | (B), convex increasing |
| 5 | t-test $\beta_6=0.002$ | $t=4.35$, reject at 1% (crit 2.576); p-value $<5\%$: FALSE |
| 6 | Units | $\beta_0$ up by $\ln 12$; slopes unchanged |
| 7 | OVB on $\beta_4$ | (B) smaller |
| 8 | $R^2$ | (B) smaller |
| 9 | Overall F | (B) smaller (about 2,011 vs 2,210) |
| 10 | p-values | 16.4%, 21.5%, about 0 |
| 11 | 95% CI $\ln P_L$ | $(-0.105,\ 0.461)$ |
| 12 | 0 in 80% CI of $\ln P_K$ | FALSE ($p=0.164<0.20$) |
| 13 | Double output | cost $\times1.77$ (+77%); approx +82.4% |
| 14 | Heteroskedasticity | A TRUE, B FALSE, C FALSE |
| 15 | Joint F-test | $F=6.51>3.09$, reject |

## Related Notes

- [[Lec_13-Exam Review]], [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_12-Heteroskedasticity]]
- [[Assign_02-Functional Form & the Money-Supply Log-Log Model]], [[Assign_05-Quadratics, Dummy Variables, Interactions & the Chow Test]]
- Hub: [[Intro Econometrics]]
