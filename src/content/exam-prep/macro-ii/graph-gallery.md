---
title: "Graph Gallery"
subject: macro-ii
type: reference
description: "Every diagram the Macro II final draws, five of them interactive: IS-LM with a fiscal, tax or money shock (the 2025 B numbers), Mundell-Fleming under floating and fixed rates, AD-AS from the short run to the long run, and the Solow steady state and golden rule, plus the past-paper sketches with the one thing to read off each."
course: Macro-Economics II
semester: 1
year: 2
order: 7
tags:
  - macro-ii
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore. The static figures are the worked-solution sketches from the papers. In a multiple-choice exam you still draw the graph in the margin: it is the fastest way to see which curve moves and which way.

## 1. IS-LM (cheat sheet §4)

The 2025 B Q19 economy: $C = 120 + 0.5(Y - T)$, $I = 100 - 10r$, $G = 50$, $T = 40$, $L = Y - 20r$, $M = 600$, $P = 2$, giving $r = 5$ and $Y = 400$. The dashed amber line is where the Keynesian cross would take output if $r$ stayed put; the gap to the new equilibrium is the crowding out.

```graph
type: macroii-islm
shock: fiscal
```

A tax cut shifts IS by less than the same rise in $G$ (multiplier $MPC/(1 - MPC)$ against $1/(1 - MPC)$):

```graph
type: macroii-islm
shock: tax
```

A money expansion moves LM: output up, $r$ down.

```graph
type: macroii-islm
shock: money
```

![[PP09_q19_is_lm_equilibrium.png]]

Read off: the crossing of IS and LM is the only point where both the goods and the money markets clear.

![[PP06_q13_crowding_out.png]]

Read off: the horizontal IS shift is the Keynesian-cross effect; the actual rise in $Y$ is smaller because $r$ rises.

![[PP11_q12_keynesian_cross.png]]

Read off: equilibrium where planned expenditure crosses the 45° line; a rise in $G$ moves it by $\Delta G/(1 - MPC)$.

![[PP05_q12_liquidity_preference.png]]

Read off: a rise in $M/P$ moves the vertical supply line right and lowers $r$ at a given $Y$.

## 2. Mundell-Fleming (cheat sheet §6)

$e$ is on the vertical axis and **up means appreciation**. $r = r^*$ throughout. Under floating rates $LM^*$ is vertical and fixes $Y$; under a fixed rate the central bank moves $LM^*$ to wherever $IS^*$ crosses the peg. Use the toggles in the last step to see all six cases.

```graph
type: macroii-mundell-fleming
regime: floating
shock: fiscal
```

```graph
type: macroii-mundell-fleming
regime: fixed
shock: money
```

```graph
type: macroii-mundell-fleming
regime: floating
shock: quota
```

![[PP07_q4_mf_tax_cut.png]]

Read off: a tax cut under floating rates appreciates the currency and leaves $Y$ unchanged.

![[PP05_q18_fixed_rate_monetary.png]]

Read off: under a fixed rate a money expansion is reversed to defend the peg, so nothing changes.

![[PP12_q20_floating_price_level.png]]

Read off: a lower price level raises $M/P$, $LM^*$ shifts right, $e$ falls and $Y$ rises.

![[PP07_q25_fall_in_world_rate.png]]

Read off: a fall in $r^*$ raises investment ($IS^*$ right) and money demand ($LM^*$ left), so $Y$ falls, the currency appreciates and $NX$ falls by more than $I$ rises (2024 B Q25).

## 3. AD-AS from the short run to the long run (cheat sheet §5)

The economy starts at $\bar Y = 100$. After a demand shock prices are sticky, so output moves first; then expected prices adjust, SRAS shifts and output returns to $\bar Y$ at a new price level. Drag the time slider in the last step.

```graph
type: macroii-adas
shock: demand-fall
```

An adverse supply shock gives stagflation. The toggle in the last step accommodates it: AD shifts right, output recovers at once and prices stay high.

```graph
type: macroii-adas
shock: supply
```

![[PP08_q25_ad_fall_adjustment.png]]

Read off: after AD falls, prices drift down and SRAS shifts down until $Y = \bar Y$.

![[PP01_q23_cost_push_shock.png]]

Read off: a cost-push shock raises $P$ and lowers $Y$; stabilising one worsens the other.

![[PP05_q23_sras_shift.png]]

Read off: when $P$ is above $EP$, expected prices are revised up and SRAS gradually shifts up (2022 B Q23).

## 4. Solow and the golden rule (cheat sheet §3)

There is no lecture deck for Solow, but 4 to 6 questions a paper. The steady state is where $sf(k)$ crosses $(\delta + n + g)k$; the golden rule is the saving rate that maximises the gap between $f(k)$ and break-even investment.

```graph
type: solow-model
figure: golden-rule
```

![[PP01_q3_golden_rule.png]]

Read off: with $y = k^{0.5}$ the golden-rule saving rate is $\alpha = 50\%$.

![[PP09_q6_above_golden_rule_path.png]]

Read off: above the golden rule, cutting saving makes consumption jump up, drift down as $k$ falls, and end above where it started (2025 B Q6).

![[PP07_q17_ak_saving_threshold.png]]

Read off: in the AK model growth needs $sA > \delta$; with $A = 0.5$ and $\delta = 10\%$ that is $s > 20\%$.

## 5. Hysteresis (cheat sheet §7)

![[PP04_q24_hysteresis_path.png]]

Read off: $u^n$ follows past unemployment, so compute it period by period instead of letting it snap back.
