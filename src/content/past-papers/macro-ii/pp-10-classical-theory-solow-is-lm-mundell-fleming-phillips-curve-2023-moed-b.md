---
title: "Macro II Moed B 2023 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Moed B, 10 August 2023"
semester: 1
year: 2
course: "Macro-Economics II"
instructor: Alon Cohen
tags:
  - macro-economics-ii
  - past-paper
  - worked-solution
  - multiple-choice
  - classical-theory
  - solow
  - is-lm
  - mundell-fleming
  - as-ad
  - phillips-curve
aliases:
  - Macro II Moed B 2023
  - PP10 Macro II
  - Tofes 0 Moed B 2023
subject: macro-ii
in_scope: true
---

# Macro II Moed B 2023 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed B, 10 August 2023** — Macroeconomics II (3058), Dr. Alon Cohen. 24 multiple-choice questions, 4% each, open notes, 2.5 hours.
> Builds on: [[Lec_03-Classical Theory & National Income]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!success] Answers are official, the working is not
> This is a **Tofes 0** paper. On Moodle it sits under "Past Exams (Tofes 0 = 1st answer is correct)", so the source prints the **official answer first** for every question. All 24 answers below are official. The **explanations, option-by-option reasoning and calculations are AI-written**, not from the instructor. Each question repeats this warning. Where I checked the official answer against my own derivation, they agreed on every question.

> [!info] The options are shuffled here
> The source (Tofes 0) prints the correct answer first. The options are shuffled on this page so the position gives nothing away. The real exam reshuffled them per student as well.

> [!info] 24 questions, not 25
> The cover page says 25 questions, but the `.docx` has one question deleted with tracked changes (a golden-rule saving-rate question, "depreciation rate is 0.1 and the steady-state capital-output ratio is 2"). I have not reconstructed it, since it is not part of the paper as published. The remaining 24 are numbered in their printed order. The one diagram (Q20) is taken from the same `.docx`.

---

## What this paper tests

> [!info] The paper in one paragraph
> A theory-heavy paper: about a third is the classical long run and growth, then a block of IS-LM and Mundell-Fleming, closing with the Phillips curve and the sticky-price / sacrifice-ratio questions.
> 1. **Classical theory and money** (Q1, Q2, Q3): Euler's theorem, what the goods market and expected inflation each determine, Fisher plus quantity theory.
> 2. **Growth** (Q4, Q5, Q6, Q7): above the golden rule, saving and steady-state income, industrial policy, constant returns to capital (AK).
> 3. **Short-run vs long-run, IS-LM** (Q8 to Q14): why the long run is supply-determined, money-demand shocks, balanced-budget multiplier, LM shifts, the IS formula.
> 4. **Mundell-Fleming** (Q15 to Q20): floating vs fixed, rise in world interest rate, expected depreciation.
> 5. **Phillips curve, AS-AD, price stickiness** (Q21 to Q24): inflation arithmetic, unexpected contraction, which reasons for sticky prices are real, sacrifice ratio.
>
> The recurring trick: in **floating-rate M-F** the $LM^*$ curve is vertical, so output only moves when money or money demand moves. Under a **fixed rate** the central bank gives up $M$ to defend the peg.

---

## Q1 — Euler's theorem

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** According to Euler's theorem, if competitive firms pay each factor its marginal product and the production function has constant returns to scale, the sum of all factor payments will equal total:

- A. output
- B. savings
- C. investments
- D. profits

> [!success] Answer: A

With constant returns to scale, $F(K, L) = MPK \cdot K + MPL \cdot L$. Competitive firms pay $MPL$ to labour and $MPK$ to capital, so total factor payments exactly **exhaust output**. See [[Euler's Theorem]], [[Marginal Product]] and [[Lec_03-Classical Theory & National Income]].

- **D. False.** Economic profit is zero under CRS and competition: every dollar of output is paid out to factors.
- **B. False.** Saving is $Y - C - G$, a use of income, not what factor payments sum to.
- **C. False.** Investment is one use of output, not the total.

> [!tip] 🗣️ In plain English
> If every worker and every machine is paid what it adds, **nothing is left over**. The total of all pay equals **total output**.

---

## Q2 — What the goods market and expected inflation determine

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Equilibrium in the market for goods and services under the classic theory determines the ______ and the expected rate of inflation determines the ______.

- A. price level, nominal interest rate
- B. real interest rate, nominal interest rate
- C. real interest rate, money growth rate
- D. nominal interest rate, real interest rate

> [!success] Answer: B

In the classical model the goods market clears through the **real interest rate**: $S(r) = I(r)$ pins down $r$. The Fisher equation $i = r + \pi^e$ then gives the **nominal rate**, so expected inflation moves $i$ one for one. See [[Loanable Funds Market]], [[Real Interest Rate]] and [[Fisher Effect]].

- **D. False.** Reversed. Goods-market clearing is about real saving and real investment.
- **A. False.** The **price level** is set in the money market (quantity theory), not by goods-market clearing.
- **C. False.** Causation runs the other way: money growth drives inflation expectations, not the reverse.

> [!tip] 🗣️ In plain English
> Saving meeting investment sets the **real** rate. Add the inflation people expect and you get the **nominal** rate.

---

## Q3 — "Fast Money Raises My Interest!"

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** A classical economist wears a T-shirt printed with the slogan "Fast Money Raises My Interest!". This must reflect:

- A. Classical Dichotomy
- B. Okun's Law
- C. The Quantity Theory of Money and Fisher Equation
- D. Contractionary monetary policy

> [!success] Answer: C

Two steps: faster money growth means higher inflation ([[Quantity Theory of Money]]), and higher expected inflation means a higher **nominal interest rate** ([[Fisher Effect]]). The slogan is exactly that chain.

- **D. False.** Contractionary policy would slow money growth, the opposite.
- **B. False.** Okun's Law links output and unemployment.
- **A. False.** The dichotomy says money cannot move **real** variables. The nominal rate is a nominal variable, so it does move; but the slogan describes the Fisher and quantity-theory channel, not the dichotomy itself.

> [!tip] 🗣️ In plain English
> Print money faster, you get **more inflation**, and lenders ask for a **higher nominal interest rate** to compensate.

---

## Q4 — Capital above the golden-rule level

> [!warning] Official answer. Working below is AI-written, not official.
> Solow growth has **no lecture deck** in this course. Solved from the standard Solow model.

**Question.** An economy's steady-state capital per-worker level is above its golden-rule level. Assuming that policymakers strive for the golden-rule levels of capital, what will happen?

- A. Saving rate will decrease, but output per-worker will end up being higher than originally.
- B. Consumption per worker will fall, and then continuously rise, ending up above its original level.
- C. Saving rate will increase, but output per-worker will end up being than originally.
- D. Consumption per worker will rise, and then continuously fall, ending up above its original level.

> [!success] Answer: D

Above the golden rule, $MPK < n + g + \delta$: the economy is **over-saving** (see [[Dynamic Inefficiency]]). To reach the [[Golden Rule]] policymakers must **cut the saving rate**. Consumption is $c = (1-s)y$, so when $s$ falls, $c$ **jumps up at once** (output has not moved yet). Then $k$ and $y$ gradually fall toward the new, lower steady state, so $c$ **drifts down**. It ends **above** the old level because golden-rule steady-state consumption is the maximum.

- **B. False.** Wrong order: the jump is up first, then the fall.
- **A. False.** The saving rate does fall, but $y^*$ ends up **lower**, not higher, since $k^*$ falls.
- **C. False.** Policymakers would lower, not raise, the saving rate (and the option is garbled in the source).

> [!tip] 🗣️ In plain English
> The economy is **saving too much**. Cut saving and people can **consume more straight away**. Over time the smaller capital stock trims that a bit, but they still end up **better off** than before.

---

## Q5 — Two identical economies, different saving rates

> [!warning] Official answer. Working below is AI-written, not official.
> Solow growth has no lecture deck. Solved from the standard Solow model.

**Question.** If two economies are identical (with the same population growth rates and rates of technological progress), but one economy has a lower saving rate, then the steady-state level of income per worker in the economy with the lower saving rate:

- A. will be at the same level as in the steady state of the high-saving economy
- B. will be at a lower level than in the steady state of the high-saving economy.
- C. will be at a higher level than in the steady state of the high-saving economy
- D. will grow at a slower rate than in the high-saving economy

> [!success] Answer: B

The steady state solves $s f(k) = (n + g + \delta)k$. A lower $s$ shifts the investment curve down, so $k^*$ and $y^* = f(k^*)$ are **lower**. See [[Solow Model]] and [[Steady State]].

- **C. False.** Opposite direction.
- **A. False.** $s$ is a determinant of the **level**, so identical $n$, $g$, $\delta$ but different $s$ cannot give the same $y^*$.
- **D. False.** In the steady state **both** economies grow income per worker at the same rate, $g$ (technological progress). The saving rate changes the **level**, not the long-run growth rate.

> [!tip] 🗣️ In plain English
> Saving less means a **smaller capital stock** in the long run and so **lower income per worker**. The growth rate of both economies is the same.

---

## Q6 — Drawback of industrial policy

> [!warning] Official answer. Working below is AI-written, not official.
> This is a short-answer-style theory question not covered by a lecture deck; the reasoning is my reading.

**Question.** One of the drawbacks of industrial policy aiming to allocate investment to fields with positive externalities could be

- A. favoritism, which distorts the efficient allocation
- B. degenerating people's incentive to save
- C. the insufficient investment in human capital
- D. the establishment of inefficient institutions, and damaging the rule of law

> [!success] Answer: A

Industrial policy means the government **picks** which sectors get investment. The direct risk is that the choice is driven by **connections and lobbying** (favoritism) instead of the real size of the externality, which **misallocates** capital.

- **D. Not the answer here.** Institutional damage is a wider political-economy worry, not the specific drawback of *allocating investment to externality fields*. It is the weaker match.
- **C. Not the answer here.** The policy does not by itself reduce human-capital investment.
- **B. Not the answer here.** Nothing in the policy changes households' incentive to save.

> [!tip] 🗣️ In plain English
> If officials choose which industries to back, the money can end up going to the **well-connected**, not to where it does most good.

---

## Q7 — Constant return to capital

> [!warning] Official answer. Working below is AI-written, not official.
> Endogenous growth is outside the lecture notes (Solow and AK have no deck). Solved from the standard model.

**Question.** Economists believe that if human capital is accounted for, then the return for capital is constant. In which case

- A. the economy is described by a two-sector model, where technological progress is endogenous
- B. capital growth in itself can underlie sustainable growth of income, but not of income per worker
- C. the economy is described by the AK model, where technological progress is endogenous
- D. capital growth in itself can underlie sustainable growth of income per worker

> [!success] Answer: D

If $MPK$ does not diminish (broad capital including human capital), then $s \cdot MPK$ stays above $n + g + \delta$ and $k$ keeps growing forever. Income **per worker** grows with no help from technology. This is the logic of the [[AK Model]].

- **B. False.** If capital is not subject to diminishing returns, growth in $k$ lifts income **per worker**, not just total income.
- **A. False.** The description of a two-sector model is not what the premise (constant returns to broad capital) says.
- **C. Plausible label, but not the best answer.** The question asks what the premise *implies*, and D states it directly. In the AK model growth comes from capital accumulation itself, so "technological progress is endogenous" is a loose description, not the implication.

> [!tip] 🗣️ In plain English
> If **more capital never stops paying off**, saving and investing can keep **raising income per person for good**.

---

## Q8 — Why the long run is supply-determined

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Why is the long-run equilibrium output level characterized as supply-determined, whereas the short-run equilibrium is characterized as demand-determined?

- A. Because in the long-run prices are rigid and in the short-run prices are flexible
- B. Because of the money-neutrality in the long run and money non-neutrality in the short run
- C. Because production capacity sets output level in the long-run, whereas in the short-run firms can temporarily deviate from it.
- D. Because in the long-run inputs levels are flexible and in the short-run they are fixed

> [!success] Answer: C

In the long run output is $\bar Y = F(K, L)$: **capacity** decides. In the short run prices are sticky, so firms **meet demand** and can produce above or below capacity for a while. See [[Long-Run Aggregate Supply]] and [[Lec_06-AS-AD Model & Economic Fluctuations]].

- **A. False.** Reversed: prices are **flexible** in the long run and **sticky** in the short run.
- **D. False.** Reversed again: inputs are fixed in the long run (that is what pins $\bar Y$ down) and demand-determined output is just firms using inputs more or less intensively.
- **B. False.** Neutrality is a *consequence* of supply-determined output, not the reason for it.

> [!tip] 🗣️ In plain English
> Long run: the economy can only produce what its **capacity** allows. Short run: firms just **supply whatever is demanded**, even if that is above or below capacity.

---

## Q9 — Stabilising after payment apps

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** If you advise the government to use a stabilizing policy following the introduction of new payments apps, making transactions much more accessible, what would you suggest, assuming prices are fixed in the short run?

- A. Expansionary monetary policy
- B. Contractionary monetary policy
- C. Open the economy for international trade
- D. Do nothing, since prices are fixed

> [!success] Answer: B

Easier payments mean people need **less money** for transactions, so **money demand falls**. With prices fixed, the $LM$ curve shifts **right**, so output rises **above** normal. The central bank should **cut $M$** to shift $LM$ back. See [[Money Demand]], [[LM Curve]] and [[Liquidity Preference]].

- **A. False.** Expansionary policy would push output even further above normal.
- **D. False.** Fixed prices mean the shock hits **output**, so action is needed.
- **C. False.** Trade is not a stabilisation tool for a money-demand shock.

> [!tip] 🗣️ In plain English
> People need **less cash**, which acts like extra money in the economy and **overheats** it. The central bank should **take money out** to cool things down.

---

## Q10 — How was the airport financed?

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume an economy in the short run, where its central bank is committed to a fixed interest rate level. The government has decided to increase its expenditure, building a new airport at total cost of \$20B. Later it was realized that the GDP in that year has increased by \$20B subsequent to that investment. Hence, the government has financed the project

- A. by raising taxes
- B. both by raising taxes and issuing bonds
- C. by issuing bonds
- D. by cutting taxes

> [!success] Answer: A

With a **constant interest rate** there is no crowding out, so the Keynesian-cross multipliers apply. $\Delta G = 20$ with $\Delta T = 20$ gives $\Delta Y = \Delta G$, a multiplier of **1**. That is the [[Balanced-Budget Multiplier]]: $\frac{1}{1-MPC} - \frac{MPC}{1-MPC} = 1$.

- **C. False.** A deficit-financed $\Delta G$ of 20 gives $\Delta Y = \frac{20}{1-MPC} > 20$.
- **B. False.** A mix gives something between 1 and the full multiplier, not exactly 1 unless it is all taxes.
- **D. False.** A tax cut on top of the spending would raise $Y$ by even more than the spending multiplier.

> [!tip] 🗣️ In plain English
> Output rose by **exactly** the amount spent, which only happens when the spending is **paid for by taxes** at the same time.

---

## Q11 — Lower price level and the LM curve

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** A decrease in the price level, holding nominal money supply constant, will shift the LM curve:

- A. downward and to the left.
- B. upward and to the right.
- C. upward and to the left.
- D. downward and to the right.

> [!success] Answer: D

Lower $P$ with $M$ fixed raises **real balances** $M/P$. More real money pushes $r$ **down** for any $Y$, so $LM$ shifts **down and to the right**. See [[LM Curve]].

- **B. False.** Right is correct but **up** is wrong: more real money lowers $r$.
- **A. False.** Down is correct but **left** is wrong: more real money raises the output consistent with each $r$.
- **C. False.** Up and left is the shift from a **higher** price level.

> [!tip] 🗣️ In plain English
> Falling prices make the same cash **worth more**, which is like more money in the economy: the LM curve moves **down/right**.

---

## Q12 — A tax increase in IS-LM

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the IS–LM model when taxation increases, in short-run equilibrium, the interest rate ______ and output ______.

- A. falls; rises
- B. rises; rises
- C. falls; falls
- D. rises; falls

> [!success] Answer: C

Higher taxes cut disposable income and consumption, so **IS shifts left**. Along an unchanged upward-sloping $LM$, both $r$ and $Y$ **fall**. See [[IS Curve]] and [[Fiscal Multiplier]].

- **A and B. False.** $Y$ cannot rise after a contractionary fiscal shock.
- **D. False.** $r$ and $Y$ move together along $LM$, so if $Y$ falls then $r$ falls too.

> [!tip] 🗣️ In plain English
> Higher taxes mean people **spend less**, so output drops, and with less activity the **interest rate falls** too.

---

## Q13 — Price changes and the AD curve

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the transition from the short-run to the long-run, prices can change. Suppose that price level has increased. As a result, the _____ curve shift _____, which describes the ______ relation between prices and output level, along the AD curve

- A. LM; down-right; negative
- B. IS; down-left; negative
- C. IS; up-right; positive
- D. LM; up-left; negative

> [!success] Answer: D

Higher $P$ lowers $M/P$, so **LM shifts up-left**, raising $r$ and cutting investment and $Y$. That is a move **along** the downward-sloping $AD$ curve: a **negative** price-output relation. See [[Aggregate Demand Curve]] and [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]].

- **B. False.** Prices do not shift $IS$.
- **A. False.** Down-right is the shift when prices **fall**.
- **C. False.** Wrong curve, and the AD relation is negative, not positive.

> [!tip] 🗣️ In plain English
> Higher prices shrink people's **real cash**, pushing **interest rates up** and **output down**. That is why the AD curve slopes **down**.

---

## Q14 — Writing the IS curve

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** If consumption is given by $C = 200 + 0.75(Y - T)$ and investment is given by $I = 200 - 25r$, then the formula for the IS curve is:

- A. $Y = 400 + 0.75T - 25r - G$.
- B. $Y = 1{,}600 - 3T - 100r + 4G$
- C. $Y = 400 - 0.75T - 25r + G$
- D. $Y = 1{,}600 + 3T - 100r - 4G$.

> [!success] Answer: B

$$Y = 200 + 0.75(Y - T) + 200 - 25r + G$$

$$0.25Y = 400 - 0.75T - 25r + G$$

Multiply by 4:

$$Y = 1600 - 3T - 100r + 4G$$

- **C.** Forgot to divide by $1 - MPC = 0.25$ (the multiplier of 4).
- **A.** Sign error on $T$ **and** $G$, and no multiplier.
- **D.** Has the multiplier, but the signs on $T$ and $G$ are flipped: taxes should **reduce** $Y$ and spending should **raise** it.

> [!tip] Check shortcut
> $G$ multiplier is $1/(1-MPC) = 4$, tax multiplier is $-MPC/(1-MPC) = -3$. Only B has $+4G$ and $-3T$.

> [!tip] 🗣️ In plain English
> Put consumption, investment and spending together, then **divide by 0.25**. Spending is multiplied by **4**, taxes by **minus 3**.

---

## Q15 — Government spending, small open economy, floating

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In a small open economy with a floating exchange rate, the supply of real money balances is fixed and a rise in government spending:

- A. raises the interest rate, so that income must rise to maintain equilibrium in the money market.
- B. raises the interest rate so that net exports must fall to maintain equilibrium in the goods market.
- C. cannot change the interest rate so that net exports must fall to maintain equilibrium in the goods market.
- D. cannot change the interest rate so income must rise to maintain equilibrium in the money market.

> [!success] Answer: C

With perfect capital mobility $r = r^*$, so $r$ cannot move. $LM^*$ is vertical, so $Y$ is fixed by the money market. $G$ rising shifts $IS^*$ right, the exchange rate **appreciates**, and net exports **fall** one for one with $\Delta G$. See [[Mundell-Fleming Model]], [[Floating Exchange Rate]] and [[Net Exports]].

- **D. False.** Income is pinned by $LM^*$ and does not rise.
- **A and B. False.** $r$ is stuck at $r^*$ in a small open economy.

> [!tip] 🗣️ In plain English
> The extra government spending **pushes up the currency**, which makes exports pricier and imports cheaper, so **net exports fall by the same amount**. Output is unchanged.

---

## Q16 — A rise in the world interest rate (floating)

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the Mundell–Fleming model with a floating exchange rate, a rise in the world interest rate will lead income:

- A. and net exports both to rise.
- B. to fall and net exports to rise.
- C. and net exports both to fall.
- D. to rise and net exports to fall.

> [!success] Answer: A

A higher $r^*$ does two things. It cuts investment, so $IS^*$ shifts **left**. It also lowers money demand at each $Y$, so $LM^*$ shifts **right**. Because $LM^*$ is vertical, $Y$ is set by it: **income rises**. The exchange rate **falls** (depreciates), which raises net exports. See [[Capital Mobility]].

- **B. False.** $Y$ is set by the right-shifting $LM^*$, so it rises.
- **D. False.** A depreciating currency raises $NX$.
- **C. False.** Both signs are wrong.

> [!tip] 🗣️ In plain English
> Higher world interest rates pull money out of the country, so the **currency weakens**, **exports rise**, and output rises.

---

## Q17 — A rise in the world interest rate (fixed)

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the Mundell–Fleming model with a fixed exchange rate, a rise in the world interest rate will lead income:

- A. to fall while net exports are unchanged.
- B. and net exports to both be unchanged.
- C. and net exports both to fall.
- D. to be unchanged and net exports to fall.

> [!success] Answer: A

Same shifts as Q16 ($IS^*$ left, $LM^*$ right), but now the currency would depreciate and the central bank has to **defend the peg**: it sells foreign reserves and buys domestic currency, which **shrinks $M$** and pulls $LM^*$ back. Only the **left shift of $IS^*$** remains, so $Y$ **falls**. $e$ is fixed, so $NX = NX(e)$ is **unchanged**. See [[Fixed Exchange Rate]].

- **C. False.** $NX$ depends on $e$, which does not move.
- **D. False.** $Y$ does fall (lower investment).
- **B. False.** $Y$ falls.

> [!tip] 🗣️ In plain English
> To stop the currency slipping, the central bank **buys its own currency**, which **drains money** from the economy. Output falls and net exports stay put.

---

## Q18 — Expected yen decline

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In order to compensate for an expected future decline in the Japanese yen relative to the U.S. dollar, the interest rate in Japan must be ______ the interest rate in the United States.

- A. fixed relative to
- B. lower than
- C. equal to
- D. higher than

> [!success] Answer: D

Investors only hold yen assets if the return, net of the expected fall in the yen, matches the dollar return. Roughly $i_{Japan} \approx i_{US} + \text{expected depreciation}$, so Japan needs a **higher** rate. Compare the [[Country Risk Premium]] in [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]].

- **B. False.** A lower rate would add to the loss and nobody would hold yen.
- **C. False.** Equality holds only when no depreciation is expected.
- **A. False.** "Fixed relative to" says nothing about compensating for a decline.

> [!tip] 🗣️ In plain English
> If the yen is **expected to lose value**, Japan has to **pay a higher interest rate** to make holding yen worth it.

---

## Q19 — Government spending under a fixed rate

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In a small open economy with a fixed exchange rate, if the government increases government purchases, then in the new short-run equilibrium:

- A. both income and the exchange rate rise.
- B. neither income nor the exchange rate rises, as the money supply contracts.
- C. income rises but the exchange rate does not rise.
- D. the exchange rate rises but income does not rise.

> [!success] Answer: C

$IS^*$ shifts right and the currency would **appreciate**. To hold the peg the central bank **sells domestic currency**, so $M$ **expands** and $LM^*$ shifts right too. Result: $Y$ **rises**, $e$ is **unchanged**.

- **D. False.** That is the floating-rate outcome with $Y$ and $e$ swapped.
- **A. False.** $e$ is fixed.
- **B. False.** $M$ **expands** here, not contracts.

> [!tip] 🗣️ In plain English
> Fixed rate, so the central bank **prints money** to stop the currency rising. That money adds fuel on top of the spending and **output goes up**.

---

## Q20 — Price level up, floating-rate economy (figure)

> [!warning] Official answer. Working below is AI-written, not official.
> The diagram is taken from the `.docx` of this paper.

**Question.** A small open economy with a floating exchange rate is initially in equilibrium at point A. Holding all else constant, if the domestic price level increases, then the _____ curve will shift to _____.

![[PP10_q20_floating_price_level.png|480]]

- A. $IS_1^*$, $IS_2^*$
- B. $LM_1^*$, $LM_3^*$
- C. $IS_1^*$, $IS_3^*$
- D. $LM_1^*$, $LM_2^*$

> [!success] Answer: B

Higher $P$ lowers $M/P$. The vertical $LM^*$ is $Y = Y(M/P, r^*)$, so less real money means **less income**: it shifts **left**, from $LM_1^*$ to $LM_3^*$. See [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]].

- **D. False.** $LM_2^*$ is to the **right**, the shift from a lower price level.
- **A and C. False.** A change in the domestic price level shifts $LM^*$ (via $M/P$), not $IS^*$.

> [!tip] 🗣️ In plain English
> Higher prices make the money supply **buy less**, so the vertical LM line moves **left**.

---

## Q21 — Phillips curve arithmetic

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Assume that an economy is governed by the Phillips curve $\pi = \pi^e - 0.5(u - 0.06)$. Further assume $\pi^e = \pi_{-1}$. Suppose that, in period zero, $\pi = 0.03$ and $\pi^e = 0.03$, that is, that the economy is experiencing steady inflation at a 3-percent rate. Now assume that the government decides to impose whatever demand is necessary to cut unemployment to 0.04. Suppose the government follows this policy for periods 1 through 5. What will be the inflation rate in period 5?

- A. 0.03
- B. 0.07
- C. 0.05
- D. 0.08

> [!success] Answer: D

Each period: $\pi_t = \pi_{t-1} - 0.5(0.04 - 0.06) = \pi_{t-1} + 0.01$.

| Period | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $\pi$ | 0.03 | 0.04 | 0.05 | 0.06 | 0.07 | **0.08** |

- **B (0.07).** That is period 4: stops one period short.
- **A (0.03).** Ignores the Phillips curve gap.
- **C (0.05).** That is period 2.

See [[Phillips Curve]] and [[Adaptive Expectations]].

> [!tip] 🗣️ In plain English
> Holding unemployment **2 points under** normal adds **1 point of inflation every period**, because expectations keep catching up. Five periods later, inflation is **8%**.

---

## Q22 — Unexpected monetary contraction

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** In the AD-AS model, starting from the natural level of output, an unexpected monetary contraction will cause output and the price level to ______ in the short run; and in the long run the expected price level will ______, causing the level of output to return to the natural level.

- A. decrease; increase
- B. decrease; decrease
- C. increase; decrease
- D. increase; increase

> [!success] Answer: B

Contraction shifts $AD$ left. On the upward-sloping $SRAS$, **output and prices both fall** in the short run. Prices end up below what people expected, so the expected price level **falls**, $SRAS$ shifts down, and output returns to $\bar Y$ at a lower price level. See [[AD-AS Model]] and [[Short-Run Aggregate Supply]].

- **A. False.** Prices fall in the short run, and a **rise** in expected prices would shift $SRAS$ up and push output further below $\bar Y$.
- **C. False.** A contraction cannot raise output and prices; that is the expansion case.
- **D. False.** Same, and a higher expected price level would not bring output back.

> [!tip] 🗣️ In plain English
> Less money means **lower output and prices** at first. People then **lower their price expectations**, and the economy slides back to normal output at **lower prices**.

---

## Q23 — Which reason for sticky prices is NOT valid

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** Some firms do not instantly adjust the prices they charge in response to changes in demand for all of the following reasons except:

- A. some prices are set by long-term contracts between firms and customers.
- B. it is costly to alter prices.
- C. prices do not adjust when there is perfect competition.
- D. they do not want to annoy their frequent customers.

> [!success] Answer: C

The question asks for the one that is **not** a reason. Under **perfect competition** firms are **price takers**: the market price moves, and they follow it, so competition is not a source of stickiness. Stickiness comes from **market power** plus frictions. See [[Sticky-Price Model]] and [[Price Stickiness]].

- **A. C real reason.** Contracts fix prices for a period.
- **B. C real reason.** Menu costs.
- **D. C real reason.** Customer goodwill.

> [!tip] 🗣️ In plain English
> This is an "all but one" question. **Contracts, menu costs and customer goodwill** all stick prices. **Perfect competition** does not: those firms just take the market price.

---

## Q24 — The sacrifice ratio

> [!warning] Official answer. Working below is AI-written, not official.

**Question.** The sacrifice ratio will _____ if the public has rational expectations and credible public announcements are made in advance of policy changes; The sacrifice ratio will ____ if hysteresis exist in the economy, causing output loss to continue after the disinflation is over.

- A. fall; rise
- B. rise; rise
- C. rise; fall
- D. fall; fall

> [!success] Answer: A

With **rational expectations and credibility**, expected inflation drops as soon as the policy is announced, so disinflation costs little output: the ratio **falls**. With **hysteresis**, the output loss persists after inflation is down, making the total cost larger: the ratio **rises**. See [[Sacrifice Ratio]], [[Rational Expectations]] and [[Hysteresis]].

- **D. False.** Hysteresis raises the cost.
- **B and C. False.** Credibility lowers the cost, so the first blank is "fall".

> [!tip] 🗣️ In plain English
> If people **believe** the central bank, disinflation is **cheap**. If a recession **leaves scars** (hysteresis), it becomes **expensive**.

---

## Recap table

| Q | Topic | Answer | One line |
|---|-------|--------|----------|
| 1 | Euler's theorem | A | Factor payments sum to output |
| 2 | Goods market vs expectations | B | Real rate, then nominal rate |
| 3 | "Fast money raises my interest" | C | Quantity theory plus Fisher |
| 4 | Above golden rule | D | $c$ jumps up, falls, ends higher |
| 5 | Lower saving rate | B | Lower steady-state $y$ |
| 6 | Industrial policy drawback | A | Favoritism |
| 7 | Constant return to capital | D | Capital can drive per-worker growth |
| 8 | Supply vs demand determined | C | Capacity sets long-run output |
| 9 | Payments apps | B | Contractionary monetary policy |
| 10 | Airport financed | A | Taxes: multiplier of 1 |
| 11 | Lower $P$, LM | D | Down and right |
| 12 | Tax rise | C | $r$ and $Y$ fall |
| 13 | Higher $P$ | D | LM up-left, move along AD |
| 14 | IS formula | B | $1600 - 3T - 100r + 4G$ |
| 15 | $G$ up, floating | C | $NX$ falls, $r = r^*$ |
| 16 | $r^*$ up, floating | A | $Y$ and $NX$ rise |
| 17 | $r^*$ up, fixed | A | $Y$ falls, $NX$ unchanged |
| 18 | Expected yen fall | D | Japan rate higher |
| 19 | $G$ up, fixed | C | $Y$ rises, $e$ unchanged |
| 20 | Higher $P$, floating | B | $LM_1^*$ to $LM_3^*$ |
| 21 | Phillips arithmetic | D | $\pi_5 = 0.08$ |
| 22 | Monetary contraction | B | Both fall, expected $P$ falls |
| 23 | Sticky-price reasons | C | Perfect competition is not one |
| 24 | Sacrifice ratio | A | Fall with credibility, rise with hysteresis |

## Related notes

[[Macro-Economics II]] · [[Lec_03-Classical Theory & National Income]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]
