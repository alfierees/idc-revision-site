---
title: "PS2"
subject: micro-ii
source_doc: /papers/micro-ii/ps-2.pdf
tags:
  - micro-economics-ii
  - optimal-profit-function
  - homogeneity
  - isoquant
  - rts
  - marginal-rate-technical-substitution
  - cobb-douglas
  - convexity
  - production-function
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Properties of the optimal profit function.** Consider a firm that produces using a single input, labour, with production function $f(l)$. The firm is a price taker: it faces a fixed price $p$ for its output and a fixed price $w$ for the labour it uses.

      Define the firm's optimal profit function $\Pi^*$ to be the profit it makes when it chooses the quantity $q^*$ that maximises its profit. Mathematically:

      $$
      \Pi^*(w, p) = p \cdot q^* - C(q^*), \qquad C(q^*) = w \cdot f^{-1}(q^*)
      $$

      Explain why the following properties of the optimal profit function are true.
    solution: |
      Writing profit in terms of labour lets us prove each property directly from the objective, without solving for $l^*$:

      $$
      \Pi(l; w, p) = p \cdot f(l) - w \cdot l, \qquad \Pi^*(w, p) = \max_{l \geq 0} \left[ p \cdot f(l) - w \cdot l \right]
      $$

      > [!info] Why work with the labour formulation?
      > The key insight is that the profit at **every** $l$ changes in the same way when prices change, and so does the maximum.
    related_terms: ["optimal-profit-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "1a"
    text: |
      The optimal profit function is homogeneous of degree 1. That is, if we take prices $p$ and $w$ and multiply them by some positive number $t > 0$, then the optimal profit is also multiplied by $t$.
    solution: |
      **Claim:** $\Pi^*(tw, tp) = t \cdot \Pi^*(w, p)$ for any $t > 0$.

      When both prices scale by $t$, the profit at any labour input $l$ becomes:

      $$
      \Pi(l; tw, tp) = tp \cdot f(l) - tw \cdot l = t \left[ p \cdot f(l) - w \cdot l \right] = t \cdot \Pi(l; w, p)
      $$

      This holds for **every** $l$, so the $l$ that maximises $\Pi(l; tw, tp)$ is the **same** $l^*$ that maximises $\Pi(l; w, p)$. Therefore:

      $$
      \Pi^*(tw, tp) = t \cdot \Pi(l^*; w, p) = t \cdot \Pi^*(w, p)
      $$

      > [!tip] Intuition: only relative prices matter
      > Doubling both the output price and the wage is like switching from pounds to 50p coins: every number doubles but nothing real changes. The optimal labour choice stays the same; only nominal profit scales.

      > [!warning] Common mistake
      > Substituting an explicit $l^*(w, p)$ and checking works for a specific $f$, but for a **general** $f$ you cannot solve explicitly. Showing the whole objective scales is cleaner and works universally.
    related_terms: ["homogeneity-of-degree-1", "optimal-profit-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "1b"
    text: |
      The optimal profit function is increasing in $p$.
    solution: |
      **Claim:** if $p' > p$ then $\Pi^*(w, p') \geq \Pi^*(w, p)$.

      Let $l^*$ be the optimal labour at price $p$. At price $p'$ the firm can always still choose $l^*$, so:

      $$
      \Pi^*(w, p') = \max_{l} \left[ p' f(l) - w l \right] \geq p' f(l^*) - w l^*
      $$

      Since $p' > p$ and $f(l^*) \geq 0$:

      $$
      p' f(l^*) - w l^* \geq p f(l^*) - w l^* = \Pi^*(w, p)
      $$

      Chaining the inequalities, $\Pi^*(w, p') \geq \Pi^*(w, p)$ (strictly if $f(l^*) > 0$).

      > [!tip] Two-step logic
      > Step 1: the firm *could* keep producing $q^*$ at the higher price, which gives more revenue with no change in cost. Step 2: by re-optimising, it can only do at least as well.
    related_terms: ["optimal-profit-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "1c"
    text: |
      The optimal profit function is decreasing in $w$.
    solution: |
      **Claim:** if $w' > w$ then $\Pi^*(w', p) \leq \Pi^*(w, p)$.

      For any fixed labour $l$:

      $$
      p f(l) - w' l \leq p f(l) - w l \quad (\text{since } w' > w,\ l \geq 0)
      $$

      Profit is lower at **every** $l$, so the maximum over all $l$ is also lower:

      $$
      \Pi^*(w', p) = \max_l \left[ p f(l) - w' l \right] \leq \max_l \left[ p f(l) - w l \right] = \Pi^*(w, p)
      $$

      > [!tip] Intuition
      > Higher wages raise costs at every output level. However the firm adjusts, every feasible profit level is now lower, so the maximum is lower too.

      > [!info] Summary of the three properties
      >
      > | Property | Statement | Why it holds |
      > |---|---|---|
      > | Homogeneous of degree 1 | $\Pi^*(tw,tp) = t\Pi^*(w,p)$ | Whole objective scales by $t$, same maximiser |
      > | Increasing in $p$ | $p' > p \Rightarrow \Pi^*(w,p') \geq \Pi^*(w,p)$ | Higher price raises revenue at any $q$ |
      > | Decreasing in $w$ | $w' > w \Rightarrow \Pi^*(w',p) \leq \Pi^*(w,p)$ | Higher wage lowers profit at every $l$ |
    related_terms: ["optimal-profit-function", "cost-function", "profit-maximisation"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Isoquants and the RTS.** A firm uses two inputs, labour $l$ and capital $k$, with production function $f(l, k)$. For each production function below, derive the isoquant curve $f(l, k) = q_0$ as a function $g(l)$ whose independent variable is $l$ and whose dependent variable is $k$, and present its derivative. Moreover, derive the RTS of the production function.
    solution: |
      The isoquant for output $q_0$ is the set $\{(l, k) : f(l, k) = q_0\}$, written as $k = g(l)$: for each amount of labour, how much capital is needed to stay on the isoquant. For each function we (1) derive $g(l)$, (2) compute $g'(l)$, the isoquant's slope, and (3) compute $\text{RTS} = -g'(l) = MP_l / MP_k$.

      > [!info] The isoquant as a level curve
      > An isoquant is the production analogue of an indifference curve: points on the same isoquant produce the same output, and its shape encodes the firm's substitution possibilities between inputs.
    related_terms: ["isoquant", "rts", "production-function"]
    source_doc_page: 1
  - id: "2-1a"
    text: |
      $f(l, k) = l^{\omega} k^{\varepsilon}$
    solution: |
      **Isoquant:**

      $$
      l^{\omega} k^{\varepsilon} = q_0 \;\Rightarrow\; k^{\varepsilon} = \frac{q_0}{l^{\omega}} \;\Rightarrow\; k = g(l) = q_0^{1/\varepsilon} \cdot l^{-\omega/\varepsilon}
      $$

      **Slope of the isoquant:**

      $$
      g'(l) = q_0^{1/\varepsilon} \cdot \left(-\frac{\omega}{\varepsilon}\right) l^{-\omega/\varepsilon - 1} = -\frac{\omega}{\varepsilon} \cdot \frac{k}{l}
      $$

      (using $k = q_0^{1/\varepsilon} l^{-\omega/\varepsilon}$ to simplify).

      **RTS:**

      $$
      \text{RTS} = -g'(l) = \frac{\omega}{\varepsilon} \cdot \frac{k}{l}
      $$

      > [!tip] Verify with partial derivatives
      > $MP_l = \omega l^{\omega - 1} k^{\varepsilon}$ and $MP_k = \varepsilon l^{\omega} k^{\varepsilon - 1}$, so $\text{RTS} = MP_l / MP_k = \dfrac{\omega}{\varepsilon} \cdot \dfrac{k}{l}$. Along the isoquant $k$ falls as $l$ rises, so the RTS falls: **diminishing RTS**.
    related_terms: ["cobb-douglas-production-function", "isoquant", "rts", "diminishing-rts", "marginal-physical-product"]
    source_doc_page: 1
  - id: "2-1b"
    text: |
      $f(l, k) = \omega \cdot l + \varepsilon \cdot k$
    solution: |
      **Isoquant:**

      $$
      \omega l + \varepsilon k = q_0 \;\Rightarrow\; k = g(l) = \frac{q_0}{\varepsilon} - \frac{\omega}{\varepsilon}\, l
      $$

      **Slope:**

      $$
      g'(l) = -\frac{\omega}{\varepsilon}
      $$

      **RTS:**

      $$
      \text{RTS} = -g'(l) = \frac{\omega}{\varepsilon} \quad \text{(constant)}
      $$

      > [!tip] Constant RTS means a linear isoquant
      > With perfect substitutes, one unit of labour always replaces exactly $\omega/\varepsilon$ units of capital, however much of each is used. Isoquants are straight lines. Cost minimisation then gives a **corner solution**: the firm uses only the cheaper input unless the input price ratio equals $\omega/\varepsilon$ exactly.
    related_terms: ["perfect-substitutes", "isoquant", "rts", "corner-solution"]
    source_doc_page: 5
  - id: "2-1c"
    text: |
      $f(l, k) = \sqrt{l} + k$
    solution: |
      **Isoquant:**

      $$
      \sqrt{l} + k = q_0 \;\Rightarrow\; k = g(l) = q_0 - \sqrt{l}
      $$

      **Slope:**

      $$
      g'(l) = -\frac{1}{2\sqrt{l}}
      $$

      **RTS:**

      $$
      \text{RTS} = -g'(l) = \frac{1}{2\sqrt{l}}
      $$

      This is a **decreasing** function of $l$, so the technology has **diminishing RTS**.

      > [!warning] Domain restriction
      > We need $k \geq 0$, which requires $\sqrt{l} \leq q_0$, i.e. $l \leq q_0^2$. Beyond this the isoquant cannot be drawn with non-negative capital.

      > [!info] Comparison of the three production functions
      >
      > | Production function | Isoquant $k = g(l)$ | $g'(l)$ | RTS | Shape |
      > |---|---|---|---|---|
      > | Cobb-Douglas $l^{\omega} k^{\varepsilon}$ | $q_0^{1/\varepsilon} l^{-\omega/\varepsilon}$ | $-\frac{\omega}{\varepsilon}\frac{k}{l}$ | $\frac{\omega}{\varepsilon}\frac{k}{l}$ (decreasing) | Convex curve |
      > | Linear $\omega l + \varepsilon k$ | $\frac{q_0 - \omega l}{\varepsilon}$ | $-\frac{\omega}{\varepsilon}$ | $\frac{\omega}{\varepsilon}$ (constant) | Straight line |
      > | Square-root $\sqrt{l} + k$ | $q_0 - \sqrt{l}$ | $-\frac{1}{2\sqrt{l}}$ | $\frac{1}{2\sqrt{l}}$ (decreasing) | Convex curve |
    related_terms: ["isoquant", "rts", "diminishing-rts", "production-function"]
    source_doc_page: 5
  - id: "2-2"
    text: |
      What is the relationship between the RTS and the first derivative of the function $g(l)$? Use the property to deduce that if the RTS is decreasing, then the function $g(l)$ (that represents the shape of the isoquant) is a convex function, i.e. its second derivative is positive.
    solution: |
      Along an isoquant output does not change, so $df = MP_l\, dl + MP_k\, dk = 0$. Rearranging:

      $$
      \text{RTS} = \frac{MP_l}{MP_k} = -\frac{dk}{dl}\bigg|_{f = q_0} = -g'(l)
      $$

      "Diminishing RTS" means the RTS decreases as $l$ increases:

      $$
      \frac{d(\text{RTS})}{dl} < 0 \;\Rightarrow\; \frac{d\left(-g'(l)\right)}{dl} < 0 \;\Rightarrow\; -g''(l) < 0 \;\Rightarrow\; g''(l) > 0
      $$

      A function with $g'' > 0$ is **convex**.

      > [!info] What convexity looks like
      > A convex $g$ means the isoquant bows in toward the origin. As you move along it from capital-intensive to labour-intensive bundles, each extra unit of labour replaces *fewer and fewer* units of capital: the slope gets flatter.

      > [!tip] Why it matters economically
      > Convex isoquants mean input diversity is efficient: mixing labour and capital beats specialising in either. This is why cost-minimising firms typically use both inputs, unlike the perfect-substitutes case.
    related_terms: ["rts", "diminishing-rts", "convex-isoquant", "isoquant", "marginal-physical-product"]
    source_doc_page: 5
  - id: "2-3"
    text: |
      If a function $g(x)$ is convex, then for every $x_1 < x_2$ and every $0 < \alpha < 1$ we have

      $$
      \alpha \cdot g(x_1) + (1 - \alpha) \cdot g(x_2) > g\left(\alpha \cdot x_1 + (1 - \alpha) \cdot x_2\right)
      $$

      Use the above result together with the result you found in clause 2 to show that if $f(l, k)$ exhibits diminishing RTS then, for two bundles $A$ and $B$ along an isoquant, the bundle $C = rA + (1 - r)B$, where $0 < r < 1$, lies on a higher isoquant.
    solution: |
      Since $A = (l_1, k_1)$ and $B = (l_2, k_2)$ lie on the isoquant $f = q_0$:

      $$
      k_1 = g(l_1), \qquad k_2 = g(l_2)
      $$

      The bundle $C$ has $l_C = r l_1 + (1 - r) l_2$ and $k_C = r k_1 + (1 - r) k_2$.

      From clause 2, diminishing RTS implies $g'' > 0$, so $g$ is convex. By the convexity inequality:

      $$
      g(l_C) = g\left(r l_1 + (1 - r) l_2\right) < r\, g(l_1) + (1 - r)\, g(l_2) = k_C
      $$

      So at labour $l_C$, the bundle $C$ has **more capital than needed** to produce $q_0$. Since $f$ is increasing in $k$:

      $$
      f(l_C, k_C) > f\left(l_C, g(l_C)\right) = q_0
      $$

      Hence $C$ lies on a **higher** isoquant.

      > [!example] Numerical illustration with $f(l, k) = \sqrt{l} + k$
      > Fix $q_0 = 10$, so the isoquant is $k = g(l) = 10 - \sqrt{l}$.
      >
      > - **Bundle A:** $l_1 = 9$, $k_1 = g(9) = 7$, and $f(9, 7) = 3 + 7 = 10$.
      > - **Bundle B:** $l_2 = 25$, $k_2 = g(25) = 5$, and $f(25, 5) = 5 + 5 = 10$.
      > - **Midpoint C** ($r = 0.5$): $l_C = 17$, $k_C = 6$, and $f(17, 6) = \sqrt{17} + 6 \approx 10.12 > 10$.
      >
      > C is on a higher isoquant than $q_0 = 10$, so mixing inputs is more productive.

      > [!tip] Intuition: why does mixing help?
      > The straight line between $A$ and $B$ cuts through the interior of the isoquant map, landing on a higher isoquant. The firm gets something for free by diversifying: this is the geometric content of diminishing RTS.
    related_terms: ["convex-isoquant", "diminishing-rts", "isoquant", "rts"]
    source_doc_page: 5
---

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]]*
