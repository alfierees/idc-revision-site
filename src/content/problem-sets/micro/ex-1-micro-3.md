---
title: "EX-1 - Micro 3"
subject: micro
source_doc: /papers/micro/ex-1-micro-3.docx
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Market for used cars with three quality types — Good (seller value \$1,000, buyer value \$1,500), Mediocre (seller value \$500, buyer value \$750), Bad (seller value \$100, buyer value \$150). Sellers know quality; buyers see only the distribution. Buyers are risk-neutral; trade at a single market price; a seller sells only if price ≥ her valuation.

      Suppose there are 30 cars: 10 Good, 10 Mediocre, 10 Bad. Find the rational expectations equilibrium price. Which types are sold? How many cars are traded?
    solution: |
      **Equilibrium: price = \$150, only bad cars sold, 10 cars traded.** Apply the [[2.4 Rational Expectations Equilibrium (REE) — The Method|REE recipe]] — test candidate trading sets from largest to smallest and check seller participation against the resulting expected value.

      **Step 1: Test all three types trading**

      Distribution: 1/3 each.

      $$E[V] = \frac{1}{3}(1{,}500) + \frac{1}{3}(750) + \frac{1}{3}(150) = 500 + 250 + 50 = \$800$$

      For good sellers: need price ≥ \$1,000. But EV = \$800 < \$1,000 → Good sellers exit. ✗

      **Step 2: Test mediocre + bad only**

      Distribution: 50/50 split.

      $$E[V] = \frac{1}{2}(750) + \frac{1}{2}(150) = 375 + 75 = \$450$$

      For mediocre sellers: need price ≥ \$500. But EV = \$450 < \$500 → Mediocre sellers exit. ✗

      **Step 3: Test bad cars only**

      $$E[V] = \$150 \geq \$100 \text{ (bad seller reservation)} \quad \checkmark$$

      Consistency check: at price = \$150, bad sellers accept, mediocre refuse (\$500 > \$150), good refuse (\$1,000 > \$150). ✓

      > [!success] Answer (a)
      > **Price = \$150 | Only bad cars sold | 10 cars traded**
    related_terms: ["screening"]
    source_doc_page: 1

  - id: "1b"
    text: |
      Same setup as (a), but now the market contains 5 Good, 20 Mediocre, and 5 Bad cars. Find the rational expectations equilibrium price. Which types are sold? How many cars are traded?
    solution: |
      **Equilibrium: price = \$630, mediocre and bad cars sold, 25 cars traded.** Re-run the [[2.4 Rational Expectations Equilibrium (REE) — The Method|REE recipe]] with the new distribution.

      **Step 1: Test all three types**

      $$E[V] = \frac{5}{30}(1{,}500) + \frac{20}{30}(750) + \frac{5}{30}(150) = 250 + 500 + 25 = \$775$$

      Good sellers need ≥ \$1,000. \$775 < \$1,000 → Good sellers exit. ✗

      **Step 2: Test mediocre + bad only**

      Distribution: 20/25 mediocre, 5/25 bad (80%/20%).

      $$E[V] = \frac{4}{5}(750) + \frac{1}{5}(150) = 600 + 30 = \$630$$

      - Mediocre sellers: \$630 ≥ \$500 ✓
      - Bad sellers: \$630 ≥ \$100 ✓
      - Good sellers: \$630 < \$1,000 (don't participate) ✓

      > [!success] Answer (b)
      > **Price = \$630 | Mediocre and bad cars sold | 25 cars traded**
    related_terms: ["screening"]
    source_doc_page: 1

  - id: "1c"
    text: |
      Briefly explain the economic intuition behind the difference between the outcomes in parts (a) and (b).
    solution: |
      **Part (a) — Complete market unraveling:** with equal numbers of all three types, once good cars exit the mediocre/bad pool is 50/50. The expected value (\$450) falls below what mediocre sellers need (\$500), so they exit too. Classic Akerlof lemons outcome — the [[2.1 The Mechanism: The Adverse Selection Death Spiral|adverse selection death spiral]] runs all the way to the bottom.

      **Part (b) — Partial unraveling only:** with 20 mediocre out of 30 total, the remaining pool after good cars exit is 80% mediocre. This heavy concentration of mid-quality raises the expected value high enough (\$630 ≥ \$500) to sustain trade.

      > [!tip] Key Insight
      > A heavier concentration of mid-quality cars provides enough "average quality" to sustain a viable market price. When bad cars dominate the remaining pool, the expected value collapses — triggering the [[Adverse Selection]] spiral.
    related_terms: []
    source_doc_page: 1

  - id: "2a"
    text: |
      Many risk-averse individuals fall into one of three health states: High (H), Medium (M), or Low (L). The table summarises expected medical costs, reservation price for full coverage, and population share:

      | Health State | Expected Medical Costs (NIS) | Reservation Price (NIS) | % of Population |
      |---|---|---|---|
      | H | 1,000 | 2,000 | 25% |
      | M | 2,000 | 3,000 | 50% |
      | L | 4,000 | 6,000 | 25% |

      The insurance market is competitive; risk-neutral insurers offer only full coverage and have no costs beyond paying medical expenses. Each individual's health state is known to both the individual and the insurers.

      **Risk-based premiums:** assume companies can set premiums based on the individual's health state. What is the price each individual pays for full coverage in competitive equilibrium?
    solution: |
      Competitive equilibrium → zero profit → premium = expected cost of the insured pool. With observable health states, insurers price each type separately:

      - Type H: Premium = 1,000 NIS | RP (2,000) > Premium ✓
      - Type M: Premium = 2,000 NIS | RP (3,000) > Premium ✓
      - Type L: Premium = 4,000 NIS | RP (6,000) > Premium ✓

      > [!success] Answer (a)
      > **H pays 1,000 NIS | M pays 2,000 NIS | L pays 4,000 NIS | All buy insurance**
    related_terms: ["screening"]
    source_doc_page: 2

  - id: "2b"
    text: |
      **Uniform premium (no risk-based pricing):** now assume insurers cannot observe each individual's health state and must charge a single uniform price.

      - What will the uniform price be in competitive equilibrium?
      - Will all individuals purchase insurance at this price? If not, which groups buy and which do not?
      - Explain the effect of adverse selection on the quantity of insurance sold and the equilibrium price.
    solution: |
      With pooling, the zero-profit premium equals the expected cost of whoever buys. Test each candidate buying set.

      **Scenario 1: All types buy**

      $$\text{Expected cost} = 0.25(1{,}000) + 0.50(2{,}000) + 0.25(4{,}000) = 2{,}250 \text{ NIS}$$

      Type H: RP = 2,000 < 2,250 → H will NOT buy. ✗ Not consistent.

      **Scenario 2: M and L buy**

      $$\text{Expected cost} = \frac{0.50 \times 2{,}000 + 0.25 \times 4{,}000}{0.75} = \frac{2{,}000}{0.75} = 2{,}667 \text{ NIS}$$

      - H: RP (2,000) < 2,667 → doesn't buy ✓
      - M: RP (3,000) > 2,667 → buys ✓
      - L: RP (6,000) > 2,667 → buys ✓ → **Consistent!**

      **Scenario 3: Only L buys**

      Expected cost = 4,000 NIS. L: RP (6,000) > 4,000 ✓ → Also consistent (second equilibrium).

      > [!success] Answer (b)
      > **Primary equilibrium: Price = 8,000/3 ≈ 2,667 NIS (M and L buy, 75% insured)**
      > **Second equilibrium: Price = 4,000 NIS (only L buys, 25% insured)**

      **[[Adverse Selection]] effect:** the uniform premium attracts a disproportionately sick pool, driving the price above what healthy individuals (H) will pay. 25% of the population goes uninsured even though trade with them is possible under perfect information — see the [[2.1 The Mechanism: The Adverse Selection Death Spiral|death-spiral mechanism]].
    related_terms: ["screening"]
    source_doc_page: 2

  - id: "2c"
    text: |
      **Government subsidy (challenge).** Assume the market is in the equilibrium from (b) with the larger number of insured individuals. The government considers a subsidy to increase coverage and can, if it wants, target the subsidy to a specific health state. The goal is to insure the entire population while minimising total subsidy expenditure.

      - What is the minimal subsidy that guarantees an equilibrium in which all individuals buy insurance? Which health states should receive it?
      - Does providing the subsidy change the welfare (utility) of individuals who do not receive it? Explain.
    solution: |
      If H joins the market, the new competitive (zero-profit) price is the full-population average cost:

      $$\text{Price} = 0.25(1{,}000) + 0.50(2{,}000) + 0.25(4{,}000) = 2{,}250 \text{ NIS}$$

      H's RP = 2,000 < 2,250 → gap = **250 NIS per person**.

      M and L still buy at 2,250 (both reservation prices exceed it), so only H needs the subsidy.

      > [!success] Answer (c1)
      > **Minimum subsidy = 250 NIS per Type H individual, directed exclusively to H.**
      > Total expenditure = 250 × (number of H-type individuals).

      **Does the subsidy help non-recipients?**

      Yes — M and L benefit even without receiving the subsidy:

      - **Before:** pay 2,667 NIS
      - **After:** pay 2,250 NIS (H joins, lowers average cost of pool)
      - **Savings: 417 NIS per M/L person** — a positive externality from H's participation.

      > [!success] Answer (c2)
      > **Yes. M and L welfare increases.** H types are low-cost; their entry dilutes the average risk, pushing the premium down from ~2,667 to 2,250 NIS for everyone.
    related_terms: ["screening"]
    source_doc_page: 2
---
