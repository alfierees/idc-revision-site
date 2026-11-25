---
title: "Macro II Moed A 2025 — Worked Solutions"
topics: "Solow, classical theory, IS-LM, Mundell-Fleming, AS-AD"
type: past-paper
status: worked-solution
exam: "Moed A, 9 February 2025"
semester: 1
year: 2
course: "Macro-Economics II"
instructor: Alon Cohen
tags:
  - macro-economics-ii
  - past-paper
  - worked-solution
  - multiple-choice
  - solow
  - classical-theory
  - is-lm
  - mundell-fleming
  - as-ad
  - phillips-curve
aliases:
  - Macro II Moed A 2025
  - PP08 Macro II
  - Tofes 0 Moed A 2025
subject: macro-ii
in_scope: true
---

# Macro II Moed A 2025 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed A, 9 February 2025** — Intermediate Macroeconomics **6827**, Dr. Alon Cohen. 25 multiple-choice questions, 4% each, open notes, 2.5 hours.
> Builds on: [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!warning] ALL 25 questions are AI-solved, not official
> This is a **Tofes 0** paper (master version, no answer key). I solved every question independently, then compared with the tofes 0 convention that the source prints the correct answer first. **My independent solution and that first printed option agreed on all 25 questions.** Questions 1 to 4 (Solow, Ch 8-9) and Q2 (the AK model) are **outside the lecture notes** (no Solow deck exists), solved from the standard Solow model and the cheat sheet.

> [!info] Course code
> This sitting is course **6827**. Earlier papers in this folder (2021 to 2024) were course **3058**. The question types are unchanged, but note the differences from the lecture notes: the Solow block (Q1 to Q4) and the **AK model** (Q2) have no lecture deck, and Q23 asks you to derive explicit IS and LM equations from general parameters rather than plug in numbers.

> [!info] Figures missing from the PDF
> The three diagram questions (Q4, Q21, Q25) have no image in the clean PDF. The images are in the docx copy of the same paper; the figures here are redrawn from those.

> [!info] The options are shuffled here
> The source (Tofes 0) prints the correct answer first. The options are shuffled on this page so the position gives nothing away. The real exam reshuffled them per student as well.

---

## What this paper tests

> [!info] The paper in one paragraph
> The first block is **long-run theory**: Solow and the golden rule (Q1 to Q4), then the classical model (Q5 to Q12) with the quantity theory, loanable funds and the Fisher effect. Then comes the **short-run Keynesian toolkit**: Keynesian cross and IS-LM (Q13 to Q15, Q23, Q24), **Mundell-Fleming** (Q16, Q20 to Q22), and **AS-AD and the Phillips curve** (Q17 to Q19, Q25).
> 1. **Solow and golden rule** (Q1 to Q4): the golden-rule condition is $MPK - \delta = n + g$. Compare the two sides to know whether to save more or less.
> 2. **Classical theory and money** (Q5 to Q12): output is fixed by supply, the interest rate clears the goods market, money only moves nominal variables, and $i = r + \pi$.
> 3. **Keynesian cross and IS-LM** (Q13 to Q15, Q23, Q24): multipliers, slope of LM, and when policy is potent or powerless.
> 4. **Open economy** (Q16, Q20 to Q22): floating rates (exchange rate absorbs fiscal shocks) versus fixed rates (money is not controllable).
> 5. **Aggregate supply and Phillips curve** (Q17 to Q19, Q25): short-run versus long-run, hysteresis, and the E to A to D adjustment path.


---

## Q1 — Steady state with MPK below depreciation

> [!warning] AI-written answer. Not official.
> Solow, Ch 8, has no lecture deck. Solved from the standard Solow model.

**Question.** If an economy is in a steady state with no population growth or technological change and the marginal product of capital is less than the depreciation rate:

- A. the depreciation rate should be decreased to achieve the Golden Rule level of consumption per worker.
- B. consumption per worker would be higher in a steady state with a higher saving rate.
- C. consumption per worker would be higher in a steady state with a lower saving rate.
- D. the economy is following the Golden Rule.

> [!success] Answer: C (AI-solved)

With $n = g = 0$ the golden-rule condition is $MPK = \delta$. Here $MPK < \delta$, so capital per worker is **above** the golden-rule level: the economy is **dynamically inefficient** (over-saving). Steady-state consumption is $c^* = f(k^*) - \delta k^*$, and its slope in $k$ is $MPK - \delta < 0$. So **less** capital, reached by a **lower** saving rate, raises consumption.

- **C. True.** Lower $s$ lowers $k^*$ toward the golden rule, and $c^*$ rises.
- **D. False.** Golden rule needs $MPK = \delta$ (with $n = g = 0$). Here $MPK < \delta$, so it is not satisfied.
- **B. False.** A higher saving rate pushes $k^*$ even further above golden rule and lowers $c^*$.
- **A. False.** $\delta$ is a technological parameter, not a policy lever. The economy reaches the Golden Rule by adjusting the **saving rate**, not by changing depreciation.

> [!tip] 🗣️ In plain English
> If extra machines add **less output than they wear out**, the economy is **saving too much**. Saving **less** would leave people with more to **consume** in the long run.

---

## Q2 — AK production function

> [!warning] AI-written answer. Not official.
> The AK model is outside the lecture notes (Ch 9, no deck). Solved from the standard AK derivation.

**Question.** If the per-worker production function is $y = Ak$, where $A$ is a positive constant, in the steady state, a:

- A. higher saving rate does not affect the growth rate.
- B. lower saving rate leads to a higher growth rate.
- C. lower saving rate does not affect the growth rate.
- D. higher saving rate leads to a higher growth rate.

> [!success] Answer: D (AI-solved)

Capital accumulation: $\Delta k = sAk - \delta k$, so

$$\frac{\Delta k}{k} = sA - \delta .$$

The marginal product of capital is **constant** ($A$), with **no diminishing returns**. So capital, and hence $y = Ak$, grows at the constant rate $sA - \delta$ forever. The saving rate sets the **growth rate itself**, not just the level.

- **D. True.** $\partial (sA - \delta)/\partial s = A > 0$.
- **A. False.** That is the standard Solow result (diminishing returns), where $s$ changes only the **level**. It fails here because there are no diminishing returns.
- **B. False.** Lower $s$ lowers $sA - \delta$.
- **C. False.** Same reason: $s$ matters for growth in the AK model.

> [!tip] Intuition
> In Solow, adding capital gets less and less productive, so the economy always settles. With $y = Ak$ every extra unit of capital is as productive as the last, so extra saving buys **permanently faster growth**.

> [!tip] 🗣️ In plain English
> With $y = Ak$ there are **no diminishing returns**, so saving a bigger share makes the economy grow **faster forever**, not just richer once.

---

## Q3 — Which rate to change to reach the golden rule

> [!warning] AI-written answer. Not official.
> Solow, Ch 8, has no lecture deck. Solved from the golden-rule condition.

**Question.** In the steady state: if the marginal product of capital net of depreciation equals 6 percent, the rate of output growth is 4 percent (as usual, we assume CRTS), to reach the Golden Rule level of the capital stock, the ____ rate in this economy must be _____.

- A. total output growth; decreased
- B. saving; increased.
- C. population growth; decreased
- D. saving; decreased

> [!success] Answer: B (AI-solved)

Golden rule: $MPK - \delta = n + g$. Under constant returns to scale, steady-state **total** output growth is $n + g$ (the 4 percent given). So $MPK - \delta = 6\% > n + g = 4\%$.

Since $MPK$ falls as $k$ rises, an $MPK$ that is too high means $k$ is **too low**. The economy needs more capital, so the **saving rate must increase**.

![[PP08_q3_golden_rule_gap.png|620]]

*Theory diagram, curve shape illustrative: only the 6 percent and 4 percent come from the question. $MPK - \delta$ falls as $k$ rises, so closing the gap from 6 to 4 percent means accumulating more capital.*

- **B. True.** Higher $s$ raises $k^*$, which pushes $MPK - \delta$ down toward 4 percent.
- **C. False.** Lowering $n$ would lower the **right-hand side** $n + g$ below 4 percent, widening the gap from 6 percent. To close the gap through $n$ you would need to **raise** it, and population growth is not a policy tool anyway.
- **D. False.** A lower $s$ means even less capital and an even higher $MPK$, moving away from the golden rule.
- **A. False.** Output growth is $n + g$, not a free variable, and decreasing it widens the gap in the same way as C.

> [!tip] 🗣️ In plain English
> Extra capital is still paying **6%** but the economy only needs to cover **4%** growth, so there is **too little capital**. The fix is to **save more**.

---

## Q4 — Reading the Solow diagram: AB/OA

> [!warning] AI-written answer. Not official.
> Solow, Ch 8, has no lecture deck. Solved from the steady-state condition, using the diagram from the docx copy.

**Question.** Assume no technological innovation or population growth. In this graph, when the capital-labor ratio in the steady state is OA, then the ratio AB/OA represents:

- A. the depreciation rate.
- B. the saving rate.
- C. marginal propensity to save.
- D. marginal propensity to consume.

*Graph (from the docx): the curves $f(k)$ and $sf(k)$ with a vertical line at $k = OA$ meeting the upper curve at C and the lower curve at B.*

> [!success] Answer: A (AI-solved)

On the graph, $AB$ is the height of the $sf(k)$ curve at $k = OA$, so $AB = sf(k)$ and $OA = k$. In the steady state investment equals break-even investment, $sf(k) = (\delta + n + g)k$. With $n = g = 0$ this is $sf(k) = \delta k$, so

$$\frac{AB}{OA} = \frac{sf(k)}{k} = \delta .$$

![[PP08_q4_ab_over_oa.png|620]]

*Theory diagram, shapes illustrative. $AB$ is saving per worker, $OA$ is $k$, so their ratio is the depreciation rate at the steady state.*

- **A. True.** At the steady state, saving per unit of capital exactly covers depreciation.
- **B. False.** The saving rate would be $AB/AC = sf(k)/f(k) = s$ (the share of output saved), not $AB/OA$.
- **D. False.** The MPC is the share of income consumed, which would be $BC/AC = 1 - s$ here; it is not $AB/OA$.
- **C. False.** The MPS is the saving rate again, $AB/AC$.

> [!warning] Trap
> Which segment goes in the denominator decides the answer. $AB$ over **$AC$** (output) gives $s$; $AB$ over **$OA$** (capital) gives $\delta$ at the steady state.

> [!tip] 🗣️ In plain English
> The gap $AB$ is the **saving**, and $OA$ is the **capital stock**. At the steady state all that saving just **replaces worn-out machines**, so saving per unit of capital is the **depreciation rate**.

---

## Q5 — Quantity theory in the long run

> [!warning] AI-written answer. Not official.

**Question.** In the long run, according to the quantity theory of money and the classical macroeconomic theory, if velocity is constant, then ______ determines real GDP and ______ determines nominal GDP.

- A. the productive capability of the economy; the money supply
- B. the money supply; velocity
- C. the money supply; the productive capability of the economy
- D. velocity; the money supply

> [!success] Answer: A (AI-solved)

Real GDP comes from the production function $Y = F(K, L)$: **supply side**, the economy's productive capability ([[Lec_03-Classical Theory & National Income]]). Quantity equation: $MV = PY$. With $V$ constant, nominal GDP $= PY = MV$ moves one-for-one with the money supply ([[Lec_05-Inflation]]).

- **A. True.** Capability fixes $Y$; $M$ (with constant $V$) fixes $PY$.
- **C. False.** Reversed: money cannot create real output in the long run (money neutrality).
- **D. False.** Velocity is **held constant** in the question, so it cannot determine real GDP, and it is the money supply, not velocity, that moves nominal GDP.
- **B. False.** Same mistake as C for the first blank, and with $V$ constant it does not "determine" anything.

> [!tip] 🗣️ In plain English
> In the long run, **real output** depends on what the economy can **produce**. The **money supply** only decides how big the **price tags** are.

---

## Q6 — What balances goods supply and demand

> [!warning] AI-written answer. Not official.

**Question.** In the classical model with fixed output, the supply and demand for goods and services are balanced by:

- A. taxes.
- B. the interest rate.
- C. fiscal policy.
- D. government spending.

> [!success] Answer: B (AI-solved)

Output $\bar Y$ is fixed. Demand is $C(Y - T) + I(r) + G$. Only investment responds to the **real interest rate**: the rate adjusts until $I(r) = \bar Y - C - G$, which is the same as the loanable-funds market clearing ([[Lec_03-Classical Theory & National Income]]).

- **B. True.**
- **A. False.** Taxes are a policy setting, they do not adjust automatically to clear the market.
- **C. False.** Fiscal policy is a **choice** by the government. Changing it shifts the curves; it is not the clearing mechanism.
- **D. False.** $G$ is exogenous policy, and changes in it are *balanced* by changes in $r$, not the other way round.

> [!tip] 🗣️ In plain English
> When output is fixed, the **interest rate** is the price that makes the amounts people want to **buy** match what exists to buy.

---

## Q7 — Saving exceeds investment demand

> [!warning] AI-written answer. Not official.

**Question.** In the classic model: if saving exceeds investment demand, and consumption is not a function of the interest rate:

- A. the interest rate will rise.
- B. saving will fall.
- C. the interest rate will fall.
- D. the demand for loans exceeds the supply of loans.

> [!success] Answer: C (AI-solved)

Saving is the **supply** of loanable funds and investment is the **demand**. If $S > I$ there is **excess supply**, so the interest rate **falls** until $I$ rises to meet $S$.

- **C. True.**
- **D. False.** It is the reverse: the supply of loans (saving) exceeds the demand (investment).
- **A. False.** A surplus pushes the price (the interest rate) down, not up.
- **B. False.** Because consumption does not depend on $r$, **saving does not depend on $r$**: $S$ is a vertical line, so it does not fall. The adjustment happens entirely through investment rising.

> [!tip] 🗣️ In plain English
> More money is being **offered** than **wanted** for loans, so the **price of borrowing** (the interest rate) **drops**.

---

## Q8 — Government spending rises, taxes unchanged

> [!warning] AI-written answer. Not official.

**Question.** According to the model developed in Chapter 3, when government spending increases but taxes are not raised, interest rates:

- A. are unchanged.
- B. can vary.
- C. decrease.
- D. increase.

> [!success] Answer: D (AI-solved)

National saving is $S = (Y - T - C) + (T - G)$. A higher $G$ with $T$ fixed **lowers public saving** and so national saving, since $C$ and $Y$ are unchanged. The $S$ line shifts **left**, and $r$ rises to clear the loanable-funds market. Investment is **crowded out** ([[Lec_03-Classical Theory & National Income]]).

- **D. True.**
- **A. False.** Saving falls, so $r$ must move.
- **C. False.** That is the effect of a **tax rise** or a cut in $G$, which raises saving.
- **B. False.** In the Ch 3 model the direction is determined: up.

> [!tip] 🗣️ In plain English
> The government **borrows more**, so there is **less left over** for firms to borrow, and the **interest rate rises**. This is **crowding out**.

---

## Q9 — Money demand, Fisher effect and the price level

> [!warning] AI-written answer. Not official.

**Question.** Assume that the demand for real money balance $(M/P)$ is $M/P = 0.6Y - 100i$, where $Y$ is national income and $i$ is the nominal interest rate (in percent). The real interest rate $r$ is fixed at 3 percent by the investment and saving functions. The expected inflation rate equals the rate of nominal money growth. If $Y$ is 1,000, $M$ is 100, and the growth rate of nominal money is 2 percent, what must $i$ and $P$ be?

- A. $i = 5$ percent, $P = 1$
- B. $i = 4$ percent, $P = 1/2$
- C. $i = 4$ percent, $P = 1$
- D. $i = 5$ percent, $P = 1/2$

> [!success] Answer: A (AI-solved)

**Step 1, Fisher equation.** Expected inflation equals money growth, $\pi^e = 2$. So

$$i = r + \pi^e = 3 + 2 = 5 .$$

**Step 2, money demand.**

$$\frac{M}{P} = 0.6(1000) - 100(5) = 600 - 500 = 100 .$$

**Step 3, price level.** $M = 100$, so $P = M / (M/P) = 100 / 100 = 1$.

- **A. True.**
- **B. False.** $i = 4$ ignores that $i = r + \pi^e = 5$. (It does not even match $P = 1/2$: with $i = 4$, $M/P = 200$, which gives $P = 1/2$, so B is internally consistent with money demand but built on the wrong $i$.)
- **D. False.** $i = 5$ is right, but then $M/P = 100$, so $P = 1$. $P = 1/2$ would need $M/P = 200$.
- **C. False.** $P = 1$ needs $M/P = 100$, which only happens at $i = 5$, not $i = 4$.

> [!tip] 🗣️ In plain English
> Work out the **nominal rate** first (**real rate + inflation = 5%**), plug it into money demand to get **real money = 100**, then divide the **money supply** by that to find **P = 1**.

---

## Q10 — Money growth and the Fisher effect

> [!warning] AI-written answer. Not official.

**Question.** In the Classic Theory, a 1 percent increase in money growth will lead to rises in:

- A. both inflation and the nominal interest rate of less than 1 percent.
- B. inflation of 1 percent and the nominal interest rate of less than 1 percent.
- C. inflation of 1 percent and the nominal interest rate of more than 1 percent.
- D. inflation of 1 percent and the nominal interest rate of 1 percent.

> [!success] Answer: D (AI-solved)

Quantity theory: inflation equals money growth minus real output growth, so faster money growth passes through **one for one** to inflation. The **Fisher effect** says $i = r + \pi$, and $r$ is fixed by real factors (saving and investment), so $\Delta i = \Delta \pi = 1$. This one-for-one pass-through is the **Fisher effect** ([[Lec_05-Inflation]]).

- **D. True.**
- **B. False.** $i$ rising by less than 1 would need $r$ to **fall**; in the classical model $r$ is unaffected by money.
- **C. False.** $i$ rising by more than 1 would need $r$ to rise.
- **A. False.** Inflation rises one for one, not less.

> [!tip] 🗣️ In plain English
> **1% more money growth** means **1% more inflation**, and lenders add that **1%** to the nominal interest rate to keep their real return, so **both rise one for one**.

---

## Q11 — Output rises under the quantity theory

> [!warning] AI-written answer. Not official.

**Question.** According to the quantity theory of money, if output increases, ______ real balances are required, and for fixed $M$ this means ______ $P$.

- A. higher; higher
- B. higher; lower
- C. lower; lower
- D. lower; higher

> [!success] Answer: B (AI-solved)

From $MV = PY$ we get $M/P = Y/V$ (money demand). If $Y$ rises with $V$ constant, people want **higher** real balances. With $M$ fixed, $M/P$ can only rise if $P$ **falls**.

- **B. True.**
- **D. False.** Real balances demanded rise with output, not fall.
- **A. False.** First blank right, but with $M$ fixed a higher $M/P$ needs a **lower** $P$.
- **C. False.** Real balances needed do not fall when income rises.

> [!tip] 🗣️ In plain English
> A bigger economy needs **more real money** to do its trading. If the amount of **money** is fixed, the only way to get more real money is for **prices to fall**.

---

## Q12 — A money-supply increase from long-run equilibrium

> [!warning] AI-written answer. Not official.

**Question.** Assume that a closed economy starts from long-run equilibrium. If the Federal Reserve increases the money supply, then ______ increase(s) in the short run and ______ increase(s) in the long run.

- A. prices; output
- B. prices; prices
- C. output; prices
- D. output; output

> [!success] Answer: C (AI-solved)

Short run: prices are **sticky**, so a higher $M$ raises aggregate demand and **output** above $\bar Y$ ([[Lec_06-AS-AD Model & Economic Fluctuations]], [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]]). Long run: prices adjust, output returns to $\bar Y$ and the full effect lands on **prices** (**money neutrality**).

- **C. True.**
- **A. False.** Reversed: prices do not move much in the short run, and output cannot rise permanently.
- **D. False.** Output cannot rise in the long run; it is fixed at $\bar Y$ by supply.
- **B. False.** Prices are sticky in the short run, so prices alone cannot be the short-run response.

> [!tip] 🗣️ In plain English
> More money **boosts output at first** because prices are slow to change. Eventually **prices catch up** and output goes **back to normal**.

---

## Q13 — Keynesian cross: G for a target income

> [!warning] AI-written answer. Not official.

**Question.** Using the Keynesian-cross analysis, assume that the consumption function is given by $C = 100 + 0.6(Y - T)$. If planned investment is 100 and $T$ is 100, then the level of $G$ needed to make equilibrium $Y$ equal 1,000 is:

- A. 200.
- B. 260.
- C. 240.
- D. 250.

> [!success] Answer: B (AI-solved)

Equilibrium $Y = C + I + G$:

$$Y = 100 + 0.6(Y - 100) + 100 + G = 140 + 0.6Y + G .$$

$$0.4Y = 140 + G .$$

With $Y = 1000$: $400 = 140 + G$, so $G = 260$ ([[Lec_07-Aggregate Demand I & the IS-LM Model]]).

- **B. True.**
- **C. False.** $G = 240$ gives $Y = 380/0.4 = 950$.
- **D. False.** $G = 250$ gives $Y = 390/0.4 = 975$.
- **A. False.** $G = 200$ gives $Y = 340/0.4 = 850$.

> [!tip] Check shortcut
> Each extra 10 of $G$ adds $10 / 0.4 = 25$ to $Y$ (multiplier 2.5). From 240 (Y = 950) you need 50 more, which is 20 more of $G$: $G = 260$.

> [!tip] 🗣️ In plain English
> Write **income = spending**, collect the $Y$ terms ($0.4Y$), and solve for the **government spending** that makes income hit **1,000**: that is **260**.

---

## Q14 — Why the LM curve slopes upward

> [!warning] AI-written answer. Not official.

**Question.** An explanation for the slope of the LM curve is that as:

- A. income rises, money demand rises, and a lower interest rate is required.
- B. the interest rate increases, income becomes higher.
- C. the interest rate increases, income becomes lower.
- D. income rises, money demand rises, and the interest rate thus rises as well.

> [!success] Answer: D (AI-solved)

LM is money-market equilibrium, $M/P = L(r, Y)$. Higher $Y$ raises money demand. With the real money supply fixed, the interest rate must **rise** to bring demand back down to supply ([[Lec_07-Aggregate Demand I & the IS-LM Model]], liquidity preference).

- **D. True.**
- **C. False.** That describes the **IS** curve (higher $r$ lowers investment and income), and it is not an explanation of LM's slope.
- **B. False.** Wrong direction for any curve in this model.
- **A. False.** A lower $r$ would raise money demand further; to restore equilibrium you need a **higher** $r$.

> [!tip] 🗣️ In plain English
> When people earn more they want **more cash**. Money supply is fixed, so the price of holding cash, the **interest rate**, has to **go up**.

---

## Q15 — Government spending versus tax cuts

> [!warning] AI-written answer. Not official.

**Question.** Based on the Keynesian model, one reason to support government spending increases over tax cuts as measures to increase output is that:

- A. government-spending increases do not lead to unplanned changes in inventories, but tax cuts do.
- B. an increase in government spending raises planned spending, whereas tax cuts decrease it.
- C. the government-spending multiplier is larger than the tax multiplier.
- D. government spending increases the MPC more than tax cuts.

> [!success] Answer: C (AI-solved)

Keynesian cross multipliers ([[Lec_07-Aggregate Demand I & the IS-LM Model]]):

$$\frac{\Delta Y}{\Delta G} = \frac{1}{1 - MPC}, \qquad \left|\frac{\Delta Y}{\Delta T}\right| = \frac{MPC}{1 - MPC} .$$

Since $MPC < 1$, the government-spending multiplier is **larger by exactly 1**: spending counts in full in the first round, while a tax cut is partly saved.

- **C. True.**
- **D. False.** The MPC is a behavioral parameter of consumers, not something either policy changes.
- **A. False.** Any change in planned spending away from output causes unplanned inventory changes until $Y$ adjusts, whichever policy caused it.
- **B. False.** A tax cut raises disposable income and therefore **raises** planned consumption.

> [!tip] 🗣️ In plain English
> A **dollar of government spending** goes straight into demand. A **dollar of tax cut** is partly **saved**, so it does **less**.

---

## Q16 — Money-supply increase under a fixed exchange rate

> [!warning] AI-written answer. Not official.

**Question.** In a small open economy with a fixed exchange rate, if the central bank tries to increase the money supply, then in the new short-run equilibrium:

- A. income remains constant.
- B. the exchange rate falls.
- C. income falls.
- D. income rises.

> [!success] Answer: A (AI-solved)

The money supply shifts $LM^*$ right, which puts **downward pressure on the exchange rate**. To keep the peg, the central bank must **buy its own currency** (sell foreign reserves), which shrinks the money supply back to where it started. $LM^*$ returns to its original position, so **income is unchanged** ([[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]).

- **A. True.** Monetary policy is **powerless** under fixed rates.
- **C. False.** Nothing in the adjustment pushes income below its starting level.
- **B. False.** The exchange rate is **fixed** by the central bank, so it cannot fall.
- **D. False.** That would be the floating-rate result, which is the opposite regime.

> [!tip] 🗣️ In plain English
> Under a **peg**, the central bank has to **reverse** any money it creates to defend the exchange rate, so **income stays put**.

---

## Q17 — Phillips curve trade-off

> [!warning] AI-written answer. Not official.

**Question.** The Phillips curve implies that there is a negative tradeoff between inflation and unemployment:

- A. both the short run and long run.
- B. in the long run only.
- C. in the short run only.
- D. in neither the short run nor the long run.

> [!success] Answer: C (AI-solved)

The short-run Phillips curve slopes down (unemployment below the natural rate comes with higher inflation). In the **long run** expectations catch up and the curve is **vertical** at the natural rate ([[Lec_14-Aggregate Supply & the Phillips Curve]]).

- **C. True.**
- **A. False.** There is no long-run trade-off (natural-rate hypothesis).
- **B. False.** The long-run curve is vertical, so there is no trade-off there.
- **D. False.** There **is** a short-run trade-off.

> [!tip] 🗣️ In plain English
> You can **buy lower unemployment with higher inflation** for a while, but once people **expect** the inflation the benefit **disappears**.

---

## Q18 — Hysteresis

> [!warning] AI-written answer. Not official.

**Question.** The hypothesis that hysteresis may play an important role in macroeconomics implies, among other things, that:

- A. the natural rate of unemployment may increase if unemployment is high for a long period of time.
- B. hysteresis lowers the sacrifice ratio.
- C. workers get hysterical during long depressions.
- D. the history of economic thought is important to macroeconomics.

> [!success] Answer: A (AI-solved)

**Hysteresis** means the natural rate depends on **past** unemployment: long spells erode skills and weaken workers' attachment, so the natural rate itself **rises** ([[Lec_14-Aggregate Supply & the Phillips Curve]]).

- **A. True.**
- **C. False.** A pun on the word, not economics.
- **B. False.** Hysteresis makes disinflation **more costly**, which **raises** the sacrifice ratio (recessions leave permanent scars).
- **D. False.** A pun on "history", not economics.

> [!tip] 🗣️ In plain English
> A **long slump** can leave people **less employable**, so the **normal rate of unemployment ends up higher** afterwards.

---

## Q19 — Flexible-price firms and the SRAS curve

> [!warning] AI-written answer. Not official.

**Question.** When some firms are flexible-price firms, then, along the short-run aggregate supply curve, if the level of output is less than the natural level of output, then the price level is:

- A. stuck at the existing price level.
- B. equal to the natural price level.
- C. greater than the expected price level.
- D. less than the expected price level.

> [!success] Answer: D (AI-solved)

In the sticky-price model the SRAS is $P = P^e + a(Y - \bar Y)$ with $a > 0$. If $Y < \bar Y$ the last term is negative, so $P < P^e$ ([[Lec_14-Aggregate Supply & the Phillips Curve]], [[Lec_06-AS-AD Model & Economic Fluctuations]]).

- **D. True.**
- **C. False.** $P > P^e$ happens when $Y > \bar Y$.
- **B. False.** $P = P^e$ (the "natural" price) only when $Y = \bar Y$.
- **A. False.** "Stuck" is the all-firms-sticky case (horizontal SRAS); with **some** flexible firms the curve is upward sloping.

> [!tip] 🗣️ In plain English
> If output is **below normal**, flexible firms **cut prices**, so the **price level ends up below what people expected**.

---

## Q20 — A falling price level in Mundell-Fleming

> [!warning] AI-written answer. Not official.

**Question.** In the Mundell-Fleming model with flexible exchange rates, a decrease in the price level results in a(n) ______ in the real exchange rate and a(n) ______ in net exports.

- A. increase; increase
- B. decrease; increase
- C. increase; decrease
- D. decrease; decrease

> [!success] Answer: B (AI-solved)

Real exchange rate $\varepsilon = eP/P^*$. A lower domestic $P$ makes domestic goods cheaper, so $\varepsilon$ **decreases**. Cheaper domestic goods raise **net exports** ([[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]). This is also the logic behind the downward-sloping AD curve in M-F.

- **B. True.**
- **C. False.** Both signs reversed.
- **D. False.** Right on $\varepsilon$, but cheaper goods **raise** exports relative to imports.
- **A. False.** A fall in $P$ cannot raise $\varepsilon$, which is proportional to $P$.

> [!warning] Trap
> The real exchange rate here is defined as $eP/P^*$ (a **higher** value means domestic goods are **more expensive**). Mixing up the direction is the usual error.

> [!tip] 🗣️ In plain English
> When home prices **fall**, our goods become a **bargain** abroad, so the **real exchange rate falls** and **net exports rise**.

---

## Q21 — A government-spending cut under floating rates

> [!warning] AI-written answer. Not official.
> The diagram was missing from the PDF; read from the docx copy.

**Question.** A small open economy with a floating exchange rate is initially at equilibrium C. If there is a decrease in government spending, holding everything else constant, the new equilibrium will be at ____.

- A. C
- B. A
- C. D
- D. B

*Graph (from the docx): $LM^*_1$ and $LM^*_2$ vertical at $Y_1$ and $Y_2$; $IS^*_2$ (upper) crosses them at B and C; $IS^*_1$ (lower) crosses them at A and D.*

> [!success] Answer: C, point D (AI-solved)

Initial equilibrium C is where $IS^*_2$ meets $LM^*_2$. A cut in $G$ shifts the IS* curve **left** from $IS^*_2$ to $IS^*_1$. Under floating rates $LM^*$ is vertical and not moved by fiscal policy, so **income stays at $Y_2$** and the **exchange rate falls** (depreciates): the new equilibrium is **D**, where $IS^*_1$ meets $LM^*_2$ ([[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]).

![[PP08_q21_mf_g_cut.png|620]]

*Theory diagram, shapes illustrative. The cut shifts IS* left along the fixed LM*: output is unchanged, the exchange rate falls.*

- **C. True.** D: same $Y_2$, lower $e$.
- **B. False.** A is on $LM^*_1$ at $Y_1$. It would mean income **falls**, but under floating rates fiscal policy does not move $Y$. A is also on the lower IS*, but on the wrong LM*.
- **A. False.** C is the starting point, and a $G$ cut must shift IS*.
- **D. False.** B is on the old $IS^*_2$ with $LM^*_1$, so it would require income to fall to $Y_1$, and no fiscal shock moves LM*.

> [!tip] 🗣️ In plain English
> Under **floating rates**, a government spending cut doesn't change **income**. It just makes the **currency weaker**.

---

## Q22 — Why IS* slopes down

> [!warning] AI-written answer. Not official.

**Question.** In the Mundell-Fleming model the IS* curve:

- A. slopes downward and to the right because the higher the exchange rate, the lower the level of net exports and, therefore, of short-run equilibrium income in the goods market.
- B. slopes downward and to the right because the higher the exchange rate, the higher the level of net exports and, therefore, of short-run equilibrium income in the goods market.
- C. is vertical because the exchange rate does not enter into the IS* equation.
- D. is vertical because there is only one investment level that is consistent with the world interest rate.

> [!success] Answer: A (AI-solved)

IS*: $Y = C(Y - T) + I(r^*) + G + NX(e)$. A higher $e$ makes domestic goods more expensive abroad, so $NX$ falls and so does $Y$: a **negative** relationship, so IS* slopes **down** in $(Y, e)$ space ([[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]).

- **A. True.**
- **D. False.** Investment is fixed by $r^*$, but that does not make IS* vertical; $e$ still enters through $NX$. (It is the **LM*** curve that is vertical.)
- **C. False.** $e$ **does** enter through net exports.
- **B. False.** Slope right, but the reason has the wrong sign: a higher $e$ **lowers** $NX$.

> [!tip] 🗣️ In plain English
> A **stronger currency** makes our exports **less competitive**, so **income is lower**. That is why IS* **slopes downward**.

---

## Q23 — When is monetary policy potent in IS-LM?

> [!warning] AI-written answer. Not official.
> Solved by deriving the equations as the question instructs.

**Question.** In a closed economy: if the investment demand function is $I = c - dr$ and the quantity of real money demanded is $aY - fr$, then monetary policy is relatively potent in influencing aggregate demand when $d$ is ______ and $f$ is ______ (instruction: find explicit equations for IS and LM and consider when expansionary monetary policy will lower the interest rate and raise the output the most).

- A. large; also large.
- B. small; large.
- C. small; also small.
- D. large; small.

> [!success] Answer: D, large d and small f (AI-solved)

Let $s = 1 - MPC$ and let $A$ collect the autonomous terms (including $c$, $G$ and the tax and intercept terms). Then

$$\text{IS: } r = \frac{A - sY}{d}, \qquad \text{LM: } r = \frac{aY - M/P}{f} .$$

Setting them equal, $f(A - sY) = d(aY - M/P)$, so

$$Y = \frac{fA + d\,(M/P)}{sf + ad}, \qquad \frac{\partial Y}{\partial (M/P)} = \frac{d}{sf + ad} .$$

This is **larger** when $d$ is **large** and $f$ is **small**.

- **D. True.** Large $d$: a small fall in $r$ triggers a big rise in investment (**flat IS**). Small $f$: money demand barely responds to $r$, so extra money must push $r$ down a lot (**steep LM**).
- **C. False.** A small $d$ means investment barely responds to the lower $r$, so output barely moves.
- **B. False.** Both ingredients are the weak ones: small $d$ and large $f$ (the liquidity-trap direction).
- **A. False.** Large $d$ is good, but large $f$ lets money sit in "liquid" balances as $r$ falls, which **dampens** the interest-rate fall. The multiplier above shrinks as $f$ grows.

> [!tip] 🗣️ In plain English
> Monetary policy **works best** when **investment reacts a lot to interest rates** (large d) and **money demand reacts very little** (small f), so extra money **pushes rates down hard** and **firms respond**.

---

## Q24 — IS-LM with interest-inelastic money demand

> [!warning] AI-written answer. Not official.

**Question.** Consider the IS-LM model, yet assume the demand for money is independent of the interest rate. If government spending rises by $\Delta G$, in the IS-LM analysis, then equilibrium income rises by:

- A. $\Delta G/(1 - MPC)$.
- B. zero
- C. $\Delta G$.
- D. more than zero but less than $\Delta G/(1 - MPC)$.

> [!success] Answer: B (AI-solved)

If money demand is $L(Y)$ only, the LM curve is **vertical**: $M/P = kY$ fixes $Y = (M/P)/k$ whatever the interest rate. A fiscal expansion shifts IS right, but equilibrium $Y$ cannot move. The interest rate rises by enough to **crowd out** investment one for one ([[Lec_08-Aggregate Demand II & Applying the IS-LM Model]]).

- **B. True.** Crowding out is **complete**.
- **D. False.** That is the ordinary case, when LM is upward sloping and crowding out is partial.
- **C. False.** $\Delta Y = \Delta G$ would be a multiplier of 1, which no standard case here gives.
- **A. False.** That is the **Keynesian-cross** multiplier, which holds only if $r$ stays fixed (horizontal LM).

> [!tip] 🗣️ In plain English
> If **money demand ignores interest rates**, then **income is pinned down by the money supply**, so extra government spending only pushes **interest rates up** and leaves income unchanged.

---

## Q25 — AD falls: short-run and long-run adjustment

> [!warning] AI-written answer. Not official.
> The diagram was missing from the PDF; read from the docx copy.

**Question.** In this graph, initially the economy is at point E. Now assume that the aggregate demand curve shifts so that it is represented by AD2. The economy moves first to point ______ and then, in the long run, to point ______.

- A. A; D
- B. A; E
- C. A; B
- D. D; A

*Graph (from the docx): LRAS vertical at $\bar Y$, SRAS horizontal at $P_0$, $AD_0$ through E (the initial point), $AD_1$ above ($AD_1$ meets SRAS at C and LRAS at B), $AD_2$ below ($AD_2$ meets SRAS at A and LRAS at D).*

> [!success] Answer: A, i.e. points A then D (AI-solved)

Short run: the price level is stuck at $P_0$, so a fall in AD moves the economy **along SRAS** to the intersection of $AD_2$ and SRAS, which is **A** (lower output, same price). Long run: with output below $\bar Y$, wages and prices **fall**, SRAS shifts down, and the economy slides along $AD_2$ to the intersection with LRAS, **D** (output back at $\bar Y$, **lower prices**) ([[Lec_06-AS-AD Model & Economic Fluctuations]]).

![[PP08_q25_ad_fall_adjustment.png|620]]

*Theory diagram, shapes illustrative. Short run: E to A along SRAS. Long run: A to D along AD2 as prices fall.*

- **A. True.**
- **D. False.** Reversed order, and D is the long-run point, not the short-run one.
- **C. False.** A is right for the short run, but B is where $AD_1$ meets LRAS (above E), the long-run point after a **rise** in AD. For a fall in AD the long-run point is D.
- **B. False.** Returning to E would need AD to come back to $AD_0$. Without policy action the economy ends at D (the lower price level), not E.

> [!tip] 🗣️ In plain English
> A **fall in demand** first **cuts output** because prices are slow to move. In time **prices fall**, output **recovers**, and the economy ends up with **lower prices** but the **same output** as before.

---

## Answer summary

| Q | Topic | Answer |
|---|-------|--------|
| 1 | MPK < δ: lower saving raises c | **C** (AI) |
| 2 | AK model: s sets growth | **D** (AI) |
| 3 | MPK−δ=6% > n+g=4%: raise saving | **B** (AI) |
| 4 | AB/OA = depreciation rate | **A** (AI) |
| 5 | Quantity theory long run | **A** (AI) |
| 6 | Interest rate clears goods market | **B** (AI) |
| 7 | S > I: interest rate falls | **C** (AI) |
| 8 | Higher G: interest rate rises | **D** (AI) |
| 9 | i = 5%, P = 1 | **A** (AI) |
| 10 | Fisher effect one for one | **D** (AI) |
| 11 | Higher Y: higher M/P, lower P | **B** (AI) |
| 12 | Money up: output SR, prices LR | **C** (AI) |
| 13 | Keynesian cross: G = 260 | **B** (AI) |
| 14 | LM slope | **D** (AI) |
| 15 | G multiplier > tax multiplier | **C** (AI) |
| 16 | Fixed rate: Y unchanged | **A** (AI) |
| 17 | Phillips: short run only | **C** (AI) |
| 18 | Hysteresis raises natural rate | **A** (AI) |
| 19 | SRAS: Y < natural, P < P^e | **D** (AI) |
| 20 | P falls: ε falls, NX rises | **B** (AI) |
| 21 | G cut, floating: point D | **C** (AI) |
| 22 | IS* slopes down | **A** (AI) |
| 23 | Monetary potency: large d, small f | **D** (AI) |
| 24 | Vertical LM: ΔY = 0 | **B** (AI) |
| 25 | AD falls: A then D | **A** (AI) |

---

## Related Notes

[[Macro-Economics II]] · [[Lec_03-Classical Theory & National Income]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]
