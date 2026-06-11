---
title: "Assignment 3"
subject: accounting
source_doc: /papers/accounting/assignment-3.pdf
tags:
  - accounting
  - problem-set
  - ratio-analysis
  - liquidity
  - leverage
  - rule-of-40
  - dcf
  - valuation
  - terminal-value
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Ratio-analysing a hyper-growth AI-infrastructure IPO (CoreWeave), then building a 5-year DCF valuation for your own startup (SababaSnacks).
    solution: |
      > Part of: [[Accounting]] · Problem Set
      > Ratio-analysing a hyper-growth AI-infrastructure IPO, then building a 5-year DCF valuation for your own startup
      > Key concepts: [[Current Ratio]], [[Quick Ratio]], [[EBITDA]], [[ROE]], [[Rule of 40]], [[DCF Model]], [[Terminal Value]], [[WACC]], [[Free Cash Flow]]

      > [!info] The brief
      > **Q1:** From CoreWeave's (CRWV) registration statement, compute liquidity, leverage and profitability ratios for FY2023–2025, the Rule of 40, and write an analysis (no AI tools). **Q2:** Reimagine ABC Inc. (from [[Assignment 1 - ABC Inc Full-Year Accounting|Assignment 1]]) as a real company and build a 5-year DCF to value it.
    related_terms: []
  - id: "1"
    text: |
      CoreWeave (CRWV) Ratio Analysis
    solution: |
      ## Input data ($ millions, as reported)

      | | FY2023 | FY2024 | FY2025 |
      |---|---|---|---|
      | Revenue | 229 | 1,915 | 5,131 |
      | Operating income (loss) | (14) | 324 | (46) |
      | Net income (loss) | (594) | (863) | (1,167) |
      | Total current assets | 501 | 1,916 | 7,448 |
      | Total current liabilities | 998 | 4,963 | 16,440 |
      | Total debt | 1,523 | 7,926 | 21,373 |
      | Total equity (deficit) | (596) | (414) | 3,335 |
      | Operating cash flow | 1,833 | 2,749 | 3,058 |
      | Capex | (2,943) | (8,702) | (10,309) |
      | D&A | 103 | 863 | 2,454 |

      ## The ratios

      | Ratio | FY2023 | FY2024 | FY2025 | Formula |
      |-------|--------|--------|--------|---------|
      | **i. Current ratio** | 0.50 | 0.39 | 0.45 | Current assets ÷ current liabilities |
      | **ii. Quick ratio** | 0.39 | 0.36 | 0.39 | (Cash + securities + AR) ÷ current liabilities |
      | **iii. Debt / Equity** | (2.56) | (19.1) | 6.41 | Total debt ÷ total equity |
      | **iv. FCF margin** | (485%) | (311%) | (141%) | (OCF − Capex) ÷ revenue |
      | **v. EBITDA ($M)** | 89 | 1,187 | 2,408 | Operating income + D&A |
      | **vi. ROE** | n.m. | n.m. | (35%) | Net income ÷ equity |

      ## Rule of 40

      | Component | FY2024 | FY2025 |
      |---|---|---|
      | Revenue growth % | +736% | +168% |
      | EBITDA margin % | 62% | 47% |
      | **Rule of 40** | **798%** | **215%** |

      > [!success] Part (c) — Verdict
      > CoreWeave is a **hyper-growth AI-infrastructure** business with genuinely strong *operating* performance — revenue scaled from **$229M to $5.1B in two years** and EBITDA margins are healthy (47–62%). It blows past the [[Rule of 40]] on growth alone. **But** the financial position is fragile: the **current and quick ratios sit below 0.5x every year** (it can't cover short-term bills from its own assets), it funds growth **almost entirely with debt** (D/E 6.4x once equity turns positive), and **free cash flow is deeply negative** every year because ~$10B of capex dwarfs growing operating cash. The thesis reduces to one question: **does AI-infrastructure demand keep scaling fast enough for CoreWeave to grow into its capital structure before the debt becomes unmanageable?** High risk, high reward.

      > [!warning] Read the distorted ratios with care
      > **ROE and D/E are not meaningful in FY2023–24** because equity was **negative** — dividing by a negative denominator produces signs that mislead. Likewise the sky-high Rule of 40 **ignores leverage and cash flow entirely**. Always pair a flattering metric with the balance-sheet and cash-flow reality.
    related_terms: ["ratio-analysis", "current-ratio", "quick-ratio", "ebitda", "roe", "rule-of-40", "free-cash-flow"]
  - id: "2"
    text: |
      SababaSnacks Inc. DCF Valuation
    solution: |
      ABC Inc. is reimagined as **SababaSnacks**, a better-for-you kids' snack brand (CPG) sold direct-to-parent online and into supermarkets/schools, starting from ABC's real $250k of 2025 revenue.

      ## How a DCF works

      ```mermaid
      graph TD
          A[1 · Project Free Cash Flow for 5 years] --> B[2 · Discount each year to today]
          B --> C[3 · Add a Terminal Value for everything after]
          C --> D[4 · Sum = company value today NPV]
          class A,B,C,D internal-link;
      ```

      > [!info] In one sentence
      > A DCF estimates what a company is worth **today** by forecasting the cash it will generate, discounting that future cash back to present value (future cash is worth less than cash now), and adding a [[Terminal Value]] for everything beyond the forecast.

      ## Key assumptions

      | Assumption | Value | Rationale |
      |---|---|---|
      | Starting revenue (2025) | $250k | ABC's actual first-year revenue |
      | Revenue growth | 60 / 45 / 35 / 28 / 22% | Fast off a small base, easing as it matures |
      | Gross margin | 55% | Typical premium snack after ingredients & packaging |
      | Operating expenses | $330k → $500k | Grow slower than sales |
      | Tax rate | 23% | Applied only once profitable |
      | Discount rate (WACC) | 15% | High — early-stage, private, risky |
      | Terminal growth | 2.5% | Long-run snack-market growth (≈ inflation) |
      | Capex / D&A | 3% / 2% of revenue | Asset-light; manufacturing outsourced |
      | Δ Working capital | 5% of revenue growth | Cash tied up in stock & receivables as sales grow |

      ## The projection ($000s)

      | Line | 2026 | 2027 | 2028 | 2029 | 2030 |
      |------|------|------|------|------|------|
      | Revenue | 400 | 580 | 783 | 1,002 | 1,223 |
      | Gross profit (55%) | 220 | 319 | 431 | 551 | 672 |
      | Operating expenses | (330) | (380) | (420) | (460) | (500) |
      | **EBITDA** | **(110)** | **(61)** | **11** | **91** | **173** |
      | D&A | (8) | (12) | (16) | (20) | (24) |
      | EBIT | (118) | (73) | (5) | 71 | 148 |
      | Tax | – | – | – | (16) | (34) |
      | NOPAT | (118) | (73) | (5) | 55 | 114 |
      | + Add back D&A | 8 | 12 | 16 | 20 | 24 |
      | − Capex | (12) | (17) | (23) | (30) | (37) |
      | − Δ Working capital | (8) | (9) | (10) | (11) | (11) |
      | **Free cash flow** | **(129)** | **(87)** | **(23)** | **34** | **91** |
      | Discount factor @15% | 0.87 | 0.76 | 0.66 | 0.57 | 0.50 |
      | **PV of FCF** | (113) | (66) | (15) | 19 | 45 |

      ## From cash flows to value

      | Component | Value ($000s) |
      |---|---|
      | Σ PV of explicit FCF (2026–2030) | ≈ **(129)** — negative; early years burn cash |
      | Terminal value = $91 × (1.025) ÷ (0.15 − 0.025) ≈ $744; discounted ≈ | **370** |
      | **Enterprise Value (NPV)** | **≈ $241** |

      $$\boxed{\text{NPV} \approx \$(129)\text{k} + \$370\text{k} \approx \$241{,}000}$$

      > [!tip] Why most of the value is the terminal value
      > The five explicit years are still **cash-negative** (a brand-new company investing to scale), so almost all the value sits in the **terminal value** — the worth of all cash beyond 2030 assuming steady 2.5% growth forever. That makes the answer **highly sensitive to the discount rate and terminal growth**: a lower WACC or higher growth lifts the value sharply, and vice-versa. This sensitivity is the headline caveat to state when presenting.

      > [!warning] What this DCF is — and isn't
      > It is an **unlevered (enterprise-value) DCF**: it values the business **before** subtracting any debt. The growth/margin path is an optimistic-but-reasonable "it works" scenario — a downside case would value SababaSnacks far lower.
    related_terms: ["dcf-model", "free-cash-flow", "terminal-value", "wacc", "net-present-value", "ebitda", "working-capital", "gross-profit-margin"]
---

## Sources

- Our worked solution: `Problem Sets/Assignment 3/Assignment 3 Solutions.xlsx` (Q1 ratios + Q2 DCF), `SababaSnacks DCF - Explainer.docx`, `SababaSnacks Presentation.pptx`
- CoreWeave Inc. registration statement (10-K / S-1)

## Related Notes

- [[Accounting]] — subject hub
- [[Session 5 - Financial Statements Analysis]] — ratios, Rule of 40, DCF mechanics
- [[Session 6-Financial Planning and Analysis]] — projections & assumptions discipline
- [[Assignment 1 - ABC Inc Full-Year Accounting]] — the ABC Inc. base this DCF builds on
