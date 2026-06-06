---
title: "Actuarially fair premium (with moral hazard)"
subject: micro
related_terms: ["screening"]
source_folder: micro
ai_drafted: true
---

The actuarially fair premium is the *insurer's* expected payout — which is not the same as the insured's natural expected loss whenever insurance changes consumption behaviour ([[Moral Hazard]]). The wedge between them is what makes a risk-averse individual sometimes *not* buy fair insurance.

1. Without insurance: compute expected expenditure across states. In state $s$ with probability $\pi_s$, the consumer pays the market price $p_s$ and consumes $q_s = D_s(p_s)$, spending $p_s q_s$. Expected expenditure $= \sum_s \pi_s p_s q_s$ — this is the consumer's natural risk.
2. With full insurance: the consumer faces price 0, so consumes $q^{\text{ins}}_s = D_s(0)$ — typically more than $q_s$ in elastic states ([[Moral Hazard]] wedge). For perfectly inelastic demand, $q^{\text{ins}}_s = q_s$ (no moral hazard).
3. The insurer's payout in state $s$ is $p_s \cdot q^{\text{ins}}_s$ at the original market price. Actuarially fair premium $= \sum_s \pi_s p_s q^{\text{ins}}_s$.
4. The moral-hazard markup is the fair premium *minus* the natural expected loss. A risk-averse individual buys only if their risk premium (the certainty equivalent gap) exceeds this markup.

## Common pitfalls

- Computing the fair premium from the *uninsured* consumption pattern. The whole point of fair insurance is that the *insurer* breaks even given insured behaviour — including any moral-hazard-induced overconsumption.
- Ignoring inelastic states. Severe-illness demand is often modelled as fixed quantity ($Q = 200$ regardless of price), giving zero moral hazard in that state. Partial-coverage plans (covering only the severe state) can dominate full-coverage when moral hazard inflates the full premium.
- Treating coinsurance / deductibles as if they were a uniform discount. They reshape consumption in elastic states, lowering the fair premium relative to full coverage but partially restoring the moral hazard incentive.

## Worked example

Three illness states, each with $\pi_s = 1/3$ (see [[EX-2 - Micro 3]] Q3). Mild: $Q = 80 - 2P$, $MC = 20$. Moderate: $Q = 100 - P$, $MC = 30$. Severe: $Q = 200$ (inelastic), $MC = 50$.

Without insurance ($P = MC$): Mild 40 × 20 = 800; Moderate 70 × 30 = 2,100; Severe 200 × 50 = 10,000. Expected expenditure = 12,900 / 3 = **4,300 ₪**.

With full insurance ($P = 0$ to consumer): Mild jumps to $Q = 80$ → 1,600; Moderate to $Q = 100$ → 3,000; Severe unchanged at 10,000. Fair premium = 14,600 / 3 ≈ **4,867 ₪** — a 567 ₪ moral-hazard wedge.
