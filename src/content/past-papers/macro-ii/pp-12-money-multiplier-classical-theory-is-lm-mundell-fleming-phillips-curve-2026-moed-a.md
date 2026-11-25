---
title: "Macro II Moed A 2026 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Moed A, 16 February 2026"
semester: 1
year: 2
course: "Macro-Economics II"
instructor: Alon Cohen
tags:
  - macro-economics-ii
  - past-paper
  - worked-solution
  - multiple-choice
  - money-multiplier
  - classical-theory
  - is-lm
  - mundell-fleming
  - as-ad
  - phillips-curve
aliases:
  - Macro II Moed A 2026
  - PP12 Macro II
  - Tofes 0 Moed A 2026
subject: macro-ii
in_scope: true
---

# Macro II Moed A 2026 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed A, 16 February 2026** — Intermediate Macroeconomics **6827**, Dr. Alon Cohen. **20 multiple-choice questions plus one bonus question**, open notes, 2 hours.
> Builds on: [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!success] Answers are official, the working is not
> This is a **Tofes 0** paper. On Moodle it sits under "Past Exams (Tofes 0 = 1st answer is correct)", so the source prints the **official answer first** for every question. All 21 answers below (20 plus the bonus) are official. The **explanations, option-by-option reasoning and calculations are AI-written**, not from the instructor. Each question repeats this warning.

> [!warning] Two official answers to double-check (Q3, Q13)
> I derived every question independently. Nineteen agree cleanly with the official key. Two do not, and I have kept the official answer on both and flagged them at the question:
> - **Q3** (money multiplier): the official **A, \$15.25M**, ignores the note that the currency ratio stays constant. Using the lecture's multiplier formula I get **\$3.48M (option D)**.
> - **Q13** (long-run fiscal contraction): the official **B, "only deflationary"**, is the only option with no output change, but the figure also shows the interest rate falling from C to B, so "only" is loose.

> [!info] The options are shuffled here
> The source (Tofes 0) prints the correct answer first. The options are shuffled on this page so the position gives nothing away. The real exam reshuffled them per student as well.

> [!info] New topics for this course
> Q1 to Q3 are about **bank balance sheets and the money multiplier** ([[Lec_04-The Monetary System]]), which earlier papers in this folder barely touch. Q20 and Q13 and the bonus use diagrams taken from the `.docx` copy of the paper.

---

## What this paper tests

> [!info] The paper in one paragraph
> The shortest paper so far (20 questions). It opens with the **banking system**, then classical money and interest rates, IS-LM numerics and the open economy, and ends with the Phillips curve.
> 1. **Banking and money creation** (Q1, Q2, Q3): bank capital from a balance sheet, what raises the money multiplier, the actual money-supply change from new currency.
> 2. **Classical theory and money** (Q4, Q5, Q6, Q10, Q11, Q12): consumption preference shifts, cost of holding money, solving for $i$ and $P$, firm hiring, long-run crowding out.
> 3. **AS-AD and IS-LM** (Q7, Q8, Q9, Q13, Q14, Q18): money-demand shock under two central banks, the IS-LM slopes, how much $M$ to change, a long-run fiscal contraction.
> 4. **Mundell-Fleming** (Q15, Q16, Q20): fiscal policy under floating and fixed rates, a price-level change.
> 5. **Phillips curve and sacrifice ratio** (Q17, Q19): inflation arithmetic and credibility.
> 6. **Bonus** (Q21): Keynesian cross inventory adjustment.

---

## Q1 — Bank capital from a balance sheet

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** A bank balance sheet consists of only the following items: Deposits \$1,000, Reserves \$100, Securities \$400, Debt \$500, Loans \$2,000. What is the value of bank capital?

- A. +\$500
- B. +\$1,000
- C. −\$1,000
- D. +\$1,500

> [!success] Answer: B

**Assets** are what the bank owns: reserves, securities and loans, $100 + 400 + 2000 = 2500$. **Liabilities** are what it owes: deposits **and** the bank's own debt, $1000 + 500 = 1500$. Capital is the difference:

$$\text{Capital} = 2500 - 1500 = \$1{,}000$$

See [[Bank Capital]] and [[Lec_04-The Monetary System]].

- **A (+\$500).** Equals $2000 - 1500$: counts only loans as assets and forgets reserves and securities.
- **C (−\$1,000).** Sign error: liabilities minus assets.
- **D (+\$1,500).** Treats debt as if it were not a liability ($2500 - 1000$).

> [!tip] 🗣️ In plain English
> What the bank **owns** is 2,500 and what it **owes** (deposits plus its own borrowing) is 1,500. The **1,000 left over** belongs to the owners.

---

## Q2 — Raising the money multiplier

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** To increase the money multiplier, the Fed can:

- A. raise the interest rate paid on reserves.
- B. conduct open-market sales.
- C. conduct open-market purchases.
- D. lower the interest rate paid on reserves.

> [!success] Answer: D

The multiplier is $m = \frac{1 + cr}{cr + rr}$, which **rises when $rr$ falls**. A lower interest rate on reserves makes holding reserves less attractive, so banks hold **fewer** reserves and lend more, lowering $rr$. See [[Money Multiplier]].

- **B and C. False.** Open-market operations change the **monetary base** $B$, not the multiplier $m$. They move $M$ through $B$.
- **A. False.** A higher rate on reserves encourages banks to hold more, raising $rr$ and **lowering** $m$.

> [!tip] 🗣️ In plain English
> If the Fed **pays banks less for parking cash**, they **lend more of it out**, and each dollar of base ends up creating more money.

---

## Q3 — Money supply increase from new currency

> [!warning] Official answer: flagged, I disagree. Working below is AI-written, not official.

**Question.** The Federal Reserve wants to increase the money supply by printing and distributing 1 million dollars worth of currency. It is known that:
I. The public's cash increases by \$250,000.
II. The public deposits the remaining \$750,000 in banks that hold 5 percent of their deposits as reserves.

What will be the actual increase in money supply? Note: currency ratio and reserve ratio are kept constant throughout the Fed's actions.

- A. \$15.25M
- B. \$4.16M
- C. \$1M.
- D. \$3.48M

> [!success] Official answer: A (\$15.25M)

**How the official answer arises.** The \$750,000 deposit is lent out and redeposited again and again with only 5% held back, so deposits grow to $750{,}000 / 0.05 = \$15\text{M}$. Add the \$250,000 of cash the public kept: $15 + 0.25 = \$15.25\text{M}$.

> [!warning] Why I would have answered D (\$3.48M)
> The note says the **currency ratio stays constant**. The public keeps \$250,000 of cash against \$750,000 of deposits, so $cr = C/D = 1/3$, and the lecture's multiplier gives
> $$m = \frac{1 + cr}{cr + rr} = \frac{1 + 1/3}{1/3 + 0.05} = \frac{1.3333}{0.3833} \approx 3.48$$
> With the monetary base up by \$1M, $\Delta M = m \cdot \Delta B \approx \$3.48\text{M}$, which is **option D**. The official calculation lets lent-out money be redeposited in full, so people stop holding any further cash, which contradicts "currency ratio kept constant". I have kept the official key as the answer but flag the conflict. Treat it as the **exam's expected answer**, and check the lecturer's intent if it matters.

- **D (\$3.48M).** The figure above from the multiplier formula.
- **B (\$4.16M).** Not produced by either method.
- **C (\$1M).** That is just the change in the **base**, before any multiplier.

See [[Money Multiplier]], [[Monetary Base]] and [[Fractional Reserve Banking]].

> [!tip] 🗣️ In plain English
> The official route lets **all the deposited money keep being re-lent** with only 5% held back, giving about **\$15M**. If instead people keep holding a fixed share as cash each round, the multiplier is smaller, about **\$3.5M**.

---

## Q4 — A shift towards consuming (long run)

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume the long-run macro-economy. Due to some preferences change, households' propensity to consume increase, and propensity to save decrease. Subsequently, in the money market, prices

- A. fall, since real interest falls
- B. do not change
- C. rise, since real interest rises
- D. rise, since real interest falls

> [!success] Answer: C

Households save less, so $S(r)$ shifts **left** and the real interest rate $r$ **rises** to clear the loanable-funds market. The nominal rate $i = r + \pi^e$ rises too, so **real money demand $L(i, Y)$ falls**. With $M$ fixed, $M/P$ must fall to match, so **$P$ rises**. See [[Loanable Funds Market]] and [[Money Demand]].

- **D. False.** Real interest rises, it does not fall.
- **A. False.** Wrong direction on both.
- **B. False.** The nominal-rate channel changes money demand, so the price level adjusts.

> [!tip] 🗣️ In plain English
> Less saving pushes the **real interest rate up**. Higher rates make people **hold less cash**, so the same money supply chases less demand and **prices rise**.

---

## Q5 — The cost of holding money

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** If the real return on government bonds is 3 percent and the expected rate of inflation is 3 percent, then the cost of holding money is ______ percent.

- A. 6
- B. 3
- C. 0
- D. 9

> [!success] Answer: A

Holding money forgoes the **nominal** interest rate: $i = r + \pi^e = 3 + 3 = 6$ percent. See [[Fisher Effect]] and [[Nominal Interest Rate]].

- **C (0).** Would be the case only if $i = 0$.
- **D (9).** Adds an extra 3, double counting inflation.
- **B (3).** Only the real return, or only inflation, not both.

> [!tip] 🗣️ In plain English
> Cash earns nothing, so what you give up is the **bond's full nominal return**: 3% real plus 3% inflation compensation is **6%**.

---

## Q6 — Solving for $i$ and $P$

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume the long-run classic theory. Demand for real money balance is $M/P = 0.6Y - 10{,}000i$, where $Y$ is national income and $i$ is the nominal interest rate. The real interest rate $r$ is fixed at 0.03 by the investment and saving functions. The expected inflation rate equals the long-run inflation rate. If normal GDP is 1,000, $M$ is currently 100, and the growth rate of $M$ is 0.01, what must $i$ and $P$ be?

- A. $i = 0.02$, $P = 1$
- B. $i = 0.04$, $P = 1/2$
- C. $i = 0.04$, $P = 1$
- D. $i = 0.02$, $P = 1/2$

> [!success] Answer: B

Long-run inflation equals money growth minus output growth, $0.01 - 0 = 0.01$. Fisher: $i = r + \pi = 0.03 + 0.01 = 0.04$. Money demand:

$$\frac{M}{P} = 0.6(1000) - 10000(0.04) = 600 - 400 = 200$$

so $P = 100 / 200 = 1/2$.

- **A and D ($i = 0.02$).** Subtract inflation from the real rate instead of adding it. Fisher is $i = r + \pi$.
- **C ($P = 1$).** Right $i$, but $P = 1$ would need real balances of 100, while money demand at $i = 0.04$ is 200.

> [!tip] 🗣️ In plain English
> Inflation is **1%**, real rate 3%, so $i$ is **4%**. At 4%, people want 200 of real money, and the 100 of money supply must therefore be worth that: **prices are 0.5**.

---

## Q7 — Two central banks, same shock

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Consider the AD-AS model with overall prices fixed in the short run, where in the initial equilibrium, output level is normal. Suppose that subsequent to financial-technology innovation, the demand for money falls. Central Bank A cares only about keeping the price level stable, at all times, whereas Central Bank B cares only about keeping output at its natural level, at all times. What should each Central Bank do in response?

- A. both Central Bank A and Central Bank B should keep the quantity of money stable.
- B. Central Bank A should decrease the quantity of money whereas Central Bank B should keep it stable.
- C. both Central Bank A and Central Bank B should decrease the quantity of money.
- D. Central Bank A should keep the quantity of money stable whereas Central Bank B should decrease it.

> [!success] Answer: C

Lower money demand shifts $LM$ right, so $Y$ rises above $\bar Y$. **Bank B** (output) must cut $M$ to shift $LM$ back. **Bank A** (prices) also has to: if output stays above $\bar Y$, firms eventually raise prices, so to keep **prices stable at all times** it must keep output at normal too. Both accommodate the shock by **reducing M**. See [[AD-AS Model]], [[Monetary Policy]] and [[Lec_06-AS-AD Model & Economic Fluctuations]].

- **B. False.** Doing nothing leaves output booming, which lets prices drift up.
- **D. False.** Same: A would let $Y$ stay high.
- **A. False.** Both would then tolerate the boom.

> [!tip] 🗣️ In plain English
> Less need for cash acts like **extra money in the economy**. Whether you care about prices or output, the cure is the same: **drain some money**.

---

## Q8 — How can IS slope down and LM slope up?

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** The LM curve suggests that if income rises interest rate must rise, while the IS curve suggests that when interest rate rises, income must fall. How is that possible?

- A. Higher income increases demand for money, which induces purchases of bonds and inflates the interest rate; in turn, this depresses investments in the market for goods and services
- B. It is not possible, and this is why in equilibrium, only one of the curves (either LM or IS) could shift.
- C. Higher income decreases demand for money, which induces sales of bonds and inflates the interest rate; in turn, this raises investments in the market for goods and services
- D. The interaction between income level and interest rate is opposite in the money market and in the market for goods and services

> [!success] Answer: D

The two curves describe **two different markets**. In the money market, higher $Y$ raises money demand, so $r$ must rise to clear it (upward $LM$). In the goods market, a higher $r$ lowers investment, so $Y$ must fall (downward $IS$). There is no contradiction: each curve is its own equilibrium condition, and the economy sits where both hold. See [[LM Curve]] and [[IS Curve]].

- **C. False.** Higher income **raises** money demand, and a higher $r$ **cuts** investment, not raises it.
- **A. False.** The first half is right but "purchases of bonds" is wrong: higher money demand means people **sell** bonds, pushing bond prices down and $r$ up.
- **B. False.** Both curves can shift (fiscal shifts $IS$, monetary shifts $LM$).

> [!tip] 🗣️ In plain English
> The curves answer **different questions**: LM asks "what rate balances money at this income?", IS asks "what income balances spending at this rate?". The **crossing point** satisfies both.

---

## Q9 — How much must the money supply change?

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** If the IS curve is given by $Y = 1{,}700 - 100r$, where $Y$ is income level and $r$ is the interest rate in percentage. The money demand function is given by $L = Y - 100r$, the money supply is 1,000, and the price level is 2. If the central bank wants to lower $r$ by 2 percentage points, what should it do?

- A. Lower M by 200
- B. Raise M by 800
- C. Lower M by 800
- D. Raise M by 200

> [!success] Answer: B

**Now.** Real money is $M/P = 1000/2 = 500$. LM: $Y - 100r = 500$, so $Y = 500 + 100r$. With IS: $500 + 100r = 1700 - 100r$, giving $r = 6$, $Y = 1100$.

**Target.** $r = 4$. IS gives $Y = 1700 - 400 = 1300$. Money demand must equal real supply: $L = 1300 - 100(4) = 900 = M/P$, so $M = 900 \times 2 = 1800$.

$$\Delta M = 1800 - 1000 = +800$$

- **D (+200).** Gives $M = 1200$, so $M/P = 600$, and the intersection moves to $r = 5.5$: only a 0.5-point fall, not 2.
- **A and C.** Lowering $M$ raises $r$, the wrong direction.

> [!tip] 🗣️ In plain English
> To push the rate **down 2 points**, the central bank has to **add money**. Working it through the IS and LM equations, that means **800 more**.

---

## Q10 — What a profit-maximising firm hires

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** A competitive, profit-maximizing firm hires labor until the:

- A. price of output multiplied by the marginal product of labor equals the wage.
- B. marginal product of labor equals the wage.
- C. wage equals the rental price of capital.
- D. real wage equals the real rental price of capital.

> [!success] Answer: A

Hiring another worker costs the nominal wage $W$ and brings in $P \times MPL$. The firm hires until $P \cdot MPL = W$, equivalently $MPL = W/P$. See [[Marginal Product]] and [[Lec_03-Classical Theory & National Income]].

- **B. False.** Compares a physical quantity with a **nominal** wage: it needs $P$ (or a real wage).
- **C and D. False.** Those are conditions about the **mix** of capital and labour, not the stopping rule for hiring labour.

> [!tip] 🗣️ In plain English
> A firm keeps hiring while **what a worker brings in** (price times extra output) is at least **what the worker costs**.

---

## Q11 — A tax rise, long run

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** The government raises lump-sum taxes on income by \$100 billion. If the marginal propensity to consume is 0.6, in the long run investment:

- A. falls by \$60 billion.
- B. rises by \$100 billion.
- C. rises by \$60 billion.
- D. falls by \$100 billion.

> [!success] Answer: C

Disposable income falls by 100, so consumption falls by $0.6 \times 100 = 60$. In the long run $Y$ is fixed and $G$ is unchanged, so $Y = C + I + G$ means **investment rises by 60**. Equivalently, national saving rises by 60 (private saving falls by 40, public saving rises by 100) so $r$ falls and $I$ rises. See [[National Saving]] and [[Marginal Propensity to Consume]].

- **B. False.** Would need $MPC = 0$ (no fall in consumption).
- **A and D. False.** Wrong sign: a tax **rise** frees resources for investment in the long run.

> [!tip] 🗣️ In plain English
> Higher taxes make people **spend 60 less**. Since total output is fixed, that frees **60 for investment**.

---

## Q12 — Cutting both spending and taxes

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Suppose a government decides to reduce spending and (lump-sum) income taxes by the same amount. In the long-run, interest rate will

- A. either increase or decrease
- B. increase
- C. not change
- D. decrease

> [!success] Answer: D

Let both fall by $x$. Public saving $T - G$ is unchanged, but disposable income rises by $x$ so consumption rises by $MPC \cdot x$ and **private saving rises by $(1 - MPC)x > 0$**. National saving rises, the loanable-funds supply shifts right, and the **real interest rate falls**. See [[Loanable Funds Market]].

- **B. False.** Opposite direction.
- **C. False.** Would hold only if $MPC = 1$ (no change in saving).
- **A. False.** The sign is determined.

> [!tip] 🗣️ In plain English
> Public saving stays the same, but households keep more and **save a bit of it**. More saving means a **lower interest rate**.

---

## Q13 — Fiscal contraction at point C (figure)

> [!warning] Official answer: flagged. Working below is AI-written, not official.

**Question.** Consider a closed economy:

![[PP12_q13_fiscal_contraction.png|480]]

Suppose that the economy is at equilibrium point C. Fiscal contraction, in the long run, will

- A. decrease both output and interest rate
- B. be only deflationary
- C. decrease output, interest rate and prices
- D. not change anything in the economy

> [!success] Answer: B (official)

C is where $IS_2$ and $LM_1$ meet on the $LRAS$ line, so output is at $\bar Y$. Fiscal contraction shifts $IS_2$ left to $IS_1$. In the short run the economy moves to **A** (output below $\bar Y$). Then prices fall, $M/P$ rises, and **$LM$ shifts right** to $LM_2$, ending at **B**: output back at $\bar Y$, **prices lower**. See [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]].

> [!warning] A loose option
> On the figure, **B is lower than C on the interest-rate axis**, so the long-run interest rate also falls (as the classical theory says: lower $G$ raises national saving). "Only deflationary" is therefore not fully accurate. It is still the only option in which **output ends unchanged**, which is why I treat B as the intended answer. Flagging in case the lecturer meant a different figure.

- **A. False.** Output does not fall in the long run: it returns to $\bar Y$.
- **C. False.** Prices and the rate fall, but **not output**.
- **D. False.** Prices (and the rate) change.

> [!tip] 🗣️ In plain English
> Cutting government spending **doesn't change output for good**. It just ends up with **lower prices** (and a slightly lower interest rate).

---

## Q14 — Stabilising after payment apps

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume the AD-AS model. If you advise the government and the central bank to use a stabilizing policy following the introduction of new payments apps, making transactions much more accessible, what would you suggest, assuming prices are fixed in the short run?

- A. Expansionary monetary policy
- B. Do nothing, since prices are fixed
- C. Contractionary monetary policy
- D. Open the economy for international trade

> [!success] Answer: C

Easier transactions **lower money demand**, so $LM$ shifts right and output rises above normal (prices are fixed). Offset it by **reducing $M$**. See [[Money Demand]] and [[Stabilization Policy]].

- **A. False.** Would add to the boom.
- **B. False.** Fixed prices mean the shock hits output, so there is a case to act.
- **D. False.** Not a stabilisation tool for a money-demand shock.

> [!tip] 🗣️ In plain English
> People need **less cash**, which overheats the economy. **Take money out**.

---

## Q15 — Government spending under a floating rate

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In a small open economy with a floating exchange rate, a rise in government spending will:

- A. crowd out net-export, since the temporary beneficial interest rate gaps will trigger capital inflow, causing an appreciation of the exchange rate.
- B. crowd out net-export, since the temporary beneficial interest rate gaps will trigger capital outflow, causing an appreciation of the exchange rate.
- C. increase, in equilibrium, income level, but in the long-run income level will drop again.
- D. crowd out investments, since the interest rate would rise in equilibrium.

> [!success] Answer: A

Higher $G$ shifts $IS^*$ right and would raise $r$ above $r^*$. That gap attracts a **capital inflow**, the currency **appreciates**, and net exports **fall** until $r = r^*$ again. $Y$ does not change (vertical $LM^*$). See [[Mundell-Fleming Model]] and [[Net Exports]].

- **B. False.** An interest-rate advantage brings capital **in**, not out.
- **D. False.** $r = r^*$ in equilibrium, so investment is not crowded out.
- **C. False.** Output does not rise even in the short run.

> [!tip] 🗣️ In plain English
> Extra spending would push rates up, **foreign money rushes in**, the currency strengthens, and **exports suffer** by the same amount.

---

## Q16 — Cutting government purchases under a fixed rate

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In a small open economy with a fixed exchange rate, if the government decreases government purchases, then in the new short-run equilibrium:

- A. neither income nor the exchange rate fall, as the money supply must expand.
- B. exchange rate is depreciated but income does not fall.
- C. both income and the exchange rate fall.
- D. income falls but the exchange rate does not change.

> [!success] Answer: D

$IS^*$ shifts left and the currency would **depreciate**. To defend the peg the central bank **buys domestic currency**, so $M$ **contracts** and $LM^*$ shifts left too. $Y$ **falls**, $e$ is unchanged. See [[Fixed Exchange Rate]].

- **B. False.** That is the floating-rate outcome with the roles reversed (and floating leaves $Y$ unchanged).
- **C. False.** The peg stops $e$ from moving.
- **A. False.** $M$ must **contract**, not expand.

> [!tip] 🗣️ In plain English
> To stop the currency slipping, the central bank **buys it up**, which **drains money** and makes output fall further.

---

## Q17 — Phillips curve over three periods

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume that an economy is governed by the following short-run Phillips curve $\pi = \pi^e - 0.5(u - 0.06)$. Further assume adaptive expectations, $\pi^e = \pi_{-1}$. Suppose that, in period zero, $\pi = 0.03$ and $\pi^e = 0.03$, that is, that the economy is experiencing steady inflation at a 3-percent rate. Now assume that the government decides to impose whatever demand is necessary to cut unemployment to 0.04. Suppose the government follows this policy for periods 1 through 3. What will be the inflation rate in period 3?

- A. 0.06
- B. 0.04
- C. 0.05
- D. 0.03

> [!success] Answer: A

Each period $\pi_t = \pi_{t-1} - 0.5(0.04 - 0.06) = \pi_{t-1} + 0.01$.

| Period | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $\pi$ | 0.03 | 0.04 | 0.05 | **0.06** |

- **C (0.05).** That is period 2.
- **D (0.03).** Ignores the unemployment gap.
- **B (0.04).** That is period 1.

See [[Phillips Curve]] and [[Adaptive Expectations]].

> [!tip] 🗣️ In plain English
> Holding unemployment **2 points under normal** adds **1 point of inflation each period**. After three periods: **6%**.

---

## Q18 — An unexpected monetary expansion

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the AD-AS model, with some flexible-prices firms, starting from the normal level of output, an unexpected monetary expansion will cause output and the price level to ______ in the short run; and in the long run the expected price level will ______, causing the level of output to return to the natural level.

- A. decrease; increase
- B. increase; decrease
- C. increase; increase
- D. decrease; decrease

> [!success] Answer: C

Expansion shifts $AD$ right. With some flexible-price firms $SRAS$ slopes up, so **both output and prices rise**. Prices exceed expectations, so the expected price level **rises**, $SRAS$ shifts up, and output returns to $\bar Y$ at a higher price level. See [[Short-Run Aggregate Supply]] and [[Sticky-Price Model]].

- **A and D. False.** An expansion cannot lower output.
- **B. False.** Output rises in the short run, but the expected price level goes **up** (not down) in the long run.

> [!tip] 🗣️ In plain English
> A surprise money boost lifts **output and prices** for a while. People then **expect higher prices**, and the economy ends up at **normal output with higher prices**.

---

## Q19 — The sacrifice ratio

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** The sacrifice ratio will _____ if the public has rational expectations and credible public announcements are made in advance of policy changes. This is because inflation will be affected mostly by _________ rather than __________.

- A. rise; unemployment tradeoff; expectations
- B. rise; expectations; unemployment tradeoff
- C. fall; unemployment tradeoff; expectations
- D. fall; expectations; unemployment tradeoff

> [!success] Answer: D

If a credible announcement lets people **lower their inflation expectations immediately**, inflation falls through **expectations**, with little need to push unemployment up. The cost of disinflation (the sacrifice ratio) **falls**. See [[Sacrifice Ratio]] and [[Rational Expectations]].

- **C. False.** The ratio does fall, but the channel is reversed.
- **A and B. False.** Credibility reduces the sacrifice ratio.

> [!tip] 🗣️ In plain English
> If people **believe** the central bank, inflation drops **because expectations drop**, and you don't need a **painful recession**.

---

## Q20 — A lower price level, floating rate (figure)

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** A small open economy with a floating exchange rate is initially in equilibrium at point A. Holding all else constant, if the domestic price level decreases, then the _____ curve will shift to _____.

![[PP12_q20_floating_price_level.png|480]]

- A. $IS_1^*$, $IS_2^*$
- B. $LM_1^*$, $LM_2^*$
- C. $IS_1^*$, $IS_3^*$
- D. $LM_1^*$, $LM_3^*$

> [!success] Answer: B

Lower $P$ raises $M/P$, so the vertical $LM^*$ shifts **right**, from $LM_1^*$ to $LM_2^*$. See [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]].

- **D. False.** $LM_3^*$ is to the **left**: that is the move for a **higher** price level.
- **A and C. False.** Price changes shift $LM^*$ via $M/P$, not $IS^*$.

> [!tip] 🗣️ In plain English
> Lower prices make the money supply **worth more**, so the vertical LM line moves **right**.

---

## Q21 (bonus) — Output above equilibrium in the Keynesian cross (figure)

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Bonus Question: Consider the following Keynesian Cross graph:

![[PP12_q21_keynesian_cross.png|480]]

Suppose that the output level is $Y_3$. The market for goods and services will converge to equilibrium due to

- A. a fall in the price level, which will increase planned expenditure
- B. unexpected increase of inventory, which will induce firm to slow down production rate
- C. unexpected decrease of inventory, which will induce firm to speed up production rate
- D. a rise in the price level, which will decrease planned expenditure

> [!success] Answer: B

At $Y_3 > Y_2$ the actual-expenditure line ($PE_4$) is **above** planned expenditure ($PE_3$). Firms produced more than was bought, so **inventories pile up unexpectedly** and firms **cut production** until output falls to $Y_2$. See [[Keynesian Cross]] and [[Inventory Adjustment]].

- **C. False.** That is the case left of $Y_2$.
- **A and D. False.** The cross is a fixed-price model: adjustment runs through inventories and output, not through the price level.

> [!tip] 🗣️ In plain English
> Firms **made more than they sold**, stock builds up, and they **produce less** until output matches spending.

---

## Recap table

| Q | Topic | Answer | One line |
|---|-------|--------|----------|
| 1 | Bank capital | B | $2500 - 1500 = 1000$ |
| 2 | Raise the multiplier | D | Lower interest on reserves |
| 3 | New currency | A (flagged) | Official \$15.25M; formula gives \$3.48M |
| 4 | Higher propensity to consume | C | $r$ up, $i$ up, $P$ up |
| 5 | Cost of holding money | A | $i = 3 + 3 = 6$ |
| 6 | $i$ and $P$ | B | $i = 0.04$, $P = 1/2$ |
| 7 | Two central banks | C | Both cut $M$ |
| 8 | IS and LM slopes | D | Two different markets |
| 9 | Move $r$ by 2 points | B | Raise $M$ by 800 |
| 10 | Labour demand | A | $P \cdot MPL = W$ |
| 11 | Tax rise, long run | C | $I$ rises by 60 |
| 12 | Cut $G$ and $T$ | D | $r$ falls |
| 13 | Long-run fiscal contraction | B (flagged) | Only prices fall |
| 14 | Payments apps | C | Contractionary monetary policy |
| 15 | $G$ up, floating | A | $NX$ crowded out |
| 16 | $G$ down, fixed | D | $Y$ falls, $e$ unchanged |
| 17 | Phillips, period 3 | A | $\pi = 0.06$ |
| 18 | Surprise money expansion | C | Up, up; expectations rise |
| 19 | Sacrifice ratio | D | Falls via expectations |
| 20 | Lower $P$, floating | B | $LM_1^*$ to $LM_2^*$ |
| 21 | Bonus: $Y_3$ | B | Inventories pile up |

## Related notes

[[Macro-Economics II]] · [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]
