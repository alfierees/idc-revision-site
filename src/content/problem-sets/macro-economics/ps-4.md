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
      Workforce Size and Optimal Investment
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

      > [!tip] 🗣️ In plain English
      > A firm is deciding **how many machines to own next year**, with every number handed to you. The rule it follows: keep buying machines until the last one's yearly payoff (how much extra output it produces) just equals the yearly cost of owning it (the *user cost*).
      >
      > - **Part 1 (how much to invest):** First work out the yearly cost of owning a machine — that's the **user cost, 0.70**. Then find the payoff of the last machine (which shrinks as you pile on more), set payoff = cost, and you get the **desired future capital ≈ 123**. Investment is just the gap you must build to get from today's stock of 100 up to 123 → about **33**.
      > - **Part 2 (saving & consumption):** With no government, output either gets consumed or invested, and **saving must equal investment**. So the economy saves ≈ **33** (funding the investment) and consumes the rest ≈ **196**.
      > - **Part 3 (a temporary flood of workers):** Extra workers arrive but will leave (temporary visas). **Total output rises** (more hands), but **output per worker falls** — the same machines are now shared among more people. And desired future capital **doesn't change**, because firms plan around the workers who'll actually be there next year, not a temporary crowd today.

      ---

      ### Part 1 — Optimal $K^f$ and Investment $I$

      #### (a) User Cost

      The user cost is the net cost to the firm of deploying one unit of capital. It equals the opportunity cost of buying capital today, minus what you recover selling it tomorrow (after depreciation), all adjusted upward for the capital income tax:

      $$\text{UC} = \frac{(1+r)\,p_k - (1-\delta)\,p_k^f}{1 - \tau_k}$$

      Plugging in:

      $$\text{UC} = \frac{(1.03)(5) - (0.9)(5.1)}{1 - 0.2} = \frac{5.15 - 4.59}{0.8} = \frac{0.56}{0.8}$$

      $$\boxed{\text{UC} = 0.70}$$

      > **Why divide by $(1 - \tau_k)$?** Capital income is taxed, so the firm only keeps $(1 - \tau_k)$ of each unit of revenue. To cover a cost of $X$, the firm needs to earn $X/(1-\tau_k)$ in gross revenue — hence the denominator.

      ---

      #### (b) Marginal Product of Capital in the Future ($MPK^f$)

      Take the partial derivative of $Y^f$ with respect to $K^f$:

      $$MPK^f = \frac{\partial Y^f}{\partial K^f} = 0.35 \cdot A^f \cdot (K^f)^{-0.65} \cdot (N^f)^{0.65}$$

      Substituting $A^f = 5$, $N^f = 30$:

      $$MPK^f = 0.35 \times 5 \times (30)^{0.65} \times (K^f)^{-0.65}$$

      $$MPK^f = 1.75 \times 9.123 \times (K^f)^{-0.65}$$

      $$MPK^f = 15.965 \times (K^f)^{-0.65}$$

      > **Intuition:** $MPK^f$ is decreasing in $K^f$ — each additional unit of capital adds less output than the last (diminishing marginal returns).

      ---

      #### (c) Solve for $K^f$

      At the optimum, firms invest until the marginal benefit equals the marginal cost:

      $$MPK^f = \text{UC}$$

      $$15.965 \times (K^f)^{-0.65} = 0.70$$

      Rearranging:

      $$(K^f)^{0.65} = \frac{15.965}{0.70} = 22.807$$

      $$K^f = (22.807)^{1/0.65} = (22.807)^{1.538}$$

      $$\boxed{K^f \approx 122.84}$$

      ---

      #### (d) Investment $I$

      Using the capital accumulation equation:

      $$K^f = (1-\delta)K + I \quad \Longrightarrow \quad I = K^f - (1-\delta)K$$

      $$I = 122.84 - (0.9)(100) = 122.84 - 90$$

      $$\boxed{I \approx 32.84}$$

      ---

      ### Part 2 — Savings and Consumption in Goods Market Equilibrium

      First compute current GDP:

      $$Y = 5 \times (100)^{0.35} \times (30)^{0.65} = 5 \times 5.012 \times 9.123$$

      $$\boxed{Y \approx 228.61}$$

      In goods market equilibrium (no government), $Y = C + I$, which means $S = I$. Therefore:

      $$\boxed{S = I \approx 32.84}$$

      $$\boxed{C = Y - I = 228.61 - 32.84 \approx 195.77}$$

      > The economy saves 32.84 this period (which funds investment) and households consume the remaining 195.77.

      ---

      ### Part 3 — Temporary Labour Increase ($N = 40$, $N^f = 30$)

      #### (a) GDP and GDP per Worker — Before and After

      **Before** ($N = 30$, $K = 100$):

      $$Y = 5 \times (100)^{0.35} \times (30)^{0.65} = 228.61 \qquad \frac{Y}{N} = \frac{228.61}{30} = 7.62$$

      **After** ($N = 40$, $K = 100$ unchanged):

      $$Y = 5 \times (100)^{0.35} \times (40)^{0.65} = 5 \times 5.012 \times 11.001 = 275.62 \qquad \frac{Y}{N} = \frac{275.62}{40} = 6.89$$

      | | GDP | GDP per Worker |
      |---|---|---|
      | Before ($N=30$) | 228.61 | 7.62 |
      | After ($N=40$) | **275.62** ↑ | **6.89** ↓ |

      **Why?**
      - **Total GDP rises** because there are simply more workers producing output.
      - **GDP per worker falls** because of **diminishing marginal returns to labour**. With the same capital stock ($K = 100$), each additional worker has less capital to work with. The 40th worker adds less to output than the 30th.

      ---

      #### (b) Is There a New $K^f$?

      Recall the condition that determines $K^f$:

      $$\alpha_K \cdot A^f \cdot (K^f)^{-(1-\alpha_K)} \cdot (N^f)^{1-\alpha_K} = \text{UC}$$

      The optimal $K^f$ depends on **future** labour $N^f$, not current $N$. Since $N^f = 30$ is unchanged (the visa workers are temporary — they leave), the optimal $K^f$ is **unchanged**.

      $$\boxed{K^f \approx 122.84 \text{ (same as before)}}$$

      > **Key insight:** Firms are forward-looking. They set capital based on what labour will be available *when that capital is deployed* — not based on a temporary shock today.

      ---

      #### (c) Future GDP and GDP per Worker

      With $K^f = 122.84$ and $N^f = 30$:

      $$Y^f = 5 \times (122.84)^{0.35} \times (30)^{0.65} = 5 \times 5.386 \times 9.123$$

      $$\boxed{Y^f \approx 245.68 \qquad \frac{Y^f}{N^f} = \frac{245.68}{30} \approx 8.19}$$

      > Future GDP (245.68) exceeds current GDP (228.61) because $K^f > K$ (the capital stock grew from 100 to 122.84). Future GDP per worker (8.19) also exceeds current GDP per worker (7.62) for the same reason — each worker has more capital.
    related_terms: ["user-cost-of-capital", "marginal-product-of-capital", "capital-accumulation-equation", "savings-investment-equilibrium", "two-period-firm-problem"]
  - id: "2"
    text: |
      Optimism and Goods Market Equilibrium
    solution: |
      **Setup:** Firms suddenly expect $A^f$ to be higher than originally believed. Consumers do not share this optimism — their beliefs are unchanged.

      > [!tip] 🗣️ In plain English
      > **Firms** suddenly get optimistic that the economy will be more productive in the future, but **households don't share the mood**. We trace this through the market where a nation's savings meets firms' demand for investment — the market that sets the interest rate.
      >
      > - **Part 1 (savings):** The savings curve **doesn't move** — households didn't change their minds, so they save the same at every interest rate.
      > - **Part 2 (investment):** The investment curve **shifts right** — optimistic firms want more machines, so they demand more funds to invest at every interest rate.
      > - **Part 3 (new equilibrium):** More investment demand chasing the same pool of savings pushes the **interest rate up**; in the end both investment and saving settle a bit higher.
      > - **Part 4 (does optimism cause a boom?):** Partly. **Future output does boom** (more machines *and* higher productivity) — that fits the story. But **current consumption falls**: the higher interest rate makes saving attractive, and households aren't optimistic, so they spend less now. There's no *current* consumption boom — that's the catch in the "waves of optimism" narrative.

      ---

      ### Part 1 — Does the Savings Curve Shift?

      **No — the $S$ curve does not shift.**

      Savings depends on consumers' income and expectations. Since consumers are unaffected:
      - Their expected future income $Y^f$ is unchanged
      - Current output $Y$ is unchanged (uses the same $K$ and $N$)
      - Their optimal consumption and saving at any given $r$ is unchanged

      $$\boxed{S \text{ curve: does NOT shift}}$$

      ---

      ### Part 2 — Does the Investment Curve Shift?

      **Yes — the $I$ curve shifts to the right.**

      Higher expected $A^f$ raises $MPK^f$ for any given $K^f$:

      $$MPK^f = \alpha_K \cdot A^f \cdot (K^f)^{\alpha_K - 1} \cdot (N^f)^{1-\alpha_K}$$

      With higher $A^f$, $MPK^f$ is higher at every level of $K^f$. Firms therefore want more capital, which means they demand more investment at any given interest rate $r$.

      $$\boxed{I \text{ curve: shifts RIGHT}}$$

      ---

      ### Part 3 — New Equilibrium: What Happens to $I$, $S$, $r$?

      With $S$ unchanged and $I$ higher:

      - At the original $r$, investment demand exceeds saving — **excess demand for loanable funds**
      - The real interest rate $r$ rises to restore equilibrium
      - Higher $r$ draws out more saving (movement along $S$ curve)
      - Higher $r$ tempers investment somewhat (movement along the new $I$ curve)

      $$\boxed{r \uparrow \quad I \uparrow \quad S \uparrow}$$

      ---

      ### Part 4 — Consistency with "Waves of Optimism"

      **Future output — consistent with the claim:**
      Firms invest more today, building a larger $K^f$. In the future period, both $A^f$ and $K^f$ are higher, so $Y^f$ rises substantially. The optimism is self-fulfilling — it generates a real future expansion.

      **Current consumption — inconsistent with the claim:**
      Higher $r$ makes saving more attractive and borrowing more expensive. Since consumers did not become more optimistic, they respond by saving more and consuming **less**. Current $C$ falls.

      The "waves of optimism" narrative predicts a current boom — but in this model current consumption falls. This is the inconsistency: the channel from optimism to *current* output expansion works through investment, not consumption.

      $$\boxed{Y^f \uparrow \text{ (consistent)} \qquad C \downarrow \text{ (inconsistent with boom narrative)}}$$
    related_terms: ["savings-investment-equilibrium", "real-interest-rate", "marginal-product-of-capital", "crowding-out"]
  - id: "3"
    text: |
      Taxes and Their Use
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

      > [!tip] 🗣️ In plain English
      > Same machine-buying decision as Q1, but now there's a **tax on capital income**. The interesting question isn't just "what does a higher tax do?" — it's **what the government spends the tax money on**.
      >
      > - **Part 1 (baseline):** Work out the yearly cost of owning a machine (**user cost ≈ 38.7**), the desired capital stock (**≈ 479**), and investment (**≈ 119**).
      > - **Part 2 (tax up, money wasted):** A higher capital tax makes machines **more expensive to own** with nothing in return, so firms want **less** capital (≈ 441) and invest **less** (≈ 81).
      > - **Part 3 (tax up, money funds productivity):** Same higher tax, but now the revenue builds infrastructure that makes the future economy **more productive**. Each machine now earns much more — enough to *outweigh* the higher cost — so firms want **far more** capital (≈ 572) and invest **much more** (≈ 212), even above the baseline.
      > - **Part 4 (the lesson):** Whether a tax **chokes off** or **crowds in** private investment depends entirely on **how the money is used**. Waste it → less investment. Spend it productively → more.

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

      $$(K^f)^{0.7} = \frac{2906.1}{38.67} = 75.16$$

      $$\boxed{K^f = (75.16)^{1/0.7} \approx 478.59}$$

      #### (d) Investment

      $$I = K^f - (1-\delta)K = 478.59 - 0.9 \times 400 = 478.59 - 360$$

      $$\boxed{I \approx 118.59}$$

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

      $$\boxed{K^f \approx 441.06 \quad \downarrow \text{ (fell from 478.59)}}$$

      #### (d) Investment

      $$\boxed{I = 441.06 - 360 \approx 81.06 \quad \downarrow \text{ (fell from 118.59)}}$$

      > **Why?** Higher $\tau_k$ raises the user cost, making it more expensive to hold capital. With MPKf unchanged, firms reduce their desired capital stock and invest less.

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

      $$\boxed{K^f \approx 572.29 \quad \uparrow \uparrow \text{ (far above even the baseline!)}}$$

      #### (d) Investment

      $$\boxed{I = 572.29 - 360 \approx 212.29 \quad \uparrow \uparrow}$$

      ---

      ### Part 4 — Comparing Parts 2 and 3

      | Scenario | $\tau_k$ | $A^f$ | UC | $K^f$ | $I$ |
      |---|---|---|---|---|---|
      | **1. Baseline** | 0.10 | 125 | 38.67 | 478.59 | 118.59 |
      | **2. Tax only** | 0.15 | 125 | 40.94 | 441.06 ↓ | 81.06 ↓ |
      | **3. Tax + productivity** | 0.15 | 150 | 40.94 | 572.29 ↑↑ | 212.29 ↑↑ |

      **The key difference:**

      In **Part 2**, the tax increase raises the user cost without any offsetting benefit. The marginal cost of capital rises, but the marginal benefit ($MPK^f$) is unchanged — so firms cut investment.

      In **Part 3**, the government uses the tax revenue to fund infrastructure that raises $A^f$ from 125 to 150. This raises $MPK^f$ substantially at every level of $K^f$, making capital far more productive. The boost to capital's marginal productivity **more than compensates** for the higher user cost — firms actually want *more* capital than in the baseline.

      > **Policy lesson:** A tax increase that funds productive public investment can **crowd in** private investment rather than crowd it out. The effect depends entirely on how the tax revenue is used.
    related_terms: ["user-cost-of-capital", "marginal-product-of-capital", "capital-accumulation-equation", "crowding-out", "two-period-firm-problem"]
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Problem Set 3]] — Cobb-Douglas properties, TFP
- [[Lec_02-Consumption and Saving]] — savings, Euler equation, goods market
- Key concepts: [[Marginal Product of Capital]], [[User Cost of Capital]], [[Capital Accumulation]], [[Goods Market Equilibrium]]
