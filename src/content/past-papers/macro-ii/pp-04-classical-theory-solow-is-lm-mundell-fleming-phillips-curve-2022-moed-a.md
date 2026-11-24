---
title: "Moed A 2022 — Worked Solutions"
topics: "Classical theory, Solow, IS-LM, Mundell-Fleming, Phillips curve"
type: past-paper
status: worked-solution
exam: "Moed A, 16 June 2022"
semester: 1
year: 2
course: "Macro-Economics II"
instructor: Dr. Alon Cohen
tags:
  - macro-economics-ii
  - past-paper
  - worked-solution
  - multiple-choice
  - ai-solved
  - classical-theory
  - solow-growth
  - is-lm
  - mundell-fleming
  - phillips-curve
aliases:
  - Macro II Moed A 2022
  - PP04 Macro II
subject: macro-ii
in_scope: true
---

# Moed A 2022 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed A, 16 June 2022** (Reichman University, Tiomkin School of Economics) | Macroeconomics II 3058 | Dr. Alon Cohen | 25 multiple-choice questions, 4% each, 2.5 hours, open books, simple calculator
> Key concepts: [[Loanable Funds Market]], [[Quantity Theory of Money]], [[Velocity of Money]], [[Fisher Effect]], [[Classical Dichotomy]], [[Keynesian Cross]], [[Inventory Adjustment]], [[Liquidity Preference]], [[IS-LM Equilibrium]], [[AD-AS Model]], [[Mundell-Fleming Model]], [[Fixed Exchange Rate]], [[Floating Exchange Rate]], [[Large Open Economy]], [[Sticky-Price Model]], [[Phillips Curve]], [[Hysteresis]]
> Builds on: [[Lec_03-Classical Theory & National Income]], [[Lec_05-Inflation]], [[Lec_06-AS-AD Model & Economic Fluctuations]], [[Lec_07-Aggregate Demand I & the IS-LM Model]], [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]], [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]], [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!warning] AI-written answers, not official. Check before relying on them.
> **All 25 questions (Q1 to Q25) are AI-solved.** There is no official key for this sitting, and the paper is **not a tofes 0 paper** (its header says nothing about tofes 0, and in the keyed 2022 Moed B paper the official answer is *not* always the first option). So the "answer printed first" cross-check does not apply, and every answer below stands on its own working, with a confidence level per question.
> Q5 to Q9 (Solow growth) have **no lecture deck** in this vault, so those rest on standard Solow results rather than on a lecture note.

> [!info] Yellow highlights in the source PDF
> The question PDF carries yellow highlighting on one option per question. Its author is unknown, so it is **not treated as an official key**. For transparency: the highlighted options agree with the answers worked out below on all 25 questions. I saw the highlights while reading the pages, so the working below is not fully blind. Each answer is nonetheless derived from the model, not copied from the highlight.

> [!bug] Two wording problems in the paper itself
> - **Q11**: options A and B are word-for-word identical (both correct). Pick either.
> - **Q15**: "be only inflationary" is loose, since the interest rate also rises in the long run. It is still the best of the four.

## What this paper tests

| Questions | Topic | Lecture |
|---|---|---|
| Q1, Q3 | Classical loanable funds, saving shocks, Fisher effect | [[Lec_03-Classical Theory & National Income\|Lec 03]], [[Lec_05-Inflation\|Lec 05]] |
| Q2, Q4 | Quantity theory, velocity, expected future money | [[Lec_05-Inflation\|Lec 05]] |
| Q5 to Q9 | Solow growth: golden rule, steady state, factor prices | No lecture deck (Ch 8-9) |
| Q10, Q22, Q23 | AD-AS, velocity shock, sticky prices, policy and inflation | [[Lec_06-AS-AD Model & Economic Fluctuations\|Lec 06]], [[Lec_14-Aggregate Supply & the Phillips Curve\|Lec 14]] |
| Q11 to Q14 | Keynesian cross, LM curve, money transmission, IS-LM numbers | [[Lec_07-Aggregate Demand I & the IS-LM Model\|Lec 07]], [[Lec_08-Aggregate Demand II & Applying the IS-LM Model\|Lec 08]] |
| Q15 | IS-LM to the long run | [[Lec_08-Aggregate Demand II & Applying the IS-LM Model\|Lec 08]] |
| Q16 to Q21 | Mundell-Fleming: small open, fixed and floating, large open economy | [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model\|Lec 09]] |
| Q24, Q25 | Phillips curve, hysteresis | [[Lec_14-Aggregate Supply & the Phillips Curve\|Lec 14]] |

**Answer sheet (AI-solved)**

| Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | B | A | B | C | B | A | D | C | C | A | A | C | B |
| Confidence | High | High | High | Med-high | High | High | High | High | Medium | Med-high | High | High | Med-high |

| Q | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ans | C | A | B | C | C | B | B | C | B | A | D | B |
| Confidence | High | Medium | High | High | Med-high | High | Med-high | High | Med-high | Med-high | High | High |

---

## Q1 — The classical loanable funds market

Consider the market of goods and services and the market of loanable funds under the classical theory.

- A. Both markets are cleared by the interest rate: the higher it is, the lower is the overall output level, Y
- B. Both markets are cleared by the interest rate, but overall output Y is not affected by it
- C. Higher government deficit increases interest rate, increases the quantity of loanable funds, national investments, and overall output level Y.
- D. Higher government deficit increases interest rate, lowers the quantity of loanable funds, national investments, and overall output level Y.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: high)

In the classical model output is fixed by the production function, $Y = F(\bar{K}, \bar{L})$. The interest rate $r$ then adjusts so that saving equals investment, $S(r) = I(r)$, which is the same as clearing the goods market, because $Y = C + I + G$ and $S = Y - C - G$. So $r$ clears **both** markets, but it has **no effect on $Y$**.

> [!bug] Why the wrong options fail
> - **A** makes output depend on $r$. In the classical model $Y$ is set on the supply side.
> - **C** has a deficit raising investment and output. A deficit lowers public saving, shifting loanable-funds supply left, so $r$ rises and investment **falls** (crowding out). $Y$ does not move.
> - **D** gets the rise in $r$ and the fall in investment right, but wrongly says $Y$ falls. $Y$ is unchanged.

> [!tip] 🗣️ In plain English
> In the **classical** world, output is decided by how much capital and labour you have, not by the interest rate. The **interest rate** just balances saving and investment. A bigger deficit pushes the rate up and crowds out **investment**, but it leaves total output alone.

---

## Q2 — Quantity theory with accelerating velocity

According to the quantity theory of money, if money is growing at a 10 percent rate and real output is growing at a 3 percent rate, but velocity is growing at increasingly faster rates over time as a result of financial innovation, the rate of inflation must be

- A. increasing.
- B. decreasing.
- C. constant.
- D. 7%.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: A (confidence: high)

From $MV = PY$, in growth rates:

$$\pi = m + \Delta v - g$$

where $\Delta v$ is velocity growth. With $m = 10\%$ and $g = 3\%$ fixed, $\pi = 7\% + \Delta v$. Velocity growth is itself rising over time, so $\pi$ rises over time.

> [!bug] Why the wrong options fail
> - **B** has the sign backwards: extra velocity growth adds to inflation.
> - **C** needs $\Delta v$ constant.
> - **D (7%)** is the textbook answer only when velocity is **constant** ($\Delta v = 0$). Here it is not, and it is accelerating, so inflation is above 7% and climbing.

> [!tip] 🗣️ In plain English
> If the same money changes hands faster and faster, prices get pushed up by more and more. So inflation isn't stuck at **7%**, it keeps **climbing**.

---

## Q3 — A tax break on saving: money growth and nominal rates

The government implemented a tax relief on long-term savings, which lowered households' consumption. Under the classical theory, if the Central Bank will

- A. keep the same money growth rate, nominal interest rate could remain unchanged.
- B. lower the money growth rate, nominal interest rate will necessarily fall.
- C. lower the money growth rate, nominal interest rate will necessarily rise.
- D. lower the money growth rate, nominal interest rate could remain unchanged.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: high)

Use the Fisher equation, $i = r + \pi$.

1. Lower consumption means higher private saving, so national saving $S$ rises. Loanable-funds supply shifts right and the **real rate $r$ falls**. (Output is fixed, so this is the only real effect.)
2. With constant velocity and fixed output, $\pi = m - g$. Cutting money growth $m$ **lowers $\pi$**.

Both $r$ and $\pi$ fall, so $i = r + \pi$ **must fall**.

> [!bug] Why the wrong options fail
> - **A** keeps $m$ (so $\pi$) unchanged, but $r$ still falls, so $i$ falls. It cannot "remain unchanged".
> - **C** has $i$ rising. Neither component rises.
> - **D** is right that $m$ falls but wrong that $i$ could stay put: both pieces of $i$ move down together, so there is no offsetting force.

> [!tip] 🗣️ In plain English
> The tax break means more **saving**, so the **real interest rate** drops. Slower money growth also drops **inflation**. The **nominal rate** is real rate plus inflation, so with both falling it has to fall.

---

## Q4 — Announced versus actual money growth

Under the classical theory, if the Fed presently increases M, or, alternatively, declares it will increase M next year, then both options bear opposite effects over current prices.

- A. True. Increasing M at the present will proportionally increase prices, whereas a mere declaration of future increase of M will decrease current prices.
- B. True. Increasing M at the present will proportionally decrease prices, whereas a mere declaration of future increase of M will increase current prices.
- C. False. In both cases current prices will rise.
- D. False. Increasing M at the present will proportionally increase prices, whereas a mere declaration of future increase of M will not affect current prices.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: C (confidence: medium-high)

Money market equilibrium is $M/P = L(r + E\pi, Y)$ with $r$ and $Y$ fixed.

- **Increase $M$ now:** real money demand is unchanged, so $P$ rises in proportion to $M$.
- **Announce an increase next year:** expected inflation $E\pi$ rises today, which raises the nominal rate $i = r + E\pi$ and **lowers money demand today**. At the current $M$ there is excess supply of money, people spend it, and $P$ **rises now**, before $M$ has moved. [[Lec_05-Inflation]] makes exactly this point.

So the effects are **not opposite**: both raise current prices.

> [!bug] Why the wrong options fail
> - **A and B** claim opposite effects. B also has a present increase in $M$ lowering prices, which breaks the quantity theory.
> - **D** has the present increase right but says the announcement has no effect. It works through expected inflation and the nominal rate.

> [!tip] 🗣️ In plain English
> Prices don't wait for the printing press. If everyone **expects** more money next year, they expect more **inflation**, hold less cash today and spend it, so prices go up now too.

---

## Q5 — The saving rate at the golden rule

Under Solow growth model with no technological innovation, assume that consumption is maximized, $\delta = 0.04$ and $n = 0.01$. Income per worker is given by $k^{0.5}$. What is the saving rate $s$?

- A. 0.1
- B. 0.5
- C. 0.05
- D. 0.25

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes: Solow growth (Ch 8-9) has no lecture deck, so this uses the standard golden-rule result.

> [!success] Answer: B, $s = 0.5$ (confidence: high)

Consumption is maximised at the **golden rule**, where the marginal product of capital equals the break-even rate:

$$MPK = \delta + n$$

With $f(k) = k^{0.5}$, $MPK = 0.5\,k^{-0.5}$:

$$0.5\,k^{-0.5} = 0.05 \;\Rightarrow\; k^{0.5} = 10 \;\Rightarrow\; k^* = 100,\; y^* = 10$$

In steady state saving equals break-even investment, $s\,y^* = (\delta + n)\,k^*$:

$$s = \frac{(0.05)(100)}{10} = 0.5$$

> [!example] Shortcut
> For Cobb-Douglas $y = k^{\alpha}$ the golden-rule saving rate is $s_{gold} = \alpha = 0.5$, independent of $\delta$ and $n$.

> [!bug] Why the wrong options fail
> - **A (0.1) and C (0.05)** come from mixing up $\delta + n = 0.05$ with the saving rate.
> - **D (0.25)** is the golden-rule rate for $\alpha = 0.25$, as in a different exercise. Here $\alpha = 0.5$.

> [!tip] 🗣️ In plain English
> To get the **most consumption** forever, a Cobb-Douglas economy saves a share equal to capital's exponent, here **half** its income.

---

## Q6 — Output per worker growth in steady state

In the Solow growth model, an economy in the steady state with a population growth rate of $n$ but no technological growth will exhibit a growth rate of output per worker at rate:

- A. $0$
- B. $n$
- C. $\delta$
- D. $n + \delta$

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes (no Solow deck).

> [!success] Answer: A (confidence: high)

In the steady state, capital per worker $k^*$ is constant, so output per worker $y^* = f(k^*)$ is constant. **Total** output grows at $n$, but **per worker** output grows at $0$.

> [!bug] Why the wrong options fail
> - **B ($n$)** is the growth of total $Y$ and $K$, not of $Y/L$.
> - **C ($\delta$) and D ($n + \delta$)** are the break-even investment rate, not a growth rate of anything per worker.

> [!tip] 🗣️ In plain English
> Without new technology, the economy settles where capital per worker **stops rising**, so output per worker is **flat**. The economy as a whole grows with the population, but each person doesn't get richer.

---

## Q7 — The only source of persistent growth in living standards

According to the Solow model, persistently rising living standards (income per person) can only be explained by:

- A. population growth
- B. population growth and capital accumulation
- C. high saving rates
- D. technological progress

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes (no Solow deck).

> [!success] Answer: D (confidence: high)

Diminishing returns to capital mean more saving or capital only raises the **level** of income per person for a while, until a new steady state is reached. Population growth actually spreads capital thinner. Only **technological progress** ($g > 0$) lets $y = Y/L$ grow forever.

> [!bug] Why the wrong options fail
> - **A and B** include population growth, which lowers steady-state income per worker.
> - **C** a higher saving rate gives a one-time rise in the level, then growth returns to its old rate.

> [!tip] 🗣️ In plain English
> Saving more or adding people only gets you to a **higher plateau**. To keep climbing forever you need better **technology**.

---

## Q8 — Factor price growth rates

Solow's growth theory suggests that real wage grows at the rate of ___, and the real rental price grows at the rate of ___.

- A. technological innovation $g$; technological innovation $g$
- B. technological innovation $g$, population growth $n$
- C. technological innovation $g$, 0
- D. 0, population growth $n$

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes (no Solow deck).

> [!success] Answer: C (confidence: high)

With $Y = K^{\alpha}(EL)^{1-\alpha}$ and labour efficiency growing at $g$:

- Real wage $w = MPL = (1-\alpha)\,Y/L$. In steady state $Y/L$ grows at $g$, so **$w$ grows at $g$**.
- Real rental price $R = MPK = \alpha\,Y/K$. In steady state $Y$ and $K$ both grow at $n + g$, so $Y/K$ is constant and **$R$ grows at 0**.

> [!bug] Why the wrong options fail
> - **A** gives capital's price growth $g$. $Y/K$ is constant, so $R$ is flat.
> - **B and D** bring in $n$, but $n$ affects only the level of factor prices (through $k^*$), not their growth rates.

> [!tip] 🗣️ In plain English
> Workers get more productive over time, so **wages** rise at the pace of technology. Capital doesn't get more productive per unit, so its **rental price** stays put.

---

## Q9 — Does capital accumulation give permanent growth?

Capital accumulation underlies Solow's permanent growth of the standard of living.

- A. True. Investment in capital increases the national income and income per person
- B. True, but only if population grows as well, so that investment increases capital to equip new workers
- C. False. Investment in capital can underlie permanent growth only if investment exhibits constant returns to scale, which is not the case in Solow model
- D. False. Investment in capital can underlie permanent growth only if saving rate can be affected, which is not the case in Solow model

> [!warning] AI-written answer, not official. Check before relying on it. Outside the lecture notes (no Solow deck). Confidence is **medium** because option C is loosely worded.

> [!success] Answer: C (confidence: medium)

The statement is **false**. Capital has **diminishing returns**: each extra unit of capital per worker adds less output, so $sf(k)$ eventually only just covers break-even investment $(\delta + n)k$ and $k$ stops growing. Permanent growth would need capital's returns not to diminish (as in an AK model), which is not the Solow set-up. Option C says this, though "constant returns to scale" is sloppy: the Solow production function **is** constant returns in $K$ and $L$ together. The intended meaning is constant returns to **capital alone**.

> [!bug] Why the wrong options fail
> - **A** confuses a higher **level** with permanent **growth**.
> - **B** population growth makes things worse per worker, not better.
> - **D** the saving rate can be changed (policy, taxes), and changing it shifts only the level, not the long-run growth rate. So the stated reason is wrong.

> [!tip] 🗣️ In plain English
> Piling up machines helps at first, but each extra machine helps less than the last. Eventually growth **runs out of steam**, so capital alone can't deliver growth forever.

---

## Q10 — A fall in velocity and two central banks

Consider the AD-AS model with overall fixed prices in the short run. If Central Bank A cares only about keeping the price level stable and Central Bank B cares only about keeping output at its natural level, then in response to an exogenous decrease in the velocity of money:

- A. both Central Bank A and Central Bank B should increase the quantity of money.
- B. Central Bank A should increase the quantity of money whereas Central Bank B should keep it stable.
- C. Central Bank A should keep the quantity of money stable whereas Central Bank B should increase it.
- D. both Central Bank A and Central Bank B should keep the quantity of money stable.

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: A (confidence: medium-high)

From $MV = PY$, a fall in $V$ shifts **AD left**. With sticky prices, output falls below $\bar{Y}$. Leaving $M$ alone lets prices fall over time to restore $\bar{Y}$ (self-correction, per [[Lec_06-AS-AD Model & Economic Fluctuations]]).

- **Bank B (output):** raise $M$ to shift AD back to its old position, so $Y = \bar{Y}$ immediately.
- **Bank A (price level):** if $M$ is left alone, the price level must **fall** to restore $\bar{Y}$. To keep it from moving, AD must be put back, which also needs a rise in $M$ offsetting the drop in $V$.

Offsetting the fall in $V$ with higher $M$ keeps $MV$ constant, so both goals are served by the same action.

> [!bug] Why the wrong options fail
> - **B** says Bank B does nothing, but then output stays below $\bar{Y}$ until prices fall.
> - **C** says Bank A does nothing, but then the price level has to fall.
> - **D** leaves the demand shock to play out, hurting both goals.

> [!tip] 🗣️ In plain English
> If people spend each dollar more slowly, total spending drops. Printing **more money** makes up the difference, which keeps both **output** and the **price level** where they were.

---

## Q11 — Keynesian cross at Y₃

Consider the following Keynesian Cross (planned expenditure PE against income Y, with the 45-degree actual-expenditure line; the lines cross at $Y_2$, and $Y_3 > Y_2$). Suppose that the output level is $Y_3$. The market for goods and services will converge to equilibrium due to

- A. unexpected increase of inventory, which will induce firm to slow down production rate
- B. unexpected increase of inventory, which will induce firm to slow down production rate
- C. a fall in the price level, which will increase planned expenditure
- D. a rise in the price level, which will decrease planned expenditure

*The graph (read from the PDF): the 45-degree actual-expenditure line and a flatter planned-expenditure line starting at $PE_1$ on the vertical axis. They cross at $(Y_2, PE_2)$. At $Y_3$, actual expenditure is $PE_4$ and planned expenditure is $PE_3 < PE_4$.*

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: A (B is identical and equally correct; confidence: high)

At $Y_3$, actual expenditure (= output) $PE_4$ exceeds planned expenditure $PE_3$. The gap is **unplanned inventory investment**: goods produced but not sold. Firms respond by cutting production, so $Y$ falls towards $Y_2$, where actual equals planned. See [[Lec_07-Aggregate Demand I & the IS-LM Model]].

![[PP04_q11_keynesian_cross_y3.png|640]]

*At $Y_3$ firms are producing more than is being bought. The unsold stock piles up and output is cut until $Y_2$.*

> [!bug] Why the wrong options fail
> - **B** is a duplicate of A (a typo in the paper). It is correct too.
> - **C and D** bring in the price level. The Keynesian cross holds prices fixed, so convergence works through inventories and output, not prices.

> [!tip] 🗣️ In plain English
> If firms make more than people plan to buy, **unsold stock** builds up. They respond by **producing less**, and output slides down to the point where output equals planned spending.

---

## Q12 — Why a higher income raises the interest rate (LM)

The LM curve suggests that if income rises interest rate must rise, due to

- A. a decrease in M
- B. an increase of P
- C. the sale of bonds triggered by excess demand for money
- D. the purchase of bonds triggered by excess supply of money

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: C (confidence: high)

Along the LM curve $M$ and $P$ are fixed. Higher income raises money demand $L(r, Y)$, so there is **excess demand for money**. People sell bonds to get cash, bond prices fall, and the **interest rate rises** until money demand equals the fixed supply again.

> [!bug] Why the wrong options fail
> - **A and B** change the real money supply, which **shifts** LM. The question asks about movement **along** LM.
> - **D** has the process in reverse: an excess supply of money would push $r$ down.

> [!tip] 🗣️ In plain English
> Richer people want to hold **more cash**. To get it they sell bonds, which pushes the **interest rate** up.

---

## Q13 — How monetary expansion raises output in a closed economy

In a closed economy in the short run, the Central Bank's ability to boost output level Y by expanding M is enabled primarily by

- A. the fact that when real balances increase, price level falls and so the demand for goods and services rises
- B. the effect of the interest rate on investments
- C. an increase in the planned expenditure, which lowers the inventory and induces firms to produce more
- D. a rightward shift of the IS and AD curves

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: medium-high)

The transmission mechanism is: higher $M$ means higher real balances $M/P$ (with $P$ fixed in the short run), the LM curve shifts right, the **interest rate falls**, **investment rises**, and so does $Y$ (via the multiplier). The interest-rate-to-investment link is the channel that makes money matter for output. See [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]].

> [!bug] Why the wrong options fail
> - **A** is the price-level route behind the AD curve's slope. In the short run here prices are fixed.
> - **C** describes the Keynesian-cross adjustment *after* spending rises. It is a consequence, not the source: the source is the fall in $r$.
> - **D** money does not shift IS. It shifts LM (and AD). IS only moves with $G$, $T$ or autonomous spending.

> [!tip] 🗣️ In plain English
> More **money** pushes **interest rates** down. Cheaper borrowing makes firms **invest more**, and that lifts output.

---

## Q14 — An IS-LM calculation

If the IS curve is given by $Y = 1{,}700 - 100r$, the money demand function is given by $L = Y - 100r$, the money supply is 1,000, and the price level is 2, then if the money supply is raised to 1,200, equilibrium income rises by:

- A. 200 and the interest rate falls by 2 percent
- B. 100 and the interest rate falls by 1 percent
- C. 50 and the interest rate falls by 0.5 percent
- D. 200 and the interest rate remains unchanged

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: C (confidence: high)

LM: $M/P = Y - 100r$. IS: $Y = 1{,}700 - 100r$, i.e. $Y + 100r = 1{,}700$.

**Before** ($M/P = 1{,}000/2 = 500$): adding $Y - 100r = 500$ and $Y + 100r = 1{,}700$ gives $2Y = 2{,}200$, so

$$Y = 1{,}100,\qquad r = 6$$

**After** ($M/P = 1{,}200/2 = 600$): $2Y = 600 + 1{,}700 = 2{,}300$, so

$$Y = 1{,}150,\qquad r = 5.5$$

Income rises by **50** and the interest rate falls by **0.5 percentage point** (6% to 5.5%).

![[PP04_q14_is_lm_money_expansion.png|640]]

*LM shifts right by 100 at each $r$; equilibrium moves down the IS curve from (1,100; 6%) to (1,150; 5.5%).*

> [!bug] Why the wrong options fail
> - **A and D** treat the 200 rise in $M$ as a 200 rise in $Y$. It is $M/P$ that matters (a 100 rise), and the IS curve absorbs half of the shift.
> - **B** is the 100 horizontal shift of the LM curve itself, not the new equilibrium: the downward-sloping IS curve means $Y$ rises by only half of that.
> - **D** also wrongly keeps $r$ constant, but with a downward-sloping IS curve, $r$ must fall for $Y$ to rise.

> [!tip] 🗣️ In plain English
> More money in real terms pushes the LM curve out by 100, but because **IS slopes down** it only lets income rise by **50**, with the interest rate dipping by half a point.

---

## Q15 — Fiscal expansion from point B, long run

Consider a closed economy with a vertical LRAS at $\bar{Y}$ and IS-LM curves. Suppose that the economy is at equilibrium point B. Fiscal expansion, in the long run, will

- A. be only inflationary
- B. increase both output and interest rate
- C. increase output, interest rate and prices
- D. not change anything in the economy

*The graph (read from the PDF): $A = IS_1 \cap LM_1$ (left of LRAS), $B = IS_1 \cap LM_2$ (on LRAS), $C = IS_2 \cap LM_1$ (on LRAS, higher $r$), $D = IS_2 \cap LM_2$ (right of LRAS).*

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: A (confidence: medium, because of the loose wording)

Fiscal expansion shifts IS from $IS_1$ to $IS_2$.

1. **Short run:** economy moves from B to D. Income rises above $\bar{Y}$ and $r$ rises.
2. **Long run:** $Y > \bar{Y}$ pushes the price level **up**. Real balances $M/P$ fall, so LM shifts **left** from $LM_2$ to $LM_1$, to point **C**.

At C output is back at $\bar{Y}$, so there is **no real output effect**. The price level is higher, and $r$ is higher than at B (investment is fully crowded out by the extra $G$). Of the four options, "only inflationary" is closest: the lasting effect is on **prices** (with the interest rate also higher), not on output.

![[PP04_q15_fiscal_expansion_long_run.png|640]]

*B to D is the short-run effect of the IS shift. D to C is the long-run correction as rising prices shift LM left. Output ends at the same $\bar{Y}$, with higher $r$ and $P$.*

> [!bug] Why the wrong options fail
> - **B and C** say output rises. In the long run output is pinned at $\bar{Y}$ by LRAS.
> - **D** says nothing changes, but $P$ and $r$ are both higher at C than at B.

> [!tip] 🗣️ In plain English
> Extra government spending gives a **short boost**, but the economy is already at full capacity in the long run, so the boost gets eaten up by **higher prices**. Output ends up where it started.

---

## Q16 — How monetary policy works in a small open economy

In a small open economy, the ability to stimulate the economy via monetary policy is enabled through

- A. lowering the interest rate, which increases investments
- B. devaluating domestic currency, which increases net export
- C. appreciating domestic currency, which increases net export
- D. affecting consumption preferences of households

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: high)

Under floating rates a small open economy has $r = r^*$, so monetary policy **cannot** move the interest rate. Instead, expanding $M$ shifts $LM^*$ right, the currency **depreciates** (lower $e$), net exports rise, and $Y$ increases. See [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]].

> [!bug] Why the wrong options fail
> - **A** is the closed-economy channel. In a small open economy $r$ is pinned at $r^*$.
> - **C** a monetary expansion depreciates the currency, and an appreciation would **lower** net exports.
> - **D** monetary policy does not work through consumption preferences.

> [!tip] 🗣️ In plain English
> A small economy can't move its own **interest rate**, so printing money works by making the **currency weaker**. That makes exports cheaper and lifts demand.

---

## Q17 — Fiscal expansion under a fixed exchange rate

In a small open economy with a fixed exchange rate, if the government adopts an expansionary fiscal policy, in the new short-run equilibrium:

- A. income and the exchange rate will both rise
- B. the exchange rate will rise, but income will remain unchanged
- C. income will rise, but the exchange rate will remain unchanged
- D. both income and the interest rate will rise

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: C (confidence: high)

$IS^*$ shifts right, which would push the exchange rate up. To hold the peg the central bank must buy foreign currency and sell domestic currency, which **increases $M$** and shifts $LM^*$ right. The exchange rate stays at its fixed level and **income rises** (fiscal policy is effective under a peg). In [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]: $\Delta G > 0 \Rightarrow \Delta e = 0,\ \Delta Y > 0$.

> [!bug] Why the wrong options fail
> - **A and B** have the exchange rate moving. A peg means it cannot.
> - **B** also has income flat, the floating-rate result for fiscal policy.
> - **D** the interest rate is tied to $r^*$ in a small open economy.

> [!tip] 🗣️ In plain English
> With a **peg**, the central bank has to soak up the pressure on the currency, which ends up giving the economy extra money too. So government spending **works** at full strength, and the exchange rate doesn't move.

---

## Q18 — Solving a floating-rate Mundell-Fleming model

The LM curve for a small open economy with a floating exchange rate is $Y = 200r - 200 + 2(M/P)$, and the IS curve is $Y = 400 + 3G - 2T + 3NX - 200r$. $r$ is in percentage terms (so $r = 5\%$ gives $200r = 1{,}000$). $NX = 200 - 100e$, where $e$ is the nominal exchange rate. $P = 1$, $r^* = 2.5\%$, $M = 100$, $G = 100$, and the government runs a balanced budget. How many units of domestic output can one unit of foreign currency buy?

- A. 1
- B. 2
- C. 3
- D. 4

> [!warning] AI-written answer, not official. Check before relying on it. Confidence is **medium-high**: the arithmetic is firm, but the final step depends on the units convention for $e$ (see below).

> [!success] Answer: C, 3 (confidence: medium-high)

**Step 1: interest rate.** Small open economy, so $r = r^* = 2.5$, hence $200r = 500$.

**Step 2: income from LM.**

$$Y = 500 - 200 + 2(100/1) = 500$$

**Step 3: net exports from IS.** Balanced budget so $T = G = 100$:

$$500 = 400 + 3(100) - 2(100) + 3NX - 500 = 3NX$$

$$NX = \frac{500}{3} \approx 166.67$$

**Step 4: exchange rate.**

$$200 - 100e = 166.67 \;\Rightarrow\; e = 0.3333 = \tfrac{1}{3}$$

**Step 5: interpret.** In this course $e$ is the **nominal exchange rate in units of foreign currency per unit of domestic currency** ([[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]]). So one unit of domestic currency buys $1/3$ of a foreign unit, and one unit of foreign currency buys $1/e = 3$ units of domestic currency. With $P = 1$, that is **3 units of domestic output**.

> [!example] Check in Python
> `NX = 500/3 = 166.667`, `e = (200 - 166.667)/100 = 0.3333`, `1/e = 3.0`. Option C.

> [!bug] Why the wrong options fail
> - **A, B, D** (1, 2, 4) do not come from any consistent step. Note that $e = 1/3$ itself is not an option: the question asks for the inverse, $1/e$.

> [!tip] 🗣️ In plain English
> Pin down **interest rate**, then **income**, then **net exports**, and the exchange rate drops out as $1/3$. The question wants it the other way up, so one foreign unit buys **3** domestic ones.

---

## Q19 — Expected depreciation and today's exchange rate

In the Mundell-Fleming model, expectations that a currency will lose value in the future will cause the current exchange rate to:

- A. increase in the present
- B. decrease in the present
- C. remain constant in the present
- D. decrease only in the future

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: high)

If investors expect the currency to weaken, holding it is less attractive. They sell it now, which **lowers its value today**. Equivalent in the model: expected depreciation acts like a rise in the country risk premium, shifting $IS^*$ left and the exchange rate down. See [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]].

> [!bug] Why the wrong options fail
> - **A** has it backwards.
> - **C** ignores that expectations move exchange rates immediately.
> - **D** exchange rates are forward-looking asset prices, so the adjustment happens today, not just later.

> [!tip] 🗣️ In plain English
> If everyone thinks a currency will be **worth less soon**, they dump it now, and it **falls today**.

---

## Q20 — Monetary expansion in a large open economy

In a short-run model of a large open economy with a floating exchange rate, a monetary expansion causes a decrease in the interest rate and:

- A. the exchange rate but has no effect on income
- B. the exchange rate, and increases in income, net capital outflow, and net exports
- C. the exchange rate and net capital outflow, and increases in income and net exports
- D. net exports and net capital outflow, but increases in investment and income

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: medium-high)

Reading the stem as "a decrease in the interest rate and [a decrease in] ..." the large open economy chain is:

1. $LM$ shifts right, so the interest rate $r$ **falls**.
2. Lower $r$ raises net capital outflow ($NCO = S - I$, since domestic assets pay less), so the supply of domestic currency rises and the **exchange rate falls**.
3. Lower $e$ makes exports cheaper, so **net exports rise**.
4. Higher investment and net exports raise **income $Y$**.

So the exchange rate falls, while income, net capital outflow and net exports all **rise**.

> [!bug] Why the wrong options fail
> - **A** says no effect on income. Income rises.
> - **C** puts net capital outflow among the things that *decrease*. It increases when $r$ falls.
> - **D** has net exports falling. They rise when the currency depreciates. It also drops the exchange rate effect.

> [!tip] 🗣️ In plain English
> Lower **interest rates** send money abroad, which makes the **currency weaker**. A weaker currency boosts **exports**, so income goes up.

---

## Q21 — A fall in consumer confidence under floating rates

A fall in consumer confidence about the future, which induces consumers to spend less and save more, will, according to the Mundell-Fleming model with floating exchange rates, lead to

- A. a fall in consumption and income
- B. no change in consumption or income
- C. no change in income but a rise in net exports
- D. no change in income or net exports

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: C (confidence: high)

Lower consumption shifts $IS^*$ left. Under floating rates $LM^*$ is vertical (income set by $M/P$ and $r^*$), so income cannot change. Instead the **exchange rate falls**, which **raises net exports**. The fall in $C$ is exactly offset by the rise in $NX$. Income is unchanged.

> [!bug] Why the wrong options fail
> - **A** income does not fall: the exchange rate absorbs the shock.
> - **B** consumption does fall, since that is the shock itself.
> - **D** the currency depreciation raises net exports.

> [!tip] 🗣️ In plain English
> People spend less at home, but the **currency weakens**, so exports pick up the slack. Total **income** stays put.

---

## Q22 — What drives the slope of the sticky-price AS curve

According to the sticky-price model, the slope of the AS curve in the short run will positively depends on the

- A. fraction of fixed price firms
- B. fraction of flexible-price firms
- C. excess output, above its normal level
- D. price expectation

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B (confidence: medium-high)

With a fraction $s$ of sticky-price firms and $1-s$ flexible-price firms ([[Lec_14-Aggregate Supply & the Phillips Curve]]):

$$P = EP + \frac{(1-s)\,a}{s}\,(Y - \bar{Y})$$

The slope $\frac{(1-s)a}{s}$ rises with the share of **flexible** firms $(1-s)$ (and falls with the sticky share $s$). In the limit of all prices flexible ($s = 0$) the curve is vertical.

> [!bug] Why the wrong options fail
> - **A** is the opposite: more sticky firms flatten the curve.
> - **C** $Y - \bar{Y}$ is the variable you move **along** the curve, not what sets its slope.
> - **D** the expected price $EP$ **shifts** the curve, not its slope.

> [!tip] 🗣️ In plain English
> The more firms that can **change prices quickly**, the more any boost to demand shows up as **higher prices** rather than more output, so the supply curve gets **steeper**.

---

## Q23 — Which policy is more inflationary at the same output gain

Consider the AD-AS with upward sloping supply. Assuming that a monetary policy and fiscal policy lead exactly to the same output increase in the short-run, which one would be more inflationary?

- A. Both policies would be equally inflationary
- B. Fiscal policy
- C. Monetary policy
- D. None of the policies will be inflationary

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: A (confidence: medium-high)

Both policies work by shifting AD to the right. If they produce **the same output rise** along the **same SRAS curve**, they land on the same point on that curve, so the **price level rise is the same**. The difference between them (what happens to $r$, $I$ and $C$) does not change where on SRAS the economy ends up.

> [!bug] Why the wrong options fail
> - **B and C** need the two policies to reach different points on the same SRAS curve, which is impossible if output is the same.
> - **D** with upward-sloping SRAS any AD expansion raises $P$.

> [!tip] 🗣️ In plain English
> The supply curve alone decides how much of a given **output boost** turns into **higher prices**. If both policies give the same output, they give the same inflation.

---

## Q24 — Hysteresis: normal unemployment in period 3

The economy is in long-run equilibrium with $u^n = 4\%$. Normal unemployment displays hysteresis: $u^n_t = 0.5\,u_{t-1} + 0.5\,u_{t-2}$. The short-run Phillips curve is $\pi = \pi_{-1} - 0.4(u - u^n)$. The Fed lowers inflation by 2 points in period 1, then keeps inflation permanently at its new level. If the Fed does what is needed from period 1 on, the normal unemployment rate in period 3 is:

- A. 4
- B. 9
- C. 6.5
- D. 7.75

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: D, 7.75 (confidence: high)

Start with $u_0 = u_{-1} = u^n_0 = 4$.

**Period 1** (inflation falls by 2): $\pi_1 - \pi_0 = -2 = -0.4(u_1 - u^n_1)$, so $u_1 - u^n_1 = 5$.
$u^n_1 = 0.5(4) + 0.5(4) = 4$, hence $u_1 = 9$.

**Period 2** (inflation unchanged): $0 = -0.4(u_2 - u^n_2)$, so $u_2 = u^n_2$.
$u^n_2 = 0.5\,u_1 + 0.5\,u_0 = 0.5(9) + 0.5(4) = 6.5$, hence $u_2 = 6.5$.

**Period 3** (inflation unchanged): $u_3 = u^n_3$.
$$u^n_3 = 0.5\,u_2 + 0.5\,u_1 = 0.5(6.5) + 0.5(9) = 7.75$$

![[PP04_q24_hysteresis_path.png|640]]

*The 2-point disinflation costs 9% unemployment in period 1. Hysteresis then drags the normal rate up from 4 to 6.5 to 7.75.*

> [!bug] Why the wrong options fail
> - **A (4)** ignores hysteresis: the normal rate would stay put only if the economy never deviated.
> - **B (9)** is actual unemployment in period 1, not the normal rate in period 3.
> - **C (6.5)** is the normal rate in period 2. Period 3 needs one more averaging step.

> [!tip] 🗣️ In plain English
> Beating inflation costs a **deep slump** first (9% unemployment). Because the "normal" rate follows past unemployment, it **ratchets up** too, to **7.75%** by period 3, and doesn't come back on its own.

---

## Q25 — Cyclical unemployment needed to cut inflation by 5 points

Assume the Phillips curve $\pi = \pi_{-1} - 0.5(u - 0.06)$. How many percentage points of cyclical unemployment are needed to reduce inflation by 5 percentage points?

- A. 20
- B. 10
- C. 5
- D. 2.5

> [!warning] AI-written answer, not official. Check before relying on it.

> [!success] Answer: B, 10 (confidence: high)

Cyclical unemployment is $u - u^n = u - 0.06$. The change in inflation is $\pi - \pi_{-1} = -0.5(u - u^n)$. Setting this to $-5$ percentage points (with $u$ and $\pi$ in the same units, percentage points):

$$-5 = -0.5\,(u - u^n) \;\Rightarrow\; u - u^n = \frac{5}{0.5} = 10$$

Ten points of cyclical unemployment: the coefficient 0.5 means each point of unemployment cuts inflation by only half a point.

> [!bug] Why the wrong options fail
> - **A (20)** multiplies by the coefficient instead of dividing.
> - **C (5)** ignores the 0.5 and equates the two changes one for one.
> - **D (2.5)** multiplies $5 \times 0.5$.

> [!tip] 🗣️ In plain English
> Each extra point of unemployment only shaves **half a point** off inflation, so to cut inflation by 5 points you need **10 points** of extra unemployment. Painful.

---

## Recap table

| Q | Topic | Answer | Confidence |
|---|---|---|---|
| 1 | Classical loanable funds | B: $r$ clears both markets, $Y$ unaffected | High |
| 2 | Quantity theory, rising velocity | A: inflation increasing | High |
| 3 | Saving tax break, lower $m$ | B: $i$ necessarily falls | High |
| 4 | Announced vs actual $M$ | C: both raise current prices | Med-high |
| 5 | Golden-rule saving rate | B: $s = \alpha = 0.5$ | High |
| 6 | Steady-state growth per worker | A: zero | High |
| 7 | Persistent growth | D: technological progress | High |
| 8 | Factor price growth | C: wage $g$, rental price 0 | High |
| 9 | Capital and permanent growth | C: false, diminishing returns | Medium |
| 10 | Velocity fall, two central banks | A: both raise $M$ | Med-high |
| 11 | Keynesian cross at $Y_3$ | A (= B): inventory build-up | High |
| 12 | LM slope | C: bond sales, excess money demand | High |
| 13 | Money to output, closed economy | B: interest rate and investment | Med-high |
| 14 | IS-LM numbers | C: $Y$ +50, $r$ -0.5 | High |
| 15 | Fiscal expansion, long run | A: prices up, output unchanged | Medium |
| 16 | Monetary policy, small open | B: depreciation raises NX | High |
| 17 | Fiscal policy, fixed rate | C: $Y$ up, $e$ unchanged | High |
| 18 | M-F calculation | C: $e = 1/3$, so $1/e = 3$ | Med-high |
| 19 | Expected depreciation | B: falls now | High |
| 20 | Monetary expansion, large open | B: $e$ down; $Y$, NCO, NX up | Med-high |
| 21 | Consumer confidence, floating | C: $Y$ flat, NX up | High |
| 22 | Sticky-price slope | B: share of flexible firms | Med-high |
| 23 | Monetary vs fiscal inflation | A: equally | Med-high |
| 24 | Hysteresis | D: 7.75 | High |
| 25 | Phillips curve | B: 10 points | High |

## Related notes

- Hub: [[Macro-Economics II]]
- [[Lec_03-Classical Theory & National Income]], [[Lec_05-Inflation]], [[Lec_06-AS-AD Model & Economic Fluctuations]], [[Lec_07-Aggregate Demand I & the IS-LM Model]], [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]], [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]], [[Lec_14-Aggregate Supply & the Phillips Curve]]
