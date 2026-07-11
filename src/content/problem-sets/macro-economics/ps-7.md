---
title: "PS7"
subject: macro-economics
tags:
  - macroeconomics
  - capital-allocation
  - misallocation
  - marginal-product-of-capital
  - production-function
  - constant-returns-to-scale
  - cobb-douglas
  - lagrangian
  - problem-set
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Problem Set 7 — Solutions (Q1–Q2)

      > Part of: [[Macro-Economics]]
      > **Not for submission** — related to material covered since the last problem set. Both questions worked here.
    solution: ""
    related_terms: []
  - id: "1"
    text: |
      **Optimal allocation of capital.**

      Assume that there are two firms in the economy with the following production functions:

      $$Y_1 = A_1 K_1^{\alpha},\qquad Y_2 = A_2 K_2^{\beta}$$

      where $0<\alpha\le\beta<1$, and $K_i$ is the capital allocated to firm $i$. Suppose that the economy has 100 units of capital that have to be allocated to the two firms: $K_1+K_2=100$. Finally, assume that the purpose is to maximize output in the economy, which we call the **efficient allocation**.

      1. Write down the maximization problem of a social planner who would like to maximize output.
      2. Derive the condition for the efficient allocation of capital between the two firms (you can either use a Lagrangian or substitute the constraint into the maximization problem).
      3. Assume that $\alpha=\beta$ and that $A_1>A_2$. Is it efficient to allocate all the capital stock to firm 1? Explain clearly why or why not, or derive the efficient allocation.
      4. Assume that $A_1=A_2=1$ and $\tfrac12=\beta>\alpha=\tfrac13$. The analytical solution is somewhat hard to derive — instead, compare aggregate GDP when (i) $K_1=K_2=50$, (ii) $K_1=49,\ K_2=51$, and (iii) $K_1=51,\ K_2=49$. Which allocation results in a higher GDP? What can you learn from this about the optimal allocation of capital between the two firms?
    solution: |
      > [!tip] Hint from the toolbox
      > This is the "equalise marginal products across firms" idea applied to a single factor. The marginal-product machinery is exactly the [[Lec_04-Production]] toolkit.

      ### Part 1 — The planner's problem

      $$\max_{K_1,K_2}\ \left\{A_1K_1^{\alpha}+A_2K_2^{\beta}\right\}\quad\text{subject to:}\quad K_1+K_2=100$$

      > [!tip] 🗣️ In plain English
      > Imagine one benevolent boss who controls all 100 machines and just wants the country to produce as much as possible — they choose how to split the machines between the two firms.

      ### Part 2 — Condition for the efficient allocation

      Form the Lagrangian:

      $$\mathcal{L}=A_1K_1^{\alpha}+A_2K_2^{\beta}+\lambda\left[100-K_1-K_2\right]$$

      First-order conditions:

      $$\alpha A_1K_1^{\alpha-1}-\lambda=0,\qquad \beta A_2K_2^{\beta-1}-\lambda=0,\qquad 100-K_1-K_2=0$$

      The first two conditions imply:

      $$\alpha A_1K_1^{\alpha-1}=\beta A_2K_2^{\beta-1}$$

      Alternatively, substitute the constraint ($K_2=100-K_1$) into the objective and choose only $K_1$:

      $$\max_{K_1}\ \left\{A_1K_1^{\alpha}+A_2(100-K_1)^{\beta}\right\}$$

      The FOC with respect to $K_1$ gives $\alpha A_1K_1^{\alpha-1}=\beta A_2(100-K_1)^{\beta-1}=\beta A_2K_2^{\beta-1}$ — the same condition.

      > [!success] Answer
      > The efficient allocation equalises the **marginal product of capital across firms**:
      >
      > $$MPK_1=\alpha A_1K_1^{\alpha-1}=\beta A_2K_2^{\beta-1}=MPK_2$$
      >
      > This is exactly the class principle: the optimal allocation of a factor of production is achieved when its marginal product is equal across firms. Capital is the only factor here, so this one condition (plus the resource constraint) pins the allocation down.

      > [!tip] 🗣️ In plain English
      > Keep moving machines to wherever the **next machine adds the most output**. You stop when the last machine adds exactly the same output in both firms — if it didn't, you could still gain by shifting one more across.

      ### Part 3 — $\alpha=\beta$, $A_1>A_2$: give everything to firm 1?

      > [!success] Answer
      > **No.** In general it is not efficient to allocate all the capital to the firm with the higher TFP, because the production function has a **diminishing marginal product of capital**. If one firm has all the capital and the other has none, the empty firm's $MPK$ is very high while the full firm's is (usually) lower — so reallocating a marginal unit of capital from the full firm to the empty one raises output. You keep doing this until the marginal products are equal.

      Alternatively, solve for the efficient allocation. Rearranging the optimality condition:

      $$\alpha A_1K_1^{\alpha-1}=\beta A_2K_2^{\beta-1}\ \Longrightarrow\ \frac{K_1^{\alpha-1}}{K_2^{\beta-1}}=\frac{\beta A_2}{\alpha A_1}$$

      As long as $\beta,\alpha,A_1,A_2$ are positive numbers, the right-hand side is positive — implying that **neither firm should have zero capital**.

      > [!tip] 🗣️ In plain English
      > Even though firm 1 is better, the **hundredth machine** in firm 1 adds far less than the **first machine** in firm 2 would — extra machines matter less and less the more you already have. So the better firm gets more capital, but never all of it.

      ### Part 4 — Playing with numbers ($A_1=A_2=1$, $\alpha=\tfrac13$, $\beta=\tfrac12$)

      Equal split, $K_1=K_2=50$:

      $$Y=Y_1+Y_2=50^{\frac13}+50^{\frac12}=10.755$$

      Tilt towards firm 2, $K_1=49,\ K_2=51$:

      $$Y=49^{\frac13}+51^{\frac12}=10.80$$

      Tilt towards firm 1, $K_1=51,\ K_2=49$:

      $$Y=51^{\frac13}+49^{\frac12}=10.71$$

      > [!success] Answer
      > Allocation (ii) — $K_1=49,\ K_2=51$ — gives the highest GDP. Shifting capital **towards the firm with the higher power** in the production function raises output: the higher exponent means its $MPK$ diminishes more slowly, so the marginal products only equalise at a relatively **low $K_1$ and high $K_2$**.

      For completeness, the full calculation. The optimality condition here is

      $$\frac{K_1^{-\frac23}}{K_2^{-\frac12}}=\frac{\tfrac12}{\tfrac13}=\frac32\ \Longrightarrow\ K_2^{\frac12}=\frac32K_1^{\frac23}\ \Longrightarrow\ K_2=\left[\frac32K_1^{\frac23}\right]^{2}=\frac94K_1^{\frac43}$$

      so the equation to solve is

      $$K_2=\frac94\left[100-K_2\right]^{\frac43}$$

      which is hard to solve analytically, but a computer gives $K_1\approx15.2095$ and $K_2\approx84.7905$. (Everything gets messier still if the two firms had different TFP levels.)

      > [!tip] 🗣️ In plain English
      > Try the three splits and the one favouring firm 2 wins. Firm 2's **returns fade more slowly** — its exponent is bigger — so it can usefully absorb far more capital before extra machines stop paying off. Push that logic all the way and the best split is wildly lopsided: about 15 machines for firm 1 and 85 for firm 2.
    related_terms: ["marginal-product-of-capital", "production-function", "total-factor-productivity", "lagrangian-optimisation", "gdp"]
  - id: "2"
    text: |
      **Efficient allocation with two factors and constant returns to scale.**

      Assume that there are two firms in the economy, and that they produce using the same production function:

      $$Y_i = A_i K_i^{0.6} N_i^{0.4}$$

      where $i$ denotes a firm (either 1 or 2). For simplicity, assume that $A_1=A_2=1$.

      1. Derive the marginal product of capital for each firm (since both firms have the same production function, you don't have to derive it twice).
      2. Derive the marginal product of labor for each firm.
      3. In class we discussed the idea that the efficient allocation requires that the marginal product of each factor should be equal across firms. Let's see how it works in this (special) case with two factors *(NOTE: this part is not easy — if you get stuck, skip and move to the next part)*:
         - (a) Start with equating the marginal product of labor across the two firms. What does it imply about the ratio $\frac{K}{N}$ for the two firms (is it equal? is one greater than the other?)
         - (b) Now move to the marginal product of capital. Show that if the condition you found in the previous part holds, then it must be that the marginal product of capital is also equal across firms.
      4. Consider the allocation $K_1=K_2=50$ and $N_1=N_2=50$. Is it efficient? (i.e. does it satisfy the conditions that the marginal product of labor is equal across firms and the marginal product of capital is equal across firms?)
      5. Now consider the allocation $K_1=60,\ K_2=40,\ N_1=60,\ N_2=40$. Is it efficient?
    solution: |
      ### Part 1 — Marginal product of capital

      As always, the derivative of the production function with respect to capital:

      $$MPK_i=\frac{\partial Y_i}{\partial K_i}=0.6\times K_i^{-0.4}N_i^{0.4}=0.6\times\left[\frac{K_i}{N_i}\right]^{-0.4}$$

      > [!tip] 🗣️ In plain English
      > Differentiate with respect to capital and tidy up: what an extra machine adds depends only on the firm's **machines-per-worker ratio** — the more machines each worker already has, the less a new one adds.

      ### Part 2 — Marginal product of labor

      $$MPN_i=\frac{\partial Y_i}{\partial N_i}=0.4\times K_i^{0.6}N_i^{-0.6}=0.4\times\left[\frac{K_i}{N_i}\right]^{0.6}$$

      > [!tip] 🗣️ In plain English
      > Same trick for workers: an extra worker's contribution also depends only on the **machines-per-worker ratio** — the better equipped the workforce, the more a new hire adds.

      ### Part 3 — Equal marginal products across firms

      **(a)** If the marginal product of labor is equal across firms, we must have:

      $$0.4\times\left[\frac{K_1}{N_1}\right]^{0.6}=0.4\times\left[\frac{K_2}{N_2}\right]^{0.6}$$

      This clearly implies that for the condition to hold, both firms must have the **same $\frac{K}{N}$ ratio**.

      **(b)** The marginal product of capital is

      $$MPK_i=0.6\times\left[\frac{K_i}{N_i}\right]^{-0.4}$$

      and we can see from this equation that if the $\frac{K}{N}$ ratio is identical for the two firms, so is the marginal product of capital.

      > [!success] Answer
      > To achieve the efficient allocation we must have **equal $\frac{K}{N}$ in both firms** — and once $MPN$ is equalised (same ratio), $MPK$ is *automatically* equalised too.

      > [!tip] 🗣️ In plain English
      > Both marginal products are dials driven by one number: **machines per worker**. Match that ratio across the two firms and both efficiency conditions click into place at once.

      ### Part 4 — Is $K_1=K_2=50$, $N_1=N_2=50$ efficient?

      > [!success] Answer
      > **Yes.** The $\frac{K}{N}$ ratio is identical across the two firms ($\frac{50}{50}=1$ in both), so by Part 3 the allocation is efficient. (If you skipped Part 3, just substitute the numbers into the marginal-product expressions and verify $MPK_1=MPK_2$ and $MPN_1=MPN_2$.)

      > [!tip] 🗣️ In plain English
      > Both firms run **one machine per worker**, so nothing gained by shuffling anything — it's efficient.

      ### Part 5 — Is $K_1=60,\ K_2=40,\ N_1=60,\ N_2=40$ efficient?

      > [!success] Answer
      > **Yes, also efficient.** Same logic: $\frac{60}{60}=\frac{40}{40}=1$, so the $\frac{K}{N}$ ratio is identical and both marginal-product conditions hold — even though firm 1 is now larger than firm 2.

      > [!info] The broader lesson
      > With a **constant-returns-to-scale** production function and two factors, it is the **ratio of factors** that matters, not the size. A very large firm and a very small firm with the same TFP can coexist efficiently as long as they employ the same capital-to-labor ratio. It also means a misallocation (unequal ratios) can be "fixed" in two ways: transfer labor from one firm to the other, **or** transfer capital in the opposite direction — until the ratios are equalised.

      > [!tip] 🗣️ In plain English
      > Under constant returns to scale, **size doesn't matter — only the mix does**. A giant firm and a tiny firm are both fine so long as each pairs its workers with machines in the same proportion; if the mix is off, you can fix it by moving either workers one way or machines the other.
    related_terms: ["marginal-product-of-capital", "marginal-product-of-labor", "constant-returns-to-scale", "cobb-douglas", "production-function"]
  - id: "recap"
    text: |
      One-page recap
    solution: |
      | Q | Tool | One-line answer |
      |---|---|---|
      | 1.1 | planner problem | $\max\ A_1K_1^{\alpha}+A_2K_2^{\beta}$ s.t. $K_1+K_2=100$ |
      | 1.2 | Lagrangian / substitution | Efficient ⟺ $MPK_1=MPK_2$: $\alpha A_1K_1^{\alpha-1}=\beta A_2K_2^{\beta-1}$ |
      | 1.3 | diminishing $MPK$ | No — never give one firm zero capital, even if $A_1>A_2$ |
      | 1.4 | plug in numbers | $(49,51)$ wins ($10.80>10.755>10.71$); tilt to the higher exponent; exact optimum $K_1\approx15.21$ |
      | 2.1–2 | derivatives | $MPK=0.6(K/N)^{-0.4}$, $MPN=0.4(K/N)^{0.6}$ — both depend only on $K/N$ |
      | 2.3 | equalising | $MPN$ equal ⟺ same $K/N$ ⟹ $MPK$ equal automatically |
      | 2.4–5 | check ratios | Both allocations have $K/N=1$ in each firm → both efficient |
      | Lesson | CRS | Under CRS the factor **ratio** matters, not firm size; fix misallocation by moving either factor |
    related_terms: []
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Lec_04-Production]] — production functions, Cobb–Douglas, marginal products of capital and labor, TFP (Q1, Q2)
