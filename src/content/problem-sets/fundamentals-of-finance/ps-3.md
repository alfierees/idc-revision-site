---
title: "HW3"
subject: fundamentals-of-finance
tags:
  - financial-management
  - profitability-index
  - equivalent-annual-cost
  - capital-rationing
  - solutions
ai_drafted: true
questions:
  - id: "1a"
    text: |
      **Capital rationing with the profitability index.** Six projects each have an initial investment and an NPV. Compute the profitability index $PI = NPV/I$ of each project and rank them.

      | Project | Investment | NPV |
      |---|---|---|
      | A | 500k | 110k |
      | B | 150k | -7.5k |
      | C | 350k | 70k |
      | D | 450k | 81k |
      | E | 200k | 40k |
      | F | 400k | 20k |
    solution: |
      Divide each NPV by its investment and rank from highest to lowest.

      | Project | Investment | NPV | PI |
      |---|---|---|---|
      | A | 500k | 110k | **0.22** |
      | C | 350k | 70k | 0.20 |
      | E | 200k | 40k | 0.20 |
      | D | 450k | 81k | 0.18 |
      | F | 400k | 20k | 0.05 |
      | B | 150k | -7.5k | -0.05 |

      Ranking by PI: A, C, E, D, F, B.
    related_terms: ["profitability-index", "net-present-value", "capital-budgeting"]
  - id: "1b"
    text: |
      Does scaling a project down to 60% of its size change its profitability index?
    solution: |
      > [!info] No
      > Both numerator and denominator scale by 0.6, which cancels:
      >
      > $$
      > PI = \frac{0.6\,NPV}{0.6\,I} = \frac{NPV}{I}
      > $$
      >
      > PI is scale-invariant.
    related_terms: ["profitability-index"]
  - id: "1d"
    text: |
      You have a budget of $1,000,000 and projects are divisible. Allocate the budget by PI rank and find the total NPV.
    solution: |
      > [!example] Spend the budget in PI order
      > A (500k, PI 0.22), then C (350k, PI 0.20). That leaves $150k for E, which needs 200k. Projects are divisible, so take **three quarters of E**.
      >
      > $$
      > NPV = 110 + 70 + 0.75 \times 40 = \boxed{\$210\text{k}}
      > $$
    related_terms: ["profitability-index", "net-present-value", "capital-budgeting"]
  - id: "1e"
    text: |
      Now suppose the projects **cannot** be split. Is following the PI ranking still guaranteed to maximise NPV?
    solution: |
      > [!warning] PI-greedy is not always the NPV-maximiser when projects are indivisible
      > If projects cannot be split, the highest-PI combination may waste budget. A + D uses $950k for $191k of NPV (50k idle), while A + C uses $850k for $180k of NPV. The best indivisible bundle depends on the objective: maximise NPV subject to the budget constraint, which may differ from the pure PI ranking.
    related_terms: ["profitability-index", "net-present-value", "capital-budgeting"]
  - id: "2"
    text: |
      **Equivalent Annual Cost.** Two machines with different lifespans are compared at a discount rate of $r = 6\%$.

      | Machine | Cost | Life |
      |---|---|---|
      | A | $10,000 | 5 years |
      | B | $18,000 | 8 years |

      Which machine should you choose?
    solution: |
      Compare via the equivalent annual cost, $EAC = \text{Cost} / \text{annuity factor}$, with annuity factor $\frac{1-(1+r)^{-n}}{r}$.

      | Machine | Cost | Life | Annuity factor | EAC |
      |---|---|---|---|---|
      | A | $10,000 | 5 | 4.2124 | **$2,373.96/yr** |
      | B | $18,000 | 8 | 6.2098 | $2,898.65/yr |

      > [!success] Choose A
      > Lower equivalent annual cost. Comparing the raw costs ($10k vs $18k) would be misleading because B lasts longer: EAC annualises that difference away.
    related_terms: ["equivalent-annual-cost", "annuity", "present-value", "discount-rate"]
  - id: "3"
    text: |
      **Equivalent Annual Value and replacement timing** ($r = 16\%$). Four projects (J, K, L, M) with different lifespans are ranked by NPV and by equivalent annual value, $EAV = NPV \div \text{annuity factor}$. Do the two rankings agree?
    solution: |
      > [!tip] NPV rank and EAV rank differ
      > By **NPV**: M > J > L > K. By **EAV**: J > L > M > K. The ranking flips because the projects have **different lifespans**. For *repeatable* projects, EAV is the right criterion: a high total NPV spread over many years can have a low annual value.
    related_terms: ["equivalent-annual-cost", "net-present-value", "annuity"]
  - id: "3c"
    text: |
      When does a 15% cost cut to project M still beat J?
    solution: |
      > [!example] Solve for the horizon
      > M's cash flow falls to $8{,}500. We need M's value to stay above J's EAV of $5{,}340. Solving
      >
      > $$
      > 10{,}000 \times 0.85^{t} < 5{,}340
      > $$
      >
      > gives $t < 3.86$. The cut keeps M competitive only for a few years.
    related_terms: ["equivalent-annual-cost", "net-present-value"]
---

*Related: [[Lesson_03-Rate Conversion, Effective Rates & EAC]] · [[Lesson_02-Perpetuities, NPV & IRR]]*
