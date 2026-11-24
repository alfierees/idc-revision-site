---
title: "Term A 2026 (Moed A) — Official Solutions"
label: "2026 Moed A"
topics: "Bundling, insurance, first-degree price discrimination, Cournot collusion, double marginalisation, Cournot/Stackelberg/Bertrand"
type: past-paper
status: worked-solution
exam: "2026 Term A (Moed A)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Yosi Ganel
source_doc: /papers/micro/micro-3-term-a-2026-solutions.pdf
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - official-solution
  - bundling
  - moral-hazard
  - actuarially-fair-premium
  - first-degree-price-discrimination
  - cournot-competition
  - cartel
  - double-marginalization
  - stackelberg-model
  - bertrand-competition
aliases:
  - Micro 3 Term A 2026
  - Micro 2026 Moed A
  - PP04 Micro
subject: micro
in_scope: true
questions:
  - id: q1
    title: "Q1 — Bundling: selling the two products separately"
    text: |
      A monopolist sells two products, $X$ and $Y$, with **zero** production cost. There are **40** consumers of Type 1 (WTP: $X = 100$, $Y = 20$), **40** of Type 2 ($X = 20$, $Y = 100$), and **20** of Type 3 ($X = 60$, $Y = 60$).

      Selling the products **separately**, which prices maximise profit?

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **B.** $P_X = 100,\ P_Y = 100$ (total profit 8,000)

      Costs are zero, so revenue is profit. For each product, test every candidate price (a consumer's WTP) and count the buyers.

      > [!example] Product $X$
      > - $P = 100$: 40 buyers → $4{,}000$
      > - $P = 60$: 60 buyers → $3{,}600$
      > - $P = 20$: 100 buyers → $2{,}000$

      The best price for $X$ is **100** (revenue 4,000). Product $Y$ is symmetric (Type 2 mirrors Type 1), so its best price is also **100**.

      $$\text{Total profit} = 4{,}000 + 4{,}000 = 8{,}000$$
    related_terms: ["bundling", "monopoly"]
  - id: q2
    title: "Q2 — Bundling: selling the products as a bundle"
    text: |
      Same setup as Q1. Selling the products **only as a bundle**, which bundle price maximises profit?

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **C.** $P_B = 120$ (profit 12,000)

      Each type's reservation value for the bundle is the sum of its two willingness-to-pay values:

      $$\text{Type 1: } 100+20 = 120 \quad;\quad \text{Type 2: } 20+100 = 120 \quad;\quad \text{Type 3: } 60+60 = 120$$

      All three types value the bundle at exactly **120**, so bundling removes the heterogeneity. Set $P_B = 120$ and all 100 consumers buy:

      $$\text{Revenue} = 120 \times 100 = 12{,}000 \;>\; 8{,}000 \text{ from separate selling}$$

      > [!tip] Link to Q1
      > Bundling beats separate selling here (12,000 vs 8,000) because the negatively correlated tastes average out to the same bundle value for everyone. See [[_Micro Concepts#Bundling|Bundling]].
    related_terms: ["bundling"]
  - id: q3
    title: "Q3 — Insurance with an observable illness type"
    text: |
      A risk-averse individual is healthy ($H$), mildly ill ($M$), or severely ill ($S$), with $\Pr(H) = 1/2$, $\Pr(M) = 1/3$, $\Pr(S) = 1/6$. If untreated, the loss is **300** (mild) and **900** (severe); treatment costs **600** and eliminates the loss.

      If the insurer **can** distinguish $M$ from $S$, describe the full-insurance contract the individual chooses and its actuarially fair premium.

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **B.** Compensation 300 (mild) and 600 (severe); premium $= 200$

      First find the loss the individual actually bears in each state, choosing treatment optimally:

      > [!example] Optimal treatment decision
      > - Mild: $300$ (untreated) $< 600$ (treat) → do **not** treat, loss $= 300$
      > - Severe: $600$ (treat) $< 900$ (untreated) → **treat**, loss $= 600$

      A risk-averse person fully insures these losses. The actuarially fair premium is the expected compensation:

      $$\pi = \tfrac{1}{3}(300) + \tfrac{1}{6}(600) = 100 + 100 = 200$$

      See [[_Micro Concepts#Actuarially Fair Premium|Actuarially Fair Premium]] and [[_Micro Concepts#Risk Aversion|Risk Aversion]].
    related_terms: ["risk-aversion", "actuarially-fair-premium"]
  - id: q4
    title: "Q4 — Indemnity paid only if treated"
    text: |
      Same data as Q3. The insurer **cannot** distinguish illnesses but pays an indemnity of **100 if and only if** the insured is treated. Which statement is correct?

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **C.** The insurance does not change the treatment decision, so there is no moral hazard

      Check whether the indemnity flips either treatment decision:

      > [!example] Does the indemnity change behaviour?
      > - Mild: treating nets $600 - 100 = 500$ vs. a loss of $300$ if untreated → **still do not treat**
      > - Severe: treating nets $500$ vs. a loss of $900$ if untreated → **still treat**

      The indemnity of 100 is too small to change either choice, so behaviour is unchanged and **no [[_Micro Concepts#Moral Hazard|moral hazard]]** is created.
    related_terms: ["moral-hazard", "risk-aversion"]
  - id: q5
    title: "Q5 — First-degree price discrimination with weekly passes"
    text: |
      "Rav Kosher" sports club: marginal cost per visit $= 40$, no fixed cost. **100** older women each visit 3 times per week if the single-visit price does not exceed 50; **100** younger women each have weekly demand $X = 6 - P/20$.

      With first-degree price discrimination via weekly passes, what is the pass price for each type?

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **A.** Older woman: **150**; younger woman: **320**

      First-degree price discrimination extracts each type's full willingness to pay for the **efficient** number of visits (where marginal value $= MC = 40$).

      **Older women.** They want 3 visits, each worth 50 (all efficient, since $50 > 40$):

      $$\text{Pass} = 3 \times 50 = 150$$

      **Younger women.** Inverse demand is $P = 120 - 20X$. Efficient visits: $120 - 20X = 40 \Rightarrow X = 4$. Charge the whole area under demand up to 4:

      $$\text{Pass} = \int_0^4 (120 - 20X)\,dX = 480 - 160 = 320$$

      See [[_Micro Concepts#First-Degree Price Discrimination|First-Degree Price Discrimination]].
    related_terms: ["first-degree-price-discrimination", "price-discrimination", "consumer-surplus"]
  - id: q6
    title: "Q6 — Cournot with asymmetric costs, then collusion"
    text: |
      Demand $P = 100 - X$. Firm 1: $TC_1 = 10X_1 + 50$; Firm 2: $TC_2 = 40X_2$. The firms compete à la Cournot and may then cooperate to raise joint profit. By how much does **optimal cooperation** increase their profit?

      *(Multiple choice. The solutions document shows only the correct option, not the other options.)*
    solution: |
      > [!success] Answer — **B.** 325

      **Cournot equilibrium.** Setting $MR_i = MC_i$ for each firm:

      $$\text{Firm 1: } 90 - 2X_1 - X_2 = 0 \quad;\quad \text{Firm 2: } 60 - X_1 - 2X_2 = 0$$

      $$\Rightarrow X_1 = 40,\ X_2 = 10,\ X = 50,\ P = 50$$

      $$\pi_1 = (50-10)\cdot 40 - 50 = 1{,}550 \quad;\quad \pi_2 = (50-40)\cdot 10 = 100 \quad;\quad \text{joint} = 1{,}650$$

      **Optimal collusion.** The cartel routes all output through the low-cost firm 1 ($MC = 10$); firm 2 ($MC = 40$) produces nothing, since marginal revenue at the joint optimum is only 10.

      $$MR = 100 - 2X = 10 \Rightarrow X = 45,\ P = 55,\ \pi = (55-10)\cdot 45 - 50 = 1{,}975$$

      $$\text{Increase} = 1{,}975 - 1{,}650 = 325$$

      See [[_Micro Concepts#Cournot Competition|Cournot Competition]] and [[_Micro Concepts#Cartel|Cartel]].
    related_terms: ["cournot-competition", "cartel", "oligopoly"]
  - id: q7a
    title: "Q7.1 — Eran and the influencer: integrated monopolist"
    text: |
      **Setup (Q7).** Eran is a monopolist attorney facing demand $P = 100 - Q$ with marginal cost $MC = 20$. In each part, $K$ is the most Eran would pay for a one-time investment that lowers his marginal cost to $0$, that is, $K$ equals the resulting rise in Eran's own profit.

      **7.1 — Investment by an integrated monopolist.** Find $K$.

      *(The solutions document gives each part only as a heading; the wording of the original question is not reproduced.)*
    solution: |
      Compare the monopoly profit at the old and the new cost:

      $$MC = 20:\; MR = 100 - 2Q = 20 \Rightarrow Q = 40,\ P = 60,\ \pi = 40 \cdot 40 = 1{,}600$$

      $$MC = 0:\; MR = 100 - 2Q = 0 \Rightarrow Q = 50,\ P = 50,\ \pi = 50 \cdot 50 = 2{,}500$$

      > [!success] Answer (7.1)
      > $$K = 2{,}500 - 1{,}600 = \mathbf{900}$$
    related_terms: ["monopoly"]
  - id: q7b
    title: "Q7.2 — One influencer; Eran bears the marginal cost"
    text: |
      **7.2 — One influencer; Eran bears the marginal cost.** Eran sets a fee $W$ per client; the influencer then sets the price and keeps $P - W$ per client. Find $K$.

      *(The solutions document gives each part only as a heading and a short description; the wording of the original question is not reproduced.)*
    solution: |
      Solve backward. The influencer takes $W$ as given and chooses the price:

      $$\max_Q\ (P - W)Q = (100 - Q - W)Q \;\Rightarrow\; Q = \frac{100 - W}{2}$$

      Eran anticipates this and picks $W$ (he bears the marginal cost 20):

      $$\max_W\ (W - 20)\,Q = \frac{(W-20)(100-W)}{2} \;\Rightarrow\; W = 60,\ Q = 20,\ \pi = 40 \cdot 20 = 800$$

      With $MC = 0$:

      $$\max_W\ W \cdot \frac{100 - W}{2} \;\Rightarrow\; W = 50,\ Q = 25,\ \pi = 50 \cdot 25 = 1{,}250$$

      Double marginalisation cuts output to 20 (vs. 40 when integrated).

      > [!success] Answer (7.2)
      > $$K = 1{,}250 - 800 = \mathbf{450}$$

      See [[_Micro Concepts#Double Marginalization|Double Marginalization]].
    related_terms: ["double-marginalization", "vertical-relations"]
  - id: q7c
    title: "Q7.3 — One influencer; the influencer bears the marginal cost"
    text: |
      **7.3 — One influencer; the influencer bears the marginal cost.** Same structure as 7.2, but now the influencer, not Eran, bears the marginal cost of 20 per client. Find $K$.

      *(The solutions document gives each part only as a heading and a short description; the wording of the original question is not reproduced.)*
    solution: |
      The influencer now faces the cost $W + 20$ per client:

      $$\max_Q\ (P - W - 20)Q \;\Rightarrow\; Q = \frac{80 - W}{2}$$

      $$\text{Eran: } \max_W\ W \cdot \frac{80 - W}{2} \;\Rightarrow\; W = 40,\ Q = 20,\ \pi = 40 \cdot 20 = 800$$

      With the investment: $W = 50$, $Q = 25$, $\pi = 1{,}250$.

      Eran earns 800 without the investment and 1,250 with it, exactly as in 7.2.

      > [!success] Answer (7.3)
      > $$K = \mathbf{450}, \text{ unchanged from 7.2}$$

      > [!tip] Cost incidence is irrelevant
      > A constant per-client cost only shifts the fee $W$. It changes neither Eran's profit nor his willingness to pay.
    related_terms: ["double-marginalization", "vertical-relations"]
  - id: q7d
    title: "Q7.4 — Two influencers competing à la Cournot"
    text: |
      **7.4 — Two influencers competing à la Cournot** (each bears the marginal cost of 20). Find $K$.

      *(The solutions document gives each part only as a heading and a short description; the wording of the original question is not reproduced.)*
    solution: |
      Each influencer $i$ solves $\max_{q_i}\ (100 - q_i - q_j - W - 20)\,q_i$. In the symmetric equilibrium:

      $$80 - W - 3q = 0 \;\Rightarrow\; q = \frac{80 - W}{3},\qquad Q = \frac{2(80 - W)}{3}$$

      $$\text{Eran: } \max_W\ W \cdot \frac{2(80 - W)}{3} \;\Rightarrow\; W = 40,\ Q = \frac{80}{3},\ \pi = \frac{3{,}200}{3} \approx 1{,}066.7$$

      With $MC = 0$:

      $$Q = \frac{2(100 - W)}{3},\quad W = 50,\ Q = \frac{100}{3},\ \pi = \frac{5{,}000}{3} \approx 1{,}666.7$$

      Downstream competition raises the value of the cost cut (600 > 450), but it stays below the integrated benefit of 900.

      > [!success] Answer (7.4)
      > $$K = \frac{5{,}000}{3} - \frac{3{,}200}{3} = \frac{1{,}800}{3} = \mathbf{600}$$
    related_terms: ["double-marginalization", "cournot-competition", "vertical-relations"]
  - id: q8a
    title: "Q8.1 — Monopoly"
    text: |
      **Setup (Q8).** Market demand is $P = 40 - Q$, where $Q$ is aggregate quantity. Each firm has constant marginal cost $k$ (with $k < 40$). Give all answers as functions of $k$.

      **8.1 — Monopoly.** Find the monopoly quantity and price.

      *(The solutions document gives each part only as a heading; the wording of the original question is not reproduced.)*
    solution: |
      $$MR = 40 - 2Q = k \;\Rightarrow\; Q = \frac{40 - k}{2},\quad P = \frac{40 + k}{2}$$

      $$\pi = (P - k)Q = \left(\frac{40 - k}{2}\right)^2 = \frac{(40-k)^2}{4}$$

      > [!success] Answer (8.1)
      > $$Q = \frac{40 - k}{2}, \qquad P = \frac{40 + k}{2}$$
    related_terms: ["monopoly"]
  - id: q8b
    title: "Q8.2 — Cournot duopoly"
    text: |
      **8.2 — Cournot duopoly.** Find each firm's quantity, the total quantity and the price.

      *(The solutions document gives each part only as a heading; the wording of the original question is not reproduced.)*
    solution: |
      Each firm $i$ sets $MR_i = MC$:

      $$40 - 2q_i - q_j - k = 0 \;\Rightarrow\; (\text{symmetric})\; q = \frac{40 - k}{3}$$

      $$Q = \frac{2(40 - k)}{3},\quad P = \frac{40 + 2k}{3},\quad \text{each } \pi = \frac{(40 - k)^2}{9},\quad \text{industry} = \frac{2(40 - k)^2}{9}$$

      > [!success] Answer (8.2)
      > $$q = \frac{40 - k}{3} \text{ each}, \quad Q = \frac{2(40 - k)}{3}, \quad P = \frac{40 + 2k}{3}$$

      See [[_Micro Concepts#Cournot Competition|Cournot Competition]].
    related_terms: ["cournot-competition", "best-response-function"]
  - id: q8c
    title: "Q8.3 — Stackelberg (firm 1 leads): the change in industry profit"
    text: |
      **8.3 — Stackelberg (firm 1 leads): the change in industry profit.** How does industry profit change relative to the Cournot duopoly of 8.2?

      *(The solutions document gives each part only as a heading; the comparison with Cournot is read from its working.)*
    solution: |
      The follower's reaction is $q_2 = \dfrac{40 - k - q_1}{2}$. The leader maximises profit anticipating it:

      $$\pi_1 = \frac{q_1(40 - k - q_1)}{2} \;\Rightarrow\; q_1 = \frac{40 - k}{2},\quad q_2 = \frac{40 - k}{4}$$

      $$Q = \frac{3(40 - k)}{4},\quad P = \frac{40 + 3k}{4}$$

      $$\pi_L = \frac{(40 - k)^2}{8},\quad \pi_F = \frac{(40 - k)^2}{16},\quad \text{industry} = \frac{3(40 - k)^2}{16}$$

      Compare with the Cournot industry profit $\dfrac{2(40 - k)^2}{9}$:

      $$\Delta = \frac{3(40 - k)^2}{16} - \frac{2(40 - k)^2}{9} = \frac{27 - 32}{144}\,(40 - k)^2 = -\frac{5(40 - k)^2}{144}$$

      > [!success] Answer (8.3)
      > Industry profit **falls** by $\dfrac{5(40 - k)^2}{144}$. The leader floods the market, so total output rises and price falls.

      See [[_Micro Concepts#Stackelberg Model|Stackelberg Model]].
    related_terms: ["stackelberg-model", "cournot-competition", "best-response-function"]
  - id: q8d
    title: "Q8.4 — Bertrand"
    text: |
      **8.4 — Bertrand.** Find the price, quantity and profits when the firms compete in prices.

      *(The solutions document gives each part only as a heading; the wording of the original question is not reproduced.)*
    solution: |
      With a homogeneous good and identical constant marginal cost, price competition drives price down to marginal cost (the Bertrand paradox):

      $$P = k,\quad Q = 40 - k \;\left(\text{each } \tfrac{40 - k}{2}\right),\quad \pi = 0$$

      > [!success] Answer (8.4)
      > $P = k$, $Q = 40 - k$, profits $= 0$. Compared with Cournot: lower price, higher output, zero profit.

      See [[_Micro Concepts#Bertrand Competition|Bertrand Competition]].
    related_terms: ["bertrand-competition"]
---

# Term A 2026 (Moed A) — Official Solutions

> Part of: [[Microeconomics]]
> **Micro 3, Term A 2026**, Yosi Ganel, Reichman University. Six multiple-choice questions and two open questions. Download the official solutions: [Term A 2026 solutions (PDF)](/papers/micro/micro-3-term-a-2026-solutions.pdf).

> [!success] Official solutions
> Every answer and every number on this page is taken from the lecturer's **official solutions document** and re-checked by hand (all figures reproduce). The steps are the official working, reformatted for the site.

> [!warning] Only the solutions document was available
> The document gives the question stems and the correct option for each multiple-choice question, but **not the other options**. So Q1 to Q6 show the correct letter and its content only, with no per-option explanations. Likewise Q7 and Q8 appear as the stem plus part headings (7.1 to 7.4, 8.1 to 8.4). The original exam paper was not available, so none of the missing wording has been guessed.

<!--questions-->

---

## One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **Q1** | Bundling (separate) | Test each WTP as the price | **B**: $P_X = P_Y = 100$, profit 8,000 |
| **Q2** | Bundling (bundle) | Bundle WTP = sum of WTPs | **C**: $P_B = 120$, profit 12,000 |
| **Q3** | Insurance | Treat only if cheaper than the loss | **B**: compensation 300 and 600, premium 200 |
| **Q4** | Indemnity | Does 100 flip a treatment choice? | **C**: no, so no moral hazard |
| **Q5** | First-degree PD | Area under demand to the efficient quantity | **A**: 150 and 320 |
| **Q6** | Cournot vs cartel | All output through the low-cost firm | **B**: 325 |
| **Q7.1** | Integrated monopoly | $MR = MC$ before and after | $K = 900$ |
| **Q7.2** | One influencer, Eran pays | Backward induction | $K = 450$ |
| **Q7.3** | One influencer, influencer pays | Cost incidence irrelevant | $K = 450$ |
| **Q7.4** | Two Cournot influencers | Downstream competition | $K = 600$ |
| **Q8.1** | Monopoly | $MR = k$ | $Q = \tfrac{40-k}{2}$, $P = \tfrac{40+k}{2}$ |
| **Q8.2** | Cournot | Symmetric best responses | $q = \tfrac{40-k}{3}$ |
| **Q8.3** | Stackelberg | Leader anticipates reaction | Industry profit falls by $\tfrac{5(40-k)^2}{144}$ |
| **Q8.4** | Bertrand | Price equals cost | $P = k$, profit 0 |

> [!tip] Exam reflexes (AI-added summary)
> - **Bundling:** add each type's WTPs. If the sums are equal, one bundle price captures everyone.
> - **Treat or not:** compare the treatment cost with the loss, state by state, before pricing any insurance.
> - **First-degree PD:** charge the area under demand up to where marginal value equals $MC$.
> - **Cartel with unequal costs:** produce only in the low-cost firm until $MR$ reaches the other firm's $MC$.
> - **Vertical chain:** work backward, and remember a flat per-client cost only shifts the fee.
> - **Cournot, Stackelberg, Bertrand:** output ranks Bertrand > Stackelberg > Cournot > monopoly.

---

## Related notes

- [[Topic 1 - Asymmetric Information]] (Q3, Q4)
- [[Topic 2 - Equilibrium in Different Market Structures]] (Q1, Q2, Q5, Q8.1)
- [[Topic 4 - Price Competition with Complementary Goods]] (Q6 to Q8)
- Sister papers: [[PP_01-Sample Exam 1]] · [[PP_02-Sample Exam 2]] · [[PP_03-Sample Exam 3]]
- Hub: [[Microeconomics]]
