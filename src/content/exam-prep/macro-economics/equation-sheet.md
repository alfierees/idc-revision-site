---
title: "Macro Equation Sheet"
subject: macro-economics
type: reference
description: "The official formula sheet handed out with the Intermediate Macro final — every equation you're given in the exam, grouped by topic. The past-paper worked solutions link back here to show which formula solves each question."
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
order: 1
pinned: true
tags:
  - macroeconomics
  - exam-prep
  - reference
  - formula-sheet
  - equation-sheet
aliases:
  - Equation Sheet
  - Formula Sheet
  - Macro Formula Sheet
  - Macro Equation Sheet
source_doc: /papers/macro-economics/equation-sheet.pdf
in_scope: true
---

> [!info] This is the exact sheet attached to the exam
> The final is **closed-notes**, but this formula sheet is provided. Nothing here needs memorising — what you're graded on is knowing *which* formula a question wants and how to push data through it. Every worked solution in the [[Sample Exam 2026]] and the Moed papers links back to the relevant block below.

## National accounts & GDP

$$Y = C + I + G + NX \qquad \text{(real GDP)}$$

$$\text{Nominal GDP} = P \times Y \qquad\qquad \text{GDP deflator} = P$$

- **GNP identity** (used implicitly): $GNP = GDP + NFP$, where $NFP$ is net factor payments from abroad.
- See [[gdp]], [[gnp]], [[gdp-deflator]], [[national-accounts]].

## Prices, inflation & exchange rates

$$e^{nom} = \frac{\text{Foreign Currency}}{\text{US Dollar}}, \qquad e^{pp} = \frac{\text{Price in country } i}{\text{Price in US}}$$

$$GDP^{PPP} = \frac{\text{GDP in local currency}}{e^{pp}}$$

$$\pi_{t+1} = \frac{P_{t+1}-P_t}{P_t} \qquad\qquad g_t = \frac{y_t - y_{t-1}}{y_{t-1}}$$

$$r = i - \pi \qquad\qquad E[r] = i - \pi^{e} \quad \text{(Fisher)}$$

- Elasticity: $\displaystyle \epsilon_{y,x} = \frac{\partial y}{\partial x}\frac{x}{y} = \frac{\partial \ln y}{\partial \ln x}$.
- See [[inflation]], [[cpi]], [[real-interest-rate]], [[fisher-equation]], [[purchasing-power-parity]], [[exchange-rates]].

## Production & factor demands

$$Y = A\,F(K,N) \qquad\qquad Y = A K^{\alpha} N^{1-\alpha} \ \text{(Cobb-Douglas)}$$

$$MPN = \frac{\partial Y}{\partial N} = A F_N \qquad MPK = \frac{\partial Y}{\partial K} = A F_K$$

$$\text{Labor's share of income} = \frac{wN}{Y}$$

$$\text{Growth accounting:}\quad \frac{\Delta A}{A} = \frac{\Delta Y}{Y} - \epsilon_{Y,K}\frac{\Delta K}{K} - \epsilon_{Y,N}\frac{\Delta N}{N}$$

- For Cobb-Douglas the shortcuts $MPK = \alpha \tfrac{Y}{K}$ and $MPN = (1-\alpha)\tfrac{Y}{N}$ fall straight out — worth memorising even though they're implied by the sheet.
- See [[production-function]], [[cobb-douglas]], [[marginal-product-of-labor]], [[marginal-product-of-capital]], [[labor-share]], [[development-accounting]].

## Labor supply & consumption optimality

$$\text{Static FOC:}\quad -U_N = \frac{1-\tau_N}{1+\tau_C}\, w\, U_C$$

- This is *the* workhorse for every "how does tax/wage affect labor supply" question: plug in $U$, use the budget constraint, solve for $N(w)$.
- See [[labor-supply]], [[income-effect]], [[consumption-tax]], [[labor-income-tax]].

## Unemployment & labor-market dynamics

$$u = \frac{d}{d+f} \qquad\qquad u = \frac{U}{U+E}$$

$$U_{t+1} = (1-f)U_t + dE_t \qquad E_{t+1} = (1-d)E_t + fU_t$$

- $d$ = job destruction / separation probability, $f$ = job finding probability.
- See [[frictional-unemployment]], [[job-finding-rate]], [[separation-rate]], [[labor-force-participation]].

## Intertemporal choice (consumption & saving)

$$\text{Euler:}\quad u'(c_t) = \beta(1+r)\,u'(c_{t+1})$$

$$\text{Lifetime budget:}\quad c + \frac{1}{1+r}c^{f} = a + y + \frac{1}{1+r}y^{f}, \qquad \sum_{t=0}^{T}\Big(\tfrac{1}{1+r}\Big)^t c_t = a_0 + \sum_{t=0}^{T}\Big(\tfrac{1}{1+r}\Big)^t y_t$$

- See [[euler-equation]], [[consumption-smoothing]], [[intertemporal-choice]], [[present-value]], [[fisher-model]].

## Investment & the user cost of capital

$$K_{t+1} = (1-\delta)K_t + I_t \qquad \text{(capital accumulation)}$$

$$p_k = \frac{1}{1+r}\Big[(1-\tau_K)\,MPK^{f} + p_k^{f}(1-\delta)\Big]$$

$$MPK^{f} = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K} = \text{user cost}$$

- The investment rule: firms pick next period's capital so **future MPK = user cost**. Anything that lifts the user cost ($r\uparrow$, $\tau_K\uparrow$) cuts investment.
- See [[capital-accumulation-equation]], [[depreciation]], [[marginal-product-of-capital]].

## Fiscal policy & public debt

$$\Delta b_t = d_t + \frac{r-g}{1+g}\,b_{t-1} \qquad\text{or}\qquad b_t = d_t + \frac{1+r}{1+g}\,b_{t-1}$$

- $b$ = debt-to-GDP ratio, $d$ = primary deficit (share of GDP), $r$ = real rate, $g$ = real growth. When $r > g$ debt drifts up even with a balanced primary budget.
- See [[public-debt-dynamics]], [[primary-deficit]], [[government-budget-constraint]], [[fiscal-policy]].
