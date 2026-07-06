---
title: "Moed A 2025 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Final Exam — Intermediate Macro, Moed A (2025)"
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
source_doc: /papers/macro-economics/moed-a-2025.pdf
tags:
  - macroeconomics
  - past-paper
  - worked-solution
  - development-accounting
  - production-function
  - labor-supply
  - gdp
  - inflation
  - investment
  - intertemporal-choice
  - unemployment
  - business-cycles
aliases:
  - Moed A 2025
  - Moed Aleph 2025
subject: macro-economics
in_scope: true
questions:
  - id: q1
    title: "Q1 — Relative importance of TFP vs. capital"
    text: |
      Two economies, 1 and 2, share the production function $Y = A K^{1/3} N^{2/3}$. Population is $1$ and fully employed ($N_1 = N_2 = 1$):

      | Country | TFP ($A$) | Capital ($K$) | Labor ($N$) |
      |---|---|---|---|
      | 1 | 4 | 8,000 | 1 |
      | 2 | 2 | 1,000 | 1 |

      Two economists in country 2 debate the source of the GDP gap. The first says that because country 2's capital stock is smaller by a factor of $8$, capital differences are *mostly* responsible for the GDP difference. The second says TFP contributes *much more* than capital. **Calculate the relative importance of TFP and capital, and explain whether either economist is correct.**
    solution: |
      To compare the relative importance, take the **ratio** of outputs implied by the production function (both $N=1$, so the labor terms cancel):

      $$\frac{Y_1}{Y_2} = \frac{A_1 K_1^{1/3} N_1^{2/3}}{A_2 K_2^{1/3} N_2^{2/3}} = \underbrace{\frac{4}{2}}_{\text{TFP}}\times \underbrace{\left(\frac{8000}{1000}\right)^{1/3}}_{\text{capital}} = 2 \times 8^{1/3} = 2 \times 2$$

      TFP contributes a factor of $2$ and capital contributes a factor of $2$: the two forces are **exactly equal** here, so together they generate the $4\times$ output gap. **Both economists are wrong** — neither TFP nor capital dominates in this case.

      The key trick: because capital enters as $K^{1/3}$, an $8\times$ capital gap only buys $8^{1/3} = 2\times$ output. The exponent tames the raw capital difference.

      > [!success] Answer — **Both economists are wrong; TFP and capital each contribute a factor of 2**

      > [!note] Formula sheet — Cobb-Douglas + development accounting
      > This is the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas production function]] $Y = A K^{\alpha} N^{1-\alpha}$. Whenever a question compares two economies, take the **ratio** of $Y = A K^{\alpha} N^{1-\alpha}$ and let the shared terms cancel; the capital gap is dampened by the exponent $\alpha = \tfrac13$. See [[development-accounting]], [[cobb-douglas]].
    related_terms:
      - development-accounting
      - cobb-douglas
      - production-function
    source_doc_page: 2

  - id: q2
    title: "Q2 — Immigration and the demand for robots"
    text: |
      Firms behave competitively and produce with three factors — capital ($K$), labor ($N$) and robots ($R$) — using $Y = A K^{\alpha}[R + N]^{1-\alpha}$. Immigration raises the number of workers available (new immigrants are identical to residents in all relevant respects) and the price of robots is constant. **What is the effect on the demand for robots?**
    solution: |
      Because the robot price is constant, the effect on robot demand is driven entirely by what happens to the **marginal product of robots** ($MPR$): if $MPR$ rises/falls/stays, firms demand more/fewer/the same number of robots.

      From the production function:

      $$MPR = (1-\alpha)K^{\alpha}[R+N]^{-\alpha}$$

      Differentiate with respect to $N$:

      $$\frac{\partial MPR}{\partial N} = -\alpha(1-\alpha)K^{\alpha}[R+N]^{-\alpha-1} < 0$$

      More workers lower the marginal product of robots, so **the demand for robots declines.**

      Intuitively: $R$ and $N$ enter **additively** as $[R+N]$, which makes them **substitutes**. Adding more of one factor lowers the marginal product of the other. (Simply arguing that the additive $R+N$ makes them substitutes — so more $N$ reduces demand for $R$ — is an acceptable answer even without the derivative.)

      > [!success] Answer — **The demand for robots declines**

      > [!tip] The intuition to carry into the exam
      > Anything that enters production **additively** with another factor (here $R+N$) is a **substitute** for it: add more of one and the marginal product of the other falls. Robots-and-labor questions are just factor-demand questions in disguise — check the sign of the cross-partial. See [[labor-demand]], [[automation]], [[marginal-product-of-labor]].
    related_terms:
      - labor-demand
      - automation
      - marginal-product-of-labor
    source_doc_page: 2

  - id: q3
    title: "Q3 — Labor supply independent of the labor income tax"
    text: |
      Workers have utility $U(C,N) = \ln(C) - \theta\dfrac{N^{1+\psi}}{1+\psi}$. They earn only labor income and pay a labor income tax; there is no other tax, income source, or transfer. The budget constraint is

      $$C = (1-\tau_N)wN$$

      **Show that labor supply does not depend on the tax rate.** (You may use the general optimality condition directly — no Lagrangian needed.)
    solution: |
      Use the static optimality condition together with the budget constraint. The general first-order condition is

      $$-U_N = \frac{1-\tau_N}{1+\tau_C}\,w\,U_C$$

      With this utility and only a labor tax ($\tau_C = 0$), $-U_N = \theta N^{\psi}$ and $U_C = 1/C$:

      $$\theta N^{\psi} = w(1-\tau_N)\frac{1}{C}$$

      Substitute the budget constraint $C = w(1-\tau_N)N$:

      $$\theta N^{\psi} = w(1-\tau_N)\frac{1}{w(1-\tau_N)N} = \frac{1}{N}$$

      At this point you can already see that $\tau_N$ has **cancelled out**, so it will not appear in the solution. Completing the derivation for full form:

      $$N^{1+\psi} = \frac{1}{\theta} \quad\Longrightarrow\quad N = \left(\frac{1}{\theta}\right)^{\frac{1}{1+\psi}}$$

      Labor supply is independent of $\tau_N$. Economically, with **log** consumption utility the income effect of the tax (poorer → work more) exactly cancels the substitution effect (lower net wage → work less).

      > [!success] Answer — **Labor supply $N = (1/\theta)^{1/(1+\psi)}$ is independent of $\tau_N$**

      > [!note] Formula sheet — static first-order condition
      > This is the [[Macro Equation Sheet#Labor supply & consumption optimality|static labor-consumption FOC]] $-U_N = \frac{1-\tau_N}{1+\tau_C}\,w\,U_C$. The recipe for any "how does a tax/wage affect labor supply" question: plug $U$ into the FOC, substitute the budget constraint, solve for $N(w)$. See [[labor-supply]], [[labor-income-tax]], [[income-effect]].
    related_terms:
      - labor-supply
      - labor-income-tax
      - income-effect
    source_doc_page: 3

  - id: q4
    title: "Q4 — Emigration: GDP, GNP and Net Factor Payments"
    text: |
      Because of the Russia–Ukraine war, Ukrainian workers leave Ukraine for a neighboring country and are **not** replaced. The workers who left find jobs abroad that pay exactly the same wage they used to earn in Ukraine. **Explain the effects on Ukrainian GDP, GNP and Net Factor Payments (NFP).**
    solution: |
      Anchor on the identity

      $$GNP = GDP + NFP$$

      - **GDP** measures output produced *within* Ukraine. Fewer workers employed inside Ukraine (they left and were not replaced) ⟹ **GDP falls.**
      - **GNP** measures income of Ukrainians *by nationality*. The workers who left earn the same wage abroad, so total income earned by Ukrainians is unchanged ⟹ **GNP is unchanged.**
      - Rearranging the identity, $NFP = GNP - GDP$. GNP is flat while GDP falls ⟹ **NFP rises.** (Equivalently, by definition NFP — payments to Ukrainians from abroad — has risen because they now work abroad.)

      > [!success] Answer — **GDP falls, GNP unchanged, NFP rises**

      > [!note] Formula sheet — the GNP identity
      > Reach for the [[Macro Equation Sheet#National accounts & GDP|GNP identity]] $GNP = GDP + NFP$. The exam loves the GDP-vs-GNP distinction: **GDP = where production happens; GNP = who earns the income.** Emigration separates the two and NFP is the plug that balances the identity. See [[gdp]], [[gnp]], [[national-accounts]].
    related_terms:
      - gdp
      - gnp
      - national-accounts
    source_doc_page: 4

  - id: q5
    title: "Q5 — EPOP and unemployment rates for young and old"
    text: |
      Data on young and old populations:

      | | Young | Old |
      |---|---|---|
      | Population | 500,000 | 750,000 |
      | Employed | 400,000 | 600,000 |
      | Not employed | 100,000 | 150,000 |
      | Labor-force participation rate | 85% | 90% |

      **Calculate the employment-population ratios and the unemployment rates for the young and the old.**
    solution: |
      **Employment-population ratio (EPOP)** comes straight from the data:

      $$EPOP = \frac{\text{Employed}}{\text{Population}}$$

      $$EPOP_{\text{young}} = \frac{400{,}000}{500{,}000} = 0.8, \qquad EPOP_{\text{old}} = \frac{600{,}000}{750{,}000} = 0.8$$

      So **EPOP = 80% for both** groups.

      **Unemployment rate.** The catch: being unemployed means being *in the labor force* **and** not employed — we can't simply treat the "not employed" as unemployed. First find the labor force (participation rate $\times$ population):

      $$\text{LF}_{\text{young}} = 0.85 \times 500{,}000 = 425{,}000, \qquad \text{LF}_{\text{old}} = 0.90 \times 750{,}000 = 675{,}000$$

      Subtract the employed to isolate the unemployed (those in the labor force but not employed):

      $$U_{\text{young}} = 425{,}000 - 400{,}000 = 25{,}000, \qquad U_{\text{old}} = 675{,}000 - 600{,}000 = 75{,}000$$

      Then apply the unemployment-rate formula $u = \text{Unemployed}/\text{Labor force}$:

      $$u_{\text{young}} = \frac{25{,}000}{425{,}000} \approx 0.0588 = 5.88\%$$

      $$u_{\text{old}} = \frac{75{,}000}{675{,}000} \approx 0.111 = 11.1\%$$

      > [!success] Answer — **EPOP = 80% for both; unemployment ≈ 5.88% (young) and ≈ 11.1% (old)**

      > [!note] Formula sheet — unemployment rate
      > The [[Macro Equation Sheet#Unemployment & labor-market dynamics|unemployment-rate formula]] $u = \frac{U}{U+E}$. The whole trap is the denominator: the "not employed" figures include people *outside* the labor force. Use participation to back out the labor force, then subtract employment to isolate the unemployed. See [[epop]], [[labor-force-participation]].
    related_terms:
      - labor-force-participation
      - epop
      - frictional-unemployment
    source_doc_page: 5

  - id: q6
    title: "Q6 — PCE deflator vs. CPI inflation"
    text: |
      A country produces oranges, bread and machines; 100 identical consumers consume oranges and bread only. Base year 2023.

      | Year | Product | Quantity | Price |
      |---|---|---|---|
      | 2023 | Oranges | 1,000 | 5 |
      | 2023 | Bread | 2,000 | 10 |
      | 2023 | Machines | 120 | 200 |
      | 2024 | Oranges | 1,100 | 6 |
      | 2024 | Bread | 1,500 | 15 |
      | 2024 | Machines | 125 | 180 |

      **Compute the inflation rate from the PCE deflator (fixed-weight, 2023 base) and from the CPI (2023 representative basket). Is there a difference? If so, why?**
    solution: |
      **Ignore machines** for both measures — they aren't consumed.

      **PCE deflator.** Nominal consumption = current prices $\times$ current quantities; real consumption = 2023 prices $\times$ current quantities; deflator = nominal $/$ real.

      | Year | Nominal consumption | Real consumption (2023 prices) | Deflator |
      |---|---|---|---|
      | 2023 | $1000(5)+2000(10)=25{,}000$ | $25{,}000$ | $1.00$ |
      | 2024 | $1100(6)+1500(15)=29{,}100$ | $1100(5)+1500(10)=20{,}500$ | $1.42$ |

      Inflation from the deflator:

      $$\pi^{PCE} = \frac{1.42 - 1}{1} = 0.42 = 42\%$$

      **CPI.** With 100 identical consumers, the representative basket is $10$ oranges $+ 20$ units of bread (machines excluded). Price of this basket:

      $$\text{CPI}_{2023} = 10(5) + 20(10) = 250, \qquad \text{CPI}_{2024} = 10(6) + 20(15) = 360$$

      $$\pi^{CPI} = \frac{360 - 250}{250} = 0.44 = 44\%$$

      **Yes, they differ** (42% vs. 44%). The reason: the **deflator lets quantities change** (it reflects the current-year consumption mix), while the **CPI fixes the base-year basket**. Because quantities shifted between 2023 and 2024, the two measures disagree.

      > [!success] Answer — **PCE deflator inflation 42%; CPI inflation 44%; they differ because the deflator uses changing quantities while the CPI fixes the base-year basket**

      > [!note] Formula sheet — deflator and inflation
      > Uses the [[Macro Equation Sheet#National accounts & GDP|GDP deflator]] $P = \text{nominal}/\text{real}$ and [[Macro Equation Sheet#Prices, inflation & exchange rates|inflation]] $\pi = \frac{P_{t+1}-P_t}{P_t}$. Two rules win this question: **(1)** strip out non-consumption goods for both consumer measures; **(2)** deflator = changing basket, CPI = fixed basket, so with shifting quantities the two generally disagree. See [[gdp-deflator]], [[cpi]], [[inflation]].
    related_terms:
      - gdp-deflator
      - cpi
      - inflation
    source_doc_page: 6

  - id: q7
    title: "Q7 — Long question: optimal mandatory retirement saving (log utility)"
    text: |
      A simple model of a mandatory retirement-saving scheme. Consumers live two periods ($0$ and $1$), have income $y_0 > 0$ in period $0$ and **zero** income in period $1$, face market rate $r>0$, per-period utility $u(c_t) = \ln(c_t)$, discount factor $0<\beta<1$, and no initial assets or debt.

      1. Write the consumer's optimization problem (choice variables and budget constraint). *(5 pts)*
      2. Using the Euler equation and the budget constraint, solve for the optimal $c_0$ and $c_1$. *(6 pts)*
      3. Define the period-0 saving rate as $s_1/y_0$. What is the optimal saving rate? *(6 pts)* (Call this "voluntary saving" for the rest.)
      4. The government forces retirement saving: a consumer must contribute a rate $\tau$ of period-0 income; each unit saved delivers $1+r$ units of consumption in period 1.
         (a) If the government maximizes consumer welfare, what should $\tau$ be? (Explain, no proof needed.) *(4 pts)*
         (b) If $\tau$ is **lower** than the optimal level, will voluntary saving be positive / negative / zero? Explain. *(3 pts)*
         (c) If $\tau$ is **higher** than optimal, how does voluntary saving respond? Explain. *(3 pts)*
      5. Now suppose there are two consumer types, $1$ and $2$, differing only in that $\beta_1 > \beta_2$. Can a single mandatory saving rate be optimal for both? Explain. *(5 pts)*
    solution: |
      **Part 1 — the optimization problem.** The consumer chooses $c_0, c_1$ to maximize discounted utility subject to the lifetime budget constraint. Since income is positive only in period 0 ($y_1 = 0$):

      $$\max_{c_0,\,c_1}\ \ln(c_0) + \beta\ln(c_1) \qquad \text{s.t.}\qquad c_0 + \frac{1}{1+r}c_1 = y_0$$

      The two choice variables are $c_0$ and $c_1$.

      **Part 2 — optimal consumption plan.** With $u(c_t) = \ln(c_t)$, marginal utility is $u'(c_t) = 1/c_t$. The Euler equation gives

      $$\frac{1}{c_0} = \beta(1+r)\frac{1}{c_1} \quad\Longrightarrow\quad c_1 = \beta(1+r)c_0$$

      Substitute into the budget constraint:

      $$c_0 + \frac{1}{1+r}\beta(1+r)c_0 = y_0 \quad\Longrightarrow\quad c_0 + \beta c_0 = y_0 \quad\Longrightarrow\quad c_0(1+\beta) = y_0$$

      $$\boxed{c_0 = \frac{1}{1+\beta}\,y_0}, \qquad c_1 = \beta(1+r)c_0 = \beta(1+r)\frac{1}{1+\beta}\,y_0$$

      **Part 3 — optimal saving rate.** Saving in period 0 is income minus consumption:

      $$s_1 = y_0 - c_0 = y_0 - \frac{1}{1+\beta}y_0 = \left(1 - \frac{1}{1+\beta}\right)y_0 = \frac{\beta}{1+\beta}\,y_0$$

      So the optimal saving rate is

      $$\frac{s_1}{y_0} = \frac{\beta}{1+\beta}$$

      **Part 4 — mandatory saving.** As long as mandatory savings earn the same return $1+r$, they are a perfect substitute for voluntary savings.

      - **(a)** The welfare-maximizing $\tau$ is exactly the optimal saving rate found in part 3: $\tau = \dfrac{\beta}{1+\beta}$. This forces consumers to save precisely their own optimal amount given preferences, income and prices. (It's enough to explain that the optimal mandatory rate equals the part-3 rate; the algebraic term is not strictly required.)
      - **(b)** If $\tau < \dfrac{\beta}{1+\beta}$, mandatory savings fall short of the consumer's optimal plan, so **voluntary saving is positive** and covers exactly the shortfall.
      - **(c)** If $\tau > \dfrac{\beta}{1+\beta}$, mandatory savings force the consumer to save *too much*, so **voluntary saving is negative** — the consumer borrows to offset the excess mandatory saving.

      **Part 5 — heterogeneous $\beta$.** In general **no single $\tau$ is optimal for both types.** Each type still wants saving rate $\dfrac{\beta}{1+\beta}$, but with $\beta_1 > \beta_2$ these optimal rates differ, and no single $\tau$ can equal both.

      *Side note:* if the government sets $\tau$ at the high-$\beta$ (patient) consumer's rate, that consumer neither saves nor borrows voluntarily while the impatient one borrows; if $\tau$ is set in between, the patient consumer tops up with voluntary saving and the impatient one borrows.

      > [!success] Answer — **$c_0 = \frac{y_0}{1+\beta}$, $c_1 = \frac{\beta(1+r)}{1+\beta}y_0$; optimal saving rate $\frac{\beta}{1+\beta}$; optimal $\tau = \frac{\beta}{1+\beta}$; below it → voluntary saving positive, above it → negative (borrowing); with $\beta_1 \neq \beta_2$ no single $\tau$ is optimal for both**

      > [!note] Formula sheet — Euler + lifetime budget (log case)
      > The two tools are the [[Macro Equation Sheet#Intertemporal choice (consumption & saving)|Euler equation and lifetime budget constraint]] $u'(c) = \beta(1+r)u'(c^f)$ and $c + \frac{1}{1+r}c^f = a + y + \frac{1}{1+r}y^f$. The signature of **log utility**: current consumption is the fixed fraction $\frac{1}{1+\beta}$ of wealth, so the saving rate $\frac{\beta}{1+\beta}$ depends only on patience $\beta$ — which is exactly why a one-size-fits-all mandatory rate cannot suit two different $\beta$ types. See [[euler-equation]], [[consumption-smoothing]], [[intertemporal-choice]].
    related_terms:
      - euler-equation
      - consumption-smoothing
      - intertemporal-choice
    source_doc_page: 8

  - id: q8
    title: "Q8 — Long question: TFP, depreciation, investment, wage and government spending"
    text: |
      Data:

      | Period | Labor $N$ | Capital $K$ | GDP $Y$ |
      |---|---|---|---|
      | $t$ | 1000 | 100 | 100 |
      | $t+1$ | 1050 | 105 | 120 |

      Assume production $Y = A_t K_t^{0.3} N_t^{0.7}$, real interest rate $r = 2\%$, capital tax $\tau_K = 10\%$, and a constant price of capital $p_k = 10$.

      1. Calculate TFP in both periods. *(5 pts)*
      2. Explain how you can sign the change in TFP *without* calculating it. *(5 pts)*
      3. The choice of $K_{t+1}$ is optimal (investment is decided in period $t$; firms knew $A_{t+1}$).
         (a) What is the depreciation rate $\delta$? *(7 pts)*
         (b) What is investment $I_t$? *(3 pts)*
      4. For period $t$:
         (a) If labor is hired optimally, what is the real wage? *(4 pts)*
         (b) Firms pay tax at rate $\tau_K$ on output minus labor expenditure (as in the investment model), and this revenue finances government spending $G$. What is $G$? *(4 pts)*
         (c) What is consumption? *(4 pts)*
    solution: |
      **Part 1 — TFP in both periods.** Read TFP off as the Solow residual:

      $$A = \frac{Y}{K^{0.3}N^{0.7}}$$

      $$A_t = \frac{100}{100^{0.3}\,1000^{0.7}} \approx 0.2, \qquad A_{t+1} = \frac{120}{105^{0.3}\,1050^{0.7}} \approx 0.23$$

      **Part 2 — sign the TFP change without computing.** Both capital and labor grew by $5\%$ between $t$ and $t+1$, but output grew by $20\%$. Under the production function, output can grow faster than *both* inputs only if **TFP also increased.** So $A$ rose.

      **Part 3(a) — depreciation rate.** Optimal capital choice requires **future MPK = user cost**. With Cobb-Douglas, $MPK^f = \alpha A_{t+1}K_{t+1}^{\alpha-1}N_{t+1}^{1-\alpha}$:

      $$MPK^f = 0.3 \times 0.23 \times 105^{-0.7}\times 1050^{0.7} \approx 0.345$$

      Set this equal to the user cost (all data known except $\delta$; the price of capital is constant so $p_k^f = p_k = 10$):

      $$0.345 = \frac{(1+r)p_k - (1-\delta)p_k^f}{1-\tau_K} = \frac{10 + 0.02(10) - 10 + \delta(10)}{0.9} = \frac{0.2 + 10\delta}{0.9}$$

      Solve for $\delta$:

      $$\delta = \frac{0.9(0.345) - 0.2}{10} \approx 0.011 \approx 1.1\%$$

      **Part 3(b) — investment.** From the capital-accumulation equation $K_{t+1} = (1-\delta)K_t + I_t$:

      $$I_t = K_{t+1} - (1-\delta)K_t = 105 - (1-0.011)(100) = 105 - 98.9 \approx 6.1$$

      **Part 4(a) — real wage.** Optimal hiring sets the real wage equal to $MPN$. With Cobb-Douglas, $MPN = (1-\alpha)A_t K_t^{\alpha}N_t^{-\alpha}$:

      $$w = MPN_t = 0.7 \times 0.2 \times 100^{0.3}\times 1000^{-0.3} \approx 0.07$$

      **Part 4(b) — government spending.** Firms pay $\tau_K$ on output minus labor cost, and this revenue funds $G$:

      $$G = \tau_K(Y - wN) = 0.1 \times \big(100 - 0.07(1000)\big) = 0.1 \times 30 = 3$$

      **Part 4(c) — consumption.** From the resource identity $Y = C + I + G$:

      $$C = Y - I - G = 100 - 61 - 3 = 36$$

      where investment enters as $I = 61$ because the quantity is $6.1$ units at a price of $10$ units of output. (Because the price wasn't emphasized in class, using $I = 6.1$ — giving $C = 100 - 6.1 - 3 = 90.9$ — was also accepted.)

      > [!success] Answer — **$A_t \approx 0.2$, $A_{t+1} \approx 0.23$ (TFP rose); $\delta \approx 1.1\%$; $I_t \approx 6.1$; $w \approx 0.07$; $G = 3$; $C = 36$ (or $C \approx 90.9$ if $I$ is left as 6.1)**

      > [!note] Formula sheet — Solow residual, user cost, capital accumulation
      > Four sheet entries chain together: the [[Macro Equation Sheet#Production & factor demands|Cobb-Douglas production function and marginal products]] ($A = Y/(K^{0.3}N^{0.7})$, $MPK = \alpha Y/K$, $MPN = (1-\alpha)Y/N$), the [[Macro Equation Sheet#Investment & the user cost of capital|user-cost condition]] $MPK^f = \frac{(1+r)p_k-(1-\delta)p_k^f}{1-\tau_K}$, the [[Macro Equation Sheet#Investment & the user cost of capital|capital-accumulation equation]] $K_{t+1} = (1-\delta)K_t + I_t$, and the goods-market identity $Y = C + I + G$. Solve $\delta$ from the user cost *first*, then feed it into capital accumulation for $I$. See [[solow-residual]], [[marginal-product-of-capital]], [[depreciation]], [[capital-accumulation-equation]].
    related_terms:
      - solow-residual
      - marginal-product-of-capital
      - depreciation
      - capital-accumulation-equation
    source_doc_page: 11

  - id: q9
    title: "Miluim question — trend/cyclical components and consumption smoothing"
    text: |
      *(Miluim question, 10 pts — only eligible students receive credit.)*

      1. Briefly explain the **trend** and **cyclical** components of a macroeconomic series (like GDP). *(4 pts)*
      2. Explain how the properties of the cyclical components of certain **consumption categories** support the idea of **consumption smoothing**. *(6 pts)*
    solution: |
      **Part 1 — trend vs. cyclical.** Any macroeconomic time series can be decomposed into a **trend** component and a **cyclical** component:

      - The **trend** reflects the expected path of the series, driven by medium- and longer-term changes.
      - The **cyclical** component captures deviations of the actual series from its trend — typically the shorter-term fluctuations *around* the trend. (For example, recessions are periods where the cyclical component of output lies *below* its trend.)

      **Part 2 — consumption smoothing.** When we look at the consumption of **non-durables and services**, the variation in their **cyclical components is smaller than that of output** (output being aggregate income). In other words, consumption of these categories is more stable than income. That relative smoothness is exactly what **consumption smoothing** predicts: households use saving and borrowing to keep consumption steadier than their fluctuating income.

      > [!success] Answer — **Trend = expected long-run path; cyclical = short-run deviations around it. Non-durables/services consumption is less volatile than output, consistent with consumption smoothing**

      > [!tip] Empirical / "discussed-in-class" question
      > No formula here — this tests the stylized facts from the business-cycle lectures. Key ideas: **trend vs. cyclical decomposition**, and **consumption of non-durables and services is smoother than income**, supporting the smoothing motive. See [[business-cycles]], [[hp-filter]], [[consumption-smoothing]].
    related_terms:
      - business-cycles
      - hp-filter
      - consumption-smoothing
    source_doc_page: 13
---

> [!info] About this paper
> The **real Moed A (July 2025) final** for Intermediate Macro: **6 short questions** (6 points each), **2 long questions** (32 points each), and a **Miluim question** (10 points, eligible students only). It is **open-notes** with the [[Macro Equation Sheet|formula sheet]] provided. Unlike the [[Sample Exam 2026]], this paper's questions are **open-ended** (calculate / show / explain) rather than multiple-choice — so each entry below is a "show solution" toggle rather than an answer-key MCQ. Every solution is transcribed from the official answer key and tags the formula-sheet block it draws on.
