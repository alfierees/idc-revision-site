---
title: "Macro II Moed A 2024 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Moed A, 25 June 2024"
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
  - Macro II Moed A 2024
  - PP11 Macro II
  - Tofes 0 Moed A 2024
subject: macro-ii
in_scope: true
---

# Macro II Moed A 2024 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed A, 25 June 2024** — Macroeconomics II (3058), Dr. Alon Cohen. 25 multiple-choice questions, 4% each, open notes, 2.5 hours.
> Builds on: [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!success] Official answers AND official working
> Two files back this page. The **Tofes 0** paper (first option = correct answer) gives the key, and the instructor's **full-solutions version** gives the working. I checked the two against each other question by question (matching options by their text, since the full-solutions file shuffles the order): **all 25 agree, no conflicts.** The explanation of *why* the right answer is right comes from the official solution (lightly reworded). The **option-by-option "why not" notes and the "In plain English" boxes are my additions**, not from the instructor. Calculations were re-checked by hand.

> [!info] The options are shuffled here
> The source (Tofes 0) prints the correct answer first. The options are shuffled on this page so the position gives nothing away. The real exam reshuffled them per student as well. The full-solutions file uses yet another order, so its letters differ too.

> [!info] Figures
> The six diagram questions (Q3, Q7, Q12, Q17, Q21, Q24) use the figures embedded in the `.docx` copies of the paper.

---

## What this paper tests

> [!info] The paper in one paragraph
> Almost evenly split between long-run theory (Solow and the classical model) and the short-run toolkit.
> 1. **Solow and growth** (Q1, Q10, Q11, Q15, Q20, Q21): convergence to a steady state, what sustains growth, the labour share, golden-rule saving, and a "revised" Solow with a constant return to capital.
> 2. **Classical theory and money** (Q8, Q9, Q14, Q19, Q23): loanable funds, velocity, crowding out in the long run, an announced future money cut, neutrality.
> 3. **Keynesian cross and IS-LM** (Q2, Q3, Q4, Q12, Q16, Q22, Q24): multiplier arithmetic, liquidity preference, crowding out, why AD slopes down, LM shifts.
> 4. **Mundell-Fleming** (Q5, Q6, Q13, Q17): floating vs fixed, an import-restriction change, a full numerical solution, policy under a peg.
> 5. **AS-AD and Phillips** (Q7, Q18, Q25): a demand shock path, sticky prices, the short-run Phillips curve.

---

## Q1 — Is income above or below its steady state?

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** A country has the production function $Y = K^{0.3}L^{0.7}$ with $\left(\frac{s}{\delta}\right) = 5$, where $s$ is the saving rate and $\delta$ is the capital depreciation rate. Assume that population growth rate is 0 and no technological innovation. If capital per worker is 11, then income

- A. per capita will be lower the steady state, but total income will be higher in the steady state
- B. will be higher in the steady state
- C. is equal to the steady state level
- D. will be lower in the steady state

> [!success] Answer: D

In per-worker terms $y = k^{0.3}$. The steady state solves $s f(k) = (n + \delta + g)k$, here $s k^{0.3} = \delta k$, so

$$\frac{s}{\delta} = k^{0.7} = 5 \;\Rightarrow\; k^* = 5^{1/0.7} \approx 9.96$$

Current $k = 11 > k^* = 9.96$, so capital will **fall** to the steady state and **so will income**. See [[Solow Model]] and [[Steady State]].

- **B. False.** $k$ above $k^*$ means income is above, not below, its steady-state level.
- **C. False.** $11 \neq 9.96$.
- **A. False.** With $n = 0$, total income and income per worker move together; they cannot move in opposite directions.

> [!tip] 🗣️ In plain English
> The economy has **more capital than it can keep up** with the saving it does, so capital and income **shrink back** to the steady state.

---

## Q2 — How much to cut taxes

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** A closed economy operates in the short run. Assume that its investments are 400, the consumption function is $300 + 0.75(Y - T)$ and government spending is 500. Government budget has a deficit of 100. How much taxes should the government cut, if the target (normal) income level is 4,200, assuming the central bank has a constant interest rate policy?

- A. 200
- B. 600
- C. 150
- D. 400

> [!success] Answer: A

The deficit is $G - T = 100$, so $T = 400$. Equilibrium: $Y = 300 + 0.75(Y - 400) + 400 + 500$, so $0.25Y = 900$ and $Y = 3600$. To reach $4200$:

$$4200 = 400 + 500 + 300 + 0.75(4200 - T) \;\Rightarrow\; 3000 = 0.75(4200 - T) \;\Rightarrow\; T = 200$$

Taxes fall from 400 to 200: a **cut of 200**. Check with the tax multiplier: need $\Delta Y = 600$, and $\frac{MPC}{1-MPC} = 3$ gives $\Delta T = -200$.

- **D (400).** That is the **starting** tax level, not the cut.
- **B (600).** That is the output gap; forgot to divide by the tax multiplier of 3.
- **C (150).** Would use a multiplier of 4 ($600/4$), the spending multiplier, instead of the tax multiplier.

> [!tip] 🗣️ In plain English
> Output is **600 short**. Each dollar of tax cut lifts output by **3**, so cut taxes by **200**.

---

## Q3 — Money market below the equilibrium rate

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Consider the money market of a closed economy:

![[PP11_q3_money_market.png|420]]

Based on the graph, if the interest rate is $r_3$, then people will ______ bonds and the interest rate will ______.

- A. buy, rise
- B. sell, rise
- C. sell, fall
- D. buy, fall

> [!success] Answer: B

At $r_3$ (below the equilibrium $r_2$) the quantity of money demanded, $M_3/P_3$, **exceeds** the fixed real supply. People want more cash, so they **sell bonds**. Selling pushes bond prices down, which **raises** the implied interest rate back to $r_2$. See [[Liquidity Preference]].

- **D. False.** Buying bonds would be right if there were **excess supply** of money (rate above $r_2$), and then the rate would fall.
- **A. False.** Wrong action: excess money demand makes people sell, not buy.
- **C. False.** Selling is right, but selling **raises** the rate.

> [!tip] 🗣️ In plain English
> Interest rates are **too low**, so everyone wants **more cash** and **sells bonds**. That pushes the **interest rate back up**.

---

## Q4 — When is crowding out bigger?

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Consider the IS-LM model. When will the crowding-out effect be more substantial:

- The government increases G by 100, without cutting taxes, in the short run
- The government increases G by 100, without cutting taxes, in the long run

- A. In the short-run, since the inflation induces a higher increase of the interest rate.
- B. In the long-run, since the inflation induces a lower increase of the interest rate.
- C. In the long-run, since the inflation induces a higher increase of the interest rate.
- D. In the short-run, since the inflation induces a lower increase of the interest rate.

> [!success] Answer: C

In the short run $IS$ shifts right, $r$ rises and investment falls, but $Y$ still ends **higher** than before. In the long run output is stuck at $\bar Y$, so the fiscal expansion is **fully offset** by lower investment. The reason is that with $Y > \bar Y$, prices rise, $M/P$ falls and **$LM$ shifts left**, pushing $r$ even higher. See [[Crowding Out]] and [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]].

- **B. False.** Right period, but inflation *raises* the rate, it does not lower it.
- **A. False.** In the short run prices are fixed, so there is no inflation channel and crowding out is partial.
- **D. False.** Wrong period and wrong direction.

> [!tip] 🗣️ In plain English
> In the long run, **prices rise** and eat the real money supply, pushing **interest rates higher still**. That crowds out **all** of the extra spending.

---

## Q5 — A fall in money demand, floating rate

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Assume a financial technological innovation in a small open economy that operates in the short-run, lowering the need for cash. Exchange rate is floating. What would drive the domestic interest rate back to the level of the world interest rate?

- A. capital inflow
- B. Inflation
- C. the central bank
- D. capital outflow

> [!success] Answer: D

Lower money demand pushes the domestic rate **below** the world rate, $r < r^*$. Investors send funds abroad for the higher return: a **capital outflow**. That outflow weakens the exchange rate and lifts $r$ back up to $r^*$. See [[Capital Mobility]].

- **A. False.** An inflow happens when $r > r^*$, the opposite case.
- **C. False.** Under a floating rate the central bank is not intervening.
- **B. False.** The adjustment is through capital flows and the exchange rate, not through inflation.

> [!tip] 🗣️ In plain English
> Domestic interest rates dip **below** the rest of the world, so money **flows out** until they match again.

---

## Q6 — Which exchange rate regime protects output?

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** A small open economy in the short-run removes some effective import restriction, so that household substitute some of the domestic consumption with imported goods. Which exchange rate regime is preferable in order to protect the domestic economy from slowdown or recession?

- A. Both regimes lead to the same result
- B. Floating
- C. Fixed
- D. Sometimes fixed, sometimes floating

> [!success] Answer: B

More imports lower $NX$, so $IS^*$ shifts **left**. Under a floating rate the currency **depreciates**, exports rise and $NX$ returns to its original level, so **$Y$ does not change**. Under a fixed rate the central bank has to defend the peg by shifting $LM^*$ left, which **lowers $Y$**. See [[Floating Exchange Rate]] and [[Fixed Exchange Rate]].

- **C. False.** A peg turns the shock into a recession.
- **D. False.** Not a regime choice with a distinct result.
- **A. False.** The two regimes give different results for $Y$.

> [!tip] 🗣️ In plain English
> With a **floating** currency, the exchange rate takes the hit and output is left alone. With a **peg**, the central bank has to shrink the economy to hold the currency up.

---

## Q7 — War lowers aggregate demand (figure)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Consider the AD-AS model, and assume that point A is the equilibrium:

![[PP11_q7_ad_as_war.png|480]]

Among the following choices, what is the most likely equilibria path in the short-run and long-run, if war suddenly breaks in the country and affects the demand side?

- A. G then G
- B. F then E
- C. G then B
- D. F then F

> [!success] Answer: C

War lowers $AD$ (from $AD_1$ to $AD_3$), so in the short run we slide **down $SRAS_1$ from A to G**: lower price and output below $\bar Y$. Prices end up below expectations, so the expected price level falls and **$SRAS$ shifts down** (to $AS_3$) until output is back at $\bar Y$ at **B**. See [[Lec_06-AS-AD Model & Economic Fluctuations]].

- **A. False.** G is a short-run point (output below $\bar Y$): the economy does not stay there.
- **B and D. False.** F and E are on the wrong side of the original equilibrium: F is on $AD_1$ with a higher price level (a supply-side move), E is on $AD_2$ (a demand **rise**).

> [!tip] 🗣️ In plain English
> The war **cuts demand**. At first prices and output drop. Then people **expect lower prices**, the economy readjusts, and it settles at **normal output with lower prices**.

---

## Q8 — Output exceeds planned spending (classical)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Under the Classic Theory which describes the economy in the long-run, assume that normal output level is higher than the sum of private consumption, government expenditure and investment (in a closed economy). What will happen in equilibrium?

- A. The excess savings over investment will lower the interest rate, and increase investment
- B. The excess investments over savings will raise the interest rate, and decrease investment
- C. The excess investments over savings will lower the interest rate, and increase investment
- D. The excess savings over investment will raise the interest rate, and decrease investment

> [!success] Answer: A

$\bar Y > C + G + I$ means $S = \bar Y - C - G > I$: **saving exceeds investment**. In the classical model the **interest rate** clears the market, so savers accept a **lower rate**, which **raises investment** until $S = I$. See [[Loanable Funds Market]].

- **D. False.** Excess saving lowers the rate, it does not raise it.
- **B and C. False.** Those describe an excess of investment over saving, the opposite of this case.

> [!tip] 🗣️ In plain English
> More is being saved than invested, so the **interest rate falls** until firms **borrow more** and the two match.

---

## Q9 — Velocity rises

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** According to the quantity theory of money, if velocity increases as a result of financial innovation, while all other variables are unchanged, then

- A. Quantity of money must fall.
- B. Inflation rate increases.
- C. Nothing changes.
- D. Output growth rate increases.

> [!success] Answer: B

$MV = PY$. With $M$ and $Y$ fixed, higher $V$ means higher $P$. In money-market terms, real money demand $Y/V$ falls, so $P$ must rise to bring the real supply $M/P$ down. See [[Quantity Theory of Money]] and [[Velocity of Money]].

- **A. False.** $M$ is unchanged by assumption.
- **D. False.** $Y$ is fixed by supply in the classical model.
- **C. False.** $P$ changes.

> [!tip] 🗣️ In plain English
> If every dollar changes hands **faster**, the same money buys **more**, so **prices rise**.

---

## Q10 — What sustains rising national income (Solow)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** According to the Solow model, persistently rising national income can be explained by:

- A. high saving rates
- B. population growth, and so is persistent increase in income per person
- C. population growth or capital accumulation
- D. population growth, but persistent increase in income per person can be explained only by technological progress

> [!success] Answer: D

The saving rate changes the **level** of income, not its long-run growth rate. In the steady state $k$ is constant, so with population growth $n$ capital $K$ and, under constant returns, $Y$ grow at $n$. Income **per person** is constant. The only way to keep $y$ and $k$ rising forever is **technological progress**.

- **B. False.** Population growth raises total income but not income per person.
- **C. False.** Capital accumulation stops when $k$ reaches the steady state (diminishing returns).
- **A. False.** A high $s$ gives a higher level, not persistent growth.

> [!tip] 🗣️ In plain English
> More people means a **bigger economy**, not a **richer** one. Only **better technology** keeps living standards rising forever.

---

## Q11 — Labour share in the steady state

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** In Solow model with technological innovations, the share of all the workers of the national income (wage times labor divided by Y) in the steady state is

- A. either increasing or decreasing
- B. increasing
- C. fixed
- D. decreasing

> [!success] Answer: C

By [[Euler's Theorem]] output is split between labour and capital owners. Capital's share is $MPK \cdot K / Y$. In the steady state $K$ and $Y$ grow at the same rate and $MPK = f'(k)$ is constant because $k$ is, so capital's share is **constant**. Labour gets the rest, so its share is **constant** too.

- **A, B, D. False.** Each needs a share that drifts, which would need $MPK \cdot K/Y$ to change; it does not.

> [!tip] 🗣️ In plain English
> Workers and capital owners keep getting the **same slice of the pie** while the pie grows.

---

## Q12 — Keynesian cross below equilibrium (figure)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Consider the following Keynesian Cross graph:

![[PP11_q12_keynesian_cross.png|480]]

Suppose that the output level is $Y_1$. The market for goods and services will converge to equilibrium due to

- A. unexpected decrease of inventory, which will induce firm to speed up production rate
- B. a fall in the price level, which will increase planned expenditure
- C. unexpected increase of inventory, which will induce firm to slow down production rate
- D. a rise in the price level, which will decrease planned expenditure

> [!success] Answer: A

At $Y_1 < Y_2$, **planned expenditure exceeds actual** expenditure (output). Firms sell more than they planned, so **inventories fall below the intended level**. They respond by **speeding up production**, and output rises to $Y_2$. See [[Keynesian Cross]] and [[Inventory Adjustment]].

- **C. False.** That is the case to the **right** of $Y_2$ (e.g. $Y_3$).
- **B and D. False.** The Keynesian cross is a **fixed-price** story: convergence works through inventories and production, not the price level.

> [!tip] 🗣️ In plain English
> Spending is **higher than output**, so shelves **empty out**, and firms **produce more**.

---

## Q13 — Real exchange rate from a full M-F solution

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Assume that the $LM$ curve for a small open economy with a floating exchange rate is given by $Y = 200r - 200 + 2(M/P)$, while the $IS$ curve is $Y = 400 + 3G - 2T + 3NX - 200r$. Note that $r$ is given in percentage terms, so for example if $r=5\%$ then $200r = 200 \cdot 5 = 1{,}000$.

The function for $NX$ is $NX = 200 - 100e$, where $e$ is the nominal exchange rate. The price level ($P$) is fixed at $P=1$ whereas the international price level is $P^*=1/6$; the international interest rate is $r^* = 2.5$ percent, $M = 100$, $G = 100$ and the government runs a balanced budget. What is the real exchange rate?

- A. 1
- B. 2
- C. 3
- D. 1/3

> [!success] Answer: B

With $r = r^* = 2.5$, the $LM$ curve gives $Y$ directly:

$$Y = 200(2.5) - 200 + 2\left(\frac{100}{1}\right) = 500$$

Plug into the $IS$ curve with $G = T = 100$:

$$500 = 400 + 300 - 200 + 3(200 - 100e) - 200(2.5) = 600 - 300e$$

so $e = 1/3$. The question asks for the **real** exchange rate:

$$\varepsilon = \frac{e P}{P^*} = \frac{(1/3)(1)}{1/6} = 2$$

- **D (1/3).** That is the **nominal** rate $e$, the trap in the question.
- **A (1) and C (3).** Neither follows from the algebra: with $e = 1/3$, $P = 1$ and $P^* = 1/6$ the only value is 2.

> [!tip] 🗣️ In plain English
> $LM^*$ fixes income at **500**, then $IS^*$ gives the **nominal** rate of $1/3$. Adjust for the two price levels and the **real** exchange rate is **2**.

---

## Q14 — Tax cut in the long run

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** The government cuts taxes on income by \$100 million, assuming the classic theory of the economy in the long run. Consumption depends on disposable income and the marginal propensity to consume is 0.8. Therefore national investments

- A. rises by \$80 million.
- B. falls by \$20 million.
- C. falls by \$80 million.
- D. rises by \$20 million.

> [!success] Answer: C

In the long run $Y$ is fixed. Disposable income rises by 100, so $C$ rises by $0.8 \times 100 = 80$. Since $Y = C + I + G$ and $Y$, $G$ are unchanged, **investment falls by 80** (one-for-one crowding out of the extra consumption). See [[Marginal Propensity to Consume]] and [[Crowding Out]].

- **B and D. False.** The 20 is the part of the tax cut households **save** ($0.2 \times 100$). It is not the change in investment: public saving falls by 100 while private saving rises by only 20, so **national saving falls by 80**, and so does $I$.
- **A. False.** Right size, wrong sign.

> [!tip] 🗣️ In plain English
> Output can't grow, so the **extra 80 of spending** has to come out of **investment**.

---

## Q15 — Saving rate at the golden rule

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Assume output per worker is given by $y = k^{0.3}$. If capital level in the steady state is in its golden-rule level, then according to the Solow model saving rate is

- A. 70 percent
- B. more than 30 percent
- C. Less than 30 percent
- D. 30 percent

> [!success] Answer: D

Steady state: $s k^{0.3} = (n + g + \delta)k$. Golden rule: $MPK = 0.3 k^{-0.7} = n + g + \delta$. Dividing the first by the second:

$$\frac{s k^{0.3}}{0.3 k^{-0.7}} = k \;\Rightarrow\; s k^{0.3} = 0.3 k^{0.3} \;\Rightarrow\; s = 0.3$$

So the golden-rule saving rate equals **capital's share** $\alpha = 0.3$. See [[Golden Rule]] and [[Cobb-Douglas]].

- **B and C. False.** Only an exact 0.3 works: a different $s$ would not match the golden-rule capital stock.
- **A (70%).** That is labour's share $1 - \alpha$, a mix-up.

> [!tip] 🗣️ In plain English
> To maximise consumption, a Cobb-Douglas economy should save **exactly the share of income that goes to capital**: here **30%**.

---

## Q16 — Why AD slopes down in a closed economy

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** In a closed economy, the main explanation for the inverse relation between overall price level and aggregate demand based on the IS-LM model is the

- A. interest rate effect
- B. substitution effect
- C. income effect
- D. exchange rate effect

> [!success] Answer: A

Higher $P$ lowers $M/P$, $LM$ shifts left, $r$ rises, investment falls, and so does equilibrium output. That is the **interest rate effect**. See [[Aggregate Demand Curve]].

- **D. False.** The exchange rate effect needs an open economy.
- **B and C. False.** Not the IS-LM channel.

> [!tip] 🗣️ In plain English
> Higher prices make real money scarce, so **interest rates rise** and **investment drops**.

---

## Q17 — Reaching $Y_2$ under a fixed rate (figure)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** A small open economy with a fixed exchange rate $e_2$ is initially at equilibrium point A. To increase output level to $Y_2$ the government should employ

![[PP11_q17_fixed_rate_policy.png|480]]

- A. expansionary fiscal policy
- B. lift effective import restrictions
- C. expansionary monetary policy
- D. do any of the policies mentioned in the other answers

> [!success] Answer: A

Under a fixed rate, **monetary policy cannot change $Y$**: if $LM^*$ shifts right, the currency would fall to $e_3$ (point D) and the central bank has to shrink $M$ again. **Fiscal expansion** shifts $IS^*$ right to $IS_2^*$ (pressure toward B, an appreciation), and the central bank **expands $M$** to hold $e_2$, moving $LM^*$ to $LM_2^*$. The economy ends at **C: $Y_2$, $e_2$**. See [[Fixed Exchange Rate]].

- **C. False.** Monetary expansion is undone by the peg.
- **B. False.** Lifting import restrictions raises imports, which lowers $NX$ and shifts $IS^*$ **left**.
- **D. False.** Only fiscal policy works.

> [!tip] 🗣️ In plain English
> With a **peg**, the central bank's hands are tied. Only **government spending** can lift output, and the central bank **goes along** by printing money.

---

## Q18 — Sticky-price model

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** According to the sticky-price model, if the demand is weak, the ______ firms will ________ their prices, which underlies the slope of the AS curve in the short run.

- A. flexible-price; raise
- B. fixed-price; raise
- C. fixed-price; cut
- D. flexible-price; cut

> [!success] Answer: D

When demand is weak and $Y < \bar Y$, firms want to **cut** prices. Only **flexible-price** firms can. Fixed-price firms keep their prices. The reverse holds when $Y > \bar Y$. That mix is what gives $SRAS$ its upward slope. See [[Sticky-Price Model]].

- **A and B. False.** Weak demand means cutting, not raising.
- **C. False.** Fixed-price firms cannot change price (that is what "fixed" means).

> [!tip] 🗣️ In plain English
> When demand is weak, the firms **that are able to change prices cut them**. The rest wait.

---

## Q19 — An announced future money cut

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Based on the classic theory of inflation, if the Fed announces that it will decrease the money supply in the future (but does not change the money supply today),

- A. the nominal interest rate will decrease and the current price level will increase.
- B. both the nominal interest rate and the current price level will increase.
- C. both the nominal interest rate and the current price level will decrease.
- D. the nominal interest rate will increase and the current price level will decrease.

> [!success] Answer: C

Planning to cut $M$ lowers **expected inflation**, so by the Fisher effect the **nominal rate falls**. A lower $i$ raises real money demand, so the money market is out of equilibrium; to restore it, **today's $P$ falls**, which raises $M/P$. See [[Fisher Effect]] and [[Money Demand]].

- **A, B, D. False.** Each has the wrong sign on $i$ or on $P$; the two always move together here, both down.

> [!tip] 🗣️ In plain English
> People **expect lower inflation**, so interest rates drop, they want to **hold more cash**, and prices **fall today**.

---

## Q20 — Saving rate from the steady-state condition

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Total output growth rate is 4%, depreciation rate is 4%, and the capital-output ratio is 3. Based on Solow model in the steady state, the saving rate is:

- A. 12%
- B. 24%
- C. 20%
- D. 16%

> [!success] Answer: B

Total output grows 4%, and under constant returns so do $K$ and $L$: $n = 4\%$ (no technology). Steady state $s y = (\delta + n)k$, so

$$s = \frac{k}{y}(\delta + n) = 3 \times (0.04 + 0.04) = 24\%$$

The capital-output ratio $K/Y$ equals $k/y$.

- **C (20%).** Would need a capital-output ratio of 2.5, not 3.
- **D (16%).** Would need a capital-output ratio of 2.
- **A (12%).** Equals $3 \times 4\%$: counts only one of $n$ or $\delta$ instead of both.

> [!tip] 🗣️ In plain English
> To keep capital growing at 4% **and** replace the 4% that wears out, you need to **save 8% of the capital stock** each year. With capital worth **3 years** of output, that is **24%** of income.

---

## Q21 — A "revised" Solow with a constant return to capital (figure)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Suppose that the marginal product of capital is higher than $n + g + \delta$ for every $k < k_1$, but equals $n + g + \delta$ for every $k \geq k_1$, where $k_1$ is some positive capital-per-worker level. The following figure demonstrates the idea:

![[PP11_q21_modified_solow.png|420]]

Then under this revised Solow motion of capital,

- A. capital accumulation will enable sustainable growth of income per worker in the steady state
- B. only technological innovations can explain persistent growth in the standards of living
- C. the economy is described by the AK model, where technological progress is endogenous
- D. capital growth will enable sustainable growth of income, but not of income per worker

> [!success] Answer: A

In the figure $s f(k)$ is **always above** $(n + g + \delta)k$, so investment is always higher than break-even and $k$ **keeps rising**, and so does $y$. This is the opposite of standard Solow, where diminishing $MPK$ eventually makes investment equal break-even and $k$ stops. See [[Break-even Investment]] and [[AK Model]].

- **D. False.** $k$ rises, so income per worker rises too.
- **B. False.** In standard Solow that is true, but here capital accumulation alone sustains growth.
- **C. A label, not the implication.** The question asks what follows from the assumption, and A states it directly. C mixes in a claim about technology that the figure does not show.

> [!tip] 🗣️ In plain English
> Saving **never stops paying off**, so the economy can keep growing richer **through capital alone**.

---

## Q22 — Price falls after a supply-side shock

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Assume the IS-LM model such that output level in equilibrium is normal. Due to some positive shock to the supply side, the price level in the economy decreases (assume a horizontal SRAS curve). As a result, the _____ curve shifts to the right, which causes a _____ economic ______

- A. IS; temporary; boom
- B. LM; temporary; recession
- C. LM; temporary; boom
- D. LM; permanent; boom

> [!success] Answer: C

Lower $P$ raises $M/P$, so **$LM$ shifts right**. The new equilibrium has **higher $Y$** and lower $r$. Since $Y$ started at normal, this is a **boom**, and it is **temporary**: in the long run prices rise back and output returns to $\bar Y$.

- **D. False.** Booms above $\bar Y$ cannot be permanent.
- **B. False.** Higher $Y$ is a boom, not a recession.
- **A. False.** Price changes shift $LM$ (via $M/P$), not $IS$.

> [!tip] 🗣️ In plain English
> Lower prices make money **go further**, which boosts output for a while, **until prices rise again**.

---

## Q23 — Money neutrality

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** Money is neutral in the ______, which means its quantity cannot affect ______ variables

- A. short-run; real
- B. long-run; real
- C. long-run; nominal
- D. short-run; nominal

> [!success] Answer: B

In the long run the **classical dichotomy** holds: more money only raises prices, with **no real effect**. In the short run (sticky prices) money can move real variables, temporarily. See [[Money Neutrality]] and [[Classical Dichotomy]].

- **C and D. False.** Money does affect **nominal** variables like $P$, in both horizons.
- **A. False.** Money is not neutral in the short run.

> [!tip] 🗣️ In plain English
> Over the long haul, printing money **only changes the price tags**. It does not make the economy bigger.

---

## Q24 — Money supply falls (figure)

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** In the IS-LM model, if $LM_3$ shifts to $LM_2$ because the money supply decreases from $M_3$ to $M_2$ then, holding other factors constant:

![[PP11_q24_lm_shift.png|480]]

- A. There is a movement along AD curve (up and to the left)
- B. Government spending and income fall
- C. Consumption increases
- D. Investments and income fall

> [!success] Answer: D

A lower $M$ shifts $LM$ **up and to the left**: the interest rate rises, so **investment falls** and with it **income**.

- **A. False.** A change in $M$ **shifts** the AD curve; a *movement along* AD is caused by a change in $P$.
- **C. False.** $Y$ falls, so consumption falls (or at best stays flat), it does not increase.
- **B. False.** $G$ is exogenous and unchanged.

> [!tip] 🗣️ In plain English
> Less money means **higher interest rates**, so **less investment** and **lower output**.

---

## Q25 — Short-run Phillips curve

> [!success] Official answer and working. Option-by-option notes added by me.

**Question.** In the long run inflation rate is 5%. Based on the short-run Phillips' curve, what is the inflation rate when unemployment is below its normal rate?

- A. More than 5%.
- B. Could be more or less than 5%.
- C. Less than 5%.
- D. 5%.

> [!success] Answer: A

The $SRPC$ is **downward sloping**: lower unemployment goes with higher inflation. With $u < u_n$, inflation is **above** its normal 5%. See [[Phillips Curve]].

- **C. False.** That is for unemployment above normal.
- **D. False.** 5% holds only when $u = u_n$ (or in the long run).
- **B. False.** The curve is monotone, so the sign is certain.

> [!tip] 🗣️ In plain English
> **Fewer people out of work** means a **hotter economy**, so inflation runs **above its normal level**.

---

## Recap table

| Q | Topic | Answer | One line |
|---|-------|--------|----------|
| 1 | Convergence to steady state | D | $k^* = 5^{1/0.7} \approx 9.96 < 11$ |
| 2 | Tax cut to reach $\bar Y$ | A | Cut of 200 |
| 3 | Money market at $r_3$ | B | Sell bonds, $r$ rises |
| 4 | Crowding out | C | Larger in the long run |
| 5 | Money demand falls | D | Capital outflow |
| 6 | Import restriction removed | B | Floating protects $Y$ |
| 7 | War lowers AD | C | A to G, then B |
| 8 | $S > I$ in the long run | A | $r$ falls, $I$ rises |
| 9 | Velocity rises | B | Inflation rises |
| 10 | Solow growth | D | Only technology lifts per-person income |
| 11 | Labour share | C | Fixed |
| 12 | Keynesian cross, $Y_1$ | A | Inventories fall, output rises |
| 13 | Real exchange rate | B | $e = 1/3$, $\varepsilon = 2$ |
| 14 | Tax cut, long run | C | $I$ falls by 80 |
| 15 | Golden-rule saving | D | $s = 0.3$ |
| 16 | AD slope | A | Interest rate effect |
| 17 | Fixed rate, reach $Y_2$ | A | Fiscal expansion |
| 18 | Sticky prices | D | Flexible firms cut |
| 19 | Announced money cut | C | $i$ and $P$ both fall |
| 20 | Steady-state saving | B | $3 \times 8\% = 24\%$ |
| 21 | Revised Solow | A | Growth from capital alone |
| 22 | $P$ falls | C | LM right, temporary boom |
| 23 | Neutrality | B | Long run, real variables |
| 24 | $M$ falls | D | $I$ and $Y$ fall |
| 25 | Phillips curve | A | $\pi > 5\%$ |

## Related notes

[[Macro-Economics II]] · [[Lec_03-Classical Theory & National Income]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]
