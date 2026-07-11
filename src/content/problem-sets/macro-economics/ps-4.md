---
title: "PS4"
subject: macro-economics
source_doc: /papers/macro-economics/ps-4.pdf
tags:
  - macroeconomics
  - investment
  - user-cost
  - goods-market
  - capital-accumulation
  - problem-set
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Workforce Size and Optimal Investment**

      Assume that firms make investment decisions according to the model we discussed in class. Specifically, think about a two-period model and the following assumptions:

      - $Y_t = A_t (K_t)^{0.35}(N_t)^{0.65}$ (note: this is the production function for every period)
      - $A = A^f = 5$
      - $N = 30$ and $N^f = 30$
      - $p_k = 5$ and $p_k^f = 5.1$
      - $r = 0.03$
      - $\delta = 0.1$
      - $\tau_k = 0.2$
      - $K = 100$

      **1.** Find the optimal level of $K^f$ and the optimal level of current $I$. For this, follow the usual steps:

      (a) What is the value of the user cost?
      (b) Derive a term for $MPK^f$
      (c) Equate the two to have one equation with one unknown $K^f$, and solve it.
      (d) Use the capital accumulation equation to solve for $I$

      **2.** Assume that the goods market is in equilibrium. Calculate the levels of saving and consumption in the economy in the current period.

      **3.** Assume that the labor input rises temporarily (say due to temporary work visas) so that $N = 40$ but $N^f = 30$.

      (a) Calculate the levels of GDP and GDP per worker before and after the change. Do GDP and GDP per worker increase or decrease? Briefly explain why.
      (b) Is there a new level of optimal capital in the future ($K^f$)? If so, calculate it. If not, explain why not.
      (c) What are the levels of GDP and GDP per worker in the future period?

      **4.** Now assume that the labor input rises permanently (say due to immigration or increased labor force participation) so that $N = 40$ and $N^f = 40$.

      (a) Calculate GDP in the current period. How does it compare to the GDP you calculated in part 2 and part 3(a)?
      (b) Is there a new level of optimal capital in the future ($K^f$)? If so, calculate it. If not, explain why not.
      (c) What is the level of GDP in the future period?

      **5.** Briefly explain the difference in results between parts (3) and (4).
    solution: |
      **Parameters:**

      | Symbol | Value | Symbol | Value |
      |---|---|---|---|
      | $A = A^f$ | 5 | $p_k$ | 5 |
      | $N = N^f$ | 30 | $p_k^f$ | 5.1 |
      | $K$ | 100 | $r$ | 0.03 |
      | $\alpha_K$ | 0.35 | $\delta$ | 0.1 |
      | $\alpha_N$ | 0.65 | $\tau_k$ | 0.2 |

      Production function: $Y_t = A_t (K_t)^{0.35}(N_t)^{0.65}$

      ---

      ### Part 1 — Optimal $K^f$ and Investment $I$

      #### (a) User Cost

      The user cost is the net cost to the firm of deploying one unit of capital. It equals the opportunity cost of buying capital today, minus what you recover selling it tomorrow (after depreciation), all adjusted upward for the capital income tax:

      $$\text{UC} = \frac{(1+r)\,p_k - (1-\delta)\,p_k^f}{1 - \tau_k}$$

      Plugging in:

      $$\text{UC} = \frac{(1.03)(5) - (0.9)(5.1)}{1 - 0.2} = \frac{5.15 - 4.59}{0.8} = \frac{0.56}{0.8}$$

      $$\boxed{\text{UC} = 0.70}$$

      > **Why divide by $(1 - \tau_k)$?** Capital income is taxed, so the firm only keeps $(1 - \tau_k)$ of each unit of revenue. To cover a cost of $X$, the firm needs to earn $X/(1-\tau_k)$ in gross revenue — hence the denominator.

      #### (b) Marginal Product of Capital in the Future ($MPK^f$)

      Take the partial derivative of $Y^f$ with respect to $K^f$:

      $$MPK^f = \frac{\partial Y^f}{\partial K^f} = 0.35 \cdot A^f \cdot (K^f)^{-0.65} \cdot (N^f)^{0.65}$$

      Substituting $A^f = 5$, $N^f = 30$:

      $$MPK^f = 0.35 \times 5 \times (30)^{0.65} \times (K^f)^{-0.65}$$

      $$MPK^f = 1.75 \times 9.123 \times (K^f)^{-0.65}$$

      $$MPK^f = 15.965 \times (K^f)^{-0.65}$$

      > **Intuition:** $MPK^f$ is decreasing in $K^f$ — each additional unit of capital adds less output than the last (diminishing marginal returns).

      #### (c) Solve for $K^f$

      At the optimum, firms invest until the marginal benefit equals the marginal cost:

      $$MPK^f = \text{UC}$$

      $$15.965 \times (K^f)^{-0.65} = 0.70$$

      Rearranging:

      $$(K^f)^{0.65} = \frac{15.965}{0.70} = 22.81$$

      $$K^f = (22.81)^{1/0.65} = (22.81)^{1.538}$$

      $$\boxed{K^f \approx 122.84}$$

      #### (d) Investment $I$

      Using the capital accumulation equation:

      $$K^f = (1-\delta)K + I \quad \Longrightarrow \quad I = K^f - (1-\delta)K$$

      $$I = 122.84 - (0.9)(100) = 122.84 - 90$$

      $$\boxed{I \approx 32.84}$$

      > **Note:** due to depreciation, investment is larger than the simple difference between the capital stocks in the two periods ($122.84 - 100 = 22.84$) — the firm must also replace the 10 units of capital that wear out.

      > [!tip] 🗣️ In plain English
      > The firm keeps buying machines until the last one's yearly payoff just equals the yearly cost of owning it — the **user cost**, here **0.70**. Setting payoff = cost gives a desired future capital stock of **≈ 123**, and investment is the gap you must build from today's stock of 100 up to there, *plus* replacing the 10 machines that wear out: **≈ 33**.

      ---

      ### Part 2 — Savings and Consumption in Goods Market Equilibrium

      Since the economy is in equilibrium, it must be that $S = I = 32.84$. To find consumption, first compute current GDP (which is also aggregate income):

      $$Y = 5 \times (100)^{0.35} \times (30)^{0.65} = 5 \times 5.012 \times 9.123$$

      $$\boxed{Y \approx 228.61}$$

      In goods market equilibrium (no government), $Y = C + I$. Therefore:

      $$\boxed{S = I \approx 32.84}$$

      $$\boxed{C = Y - I = 228.61 - 32.84 \approx 195.77}$$

      > **Alternative route:** the household's budget constraint. GDP is aggregate income, and income is split between consumption and saving — so consumption is the difference between aggregate income and aggregate saving.

      > [!tip] 🗣️ In plain English
      > With no government, output either gets consumed or invested, so **saving must equal investment**. The economy saves **≈ 33** (funding the machine-buying) and consumes the rest, **≈ 196**.

      ---

      ### Part 3 — Temporary Labour Increase ($N = 40$, $N^f = 30$)

      #### (a) GDP and GDP per Worker — Before and After

      **Before** ($N = 30$, $K = 100$):

      $$Y = 5 \times (100)^{0.35} \times (30)^{0.65} = 228.61 \qquad \frac{Y}{N} = \frac{228.61}{30} = 7.62$$

      **After** ($N = 40$, $K = 100$ unchanged):

      $$Y = 5 \times (100)^{0.35} \times (40)^{0.65} = 275.62 \qquad \frac{Y}{N} = \frac{275.62}{40} = 6.89$$

      | | GDP | GDP per Worker |
      |---|---|---|
      | Before ($N=30$) | 228.61 | 7.62 |
      | After ($N=40$) | **275.62** ↑ | **6.89** ↓ |

      **Why?**
      - **Total GDP rises** because the marginal product of labour is positive — more workers produce more output.
      - **GDP per worker falls** because of **diminishing marginal product of labour**. With the same capital stock ($K = 100$), each additional worker has less capital to work with. The 40th worker adds less to output than the 30th.

      #### (b) Is There a New $K^f$?

      Recall the condition that determines $K^f$:

      $$\alpha_K \cdot A^f \cdot (K^f)^{-(1-\alpha_K)} \cdot (N^f)^{1-\alpha_K} = \text{UC}$$

      The optimal $K^f$ depends on **future** labour $N^f$, not current $N$. Since $N^f = 30$ is unchanged (the visa workers are temporary — they leave), the $MPK^f$ curve does not shift and the optimal $K^f$ — and therefore current investment — is **unchanged**.

      $$\boxed{K^f \approx 122.84 \text{ (same as before)}}$$

      > **Key insight:** Firms are forward-looking. They set capital based on what labour will be available *when that capital is deployed* — not based on a temporary shock today.

      #### (c) Future GDP and GDP per Worker

      With $K^f = 122.84$ and $N^f = 30$:

      $$Y^f = 5 \times (122.84)^{0.35} \times (30)^{0.65} = 5 \times 5.386 \times 9.123$$

      $$\boxed{Y^f \approx 245.68 \qquad \frac{Y^f}{N^f} = \frac{245.68}{30} \approx 8.19}$$

      > Future GDP (245.68) exceeds current GDP (228.61) because $K^f > K$ (the capital stock grew from 100 to 122.84). Future GDP per worker (8.19) also exceeds current GDP per worker (7.62) for the same reason — each worker has more capital, and the number of workers is unchanged relative to the initial state.

      > [!tip] 🗣️ In plain English
      > A **temporary** flood of workers raises **total output** (more hands) but drags **output per worker** down — the same machines are now shared among more people. And desired future capital **doesn't budge**, because firms plan around the workers who'll actually be there next year, not a temporary crowd today.

      ---

      ### Part 4 — Permanent Labour Increase ($N = 40$ and $N^f = 40$)

      #### (a) Current GDP

      Increasing current labour input to 40 raises current GDP in **exactly the same way as in part 3(a)**:

      $$Y = 5 \times (100)^{0.35} \times (40)^{0.65} = 275.62$$

      This is higher than the 228.61 of part 2, and identical to part 3(a) — in both cases the current labour input rises to 40 while every other variable affecting *current* production is unchanged. Whether the increase is temporary or permanent makes no difference to *today's* output.

      #### (b) New Optimal $K^f$

      Now the labour increase **persists into the future period**, so $N^f = 40$ shifts the $MPK^f$ curve. The user cost is unchanged (none of its ingredients moved). Repeating the steps:

      $$MPK^f = 0.35 \times 5 \times (K^f)^{-0.65} \times (40)^{0.65}$$

      Equate to the user cost:

      $$0.35 \times 5 \times (K^f)^{-0.65} \times (40)^{0.65} = 0.7$$

      $$(K^f)^{0.65} = \frac{0.35 \times 5 \times (40)^{0.65}}{0.7} = 27.5$$

      $$\boxed{K^f = (27.5)^{1/0.65} \approx 163.79}$$

      And investment:

      $$I = K^f - (1-\delta)K = 163.79 - 0.9 \times 100$$

      $$\boxed{I \approx 73.79}$$

      #### (c) Future GDP

      With $K^f = 163.79$ and $N^f = 40$:

      $$Y^f = 5 \times (163.79)^{0.35} \times (40)^{0.65}$$

      $$\boxed{Y^f \approx 327.57}$$

      > [!tip] 🗣️ In plain English
      > When the extra workers are here to **stay**, firms know each machine will have more hands to work it next year — so machines become more valuable, and firms build the capital stock up much further (**≈ 164** instead of ≈ 123, investment **≈ 74** instead of ≈ 33). Future output jumps to **≈ 328** because *both* labour and capital are higher.

      ---

      ### Part 5 — Temporary vs Permanent: the Difference

      - In **part 3** the increase in labour input is short-lived, so it does **not** affect the capital accumulation decision — it only raises current output.
      - In **part 4** the increased labour input has **both a short- and a long-run effect**. In the short run it raises output given the same capital. In the long run, the level of capital *also* increases, because of the **complementarity between capital and labour** — more future workers raise the marginal product of every future machine. So in the future period output rises because **both capital and labour increased**.

      > [!tip] 🗣️ In plain English
      > Temporary workers change today only. Permanent workers change the *plan*: since people and machines make each other more productive, more permanent workers make firms want more machines too — so tomorrow's economy is bigger on **both** fronts.
    related_terms: ["user-cost-of-capital", "marginal-product-of-capital", "capital-accumulation-equation", "savings-investment-equilibrium", "two-period-firm-problem"]
  - id: "2"
    text: |
      **Optimism and Goods Market Equilibrium**

      Some economists claim that economic fluctuations can be caused by "waves of optimism" (or pessimism) about the future prospects of the economy. In this question we analyze one example that illustrates such a claim using our goods market equilibrium model.

      Suppose that an economy is at a current state of equilibrium where consumers solve their optimal plan, firms know their optimal $K^f$ and investment. In equilibrium, $S = I$ and there is some market clearing real interest rate $r$.

      Suppose that producers (firms) in this economy suddenly become optimistic about the future prospects of productivity, i.e. they believe that $A^f$ will be higher than what was initially expected. For simplicity, also assume that consumers *do not* share this sentiment, and nothing changes in their beliefs.

      Briefly answer the questions below, and provide graphs and explanations (where applicable).

      **1.** What is the implication, if any, with regards to savings? Does the S curve shift to the left, to the right, or does not shift?

      **2.** What is the implication, if any, with regards to investment? Does the I curve shift to the left, to the right, or does not shift?

      **3.** As a result of your previous answers, describe the new equilibrium in the goods market: what happens to $I, S, r$ at the new equilibrium?

      **4.** Going back to the claim about expectations and fluctuations, explain how the change in future output is consistent with the claim. Explain how the change in current consumption is inconsistent with the claim.
    solution: |
      **Setup:** Firms suddenly expect $A^f$ to be higher than originally believed. Consumers do not share this optimism — their beliefs are unchanged. We trace this through the market where a nation's savings meets firms' demand for investment — the market that sets the interest rate.

      ---

      ### Part 1 — Does the Savings Curve Shift?

      **No — the $S$ curve does not shift.**

      Savings depends on consumers' income and expectations. Since consumers do not change their beliefs, they have no reason to change their optimal consumption/saving behaviour at any given real interest rate:
      - Their expected future income $Y^f$ is unchanged
      - Current output $Y$ is unchanged (uses the same $K$ and $N$)
      - Their optimal consumption and saving at any given $r$ is unchanged

      $$\boxed{S \text{ curve: does NOT shift}}$$

      > [!tip] 🗣️ In plain English
      > The **savings curve stays put**: households didn't change their minds about anything, so they save exactly the same amount at every interest rate.

      ---

      ### Part 2 — Does the Investment Curve Shift?

      **Yes — the $I$ curve shifts to the right.**

      Higher expected $A^f$ raises $MPK^f$ for any given $K^f$, while the current user cost is unchanged:

      $$MPK^f = \alpha_K \cdot A^f \cdot (K^f)^{\alpha_K - 1} \cdot (N^f)^{1-\alpha_K}$$

      With higher $A^f$, $MPK^f$ is higher at every level of $K^f$. Firms therefore choose a higher optimal $K^f$ and a higher level of current investment — they demand more investment at any given interest rate $r$.

      $$\boxed{I \text{ curve: shifts RIGHT}}$$

      > [!tip] 🗣️ In plain English
      > Firms now believe every future machine will earn more, while owning one costs the same as before — so at **any** interest rate they want to buy more machines. The whole **investment curve slides right**.

      ---

      ### Part 3 — New Equilibrium: What Happens to $I$, $S$, $r$?

      With $S$ unchanged and $I$ higher:

      - At the original $r$, investment demand exceeds saving — **excess demand for loanable funds**
      - The real interest rate $r$ rises to restore equilibrium
      - Higher $r$ draws out more saving (movement **along** the existing $S$ curve)
      - Higher $r$ tempers investment somewhat (movement along the new $I$ curve)

      $$\boxed{r \uparrow \quad I \uparrow \quad S \uparrow}$$

      ```graph
      type: goods-market
      shift: investment
      direction: right
      label: optimism about future productivity (A^f up)
      ```

      > **Note:** even though consumers did not change their beliefs, the equilibrium rise in $r$ induces more saving — graphically a movement along the existing $S$ curve, not a shift of it.

      > [!tip] 🗣️ In plain English
      > More firms queueing to borrow, same pool of savers → the **price of borrowing (the interest rate) gets bid up**. The higher rate coaxes households into saving a bit more, and the market settles with **more saving, more investment, and a higher interest rate**.

      ---

      ### Part 4 — Consistency with "Waves of Optimism"

      **Future output — consistent with the claim:**
      Since firms invest more today, they will have more capital in the future. Barring changes in the labour market, future output must rise *even if nothing actually happens to* $A^f$ — because the marginal product of capital is always positive and the capital stock is larger. The optimism is self-fulfilling: it generates a real future expansion.

      **Current consumption — inconsistent with the claim:**
      The increased demand for investment raises the interest rate and **crowds out current consumption**. Since consumers did not become more optimistic, they respond to the higher $r$ by saving more and consuming **less**. In this sense the optimism generates a *negative* correlation between consumption and investment — which is not typically observed in the data.

      $$\boxed{Y^f \uparrow \text{ (consistent)} \qquad C \downarrow \text{ (inconsistent with boom narrative)}}$$

      > [!tip] 🗣️ In plain English
      > The optimism story half-works. **Tomorrow**: firms build more machines, so future output really does boom — the prophecy fulfils itself. **Today**: the higher interest rate makes unconvinced households *cut back* spending. Real-world booms have consumption and investment rising **together**, so this channel alone can't explain them.
    related_terms: ["savings-investment-equilibrium", "real-interest-rate", "marginal-product-of-capital", "crowding-out"]
  - id: "3"
    text: |
      *(TA session)* **Taxes and Their Use**

      Assume that firms make investment decisions according to the model we discussed in class. Specifically, think about a two-period model and the following assumptions:

      - $Y_t = A_t(K_t)^{0.3}(N_t)^{0.7}$
      - $A = A^f = 125$
      - $N = 500$ and $N^f = 500$
      - $p_k = 120$ and $p_k^f = 100$
      - $r = 0.04$
      - $\delta = 0.1$
      - $\tau_k = 0.1$
      - $K = 400$

      **1.** Find the optimal level of $K^f$ and the optimal level of current $I$. For this, follow the usual steps:

      (a) What is the value of the user cost?
      (b) Derive a term for $MPK^f$
      (c) Equate the two to have one equation with one unknown $K^f$, and solve it.
      (d) Use the capital accumulation equation to solve for $I$

      **2.** Assume that the government decides to increase the tax rate $\tau_k$ from 0.1 to 0.15. Assume that the rest of the parameters remain unchanged. Find the optimal level of $K^f$ and the optimal level of current $I$. (For this, follow the same steps as before).

      **3.** Now assume that the government uses the extra tax proceeds to improve infrastructure that will increase future productivity, i.e. $A^f$ increases to 150. Find the optimal level of $K^f$ and the optimal level of current $I$. (Again, follow the same steps as before).

      **4.** Briefly explain the difference in results between parts (2) and (3).
    solution: |
      **Parameters:**

      | Symbol | Value | Symbol | Value |
      |---|---|---|---|
      | $A = A^f$ | 125 | $p_k$ | 120 |
      | $N = N^f$ | 500 | $p_k^f$ | 100 |
      | $K$ | 400 | $r$ | 0.04 |
      | $\alpha_K$ | 0.3 | $\delta$ | 0.1 |
      | $\alpha_N$ | 0.7 | $\tau_k$ | 0.1 |

      Production function: $Y_t = A_t(K_t)^{0.3}(N_t)^{0.7}$

      ---

      ### Part 1 — Baseline: Find $K^f$ and $I$

      #### (a) User Cost

      $$\text{UC} = \frac{(1+r)\,p_k - (1-\delta)\,p_k^f}{1 - \tau_k} = \frac{(1.04)(120) - (0.9)(100)}{1 - 0.1} = \frac{124.8 - 90}{0.9} = \frac{34.8}{0.9}$$

      $$\boxed{\text{UC} = 38.67}$$

      #### (b) $MPK^f$

      $$MPK^f = 0.3 \times 125 \times (K^f)^{-0.7} \times (500)^{0.7} = 37.5 \times 77.496 \times (K^f)^{-0.7}$$

      $$MPK^f = 2906.1 \times (K^f)^{-0.7}$$

      #### (c) Solve for $K^f$

      $$2906.1 \times (K^f)^{-0.7} = 38.67$$

      $$(K^f)^{0.7} = \frac{2906.1}{38.67} = 75.15$$

      $$\boxed{K^f = (75.15)^{1/0.7} \approx 478.61}$$

      #### (d) Investment

      $$I = K^f - (1-\delta)K = 478.61 - 0.9 \times 400 = 478.61 - 360$$

      $$\boxed{I \approx 118.61}$$

      > **Note:** due to depreciation, investment is larger than the simple difference between the two capital stocks.

      > [!tip] 🗣️ In plain English
      > Same machine-buying recipe as Q1, bigger numbers: owning a machine costs **≈ 38.7** a year, so firms build the future capital stock up to **≈ 479**, which takes **≈ 119** of investment once you include replacing worn-out machines.

      ---

      ### Part 2 — Tax Rate Rises: $\tau_k = 0.10 \to 0.15$

      All parameters unchanged except $\tau_k$.

      #### (a) New User Cost

      $$\text{UC} = \frac{124.8 - 90}{1 - 0.15} = \frac{34.8}{0.85}$$

      $$\boxed{\text{UC} = 40.94 \quad \uparrow \text{ (capital is now more costly)}}$$

      #### (b) $MPK^f$ (unchanged expression — $A^f$ and $N^f$ are the same)

      $$MPK^f = 2906.1 \times (K^f)^{-0.7}$$

      #### (c) Solve for $K^f$

      $$(K^f)^{0.7} = \frac{2906.1}{40.94} = 70.98$$

      $$\boxed{K^f \approx 441.08 \quad \downarrow \text{ (fell from 478.61)}}$$

      #### (d) Investment

      $$\boxed{I = 441.08 - 360 \approx 81.08 \quad \downarrow \text{ (fell from 118.61)}}$$

      > **Why?** The increased "corporate income tax" lowers the effective benefit (equivalently, raises the effective cost) of using capital. With $MPK^f$ unchanged, firms reduce their desired capital stock and invest less.

      > [!tip] 🗣️ In plain English
      > A higher capital tax makes machines **more expensive to own** with nothing given back in return — so firms want **fewer** machines (≈ 441 instead of ≈ 479) and cut investment (≈ 81 instead of ≈ 119).

      ---

      ### Part 3 — Tax Revenue Boosts Productivity: $\tau_k = 0.15$, $A^f$ rises to 150

      #### (a) User Cost

      Same as Part 2 (same $\tau_k$):

      $$\boxed{\text{UC} = 40.94}$$

      #### (b) New $MPK^f$ (now with $A^f = 150$)

      $$MPK^f = 0.3 \times 150 \times (K^f)^{-0.7} \times (500)^{0.7} = 45 \times 77.496 \times (K^f)^{-0.7}$$

      $$MPK^f = 3487.3 \times (K^f)^{-0.7}$$

      #### (c) Solve for $K^f$

      $$(K^f)^{0.7} = \frac{3487.3}{40.94} = 85.18$$

      $$\boxed{K^f \approx 572.3 \quad \uparrow \uparrow \text{ (far above even the baseline!)}}$$

      #### (d) Investment

      $$\boxed{I = 572.3 - 360 \approx 212.3 \quad \uparrow \uparrow}$$

      > [!tip] 🗣️ In plain English
      > Same higher tax, but now the revenue builds infrastructure that makes the future economy **more productive**. Each machine will earn much more — enough to *outweigh* the higher ownership cost — so firms want **far more** capital (≈ 572) and invest **much more** (≈ 212), even above the no-tax-hike baseline.

      ---

      ### Part 4 — Comparing Parts 2 and 3

      | Scenario | $\tau_k$ | $A^f$ | UC | $K^f$ | $I$ |
      |---|---|---|---|---|---|
      | **1. Baseline** | 0.10 | 125 | 38.67 | 478.61 | 118.61 |
      | **2. Tax only** | 0.15 | 125 | 40.94 | 441.08 ↓ | 81.08 ↓ |
      | **3. Tax + productivity** | 0.15 | 150 | 40.94 | 572.3 ↑↑ | 212.3 ↑↑ |

      **The key difference:**

      In **Part 2**, the tax increase raises the user cost without any offsetting benefit. The marginal cost of capital rises, but the marginal benefit ($MPK^f$) is unchanged — so firms cut investment.

      In **Part 3**, the tax effect still occurs, but in addition future productivity is expected to grow: the government uses the revenue to fund infrastructure that raises $A^f$ from 125 to 150. This raises $MPK^f$ at every level of $K^f$, making capital far more productive. Both effects are present at once, and the end result depends on how the tension resolves *given the numbers assumed*: more taxes call for less future capital and less investment, while higher future productivity calls for more of both. In this example the productivity effect outweighs the tax effect — but it does not have to be the case.

      > **Policy lesson:** A tax increase that funds productive public investment can **crowd in** private investment rather than crowd it out. The effect depends entirely on how the tax revenue is used.

      > [!tip] 🗣️ In plain English
      > Whether a tax **chokes off** or **crowds in** private investment depends entirely on **what the money is spent on**. Waste it → firms just face higher costs and invest less. Spend it on things that make the economy more productive → machines become more valuable and firms can end up investing *more* than before the tax. (With these numbers the productivity boost wins, but that's not guaranteed in general.)
    related_terms: ["user-cost-of-capital", "marginal-product-of-capital", "capital-accumulation-equation", "crowding-out", "two-period-firm-problem"]
  - id: "4"
    text: |
      *(TA session)* **Effect of Government Spending on Goods Market Equilibrium**

      Suppose that an economy is at a current state of equilibrium where consumers solve their optimal plan, firms know their optimal $K^f$ and investment. In equilibrium, $S = I$ and there is some market clearing real interest rate $r$.

      Suppose that the government announces (unexpectedly) that it is going to increase the current level of government expenditure ($G$). In order to finance the additional spending, the government also announces a one time (or one period) tax increase of the same amount. For simplicity, assume that the tax is imposed "lump-sum", i.e. a fixed amount that will be paid by all consumers in the economy. You may also assume that consumers do not enjoy $G$ in any way, and that the government spending is not repaid to the consumers in any way.

      Briefly answer the questions below, and provide graphs and explanations (where applicable).

      **1.** What does the shock imply with regards to consumers' *current* disposable income? consumers' PVLR?

      **2.** If consumers behave according to our standard consumption model, how should their consumption respond? Will it increase/decrease? By more/less/same as the change in government spending?

      **3.** What is the implication, if any, with regards to savings? Does the S curve shift to the left, to the right, or does not shift?

      **4.** What is the implication, if any, with regards to investment? Does the I curve shift to the left, to the right, or does not shift?

      **5.** As a result of your previous answers, describe the new equilibrium in the goods market: what happens to $I, S, r$ at the new equilibrium?
    solution: |
      **Setup:** The government raises current spending $G$, financed by a **one-period lump-sum tax** of the same amount. Consumers get nothing back from $G$ — it is pure income taken away. We trace the shock through disposable income → consumption → the savings-investment market.

      ---

      ### Part 1 — Disposable Income and PVLR

      **Current disposable income declines.** This is the direct consequence of the tax increase — in essence, the government simply takes away some of consumers' income.

      **PVLR declines too.** The PVLR (present value of lifetime resources) is the present discounted value of the stream of incomes over the lifetime. Since current income is lower and nothing else in the stream changed, the whole sum is lower:

      $$\boxed{\text{disposable income} \downarrow \qquad \text{PVLR} \downarrow}$$

      > [!tip] 🗣️ In plain English
      > The tax is a straight bite out of this year's pay-packet. And since your lifetime pot of resources is just all your pay-packets added up (in today's money), the lifetime pot shrinks by exactly that bite too.

      ---

      ### Part 2 — Consumption Response

      Because consumers have a lower PVLR, their **consumption must decline** — but by **less** than the change in government spending.

      The logic comes from the **Euler equation**. At an optimum:

      $$u'(c) = \beta(1+r)\,u'(c^f)$$

      If the consumer absorbed the whole income shock in the current period only, $u'(c)$ would rise while the right-hand side stayed put — the equation would no longer hold, so that plan cannot be optimal. Instead the consumer **smooths** the shock across both periods:

      $$\boxed{C \downarrow, \text{ but by less than } \Delta G}$$

      > [!tip] 🗣️ In plain English
      > A one-off hit to income gets **spread over your whole life** rather than swallowed in one gulp — you trim consumption a little this year *and* a little next year. So this year's spending falls by **less** than the tax you just paid.

      ---

      ### Part 3 — Does the Savings Curve Shift?

      Disposable income falls by $\Delta G$ (which equals the tax increase). Consumption falls, but by *less* than $\Delta G$. The difference has to come from somewhere:

      $$\Delta S = \Delta(\text{income}) - \Delta C < 0$$

      **Savings decline** — consumers either save less or borrow more — *at any given* $r$. Graphically:

      $$\boxed{S \text{ curve: shifts LEFT}}$$

      > [!tip] 🗣️ In plain English
      > Income fell by the full tax, spending fell by only part of it — the gap is plugged by **saving less**. Since this is true whatever the interest rate, the whole savings curve **shifts left**.

      ---

      ### Part 4 — Does the Investment Curve Shift?

      The shock hits consumers' income only. It does not move any of the parameters behind the **user cost** ($p_k$, $p_k^f$, $r$-schedule, $\delta$, $\tau_k$) or behind **$MPK^f$** ($A^f$, $N^f$). Therefore:

      $$\boxed{I \text{ curve: does NOT shift}}$$

      > [!tip] 🗣️ In plain English
      > Nothing about machines changed — not their price, not their productivity, not their tax treatment. Firms' willingness to invest **at each interest rate** is exactly what it was.

      ---

      ### Part 5 — New Equilibrium

      $S$ curve shifts left, $I$ curve unchanged. At the old $r$ there is now excess demand for funds, so:

      $$\boxed{r \uparrow \qquad S \downarrow \qquad I \downarrow}$$

      Note that $I$ **declines even though the $I$ curve did not shift** — the higher $r$ causes a movement *along* the curve. This is consistent with the theory: a higher $r$ raises the user cost, and investment falls.

      > **Discussion — crowding out:** this is an illustration of the "crowding out" effect of government expenditure: the rise in $G$ lowers both private consumption and private investment. The typical conclusion is that GDP rises, **but by less** than the increase in $G$ (the "multiplier" is below one). The politics of small government often leans on this claim. Reality is more complex — the assumptions here are stark. If $G$ improved future productivity (as in Q3 Part 3), or if consumers valued $G$ directly, government spending would look considerably more attractive.

      > [!tip] 🗣️ In plain English
      > Less household saving chasing the same borrowing demand pushes the **interest rate up**, which makes firms trim investment even though nothing about *their* world changed. Government spending has **crowded out** both private consumption and private investment — under these (deliberately harsh) assumptions, each unit of $G$ buys less than a unit of extra GDP.
    related_terms: ["pvlr", "euler-equation", "consumption-smoothing", "lump-sum-tax", "crowding-out", "savings-investment-equilibrium"]
  - id: "5"
    text: |
      *(extra practice)* **When Does More Future Labour Mean More Future Capital?**

      Assume that firms make investment decisions according to the model we discussed in class, and that the production function is a standard Cobb-Douglas $Y = AK^{\alpha}N^{1-\alpha}$ (where $0 < \alpha < 1$ is a parameter, $A > 0$ is total factor productivity, $K > 0$ is capital, and $N > 0$ is the labor input). Also assume that the user cost is some constant number $X$.

      **1.** Show that if firms expect to have higher labor input in the future period, then they choose to have more capital for the future period.

      **2.** Will the same result hold if the production function is $Y = A\left[K^{\alpha} + N^{1-\alpha}\right]$? Prove and explain your claim.

      *(The official solution to this question is printed in the question paper itself.)*
    solution: |
      ### Part 1 — Cobb-Douglas: $K^f$ Rises with $N^f$

      Follow the same steps as in class. The user cost is $X$ by assumption. The marginal product of capital in the future period:

      $$MPK^f = \frac{\partial Y^f}{\partial K^f} = \frac{\partial\, A^f (K^f)^{\alpha}(N^f)^{1-\alpha}}{\partial K^f} = \alpha A^f (K^f)^{\alpha-1}(N^f)^{1-\alpha}$$

      Set $MPK^f = X$ and solve for $K^f$ as a function of everything else:

      $$\alpha A^f (K^f)^{\alpha-1}(N^f)^{1-\alpha} = X$$

      $$(K^f)^{\alpha-1} = \frac{X}{\alpha A^f (N^f)^{1-\alpha}}$$

      Flip the exponent (raise both sides to the power $-1$):

      $$(K^f)^{1-\alpha} = \frac{\alpha A^f (N^f)^{1-\alpha}}{X}$$

      $$\boxed{K^f = \left[\frac{\alpha A^f}{X}\right]^{\frac{1}{1-\alpha}} N^f}$$

      The bracketed term is a positive constant, so $K^f$ is **linearly increasing** in $N^f$:

      $$\frac{\partial K^f}{\partial N^f} > 0$$

      which is exactly the claim: firms expecting more future labour choose more future capital.

      > [!tip] 🗣️ In plain English
      > With Cobb-Douglas, workers make machines more productive — each extra pair of hands raises what one more machine can earn. So if firms expect more workers next year, every machine's payoff goes up, and at the same ownership cost they buy **more machines**. The formula even says it's one-for-one proportional: double the expected workforce, double the desired capital.

      ---

      ### Part 2 — Additive Production Function: the Result Breaks

      Now $Y = A\left[K^{\alpha} + N^{1-\alpha}\right]$. The future marginal product of capital:

      $$MPK^f = \frac{\partial Y^f}{\partial K^f} = \frac{\partial\, A^f\left[(K^f)^{\alpha} + (N^f)^{1-\alpha}\right]}{\partial K^f} = \alpha A^f (K^f)^{\alpha-1}$$

      Notice $N^f$ has **vanished** — the derivative of the additive labour term with respect to $K^f$ is zero. Setting $MPK^f = X$:

      $$\alpha A^f (K^f)^{\alpha-1} = X$$

      $$(K^f)^{\alpha-1} = \frac{X}{\alpha A^f}$$

      $$(K^f)^{1-\alpha} = \frac{\alpha A^f}{X}$$

      $$\boxed{K^f = \left[\frac{\alpha A^f}{X}\right]^{\frac{1}{1-\alpha}}}$$

      Now $K^f$ is **independent of $N^f$** — future labour does not affect the optimal capital decision, so the result of Part 1 does **not** hold.

      **Why?** The additive production function violates the **complementarity** property that we typically require and that Cobb-Douglas satisfies: with additive inputs, more labour does nothing to the marginal product of capital ($\partial MPK/\partial N = 0$), so labour expectations simply drop out of the investment decision.

      > [!tip] 🗣️ In plain English
      > In the additive world, workers and machines produce in **separate silos** — hiring more people doesn't make any machine one bit more productive. So news about future hiring is irrelevant to the machine-buying decision. The whole "more workers → more machines" logic lives or dies on **complementarity**: inputs boosting each other's usefulness.
    related_terms: ["cobb-douglas", "marginal-product-of-capital", "user-cost-of-capital", "two-period-firm-problem", "production-function"]
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Problem Set 3]] — Cobb-Douglas properties, TFP
- [[Lec_02-Consumption and Saving]] — savings, Euler equation, goods market
- Key concepts: [[Marginal Product of Capital]], [[User Cost of Capital]], [[Capital Accumulation]], [[Goods Market Equilibrium]]
