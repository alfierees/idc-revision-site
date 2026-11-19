---
title: "PS7"
subject: micro-ii
source_doc: /papers/micro-ii/ps-7.pdf
tags:
  - micro-economics-ii
  - exchange-economy
  - walrasian-equilibrium
  - general-equilibrium
  - core
  - contract-curve
  - individual-rationality
  - corner-endowment
  - price-indeterminacy
  - social-welfare
  - cobb-douglas
  - edgeworth-box
ai_drafted: true
questions:
  - id: "1"
    text: |
      Consider an arbitrary exchange economy (according to the model that we showed in class).

      Show that an equilibrium allocation must be in the set of allocations on the contract curve that are better for both agents than the initial endowment.
    solution: |
      > [!info] Claim
      > Every Walrasian equilibrium allocation is on the [[Contract Curve]] **and** at least as good as the endowment for both agents, i.e. it lies in the [[Core]]. We prove the two properties separately.

      **Step 1: the equilibrium is individually rational.** Let $(p_x^*,p_y^*)$ support the equilibrium and let agent $i$'s bundle $(x_i^*,y_i^*)$ be the utility-maximising choice on the budget line

      $$
      p_x^* x_i + p_y^* y_i \le p_x^*\omega_i^X + p_y^*\omega_i^Y \equiv M_i.
      $$

      The endowment costs exactly $M_i$, so it is always inside the agent's own budget set. Since $(x_i^*,y_i^*)$ maximises $U_i$ over that set, it is at least as good as the endowment:

      $$
      U_i(x_i^*,y_i^*) \ge U_i(\omega_i^X,\omega_i^Y) \quad \text{for both } i.
      $$

      This is [[Individual Rationality]]. In plain words: in a free market agents only trade if the new bundle makes them at least as happy as the one they started with, otherwise they simply keep their endowment.

      **Step 2: the equilibrium is Pareto efficient (the [[First Welfare Theorem]]).** The answer key simply cites the theorem: any competitive equilibrium allocation is [[Pareto Efficiency|Pareto efficient]], and the contract curve is by definition the set of all Pareto efficient allocations in the box, so the equilibrium is on it.

      > [!example] If asked to prove the theorem rather than cite it
      > Suppose some feasible allocation $(\tilde x_i,\tilde y_i)$ [[Pareto Dominance|Pareto dominates]] the equilibrium.
      > - The agent who is strictly better off did not choose it although it is preferred, so it was unaffordable: $p_x^*\tilde x_i + p_y^*\tilde y_i > M_i$.
      > - An agent who is weakly better off must find it cost at least $M_i$ (by [[Local Nonsatiation|non-satiation]]).
      >
      > Summing over both agents gives $p_x^*(\tilde x_1+\tilde x_2) + p_y^*(\tilde y_1+\tilde y_2) > M_1+M_2 = p_x^* X + p_y^* Y$. But feasibility says the left side equals $p_x^* X + p_y^* Y$, a contradiction.

      **Conclusion.** Efficiency (on the contract curve) plus individual rationality is exactly the definition of the core:

      $$
      \text{Walrasian equilibrium} \Rightarrow \text{Pareto efficient and individually rational} \Rightarrow \text{in the core.}
      $$

      > [!warning] The converse is false
      > The core is generally a whole segment of the contract curve. The competitive equilibrium picks one point of it (the one the price line through the endowment selects). Equilibrium is a subset of the core, not the reverse.
    related_terms: ["core", "contract-curve", "first-welfare-theorem", "individual-rationality", "pareto-efficiency", "pareto-dominance", "local-nonsatiation", "walrasian-equilibrium", "exchange-economy"]
    source_doc_page: 1
  - id: "2"
    text: |
      Consider an arbitrary exchange economy (according to the model that we showed in class).

      Show that if the initial endowment is the point $0_1$ on the Edgeworth box, then every pair of prices constitutes an equilibrium and that the equilibrium allocation is $0_1$.
    solution: |
      Here $0_1$ is the corner where agent 1 owns nothing and agent 2 owns everything: $\omega_1=(0,0)$ and $\omega_2=(X,Y)$.

      **Agent 1 is penniless.** At any prices his income is

      $$
      M_1 = p_x\cdot 0 + p_y\cdot 0 = 0,
      $$

      so the only affordable bundle is the origin. His demand is $(0,0)$ for every price vector.

      **Agent 2 demands everything.** Agent 2 maximises $U_2$ subject to his budget line and the box constraints $0\le x_2\le X$, $0\le y_2\le Y$ (you cannot consume more of a good than exists).

      - Market clearing already forces the outcome: someone has to absorb the whole supply, and only agent 2 can.
      - To see that $(X,Y)$ is genuinely his optimum, note that any other feasible bundle has weakly less of both goods and strictly less of at least one. By monotonicity $(X,Y)$ is strictly preferred, and it is affordable because it is his endowment. This holds whatever the slope of the price line.

      $$
      x_2^d = X, \quad y_2^d = Y \quad \text{for all } p_x,p_y>0.
      $$

      **Markets clear at $0_1$ for every price.**

      $$
      x_1^d + x_2^d = 0 + X = X, \qquad y_1^d + y_2^d = 0 + Y = Y.
      $$

      So every price pair is an equilibrium and the allocation is $0_1$ itself: no trade occurs.

      > [!tip] Economic meaning: price indeterminacy
      > Agent 1 has nothing to offer and no money to buy with. Agent 2 already holds everything and, being non-satiated, parts with nothing. The market never has to "find" a price, so every price is consistent with the forced no-trade outcome. With an interior endowment only one price ratio clears the market; the corner kills that uniqueness because one agent's excess demand is zero at all prices.

      > [!warning] Common pitfall
      > The proof needs the box (feasibility) constraint. Without "you can't consume more than exists", agent 2's demand at $(X,Y)$ would not be optimal at arbitrary prices.
    related_terms: ["price-indeterminacy", "edgeworth-box", "walrasian-equilibrium", "exchange-economy", "excess-demand", "local-nonsatiation"]
    source_doc_page: 1
  - id: "3a"
    text: |
      Consider the following exchange economy: $U_1(x_1,y_1)=x_1^{a}\cdot y_1$ and $U_2(x_2,y_2)=x_2^{b}\cdot y_2$, where $\omega_1^X=20$, $\omega_1^Y=20$, $\omega_2^X=20$ and $\omega_2^Y=20$.

      **(a)** Find the equilibrium prices and the equilibrium allocation as a function of the parameters $a$ and $b$.
    solution: |
      Totals are $X=Y=40$. Normalise $p_y=1$ (good $y$ is the [[Numeraire]]) and write $p\equiv p_x/p_y$, so each agent's income is $M_i = 20p+20 = 20(p+1)$.

      **Budget-share demands.** For Cobb-Douglas $U=x^{\alpha}y^{\beta}$ the demand for $x$ is $\frac{\alpha}{\alpha+\beta}\cdot\frac{M}{p_x}$. Here the exponent on $y$ is 1, so

      $$
      x_1 = \frac{a}{a+1}\cdot\frac{20(p+1)}{p}, \qquad y_1 = \frac{1}{a+1}\cdot 20(p+1),
      $$

      $$
      x_2 = \frac{b}{b+1}\cdot\frac{20(p+1)}{p}, \qquad y_2 = \frac{1}{b+1}\cdot 20(p+1).
      $$

      **Clear the $x$ market**, $x_1+x_2=40$ (by [[Walras Law]] the $y$ market then clears too). Let $S \equiv \frac{a}{a+1}+\frac{b}{b+1}$:

      $$
      \frac{20(p+1)}{p}\,S = 40 \;\Rightarrow\; \frac{p+1}{p} = \frac{2}{S} \;\Rightarrow\; p = \frac{S}{2-S}.
      $$

      Over the common denominator $(a+1)(b+1)$:

      $$
      S = \frac{2ab+a+b}{(a+1)(b+1)}, \qquad 2-S = \frac{a+b+2}{(a+1)(b+1)}.
      $$

      > [!success] Equilibrium price
      >
      > $$
      > \frac{p_x^*}{p_y^*} = \frac{2ab+a+b}{a+b+2}
      > $$

      **Back out the allocation** using $p+1 = \frac{2(a+1)(b+1)}{a+b+2}$:

      $$
      x_1^* = \frac{40\,a(b+1)}{2ab+a+b}, \qquad y_1^* = \frac{40(b+1)}{a+b+2},
      $$

      $$
      x_2^* = \frac{40\,b(a+1)}{2ab+a+b}, \qquad y_2^* = \frac{40(a+1)}{a+b+2}.
      $$

      > [!example] Sanity checks
      > - Markets clear: $x_1^*+x_2^* = 40$ and $y_1^*+y_2^* = 40$.
      > - Symmetric case $a=b$: $p^*=a$ and $x_1^*=y_1^*=20$. The price equals the common $MRS=a\cdot\frac{20}{20}$ at the endowment, and no trade occurs.

      > [!warning] Common pitfall
      > For $U=x^a y$ the budget shares are $\frac{a}{a+1}$ and $\frac{1}{a+1}$ (the exponent on $y$ is 1), not $\frac{a}{a+b}$. Here $b$ is agent 2's parameter, not agent 1's exponent on $y$.
    related_terms: ["walrasian-equilibrium", "exchange-economy", "numeraire", "walras-law", "mrs", "general-equilibrium"]
    source_doc_page: 1
  - id: "3b"
    text: |
      Same economy as in part (a): $U_1=x_1^{a}y_1$, $U_2=x_2^{b}y_2$, all endowments $(20,20)$.

      **(b)** How does the consumption of $X$ and $Y$ of each agent change with respect to the agent's initial endowment, as a function of the relationship between $a$ and $b$?
    solution: |
      Compare each equilibrium demand with the endowment level 20. For agent 1's $x$:

      $$
      x_1^* > 20 \iff \frac{40a(b+1)}{2ab+a+b} > 20 \iff 2a(b+1) > 2ab+a+b \iff a>b.
      $$

      For agent 1's $y$:

      $$
      y_1^* > 20 \iff \frac{40(b+1)}{a+b+2} > 20 \iff 2(b+1) > a+b+2 \iff b>a.
      $$

      | Relationship | Agent 1 | Agent 2 | Trade |
      |---|---|---|---|
      | $a>b$ | buys $x$, sells $y$: $x_1>20$, $y_1<20$ | sells $x$, buys $y$: $x_2<20$, $y_2>20$ | $x$ flows 2 to 1, $y$ flows 1 to 2 |
      | $a=b$ | $x_1=y_1=20$ | $x_2=y_2=20$ | none |
      | $a<b$ | sells $x$, buys $y$: $x_1<20$, $y_1>20$ | buys $x$, sells $y$: $x_2>20$, $y_2<20$ | $x$ flows 1 to 2, $y$ flows 2 to 1 |

      > [!tip] Marked rule
      > The agent with the higher preference for $X$ is a net buyer of $X$ and a net seller of $Y$. The equilibrium price adjusts until both [[MRS]] are equalised.
    related_terms: ["walrasian-equilibrium", "mrs", "exchange-economy", "contract-curve"]
    source_doc_page: 2
  - id: "3c"
    text: |
      Same economy as in parts (a) and (b).

      **(c)** Provide an economic explanation for your result.
    solution: |
      The exponents $a,b$ are the weights each agent places on good $X$ relative to $Y$. At the shared endowment $(20,20)$ agent $i$'s marginal rate of substitution is $MRS_i = (\text{exponent on } x)\cdot\frac{y}{x} = (\text{exponent})\cdot 1$, so at the start agent 1 values $x$ like $a$ and agent 2 like $b$.

      If agent 1 cares more about $X$ ($a>b$), he is willing to give up more $Y$ to get $X$. In equilibrium he trades away some of his $Y$ endowment to agent 2 in exchange for agent 2's $X$. Essentially, **the market allocates goods to those who value them relatively more**, until the two MRS are equalised on the contract curve.

      Because the endowments are identical, the sole engine of trade is the preference gap $a-b$. When $a=b$ there are no gains from trade and the allocation stays at $(20,20)$.
    related_terms: ["mrs", "contract-curve", "walrasian-equilibrium", "exchange-economy"]
    source_doc_page: 2
  - id: "4a"
    text: |
      Consider the following exchange economy: $U_1(x_1,y_1)=x_1\cdot y_1$ and $U_2(x_2,y_2)=x_2\cdot y_2$ (note that both agents have the same utility function), where $\omega_1^X=15$, $\omega_1^Y=15$, $\omega_2^X=15$ and $\omega_2^Y=15$.

      **(a)** Assume that there is a social planner whose welfare can be represented as

      $$
      W((x_1,y_1),(x_2,y_2)) = U_1(x_1,y_1)\cdot U_2(x_2,y_2).
      $$

      Find the allocation that maximises the social planner's welfare. (Hint: present $x_2$ as a function of $x_1$ and $y_2$ as a function of $y_1$, input them in the social welfare, then compare the vector of the welfare derivatives to the zero vector and use the symmetry of the first order conditions to derive your result.)
    solution: |
      Totals are $X=Y=30$. Substitute feasibility, $x_2=30-x_1$ and $y_2=30-y_1$, so welfare depends on $(x_1,y_1)$ alone:

      $$
      W(x_1,y_1) = x_1 y_1 (30-x_1)(30-y_1) = \big[x_1(30-x_1)\big]\cdot\big[y_1(30-y_1)\big].
      $$

      The factors separate, so each good can be maximised on its own (the answer key does exactly this). The first order conditions are

      $$
      \frac{\partial W}{\partial x_1} = y_1(30-y_1)\,(30-2x_1) = 0 \;\Rightarrow\; x_1 = 15,
      $$

      $$
      \frac{\partial W}{\partial y_1} = x_1(30-x_1)\,(30-2y_1) = 0 \;\Rightarrow\; y_1 = 15.
      $$

      Each derivative is a positive lump times a single bracket, and the bracket is the derivative of the parabola $t(30-t)$, which peaks at its midpoint $t=15$.

      > [!success] Planner's optimum
      >
      > $$
      > (x_1,y_1)=(15,15), \quad (x_2,y_2)=(15,15), \quad W^*=15^4=50{,}625.
      > $$

      The Nash-product welfare rewards balance, so it halves each good between the two identical agents.
    related_terms: ["social-planner", "social-welfare", "pareto-efficiency", "exchange-economy"]
    source_doc_page: 2
  - id: "4b"
    text: |
      Same economy as in part (a): $U_1=x_1y_1$, $U_2=x_2y_2$, all endowments $(15,15)$.

      **(b)** Find the equilibrium allocation in the economy.
    solution: |
      Both agents have identical preferences and identical endowments, so they are indistinguishable. There is no reason to trade: their [[MRS]] at the endowment point are already equal. The equilibrium is the endowment itself, $(15,15)$ and $(15,15)$.

      The supporting price ratio is the common MRS at the endowment:

      $$
      \frac{p_x^*}{p_y^*} = MRS\Big|_{(15,15)} = \frac{y}{x} = \frac{15}{15} = 1.
      $$

      > [!success] Equilibrium
      > $(15,15)\,/\,(15,15)$ with $p_x^*/p_y^*=1$.
    related_terms: ["walrasian-equilibrium", "mrs", "exchange-economy", "general-equilibrium"]
    source_doc_page: 2
  - id: "4c"
    text: |
      Same economy as in parts (a) and (b).

      **(c)** How does the equilibrium allocation correspond with the optimal allocation of the social planner? Provide an explanation for your result.
    solution: |
      They coincide: the competitive equilibrium and the planner's optimum are both $(15,15)/(15,15)$.

      > [!example] Two criteria, one point
      > - **Equilibrium is efficient** (First Welfare Theorem): $(15,15)$ lies on the contract curve $y_1=x_1$ (setting $MRS_1=MRS_2$ gives $\frac{y_1}{x_1}=\frac{30-y_1}{30-x_1}$, so $y_1=x_1$). It is one of many Pareto efficient points.
      > - **The planner picks the egalitarian efficient point.** $W=U_1U_2$ is symmetric in the two agents and they are identical, so its maximiser treats them equally: the midpoint of the diagonal, exactly $(15,15)$.

      Because the problem is perfectly symmetric, the "fairest" Pareto efficient point is the one right in the middle, and equal endowments make the market land there too.

      > [!warning] Don't over-generalise
      > This coincidence holds only because tastes and endowments are both identical. Break either symmetry (different exponents as in Q3, or skewed endowments as in PS 6 Q6) and the competitive equilibrium generally lands on a different point of the contract curve from the Nash-product optimum. Efficiency is shared; the distribution is not.
    related_terms: ["first-welfare-theorem", "contract-curve", "social-planner", "social-welfare", "pareto-efficiency", "walrasian-equilibrium"]
    source_doc_page: 2
---

*Related: [[Lec_04-Theory of the Firm, Partial & General Equilibrium]], [[Lec_05-Production Economy & Externalities]]*
