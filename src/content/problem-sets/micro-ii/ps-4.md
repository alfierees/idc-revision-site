---
title: "PS4"
subject: micro-ii
source_doc: /papers/micro-ii/ps-4.pdf
tags:
  - micro-economics-ii
  - partial-equilibrium
  - social-welfare
  - consumer-surplus
  - firm-surplus
  - price-ceiling
  - quasilinear-utility
  - government-intervention
  - first-welfare-theorem
  - comparative-statics
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Consider a market with two products $X$ and $Y$, where $Y$ represents money. The demand is set according to the preferences of a representative consumer whose utility function is

      $$
      100x - \frac{x^2}{2} + y
      $$

      (assume that the consumer's income is high enough that there are no corner solutions). The supply in the market is set by a representative firm whose production function is $f(k,l) = l^{1/4} \cdot k^{1/4}$, with input prices $p_k = \frac14$ and $p_l = \frac14$.

      Find the equilibrium price and the equilibrium quantity in the market.
    solution: |
      > [!info] Welfare is value minus cost, and equilibrium maximises it
      > With [[Quasilinear Utility]] the consumer's value of $x$ units is $v(x)$ (measured in money), and the firm's cost is $C(x)$. **Social welfare** is $W(x) = v(x) - C(x)$. The competitive quantity $x^*$ satisfies $v'(x^*) = C'(x^*)$. Because $v$ is concave and $C$ convex, $W$ is concave and $x^*$ is its **unique maximum**: the [[First Welfare Theorem]] in a single market. Questions 2 to 4 are corollaries of this.

      > [!tip] Why quasilinear utility makes welfare measurement clean
      > When utility is $U = v(x) + y$ (with $y$ = money), there are **no income effects on $x$**: the marginal value of the good is $v'(x)$ regardless of wealth. The area under the demand curve is a money-valued utility, so consumer surplus, firm surplus and welfare are measured in comparable units and simply add up.

      **Demand.** Spending money on $x$ costs the consumer utility through $y$. Optimal $x$ sets the marginal utility of $x$ equal to its price:

      $$
      \frac{\partial U}{\partial x} = 100 - x = p \;\implies\; \boxed{x^d(p) = 100 - p} \quad (\text{inverse demand } p = 100 - x).
      $$

      **Cost function.** Minimise $\tfrac14 l + \tfrac14 k$ subject to $(lk)^{1/4} = x$, that is $lk = x^4$. By the [[Tangency Condition]], RTS $= k/l = p_l/p_k = 1 \Rightarrow k = l$. Then $l^2 = x^4 \Rightarrow l = k = x^2$, so

      $$
      C(x) = \tfrac14 x^2 + \tfrac14 x^2 = \boxed{\tfrac12 x^2}, \qquad MC(x) = C'(x) = x.
      $$

      > [!tip] Decreasing returns give an upward-sloping supply curve
      > The exponents sum to $\tfrac14+\tfrac14 = \tfrac12 < 1$ (decreasing returns to scale), so $C$ is **convex** and $MC = x$ rises with output. A competitive firm produces where $p = MC$, giving inverse supply $p = x$.

      **Equilibrium.** Set demand equal to supply (both as $p$ in terms of $x$): $100 - x = x$.

      $$
      \boxed{x^* = 50, \qquad p^* = 50}
      $$

    related_terms: ["partial-equilibrium", "quasilinear-utility", "cost-minimisation", "cost-function", "tangency-condition", "marginal-cost", "first-welfare-theorem", "cobb-douglas-production-function"]
    source_doc_page: 1
  - id: "1b"
    text: |
      Same market as 1a. Calculate the overall welfare in equilibrium, the consumer surplus and the firm surplus.
    solution: |
      > [!example] Computing the three areas
      > **Consumer surplus** = value minus expenditure:
      >
      > $$
      > CS = \underbrace{\int_0^{50}(100 - s)\,ds}_{\text{total value}} - \underbrace{p^* x^*}_{\text{paid}} = \big[100s - \tfrac{s^2}{2}\big]_0^{50} - 50\cdot 50 = 3750 - 2500 = \boxed{1250}.
      > $$
      >
      > **Firm surplus** = revenue minus cost:
      >
      > $$
      > PS = p^* x^* - C(x^*) = 2500 - \tfrac12(50)^2 = 2500 - 1250 = \boxed{1250}.
      > $$
      >
      > **Social welfare** = sum (or directly from $W=\int(v'-MC)$):
      >
      > $$
      > W = CS + PS = \int_0^{50}\big[(100-s) - s\big]\,ds = \big[100s - s^2\big]_0^{50} = 5000 - 2500 = \boxed{2500}.
      > $$

      The split is 50/50 here, a coincidence of the symmetric linear demand and linear $MC$.
    related_terms: ["consumer-surplus", "firm-surplus", "social-welfare", "partial-equilibrium", "quasilinear-utility"]
    source_doc_page: 1
  - id: "1c"
    text: |
      Same market as 1a. Assume now that the government intervenes in the market and sets a maximal price for the good $x$, denoted $\bar p$.

      Describe how the social welfare changes as $\bar p$ changes. What happens to it with respect to its level under the competitive equilibrium?
    solution: |
      A [[Price Ceiling]] $\bar p$ caps the price of $x$. It only bites if $\bar p < p^* = 50$; otherwise nothing changes.

      > [!info] What a binding ceiling does to quantity
      > At price $\bar p < 50$ the firm produces where $MC = \bar p$, that is it supplies $x_s = \bar p$. Consumers demand $x_d = 100 - \bar p > 50 > \bar p$. Demand exceeds supply, a **shortage**, and the quantity actually traded is the short side:
      >
      > $$
      > \boxed{x(\bar p) = \bar p \quad (\text{for } \bar p \le 50)}.
      > $$
      >
      > We assume **efficient rationing**: the available units go to the highest-value consumers (those at the top of the demand curve).

      **The three surplus functions** (for $\bar p \le 50$, quantity $= \bar p$):

      $$
      W(\bar p) = \int_0^{\bar p}\big[(100-s)-s\big]ds = \boxed{100\bar p - \bar p^2}
      $$

      $$
      PS(\bar p) = \bar p\cdot\bar p - C(\bar p) = \bar p^2 - \tfrac12\bar p^2 = \boxed{\tfrac12\bar p^2}
      $$

      $$
      CS(\bar p) = \int_0^{\bar p}(100-s)\,ds - \bar p\cdot\bar p = 100\bar p - \tfrac{\bar p^2}{2} - \bar p^2 = \boxed{100\bar p - \tfrac32\bar p^2}
      $$

      > [!example] Sanity check at $\bar p = 50$
      > $W = 100(50) - 50^2 = 2500$; $PS = \tfrac12(2500) = 1250$; $CS = 100(50) - \tfrac32(2500) = 5000 - 3750 = 1250$. All three reproduce 1b at the point where the ceiling stops binding.

      **Social welfare as $\bar p$ changes.** $W(\bar p) = 100\bar p - \bar p^2$ has $W'(\bar p) = 100 - 2\bar p > 0$ for all $\bar p < 50$. So welfare is **strictly increasing in $\bar p$** on the binding range: the tighter (lower) the ceiling, the lower the welfare. It is maximised at $\bar p = 50$, the competitive level, with $W = 2500$.

      > [!warning] A binding ceiling always destroys welfare here
      > Relative to the competitive equilibrium, **any** binding ceiling ($\bar p < 50$) gives $W(\bar p) < 2500$. The gap
      >
      > $$
      > 2500 - (100\bar p - \bar p^2) = (50 - \bar p)^2
      > $$
      >
      > is the **deadweight loss**, growing quadratically as the ceiling tightens.
    related_terms: ["price-ceiling", "social-welfare", "deadweight-loss", "efficient-rationing", "short-side-rule", "consumer-surplus", "firm-surplus", "marginal-cost"]
    source_doc_page: 1
  - id: "1d"
    text: |
      Same market and ceiling as 1c. Describe how the firm surplus changes as $\bar p$ changes. What happens to it with respect to its level under the competitive equilibrium?
    solution: |
      $PS(\bar p) = \tfrac12\bar p^2$ (derived in 1c) is increasing in $\bar p$. A binding ceiling ($\bar p < 50$) gives $PS < 1250$, so the firm is **always worse off**, and progressively so as the ceiling tightens. Both channels hurt the firm: it sells at a lower price *and* sells fewer units.
    related_terms: ["price-ceiling", "firm-surplus", "marginal-cost"]
    source_doc_page: 2
  - id: "1e"
    text: |
      Same market and ceiling as 1c. Describe how the consumer surplus changes as $\bar p$ changes. What happens to it with respect to its level under the competitive equilibrium?
    solution: |
      $CS(\bar p) = 100\bar p - \tfrac32\bar p^2$ (derived in 1c) is a **downward parabola**: $CS'(\bar p) = 100 - 3\bar p$, which is positive for $\bar p < \tfrac{100}{3}$ and negative for $\bar p > \tfrac{100}{3}$. So as the ceiling is lowered from 50, consumer surplus first **rises** (the lower price dominates), peaks at $\bar p = \tfrac{100}{3}$, then **falls** (severe rationing dominates).

      > [!tip] The two forces on consumers
      > A lower ceiling has a **price effect** (each unit bought is cheaper, good for consumers) and a **quantity/rationing effect** (fewer units are available, bad for consumers). For a mild ceiling the price effect wins; past $\bar p = \tfrac{100}{3}$ the shortage becomes so severe that the rationing effect takes over.
    related_terms: ["price-ceiling", "consumer-surplus", "efficient-rationing", "short-side-rule"]
    source_doc_page: 2
  - id: "1f"
    text: |
      Same market and ceiling as 1c. Does setting a maximal price necessarily benefit the consumer? What is the level of $\bar p$ which maximises the consumer surplus?
    solution: |
      **No, not necessarily.** The CS-maximising ceiling is found from $CS'(\bar p) = 100 - 3\bar p = 0$:

      $$
      \boxed{\bar p^{CS} = \frac{100}{3} \approx 33.3}
      $$

      $$
      CS_{\max} = 100\cdot\tfrac{100}{3} - \tfrac32\big(\tfrac{100}{3}\big)^2 = \tfrac{10000}{3} - \tfrac{5000}{3} = \frac{5000}{3} \approx 1666.7.
      $$

      This beats the competitive $CS = 1250$: a *moderate* ceiling does help consumers. But a ceiling set **too low** hurts them. Solving $CS(\bar p) = 1250$:

      $$
      100\bar p - \tfrac32\bar p^2 = 1250 \;\Longleftrightarrow\; 3\bar p^2 - 200\bar p + 2500 = 0 \;\Longrightarrow\; \bar p = \frac{200 \pm 100}{6} \in \Big\{\tfrac{100}{6},\, 50\Big\}.
      $$

      > [!warning] Tight ceilings backfire on consumers
      > Consumer surplus exceeds the competitive level **only** for $\bar p \in \big(\tfrac{100}{6},\, 50\big) \approx (16.7,\,50)$. For $\bar p < \tfrac{100}{6} \approx 16.7$, consumers are *worse off than with no ceiling at all*, despite the lower price, because the shortage is simply too severe. So a price ceiling does **not** necessarily benefit consumers.
    related_terms: ["price-ceiling", "consumer-surplus", "efficient-rationing", "deadweight-loss"]
    source_doc_page: 2
  - id: "2"
    text: |
      Consider the representative consumer and producer model introduced in class (in the section on partial equilibrium). Assume that $v(x)$ is a concave function and that $C(x)$ is a convex function. Denote by $x^*$ the equilibrium quantity.

      Show that the social welfare is increasing in quantity as long as the quantity is below $x^*$, and that it is decreasing as long as the quantity is above $x^*$.
    solution: |
      **Claim.** With $v$ concave, $C$ convex, and equilibrium $x^*$, social welfare $W(x) = v(x) - C(x)$ is **increasing for $x < x^*$** and **decreasing for $x > x^*$**.

      **Proof.**

      $$
      W'(x) = v'(x) - C'(x).
      $$

      The equilibrium is defined by marginal value = marginal cost: $v'(x^*) = C'(x^*)$, so $W'(x^*) = 0$.

      Now use the curvature assumptions:

      - $v$ concave $\Rightarrow$ $v'$ is **decreasing**;
      - $C$ convex $\Rightarrow$ $C'$ is **increasing**.

      Therefore $W'(x) = v'(x) - C'(x)$ is the difference of a decreasing and an increasing function, hence **strictly decreasing** in $x$. Combined with $W'(x^*) = 0$:

      $$
      x < x^* \;\Rightarrow\; W'(x) > 0 \ (\text{rising}); \qquad x > x^* \;\Rightarrow\; W'(x) < 0 \ (\text{falling}). \quad\blacksquare
      $$

      > [!info] This is the First Welfare Theorem (one market)
      > $W$ is concave with a unique peak at $x^*$, so the competitive quantity maximises social welfare. Below $x^*$ there are units whose value exceeds their cost ($v' > C'$) that are not being produced; above $x^*$ there are units costing more than they are worth ($v' < C'$). Only at $x^*$ is every worthwhile unit, and no wasteful unit, produced.

      > [!tip] Picture it as supply versus demand
      > $v'(x)$ is the (downward-sloping) inverse demand and $C'(x)$ the (upward-sloping) inverse supply. They cross once, at $x^*$. The vertical gap $v'(x)-C'(x)$, the marginal contribution to welfare, is positive left of the crossing and negative right of it.
    related_terms: ["social-welfare", "first-welfare-theorem", "partial-equilibrium", "marginal-cost", "quasilinear-utility"]
    source_doc_page: 2
  - id: "3a"
    text: |
      Consider the representative consumer and producer model introduced in class (in the section on partial equilibrium). Answer whether the following claims are true or false. If a claim is true, provide a logical argument that proves it. If it is not true, find an example that shows the opposite.

      Claim: government intervention is always bad for the overall social welfare.
    solution: |
      **TRUE.**

      By Question 2, $W(x)$ is strictly concave with its unique maximum at the competitive quantity $x^*$. Any intervention either leaves the equilibrium unchanged (non-binding, so no effect) or moves the traded quantity to some $x \ne x^*$ (binding), in which case $W(x) < W(x^*)$. So intervention can **never raise** welfare: at best it does nothing, otherwise it strictly lowers welfare.

      > [!warning] Scope of the result
      > This holds **because the market has no failures**: no externalities, no public goods, no market power. The First Welfare Theorem guarantees the free market is already efficient, leaving no room for a beneficial intervention. With a [[Market Failure]] (for example an [[Externalities|externality]], as in [[Lec_05-Production Economy & Externalities]]), a well-designed policy like a [[Pigouvian Tax]] *can* raise welfare, so the claim is special to this frictionless setting.
    related_terms: ["social-welfare", "first-welfare-theorem", "partial-equilibrium", "market-failure", "externalities", "pigouvian-tax"]
    source_doc_page: 2
  - id: "3b"
    text: |
      Same setting as 3a. Claim: government intervention is always bad for the firm surplus. True or false? Prove it or give a counterexample.
    solution: |
      **FALSE.**

      **Counterexample: a price floor.** Suppose the government sets a *minimum* price $\bar p > p^* = 50$ in the Question 1 market. Demand becomes the short side, so quantity traded is $q = 100 - \bar p$, and

      $$
      PS(\bar p) = \bar p\,q - \tfrac12 q^2 = \bar p(100-\bar p) - \tfrac12(100-\bar p)^2.
      $$

      Differentiating at $\bar p = 50$ (where $q = 50$) gives

      $$
      \frac{dPS}{d\bar p} = 2q - \bar p = 2(50) - 50 = 50 > 0.
      $$

      So nudging the floor *above* the competitive price **raises** firm surplus.

      > [!example] Numerical check: floor $\bar p = 55$
      > $q = 45$, $PS = 55(45) - \tfrac12(45)^2 = 2475 - 1012.5 = 1462.5 > 1250$. The firm is better off than at the competitive equilibrium. A production subsidy would do the same even more directly. Hence intervention is **not** always bad for the firm.
    related_terms: ["price-floor", "price-subsidy", "firm-surplus", "partial-equilibrium"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Same setting as 3a. Claim: government intervention is always bad for the consumer surplus. True or false? Prove it or give a counterexample.
    solution: |
      **FALSE.**

      This is exactly Question 1f: the price ceiling $\bar p = \tfrac{100}{3}$ raises consumer surplus to $\tfrac{5000}{3} \approx 1666.7 > 1250$. A moderate ceiling makes consumers strictly better off, so the claim is false.

      > [!info] Reconciling the three claims
      > Total welfare is a fixed pie maximised by the free market (3a), but interventions **redistribute** it: a ceiling can shift surplus toward consumers (3c false), a floor toward firms (3b false). What no intervention can do is make the *whole pie* bigger. That is the content of 3a.
    related_terms: ["price-ceiling", "consumer-surplus", "social-welfare"]
    source_doc_page: 2
  - id: "4a"
    text: |
      Consider the representative consumer and producer model introduced in class (in the section on partial equilibrium). Assume the following change occurs in the market: the firm's technology changes such that its marginal cost is lower than before for every quantity $x$. Answer whether the following claims are true or false. If a claim is true, provide a logical argument that proves it. If it is not true, find an example that shows the opposite.

      Claim: the equilibrium price decreases and the equilibrium quantity increases, with respect to the equilibrium price and quantity before the change.
    solution: |
      **TRUE.**

      > [!info] The clean comparative-statics tool
      > Define $g(x) = v'(x) - C'(x)$ (old) and $\tilde g(x) = v'(x) - \tilde C'(x)$ (new). Both are **decreasing** ($v'$ down, $MC$ up), each crossing zero once, at $x^*$ and $\tilde x^*$ respectively. Since $\tilde C' < C'$, we have $\tilde g(x) > g(x)$ everywhere; in particular $\tilde g(x^*) > g(x^*) = 0$. A decreasing function that is still positive at $x^*$ must cross zero **to the right**, so $\tilde x^* > x^*$.

      From the tool above, $\tilde x^* > x^*$. Price is read off the unchanged inverse demand $p = v'(x)$, which is decreasing, so $\tilde p^* = v'(\tilde x^*) < v'(x^*) = p^*$. **Quantity up, price down.**

      > [!tip] Supply-shift intuition
      > Lower marginal cost shifts the supply curve down and to the right along a fixed demand curve. The new intersection sits lower and to the right: the textbook effect of a cost-reducing innovation.
    related_terms: ["marginal-cost", "partial-equilibrium", "cost-function"]
    source_doc_page: 2
  - id: "4b"
    text: |
      Same change as 4a. Claim: the overall social welfare after the change increases with respect to the overall social welfare before the change. True or false?
    solution: |
      **TRUE.**

      By [[Revealed Preference|revealed-preference]] logic: the new technology is cheaper at *every* quantity, so even producing the **old** quantity $x^*$ yields higher welfare,

      $$
      \tilde W(x^*) = v(x^*) - \tilde C(x^*) > v(x^*) - C(x^*) = W(x^*),
      $$

      and re-optimising can only help further: $\tilde W(\tilde x^*) \ge \tilde W(x^*) > W(x^*)$. **Welfare strictly rises.**
    related_terms: ["social-welfare", "revealed-preference", "cost-function"]
    source_doc_page: 3
  - id: "4c"
    text: |
      Same change as 4a. Claim: the consumer surplus increases after the change with respect to the equilibrium price and quantity before the change. True or false?
    solution: |
      **TRUE.**

      Consumer surplus is the area under the (unchanged) demand curve above the price,

      $$
      CS(p) = \int_0^{x^d(p)} v'(s)\,ds - p\,x^d(p),
      $$

      which is **decreasing in $p$**. Since the price falls (4a), $CS$ rises. **Consumers gain.**
    related_terms: ["consumer-surplus", "partial-equilibrium"]
    source_doc_page: 3
  - id: "4d"
    text: |
      Same change as 4a. Claim: the firm surplus increases after the change with respect to the equilibrium price and quantity before the change. True or false?
    solution: |
      **FALSE.**

      Two forces oppose each other: lower cost helps the firm, but the resulting lower price hurts it. The net effect is **ambiguous**, and firm surplus can *fall*.

      > [!example] Counterexample: rotating $MC$ down
      > Use the Question 1 demand $p = 100 - x$, original $MC = x$ ($PS = 1250$). Suppose the new technology has $\tilde C'(x) = \tfrac12 x$, strictly lower marginal cost for every $x>0$. New equilibrium: $100 - x = \tfrac12 x \Rightarrow \tilde x^* = \tfrac{200}{3} \approx 66.7$, $\tilde p^* = \tfrac{100}{3} \approx 33.3$.
      >
      > $$
      > \widetilde{PS} = \tilde p^*\,\tilde x^* - \int_0^{\tilde x^*}\tfrac12 s\,ds = \tfrac{100}{3}\cdot\tfrac{200}{3} - \tfrac14\Big(\tfrac{200}{3}\Big)^2 = \tfrac{20000}{9} - \tfrac{10000}{9} = \tfrac{10000}{9} \approx 1111.
      > $$
      >
      > Firm surplus **fell** from $1250$ to $\approx 1111$, even though costs dropped at every quantity. The price collapse outweighed the cost saving. Hence the claim is false.

      > [!warning] "Cheaper to produce" does not mean "more profitable"
      > In a competitive market the firm is a price-taker, and a big enough cost-driven price drop can erode profit. Whether the firm gains depends on *how* $MC$ shifts (a parallel downward shift tends to help; a steep rotation can hurt) and on demand elasticity, not on the mere fact that costs went down.
    related_terms: ["firm-surplus", "marginal-cost", "partial-equilibrium"]
    source_doc_page: 3
---

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]*
