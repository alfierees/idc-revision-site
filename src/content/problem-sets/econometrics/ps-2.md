---
title: "PS2"
subject: econometrics
source_doc: /papers/econometrics/ps-2.pdf
tags:
  - econometrics
  - problem-set
  - instrumental-variables
  - endogeneity
  - OLS
  - 2SLS
  - heckman
  - sample-selection
  - fertility
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Women's Fertility & Education.** Does education causally reduce the number of children a woman has?
    solution: |
      **Dataset.** Pooled cross-section from the National Opinion Research Center's General Social Survey (GSS), used by Sander (1990). Women aged 35–54. Key variables:

      | Variable | Description |
      |---|---|
      | `childs` | Number of children (1–7, or **NA if 0**) |
      | `educ` | Years of education |
      | `age` | Age (18–88) |
      | `race.Black` | Binary: Black race |
      | `bgcity`, `town`, `farm` | Place at age 16 (big city / town / rural) |
      | `west`, `east`, `south`, `central` | Region at age 16 |
      | `paeduc` | Father's years of education |
      | `maeduc` | Mother's years of education |
      | `year.born` | Birth year |

      > [!warning] Missing data trap
      > `childs = NA` means **0 children**, not truly missing. OLS silently drops these rows, estimating only on women with ≥1 child. This is the selection problem Q8 addresses.
    related_terms: []
  - id: "1"
    text: |
      Endogeneity of Education
    solution: |
      ### Why education might causally reduce fertility

      1. **Opportunity cost of time:** higher education → higher wages → the forgone income from child-rearing is more expensive
      2. **Better contraception use:** more educated women use family planning more effectively
      3. **Preference shifts:** schooling changes cultural attitudes toward family size

      ### Why education is endogenous

      Education is **endogenous** — correlated with the error term $u_i$ — for two reasons:

      1. **Reverse causality:** having children early makes it harder to stay in school. Causality runs both ways: $\text{educ} \to \text{childs}$ *and* $\text{childs} \to \text{educ}$
      2. **Unobserved confounders:** "cultural norms at 16" affect both how much schooling a woman gets *and* how many children she wants. Since these norms are unobservable, they sit in $u_i$ — and since education is correlated with them, $\text{cov}(\text{educ}_i, u_i) \neq 0$

      > [!tip] The endogeneity intuition
      > OLS gives unbiased estimates only when X is truly exogenous. Education isn't — it's tangled up with unobservable forces that also determine fertility. Using it as a regressor without correction gives a biased coefficient.
    related_terms: ["endogeneity"]
  - id: "2"
    text: |
      Causal diagram (DAG)
    solution: |
      ```
              Unobserved Cultural Norms at 16
              (unobservable — sits in error term)
                     /              \
                    ↓                ↓
      Type of place at 16
      Region of USA at 16  →  [Education] ──────────→ [Number of Children]
                                    ↑  ↖___(reverse causality)___↗
      Race ──────────────────────────────────────────────────────→ (direct)
      Age ────────────────────────────────────────────────────────→ (direct)
      ```

      **Key structural features:**

      - "Unobserved cultural norms at 16" → **both** Education and Number of Children → this is the backdoor path causing endogeneity
      - Education → Number of Children is the **main causal effect** we want to estimate
      - The **reverse causality** arrow (children → education) also creates endogeneity
      - Race has paths to **both** education and fertility (must control for it)
      - Age has a direct path to fertility (older women have had more time)
    related_terms: ["causal-diagram"]
  - id: "3"
    text: |
      OLS regression
    solution: |
      **Model** (estimated on women aged 35–54, n = 6,969 after NA drops):

      $$\text{childs}_i = \beta_0 + \beta_1 \text{educ}_i + \beta_2 \text{age}_i + \beta_3 \text{race.Black}_i + \beta_4 \text{bgcity}_i + \beta_5 \text{town}_i + \beta_6 \text{west}_i + \beta_7 \text{east}_i + \beta_8 \text{south}_i + u_i$$

      **Reference categories:** `farm` (place), `central` (region).

      ```r
      model_ols <- lm(childs ~ educ + age + race.Black + bgcity + town +
                        west + east + south, data = fertility_sub)
      ```

      ### Results

      | Variable | β̂ | p-value | Interpretation |
      |---|---|---|---|
      | **educ** | **−0.103** | **< 0.001** | 1 extra year of education → 0.10 fewer children |
      | age | +0.015 | < 0.001 | Older women have more children |
      | race.Black | +0.206 | < 0.001 | Black women have ~0.21 more children |
      | east | −0.100 | 0.016 | Grew up in NE/Mid-Atlantic → fewer children vs Central |
      | south | −0.229 | < 0.001 | Grew up in South → fewer children vs Central |
      | bgcity, town, west | n.s. | > 0.05 | Not significant once region controlled |

      R² = 0.055 (5.5% of variance explained — low but expected for individual-level cross-section).

      > [!warning] OLS is biased here
      > This estimate is biased because education is endogenous. The reverse causality (children → less schooling) pushes the coefficient toward zero — OLS **understates** the true negative effect of education on fertility.
    related_terms: ["ols-estimator"]
  - id: "4"
    text: |
      Instrumental variables (2SLS)
    solution: |
      **Instruments:** `paeduc` (father's education) and `maeduc` (mother's education).

      **Logic.**

      - *Relevance:* more educated parents keep daughters in school longer → paeduc/maeduc correlated with woman's educ ✅
      - *Exclusion restriction:* parents' schooling affects *your* fertility only through *your* education — no direct path ✅ (debatable — see Q7)

      **Two stages** (done automatically by `ivreg()`):

      $$\text{Stage 1: } \quad \hat{\text{educ}}_i = \alpha_0 + \alpha_1 \text{paeduc}_i + \alpha_2 \text{maeduc}_i + \text{controls} + v_i$$

      $$\text{Stage 2: } \quad \text{childs}_i = \beta_0 + \beta_1 \hat{\text{educ}}_i + \text{controls} + u_i$$

      ```r
      model_iv <- ivreg(childs ~ educ + age + race.Black + bgcity + town + west + east + south |
                          paeduc + maeduc + age + race.Black + bgcity + town + west + east + south,
                        data = fertility_sub)
      summary(model_iv, diagnostics = TRUE)
      ```

      **IV result:** $\hat{\beta}_1 = -0.171$ (p < 0.001) — 1 extra year of education causes ~0.17 fewer children.
    related_terms: ["instrumental-variables", "two-stage-least-squares"]
  - id: "5"
    text: |
      Why OLS and IV differ
    solution: |
      | Model | educ coefficient | What it measures |
      |---|---|---|
      | OLS | −0.103 | *Association* — biased by reverse causality |
      | IV (2SLS) | −0.171 | *Causal effect* — clean variation from parents' schooling |

      **Why OLS is upward biased** (toward zero):

      - Women who have children early drop out of school → low education partly *caused by* high fertility
      - This positive reverse causation partially cancels the true negative effect of education on fertility
      - OLS blends both directions; IV isolates only the education → fertility direction

      **Wu-Hausman test** (p = 9.4×10⁻¹⁰): confirms education **is** endogenous — OLS is significantly biased, IV was necessary.

      > [!tip] Direction of bias
      > If IV coefficient is **more negative** than OLS → OLS was upward biased (endogeneity was masking part of the true effect). This is exactly what we find: −0.171 vs −0.103.
    related_terms: ["wu-hausman-test"]
  - id: "6"
    text: |
      Instrument relevance
    solution: |
      **Test:** joint significance of `paeduc` and `maeduc` in the first-stage regression.

      **Result:** weak-instruments F = **953.2** (p < 0.001).

      Rule of thumb: F > 10 = not weak instruments. F = 953 >> 10 → instruments are **highly relevant**.

      ```r
      model_first_stage <- lm(educ ~ paeduc + maeduc + age + race.Black +
                                 bgcity + town + west + east + south, data = fertility_sub)
      linearHypothesis(model_first_stage, c("paeduc = 0", "maeduc = 0"))
      ```

      > [!info] Relevance vs validity
      > Relevance (tested with F-stat) is a **statistical** condition — you can verify it with data.
      > Validity (exclusion restriction) is a **theoretical** condition — data cannot fully confirm it.
    related_terms: ["instrument-relevance", "weak-instruments"]
  - id: "7"
    text: |
      Instrument validity (exclusion restriction)
    solution: |
      **Sargan overidentification test:** statistic = 1.983, p = 0.159 → **fail to reject** null of valid instruments.

      But the Sargan test cannot fully establish validity. It only detects violations when the two instruments violate the exclusion restriction **in different ways**. If both `paeduc` and `maeduc` share the same direct channel to fertility (e.g. both reflect educated family culture), the test is blind to this.

      ### Arguments FOR validity

      - Parents' education determined before the woman is born → clearly exogenous
      - Main channel is plausibly: parents' educ → woman's educ → woman's fertility

      ### Arguments AGAINST validity

      - More educated parents may pass on **smaller family size preferences** directly to daughters (not just via schooling)
      - Parents' education reflects **family cultural norms** that directly shape fertility preferences
      - Both instruments would violate the exclusion restriction in the *same direction* → Sargan test has no power to catch this

      > [!warning] Statistical tests can't fully establish validity
      > The exclusion restriction is ultimately a **theoretical argument**. The Sargan test provides weak supporting evidence but cannot rule out violations that affect both instruments equally. Instrument validity must be argued from theory, not just from p-values.
    related_terms: ["instrument-validity"]
  - id: "8"
    text: |
      Heckman selection correction
    solution: |
      ### The problem
      `childs = NA` for childless women → OLS estimated only on women with ≥1 child. If childlessness is *systematically* related to characteristics in the model, this is **endogenous sample selection** and OLS is biased.

      ### The model

      **Selection equation** (probit — who has any children?):

      $$\Pr(\text{has\_child}_i = 1) = \Phi(\gamma_0 + \gamma_1 \text{year.born}_i + \gamma_2 \text{educ}_i + \text{controls})$$

      **Outcome equation** (how many children, given ≥1?):

      $$\text{childs}_i = \beta_0 + \beta_1 \text{educ}_i + \text{controls} + \rho \lambda_i + u_i$$

      where $\lambda_i$ is the [[Inverse Mills Ratio|inverse Mills ratio]] — a correction term. If $\lambda$ is significant, selection bias is confirmed.

      **Exclusion restriction:** `year.born` appears in the selection equation only — birth cohort affects whether a woman has *any* children, but not *how many* conditional on having any.

      ```r
      fertility_sub$has_child <- as.integer(!is.na(fertility_sub$childs))

      model_heckman <- heckit(
        selection = has_child ~ year.born + educ + age + race.Black + bgcity + town + west + east + south,
        outcome   = childs ~ educ + age + race.Black + bgcity + town + west + east + south,
        data = fertility_sub
      )
      ```

      ### Results

      **Selection equation key findings:**

      - `year.born`: β = −0.007 (p < 0.001) → women born in later cohorts significantly less likely to have children ✅ confirms `year.born` as valid exclusion restriction
      - `educ`: β = −0.094 (p < 0.001) → more educated women less likely to have *any* children

      **Evidence of selection:**

      - **invMillsRatio:** λ = −3.171 (p < 0.001) → **yes, significant selection bias confirmed**
      - Women who have children are NOT a random draw from the population

      **Outcome equation:**

      - `educ`: β = **+0.017 (p = 0.51) — NOT significant**

      > [!note] Striking finding
      > OLS gave educ = −0.103 (***). After Heckman correction, educ = +0.017 (n.s.).
      >
      > **Interpretation:** education's main effect is on the *decision to have children at all* (strong negative effect in the selection equation), not on *how many* children a woman has once she's decided to have them. OLS was picking up the selection effect as if it were a within-sample effect.

      ### Summary of coefficients across models

      | Model | educ β̂ | Significant? | What it captures |
      |---|---|---|---|
      | OLS (Q3) | −0.103 | Yes (***) | Biased association — conflates selection + causal + reverse causality |
      | IV/2SLS (Q4) | −0.171 | Yes (***) | Causal effect, purged of reverse causality |
      | Heckman outcome (Q8) | +0.017 | No | Effect on family *size* only, after correcting for selection into motherhood |
    related_terms: ["heckman-selection-model", "sample-selection-bias", "inverse-mills-ratio"]
---

> [!abstract] What this PS demonstrates
> Three layers of bias in a naive fertility regression: **endogeneity** (Q1–Q5, OLS understates the negative effect because reverse causality cancels part of it), **instrument quality** (Q6–Q7, parents' education is highly relevant but its validity is debatable), and **selection bias** (Q8, Heckman shows education's effect operates primarily through the *decision to have any children*, not family size).

*Related:* [[Lec_04-Instrumental Variables]] · [[Lec_03-Logit & Probit Models]] (probit step in Heckman) · [[Lec_05-Sample Selection & Heckman Correction]]
