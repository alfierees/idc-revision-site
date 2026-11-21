---
title: "HW2"
subject: fundamentals-of-finance
tags:
  - financial-management
  - npv
  - irr
  - project-evaluation
  - solutions
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Accept/reject three projects.** The cost of capital is $r = 5\%$. Cash flows at $t=0,1,2,3$:

      | Project | Cash flows |
      |---|---|
      | A | $(-600, 0, 726, 0)$ |
      | B | $(-700, 770, 11, 11)$ |
      | C | $(-100, 105, 0, 0)$ |

      Compute each project's IRR and NPV and decide which to accept.
    solution: |
      | Project | Cash flows | IRR | NPV @ 5% |
      |---|---|---|---|
      | A | $(-600, 0, 726, 0)$ | 10.0% | **+$58.50** |
      | B | $(-700, 770, 11, 11)$ | 12.6% | **+$52.81** |
      | C | $(-100, 105, 0, 0)$ | 5.0% | $0 |

      > [!success] Decision
      > Invest in **A and B** (both add value, NPV > 0). **Indifferent to C**: its IRR equals the hurdle rate exactly, so NPV = 0.
    related_terms: ["net-present-value", "internal-rate-of-return", "discount-rate", "capital-budgeting"]
  - id: "2"
    text: |
      **Scaling cash flows.** Let $x = 100$. Project A has cash flows $(-x, 0, 0, 1.728x)$ and Project B has cash flows $(0.5x, -0.75x, 0, 0)$.

      Find each project's IRR and its NPV at a 10% discount rate. Which should be taken?
    solution: |
      - IRR(A) $= 20\%$, IRR(B) $= 50\%$.
      - NPV(A) at 10% $= +29.83$; NPV(B) at 10% $= -18.18$.

      > [!warning] High IRR ≠ good project
      > B has the higher IRR (50%) but a **negative** NPV. It's a financing-type stream (cash in first, out later), so a high IRR is *bad*. Trust NPV: do A, reject B.
    related_terms: ["net-present-value", "internal-rate-of-return", "discount-rate"]
  - id: "3"
    text: |
      **Back out a bonus and a cost of capital.** The cost of capital is $r = 15\%$. Two projects (Nepal and Uganda) have similar NPVs.

      (a) What is the minimum bonus needed to choose Uganda?

      (b) At what cost of capital is no bonus needed?

      > [!todo] Question text not in the vault note
      > The vault note holds only the answer for this question, not the original project cash flows.
    solution: |
      Two projects (Nepal, Uganda) with similar NPVs (~$50.9k vs ~$50.5k).

      - **(a) Minimum bonus** to choose Uganda = the NPV gap, carried forward to year 4: difference $\approx -0.455\text{k}$ in PV, then $\times 1.1^4 \approx \boxed{-\$666}$ (in the relevant units).
      - **(b) Cost of capital at which no bonus is needed** = the rate where the incremental cash flow's IRR makes the two indifferent $\approx$ **14.47%**.
    related_terms: ["net-present-value", "internal-rate-of-return", "discount-rate", "opportunity-cost"]
  - id: "4"
    text: |
      **NPV vs IRR ranking.** The discount rate is $r = 8\%$. Compare Project A and Project B on NPV and IRR. If the two rankings disagree, which project should be chosen?
    solution: |
      | | Project A | Project B |
      |---|---|---|
      | NPV | **$20,865** | $14,920 |
      | IRR | 21.98% | **25.98%** |

      > [!tip] Conflict resolution
      > A has higher NPV; B has higher IRR. They **disagree**, so pick by NPV: **Project A** (more dollars of value). IRR is biased toward the smaller-scale project.
    related_terms: ["net-present-value", "internal-rate-of-return", "npv-profile"]
  - id: "5"
    text: |
      **NPV-profile true/false.** Two projects have NPV profiles that **cross**:

      ![](/images/fundamentals-of-finance/hw2-npv-crossover.png)

      Decide whether each statement is true or false.

      1. We are indifferent between the two projects at any discount rate.
      2. We can always rank the two projects.
      3. If a project's IRR is below the discount rate, it loses money.
      4. At $r = 22\%$, both projects are unprofitable.
      5. At $r = 15\%$, both projects are profitable.
    solution: |
      The crossover is what makes the ranking rate-dependent.

      > [!example] The five statements
      > 1. *Indifferent at any r*: **False.** At $r=0$, NPV = sum of cash flows, so the bigger-total project wins; we don't know which that is.
      > 2. *We can always rank them*: **False** without knowing the crossover rate.
      > 3. *If IRR < r the project loses money*: **True** (e.g. A's 15.2% < a 17% hurdle, so reject A and choose B).
      > 4. *At r = 22%, both unprofitable*: **True** (both IRRs below 22%).
      > 5. *At r = 15%, both profitable*: **False.** NPV(A) = 0 there, NPV(B) > 0, so only B is strictly profitable.
    related_terms: ["npv-profile", "net-present-value", "internal-rate-of-return", "discount-rate"]
---

*Related: [[Lesson_02-Perpetuities, NPV & IRR]]*
