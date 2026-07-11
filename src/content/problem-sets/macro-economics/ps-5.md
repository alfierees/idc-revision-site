---
title: "PS5"
subject: macro-economics
source_doc: /papers/macro-economics/ps-5.pdf
tags:
  - macroeconomics
  - labor-market
  - labor-supply
  - labor-demand
  - income-effect
  - unemployment
  - task-based-production
  - problem-set
ai_drafted: true
questions:
  - id: "setup"
    text: |
      Problem Set 5 — Solutions (Q1–Q8)

      > Part of: [[Macro-Economics]]
      >
      > Submission set: **Q1–Q5**; **Q6–Q7** are covered in the TA session; **Q8** is extra practice (its solution is also printed in the problem set itself)
      >
      > Key concepts: [[Lec_07-Labor Market]], [[Lec_08-Labor Market Data, Participation & Unemployment]], [[Lec_09-Inequality & Polarization]]
    solution: ""
    related_terms: []
  - id: "1"
    text: |
      **Labor market basics using a numerical example**

      Assume that workers' preferences can be described using the utility function

      $$u(C,N)=\frac{C^{1-\sigma}}{1-\sigma}-\frac{1}{\psi}N^{\psi}$$

      where $C$ is consumption, $N$ is the labor input, and $\sigma>0$ ('sigma') and $\psi>1$ ('psi') are parameters. The budget constraint is $C=wN$, where $w$ is the real wage in the economy.

      In Q6 (for the TA session) you are asked to show that the optimal solution implies the labor supply function (for the analysis here you can assume this is correct):

      $$N=w^{\frac{1-\sigma}{\psi-1+\sigma}}$$

      Firms produce with a Cobb–Douglas production function $Y=AK^{\alpha}N^{1-\alpha}$, $0<\alpha<1$. In Q6 you are also asked to show that the optimal labor demand function is (again, assume this is correct):

      $$N=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\,w^{-\frac1\alpha}$$

      For the purpose of this question, assume:

      | Symbol | Value | Symbol | Value |
      |---|---|---|---|
      | $\psi$ | 1.2 | $A$ | 0.4 |
      | $\sigma$ | 0.7 | $K$ | 4 |
      | $\alpha$ | 0.3 | | |

      1. Solve for the equilibrium levels of $w$ and $N$. (Use the equilibrium market-clearing condition so that supply equals demand — this results in one equation where the only unknown is $w$. Then substitute the equilibrium wage into the demand or the supply function to solve for $N$.)
      2. Calculate GDP for the economy.
      3. What are the new levels of $w$, $N$, and GDP if productivity increases by 25% to $A=0.5$? Describe this equilibrium graphically (i.e. which curve has shifted and why).
      4. What are the new levels of $w$, $N$, and GDP if $A$ remains at its initial level ($A=0.4$) and the capital stock increases by 25% to $K=5$? Describe this equilibrium graphically (i.e. which curve has shifted and why).
    solution: |
      **Setup.** First, simplify the two key exponents with the given numbers — we will reuse them throughout:

      $$\frac{1-\sigma}{\psi-1+\sigma}=\frac{1-0.7}{1.2-1+0.7}=\frac{0.3}{0.9}=\frac13 \qquad\Longrightarrow\qquad N^{s}=w^{1/3}$$

      $$\frac1\alpha=\frac{1}{0.3}=\frac{10}{3}\approx 3.333 \qquad\Longrightarrow\qquad N^{d}=(0.7)^{10/3}A^{10/3}K\,w^{-10/3}$$

      > **Read the slopes off the exponents.** Supply has a **positive** exponent on $w$ ($+\tfrac13$) → it slopes **up**. Demand has a **negative** exponent ($-\tfrac{10}{3}$) → it slopes **down**. This is exactly the labor market picture from [[Lec_07-Labor Market]].

      ### Part 1 — Equilibrium $w$ and $N$

      **Step 1 — Market clearing: set supply = demand.** This kills $N$ and leaves one equation in $w$:

      $$w^{1/3}=(0.7)^{10/3}A^{10/3}K\,w^{-10/3}$$

      **Step 2 — Collect the $w$ terms.** Multiply both sides by $w^{10/3}$:

      $$w^{1/3+10/3}=w^{11/3}=(0.7)^{10/3}A^{10/3}K$$

      **Step 3 — Solve for $w$** by raising both sides to the power $\tfrac{3}{11}$:

      $$w=\Big[(0.7)^{10/3}\,A^{10/3}\,K\Big]^{3/11}$$

      Plug in $A=0.4$, $K=4$. Computing the bracket: $(0.7)^{10/3}=0.3046$, $\;(0.4)^{10/3}=0.04716$, so the bracket $=0.3046\times0.04716\times4=0.05747$. Then:

      $$w=(0.05747)^{3/11}\quad\Longrightarrow\quad \boxed{w^{*}\approx 0.459}$$

      **Step 4 — Back out $N$** from the supply curve (easiest):

      $$N=w^{1/3}=(0.459)^{1/3}\quad\Longrightarrow\quad \boxed{N^{*}\approx 0.771}$$

      > **Sanity check:** substituting into the demand curve gives the same $N$ — in general it's a good idea to check both, to make sure the market indeed clears.

      > [!tip] 🗣️ In plain English
      > You're given two formulas: one for how many hours people *want to work* at each wage (supply, slopes up — more pay, more work) and one for how many workers *firms want to hire* at each wage (demand, slopes down — cheaper labor, more hiring). Set them equal — that's the wage where the number of jobs offered exactly matches the number people want. Solving gives a wage of about **0.46** and employment of about **0.77**.

      ### Part 2 — GDP

      $$Y=AK^{\alpha}N^{1-\alpha}=0.4\times 4^{0.3}\times 0.771^{0.7}=0.4\times1.5157\times0.8338$$

      $$\boxed{Y^{*}\approx 0.506}$$

      > **Cross-check via the labor share.** In Cobb–Douglas the wage bill is a constant fraction $(1-\alpha)$ of output: $wN/Y=(0.459)(0.771)/0.506=0.354/0.506\approx0.70=1-\alpha$. ✓

      > [!tip] 🗣️ In plain English
      > Feed the equilibrium employment into the production function to get total output — about **0.51**. (Quick check: the wage bill is 70% of output, exactly the labor share, so it's consistent.)

      ### Part 3 — Productivity rises 25% ($A:0.4\to0.5$)

      Because the equilibrium is a clean power function, we can scale instead of re-solving. From Step 3, $w\propto A^{10/11}$, and then $N=w^{1/3}\propto A^{10/33}$, and $Y\propto A^{1+0.7\cdot\frac{10}{33}}=A^{1.21}$. A 25% rise ($\times1.25$) gives:

      | | Before ($A=0.4$) | After ($A=0.5$) | Change |
      |---|---|---|---|
      | $w$ | 0.459 | **0.562** | +22.5% |
      | $N$ | 0.771 | **0.825** | +7.0% |
      | $Y$ | 0.506 | **0.663** | +31.1% |

      (Re-solving directly with $A=0.5$ gives $w=0.562,\;N=0.825,\;Y=0.663$ — identical.)

      **Graphically:** higher $A$ raises the marginal product of labor at every $N$, so the **labor demand curve shifts to the right**. The supply curve is unchanged (preferences and the wage relationship are unchanged). Moving along the upward-sloping supply curve to the new, higher demand curve, **both the real wage and employment rise**.

      ![](/images/macro-economics/q1-3-productivity-shift.png)

      > [!tip] 🗣️ In plain English
      > Make the whole economy more productive ($A\uparrow$). Firms now get more out of each worker, so they want to hire more → the demand curve slides **right**. Wages, jobs and output **all rise**.

      ### Part 4 — Capital rises 25% ($K:4\to5$, $A=0.4$)

      Same scaling trick. From Step 3, $w\propto K^{3/11}$, $\;N\propto K^{1/11}$, $\;Y\propto K^{0.3+0.7/11}=K^{0.364}$:

      | | Before ($K=4$) | After ($K=5$) | Change |
      |---|---|---|---|
      | $w$ | 0.459 | **0.488** | +6.3% |
      | $N$ | 0.771 | **0.787** | +2.0% |
      | $Y$ | 0.506 | **0.548** | +8.5% |

      **Graphically:** more capital makes each worker more productive (capital and labor are **complements** in production), so $MPN$ rises and the **labor demand curve again shifts right** — same direction as Part 3, but a **smaller** shift, because here only $K$ rises rather than total factor productivity. Wage and employment both rise, by less than in Part 3.

      ![](/images/macro-economics/q1-4-capital-shift.png)

      > **Why $A$ moves things more than $K$, even though both rose 25%.** $A$ affects the productivity of *all* factors — it multiplies the whole production function, raising $MPN$ one-for-one. $K$ enters with exponent $\alpha=0.3$ and faces diminishing returns, so the same percentage rise in $K$ raises output (and labor demand) by much less.

      > [!tip] 🗣️ In plain English
      > More machines ($K\uparrow$) also make workers more productive, so demand shifts right again — **same direction, smaller effect**. Extra machines run into diminishing returns, whereas raw productivity multiplies everything, so a productivity boost moves things more than the same-sized capital boost.
    related_terms: ["labor-demand", "labor-supply", "real-wage", "cobb-douglas", "marginal-product-of-labor"]
  - id: "2"
    text: |
      **Foreign aid (of a particular kind)**

      Suppose that an economy's labor market is in equilibrium, and starts to receive a permanent amount of foreign aid. You may assume that the foreign aid is: (i) in final consumption goods; (ii) delivered directly to households; (iii) expected to last forever (e.g. a positive amount every period).

      1. In the short run (i.e. before capital can be adjusted): does the labor supply curve shift? Does the labor demand curve shift? Explain why (and in which direction) or why not.
      2. What are the short-run effects on the real wage, the labor input, and output (i.e. production) in this economy?
      3. Are there any effects on future capital accumulation and (therefore) on current investment? Explain.
      4. As capital adjusts, what are the implications with regards to the labor market? Specifically, how would the long-run equilibrium compare to the short-run equilibrium? What about output?
      5. Is the economy better-off or worse-off as a result of the increase in foreign aid?
    solution: |
      The aid is a permanent stream of free **consumption** goods handed to households. It is **not** capital and **not** a productivity shock — so it works purely through the **wealth/income effect on labor supply**.

      ### Part 1 — Do the curves shift (short run, $K$ fixed)?

      - **Labor demand: NO shift.** Demand depends on $A$, $K$ and $\alpha$ — none change in the short run. The production technology is untouched.
      - **Labor supply: shifts LEFT.** The permanent aid lets households consume more and acts as a positive **wealth effect** (like the winning-the-lottery example from class). Richer households want to work less at any given wage (pure income effect), so the $N^S$ curve shifts left (in).

      > [!tip] 🗣️ In plain English
      > Firms' hiring (labor demand) doesn't move — the technology is untouched. But people are permanently richer, so they choose to work a bit less at any wage → the **supply curve shifts left**.

      ### Part 2 — Short-run effects on $w$, $N$, $Y$

      Demand fixed (downward-sloping) + supply shifts left → move **up-left along the demand curve**:

      $$\boxed{w\uparrow,\qquad N\downarrow,\qquad Y\downarrow}$$

      The real wage rises (labor is scarcer), but **employment and domestically-produced output fall**: $A$ does not change, $K$ is fixed in the short run, and $N$ is lower at the new equilibrium.

      ![](/images/macro-economics/q2-foreign-aid.png)

      > [!tip] 🗣️ In plain English
      > With fewer people wanting to work, labor is scarcer, so the **wage rises** but **jobs and home-made output fall** (people take more leisure).

      ### Part 3 — Effect on future capital / current investment?

      Optimal future capital is set by $MPK^{f}=\text{user cost}$. Firms expect the lower $N$ to persist because the aid is permanent, and $MPK^{f}=\alpha A^{f}(K^{f})^{\alpha-1}(N^{f})^{1-\alpha}$ depends on **future labor** $N^{f}$. With $N^{f}$ lower, $MPK^{f}$ declines (complementarity). Since none of the user-cost parameters change, firms re-optimize by choosing a **lower $K^{f}$ and investing less today.** (See the $K^f$ logic in [[Lec_05-Investment]].)

      > [!tip] 🗣️ In plain English
      > Since people plan to work less in the future too, each machine has fewer workers to run it and is worth less, so firms **invest less** now.

      ### Part 4 — As capital adjusts (long run)

      As capital adjusts, firms have **less capital**, and less capital lowers the marginal product of labor — so the **labor demand curve shifts left**. Comparing the long run to the short run: **both $N$ and $w$ decline**. The economy has less $N$ *and* less $K$ in the long run, hence **production is unambiguously lower** than in the short run.

      > **Note (from the official solution):** given the permanently lower wages, there may also be a small *right*-shift of the labor supply curve (workers face a lower wage for the entire future). This effect cannot be big enough to reverse the directional changes — otherwise workers would not have been rational to begin with.

      > [!tip] 🗣️ In plain English
      > Less investment shrinks the capital stock, which drags hiring down further — so compared with the short run, **wages and jobs both slip back** and **output falls even more** over time.

      ### Part 5 — Is the economy better or worse off?

      If we measure things by **output alone**, the economy is clearly worse off — it produces less. But the objective (at least in the model) is to maximize **welfare**, i.e. utility. By that metric, households consume **more** (aid *plus* own production) and work **less** — so they are **better off**. The fall in $Y$ is not impoverishment; it reflects people optimally substituting toward leisure now that part of consumption arrives for free.

      > **Key distinction:** GDP measures domestic *production*, not *welfare*. Free consumption goods raise welfare while reducing measured output.

      > [!tip] 🗣️ In plain English
      > **Better off**, even though GDP falls. People consume the free aid *on top of* their own output and enjoy more free time, so they're happier. GDP measures **production, not wellbeing** — lower GDP here is people choosing leisure, not getting poorer.
    related_terms: ["labor-supply", "income-effect", "pvlr", "user-cost-of-capital"]
  - id: "3"
    text: |
      **Income effect on labor supply**

      In class we described an example for how a temporary positive/negative shock to Total Factor Productivity (TFP) can generate an expansion/recession using the equilibrium model of the labor market and the production function. Here we consider a related example, that is arguably more realistic.

      Suppose that the labor market is in an equilibrium. As a result of new technological progress, TFP is now **permanently** higher — it "jumps" to a new level and is expected to stay at this level forever.

      1. Does the labor demand curve shift (in the current period)? If so, in which direction? Explain.
      2. Does the labor supply curve shift (in the current period)? If so, in which direction? Explain.
      3. As a result of your previous answers, can you tell what will happen to the labor input, the real wage, and GDP?
      4. Now suppose that instead of a permanent shock, TFP will be higher for a few periods but will gradually revert back to its initial level. Does this change your answers?
      5. Finally, suppose that household preferences are such that there is no income effect on labor supply. Does this change your answers?
      6. *(TA session — not for submission)* Show that if the utility function is $U(C,N)=\ln\!\left(C-\frac{N^{1+\frac1\psi}}{1+\frac1\psi}\right)$ then there is no income effect on labor supply.
    solution: |
      ### Part 1 — Labor demand (current period)?

      **Shifts RIGHT.** Current $A$ is higher → $MPN=(1-\alpha)A K^{\alpha}N^{-\alpha}$ is higher at every $N$ → firms demand more workers at the going wage.

      > [!tip] 🗣️ In plain English
      > Each worker now produces more, so firms want to hire more → **demand shifts right**.

      ### Part 2 — Labor supply (current period)?

      **Shifts LEFT.** Because TFP stays higher *forever*, workers expect their income to be higher both now and in the future. Higher future income raises workers' **PVLR** for reasons unrelated to the current wage — and PVLR is one of the supply "curve shifters". Through the income effect they want more leisure, so labor supply falls at any given wage.

      > [!tip] 🗣️ In plain English
      > People feel richer for life, so they want more leisure → **supply shifts left**. (This is the new wrinkle — a *permanent* shock triggers this "feeling richer" effect; a temporary one barely does.)

      ### Part 3 — What happens to $N$, $w$, GDP?

      - **Real wage $w$: unambiguously UP.** Demand shifts right *and* supply shifts left — both push the wage up.
      - **Employment $N$: AMBIGUOUS.** Demand is higher and supply is lower, so we can't conclude how $N$ changes.
      - **GDP: likely UP, but some ambiguity via $N$.** GDP is determined by the production function, where we have a higher $A$ and an ambiguous effect on $N$.

      $$\boxed{w\uparrow,\qquad N\ ?,\qquad Y\ \text{likely}\uparrow\ \text{(ambiguous via }N)}$$

      > **Side note (official):** this is a sufficient answer given the tools we have. In principle we can conclude GDP should *increase* — otherwise workers' income would decline, which is inconsistent with their rational expectations of permanently higher income.

      ![](/images/macro-economics/q3-permanent-tfp.png)

      > [!tip] 🗣️ In plain English
      > **Wages definitely rise** (both forces push the wage up). **Jobs could go either way** — the two forces fight. **Output probably rises** thanks to higher productivity (and strictly should, if workers' expectations of being richer are to come true).

      ### Part 4 — Temporary (persistent but reverting) instead of permanent

      **It changes the quantitative answers, not the qualitative ones.** A TFP shock that is persistent but not permanent adds less to PVLR, so the positive wealth effect is **weaker** — and so is the leftward shift of labor supply. Directions are as in Parts 1–3 (demand right, supply left-but-less, $w\uparrow$, $N$ ambiguous); the outcome just sits closer to the pure demand-shift expansion of the temporary-shock story from [[Lec_07-Labor Market]].

      > [!tip] 🗣️ In plain English
      > If the boost fades out, the "feeling richer" effect is smaller, so supply barely moves. Same signs as before, but the tug-of-war on jobs tilts toward the hiring side.

      ### Part 5 — Preferences with no income effect on labor supply

      **Yes — the ambiguity disappears.** No income effect means PVLR does not affect labor supply, so the supply curve does **not** shift. Only demand shifts right: the new equilibrium has a **higher real wage, more $N$ and more $Y$ with certainty.** (Part 6 shows a utility function that delivers exactly this property.)

      > [!tip] 🗣️ In plain English
      > If feeling richer never changes people's work choice, only the hiring force operates: **jobs, wages and output all rise**, no ambiguity.

      ### Part 6 — *(TA session)* No income effect with $U(C,N)=\ln\!\left(C-\frac{N^{1+\frac1\psi}}{1+\frac1\psi}\right)$

      Assume the baseline budget constraint $C=wN+B$, where $B$ is income from all sources **not** related to labor. In class we demonstrated the existence of an income effect by showing the effect of $B$ on labor supply — do the same here with this specific utility function.

      **Step 1 — The optimality condition** is the usual static FOC: $-U_N=wU_C$.

      **Step 2 — Take the derivatives.** Writing $X\equiv C-\frac{N^{1+\frac1\psi}}{1+\frac1\psi}$:

      $$U_N=\frac{1}{X}\times\left(-N^{\frac1\psi}\right)\qquad\qquad U_C=\frac{1}{X}$$

      **Step 3 — Substitute into the optimality condition.** The $\frac1X$ terms cancel:

      $$\frac{1}{X}\,N^{\frac1\psi}=w\times\frac{1}{X}\quad\Longrightarrow\quad N^{\frac1\psi}=w\quad\Longrightarrow\quad \boxed{N=w^{\psi}}$$

      **Step 4 — Read off the result.** The supply function **does not depend on $B$** — non-labor income does not matter for labor supply, which is exactly what "no income effect" means. Equivalently: we never needed the budget constraint to solve for optimal labor supply at all.

      > [!tip] 🗣️ In plain English
      > With this special utility function, when you write down the worker's "work one more hour?" trade-off, the wealth terms **cancel out** — the answer $N=w^{\psi}$ depends only on the wage. Windfalls, aid, or permanently higher future income never change how much these workers choose to work.
    related_terms: ["labor-supply", "labor-demand", "income-effect", "real-wage", "total-factor-productivity", "pvlr"]
  - id: "4"
    text: |
      **Steady-state unemployment flows**

      Assume that the employment and unemployment stocks in the economy behave according to the descriptive model we discussed in class. Denote the job separation/destruction probability by $d$ and the job finding probability by $f$.

      Assume that there are two types of workers in the economy and that all workers are in the labor force (i.e. they are either employed or unemployed):

      - 15,000 workers of type A, of which 1,500 are unemployed, and $d_A=0.07$
      - 15,000 workers of type B, of which 1,800 are unemployed
      - the job finding rate is the same across groups: $f_A=f_B$

      Use the steady-state version of the model to find $f$ (for both types) and $d_B$.
    solution: |
      **Model (from [[Lec_08-Labor Market Data, Participation & Unemployment]]).** In steady state, flows into unemployment equal flows out:

      $$d\cdot E = f\cdot U \qquad\Longrightarrow\qquad u\equiv\frac{U}{L}=\frac{d}{d+f}$$

      where $d$ = separation rate, $f$ = job-finding rate, $L=E+U$ (everyone is in the labor force).

      **Given.** Both groups have $L=15{,}000$:

      | | Unemployed | $u=U/L$ | $d$ |
      |---|---|---|---|
      | Type A | 1,500 | $1500/15000=0.10$ | $d_A=0.07$ |
      | Type B | 1,800 | $1800/15000=0.12$ | $d_B=?$ |

      with the restriction $f_A=f_B=f$.

      ### Step 1 — Find $f$ from Type A

      $$u_A=\frac{d_A}{d_A+f}\;\Longrightarrow\;0.10=\frac{0.07}{0.07+f}\;\Longrightarrow\;0.07+f=\frac{0.07}{0.10}=0.7$$

      $$\boxed{f=0.63}\quad(\text{same for both groups})$$

      ### Step 2 — Find $d_B$ using $f=0.63$ and $u_B=0.12$

      $$0.12=\frac{d_B}{d_B+0.63}\;\Longrightarrow\;0.12(d_B+0.63)=d_B\;\Longrightarrow\;0.0756=0.88\,d_B$$

      $$\boxed{d_B=\frac{0.0756}{0.88}\approx 0.086}$$

      i.e. about **8.6%** of type-B workers lose their job every period.

      > **Interpretation:** the two groups share the same job-finding rate (0.63), so Type B's higher unemployment rate (12% vs 10%) must come entirely from a **higher separation rate** — its jobs are destroyed more often ($d_B\approx0.086$ vs $d_A=0.07$). Higher unemployment here is a "job stability" problem, not a "job finding" problem.

      > [!tip] 🗣️ In plain English
      > Think of unemployment as a **bathtub**: water flows *in* when people lose jobs (rate $d$) and drains *out* when they find new ones (rate $f$); the steady level is $d/(d+f)$. Type A's numbers pin down the shared finding rate, **$f=63\%$**. Type B finds jobs just as fast but sits at 12% unemployment, so its jobs must get destroyed more often: **$d_B\approx8.6\%$**. B's problem is job *stability*, not job *finding*.
    related_terms: ["unemployment-rate", "steady-state-unemployment", "job-finding-rate", "separation-rate", "stocks-and-flows-model"]
  - id: "5"
    text: |
      **Task-based production**

      Suppose that production in the economy can be described as a collection of tasks, and that the production of an individual task $j$ can be described as

      $$y(j)=\psi_N(j)N_j+\psi_K(j)K_j$$

      where $N_j$ denotes labor employed in task $j$, $K_j$ denotes capital employed in task $j$, $\psi_N(j)$ is labor productivity in task $j$, and $\psi_K(j)$ is capital productivity in task $j$.

      In addition, suppose that $w$ and $r$ represent the wage and the rental price of capital, respectively. Both are taken as given by firms.

      Suppose that overall output is the sum of four tasks, with the following labor and capital productivity in each task:

      | Task | $\psi_N(j)$ | $\psi_K(j)$ |
      |---|---|---|
      | 1 | 10 | 2 |
      | 2 | 8 | 4 |
      | 3 | 5 | 6 |
      | 4 | 4 | 8 |

      1. Suppose that $w=100$ and $r=100$. Which tasks are produced by labor and which ones are produced by capital?
      2. Suppose that due to a technological improvement $r=80$. Is there any change in the division of tasks between capital and labor? Are workers better off/worse off/indifferent?
    solution: |
      **Model (from [[Lec_09-Inequality & Polarization]]).** A task is assigned to whichever input produces it **more cheaply per unit of output**:

      $$\text{cost via labor}=\frac{w}{\psi_N(j)}\qquad\text{cost via capital}=\frac{r}{\psi_K(j)}$$

      $$\text{Use LABOR if}\quad \frac{w}{\psi_N(j)}<\frac{r}{\psi_K(j)}\quad\Longleftrightarrow\quad \frac{\psi_N(j)}{\psi_K(j)}>\frac{w}{r}$$

      So compare each task's **labor-to-capital productivity ratio** $\psi_N/\psi_K$ against the **factor-price ratio** $w/r$.

      ### Part 1 — $w=100$, $r=100$

      Compute the per-unit cost of each task under each input (e.g. Task 1 via labor: $w/\psi_N(1)=100/10=10$):

      | Task | Cost via labor | Cost via capital | Cheaper input |
      |---|---|---|---|
      | 1 | 10 | 50 | **Labor** |
      | 2 | 12.5 | 25 | **Labor** |
      | 3 | 20 | 16.67 | **Capital** |
      | 4 | 25 | 12.5 | **Capital** |

      $$\boxed{\text{Labor: Tasks 1 \& 2}\qquad\text{Capital: Tasks 3 \& 4}}$$

      ![](/images/macro-economics/q5-task-assignment.png)

      > [!tip] 🗣️ In plain English
      > Each task goes to whoever does it **more cheaply** — a worker or a machine. When a worker and a machine cost the same ($w=r$), labor wins the tasks where it's relatively most productive (**Tasks 1 & 2**); machines take the other two (**Tasks 3 & 4**).

      ### Part 2 — Technology lowers $r$ to 80

      The labor costs do not change, but the new per-unit costs via capital are:

      | Task | Cost via labor | Cost via capital ($r=80$) | Cheaper input |
      |---|---|---|---|
      | 1 | 10 | 40 | **Labor** |
      | 2 | 12.5 | 20 | **Labor** |
      | 3 | 20 | 13.33 | **Capital** |
      | 4 | 25 | 10 | **Capital** |

      **No change in the division of tasks** — it is still cheaper to produce Tasks 1–2 with labor, so the allocation between capital and labor is unchanged. (In threshold terms: $w/r$ moved from 1.0 to 1.25, but no task's $\psi_N/\psi_K$ ratio lies in that gap — Task 2's ratio of 2.0 is still comfortably above 1.25.)

      **Are workers better/worse off/indifferent?** **Better off.** Their wages and employment remain exactly the same (they still perform Tasks 1 and 2 at $w=100$), while production has become cheaper — so the **price of goods declines** and workers' real purchasing power rises. This is the **productivity effect** described in class.

      > **The bigger lesson:** cheaper capital only *displaces* workers from a task once $r$ falls enough to push $w/r$ above that task's $\psi_N/\psi_K$ ratio. Here the drop was too small to cross any threshold, so workers keep their tasks and simply enjoy cheaper goods. A larger fall in $r$ (pushing $w/r$ above 2) would start taking Task 2 from workers — then the displacement effect kicks in.

      > [!tip] 🗣️ In plain English
      > Machines get cheaper, which *raises the bar* a task must clear to stay with labor — but no task falls into the new gap, so the **split doesn't change**. Workers keep the same jobs at the same wage, yet everything they buy is now cheaper to make — so they end up **better off**. The gain shows up in cheaper goods, not in the paycheck.
    related_terms: ["task-based-model", "real-wage"]
  - id: "6"
    text: |
      *(TA session)* **Derive optimal supply and demand functions**

      The purpose of this question, among other things, is to illustrate how a model of supply and demand works from a more technical aspect (e.g., when we derive a supply/demand function, what is it a function of? How is it related to optimality? How do we clear the market?).

      Assume that workers' preferences can be described using the utility function

      $$u(C,N)=\frac{C^{1-\sigma}}{1-\sigma}-\frac{1}{\psi}N^{\psi}$$

      where $C$ is consumption, $N$ is the labor input, and $\sigma>0$ ('sigma') and $\psi>1$ ('psi') are positive parameters. The budget constraint is $C=wN$, where $w$ is the real wage in the economy. Firms produce with a Cobb–Douglas production function $Y=AK^{\alpha}N^{1-\alpha}$, where $0<\alpha<1$.

      1. Show that the assumed utility function satisfies the assumptions we made on workers' preferences: (i) more consumption is better; (ii) marginal utility from consumption is diminishing; (iii) more labor is worse; (iv) the marginal utility from labor becomes more negative as we work more (i.e. it is more 'painful' to work).
      2. Assume that firms in the economy are price takers and set labor demand to maximize profits. Derive the labor demand curve as a function of $A$, $K$, $\alpha$, and $w$.
      3. Show that demand increases if $A$ or $K$ increase, and decreases if $w$ increases. Explain why the first two will cause a shift of the curve, and the change in $w$ will be a movement along the curve.
      4. Solve for the optimal supply function. For this you will need to solve the worker's optimization problem or use the optimality condition ("static first order condition") that we discussed in class.
      5. Use the demand function and the supply function to solve for the equilibrium level of the real wage as a function of $A$, $K$ and the parameters ($\sigma$, $\psi$, $\alpha$).
    solution: |
      ### Part 1 — The utility function satisfies the preference assumptions

      The four statements are statements about the first and second derivatives of $u$:

      **(i) Positive marginal utility from consumption:**

      $$U_C=\frac{\partial U(C,N)}{\partial C}=C^{-\sigma}>0$$

      **(ii) Diminishing marginal utility of consumption:**

      $$U_{CC}=\frac{\partial^2 U(C,N)}{\partial C^2}=-\sigma C^{-\sigma-1}<0$$

      **(iii) Negative marginal utility from labor:**

      $$U_N=\frac{\partial U(C,N)}{\partial N}=-N^{\psi-1}<0$$

      **(iv) Marginal utility becomes more negative as $N$ grows:**

      $$U_{NN}=\frac{\partial^2 U(C,N)}{\partial N^2}=-(\psi-1)N^{\psi-2}<0\quad\text{if}\quad\psi>1$$

      > [!tip] 🗣️ In plain English
      > Check four derivatives: more consumption is good (first derivative positive) but each extra unit adds less (second negative); working is bad (first derivative negative) and each extra hour hurts more than the last (second negative too, thanks to $\psi>1$). The utility function passes all four tests.

      ### Part 2 — Derive labor demand

      The firm's optimal hiring condition is $MPN=w$ (see lecture slides). Derive the marginal product explicitly and rearrange:

      $$MPN=\frac{\partial\, AK^{\alpha}N^{1-\alpha}}{\partial N}=(1-\alpha)AK^{\alpha}N^{-\alpha}=w$$

      $$\Longrightarrow\quad (1-\alpha)AK^{\alpha}w^{-1}=N^{\alpha}\quad\Longrightarrow\quad \boxed{N^{d}=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\,w^{-\frac1\alpha}}$$

      > [!tip] 🗣️ In plain English
      > A firm keeps hiring until the last worker's extra output just equals the wage. Writing that rule out and solving for $N$ gives the demand curve: how many workers the firm wants at each wage.

      ### Part 3 — Comparative statics: shifts vs. movements

      Take derivatives with respect to $A$, $K$, $w$ — the first two are positive, the last is negative:

      $$\frac{\partial N}{\partial A}=\frac{1}{\alpha}(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha-1}K\,w^{-\frac1\alpha}>0$$

      $$\frac{\partial N}{\partial K}=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}w^{-\frac1\alpha}>0$$

      $$\frac{\partial N}{\partial w}=-\frac{1}{\alpha}(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\,w^{-\frac1\alpha-1}<0$$

      $A$ and $K$ change the quantity demanded **at any level of $w$** — they are the "curve shifters". $w$ is the endogenous price on the axis of the diagram, so a change in $w$ is a **movement along** the (unchanged) demand curve.

      > [!tip] 🗣️ In plain English
      > Better technology or more machines make workers more valuable at *every* wage — the whole curve moves. A change in the wage itself just slides you along the existing curve, because the wage is the axis the curve is drawn against.

      ### Part 4 — Derive labor supply

      Set up the Lagrangian (or start straight from the class optimality condition $-U_N=wU_C$):

      $$L=U(C,N)+\lambda\,[wN-C]$$

      The three first-order conditions:

      $$\frac{\partial L}{\partial C}=U_C-\lambda=0\quad\Rightarrow\quad U_C=\lambda$$

      $$\frac{\partial L}{\partial N}=U_N+\lambda w=0\quad\Rightarrow\quad -U_N=\lambda w$$

      $$\frac{\partial L}{\partial\lambda}=wN-C=0\quad\Rightarrow\quad C=wN$$

      Dividing the first two gives $-U_N=wU_C$. With $U_N=-N^{\psi-1}$ and $U_C=C^{-\sigma}$:

      $$N^{\psi-1}=wC^{-\sigma}$$

      Substitute the budget constraint $C=wN$:

      $$N^{\psi-1}=w(wN)^{-\sigma}=w^{1-\sigma}N^{-\sigma}\quad\Longrightarrow\quad N^{\psi-1+\sigma}=w^{1-\sigma}$$

      $$\boxed{N^{s}=w^{\frac{1-\sigma}{\psi-1+\sigma}}}$$

      > **Parametric caveat:** for supply to be *increasing* in $w$ we must assume $\sigma<1$, otherwise labor supply falls as the real wage rises. In income-vs-substitution language, $\sigma<1$ guarantees the **substitution effect dominates the income effect**.

      > [!tip] 🗣️ In plain English
      > The worker balances "one more hour of pay" against "one more hour of pain". Writing that trade-off down and using the budget (all consumption comes from wages) gives the supply curve. The small print: it only slopes *up* if $\sigma<1$ — that's the assumption that the lure of higher pay beats the temptation to coast.

      ### Part 5 — Clear the market: equilibrium wage

      Equate supply to demand — one equation, one unknown ($w$):

      $$w^{\frac{1-\sigma}{\psi-1+\sigma}}=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\,w^{-\frac1\alpha}$$

      $$\Longrightarrow\quad w^{\frac{1-\sigma}{\psi-1+\sigma}+\frac1\alpha}=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K$$

      $$\Longrightarrow\quad \boxed{w^{*}=\Big[(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\Big]^{\frac{1}{\frac{1-\sigma}{\psi-1+\sigma}+\frac1\alpha}}}$$

      This is exactly the formula used numerically in Q1 (where the exponents collapsed to $w^{11/3}=(0.7)^{10/3}A^{10/3}K$).

      > [!tip] 🗣️ In plain English
      > Supply says what workers will do at each wage; demand says what firms will do. Setting them equal finds the one wage where both plans are consistent — the market-clearing wage, written as a (messy but mechanical) function of technology, capital and the taste parameters.
    related_terms: ["labor-demand", "labor-supply", "static-foc", "lagrangian-optimisation", "marginal-product-of-labor", "substitution-effect"]
  - id: "7"
    text: |
      *(TA session)* **A different immigration example**

      In class we analyzed the short- and long-run effects of immigration. Let's look at a related example. Assume an economy that starts at some labor market equilibrium. The economy experiences an inflow of migration so that there is a permanent population increase. The new immigrants are not arriving "empty handed" but with some knowledge and experience that **permanently raises the level of productivity in the economy ($A$)**.

      1. What is the effect, if any, on labor demand in the short run? Explain.
      2. Describe the various effects on the labor supply curve. Assume that if there is ambiguity then eventually the supply curve shifts to the right (i.e. more supply).
      3. Describe the short-run equilibrium in the labor market (i.e. what happens to $w$ and $N$).
      4. Turning to the long-run effects — will firms choose to invest more? Explain why or why not.
    solution: |
      ### Part 1 — Labor demand in the short run

      Because the level of productivity increases **as soon as the immigrants arrive**, there is a positive effect on $A$ and therefore on $MPN$ at any level of $N$. The **labor demand curve shifts to the right** immediately.

      > [!tip] 🗣️ In plain English
      > These immigrants bring know-how, so the economy gets more productive the day they arrive — every worker is now worth more to firms, and hiring demand jumps at once.

      ### Part 2 — Labor supply: several channels

      There are a few channels through which this shock affects the supply curve:

      - **Direct population effect:** more people means more labor supply → **right shift**.
      - **Wealth effect (ambiguous on its own):** on one hand, the greater labor supply should put *downward* pressure on wages (feeling poorer → work more); on the other hand, the permanently higher productivity may raise wages *permanently* (feeling richer → work less). If the productivity effect is strong, the wealth channel alone could shift supply **left**.

      This is why the question tells us to assume the net effect is a **right shift** of the supply curve.

      > [!tip] 🗣️ In plain English
      > Two forces: more people obviously means more hands offered for work; but if the productivity boost makes everyone permanently richer, people individually want to work a bit less. We're told to assume the head-count force wins: supply shifts right overall.

      ### Part 3 — Short-run equilibrium

      Demand is stronger **and** supply is larger. As a result:

      $$\boxed{N\uparrow\ \text{unambiguously},\qquad w\ \text{ambiguous}}$$

      Both shifts raise employment; but demand-right pushes the wage up while supply-right pushes it down, so the wage can go either way.

      > [!tip] 🗣️ In plain English
      > More hiring demand *and* more people looking for work → **employment definitely rises**. The wage is a tug-of-war between the two shifts, so it **could go either way**.

      ### Part 4 — Long run: will firms invest more?

      **Yes.** In the long run firms expect **more labor and higher productivity**. Both factors contribute to a higher $MPK^{f}$: productivity directly, and labor through the complementarity assumption. As a result, firms choose more capital for the future ($K^{f}\uparrow$) and **increase current investment** to achieve that.

      > [!tip] 🗣️ In plain English
      > Machines are worth more when there are more workers to run them *and* better technology to run them with. Both are now true for the future, so firms want a bigger capital stock — which means **investing more today**.
    related_terms: ["labor-demand", "labor-supply", "income-effect", "marginal-product-of-capital"]
  - id: "8"
    text: |
      *(extra practice)* **The price of capital goods, labor, and growth**

      In recent decades economists have claimed that cheaper capital goods (e.g. machines) have contributed to growth. This question uses the model(s) we developed in class to evaluate this claim.

      Specifically, assume that: (i) an economy starts at some equilibrium in the labor market; (ii) firms' current capital $K$ reflects their optimal decision; (iii) the price of capital $p_k$ has declined permanently (to simplify, assume that $p_k=p_k^f$ and both are now lower); (iv) in the labor market, the effects of demand are stronger than the effects of supply.

      1. What is the effect of the price change on the optimal choice of future capital ($K^f$) and current investment ($I$)?
      2. Is there an effect on labor demand (i.e. the labor demand curve) in the short run? In the long run? Explain.
      3. Is there an effect on labor supply (i.e. the labor supply curve) in the long run? Explain.
      4. As a result of your previous answers, what happens to $N$, $w$ and GDP in the long run?
    solution: |
      ### Part 1 — Effect on $K^f$ and $I$

      With $p_k=p_k^f$, the user cost is

      $$\text{user cost}=\frac{(r+\delta)\,p_k}{1-\tau_k}$$

      so the lower price of capital **unambiguously lowers the user cost**. There is no exogenous shock to the $MPK^{f}$ curve. As a result, the new optimal level of $K^{f}$ is **higher** (this is logical — capital is cheaper). To increase the stock of capital, firms have to invest more today, so **investment rises as well.**

      > [!tip] 🗣️ In plain English
      > Machines got permanently cheaper, so owning one costs less per year. Firms respond the obvious way: they want **more machines** in the future, and to get there they **invest more now**.

      ### Part 2 — Labor demand: short run vs long run

      - **Short run: no effect.** There is no change in the *current* $A$ or $K$, so the current labor demand curve stays put.
      - **Long run: shifts RIGHT.** There will be more capital in the long run, and due to complementarity in production the marginal product of labor is higher for any level of $N$ — the labor demand curve shifts right.

      > [!tip] 🗣️ In plain English
      > Today nothing has changed on the factory floor, so hiring plans don't move yet. But once the extra machines arrive, each worker becomes more productive — and *then* firms want to hire more.

      ### Part 3 — Labor supply in the long run

      The labor supply curve **shifts LEFT** in the long run. Workers expect **higher income permanently**, and through the income/wealth effect they supply less labor at any given wage. The strength of this shift depends on the strength of the income effect on labor supply.

      > [!tip] 🗣️ In plain English
      > A permanently richer future makes people want a bit more leisure, so at any given wage slightly fewer hours are offered.

      ### Part 4 — Long-run $N$, $w$ and GDP

      In the long run, **both $N$ and $w$ are higher**. Note there is an ambiguity here — which is exactly why assumption (iv) matters. Labor demand is higher and labor supply is lower, which means $w$ will increase but $N$ could in principle be higher or lower; assumption (iv) (demand effects stronger than supply effects) resolves this and delivers **more $N$** at the new equilibrium.

      **Future GDP increases**, because both $K^{f}$ and $N^{f}$ increase.

      $$\boxed{N\uparrow,\qquad w\uparrow,\qquad Y\uparrow\ \text{(long run)}}$$

      > [!tip] 🗣️ In plain English
      > Add it up: more machines (Part 1), firms keener to hire (Part 2), workers slightly less keen to work (Part 3). Wages clearly rise; jobs rise too because we're told the hiring force is the stronger one. With more capital *and* more employment, **output grows** — which is exactly the economists' claim: cheaper machines fuel growth.
    related_terms: ["user-cost-of-capital", "labor-demand", "labor-supply", "income-effect"]
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Lec_07-Labor Market]] — labor demand ($MPN=w$), labor supply (static FOC), income vs substitution effects, equilibrium shifts (Q1–Q3, Q6)
- [[Lec_08-Labor Market Data, Participation & Unemployment]] — stocks-and-flows model $u=d/(d+f)$ (Q4)
- [[Lec_09-Inequality & Polarization]] — task-based production & automation (Q5)
- [[Lec_05-Investment]] — user cost and $K^f$ logic used in Q2, Q7, Q8
- [[Problem Set 4 Solutions]] — investment, user cost, goods-market equilibrium
