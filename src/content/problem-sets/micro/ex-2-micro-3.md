---
title: "EX-2"
subject: micro
tags:
  - microeconomics
  - assignment-solution
  - insurance
  - adverse-selection
source_doc: /papers/micro/ex-2-micro-3.docx
ai_drafted: true
questions:
  - id: "1"
    text: |
      When an individual becomes ill, their demand for health services is $q = 20 - p$, where $p$ is the price per unit of service. The market price of a medical unit is 8 ₪. The probability of becoming sick is 0.5.

      An insurance company offers a policy with a premium of 56 ₪, under which the individual may consume up to 14 units of medical services for free.

      Evaluate: *"If the individual is risk-averse and the insurance premium is actuarially fair, then the individual will certainly purchase the insurance."*
    solution: |
      Use the [[Actuarially fair premium (with moral hazard)|fair-premium recipe]]: the fair premium reflects the insurer's expected payout *given* the consumer's insured behaviour, which can differ from natural expected loss whenever there is moral hazard.

      | Quantity | Value |
      |---|---|
      | Demand when sick | $q = 20 - p$ |
      | Market price | $p = 8$ |
      | Probability of sickness | 0.5 |
      | Insurance premium | 56 ₪ |
      | Coverage | Up to 14 units free |

      **Step 1 — Expenditure without insurance.** At $p = 8$: $q = 20 - 8 = 12$, expenditure $= 12 \times 8 = 96$ ₪. Expected expenditure $= 0.5 \times 96 + 0.5 \times 0 = 48$ ₪.

      **Step 2 — Insured behaviour and payout.** With insurance the consumer faces $p = 0$, so unconstrained demand is 20 — capped at 14. Since $14 > 12$ (uninsured quantity), they consume all 14 free units. Payout per sick event $= 14 \times 8 = 112$ ₪. Expected payout $= 0.5 \times 112 = 56$ ₪ — equals the premium ✓ (fair from insurer's perspective).

      **Step 3 — The moral-hazard wedge.** The insured consumes 14 units (vs 12 without). The insurer prices in the overconsumption:

      | Scenario | Expected cost to individual |
      |---|---|
      | Without insurance | 48 ₪ (uncertain: 0 or 96) |
      | With insurance | 56 ₪ (certain) |
      | [[Moral Hazard]] markup | **8 ₪** |

      > [!warning] Conclusion
      > **FALSE.** The standard "risk-averse + actuarially fair → buy" result requires the fair premium to reflect *natural* (pre-insurance) behaviour. Here the premium (56 ₪) exceeds the individual's expected natural loss (48 ₪) by 8 ₪ due to moral hazard. A mildly risk-averse individual whose risk premium is below 8 ₪ prefers bearing the risk to paying the inflated premium.
    related_terms: []
    source_doc_page: 1
  - id: "2a"
    text: |
      Evaluate: *"A risk-averse individual will prefer a certain lottery to a risky lottery even if the expected prize of the certain lottery is lower."*
    solution: |
      **FALSE as a universal claim.** A risk-averse individual accepts a certain prize below the expected value of a risky lottery *only down to* their certainty equivalent (CE). If the certain prize falls below the CE, they prefer the risky lottery.

      > [!example] Counter-example
      > A certain 1 ₪ vs a 50/50 lottery of 0 or 1,000,000 ₪ — even an extremely risk-averse person picks the lottery, because the lottery's certainty equivalent is far above 1 ₪.

      Correct statement: a risk-averse individual *may* prefer a certain prize that is below the expected value of a risky lottery, but only if the certain prize is at least their certainty equivalent of the lottery.
    related_terms: []
    source_doc_page: 1
  - id: "2b"
    text: |
      Evaluate: *"Insurance with a deductible may reduce the moral hazard problem but worsen the adverse selection problem."*
    solution: |
      **TRUE.**

      | Effect | Mechanism |
      |---|---|
      | Reduces moral hazard | Insured pays the first $X$ ₪ themselves → they still face marginal cost on small claims → the incentive to overconsume is partially preserved. |
      | Worsens adverse selection | High-risk individuals frequently exceed the deductible and still value the policy. Low-risk individuals rarely reach the deductible and may opt out. The pool becomes riskier on average. |

      > [!tip] The deductible trade-off in one line
      > Deductibles move risk-sharing back toward the individual — which restores effort incentives ([[Moral Hazard]] ↓) but also screens *toward* the high-risk pool ([[Adverse Selection]] ↑).
    related_terms: []
    source_doc_page: 1
  - id: "3a"
    text: |
      Three illness states, each with probability $1/3$. Mild: $Q = 80 - 2P$, $MC = 20$ ₪. Moderate: $Q = 100 - P$, $MC = 30$ ₪. Severe: $Q = 200$ (perfectly inelastic), $MC = 50$ ₪. Market price equals MC in each state.

      What is the individual's expected expenditure on medical services if they are not insured?
    solution: |
      At the market price $P = MC$ in each state, the individual consumes the demand at that price and spends $P \times Q$:

      | State | $Q$ at $P = MC$ | Spend |
      |---|---|---|
      | Mild | $80 - 2(20) = 40$ | $40 \times 20 = 800$ |
      | Moderate | $100 - 30 = 70$ | $70 \times 30 = 2{,}100$ |
      | Severe | $200$ (fixed) | $200 \times 50 = 10{,}000$ |

      $$E[\text{expenditure}] = \tfrac{1}{3}(800 + 2{,}100 + 10{,}000) = \tfrac{12{,}900}{3} = 4{,}300 \text{ NIS}$$

      > [!success] Answer
      > Expected expenditure without insurance = **4,300 ₪**.
    related_terms: []
    source_doc_page: 2
  - id: "3b"
    text: |
      What is the actuarially fair premium for full insurance?
    solution: |
      Apply [[Actuarially fair premium (with moral hazard)]]. Under full insurance the consumer faces $P = 0$, so demand rises in elastic states:

      | State | $Q$ at $P = 0$ | Insurance payout (at market $MC$) |
      |---|---|---|
      | Mild | $80 - 2(0) = 80$ | $80 \times 20 = 1{,}600$ |
      | Moderate | $100 - 0 = 100$ | $100 \times 30 = 3{,}000$ |
      | Severe | $200$ (unchanged) | $200 \times 50 = 10{,}000$ |

      $$\text{Fair premium} = \tfrac{1}{3}(1{,}600 + 3{,}000 + 10{,}000) = \tfrac{14{,}600}{3} \approx 4{,}867 \text{ NIS}$$

      > [!success] Answer
      > Actuarially fair full-insurance premium ≈ **4,867 ₪**.
    related_terms: []
    source_doc_page: 2
  - id: "3c"
    text: |
      In which illness states might moral hazard arise if full insurance is provided?
    solution: |
      [[Moral Hazard]] arises wherever insurance *changes* the quantity consumed:

      | State | $Q$ without insurance | $Q$ with insurance ($P = 0$) | Moral hazard? |
      |---|---|---|---|
      | Mild | 40 | 80 | **YES** — demand doubles |
      | Moderate | 70 | 100 | **YES** — demand rises 43% |
      | Severe | 200 | 200 | NO — demand is perfectly inelastic |

      > [!info] Why severe is exempt
      > In the severe state $Q = 200$ regardless of price — price has no effect on quantity demanded. No quantity change ⇒ no moral hazard, and the insurer faces only the natural risk.
    related_terms: []
    source_doc_page: 2
  - id: "3d"
    text: |
      If the individual is risk-averse, would they necessarily purchase full insurance at the actuarially fair price?
    solution: |
      Fair premium (4,867 ₪) > Expected natural loss (4,300 ₪). The 567 ₪ gap is the moral-hazard inflation across the mild and moderate states.

      $$\text{Moral-hazard wedge} = 4{,}867 - 4{,}300 = 567 \text{ NIS}$$

      A risk-averse person is willing to pay a risk premium only up to their certainty equivalent. If that risk premium is below 567 ₪, they prefer to remain uninsured.

      > [!warning] Conclusion
      > **No — not necessarily.** The fair premium is inflated by 567 ₪ relative to the individual's natural expected loss. A mildly risk-averse individual may prefer the uncertain but cheaper outcome.
    related_terms: []
    source_doc_page: 2
  - id: "3e"
    text: |
      Suppose the insurance company introduces 10% coinsurance (the individual pays 10% of the price of each unit). What is the actuarially fair premium in this case?
    solution: |
      Under 10% coinsurance the individual pays $0.1 \times MC$; insurance covers $0.9 \times MC$. Demand re-optimises against the lower effective price:

      | State | $P_{\text{cons}} = 0.1 \cdot MC$ | $Q$ at $P_{\text{cons}}$ | Insurer pays per unit ($0.9 \cdot MC$) | Total payout |
      |---|---|---|---|---|
      | Mild | 2 | $80 - 2(2) = 76$ | 18 | $76 \times 18 = 1{,}368$ |
      | Moderate | 3 | $100 - 3 = 97$ | 27 | $97 \times 27 = 2{,}619$ |
      | Severe | 5 | $200$ (fixed) | 45 | $200 \times 45 = 9{,}000$ |

      $$\text{Fair premium} = \tfrac{1}{3}(1{,}368 + 2{,}619 + 9{,}000) = \tfrac{12{,}987}{3} = 4{,}329 \text{ NIS}$$

      > [!success] Answer
      > Actuarially fair coinsurance premium = **4,329 ₪** — lower than the full-insurance premium (4,867 ₪) because the 10% co-pay partially mitigates moral hazard (76 < 80, 97 < 100).
    related_terms: []
    source_doc_page: 2
  - id: "3f"
    text: |
      The insurer offers two plans — **Plan A:** Full insurance at the actuarially fair premium. **Plan B:** Full insurance only in the severe illness state. Would a risk-averse individual prefer Plan B to Plan A? Could the individual prefer no insurance at all?
    solution: |
      Compute Plan B's premium. Severe state only ($Q = 200$ inelastic, no moral hazard): $\text{premium}_B = \tfrac{1}{3}(10{,}000) = 3{,}333$ ₪.

      | Option | Premium | Out-of-pocket (mild/mod) | Severe covered? | Expected total | Moral hazard |
      |---|---|---|---|---|---|
      | Plan B (severe only) | 3,333 | $(800 + 2{,}100)/3 = 967$ | Yes | **4,300 ₪** | None |
      | Plan A (full) | 4,867 | 0 | Yes | **4,867 ₪** | Mild + Moderate |
      | No insurance | 0 | $4{,}300$ expected | No (risk of 10k) | **4,300 ₪** | N/A |

      > [!success] Plan B vs Plan A
      > **A risk-averse individual likely prefers Plan B.** Plan B has lower expected total cost (4,300 vs 4,867 ₪) *and* eliminates the catastrophic severe-illness risk. Plan A's extra cost is entirely moral-hazard inflation in mild/moderate states where partial coverage would suffice.

      > [!note] Plan B vs no insurance
      > Same expected total cost (4,300 ₪), but Plan B removes the 10,000 ₪ severe-state risk for free. A risk-averse individual will not prefer "no insurance" over Plan B. However, a mildly risk-averse individual may still prefer no insurance over **Plan A** (as in part d) because Plan A's premium exceeds the natural expected loss by 567 ₪.
    related_terms: []
    source_doc_page: 2
  - id: "4a"
    text: |
      Progressive's "Autograph" automobile insurance installs a device that transmits distance driven, locations, and time of driving. A Houston pilot found Autograph adopters saved 25% on premiums vs traditional insurance.

      Can this result be explained by moral hazard? By adverse selection?
    solution: |
      **Both mechanisms are consistent with the data.** The pilot result alone cannot distinguish them.

      | Explanation | Mechanism | Verdict |
      |---|---|---|
      | [[Screening\|Adverse selection]] | Safe drivers know their own risk. The device *confirms* low risk to the insurer. Risky drivers refuse monitoring (it would expose them). Autograph users self-select as low-risk; the savings reflect who chose in, not the device's effect on behaviour. | Yes, consistent |
      | [[Moral Hazard]] | Drivers know they're monitored. They drive more carefully — fewer late-night trips, shorter distances. Improved behaviour reduces claims and premiums. The device acts like a permanent speed camera. | Yes, consistent |

      > [!tip] How to actually distinguish them
      > Compare pre/post driving behaviour for the *same* individuals after they adopt Autograph. If behaviour changes → moral hazard. If behaviour is unchanged but the people who self-select were already lower-risk → adverse selection.
    related_terms: ["screening"]
    source_doc_page: 3
  - id: "4b"
    text: |
      If Progressive offers Autograph nationwide while maintaining traditional insurance, how will the traditional insurance premium and the share of drivers in the traditional system evolve over time?
    solution: |
      Classic [[2.1 The Mechanism: The Adverse Selection Death Spiral|adverse-selection death spiral]].

      | Period | Traditional pool | Traditional premium | Traditional market share |
      |---|---|---|---|
      | Initially | Mixed risk types | Moderate | Large |
      | Short-run | Low-risk types leave for Autograph | Rises | Shrinks |
      | Medium-run | Increasingly high-risk | Rises further | Shrinks more |
      | Long-run | Almost entirely high-risk | Very high | Very small |

      > [!warning] Mechanism
      > Safe drivers migrate to Autograph, leaving the traditional pool riskier. The insurer raises the traditional premium. This triggers further migration of any remaining low-risk traditional drivers. The cycle repeats: rising premiums → more exits → riskier pool → even higher premiums. In the long run, the traditional system serves only high-risk drivers (those unwilling to be monitored) at high premiums.
    related_terms: ["screening"]
    source_doc_page: 3
---

> [!abstract] Toolkit used throughout this assignment
> 1. **Expected expenditure (no insurance):** $E[\text{spend}] = \sum_s \pi_s \cdot P_s \cdot Q_s$ at $P_s = MC_s$.
> 2. **Actuarially fair premium with moral hazard:** evaluate $Q$ at the *insured* price ($P = 0$ or $P_{\text{copay}}$), then $E[\text{payout}] = \sum_s \pi_s \cdot MC_s \cdot Q^{\text{ins}}_s$.
> 3. **Moral-hazard wedge:** fair premium − natural expected loss. A risk-averse individual buys only if their risk premium exceeds this wedge.

Recipes used here: [[Actuarially fair premium (with moral hazard)]] · [[2.1 The Mechanism: The Adverse Selection Death Spiral]].
