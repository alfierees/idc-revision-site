---
title: "PS2"
subject: macro-economics
source_doc: /papers/macro-economics/ps-2.pdf
tags:
  - macroeconomics
  - problem-set
  - life-cycle-model
  - consumption-smoothing
  - euler-equation
  - log-utility
  - crra-utility
  - pvlr
  - lagrangian
  - intertemporal-choice
  - discount-factor
  - income-effect
  - substitution-effect
  - borrowing-constraints
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Background Theory — Read This First

      Before diving into the questions, here is a self-contained explanation of all the concepts you need.

      ### The Core Idea: Why Smooth?

      People don't just want *more* stuff — they want it *consistently*. Eating lavishly one day and starving the next is worse than eating moderately every day, even if total calories are identical. This is formalised by **diminishing marginal utility**: each extra unit of consumption gives you less happiness than the one before. Therefore, smoothing consumption across time increases total lifetime utility.

      The Life-Cycle Model and related theories formalise exactly this.

      ---

      ### Key Concepts

      #### 1. The Discount Factor $\beta$

      People are impatient — a reward today is worth more than the same reward tomorrow. The discount factor $\beta \in (0,1)$ captures this. If you receive utility $u(c^f)$ next period, its value *today* is only $\beta \cdot u(c^f)$.

      With $T+1$ periods $(0, 1, \dots, T)$, total lifetime utility is:

      $$U = u(c_0) + \beta u(c_1) + \beta^2 u(c_2) + \dots + \beta^T u(c_T) = \sum_{t=0}^{T} \beta^t u(c_t)$$

      - **High $\beta$ (close to 1):** Patient consumer. Values future almost as much as today. Will save more.
      - **Low $\beta$ (close to 0):** Impatient consumer. Heavily discounts the future. Will spend more today.

      #### 2. The Real Interest Rate $r$

      The real interest rate is the reward for saving (or the cost of borrowing), adjusted for inflation. If you save $\$1$ today, you get $\$(1+r)$ next period in real terms.

      There is a special relationship between $\beta$ and $r$:
      - If $\beta = \frac{1}{1+r}$, then $\beta(1+r) = 1$: your impatience is exactly offset by the market return. You prefer **equal consumption every period**.
      - If $\beta > \frac{1}{1+r}$, i.e. $\beta(1+r) > 1$: you are more patient than the market. You prefer consumption to **grow over time** (save more now).
      - If $\beta < \frac{1}{1+r}$, i.e. $\beta(1+r) < 1$: you are more impatient than the market. You prefer consumption to **fall over time** (spend more now).

      #### 3. The Lifetime Budget Constraint and PVLR

      You cannot spend more over your life than you have. The **Present Value Lifetime Resources (PVLR)** discounts all future income back to today's terms:

      $$\text{PVLR} = y_0 + \frac{y_1}{1+r} + \frac{y_2}{(1+r)^2} + \dots + \frac{y_T}{(1+r)^T}$$

      The **lifetime budget constraint** is then:

      $$\boxed{c_0 + \frac{c_1}{1+r} + \frac{c_2}{(1+r)^2} + \dots = \text{PVLR}}$$

      This says the present value of all consumption must equal the present value of all resources.

      > [!info] Why discount future income?
      > $\$1$ received next period is worth only $\frac{\$1}{1+r}$ today, because $\frac{\$1}{1+r}$ saved now grows to $\$1$ by next period. Future incomes must be converted to today's terms before summing.

      #### 4. Log Utility

      The most common utility function in these problems is $u(c) = \ln(c)$. Its key properties:
      - $u'(c) = \frac{1}{c} > 0$ — more consumption is always better.
      - $u''(c) = -\frac{1}{c^2} < 0$ — diminishing marginal utility (the smoothing motive).
      - It delivers clean, closed-form solutions.

      #### 5. The Euler Equation

      The **Euler equation** is the optimality condition for intertemporal consumption. It says the benefit of consuming one unit today must equal the benefit of saving it and consuming next period:

      $$\boxed{u'(c_t) = \beta(1+r)\, u'(c_{t+1})}$$

      For log utility $u'(c) = 1/c$, this becomes:

      $$\frac{1}{c_t} = \beta(1+r) \cdot \frac{1}{c_{t+1}} \implies c_{t+1} = \beta(1+r)\, c_t$$

      This tells us the **growth rate of consumption** over time. Consumption grows if and only if $\beta(1+r) > 1$.

      #### 6. Solving with the Lagrangian

      To find the optimal consumption plan formally, we set up a **Lagrangian** — a technique for constrained optimisation. For a two-period problem:

      $$\mathcal{L} = \ln(c_0) + \beta\ln(c_1) + \lambda\left[y_0 + \frac{y_1}{1+r} - c_0 - \frac{c_1}{1+r}\right]$$

      The $\lambda$ (multiplier) enforces the budget constraint. We take derivatives with respect to $c_0$, $c_1$, and $\lambda$, set equal to zero:

      - $\frac{\partial \mathcal{L}}{\partial c_0} = 0 \implies \frac{1}{c_0} = \lambda$
      - $\frac{\partial \mathcal{L}}{\partial c_1} = 0 \implies \frac{\beta}{c_1} = \frac{\lambda}{1+r}$
      - $\frac{\partial \mathcal{L}}{\partial \lambda} = 0 \implies$ budget constraint holds with equality.

      Dividing the first two gives the Euler equation. The budget constraint then pins down the level of consumption.

      #### 7. Saving

      Saving in period $t$ is simply income minus consumption:

      $$s_t = y_t - c_t$$

      Positive saving means the consumer is a **lender** (accumulating assets). Negative saving means they are a **borrower** (taking on debt). Over the whole lifetime, the sum of all discounted saving must equal zero (you can't die in debt or leave resources unconsumed).
    solution: ""
    related_terms: []
  - id: "1"
    text: |
      **A Mini Life Cycle Model**

      Assume that a consumer lives for 3 periods: 0, 1, and 2. The consumer's income streams are $y_0 = 100$, $y_1 = 300$, $y_2 = 25$. Assume that the real interest rate is constant at $4\%$, and that $\beta = \frac{1}{1+r}$. The consumer's periodic utility function is logarithmic, so that:

      $$U(c_0, c_1, c_2) = \ln(c_0) + \beta\ln(c_1) + \beta^2\ln(c_2)$$

      Answer the following questions. Provide brief explanations and/or show your work.

      1. Briefly discuss — what sort of life cycle evolution can these assumptions correspond to?
      2. Does the consumer want to consume equal quantities every period? Why or why not?
      3. What is the consumer's PVLR?
      4. Calculate the consumer's optimal consumption plan (i.e. how much consumption in every period).
      5. Calculate the consumer's optimal saving in every period.
      6. How does the consumer's wealth evolve over his/her life?
      7. Suppose that another consumer faces the same income process and interest rate, but has a different discount factor: $\beta = 0.9711$. Solve for the optimal consumption plan for the second consumer. Briefly explain the difference.
    solution: |
      ### Q1.1 — What life-cycle does this income pattern represent?

      The income stream $(100, 300, 25)$ follows a classic **life-cycle hump**:

      - **Period 0:** Low income — represents early working life or youth. Low earnings at the start of a career (e.g. studying and working part time).
      - **Period 1:** Peak income — represents prime working years. The consumer is at their most productive and earns substantially more.
      - **Period 2:** Very low income — represents retirement. Earned income drops to near zero; the consumer must live off savings (or a small pension).

      This is precisely the pattern [[Life-Cycle Hypothesis|Modigliani's Life-Cycle Hypothesis]] is designed to describe. The theory predicts the consumer will *borrow* in period 0 (against future high income), *save heavily* in period 1, and *dissave* in period 2.

      > [!tip] 🗣️ In plain English
      > The income pattern (100, 300, 25) is the classic **life-cycle hump** — poor when young, rich in your prime working years, poor again in retirement. That shape is exactly what the Life-Cycle Hypothesis was built to describe.

      ---

      ### Q1.2 — Does the consumer want equal consumption every period?

      > [!tip] Key insight
      > Check whether $\beta(1+r) = 1$.

      Calculate: $\beta(1+r) = \frac{1}{1+r} \times (1+r) = 1$.

      The Euler equation for log utility is:
      $$c_{t+1} = \beta(1+r)\, c_t = 1 \times c_t = c_t$$

      Since $\beta(1+r) = 1$ exactly, **the consumer wants perfectly equal consumption in every period**: $c_0 = c_1 = c_2$.

      The intuition: the impatience penalty of waiting (captured by $\beta < 1$) is *exactly* offset by the market reward for waiting (the interest rate $r$). There is no net gain from shifting consumption in either direction, so the consumer smooths completely. Formally, the Euler equations reduce to $u'(c_0) = u'(c_1)$ and $u'(c_1) = u'(c_2)$; because utility is strictly concave, equal slopes mean equal consumptions.

      > [!tip] 🗣️ In plain English
      > **Yes** — they want the *same* amount every period. Their impatience exactly cancels the reward from saving ($\beta(1+r)=1$), so there's no gain from shifting spending in either direction and they smooth perfectly.

      ---

      ### Q1.3 — What is the PVLR?

      $$\text{PVLR} = y_0 + \frac{y_1}{1+r} + \frac{y_2}{(1+r)^2}$$

      $$= 100 + \frac{300}{1.04} + \frac{25}{1.04^2}$$

      $$= 100 + 288.462 + 23.114$$

      $$\boxed{\text{PVLR} \approx 411.58}$$

      > [!example] Calculation breakdown
      > - $\frac{300}{1.04} = 288.46$ — the $300$ earned in period 1 is worth only $288.46$ in period-0 terms.
      > - $\frac{25}{1.04^2} = \frac{25}{1.0816} = 23.11$ — the $25$ earned in period 2, discounted back two periods.
      > - Total: the consumer's lifetime resources, in today's money, is **411.58**.

      > [!tip] 🗣️ In plain English
      > Adding up all their income in **today's money** gives lifetime resources of about **412**. That's the total pot they get to spread across their whole life.

      ---

      ### Q1.4 — Optimal Consumption Plan

      Since we know $c_0 = c_1 = c_2 = c^*$, substitute into the budget constraint:

      $$c^* + \frac{c^*}{1+r} + \frac{c^*}{(1+r)^2} = \text{PVLR}$$

      $$c^*\left(1 + \frac{1}{1.04} + \frac{1}{1.04^2}\right) = 411.58$$

      $$c^*\left(1 + 0.9615 + 0.9246\right) = 411.58$$

      $$c^* \times 2.8861 = 411.58$$

      $$\boxed{c^* = \frac{411.58}{2.8861} \approx 142.61}$$

      **Optimal plan:** $c_0 = c_1 = c_2 \approx 142.61$

      > [!note] General formula (when $\beta(1+r) = 1$)
      > The sum $1 + \frac{1}{1+r} + \frac{1}{(1+r)^2}$ is the present value of receiving $\$1$ every period. Dividing PVLR by this sum gives equal consumption each period. This generalises: with $T+1$ periods and $\beta(1+r) = 1$, $c^* = \text{PVLR} / \sum_{t=0}^{T} \frac{1}{(1+r)^t}$.

      > [!tip] 🗣️ In plain English
      > Since they want equal spending, just split the ~412 pot evenly across the three periods (allowing for interest) — they consume about **143** in every period.

      ---

      ### Q1.5 — Optimal Saving in Every Period

      Saving each period: $s_t = y_t - c_t$

      | Period | Income $y_t$ | Consumption $c_t$ | Saving $s_t$ | Interpretation |
      |--------|-------------|-------------------|--------------|----------------|
      | 0 | 100 | 142.61 | **−42.61** | Borrowing — income too low to fund desired consumption |
      | 1 | 300 | 142.61 | **+157.39** | Saving heavily — peak income far exceeds desired consumption |
      | 2 | 25 | 142.61 | **−117.61** | Dissaving — retirement income far too low; drawing down savings |

      This pattern — borrow young, save in prime years, dissave in retirement — is the **defining prediction** of the Life-Cycle Hypothesis.

      > [!tip] 🗣️ In plain English
      > Saving is just income minus what they consume. So they **borrow when young** (−43), **save hard** in the prime earning years (+157), and **run it all down** in retirement (−118).

      ---

      ### Q1.6 — Evolution of Wealth

      Wealth (end-of-period assets) evolves as: $a_{t+1} = (1+r)\,a_t + y_t - c_t$

      Starting with $a_0 = 0$:

      $$a_1 = (1+r) \times 0 + 100 - 142.61 = -42.61$$

      $$a_2 = 1.04 \times (-42.61) + 300 - 142.61 = -44.31 + 157.39 = +113.08$$

      $$a_3 = 1.04 \times 113.08 + 25 - 142.61 = 117.60 + 25 - 142.61 \approx 0 \;\checkmark$$

      | End of period | Wealth $a$ | State |
      |--------------|------------|-------|
      | Start ($a_0$) | 0 | No initial assets |
      | End of period 0 ($a_1$) | −42.61 | In debt (borrowed against period 1 income) |
      | End of period 1 ($a_2$) | +113.08 | Positive savings (accumulated during peak earning) |
      | End of period 2 ($a_3$) | ≈ 0 | Fully depleted (as expected — no bequest motive) |

      > [!tip] The wealth hump
      > The classic life-cycle wealth profile: negative early, rising to a peak at/near retirement, then falling back to zero. This is confirmed in US Survey of Consumer Finances, Canadian StatCan data, and UK IFS data.

      > [!tip] 🗣️ In plain English
      > Wealth starts at zero, dips into **debt** (about −43), climbs to a **peak** (about +113) after the high-earning year, then falls back to zero at the end of life — the classic "wealth hump".

      ---

      ### Q1.7 — Second Consumer with $\beta = 0.9711$

      **Setup:** Same income $(y_0=100, y_1=300, y_2=25)$ and interest rate $(r=4\%)$, but $\beta = 0.9711$. The PVLR is identical to the first consumer's — same income process, same interest rate.

      **Check $\beta(1+r)$:**

      $$\beta(1+r) = 0.9711 \times 1.04 = 1.0099 > 1$$

      Because $\beta(1+r) > 1$, this consumer is **more patient than the market rate implies**. The Euler equation says consumption should *grow* over time.

      **Setting up the general solution:**

      For log utility with 3 periods, the FOCs give:
      $$c_1 = \beta(1+r)\,c_0, \qquad c_2 = \beta^2(1+r)^2\,c_0$$

      Substituting into the budget constraint:

      $$c_0\left(1 + \beta + \beta^2\right) = \text{PVLR}$$

      $$c_0 = \frac{\text{PVLR}}{1 + \beta + \beta^2} = \frac{411.58}{1 + 0.9711 + 0.9430} = \frac{411.58}{2.9141} \approx 141.23$$

      $$c_1 = \beta(1+r)\,c_0 = 1.0099 \times 141.23 \approx 142.64$$

      $$c_2 = \beta^2(1+r)^2\,c_0 = (1.0099)^2 \times 141.23 \approx 144.06$$

      **Comparison:**

      | | Consumer 1 ($\beta = 1/1.04 \approx 0.9615$) | Consumer 2 ($\beta = 0.9711$) |
      |---|---|---|
      | $c_0$ | 142.61 | 141.23 |
      | $c_1$ | 142.61 | 142.64 |
      | $c_2$ | 142.61 | 144.06 |
      | Profile | Flat (perfect smoothing) | Gently rising |

      **Explanation:** Consumer 2's $\beta = 0.9711$ is *larger* than $\frac{1}{1.04} \approx 0.9615$, meaning they are more patient. Since $\beta(1+r) > 1$, the return from waiting exceeds the cost of patience, so the consumer shifts consumption toward the future. They consume *less* in period 0 and *more* in period 2, compared to Consumer 1. The difference is small because the two $\beta$ values are close ($0.9711$ vs. $0.9615$), but the direction is clear.

      > [!warning] Don't confuse the direction
      > A **higher** $\beta$ means MORE patience (valuing the future more), which means MORE saving and LOWER current consumption — the opposite of what you might initially think.

      > [!tip] 🗣️ In plain English
      > A second person who values the future more (higher $\beta$) consumes a bit **less now** and **more later** — a gently *rising* spending path instead of a flat one. Same lifetime resources, just tilted towards the future.
    related_terms: ["real-interest-rate", "pvlr", "income-effect", "substitution-effect"]
  - id: "2"
    text: |
      **Optimal Consumption Plan with Log Utility**

      Assume that:

      - consumers live for two periods
      - they discount the future with a discount factor $0 < \beta < 1$
      - income in the first period is $y_0$; income in the second period is $y_1$; no initial assets: $a_0 = 0$
      - the utility function in each period is $u(c) = \ln(c)$
      - the real interest rate is some positive constant $r > 0$

      As a result, the objective function is to choose $c_0$ and $c_1$ in order to maximize the discounted sum of utilities:

      $$\max_{c_0, c_1} \left\{\ln(c_0) + \beta\ln(c_1)\right\}$$

      Answer the following questions. Provide brief explanations and/or show your work.

      1. What is the lifetime budget constraint?
      2. Write the Lagrangian for this problem.
      3. Derive the first order conditions.
      4. What is the Euler equation for this problem? Use it to express $c_1$ as a function of $r$, $\beta$, $c_0$.
      5. Substitute your answer for $c_1$ into the budget constraint and use it to solve for $c_0$, and then for $c_1$.
      6. Derive a term for savings in the first period as a function of $y_0$, $y_1$, $r$, $\beta$.
      7. Consider each of the following changes in isolation (i.e. keep everything else constant and change just one thing). For each, will the consumer save more or less? Show using the solution to the previous part and explain why.
         - (a) Higher $\beta$
         - (b) Higher $y_0$
         - (c) Higher $y_1$
    solution: |
      ### Q2.1 — Lifetime Budget Constraint

      **Sequential constraints:**
      - Period 0: $c_0 + a_1 = y_0 + a_0 = y_0 \implies a_1 = y_0 - c_0$
      - Period 1: $c_1 = y_1 + (1+r)\,a_1$

      Substitute $a_1 = y_0 - c_0$ into the period-1 constraint:
      $$c_1 = y_1 + (1+r)(y_0 - c_0)$$

      Rearrange to the **present-value (lifetime) form** by dividing through by $(1+r)$ and collecting:

      $$\boxed{c_0 + \frac{c_1}{1+r} = y_0 + \frac{y_1}{1+r}}$$

      > [!info] Reading the constraint
      > The left side is the present value of all consumption; the right side is the PVLR (present value of lifetime resources). Since $a_0 = 0$, resources are just the two income streams. The constraint says: **you cannot spend more in present-value terms than you have**.

      > [!tip] 🗣️ In plain English
      > This is just the "you can't spend more than your **lifetime resources**" rule, written in today's money: today's spending plus discounted future spending must equal today's income plus discounted future income.

      ---

      ### Q2.2 — The Lagrangian

      Attach multiplier $\lambda$ to the budget constraint:

      $$\boxed{\mathcal{L} = \ln(c_0) + \beta\ln(c_1) + \lambda\left[y_0 + \frac{y_1}{1+r} - c_0 - \frac{c_1}{1+r}\right]}$$

      The Lagrangian reformulates the constrained problem as an *unconstrained* one. The $\lambda$ multiplier measures the marginal value of relaxing the budget constraint by $\$1$ — it is the **shadow price of wealth**.

      > [!tip] 🗣️ In plain English
      > The **Lagrangian** is just the standard tool for optimising with a constraint: bolt the budget rule onto the utility function with a multiplier $\lambda$, and then you can maximise as if there were no constraint at all.

      ---

      ### Q2.3 — First Order Conditions

      Differentiate $\mathcal{L}$ with respect to each choice variable and set to zero:

      $$\frac{\partial \mathcal{L}}{\partial c_0} = 0: \qquad \frac{1}{c_0} = \lambda \tag{1}$$

      $$\frac{\partial \mathcal{L}}{\partial c_1} = 0: \qquad \frac{\beta}{c_1} = \frac{\lambda}{1+r} \tag{2}$$

      $$\frac{\partial \mathcal{L}}{\partial \lambda} = 0: \qquad c_0 + \frac{c_1}{1+r} = y_0 + \frac{y_1}{1+r} \tag{3}$$

      > [!tip] Interpreting the FOCs
      > - Equation (1): the marginal utility of current consumption equals $\lambda$, the shadow price of wealth.
      > - Equation (2): the marginal utility of future consumption, discounted by $\beta$ and by $\frac{1}{1+r}$ (since saving $\$1$ now yields $\$(1+r)$ later), also equals $\lambda$.
      > - Equation (3): the budget constraint holds exactly at the optimum (no money left on the table).

      > [!tip] 🗣️ In plain English
      > Take derivatives and set them to zero — these **first-order conditions** are the maths that finds the best plan. One equation per choice ($c_0$, $c_1$), plus one saying the budget must exactly balance.

      ---

      ### Q2.4 — The Euler Equation

      Divide equation (1) by equation (2):

      $$\frac{1/c_0}{\beta/c_1} = \frac{\lambda}{\lambda/(1+r)}$$

      $$\frac{c_1}{\beta c_0} = (1+r)$$

      $$\boxed{c_1 = \beta(1+r)\,c_0}$$

      This is the **Euler equation** for log utility. It pins down the *ratio* of future to current consumption. You can read it as: "future consumption is $\beta(1+r)$ times current consumption."

      As noted in the theory section:
      - If $\beta(1+r) = 1$: flat consumption profile.
      - If $\beta(1+r) > 1$: rising consumption (save more today).
      - If $\beta(1+r) < 1$: falling consumption (spend more today).

      > [!tip] 🗣️ In plain English
      > Dividing the two FOCs gives the **Euler equation**, $c_1=\beta(1+r)c_0$ — a simple rule that just says whether your spending should **rise, fall, or stay flat** over time, depending on whether $\beta(1+r)$ is above, below, or equal to 1.

      ---

      ### Q2.5 — Solving for $c_0$ and $c_1$

      **Step 1:** Substitute $c_1 = \beta(1+r)c_0$ into the budget constraint (3):

      $$c_0 + \frac{\beta(1+r)c_0}{1+r} = y_0 + \frac{y_1}{1+r}$$

      $$c_0 + \beta c_0 = y_0 + \frac{y_1}{1+r}$$

      $$c_0(1+\beta) = y_0 + \frac{y_1}{1+r}$$

      $$\boxed{c_0 = \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right] = \frac{\text{PVLR}}{1+\beta}}$$

      **Step 2:** Substitute back to find $c_1$:

      $$c_1 = \beta(1+r)\,c_0 = \frac{\beta(1+r)}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right]$$

      $$\boxed{c_1 = \frac{\beta}{1+\beta}\left[y_0(1+r) + y_1\right]}$$

      > [!example] Intuition for $c_0 = \frac{\text{PVLR}}{1+\beta}$
      > The consumer splits PVLR between two periods. With log utility, the "weight" on each period is proportional to its coefficient in the utility function: period 0 gets weight 1, period 1 gets weight $\beta$. The share going to period 0 is $\frac{1}{1+\beta}$ of total resources, and similarly $\frac{\beta}{1+\beta}$ is the *future value* share going to period 1.

      > [!tip] 🗣️ In plain English
      > It all boils down to one clean rule: **spend a fixed fraction $\tfrac{1}{1+\beta}$ of your lifetime resources today**, and the rest later. The more patient you are (bigger $\beta$), the smaller today's share.

      ---

      ### Q2.6 — Savings in Period 0

      $$s_0 = y_0 - c_0 = y_0 - \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right]$$

      $$= \frac{y_0(1+\beta) - y_0 - y_1/(1+r)}{1+\beta}$$

      $$\boxed{s_0 = \frac{1}{1+\beta}\left[\beta y_0 - \frac{y_1}{1+r}\right]}$$

      > [!info] Reading the savings formula
      > Savings is driven by two forces:
      > - $+\beta y_0$: The patient part of the consumer (weight $\beta$) wants to defer a share of today's income.
      > - $-\frac{y_1}{1+r}$: The consumer knows income is coming in period 1, so borrows against it (reducing today's saving).
      >
      > The consumer saves if $\beta y_0 > \frac{y_1}{1+r}$ — i.e. if today's income is large relative to discounted future income.

      > [!tip] 🗣️ In plain English
      > Saving is simply whatever's left of *today's* income after that spending. It's **positive** when today's income is big relative to (discounted) future income, and **negative** — borrowing — when most of your money is still to come.

      ---

      ### Q2.7 — Comparative Statics on Savings

      We analyse how $s_0 = \frac{\beta y_0 - y_1/(1+r)}{1+\beta}$ responds to each change.

      #### (a) Higher $\beta$ — Does the consumer save more or less?

      Differentiate $s_0$ with respect to $\beta$:

      $$\frac{\partial s_0}{\partial \beta} = \frac{y_0(1+\beta) - \left[\beta y_0 - \frac{y_1}{1+r}\right]}{(1+\beta)^2} = \frac{y_0 + \frac{y_1}{1+r}}{(1+\beta)^2} = \frac{\text{PVLR}}{(1+\beta)^2} > 0$$

      **The consumer saves more** when $\beta$ increases.

      **Why?** A higher $\beta$ means the consumer values future consumption relatively more. Since the Euler equation says $c_1 = \beta(1+r)c_0$, a higher $\beta$ directly raises the desired ratio $c_1/c_0$ — the consumer wants a bigger future consumption relative to today. Achieving this requires consuming less today and saving more.

      ---

      #### (b) Higher $y_0$ — Does the consumer save more or less?

      $$\frac{\partial s_0}{\partial y_0} = \frac{\beta}{1+\beta} > 0$$

      **The consumer saves more** when current income $y_0$ rises.

      **Why?** Out of every extra dollar of current income, the consumer spends $\frac{1}{1+\beta}$ and saves $\frac{\beta}{1+\beta}$. Since they want to smooth the windfall across both periods, they do not spend it all today. The fraction saved is always positive (and less than 1), consistent with the PIH: **transitory income shocks are mostly saved**.

      > [!warning] MPC < 1
      > Note that $\frac{\partial c_0}{\partial y_0} = \frac{1}{1+\beta} < 1$. The marginal propensity to consume out of current income is less than one — the consumer saves part of any income increase. This contradicts the naive Keynesian model ($\text{MPC} = c$, assumed constant and equal to 1).

      ---

      #### (c) Higher $y_1$ — Does the consumer save more or less?

      $$\frac{\partial s_0}{\partial y_1} = \frac{-1}{(1+\beta)(1+r)} < 0$$

      **The consumer saves less** (borrows more) when future income $y_1$ rises.

      **Why?** If you know you will be richer next period, you have less reason to save today — you can rely on future income to fund period-1 consumption. Equivalently, higher $y_1$ raises PVLR, which raises $c_0$, which reduces $s_0$. The consumer *borrows against* their higher expected future income, increasing consumption today.

      | Change | Direction of $s_0$ | Intuition |
      |--------|--------------------|-----------|
      | Higher $\beta$ | $\uparrow$ Save more | More patience → shift consumption to future |
      | Higher $y_0$ | $\uparrow$ Save more | More current income → smooth it across periods |
      | Higher $y_1$ | $\downarrow$ Save less | Higher future income → borrow against it |

      > [!tip] 🗣️ In plain English
      > All three reactions make sense once you think in lifetime terms: more patient → **save more**; richer today → **save more** (spread the windfall over both periods); richer *tomorrow* → **save less / borrow** (lean on the future income). Key takeaway: you only spend *part* of any extra income — the marginal propensity to consume is **less than 1**, unlike the naive Keynesian view.
    related_terms: ["pvlr", "real-interest-rate", "income-effect", "substitution-effect"]
  - id: "3"
    text: |
      *(TA session)*

      **CRRA Utility Function, Income and Substitution Effects**

      The purpose of this question is to: (i) have another practice at deriving the optimal consumption plan; (ii) illustrate the potentially competing income and substitution effects that we discussed in class.

      One of the most widely used utility functions in macroeconomic research is:

      $$u(c) = \frac{c^{1-\frac{1}{\sigma}}}{1-\frac{1}{\sigma}}, \qquad \sigma > 0$$

      (This is usually called either the constant relative risk aversion (CRRA) utility function or the iso-elastic utility function.)

      Assume that:

      - consumers live for two periods
      - they discount the future with a discount factor $0 < \beta < 1$
      - income in the first period is $y_0$; income in the second period is $y_1$; no initial assets: $a_0 = 0$
      - the utility function in each period is the CRRA utility function
      - the real interest rate is some positive constant $r > 0$

      Answer the following:

      1. What is the lifetime budget constraint?
      2. Write the Lagrangian for this problem.
      3. Derive the first order conditions.
      4. What is the Euler equation for this problem? Use it to express $c_1$ as a function of $r$, $\beta$, $\sigma$, $c_0$.
      5. Assume that $y_0 = 0$ and $y_1 > 0$ (so that the consumer is necessarily a borrower). Substitute your answer for $c_1$ into the budget constraint and use it to solve for $c_0$. Use your solution to show that in this case there is no ambiguity and that a higher $r$ will definitely lower current consumption.
      6. Now assume that $y_0 > 0$ and $y_1 = 0$ (so that the consumer is necessarily a lender). Substitute your answer for $c_1$ from the Euler equation into the budget constraint and use it to solve for $c_0$. Use your solution to show that in this case there is ambiguity and that the effect of $r$ on current consumption depends on the value of $\sigma$. Briefly discuss the competing effects. What should we assume about $\sigma$ in order to be consistent with the assumption we made in class about the effect of $r$ on current consumption?
    solution: |
      ### Q3.1 — Lifetime Budget Constraint

      This is a standard two-period problem, exactly as in Question 2 — the budget constraint does not depend on the utility function. With no initial assets:

      $$\boxed{c_0 + \frac{c_1}{1+r} = y_0 + \frac{y_1}{1+r}}$$

      > [!tip] 🗣️ In plain English
      > Changing the utility function changes *tastes*, not the *budget* — so the constraint is the same "lifetime spending = lifetime resources" rule as before.

      ---

      ### Q3.2 — The Lagrangian

      Attach multiplier $\lambda$ to the budget constraint:

      $$\boxed{\mathcal{L} = \frac{c_0^{1-\frac{1}{\sigma}}}{1-\frac{1}{\sigma}} + \beta\,\frac{c_1^{1-\frac{1}{\sigma}}}{1-\frac{1}{\sigma}} + \lambda\left[y_0 + \frac{y_1}{1+r} - c_0 - \frac{c_1}{1+r}\right]}$$

      > [!tip] 🗣️ In plain English
      > Same recipe as Question 2: utility function plus $\lambda$ times the budget rule. Only the utility term looks scarier.

      ---

      ### Q3.3 — First Order Conditions

      Note that $u'(c) = c^{-\frac{1}{\sigma}}$. Differentiate with respect to $c_0$, $c_1$, and $\lambda$:

      $$\frac{\partial \mathcal{L}}{\partial c_0} = 0: \qquad c_0^{-\frac{1}{\sigma}} = \lambda \tag{1}$$

      $$\frac{\partial \mathcal{L}}{\partial c_1} = 0: \qquad \beta\, c_1^{-\frac{1}{\sigma}} = \frac{\lambda}{1+r} \tag{2}$$

      $$\frac{\partial \mathcal{L}}{\partial \lambda} = 0: \qquad c_0 + \frac{c_1}{1+r} = y_0 + \frac{y_1}{1+r} \tag{3}$$

      > [!tip] 🗣️ In plain English
      > Identical structure to the log case — the only change is that marginal utility is now $c^{-1/\sigma}$ instead of $1/c$. (Log utility is the special case $\sigma = 1$.)

      ---

      ### Q3.4 — The Euler Equation

      Divide (2) by (1):

      $$\frac{\beta\, c_1^{-\frac{1}{\sigma}}}{c_0^{-\frac{1}{\sigma}}} = \frac{1}{1+r}$$

      $$c_0^{-\frac{1}{\sigma}} = \beta(1+r)\, c_1^{-\frac{1}{\sigma}}$$

      Raise both sides to the power $-\sigma$:

      $$\boxed{c_1 = \beta^{\sigma}(1+r)^{\sigma}\, c_0}$$

      The growth rate of consumption is now $\beta^\sigma (1+r)^\sigma$. Writing it as $\frac{c_1}{c_0} = \left[\beta(1+r)\right]^\sigma$ shows that $\sigma$ controls **how sensitive the consumption profile is to prices**: the higher is $\sigma$, the more the slope of consumption reacts to changes in $r$.

      > [!info] Two extreme cases
      > - $\sigma = 0$: $c_1 = c_0$ no matter what — prices don't matter at all; the consumer just wants equal consumption.
      > - $\sigma \to \infty$: infinitely sensitive to prices — the consumer piles everything into one period (the second if $\beta(1+r) > 1$, the first if $\beta(1+r) < 1$).

      > [!tip] 🗣️ In plain English
      > Same Euler logic as before, but with a dial: $\sigma$ measures **how strongly you react to interest rates**. Big $\sigma$ → you happily tilt spending across time to chase returns; small $\sigma$ → you insist on smooth spending whatever the rate.

      ---

      ### Q3.5 — Pure Borrower ($y_0 = 0$, $y_1 > 0$): higher $r$ unambiguously lowers $c_0$

      Substitute $c_1 = \beta^\sigma(1+r)^\sigma c_0$ into the budget constraint with $y_0 = 0$:

      $$c_0 + \frac{\beta^\sigma(1+r)^\sigma c_0}{1+r} = \frac{y_1}{1+r}$$

      $$c_0\left[1 + \beta^\sigma(1+r)^{\sigma-1}\right] = \frac{y_1}{1+r}$$

      Multiply both sides by $(1+r)$:

      $$c_0\left[1 + r + \beta^\sigma(1+r)^{\sigma}\right] = y_1$$

      $$\boxed{c_0 = \frac{y_1}{1 + r + \beta^\sigma(1+r)^{\sigma}}}$$

      **Effect of a higher $r$:** both terms in the denominator that involve $r$ — the $(1+r)$ and the $\beta^\sigma(1+r)^\sigma$ — are *increasing* in $r$ (for any $\sigma > 0$). So a higher $r$ makes the denominator larger and **unambiguously lowers $c_0$**.

      **Why no ambiguity?** For a borrower, the income effect and substitution effect *push the same way*:
      - **Substitution effect:** current consumption is now relatively more expensive → consume less today.
      - **Income effect:** a higher $r$ makes borrowing against $y_1$ more costly — the present value of future income $\frac{y_1}{1+r}$ *falls* — a negative income shock → consume less today.

      > [!success] Answer
      > $c_0 = \dfrac{y_1}{1 + r + \beta^\sigma(1+r)^{\sigma}}$. A higher $r$ raises the denominator for any $\sigma > 0$, so current consumption **definitely falls** — for a borrower, income and substitution effects reinforce each other.

      > [!tip] 🗣️ In plain English
      > If all your money arrives *tomorrow*, a higher interest rate hurts you twice: borrowing gets pricier (so you cut back) **and** your future income is worth less in today's terms (so you cut back again). Both effects point down — no ambiguity.

      ---

      ### Q3.6 — Pure Lender ($y_0 > 0$, $y_1 = 0$): the effect of $r$ depends on $\sigma$

      Substitute the Euler equation into the budget constraint with $y_1 = 0$:

      $$c_0 + \frac{\beta^\sigma(1+r)^\sigma c_0}{1+r} = y_0$$

      $$c_0\left[1 + \beta^\sigma(1+r)^{\sigma-1}\right] = y_0$$

      $$\boxed{c_0 = \frac{y_0}{1 + \beta^\sigma(1+r)^{\sigma-1}}}$$

      Now the only $r$-term in the denominator is $(1+r)^{\sigma-1}$, and its behaviour depends on the sign of the exponent $\sigma - 1$:

      | Case | What happens to the denominator when $r$ rises | Effect on $c_0$ | Interpretation |
      |------|------------------------------------------------|-----------------|----------------|
      | $\sigma = 1$ (log utility) | Unchanged — $(1+r)^0 = 1$ | No effect | Income and substitution effects **exactly offset** |
      | $\sigma > 1$ | Larger | $c_0$ **falls** | **Substitution effect dominates** |
      | $\sigma < 1$ | Smaller | $c_0$ **rises** | **Income effect dominates** |

      **The competing effects:** for a lender, a higher $r$ makes current consumption relatively more expensive (substitution effect → consume less today), but it is also *good news* in terms of income — savings earn more (income effect → consume more today). Which wins depends on how price-sensitive the consumer is, i.e. on $\sigma$.

      **Consistency with class:** in class we assumed that a higher $r$ *lowers* current consumption (consumption demand slopes down in $r$). To be consistent with that, we should assume $\boxed{\sigma > 1}$ — the substitution effect dominates.

      > [!success] Answer
      > $c_0 = \dfrac{y_0}{1 + \beta^\sigma(1+r)^{\sigma-1}}$. The effect of $r$ is ambiguous: $\sigma = 1$ → no effect; $\sigma > 1$ → $c_0$ falls (substitution dominates); $\sigma < 1$ → $c_0$ rises (income dominates). Assuming $\sigma > 1$ matches the class assumption that a higher $r$ lowers current consumption.

      > [!tip] 🗣️ In plain English
      > If all your money arrives *today*, a higher rate pulls you two ways: saving pays better (spend less now), but you're also effectively richer (spend more now). The tie-breaker is $\sigma$: above 1 the "saving pays better" force wins, below 1 the "I'm richer" force wins, and at exactly 1 (log utility) they cancel perfectly.
    related_terms: ["euler-equation", "income-effect", "substitution-effect", "lagrangian-optimisation", "intertemporal-choice"]
  - id: "4"
    text: |
      *(TA session)*

      **Ranking Consumption Responses under the Permanent Income Hypothesis**

      Use the predictions of the permanent income hypothesis that we discussed in class to rank the following from the biggest to the smallest consumption increase among recipients. (For simplicity, you may assume that the desired consumption plan is spending equal amounts over the life cycle.) Explain your answer.

      - (a) an unexpected and explicitly temporary tax rebate of $\$300$ (assume the consumer believes that he/she will never have to pay this back to the government)
      - (b) a special dividend on a stock that the consumer owns of $\$300$ per shareholder, that also lowers the value of the stock by $\$300$ per share (assume the consumer owns one stock)
      - (c) an unexpected raise of $\$300$ per year, effective immediately
    solution: |
      ### Q4 — The Ranking

      > [!success] Answer
      > $$\boxed{(c) > (a) > (b)}$$

      The PIH says consumption responds to changes in **permanent income** (equivalently, PVLR spread over the remaining lifetime) — not to the cash that happens to land in your account this year. So rank each event by how much it changes PVLR *per year of remaining life*:

      **(c) A permanent raise of $\$300$ per year — biggest response.**
      There is no need to spread the increase over time, because the consumer receives the extra amount *every year*. Permanent income rises by the full $\$300$, so annual consumption can rise by (roughly) the full $\$300$.

      **(a) A one-off $\$300$ rebate — small response.**
      This is a one-time increase in lifetime resources, so the consumer smooths it. With equal spending over $X$ remaining periods, consumption rises by only about $\frac{300}{X}$ per year — a small fraction of the windfall; the rest is saved.

      **(b) The special dividend — zero response.**
      **Nothing happens to PVLR.** The consumer receives $\$300$ in cash today, but the value of the stock they own falls by exactly $\$300$. Total lifetime resources are unchanged — the money has just been moved from one pocket (the asset) to another (cash). With no change in PVLR, there is **no reason to change consumption at all**.

      | Event | Change in PVLR | Change in annual consumption |
      |-------|----------------|------------------------------|
      | (c) Permanent raise of $\$300$/yr | $+\$300$ every year | $\approx +\$300$ |
      | (a) One-off $\$300$ rebate | $+\$300$ once | $\approx +\$300/X$ (spread over $X$ periods) |
      | (b) Dividend that cuts the stock value by $\$300$ | $0$ | $0$ |

      > [!tip] 🗣️ In plain English
      > Ask one question for each windfall: "am I actually richer over my *lifetime*, and by how much per year?" A permanent raise makes you richer every single year (spend it all), a one-off cheque makes you slightly richer per year of remaining life (spend a sliver, save the rest), and a dividend that knocks the same amount off your stock's value doesn't make you richer at all (spend nothing extra).
    related_terms: ["permanent-income-hypothesis", "pvlr", "consumption-smoothing"]
  - id: "5"
    text: |
      *(extra practice)*

      **Identifying Lenders and Borrowers from Consumption Responses**

      Assume that consumers behave according to the assumptions of the consumption model described in class. Assume that you collected data on their consumption and the real interest rate. You may also assume that all consumers share the same preferences and the same expectations regarding their current and future income.

      1. In your data, you observe that some consumers increased their consumption when the real interest rate increased. Can you say with certainty whether these consumers were lenders/borrowers/neither?
      2. Other consumers decreased their consumption when the real interest rate increased. Can you say with certainty whether these consumers were lenders/borrowers/neither?
    solution: |
      ### Setting up: what does a higher $r$ do?

      In general, an increase in $r$ triggers **both** income and substitution effects.

      **Substitution effect (same direction for everyone).** Captured by the Euler equation: current consumption becomes relatively more expensive, so consumers would like to reduce it. Starting from the Euler equation holding with equality, after the rise in $r$ we have:

      $$u'(c) < \beta(1+r)\,u'(c^f)$$

      To re-optimise, the consumer must *lower* $c$ (which raises $u'(c)$) and *raise* $c^f$ (which lowers $u'(c^f)$) until equality is restored. So the substitution effect always pushes current consumption **down**.

      **Income effect (direction depends on the consumer's position).**
      - A **lender** earns interest on savings, so a higher $r$ acts like a **positive** income shock → pushes current consumption **up**.
      - A **borrower** pays interest on debt, so a higher $r$ acts like a **negative** income shock → pushes current consumption **down**.

      | | Substitution effect | Income effect | Net effect on $c$ |
      |---|---|---|---|
      | Lender | $\downarrow$ | $\uparrow$ | **Ambiguous** |
      | Borrower | $\downarrow$ | $\downarrow$ | **Unambiguously down** |

      ---

      ### Q5.1 — Consumption *increased* when $r$ rose

      > [!success] Answer
      > **Yes — these consumers must be lenders.**

      For a borrower, both effects push consumption down, so a borrower's consumption can never rise when $r$ rises. The *only* way current consumption can increase is if the consumer is a **lender** whose positive income effect outweighs the substitution effect.

      > [!tip] 🗣️ In plain English
      > Only a **saver** can end up spending *more* when rates rise — the extra interest income is the only force that pushes spending up, and only savers get it.

      ---

      ### Q5.2 — Consumption *decreased* when $r$ rose

      > [!success] Answer
      > **No — we can't tell.**

      Consumption may fall either because the consumer is a **borrower** (both effects push down), or because the consumer is a **lender** whose substitution effect happens to be stronger than the income effect. Falling consumption is consistent with both positions, so it identifies nothing with certainty.

      > [!tip] 🗣️ In plain English
      > Spending *less* after a rate rise proves nothing: borrowers always cut back, but so do savers whose "saving now pays better" motive beats their "I earn more interest" windfall. Two stories, one observation — can't tell them apart.
    related_terms: ["income-effect", "substitution-effect", "euler-equation", "real-interest-rate", "saving"]
  - id: "6"
    text: |
      *(extra practice)*

      **Jerry and George — Same PVLR, Different Timing**

      Assume that there are two consumers, Jerry and George. Both live for two periods, are price takers, and have identical utility function: $U(c_i, c_i^f) = \ln(c_i) + \beta\ln(c_i^f)$ where $0 < \beta < 1$, and $i$ can be $J$ for Jerry, or $G$ for George.

      Both consumers have initial wealth $a = 0$. The endowment (or income) process is different:

      $$\text{Jerry:} \quad y_J = y_0, \qquad y_J^f = y_1$$

      $$\text{George:} \quad y_G = \frac{y_1}{1+r}, \qquad y_G^f = (1+r)\,y_0$$

      where we assume that $y_0 > \frac{y_1}{\beta(1+r)}$.

      - (a) Write the optimization problem for each consumer. Use the lifetime budget constraint.
      - (b) Derive the Euler equation.
      - (c) Use the Euler equation and the lifetime budget constraint to solve for Jerry's and George's optimal consumption plans.
        - (i) Are the optimal consumption plans different for the two consumers? Explain why or why not.
        - (ii) Do Jerry and George engage in borrowing or lending in the first period? Calculate the amounts and explain who is borrowing and who is lending, and why.
      - (d) Now assume that the economy changes, and borrowing is no longer allowed. (To avoid unnecessary complications, you may assume that if someone wishes to lend, there is always an opportunity to do so at rate $r$, e.g. to foreigners.) **No calculations are required for the following questions, just explain.**
        - (i) Does the Euler equation that you derived in part (b) still hold for both consumers? For none? For one? Explain.
        - (ii) Assume that the government would like to give a tax rebate in order to increase **current** aggregate consumption. Is it better to give the rebate to Jerry or to George? Explain.
    solution: |
      ### Q6(a) — The Two Optimization Problems

      **Jerry:**

      $$\max_{c_J,\,c_J^f} \; \ln(c_J) + \beta\ln(c_J^f)$$

      $$\text{s.t.} \quad c_J + \frac{c_J^f}{1+r} = y_J + \frac{y_J^f}{1+r} = y_0 + \frac{y_1}{1+r}$$

      **George:**

      $$\max_{c_G,\,c_G^f} \; \ln(c_G) + \beta\ln(c_G^f)$$

      $$\text{s.t.} \quad c_G + \frac{c_G^f}{1+r} = y_G + \frac{y_G^f}{1+r} = \frac{y_1}{1+r} + \frac{(1+r)y_0}{1+r} = y_0 + \frac{y_1}{1+r}$$

      > [!info] Spot the trick
      > George's income process is engineered so that his PVLR is *exactly the same* as Jerry's: $\frac{(1+r)y_0}{1+r} = y_0$ and George's first-period income $\frac{y_1}{1+r}$ is exactly the present value of Jerry's second-period income. **Same lifetime resources, different timing.**

      > [!tip] 🗣️ In plain English
      > Jerry and George have the **same total lifetime wealth** in today's money — George's income just arrives in the opposite order. The whole question is about whether *timing* matters.

      ---

      ### Q6(b) — The Euler Equation

      Both consumers have the same log utility, so both get the same Euler equation (skipping the Lagrangian setup, which is identical to Question 2):

      $$u'(c) = \beta(1+r)\,u'(c^f) \quad\Longrightarrow\quad \frac{1}{c} = \beta(1+r)\,\frac{1}{c^f}$$

      $$\boxed{c^f = \beta(1+r)\,c}$$

      > [!tip] 🗣️ In plain English
      > Same preferences → same rule for tilting spending over time. Nothing about income timing appears in the Euler equation.

      ---

      ### Q6(c) — Optimal Consumption Plans

      From the Euler equation, $c^f = \beta(1+r)c$. Substitute into the (common) budget constraint:

      $$c + \frac{\beta(1+r)c}{1+r} = y_0 + \frac{y_1}{1+r}$$

      $$c(1+\beta) = y_0 + \frac{y_1}{1+r}$$

      $$\boxed{c = \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right], \qquad c^f = \beta(1+r)\,c = \frac{\beta}{1+\beta}\left[y_0(1+r) + y_1\right]}$$

      #### (c)(i) — Are the plans different?

      > [!success] Answer
      > **No — the two consumers have identical consumption plans.** They have the same PVLR and the same preferences, and there are no restrictions on borrowing and lending, so both can smooth consumption optimally as dictated by the Euler equation. Only *lifetime resources* matter for the plan, not the timing of income.

      > [!tip] 🗣️ In plain English
      > With a working credit market, *when* your income arrives is irrelevant — you borrow or lend to hit the same ideal spending path. Same wealth + same tastes = **identical plans**.

      #### (c)(ii) — Who borrows, who lends?

      While PVLR is identical, the *timing* of income differs: George receives more of his income in the later period (making him the likely borrower); Jerry receives more of his income early (making him the likely saver/lender). To see this precisely, compare consumption to income in the current period.

      **Jerry** (saving is $y_J - c_J$; here we compute $c_J - y_J$, consumption minus income):

      $$c_J - y_J = \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right] - y_0 = -\frac{\beta}{1+\beta}\,y_0 + \frac{y_1}{(1+\beta)(1+r)}$$

      The assumption $y_0 > \frac{y_1}{\beta(1+r)}$ means $\beta y_0 > \frac{y_1}{1+r}$, so this expression is **negative**: Jerry consumes less than his current income. **Jerry is a lender**, lending the amount

      $$s_J = y_J - c_J = \frac{\beta}{1+\beta}\,y_0 - \frac{y_1}{(1+\beta)(1+r)} > 0$$

      **George:**

      $$c_G - y_G = \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right] - \frac{y_1}{1+r} = \frac{1}{1+\beta}\,y_0 + \frac{y_1}{1+r}\left[\frac{1}{1+\beta} - 1\right] = \frac{1}{1+\beta}\,y_0 - \frac{\beta}{1+\beta}\cdot\frac{y_1}{1+r}$$

      The assumption $y_0 > \frac{y_1}{\beta(1+r)}$ implies $y_0 > \frac{\beta y_1}{1+r}$ (because $0 < \beta < 1$), so this expression is **positive**: George consumes more than his current income. **George is a borrower**, borrowing the amount

      $$c_G - y_G = \frac{1}{1+\beta}\,y_0 - \frac{\beta}{1+\beta}\cdot\frac{y_1}{1+r} > 0$$

      > [!success] Answer
      > **Jerry lends** $\frac{\beta}{1+\beta}y_0 - \frac{y_1}{(1+\beta)(1+r)}$; **George borrows** $\frac{1}{1+\beta}y_0 - \frac{\beta}{1+\beta}\frac{y_1}{1+r}$. Both amounts are positive under the assumption $y_0 > \frac{y_1}{\beta(1+r)}$. Jerry's income arrives early so he saves it forward; George's arrives late so he borrows against it.

      > [!tip] 🗣️ In plain English
      > They *spend* identically, but get there differently: Jerry's cash comes early, so he **lends** the surplus; George's comes late, so he **borrows** against it. Timing determines who's the saver and who's the debtor — not how much either consumes.

      ---

      ### Q6(d) — Borrowing Is Banned

      #### (d)(i) — Does the Euler equation still hold?

      > [!success] Answer
      > **It holds for the lender (Jerry) but not for the borrower (George).**

      The optimal plan governed by the Euler equation no longer satisfies all the constraints: there is now a **borrowing constraint**, and it *binds* for George — he wanted to borrow and can't, so he is stuck consuming his (low) current income, and his Euler equation fails to hold with equality. Jerry, who wants to *lend*, is unconstrained (lending is still allowed), so his consumption plan still obeys the Euler equation.

      > [!tip] 🗣️ In plain English
      > A borrowing ban only bites the person who wanted to borrow. George is forced off his ideal plan (Euler equation broken); Jerry, the saver, carries on exactly as before.

      #### (d)(ii) — Who should get the tax rebate?

      > [!success] Answer
      > **Give the rebate to George.**

      George is more likely to consume all (or a larger fraction) of the transfer. The binding borrowing constraint means he *wants* to consume more today but can't — so handing him cash directly raises his current consumption, roughly one-for-one. Jerry, by contrast, will smooth the rebate according to the Euler equation: his current consumption may rise, but only by a small fraction of the transfer (the rest is saved).

      > [!tip] 🗣️ In plain English
      > If the government wants spending *now*, give the money to the person who's cash-strapped and blocked from borrowing — **George** will spend it straight away, while Jerry would mostly bank it. This is exactly why real-world stimulus targets constrained households.
    related_terms: ["euler-equation", "borrowing-constraints", "consumption-smoothing", "pvlr"]
---

## Related Notes

- [[Lec_02-Consumption and Saving]] — full lecture notes with all underlying theory
- [[Macro-Economics]] — subject hub
- [[Problem Set 1]] — previous problem set (national accounts)
- Key theoretical links: [[Euler Equation]], [[Life-Cycle Hypothesis]], [[Permanent Income Hypothesis]], [[Lagrangian Optimisation]], [[Borrowing Constraints]], [[Income Effect]], [[Substitution Effect]]
