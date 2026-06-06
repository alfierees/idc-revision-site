---
title: "EX-3 - Micro 3"
subject: micro
source_doc: /papers/micro/ex-3-micro-3.docx
ai_drafted: true
questions:
  - id: "1.1"
    text: |
      An airline company operates a daily flight from Tel Aviv to London. The cost of flying the plane each direction is 100,000 dollars and the number of seats in the plane is 200. The Economics Department of the airline company calculated that the average cost of a seat is 500 dollars and thus it was decided that the minimum cost of a ticket is 500 dollars. One day 10 seats were still left unoccupied at about one hour before takeoff. Dafna came to the airport and agreed to pay only 300 dollars for the seat. Is it worthwhile for the company to sell her the ticket under these terms?
    solution: |
      **Core principle:** Only *marginal* costs are relevant to decisions. Sunk costs — costs already paid that cannot be recovered — must be ignored.

      **Setup:**

      | Cost Concept | Value |
      |---|---|
      | Total flight cost (sunk — plane flies regardless) | \$100,000 |
      | Average cost per seat (200 seats) | \$500 |
      | **Marginal cost of one extra passenger** | **≈ \$0** |
      | Dafna's offer | \$300 |

      **Decision rule:**

      Accept Dafna's offer if and only if: Revenue > Marginal cost

      $$\$300 > \$0 \quad \checkmark$$

      The \$500 average cost is **not** the relevant benchmark — it bundles in the sunk fixed cost of flying the plane. The Economics Department committed the **sunk cost fallacy** by treating average cost as the minimum price threshold for a marginal decision.

      > [!success] Answer
      > **Yes — sell Dafna the ticket at \$300.** Any positive price above the ~\$0 marginal cost increases profit. The \$100,000 flight cost is sunk and irrelevant to this decision.
    related_terms: []
    source_doc_page: 1
  - id: "1.2"
    text: |
      Dana is working full time and earns NIS 60,000 a year. She is considering registering for studies at the university and it is clear to her that she will be able to work only part time and earn NIS 20,000 a year. Dana checked and found that: The yearly tuition is NIS 35,000. The current annual expenses for books, writing utensils and miscellaneous is NIS 3,000.

      a. What are the yearly costs of studies and what is the cost of the degree under the assumption that the studies are for 3 years (assume fixed prices and zero interest).
      b. Dana estimates that at the end of her degree the contribution of her studies to her annual income will be NIS 5,500 per annum. Since she will have 40 years of work left, this sum totals NIS 220,000. If her income is the only criterion that is guiding her to study, should she study? What is the minimal contribution to income which will make the studies worthwhile?
    solution: |
      When analysing the cost of education we must include both **explicit** (out-of-pocket) costs **and implicit (opportunity) costs** — the income forgone by not working full-time.

      #### Part (a) — Annual and Total Cost of the Degree

      | Cost Component | Type | Annual Amount (NIS) |
      |---|---|---|
      | Tuition fees | Explicit | 35,000 |
      | Books, writing utensils & miscellaneous | Explicit | 3,000 |
      | Forgone income (60,000 − 20,000) | **Implicit / Opportunity** | 40,000 |
      | **Annual cost of studying** | | **78,000** |

      $$\text{Total cost of 3-year degree} = 78{,}000 \times 3 = \textbf{234,000 NIS}$$

      #### Part (b) — Should Dana Study?

      | | Amount (NIS) |
      |---|---|
      | Total benefit: 5,500 × 40 years of work | 220,000 |
      | Total cost of degree | 234,000 |
      | **Net benefit** | **−14,000** |

      Since net benefit < 0, **Dana should NOT pursue the degree** based purely on income.

      **Minimum annual contribution to make studies worthwhile:**

      $$\text{Min contribution} \times 40 \geq 234{,}000$$
      $$\text{Min contribution} = \frac{234{,}000}{40} = \textbf{5,850 NIS per year}$$

      > [!success] Answers
      > **(a)** Annual cost = 78,000 NIS. Total cost of degree = 234,000 NIS.
      > **(b)** Dana should NOT study. The minimum annual income boost needed = **5,850 NIS/year** (vs the 5,500 she expects).

      > [!tip] Key insight
      > Opportunity cost (40,000 NIS/year) is the largest single component — almost equal to tuition. Ignoring it (as accounting does) would completely change the decision.
    related_terms: []
    source_doc_page: 1
  - id: "1.3"
    text: |
      The firm's total cost function is: $TC(Q) = 5 + 40Q + 20Q^2$. Calculate the functions: AVC, ATC and MC. Illustrate them in a diagram.
    solution: |
      $$\boxed{TC(Q) = 5 + 40Q + 20Q^2}$$

      Components: **FC = 5**, **VC = 40Q + 20Q²**

      #### Derived Cost Functions

      | Function | Formula | Properties |
      |---|---|---|
      | **AVC** | $\dfrac{VC}{Q} = 40 + 20Q$ | Upward-sloping line; starts at 40 |
      | **ATC** | $\dfrac{TC}{Q} = \dfrac{5}{Q} + 40 + 20Q$ | U-shaped; minimum at Q = 0.5 |
      | **MC** | $\dfrac{dTC}{dQ} = 40 + 40Q$ | Upward-sloping line; steeper than AVC |

      #### Key Relationships

      **Minimum of ATC:**

      $$\frac{d(ATC)}{dQ} = -\frac{5}{Q^2} + 20 = 0 \implies Q^* = 0.5$$

      At $Q = 0.5$:  $ATC = \frac{5}{0.5} + 40 + 10 = 60$ and $MC = 40 + 20 = 60$ ✓

      **MC vs AVC:** Both start at 40, but MC slope (40) > AVC slope (20), so MC > AVC for all Q > 0. This is consistent with rising variable costs pulling MC above AVC.

      **AFC = ATC − AVC = 5/Q**, which falls as Q rises, causing ATC to initially fall despite rising AVC — creating the U-shape.

      > [!success] Summary
      > AVC = 40 + 20Q | ATC = 5/Q + 40 + 20Q | MC = 40 + 40Q
      > MC crosses ATC at its minimum: (Q = 0.5, cost = 60)
    related_terms: []
    source_doc_page: 1
  - id: "2.1a"
    text: |
      A clever strategy firms with market power often use to extract consumer surplus is bundling. This involves selling two or more goods together. A good example to think about concerns season tickets to the symphony. Suppose, for the sake of argument, that the symphony plays three concerts in the season, one which is all Beethoven, one all Handel, and one modern music concert, featuring the work of Penderecki. Imagine that there are a number of consumers who might purchase tickets to these concerts. In particular, imagine that there are two seats that can be sold, and four consumers who might purchase them.

      - Consumer 1 would pay \$15 for Beethoven, \$8 for Handel, and \$0 for modern music.
      - Consumer 2 would pay \$8 for Beethoven, \$3 for Handel, and \$6 for modern music.
      - Consumer 3 would pay \$5 for Beethoven, \$9 for Handel, and \$12 for modern music.
      - Consumer 4 would pay \$3 for Beethoven, \$3 for Handel, and \$3 for modern music.

      If we charge a different price for each individual concert, how much would we charge for Beethoven? Handel? The modern music concert? What would be our profit in this case?
    solution: |
      **Setup:** 3 concerts, 4 consumers, 2 seats per concert, zero costs.

      | Consumer | Beethoven | Handel | Modern | Bundle WTP |
      |---|---|---|---|---|
      | C1 | \$15 | \$8 | \$0 | **\$23** |
      | C2 | \$8 | \$3 | \$6 | **\$17** |
      | C3 | \$5 | \$9 | \$12 | **\$26** |
      | C4 | \$3 | \$3 | \$3 | **\$9** |

      #### Part (a) — Separate Pricing

      For each concert, choose the price that fills both seats (maximises revenue from 2 seats).

      | Concert | Optimal Price | Buyers | Revenue |
      |---|---|---|---|
      | Beethoven | \$8 | C1, C2 | \$16 |
      | Handel | \$8 | C3, C1 | \$16 |
      | Modern | \$6 | C3, C2 | \$12 |
      | **Total** | | | **\$44** |

      > [!success] Answer (a)
      > Beethoven = \$8, Handel = \$8, Modern = \$6. **Profit = \$44.**
    related_terms: ["consumer-surplus"]
    source_doc_page: 2
  - id: "2.1b"
    text: |
      If instead, we sold a season ticket to all three concerts, what would be the (profit maximizing) price? What would be the profit in that case?
    solution: |
      Bundle WTPs ranked: \$26 (C3), \$23 (C1), \$17 (C2), \$9 (C4).

      | Bundle Price | Buyers | Revenue |
      |---|---|---|
      | \$26 | C3 only | \$26 |
      | **\$23** | **C1, C3** | **\$46 ✓** |
      | \$17 | C1, C2, C3 (but only 2 seats!) | \$34 |

      > [!success] Answer (b)
      > Season ticket price = **\$23**. C1 and C3 buy. **Profit = \$46.**

      > [!info] Why bundling works here
      > Reservation prices are **negatively correlated**: C1 loves Beethoven (\$15) but pays nothing for Modern (\$0), while C3 is the opposite. The bundle smooths this heterogeneity and extracts more surplus.
    related_terms: ["consumer-surplus"]
    source_doc_page: 2
  - id: "2.1c"
    text: |
      Can you think of even a more profitable bundling strategy?
    solution: |
      Offer **two packages**:
      - Full season pass (B + H + M): **\$26**
      - 2-concert pass (B + H only): **\$23**

      | Consumer | Full Season WTP | B+H WTP | Full Season @\$26 | B+H @\$23 | Decision |
      |---|---|---|---|---|---|
      | C1 | \$23 | \$23 | \$26 → no | \$23 → buys ✓ | B+H pass @ \$23 |
      | C2 | \$17 | \$11 | \$26 → no | \$23 → no | Doesn't buy |
      | C3 | \$26 | \$14 | \$26 → buys ✓ | \$23 → no | Full season @ \$26 |
      | C4 | \$9 | \$6 | no | no | Doesn't buy |

      **Seat check:** Beethoven → C1 + C3 = 2 seats ✓ | Handel → C1 + C3 = 2 seats ✓ | Modern → C3 only (1 seat)

      | Strategy | Profit |
      |---|---|
      | Separate pricing | \$44 |
      | Pure bundle @ \$23 | \$46 |
      | **Mixed bundle (\$26 + \$23)** | **\$49 ✓** |

      > [!success] Answer (c)
      > **Offer a full season pass at \$26 (C3 buys) AND a B+H 2-concert pass at \$23 (C1 buys). Total profit = \$49.**
    related_terms: ["second-degree-price-discrimination", "screening", "incentive-compatibility"]
    source_doc_page: 2
  - id: "2.2a"
    text: |
      A profit maximizing firm produces three products X, Y and Z. The firm has no costs. There are three customers 1, 2 and 3. Each customer is willing to purchase at most one unit of each of the three products. The firm cannot price discriminate between customers. The following table presents the willingness to pay of each of the three customers for each of the three products:

      | Customer | X | Y | Z |
      |---|---|---|---|
      | 1 | 10 | 12 | 5 |
      | 2 | 8 | 14 | 0 |
      | 3 | 4 | 16 | 7 |

      So, for example, Customer 1 is willing to pay no more than \$10 for purchasing one unit of product X and Customer 3 is willing to pay no more than \$7 for purchasing one unit of product Z.

      What will be the price of each product if the firm decides to sell them separately?
    solution: |
      **Setup:** Zero costs (profit = revenue), 3 customers, at most 1 unit each. No direct price discrimination.

      | Customer | X | Y | Z | Bundle WTP |
      |---|---|---|---|---|
      | C1 | \$10 | \$12 | \$5 | **\$27** |
      | C2 | \$8 | \$14 | \$0 | **\$22** |
      | C3 | \$4 | \$16 | \$7 | **\$27** |

      #### Part (a) — Separate Pricing

      | Product | Candidate revenues | Opt. Price | Buyers | Revenue |
      |---|---|---|---|---|
      | X | \$10→\$10, \$8→\$16, \$4→\$12 | **\$8** | C1, C2 | \$16 |
      | Y | \$16→\$16, \$14→\$28, \$12→\$36 | **\$12** | C1, C2, C3 | \$36 |
      | Z | \$7→\$7, \$5→\$10, \$0→\$0 | **\$5** | C1, C3 | \$10 |
      | **Total** | | | | **\$62** |

      > [!success] Answer (a)
      > X = \$8, Y = \$12, Z = \$5. **Profit = \$62.**
    related_terms: ["price-discrimination"]
    source_doc_page: 3
  - id: "2.2b"
    text: |
      Suppose, instead, that the firm decides to sell the three products only as a bundle. What will be the price of the bundle in this case?
    solution: |
      | Bundle Price | Buyers | Revenue |
      |---|---|---|
      | \$27 | C1, C3 | \$54 |
      | **\$22** | **C1, C2, C3** | **\$66 ✓** |

      > [!success] Answer (b)
      > Bundle price = **\$22**. All 3 buy. **Profit = \$66.**
    related_terms: []
    source_doc_page: 3
  - id: "2.2c"
    text: |
      Which of the two alternatives above is better for the firm? Which of the two alternatives above is better for each of the three customers?
    solution: |
      #### Which is Better for the Firm?

      > [!success] Answer (c)
      > **Bundle is better**: \$66 > \$62. Bundling reduces the firm's exposure to heterogeneous preferences.

      #### Which is Better for Each Customer?

      | Customer | Separate Surplus | Bundle Surplus (@\$22) | Prefers |
      |---|---|---|---|
      | C1 | (10−8)+(12−12)+(5−5) = **\$2** | 27−22 = **\$5** | **Bundle** ✓ |
      | C2 | (8−8)+(14−12) = **\$2** (skips Z) | 22−22 = **\$0** | **Separate** ✓ |
      | C3 | (16−12)+(7−5) = **\$6** (skips X) | 27−22 = **\$5** | **Separate** ✓ |

      > [!success] Answer (d)
      > **C1 prefers the bundle** (\$5 vs \$2). **C2 and C3 prefer separate pricing** (C2: \$2 vs \$0; C3: \$6 vs \$5). The bundle forces C2 to pay for Z (worthless to her) and denies C3 the ability to skip overpriced X.
    related_terms: ["consumer-surplus"]
    source_doc_page: 3
  - id: "2.2d"
    text: |
      Can you think of a pricing and bundling strategy that is more profitable for the firm than the two strategies discussed above?
    solution: |
      Offer **two bundles simultaneously** and let customers self-select:
      - **Bundle A (X + Y + Z): \$27**
      - **Bundle B (X + Y): \$22**

      | Customer | Bundle A WTP | Bundle B WTP | Bundle A @\$27 | Bundle B @\$22 | Decision |
      |---|---|---|---|---|---|
      | C1 | \$27 | \$22 | Surplus = \$0 ✓ | Surplus = \$0 | Bundle A (gets Z too) |
      | C2 | \$22 | \$22 | Surplus = −\$5 ✗ | Surplus = \$0 ✓ | Bundle B |
      | C3 | \$27 | \$20 | Surplus = \$0 ✓ | Surplus = −\$2 ✗ | Bundle A |

      $$\text{Profit} = \$27 \text{ (C1)} + \$22 \text{ (C2)} + \$27 \text{ (C3)} = \textbf{\$76}$$

      | Strategy | Profit |
      |---|---|
      | Separate | \$62 |
      | Full bundle @ \$22 | \$66 |
      | **Two-tier versioned bundles** | **\$76 ✓** |

      > [!success] Answer (e)
      > **Offer Bundle A (X+Y+Z) at \$27 and Bundle B (X+Y) at \$22. Profit = \$76** — far more than either pure strategy.

      > [!tip] Intuition — Second-Degree Price Discrimination
      > By offering two bundle versions at different prices, the firm lets customers self-select based on their own valuations. C2 is screened into the cheaper Bundle B (she values Z at \$0), while C1 and C3 are fully extracted up to their \$27 WTP. This is **versioning** — the same principle used by software companies offering Basic vs. Pro plans.
    related_terms: ["second-degree-price-discrimination", "screening", "incentive-compatibility", "information-rent"]
    source_doc_page: 3
---
