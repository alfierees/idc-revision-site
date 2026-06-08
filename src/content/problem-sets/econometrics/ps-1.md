---
title: "PS1"
subject: econometrics
source_doc: /papers/econometrics/ps-1.pdf
tags:
  - econometrics
  - problem-set
  - causal-diagram
  - randomised-experiment
  - linear-probability-model
  - probit
  - marginal-effects
  - public-goods-game
ai_drafted: true
questions:
  - id: "setup"
    text: |
      **Alcohol consumption & social preferences (Zak et al. 2021).** What is the effect of alcohol consumption on free-riding in the public goods game?
    solution: |
      128 participants make decisions in the Public Goods Game (PGG) after consuming drinks. Drinks either contain alcohol or a similar-tasting placebo. Participants were informed (before consenting) that they would be **randomly assigned** to either the placebo (P) or the alcohol treatment (A); the assignment was only revealed after the experiment.

      **The PGG:** each participant is endowed with \$10 and can contribute \$0–\$10 to a common pool along with three other anonymous participants. Total contributions are tripled and split evenly among the four. An individual's earnings are highest when they free-ride (contribute zero) so long as others contribute nonzero amounts.

      **Key variables.**

      | Variable | Meaning |
      |---|---|
      | `alcohol.treatment` | =1 if randomly assigned to alcohol, =0 if placebo |
      | `blood.alcohol.chng` | change in BAC (0.08 = US legal driving limit) |
      | `self.reported.intoxication` | 0–100 self-report |
      | `PGG.contribution` | amount contributed to the common pool (0–10) |
      | `free.ride` | =1 if `PGG.contribution = 0`, else 0 |
      | `oxytocin.chng`, `stress.chng`, `pos.mood.change`, `neg.mood.change` | mood / hormone change measures |
      | `age`, `gender` (1=M, 0=F) | demographics |

      ### The causal diagram (given in the problem set)

      ```
      [assigned to alcohol treatment] ──► [change in BAC] ──► [free-riding in PGG]
                                              ▲                       ▲
                                              │                       │
                          [gender] ───────────┤             [unobserved social preferences]
                          [weight] ───────────┘                       │
                                                          [gender] ───┘
      ```

      The diagram makes the central design choice visible: `blood.alcohol.chng` has arrows from `gender` and `weight` (confounders) and is downstream of treatment; `alcohol.treatment` is the *randomised* node and is therefore the clean exogenous regressor.
    related_terms: ["causal-diagram", "randomised-experiment"]
  - id: "1"
    text: |
      Why use `alcohol.treatment` as the independent variable instead of `blood.alcohol.chng`?
    solution: |
      `blood.alcohol.chng` is tangled up with gender (and weight) effects: men and women metabolise alcohol differently, and may also behave differently in the PGG for reasons unrelated to alcohol. Using BAC change as the regressor blends the alcohol effect with these confounding metabolic/behavioural channels.

      `alcohol.treatment` is **randomly assigned**, so by construction it is independent of gender, weight, and unobserved social preferences. That randomisation breaks every backdoor path into the treatment node — exactly the property that lets OLS recover a causal effect without controls.
    related_terms: ["randomised-experiment", "causal-diagram"]
  - id: "2"
    text: |
      Fill in the table: everything someone in the alcohol treatment (A) experienced, and the equivalent in the placebo (P). Write "same" where experiences were identical.
    solution: |
      | Alcohol treatment (A) | Placebo (P) |
      |---|---|
      | Real 80-proof SKYY vodka mixed with cranberry juice | Identical-tasting alcohol-free vodka |
      | Amount of vodka adjusted by weight & gender | same |
      | Rims of the glass dabbed with real vodka | same |
      | Drink split into thirds, one every 10 minutes (over 30 min) | same |
      | Blood alcohol level rises | Blood alcohol level does not change |

      Everything visible, audible, taste-related, and procedural is held identical between the two arms; the only difference is the chemical reality of the drink and its downstream effect on BAC.
    related_terms: []
  - id: "3"
    text: |
      What varies between placebo (P) and alcohol treatment (A)?
    solution: |
      Only the **actual alcoholic content of the drink** — and consequently the **change in blood alcohol level** that follows. Every other element of the experimental procedure is identical by design.
    related_terms: []
  - id: "4"
    text: |
      Why did the researchers need to control for the perception of drinking alcohol, and how did they achieve it?
    solution: |
      **Why control for perception.** If placebo participants knew they hadn't received alcohol, they might behave differently in the PGG for reasons unrelated to alcohol's pharmacology — expectancy effects, demand characteristics, or social signalling. The researchers want to isolate what alcohol does to the brain, not what *believing one has drunk alcohol* does.

      **How they achieved it.** Per the table in Q2, the placebo was made to taste, smell, and look identical to the real drink: alcohol-free vodka mixed with cranberry juice in the same proportions, rims of glasses dabbed with real vodka to mimic the stinging sensation on the tongue, identical serving schedule, identical glassware. Only the chemical reality differed — the perceptual experience was held constant.
    related_terms: []
  - id: "5"
    text: |
      Consider only participants in the alcohol treatment (A).
    solution: |
      ### 5a — What would happen to "change in BAC" if some participants drank the entire drink immediately and others drank it after 30 minutes?

      BAC changes as the body absorbs alcohol and then metabolises it. If some people drank fast and others slow, they'd have very different BAC levels at the moment the PGG was played — even though everyone received the same total dose. The dispersion would inflate noise and could correlate with personality traits (impulsivity, anxiety) that themselves affect PGG behaviour.

      ### 5b — What would happen to "change in BAC" if everyone were served 3 ounces of vodka, regardless of weight or gender?

      A larger person has more blood volume to dilute the alcohol, so the same dose produces much less BAC change in a heavier person. Women also metabolise alcohol differently from men. If everyone got the same fixed dose, some participants would be drunk and others still sober — and BAC change would systematically correlate with gender and weight, putting those confounders back into the design.

      ### 5c — Why did the researchers spread the drink over 30 minutes but vary the vodka amount by weight and gender?

      The researchers' goal was for **everyone in group A to hit the same target BAC** (0.04–0.06%). Spreading the drink standardises the absorption rate (controls for *how quickly* alcohol enters the bloodstream); varying the dose by weight and gender standardises the *peak BAC level* given heterogeneous body chemistry. Together, the two design choices make the BAC change as uniform as possible across participants in the alcohol arm.
    related_terms: []
  - id: "6"
    text: |
      Empirical Application — verify the design, perception check, and estimate the free-riding effect.
    solution: |
      ### 6a — Verify the alcohol treatment does *not* affect positive mood, negative mood, stress, or oxytocin

      For each outcome $y$, estimate $y_i = \beta_0 + \beta_1 \text{alcohol.treatment}_i + u_i$.

      ```r
      summary(lm(pos.mood.change ~ alcohol.treatment, data = mydata))
      summary(lm(neg.mood.change ~ alcohol.treatment, data = mydata))
      summary(lm(stress.chng     ~ alcohol.treatment, data = mydata))
      summary(lm(oxytocin.chng   ~ alcohol.treatment, data = mydata))
      ```

      | Outcome | $\hat\beta_1$ | p-value | Significant? |
      |---|---|---|---|
      | `pos.mood.change` | 0.024 | 0.308 | No |
      | `neg.mood.change` | −0.039 | 0.189 | No |
      | `stress.chng` | 0.001 | 0.983 | No |
      | `oxytocin.chng` | 0.038 | 0.335 | No |

      **Conclusion:** alcohol treatment does not statistically affect any of the four. This is what we want — it confirms that the placebo successfully mimicked the alcoholic drink along the mood/stress/hormonal dimensions, so any free-riding effect we estimate later isn't operating through these alternative channels.

      ### 6b — Are alcohol-arm participants able to identify their treatment? What does this say about the perception-control?

      ```r
      summary(lm(self.reported.intoxication ~ alcohol.treatment, data = mydata))
      ```

      | Term | Estimate | SE | p-value |
      |---|---|---|---|
      | Intercept | 6.375 | 1.869 | 8.7e-4 |
      | `alcohol.treatment` | **13.297** | 2.643 | **1.6e-6** |

      Alcohol-treatment participants self-report intoxication ~13 points higher (out of 100) than placebo participants, hugely significant. **Perception was not fully controlled for** — participants in the alcohol arm could feel they had drunk alcohol. The placebo was good enough to match the *taste/smell/procedural* experience (Q4), but not the pharmacological one. Any "alcohol effect" we estimate may therefore conflate the chemical effect with an expectancy/perception effect.

      ### 6c — Effect of alcohol consumption on free-riding: LPM vs Probit

      $$\text{free.ride}_i = \beta_0 + \beta_1 \text{alcohol.treatment}_i + u_i$$

      ```r
      # LPM
      model_lpm <- lm(free.ride ~ alcohol.treatment, data = mydata)
      summary(model_lpm)

      # Probit (raw coefficients are NOT directly interpretable as probability changes)
      model_probit <- glm(free.ride ~ alcohol.treatment,
                          family = binomial(link = "probit"),
                          data = mydata)
      # Need AME (average marginal effect)
      library(margins)
      summary(margins(model_probit))
      ```

      | Model | Estimate / AME | SE | p-value |
      |---|---|---|---|
      | LPM ($\hat\beta_1$) | **0.156** | 0.072 | 0.033 |
      | Probit (AME on `alcohol.treatment`) | **0.155** | 0.070 | 0.027 |

      **Interpretation.** The alcohol treatment increases the probability of free-riding by **~15.6 percentage points**, statistically significant at the 5% level. The LPM and probit AMEs are essentially identical, so the result is robust to the choice of model.

      **Pros and cons.**

      - **[[LPM|LPM]]:** the coefficient is directly interpretable as a marginal effect — no post-estimation step needed. Drawbacks: predicted probabilities can fall outside [0, 1], and the errors are heteroskedastic by construction (use robust SEs).
      - **[[Probit Model|Probit]]:** estimated by maximum likelihood, modelling $\Pr(\text{free.ride} = 1) = \Phi(\beta_0 + \beta_1 \text{alcohol.treatment})$. Predictions always lie in [0, 1] and the curve handles non-linearity at the extremes. Drawback: raw coefficients are not directly interpretable as probability changes — you need the AME (the average of $\varphi(\mathbf{x}'\hat\beta) \cdot \hat\beta_1$ across the sample).

      **Robustness:** that the two estimates agree to within 0.001 is reassuring — the linear approximation is fine for a single binary regressor and a sample where predicted probabilities sit comfortably inside [0, 1].
    related_terms: ["linear-probability-model", "probit-model", "marginal-effects"]
---
