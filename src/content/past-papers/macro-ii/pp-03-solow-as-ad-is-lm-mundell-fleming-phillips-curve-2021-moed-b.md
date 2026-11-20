---
title: "Macro II Moed B 2021 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Moed B, 23 August 2021"
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
  - as-ad
  - is-lm
  - mundell-fleming
  - phillips-curve
aliases:
  - Macro II Moed B 2021
  - PP03 Macro II
  - Tofes 0 Moed B 2021
subject: macro-ii
in_scope: true
---

# Macro II Moed B 2021 — Worked Solutions

> Part of: [[Macro-Economics II]]
> **Moed B, 23 August 2021** — Macroeconomics II (3058), Dr. Alon Cohen. 25 multiple-choice questions, 4% each, open books, 2.5 hours.
> Builds on: [[Lec_03-Classical Theory & National Income]] · [[Lec_04-The Monetary System]] · [[Lec_05-Inflation]] · [[Lec_06-AS-AD Model & Economic Fluctuations]] · [[Lec_07-Aggregate Demand I & the IS-LM Model]] · [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] · [[Lec_09-The Open Economy Revisited & Mundell-Fleming Model]] · [[Lec_14-Aggregate Supply & the Phillips Curve]]

> [!warning] ALL 25 questions are AI-solved. There is no official key.
> This is a **tofes 0** paper (master version, correct answer printed first as A) and no key is in the source folder. I solved each question independently first, then compared with option A. **I got A on all 25**, but see the two flags below. Not official. Check before relying on it.
> - **Q4** (Solow, persistent growth): in the *no-technology* Solow model the textbook answer is "no" (option C). A is only right if you read the question as including technological progress. Flagged at the question.
> - **Q9** (Okun's Law): plugging the figures in literally gives a **4 point rise**, which is not an option. A (2.5) works only under the reading explained at the question.
> - **Q1-Q6** are **Solow growth** (Ch 8-9), which has **no lecture deck** in this course. Solved from the standard Solow model.

---

## What this paper tests

> [!info] The paper in one paragraph
> The first 6 questions are Solow growth, then the usual short-run machinery.
> 1. **Solow** (Q1-Q6): steady state with unemployment, saving rate, golden rule, growth in the steady state.
> 2. **AS-AD** (Q7-Q9, Q16, Q25): fixed-price AD-AS, Okun's Law, long-run monetary neutrality.
> 3. **Keynesian cross, IS-LM** (Q10-Q15, Q17): multiplier, liquidity preference, fixed M vs fixed r, balanced-budget change.
> 4. **Mundell-Fleming** (Q18-Q21): capital mobility, floating-rate policy, fixed-rate quota.
> 5. **Inflation and Phillips curve** (Q22-Q24): inertia, demand-pull vs cost-push, the unemployment-inflation trade-off.
>
> The recurring trick: **floating-rate M-F has a vertical LM\***, so fiscal and trade shocks only move the exchange rate (Q19, Q20).

---

## Q1 — Output per worker with unemployment (Solow)

> [!warning] AI-written answer, not official. Check before relying on it.
> Outside the lecture notes (Solow, Ch 8-9 has no deck). Consistent with the tofes 0 layout (answer printed first).

**Question.** Consider the Solow model with no technological progress and the production function $Y = \big((1-u)L\big)^{0.5}K^{0.5}$, where $Y$ is output, $L$ is the labor force, $u$ is the unemployment rate and $K$ is the capital. Depreciation is 10%, labor force growth is 2.5% and the saving rate is 25%. By how much will output per worker fall, in the steady state, if unemployment marginally rises?

- A. $2$
- B. $1$
- C. $2^{0.5}$
- D. $0.5$

> [!success] Answer: A (AI-solved)

Only the employed produce, so effective labor is $(1-u)L$. Per worker (of the labor force), with $k = K/L$:

$$y = \frac{Y}{L} = (1-u)^{0.5}\,k^{0.5}$$

**Steady state:** investment per worker equals break-even investment, $s\,y = (\delta + n)\,k$.

$$0.25\,(1-u)^{0.5}k^{0.5} = (0.10 + 0.025)\,k = 0.125\,k$$

$$k^{0.5} = 2\,(1-u)^{0.5} \;\Rightarrow\; k^* = 4(1-u), \qquad y^* = (1-u)^{0.5}\cdot 2(1-u)^{0.5} = 2(1-u)$$

So $\dfrac{dy^*}{du} = -2$: a marginal rise in $u$ lowers steady-state output per worker by **2** per unit.

- **B ($1$) and D ($0.5$).** Would need $y^* = (1-u)$ or $0.5(1-u)$, i.e. a saving rate of about 12.5% or 6%.
- **C ($2^{0.5}$).** Does not come out of the algebra. Holding $k$ fixed (ignoring that $k^*$ also falls with $u$) would give a different, smaller number, so C is a distractor.

> [!tip] Intuition
> Unemployment hits twice: fewer workers per unit of capital-labor input directly, and a smaller labor input means less capital is sustained ($k^*$ falls with $(1-u)$). Both effects are inside the factor $2(1-u)$.

> [!tip] 🗣️ In plain English
> Higher **unemployment** shrinks the part of the labor force that actually works. In the **steady state** that works out as $y^* = 2(1-u)$, so each extra bit of unemployment costs **2** units of output per worker.

---

## Q2 — Saving more: guaranteed short-run gains?

> [!warning] AI-written answer, not official. Check before relying on it.
> Outside the lecture notes (Solow). Consistent with the tofes 0 layout (answer printed first).

**Question.** Assume the Solow model with no population growth or technological progress. A steady-state economy decides to devote a larger share of its output to investment. Short run gains for living standards (consumption) and productivity (output per worker) are guaranteed. True or False?

- A. False. In the short run living standard will fall and productivity will rise.
- B. False. In the short run living standard will fall and productivity will fall.
- C. False. In the short run living standard will rise and productivity will fall.
- D. True.

> [!success] Answer: A (AI-solved)

A higher saving rate $s$ means **consumption $c = (1-s)y$ drops at once**: output has not changed yet, but a bigger share goes to investment. Investment now exceeds break-even investment, so $k$ rises and so does **output per worker $y = f(k)$**, gradually, toward the new steady state. Consumption then recovers over time (and ends higher only if the economy was below the golden rule).

- **B.** Productivity does not fall: more capital per worker means more output per worker.
- **C.** Backwards. Consumption cannot rise on impact when the saving share rises.
- **D.** "Guaranteed" is false because consumption falls first.

> [!tip] 🗣️ In plain English
> Saving more means **less to spend today**, so living standards dip first. The extra **investment** builds capital, so **output per worker** climbs over time.

---

## Q3 — Higher saving rate in the Solow model

> [!warning] AI-written answer, not official. Check before relying on it.
> Outside the lecture notes (Solow). Consistent with the tofes 0 layout (answer printed first).

**Question.** In the Solow growth model, with a given production function, depreciation rate, no technological change, and no population growth, a higher saving rate produces a:

- A. higher steady-state level of output per worker.
- B. higher steady-state growth rate of total output.
- C. higher steady-state growth rate of output per worker.
- D. higher MPK in the new steady state.

> [!success] Answer: A (AI-solved)

Steady state: $s f(k^*) = \delta k^*$. A higher $s$ shifts the investment curve up, so $k^*$ and $y^* = f(k^*)$ are higher. This is a **level effect**.

- **B.** With no population growth or technology, steady-state growth of total output is **zero**, whatever $s$ is. It is only temporarily positive during the transition.
- **C.** Growth of output per worker is also zero in the steady state. $s$ changes the level, not the long-run growth rate.
- **D.** More capital per worker means a **lower** marginal product of capital (diminishing returns). In the steady state $MPK = \delta/s$ falls when $s$ rises.

> [!tip] 🗣️ In plain English
> Saving more gives you a **higher level** of output per worker in the long run, but not faster **growth** forever. Growth stops once you reach the new steady state.

---

## Q4 — Persistent growth in living standards inside a steady state

> [!warning] AI-written answer, not official. Check before relying on it. FLAGGED FOR ALFIE.
> Outside the lecture notes (Solow). My independent solve **disagrees with A under the strict no-technology reading** (I would pick C). I keep A as the likely official answer: it is the tofes 0 first option and it is correct once technological progress is allowed.

**Question.** According to the Solow model: is a persistent growth in the standards of living within a steady-state economy possible?

- A. Yes, provided that capital stock grows faster than the labor force
- B. Yes, provided that capital stock grows slower than the labor force
- C. No, because capital stock always grows as fast as the labor force
- D. No, because capital stock grows slower than the labor force

> [!success] Answer: A (AI-solved, likely official)

Living standards ($K/L$, output per worker) can only keep growing if **capital grows faster than labor**. In the model **with technological progress** at rate $g$, the steady state has capital per *effective* worker constant, so $K$ grows at $n+g$ while $L$ grows at $n$. Capital therefore grows faster than the labor force, and output per worker grows at $g$. So "yes, provided capital grows faster than labor" is the condition, and technological progress is what delivers it.

- **B.** If capital grew slower than labor, capital per worker would fall, so living standards would fall.
- **C.** This is the correct statement for the **basic** Solow model (no technology): in the steady state $k$ is constant, so $K$ grows at exactly $n$, the same as $L$, and there is no per-worker growth. That is my independent answer if the question means no technological change. The question does not say "no technological progress" (Q1 and Q3 do), which is why A is the better fit.
- **D.** Same as B: shrinking capital per worker cannot raise living standards.

> [!tip] 🗣️ In plain English
> Living standards only keep rising if each worker gets **more and more capital**, meaning capital must grow **faster than the labor force**. In the Solow model that only happens with **technological progress**.

---

## Q5 — Is the return to capital fixed with technological progress?

> [!warning] AI-written answer, not official. Check before relying on it.
> Outside the lecture notes (Solow). Consistent with the tofes 0 layout (answer printed first).

**Question.** Under the Solow model with technological progress, the return to capital is fixed. True or false?

- A. True, because capital per efficient worker is fixed in the steady state.
- B. True, because capital per efficient worker has constant returns, whenever the production function has constant returns
- C. True, because the share of capital in national income is fixed
- D. False, because capital per efficient worker has diminishing returns whenever the production function has constant returns

> [!success] Answer: A (AI-solved)

With technological progress the steady state has **capital per efficient worker $\tilde k = K/(AL)$ constant**. The return to capital is $MPK = f'(\tilde k)$, a function of $\tilde k$ only. If $\tilde k$ is fixed, so is the return to capital, even though $K/L$ keeps growing.

- **B.** False reasoning: capital per efficient worker has **diminishing** returns (that is why $f'$ falls as $\tilde k$ rises), not constant returns.
- **C.** The capital share is constant for Cobb-Douglas, but that is a property of a particular function, not why the return is fixed in general.
- **D.** The reasoning is true (diminishing returns to $\tilde k$) but the verdict "False" is wrong: with $\tilde k$ fixed in the steady state, the return is fixed.

> [!tip] 🗣️ In plain English
> Measured **per efficient worker**, the amount of capital stays put in the steady state. Since the **return to capital** depends only on that amount, it stays fixed too.

---

## Q6 — Freedonia: what tax advice?

> [!warning] AI-written answer, not official. Check before relying on it.
> Outside the lecture notes (Solow). Consistent with the tofes 0 layout (answer printed first).

**Question.** In Freedonia the return to capital is 15%, depreciation rate is 7% and output growth rate is 4%. What would you advise that country to do?

- A. Cut taxes on capital gains
- B. Replace consumption tax with income tax
- C. Increase taxes on capital gains
- D. Narrow tax benefits for retirement saving accounts

> [!success] Answer: A (AI-solved)

**Golden-rule test:** the golden-rule capital stock has $MPK - \delta = n + g$ (the net return equals output growth). Here $MPK - \delta = 15\% - 7\% = 8\%$, which is **above** $n+g = 4\%$. A high net return to capital means **capital is scarce**: the economy is **below** the golden rule and should save and invest **more**. Cutting capital-gains taxes raises the after-tax return to saving and encourages it.

- **B.** Income tax taxes the return to saving (double taxation), so it discourages saving. Replacing a consumption tax with an income tax pushes the wrong way.
- **C.** Taxing capital gains more discourages saving: wrong direction.
- **D.** Narrowing retirement-account benefits removes a saving incentive: wrong direction.

> [!tip] 🗣️ In plain English
> A **net return of 8%** against **4% growth** says the country has **too little capital**. It should encourage saving, for example by **cutting taxes on capital gains**.

---

## Q7 — Fed stabilization with fixed prices

**Question.** Assume the AD-AS model with fixed price level in the short run. If the Fed is interested in maintaining price level and employment rate stable, at all times, which shock will it be able to cope with better?

- A. A shock to the demand
- B. A shock to the supply
- C. The Fed can never maintain stable prices and employment, in either type of shock
- D. Either a shock to the demand or to the supply can be addressed by the Fed such that prices and employment remain stable

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first). See [[Lec_06-AS-AD Model & Economic Fluctuations]].

> [!success] Answer: A (AI-solved)

A [[Demand Shock]] moves AD. The Fed can move AD back with [[Stabilization Policy]] (change $M$), so **output and price both return to where they were**. Both goals are met at once.

A [[Supply Shock]] shifts SRAS. The Fed can only choose where on the new AS curve to land: offset the shock with AD and it keeps **output** stable but **prices** move; hold prices and output moves. It faces a **trade-off**.

- **B.** Reversed: supply shocks create the trade-off.
- **C.** Too strong: demand shocks can be fully offset.
- **D.** Only demand shocks can be fully offset.

> [!tip] 🗣️ In plain English
> A **demand shock** can be cancelled by moving **demand** back. A **supply shock** forces a choice between **stable prices** and **stable output**.

---

## Q8 — Is long-run money neutrality in the AD-AS model?

**Question.** Monetary neutrality, the irrelevance of the money supply in determining values of real variables, is generally thought to be a property of the economy just in the long run. Does the AD-AS model support that argument?

- A. Yes. Prices change proportionally to any change in the money supply, offsetting in the long-run any short-run effect over real variables
- B. Yes. Stabilizing policy always restores output and unemployment to its normal rates in the long-run
- C. No. A change in money supply does affect unemployment and output both in the short-run and in the long-run
- D. No. A change in money supply does not affect unemployment and output both in the short-run and in the long-run

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

In the short run prices are sticky, so a change in $M$ shifts AD and moves $Y$ and $u$. Over time prices adjust, SRAS shifts, and the economy returns to $\bar Y$ at a price level that has changed **in proportion to $M$**. Real variables are back where they started. This is [[Money Neutrality (LR)]]. Q25 draws exactly this.

- **B.** Right outcome, wrong cause: the long-run return to $\bar Y$ comes from **price adjustment**, not from stabilizing policy. It would happen with no policy at all.
- **C.** Wrong in the long run: real variables are unaffected.
- **D.** Wrong in the short run: with sticky prices real variables do move.

> [!tip] 🗣️ In plain English
> Printing money moves **output** only until **prices** catch up. In the long run prices rise **in proportion**, and real things are back to normal.

---

## Q9 — Money supply cut and unemployment (Okun's Law)

> [!warning] AI-written answer, not official. Check before relying on it. FLAGGED FOR ALFIE.
> Literal substitution gives a rise of **4**, which is not an option. A (rise by 2.5) is reached under the reading below. Consistent with the tofes 0 layout (answer printed first).

**Question.** Assume the AD-AS model with fixed price level, $P$, and the economy is in a benchmark long-run equilibrium. The AD curve is given by $AD = a \cdot \dfrac{M}{P}$ where $a$ is some constant and $M$ is money supply. If the central bank decreases money supply by 5%, what will happen to unemployment rate (recall [[Okun's Law]]: $\dfrac{\Delta Y}{Y} = 3 - 2\Delta u$)?

- A. Rise by 2.5%
- B. Fall by 2.5%
- C. Fall by 5%
- D. Fall by 4%

> [!success] Answer: A (AI-solved)

**Step 1.** With $P$ fixed, $Y = a\,M/P$, so a **5% fall in $M$ lowers $Y$ by 5%**.

**Step 2.** Output falls, so unemployment **rises**. That already rules out B, C and D (all falls).

**Step 3, size.** Okun's Law says output growth is the 3% trend minus $2\Delta u$. The economy starts in long-run equilibrium, so before the shock it is at its benchmark level. The AD cut puts output **5% below the benchmark**: the 5% fall is the *deviation from trend*, so $-5 = -2\Delta u \Rightarrow \Delta u = 2.5$ points. (Equivalently: trend growth of $+3$ and a shock of $-5$ gives $\Delta Y/Y = -2$, and $-2 = 3 - 2\Delta u \Rightarrow \Delta u = 2.5$.)

> [!warning] Check of the literal reading
> Substituting $\Delta Y/Y = -5$ straight into $-5 = 3 - 2\Delta u$ gives $\Delta u = 4$ (a rise of 4). **That is not offered**, and D says "fall by 4". So the only consistent option is A, which needs the "5% below benchmark" reading above.

> [!tip] 🗣️ In plain English
> Less money means **output drops 5%**, which pushes **unemployment up**. By [[Okun's Law]] each 2% of lost output is about **1 point of unemployment**, so roughly **2.5 points**.

---

## Q10 — Keynesian cross multiplier

**Question.** In the Keynesian-cross model with fixed interest rate, if the MPC equals 0.8, then a $1 billion increase in government spending, with no tax raise, spending increases planned expenditures by ______ and increases the equilibrium level of income by ______.

- A. $1 billion; $5 billion
- B. $1 billion; $1 billion
- C. $0.8 billion; $1 billion
- D. $0.8 billion; $5 billion

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Planned expenditure $E = C + I + G$. The **direct** effect of $\Delta G = 1$ is exactly **$1 billion** on $E$. That extra spending becomes income, which raises consumption by $MPC \times$ income, and so on. The [[Fiscal Multiplier]] is

$$\frac{1}{1 - MPC} = \frac{1}{1 - 0.8} = 5 \;\Rightarrow\; \Delta Y = 5 \times 1 = 5 \text{ billion}$$

- **B.** Ignores the induced consumption: no multiplier.
- **C and D.** Planned expenditure rises by the full $1 billion from $G$ itself; $0.8$ is the first-round *consumption* response, which comes only after income rises.

> [!tip] 🗣️ In plain English
> The government spends **$1bn**, so spending rises by **$1bn** straight away. That gets re-spent over and over, and total income ends up **$5bn** higher (the **multiplier**).

---

## Q11 — Liquidity preference and the real money supply

**Question.** The theory of liquidity preference implies that, other things being equal, an increase in the real money supply will

- A. lower the interest rate
- B. raise the interest rate
- C. have no effect on the interest rate
- D. first lower and then raise the interest rate

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

In [[Liquidity Preference]], the interest rate adjusts so that money demand equals the (fixed) real money supply. More real money means people hold more than they want, so they buy bonds, bond prices rise and the **interest rate falls** until they are happy to hold the extra money.

- **B.** Opposite sign.
- **C.** True only in the long run in the classical model, not in liquidity preference with fixed income.
- **D.** There is no reversal: the rate falls to the new equilibrium and stays there.

> [!tip] 🗣️ In plain English
> More money in the economy means people try to lend it out, so the **interest rate falls**.

---

## Q12 — Money market arithmetic

**Question.** Assume that the money demand function is $(M/P)^d = 2{,}200 - 200r$, where $r$ is the interest rate in percent. The money supply $M$ is 2,000 and the price level $P$ is 2. If the price level is fixed and the supply of money is raised to 2,800, then the equilibrium interest rate will

- A. drop by 2 percent
- B. drop by 4 percent
- C. drop by 1 percent
- D. remain unchanged

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Equilibrium: $M/P = 2200 - 200r$.

- Before: $M/P = 2000/2 = 1000$, so $2200 - 200r = 1000 \Rightarrow r = 6$.
- After: $M/P = 2800/2 = 1400$, so $2200 - 200r = 1400 \Rightarrow r = 4$.

The rate falls by **2 percentage points**.

![[PP03_q12_money_market.png|560]]

*The supply line moves right from 1,000 to 1,400 along the downward demand curve, so $r$ goes from 6 to 4.*

- **B.** A fall of 4 points (to $r=2$) needs $M/P = 1{,}800$. It is the trap of forgetting to divide the new $M$ by $P$ (or of the wrong direction of the shift).
- **C.** A fall of 1 point needs $M/P = 1{,}200$, i.e. $M = 2{,}400$.
- **D.** Wrong: with $P$ fixed, more money lowers $r$ (Q11).

> [!tip] 🗣️ In plain English
> Divide money by the price level (**real balances** go from 1,000 to 1,400) and solve $2200-200r$. The **interest rate falls from 6 to 4**.

---

## Q13 — How the goods and money markets connect

**Question.** According to the IS-LM model, how are the market for goods and services and the money market connected?

- A. Equilibrium in the money market determines the interest rate which affects investment and equilibrium in the market for goods and services; the latter, in turn determines income level which affects the demand for money and equilibrium in the money market
- B. Equilibrium in the money market determines income level which affects consumption and equilibrium in the market for goods and services; the latter, in turn determines interest rate which affects the equilibrium in the money market
- C. The market of goods and services determines income level and the money market determines interest rate, and the two are not connected
- D. Money market determines the interest rate, independently of the market for goods and services; the latter determines income level given the interest rate, which has no impact over the money market

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Two-way link. **Interest rate** $r$ feeds goods-market demand through investment $I(r)$ (the IS curve). **Income** $Y$ feeds the money market through money demand $L(r, Y)$ (the LM curve). Only the simultaneous solution gives $(r, Y)$. See [[IS-LM Equilibrium]].

- **B.** Reverses the roles: the money market (with $Y$ given) determines $r$, and $r$ affects investment, not consumption through income.
- **C.** The markets are connected by $r$ and $Y$.
- **D.** Denies that income affects money demand, but it does: $L(r,Y)$ rises with $Y$.

> [!tip] 🗣️ In plain English
> The **interest rate** drives **investment**, which drives **income**, and income drives **money demand**, which in turn sets the **interest rate**. Everything depends on everything else.

---

## Q14 — Government spending rises in IS-LM

**Question.** In the IS-LM model when government spending rises, in short-run equilibrium, in the usual case the interest rate ______ and output ______.

- A. rises; rises
- B. rises; falls
- C. falls; rises
- D. falls; falls

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Higher $G$ shifts **IS right**. With LM unchanged (upward sloping), the new intersection has **higher $Y$ and higher $r$**. The higher $r$ partly [[Crowding Out]] investment, so $Y$ rises by less than the Keynesian-cross multiplier suggests.

- **B.** $Y$ does not fall: IS moves right, so output increases (just by less than the cross).
- **C and D.** $r$ cannot fall: the rightward IS move along an upward LM raises $r$.

> [!tip] 🗣️ In plain English
> More **government spending** boosts **output**, and it also pushes **interest rates up**, which slightly dampens private investment.

---

## Q15 — Fixed money supply or fixed interest rate?

**Question.** The central bank can either keep money supply fixed or interest rate fixed. In which case will a stabilizing policy be more effective (in terms of minimizing changes to output level) as a response to adverse shock to demand in the IS-LM model?

- A. Fixed money supply is more effective against shocks to the demand for goods and services; fixed interest rate is more effective against shocks to the demand for money
- B. Fixed money supply is more effective against shocks to the demand for money; fixed interest rate is more effective against shocks to the demand for goods and services
- C. Fixed money supply is more effective against shocks to the demand for money as well as shocks to the demand for goods and services
- D. Fixed interest rate is more effective against shocks to the demand for money as well as shocks to the demand for goods and services

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

This is the standard **Poole result**. Fixing $M$ leaves LM upward sloping, which **cushions** an IS shock: when IS moves, $r$ moves and partly offsets the output change. Fixing $r$ makes LM **horizontal**, so an IS shock moves $Y$ fully.

For a **money-demand (LM) shock**, the logic reverses. If $M$ is fixed, the LM shifts and $Y$ swings. If the central bank **fixes $r$** it supplies whatever money is demanded, so LM does not move and $Y$ is stable.

- **B.** Exactly reversed.
- **C.** Fixed $M$ is worse for LM shocks.
- **D.** Fixed $r$ is worse for IS shocks (no interest-rate cushion).

> [!tip] 🗣️ In plain English
> If the shock hits **spending**, keep **money fixed** and let rates absorb some of it. If it hits **money demand**, keep the **interest rate fixed** so output isn't disturbed.

---

## Q16 — LM shift and the AD curve (figure)

**Question.** Address the following figure (interest rate $r$ against income $Y$; one IS curve $IS_1$ and three LM curves $LM_1$ ($P=P_1$, $M=M_1$) above $LM_2$ ($P=P_2$, $M=M_2$) above $LM_3$ ($P=P_3$, $M=M_3$)). Assume that the LM curve has shifted from $LM_2$ to $LM_1$. What happens to the AD curve?

- A. If $P_1 > P_2$ and $M_1 = M_2$ this represents a movement along the AD curve; If $P_1 = P_2$ and $M_1 < M_2$ this represents a leftward shift of AD
- B. If $P_1 > P_2$ and $M_1 = M_2$ this represents a movement along the AD curve; If $P_1 = P_2$ and $M_1 < M_2$ this represents a rightward shift of AD
- C. If $P_1 > P_2$ and $M_1 = M_2$ this represents a leftward shift of the AD curve; If $P_1 = P_2$ and $M_1 < M_2$ this represents movement along AD
- D. In either case this represents a leftward shift of the AD curve

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first). I read the figure image: $LM_1$ is the top line, so the shift $LM_2 \to LM_1$ is a **leftward** (upward) move of LM.

> [!success] Answer: A (AI-solved)

The LM curve depends on **real** balances $M/P$. A leftward LM shift means $M/P$ fell. Two ways:

1. **$P$ rises, $M$ fixed** ($P_1 > P_2$): this is the price level changing, and the AD curve already plots $Y$ against $P$. So it is a **movement along AD** (to a higher $P$ and lower $Y$).
2. **$M$ falls, $P$ fixed** ($M_1 < M_2$): at the same $P$, output is now lower. That is a change in a non-price variable, so **AD shifts left**.

![[PP03_q16_lm_shift_vs_ad.png|520]]

*Same IS, LM moves up and left from $LM_2$ to $LM_1$: the cause (price vs money) decides whether it is movement along AD or a shift.*

- **B.** Right on the first case, but a money cut shifts AD **left**, not right.
- **C.** Reverses both cases.
- **D.** Wrong on the price case: a price change is a movement along AD.

> [!tip] 🗣️ In plain English
> If **prices** push LM left, you're just sliding **along** the AD curve. If **less money** does it, the whole **AD curve moves left**.

---

## Q17 — Balanced-budget increase in G and T

**Question.** According to the IS-LM model, when the government increases taxes and government purchases by equal amounts:

- A. income and the interest rate rise, whereas consumption and investment fall
- B. income, the interest rate, consumption, and investment are unchanged
- C. income and the interest rate fall, whereas consumption and interest rise
- D. income, the interest rate, consumption, and investment all rise

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Taxes up by $\Delta T = \Delta G$. In the Keynesian cross this is the **balanced-budget multiplier of 1**: IS shifts right by $\Delta G$. With LM upward sloping, $r$ rises, so $Y$ rises by **less than $\Delta G$**. Then:

- **Investment** $I(r)$ falls because $r$ rose ([[Crowding Out]]).
- **Consumption** $C = C(Y - T)$: disposable income changes by $\Delta Y - \Delta T = \Delta Y - \Delta G < 0$, so **consumption falls**.

- **B.** IS does move, so $Y$ and $r$ rise.
- **C.** $Y$ and $r$ do not fall; "consumption and interest rise" is also internally inconsistent (it means investment).
- **D.** Consumption and investment cannot both rise: disposable income falls and $r$ rises.

> [!tip] 🗣️ In plain English
> Government spends more and taxes the same amount. **Income and interest rates go up**, but households are left with less take-home pay and firms invest less, so **consumption and investment both fall**.

---

## Q18 — Small open economy, perfect capital mobility

**Question.** In a small open economy with perfect capital mobility, if the domestic interest rate were to rise above the world interest rate, then ______ would drive the domestic interest rate back to the level of the world interest rate

- A. capital inflow
- B. capital outflow
- C. the central bank
- D. a decline in domestic saving

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

If $r > r^*$, foreign savers rush to buy domestic assets. **Capital inflow** raises the supply of loanable funds at home and pushes $r$ down until $r = r^*$. See [[Capital Mobility]] and [[Mundell-Fleming Model]].

- **B.** Outflow happens when $r < r^*$.
- **C.** The central bank is not needed: arbitrage alone does it.
- **D.** A fall in saving would raise $r$, not lower it.

> [!tip] 🗣️ In plain English
> A high domestic rate attracts **foreign money**, which pushes the rate back down to the **world rate**.

---

## Q19 — Cutting output under floating rates

**Question.** In a small open economy with a floating exchange rate, an effective policy to decrease equilibrium output is to:

- A. decrease the money supply
- B. increase the money supply
- C. decrease taxes
- D. decrease government spending

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

Under floating rates $Y$ is pinned down by **$LM^*$**, which is vertical: $M/P = L(r^*, Y)$. Only $M$ (or money demand) moves it. A **cut in $M$ shifts $LM^*$ left, lowering $Y$** (and raising the exchange rate). See [[LM* Curve]] and [[Floating Exchange Rate]].

- **B.** Raises $Y$.
- **C and D.** Fiscal policy shifts $IS^*$, but the exchange rate adjusts and **crowds out net exports one-for-one**, so $Y$ does not change.

> [!tip] 🗣️ In plain English
> Under **floating rates only monetary policy moves output**. Fiscal changes get fully offset by the **exchange rate**.

---

## Q20 — Taste for imports under floating rates (figure)

**Question.** Address the following figure (exchange rate $e$ against income $Y$; vertical $LM_1^*$ through A with $LM_3^*$ to its left and $LM_2^*$ to its right; $IS_1^*$ through A, $IS_2^*$ above it, $IS_3^*$ below it). A small open economy with a floating exchange rate is initially in equilibrium at A with $IS_1^*$, $LM_1^*$. Holding all else constant, if domestic consumers develop greater preferences for imported goods, then the _____ curve will shift to _____.

- A. $IS_1^*$; $IS_3^*$
- B. $IS_1^*$; $IS_2^*$
- C. $LM_1^*$; $LM_3^*$
- D. $LM_1^*$; $LM_2^*$

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first). I viewed the figure: $IS_3^*$ is the lowest (leftmost) IS line and $IS_2^*$ the highest.

> [!success] Answer: A (AI-solved)

A taste for imports **lowers net exports $NX(e)$** at every exchange rate, so planned expenditure falls and **$IS^*$ shifts left/down, from $IS_1^*$ to $IS_3^*$**. $LM^*$ does not depend on the trade balance, so it stays put. Output stays at the $LM_1^*$ level and the **currency depreciates** (lower $e$), which offsets the fall in net exports.

![[PP03_q20_mf_import_taste.png|560]]

*$IS^*$ shifts down to $IS_3^*$; with vertical $LM^*$, output is unchanged and $e$ falls.*

- **B.** $IS_2^*$ is a rightward shift, which would follow a *fall* in the taste for imports (or a tax cut).
- **C and D.** $LM^*$ moves only with money supply or money demand, not with import preferences.

> [!tip] 🗣️ In plain English
> People buying more imports **weakens demand for domestic goods**, so the **IS\* curve shifts left**. The **currency falls** to compensate, and output ends up unchanged.

---

## Q21 — Import quota under a fixed exchange rate

**Question.** In a small open economy with a fixed exchange rate, if the government imposes an import quota, then net exports:

- A. increase, the money supply increases, and income increases
- B. decrease but the money supply falls and income falls
- C. are unchanged but the money supply falls and income falls
- D. are unchanged, the money supply is unchanged, and income is unchanged

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

The quota raises net exports at any exchange rate, so **$IS^*$ shifts right**. With the exchange rate fixed, the rightward shift creates pressure to **appreciate**. To defend the peg the central bank **buys foreign currency and sells domestic currency**, so the **money supply rises** and $LM^*$ shifts right as well. In the new equilibrium **income is higher** and, since $e$ is unchanged, net exports end up higher than before. See [[Fixed Exchange Rate]].

- **B.** Wrong sign on every item: the quota raises $NX$ and pushes the money supply up.
- **C.** Net exports do not stay unchanged: the quota raises them. (In the floating case NX *would* be unchanged, because the exchange rate absorbs the shock.)
- **D.** That is the floating-rate result (the exchange rate absorbs the shock, $Y$ and $M$ unchanged, though even there NX is unchanged only because $e$ moves). Under a fixed rate the central bank must accommodate.

> [!tip] 🗣️ In plain English
> Under a **fixed rate**, protection works: the central bank has to **print money** to hold the peg, so **income rises** and **net exports** rise too. Under a floating rate the currency would absorb it all.

---

## Q22 — Why inflation can be inertial

**Question.** Inflation might be inertial because

- A. people have adaptive expectations, because of which they base their future inflation expectations on the recently observed inflation
- B. people have adaptive expectations, so for example if prices have been rising quickly, people will expect them to stop rising quickly
- C. people have rational expectations, because of which they base their future inflation expectations on the recently observed inflation
- D. people have rational expectations, so for example if prices have been rising quickly, people will expect them to stop rising quickly

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

[[Inflation Inertia]] comes from [[Adaptive Expectations]]: $\pi^e = \pi_{-1}$. Last period's inflation becomes this period's expectation, which feeds into wage and price setting, so inflation persists unless unemployment moves away from the natural rate.

- **B.** Adaptive expectations mean people expect fast inflation to **continue**, not stop.
- **C.** Mislabels: basing expectations on the recent past is adaptive, not rational. [[Rational Expectations]] use all available information.
- **D.** Wrong label and an example that would, if anything, remove inertia.

> [!tip] 🗣️ In plain English
> If people simply expect **tomorrow's inflation to look like yesterday's**, inflation keeps going on its own momentum.

---

## Q23 — Demand-pull versus cost-push

**Question.** The difference between demand-pull inflation and cost-push inflation is that the demand-pull inflation

- A. is due to an increase in demand which pulls output and prices up; whereas adverse shock to supply pushes up the cost of production
- B. is not expressed within the Phillips curve, whereas the cost-push inflation is expressed by the random shock, $v$.
- C. is transitory whereas the cost-push inflation is sustainable
- D. tend to be more moderate in comparison to cost-push inflation.

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

[[Demand-Pull Inflation]] starts on the demand side: AD shifts right, pulling output and prices up (it appears in the [[Phillips Curve]] as low unemployment, $u < u_n$). [[Cost-Push Inflation]] starts on the supply side: an adverse [[Supply Shock]] pushes up production costs ($v > 0$).

- **B.** Wrong: demand-pull *is* in the Phillips curve, through the term $-\beta(u - u_n)$.
- **C.** Neither is transitory or permanent by nature. Persistence depends on expectations and the policy response.
- **D.** Nothing in the theory says one is milder.

> [!tip] 🗣️ In plain English
> **Demand-pull**: too much spending **pulls** prices up. **Cost-push**: higher costs **push** prices up.

---

## Q24 — Phillips curve arithmetic

**Question.** The economy has the Phillips curve: $\pi = \pi_{-1} - 0.5(u - 0.05)$. Unemployment has increased by 2% above its normal rate. What happened to the inflation?

- A. Inflation declined by 1%
- B. Inflation rose by 1%
- C. Inflation declined by 2%
- D. Inflation rose by 2%

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first).

> [!success] Answer: A (AI-solved)

The natural rate is 5%, so "2% above its normal rate" means $u - 0.05 = 0.02$.

$$\pi - \pi_{-1} = -0.5 \times 0.02 = -0.01$$

Inflation **declines by 1 percentage point**. The sacrifice-ratio logic is the same ([[Sacrifice Ratio]]): high unemployment brings inflation down.

- **B and D.** Wrong sign: high unemployment lowers inflation.
- **C.** Forgets the 0.5 coefficient ($-1 \times 0.02 = -2\%$).

> [!tip] 🗣️ In plain English
> Unemployment **2 points** above normal, times the slope **0.5**, pulls inflation **down by 1 point**.

---

## Q25 — Unexpected monetary contraction (figure)

**Question.** Address the following figure (price $P$ against output $Y$; vertical LRAS at $\bar Y$; three SRAS and three AD curves; labelled points A ($P_1$, $\bar Y$), B ($P_3$, $\bar Y$), C ($P_2$, $\bar Y$), D, E, F, G). Starting from long-run equilibrium at A with output equal to $\bar Y$ and the price level equal to $P_1$, if there is an unexpected monetary contraction, then the long-run neutrality of money is represented by the movement from A to:

- A. B
- B. G
- C. C
- D. D

> [!warning] AI-written answer, not official. Check before relying on it.
> Consistent with the tofes 0 layout (answer printed first). I read the figure image: $AD_3$ passes through G and B, $SRAS_1$ through G, A and E, and $SRAS_3$ through B and D.

> [!success] Answer: A (AI-solved)

A monetary contraction shifts AD **left** ($AD_1 \to AD_3$). With sticky prices (unexpected, so $SRAS_1$ does not move yet) the **short-run** outcome is A to **G**: lower price, lower output. Over time prices fall further, SRAS shifts **down/right** ($SRAS_1 \to SRAS_3$), and the economy slides along $AD_3$ to **B**: output back at $\bar Y$ and the price level lower, at $P_3$. That return to $\bar Y$ with only the nominal variable ($P$) changed is [[Money Neutrality (LR)]].

![[PP03_q25_monetary_contraction.png|560]]

*Redrawn schematic of the paper's figure: A to G in the short run, G to B in the long run.*

- **B (G).** The short-run point, where real output still falls. Not neutrality.
- **C.** Above $P_1$: a price *rise*, the long-run outcome of a monetary expansion.
- **D.** The intersection of $AD_1$ and $SRAS_3$: output **above** $\bar Y$ at a lower price. It would follow a favourable supply shift with no demand change, not a monetary contraction.

> [!tip] 🗣️ In plain English
> A surprise money cut first **hurts output** (point G). Once **prices** fall enough, output returns to normal at a **lower price level** (point B). That is **money neutrality**.

---

## Recap

| Q | Topic | Answer | Source |
|---|---|---|---|
| 1 | Solow, $y^*=2(1-u)$ | A | AI-solved |
| 2 | Higher saving, short run | A | AI-solved |
| 3 | Higher $s$ raises $y^*$ | A | AI-solved |
| 4 | Persistent growth in steady state | A | AI-solved, **flag** |
| 5 | Return to capital fixed | A | AI-solved |
| 6 | Below golden rule, cut capital taxes | A | AI-solved |
| 7 | Fed vs demand shock | A | AI-solved |
| 8 | LR money neutrality | A | AI-solved |
| 9 | Okun, $\Delta u = 2.5$ | A | AI-solved, **flag** |
| 10 | Multiplier 1 and 5 | A | AI-solved |
| 11 | Liquidity preference | A | AI-solved |
| 12 | $r$ from 6 to 4 | A | AI-solved |
| 13 | IS-LM link | A | AI-solved |
| 14 | $G$ up: $r$ up, $Y$ up | A | AI-solved |
| 15 | Poole: fixed $M$ vs fixed $r$ | A | AI-solved |
| 16 | LM shift vs AD | A | AI-solved |
| 17 | Balanced budget | A | AI-solved |
| 18 | Capital inflow | A | AI-solved |
| 19 | Cut $M$ lowers $Y$ | A | AI-solved |
| 20 | Import taste: IS1* to IS3* | A | AI-solved |
| 21 | Fixed-rate quota | A | AI-solved |
| 22 | Adaptive expectations | A | AI-solved |
| 23 | Demand-pull vs cost-push | A | AI-solved |
| 24 | $\Delta\pi = -1$ | A | AI-solved |
| 25 | A to B | A | AI-solved |

## Related notes

[[Macro-Economics II]] · [[PP_02-Solow, IS-LM, Mundell-Fleming & Phillips Curve (2021 Moed A)]] · [[PP_07-IS-LM, Mundell-Fleming, AS-AD & Classical Theory (2024 Moed B)]]
