---
title: "PS1"
subject: micro-ii
source_doc: /papers/micro-ii/ps-1.pdf
tags:
  - micro-economics-ii
  - profit-maximisation
  - production-function
  - cost-function
  - optimal-profit-function
  - homogeneity
  - envelope-theorem
  - convexity
  - marginal-cost
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Optimal quantity with $f(l) = \sqrt{l}$.** Consider a firm with production function $f(l) = \sqrt{l}$. The firm takes the price of its good as given, i.e. $R(q) = p \cdot q$, where $p$ is the price of the good and $q$ is the quantity. The wage of labour is $w$.
    solution: |
      Parts 1a to 1c below work through this firm step by step.
    related_terms: ["production-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "1a"
    text: |
      Find the optimal quantity, i.e. the quantity that maximises the firm's profit, as a function of the price of the good $p$ and the wage of labour $w$.
    solution: |
      **Step 1: derive the cost function.** Since $q = f(l) = \sqrt{l}$, inverting gives $l = q^2$. So the cost of producing $q$ units is:

      $$
      C(q) = w \cdot l = w \cdot q^2
      $$

      > [!info] Why invert the production function?
      > The cost function asks: *given I want to produce $q$, what is the cheapest way to do it?* With one input there is no choice: you need exactly $f^{-1}(q)$ units of labour, so $C(q) = w \cdot f^{-1}(q)$.

      **Step 2: maximise profit.** The profit function is:

      $$
      \Pi(q) = p \cdot q - w \cdot q^2
      $$

      First-order condition:

      $$
      \frac{d\Pi}{dq} = p - 2wq = 0 \quad \Rightarrow \quad q^* = \frac{p}{2w}
      $$

      Second-order condition:

      $$
      \frac{d^2\Pi}{dq^2} = -2w < 0
      $$

      Since $w > 0$, the SOC holds and this is a maximum.

      > [!success] Answer
      > $q^* = \dfrac{p}{2w}$, which is just $p = MC = 2wq^*$.
    related_terms: ["profit-maximisation", "cost-function", "marginal-cost", "production-function"]
    source_doc_page: 1
  - id: "1b"
    text: |
      How does the optimal quantity change as a function of $p$ and $w$?
    solution: |
      Differentiate $q^* = p/(2w)$:

      $$
      \frac{\partial q^*}{\partial p} = \frac{1}{2w} > 0, \qquad \frac{\partial q^*}{\partial w} = -\frac{p}{2w^2} < 0
      $$

      > [!tip] Intuition
      > A higher output price means more revenue per unit, so it is worth producing more. A higher wage raises marginal cost, so the optimum shifts inward. Both follow from the condition $p = 2wq^*$.

      > [!success] Answer
      > $q^*$ is increasing in $p$ and decreasing in $w$.
    related_terms: ["profit-maximisation", "marginal-cost"]
    source_doc_page: 1
  - id: "1c"
    text: |
      How does the firm's optimal profit change as a function of $p$ and $w$?
    solution: |
      Substitute $q^*$ back into the profit function:

      $$
      \Pi^*(w, p) = p \cdot \frac{p}{2w} - w \left(\frac{p}{2w}\right)^2 = \frac{p^2}{2w} - \frac{p^2}{4w} = \frac{p^2}{4w}
      $$

      Therefore:

      $$
      \frac{\partial \Pi^*}{\partial p} = \frac{p}{2w} = q^* > 0, \qquad \frac{\partial \Pi^*}{\partial w} = -\frac{p^2}{4w^2} = -l^* < 0
      $$

      > [!tip] Hotelling's Lemma (preview of Question 2)
      > The derivative of optimal profit with respect to the output price equals the optimal quantity, and the derivative with respect to the wage equals minus the optimal labour. This is **Hotelling's Lemma**, a consequence of the [[Envelope Theorem]].

      > [!success] Answer
      > $\Pi^* = \dfrac{p^2}{4w}$, increasing in $p$ and decreasing in $w$.
    related_terms: ["optimal-profit-function", "envelope-theorem", "profit-maximisation"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Properties of the optimal profit function.** Consider a firm that produces using a single input, labour, with production function $f(l)$. The firm is a price taker: it faces a fixed price $p$ for its output and a fixed price $w$ for the labour it uses.

      Define the firm's optimal profit function $\Pi^*$ to be the profit it makes when it chooses the quantity $q^*$ that maximises its profit. Mathematically:

      $$
      \Pi^*(w, p) = p \cdot q^* - C(q^*), \qquad C(q^*) = w \cdot f^{-1}(q^*)
      $$

      Explain why the following properties of the optimal profit function are true.
    solution: |
      Parts 2a to 2c below prove the three properties.
    related_terms: ["optimal-profit-function"]
    source_doc_page: 1
  - id: "2a"
    text: |
      The optimal profit function is homogeneous of degree 1. That is, if we take prices $p$ and $w$ and multiply them by some positive number $t > 0$, then the optimal profit is also multiplied by $t$.
    solution: |
      **Claim:** $\Pi^*(tw, tp) = t \cdot \Pi^*(w, p)$ for any $t > 0$.

      When prices scale to $(tw, tp)$, the profit from producing any quantity $q$ becomes:

      $$
      \Pi_{tw,tp}(q) = tp \cdot q - tw \cdot f^{-1}(q) = t \left[ p \cdot q - w \cdot f^{-1}(q) \right] = t \cdot \Pi_{w,p}(q)
      $$

      This holds for **every** $q$, so the $q$ that maximises $\Pi_{tw,tp}$ is the **same** $q^*$ that maximises $\Pi_{w,p}$. Therefore:

      $$
      \Pi^*(tw, tp) = t \cdot \Pi^*(w, p)
      $$

      > [!tip] Economic intuition
      > Doubling both prices is like measuring profit in a currency worth half as much. The real decision, how much to produce, does not change; only the nominal profit figure scales. So only *relative* prices matter for firm decisions.

      > [!warning] Common mistake
      > You can check this by substituting an explicit $q^*$, as with $\Pi^* = p^2/(4w)$ in Question 1, but that only works for a specific $f$. The cleaner proof shows the *whole objective* scales, so the maximiser is unchanged.
    related_terms: ["homogeneity-of-degree-1", "optimal-profit-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "2b"
    text: |
      The optimal profit function is increasing in $p$.
    solution: |
      **Claim:** if $p' > p$ then $\Pi^*(w, p') \geq \Pi^*(w, p)$.

      Let $q^*$ be the optimal quantity at price $p$. At the higher price $p'$ the firm can always still produce $q^*$, so:

      $$
      \Pi^*(w, p') = \max_q \left[ p' q - C(q) \right] \geq p' q^* - C(q^*)
      $$

      Since $p' > p$ (and $q^* \geq 0$):

      $$
      p' q^* - C(q^*) \geq p q^* - C(q^*) = \Pi^*(w, p)
      $$

      Chaining the two inequalities gives $\Pi^*(w, p') \geq \Pi^*(w, p)$, strictly if $q^* > 0$.

      > [!tip] Intuition
      > At the old optimum, a higher output price raises revenue by $(p' - p) q^*$ with no change in cost. Re-optimising can only help further.

      > [!info] Caveat: what if $q^* = 0$?
      > If the firm was already not producing, a small increase in $p$ may not change that decision and profit stays at 0. That is why the result is a weak inequality.
    related_terms: ["optimal-profit-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "2c"
    text: |
      The optimal profit function is decreasing in $w$.
    solution: |
      **Claim:** if $w' > w$ then $\Pi^*(w', p) \leq \Pi^*(w, p)$.

      For any fixed quantity $q$, a higher wage means a higher cost:

      $$
      p q - w' f^{-1}(q) \leq p q - w f^{-1}(q)
      $$

      Profit is lower at **every** $q$, so the maximum is also lower:

      $$
      \Pi^*(w', p) = \max_q \left[ p q - w' f^{-1}(q) \right] \leq \max_q \left[ p q - w f^{-1}(q) \right] = \Pi^*(w, p)
      $$

      > [!warning] Watch the direction
      > Comparing only at $q^*$ (the optimum at wage $w$) gives an inequality in the wrong direction, because the maximum at $w'$ is at least as large as any one choice. Compare the whole profit curve instead.

      > [!tip] Intuition
      > Higher wages raise costs at every output level. The firm may adjust its output, but it cannot do better than before.
    related_terms: ["optimal-profit-function", "cost-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "3"
    text: |
      **True or false.** Answer whether the following claims are true or false. If a claim is true, provide a logical argument that proves it. If it is not true, find an example that shows the opposite.
    solution: |
      Parts 3a to 3d below take each claim in turn.
    related_terms: ["profit-maximisation"]
    source_doc_page: 2
  - id: "3a"
    text: |
      Assume that the derivative of the profit function is equal to zero for a unique $q^*$, and assume that the firm's marginal cost $C'(q)$ is a decreasing function. Then the firm's optimal quantity is not $q^*$.
    solution: |
      **TRUE.**

      The first-order condition $\Pi'(q^*) = 0$ gives a *critical point*; whether it is a maximum, minimum or saddle depends on the second-order condition.

      For a price-taking firm $\Pi'(q) = p - C'(q)$, so:

      $$
      \Pi''(q) = -C''(q)
      $$

      If $C'(q)$ is decreasing then $C''(q) < 0$, so $\Pi''(q) = -C''(q) > 0$. A point with $\Pi'(q^*) = 0$ and $\Pi''(q^*) > 0$ is a **local minimum**, not a maximum. The true optimum is at a corner: either $q = 0$ or the largest feasible quantity.

      > [!warning] Key takeaway
      > The FOC is necessary but not sufficient. Always check the SOC. Decreasing marginal cost makes the profit function convex, so any FOC point is a minimum.
    related_terms: ["marginal-cost", "profit-maximisation", "corner-solution"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Assume that $\Pi(q) = p \cdot q - C(q)$. Assume that the derivative of the profit function is equal to zero for a unique $q^*$, and assume that the firm's marginal cost $C'(q)$ is a decreasing function. Then the firm's optimal quantity is not $q^*$.
    solution: |
      **TRUE** (same reasoning as 3a, now with $\Pi = pq - C(q)$ made explicit).

      $\Pi'(q) = p - C'(q) = 0$ gives $p = C'(q^*)$, and $\Pi''(q) = -C''(q) > 0$ because $C'$ is decreasing.

      So $q^*$ is a **local minimum** of $\Pi$. The firm either shuts down ($q = 0$) or, if profit is unbounded above, expands without limit. In a standard model where $C'(q) \to \infty$ as $q \to \infty$, profit eventually turns negative and the optimal choice is $q = 0$.
    related_terms: ["marginal-cost", "profit-maximisation", "cost-function"]
    source_doc_page: 2
  - id: "3c"
    text: |
      If the firm's profit function is a convex function, i.e. $\Pi''(q) > 0$, then the firm either does not produce or it produces as much quantity as it possibly can.
    solution: |
      **TRUE.**

      A convex function on a closed interval attains its maximum at an **endpoint**, never in the interior. The relevant endpoints are $q = 0$ (shut down) and the maximum feasible quantity $\bar{q}$ (or $q \to \infty$). If $\Pi$ is convex and has an interior critical point, that point is a *minimum*.

      > [!example] Illustration
      > Let $\Pi(q) = q^2 - 10q$. This is convex ($\Pi'' = 2 > 0$). The FOC gives $q = 5$, but that is where profit is *minimised* ($\Pi(5) = -25$). The firm compares $\Pi(0) = 0$ with profit at large $q$. Since $q^2$ dominates, $\Pi \to +\infty$, so the firm produces as much as possible. With a capacity limit $q \leq \bar{q}$ it would produce exactly $\bar{q}$.
    related_terms: ["profit-maximisation", "corner-solution"]
    source_doc_page: 2
  - id: "3d"
    text: |
      Assume that $\Pi(q) = p \cdot q - C(q)$. If the marginal cost of the first unit is greater than the price, i.e. $C'(0) > p$, then the firm chooses not to produce.
    solution: |
      **TRUE**, provided marginal cost does not fall again (see the caveat).

      For any $q > 0$, compare producing with shutting down:

      $$
      \Pi(q) - \Pi(0) = p q - C(q) = -\int_0^q \left[ C'(x) - p \right] dx
      $$

      If $C'(0) > p$ and $C'$ is continuous, then $C'(x) > p$ for all $x$ in some interval $[0, \varepsilon]$, so $\Pi(q) < 0 = \Pi(0)$ for small $q$. More generally, if $C'(q) > p$ for all $q > 0$ (which follows from $C'(0) > p$ when $C'$ is increasing), every extra unit costs more than it earns, so shutting down is optimal.

      > [!tip] Intuition
      > The first unit costs more than it earns. If marginal costs never fall, every later unit is at least as costly, so there is no route to profitability.

      > [!warning] Caveat
      > If $C'$ is *decreasing* (as in 3a to 3c), $C'(0) > p$ does NOT by itself imply shutdown: the firm might leap to a large $q$ where $C'(q) < p$. The behaviour of $C'$ over the whole range matters.
    related_terms: ["marginal-cost", "profit-maximisation", "cost-function"]
    source_doc_page: 2
---

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]*
