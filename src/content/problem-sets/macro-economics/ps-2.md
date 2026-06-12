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
  - pvlr
  - lagrangian
  - intertemporal-choice
  - discount-factor
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Background Theory — Read This First
    solution: |
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
    related_terms: []
  - id: "1"
    text: |
      A Mini Life Cycle Model
    solution: |
      **Setup:** Consumer lives for 3 periods (0, 1, 2). Income: $y_0 = 100$, $y_1 = 300$, $y_2 = 25$. Real interest rate $r = 4\% = 0.04$. Discount factor: $\beta = \frac{1}{1+r} = \frac{1}{1.04} \approx 0.9615$.

      Utility: $U(c_0, c_1, c_2) = \ln(c_0) + \beta\ln(c_1) + \beta^2\ln(c_2)$

      ---

      ### Q1.1 — What life-cycle does this income pattern represent?

      The income stream $(100, 300, 25)$ follows a classic **life-cycle hump**:

      - **Period 0:** Low income — represents early working life or youth. Low earnings at the start of a career.
      - **Period 1:** Peak income — represents prime working years. The consumer is at their most productive and earns substantially more.
      - **Period 2:** Very low income — represents retirement. Earned income drops to near zero; the consumer must live off savings (or a small pension).

      This is precisely the pattern [[Life-Cycle Hypothesis|Modigliani's Life-Cycle Hypothesis]] is designed to describe. The theory predicts the consumer will *borrow* in period 0 (against future high income), *save heavily* in period 1, and *dissave* in period 2.

      ---

      ### Q1.2 — Does the consumer want equal consumption every period?

      > [!tip] Key insight
      > Check whether $\beta(1+r) = 1$.

      Calculate: $\beta(1+r) = \frac{1}{1+r} \times (1+r) = 1$.

      The Euler equation for log utility is:
      $$c_{t+1} = \beta(1+r)\, c_t = 1 \times c_t = c_t$$

      Since $\beta(1+r) = 1$ exactly, **the consumer wants perfectly equal consumption in every period**: $c_0 = c_1 = c_2$.

      The intuition: the impatience penalty of waiting (captured by $\beta < 1$) is *exactly* offset by the market reward for waiting (the interest rate $r$). There is no net gain from shifting consumption in either direction, so the consumer smooths completely.

      ---

      ### Q1.3 — What is the PVLR?

      $$\text{PVLR} = y_0 + \frac{y_1}{1+r} + \frac{y_2}{(1+r)^2}$$

      $$= 100 + \frac{300}{1.04} + \frac{25}{1.04^2}$$

      $$= 100 + 288.46 + 23.11$$

      $$\boxed{\text{PVLR} \approx 411.57}$$

      > [!example] Calculation breakdown
      > - $\frac{300}{1.04} = 288.46$ — the $300$ earned in period 1 is worth only $288.46$ in period-0 terms.
      > - $\frac{25}{1.04^2} = \frac{25}{1.0816} = 23.11$ — the $25$ earned in period 2, discounted back two periods.
      > - Total: the consumer's lifetime resources, in today's money, is **411.57**.

      ---

      ### Q1.4 — Optimal Consumption Plan

      Since we know $c_0 = c_1 = c_2 = c^*$, substitute into the budget constraint:

      $$c^* + \frac{c^*}{1+r} + \frac{c^*}{(1+r)^2} = \text{PVLR}$$

      $$c^*\left(1 + \frac{1}{1.04} + \frac{1}{1.04^2}\right) = 411.57$$

      $$c^*\left(1 + 0.9615 + 0.9246\right) = 411.57$$

      $$c^* \times 2.8861 = 411.57$$

      $$\boxed{c^* = \frac{411.57}{2.8861} \approx 142.61}$$

      **Optimal plan:** $c_0 = c_1 = c_2 \approx 142.61$

      > [!note] General formula (when $\beta(1+r) = 1$)
      > The sum $1 + \frac{1}{1+r} + \frac{1}{(1+r)^2}$ is the present value of receiving $\$1$ every period. Dividing PVLR by this sum gives equal consumption each period. This generalises: with $T+1$ periods and $\beta(1+r) = 1$, $c^* = \text{PVLR} / \sum_{t=0}^{T} \frac{1}{(1+r)^t}$.

      ---

      ### Q1.5 — Optimal Saving in Every Period

      Saving each period: $s_t = y_t - c_t$

      | Period | Income $y_t$ | Consumption $c_t$ | Saving $s_t$ | Interpretation |
      |--------|-------------|-------------------|--------------|----------------|
      | 0 | 100 | 142.61 | **−42.61** | Borrowing — income too low to fund desired consumption |
      | 1 | 300 | 142.61 | **+157.39** | Saving heavily — peak income far exceeds desired consumption |
      | 2 | 25 | 142.61 | **−117.61** | Dissaving — retirement income far too low; drawing down savings |

      This pattern — borrow young, save in prime years, dissave in retirement — is the **defining prediction** of the Life-Cycle Hypothesis.

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

      ---

      ### Q1.7 — Second Consumer with $\beta = 0.9711$

      **Setup:** Same income $(y_0=100, y_1=300, y_2=25)$ and interest rate $(r=4\%)$, but $\beta = 0.9711$.

      **Check $\beta(1+r)$:**

      $$\beta(1+r) = 0.9711 \times 1.04 = 1.0099 > 1$$

      Because $\beta(1+r) > 1$, this consumer is **more patient than the market rate implies**. The Euler equation says consumption should *grow* over time.

      **Setting up the general solution:**

      For log utility with 3 periods, the FOCs give:
      $$c_1 = \beta(1+r)\,c_0, \qquad c_2 = \beta^2(1+r)^2\,c_0$$

      Substituting into the budget constraint:

      $$c_0\left(1 + \beta + \beta^2\right) = \text{PVLR}$$

      $$c_0 = \frac{\text{PVLR}}{1 + \beta + \beta^2} = \frac{411.57}{1 + 0.9711 + 0.9430} = \frac{411.57}{2.9141} \approx 141.24$$

      $$c_1 = \beta(1+r)\,c_0 = 1.0099 \times 141.24 \approx 142.64$$

      $$c_2 = \beta^2(1+r)^2\,c_0 = (1.0099)^2 \times 141.24 \approx 144.06$$

      **Comparison:**

      | | Consumer 1 ($\beta = 1/1.04 \approx 0.9615$) | Consumer 2 ($\beta = 0.9711$) |
      |---|---|---|
      | $c_0$ | 142.61 | 141.24 |
      | $c_1$ | 142.61 | 142.64 |
      | $c_2$ | 142.61 | 144.06 |
      | Profile | Flat (perfect smoothing) | Gently rising |

      **Explanation:** Consumer 2's $\beta = 0.9711$ is *larger* than $\frac{1}{1.04} \approx 0.9615$, meaning they are more patient. Since $\beta(1+r) > 1$, the return from waiting exceeds the cost of patience, so the consumer shifts consumption toward the future. They consume *less* in period 0 and *more* in period 2, compared to Consumer 1. The difference is small because the two $\beta$ values are close ($0.9711$ vs. $0.9615$), but the direction is clear.

      > [!warning] Don't confuse the direction
      > A **higher** $\beta$ means MORE patience (valuing the future more), which means MORE saving and LOWER current consumption — the opposite of what you might initially think.
    related_terms: ["real-interest-rate", "pvlr", "income-effect", "substitution-effect"]
  - id: "2"
    text: |
      Optimal Consumption Plan with Log Utility
    solution: |
      **Setup:** 2 periods (0 and 1). Discount factor $0 < \beta < 1$. Income $y_0$ (period 0), $y_1$ (period 1). No initial assets: $a_0 = 0$. Utility each period: $u(c) = \ln(c)$. Real interest rate $r > 0$.

      Objective: $\max_{c_0, c_1} \left\{\ln(c_0) + \beta\ln(c_1)\right\}$

      ---

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

      ---

      ### Q2.2 — The Lagrangian

      Attach multiplier $\lambda$ to the budget constraint:

      $$\boxed{\mathcal{L} = \ln(c_0) + \beta\ln(c_1) + \lambda\left[y_0 + \frac{y_1}{1+r} - c_0 - \frac{c_1}{1+r}\right]}$$

      The Lagrangian reformulates the constrained problem as an *unconstrained* one. The $\lambda$ multiplier measures the marginal value of relaxing the budget constraint by $\$1$ — it is the **shadow price of wealth**.

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
    related_terms: ["pvlr", "real-interest-rate", "income-effect", "substitution-effect"]
---

## Related Notes

- [[Lec_02-Consumption and Saving]] — full lecture notes with all underlying theory
- [[Macro-Economics]] — subject hub
- [[Problem Set 1]] — previous problem set (national accounts)
- Key theoretical links: [[Euler Equation]], [[Life-Cycle Hypothesis]], [[Permanent Income Hypothesis]], [[Lagrangian Optimisation]]
