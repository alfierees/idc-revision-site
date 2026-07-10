---
title: "PS6"
subject: macro-economics
tags:
  - macroeconomics
  - labor-market
  - labor-supply
  - fiscal-policy
  - taxes
  - income-effect
  - substitution-effect
  - public-debt
  - debt-dynamics
  - cobb-douglas
  - problem-set
ai_drafted: true
questions:
  - id: "setup"
    text: |
      > Part of: [[Macro-Economics]]
      > Submission set: **Q1–Q3** (Q4–Q5 are for the TA session — worked here too)
      > Key concepts: [[Lec_07-Labor Market]], [[Lec_10-Fiscal Policy]], [[Lec_05-Investment]], [[Lec_06-Equilibrium in the Goods Market]]
      > Builds on: [[Problem Set 5 Solutions]] — labor-market equilibrium & income/substitution effects

      ## Setup — the one idea that unlocks the whole set

      Every question here is an application of the **static labor-supply FOC with taxes** from [[Lec_10-Fiscal Policy]]:

      $$-U_N = w\,\frac{1-\tau_N}{1+\tau_C}\,U_C$$

      Two distinctions do almost all the work:

      - **Lump-sum $T$ vs. distortionary $\tau_N,\tau_C$.** A lump-sum tax/transfer moves labor supply **only through the income effect** (shifts $N^S$ via wealth). A labor-income or consumption tax also drives a **substitution effect** (changes the *after-tax wage*), which — under the course assumption that substitution dominates — shifts $N^S$ the *opposite* way.
      - **Income effect on/off.** Whenever a question says "PVLR is unchanged" (Q1) or you find $T$ has dropped out of a supply function (Q5), the **income effect is switched off** and only the substitution/distortion channel remains.

      Keep the two equilibrium diagrams from [[Lec_07-Labor Market]] in your head: labor market ($N^S=N^D$ → $w^*,N^*$) and goods market ($S=I$ → $r^*$). Q1 walks a shock through both.
    solution: ""
    related_terms: []
  - id: "1"
    text: |
      **A specific tax and spending plan** [submit]

      Assume that workers and firms behave as in the standard model we described in class. The government announces the following policy reform: (i) the **labor income tax increases immediately**; (ii) all proceeds will be invested in a much-required **infrastructure project** that will permanently raise Total Factor Productivity ($A$) **starting next period**; (iii) the tax increase is calculated in a way that will keep workers' **PVLR unchanged** (i.e. the tax reform does not imply an income effect on labor supply).

      1. What is the effect on the labor market in the short run? Explain whether or not the labor supply and labor demand curves shift, in which direction, etc.
      2. What is the effect on firms' optimal future capital decision? What does it imply with regards to current investment? (You may assume that the effects of $A^f$ on $MPK^f$ dominate the effects of $N^f$ on $MPK^f$.)
      3. Describe the short-run equilibrium in the goods market. Does the $S$ curve shift? The $I$ curve? What is the new level of $r$, and what happens to consumption?
      4. Describe the new equilibrium in the labor market in the long run. (You may assume that the demand effects dominate the supply effects.)
    solution: |
      > [!info] What "PVLR unchanged" buys us
      > The higher tax lowers income today, but the higher future productivity raises future wages/income. The reform is designed so these exactly offset. So **forget the income effect** — only the *distortion* of the current after-tax wage and the *future* productivity gain matter.

      ### Part 1 — Short-run labor market

      > [!success] Answer
      > **$N^D$: no shift** (current $A$ and $K$ unchanged — the TFP gain only arrives *next* period). **$N^S$: shifts LEFT**, driven purely by the **substitution effect** of the higher current $\tau_N$ (the income effect is switched off by construction). New short-run equilibrium: **pre-tax real wage $w\uparrow$, employment $N\downarrow$.**

      Reasoning. Labor demand is the $MPN$ curve, $MPN=(1-\alpha)AK^{\alpha}N^{-\alpha}$. In the short run none of $A,K,\alpha$ has changed, so $N^D$ stays put. On the supply side, a higher $\tau_N$ lowers the after-tax wage $(1-\tau_N)w$. With the income effect neutralised, only the substitution effect operates: leisure is now cheaper relative to consumption, so workers supply **less** labor at any pre-tax wage → $N^S$ shifts left. Sliding up the unchanged demand curve gives a higher pre-tax $w$ and lower $N$.

      > [!tip] Why this differs from a lump-sum tax
      > A *lump-sum* $T\uparrow$ would shift $N^S$ **right** (poorer → work more, pure income effect — see [[Lec_10-Fiscal Policy]]). Here the tax is **distortionary** and the income effect is muted, so the curve goes the **other way**. Note (per the official solution): higher taxes *could* also lower PVLR and *increase* labor supply — but assumption (iii) rules that out and leaves only the substitution effect.

      > [!tip] 🗣️ In plain English
      > The economy isn't more productive *yet*, so firms want to hire the same number of people. But the new tax means each hour of work pays a bit less take-home, so people work a little less — the before-tax wage gets bid up, and employment dips.

      ### Part 2 — Firms' future capital and current investment

      > [!success] Answer
      > Desired **future capital $K^f$ rises**, so **current investment $I$ rises today**.

      Reasoning. Nothing in the question points to a change in the **user cost of capital**. Optimal future capital satisfies $MPK^{f}=\text{user cost}$, where $MPK^{f}=\alpha A^{f}(K^{f})^{\alpha-1}(N^{f})^{1-\alpha}$. The infrastructure permanently raises $A^{f}$, which pushes $MPK^{f}$ **up**. (The lower future labor $N^f$ from the tax would pull $MPK^f$ down, but we're told the $A^f$ effect dominates.) With the user cost unchanged, the $MPK^f$ curve shifts up and the new intersection is at a **larger** $K^f$. Since $K^{f}=(1-\delta)K+I$, getting there requires **more investment now**. See the $K^f$/user-cost logic in [[Lec_05-Investment]].

      > [!tip] 🗣️ In plain English
      > Next year the economy will be more productive, so every machine a firm owns will produce more and be more worth having. Firms keep buying machines until the last one barely pays for its running cost — since each machine now earns more, they want more machines next year, and to have them then they must build or buy them now. Investment today rises.

      ### Part 3 — Short-run goods market

      > [!success] Answer
      > The **$I$ curve shifts RIGHT** (higher desired $K^f$ from Part 2). The **$S$ curve does not shift** (PVLR unchanged → consumers don't change their consumption plan yet). New equilibrium: higher $S$ and $I$ with **$r\uparrow$**, and **current consumption $C\downarrow$**.

      Reasoning. Goods-market equilibrium is $S=I$ ([[Lec_06-Equilibrium in the Goods Market]]). Investment demand has risen at every $r$, so $I$ shifts out. Saving doesn't shift from the income side because PVLR is held fixed by design. With $I$ out and $S$ fixed, the real interest rate is bid **up**. The higher $r$ then induces households to tilt consumption toward the future (intertemporal substitution — recall the intuition of the Euler equation) — a *movement along* $S$ — so **current $C$ falls** even though lifetime resources are unchanged.

      > [!warning] Exam trap: "$S$ shifts vs. movement along"
      > Don't say consumption falls because saving "increased." Saving rises as a **movement along** the $S$ curve in response to higher $r$ — the curve itself doesn't shift. PVLR being unchanged is exactly what pins the $S$ curve in place.

      > [!tip] 🗣️ In plain English
      > Firms want to build more, so demand for investment jumps while savings barely move — so the interest rate rises as everyone competes for the same pool of savings. A higher interest rate makes saving more rewarding, so people spend a little less now and save more for later.

      ### Part 4 — Long-run labor market

      > [!success] Answer
      > In the long run both $A^f$ and $K^f$ are higher, so **$N^D$ shifts strongly RIGHT**: the higher $A$ raises $MPN$ directly, and the larger $K$ raises it through complementarity. **Wages increase with certainty**, and with demand effects dominating the (left-shifted) supply, **employment $N$ rises** relative to the pre-reform level — and output $Y$ is substantially higher.

      Reasoning. By the long run the infrastructure has raised $A$, and the extra investment from Part 2/3 has raised $K$. Both shift labor demand out. The tax still keeps $N^S$ left of its original position, but we're told demand dominates, so the net move is up-and-right: **$N\uparrow,w\uparrow$**. Output rises through all three channels — higher $A$, higher $K$, higher $N$. This is the long-run pay-off the policy was designed to buy: a short-run employment dip in exchange for a permanently more productive economy.

      > [!tip] 🗣️ In plain English
      > Eventually the economy really is more productive and firms have more machines, so each worker produces more valuable output and firms want to hire lots more people. Employment and wages both rise — a small dip in jobs today buys a permanently richer, higher-paid economy later.
    related_terms: ["labor-supply", "labor-demand", "substitution-effect", "income-effect", "pvlr", "user-cost-of-capital", "savings-investment-equilibrium", "real-wage"]
  - id: "2"
    text: |
      **A welfare and tax reform** [submit]

      Assume that workers' preferences can be described using the utility function

      $$u(C,N)=C^{\gamma}(1-N)^{1-\gamma}$$

      where $C$ is consumption, $N$ is the labor input, and $0<\gamma<1$ ('gamma') is a parameter. The budget constraint is $C=(1-\tau_N)wN-T$, where $w$ is the real wage, $0\le\tau_N<1$ is the tax rate on labor income, and $T$ is a lump-sum tax (if $T>0$) or a lump-sum transfer (if $T<0$). In the question for the TA session (Q4) you are asked to show that the optimal labor supply function in this case is:

      $$N=\gamma+(1-\gamma)\,\frac{T}{(1-\tau_N)w}$$

      1. Assume that $T=-0.2$, $w=2$, $\tau_N=0.2$, and $\gamma=0.4$. Calculate the optimal labor supply and the consumption level. Under this tax-and-transfer system, what is the government's budget deficit?
      2. You show your calculations to a government official and he responds: "We can't run a deficit and we don't want to run a surplus either, so I know exactly what to do in order to balance the budget: just set the transfers equal to the tax proceeds that you showed me." Is his statement correct? Explain why or why not.
      3. Now assume that there are two workers in the economy, $A$ and $B$. Both have the same wage $w=2$ per hour, receive a transfer of $T=-0.1$ each, and face a labor income tax rate $\tau_N=0.2$. They differ, however, in their preferences: $\gamma_A=0.5$ and $\gamma_B=0.3$.
         - (a) Calculate the labor supply and consumption for $A$ and $B$. Who works more? Why?
         - (b) Assume that the government would like to increase aggregate labor supply (i.e. $N_A+N_B$) by lowering the tax rate applied to either type A or type B, but not both. Specifically, the chosen type will pay a labor income tax of 5% instead of 20%, and there are no other changes. Which type should the government pick? Provide a short explanation.
         - (c) What would be the implication of the two alternative policies with regards to consumption inequality in the economy?
    solution: |
      Workers have $u(C,N)=C^{\gamma}(1-N)^{1-\gamma}$, budget $C=(1-\tau_N)wN-T$. The optimal labor supply (derived in Q4) is

      $$\boxed{\,N=\gamma+(1-\gamma)\,\frac{T}{(1-\tau_N)w}\,}$$

      > [!example] A clean by-product: consumption is linear in the after-tax wage
      > Substituting $N$ back into the budget gives a tidy expression we'll reuse:
      > $$C=(1-\tau_N)wN-T=\gamma\big[(1-\tau_N)w-T\big]\equiv \gamma(\tilde w - T),\qquad \tilde w\equiv(1-\tau_N)w.$$

      ### Part 1 — Compute $N$, $C$, and the deficit

      Parameters $T=-0.2,\ w=2,\ \tau_N=0.2,\ \gamma=0.4$, so $\tilde w=(1-0.2)(2)=1.6$.

      $$N=0.4+(0.6)\frac{-0.2}{1.6}=0.4-0.075=\boxed{0.325}$$

      $$C=\tilde w N - T = 1.6(0.325)+0.2 = 0.52+0.2 = \boxed{0.72}\quad(=\gamma(\tilde w-T)=0.4\times1.8)$$

      **Government budget.** Revenue is the labor-income tax $\tau_N w N = 0.2\times2\times0.325=0.13$; the lump-sum term is a **transfer** of $|T|=0.2$ paid out. Net balance $=\tau_N wN + T = 0.13-0.20=-0.07$.

      > [!success] Answer
      > $N^*=0.325$, $C^*=0.72$, and the government runs a **deficit of $0.07$** in the current period (collects $0.13$ in labor tax, pays $0.20$ in transfers).

      > [!tip] 🗣️ In plain English
      > Plug the values in: the worker spends about a third of their time working and consumes 0.72 worth of goods. The government collects 0.13 in wage tax but pays out a 0.20 handout, ending up 0.07 short — that shortfall is the deficit.

      ### Part 2 — Is the official's "set transfers = tax proceeds" correct?

      > [!success] Answer
      > **No.** The statement misses the fact that lowering transfers acts like a negative income effect, so workers respond by changing their labor supply — the tax base $N$ is **endogenous**. You cannot balance the budget by setting the transfer equal to the *currently observed* proceeds, because changing the transfer changes labor supply, which changes the proceeds. It's a fixed-point problem, not a one-shot substitution.

      Reasoning. He proposes transfer $=0.13$, i.e. $T=-0.13$. But at $T=-0.13$ the worker is less subsidised, works more: $N=0.4+0.375(-0.13)=0.351$, so proceeds rise to $\tau_N wN=0.4\times0.351=0.1405\neq0.13$ — the government now runs a **surplus of $0.0105$**. Solving the budget and the behavioural response *together*, $T+\tau_N wN(T)=0$, gives the true balancing transfer:

      $$T^{*}=-\frac{\tau_N w\,\gamma}{1+\tau_N w\frac{1-\gamma}{\tilde w}}=-0.139,\qquad N=0.348,\qquad \tau_N wN=0.139=-T^{*}.\ \checkmark$$

      > [!warning] The general lesson — a mini "Laffer" point
      > Whenever the tax base responds to policy, mechanical revenue arithmetic ("just set $X=Y$") is wrong. Here the error is small ($0.13$ vs the correct $0.139$) because the response is modest, but the *method* is flawed.

      > [!tip] 🗣️ In plain English
      > The official's plan fails because changing the handout changes how much people work, which changes how much tax comes in. It's a moving target — you have to solve for the handout and the work response together, not just match today's numbers.

      ### Part 3 — Two workers, $\gamma_A=0.5$, $\gamma_B=0.3$ ($w=2$, $T=-0.1$, $\tau_N=0.2$, $\tilde w=1.6$)

      **(a) Labor supply and consumption — who works more?**

      $$N_A=0.5+0.5\frac{-0.1}{1.6}=\boxed{0.469},\qquad N_B=0.3+0.7\frac{-0.1}{1.6}=\boxed{0.256}$$

      $$C_A=\gamma_A(\tilde w-T)=0.5(1.7)=\boxed{0.85},\qquad C_B=0.3(1.7)=\boxed{0.51}$$

      > [!success] Answer
      > **A works more** ($0.469$ vs $0.256$) and consumes more ($0.85$ vs $0.51$). In this Cobb–Douglas form $\gamma$ is the **weight on consumption** relative to leisure: the baseline labor supply is exactly $\gamma$. A higher $\gamma$ means A cares relatively more about consumption than leisure, so supplies more labor (consumes less leisure) and consumes more.

      > [!tip] 🗣️ In plain English
      > A works more. Here's a handy fact: with no handout, each worker would work exactly their gamma — so A's baseline is 0.5 and B's is 0.3. A just values buying stuff more, so he puts in more hours and consumes more; B values his free time, so he works less.

      **(b) Which type should get the tax cut (to 5%) to raise aggregate $N_A+N_B$?**

      The labor-supply response to cutting $\tau_N$ comes entirely through the term $(1-\gamma)\dfrac{T}{(1-\tau_N)w}$. Cutting $\tau_N$ from $0.20$ to $0.05$ raises $(1-\tau_N)w$ from $1.6$ to $1.9$, shrinking the (negative) transfer drag. The size of the gain is proportional to $(1-\gamma)$:

      $$\Delta N = (1-\gamma)\,T\Big[\tfrac{1}{1.9}-\tfrac{1}{1.6}\Big]=(1-\gamma)(-0.1)(-0.0987)=(1-\gamma)\times0.00987$$

      $$\Delta N_A=0.5\times0.00987=0.0049,\qquad \Delta N_B=0.7\times0.00987=\boxed{0.0069}$$

      In aggregate terms: $N_A+N_B=0.725$ before the change, $0.730$ if type A receives the tax cut, and $0.732$ if type B receives it.

      > [!success] Answer
      > **Pick type B.** B's labor supply rises more ($+0.0069$ vs $+0.0049$, i.e. aggregate $0.732$ vs $0.730$) because the wage/tax response scales with $(1-\gamma)$ — the **weight on leisure** — and B has the higher $(1-\gamma)=0.7$. In general, starting from the same wage, tax and transfer, the worker with **lower $\gamma$** is more responsive to changes in the labor income tax rate (shown in Q4). The worker who cares more about leisure has the more **wage-elastic** labor supply, so a tax cut buys more extra work from B.

      > [!tip] 🗣️ In plain English
      > The handout is what holds each worker's effort down — free money lets you skip some work — and the drag is biggest when take-home pay is low. Cutting a worker's tax raises his take-home pay, so the handout buys him less free time and he works more. B was leaning on the handout hardest, so relieving it gives B the bigger bounce: cut B's tax.

      **(c) Implications for consumption inequality**

      Baseline gap $C_A-C_B=0.85-0.51=0.34$ (A richer). Using $C=\gamma(\tilde w - T)$ with the cut type at $\tilde w'=1.9$:

      | Policy | $C_A$ | $C_B$ | Gap $C_A-C_B$ | Ratio $C_A/C_B$ |
      |---|---|---|---|---|
      | Baseline | 0.85 | 0.51 | **0.34** | 1.67 |
      | **Cut B** to 5% | 0.85 | **0.60** | **0.25** ↓ | 1.42 |
      | Cut A to 5% | **1.00** | 0.51 | **0.49** ↑ | 1.96 |

      > [!success] Answer
      > The two policies push inequality in **opposite directions**. Cutting **B**'s tax raises the *poorer* worker's consumption ($0.51\to0.60$) and **narrows** the gap: the consumption ratio falls from $1.67$ to $1.42$ — consumption is more equal. Cutting **A**'s tax raises the *richer* worker's consumption ($0.85\to1.00$) and **widens** the gap: the ratio rises to $1.96$ — less equal.

      > [!tip] The happy coincidence
      > The policy that **maximises aggregate labor supply** (cut B, from part b) is also the one that **reduces consumption inequality** (part c). Targeting the low-$\gamma$, leisure-loving worker is efficient *and* equalising here.

      > [!tip] 🗣️ In plain English
      > It depends who you pick. Cutting B's tax lifts the poorer worker's consumption (0.51 to 0.60), so the gap shrinks; cutting A's tax pumps up the richer worker (0.85 to 1.00), widening it. The choice that buys the most extra work is also the one that reduces inequality — a happy coincidence.
    related_terms: ["labor-supply", "labor-income-tax", "lump-sum-tax", "cobb-douglas", "income-effect"]
  - id: "3"
    text: |
      **Simple public debt dynamics** [submit]

      1. Go to FRED and search for the latest read of the US debt-to-GDP ratio (*Federal Debt: Total Public Debt as Percent of Gross Domestic Product*), as well as the latest read on the deficit/surplus as a fraction of GDP (*Federal Surplus or Deficit [-] as Percent of Gross Domestic Product*).
      2. Assume that the annual real interest rate on public debt is 1%. What should the real GDP growth rate be such that the debt-to-GDP ratio does not grow further?
      3. Assume that the real interest rate on public debt rises to 1.5%. What should the real GDP growth rate be such that the debt-to-GDP ratio does not grow further?
      4. Assume that 2020–2021 were unique years due to the covid crisis and that the deficit is expected to go back to its 2019 level (and the real interest rate is still 1%). What should the real GDP growth rate be such that the debt-to-GDP ratio does not grow further?
    solution: |
      The engine is the debt-ratio law of motion from [[Lec_10-Fiscal Policy]]:

      $$\Delta b_t = d_t + \frac{r-g}{1+g}\,b_{t-1}.$$

      Setting $\Delta b=0$ and solving for the growth rate that holds the ratio constant:

      $$0=(1+g)d+(r-g)b\ \Longrightarrow\ d+rb=gb-gd\ \Longrightarrow\ \boxed{\,g^{*}=\frac{d+rb}{b-d}\,}$$

      (Obviously, stronger growth than $g^*$ makes $\Delta b<0$, so the ratio would *fall*.)

      > [!info] Note on the numbers
      > The official solution stresses it is "just an example based on data from a few years ago — easy to update with new data": it used the 2021 deficit ($d=0.119$) and 2022 Q3 debt ratio ($b=1.202$), giving $g^*=12\%$ and $12.65\%$. We use the **latest** FRED reads below, so our required growth rates differ — the method is identical.

      ### Part 1 — Current FRED reads

      > [!success] Answer (data as of the latest available reads, June 2026)
      > - **Debt-to-GDP** (*Federal Debt: Total Public Debt as % of GDP*, `GFDEGDQ188S`): ≈ **122.5%** (Q4 2025) → $b=1.225$.
      > - **Deficit** (*Federal Surplus or Deficit [-] as % of GDP*, `FYFSGDA188S`): ≈ **−5.8%** (FY 2025) → a deficit $d=0.0577$.

      > [!warning] Primary vs. total deficit — a real caveat
      > The formula's $d$ is strictly the **primary** deficit (excluding interest), while the FRED series above is the **total** (headline) deficit. The problem asks for that series and varies $r$ across parts 2–3, which only makes sense if we plug the reported deficit in as $d$ — so that's what we do. Just know that with a *primary* deficit (≈3% of GDP, stripping out interest) the required growth rates below would be roughly halved.

      > [!tip] 🗣️ In plain English
      > Government debt is measured relative to the size of the economy, because a bigger economy can carry more debt. Right now US debt is about 122% of the economy, and the government overspends by about 6% of the economy each year.

      ### Part 2 — Required growth if $r=1\%$

      $$g^{*}=\frac{0.01(1.225)+0.0577}{1.225-0.0577}=\frac{0.06995}{1.1673}=0.0599\approx\boxed{6.0\%}$$

      > [!tip] 🗣️ In plain English
      > Whether the debt ratio grows is a tug-of-war: borrowing more each year pushes it up, while the economy growing faster than the interest rate pulls it down. To stop the ratio rising with interest at 1%, the economy would need to grow about 6% a year.

      ### Part 3 — Required growth if $r=1.5\%$

      $$g^{*}=\frac{0.015(1.225)+0.0577}{1.225-0.0577}=\frac{0.07608}{1.1673}=0.0652\approx\boxed{6.5\%}$$

      > [!success] Interpretation
      > To merely **hold** the debt ratio flat, the economy would need ≈6.0% real growth at $r=1\%$, rising to ≈6.5% at $r=1.5\%$. Both are **far above** plausible US real growth (~2%). So at current deficits the debt-to-GDP ratio is on a **rising path** — and a higher interest rate makes the required growth even more out of reach. The $r$-sensitivity is exactly the $\frac{r-g}{1+g}$ term: when $r$ climbs toward $g$, the existing stock $b$ stops self-correcting.

      > [!tip] Sanity check on the mechanism
      > A big deficit ($d$) dominates here: even with $r$ tiny, you need $g$ high enough that growth dilutes both the fresh borrowing *and* the legacy stock. Stabilisation realistically comes from shrinking $d$, not from implausibly fast $g$.

      > [!tip] 🗣️ In plain English
      > At 1.5% interest you'd need about 6.5% growth just to stand still — higher interest on the debt means even faster growth is needed. Wealthy economies actually grow about 2% a year, nowhere near 6%, so at today's overspending the debt ratio is set to keep climbing. The realistic fix is to overspend less, not to magically grow at 6%.

      ### Part 4 — Deficit back to its 2019 level ($r=1\%$)

      In 2019 the deficit was **4.6% of GDP**, so $d=0.046$. Keeping the current debt stock $b=1.225$ and $r=0.01$:

      $$g^{*}=\frac{0.01(1.225)+0.046}{1.225-0.046}=\frac{0.05825}{1.179}=0.0494\approx\boxed{4.9\%}$$

      > [!success] Answer
      > With the deficit back at its pre-covid 2019 level (4.6%), the required growth rate falls to ≈**4.9%** (the official example, with its older $b=1.202$, gets ≈5% — same message). This is not surprising: **as the deficit declines, the economy can grow more slowly while still maintaining a stable debt-to-GDP ratio.** Still above plausible growth, though — confirming that stabilisation needs a smaller $d$, not just "back to normal".

      > [!tip] 🗣️ In plain English
      > If the overspending shrinks back to its pre-covid size, the growth needed to hold the debt ratio steady drops from about 6% to about 5%. Less borrowing each year means the economy doesn't have to run as fast to keep the debt from outgrowing it — though 5% is still a stretch.
    related_terms: ["public-debt-dynamics", "primary-deficit", "government-budget-constraint", "fiscal-policy"]
  - id: "4"
    text: |
      **Derive the optimal supply function with Cobb–Douglas preferences** [TA session]

      Assume that workers' preferences can be described using the utility function

      $$u(C,N)=C^{\gamma}(1-N)^{1-\gamma}$$

      where $C$ is consumption, $N$ is the labor input, and $0<\gamma<1$ ('gamma') is a parameter. The budget constraint is $(1+\tau_C)C=(1-\tau_N)wN-T$, where $w$ is the real wage, $0\le\tau_N<1$ is the tax rate on labor income, $\tau_C\ge0$ is the tax rate on consumption, and $T$ is a lump-sum tax (if $T>0$) or a lump-sum transfer (if $T<0$).

      1. Show that the utility function satisfies the assumptions we made on workers' preferences: (i) more consumption is better; (ii) marginal utility from consumption is diminishing; (iii) more labor is worse; (iv) the marginal utility from labor becomes more negative as we work more (i.e. it is more 'painful' to work).
      2. Solve for the optimal supply function. For this you will need to solve the worker's optimization problem, or use the optimality condition ("static first-order condition") that we discussed in class.
      3. Assume that $T<0$ (i.e. workers receive some positive amount of transfer payments). Show that in this case: (a) a further increase in transfer payments reduces labor supply; (b) an increase in the labor income tax reduces labor supply; (c) an increase in the (pre-tax) real wage increases labor supply.
      4. Assume that two workers have different preferences such that type $A$ has a lower $\gamma$ than type $B$ ($0<\gamma_A<\gamma_B<1$). Both types face the same $T$, $\tau_N$ and earn the same wage $w$. Which type of worker is more sensitive to a wage change?
    solution: |
      Same utility $u(C,N)=C^{\gamma}(1-N)^{1-\gamma}$, now with a **consumption tax** too: $(1+\tau_C)C=(1-\tau_N)wN-T$.

      ### Part 1 — The four preference properties

      | Property | Derivative | Sign | Holds? |
      |---|---|---|---|
      | More consumption is better | $U_C=\gamma C^{\gamma-1}(1-N)^{1-\gamma}$ | $>0$ | ✓ |
      | Diminishing MU of consumption | $U_{CC}=\gamma(\gamma-1)C^{\gamma-2}(1-N)^{1-\gamma}$ | $<0$ (since $\gamma<1$) | ✓ |
      | More labor is worse | $U_N=-(1-\gamma)C^{\gamma}(1-N)^{-\gamma}$ | $<0$ | ✓ |
      | Labor is increasingly painful | $U_{NN}=-\gamma(1-\gamma)C^{\gamma}(1-N)^{-\gamma-1}$ | $<0$ | ✓ |

      > [!success] Answer
      > All four hold for every $0<\gamma<1$, $C>0$, $N<1$. The key step is that $0<\gamma<1$ makes both $\gamma-1<0$ (diminishing MU of $C$) and the leisure exponent positive, so working more both lowers utility and does so at an increasing rate. (For $U_{NN}$, note the *three* minus signs — one from the first derivative, one from $-\gamma$, one from differentiating $(1-N)$ — so it stays negative.)

      > [!tip] 🗣️ In plain English
      > Four common-sense checks on the worker's tastes: more stuff is good (but each extra bit matters a little less), and working is unpleasant (and gets more unpleasant the more you do). All four hold.

      ### Part 2 — Solve for the supply function

      You can set up the Lagrangian $L=U(C,N)+\lambda[(1-\tau_N)wN-T-(1+\tau_C)C]$; dividing its first two FOCs reproduces the static FOC from class, so we start there: $-U_N=\dfrac{1-\tau_N}{1+\tau_C}\,w\,U_C$. Substituting the derivatives:

      $$(1-\gamma)C^{\gamma}(1-N)^{-\gamma}=\frac{1-\tau_N}{1+\tau_C}w\cdot\gamma C^{\gamma-1}(1-N)^{1-\gamma}$$

      Cancel $C^{\gamma-1}(1-N)^{-\gamma}$:  $(1-\gamma)C=\gamma\,\tilde w\,(1-N)$ with $\tilde w\equiv\dfrac{(1-\tau_N)w}{1+\tau_C}$. Combine with the budget (note $(1+\tau_C)\tilde w=(1-\tau_N)w\equiv W$):

      $$\gamma W(1-N)=(1-\gamma)(WN-T)\ \Longrightarrow\ N=\gamma+(1-\gamma)\frac{T}{(1-\tau_N)w}$$

      > [!success] Answer
      > $$\boxed{\,N=\gamma+(1-\gamma)\dfrac{T}{(1-\tau_N)w}\,}$$
      > The **consumption tax $\tau_C$ cancels out** of labor supply. This is special to the Cobb–Douglas case, and works because $\tau_C$ also deflates the consumption value of the lump-sum tax/transfer $T$ — everything on the consumption side scales by the same $1+\tau_C$. With more general utility functions the $\tau_C$ term *remains*, with the same qualitative effects as the labor income tax $\tau_N$. (This is the formula assumed in Q2.)

      > [!tip] 🗣️ In plain English
      > When you do the algebra, the sales tax completely cancels out of the work decision — for this particular taste formula, only the wage tax and the handout affect how much the worker chooses to work.

      ### Part 3 — Comparative statics with $T<0$ (a transfer)

      $$\frac{\partial N}{\partial T}=\frac{1-\gamma}{(1-\tau_N)w}>0,\quad \frac{\partial N}{\partial \tau_N}=\frac{(1-\gamma)T}{w(1-\tau_N)^2}<0,\quad \frac{\partial N}{\partial w}=\frac{-(1-\gamma)T}{(1-\tau_N)w^2}>0$$

      > [!success] Answer
      > (a) **A bigger transfer reduces labor supply.** A larger transfer means $T$ more negative; since $\partial N/\partial T>0$, lowering $T$ lowers $N$ (richer → more leisure). (b) **A higher $\tau_N$ reduces labor supply** ($\partial N/\partial\tau_N<0$ when $T<0$): a lower after-tax wage deepens the transfer's drag. (c) **A higher pre-tax wage raises labor supply** ($\partial N/\partial w>0$): with $T<0$, $-(1-\gamma)T>0$.

      > [!info] The no-calculus shortcut (the official route)
      > With $T<0$ the second term of the supply function is *negative* — a drag below the baseline $\gamma$. Then just eyeball the fraction $(1-\gamma)\frac{T}{(1-\tau_N)w}$: a more negative $T$ makes the drag bigger (supply falls); a higher $\tau_N$ shrinks the denominator, making the fraction more negative (supply falls); a higher $w$ enlarges the denominator, making it less negative (supply rises).

      > [!tip] 🗣️ In plain English
      > With a handout in place: a bigger handout means work less (you're comfortable, so ease off); a higher wage tax means work less (each hour pays less); a higher pre-tax wage means work more (each hour pays more).

      ### Part 4 — Who is more wage-sensitive, low-$\gamma$ A or high-$\gamma$ B?

      $$\frac{\partial N}{\partial w}=-(1-\gamma)\frac{T}{(1-\tau_N)w^{2}}>0\ \ (\text{since } T<0),\qquad \text{magnitude}\ \propto\ (1-\gamma).$$

      > [!success] Answer
      > **Type A (the lower $\gamma$)** is more sensitive. A smaller $\gamma$ means a larger leisure weight $(1-\gamma)$, which scales the wage response — low-$\gamma$ workers have the more wage-elastic labor supply. (Same logic as Q2(b).)

      > [!tip] 🗣️ In plain English
      > The worker who cares less about consuming — lower gamma, more into free time — reacts more strongly to a change in pay.
    related_terms: ["static-foc", "cobb-douglas", "consumption-tax", "labor-income-tax", "labor-supply", "utility-maximisation"]
  - id: "5"
    text: |
      **Supply function without income effect, heterogeneity, and taxes** [TA session]

      Assume that workers have the following utility function:

      $$U(C,N)=\ln\!\Big[C-\tfrac{1}{\theta}N^{\theta}\Big],\qquad \theta>0$$

      (note that the $\ln$ is applied to the whole term in brackets). Assume that the budget constraint is standard, with labor income tax $0<\tau_N<1$, consumption tax $0<\tau_C$, lump-sum transfers (negative $T$) or lump-sum taxes (positive $T$), and an hourly wage $w$:

      $$(1+\tau_C)C=(1-\tau_N)wN-T$$

      1. Start with the standard optimality condition (no need to derive the Lagrangian), $-U_N=\dfrac{1-\tau_N}{1+\tau_C}wU_C$, and derive the optimal labor supply function.
      2. Are the lump-sum transfers a part of the supply function? What does that mean with regards to consumer preferences and income effects?
      3. Of the factors that may change supply in your function, which will shift the supply curve itself, and which result in movement along the curve?
      4. Consider a given wage change (say an increase). Assume that $\theta$ is a larger number. Is the labor supply response stronger or weaker?
      5. Assume that there are two types of workers in the economy with $\theta_1>\theta_2$. Suppose that the government would like to cut taxes for one of the two types, and the goal is to maximize the labor supply response. Should the tax cut be applied to type 1 or type 2? Briefly explain.
    solution: |
      Now $U(C,N)=\ln\!\big[C-\tfrac{1}{\theta}N^{\theta}\big]$, $\theta>0$, budget $(1+\tau_C)C=(1-\tau_N)wN-T$.

      ### Part 1 — Derive the supply function

      Let $X\equiv C-\tfrac1\theta N^{\theta}$. Then $U_C=\tfrac1X$ and $U_N=\tfrac1X\big(-N^{\theta-1}\big)$, so $-U_N=\tfrac{N^{\theta-1}}{X}$. Plug into $-U_N=\dfrac{1-\tau_N}{1+\tau_C}w\,U_C$:

      $$\frac{N^{\theta-1}}{X}=\frac{1-\tau_N}{1+\tau_C}w\cdot\frac1X\ \Longrightarrow\ N^{\theta-1}=\frac{(1-\tau_N)w}{1+\tau_C}$$

      > [!success] Answer
      > $$\boxed{\,N=\left[\frac{(1-\tau_N)\,w}{1+\tau_C}\right]^{\frac{1}{\theta-1}}=(1-\tau_N)^{\frac{1}{\theta-1}}(1+\tau_C)^{-\frac{1}{\theta-1}}w^{\frac{1}{\theta-1}}\,}$$
      > Both $C$ and $X$ cancel — labor supply depends **only on the after-tax real wage**.

      > [!tip] 🗣️ In plain English
      > Work it out and how much this worker works depends only on their after-tax hourly pay — nothing else.

      ### Part 2 — Are transfers in the supply function?

      > [!success] Answer
      > **No — $T$ (and any kind of non-labor income) does not appear.** These preferences (the leisure term enters *inside* the log alongside $C$, a GHH-style form) are why this utility function is referred to as **preferences with no income effect on labor supply**. Lump-sum transfers, wealth, and the consumption level are irrelevant to the labor-leisure choice; only the price of labor (the after-tax wage) matters. This is exactly the "no income effect" property foreshadowed at the end of [[Problem Set 5 Solutions]].

      > [!tip] 🗣️ In plain English
      > The cash handout doesn't appear in the rule at all, which confirms the twist: feeling richer or poorer never moves this worker's hours — only the pay rate does.

      ### Part 3 — Shifts vs. movements along

      > [!success] Answer
      > Plotting $N$ against the pre-tax real wage $w$: a change in **$w$ is a movement along** the supply curve — $w$, the "gross" wage, is the equilibrium price in the labor market. Changes in **$\tau_N$ and $\tau_C$ shift** the entire curve (they rescale the effective wage at each $w$); **$T$ does nothing at all** (absent from the function).

      > [!tip] 🗣️ In plain English
      > Changing the pay rate slides the worker along their work curve; changing taxes shifts the whole curve; the handout does nothing.

      ### Part 4 — Larger $\theta$: stronger or weaker wage response?

      The wage elasticity is the exponent: $\dfrac{d\ln N}{d\ln w}=\dfrac{1}{\theta-1}$.

      > [!success] Answer
      > **Weaker.** For $\theta>1$ the elasticity $1/(\theta-1)$ is positive and **decreasing** in $\theta$, so a larger $\theta$ means labor supply responds *less* to a change in either of the two taxes, or the wage.

      > [!tip] 🗣️ In plain English
      > A bigger theta means the worker's hours respond less to a pay change.

      ### Part 5 — Tax cut to maximise the labor-supply response: type 1 ($\theta_1$) or type 2 ($\theta_2<\theta_1$)?

      > [!success] Answer
      > **Type 2.** The smaller $\theta_2$ gives the larger elasticity $1/(\theta_2-1)>1/(\theta_1-1)$, so type 2's labor supply responds most strongly to a tax cut. Target the more wage-elastic (low-$\theta$) type.

      > [!tip] 🗣️ In plain English
      > To squeeze out the most extra work from a tax cut, target the type with the smaller theta — they're the more responsive one.
    related_terms: ["labor-supply", "income-effect", "substitution-effect", "static-foc", "consumption-tax"]
  - id: "recap"
    text: |
      **One-page recap**

      | Q | Tool | One-line answer |
      |---|---|---|
      | 1.1 | $N^S$ substitution effect | $N^S$ left, $N^D$ fixed → $w\uparrow,N\downarrow$ (short run) |
      | 1.2 | $MPK^f$ = user cost | $A^f\uparrow$ → $K^f\uparrow$ → current $I\uparrow$ |
      | 1.3 | $S=I$ | $I$ right, $S$ fixed → $r\uparrow$, current $C\downarrow$ |
      | 1.4 | $N^D$ shifters | $A\uparrow,K\uparrow$ → $N^D$ right dominates → $w\uparrow,N\uparrow$ |
      | 2.1 | $N=\gamma+(1-\gamma)\frac{T}{\tilde w}$ | $N=0.325,\ C=0.72$, deficit $=0.07$ |
      | 2.2 | endogenous tax base | Wrong — $T=-0.13$ gives a $0.0105$ surplus; balancing $T$ is a fixed point ($T^*\!=\!-0.139$) |
      | 2.3a | $C=\gamma(\tilde w-T)$ | $N_A=0.469,N_B=0.256$; A works more (higher $\gamma$) |
      | 2.3b | $\Delta N\propto(1-\gamma)$ | Cut **B** (aggregate $0.732$ vs $0.730$) |
      | 2.3c | inequality | Cut B narrows gap (ratio 1.67→1.42); cut A widens it (→1.96) |
      | 3.2 | $g^*=\frac{d+rb}{b-d}$ | $r=1\%$ → $g^*\approx6.0\%$ |
      | 3.3 | same | $r=1.5\%$ → $g^*\approx6.5\%$ (both implausible) |
      | 3.4 | same, 2019 deficit | $d=0.046$ → $g^*\approx4.9\%$ (smaller $d$ → slower growth suffices) |
      | 4.2 | static FOC | $N=\gamma+(1-\gamma)\frac{T}{(1-\tau_N)w}$; $\tau_C$ cancels |
      | 4.4 | $\partial N/\partial w\propto(1-\gamma)$ | low-$\gamma$ A more wage-sensitive |
      | 5.1 | $-U_N=\tilde w U_C$ | $N=[\frac{(1-\tau_N)w}{1+\tau_C}]^{1/(\theta-1)}$ |
      | 5.2 | $T$ absent | no income effect |
      | 5.4–5 | elasticity $1/(\theta-1)$ | larger $\theta$ → weaker; cut taxes for low-$\theta$ type 2 |
    solution: ""
    related_terms: []
---

## 📎 Related Notes

- [[Macro-Economics]] — subject hub
- [[Lec_10-Fiscal Policy]] — static FOC with taxes, lump-sum vs. distortionary, debt dynamics $\Delta b=d+\frac{r-g}{1+g}b$ (Q1–Q5)
- [[Lec_07-Labor Market]] — $N^S$/$N^D$, income vs. substitution effects, equilibrium shifts (Q1, Q2, Q4, Q5)
- [[Lec_05-Investment]] — user cost and the $K^f$ decision (Q1.2)
- [[Lec_06-Equilibrium in the Goods Market]] — $S=I$ and the real interest rate (Q1.3)
- [[Problem Set 5 Solutions]] — labor-market equilibrium and the "no income effect" preference (Q5)
