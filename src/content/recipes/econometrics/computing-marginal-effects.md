---
title: "Computing marginal effects (logit / probit)"
subject: econometrics
related_terms: ["logit-model", "probit-model", "marginal-effects"]
source_folder: econometrics
ai_drafted: true
---

In LPM the coefficient *is* the marginal effect, but in [[Logit Model|logit]] and [[Probit Model|probit]] the raw $\hat\beta_j$ tells you only the *direction* of the effect — the magnitude depends on where you are on the S-curve. To get a probability change you have to evaluate $g(\mathbf{x}'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$, where $g$ is the PDF of the link distribution. The standard protocol evaluates this at the sample mean (the marginal effect for the *average person*).

1. **Get the coefficient estimates** $\hat\beta_0, \hat\beta_1, \ldots, \hat\beta_k$ from R output (`summary(glm(...))`).
2. **Calculate sample means** of all explanatory variables: $\bar x_1, \bar x_2, \ldots, \bar x_k$.
3. **Compute the linear prediction at the mean:** $\bar{\mathbf{x}}'\hat{\boldsymbol\beta} = \hat\beta_0 + \hat\beta_1 \bar x_1 + \cdots + \hat\beta_k \bar x_k$.
4. **Evaluate the scaling factor:**
   - Probit: $g = \varphi(\bar{\mathbf{x}}'\hat{\boldsymbol\beta})$ using `dnorm()` in R.
   - Logit: $g$ = `dlogis()` evaluated at $\bar{\mathbf{x}}'\hat{\boldsymbol\beta}$.
5. **Multiply:** marginal effect of $x_j$ = $g \times \hat\beta_j$.

## Common pitfalls

- Comparing raw $\hat\beta_j$ across LPM / logit / probit. The three are on different scales — compare *marginal effects*, never raw coefficients. The Logit coefficient on `schooly` (0.128) being 6× the LPM coefficient (0.021) doesn't mean Logit thinks education matters more; it's the same effect on a different scale.
- Evaluating at a single non-representative point. The "average" person may not exist (e.g. with binary regressors). The `margins` package's `summary(margins(model))` computes the **average marginal effect** — the mean of $g(\mathbf{x}_i'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$ across all observations — which is often a more honest summary.
- Forgetting the marginal effect has its own standard error (you can't just use $\text{SE}(\hat\beta_j)$). Use the delta method, or rely on `margins::summary()`.

## Worked example

Topic 3 women's labour supply with probit $\hat\beta_{\text{schooly}} = 0.073$. At the sample means the lecture reports $\varphi(\bar{\mathbf{x}}'\hat{\boldsymbol\beta}) = 0.342$, so ME = $0.342 \times 0.073 = 0.025$ — the average woman's probability of being employed rises by **2.5 percentage points** per extra year of schooling. The corresponding logit ME is 0.032 and the LPM coefficient is 0.021 — all three agree on direction and on order of magnitude.
