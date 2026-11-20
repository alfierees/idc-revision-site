---
title: "Aggregate Demand I: Building the IS-LM Model"
week: 7
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 11 — Aggregate Demand I: Building the IS-LM Model"
instructor: Alon Cohen
date: 2026-05-19
tags:
  - macro-economics-ii
  - IS-LM
  - keynesian-cross
  - IS-curve
  - LM-curve
  - liquidity-preference
  - fiscal-policy
  - monetary-policy
  - multiplier
  - aggregate-demand
  - short-run
aliases:
  - Chapter 11 Macro II
  - IS-LM Model
  - Keynesian Cross
  - Aggregate Demand I
subject: macro-ii
in_scope: true
---

# Aggregate Demand I: Building the IS-LM Model

> Part of: [[Macro-Economics II]] | Key concepts: [[IS Curve]], [[LM Curve]], [[Keynesian Cross]], [[Liquidity Preference]], [[Fiscal Multiplier]], [[Money Demand]], [[Short-Run Equilibrium]], [[Aggregate Demand]]

---

## 🗺️ What This Chapter Is About

Chapter 10 introduced the AS-AD framework and the concept of price stickiness in the short run. **Chapter 11 builds the demand side in detail** — specifically the **IS-LM model**, which is the backbone of modern short-run macroeconomics.

The IS-LM model simultaneously determines the **interest rate** ($r$) and **output** ($Y$) by requiring equilibrium in two markets at once:
- The **goods market** — planned expenditure equals actual output (captured by the IS curve)
- The **money market** — supply of real money balances equals demand (captured by the LM curve)

The IS-LM model is the analytical engine behind the aggregate demand curve studied in chapters 11–14. Think of it as "opening up the black box" of the AD curve to show *why* aggregate demand slopes downward and *how* policy shifts it.

> [!info] Where We Are in the Course
> | Chapter | Focus |
> |---|---|
> | 3–5 | Long-run real and nominal sides (classical model) |
> | 8–9 | Very long-run: growth theory |
> | 10 | Short-run intro: AS-AD, price stickiness |
> | **11** | **Building IS-LM (demand side)** |
> | 12–14 | Using IS-LM: policy analysis, open economy |

**Key assumption throughout this chapter:** Prices $P$ are **fixed** in the short run. This means we do not yet worry about the supply side — all action is on the demand side. The equilibrium $Y$ is demand-determined.

---

## 📐 Part 1: The Keynesian Cross

### The Core Idea

The ==Keynesian cross== is the simplest model of output determination in a closed economy. It says: **output is determined by planned expenditure** — in equilibrium, what firms produce equals what people plan to spend.

**Notation:**
- $C$ = household consumption
- $I$ = planned (business) investment
- $G$ = government purchases
- $T$ = taxes
- $PE = C + I + G$ = planned expenditure
- $Y$ = real GDP = actual expenditure

**Equilibrium condition:**
$$\boxed{Y = PE = C(Y-T) + I + G}$$

The consumption function $C(Y-T)$ captures that consumption rises with disposable income $(Y - T)$. The MPC (marginal propensity to consume) is the slope: $0 < MPC < 1$.

### Why the Model Works: Inventory Adjustment

If prices are fixed (and the interest rate is temporarily assumed fixed too), how does the economy reach equilibrium? Through **unplanned inventory changes**: ^inventory-adjustment

> [!info] Adjustment Mechanism
> - If $PE > Y$: spending exceeds output → inventories fall below planned levels → firms **increase production**
> - If $PE < Y$: output exceeds spending → inventories pile up above planned levels → firms **cut production**
> - Equilibrium: $PE = Y$ → no unplanned inventory change

This is why the 45° line matters: it shows all points where actual output = planned expenditure. The economy always gravitates toward the intersection of the PE line and the 45° line.

### The Fiscal Multiplier: Government Purchases

When $G$ rises by $\Delta G$, what happens to equilibrium output?

**Derivation:**

Starting from $Y = C(Y-T) + I + G$, take changes:

$$\Delta Y = \underbrace{MPC \cdot \Delta Y}_{\Delta C} + \Delta G$$

$$\Delta Y - MPC \cdot \Delta Y = \Delta G$$

$$\Delta Y(1 - MPC) = \Delta G$$

$$\boxed{\frac{\Delta Y}{\Delta G} = \frac{1}{1 - MPC}}$$

> [!tip] Why Is the Multiplier > 1?
> The initial $\Delta G$ raises income by $\Delta G$. This extra income causes households to spend $MPC \cdot \Delta G$ more. That extra spending creates more income, which creates more spending… The total effect is the sum of a geometric series:
> $$\Delta Y = \Delta G \cdot (1 + MPC + MPC^2 + \ldots) = \frac{\Delta G}{1 - MPC}$$
> If $MPC = 0.8$, the multiplier is $\frac{1}{1-0.8} = 5$. A €1 rise in $G$ raises output by €5!

### The Tax Multiplier

An increase in taxes $\Delta T$ reduces disposable income, which reduces consumption, which reduces $PE$ and hence $Y$.

**Derivation:**

$$\Delta Y = MPC \cdot \Delta(Y - T) = MPC(\Delta Y - \Delta T)$$

$$\Delta Y(1 - MPC) = -MPC \cdot \Delta T$$

$$\boxed{\frac{\Delta Y}{\Delta T} = \frac{-MPC}{1 - MPC}}$$

> [!info] Comparing the Two Multipliers
> | Policy change | Multiplier (MPC = 0.8) | Direction |
> |---|---|---|
> | ↑ Government purchases $\Delta G$ | $+5$ | Output rises |
> | ↑ Taxes $\Delta T$ | $-4$ | Output falls |
>
> The tax multiplier is **smaller in absolute value** than the spending multiplier. Why? When government spends €1 more, all €1 enters the expenditure stream immediately. When taxes fall by €1, households save $(1-MPC)$ of the tax cut, so only $MPC$ of €1 enters the expenditure stream. Saving "leaks" out of the multiplier process.

> [!warning] Common Mistake: Balanced Budget Multiplier
> If $\Delta G = \Delta T$ (a balanced budget expansion), the net effect is NOT zero. The spending multiplier dominates, and output rises by exactly $\Delta G$. This is the **balanced budget multiplier = 1** result.

---

## 📉 Part 2: The IS Curve

### From Keynesian Cross to the IS Curve

The Keynesian cross assumed a **fixed interest rate** — investment was exogenous. Now we relax this. Planned investment depends negatively on the real interest rate $r$: when borrowing is expensive, firms invest less.

$$I = I(r), \quad \frac{dI}{dr} < 0$$

The ==IS curve== shows all $(r, Y)$ combinations where the **goods market is in equilibrium**:

$$\boxed{Y = C(Y-T) + I(r) + G}$$

**Derivation of IS curve shape:**

> When $r$ falls → $I(r)$ rises → $PE$ shifts up → Keynesian cross gives higher $Y$  
> When $r$ rises → $I(r)$ falls → $PE$ shifts down → lower $Y$

Therefore the IS curve is **downward sloping** in $(r, Y)$ space — lower interest rates are associated with higher output.

> [!tip] Intuition for the IS Curve Slope
> A lower interest rate makes investment cheaper. Firms borrow and invest more, which raises planned expenditure. Since $PE = Y$ in equilibrium, output must rise to match the new higher spending. So: $r \downarrow \Rightarrow I \uparrow \Rightarrow PE \uparrow \Rightarrow Y \uparrow$. Negative slope. ^is-slope

### Fiscal Policy and IS Curve Shifts

For **any given interest rate** $r$:
- **Expansionary fiscal policy** ($\uparrow G$ or $\downarrow T$): raises $PE$ → raises equilibrium $Y$ → IS shifts **right**
- **Contractionary fiscal policy** ($\downarrow G$ or $\uparrow T$): reduces $PE$ → IS shifts **left**

The **horizontal shift** of the IS curve from a change in $G$ equals the Keynesian cross multiplier times $\Delta G$:

$$\Delta Y\Big|_{r \text{ fixed}} = \frac{1}{1-MPC} \cdot \Delta G$$

> [!info] IS Curve: Summary Table
> | Factor | Effect on IS curve |
> |---|---|
> | ↑ G or ↓ T (expansionary fiscal) | Shifts right |
> | ↓ G or ↑ T (contractionary fiscal) | Shifts left |
> | ↓ r (along the IS curve) | Movement down/right along curve |
> | ↑ Investment optimism ($\uparrow I$ autonomous) | Shifts right |

---

## 💵 Part 3: Theory of Liquidity Preference

### Keynes's Theory of Money Market Equilibrium

The ==theory of liquidity preference== (Keynes) explains the interest rate as being determined by money supply and money demand. This gives us the LM curve.

**Key variable:** Real money balances $= M/P$  
- $M$ = nominal money supply (controlled by the central bank)
- $P$ = price level (fixed in the short run)

Since $P$ is fixed, controlling $M$ is equivalent to controlling $M/P$.

### Money Supply

The central bank fixes the supply of real money balances:

$$\left(\frac{M}{P}\right)^s = \overline{\frac{M}{P}}$$

This is a vertical line in $(M/P, r)$ space — the supply doesn't depend on the interest rate.

**How the CB controls $M$:**
- **Open market operations**: buying bonds from the public → injects money; selling bonds → withdraws money
- **Banking regulation**: affecting reserve requirements changes banks' willingness to create deposits (loans create deposits)

### Money Demand

People hold money for transactions and liquidity. But holding money has an **opportunity cost** — the interest foregone by not holding bonds. Therefore money demand depends negatively on $r$:

$$\left(\frac{M}{P}\right)^d = L(r, Y)$$

where $\frac{\partial L}{\partial r} < 0$ and $\frac{\partial L}{\partial Y} > 0$.

> [!tip] Why Does Money Demand Fall When $r$ Rises?
> The nominal interest rate is the cost of holding money rather than bonds. When $r$ is high, the temptation to hold bonds (interest-bearing) rather than cash (non-interest-bearing) is strong. People economize on cash balances. Hence money demand is decreasing in $r$.

**Equilibrium in the money market:**

$$\frac{M}{P} = L(r)$$

The interest rate adjusts to clear the money market. If there's excess demand for money (people want more cash), they sell bonds → bond prices fall → interest rate rises until equilibrium is restored.

### Monetary Policy and the Interest Rate

- **Expansionary monetary policy** ($M \uparrow$): shifts money supply right → at the old $r$, supply exceeds demand → people buy bonds → bond prices rise → **$r$ falls**
- **Contractionary monetary policy** ($M \downarrow$): supply shifts left → people sell bonds → **$r$ rises**

> [!warning] Short-Run vs Long-Run: The Fisher Effect Paradox
> In the **long run** (Chapter 5), higher $M$ leads to inflation and, via the Fisher effect, **higher** nominal interest rates. But here in the short run, higher $M$ **lowers** $r$. Is this a contradiction?
>
> **No!** The economy behaves differently across time horizons:
> - **Short run**: $P$ is sticky. $M \uparrow \Rightarrow M/P \uparrow \Rightarrow r \downarrow$ (real effect)
> - **Long run**: the lower $r$ boosts output and demand → prices rise proportionally to $M$ → $M/P$ returns to original level → money neutrality restored → Fisher effect drives $r$ back up

### Case Study: Volcker Disinflation (1979–80) ^volcker

Paul Volcker (Fed Chair) dramatically tightened monetary policy in late 1979 to crush 10%+ inflation.

| | Prediction | Actual Outcome |
|---|---|---|
| **Short run** (Keynesian liquidity preference) | $M \downarrow \Rightarrow r \uparrow$ | Aug 1979: $i = 10.4\%$ → Apr 1980: $i = 15.8\%$ ✓ |
| **Long run** (Classical Fisher effect) | $\pi \downarrow \Rightarrow i \downarrow$ | Jan 1983: $\pi = 3.7\%$, $i = 8.2\%$ ✓ |

Both models are correct — they just apply to different time horizons. The key is whether prices are sticky (SR) or flexible (LR).

---

## 📈 Part 4: The LM Curve

### Incorporating Income into Money Demand

So far we assumed money demand depends only on $r$. But higher income $Y$ means more transactions → more need for cash → higher money demand:

$$\left(\frac{M}{P}\right)^d = L(r, Y), \quad \frac{\partial L}{\partial Y} > 0$$

The ==LM curve== shows all $(r, Y)$ combinations where the **money market is in equilibrium**: ^lm-definition

$$\boxed{\frac{M}{P} = L(r, Y)}$$

### Why the LM Curve is Upward Sloping

> When $Y$ rises → transactions demand for money rises → at the old $r$, there is excess demand for money → people sell bonds → bond prices fall → **$r$ rises**

Therefore higher $Y$ is associated with higher $r$ in money market equilibrium → the LM curve is **upward sloping** in $(r, Y)$ space.

> [!tip] Intuition for LM Curve Slope
> Think of a fixed money supply being "stretched" across more economic activity. More income means more transactions — people need more cash. Since supply is fixed, competition for liquidity bids up the price of money — the interest rate. So $Y \uparrow \Rightarrow L^d \uparrow \Rightarrow r \uparrow$ to restore equilibrium. ^lm-slope

### Monetary Policy and LM Curve Shifts

For **any given income level** $Y$:
- **Expansionary monetary policy** ($M \uparrow$, or equivalently $M/P \uparrow$): money supply shifts right → at old $r$, supply exceeds demand → $r$ falls → LM shifts **right/downward** (lower $r$ for same $Y$)
- **Contractionary monetary policy** ($M \downarrow$): LM shifts **left/upward** (higher $r$ for same $Y$)

> [!info] LM Curve: Summary Table
> | Factor | Effect on LM curve |
> |---|---|
> | ↑ M (expansionary monetary policy) | Shifts right/down |
> | ↓ M (contractionary monetary policy) | Shifts left/up |
> | ↑ Y (along the LM curve) | Movement up/right along curve |
> | ↑ Money demand (e.g. more cash use) | Shifts left/up |

> [!example] Credit Card Fraud and the LM Curve
> If fraud causes consumers to use cash more, money demand $L(r, Y)$ rises at every $(r, Y)$. This is an increase in money demand → equivalent to a leftward shift of money supply → LM shifts **up/left** → at any income level, the interest rate needed to equilibrate the money market is now higher.

---

## ⚖️ Part 5: IS-LM Equilibrium

### Simultaneous Goods and Money Market Equilibrium

The **short-run equilibrium** of the economy is the unique $(Y^*, r^*)$ that satisfies **both** equilibrium conditions simultaneously:

$$\text{IS: } Y = C(Y-T) + I(r) + G$$
$$\text{LM: } \frac{M}{P} = L(r, Y)$$

Graphically, this is the **intersection of the IS and LM curves**.

$$\boxed{(Y^*, r^*) = \text{IS} \cap \text{LM}}$$

> [!info] What Each Curve Pins Down
> - The IS curve: for any $r$, what level of $Y$ clears the goods market?
> - The LM curve: for any $Y$, what level of $r$ clears the money market?
> - Together: a unique $(Y^*, r^*)$ that clears both simultaneously

### The Big Picture: Where IS-LM Fits

The IS-LM model is the engine that generates the **aggregate demand (AD) curve**. When the price level $P$ changes, the real money supply $M/P$ changes, the LM curve shifts, and a new IS-LM equilibrium gives a new $Y$. Tracing out how $Y$ changes as $P$ changes gives the AD curve.

```
Keynesian Cross → IS curve
                              ↘
                               IS-LM model → AD curve → AD-AS model → Explains fluctuations
                              ↗
Liquidity Preference → LM curve
```

We are currently at the IS-LM stage. Chapters 12–14 use IS-LM to analyse policy in a closed and open economy before deriving the full AD-AS framework.

---

## 📊 Summary Table: IS vs LM

| Feature | IS Curve | LM Curve |
|---|---|---|
| **Market** | Goods market | Money market |
| **Equilibrium condition** | $Y = C(Y-T) + I(r) + G$ | $M/P = L(r, Y)$ |
| **Slope in $(r, Y)$ space** | Downward sloping | Upward sloping |
| **Key relationship** | $r \downarrow \Rightarrow I \uparrow \Rightarrow Y \uparrow$ | $Y \uparrow \Rightarrow L^d \uparrow \Rightarrow r \uparrow$ |
| **Shifts right when** | $\uparrow G$, $\downarrow T$, $\uparrow I$ autonomous | $\uparrow M$ (exp. monetary policy) |
| **Shifts left when** | $\downarrow G$, $\uparrow T$ | $\downarrow M$ (cont. monetary policy) |
| **Policy tool** | Fiscal policy | Monetary policy |

---

## 🧠 Summary

1. **Keynesian cross**: the simplest model of income determination. Output adjusts to equate planned expenditure ($PE$) with actual output ($Y$). Fiscal policy has multiplier effects: $\Delta Y / \Delta G = 1/(1-MPC)$; tax multiplier is $-MPC/(1-MPC)$ (smaller in absolute value because of saving leakage).

2. **IS curve**: derived from the Keynesian cross by allowing investment to depend on the interest rate. Shows all $(r, Y)$ pairs consistent with goods market equilibrium. **Downward sloping** — lower $r$ → more investment → higher $Y$. Expansionary fiscal policy shifts IS right; contractionary shifts it left.

3. **Theory of liquidity preference**: interest rate is determined by money supply and money demand. Money demand $L(r)$ falls with $r$ (opportunity cost). Money supply is fixed by the CB. Expansionary monetary policy lowers $r$ in the short run (LM/Keynesian); raises $r$ in the long run (Fisher/Classical).

4. **LM curve**: derived from liquidity preference by allowing money demand to depend on income. Shows all $(r, Y)$ pairs consistent with money market equilibrium. **Upward sloping** — higher $Y$ → more money demand → higher $r$ to restore equilibrium. Expansionary monetary policy shifts LM right/down.

5. **IS-LM equilibrium**: the intersection of IS and LM simultaneously clears both the goods market and the money market, pinning down both output $Y^*$ and the interest rate $r^*$. This intersection is the foundation of the aggregate demand curve.

---

## 🔗 Related Notes

- [[Lec_06-AS-AD Model & Economic Fluctuations]] — introduces short-run vs long-run, price stickiness, AS-AD framework
- [[Lec_05-Inflation]] — Fisher effect, money neutrality, connection to LM long-run behaviour
- [[Lec_04-The Monetary System]] — how the CB controls money supply (open market ops, reserve requirements)
- [[Lec_03-Classical Theory & National Income]] — goods market in the long run (compare with IS curve)
