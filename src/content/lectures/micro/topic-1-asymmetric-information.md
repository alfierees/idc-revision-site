---
title: "Topic 1 — Asymmetric Information"
topic: 1
semester: 2
course: "Micro 3 — Advanced Microeconomics"
tags:
  - microeconomics
  - asymmetric-information
  - adverse-selection
  - moral-hazard
  - signaling
  - market-failure
subject: micro
in_scope: true
---
# Topic 1 — Asymmetric Information

> Part of: [[Microeconomics]]
> Adverse Selection, Moral Hazard, Signaling
> Micro 3 — Tiomkin School of Economics, Reichman University
> Key concepts: [[Adverse Selection]], [[Moral Hazard]], [[Signaling]], [[Market Failure]], [[Rational Expectations Equilibrium]]

---

## 📚 1. What is Asymmetric Information?

In standard competitive market models, all agents either have full information or share the same partial information (uncertainty). Asymmetric information arises when different agents hold different private information — this changes strategic behaviour and can lead to [[Market Failure|market failures]].

| Agent | Private Information (not visible to the other side) |
|---|---|
| Used-Car Seller | Knows the accident history, mechanical condition, treatment of the car — the buyer cannot verify this |
| Insurance Buyer | Knows their own health status and lifestyle — the insurer cannot observe this |
| Loan Applicant | Knows their likelihood of repaying — the bank cannot verify this |
| Entrepreneur (IPO) | Has private information about the true value of their startup |
| Regulated Firm | Has private information about costs that the regulator does not have |
| Incumbent Firm | Has information about the market that potential entrants lack |

> [!tip] Key Takeaway
> Private information creates incentive problems that competitive markets cannot easily solve. The informed party always has an advantage, and this gap can cause the market to fail.

---

## 📚 2. [[Adverse Selection]]

> **Definition:** Adverse selection occurs when privately informed agents select actions based on their information that adversely affect the uninformed side of the market. The competitive equilibrium may not be Pareto efficient as a result.

### 2.1 The Mechanism: The Adverse Selection Death Spiral

The logic that drives adverse selection follows a self-reinforcing sequence:

1. Buyer cannot distinguish quality, so they offer an average-quality price
2. High-quality sellers receive a price below their reservation value and exit the market
3. Average quality in the remaining pool falls
4. Price falls further in response — triggering more exits
5. This continues until only the lowest quality remains (market collapse / lemons market)

**Possible Outcomes:**

| Outcome | Description |
|---|---|
| Market Thinning | Only lower-quality goods trade; some efficient trades are lost |
| Market Collapse | Only the worst type survives — the classic lemons outcome |
| No Trade | The market fails to open at all |

### 2.2 Example 1: The Lemons Market (Akerlof)

George Akerlof (Nobel Prize 2001) showed that in a used-car market where sellers know quality but buyers only see the distribution, only the worst cars (lemons) may trade in equilibrium.

**Setup:**

| Car Type           | Buyer Value | Seller Value | Gain from Trade | **Share of cars** |
| ------------------ | ----------- | ------------ | --------------- | ----------------- |
| Good Car           | $3,000      | $2,800       | $200            | p=0.75            |
| Bad Car (Lemon)    | $2,000      | $1,800       | $200            | p=0.25            |


**Step-by-Step Solution:**

> [!example] Test 1 ✗ — Assume all cars (good + bad) are on sale
> E[buyer value] = 0.75 × $3,000 + 0.25 × $2,000 = $2,750
> Will a good-car seller accept $2,750? $2,750 < $2,800 → **NO!** Good cars exit.

> [!example] Test 2 ✓ — Assume only bad cars are on sale
> Buyer value = $2,000 | Seller value = $1,800
> Will a bad-car seller accept $2,000? $2,000 ≥ $1,800 → **YES!** Equilibrium found.

> [!warning] Key Takeaway
> **Equilibrium:** Only bad cars (lemons) are sold at a price of $2,000. This is a [[Market Failure]] — all cars could be sold under perfect information (each has a positive gain from trade), but only lemons survive under asymmetric information.

### 2.3 Multiple Equilibria & The 80% Threshold

In the two-type lemons model, we can ask: when is it possible for a good equilibrium (all cars sold) to exist?

$$\text{Good cars stay if: } E[\text{buyer value}] \geq \$2{,}800 \implies 3{,}000p + 2{,}000(1-p) \geq 2{,}800 \implies p \geq 0.8$$

Crucially, even when $p \geq 0.8$, the bad equilibrium (lemons only) still co-exists:

| ✓ Good Equilibrium | ✗ Bad Equilibrium |
|---|---|
| Buyers believe all cars are on sale → Offer price ≥ $2,800 → Good sellers stay → Belief confirmed | Buyers believe only lemons are on sale → Offer $2,000 → Good sellers exit → Belief confirmed |

> [!tip] Key Takeaway
> $p \geq 0.8$ is **necessary but not sufficient** for the good equilibrium. The bad equilibrium always co-exists. Which one materialises depends entirely on market beliefs.

![[T1_lemons_threshold.png|600]]

> [!example] Reading the threshold diagram
> The blue line is the buyer's expected value as the share of good cars $p$ rises. Good-car sellers only stay if that line clears their reservation price of \$2,800 (red dashes) — which happens exactly at $p = 0.8$. To the left of the threshold (red zone) the expected value is too low, good cars exit, and only lemons trade. To the right (green zone) the good equilibrium *can* exist — but the lemons equilibrium still co-exists, because beliefs are self-fulfilling.

### 2.4 [[Rational Expectations Equilibrium]] (REE) — The Method

For any market with multiple quality types, the standard method to find the REE is:

1. **Step 1:** Start by testing whether ALL types could be in the market
2. **Step 2:** Calculate E[buyer value] using the full distribution
3. **Step 3:** Check if E[buyer value] ≥ each seller's reservation value. If the highest type fails, remove them
4. **Step 4:** Recalculate E[buyer value] with the remaining types and repeat
5. **Step 5:** The equilibrium is the largest self-consistent set — the one where E[buyer value] satisfies all remaining sellers

### 2.5 Example 2: Adverse Selection in the Insurance Market

When insurers cannot distinguish between high-risk and low-risk individuals, the same adverse selection logic applies.

**Setup:** Two groups with utility $U(M) = \sqrt{M}$:

| Group | Income (prob) | Fair Premium | Insured Income |
|---|---|---|---|
| Group A (Healthy) | 400 (p=3/4), 100 (p=1/4) | 75 | 325 |
| Group B (Unhealthy) | 400 (p=1/4), 100 (p=3/4) | 225 | 325 |

**With full information:** Insurer charges Group A a premium of 75 and Group B a premium of 225. Both groups purchase insurance (risk-averse agents prefer fair insurance).

![[T1_risk_aversion.png|580]]

> [!tip] Why risk-averse agents buy insurance
> Utility $U(M)=\sqrt{M}$ is **concave**, so the same swing in income hurts more on the downside than it helps on the upside. The red dashed chord is the *expected utility* of the risky income (E[U] = 17.5); the curve directly above the same mean income is the utility of *guaranteed* income (√325 ≈ 18.0). Because the curve sits above the chord, a person is strictly better off paying a fair premium to lock in the certain amount. That gap is exactly what makes insurance valuable — and what adverse selection then erodes.

**Case 1 — Insurer cannot distinguish groups:** If the insurer offers one price, only Group B (high-risk) will consistently purchase, leading to losses and [[Market Failure]].

**Case 2 — Insurer offers a menu of contracts:** Full insurance at a premium of 225, or partial insurance (coverage of 24) at a premium of 6. This acts as a **screening device** — Group A self-selects into partial insurance, Group B into full insurance.

> [!warning] Key Takeaway
> The competitive equilibrium with asymmetric information is inefficient — Group A (the healthier individuals) ends up only partially insured even though full insurance would be achievable with perfect information. This is one of the most significant market failures in healthcare.

---

## 📚 3. [[Moral Hazard]]

> **Definition:** Moral hazard is a situation in which one party takes on more risk because they do not bear the full consequences of that risk. It occurs **after** a contract or insurance is in place (post-contractual), unlike [[Adverse Selection]] which arises **before** (pre-contractual).

### 3.1 Key Examples

| Context                   | Moral Hazard Behaviour                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| Car Insurance             | A driver may park in unsafe areas or drive more recklessly knowing damages are covered                |
| Health Insurance          | Insured individuals may schedule unnecessary tests or take fewer health precautions                   |
| Banking (Too Big to Fail) | Banks may engage in riskier lending, expecting a government bailout if things go wrong                |
| Employment                | An employee on a fixed salary may exert less effort because pay is not tied to performance            |
| Borrowing belongings      | Being less careful with a friend's items than your own, since you don't fully bear the cost of damage |

> [!tip] Key Takeaway
> Moral hazard does not just affect insurance — any situation where risk is transferred creates an incentive to behave less carefully. This is a core challenge in contract design, regulation, and public policy.

### 3.2 Health Insurance Example

Moral hazard causes overconsumption of healthcare when the insured does not face the full cost of treatment.

- **Without insurance:** patients consume healthcare only up to its true value
- **With insurance:** patients consume more than is socially optimal because the marginal private cost is near zero
- The gap between the quantity demanded with and without insurance represents a **deadweight welfare loss**

---

## 📚 4. [[Signaling]]

> **Definition:** Signaling corresponds to a situation where the informed party takes a costly action to credibly communicate their private quality to the uninformed party. For a signal to be effective, it must be **cheaper for high-quality agents to send** than for low-quality agents.

$$\text{Signal is credible} \implies \text{Cost(low quality)} > \text{benefit of appearing high quality} > \text{Cost(high quality)}$$

![[T1_signaling.png|600]]

> [!tip] The single-crossing condition, drawn
> The signal (education, warranty length) is cheap for the high type (flat blue line) and expensive for the low type (steep red line). The green dashed line is the payoff from being *believed* to be high quality. In the shaded band, the high type's cost is below that payoff so they signal, while the low type's cost is above it so they don't — producing a **separating equilibrium**. If the two cost lines had the same slope, no amount of signalling could separate the types.

### 4.1 Example 1: Warranty as a Signal

**Setup:** Good cars (buyer value $3,000, seller value $2,800) vs. bad cars (buyer value $2,000, seller value $1,800). Sellers can offer a warranty.

| Car type | Warranty cost (seller) | Warranty value (buyer) | Profitable to offer warranty? |
|---|---|---|---|
| Good car | $300 | $250 | $3,250 − $300 = $2,950 > $2,800 → **YES** |
| Bad car | $1,300 | $500 | $3,250 − $1,300 = $1,950 < $2,000 → **NO** |

**Separating equilibrium outcome:**
- Cars without warranty are identified as bad → sold at $2,000
- Cars with warranty are identified as good → sold at $3,000 + $250 = $3,250
- Good sellers earn $3,250 − $300 = $2,950 > $2,800 (their reservation price). They offer warranties.
- Bad sellers would earn $3,250 − $1,300 = $1,950 < $2,000 (no warranty price). They don't offer warranties.

> [!tip] Key Takeaway
> The warranty works as a signal because the expected cost of honouring it is much lower for good-car sellers. High quality makes the signal cheap; low quality makes it prohibitively expensive.

### 4.2 Example 2: Education as a Signal (Spence, 1973)

Michael Spence showed that education can function as a signal **even if it does not increase productivity**. The key insight: getting a degree is easier (less costly) for high-productivity workers than for low-productivity workers.

| Scenario | Outcome |
|---|---|
| Without education as signal | Wages equal expected productivity. All workers are employed. No adverse selection. |
| With education as signal | High-productivity workers get degrees and earn higher wages. Low-productivity workers skip the degree and earn lower wages. |
| Social welfare implication | Spence's striking result: society may be **no better off**. The average wage is the same as without signaling, but resources are spent on education that adds no productive value. Signaling can be socially wasteful. |

---

## 🎯 5. Summary & Quick Reference

| Concept | Timing | Information Gap | Classic Example |
|---|---|---|---|
| [[Adverse Selection]] | Pre-contractual | Seller knows quality, buyer doesn't | Lemons, insurance death spirals |
| [[Moral Hazard]] | Post-contractual | Insured changes behaviour after coverage | Reckless driving, excessive healthcare |
| [[Signaling]] | Pre-contractual | Informed party sends costly signal | Warranties, education, credentials |

### Key Formulas

| Concept | Formula / Rule |
|---|---|
| Expected buyer value (two types) | $E[V] = p \times V_{\text{good}} + (1-p) \times V_{\text{bad}}$ |
| Condition for good equilibrium | $E[V] \geq$ seller reservation price of good type |
| REE Method | Test all types → remove those who won't sell → repeat until self-consistent |
| Signal works when | Cost(signal \| low quality) > Gain from signaling > Cost(signal \| high quality) |
