---
title: "Sample Exam 3 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Exam 3 (practice)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
source_doc: /papers/micro/sample-exam-3.docx
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - bundling
  - adverse-selection
  - moral-hazard
  - price-discrimination
  - cournot-competition
  - stackelberg-model
  - bertrand-competition
  - double-marginalization
  - two-part-tariff
  - lerner-index
  - merger-analysis
aliases:
  - Sample Exam 3 Solutions
  - Micro 3 Practice Exam 3
  - PP03 Micro
subject: micro
in_scope: true
questions:
  - id: q1
    title: "Q1 — Bundling vs. separate selling"
    text: |
      A monopolist sells two products, $X$ and $Y$, with **zero** production costs initially. There are **40** Type-1 consumers, **40** Type-2, and **20** Type-3. Willingness-to-pay:

      | Type | $X$ | $Y$ |
      |---|---|---|
      | 1 (×40) | 100 | 20 |
      | 2 (×40) | 20 | 100 |
      | 3 (×20) | 60 | 60 |

      Now assume each unit of $X$ and each unit of $Y$ costs the firm **\$30** to produce. Which statement is correct?
    options:
      - label: "A"
        text: |
          Separate selling yields a profit of 8,000 and bundling yields 12,000.
        correct: false
        why: |
          Both magnitudes are too high — separate selling makes **5,600** and bundling **6,000**.
      - label: "B"
        text: |
          Separate selling yields a profit of 5,600 and bundling yields 6,000.
        correct: true
        why: |
          Each good's best price is its high value, so separate $= 2\times2{,}800 = 5{,}600$. Every type values the bundle $X+Y$ at exactly 120 (cost 60), so bundling $= (120-60)\times100 = 6{,}000$.
      - label: "C"
        text: |
          Separate selling yields a profit of 6,000 and bundling yields 5,600.
        correct: false
        why: |
          The figures are swapped — bundling (6,000) beats separate selling (5,600), not the reverse.
      - label: "D"
        text: |
          Separate selling and bundling both yield a profit of 6,000.
        correct: false
        why: |
          Separate selling only reaches 5,600; bundling strictly beats it at 6,000.
    solution: |
      > [!success] Answer — **B.** Separate **5,600**, bundle **6,000**
      > Bundling beats separate selling here because every consumer values the *bundle* at exactly the same \$120.

      **Separate selling** ($MC = 30$ each). Walk each good's WTP ladder; profit $= (p-30)\times(\text{buyers})$.

      > [!example] Product $X$ (WTPs 100, 20, 60)
      > - $p=100$: only Type 1 buys (40) → $(100-30)\cdot 40 = \mathbf{2{,}800}$
      > - $p=60$: Types 1 & 3 buy (60) → $(60-30)\cdot 60 = 1{,}800$
      > - $p=20$: all buy (100) → $(20-30)\cdot 100 = -1{,}000$
      >
      > Best $X$ price $=100$, profit **2,800**. By symmetry product $Y$ also makes **2,800**. Separate total $= \mathbf{5{,}600}$.

      **Pure [[_Micro Concepts#Bundling|bundling]].** The bundle reservation value is the *sum* of each type's WTP:

      $$v^{\text{bundle}}_1 = 100+20 = 120,\quad v^{\text{bundle}}_2 = 20+100 = 120,\quad v^{\text{bundle}}_3 = 60+60 = 120.$$

      All 100 consumers value the bundle at **exactly 120**. Bundle cost $=30+30=60$, so price it at 120 and sell to everyone:

      $$\pi^{\text{bundle}} = (120-60)\cdot 100 = \mathbf{6{,}000} \;>\; 5{,}600.$$

      ![[PP03_q1_bundling.png|680]]

      > [!tip] Why bundling wins — it kills WTP dispersion
      > Separately, valuations are *spread out* (100 vs 20), so any single price leaves surplus on the table or excludes buyers. Bundling **collapses the dispersion**: the negatively-correlated tastes (love $X$ / love $Y$) average out to a common \$120, letting one price extract the whole market. This is the classic Stigler bundling result.

  - id: q2
    title: "Q2 — Deductibles, moral hazard & adverse selection"
    text: |
      Consider the statement: *"Insurance with a deductible may reduce the moral hazard problem but worsen the adverse selection problem."* Which best explains it?

    options:
      - label: "A"
        text: |
          A deductible increases medical consumption and therefore increases moral hazard.
        correct: false
        why: |
          Backwards — a deductible makes patients bear part of the cost, so consumption **falls** and moral hazard is **reduced**.
      - label: "B"
        text: |
          A deductible reduces excessive utilisation of medical services but may discourage high-risk individuals from purchasing insurance.
        correct: true
        why: |
          Cost-sharing curbs over-use (moral hazard ↓), but makes coverage unattractive to high-expected-cost people, who are exactly the ones a pooling insurer wants to keep (adverse selection ↑).
      - label: "C"
        text: |
          A deductible eliminates both moral hazard and adverse selection.
        correct: false
        why: |
          Overclaim — a deductible *mitigates* moral hazard, it doesn't *eliminate* it, and it can *worsen* adverse selection.
      - label: "D"
        text: |
          A deductible has no effect on either.
        correct: false
        why: |
          False — a deductible changes incentives on both margins.
    solution: |
      > [!success] Answer — **B**
      > A deductible makes the insured **bear part of the cost** of care, curbing over-use ([[_Micro Concepts#Moral Hazard|moral hazard]]); but it makes coverage **less attractive to high-expected-cost people**, who are exactly the ones a pooling insurer most wants to keep — worsening [[_Micro Concepts#Adverse Selection|adverse selection]].

      > [!example] The two effects, separated
      > - **Moral hazard ↓** — with no deductible the marginal price of care is ~0, so the insured consume up to where their *private* marginal value hits 0 (well past $MC$). A deductible restores a positive marginal price, pulling consumption back toward the efficient level.
      > - **Adverse selection ↑** — a deductible is most costly *in expectation* to those who expect to claim a lot (the high risks). They are the most likely to walk away, so the surviving pool tilts toward… the high risks who stay, or the cheap policy attracts only low risks — either way the screening on risk type worsens relative to full coverage.

      > [!warning] Why the distractors fail
      > **A** has the moral-hazard sign backwards (a deductible *reduces* consumption). **C** overclaims — deductibles *mitigate*, they don't *eliminate*. **D** is simply false; a deductible changes incentives on both margins.

  - id: q3
    title: "Q3 — Low switching ⇒ weak benefit-package distortion?"
    text: |
      Consider: *"The fact that there are very few switches between health funds in Israel suggests that adverse selection through distortion of the benefit package is not a significant problem."* Best evaluation?

    options:
      - label: "A"
        text: |
          The statement is necessarily true because low switching rates prove that all health funds provide identical services.
        correct: false
        why: |
          Overclaims certainty — low switching doesn't *prove* funds are identical.
      - label: "B"
        text: |
          The statement is necessarily false because adverse selection always exists in health insurance markets.
        correct: false
        why: |
          Overclaims the opposite certainty — "always exists" isn't established by this evidence.
      - label: "C"
        text: |
          The statement is generally reasonable because if benefit-package distortions were important, one would expect larger differences in enrolment patterns and more switching between funds.
        correct: true
        why: |
          If package distortion mattered, risk groups would sort and switch more; little switching is consistent (indirect) evidence the distortion is weak.
      - label: "D"
        text: |
          The statement is false because adverse selection can occur only when switching costs are zero.
        correct: false
        why: |
          Invents a knife-edge — zero switching cost is not required for adverse selection.
    solution: |
      > [!success] Answer — **C**
      > Low switching is **consistent with** funds not aggressively differentiating their benefit packages to attract or repel particular risk groups. If they *were* distorting packages to cream-skim, you'd see risk groups sorting across funds and **more** switching. So the statement is reasonable — but it's **indirect** evidence, not proof.

      > [!tip] The logic of the inference
      > [[_Micro Concepts#Adverse Selection|Adverse-selection]]-driven package distortion would leave a *fingerprint*: enrolment patterns that differ systematically by risk type, and movement as people re-sort. Absence of that fingerprint (little switching) is evidence — soft, not conclusive — that the distortion isn't large.

      > [!warning] Why A, B, D overreach
      > **A** ("necessarily true… proves identical services") and **B** ("necessarily false… always exists") both claim *certainty* an empirical pattern can't deliver. **D** invents a knife-edge condition (zero switching costs) that isn't required for adverse selection.

  - id: q4
    title: "Q4 — Price discrimination with a fixed cost"
    text: |
      A monopolist sells $Q$ in two markets. Demands: $p_1 = 22 - q_1$ and $p_2 = 8 - q_2$. Marginal cost $MC = 2$, fixed cost $F = 99$ (paid only if output is positive). The firm may charge different prices across markets. Which statement is correct?

    options:
      - label: "A"
        text: |
          Consumer surplus is lower when the monopolist cannot price discriminate.
        correct: true
        why: |
          With PD both markets are served, $CS = 54.5$; without PD the firm drops Market 2 and $CS = 50$. Discrimination is what makes the small market worth serving.
      - label: "B"
        text: |
          Total quantity sold is higher when it cannot price discriminate.
        correct: false
        why: |
          Reversed — total $Q$ is 13 with PD ($10+3$) versus 10 without.
      - label: "C"
        text: |
          Quantity in Market 2 is higher when it cannot price discriminate.
        correct: false
        why: |
          Without PD, Market 2 gets **0** (dropped); with PD it gets 3.
      - label: "D"
        text: |
          Price in Market 1 is lower when it cannot price discriminate.
        correct: false
        why: |
          Market 1 is identical in both regimes — $p_1 = 12$ either way.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: false
        why: |
          A is correct, so E is wrong.
    solution: |
      > [!success] Answer — **A**
      > This is the counter-intuitive case where [[_Micro Concepts#Price Discrimination|price discrimination]] *raises* total consumer surplus, because discriminating is what makes the small market worth serving at all.

      **With price discrimination** — set $MR_i = MC = 2$ in each market:

      > [!example] Segment optima
      > - Market 1: $MR_1 = 22 - 2q_1 = 2 \Rightarrow q_1 = 10,\; p_1 = 12$.
      > - Market 2: $MR_2 = 8 - 2q_2 = 2 \Rightarrow q_2 = 3,\; p_2 = 5$.
      >
      > $$CS_D = \tfrac12(22-12)(10) + \tfrac12(8-5)(3) = 50 + 4.5 = \mathbf{54.5}.$$
      > Profit $= (12-2)10 + (5-2)3 - 99 = 100 + 9 - 99 = 10 > 0$, so the firm operates and serves **both** markets.

      **Without price discrimination** — one uniform price. Serving Market 2 requires $p\le 8$, but at any $p\le 8$ the firm must flood Market 1 too, and $(p-2)\big[(22-p)+(8-p)\big]$ peaks at $p=8.5$ — *above* Market 2's choke price. So the optimum **drops Market 2** and prices as a Market-1 monopolist: $p = 12,\; q_1 = 10,\; q_2 = 0$.

      $$CS_U = \tfrac12(22-12)(10) = \mathbf{50}.$$

      Since $CS_D = 54.5 > CS_U = 50$, **consumer surplus is lower without discrimination** → **A**.

      ![[PP03_q4_pd_fixed_cost.png|680]]

      > [!warning] Why the others fail
      > Market 1 is identical in both regimes ($p_1 = 12,\,q_1 = 10$) — so **D** (price 1 lower) and **B** (total $Q$ higher: $13$ vs $10$ — it's *lower* without PD) are wrong, and **C** (Market 2 higher without PD: it's $0$ vs $3$) is wrong. The fixed cost $F=99$ is the trick: it's what makes Market 2 unprofitable to reach under a single price.

  - id: q5
    title: "Q5 — Cournot merger & consumer surplus"
    text: |
      Two identical Cournot firms, each with marginal cost $k$, face demand $p = 100 - Q$. If they merge into a monopoly, marginal cost falls to **zero**. Consumer surplus increases after the merger as long as approximately:

    options:
      - label: "A"
        text: |
          $k < 25$
        correct: false
        why: |
          Backwards — consumer surplus rises when $k > 25$ (high pre-merger cost ⇒ the cost cut to 0 expands output a lot).
      - label: "B"
        text: |
          $9k > 20$
        correct: false
        why: |
          Not the condition; the threshold is $k > 25$.
      - label: "C"
        text: |
          $k < 28$
        correct: false
        why: |
          Wrong threshold and wrong direction — it's $k > 25$.
      - label: "D"
        text: |
          $k < 32$
        correct: false
        why: |
          Wrong threshold and wrong direction — it's $k > 25$.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: true
        why: |
          The condition is $k > 25$, which none of A–D state.
    solution: |
      > [!success] Answer — **E**
      > The true condition is $k > 25$ (high pre-merger cost ⇒ the merger's cost saving outweighs the loss of competition). None of A–D state that, so **E**.

      **Before** — [[_Micro Concepts#Cournot Competition|Cournot]] total output and surplus (with $p = 100 - Q$, so $CS = \tfrac12 Q^2$):

      $$Q_C = \frac{2(100-k)}{3}, \qquad CS_C = \tfrac12 Q_C^2 = \frac{2(100-k)^2}{9}.$$

      **After** — monopoly with $MC = 0$: $\;120-2Q$… here $100 - 2Q = 0 \Rightarrow Q_M = 50,\; CS_M = \tfrac12(50)^2 = 1{,}250.$

      > [!example] Solve the inequality
      > $$1250 > \frac{2(100-k)^2}{9} \;\Rightarrow\; (100-k)^2 < 5625 \;\Rightarrow\; 100-k < 75 \;\Rightarrow\; \boxed{k > 25}.$$

      ![[PP03_q5_cournot_merger_cs.png|680]]

      > [!tip] The economics of the threshold
      > A merger does two opposing things to consumers: **−** it removes a competitor (output ↓), but **+** here it cuts marginal cost to 0 (output ↑). When the pre-merger cost $k$ is **large** ($k>25$), the efficiency gain is big, so consumers win. When $k$ is small, there's little to gain and the loss of competition dominates. Answer A ($k<25$) has the inequality exactly backwards.

  - id: q6
    title: "Q6 — The Lerner Index"
    text: |
      The Lerner Index is $L = \dfrac{p - MC}{p}$. Which statements are correct?

      1. If a firm's marginal cost decreases, its Lerner Index decreases.
      2. Lower demand elasticity (in absolute value) increases the Lerner Index.
      3. The Lerner Index of a competitive firm is zero.

    options:
      - label: "A"
        text: |
          Only statement 1 is correct.
        correct: false
        why: |
          Statement 1 is the **false** one — at the optimum $L=-1/\varepsilon$, set by elasticity, not by $MC$.
      - label: "B"
        text: |
          Only statements 2 and 3 are correct.
        correct: true
        why: |
          (2) $L=-1/\varepsilon$ rises as $|\varepsilon|$ falls; (3) competition gives $p=MC$, so $L=0$. Statement 1 is false.
      - label: "C"
        text: |
          Only statements 1 and 2 are correct.
        correct: false
        why: |
          Includes the false statement 1.
      - label: "D"
        text: |
          All statements are correct.
        correct: false
        why: |
          Statement 1 is false, so not all.
      - label: "E"
        text: |
          None of the answers is correct.
        correct: false
        why: |
          B is correct, so not E.
    solution: |
      > [!success] Answer — **B.** Only statements 2 and 3.

      > [!example] Statement by statement
      > - **(1) False.** At the monopoly optimum $L = -1/\varepsilon$, pinned by the [[_Micro Concepts#Elasticity|elasticity]] at the chosen point — a fall in $MC$ doesn't *mechanically* reduce market power. (With constant-elasticity demand $L$ is literally independent of $MC$.)
      > - **(2) True.** $L = -\dfrac{1}{\varepsilon}$, so a **smaller $|\varepsilon|$** (more inelastic demand) ⇒ **larger** $L$. Less elastic ⇒ more pricing power.
      > - **(3) True.** Under [[_Micro Concepts#Perfect Competition|perfect competition]] $p = MC$, so $L = 0$.

      > [!tip] One identity to remember
      > $$\boxed{L = \frac{p-MC}{p} = -\frac{1}{\varepsilon}}$$
      > Everything in this question falls straight out of it. See [[_Micro Concepts#Lerner Index|Lerner Index]].

  - id: o1a
    title: "Open 1a — Cournot equilibrium"
    text: |
      Two identical firms compete in quantities (Cournot), each with marginal cost $c$ *(the paper writes "$TC = \tfrac12 Q_C^2$", but see the note in the solution)*. Demand: $P(Q) = 120 - Q$, $Q = q_1 + q_2$.

      **(a)** Find the Cournot equilibrium as a function of $c$.
    solution: |
      > [!warning] A contradiction in the question — and how the official key resolves it
      > The prompt says "marginal cost $c$ **(i.e. $TC = \tfrac12 Q_C^2$)**", but $TC=\tfrac12 Q^2$ implies $MC = Q$, **not** a constant $c$. These can't both hold. The **official solution treats marginal cost as the constant $c$** and ignores the quadratic-cost aside, so that's what we follow throughout Open Q1. If your instructor intends convex costs $MC=Q$, the algebra changes.

      Firm $i$ maximises $\pi_i = (120 - q_i - q_j - c)\,q_i$.

      > [!example] FOC and symmetry
      > $$\frac{\partial \pi_i}{\partial q_i} = 120 - c - 2q_i - q_j = 0.$$
      > Symmetry $q_i = q_j = q$: $\;120 - c - 3q = 0$.

      > [!success] Answer (a)
      > $$\boxed{q_1^* = q_2^* = \frac{120-c}{3}}, \qquad \boxed{Q_C = \frac{2(120-c)}{3}}.$$

  - id: o1b
    title: "Open 1b — Merger approved on an output test"
    text: |
      **(b)** The two firms merge into a monopolist whose marginal cost falls to **zero**. The antitrust authority approves only if the merged firm's output **exceeds** the aggregate pre-merger Cournot output. Find the **maximum** $c$ for which this holds. Show your calculations.
    solution: |
      Merged monopolist with $MC=0$: $\;MR = 120 - 2Q = 0 \Rightarrow Q_M = 60$.

      > [!example] Approval condition
      > $$Q_M > Q_C \;\Rightarrow\; 60 > \frac{2(120-c)}{3} \;\Rightarrow\; 180 > 240 - 2c \;\Rightarrow\; 2c > 60.$$

      > [!success] Answer (b)
      > The merger raises output (and is approved) iff $\boxed{c > 30}$.
      > Intuition: only when pre-merger cost is high enough ($c>30$) does the cost cut to 0 expand output past what two Cournot rivals already produced.

  - id: o1c
    title: "Open 1c — Merger approved on a profit test"
    text: |
      **(c)** Instead, the authority approves only if the **profit** of the merged firm exceeds the aggregate Cournot profit of the two firms. Find the minimum condition on $c$. Show your calculations.
    solution: |
      > [!example] Compare profits
      > Each Cournot firm earns $\pi_i^C = \left(\frac{120-c}{3}\right)^2$, so aggregate $\Pi^C = \dfrac{2(120-c)^2}{9}$.
      > Merged monopoly ($MC=0$): $Q_M = 60,\; P_M = 60,\; \Pi^M = 60\cdot 60 = 3{,}600$.
      > $$3600 > \frac{2(120-c)^2}{9} \;\Rightarrow\; 16{,}200 > (120-c)^2 \;\Rightarrow\; 120-c < 90\sqrt2.$$

      > [!success] Answer (c)
      > $$\boxed{c > 120 - 90\sqrt2 \approx -7.28}.$$
      > Since marginal cost is non-negative ($c \ge 0$), this is **always satisfied** — on a profit test the merger is *always* approved. (A merged monopoly with zero cost is enormously more profitable than two competing firms with cost $c$.)

  - id: o1d
    title: "Open 1d — Bertrand benchmark"
    text: |
      **(d)** How would the answer to **(b)** change if, before the merger, the firms competed in **prices** (Bertrand) rather than quantities? Explain.
    solution: |
      Under homogeneous-good [[_Micro Concepts#Bertrand Competition|Bertrand]] competition, price is driven to cost: $P = c$, so pre-merger output is the competitive $Q_B = 120 - c$.

      > [!example] New approval condition
      > $$Q_M > Q_B \;\Rightarrow\; 60 > 120 - c \;\Rightarrow\; \boxed{c > 60}.$$

      > [!success] Answer (d)
      > The threshold tightens from $c>30$ to $\boxed{c>60}$. Bertrand competition already produces a **larger** pre-merger output than Cournot, so the merged firm must clear a higher bar to be output-expanding — fewer mergers pass.

  - id: o2a
    title: "Open 2a — Integrated monopoly"
    text: |
      Inverse demand $P = 120 - Q$; constant $MC = c$ with $0 < c < 120$. *(Let $a \equiv 120 - c$.)*

      **Part A.** A single integrated monopolist serves the market. Find the monopoly quantity, price and profit as functions of $c$.
    solution: |
      > [!example] Monopoly optimum
      > $\pi = (a - Q)Q$ with $a = 120-c$; FOC $a - 2Q = 0$.

      > [!success] Answer — Part A
      > $$\boxed{Q_M = \frac{120-c}{2}}, \quad \boxed{P_M = 60 + \frac{c}{2}}, \quad \boxed{\pi_M = \frac{(120-c)^2}{4} = \frac{a^2}{4}}.$$
      > This is the efficient single-markup benchmark every later part is compared against. See [[_Micro Concepts#Monopoly|Monopoly]].

  - id: o2b
    title: "Open 2b — Stackelberg competition"
    text: |
      **Part B.** Two identical firms compete in quantities; Firm 1 moves first and commits, Firm 2 observes and responds. Find each firm's quantity, total output, market price and each firm's profit.
    solution: |
      > [!example] Backward induction
      > Follower's reaction: $q_2(q_1) = \dfrac{a - q_1}{2}$. Substituting into the leader's profit gives $\pi_1 = \dfrac{(a-q_1)}{2}q_1$, maximised at $q_1 = \dfrac{a}{2}$; then $q_2 = \dfrac{a}{4}$.

      > [!success] Answer — Part B (see [[_Micro Concepts#Stackelberg Model|Stackelberg]])
      > $$q_1^S = \frac{120-c}{2},\quad q_2^S = \frac{120-c}{4},\quad \boxed{Q_S = \frac{3(120-c)}{4}},\quad P_S = 30 + \frac{3c}{4}.$$
      > $$\pi_1^S = \frac{(120-c)^2}{8},\quad \pi_2^S = \frac{(120-c)^2}{16},\quad \Pi_S = \frac{3(120-c)^2}{16}.$$

      > [!tip] First-mover advantage
      > The leader produces **twice** the follower ($\tfrac{a}{2}$ vs $\tfrac{a}{4}$) and earns **double** the profit ($\tfrac{a^2}{8}$ vs $\tfrac{a^2}{16}$) — commitment to a large quantity forces the follower to shrink.

  - id: o2c
    title: "Open 2c — Vertical separation & double marginalisation"
    text: |
      **Part C.** One upstream producer ($MC = c$) sets a wholesale price $w$; one downstream retailer observes $w$ and chooses quantity. Find $w$, quantity, final price, and each party's profit.
    solution: |
      > [!example] Two stacked markups
      > Retailer: $\max_Q (120 - Q - w)Q \Rightarrow Q(w) = \dfrac{120-w}{2}$.
      > Producer: $\max_w (w-c)\dfrac{120-w}{2} \Rightarrow w^* = \dfrac{120+c}{2}$.

      > [!success] Answer — Part C
      > $$\boxed{w^* = \frac{120+c}{2}}, \quad Q_V = \frac{120-c}{4}, \quad P_V = 90 + \frac{c}{4},$$
      > $$\pi_U = \frac{(120-c)^2}{8}, \quad \pi_R = \frac{(120-c)^2}{16}, \quad \Pi_V = \frac{3(120-c)^2}{16}.$$

      > [!warning] [[_Micro Concepts#Double Marginalization|Double marginalisation]]
      > Output collapses to $\tfrac{a}{4}$ — **half** the integrated-monopoly quantity $\tfrac{a}{2}$ — and the final price is the highest of any structure. Two independent markups (producer's, then retailer's) stack on top of each other, a [[_Micro Concepts#Pricing Externality|pricing externality]] each firm imposes on the other.

  - id: o2d
    title: "Open 2d — Ranking the three structures"
    text: |
      **Part D.** Compare integrated monopoly, Stackelberg, and vertical separation. Rank them by total quantity, final price, and total industry profit, and explain the intuition.
    solution: |
      > [!success] Answer — Part D ($a = 120 - c$)
      >
      > | Structure | Quantity | Price | Total profit |
      > |---|---|---|---|
      > | Monopoly | $a/2$ | $60 + c/2$ | $a^2/4$ |
      > | Stackelberg | $3a/4$ | $30 + 3c/4$ | $3a^2/16$ |
      > | Vertical sep. | $a/4$ | $90 + c/4$ | $3a^2/16$ |
      >
      > **Quantity:** $\;Q_S > Q_M > Q_V$.  **Price:** $\;P_S < P_M < P_V$.  **Profit:** $\;\Pi_M > \Pi_S = \Pi_V$.

      ![[PP03_open2_structure_ranking.png|720]]

      *The three structures, ranked. Stackelberg pushes the most output (lowest price); vertical separation the least (highest price); integrated monopoly sits between on quantity but earns the most profit.*

      > [!tip] Interactive — drag the marginal cost
      > All four structures on one demand curve (Cournot added for reference). Each dot is that structure's $(Q, p)$; move $c$ and watch them slide along the demand curve.

      ```graph
      type: oligopoly-structures
      ```

      > [!tip] One sentence each
      > - **Stackelberg** — strategic rivalry: the leader floods the market, total output is highest, price lowest.
      > - **Vertical separation** — double marginalisation: two stacked markups choke output, price highest.
      > - **Integrated monopoly** — one optimal markup: avoids *both* rivalry and stacking, so it **maximises total profit**.
      >
      > Note the coincidence $\Pi_S = \Pi_V = \tfrac{3a^2}{16}$ — equal profit, but reached through completely different quantity/price outcomes.

  - id: o2e
    title: "Open 2e — Two-part tariff fixes double marginalisation"
    text: |
      **Part E.** The producer offers a two-part tariff $(w, F)$ — per-unit wholesale price $w$ plus fixed franchise fee $F$. What $w$ maximises total industry profit? What outcome results? What range of $F$ makes both parties agree? Compare to Part A.
    solution: |
      > [!success] Answer — set $\boxed{w = c}$
      > Pricing the wholesale unit at the producer's true marginal cost **eliminates** the upstream markup, so the retailer faces cost $c$ and chooses the integrated-monopoly quantity $Q = \tfrac{120-c}{2} = \tfrac{a}{2}$, price $P = 60 + \tfrac{c}{2}$. Total industry profit is restored to the first-best $\tfrac{a^2}{4}$. See [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]].

      With $w=c$ the per-unit margin is zero, so the producer earns only the fee $F$; the retailer's operating profit before $F$ is $\tfrac{a^2}{4}$.

      > [!example] Participation range for $F$
      > - **Retailer** participates if it keeps at least its Part-C outside option $\tfrac{a^2}{16}$: $\;\tfrac{a^2}{4} - F \ge \tfrac{a^2}{16} \Rightarrow F \le \tfrac{3a^2}{16}$.
      > - **Producer** prefers this to its Part-C profit $\tfrac{a^2}{8}$: $\;F \ge \tfrac{a^2}{8}$.
      >
      > $$\boxed{\frac{(120-c)^2}{8} \;\le\; F \;\le\; \frac{3(120-c)^2}{16}}.$$

      > [!tip] The lesson
      > The two-part tariff lets the producer recover monopoly profit through the **fixed fee** while keeping the **marginal** price efficient — exactly reproducing the Part-A integrated outcome. Double marginalisation is a *contracting* failure, not a technological one.

  - id: o2f
    title: "Open 2f — Merger from a Stackelberg benchmark"
    text: |
      **Part F.** Before the merger the market is the **Stackelberg** equilibrium of Part B. A merger creates a monopolist whose marginal cost falls to **zero**. The authority approves only if the merged firm produces more than total Stackelberg output. Find the range of $c$ for approval. How does the answer change under pre-merger **Bertrand** competition?
    solution: |
      Merged monopolist with $MC = 0$: $Q_{\text{merger}} = 60$.

      > [!example] Stackelberg benchmark
      > $$60 > Q_S = \frac{3(120-c)}{4} \;\Rightarrow\; 240 > 360 - 3c \;\Rightarrow\; 3c > 120.$$

      > [!success] Answer — Part F
      > **Vs. Stackelberg:** approve iff $\boxed{c > 40}$.
      > **Vs. Bertrand:** pre-merger $P=c$, output $Q_B = 120 - c$; approval needs $60 > 120 - c \Rightarrow \boxed{c > 60}$.

      > [!tip] Stricter benchmarks need bigger efficiencies
      > The more competitive the pre-merger market, the more output it already produces, so the harder it is for a merger to be output-expanding. Ranking the thresholds: Cournot $c>30$ (Open Q1) $<$ Stackelberg $c>40$ $<$ Bertrand $c>60$.
---

## 📋 The setup (read this first)

> [!info] One paper, the whole second half of Micro 3
> Six MC questions and two long open questions sweep monopoly pricing, insurance, and **oligopoly/vertical structure**. The framing that unlocks it:
> 1. **Q1, Q4** — monopoly price tools: [[_Micro Concepts#Bundling|bundling]] and [[_Micro Concepts#Price Discrimination|price discrimination]]. Always start from **MR = MC** in each channel.
> 2. **Q2, Q3** — [[_Micro Concepts#Adverse Selection|adverse selection]] vs [[_Micro Concepts#Moral Hazard|moral hazard]]: deductibles trade one off against the other; low switching is *soft* evidence on distortion.
> 3. **Q5, Open Q1, Open Q2-F** — **merger analysis**: compare merged-monopoly output/profit against the pre-merger benchmark, and the benchmark matters (Cournot < Stackelberg < Bertrand).
> 4. **Open Q2-A→E** — one demand curve, four market structures: monopoly, [[_Micro Concepts#Stackelberg Model|Stackelberg]], [[_Micro Concepts#Double Marginalization|vertical separation]], and the [[_Micro Concepts#Two-Part Tariff|two-part tariff]] that restores efficiency.

> [!warning] No official answer key was distributed with the question paper
> An official **solutions** document *was* provided, and **every number in this note has been checked against it and re-derived programmatically** (all pass). The one genuine ambiguity — Open Q1's contradictory cost line — is flagged in that question and resolved the way the official key does (constant $MC = c$).

<!--questions-->

---

## 🎯 One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **Q1** | Bundling | Bundle WTP all = 120 | **B** — separate 5,600, bundle 6,000 |
| **Q2** | Insurance | Deductible: MH ↓, AS ↑ | **B** |
| **Q3** | Adverse selection | Low switching = soft evidence | **C** |
| **Q4** | Price discrimination | PD opens Market 2 ($F=99$) | **A** — CS lower without PD (54.5 → 50) |
| **Q5** | Cournot merger | $CS$ rises iff $k>25$ | **E** — condition not listed |
| **Q6** | Lerner index | $L = -1/\varepsilon$ | **B** — statements 2 & 3 |
| **Open 1a** | Cournot | $MR=MC$, symmetry | $q = (120-c)/3$ |
| **Open 1b** | Merger (output) | $60 > 2(120-c)/3$ | $c > 30$ |
| **Open 1c** | Merger (profit) | $3600 > 2(120-c)^2/9$ | $c > 120-90\sqrt2$ (always, $c\ge0$) |
| **Open 1d** | Bertrand benchmark | $60 > 120-c$ | $c > 60$ |
| **Open 2a** | Monopoly | $MR=MC$ | $Q=\tfrac{a}{2},\,P=60+\tfrac{c}{2},\,\pi=\tfrac{a^2}{4}$ |
| **Open 2b** | Stackelberg | Backward induction | $Q_S=\tfrac{3a}{4},\,\Pi_S=\tfrac{3a^2}{16}$ |
| **Open 2c** | Vertical sep. | Double marginalisation | $Q_V=\tfrac{a}{4},\,P_V=90+\tfrac{c}{4}$ |
| **Open 2d** | Ranking | — | $Q_S>Q_M>Q_V$; $\Pi_M>\Pi_S=\Pi_V$ |
| **Open 2e** | Two-part tariff | $w=c$, fee $F$ | restores monopoly; $\tfrac{a^2}{8}\le F\le\tfrac{3a^2}{16}$ |
| **Open 2f** | Merger (Stackelberg) | $60 > 3(120-c)/4$ | $c>40$; Bertrand $c>60$ |

> [!tip] Exam reflexes
> - **Bundling** → bundle WTP = sum of values; negatively-correlated tastes ⇒ bundling beats separate selling.
> - **Deductible** → reduces moral hazard, worsens adverse selection (makes coverage unattractive to high risks).
> - **Price discrimination + fixed cost** → PD can *raise* welfare by making a small market worth serving.
> - **Merger output test** → compare merged $Q$ to the pre-merger benchmark; threshold rises Cournot → Stackelberg → Bertrand.
> - **Vertical separation** → double marginalisation halves output; a two-part tariff with $w=MC$ restores the integrated outcome.
> - **Lerner index** → $L = (p-MC)/p = -1/\varepsilon$; everything follows from this identity.

---

## 📎 Related Notes

- [[Topic 1 - Asymmetric Information]] — adverse selection, moral hazard, deductibles (Q2–Q3)
- [[Topic 2 - Equilibrium in Different Market Structures]] — bundling, price discrimination, monopoly (Q1, Q4, Open Q2-A)
- [[Topic 4 - Price Competition with Complementary Goods]] — Cournot, Stackelberg, Bertrand, vertical relations (Q5, Open Q1–Q2)
- Sister papers: [[PP_01-Sample Exam 1]] · [[PP_02-Sample Exam 2]]
- Concepts: [[_Micro Concepts#Double Marginalization|Double Marginalization]] · [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]] · [[_Micro Concepts#Stackelberg Model|Stackelberg Model]] · [[_Micro Concepts#Lerner Index|Lerner Index]]
- Hub: [[Microeconomics]]
