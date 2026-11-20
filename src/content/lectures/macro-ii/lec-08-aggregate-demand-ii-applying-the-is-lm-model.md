---
title: "Aggregate Demand II: Applying the IS-LM Model"
week: 8
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 12 — Aggregate Demand II: Applying the IS-LM Model"
instructor: Alon Cohen
date: 2026-05-20
tags:
  - macro-economics-ii
  - IS-LM
  - aggregate-demand
  - fiscal-policy
  - monetary-policy
  - IS-shocks
  - LM-shocks
  - AD-curve
  - crowding-out
  - short-run
  - long-run
  - AD-AS
aliases:
  - Chapter 12 Macro II
  - Aggregate Demand II
  - Applying IS-LM
subject: macro-ii
in_scope: true
---

# Aggregate Demand II: Applying the IS-LM Model

> Part of: [[Macro-Economics II]] | Key concepts: [[IS-LM Equilibrium]], [[Fiscal Policy]], [[Monetary Policy]], [[Crowding Out]], [[IS Shocks]], [[LM Shocks]], [[Aggregate Demand Curve]], [[AD-AS Model]]

---

## 🗺️ What This Chapter Is About

Chapter 11 built the IS-LM model from scratch. **Chapter 12 puts it to work.** The goal is to use IS-LM as a policy and shock-analysis tool, and then to connect the IS-LM model back to the aggregate demand (AD) curve introduced in Chapter 10.

The three main tasks are:
1. **Use IS-LM to analyse fiscal and monetary policy** — what happens to output $Y$ and the interest rate $r$ when government spending, taxes, or the money supply change.
2. **Use IS-LM to analyse shocks** — exogenous shifts in the goods market (IS shocks) or money market (LM shocks).
3. **Derive the AD curve from IS-LM** — show why the AD curve is downward sloping and how policy shifts it.

A running theme is the **interaction between monetary and fiscal policy**: in the real world, the central bank may react to fiscal changes, and this dramatically affects outcomes.

---

## ⚖️ Part 1: IS-LM Equilibrium — Quick Review

The IS-LM model delivers a **unique short-run equilibrium** $(Y^*, r^*)$ that simultaneously clears the goods market and the money market:

$$\text{IS: } Y = C(Y-T) + I(r) + G \quad \Longleftrightarrow \quad \text{goods market}$$

$$\text{LM: } \frac{\bar{M}}{\bar{P}} = L(r, Y) \quad \Longleftrightarrow \quad \text{money market}$$

Graphically, the equilibrium is the **intersection** of the IS curve (downward sloping in $r$-$Y$ space) and the LM curve (upward sloping). Any policy or shock that shifts either curve changes the equilibrium $(Y^*, r^*)$.

> [!info] IS vs LM — Who Controls What?
> | Curve | Moved by | Slopes |
> |---|---|---|
> | IS | Fiscal policy ($G$, $T$); investment expectations | Downward |
> | LM | Monetary policy ($M$); money demand shocks | Upward |
>
> Fiscal policy shifts IS; monetary policy shifts LM. This is the key operating principle for all the policy analysis below.

---

## 🏛️ Part 2: Fiscal Policy Analysis

### An Increase in Government Purchases ($\Delta G > 0$)

When government raises spending by $\Delta G$, the IS curve shifts **rightward**.

**Why?** At any given interest rate $r$, higher $G$ raises planned expenditure $PE = C + I + G$. For the goods market to remain in equilibrium, output $Y$ must rise to match — so the IS curve shifts right.

**How far does IS shift?** The horizontal shift equals the Keynesian cross multiplier effect:
$$\Delta Y\bigg|_{r \text{ fixed}} = \frac{1}{1 - MPC} \cdot \Delta G$$

But the IS-LM model modifies this: once output starts to rise, money demand $L(r, Y)$ increases too (more income → more transactions → more need for cash). Since money supply is unchanged, $r$ must rise to equilibrate the money market. The higher $r$ then **crowds out** investment.

**The full story:**

| Step | What happens |
|---|---|
| 1 | $\uparrow G$ → IS shifts right |
| 2 | At old $r$, output would rise by $\frac{\Delta G}{1-MPC}$ (Keynesian multiplier) |
| 3 | Higher $Y$ → $\uparrow$ money demand → $\uparrow r$ (LM curve unchanged) |
| 4 | Higher $r$ → $\downarrow I$ (crowding out) → partially offsets the initial $\uparrow Y$ |
| 5 | **Net result**: $\uparrow Y$ and $\uparrow r$, but $\Delta Y < \frac{\Delta G}{1-MPC}$ |

> [!warning] Crowding Out: The Key Caveat to the Multiplier
> In the **Keynesian cross** (from Chapter 11), $\Delta Y / \Delta G = 1/(1-MPC)$. This assumes $r$ is fixed. In IS-LM, the rise in $Y$ feeds back into the money market, raising $r$, which reduces investment. This **crowding-out effect** means the actual multiplier in IS-LM is smaller than the Keynesian cross multiplier. How much smaller depends on the slopes of IS and LM. ^crowding-out

> [!tip] Two Forces Acting Simultaneously
> - **Multiplier effect**: $\Delta G$ raises income, which raises consumption, which raises income further…
> - **Crowding-out effect**: the rise in $r$ reduces investment, partially offsetting the multiplier
>
> The larger the crowding-out relative to the multiplier, the less effective fiscal policy is at raising output.

### A Tax Cut ($\Delta T < 0$)

A tax cut increases disposable income $(Y - T)$, raising consumption and shifting the IS curve **rightward** — but by **less** than an equivalent increase in $G$.

**Why smaller IS shift?** A $\Delta G$ of €1 raises expenditure by €1 directly. A $\Delta T$ of €-1 raises disposable income by €1, but households **save** $(1 - MPC)$ of that — only $MPC$ enters spending immediately. So:

$$\text{IS shift from } \Delta G: \quad \frac{1}{1-MPC} \cdot \Delta G$$

$$\text{IS shift from } \Delta T: \quad \frac{MPC}{1-MPC} \cdot |\Delta T| \quad \text{(smaller)}$$

> [!example] Worked Example: Tax Multiplier in IS-LM (MPC = 0.75)
> Suppose MPC = 0.75 and a tax cut of $\Delta T = -100$ ends up raising $Y$ by 200 (given crowding-out from the IS-LM interaction).
>
> **Step A — Keynesian tax multiplier (without IS-LM feedback):**
> $$\frac{-MPC}{1-MPC} = \frac{-0.75}{0.25} = -3$$
> If no crowding-out, $\Delta T = -100$ should raise $Y$ by $3 \times 100 = 300$. But $Y$ only rises by 200 — the gap ($100$) is the crowding-out from higher $r$.
>
> **Step B — Decompose $\Delta C$ and $\Delta I$:**
> $$\Delta C = MPC \cdot (\Delta Y - \Delta T) = 0.75 \times (200 - (-100)) = 0.75 \times 300 = 225$$
> $$\Delta I = \Delta Y - \Delta C = 200 - 225 = -25 \quad \text{(crowded out)}$$
>
> **Step C — Changes in savings:**
> $$\Delta S_g = -\Delta T = +(-100) = -100 \quad \text{(public savings fall)}$$
> $$\Delta S_p = MPS \cdot (\Delta Y - \Delta T) = 0.25 \times 300 = 75 \quad \text{(private savings rise)}$$
> $$\Delta S_{total} = -100 + 75 = -25 = \Delta I \checkmark$$
>
> This confirms: both statements can be true — private savings rise, but public savings fall by more, so *total* savings fall and investment is crowded out.

---

## 🏦 Part 3: Monetary Policy Analysis

### An Increase in Money Supply ($\Delta M > 0$)

Expansionary monetary policy shifts the **LM curve right** (or equivalently, downward):

**Why?** An increase in $M$ raises real balances $M/P$ (since $P$ is fixed in the short run). At any income level $Y$, the money market now has excess supply — money supply exceeds demand. To eliminate excess supply, $r$ must **fall** to stimulate money demand. The LM curve shifts right (= same $Y$ now consistent with a lower $r$).

**The full transmission:**

| Step | What happens |
|---|---|
| 1 | $\uparrow M$ → LM shifts right/down |
| 2 | At the initial $r_1$, money supply exceeds demand |
| 3 | People buy bonds → bond prices rise → $r$ falls |
| 4 | Lower $r$ → $\uparrow I$ → higher planned expenditure → $\uparrow Y$ |
| 5 | Higher $Y$ → $\uparrow$ money demand → $r$ rises back somewhat |
| 6 | **New equilibrium**: lower $r^*$, higher $Y^*$ |

> [!warning] A Common Mistake in Monetary Policy Diagrams
> After expansionary monetary policy, the interest rate does NOT simply fall to the level implied by the money market alone (where LM crosses the $y$-axis). The IS-LM model shows a subtlety:
>
> - When $r$ falls, $I$ rises → $Y$ rises → money demand rises → this **pushes $r$ back up** from its trough
> - The final equilibrium interest rate $r^*$ is **higher** than the initial fall to $r_2$ in the money market alone — but still **lower** than $r_1$
>
> Graphically: LM shifts down; we move along the IS curve to a new intersection. The final $r^*$ is between $r_1$ and the "pure money market" lower bound. ^monetary-policy-misconception

---

## 🔄 Part 4: Interaction Between Monetary and Fiscal Policy

So far, fiscal and monetary policy have been treated as independent. In reality, the central bank may **react** to fiscal policy — or vice versa. This interaction dramatically changes outcomes.

> [!info] Three Scenarios: How the Fed Responds to a Fiscal Expansion ($\Delta G > 0$)
>
> Congress raises $G$ → IS shifts right. What does the Fed do?
>
> | Fed Response | Mechanism | Effect on $Y$ | Effect on $r$ | Key Insight |
> |---|---|---|---|---|
> | **1. Hold $M$ constant** | LM unchanged | $\uparrow Y$ (moderate) | $\uparrow r$ | Standard IS-LM result; some crowding-out |
> | **2. Hold $r$ constant** | Fed increases $M$, LM shifts right | $\uparrow Y$ (large, = Keynesian cross result) | Unchanged | No crowding-out; fiscal multiplier maximised |
> | **3. Hold $Y$ constant** | Fed reduces $M$, LM shifts left | Unchanged | $\uparrow r$ (sharply) | Complete crowding-out; $\Delta G = \Delta I = \Delta S$ |

### Response 1: Hold $M$ Constant (Benchmark IS-LM)

The standard result: output rises moderately, interest rate rises. Crowding-out is partial. This is the normal IS-LM textbook scenario.

### Response 2: Hold $r$ Constant (Keynesian Model)

The Fed accommodates fiscal expansion by increasing $M$ to prevent the interest rate from rising. Since $r$ doesn't change, there is **no crowding-out** of investment. The fiscal multiplier operates at full Keynesian force: $\Delta Y = \frac{1}{1-MPC} \cdot \Delta G$.

Decomposing the income change:
- $\Delta Y = \frac{\Delta G}{1-MPC}$
- $\Delta C = \frac{MPC}{1-MPC} \cdot \Delta G$
- $\Delta S = \Delta I = 0$ (since $r$ is unchanged)

### Response 3: Hold $Y$ Constant (Classical Long-Run Equivalent)

The Fed tightens money to prevent any output change. The IS shift right is exactly offset by the LM shift left. Output stays at $\bar{Y}$ but $r$ rises sharply.

This is the **long-run classical result** in disguise: in the long run, $Y$ is determined by supply-side factors, so fiscal expansion only raises $r$ and crowds out investment one-for-one: $\Delta G = -\Delta I$.

> [!tip] Which Response Is "Right"?
> None is universally correct — it depends on economic conditions. If the economy is in a deep recession (below potential $\bar{Y}$), Response 2 maximises stimulus. If the economy is at full employment, Response 3 captures the classical insight that stimulus only displaces private investment.

---

## 💥 Part 5: Shocks in the IS-LM Model

Shocks are **exogenous** movements in the IS or LM curve — not caused by deliberate policy.

### IS Shocks

==IS shocks== arise from exogenous changes in the demand for goods and services.

**Examples:**
- Stock market boom → higher household wealth → $\uparrow C$ → IS shifts right
- Stock market crash → lower wealth → $\downarrow C$ → IS shifts left
- Surge in business optimism → $\uparrow I$ → IS shifts right
- Fall in consumer confidence (e.g. after 9/11) → $\downarrow C$ and $\downarrow I$ → IS shifts left

### LM Shocks

==LM shocks== arise from exogenous changes in the **demand for money**, at a given $Y$ and $r$.

**Examples:**
- Wave of credit card fraud → consumers demand more cash → $\uparrow L^d$ → LM shifts left (= upward)
- More ATMs or online banking → less cash needed → $\downarrow L^d$ → LM shifts right (= downward)

> [!example] Analysing Two Shocks with IS-LM
>
> **Shock A: Housing market crash (IS shock)**
> Households' wealth falls → consumption $\downarrow$ → IS shifts left.
> Results: $Y \downarrow$, $r \downarrow$, $C \downarrow$ (lower income and wealth), $I \uparrow$ (lower $r$ partially offsets), $u \uparrow$ (Okun's law: lower $Y$ → higher unemployment).
>
> **Shock B: Increase in money demand (LM shock)**
> Identity theft makes people hold more cash → $\uparrow L^d$ → LM shifts left (up).
> Results: $Y \downarrow$, $r \uparrow$, $C \downarrow$ (lower income), $I \downarrow$ (higher $r$), $u \uparrow$.
>
> Key contrast: an IS shock moves $r$ and $Y$ in the same direction (both fall). An LM shock moves $r$ and $Y$ in **opposite** directions ($r$ rises while $Y$ falls).

---

## 📉 Case Study: The U.S. Recession of 2001

The 2001 recession is a textbook illustration of multiple simultaneous IS shocks, followed by both fiscal and monetary policy responses.

### The Shocks (All Shifted IS Leftward)

**1. Stock market decline (2000–2001)**

The dot-com bubble burst. The S&P 500 lost nearly half its value. Lower household wealth reduced consumption $C$ and lower equity valuations reduced business investment $I$. IS shifted left.

**2. September 11, 2001**

The terrorist attacks sharply increased **uncertainty** and reduced consumer and business **confidence**. Spending on durables and investment collapsed. IS shifted further left.

**3. Corporate accounting scandals (Enron, WorldCom)**

Revelations of massive fraud destroyed trust in public companies, reduced stock prices, and discouraged both equity investment and business investment. IS shifted left again.

**Macroeconomic outcome:**
- 2.1 million jobs lost
- Unemployment rose from 3.9% to 5.8%
- GDP growth slowed to 0.8% (vs 3.9% average during 1994–2000)

### Policy Responses

**Fiscal policy (shifting IS rightward):**
- Bush tax cuts (2001 and 2003): $\downarrow T$ → $\uparrow$ disposable income → $\uparrow C$
- Increased government spending: $\uparrow G$ directly
- Airline industry bailout; NYC reconstruction; Afghanistan war spending

**Monetary policy (shifting LM rightward):**
- Fed dramatically cut interest rates: the 3-month T-bill rate fell from ~6% to ~1%
- Lower $r$ stimulated investment and spending

> [!tip] Why IS-LM Explains the 2001 Recession Perfectly
> Multiple simultaneous IS shocks explain the recession. Policy responded by trying to shift IS and LM back to the right. The combination of fiscal stimulus and aggressive monetary easing (LM shifts right) ultimately stabilised output — illustrating precisely the policy interaction mechanics of Part 4.

---

## 📐 Part 6: Deriving the Aggregate Demand Curve from IS-LM

So far in Chapter 12, prices $P$ have been assumed fixed. But what happens when $P$ changes?

### The Mechanism

The IS-LM model operates with **real money balances** $M/P$. If $P$ rises:

$$P \uparrow \Rightarrow \frac{M}{P} \downarrow \Rightarrow \text{LM shifts left/up} \Rightarrow r \uparrow \Rightarrow I \downarrow \Rightarrow Y \downarrow$$

If $P$ falls:

$$P \downarrow \Rightarrow \frac{M}{P} \uparrow \Rightarrow \text{LM shifts right/down} \Rightarrow r \downarrow \Rightarrow I \uparrow \Rightarrow Y \uparrow$$

### The AD Curve

By varying $P$ and recording the IS-LM equilibrium $Y$ at each $P$, we trace out the ==aggregate demand (AD) curve==:

$$\boxed{AD \text{ curve}: \text{ negative relationship between } P \text{ and } Y, \text{ derived from IS-LM}}$$

> [!info] Why Is the AD Curve Downward Sloping?
> The underlying logic is the **interest rate effect** (working through investment $I$):
> $$P \uparrow \Rightarrow M/P \downarrow \Rightarrow r \uparrow \Rightarrow I \downarrow \Rightarrow Y \downarrow$$
>
> A secondary channel is the **wealth effect**: higher $P$ erodes the real value of financial assets → lower household wealth → lower $C$ → lower $Y$.
>
> Note: the AD curve is NOT downward sloping for the same reasons as a regular demand curve (substitution/income effects). It slopes down because higher prices tighten real money supply, raising $r$ and reducing investment. ^ad-slope

### Policy Shifts the AD Curve

Any policy that shifts IS or LM **at a given price level** $P$ also shifts the entire AD curve:

| Policy/Shock | Effect on IS/LM | Effect on AD Curve |
|---|---|---|
| $\uparrow G$ or $\downarrow T$ (expansionary fiscal) | IS shifts right | AD shifts right |
| $\downarrow G$ or $\uparrow T$ (contractionary fiscal) | IS shifts left | AD shifts left |
| $\uparrow M$ (expansionary monetary) | LM shifts right | AD shifts right |
| $\downarrow M$ (contractionary monetary) | LM shifts left | AD shifts left |
| Positive IS shock ($\uparrow$ investment optimism) | IS shifts right | AD shifts right |
| Negative IS shock ($\downarrow$ confidence) | IS shifts left | AD shifts left |

> [!tip] AD vs IS/LM: What Moves What
> - **Movement along the AD curve**: caused by $P$ changing (LM shifts, IS-LM intersection moves)
> - **Shift of the AD curve**: caused by policy or shocks (IS or LM shifts at a given $P$, changing $Y$ for every $P$)

---

## ⏳ Part 7: Short-Run vs Long-Run — IS Shocks and the AD-AS Model

Once we have the AD curve, we can reconnect IS-LM to the **AD-AS framework** from Chapter 10 to trace out both short-run and long-run effects.

### SR Effect of a Negative IS Shock

A negative IS shock (e.g. stock market crash) shifts IS left and AD left. In the short run:
- $Y$ falls below natural rate $\bar{Y}$
- $P$ falls slightly (or stays fixed — below SRAS)
- $r$ falls

The economy is in a recessionary gap.

### The Transition to Long-Run Equilibrium

Over time, when $Y < \bar{Y}$, the price level gradually **falls** (or inflation slows). This triggers:

1. $P \downarrow \Rightarrow M/P \uparrow \Rightarrow$ LM shifts right/down
2. Lower $r$ → $\uparrow I$ → $Y$ rises back toward $\bar{Y}$
3. SRAS shifts down (lower wages and input prices)
4. This process continues until $Y = \bar{Y}$ in long-run equilibrium

$$\text{Long-run: } Y \text{ returns to } \bar{Y}, \text{ but } P \text{ is permanently lower}$$

> [!example] Monetary Expansion: SR and LR Effects
> **Short run:** $\uparrow M$ → LM shifts right → $r \downarrow$, $Y \uparrow$ above $\bar{Y}$, $P$ unchanged.
>
> **Transition:** $Y > \bar{Y}$ → $P$ gradually rises → $M/P$ falls → LM shifts back left → $r$ rises back up.
>
> **Long run:** $P$ has risen proportionally to the rise in $M$. All real variables — $Y$, $r$, $I$, $C$ — return to their initial values. Only $P$ (the nominal variable) is permanently higher.
>
> **Conclusion: money is neutral in the long run.** The short-run effect on $Y$ is temporary; the long-run effect is purely on the price level. ^money-neutrality-lr

### IS-LM and AD-AS: Connecting the Frameworks

| Horizon | Price | Output | Key Mechanism |
|---|---|---|---|
| **Short run** | Fixed (sticky) | Demand-determined via IS-LM | IS-LM intersection |
| **Transition** | Gradually adjusts | Moves back to $\bar{Y}$ | SRAS shifts + LM endogenous response |
| **Long run** | Fully flexible | Supply-determined at $\bar{Y}$ | LRAS vertical; only $P$ changes |

The force that moves the economy from short run to long run is the **gradual adjustment of prices**:

$$Y > \bar{Y} \Rightarrow P \uparrow \text{ over time}$$
$$Y < \bar{Y} \Rightarrow P \downarrow \text{ over time}$$
$$Y = \bar{Y} \Rightarrow P \text{ stable}$$

> [!tip] Why Policy Can Shorten the Recession
> After a negative IS shock, the economy would *eventually* self-correct as prices fall and LM drifts right. But this can take years. Policymakers can **speed up recovery** by using expansionary fiscal or monetary policy to shift IS and/or LM rightward, restoring $Y$ to $\bar{Y}$ immediately without waiting for price adjustment.
>
> The trade-off: restoring $Y$ via policy keeps $P$ from falling (or even raises it), whereas waiting for self-correction lowers $P$ permanently. If policymakers want to stabilise output **and** minimise the budget deficit, combining fiscal + monetary policy (Response 2 logic from Part 4) minimises the required deficit increase.

---

## 📊 Summary Table: IS-LM Policy and Shock Analysis

| Scenario | IS Effect | LM Effect | Net $\Delta Y$ | Net $\Delta r$ |
|---|---|---|---|---|
| $\uparrow G$ (fiscal expansion) | Right | Unchanged | $+$ | $+$ (crowding-out) |
| $\downarrow T$ (tax cut) | Right (smaller) | Unchanged | $+$ | $+$ (crowding-out, less) |
| $\uparrow M$ (monetary expansion) | Unchanged | Right/Down | $+$ | $-$ |
| Negative IS shock | Left | Unchanged | $-$ | $-$ |
| Negative LM shock ($\uparrow$ money demand) | Unchanged | Left/Up | $-$ | $+$ |
| Combined expansionary policy | Right | Right/Down | $++$ | Ambiguous |

---

## 🧠 Summary

1. **IS-LM as a policy tool**: fiscal policy shifts the IS curve; monetary policy shifts the LM curve. Both raise $Y$ via different channels — fiscal via $\uparrow$ expenditure ($\uparrow G$ / $\downarrow T$); monetary via $\downarrow r$ → $\uparrow I$.

2. **Crowding out**: fiscal expansion raises $Y$, but also raises $r$, which reduces investment. The final $\Delta Y$ in IS-LM is smaller than the Keynesian cross multiplier alone predicts, because the money market feedback partially reverses the stimulus.

3. **Fed response matters**: if the Fed holds $r$ constant (accommodates fiscal policy with $\uparrow M$), fiscal multiplier is maximised. If Fed holds $Y$ constant, fiscal policy only raises $r$ with zero output effect (complete crowding-out).

4. **Shocks**: IS shocks (wealth, confidence) move $r$ and $Y$ in the same direction. LM shocks (money demand shifts) move $r$ and $Y$ in opposite directions.

5. **2001 recession**: multiple simultaneous IS shocks (dot-com crash, 9/11, accounting scandals) → IS/AD shifted left → recession. Fiscal and monetary policy responded by shifting IS and LM right to restore demand.

6. **AD curve**: derived by varying $P$ through the IS-LM model. Downward sloping because higher $P$ reduces $M/P$, raises $r$, lowers $I$, and lowers $Y$. Policy and shocks shift the AD curve.

7. **Short-run vs long-run**: after a shock, $Y$ deviates from $\bar{Y}$ in the short run. Over time, gradual price adjustment shifts SRAS and endogenously moves LM, returning the economy to $\bar{Y}$. Money is neutral in the long run.

---

## 🔗 Related Notes

- [[Lec_07-Aggregate Demand I & the IS-LM Model]] — builds the IS and LM curves from scratch; the direct prerequisite
- [[Lec_06-AS-AD Model & Economic Fluctuations]] — introduces the AD-AS framework; Chapter 12 connects IS-LM back to AD-AS
- [[Lec_05-Inflation]] — Fisher effect and money neutrality (connects to Part 7 long-run results)
- [[Lec_04-The Monetary System]] — how the Fed controls $M$; background for monetary policy shifts of LM
- [[Lec_03-Classical Theory & National Income]] — the long-run model where $Y = \bar{Y}$; the baseline for crowding-out intuition
