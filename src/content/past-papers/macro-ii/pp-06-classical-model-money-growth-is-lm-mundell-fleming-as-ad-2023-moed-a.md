---
title: "Macro II Moed A 2023 (7 July 2023), Worked Solutions"
topics: "Classical model, money growth, IS-LM, Mundell-Fleming, AS-AD"
type: past-paper
status: worked-solution
exam: "Moed A, 7 July 2023 (Tofes 0)"
semester: 1
year: 2
course: "Macro-Economics II"
instructor: Alon Cohen
tags:
  - macro-economics-ii
  - past-paper
  - worked-solution
  - multiple-choice
  - classical-model
  - solow
  - is-lm
  - mundell-fleming
  - as-ad
aliases:
  - Macro II Moed A 2023
  - PP06 Macro II
  - Tofes 0 Macro II 2023
subject: macro-ii
in_scope: true
---

# Macro II Moed A 2023: Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed A, 7 July 2023**, Macroeconomics II (3058), Dr. Alon Cohen. 25 multiple-choice questions, 4% each, open notes.
> Builds on: [[Lec_03-Classical Theory & National Income]], [[Lec_04-The Monetary System]], [[Lec_05-Inflation]], [[Lec_06-AS-AD Model & Economic Fluctuations]], [[Lec_07-Aggregate Demand I & the IS-LM Model]], [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]], [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]], [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!warning] AI-solved questions: Q4, Q5, Q6, Q7
> The official answer key skips the four **Solow growth** questions (Q4 to Q7). Those four were **solved by an AI, not taken from an official key**, and each carries its own warning. The vault has no Solow lecture deck (Solow is textbook Ch 8-9), so they are grounded in the standard Solow steady-state conditions only. **Check them before relying on them.** Every other answer follows the official key.

## What this paper tests

| Block | Questions | Core idea |
|---|---|---|
| Classical long run and money | Q1 to Q3 | Saving equals investment; the [[Quantity Theory of Money]] and the [[Fisher Effect]] |
| Growth | Q4 to Q8 | Solow steady state, golden rule, two-sector endogenous growth |
| AS-AD and the multiplier | Q9 to Q11 | Supply shocks, SR to LR price adjustment, the [[Keynesian Cross]] |
| IS-LM | Q12 to Q15 | Monetary and fiscal policy, [[Crowding Out]], where the AD slope comes from |
| Mundell-Fleming | Q16 to Q21 | Capital mobility, floating versus fixed regimes, risk premium, large economy |
| Aggregate supply | Q22 to Q25 | Money neutrality, sticky prices, inflation inertia, long-run Phillips curve |

> [!info] The one habit that wins this exam
> Always ask **which run** and **which regime**. Short run means prices are fixed and output moves; long run means output is back at $\bar{Y}$ and only prices move. In Mundell-Fleming, floating means $LM^*$ is vertical and **income is pinned by money**; fixed means $LM^*$ is horizontal and **the exchange rate is pinned**.

---

## Q1 — Tax cut in the classical model

**Question.** Assume the classic theory, which describes a closed macroeconomy in the long run. GDP is 5,000, $G=T=1{,}000$ and $C=500+0.6(Y-T)$. The government cuts taxes by 200 (without changing its expenditure level). What happened to the investment level?

- A. Decreased by 120
- B. Decreased by 200
- C. Increased by 120
- D. Did not change

**Answer: A.**

Output is fixed at $Y=5{,}000$ (the [[Production Function]] sets it). Investment is whatever national saving leaves over, since $I = S$ in the [[Loanable Funds Market]].

$$S_{\text{national}} = Y - C - G$$

Before: $C = 500 + 0.6(5000-1000) = 2{,}900$, so $S = 5000 - 2900 - 1000 = 1{,}100 = I$.

After ($T = 800$): $C = 500 + 0.6(5000-800) = 3{,}020$, so $S = 5000 - 3020 - 1000 = 980 = I$.

$$\Delta I = 980 - 1{,}100 = -120$$

Split into parts: public saving $T-G$ falls by 200, private saving $Y-T-C$ rises by 80 (disposable income rises by 200, of which 0.6 is spent, so only 0.4 of 200 is saved). Net: $-200 + 80 = -120$.

> [!warning] Why the other options are wrong
> - **B (down 200):** counts only the fall in public saving and forgets households save 40% of the extra disposable income.
> - **C (up 120):** right size, wrong sign. Consumption rises by 120 but that comes out of saving, it does not add to investment.
> - **D (no change):** this is Ricardian equivalence (households save the whole tax cut). Here consumption depends on current $Y-T$ only, so it does not hold. Lower national saving raises the real interest rate and [[Crowding Out]] reduces investment.

> [!tip] 🗣️ In plain English
> The government cuts taxes but spends the same, so it **borrows more**. Households only save 40% of the tax cut, so total **national saving falls by 120**, and with less saving there is less to lend to firms, so **investment drops by 120**.

---

## Q2 — Announced future money growth

**Question.** If the Fed announces that it will raise the money supply in the future but does not change the money supply today,

- A. both the nominal interest rate and the current price level will increase.
- B. the nominal interest rate will decrease and the current price level will increase.
- C. the nominal interest rate will increase and the current price level will decrease.
- D. both the nominal interest rate and the current price level will decrease.

**Answer: A.**

1. Higher future money growth means higher **expected inflation** $\pi^e$.
2. By the [[Fisher Effect]], $i = r + \pi^e$, so the nominal rate $i$ rises **today**, even though $M$ has not moved.
3. A higher $i$ is a higher cost of holding money, so [[Money Demand]] $L(i,Y)$ falls.
4. Real balances demanded fall, but $M$ is unchanged. The market only clears if $M/P$ falls, so the **current price level $P$ rises**.

> [!warning] Why the other options are wrong
> - **B:** a falling $i$ contradicts the Fisher effect; expected inflation went up, not down.
> - **C:** $i$ rises correctly, but a falling $P$ would raise real balances and make the excess supply of money worse.
> - **D:** wrong on both. Only a *contractionary* announcement would lower both.

> [!tip] 🗣️ In plain English
> People hear that **more money is coming**, so they expect higher inflation and lenders demand a **higher nominal interest rate right away**. Nobody wants to hold cash when it is about to lose value, so prices **jump up today**.

---

## Q3 — Money growth and the nominal rate

**Question.** According to the quantity theory and the Fisher equation, if the money growth increases by 3 percent and the real interest rate equals 2 percent, then the nominal interest rate will increase:

- A. 5%
- B. 6%
- C. 3%
- D. 2%

**Answer: C.**

In growth rates, the [[Quantity Theory of Money]] gives $\%\Delta M + \%\Delta V = \%\Delta P + \%\Delta Y$. With $V$ and $Y$ growth unchanged, 3 points more money growth gives 3 points more inflation, so $\Delta\pi = 3\%$. The real rate does not move (it is set in the loanable funds market), so

$$\Delta i = \Delta r + \Delta \pi = 0 + 3\% = 3\%.$$

> [!warning] Why the other options are wrong
> - **A (5%):** adds the 2% real rate to the change. The real rate is a **level** already inside $i$, not something added to a change.
> - **B (6%):** double counts the 3%.
> - **D (2%):** this is just the level of the real rate, which is unaffected.

> [!tip] 🗣️ In plain English
> The **real rate stays at 2%**, so whatever extra inflation the printing press creates passes **one-for-one into the nominal rate**: 3 points more inflation, 3 points more nominal rate (the Fisher effect).

---

## Q4 — Optimal saving rate (Solow, golden rule)

**Question.** If an economy with no population growth or technological change has a steady-state MPK of 0.125, a depreciation rate of 0.1, and a saving rate of 0.225, then the optimal saving rate, which induces maximum consumption per worker, is

- A. higher than 0.225
- B. lower than 0.225
- C. 0.225
- D. Either higher or lower than 0.225

> [!warning] AI-written answer, not official. Check before relying on it.
> The official key skips this question. It is a Solow growth question (Ch 8-9) and there is **no lecture deck** for Solow in this vault, so this is solved from the standard golden-rule condition only.

**Answer: A.**

With $n=g=0$, steady-state consumption per worker is $c^* = f(k^*) - \delta k^*$. The **golden rule** maximises this, which requires

$$MPK = \delta.$$

Here $MPK = 0.125 > \delta = 0.1$. An extra unit of capital would add 0.125 of output but only cost 0.1 of depreciation, so net consumption would rise. The economy has **too little capital**, so the saving rate must **rise** to reach the golden rule.

![[PP06_q4_golden_rule.png|640]]

*The hump is an illustrative shape. The economy sits on the rising side (MPK above depreciation), so raising $s$ raises steady-state consumption.*

> [!tip] Intuition
> Saving more costs consumption today but builds a larger capital stock. Beyond the golden rule the extra capital earns less than it wears out (MPK below depreciation), so you would be saving for nothing. Below it, as here, more saving pays.

> [!warning] Why the other options are wrong
> - **B (lower):** this is the case MPK below $\delta$ (over-accumulation, dynamic inefficiency). The numbers are the other way round.
> - **C (0.225):** would need MPK $=\delta$ exactly.
> - **D (either):** the MPK comparison pins down the direction uniquely.

> [!tip] 🗣️ In plain English
> Capital **earns 12.5%** a year but only **wears out at 10%**, so the economy is **under-saving**. To get the most consumption in the long run it should **save more** than 0.225.

---

## Q5 — Growth rates of capital and the rental price (Solow)

**Question.** In the Solow growth model of an economy with population growth at rate $n$, technological change at rate $g$ and capital depreciates at rate $\delta$, total capital grows at rate ______ and real rental price grows at rate ______.

- A. $n+g$; 0
- B. $n+g$; $g$
- C. $n+g+\delta$; $g$
- D. $\delta$; 0

> [!warning] AI-written answer, not official. Check before relying on it.
> The official key skips this question (Solow, Ch 8-9, no lecture deck in the vault).

**Answer: A.**

In steady state, capital per effective worker $k=K/(AL)$ is constant, so total capital $K$ grows with effective labor $AL$: $n + g$.

The real rental price of capital equals the marginal product of capital, $R/P = MPK = f'(k)$. With $k$ constant, $MPK$ is constant, so it grows at **0**. (The real **wage** is the one that grows, at $g$.)

> [!warning] Why the other options are wrong
> - **B:** gets capital right but gives the rental price the growth rate of the wage. The wage grows at $g$ because $w = A\,[f(k)-kf'(k)]$ and $A$ grows; the return to capital does not.
> - **C:** depreciation is not a growth rate of the stock. It is subtracted in $\Delta k = sf(k) - (\delta+n+g)k$ and cancels with gross investment, so net capital growth is still $n+g$.
> - **D:** capital does not grow at the depreciation rate.

> [!tip] 🗣️ In plain English
> In the long run the capital stock grows **as fast as the effective workforce** ($n+g$), so the **return on each unit of capital stays flat** (growth 0). Only wages keep growing.

---

## Q6 — Saving rate consistent with steady-state growth (Solow)

**Question.** If the U.S. production function is Cobb-Douglas with capital share 0.3, total output growth is 3 percent per year, technological change rate is $g$, population growth rate is 1%, depreciation is 4 percent per year, and the capital-output ratio is 2.5, the saving rate that is consistent with steady-state growth is:

- A. 17.5%
- B. 20%
- C. 12.5%
- D. 14%

> [!warning] AI-written answer, not official. Check before relying on it.
> The official key skips this question (Solow, Ch 8-9, no lecture deck in the vault).

**Answer: A.**

In steady state, total output grows at $n+g$, so $3\% = 1\% + g$ and $g = 2\%$.

Steady-state investment equals break-even investment: $sY = (\delta + n + g)K$, so

$$s = (\delta + n + g)\,\frac{K}{Y} = (0.04 + 0.01 + 0.02)\times 2.5 = 0.07 \times 2.5 = 0.175.$$

> [!warning] Why the other options are wrong
> - **B, C and D (20%, 12.5%, 14%):** none follows from $s=(\delta+n+g)K/Y$ with $g=2\%$. Common slips are forgetting $g$ (then $(\delta+n)K/Y = 0.05\times2.5 = 12.5\%$, which is option C) or taking $g=3\%$ from total growth without subtracting $n$.
> - The capital share 0.3 is a distractor here. It matters for $MPK$ and the golden rule, not for this accounting identity.

> [!tip] 🗣️ In plain English
> To keep a **2.5 : 1 capital-to-output ratio** while the economy grows, you need to replace what wears out (4%) and add capital for new workers and better technology (3%). That is 7% of capital per year, and 7% of $K$ is **17.5% of $Y$**.

---

## Q7 — Real wage growth (Solow)

**Question.** If total GDP grows 5% per year, labor force grows at 2% a year, depreciation rate is 4%, what is the real wage annual growth rate according to the Solow model?

- A. 3%
- B. 5%
- C. 6%
- D. 2%

> [!warning] AI-written answer, not official. Check before relying on it.
> The official key skips this question (Solow, Ch 8-9, no lecture deck in the vault).

**Answer: A.**

In steady state total output grows at $n + g$, so $5\% = 2\% + g$ and $g = 3\%$. The real wage grows at $g$ (output per worker grows at $g$ and the wage tracks it), so it grows at **3%**.

> [!warning] Why the other options are wrong
> - **B (5%):** that is total output growth, which includes labor force growth.
> - **C (6%):** is not produced by any steady-state formula. Depreciation is a distractor and does not affect the steady-state growth rate.
> - **D (2%):** that is the labor force growth rate, which raises total output but not output per worker.

> [!tip] 🗣️ In plain English
> Total growth of 5% includes 2% from **more workers**. What is left, **3% a year, is better technology**, and that is what raises each worker's wage.

---

## Q8 — What makes the two-sector model endogenous

**Question.** Which of the following makes the two-sector model an endogenous growth theory rather than exogenous growth theory (as in Solow model)?

- A. The fraction of labor in universities, $u$
- B. The saving rate, $s$
- C. Both the fraction of labor in universities, $u$, and the saving rate $s$
- D. The labor force growth rate, $n$

**Answer: A.**

In the two-sector model, knowledge (efficiency of labor) grows at $\Delta E/E = g(u)$, where $u$ is the share of labor working in universities. Because $u$ is a **choice variable** inside the model, long-run growth is determined by decisions, not by an outside constant $g$ as in Solow.

> [!warning] Why the other options are wrong
> - **B and C:** the saving rate raises the **level** of income per worker (as in Solow) but does not change the long-run growth rate here.
> - **D:** labor force growth is exogenous in both models.

> [!tip] 🗣️ In plain English
> In Solow, technology just **falls from the sky**. In the two-sector model it comes from **how many people we put into universities**, so a society can choose its own growth rate.

---

## Q9 — A one-year drought

**Question.** Assume that the economy starts at point A and there is a drought that severely reduces agricultural output in the economy for just one year. In this situation, point ______ represents the short-run equilibrium immediately following the drought and point ______ represents the eventual long-run equilibrium.

The diagram has $LRAS$ at $\bar{Y}$, a downward-sloping $AD$ through A, and three horizontal $SRAS$ lines: $SRAS_1$ (top, through B and C), $SRAS_0$ (through A) and $SRAS_2$ (bottom, through D and E).

- A. B; A
- B. B; C
- C. E; D
- D. D; A

**Answer: A.**

A drought is an **adverse supply shock** that shifts $SRAS$ **up** to $SRAS_1$. Prices are sticky, so the economy moves along $AD$ to its intersection with $SRAS_1$, which is **B**: higher $P$, lower $Y$ ([[Stagflation]]). The shock lasts only a year, so $SRAS$ returns to $SRAS_0$ and the economy goes back to **A**.

![[PP06_q9_drought.png|640]]

*Redrawn from the exam diagram. B is on $AD$ at the higher price; A is the original equilibrium.*

> [!warning] Why the other options are wrong
> - **B (B; C):** C is where $SRAS_1$ crosses $LRAS$. It is **not on the AD curve**, so it is never an equilibrium. The shock is temporary, so there is no reason to end at a higher price level.
> - **C (E; D) and D (D; A):** D and E sit on the lower line $SRAS_2$, which is what a **favourable** supply shock (a bumper harvest) would produce. A drought moves $SRAS$ up, not down.

> [!tip] 🗣️ In plain English
> A drought makes goods **scarcer and pricier** while output falls (point B). Once the **harvest returns to normal** next year, everything snaps back to where it started (point A).

---

## Q10 — Long-run adjustment of the price level

**Question.** Assume that the normal output level is 3,000, prices in the short run are set at $P=1$, money supply is $M=2{,}000$ and the aggregate demand is given by $2M/P$. What will happen in the long run?

- A. Price level will rise by 33.33%
- B. Output increases to 4,000
- C. Money supply falls to 1,500
- D. Aggregate demand reduces to $1.5M/P$

**Answer: A.**

Short run ($P=1$): $Y = 2M/P = 2(2000)/1 = 4{,}000 > \bar{Y} = 3{,}000$. Output is above normal, so prices rise until $Y$ returns to $\bar{Y}$:

$$3{,}000 = \frac{4{,}000}{P} \;\Rightarrow\; P = \frac{4}{3} \approx 1.333.$$

The price level rises from 1 to 4/3, an increase of **33.33%**.

![[PP06_q10_price_adjustment.png|640]]

*The economy starts at $Y=4{,}000$ on the $P=1$ line and slides up $AD$ to $P=4/3$, where it meets $LRAS$.*

> [!warning] Why the other options are wrong
> - **B (4,000):** that is the *short-run* output. In the long run output is at $\bar{Y}=3{,}000$.
> - **C (M falls to 1,500):** $M$ is a policy variable, nothing in the model makes it fall. Note that 1,500 would give $Y=2(1500)/1=3{,}000$ at $P=1$, which is a different way to reach $\bar{Y}$, but it needs the central bank to act.
> - **D ($1.5M/P$):** the AD function is given and does not change by itself. $1.5M/P$ would again give $3{,}000$ at $P=1$, but only if demand fell.

> [!tip] 🗣️ In plain English
> Demand is **too hot** (4,000 versus a normal 3,000), so firms **raise prices** until demand cools to normal. The price needs to go from 1 to 1.33, a **33% rise**, and output ends up back at 3,000.

---

## Q11 — Why fiscal policy has a multiplier

**Question.** In the Keynesian-cross model, fiscal policy has a multiplied effect on income because fiscal policy:

- A. changes income, which changes consumption, which further changes income.
- B. increases the amount of money in the economy.
- C. is government spending and, therefore, more powerful than private spending.
- D. changes the interest rate.

**Answer: A.**

The [[Keynesian Cross]] multiplier is a feedback loop: $\Delta G \to \Delta Y \to \Delta C = MPC\cdot\Delta Y \to$ more $\Delta Y$, and so on. Summing the geometric series gives

$$\Delta Y = \frac{\Delta G}{1 - MPC}.$$

> [!warning] Why the other options are wrong
> - **B:** the Keynesian cross has no money market. Fiscal policy does not create money.
> - **C:** a dollar of government spending is not special. Any autonomous change in spending (for example investment) has the same multiplier.
> - **D:** interest rates enter only when you move to IS-LM, and there they **reduce** the multiplier (crowding out).

> [!tip] 🗣️ In plain English
> The government spends a dollar, **someone earns it, spends most of it, and the next person earns that**. The income keeps getting passed on, so the total effect is **bigger than the original dollar**.

---

## Q12 — Monetary expansion and the nominal rate

**Question.** In the money market, monetary expansion leads to ______ nominal interest rate in the short run (when $P$ is fixed), and to ______ nominal interest rate in the long run.

- A. Lower, higher
- B. Lower, lower
- C. Higher, lower
- D. Higher, higher

**Answer: A.**

**Short run ($P$ fixed):** $M \uparrow$ means $M/P \uparrow$. There is an excess supply of real balances, people buy bonds, bond prices rise and $i$ **falls** (the liquidity effect).

**Long run:** money is neutral, so $P$ rises in proportion to $M$ and $M/P$ returns to its original level. The real rate is unchanged, but a sustained higher money growth rate means higher inflation, so by the [[Fisher Effect]] the nominal rate is **higher**.

> [!warning] Why the other options are wrong
> - **B:** gets the SR right but forgets the Fisher effect in the LR.
> - **C and D:** a higher short-run rate would need money demand to rise or money supply to fall, which is the opposite of an expansion.

> [!tip] 🗣️ In plain English
> At first more money means **more cash chasing bonds**, so rates **fall**. Over time prices catch up and **inflation expectations rise**, which pushes nominal rates **above where they started**.

---

## Q13 — Full multiplier in IS-LM

**Question.** In the IS-LM model, following an increase of government expenditure by $\Delta G$, output level has risen by $\dfrac{\Delta G}{1-MPC}$. What happened to the level of investment in this transition?

- A. Investment has not changed
- B. Investment has increased
- C. Investment has decreased
- D. Investment could have either increased or decreased

**Answer: A.**

In general, $\Delta Y = \dfrac{\Delta G + \Delta I}{1-MPC}$, where $\Delta I$ is the change in investment caused by the interest-rate response. If $Y$ rose by exactly $\dfrac{\Delta G}{1-MPC}$, then $\Delta I = 0$, so the interest rate did not move (for example the central bank accommodates, or $LM$ is flat).

![[PP06_q13_crowding_out.png|640]]

*Left: an upward $LM$ means $r$ rises, [[Crowding Out]] cuts $I$, and $Y$ rises by less than the multiplier. Right: with $r$ unchanged the full Keynesian-cross multiplier is realised.*

> [!warning] Why the other options are wrong
> - **B (increased):** a rise in $I$ would push $Y$ **above** $\Delta G/(1-MPC)$. A fiscal expansion cannot lower $r$ on its own.
> - **C (decreased):** the usual case, but then $Y$ would rise by **less** than the multiplier.
> - **D (either):** the exact value pins down $\Delta I = 0$.

> [!tip] 🗣️ In plain English
> Normally the government **soaks up savings and pushes interest rates up**, which squeezes out private investment and the boost is smaller. If income rose by the **full textbook multiplier**, nothing can have been squeezed out, so **investment did not change**.

---

## Q14 — Bond sell-off

**Question.** When traders massively sell bonds, the interest rate ______, which shifts the ______ curve to the left.

- A. rises, LM
- B. falls, LM
- C. rises, IS
- D. falls, IS

**Answer: A.**

Heavy bond selling pushes bond prices **down**, so yields (the interest rate) **rise**. Traders are swapping bonds for cash, so **money demand rises**. At each income level a higher $r$ is needed to keep the money market in equilibrium, so the [[LM Curve]] shifts **left**.

> [!warning] Why the other options are wrong
> - **B and D:** falling prices of bonds mean rising, not falling, yields.
> - **C and D (IS):** the IS curve describes goods-market equilibrium, which is not what a portfolio shift between bonds and cash changes. Also, an IS shift to the left would *lower* $r$.

> [!tip] 🗣️ In plain English
> Everyone dumping bonds for cash makes **bonds cheaper, so their yield (the interest rate) goes up**. People wanting more cash is a **money-market** story, so the **LM** curve moves, not IS.

---

## Q15 — Why the AD curve slopes down (IS-LM)

**Question.** Based on the IS-LM model, what is the explanation for the downward slope of the AD curve?

- A. The interest rate effect
- B. The exchange rate effect
- C. The price effect
- D. All answers are correct

**Answer: A.**

In IS-LM: $P \uparrow \Rightarrow M/P \downarrow \Rightarrow LM$ shifts left $\Rightarrow r \uparrow \Rightarrow I \downarrow \Rightarrow Y \downarrow$. This is the **interest-rate effect**, and it is what gives the [[Aggregate Demand Curve]] its negative slope.

> [!warning] Why the other options are wrong
> - **B:** the exchange-rate effect (higher $P$ appreciates the currency and lowers net exports) appears in the *open-economy* derivation of AD, not in closed-economy IS-LM.
> - **C:** "the price effect" is not a mechanism in this course.
> - **D:** so not all are correct.

> [!tip] 🗣️ In plain English
> A higher price level **shrinks the real value of the money supply**, which pushes **interest rates up**, which **discourages investment** and lowers output. That is why demand falls as prices rise.

---

## Q16 — Free capital mobility

**Question.** When residents of a small economy can freely save their funds abroad or borrow funds from abroad then

- A. When domestic interest rate is lower than the world interest rate, net capital outflow increases
- B. When domestic interest rate is higher than the world interest rate, net capital outflow increases
- C. Real exchange rate is 1 in the short run.
- D. Domestic price level equals the world price level

**Answer: A.**

With perfect [[Capital Mobility]], if $r < r^*$ residents earn more by lending abroad, so net capital outflow rises, driving $r$ back up to $r^*$.

> [!warning] Why the other options are wrong
> - **B:** reversed. If $r > r^*$ foreign funds flow **in**, outflow falls.
> - **C and D:** capital mobility concerns financial assets, not goods. It does not force purchasing-power parity, so the real exchange rate need not equal 1 and price levels may differ.

> [!tip] 🗣️ In plain English
> If you can **earn more abroad than at home**, you send your savings abroad. That outflow continues until the home rate is pushed back to the **world rate**.

---

## Q17 — What depreciates the currency (floating)

**Question.** In a small open economy with a floating exchange rate, the exchange rate will depreciate if:

- A. Taxes are raised
- B. government spending is increased
- C. Taxes are cut
- D. the money supply is decreased

**Answer: A.**

Under floating rates ([[Mundell-Fleming Model]]), higher taxes reduce consumption and shift $IS^*$ **left**. $LM^*$ is vertical, so $Y$ is unchanged and the exchange rate **falls** (depreciates).

> [!warning] Why the other options are wrong
> - **B and C:** both shift $IS^*$ **right**, so the currency **appreciates**.
> - **D:** a lower money supply shifts $LM^*$ left, raising $e$ (appreciation) and lowering $Y$.

> [!tip] 🗣️ In plain English
> Higher taxes mean **less spending at home**, so less demand for the currency to buy things with, and the currency **falls**. Output stays put because the money supply is what fixes it.

---

## Q18 — Horizontal $LM^*$ and import restrictions

**Question.** In the Mundell-Fleming model, suppose that the $LM^*$ is perfectly horizontal. This is consistent with a ______ exchange rate regime, which makes restrictions on import ______ policy in attempt to boost economic activity.

- A. Fixed, effective
- B. Fixed, ineffective
- C. Floating, effective
- D. Floating, ineffective

**Answer: A.**

A horizontal [[LM* Curve]] means the central bank adjusts $M$ to hold $e$ constant, which is a [[Fixed Exchange Rate]]. Import restrictions shift $IS^*$ right. Pressure to appreciate forces the central bank to expand $M$ to defend the peg, so $LM^*$ shifts right too, and $Y$ rises. Trade policy is **effective** under fixed rates.

> [!warning] Why the other options are wrong
> - **B:** fixed is right but fiscal and trade policy are effective under fixed rates (monetary policy is the one that is not).
> - **C and D:** a floating regime has a **vertical** $LM^*$. There, import restrictions shift $IS^*$ right but $e$ simply appreciates and $Y$ is unchanged, so floating makes them ineffective (D would be half right, but it contradicts the regime named by the horizontal $LM^*$).

> [!tip] 🗣️ In plain English
> A flat $LM^*$ means the central bank is **defending a fixed exchange rate**. When it has to **print money to hold the peg**, the trade restriction's boost to demand is not cancelled out, so it **works**.

---

## Q19 — Risk premium and income

**Question.** An increase in income generated by an increase in the country risk premium will not occur if there is a(n) ______ sufficient to offset the decline in the demand for money caused by the higher risk premium.

- A. increase in the price level caused by more expensive imports
- B. fall in the price level caused by less expensive imports
- C. decrease in government spending
- D. increase in the money supply

**Answer: A.**

A higher [[Country Risk Premium]] raises the domestic rate ($r = r^* + \theta$) and **depreciates** the currency. The higher $r$ lowers money demand, shifting $LM^*$ right and raising $Y$. But a depreciation makes **imports dearer**, so the domestic price level $P$ rises, $M/P$ falls and $LM^*$ shifts back **left**, offsetting the income gain.

> [!warning] Why the other options are wrong
> - **B:** depreciation makes imports more expensive, not cheaper. Also a fall in $P$ would raise $M/P$ and add to the expansion.
> - **C:** under floating rates $Y$ is set by $LM^*$. A cut in $G$ moves only $IS^*$ (and $e$), so it cannot cancel an $LM^*$-driven rise in $Y$.
> - **D:** more money shifts $LM^*$ further right, increasing $Y$ even more.

> [!tip] 🗣️ In plain English
> A scarier country means **higher interest rates and a weaker currency**, which would normally lift income. But a weak currency makes **imports costlier, so prices rise**, which eats into the money supply in real terms and **cancels the boost**.

---

## Q20 — Monetary expansion in a large open economy

**Question.** In a large open economy, monetary expansion increases output level in the short run due to

- A. Both the interest rate effect and the exchange rate effect
- B. Only the interest rate effect
- C. Only the exchange rate effect
- D. Neither the exchange rate effect nor the interest rate effect

**Answer: A.**

A [[Large Open Economy]] is a hybrid of the closed and small-open cases. Expansion lowers $r$, which raises $I$ (interest-rate channel). Lower $r$ relative to the world also causes capital outflow and a depreciation, which raises net exports (exchange-rate channel). Both boost $Y$.

> [!warning] Why the other options are wrong
> - **B:** is the closed-economy story. It ignores the exchange-rate channel.
> - **C:** is the small-open-economy story. Here the interest rate falls too, because the economy is large enough to move $r$.
> - **D:** contradicts the fact that output rises.

> [!tip] 🗣️ In plain English
> More money **lowers interest rates**, so firms invest more, **and** the cheaper currency makes our goods more competitive abroad. A large economy gets **both boosts**.

---

## Q21 — Preference shift towards foreign cars

**Question.** The introduction of a stylish new line of Toyotas, which makes some consumers prefer foreign cars over domestic cars, will, according to the Mundell-Fleming model with floating exchange rates, lead to:

- A. no change in income or net exports.
- B. a fall in income and net exports.
- C. a fall in income but no change in net exports.
- D. no change in income but a fall in net exports.

**Answer: A.**

Net exports fall at every exchange rate, so $IS^*$ shifts **left**. With floating rates and a vertical $LM^*$, $Y$ is unchanged and $e$ **depreciates**. The depreciation makes domestic goods cheaper and restores the original level of $NX$. Since $Y$, $C$, $I$ and $G$ are all unchanged, the national income identity forces $NX$ to be unchanged too.

> [!warning] Why the other options are wrong
> - **B and C:** a fall in $Y$ needs a shift in $LM^*$, and here it did not move.
> - **D:** $NX = Y - C - I - G$ (equivalently $S - I$). With nothing else changing, $NX$ cannot change.

> [!tip] 🗣️ In plain English
> People want foreign cars, so the **currency weakens**. A weaker currency makes our products attractive again, and in the end **income and trade balance are exactly where they started**. The only thing that moved is the exchange rate.

---

## Q22 — Unexpected monetary expansion

**Question.** Starting from long-run equilibrium at A with output equal to $\bar{Y}$ and the price level equal to $P_1$, if there is an unexpected monetary expansion that shifts aggregate demand from $AD_1$ to $AD_2$, then the equilibrium

- A. will change to E in the short run, reflecting money non-neutrality, and C in the long run, reflecting money neutrality
- B. will change to E in the short run, reflecting money neutrality, and C in the long run, reflecting money non-neutrality
- C. will change to C in the short run, reflecting money non-neutrality, and E in the long run, reflecting money neutrality
- D. will change to C in the short run, reflecting money neutrality, and E in the long run, reflecting money non-neutrality

**Answer: A.**

The expansion is unexpected, so $P^e = P_1$ and the $SRAS$ curve ($AS_1$) does not move at first. $AD_2$ meets $AS_1$ at **E**, where $Y > \bar{Y}$ and $P$ is higher. Output moves in response to a nominal change, so money is **non-neutral** in the short run.

Later, expectations catch up, $P^e$ rises and $SRAS$ shifts up. The economy settles where $AD_2$ meets $LRAS$ at **C**: $Y=\bar{Y}$, only $P$ is permanently higher ([[Money Neutrality (LR)]]).

![[PP06_q22_unexpected_money.png|640]]

*Simplified redrawing of the exam diagram (the original also shows $AD_3$, $AS_3$ and points B, D, F, G, which are not needed). E is on $AD_2$ and $AS_1$; C is on $AD_2$ and $LRAS$.*

> [!warning] Why the other options are wrong
> - **B:** has the neutrality labels the wrong way round. Moving $Y$ in the SR is non-neutrality.
> - **C and D:** C is on $LRAS$, so it can only be the long-run point, never the short-run one.

> [!tip] 🗣️ In plain English
> Surprise money creation **boosts output for a while** because prices and expectations are slow to adjust (point E). Once everyone catches on, **only prices end up higher** and output goes back to normal (point C).

---

## Q23 — Why SRAS slopes upward

**Question.** A possible reason that the AS slopes upward in the short run, and is not perfectly horizontal, is that

- A. Some of the firms' prices are flexible
- B. Price expectations could differ from actual prices in the short run
- C. Price expectations could differ from actual prices in the long run
- D. When output exceeds its normal rate some of the firms cannot respond by raising their prices as they would like to

**Answer: A.**

In the [[Sticky-Price Model]], a fraction of firms have flexible prices and adjust right away, and the rest are sticky. If **all** prices were sticky, $SRAS$ would be horizontal. The flexible-price firms raise prices when demand rises, so the average price level rises a little and the curve slopes up. More flexible firms mean a steeper [[SRAS Curve]].

> [!warning] Why the other options are wrong
> - **B:** this is a real driver of the SRAS equation $P = P^e + (Y-\bar{Y})/\alpha$ and is the closest competitor to A. But the question contrasts "upward-sloping" with "perfectly horizontal", which is the sticky-versus-flexible distinction, and the key chooses A. If your lecturer's notes frame B as correct, note the ambiguity.
> - **C:** in the long run expectations adjust and $LRAS$ is vertical, so this does not explain a short-run slope.
> - **D:** firms that **cannot** raise prices make the curve **flatter**, not steeper. It is the opposite of what the question needs.

> [!tip] 🗣️ In plain English
> If **no one** could change prices, the curve would be flat. But **some firms do raise prices quickly** when demand picks up, so the price level creeps up and the curve tilts.

---

## Q24 — Inflation inertia in AS-AD

**Question.** To illustrate inflation inertia in an aggregate demand-aggregate supply model, the short-run aggregate supply curve shifts upward because of increases in ______, and the aggregate demand curve shifts upward because of increases in ______.

- A. the expected price level; the money supply
- B. the money supply; the expected price level
- C. output; the price level
- D. the price level; output

**Answer: A.**

With [[Inflation Inertia]], past inflation feeds expectations. Higher expected prices $P^e$ shift $SRAS$ up. To keep output from falling, the central bank expands the money supply, and since $AD$ depends on $M/P$, higher $M$ shifts $AD$ up. The two shifts keep prices rising period after period.

> [!warning] Why the other options are wrong
> - **B:** swaps the two. $M$ is a demand-side policy variable, not a shifter of $SRAS$.
> - **C and D:** changes in $Y$ or $P$ are **movements along** the curves, not shifts. $P$ and $Y$ are endogenous results, not shifters.

> [!tip] 🗣️ In plain English
> Workers **expect more inflation, so they push prices up** (supply shifts up). The central bank **keeps printing money to stop output falling** (demand shifts up), and inflation keeps rolling.

---

## Q25 — No long-run inflation-unemployment tradeoff

**Question.** The tradeoff between inflation and unemployment does not exist in the long run. It is implied by:

- A. the classical dichotomy.
- B. Okun's law.
- C. Phillips curve.
- D. the Fisher effect.

**Answer: A.**

The [[Classical Dichotomy]] says real variables such as unemployment are determined independently of nominal variables such as inflation in the long run. This implies a **vertical long-run Phillips curve** at the [[Natural Rate of Unemployment]]: higher inflation does not buy lower unemployment.

> [!warning] Why the other options are wrong
> - **B ([[Okun's Law]]):** links output gaps to unemployment, not to inflation.
> - **C ([[Phillips Curve]]):** is the **tradeoff itself** (short run), not the reason it disappears. The long-run version is the one that implies no tradeoff.
> - **D (Fisher effect):** links inflation to the nominal interest rate.

> [!tip] 🗣️ In plain English
> In the long run, **money and prices cannot change real things** like how many people have jobs. So pushing inflation up **does not permanently lower unemployment**.

---

## Recap table

| Q | Topic | Answer | One-line reason |
|---|---|---|---|
| 1 | Tax cut, classical | A | National saving falls by 120, so investment falls by 120 |
| 2 | Announced money growth | A | Expected inflation raises $i$ now, so money demand falls and $P$ jumps |
| 3 | Fisher | C | $\Delta i = \Delta\pi = 3\%$, the real rate does not move |
| 4 | Golden rule (AI-solved) | A | MPK above depreciation, so under-saving, raise $s$ |
| 5 | Solow growth rates (AI-solved) | A | $K$ grows at $n+g$, the rental price (MPK) is flat |
| 6 | Steady-state saving (AI-solved) | A | $s=(\delta+n+g)K/Y = 0.07 \times 2.5$ |
| 7 | Real wage growth (AI-solved) | A | $g = 5\% - 2\% = 3\%$ |
| 8 | Endogenous growth | A | Share of labor in universities $u$ |
| 9 | Drought | A | SR at B on $SRAS_1$, back to A |
| 10 | LR price level | A | $P = 4/3$, up 33.33% |
| 11 | Keynesian multiplier | A | Income to consumption to income feedback |
| 12 | Money and $i$ | A | Lower in SR (liquidity), higher in LR (Fisher) |
| 13 | Full multiplier in IS-LM | A | $\Delta I = 0$, no crowding out |
| 14 | Bond sell-off | A | Yield up, LM left |
| 15 | AD slope in IS-LM | A | Interest rate effect |
| 16 | Capital mobility | A | $r < r^*$ raises net capital outflow |
| 17 | Floating depreciation | A | Tax rise shifts $IS^*$ left |
| 18 | Horizontal $LM^*$ | A | Fixed regime, trade policy effective |
| 19 | Risk premium | A | Dearer imports raise $P$, cutting $M/P$ |
| 20 | Large open economy | A | Both interest-rate and exchange-rate channels |
| 21 | Foreign-car preference | A | $Y$ and $NX$ both unchanged |
| 22 | Unexpected money | A | E in SR, C in LR |
| 23 | Upward SRAS | A | Some flexible-price firms |
| 24 | Inflation inertia | A | $P^e$ shifts SRAS, $M$ shifts AD |
| 25 | No LR tradeoff | A | Classical dichotomy |

## Related notes

- [[Macro-Economics II]] (hub)
- [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]]
- [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]
