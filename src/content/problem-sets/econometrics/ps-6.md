---
title: "PS6"
subject: econometrics
source_doc: /papers/econometrics/ps-6.pdf
official_solution: /papers/econometrics/ps-6-solutions.pdf
official_solution_note: "Lecturer's official Problem Set 6 solutions (4 pages). Official answers are quoted below; anything marked as extra is not from the official file."
tags:
  - econometrics
  - problem-set
  - difference-in-differences
  - parallel-trends
  - event-study
  - clustered-standard-errors
  - treatment-effects
  - counterfactual
  - panel-data
  - policy-evaluation
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Active choice and organ donation (Kessler & Roth 2014).** In the United States, registering as an organ and tissue donor is done through the DMV. Individuals who choose to be donors have a small indicator on their driver's license. Each state runs its own DMV and decides how to ask people to register. Before 1 July 2011 California used an **opt-in** question (leaving it blank meant you did not want to donate). On 1 July 2011, following lobbying pressure, California switched to **active choice**: you mark either yes or no, and if you leave it blank DMV staff ask you to complete it. The percentage of people who mark YES (out of everyone offered the chance to register) is the **donor registration rate**.

      **Research question:** What is the effect of active choice on the donor registration rate?
    solution: |
      California is the only state that switched in this window, so California is the **treatment group** and the other states are the **controls**. The data is a balanced panel from Kessler & Roth (2014), **27 states × 6 quarters = 162 rows** (the question sheet says "26 states", but the file contains 27 and the official outputs report 162 observations = 27 × 6).

      - **`State`**: character, the state.
      - **`Quarter`**: 1 = 2010 Q4, 2 = 2011 Q1, 3 = 2011 Q2, 4 = 2011 Q3, 5 = 2011 Q4, 6 = 2012 Q1.
      - **`Rate`**: quarterly organ donor registration rate in state $i$ during quarter $t$.
      - **`Subset`**: flags the 8 states used in Q3.

      The switch happened on 1 July 2011 = the start of **quarter 4**, so quarters 4, 5 and 6 are *after* and quarters 1, 2 and 3 are *before*.

      > [!info] The big arc of this problem set
      > Q1 runs the **2×2 [[Difference-in-Differences]]** and finds active choice *lowered* registration, the opposite of the "active choice reveals true preferences" prior. Q2 tests the **[[Parallel Trends Assumption|parallel-trends]]** assumption the design rests on, using interactions of the treatment group with each quarter (an [[Event Study]]-style check). Q3 swaps the messy full control group for a cleaner set of **opt-in** states and checks whether the answer survives.

      > [!note] The same machinery as lecture
      > This is the Kessler-Roth example from [[Lec_10-Difference-in-Differences]] and [[Lec_11-Difference-in-Differences II (Dynamic DiD)]]: a 2×2 table run as an interacted OLS, with standard errors **[[Clustered Standard Errors|clustered]]** at the state level (the panel lesson from [[Lec_08-Fixed Effects in Panel Data]]).
    related_terms: ["difference-in-differences", "average-treatment-effect-on-the-treated", "counterfactual", "panel-data"]
  - id: "1a"
    text: |
      **1. Differences-in-Differences.** Use this dataset to conduct a differences-in-differences analysis to answer the research question.

      **a.** Write down the model (DID1) you decide to use. Define any new variables or interaction terms you need to estimate this model.
    solution: |
      **Official answer.**

      $$rate_{it} = \beta_0 + \beta_1\, CA_i + \beta_2\, d2_t + \beta_3\, effect_{it} + u_{it}$$

      Here $CA_i$ is a dummy for whether state $i$ is California; $d2_t$ is a dummy for whether the quarter is 4, 5 or 6; and $effect_{it} = CA_i \cdot d2_t$.

      Reading the coefficients off the four group × period means: $\beta_0$ = control states before, $\beta_1$ = California's fixed gap, $\beta_2$ = the common time change all states share, and $\beta_3$ = what is left for California after netting out that common change.
    related_terms: ["difference-in-differences", "dummy-variables"]
  - id: "1b"
    text: |
      **b.** Which coefficient will you use to answer your research question?
    solution: |
      **Official answer.** The coefficient $\beta_3$ (on the interaction $effect = CA \cdot d2$) estimates the effect of active choice on the organ donation rate.

      It is the **difference-in-differences** estimate: California's before-to-after change minus the controls' before-to-after change. Under [[Parallel Trends Assumption|parallel trends]] it is the causal effect of active choice on the treated ([[Average Treatment Effect on the Treated|ATT]]).
    related_terms: ["difference-in-differences", "average-treatment-effect-on-the-treated", "parallel-trends-assumption"]
  - id: "1c"
    text: |
      **c.** Estimate the model and report your results. (Be sure to cluster your standard errors at the State level.) What can you conclude regarding the research question?
    solution: |
      ```r
      load("organ_donation.RData")                 # data frame `organ`
      library(fixest)
      organ$d2 = as.numeric(organ$Quarter >= 4)    # after 1 July 2011
      organ$dT = as.numeric(organ$State == "California")
      organ$effect = organ$d2 * organ$dT           # the DiD interaction
      DID1 = feols(Rate ~ d2 + dT + effect, data = organ, cluster = "State")
      summary(DID1)
      ```

      **Results** (official output; N = 162, 27 state clusters):

      | Coefficient | Estimate | Clustered SE | $t$ | p-value |
      |---|---|---|---|---|
      | Intercept ($\beta_0$) | 0.4449 | 0.0314 | 14.17 | <0.001 |
      | d2 ($\beta_2$) | +0.0139 | 0.0061 | 2.29 | 0.030 |
      | dT ($\beta_1$) | −0.1736 | 0.0314 | −5.53 | <0.001 |
      | **effect ($\beta_3$ = DiD)** | **−0.0225** | 0.0061 | −3.70 | **0.001** |

      The four group means behind $\beta_3$:

      | | Before | After | Change |
      |---|---|---|---|
      | Control states | 0.4449 | 0.4589 | **+0.0139** |
      | California | 0.2713 | 0.2628 | **−0.0085** |
      | | | **DiD** | **−0.0225** |

      ![](/images/econometrics/ps06-did-trends.png)

      Control states drift **up** over the six quarters. California tracks them while still on opt-in, then **falls** right after the July 2011 switch. The dashed line is California's [[Counterfactual|counterfactual]], where it would have gone had it kept rising in parallel with the controls; the gap between the red line and the dashed line is the DiD estimate.

      **Official conclusion.** Active choice **reduced** the organ donation rate by about 2.25 percentage points. This is the **opposite** of the "active choice surfaces true (higher) demand" prior: forcing a yes/no answer pushed more people to actively decline than the old blank-equals-no default did.

      > [!warning] Official-solution slips (kept as given)
      > 1. The solution says "2.25%". The rate is a proportion, so $-0.0225$ is **2.25 percentage points**, not 2.25 per cent.
      > 2. It says the effect is significant "at the 0.1% level". The printed output has $p = 0.00102$ (two stars, `**`), so it is significant at the **1%** level and only just misses 0.1%.
    related_terms: ["difference-in-differences", "clustered-standard-errors", "counterfactual", "average-treatment-effect-on-the-treated"]
  - id: "2a"
    text: |
      **2. Parallel trends.** Differences-in-Differences assumes parallel trends prior to the treatment. You wish to test if this assumption holds.

      **a.** Write down the model (DID2) you use to test the parallel pre-trends assumption. (Hint: you will need to replace the interaction term from DID1 with something else.)
    solution: |
      **Official answer.**

      $$\begin{aligned}
      rate_{it} = \beta_0 &+ \beta_1\, CA_i + \beta_2\, d2_t \\
      &+ \delta_1\, effect1_{it} + \delta_2\, effect2_{it} + \delta_3\, effect4_{it} + \delta_4\, effect5_{it} + \delta_5\, effect6_{it} + u_{it}
      \end{aligned}$$

      Here $effect1_{it}$ is the interaction between an indicator that Quarter = 1 and $CA_i$, and so on. The model includes **all** the quarter interactions **except** the one for Quarter = 3 (2011 Q2, the last quarter before the switch), which is the reference.

      > [!warning] Official-solution inconsistency (kept as given)
      > The printed formula has the post dummy $d2_t$ as the common time term, but the **R code** in the same solution uses the numeric `Quarter` (a linear time trend) instead: `Rate ~ Quarter + dT + i(as.factor(Quarter), dT, ref = 3)`. The numbers in 2c come from that code (I reproduced them on the real data), so 2c follows the **code**.
    related_terms: ["parallel-trends-assumption", "event-study", "dummy-variables"]
  - id: "2b"
    text: |
      **b.** State explicitly which coefficients you will use to test the parallel trends assumption.
    solution: |
      **Official answer.** Test whether $\delta_1 = \delta_2 = 0$, the interactions for the two **pre-treatment** quarters 1 and 2 (2010 Q4 and 2011 Q1).

      If parallel trends holds, California was not already diverging from the controls before active choice, so these should be about 0 and statistically insignificant. The post-treatment interactions (quarters 4, 5, 6) are the *dynamic* treatment effects.
    related_terms: ["parallel-trends-assumption", "event-study"]
  - id: "2c"
    text: |
      **c.** Estimate the model and report your results. Again, make sure to cluster your standard errors at the state level. What can you conclude regarding the parallel trends assumption?
    solution: |
      ```r
      DID2 = feols(Rate ~ Quarter + dT + i(as.factor(Quarter), dT, ref = 3),
                   data = organ, cluster = "State")
      summary(DID2)
      ```

      **Results** (official output; N = 162, clustered at State):

      | Coefficient | Estimate | Clustered SE | $t$ | p-value |
      |---|---|---|---|---|
      | Intercept | 0.4382 | 0.0334 | 13.13 | <0.001 |
      | Quarter (linear trend) | 0.0039 | 0.0020 | 1.95 | 0.062 |
      | dT (California) | −0.1756 | 0.0309 | −5.68 | <0.001 |
      | **Quarter 1 : dT** ($\delta_1$, pre) | **0.0001** | 0.0040 | 0.03 | **0.974** |
      | **Quarter 2 : dT** ($\delta_2$, pre) | **0.0027** | 0.0020 | 1.35 | **0.189** |
      | Quarter 4 : dT (post) | −0.0146 | 0.0020 | −7.27 | <0.001 |
      | Quarter 5 : dT (post) | −0.0214 | 0.0040 | −5.33 | <0.001 |
      | Quarter 6 : dT (post) | −0.0219 | 0.0060 | −3.64 | 0.001 |

      **Official conclusion.** Since neither $\hat\delta_1$ nor $\hat\delta_2$ is statistically significantly different from zero, the **parallel trends assumption holds**.

      **What $\delta$ actually is.** Each $\delta$ is the **vertical distance between the two group lines** once both are slid to 0 in the reference quarter. If the lines are parallel before treatment, that gap is flat at about 0 (so the pre-period $\delta$'s are about 0); after treatment the lines split and the size of the split is the DiD effect (here about −1.5 to −2.2 percentage points).

      **Extra (not in the official solutions): a stricter version.** The official model uses a **single linear time trend** shared by both groups. A fully flexible event study uses a **separate dummy for every quarter** (`feols(Rate ~ Qf * dT, cluster = ~State)` with quarter 3 as reference). I ran this on the real data:

      | Quarter | | Gap vs controls | SE | p-value |
      |---|---|---|---|---|
      | 2010 Q4 | pre | −0.0029 | 0.0051 | 0.569 |
      | 2011 Q1 | pre | +0.0063 | 0.0023 | **0.010** |
      | 2011 Q2 | ref | 0 (omitted) | | |
      | 2011 Q3 | post | −0.0216 | 0.0051 | <0.001 |
      | 2011 Q4 | post | −0.0203 | 0.0045 | <0.001 |
      | 2012 Q1 | post | −0.0222 | 0.0100 | 0.036 |

      ![](/images/econometrics/ps06-parallel-trends-explained.png)

      ![](/images/econometrics/ps06-event-study.png)

      > [!warning] AI-written extra, not official
      > With the **official** (linear-trend) model both pre-period coefficients are insignificant, so parallel trends holds. With **full quarter dummies** the 2011 Q1 gap is +0.6 pp and significant at 1%, a small caveat: it is about one-third the size of the post-treatment effect (about 2.2 pp) and has the opposite sign (it would make the negative effect look conservative), and with a **single treated cluster** (California) the clustered SEs are themselves fragile. For the exam, **give the official answer** (parallel trends holds) and mention the caveat if asked to be critical.
    related_terms: ["parallel-trends-assumption", "event-study", "clustered-standard-errors", "time-fixed-effects"]
  - id: "3a"
    text: |
      **3. Control group.** Table 1 on page 3 of the question sheet shows the type of organ donor registration question for each state (as of 2014). Many states use active choice to register donors.

      **a.** Create a subset of the data using only the following states: California, Arizona, Minnesota, New Hampshire, South Carolina, Virginia, District of Columbia, Wisconsin. (Hint: use the variable `Subset`.)
    solution: |
      **Official answer.** There are a few ways to do this; one is:

      ```r
      sub.organ = organ[organ$Subset == 1, ]
      ```

      The 8 flagged states are California, Arizona, Minnesota, New Hampshire, South Carolina, Virginia, District of Columbia and Wisconsin (48 rows = 8 × 6).
    related_terms: []
  - id: "3b"
    text: |
      **b.** Other than California, the rest of the states in this subset all have opt-in registration questions as of 2014. Why might this be a better sample of data to use for differences-in-differences than the full dataset?
    solution: |
      **Official answer.** In DiD we want the control group to be observations that were **never treated** but are otherwise **similar** to the treated group. In the full sample (Q1), some control states may have **switched to active choice** at some point. Using only states that still use opt-in registration as of 2014 gives a better control group.

      Put differently: the other opt-in states ask the question the same way California did *before* July 2011, so their trend is a more credible stand-in for California's missing counterfactual.
    related_terms: ["difference-in-differences", "counterfactual", "parallel-trends-assumption"]
  - id: "3c"
    text: |
      **c.** Estimate DID1 from before and report your results. Does your answer to the research question change?
    solution: |
      ```r
      DID3 = feols(Rate ~ d2 + dT + effect, data = sub.organ, cluster = "State")
      summary(DID3)
      ```

      **Results** (official output; N = 48, 8 state clusters):

      | Coefficient | Estimate | Clustered SE | $t$ | p-value |
      |---|---|---|---|---|
      | Intercept ($\beta_0$) | 0.3991 | 0.0567 | 7.03 | <0.001 |
      | d2 ($\beta_2$) | +0.0125 | 0.0137 | 0.91 | 0.391 |
      | dT ($\beta_1$) | −0.1278 | 0.0567 | −2.25 | 0.059 |
      | **effect ($\beta_3$ = DiD)** | **−0.0211** | 0.0137 | −1.54 | **0.168** |

      ![](/images/econometrics/ps06-subset-trends.png)

      **Official answer.** The sign and magnitude of the estimated effect stay about the same (around −2%, i.e. about 2 percentage points). However, the estimate is **no longer significant at the 10% level** (let alone 0.1%). This could be because we are using **almost a third of the sample size** as before (48 vs 162 rows); or it could be that our control group in Q1 was **not a good control group**.

      **Why the standard error grows.** Dropping from 27 to **8 clusters** widens the clustered SE and leaves only $G-1=7$ degrees of freedom for the $t$-test. We trade *comparability* (a more credible counterfactual) for *power* (a smaller sample).
    related_terms: ["difference-in-differences", "clustered-standard-errors"]
  - id: "summary"
    text: |
      Summary
    solution: |
      1. **Q1:** $\hat\beta_3 = -0.0225$ (clustered SE 0.006, $p \approx 0.001$): active choice **cut** California's registration rate by about **2.25 percentage points** relative to the controls. The DiD coefficient on the interaction answers the question.
      2. **Q2:** the pre-treatment interactions $\hat\delta_1 = 0.0001$ ($p = 0.97$) and $\hat\delta_2 = 0.0027$ ($p = 0.19$) are insignificant, so **parallel trends holds** (official). A stricter quarter-dummy version shows a small significant 2011 Q1 gap, a caveat but not a failure.
      3. **Q3:** on the opt-in subset $\hat\beta_3 = -0.0211$, almost the same estimate but $p = 0.168$ with only 8 clusters. Cleaner control group, less power; the substantive conclusion does not change.
      4. **Bottom line:** forcing an active yes/no choice **lowered** donor registration relative to the opt-in default. The result is consistent across specifications; its statistical significance depends on how many control states you use.

      *Related: [[Lec_10-Difference-in-Differences]], [[Lec_11-Difference-in-Differences II (Dynamic DiD)]], [[Lec_08-Fixed Effects in Panel Data]]*
    related_terms: []
---

> [!info] Dataset
> Download the data: [organ_donation.RData](/papers/econometrics/organ_donation.RData). It loads a data frame called `organ` (27 states × 6 quarters = 162 rows, variables `State`, `Quarter`, `Rate`, `Subset`). In R: `load("organ_donation.RData")`. The official question sheet and solutions are linked at the top of the page.
