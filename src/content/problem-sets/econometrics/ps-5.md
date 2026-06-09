---
title: "PS5"
subject: econometrics
source_doc: /papers/econometrics/ps-5.pdf
tags:
  - econometrics
  - problem-set
  - regression-discontinuity
  - running-variable
  - cutoff
  - bandwidth
  - sharp-rdd
  - linear-probability-model
  - omitted-variable-bias
  - causal-diagram
  - local-average-treatment-effect
  - polynomial-rdd
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Labor unions & product recalls (Kini et al. 2023).** What is the effect of unionization on product recalls?
    solution: |
      For workers to unionize, a secret-ballot election is held; the union forms only if **more than 50%** vote in favour. That hard >50% rule is the engine of the whole problem set — it sets up a [[Regression Discontinuity]] design where firms whose vote landed *just above* 50% (union won) are compared to firms *just below* (union lost). The data covers union elections at 382 firms, 2003–2013 (1,144 rows; **not** a panel — multiple election rounds per firm/year are separate rows).

      - **Outcome:** `has_recall_1yr` / `_2yr` / `_3yr` — binary, =1 if the firm had ≥1 recall in that window.
      - **Treatment:** `union_won` — =1 if the vote share exceeded 50%.
      - **Running variable:** `pct_vote_union` — share voting for the union, on a **0–1 scale**.
      - **Cutoff:** **0.50**.

      > [!info] The big arc of this PS
      > Q1 shows a strong *naive* negative correlation between unionizing and recalls. Q2 explains why that correlation is **not causal** (omitted-variable bias). Q3–Q5 then use [[Regression Discontinuity]] to isolate the causal jump at the 50% cutoff — and the effect largely **disappears**, telling us the Q1 correlation was mostly confounding.

      > [!note] This is the close-elections design from lecture
      > Q3–Q5 are the union-vote version of the Cattaneo-Frandsen-Titiunik close-elections recitation in [[Lec_09-Regression Discontinuity Design (RDD)]]: vote share as the running variable, a 0.50 cutoff, and an interacted-OLS sharp RDD.
    related_terms: ["regression-discontinuity", "sharp-rdd", "running-variable", "cutoff"]
  - id: "1"
    text: |
      Baseline model (B): three recall windows
    solution: |
      The outcome is binary, so `lm()` here is a [[LPM|Linear Probability Model]]: the coefficient on `union_won` is the change in the **probability** of a recall (in percentage points) when the union wins.

      $$\text{has.recall}_i = \beta_0 + \beta_1\,\text{union.won}_i + u_i$$

      ```r
      model_b_1yr <- lm(has_recall_1yr ~ union_won, data = union.data)
      model_b_2yr <- lm(has_recall_2yr ~ union_won, data = union.data)
      model_b_3yr <- lm(has_recall_3yr ~ union_won, data = union.data)
      ```

      **Results** (N = 1,144 each):

      | Outcome | $\hat\beta_1$ (union_won) | Std. error | p-value | Significant? |
      |---|---|---|---|---|
      | `has_recall_1yr` | **−0.021** | 0.021 | 0.321 | No |
      | `has_recall_2yr` | **−0.042** | 0.024 | 0.075 | Marginal (10%) |
      | `has_recall_3yr` | **−0.078** | 0.025 | 0.0016 | Yes (1%) |

      **Pattern.** The estimated effect of the union winning gets **larger (more negative) and more statistically significant** as the recall window lengthens. In the 1-year window there is essentially no detectable association; by the 3-year window, winning a union vote is associated with a **7.8 percentage-point lower probability** of a recall, significant at the 1% level.

      **Why this pattern?**

      1. **Unions take time to bite.** A union changes wages, staffing, safety procedures and grievance channels only *after* it forms and bargains a contract. Those quality-relevant changes accumulate, so an effect on recalls is more visible over 3 years than over 1. Matches Kini et al.'s headline finding (negative effect on *cumulative* recalls 3 years out).
      2. **More signal in the wider window.** Recalls are rare in any single year (mean ≈ 0.15 at 1yr vs 0.23 at 3yr). The longer window has more recall events, hence more variation in the outcome and more power to detect a relationship.

      > [!warning] Correlation, not causation (yet)
      > All three are simple LPMs with **no controls**. The negative sign is suggestive but cannot be read causally — Q2 explains the threat.
    related_terms: ["linear-probability-model"]
  - id: "2"
    text: |
      Causality: the unobserved confounder in category A
    solution: |
      Category **A** sits *below* both "union won" and "product recall" with arrows pointing *up to each* — that is the textbook shape of a **confounder** (a common cause), which is exactly the structure that produces [[Omitted Variable Bias]].

      **What could A be?** Any **unobserved firm characteristic that drives both** the likelihood of unionizing and the likelihood of recalls. Good candidates:

      - **Poor management / bad working conditions / safety culture.** Badly run firms have unhappy workers (→ more likely to vote union) *and* sloppy production (→ more recalls).
      - **Financial distress.** Struggling firms cut corners on quality control (→ recalls) and their workers seek union protection (→ unionize).
      - **Firm size / industry hazard.** Large or high-hazard firms both unionize more and recall more.

      **How does this affect $\beta_1$?** Because A is omitted and correlated with `union_won`, it loads onto the error term, so $\hat\beta_1$ is **biased** — it captures the union effect *plus* the confounder's effect, and is therefore **not a causal estimate**. Note the likely direction: if badly-run firms are *more* likely to unionize **and** have *more* recalls, the confounder pushes $\hat\beta_1$ in the **positive** direction, meaning the true causal effect could be **even more negative** than the biased estimate. Either way, the OLS baseline cannot be trusted for causality — motivating the RDD.
    related_terms: ["omitted-variable-bias", "causal-diagram"]
  - id: "3"
    text: |
      RDD setup
    solution: |
      ### 3a — Running variable, treatment, cutoff

      | Element | Variable | Value |
      |---|---|---|
      | **Running variable** | `pct_vote_union` | share voting for the union (0–1) |
      | **Treatment** | `union_won` | =1 if union formed |
      | **Cutoff** | — | **0.50** (a union needs >50% to win) |

      The whole design rests on the >50% rule: which side of 0.50 a firm's vote lands on determines treatment, but firms whose vote is *near* 50% (a coin-flip election) are otherwise comparable.

      ### 3b — Plot + type of design

      ```r
      plot(union.data$pct_vote_union, union.data$union_won,
           xlab = "Running variable: pct_vote_union",
           ylab = "Treatment: union_won (0/1)")
      abline(v = 0.5, col = "red", lwd = 2, lty = 2)   # cutoff
      ```

      ![](/images/econometrics/ps05-running-vs-treatment.png)

      Treatment is a **clean step**: every firm with `pct_vote_union > 0.5` has `union_won = 1`, and every firm below has `union_won = 0` — the probability of treatment jumps **0 → 1** exactly at the cutoff. This is a **[[Sharp RDD]]** (deterministic assignment), not [[Fuzzy RDD|fuzzy]].
    related_terms: ["sharp-rdd", "running-variable", "cutoff"]
  - id: "4"
    text: |
      RDD1 — linear (interacted) sharp RDD
    solution: |
      First **center** the running variable at the cutoff so the intercept is read off *at* the threshold:

      ```r
      union.data$run_c <- union.data$pct_vote_union - 0.5
      ```

      **Model (RDD1).**

      $$\text{has.recall.3yr}_i = \beta_0 + \beta_1(\text{run}-c)_i + \beta_2\,\text{treat}_i + \beta_3\big[(\text{run}-c)_i\cdot\text{treat}_i\big] + u_i$$

      ### 4a — Which coefficient is the treatment effect?

      $\beta_2$ — the coefficient on **`union_won`** (treatment). With the running variable centered, $\beta_2$ is the **vertical jump in the outcome at the cutoff**: the difference in recall probability between a firm whose union *barely won* and one whose union *barely lost*. $\beta_3$ just lets the slope differ on each side.

      ### 4b — Full sample

      ```r
      model_rdd1_full <- lm(has_recall_3yr ~ run_c * union_won, data = union.data)
      summary(model_rdd1_full)
      ```

      | Coefficient | Estimate | Std. error | p-value |
      |---|---|---|---|
      | Intercept ($\beta_0$) | 0.252 | 0.030 | <0.001 |
      | run_c ($\beta_1$) | −0.073 | 0.138 | 0.597 |
      | **union_won ($\beta_2$ = jump)** | **−0.040** | 0.044 | 0.360 |
      | run_c:union_won ($\beta_3$) | −0.021 | 0.172 | 0.901 |

      N = 1,144. **The jump is −0.040 and not significant (p = 0.36).**

      ![](/images/econometrics/ps05-rdd-jump-3yr.png)

      ### 4c — Local subset (|running − cutoff| ≤ 0.1)

      ```r
      union_near <- subset(union.data, abs(run_c) <= 0.1)
      model_rdd1_bw <- lm(has_recall_3yr ~ run_c * union_won, data = union_near)
      summary(model_rdd1_bw)
      ```

      | Coefficient | Estimate | Std. error | p-value |
      |---|---|---|---|
      | Intercept | 0.305 | 0.059 | <0.001 |
      | run_c | 0.703 | 0.956 | 0.463 |
      | **union_won ($\beta_2$ = jump)** | **−0.099** | 0.106 | 0.352 |
      | run_c:union_won | −0.158 | 1.782 | 0.929 |

      N = 322 (the close elections). **The local jump is −0.099, still not significant (p = 0.35), with a larger standard error.**

      ### 4d — Which result should you use?

      **The local estimate (4c).** [[Regression Discontinuity]] identifies a **[[Local Average Treatment Effect|LOCAL]]** effect, valid only near the cutoff under the [[Continuity Assumption]]. Firms with near-50% votes are the ones plausibly comparable, so restricting to the ±0.1 window gives the credible causal comparison. The full sample (4b) relies on the linear fit holding *far* from the cutoff and can mistake curvature for a jump (the [[Bandwidth]] vs functional-form trade-off). The cost of going local is a **larger standard error** (322 vs 1,144 obs) — the classic bias–variance trade-off. Both agree there is **no significant discontinuity**.
    related_terms: ["sharp-rdd", "local-average-treatment-effect", "bandwidth", "continuity-assumption"]
  - id: "5"
    text: |
      RDD2 — adding a 2nd-order polynomial
    solution: |
      Adding squared terms (and their interaction with treatment) lets the outcome **curve** on each side of the cutoff, so genuine curvature is not mistaken for a jump. The jump is **still** the coefficient on `union_won`.

      **Model (RDD2).**

      $$
      \begin{aligned}
      \text{has.recall.3yr}_i = \beta_0 &+ \beta_1(\text{run}-c)_i + \beta_2(\text{run}-c)_i^2 + \beta_3\,\text{treat}_i \\
      &+ \beta_4\big[(\text{run}-c)_i\cdot\text{treat}_i\big] + \beta_5\big[(\text{run}-c)_i^2\cdot\text{treat}_i\big] + u_i
      \end{aligned}
      $$

      ### 5a — Estimate (local subset, following 4d)

      ```r
      model_rdd2_bw <- lm(has_recall_3yr ~ run_c * union_won + I(run_c^2) * union_won,
                          data = union_near)
      summary(model_rdd2_bw)
      ```

      | Coefficient | Estimate | Std. error | p-value |
      |---|---|---|---|
      | Intercept | 0.294 | 0.075 | <0.001 |
      | run_c | −0.036 | 3.536 | 0.992 |
      | I(run_c²) | −7.54 | 34.69 | 0.828 |
      | **union_won ($\beta_3$ = jump)** | **0.001** | 0.174 | 0.996 |
      | run_c:union_won | −3.89 | 7.53 | 0.606 |
      | I(run_c²):union_won | 49.92 | 70.53 | 0.480 |

      N = 322. **The estimated jump is ≈ 0.001 and wildly insignificant (p > 0.99).**

      ### 5b — How does the answer change vs RDD1, and why?

      **The substantive conclusion does not change:** there is **no statistically significant discontinuity** in 3-year recalls at the 50% cutoff in either RDD1 or RDD2. What *does* change is that the point estimate moves around (−0.099 → ≈0.001) and the **standard errors blow up** (0.11 → 0.17 on the jump; the polynomial terms have SEs in the tens).

      **Why:** fitting a quadratic *and* its interactions inside a **narrow window with only 322 observations** introduces severe **multicollinearity** — `run_c`, `run_c²` and their interactions are highly correlated when `run_c` is tiny — so the model over-fits and individual coefficients become unstable and imprecise. This is exactly the "don't over-fit with high-order polynomials" warning in the RDD lecture; the modern fix is local-linear with a data-driven bandwidth (`rdrobust`).
    related_terms: ["regression-discontinuity"]
  - id: "summary"
    text: |
      Summary
    solution: |
      1. **Q1:** naive LPM shows union wins are associated with **fewer** recalls, an effect that grows with the window (−0.078, p=0.002 at 3yr) — partly because unions take time to act and longer windows have more signal.
      2. **Q2:** that association is confounded by **A = unobserved firm quality / management / distress** ([[Omitted Variable Bias]]) → $\hat\beta_1$ is not causal.
      3. **Q3:** the >50% rule gives a **[[Sharp RDD]]**: running = `pct_vote_union`, treatment = `union_won`, cutoff = 0.50.
      4. **Q4:** the causal jump ($\hat\beta_2$) is **small and insignificant** (−0.04 full, −0.10 local); the **local** estimate is the right one to report.
      5. **Q5:** adding a polynomial leaves the conclusion unchanged (no significant jump) but inflates SEs through over-fitting in a small window.
      6. **Bottom line:** once we use a credible causal design, the strong Q1 correlation **does not survive** — evidence the baseline was driven by confounding, not a causal effect of unionization on recalls (at least near the 50% margin).
    related_terms: []
---
