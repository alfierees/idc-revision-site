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
      Problem Set 5 — Solutions (Q1–Q5)
    solution: |
      > Part of: [[Macro-Economics]]
      > Submission set: Q1–Q5 (Q6–Q7 are TA-session; Q8 is extra practice)
      > Key concepts: [[Lec_07-Labor Market]], [[Lec_08-Labor Market Data, Participation & Unemployment]], [[Lec_09-Inequality & Polarization]]
    related_terms: []
  - id: "1"
    text: |
      Labor market: a numerical example
    solution: |
      **Setup.** Workers have utility $u(C,N)=\dfrac{C^{1-\sigma}}{1-\sigma}-\dfrac{1}{\psi}N^{\psi}$ with budget $C=wN$. Firms produce $Y=AK^{\alpha}N^{1-\alpha}$. We are given (and may assume) the two behavioural functions:

      $$\underbrace{N=w^{\frac{1-\sigma}{\psi-1+\sigma}}}_{\text{labor supply}}\qquad\qquad \underbrace{N=(1-\alpha)^{\frac1\alpha}A^{\frac1\alpha}K\,w^{-\frac1\alpha}}_{\text{labor demand}}$$

      **Parameters:**

      | Symbol | Value | Symbol | Value |
      |---|---|---|---|
      | $\psi$ | 1.2 | $A$ | 0.4 |
      | $\sigma$ | 0.7 | $K$ | 4 |
      | $\alpha$ | 0.3 | | |

      First, simplify the two key exponents with these numbers — we will reuse them throughout:

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

      > **Sanity check:** substituting into the demand curve gives the same $N$, confirming the market clears.

      ### Part 2 — GDP

      $$Y=AK^{\alpha}N^{1-\alpha}=0.4\times 4^{0.3}\times 0.771^{0.7}=0.4\times1.5157\times0.8338$$

      $$\boxed{Y^{*}\approx 0.506}$$

      > **Cross-check via the labor share.** In Cobb–Douglas the wage bill is a constant fraction $(1-\alpha)$ of output: $wN/Y=(0.459)(0.771)/0.506=0.354/0.506\approx0.70=1-\alpha$. ✓

      ### Part 3 — Productivity rises 25% ($A:0.4\to0.5$)

      Because the equilibrium is a clean power function, we can scale instead of re-solving. From Step 3, $w\propto A^{10/11}$, and then $N=w^{1/3}\propto A^{10/33}$, and $Y\propto A^{1+0.7\cdot\frac{10}{33}}=A^{1.21}$. A 25% rise ($\times1.25$) gives:

      | | Before ($A=0.4$) | After ($A=0.5$) | Change |
      |---|---|---|---|
      | $w$ | 0.459 | **0.562** | +22.5% |
      | $N$ | 0.771 | **0.825** | +7.0% |
      | $Y$ | 0.506 | **0.663** | +31.1% |

      (Re-solving directly with $A=0.5$ gives $w=0.562,\;N=0.825,\;Y=0.663$ — identical.)

      **Graphically:** higher $A$ raises the marginal product of labor at every $N$, so the **labor demand curve shifts to the right**. The supply curve is unchanged (preferences/$w$-relationship are unchanged). Moving along the upward-sloping supply curve to the new, higher demand curve, **both the real wage and employment rise**.

      ![](/images/macro-economics/q1-3-productivity-shift.png)

      ### Part 4 — Capital rises 25% ($K:4\to5$, $A=0.4$)

      Same scaling trick. From Step 3, $w\propto K^{3/11}$, $\;N\propto K^{1/11}$, $\;Y\propto K^{0.3+0.7/11}=K^{0.364}$:

      | | Before ($K=4$) | After ($K=5$) | Change |
      |---|---|---|---|
      | $w$ | 0.459 | **0.488** | +6.3% |
      | $N$ | 0.771 | **0.787** | +2.0% |
      | $Y$ | 0.506 | **0.548** | +8.5% |

      **Graphically:** more capital makes each worker more productive (capital and labor are **complements** in production), so $MPN$ rises and the **labor demand curve again shifts right** — same direction as Part 3, but a **smaller** shift, because here only $K$ rises rather than total factor productivity. Wage and employment both rise, by less than in Part 3.

      ![](/images/macro-economics/q1-4-capital-shift.png)

      > **Why $A$ moves things more than $K$.** $A$ multiplies the whole production function, so it raises $MPN$ one-for-one; $K$ enters with exponent $\alpha=0.3$ and faces diminishing returns, so a 25% rise in $K$ raises output (and labor demand) by much less.
    related_terms: ["labor-demand", "labor-supply", "real-wage"]
  - id: "2"
    text: |
      Foreign aid (consumption goods, to households, permanent)
    solution: |
      The aid is a permanent stream of free **consumption** goods handed to households. It is **not** capital and **not** a productivity shock — so it works purely through the **wealth/income effect on labor supply**.

      ### Part 1 — Do the curves shift (short run, $K$ fixed)?

      - **Labor demand: NO shift.** Demand depends on $A$, $K$ and $\alpha$ — none change. The production technology is untouched.
      - **Labor supply: shifts LEFT.** Households are permanently richer. With a normal preference for leisure, higher lifetime wealth makes them want to work less at any given wage (pure income effect). The supply curve shifts left (in).

      ### Part 2 — Short-run effects on $w$, $N$, $Y$

      Demand fixed (downward-sloping) + supply shifts left → move **up-left along the demand curve**:

      $$\boxed{w\uparrow,\qquad N\downarrow,\qquad Y\downarrow}$$

      The real wage rises (labor is scarcer), but **employment and domestically-produced output fall** because people choose more leisure.

      ![](/images/macro-economics/q2-foreign-aid.png)

      ### Part 3 — Effect on future capital / current investment?

      Optimal future capital is set by $MPK^{f}=\text{user cost}$. The user cost is unchanged, and $MPK^{f}=\alpha A^{f}(K^{f})^{\alpha-1}(N^{f})^{1-\alpha}$ depends on **future labor** $N^{f}$. Since the aid permanently lowers desired labor, $N^{f}$ is lower, so $MPK^{f}$ falls → **desired $K^{f}$ falls → current investment falls.** (See the $K^f$ logic in [[Lec_05-Investment]].)

      ### Part 4 — As capital adjusts (long run)

      Capital is now **lower** ($K^{f}<K$). Less capital lowers $MPN$, so the **labor demand curve shifts back left** relative to the short run. Compared with the short-run point: employment falls further (or wage gains erode), and **output is lower still**. The long-run contraction in production is larger than the short-run one because the capital stock has shrunk on top of the labor reduction.

      ### Part 5 — Is the economy better or worse off?

      **Better off in welfare terms**, even though measured GDP (domestic production) falls. Households consume aid **plus** their own production, so total consumption and leisure both rise — utility is unambiguously higher. The fall in $Y$ is not impoverishment; it reflects people optimally substituting toward leisure now that part of consumption arrives for free.

      > **Key distinction:** GDP measures domestic *production*, not *welfare*. Free consumption goods raise welfare while reducing measured output.
    related_terms: ["labor-supply", "income-effect"]
  - id: "3"
    text: |
      Income effect on labor supply (permanent TFP rise)
    solution: |
      TFP jumps permanently to a higher level and stays there.

      ### Part 1 — Labor demand (current period)?

      **Shifts RIGHT.** Current $A$ is higher → $MPN=(1-\alpha)A K^{\alpha}N^{-\alpha}$ is higher at every $N$ → firms demand more labor at any wage.

      ### Part 2 — Labor supply (current period)?

      **Shifts LEFT.** A *permanent* productivity gain raises households' permanent income/wealth. Through the income effect they want to consume more leisure, reducing labor supply at any given wage. (This is the new wrinkle versus the temporary-shock story — a permanent shock activates a strong wealth effect.)

      ### Part 3 — What happens to $N$, $w$, GDP?

      - **Real wage $w$: unambiguously UP.** Demand shifts right *and* supply shifts left — both push the wage up.
      - **Employment $N$: AMBIGUOUS.** The rightward demand shift pushes $N$ up; the leftward supply shift pushes $N$ down. Net sign depends on which effect dominates.
      - **GDP: AMBIGUOUS in direction through $N$, but boosted by higher $A$.** Output gets a direct lift from higher $A$, partly offset if $N$ falls. Typically $Y$ rises, but it is not guaranteed if the income effect on labor is very strong.

      $$\boxed{w\uparrow,\qquad N\ ?,\qquad Y\ \text{likely}\uparrow\ \text{(ambiguous via }N)}$$

      ![](/images/macro-economics/q3-permanent-tfp.png)

      ### Part 4 — Temporary instead of permanent (reverts gradually)

      **Yes, this changes the answer — it weakens the supply shift.** A temporary gain adds little to *permanent* income, so the income/wealth effect on labor supply is small. The supply curve barely moves (or even shifts slightly right via intertemporal substitution — "work more while wages are temporarily high"). Demand still shifts right. So now **$N$ rises clearly**, $w$ rises, and $Y$ rises — the classic TFP-driven expansion from [[Lec_07-Labor Market]].

      ### Part 5 — Preferences with no income effect on labor supply

      **Then the permanent case behaves like the temporary one.** With no income effect, the supply curve does **not** shift left when wealth rises — labor supply depends only on the wage. So only demand shifts right: **$N\uparrow$, $w\uparrow$, $Y\uparrow$ unambiguously.** (Q6 shows the utility form $U=\ln C-\frac{N^{1+1/\psi}}{1+1/\psi}$ that delivers exactly this no-income-effect property.)
    related_terms: ["labor-supply", "labor-demand", "income-effect", "real-wage"]
  - id: "4"
    text: |
      Steady-state unemployment flows
    solution: |
      **Model (from [[Lec_08-Labor Market Data, Participation & Unemployment]]).** In steady state, flows into unemployment equal flows out:

      $$d\cdot E = f\cdot U \qquad\Longrightarrow\qquad u\equiv\frac{U}{L}=\frac{d}{d+f}$$

      where $d$ = separation rate, $f$ = job-finding rate, $L=E+U$ (everyone is in the labor force).

      **Given.** Both groups have $L=15{,}000$.

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

      $$\boxed{d_B=\frac{0.0756}{0.88}\approx 0.0859}$$

      > **Interpretation:** the two groups share the same job-finding rate (0.63), so Type B's higher unemployment rate (12% vs 10%) must come entirely from a **higher separation rate** — its jobs are destroyed more often ($d_B\approx0.086$ vs $d_A=0.07$). Higher unemployment here is a "job stability" problem, not a "job finding" problem.
    related_terms: ["unemployment-rate"]
  - id: "5"
    text: |
      Task-based production
    solution: |
      **Model (from [[Lec_09-Inequality & Polarization]]).** Each task $j$ can be made by labor or capital:
      $$y(j)=\psi_N(j)N_j+\psi_K(j)K_j$$
      A task is assigned to whichever input produces it **more cheaply per unit of output**:

      $$\text{cost via labor}=\frac{w}{\psi_N(j)}\qquad\text{cost via capital}=\frac{r}{\psi_K(j)}$$

      $$\text{Use LABOR if}\quad \frac{w}{\psi_N(j)}<\frac{r}{\psi_K(j)}\quad\Longleftrightarrow\quad \frac{\psi_N(j)}{\psi_K(j)}>\frac{w}{r}$$

      So compare each task's **labor-to-capital productivity ratio** $\psi_N/\psi_K$ against the **factor-price ratio** $w/r$.

      | Task | $\psi_N$ | $\psi_K$ | $\psi_N/\psi_K$ |
      |---|---|---|---|
      | 1 | 10 | 2 | 5.00 |
      | 2 | 8 | 4 | 2.00 |
      | 3 | 5 | 6 | 0.83 |
      | 4 | 4 | 8 | 0.50 |

      ### Part 1 — $w=100$, $r=100$ → threshold $w/r=1$

      Assign to labor when $\psi_N/\psi_K>1$:

      $$\boxed{\text{Labor: Tasks 1 \& 2}\qquad\text{Capital: Tasks 3 \& 4}}$$

      ![](/images/macro-economics/q5-task-assignment.png)

      ### Part 2 — Technology lowers $r$ to 80 → threshold $w/r=100/80=1.25$

      Now labor is used only where $\psi_N/\psi_K>1.25$:

      | Task | $\psi_N/\psi_K$ | $>1.25$? | Assigned to |
      |---|---|---|---|
      | 1 | 5.00 | yes | Labor |
      | 2 | 2.00 | yes | Labor |
      | 3 | 0.83 | no | Capital |
      | 4 | 0.50 | no | Capital |

      **No change in the division of tasks** — the threshold moved from 1.0 to 1.25, but no task's ratio lies in that gap (Task 2's ratio of 2.0 is still comfortably above 1.25). Tasks 1–2 stay with labor, Tasks 3–4 stay with capital.

      **Are workers better/worse off/indifferent?** **Indifferent.** Cheaper capital benefits firms/capital owners, but workers' wage is unchanged ($w=100$) and they still perform exactly the same tasks (1 and 2), so their employment and earnings are untouched. The gain from cheaper capital accrues to capital, not labor.

      > **The bigger lesson:** capital only *displaces* workers from a task once $r$ falls enough to push $w/r$ above that task's $\psi_N/\psi_K$ ratio. Here the price drop was too small to cross any task's threshold — so labor is insulated. A larger fall in $r$ (e.g. below 80 so that $w/r>2$) would start eating into Task 2 and harm workers.
    related_terms: ["task-based-production"]
  - id: "6"
    text: |
      Note on Q6–Q8
    solution: |
      These are not in the submission set: **Q6** (derive the supply/demand functions from first-order conditions) and **Q7** (immigration that also raises $A$) are for the TA session; **Q8** (cheaper capital goods and growth) is extra practice and already has a printed solution in the problem set. Happy to write any of them up too — just say the word.
    related_terms: []
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Lec_07-Labor Market]] — labor demand ($MPN=w$), labor supply (static FOC), income vs substitution effects, equilibrium shifts (Q1–Q3)
- [[Lec_08-Labor Market Data, Participation & Unemployment]] — stocks-and-flows model $u=d/(d+f)$ (Q4)
- [[Lec_09-Inequality & Polarization]] — task-based production & automation (Q5)
- [[Lec_05-Investment]] — user cost and $K^f$ logic used in Q2/Q3
- [[Problem Set 4 Solutions]] — investment, user cost, goods-market equilibrium
</content>
</invoke>
