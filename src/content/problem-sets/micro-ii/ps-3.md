---
title: "PS3"
subject: micro-ii
source_doc: /papers/micro-ii/ps-3.pdf
tags:
  - micro-economics-ii
  - cost-minimisation
  - cost-function
  - tangency-condition
  - cobb-douglas
  - perfect-substitutes
  - conditional-input-demand
  - homogeneity
  - corner-solution
ai_drafted: true
questions:
  - id: "1"
    text: |
      Consider a firm with the production function $f(l,k) = l^{1/4} \cdot k^{3/4}$ that faces input prices $p_l = 8$ and $p_k = 24$.

      Derive the cost-minimising input bundle $(l(q_0), k(q_0))$ and the cost function $C(q_0)$.
    solution: |
      > [!info] The cost-minimisation problem
      >
      > $$
      > \min_{l,k \geq 0}\; p_l\, l + p_k\, k \quad \text{s.t.} \quad f(l,k) = q_0
      > $$
      >
      > At an interior optimum the **isocost line is tangent to the isoquant**, giving the **tangency condition**:
      >
      > $$
      > \text{RTS} = \frac{MP_l}{MP_k} = \frac{p_l}{p_k}
      > $$
      >
      > The rate at which the *technology* lets you swap capital for labour ($MP_l/MP_k$) must equal the rate at which the *market* lets you swap them ($p_l/p_k$). If they differ, you can produce the same output more cheaply by reallocating.

      **Step 1: marginal products and the RTS.**

      $$
      MP_l = \tfrac14 l^{-3/4}k^{3/4}, \qquad MP_k = \tfrac34 l^{1/4}k^{-1/4}
      $$

      $$
      \text{RTS} = \frac{MP_l}{MP_k} = \frac{\tfrac14 l^{-3/4}k^{3/4}}{\tfrac34 l^{1/4}k^{-1/4}} = \frac{1}{3}\cdot\frac{k}{l}
      $$

      **Step 2: apply the tangency condition.** With $p_l/p_k = 8/24 = 1/3$:

      $$
      \frac13\cdot\frac{k}{l} = \frac13 \;\implies\; \boxed{k = l}
      $$

      **Step 3: substitute into the constraint** $l^{1/4}k^{3/4} = q_0$:

      $$
      l^{1/4}\,l^{3/4} = l = q_0 \;\implies\; \boxed{l(q_0) = q_0, \quad k(q_0) = q_0}
      $$

      **Step 4: cost function.**

      $$
      C(q_0) = 8\,l(q_0) + 24\,k(q_0) = 8q_0 + 24q_0 = \boxed{32\,q_0}
      $$

      > [!tip] Why does $k = l$ here?
      > The output elasticities are $\tfrac14$ for labour and $\tfrac34$ for capital, so capital is "three times as important" technologically. But capital is also exactly three times as expensive ($24 = 3\times 8$). The two effects cancel, and the firm uses the inputs in equal amounts. This is the tangency condition doing its job: relative productivity is balanced against relative price.

      > [!info] Constant returns to scale give linear cost
      > Because $\tfrac14 + \tfrac34 = 1$, this Cobb-Douglas has **constant returns to scale**, so cost is linear in output ($C = 32q_0$) and **marginal cost = average cost = 32**, constant. This is the special $a+b=1$ case of Question 2.
    related_terms: ["cost-minimisation", "cost-function", "conditional-input-demand", "tangency-condition", "rts", "marginal-physical-product", "isocost-line", "isoquant", "cobb-douglas-production-function", "constant-returns-to-scale"]
    source_doc_page: 1
  - id: "2a"
    text: |
      Consider a firm with the production function $f(l,k) = l^a \cdot k^b$.

      Derive the cost-minimising input bundle $(l(q_0), k(q_0))$ as a function of the parameters $p_l$, $p_k$, $a$ and $b$.
    solution: |
      **Tangency condition:**

      $$
      \text{RTS} = \frac{a\,l^{a-1}k^b}{b\,l^a k^{b-1}} = \frac{a}{b}\cdot\frac{k}{l} = \frac{p_l}{p_k} \;\implies\; k = \frac{b}{a}\cdot\frac{p_l}{p_k}\, l \tag{$\ast$}
      $$

      Substitute $(\ast)$ into $l^a k^b = q_0$:

      $$
      l^a\left(\frac{b\,p_l}{a\,p_k}\,l\right)^{b} = q_0 \;\implies\; l^{a+b}\left(\frac{b\,p_l}{a\,p_k}\right)^{b} = q_0
      $$

      Solving for $l$ (and by the symmetric argument for $k$):

      $$
      \boxed{l(q_0) = q_0^{\frac{1}{a+b}}\left(\frac{a\,p_k}{b\,p_l}\right)^{\frac{b}{a+b}}}
      $$

      $$
      \boxed{k(q_0) = q_0^{\frac{1}{a+b}}\left(\frac{b\,p_l}{a\,p_k}\right)^{\frac{a}{a+b}}}
      $$

    related_terms: ["cost-minimisation", "conditional-input-demand", "tangency-condition", "rts", "cobb-douglas-production-function"]
    source_doc_page: 1
  - id: "2b"
    text: |
      Same firm as 2a. Derive the cost function $C(q_0)$ as a function of the parameters $p_l$, $p_k$, $a$ and $b$.
    solution: |

      $$
      C(q_0) = p_l\, l(q_0) + p_k\, k(q_0)
      $$

      Each term contains the common factor $q_0^{1/(a+b)}\,p_l^{a/(a+b)}\,p_k^{b/(a+b)}$. Pulling it out and collecting the constants (full algebra below) gives the compact form:

      $$
      \boxed{C(q_0) = (a+b)\; q_0^{\frac{1}{a+b}}\left(\frac{p_l}{a}\right)^{\frac{a}{a+b}}\left(\frac{p_k}{b}\right)^{\frac{b}{a+b}}}
      $$

      > [!example] Deriving the compact cost form
      > Write $s = a+b$. The labour term is
      >
      > $$
      > p_l\,l = p_l\, q_0^{1/s}\Big(\tfrac{a p_k}{b p_l}\Big)^{b/s} = q_0^{1/s}\, p_l^{a/s} p_k^{b/s}\,(a/b)^{b/s}
      > $$
      >
      > and the capital term is
      >
      > $$
      > p_k\,k = q_0^{1/s}\, p_l^{a/s} p_k^{b/s}\,(b/a)^{a/s}.
      > $$
      >
      > Factoring $q_0^{1/s} p_l^{a/s} p_k^{b/s}$, the bracket is $(a/b)^{b/s}+(b/a)^{a/s}$. Pull out $a^{-a/s}b^{-b/s}$: since $(a+b)/s = 1$, the first term becomes $a^{-a/s}b^{-b/s}\cdot a$ and the second $a^{-a/s}b^{-b/s}\cdot b$, so the bracket equals $(a+b)\,a^{-a/s}b^{-b/s}$. Combining with $p_l^{a/s}p_k^{b/s}$ yields $(p_l/a)^{a/s}(p_k/b)^{b/s}$.

      > [!tip] Sanity check against Question 1
      > Put $a=\tfrac14, b=\tfrac34$ ($s=1$), $p_l=8, p_k=24$:
      >
      > $$
      > C = 1\cdot q_0\cdot (8/\tfrac14)^{1/4}(24/\tfrac34)^{3/4} = 32^{1/4}\,32^{3/4}\,q_0 = 32q_0.
      > $$
      >
      > Exactly Question 1.

      > [!info] Returns to scale show up in the exponent on $q_0$
      > Cost scales as $q_0^{1/(a+b)}$. If $a+b=1$ (CRS) cost is linear; if $a+b>1$ (increasing returns) the exponent is below 1 so cost is concave (cheaper per unit as you scale up); if $a+b<1$ (decreasing returns) cost is convex.
    related_terms: ["cost-function", "cobb-douglas-production-function", "constant-returns-to-scale", "cost-minimisation"]
    source_doc_page: 1
  - id: "2c"
    text: |
      Same firm as 2a. For a given $q_0$, how does $(l(q_0), k(q_0))$ change as the price ratio $\frac{p_l}{p_k}$ increases?
    solution: |
      From $l(q_0)\propto (p_k/p_l)^{b/(a+b)}$ and $k(q_0)\propto (p_l/p_k)^{a/(a+b)}$:

      | If $p_l/p_k$ **increases** | Effect | Direction |
      |---|---|---|
      | Labour $l(q_0)$ | $\propto (p_k/p_l)^{b/s}$ falls | less labour |
      | Capital $k(q_0)$ | $\propto (p_l/p_k)^{a/s}$ rises | more capital |

      The firm **substitutes away from the input that became relatively more expensive** (labour) toward the cheaper one (capital). Output $q_0$ is held fixed, so this is a pure **substitution effect**.
    related_terms: ["conditional-input-demand", "cobb-douglas-production-function", "tangency-condition"]
    source_doc_page: 1
  - id: "2d"
    text: |
      Same firm as 2a. For a given $q_0$, how does $(l(q_0), k(q_0))$ change as the ratio $\frac{a}{b}$ increases?
    solution: |
      A higher $a/b$ means labour's output elasticity is large relative to capital's, so labour is *technologically more important*. In $(\ast)$, $k/l = (b/a)(p_l/p_k)$, so raising $a/b$ **lowers** $k/l$: the firm tilts toward labour. Hence $l(q_0)$ rises and $k(q_0)$ falls.
    related_terms: ["conditional-input-demand", "cobb-douglas-production-function", "rts"]
    source_doc_page: 1
  - id: "2e"
    text: |
      Provide a verbal economic explanation for clauses 3 and 4 (parts 2c and 2d).
    solution: |
      > [!info] Clause 3 (relative prices): the substitution principle
      > Cost minimisation always equates the technical trade-off (RTS) to the price trade-off. When one input's price rises, that input now "buys" less output per dollar than before, so the firm reshuffles its bundle toward the input that delivers more output per dollar, keeping output constant but lowering cost. With smooth (Cobb-Douglas) isoquants this reshuffle is **gradual**, never a complete switch.

      > [!info] Clause 4 (relative productivity): use what is productive
      > The output elasticities $a$ and $b$ measure how responsive output is to each input. A higher $a/b$ means each unit of labour contributes proportionally more output, so labour delivers more "output per dollar" at any given price. The cost-minimiser responds by leaning on labour. Price and productivity enter symmetrically: what matters is the **output-per-dollar** of each input, $MP/\text{price}$.

      > [!warning] Do not confuse the two channels
      > Clause 3 changes the **price** ratio with technology fixed; clause 4 changes the **technology** (elasticities) with prices fixed. Both move the bundle, but for different reasons: markets versus engineering.
    related_terms: ["tangency-condition", "rts", "convex-isoquant", "cobb-douglas-production-function", "marginal-physical-product"]
    source_doc_page: 1
  - id: "3a"
    text: |
      Consider a firm with the production function $f(l,k) = \sqrt{l} + k$ and input prices $p_l = 2$ and $p_k = 8$.

      Derive the cost-minimising input bundle $(l(q_0), k(q_0))$.
    solution: |
      This technology has **diminishing returns to labour** but **constant (linear) returns to capital**. That asymmetry produces a striking result.

      **Step 1: tangency.** $MP_l = \frac{1}{2\sqrt{l}}$, $MP_k = 1$, so

      $$
      \text{RTS} = \frac{1}{2\sqrt{l}} = \frac{p_l}{p_k} = \frac{2}{8} = \frac14 \;\implies\; 2\sqrt{l} = 4 \;\implies\; \boxed{l^* = 4}
      $$

      The optimal labour is **$4$ regardless of $q_0$**.

      > [!tip] Why is labour pinned at a constant?
      > Because capital enters linearly, every extra unit of output beyond what labour cheaply provides is best made with capital. Labour is only worth using up to the point where its falling marginal product still beats capital's price-adjusted productivity. That break-even point, where $MP_l/p_l = MP_k/p_k$, depends only on prices, not on the scale of output. So once $l^*=4$ is reached, all further output comes from capital.

      **Step 2: capital from the constraint.** $\sqrt{l^*} + k = q_0 \Rightarrow k = q_0 - 2$, valid while $k\geq 0$ (that is, $q_0 \geq 2$).

      **Step 3: corner case for small output.** If $q_0 < 2$ the interior solution wants $k<0$, which is infeasible. The firm then sets $k=0$ and produces with labour alone: $\sqrt{l}=q_0 \Rightarrow l = q_0^2$.

      $$
      \boxed{(l(q_0),\,k(q_0)) = \begin{cases} (q_0^2,\; 0) & q_0 < 2 \\[4pt] (4,\; q_0 - 2) & q_0 \geq 2 \end{cases}}
      $$

      > [!warning] Always test the non-negativity constraints
      > The tangency condition only locates an **interior** optimum. Whenever a technology is linear in one input (perfect-substitute-like in that direction), check whether the implied quantity of the other input is non-negative. If not, the true optimum is a corner.
    related_terms: ["cost-minimisation", "conditional-input-demand", "tangency-condition", "rts", "marginal-physical-product", "corner-solution", "diminishing-rts"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Same firm as 3a. Derive the cost function $C(q_0)$.
    solution: |

      $$
      \boxed{C(q_0) = \begin{cases} 2q_0^2 & q_0 < 2 \\[4pt] 8q_0 - 8 & q_0 \geq 2 \end{cases}}
      $$

      Interior branch: $C = 2\cdot 4 + 8(q_0-2) = 8q_0 - 8$. Corner branch: $C = 2q_0^2 + 8\cdot 0$.

      > [!example] Continuity check at the kink $q_0 = 2$
      > Corner branch: $C = 2(2)^2 = 8$. Interior branch: $C = 8(2)-8 = 8$. They agree, so $C$ is continuous; only its slope (marginal cost) jumps from $4q_0$ to the constant $8$.
    related_terms: ["cost-function", "corner-solution", "marginal-cost"]
    source_doc_page: 1
  - id: "4a"
    text: |
      Consider a firm with the production function $f(l,k) = a \cdot l + b \cdot k$.

      Derive the cost-minimising input bundle $(l(q_0), k(q_0))$ as a function of the parameters $p_l$, $p_k$, $a$ and $b$.
    solution: |
      Here the isoquants are **straight lines** with constant RTS $= a/b$. Tangency generically fails (a line cannot be tangent to a line at a single point), so the solution is a **corner** determined by comparing **cost per unit of output** from each input.

      **Cost per unit of output.** One unit of output needs either $1/a$ units of labour (cost $p_l/a$) or $1/b$ units of capital (cost $p_k/b$). The firm uses whichever is cheaper.

      $$
      \boxed{(l(q_0),\,k(q_0)) = \begin{cases} \left(\tfrac{q_0}{a},\, 0\right) & \text{if } \tfrac{p_l}{a} < \tfrac{p_k}{b} \;\; (\Leftrightarrow b\,p_l < a\,p_k) \\[6pt] \left(0,\, \tfrac{q_0}{b}\right) & \text{if } \tfrac{p_l}{a} > \tfrac{p_k}{b} \\[6pt] \text{any mix on the isoquant} & \text{if } \tfrac{p_l}{a} = \tfrac{p_k}{b} \end{cases}}
      $$

    related_terms: ["perfect-substitutes", "corner-solution", "cost-minimisation", "conditional-input-demand", "isoquant", "rts"]
    source_doc_page: 2
  - id: "4b"
    text: |
      Same firm as 4a. Derive the cost function $C(q_0)$ as a function of the parameters $p_l$, $p_k$, $a$ and $b$.
    solution: |

      $$
      \boxed{C(q_0) = q_0 \cdot \min\left\{\frac{p_l}{a},\; \frac{p_k}{b}\right\}}
      $$

      Total cost is the quantity of output times the lower of the two per-unit costs found in 4a.
    related_terms: ["cost-function", "perfect-substitutes", "corner-solution"]
    source_doc_page: 2
  - id: "4c"
    text: |
      Same firm as 4a. For a given $q_0$, how does $(l(q_0), k(q_0))$ change as the price ratio $\frac{p_l}{p_k}$ increases?
    solution: |
      While $p_l/a < p_k/b$ the firm uses **only labour** and is unaffected by small price changes. Once $p_l/p_k$ rises past the threshold $a/b$, labour's per-unit cost exceeds capital's and the firm **switches entirely to capital** ($l$ jumps from $q_0/a$ to $0$). The response is discontinuous: a **bang-bang** switch, not smooth substitution.
    related_terms: ["perfect-substitutes", "corner-solution", "conditional-input-demand"]
    source_doc_page: 2
  - id: "4d"
    text: |
      Same firm as 4a. For a given $q_0$, how does $(l(q_0), k(q_0))$ change as the ratio $\frac{a}{b}$ increases?
    solution: |
      Raising $a/b$ lowers labour's per-unit cost $p_l/a$. Once $p_l/a$ falls below $p_k/b$, the firm switches **entirely to labour**. Again a corner switch at the threshold.
    related_terms: ["perfect-substitutes", "corner-solution", "conditional-input-demand"]
    source_doc_page: 2
  - id: "4e"
    text: |
      Provide a verbal economic explanation for clauses 3 and 4 (parts 4c and 4d).
    solution: |
      > [!info] Perfect substitutes mean all-or-nothing
      > Because labour and capital are interchangeable at a *fixed* rate $a/b$, there is no benefit to mixing them: the firm simply buys the cheaper source of "effective output", measured by $MP/\text{price}$. Both a higher own-price (clause 3) and a lower own-productivity (clause 4) worsen an input's output-per-dollar. Until the ranking of the two inputs flips, nothing changes; the moment it flips, the firm jumps to the corner. This is the polar opposite of Cobb-Douglas, where convex isoquants reward diversification and substitution is continuous.

      > [!info] How substitution responds to prices across technologies
      >
      > | Technology | Isoquant shape | Substitution as $p_l/p_k$ rises |
      > |---|---|---|
      > | Cobb-Douglas (Q1 and Q2) | Smooth convex | Gradual, interior; always uses both inputs |
      > | $\sqrt{l}+k$ (Q3) | Convex then linear | Labour fixed at $l^*=4$; capital absorbs scale; corner for small $q_0$ |
      > | Perfect substitutes (Q4) | Straight line | None until threshold, then full switch (bang-bang) |
    related_terms: ["perfect-substitutes", "corner-solution", "convex-isoquant", "isoquant"]
    source_doc_page: 2
  - id: "5a"
    text: |
      Explain why the following property of the cost function $C(q) = p_l \cdot l(q) + p_k \cdot k(q)$ is true.

      The cost function is homogeneous of degree 1. That is, if we look at prices $p_l$ and $p_k$ and multiply them by some positive number $t > 0$, then the cost is also multiplied by $t$.
    solution: |
      **Claim:** $C(t\,p_l,\, t\,p_k,\, q) = t\,C(p_l, p_k, q)$ for any $t>0$.

      **Proof.** The cost-minimisation problem is

      $$
      C(p_l,p_k,q) = \min_{f(l,k)=q}\; \big[p_l\, l + p_k\, k\big].
      $$

      Scaling both prices by $t$ multiplies the **objective** by $t$ at *every* feasible bundle:

      $$
      t\,p_l\, l + t\,p_k\, k = t\,(p_l\, l + p_k\, k).
      $$

      Multiplying an objective by a positive constant does not change its minimiser, so the cost-minimising bundle $(l(q),k(q))$ is **unchanged**, and the minimum value scales by $t$:

      $$
      C(tp_l, tp_k, q) = t\,\big[p_l\,l(q) + p_k\,k(q)\big] = t\,C(p_l,p_k,q). \quad\checkmark
      $$

      > [!tip] Intuition: only relative prices matter
      > Doubling both prices is just a change of currency units. The cheapest *recipe* (the input bundle) is identical; only the nominal cost figure doubles. The tangency condition confirms this: RTS $= p_l/p_k$ is invariant to scaling both prices, so the chosen bundle cannot move. (Mirrors the homogeneity of the profit function in [[PS_02-Isoquants, RTS & Properties of the Profit Function]].)
    related_terms: ["homogeneity-of-degree-1", "cost-function", "cost-minimisation", "tangency-condition"]
    source_doc_page: 2
  - id: "5b"
    text: |
      Explain why the following property of the cost function $C(q) = p_l \cdot l(q) + p_k \cdot k(q)$ is true.

      The cost function is increasing in $p_l$, in $p_k$, and in $q$.
    solution: |
      **Increasing in $p_l$.** Let $p_l' > p_l$, with minimisers $(l',k')$ at $p_l'$ and $(l,k)$ at $p_l$. Then

      $$
      C(p_l') = p_l'\,l' + p_k\,k' \;\geq\; p_l\,l' + p_k\,k' \;\geq\; \min_{f=q}\,[p_l\,l + p_k\,k] = C(p_l).
      $$

      The first inequality holds because $p_l' \geq p_l$ and $l'\geq 0$; the second because $(l',k')$ is feasible (it produces $q$) and the minimum can only be lower. Hence $C(p_l') \geq C(p_l)$. The argument for $p_k$ is identical.

      **Increasing in $q$.** If $q' > q$, then (with $f$ increasing) the feasible set shrinks: $\{(l,k): f(l,k) \geq q'\} \subseteq \{(l,k): f(l,k) \geq q\}$. Minimising over a **smaller** set gives a **weakly larger** minimum, so $C(q') \geq C(q)$.

      > [!tip] The revealed-preference trick
      > The clean way to prove cost is increasing in a price is to evaluate the **new** optimal bundle at the **old** prices. Because that bundle was still feasible under the old problem, its old cost is at least the old minimum, giving the inequality without solving for either bundle explicitly. This same logic powers Shephard's Lemma and the [[Envelope Theorem]].

      > [!warning] Increasing in price does not mean strictly increasing
      > Cost is **weakly** increasing in each price: if an input is not used (a corner solution, as in Question 4), raising its price does not change cost at all. Strict monotonicity requires the input to be used in positive quantity.
    related_terms: ["cost-function", "cost-minimisation", "corner-solution", "envelope-theorem", "revealed-preference"]
    source_doc_page: 2
---

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]*
