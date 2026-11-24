---
title: "Moed B 2026 — Worked Solutions"
label: "2026 Moed B"
topics: "Efficient allocation with CRS, misallocation evidence, retirement consumption, debt dynamics, task-based model, search model, investment with human capital, PPP, CPI vs GDP deflator, fiscal transfers"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed Bet (B) 2026"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-b-2026.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - investment
  - misallocation
  - public-debt-dynamics
  - task-based-model
  - labor-supply
  - unemployment
  - purchasing-power-parity
  - cpi
  - ricardian-equivalence
  - human-capital
aliases:
  - Moed B 2026
  - Moed Bet 2026
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — Efficient allocation with constant returns and heterogeneous TFP"
    text: |
      All firms use the same constant-returns production function $Y = AK^{\alpha}N^{1-\alpha}$ and all factors of production are fully mobile. Firms differ in TFP.

      Which statement about the **efficient allocation** is correct?
    options:
      - label: "1"
        text: |
          Firms with different TFP are active. Firms with higher TFP employ more capital and labor relative to firms with low TFP.
        correct: false
        why: |
          With constant returns and mobile factors the planner does not keep low-TFP firms alive at all.
      - label: "2"
        text: |
          Firms with different levels of TFP are active, but there is insufficient information to determine how much capital and labor each firm employs.
        correct: false
        why: |
          Only the highest-TFP firms are active, so the premise already fails.
      - label: "3"
        text: |
          Only firms with the highest level of TFP are active, and every active firm employs the same amount of capital as the other active firms and the same amount of labor as the other active firms.
        correct: false
        why: |
          Equal *ratios* $K/N$ are required among active firms, not equal levels.
      - label: "4"
        text: |
          Only firms with the highest level of TFP are active, but there can be large firms (more capital and more labor) and small firms (less capital and less labor).
        correct: true
        why: |
          The marginal-product conditions imply a corner solution (only top-TFP firms) with the same $K/N$ ratio across active firms, so sizes can differ.
    solution: |
      The social planner maximizing output requires **marginal products to be equal across firms**:

      $$MPN_1 = (1-\alpha)A_1K_1^{\alpha}N_1^{-\alpha} = (1-\alpha)A_2K_2^{\alpha}N_2^{-\alpha} = MPN_2$$

      $$MPK_1 = \alpha A_1K_1^{\alpha-1}N_1^{1-\alpha} = \alpha A_2K_2^{\alpha-1}N_2^{1-\alpha} = MPK_2$$

      These imply $K_1/N_1 = K_2/N_2$, which breaks the equality of marginal products **unless TFPs are equal**: a contradiction. So the efficient allocation is a **corner solution** where only the highest-TFP firms operate.

      Among those firms the conditions hold and the capital-labor **ratio** is the same, but the **levels** need not be: there can be large and small active firms.

      > [!success] Answer — **4. Only firms with the highest level of TFP are active, but there can be large firms (more capital and more labor) and small firms (less capital and less labor).**

      > [!tip] 🗣️ In plain English
      > If you can freely move machines and workers and returns to scale are constant, the planner closes down every firm except the most productive ones. Those surviving firms use the same capital-per-worker mix, but they don't have to be the same size.
    related_terms:
      - misallocation
      - total-factor-productivity
      - constant-returns-to-scale
    source_doc_page: 2

  - id: q2
    title: "Q2 — Evidence on the dispersion of marginal products (US, China, India)"
    text: |
      The empirical findings described in class on the **efficient allocation of labor (the distribution of MPN)** for the US, China and India indicate that:
    options:
      - label: "1"
        text: |
          The allocation in the US is efficient as implied by the theoretical model, while that of China and India is not. Therefore aggregate TFP in China and India would have been much higher if they had the theoretical efficient allocation.
        correct: false
        why: |
          Marginal products are dispersed even in the US, so the US allocation is not perfectly efficient.
      - label: "2"
        text: |
          The allocation in the US is not perfectly efficient relative to the theoretical benchmark, but it is more efficient than the allocations in China and India. Therefore aggregate TFP in China and India would have been much higher if their allocations had been similar to that of the US.
        correct: true
        why: |
          Dispersion is present in the US but substantially larger in China and India; the counterfactual with the US distribution implies large TFP gains there.
      - label: "3"
        text: |
          There are no meaningful differences in allocation efficiency between the US, China and India. Therefore allocation efficiency is not an important factor in explaining TFP differences across the three countries.
        correct: false
        why: |
          The dispersion differs a lot across countries.
      - label: "4"
        text: |
          China and India exhibit greater dispersion in the marginal product of labor than the US, but this does not imply less efficient allocation because firms differ in TFP.
        correct: false
        why: |
          Under an efficient allocation mobile labor has equal marginal products across active firms **even when TFP differs**, so TFP differences do not justify dispersion in $MPN$.
    solution: |
      The evidence shows marginal products are dispersed even in the US, so the US allocation is **not perfectly efficient**. The dispersion is, however, **substantially greater in China and India**, and the counterfactual estimates imply that aggregate TFP there would rise considerably if their allocation resembled the US one (Hsieh and Klenow: roughly 30–50% for China and 40–60% for India).

      Option 4 fails because differences in firm TFP do not by themselves justify dispersed marginal products: under an efficient allocation mobile labor should have equal $MPN$ across active firms.

      > [!success] Answer — **2. The allocation in the US is not perfectly efficient relative to the theoretical benchmark, but it is more efficient than the allocations in China and India. Therefore aggregate TFP in China and India would have been much higher if their allocations had been similar to that of the US.**

      > [!tip] 🗣️ In plain English
      > Nobody is perfectly efficient, but China and India are much further from it than the US. Move them to the US-style spread and their aggregate TFP jumps.
    related_terms:
      - misallocation
      - marginal-product-of-labor
      - total-factor-productivity
    source_doc_page: 2

  - id: q3
    title: "Q3 — Evidence on wealth and consumption around retirement"
    text: |
      The empirical findings discussed in class on **wealth accumulation and consumption expenditure around retirement** indicate that:
    options:
      - label: "1"
        text: |
          Wealth accumulation is broadly consistent with the life-cycle model (accumulation during working years and decumulation after retirement); however, total consumption expenditure around retirement is inconsistent with consumption-smoothing behavior.
        correct: true
        why: |
          Wealth rises while working and falls after retirement (consistent), but total expenditure falls at retirement rather than staying smooth.
      - label: "2"
        text: |
          Wealth accumulation is broadly consistent with the life-cycle model; in addition, total consumption expenditure around retirement is consistent with consumption-smoothing behavior.
        correct: false
        why: |
          Total consumption expenditure drops around retirement, which is not smooth.
      - label: "3"
        text: |
          Wealth accumulation is inconsistent with the life-cycle model because wealth continues to rise after retirement; however, total consumption expenditure around retirement is consistent with consumption-smoothing behavior.
        correct: false
        why: |
          Wealth declines after retirement, as the model predicts.
      - label: "4"
        text: |
          Wealth accumulation is inconsistent with the life-cycle model because wealth continues to rise after retirement; in addition, total consumption expenditure around retirement is inconsistent with consumption-smoothing behavior.
        correct: false
        why: |
          The first half is wrong: wealth does not keep rising after retirement.
    solution: |
      Wealth generally **rises during working years and declines after retirement**, which is broadly **consistent** with the life-cycle model.

      However, **total consumption expenditure falls around retirement** rather than remaining smooth. Taken at face value this is **inconsistent** with consumption smoothing.

      *(Class note: the in-class discussion expanded this by distinguishing total expenditure from necessities and similar categories, but this question is about total expenditure.)*

      > [!success] Answer — **1. Wealth accumulation is broadly consistent with the life-cycle model (accumulation during working years and decumulation after retirement); however, total consumption expenditure around retirement is inconsistent with consumption-smoothing behavior.**

      > [!tip] 🗣️ In plain English
      > Savings behave like the textbook says (build up, then run down), but total spending still dips when people retire, which smoothing alone wouldn't predict.
    related_terms:
      - life-cycle-hypothesis
      - consumption-smoothing
    source_doc_page: 3

  - id: q4
    title: "Q4 — Next year's debt-to-GDP ratio from nominal data"
    text: |
      Data: expected inflation $2.5\%$; current debt-to-GDP ratio $70\%$; real GDP expected to grow at $3\%$; planned primary budget deficit $2.5\%$ of GDP; nominal interest rate on government debt $4.5\%$.

      Based on these data, the debt-to-GDP ratio next year is expected to:
    options:
      - label: "1"
        text: |
          Decrease to approximately 69.3%
        correct: false
        why: |
          That is only the interest-and-growth term $\frac{1.02}{1.03}\times0.70$; it leaves out the $2.5\%$ primary deficit, which pushes the ratio up.
      - label: "2"
        text: |
          Increase to approximately 72.5%
        correct: false
        why: |
          Does not follow from the debt equation with these data; the correct figure is $71.8\%$.
      - label: "3"
        text: |
          Increase to 71.8%
        correct: true
        why: |
          $b = 0.025 + \frac{1.02}{1.03}\times0.70 \approx 0.718$, using $r \approx i - \pi^e = 2\%$.
      - label: "4"
        text: |
          Increase to 73.5%
        correct: false
        why: |
          Does not follow from the debt equation with these data; the correct figure is $71.8\%$.
    solution: |
      Use $b_t = d_t + \dfrac{1+r}{1+g}\,b_{t-1}$. We have $b_{t-1}$, $d_t$ and $g$ but must infer the **real** rate from the Fisher equation, $r \approx i - \pi^e = 0.045 - 0.025 = 0.02$.

      $$b_t = 0.025 + \frac{1 + (0.045 - 0.025)}{1 + 0.03}\times 0.70 = 0.025 + 0.6932 \approx 0.718$$

      The ratio **increases to about 71.8%**.

      > [!success] Answer — **3. Increase to 71.8%**

      > [!tip] 🗣️ In plain English
      > The debt grows by the real interest rate (2%) but GDP grows even faster (3%), which shrinks the old debt's weight slightly. The new deficit of 2.5% of GDP more than makes up for it, so the ratio edges up to about **71.8%**.
    related_terms:
      - public-debt-dynamics
      - fisher-equation
      - primary-deficit
    source_doc_page: 4

  - id: q5
    title: "Q5 — A permanent rise in the dislike of work: what happens to investment?"
    text: |
      Workers have utility

      $$U(C,N) = \frac{C^{1-\sigma}}{1-\sigma} - \theta\frac{N^{1+\psi}}{1+\psi}, \qquad \theta>0,\ \sigma>0,\ \sigma\neq1,\ \psi>0$$

      and the budget constraint $C = wN$. Firms make labor-demand and investment decisions according to the standard models; the labor and goods markets are in equilibrium.

      The parameter $\theta$ increases **permanently**. As a result, in the short run:
    options:
      - label: "1"
        text: |
          The investment curve shifts to the right.
        correct: false
        why: |
          Lower expected future labor lowers future $MPK$, so investment demand falls.
      - label: "2"
        text: |
          The investment curve shifts to the left.
        correct: true
        why: |
          Labor supply shifts left permanently, so future labor is lower, future $MPK$ is lower (complementarity), optimal future $K$ is lower and investment demand falls.
      - label: "3"
        text: |
          The investment curve is unchanged.
        correct: false
        why: |
          The shock is permanent, so firms know *future* labor will be lower, which matters for investment today.
      - label: "4"
        text: |
          The investment curve shifts to the right only if $\sigma > 1$.
        correct: false
        why: |
          The direction does not depend on $\sigma$: labor supply shifts left for any $\sigma$.
    solution: |
      A higher $\theta$ is a **taste shock**: workers dislike working more than before. Deriving labor supply from the static FOC and budget constraint gives

      $$N = \left(\frac{1}{\theta}\right)^{\frac{1}{\psi+\sigma}} w^{\frac{1-\sigma}{\psi+\sigma}}$$

      so at any wage a higher $\theta$ means **less labor supplied**: a permanent **leftward shift** of the labor supply curve.

      Firms know future labor will be lower. By complementarity the **future $MPK$ falls**. The user cost is unchanged, so the optimal future capital is lower and **investment demand falls**: the investment curve shifts **left**.

      > [!success] Answer — **2. The investment curve shifts to the left.**

      > [!tip] 🗣️ In plain English
      > If everyone permanently wants to work less, firms expect fewer workers in future, so machines will be less productive. That makes extra machines less attractive today and investment drops.
    related_terms:
      - labor-supply
      - marginal-product-of-capital
      - user-cost-of-capital
      - savings-investment-equilibrium
    source_doc_page: 5

  - id: q6
    title: "Q6 — Task-based model: displacement and reinstatement effects"
    text: |
      Task $j$ is produced by $y(j) = \psi_N(j)N(j) + \psi_K(j)K(j)$. One unit of each task must be produced.

      **2020:** $w = 8$, $r = 12$.

      | Task | $\psi_K(j)$ | $\psi_N(j)$ |
      |---|---|---|
      | 1 | 6 | 2 |
      | 2 | 3 | 4 |
      | 3 | 4 | 6 |

      **2025:** capital productivity in task 2 rises from $3$ to $8$, and a new task 4 is introduced.

      | Task | $\psi_K(j)$ | $\psi_N(j)$ |
      |---|---|---|
      | 1 | 6 | 2 |
      | 2 | 8 | 4 |
      | 3 | 4 | 6 |
      | 4 | 3 | 12 |

      Factor prices remain unchanged. Which statement is correct?
    options:
      - label: "1"
        text: |
          Task 2 remains assigned to labor, while task 4 is assigned to labor. The technological change generates a reinstatement effect but no displacement effect. The number of tasks assigned to labor increases.
        correct: false
        why: |
          Task 2 does switch to capital ($12/8 = 1.5 < 2$), so there *is* a displacement effect.
      - label: "2"
        text: |
          Task 2 switches from labor to capital, while task 4 is assigned to capital. The technological change generates productivity and displacement effects but no reinstatement effect. The number of tasks assigned to labor decreases.
        correct: false
        why: |
          Task 4 goes to labor, not capital, so there is a reinstatement effect. (Partial credit: 2 points for correctly spotting the productivity and displacement effects.)
      - label: "3"
        text: |
          Task 2 switches from labor to capital, while task 4 is assigned to labor. The technological change generates productivity, displacement, and reinstatement effects. The number of tasks assigned to labor remains unchanged.
        correct: true
        why: |
          Task 2 moves to capital (displacement), the new task 4 goes to labor (reinstatement), so labor keeps two tasks: before $\{2,3\}$, after $\{3,4\}$.
      - label: "4"
        text: |
          Task 2 remains assigned to labor, while task 4 is assigned to capital. The technological change generates a productivity effect but neither a displacement effect nor a reinstatement effect. The number of tasks assigned to labor remains unchanged.
        correct: false
        why: |
          Both task 2 and task 4 are assigned to the *other* factor than this option says.
    solution: |
      Compare the unit cost of each task: capital $r/\psi_K$ versus labor $w/\psi_N$.

      **Task 2, 2020:** labor $8/4 = 2$; capital $12/3 = 4$. Labor produces it.

      **Task 2, 2025** (capital productivity $8$, prices unchanged): capital $12/8 = 1.5 < 2$. The task **switches from labor to capital**: a **productivity effect** (cheaper production) and a **displacement effect** (labor loses a task).

      **Task 4** (new): labor $8/12 = \tfrac23$; capital $12/3 = 4$. Labor produces it: a **reinstatement effect** (a new task for labor).

      *(Task 1 stays with capital: capital $12/6 = 2$ vs. labor $8/2 = 4$. Task 3 stays with labor: labor $8/6$ vs. capital $12/4=3$.)* Labor ends up with tasks 3 and 4 after having had tasks 2 and 3, so the **number of tasks assigned to labor is unchanged**.

      > [!success] Answer — **3. Task 2 switches from labor to capital, while task 4 is assigned to labor. The technological change generates productivity, displacement, and reinstatement effects. The number of tasks assigned to labor remains unchanged.**

      > [!tip] 🗣️ In plain English
      > Capital learns to do task 2 cheaply, which pushes workers out of it (displacement). But a brand-new task shows up that workers do best (reinstatement). One task out, one task in: the count of worker tasks doesn't change.
    related_terms:
      - task-based-model
      - automation
    source_doc_page: 6

  - id: q7
    title: "Q7 — Higher interest rate with log utility and initial assets only"
    text: |
      A consumer lives for periods 0 and 1 with initial assets $a>0$ and no other income ($y_0 = y_1 = 0$). The consumer can borrow or save at $r>0$, discounts with $0<\beta<1$ and maximizes $\ln c_0 + \beta\ln c_1$. After choosing an optimal plan, $r$ **increases**. As a result:
    options:
      - label: "1"
        text: |
          $c_0$ decreases and $c_1$ increases.
        correct: false
        why: |
          $c_0 = a/(1+\beta)$ does not depend on $r$.
      - label: "2"
        text: |
          $c_0$ unchanged and $c_1$ unchanged.
        correct: false
        why: |
          $c_1 = \beta(1+r)\,a/(1+\beta)$ rises with $r$.
      - label: "3"
        text: |
          $c_0$ decreases and $c_1$ unchanged.
        correct: false
        why: |
          Neither change happens: $c_0$ is unchanged and $c_1$ rises.
      - label: "4"
        text: |
          $c_0$ unchanged and $c_1$ increases.
        correct: true
        why: |
          With log utility the income and substitution effects of $r$ cancel for $c_0$, while $c_1$ rises through the $(1+r)$ factor.
    solution: |
      **Euler equation:** $\dfrac{1}{c_0} = \beta(1+r)\dfrac{1}{c_1}$, so $c_1 = \beta(1+r)c_0$.

      **Budget constraint:** $c_0 + \dfrac{c_1}{1+r} = a$. Substitute the Euler equation:

      $$c_0 + \beta c_0 = a \;\Longrightarrow\; c_0 = \frac{a}{1+\beta}$$

      Then

      $$c_1 = \beta(1+r)\frac{a}{1+\beta}$$

      Current consumption is **independent of $r$**, while $c_1$ **increases** with $r$.

      > [!success] Answer — **4. $c_0$ unchanged and $c_1$ increases.**

      > [!tip] 🗣️ In plain English
      > A higher interest rate makes waiting more rewarding, but it also makes your savings pot grow faster. For log utility these two pulls on today's spending cancel exactly, so today's consumption stays the same and all the extra return shows up as higher consumption next period.
    related_terms:
      - euler-equation
      - intertemporal-choice
      - substitution-effect
      - income-effect
    source_doc_page: 7

  - id: q8
    title: "Q8 — A larger (foreign-financed) retirement grant"
    text: |
      Households live for three periods $0,1,2$: periods 0 and 1 are working periods and period 2 is retirement. They can borrow or save at $0<r<\infty$. Labor income is earned in periods 0 and 1 and a constant retirement grant $B>0$ in period 2, so

      $$PVLR = w_0N_0 + \frac{w_1N_1}{1+r} + \frac{B}{(1+r)^2}$$

      Firms follow the standard production and labor-demand models. The economy is in equilibrium when, at the beginning of period 0, households learn the retirement grant will be **higher** than expected. The increase is financed by an external source (e.g. a foreign country), so it needs no higher domestic taxes. In the short run:
    options:
      - label: "1"
        text: |
          Current labor (and therefore output) is unchanged; the saving curve shifts to the right.
        correct: false
        why: |
          A higher PVLR makes households supply less labor, so labor does change.
      - label: "2"
        text: |
          Current labor (and therefore output) is unchanged; the saving curve shifts to the left.
        correct: false
        why: |
          Labor is not unchanged: it falls.
      - label: "3"
        text: |
          Current labor (and therefore output) decreases; the saving curve shifts to the right.
        correct: false
        why: |
          Households are richer, so they want to consume *more* today; with lower income that means saving falls (left), not rises.
      - label: "4"
        text: |
          Current labor (and therefore output) decreases; the saving curve shifts to the left.
        correct: true
        why: |
          Higher PVLR lowers labor supply (so labor and output fall) and raises desired consumption, so with lower income saving falls: the $S$ curve shifts left.
    solution: |
      The grant makes households richer over their lifetime (a higher **PVLR**), which has two effects.

      1. **Labor:** current labor supply falls because PVLR is higher. Labor demand is unchanged (no change in $A$ or $K$). So equilibrium labor falls, and so does current output.
      2. **Saving:** households want to consume **more** today. Output (income) is lower and consumption is higher, so saving $S = Y - C$ must **fall** at any interest rate: the saving curve shifts **left**.

      > [!success] Answer — **4. Current labor (and therefore output) decreases; the saving curve shifts to the left.**

      > [!tip] 🗣️ In plain English
      > News that retirement will be more generous makes people feel richer. They cut back on work today and spend more, so output is lower and less is left over to save.
    related_terms:
      - pvlr
      - labor-supply
      - savings-investment-equilibrium
      - income-effect
    source_doc_page: 9

  - id: q9
    title: "Q9 — Search model: back out separation, then a permanent fall in job finding"
    text: |
      In a standard labor-market search model the entire population is in the labor force: $10{,}000{,}000$ workers. At the start of month 1 the market is in steady state with unemployment rate $10\%$ and monthly job-finding probability $45\%$.

      During month 1 the job-finding probability falls **permanently** to $20\%$. The separation probability is unchanged.
    options:
      - label: "1"
        text: |
          The job-separation probability is 5%. At the end of month 1 there are 1,250,000 unemployed workers. If the new transition probabilities remain unchanged, unemployment eventually converges to 2,000,000 workers.
        correct: true
        why: |
          $d = 0.05$; $U_{1} = 0.8\times1{,}000{,}000 + 0.05\times 9{,}000{,}000 = 1{,}250{,}000$; new steady state $u = 0.05/0.25 = 20\%$.
      - label: "2"
        text: |
          The job-separation probability is 5%. At the end of month 1 there are 2,000,000 unemployed workers, which is also the new steady-state level.
        correct: false
        why: |
          The new steady state is reached only gradually; after one month unemployment is $1{,}250{,}000$.
      - label: "3"
        text: |
          The job-separation probability is 4.5%. At the end of month 1 there are 1,205,000 unemployed workers. If the new transition probabilities remain unchanged, unemployment eventually converges to approximately 1,837,000 workers.
        correct: false
        why: |
          $d$ is $5\%$, not $4.5\%$: $0.045$ is only the numerator in $d = 0.045/0.9$.
      - label: "4"
        text: |
          The job-separation probability is 5%. At the end of month 1 there are 1,300,000 unemployed workers. If the new transition probabilities remain unchanged, unemployment eventually converges to 2,000,000 workers.
        correct: false
        why: |
          The one-month figure is $1{,}250{,}000$, not $1{,}300{,}000$.
    solution: |
      **Step 1 — the separation probability** from the steady state $u = \dfrac{d}{d+f}$:

      $$0.1 = \frac{d}{d+0.45} \;\Longrightarrow\; 0.1d + 0.045 = d \;\Longrightarrow\; d = \frac{0.045}{0.9} = 0.05$$

      **Step 2 — unemployment at the end of month 1.** Start from $U_0 = 1{,}000{,}000$ (10%), $E_0 = 9{,}000{,}000$ and use the new $f = 0.2$:

      $$U_1 = (1-f)U_0 + dE_0 = 0.8\times1{,}000{,}000 + 0.05\times9{,}000{,}000 = 1{,}250{,}000$$

      **Step 3 — where it converges** (new steady state):

      $$u = \frac{0.05}{0.05+0.20} = 0.2 \;\Longrightarrow\; 2{,}000{,}000 \text{ unemployed}$$

      > [!success] Answer — **1. The job-separation probability is 5%. At the end of month 1 there are 1,250,000 unemployed workers. If the new transition probabilities remain unchanged, unemployment eventually converges to 2,000,000 workers.**

      > [!tip] 🗣️ In plain English
      > A 10% unemployment rate with a 45% job-finding chance means 5% of workers lose their job each month. When finding a job gets much harder, unemployment starts climbing (1.25 million after a month) towards a new, higher resting level of 2 million.
    related_terms:
      - stocks-and-flows-model
      - steady-state-unemployment
      - job-finding-rate
      - separation-rate
    source_doc_page: 9

  - id: q10
    title: "Q10 — Investment with human capital in the production function"
    text: |
      Firms invest according to the standard investment model. Production in every period is

      $$Y_t = A_tK_t^{0.3}(h_tN_t)^{0.7}$$

      where $h_t$ is average human capital per worker. The current capital stock is $K_t = 1{,}000$. Firms expect, for period $t+1$: $A_{t+1} = 1.2$, $N_{t+1} = 1{,}000$, $h_{t+1} = 1.1$. In addition: depreciation $8\%$; current price of capital $1$; expected future price of capital $0.95$; real interest rate $4\%$; tax rate on capital $20\%$.

      Assuming firms choose investment optimally, current investment is approximately:
    options:
      - label: "1"
        text: |
          1,417 units.
        correct: false
        why: |
          Does not match the optimal investment $K^{f} - 0.92K \approx 1{,}497$.
      - label: "2"
        text: |
          1,277 units.
        correct: false
        why: |
          Does not match the optimal investment $K^{f} - 0.92K \approx 1{,}497$.
      - label: "3"
        text: |
          2,404 units.
        correct: false
        why: |
          This is of the order of the future capital stock, not the *investment* needed to get there ($K^{f}-0.92K$).
      - label: "4"
        text: |
          1,497 units.
        correct: true
        why: |
          $I = K^{f} - (1-\delta)K = 2{,}416.7 - 920 \approx 1{,}497$.
    solution: |
      **Step 1 — user cost of capital:**

      $$\frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K} = \frac{0.04\times1 + 0.08\times0.95 + 1 - 0.95}{0.8} = \frac{0.166}{0.8} = 0.2075$$

      **Step 2 — optimal future capital.** Set the future $MPK$ (human capital is part of it) equal to the user cost:

      $$0.3\,A_{t+1}K_{t+1}^{-0.7}\,h_{t+1}^{0.7}N_{t+1}^{0.7} = 0.3\times1.2\times K_{t+1}^{-0.7}\times1.1^{0.7}\times1000^{0.7} = 0.2075$$

      $$K_{t+1} = \left(\frac{0.3\times1.2\times1.1^{0.7}\times1000^{0.7}}{0.2075}\right)^{1/0.7} \approx 2{,}416.7$$

      **Step 3 — investment** from the capital-accumulation equation:

      $$I_t = K_{t+1} - (1-\delta)K_t = 2{,}416.7 - 0.92\times1{,}000 \approx 1{,}497$$

      > [!success] Answer — **4. 1,497 units.**

      > [!tip] 🗣️ In plain English
      > Work out what an extra machine costs to own (0.2075 per unit), find how many machines make the last one just earn that (about 2,417), and subtract the 920 machines that survive depreciation. You need to buy roughly **1,497** new ones.
    related_terms:
      - user-cost-of-capital
      - marginal-product-of-capital
      - capital-accumulation-equation
      - human-capital
    source_doc_page: 11

  - id: q11
    title: "Q11 — GDP per capita in dollars vs. adjusted for purchasing power"
    text: |
      Data on Israeli nominal GDP per capita, the nominal exchange rate (shekels per US dollar) and GDP deflators. Assume GDP in both countries reflects the same basket of goods.

      | | 2024 | 2025 |
      |---|---|---|
      | Israeli nominal GDP per capita | 201.2 | 208.9 |
      | Nominal exchange rate (shekels per dollar) | 3.65 | 3.3 |
      | GDP deflator, Israel | 100 | 103 |
      | GDP deflator, USA | 100 | 102.8 |

      Based on these data, between 2024 and 2025:
    options:
      - label: "1"
        text: |
          Israeli GDP per capita measured in current US dollars using market exchange rates grew by 14.8% and Israeli GDP per capita adjusted for purchasing power grew by 3.6%.
        correct: true
        why: |
          Market-rate: $\frac{208.9/3.3}{201.2/3.65} - 1 = 14.8\%$. PPP: $208.9\times\frac{102.8}{103} / 201.2 - 1 = 3.6\%$.
      - label: "2"
        text: |
          Israeli GDP per capita measured in current US dollars using market exchange rates grew by 3.6% and Israeli GDP per capita adjusted for purchasing power grew by 14.8%.
        correct: false
        why: |
          The two numbers are swapped.
      - label: "3"
        text: |
          Israeli GDP per capita measured in current US dollars using market exchange rates grew by 14.8% and Israeli GDP per capita adjusted for purchasing power grew by 10.8%.
        correct: false
        why: |
          The market-rate figure is right but the PPP figure is not (2 points partial credit).
      - label: "4"
        text: |
          Israeli GDP per capita measured in current US dollars using market exchange rates grew by 11.2% and Israeli GDP per capita adjusted for purchasing power grew by 3.6%.
        correct: false
        why: |
          The PPP figure is right but the market-rate figure is not (2 points partial credit).
    solution: |
      **PPP-adjusted GDP** (local GDP divided by the local price level, times the US price level):

      $$GDP^{PPP} = \frac{GDP^{local}}{P^{local}}\times P^{USD}$$

      - 2024: $\dfrac{201.2}{100}\times100 = 201.2$
      - 2025: $\dfrac{208.9}{103}\times102.8 = 208.49$

      Growth: $\dfrac{208.49}{201.2} - 1 = 0.036$, i.e. **3.6%**.

      **Market exchange rate** (convert shekels to dollars):

      - 2024: $\dfrac{201.2}{3.65} = 55.12$
      - 2025: $\dfrac{208.9}{3.3} = 63.3$

      Growth: $\dfrac{63.3}{55.12} - 1 = 0.148$, i.e. **14.8%**. The market-rate figure is much larger because the shekel appreciated sharply.

      > [!success] Answer — **1. Israeli GDP per capita measured in current US dollars using market exchange rates grew by 14.8% and Israeli GDP per capita adjusted for purchasing power grew by 3.6%.**

      > [!tip] 🗣️ In plain English
      > In dollars at market exchange rates, Israel's GDP per person seems to jump 14.8%, but most of that is the shekel getting stronger. Once you correct for prices (purchasing power), the real gain is only about **3.6%**.
    related_terms:
      - purchasing-power-parity
      - exchange-rates
      - gdp-deflator
    source_doc_page: 12

  - id: q12
    title: "Q12 — Labor-income tax cut and the elasticity of labor supply"
    text: |
      Households have $U(C,N) = \ln C - \dfrac{N^{1+\psi}}{1+\psi}$ with $\psi>0$, live for one period and pay labor income tax $\tau_N$: $C = (1-\tau_N)wN$. The resulting labor supply is

      $$N = \left[w(1-\tau_N)\right]^{1/\psi}$$

      Households $i$ and $j$ differ only in $\psi$, with $\psi_i > \psi_j$. Initially $w(1-\tau_N) = 1$. The government lowers $\tau_N$. Holding wages fixed (before any equilibrium adjustment):
    options:
      - label: "1"
        text: |
          The increase in household $i$'s labor supply is larger than the increase in household $j$'s labor supply.
        correct: false
        why: |
          A larger $\psi$ makes labor supply *less* responsive, so $i$ responds less.
      - label: "2"
        text: |
          The increase in household $i$'s labor supply is smaller than the increase in household $j$'s labor supply.
        correct: true
        why: |
          The exponent $1/\psi$ is smaller for $i$, so the same rise in $w(1-\tau_N)$ raises $N_i$ by less than $N_j$.
      - label: "3"
        text: |
          The two households' labor supply increases by exactly the same amount.
        correct: false
        why: |
          The exponent differs across households, so the responses differ.
      - label: "4"
        text: |
          The increase in household $i$'s labor supply is larger than the increase in household $j$'s labor supply only if $\psi_i > 1$.
        correct: false
        why: |
          No such threshold: with $w(1-\tau_N)>1$ and a smaller exponent, the response is smaller for any $\psi$.
    solution: |
      Initially $w(1-\tau_N)=1$, so both households choose $N = 1$ (any power of $1$ is $1$).

      When the tax rate falls, $w(1-\tau_N)$ rises above $1$, so both households raise labor supply. But a larger $\psi$ means a **smaller** power $1/\psi$ on the net wage, i.e. a **weaker response** of labor supply to changes in wages and taxes.

      Since $\psi_i > \psi_j$, household $i$ increases its labor supply **by less** than household $j$.

      > [!success] Answer — **2. The increase in household $i$'s labor supply is smaller than the increase in household $j$'s labor supply.**

      > [!tip] 🗣️ In plain English
      > $\psi$ measures how reluctant someone is to change hours. A more reluctant household (bigger $\psi$) barely reacts when take-home pay goes up, so its labor supply rises by **less**.
    related_terms:
      - labor-supply
      - labor-income-tax
      - static-foc
    source_doc_page: 13

  - id: q13
    title: "Q13 — CPI inflation with different base years vs. the GDP deflator"
    text: |
      An economy produces tomatoes, pasta and machines. It has $1{,}000$ identical consumers who consume only tomatoes and pasta.

      | Year | Q tomatoes | Q pasta | Q machines | P tomatoes | P pasta | P machines |
      |---|---|---|---|---|---|---|
      | 2024 | 5,000 | 1,000 | 50 | 2 | 20 | 1,000 |
      | 2025 | 4,000 | 1,250 | 50 | 2.5 | 25 | 1,000 |

      CPI stands for consumer price index. Which statement is correct?
    options:
      - label: "1"
        text: |
          The CPI inflation rate with 2024 as the base year is larger than the CPI inflation rate with 2025 as the base year. Both are smaller than the inflation rate based on the GDP deflator.
        correct: false
        why: |
          Both CPI rates are the same here, and both exceed (not fall below) the deflator inflation because machine prices did not change.
      - label: "2"
        text: |
          The CPI inflation rate with 2025 as the base year is larger than the CPI inflation rate with 2024 as the base year. Both are larger than the inflation rate based on the GDP deflator.
        correct: false
        why: |
          The two CPI rates are identical.
      - label: "3"
        text: |
          The CPI inflation rate is identical whether the base year is 2024 or 2025, and larger than the inflation rate based on the GDP deflator.
        correct: true
        why: |
          Both baskets give $25\%$ inflation; the GDP deflator also includes machines, whose price is unchanged, so it is lower.
      - label: "4"
        text: |
          The CPI inflation rate is identical whether the base year is 2024 or 2025, and smaller than the inflation rate based on the GDP deflator.
        correct: false
        why: |
          CPI ignores machines (price unchanged), so it is *larger*, not smaller, than the deflator inflation.
    solution: |
      Both consumer goods' prices rose ($+25\%$ each) while machine prices did not change, so inflation based on consumption goods will be **larger** than inflation based on all of GDP. To check CPI under each base year:

      - **2024 basket** (per consumer: 5 tomatoes, 1 pasta): cost in 2024 $=5\times2+1\times20 = 30$; cost in 2025 $=5\times2.5+1\times25 = 37.5$. Inflation $=25\%$.
      - **2025 basket** (4 tomatoes, 1.25 pasta): cost in 2024 $=4\times2+1.25\times20 = 33$; cost in 2025 $=4\times2.5+1.25\times25 = 41.25$. Inflation $=25\%$.

      The CPI inflation rate is the **same** under both base years, and larger than the GDP-deflator inflation.

      > [!success] Answer — **3. The CPI inflation rate is identical whether the base year is 2024 or 2025, and larger than the inflation rate based on the GDP deflator.**

      > [!tip] 🗣️ In plain English
      > Every consumer price went up exactly 25%, so it doesn't matter which year's basket you use: CPI inflation is 25% either way. The GDP deflator is diluted by machines, whose price never moved, so it comes out lower.
    related_terms:
      - cpi
      - gdp-deflator
      - inflation
    source_doc_page: 15

  - id: q14
    title: "Q14 — A future permanent fall in TFP in the goods market"
    text: |
      An economy without government is in goods-market equilibrium with $S = I$. Households are forward-looking and can borrow and save. Firms invest according to the standard model.

      Firms and households learn this period that TFP will **decline permanently, starting next period**. Current-period TFP is unchanged. The current capital stock cannot be changed within the period, and labor is constant. Which statement is correct?
    options:
      - label: "1"
        text: |
          The saving curve shifts to the right because households reduce current consumption. The investment curve shifts to the left because future productivity is lower. In equilibrium, the real interest rate declines, but the effect on equilibrium saving and investment is ambiguous.
        correct: true
        why: |
          Poorer-in-future households consume less today ($S$ right); lower future TFP lowers future $MPK$ and investment demand ($I$ left). $r$ falls for sure, while $S=I$ could go either way.
      - label: "2"
        text: |
          The saving curve does not shift because productivity will only change in the future. The investment curve shifts to the left because of the lower future productivity. In equilibrium, the real interest rate declines and S and I decline.
        correct: false
        why: |
          Expectations of lower future income do shift saving, even though current output is unchanged.
      - label: "3"
        text: |
          The saving curve shifts to the right because households would like to reduce consumption. The investment curve does not shift because productivity declines only in the future, so investment demand will shift only in the future. In equilibrium, the real interest rate declines and equilibrium saving and investment increase.
        correct: false
        why: |
          Investment depends on **future** $MPK$, so it shifts today.
      - label: "4"
        text: |
          Neither saving nor investment curve shift in the short run because the productivity decline happens in the future. In equilibrium, there is no change relative to the initial equilibrium.
        correct: false
        why: |
          Both curves react to expectations about the future.
    solution: |
      Current GDP does not change (current $A$, $K$, $N$ are all constant), but:

      - **Households** expect lower future income, so they are poorer and choose to consume less today (consumption smoothing): saving is higher, the **$S$ curve shifts right**.
      - **Firms** expect lower future TFP, so future $MPK$ falls and the optimal future capital falls (no change in the user cost): **lower investment demand**, the **$I$ curve shifts left**.

      In equilibrium the right shift of $S$ and left shift of $I$ both push the real interest rate **down**, so $r$ falls unambiguously, while the effect on equilibrium $S$ and $I$ is **ambiguous**.

      > [!success] Answer — **1. The saving curve shifts to the right because households reduce current consumption. The investment curve shifts to the left because future productivity is lower. In equilibrium, the real interest rate declines, but the effect on equilibrium saving and investment is ambiguous.**

      > [!tip] 🗣️ In plain English
      > Bad news about the future makes households save more and firms invest less. Lots of supply of funds and weak demand for them means the interest rate must fall, but whether the amount of saving and investment ends up higher or lower depends on which shift is bigger.
    related_terms:
      - savings-investment-equilibrium
      - real-interest-rate
      - user-cost-of-capital
      - pvlr
    source_doc_page: 16

  - id: q15
    title: "Q15 — Better robots: labor demand and the wage"
    text: |
      An economy is in long-run equilibrium. Firms produce with capital $K$, labor $N$ and robots $R$:

      $$Y = AK^{\alpha}(N + qR)^{1-\alpha}, \qquad 0<\alpha<1$$

      where $A$ is TFP and $q$ is the productivity (quality) of robots, both exogenous. In the short run the stocks of capital and robots are known and fixed. Firms take the market wage as given. Households' preferences are such that there is **no income/wealth effect on labor supply**.

      A technological advancement improves robot quality **permanently**, starting this period. What happens in the short-run equilibrium?
    options:
      - label: "1"
        text: |
          The labor demand curve shifts to the left because the marginal product of labor declines; the labor supply curve shifts to the right because workers are poorer. In equilibrium the real wage declines and the effect on labor is ambiguous.
        correct: false
        why: |
          Workers are not poorer here, and with no income effect the labor supply curve does not shift anyway.
      - label: "2"
        text: |
          The labor demand curve does not shift because the marginal product of labor is unaffected by robots; the labor supply curve shifts to the left because workers are richer. In equilibrium the real wage increases and labor declines.
        correct: false
        why: |
          $MPN$ **is** affected by robots, since $N$ and $qR$ enter additively.
      - label: "3"
        text: |
          The labor demand curve shifts to the right because higher robot quality raises productivity in the economy; the labor supply curve does not shift. In equilibrium the real wage increases and labor increases.
        correct: false
        why: |
          Higher $q$ lowers $MPN$ (robots are substitutes for labor), so demand moves left.
      - label: "4"
        text: |
          The labor demand curve shifts to the left because the marginal product of labor declines; the labor supply curve does not shift. In equilibrium the real wage is lower and labor is lower.
        correct: true
        why: |
          $MPN = (1-\alpha)AK^{\alpha}(N+qR)^{-\alpha}$ falls with $q$; supply is fixed by the no-income-effect assumption; so both $w$ and $N$ fall.
    solution: |
      Labor demand is the marginal product of labor, which must equal the real wage:

      $$MPN = (1-\alpha)AK^{\alpha}(N+qR)^{-\alpha}$$

      An increase in $q$ **lowers** $MPN$:

      $$\frac{\partial MPN}{\partial q} = -\alpha(1-\alpha)AK^{\alpha}R\,(N+qR)^{-\alpha-1} < 0$$

      so the labor demand curve **shifts left**.

      The **labor supply curve does not shift** because preferences have no income effect, so changes in future income do not affect it.

      Result: demand shifts left along a fixed supply curve, so the **real wage is lower and employment is lower**.

      > [!success] Answer — **4. The labor demand curve shifts to the left because the marginal product of labor declines; the labor supply curve does not shift. In equilibrium the real wage is lower and labor is lower.**

      > [!tip] 🗣️ In plain English
      > Better robots do some of the work workers used to do, so each worker adds less on top of the robots. Firms want fewer workers at every wage, and since supply doesn't budge, both wages and employment drop.
    related_terms:
      - labor-demand
      - automation
      - marginal-product-of-labor
      - labor-supply
    source_doc_page: 17

  - id: q16
    title: "Q16 — Government capital and private investment"
    text: |
      Output is produced with private capital $K$, labor $N$ and government capital $X$:

      $$Y = AX^{\theta}K^{\alpha}N^{1-\alpha}, \qquad \theta>0,\ 0<\alpha<1$$

      Firms choose private investment according to the standard model and take government capital as given. Suppose there are no other changes, and the user cost of private capital is unchanged. Firms learn today that government capital will be **higher next period**. As a result:
    options:
      - label: "1"
        text: |
          The demand for private investment increases, because higher government capital raises the future marginal product of private capital.
        correct: true
        why: |
          $MPK = \alpha AX^{\theta}K^{\alpha-1}N^{1-\alpha}$ increases in $X$, so the optimal future $K$ rises.
      - label: "2"
        text: |
          The demand for private investment decreases, because higher government capital substitutes for private capital.
        correct: false
        why: |
          $X$ and $K$ enter multiplicatively (complements), not as substitutes.
      - label: "3"
        text: |
          The demand for private investment is unchanged, because government capital is chosen by the government rather than by private firms.
        correct: false
        why: |
          Firms take $X$ as given, but a higher $X$ still shifts their optimum.
      - label: "4"
        text: |
          The demand for private investment is unchanged, because government capital affects output but not the marginal product of private capital.
        correct: false
        why: |
          $X$ appears in the expression for $MPK$.
    solution: |
      Firms choose future private capital by equating the future marginal product of private capital to the user cost. The user cost is unchanged, so we ask what happens to future $MPK$:

      $$MPK = \alpha AX^{\theta}K^{\alpha-1}N^{1-\alpha}$$

      Because $\theta>0$, an increase in $X$ **raises** $MPK$ at any level of $K$. Firms therefore choose a **higher future private capital stock**, which means **higher current investment demand**.

      > [!success] Answer — **1. The demand for private investment increases, because higher government capital raises the future marginal product of private capital.**

      > [!tip] 🗣️ In plain English
      > Government roads and bridges make private machines more productive. Knowing there will be more of them next year, firms want to own more machines, so investment today goes up.
    related_terms:
      - marginal-product-of-capital
      - user-cost-of-capital
      - cobb-douglas
    source_doc_page: 18

  - id: q17
    title: "Q17 — Evidence on routine-biased change and job polarization"
    text: |
      The empirical findings discussed in class on **routine-biased technological change and job polarization** indicate that:
    options:
      - label: "1"
        text: |
          Employment declined mainly in routine occupations, many of which were initially in the middle of the wage distribution. This is consistent with the idea that new technologies substitute for routine tasks.
        correct: true
        why: |
          Polarization: middle-wage routine jobs shrank, while some high-wage abstract and low-wage non-routine service jobs grew.
      - label: "2"
        text: |
          Employment declined mainly in non-routine manual occupations, while routine occupations expanded. This is consistent with the idea that new technologies complement routine tasks.
        correct: false
        why: |
          Backwards: routine occupations shrank.
      - label: "3"
        text: |
          Routine-biased technological change explains only the increase in the college wage premium, but not changes in employment shares across occupations.
        correct: false
        why: |
          The college premium is the SBTC story; RBTC is precisely about occupation employment shares.
      - label: "4"
        text: |
          Job polarization means that employment declined in all low-wage and middle-wage occupations, while employment increased only in high-wage occupations.
        correct: false
        why: |
          Employment also increased in some low-wage non-routine service occupations.
    solution: |
      The evidence on job polarization: employment declined especially in **routine occupations**, many of which were in the **middle of the wage distribution**. At the same time, employment increased in some **high-wage abstract** occupations and also in some **low-wage non-routine service** occupations.

      This fits **routine-biased technological change**: new technologies are especially good at replacing routine tasks, but not necessarily non-routine abstract or non-routine manual tasks.

      > [!success] Answer — **1. Employment declined mainly in routine occupations, many of which were initially in the middle of the wage distribution. This is consistent with the idea that new technologies substitute for routine tasks.**

      > [!tip] 🗣️ In plain English
      > Machines are good at routine work, which is mostly middle-wage. So the middle hollows out, while jobs at the top (abstract) and at the bottom (hands-on services) hold up or grow.
    related_terms:
      - routine-biased-technological-change
      - polarization
      - skill-biased-technological-change
    source_doc_page: 19

  - id: q18
    title: "Q18 — A debt-financed transfer with future taxes: Ricardian equivalence"
    text: |
      Consumers live for two periods, 0 and 1, and follow the standard consumption-smoothing model. They can borrow and save freely at $r$ and **correctly understand the government budget constraint**.

      The government gives consumers a one-time transfer $T>0$ in period 0 (government purchases unchanged). It is financed by government debt, and the government announces it will repay by imposing a lump-sum tax of $(1+r)T$ in period 1. There are no borrowing constraints and no uncertainty. As a result of the transfer:
    options:
      - label: "1"
        text: |
          Current consumption increases by $T$, current private saving is unchanged, and national saving decreases.
        correct: false
        why: |
          Consumers see through the future tax, so they do not spend the transfer.
      - label: "2"
        text: |
          Current consumption does not change, current private saving increases by $T$, and national saving does not change.
        correct: true
        why: |
          PVLR is unchanged, so $c_0$ is unchanged and private saving rises by $T$; government saving falls by $T$, so national saving is unchanged.
      - label: "3"
        text: |
          Current consumption increases by less than $T$, current private saving increases, and national saving decreases.
        correct: false
        why: |
          With no borrowing constraints consumption does not rise at all.
      - label: "4"
        text: |
          Current consumption does not change, current private saving does not change, and national saving increases.
        correct: false
        why: |
          Private saving rises by $T$ (income rises, consumption does not); and national saving is unchanged.
    solution: |
      The transfer raises current disposable income by $T$, but it also raises future taxes by $(1+r)T$. The present value of that future tax is

      $$\frac{1}{1+r}(1+r)T = T$$

      so **PVLR does not change**. Without borrowing constraints, **current consumption does not change**.

      Current disposable income rose by $T$ and consumption did not, so **private saving rises by $T$**. Government saving falls by $T$ because the transfer is debt-financed. Therefore **national saving does not change**.

      > [!success] Answer — **2. Current consumption does not change, current private saving increases by $T$, and national saving does not change.**

      > [!tip] 🗣️ In plain English
      > Consumers know a bill is coming next year, so they just save the handout to pay it. Private saving goes up exactly as much as government saving goes down: this is Ricardian equivalence at work.
    related_terms:
      - ricardian-equivalence
      - government-budget-constraint
      - saving
      - consumption-smoothing
    source_doc_page: 20

  - id: q19
    title: "Q19 — More capital: the real wage, labor and the labor share"
    text: |
      Competitive firms produce $Y = AK^{\alpha}N^{1-\alpha}$ ($0<\alpha<1$) and hire labor so that the real wage equals $MPN$. The capital stock $K$ increases exogenously, and households' preferences have **no income/wealth effect on labor supply**. In the new short-run equilibrium:
    options:
      - label: "1"
        text: |
          The real wage increases, labor increases, and labor's share of income increases.
        correct: false
        why: |
          The labor share is $1-\alpha$ under Cobb-Douglas and does not move (3 points partial credit for getting the wage and labor right).
      - label: "2"
        text: |
          The real wage increases, labor increases, and labor's share of income remains unchanged.
        correct: true
        why: |
          Higher $K$ raises $MPN$ (demand right), supply does not shift; both $w$ and $N$ rise while the Cobb-Douglas labor share stays $1-\alpha$.
      - label: "3"
        text: |
          The real wage remains unchanged, labor is unchanged, and labor's share of income remains unchanged.
        correct: false
        why: |
          Labor demand shifts right with higher $K$, so $w$ and $N$ change.
      - label: "4"
        text: |
          The real wage remains unchanged, labor increases, and labor's share of income increases.
        correct: false
        why: |
          The wage cannot stay put when demand shifts along an upward-sloping supply curve.
    solution: |
      Higher $K$ raises $MPN$ (complementarity) at every wage, so labor demand **shifts right**. Labor supply does **not** shift (no income effect, so even a change in PVLR does not matter). In the new equilibrium **both the real wage and labor increase**.

      **Labor share:** with Cobb-Douglas it equals the power on labor. Using $MPN = w$:

      $$\text{labor share} = \frac{wN}{Y} = \frac{(1-\alpha)AK^{\alpha}N^{-\alpha}\times N}{Y} = (1-\alpha)\frac{Y}{Y} = 1-\alpha$$

      It is **unchanged**.

      > [!success] Answer — **2. The real wage increases, labor increases, and labor's share of income remains unchanged.**

      > [!tip] 🗣️ In plain English
      > More machines make workers more valuable, so wages and employment both rise. But with Cobb-Douglas the pie is always split the same way: workers get $1-\alpha$ of income, no matter what.
    related_terms:
      - labor-share
      - cobb-douglas
      - labor-demand
      - marginal-product-of-labor
    source_doc_page: 21

  - id: q20
    title: "Q20 — Falling participation with a constant unemployment rate"
    text: |
      The population is fixed. In period 0 the labor-force participation rate is $80\%$ and the unemployment rate is $5\%$. In period 1 participation falls to $75\%$ while the unemployment rate remains $5\%$.

      Between period 0 and period 1, which statement is correct?
    options:
      - label: "1"
        text: |
          The employment-population ratio declines, and the number of unemployed workers declines.
        correct: true
        why: |
          $E/P$ falls from $0.76$ to $0.7125$; the labor force shrinks and $U/LF$ is constant, so $U$ falls.
      - label: "2"
        text: |
          The employment-population ratio declines, and the number of unemployed workers remains unchanged because the unemployment rate is unchanged.
        correct: false
        why: |
          A constant *rate* with a smaller labor force means fewer unemployed people.
      - label: "3"
        text: |
          The employment-population ratio remains unchanged because the unemployment rate remains unchanged.
        correct: false
        why: |
          $E/P = (LF/P)(1-u)$, and participation changed.
      - label: "4"
        text: |
          The employment-population ratio increases, because fewer people participate in the labor force.
        correct: false
        why: |
          Fewer participants means fewer employed relative to population.
    solution: |
      Recall $u = \dfrac{U}{LF}$, participation $=\dfrac{LF}{Pop}$ and $\dfrac{E}{Pop}$. The fraction employed out of the labor force is $1-u$, so

      $$\frac{E}{Pop} = \frac{LF}{Pop}\times\frac{E}{LF} = \frac{LF}{Pop}\times(1-u)$$

      - Period 0: $0.80\times(1-0.05) = 0.76$
      - Period 1: $0.75\times(1-0.05) = 0.7125$

      So the **employment-population ratio declines**.

      The unemployment rate is constant, $\frac{U_0}{LF_0} = \frac{U_1}{LF_1}$, and the labor force $LF = U+E$ **declined** (population fixed, participation down). Therefore $U_0 > U_1$: the **number of unemployed declines**.

      > [!success] Answer — **1. The employment-population ratio declines, and the number of unemployed workers declines.**

      > [!tip] 🗣️ In plain English
      > Some people stop looking for work altogether. That shrinks both the number of workers and the number of unemployed (while the *rate* stays at 5%), and employment relative to the whole population drops.
    related_terms:
      - epop
      - labor-force-participation
      - unemployment-rate
    source_doc_page: 22

  - id: q21
    title: "Q21 — True vs. measured TFP when capital quality rises"
    text: |
      Production is $Y_t = A_t(q_tK_t)^{0.5}N_t^{0.5}$, where $q_t$ is capital quality. Between 2024 and 2025: GDP increases by $20\%$; the physical capital stock is unchanged; labor input is unchanged; capital quality increases by $44\%$.

      An economist without capital-quality data measures TFP as $\tilde A_t = \dfrac{Y_t}{K_t^{0.5}N_t^{0.5}}$. Which statement is correct?
    options:
      - label: "1"
        text: |
          True TFP and measured TFP both increase by 20%.
        correct: false
        why: |
          True TFP is flat; only measured TFP rises 20%.
      - label: "2"
        text: |
          True TFP is unchanged, while measured TFP increases by 20%.
        correct: true
        why: |
          True: $1.2/(1.44^{0.5}) = 1.2/1.2 = 1$. Measured: $1.2/(1\times1) = 1.2$.
      - label: "3"
        text: |
          True TFP decreases by approximately 16.7%, while measured TFP increases by 20%.
        correct: false
        why: |
          $1.2/1.44$ would be the wrong calculation (forgetting the power $0.5$ on $q$); with the power, true TFP is unchanged.
      - label: "4"
        text: |
          True TFP is unchanged, while measured TFP increases by 44%.
        correct: false
        why: |
          Measured TFP rises by $20\%$ (the GDP growth), not $44\%$.
    solution: |
      **True TFP growth** (using the full production function):

      $$\frac{A_{2025}}{A_{2024}} = \frac{Y_{2025}/Y_{2024}}{(q_{2025}/q_{2024})^{0.5}(K_{2025}/K_{2024})^{0.5}(N_{2025}/N_{2024})^{0.5}} = \frac{1.2}{1.44^{0.5}\times1\times1} = \frac{1.2}{1.2} = 1$$

      **Measured TFP growth** (ignoring capital quality):

      $$\frac{\tilde A_{2025}}{\tilde A_{2024}} = \frac{1.2}{1^{0.5}\times1^{0.5}} = 1.2$$

      True TFP is **unchanged**; measured TFP rises **20%**.

      > [!success] Answer — **2. True TFP is unchanged, while measured TFP increases by 20%.**

      > [!tip] 🗣️ In plain English
      > All of the 20% output gain comes from better-quality machines, but if you can't see quality you credit it to "technology" (TFP). So measured TFP jumps 20% when true TFP hasn't moved at all.
    related_terms:
      - total-factor-productivity
      - development-accounting
      - marginal-product-of-capital
    source_doc_page: 23

  - id: q22
    title: "Q22 — (Miluim question) Real GDP per capita from nominal GDP and the deflator"
    text: |
      *This is the "Miluim question" at the end of the exam, answered only by eligible students.*

      In some country, between 2024 and 2025: nominal GDP increased from $1{,}000$ to $1{,}100$; the GDP deflator increased from $100$ to $110$; population remained unchanged. Based on these data, real GDP per capita:
    options:
      - label: "1"
        text: |
          Increased by 10%.
        correct: false
        why: |
          Nominal GDP rose 10%, but so did prices, so real GDP did not rise.
      - label: "2"
        text: |
          Decreased by 10%.
        correct: false
        why: |
          Nominal GDP and the deflator rose by the same rate, so there is no fall.
      - label: "3"
        text: |
          Did not change.
        correct: true
        why: |
          Real GDP $=$ nominal GDP / deflator $= 1{,}000/100 = 1{,}100/110 = 10$ in both years; with unchanged population per-capita real GDP is unchanged.
      - label: "4"
        text: |
          Cannot be calculated without data on employment.
        correct: false
        why: |
          Real GDP per capita needs only nominal GDP, the deflator and population.
    solution: |
      Real GDP is nominal GDP divided by the deflator (scaled by $100$):

      - 2024: $\dfrac{1{,}000}{100}\times100 = 1{,}000$
      - 2025: $\dfrac{1{,}100}{110}\times100 = 1{,}000$

      Nominal GDP and the deflator both rose by $10\%$, so **real GDP did not change**. Population did not change either, so real GDP per capita is unchanged.

      > [!success] Answer — **3. Did not change.**

      > [!tip] 🗣️ In plain English
      > In money terms GDP rose 10%, but so did prices by exactly the same amount, so people can't actually buy anything more. Real GDP per person is flat.
    related_terms:
      - gdp
      - gdp-deflator
      - real-vs-nominal
    source_doc_page: 24

---

> [!info] About this paper
> The **official Moed B 2026** final for Intermediate Macro: **21 multiple-choice questions**, 5 points each (up to 105 points, capped at 100), plus a 5-point **Miluim question** (Q22) for eligible students. Closed notes, 3 hours, with the [[Macro Equation Sheet|formula sheet]] attached. Every answer below is the **official answer key**; where the key gives partial credit for a near-miss option, it is noted on that option.

