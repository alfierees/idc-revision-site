---
title: "Cheat Sheet (Lec 1–12)"
subject: maths-for-economists-a
type: reference
description: "Everything the final exam uses from the 12 lectures, in the order you need it: functions, limits, continuity, derivatives, the full function investigation and the economics questions, each with a worked example from a past paper."
course: Maths for Economists A
instructor: Hever Schulberg
semester: 1
year: 1
order: 1
pinned: true
tags:
  - maths-for-economists-a
  - exam-prep
  - cheat-sheet
aliases:
  - Maths A Cheat Sheet
  - Math I Cheat Sheet
---

> **The exam:** 3 hours, **4 open questions** worth 20 to 35 points each, a non-graphing calculator and the course formula sheet. Every claim must be justified: a correct number with no working gets little. The questions have had the same four jobs for over a decade:
>
> | Slot | What it usually is | Section |
> |---|---|---|
> | The big question (30 to 35 points) | A **full function investigation**: domain, intercepts, asymptotes, $f'$, extrema, $f''$, inflection, graph, then a transformation of the graph | §8 to §10 |
> | A piecewise question | Continuity at the seam (often with a parameter), differentiability **from the definition**, corner / cusp / vertical tangent, extrema | §4, §6 |
> | "Unrelated segments" | 3 to 5 short limits ($\tfrac00$, $\tfrac c0$ with $\lvert x\rvert$, $\infty$ with roots, Euler $1^\infty$), a tangent of a composite, an integral, "is this a function" | §2 to §7 |
> | The economics question | Demand, revenue, cost, profit: marginal values **with their meaning**, the profit or revenue maximum | §11 |
>
> Since 2024 the papers are assembled from **earlier exams and the problem sets, often word for word** (the 2025 Moed B paper lists its sources: every question is an old exam or an exercise). Doing the problem sets and the last ten years of papers is the single best preparation.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| "Find the domain" | Denominator $\neq 0$, even root $\ge 0$, $\ln(\cdot) > 0$. Odd roots and exponentials are fine everywhere | §1 |
| Is $y^2 + xy = 6$ a function? | Solve for $y$, or find one $x$ with two $y$ values | §1 |
| $f(x+2)$, $f(-x)$, $-f(x)$, $\lvert f(x)\rvert$ | Move or flip the known graph; extreme points move with it | §1 |
| A limit that substitutes to $\tfrac00$ | Factor and cancel, or multiply by the conjugate | §2 |
| A limit that substitutes to $\tfrac{c}{0}$ | Infinite: find the **sign** from each side separately | §3 |
| An absolute value near its zero | Split: $\lvert u\rvert = u$ or $-u$ depending on the side | §3 |
| $x \to \pm\infty$, polynomial or root quotient | Divide by the top power; $\sqrt{x^2} = \lvert x\rvert = -x$ at $-\infty$ | §3 |
| $(\text{base})^{\text{exponent}}$ at $\infty$ or $0$ | Base $\to 1$ and exponent $\to\infty$: Euler, $e^{\lim (\text{base}-1)\cdot\text{exp}}$. Otherwise just substitute | §4 |
| A piecewise function, "continuous", "find $a$" | Left limit = right limit = value at the seam | §5 |
| "Using the definition of the derivative" | One-sided $\lim_{h\to0^\pm}\tfrac{f(x_0+h)-f(x_0)}{h}$ at the seam | §6 |
| "Corner? Vertical tangent?" | Compare the two one-sided slopes | §6 |
| $g(3x)$, $[g(x)]^4$, data like $g(0)=0.5,\ g'(0)=2$ | Chain rule, plug in, point-slope line | §7 |
| "Investigate the function" | The 8-step routine, in order | §8 to §10 |
| The graph of $f'$ is given | Sign of $f'$ = rising or falling; slope of $f'$ = concavity of $f$ | §10 |
| Price-demand, revenue, cost, profit | $R = xp$, $P = R - C$, marginal = derivative, meaning in words | §11 |
| $\int_{-1}^{a} f\,dx = 0$ | Split at the seam, integrate, solve for $a$ | §12 |

---

## 1. Lec 01 to 03 — Functions, domain, piecewise, transformations

**Domain:** the $x$ values where the formula makes sense.

| Piece | Condition |
|---|---|
| $\dfrac{p(x)}{q(x)}$ | $q(x) \neq 0$ |
| $\sqrt{u}$, $\sqrt[4]{u}$ (even roots) | $u \ge 0$ (and $> 0$ if it is also in a denominator) |
| $\sqrt[3]{u}$, $u^{1/5}$ (odd roots) | all $u$ |
| $\ln u$ | $u > 0$ |
| $a^u$, $e^u$ | all $u$ |

- **Is it a function?** Every $x$ in the domain needs exactly **one** $y$. $y^2 + xy - 6 = 0$ is not ($x = 1$ gives $y = 2$ and $y = -3$). $xy + y - x = 5$ gives $y = \tfrac{5+x}{x+1}$: a function, but not on all $x$ (nothing at $x = -1$). Two formulas are the **same function** only if their domains also match.
- **Composition:** $(f\circ g)(x) = f(g(x))$. Its domain: $x$ in the domain of $g$ with $g(x)$ in the domain of $f$.
- **Absolute value** as a piecewise function: $\lvert u\rvert = u$ where $u \ge 0$, and $-u$ where $u < 0$. Always split at the zeros of $u$ before differentiating or taking a limit.
- **Piecewise functions:** each formula holds only on its own interval. An intercept found in a piece must lie inside that piece's interval, or it is rejected.

**Transformations of a known graph** (each extreme point, intercept and asymptote moves with the graph):

| New function | What happens | A point $(x_0, y_0)$ goes to |
|---|---|---|
| $f(x + c)$, $c > 0$ | shift **left** by $c$ | $(x_0 - c,\ y_0)$ |
| $f(x - c)$ | shift **right** by $c$ | $(x_0 + c,\ y_0)$ |
| $f(x) + c$ | shift **up** | $(x_0,\ y_0 + c)$ |
| $f(-x)$ | reflect in the $y$-axis | $(-x_0,\ y_0)$, max stays max |
| $-f(x)$ | reflect in the $x$-axis | $(x_0,\ -y_0)$, max becomes min |
| $-f(-x)$ | both reflections | $(-x_0,\ -y_0)$ |
| $\lvert f(x)\rvert$ | flip the parts below the axis up | zeros become minima (often corners) |

> [!example] 2025 Moed B Q1 (= 2019 Moed A Q2)
> $f(x) = \lvert (x-3)^2 x\rvert$. The inside $y = (x-3)^2x$ has $y' = 3(x-3)(x-1)$: max $(1, 4)$, min $(3, 0)$, and it is negative for $x < 0$. Flipping that part up makes $(0, 0)$ a minimum too. So $f$: min at $0$, max at $1$, min at $3$. Then $f(x+2)$: min $-2$, max $-1$, min $1$. And $f(-x)$: min $-3$, max $-1$, min $0$.

**Exponentials (Lec 03):** $a^x$ with $a > 1$ rises, $0 < a < 1$ falls, both through $(0, 1)$ with asymptote $y = 0$. So $y = -3 + e^{1+x}$ is $e^x$ shifted left 1 and down 3: asymptote $y = -3$, $y$-intercept $(0,\ e - 3)$ (2024 Moed B Q3b).

---

## 2. Lec 03 and 04 — Limits and the $\tfrac00$ form

**Always substitute first.** A number is the answer. $\tfrac00$ means "simplify". $\tfrac{c}{0}$ with $c \neq 0$ means "infinite, find the sign" (§3).

| Form | Fix |
|---|---|
| Polynomials over polynomials, $\tfrac00$ | Factor both, cancel the common factor $(x - a)$ |
| A root with a $\tfrac00$ | Multiply top and bottom by the **conjugate** ($\sqrt{u} - b \to \sqrt u + b$) |
| Two fractions subtracted, $\infty - \infty$ | Common denominator, then factor |
| Different one-sided behaviour | Compute $x \to a^-$ and $x \to a^+$ separately: the limit exists only if they agree |

> [!example] 2025 Moed A Q2a
> $$
> \lim_{x\to3}\frac{1-\sqrt{x-2}}{x-3}=\lim_{x\to3}\frac{1-(x-2)}{(x-3)\left(1+\sqrt{x-2}\right)}=\lim_{x\to3}\frac{-(x-3)}{(x-3)\left(1+\sqrt{x-2}\right)}=-\frac12
> $$

> [!example] 2024 Moed A Q2a
> $\displaystyle\lim_{x\to1}\left(\frac1{x-1}-\frac2{x^2-1}\right)=\lim_{x\to1}\frac{x+1-2}{(x-1)(x+1)}=\lim_{x\to1}\frac1{x+1}=\frac12$.

---

## 3. Lec 05 — Infinite limits, absolute values, limits at infinity

**$\tfrac{c}{0}$:** the limit is $\pm\infty$; the sign comes from the sign of $c$ and the side the denominator approaches $0$ from.

- $(x - a)^{\text{even}}$ in the denominator is positive on both sides: same infinity both sides.
- $(x - a)^{\text{odd}}$ changes sign: $\pm\infty$ differ, so the two-sided limit does not exist (but there is still a vertical asymptote).
- An absolute value in the denominator is $0^+$ from both sides.

> [!example] 2025 Moed B Q2a
> $\displaystyle\lim_{x\to0}\frac{x-1}{\lvert -x^2+x\rvert}$: the top $\to -1$, the bottom $\to 0^+$ from both sides, so the limit is $-\infty$.

> [!example] 2024 Moed A Q1d: when $\lvert\cdot\rvert$ decides the answer
> $f(x) = \dfrac{x-2}{\lvert x^2 - 2x\rvert} = \dfrac{x-2}{\lvert x\rvert\,\lvert x-2\rvert}$. From the right of $2$: $\tfrac{1}{\lvert x\rvert} \to \tfrac12$. From the left: $\tfrac{-1}{\lvert x\rvert} \to -\tfrac12$. Different, so $\lim_{x\to2} f$ **does not exist**.

**Limits at $\pm\infty$:**

| Type | Rule |
|---|---|
| Rational, degree top < bottom | $0$ |
| Rational, equal degrees | ratio of the leading coefficients |
| Rational, degree top > bottom | $\pm\infty$ (sign from the leading terms) |
| Roots | Pull $x^2$ out of the root: $\sqrt{x^2 + \dots} = \lvert x\rvert\sqrt{1 + \dots}$, and $\lvert x\rvert = -x$ when $x \to -\infty$ |
| $\infty - \infty$ with a root | Conjugate |
| Competing exponentials $3^x + 2^x$ | Factor out the **largest** base |
| $a^x$ | $\to\infty$ or $0$ by whether $a > 1$, and the direction |

> [!example] 2024 Moed B Q2c
> $$
> \lim_{x\to-\infty}\frac{x\sqrt{3x^2+x}}{x^2-8}=\lim_{x\to-\infty}\frac{x\cdot\lvert x\rvert\sqrt{3+\frac1x}}{x^2\left(1-\frac8{x^2}\right)}=\lim_{x\to-\infty}\frac{x\cdot(-x)\sqrt3}{x^2}=-\sqrt3
> $$

---

## 4. Lec 06 — Euler limits, $e$, logarithms

**Is it Euler?** Substitute the base and the exponent **separately** first.

- Base $\to b \neq 1$: just compute $b^{\lim\text{exponent}}$ (no $e$ at all).
- Base $\to 1$ and exponent $\to \pm\infty$: the $1^\infty$ form. Write the base as $1 + f(x)$ with $f \to 0$; then

$$
\lim\,(1+f)^{g}=e^{\,\lim f\cdot g}
$$

(This is $\left[(1+f)^{1/f}\right]^{f\cdot g}$ with $(1+f)^{1/f}\to e$. Show that step in the exam.)

> [!example] 2024 Moed A Q2e
> $\dfrac{x+2100}{x+76} = 1 + \dfrac{2024}{x+76}$, so $\displaystyle\lim_{x\to\infty}\left(\frac{x+2100}{x+76}\right)^x = e^{\lim\frac{2024x}{x+76}} = e^{2024}$.

> [!example] 2025 Moed B Q2b: the trap
> $\displaystyle\lim_{x\to\infty}\left(1+\frac{x^2}{x^2+1}\right)^{\frac{2x}{x-1}}$: the base $\to 2$, not $1$, and the exponent $\to 2$. The answer is $2^2 = 4$.

> [!example] 2025 Moed A Q2b
> $\displaystyle\lim_{x\to0}(1+x)^{2/x} = e^{\lim x\cdot\frac2x} = e^2$.

**Other exponential facts:** $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$. $e^{1/x}$: $\to\infty$ as $x\to0^+$, $\to 0$ as $x \to 0^-$, $\to 1$ as $x\to\pm\infty$. That gives functions like $e^{\frac1{x-4}}+2$ a vertical asymptote $x = 4$ from **one** side only and a horizontal asymptote $y = 3$ (2025 Moed B Q2c).

**Log rules:** $\ln(ab) = \ln a + \ln b$, $\ln\tfrac ab = \ln a - \ln b$, $\ln a^k = k\ln a$, $\ln e = 1$, $\ln 1 = 0$, $a^x = e^{x\ln a}$.

---

## 5. Lec 04 — Continuity (and the parameter that makes it)

$f$ is continuous at $x_0$ when all three hold:

1. $f(x_0)$ is defined,
2. $\lim_{x\to x_0} f(x)$ exists (left = right),
3. they are equal.

Polynomials, roots, exponentials, logs and quotients are continuous on their domains, so a non-piecewise function is continuous exactly on its domain. A **piecewise** function needs the check at every seam. "The interval of continuity" = the domain minus the seams that fail.

> [!example] 2025 Moed B Q3 (= 2022 Moed A Q1)
> $f = x^2 + 2x$ for $x < 0$, $\sqrt x$ for $x \ge 0$. At $0$: $f(0) = 0$, right limit $\sqrt0 = 0$, left limit $0$. All agree: continuous for all $x$.

**With a parameter:** write left limit = right limit = $f(x_0)$ and solve for the parameter. If a piece is $\tfrac00$ at the seam, simplify it first (factor or conjugate).

---

## 6. Lec 07 — Derivative from the definition, differentiability, corner / cusp / vertical tangent

$$
f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}
$$

**At a seam, do the two one-sided limits** ($h\to0^-$ uses the left formula, $h \to 0^+$ the right) with $f(x_0)$ from the piece that owns the seam. Differentiable = both one-sided limits exist, are **finite** and **equal**.

| One-sided slopes at $x_0$ (with $f$ continuous) | Name | Tangent line? |
|---|---|---|
| Equal and finite | differentiable | yes, slope $f'(x_0)$ |
| Two different finite numbers | **corner** | no |
| $+\infty$ and $-\infty$ (opposite) | **cusp** | no |
| Both $+\infty$ or both $-\infty$ | **vertical tangent** | yes, the line $x = x_0$ |
| One finite, one infinite | the course key calls it a **corner** | no |
| $f$ not continuous (a jump) | not differentiable | no |

> [!example] 2025 Moed B Q3a5
> At $0$: right $\lim\frac{\sqrt h}{h} = \lim\frac1{\sqrt h} = \infty$, left $\lim\frac{h^2+2h}{h} = 2$. Not differentiable. No vertical tangent (steep on one side only), and the key says **yes, a corner**.

Standard shapes: $\lvert x\rvert$ corner, $x^{2/3}$ cusp, $\sqrt[3]{x}$ vertical tangent. In general $x^{m/n}$ near $0$, with $n$ odd and $m < n$: odd $m$ gives a vertical tangent, even $m$ a cusp. $\lvert x-2\rvert\sqrt[3]{x-2}$ is differentiable at $2$ with $f'(2) = 0$ (Lec 07): an absolute value does not always make a corner.

**Rules:**

$$
(x^n)'=nx^{n-1},\qquad (uv)'=u'v+uv',\qquad \left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\qquad \left(\sqrt u\right)'=\frac{u'}{2\sqrt u}
$$

---

## 7. Lec 08 and 09 — Chain rule, exponentials, tangents of composites

$$
\left[f(g(x))\right]'=f'(g(x))\cdot g'(x),\qquad (e^u)'=u'e^u,\qquad (a^u)'=u'\,a^u\ln a,\qquad (\ln u)'=\frac{u'}{u}
$$

**Tangent line** at $x_0$: $y - f(x_0) = f'(x_0)(x - x_0)$. Horizontal tangents: solve $f'(x) = 0$.

**Composites from data** (a favourite segment): turn the words into $g(\cdot)$ and $g'(\cdot)$ values, differentiate layer by layer, then plug in.

> [!example] 2024 Moed B Q4
> $g(0) = 0.5$, $g'(0) = 2$. For $y = g(3x)$: $y'(0) = 3g'(0) = 6$. For $y = [g(3x)]^4$: $y'(0) = 4\,g(0)^3\cdot g'(0)\cdot 3 = 12 \cdot 0.125 \cdot 2 = 3$, point $(0,\ 0.5^4)$, so $y = 3x + \tfrac1{16}$.

> [!example] 2025 Moed A Q2f (= PS 9 Q4)
> $f(0) = 2$, $f'(0) = 1$, $f(1) = 3$. For $y = f(x^2 + 1)$ at $x = 0$: the point is $f(1) = 3$ and the slope $f'(1)\cdot 2\cdot0 = 0$, so the tangent is $y = 3$, even without knowing $f'(1)$.

---

## 8. Lec 10 — Increase, decrease and extrema

- **Critical point:** in the domain, and $f'(x) = 0$ or $f'$ undefined.
- **Sign table** of $f'$ over intervals cut at the critical points **and** the points outside the domain (vertical asymptotes, holes).
- $+ \to -$ is a maximum, $- \to +$ a minimum, no sign change no extremum. A point outside the domain is never an extremum, even if the sign changes there.
- A cusp is often an extremum ($x^{2/3}$ has a minimum at $0$); a vertical tangent usually is not ($\sqrt[3]{x}$ keeps rising).

> [!example] 2021 Moed B Q1
> $f = x^{4/3} - 2x^{2/3} - 3$, $f' = \dfrac{4\left(x^{2/3}-1\right)}{3\sqrt[3]x}$: zero at $\pm1$, undefined at $0$. Signs $-,+,-,+$: minima $(\pm1, -4)$, maximum (a cusp) $(0, -3)$.

**Global extrema on a closed interval:** compare the critical points inside with both endpoints.

---

## 9. Lec 11 — Concavity and inflection

- $f'' > 0$: concave up ($\cup$, slopes increasing). $f'' < 0$: concave down ($\cap$).
- **Inflection point:** $f$ continuous there, and $f''$ changes sign. Candidates: $f'' = 0$ or $f''$ undefined. Not at a vertical asymptote.
- Second derivative test: $f'(x_0) = 0$ and $f''(x_0) < 0$ is a max, $> 0$ a min.
- "Marginal profit is decreasing" means $P'' < 0$: concavity in economic words.

> [!example] Lec 11
> $R(x) = 1296x - 0.12x^3$: $R' = 1296 - 0.36x^2 = 0$ at $x = 60$, $R''(60) = -0.72\cdot60 < 0$, so maximal revenue $R(60) = 51{,}840$.

---

## 10. Lec 11 and 12 — Asymptotes, the full investigation, reading $f'$

**Asymptotes:**

| Kind | Where to look | Test |
|---|---|---|
| Vertical $x = a$ | Zeros of a denominator, the edge of a log or root domain, $e^{1/(x-a)}$ | **One** one-sided limit $= \pm\infty$ is enough. A $\tfrac00$ point that simplifies is a **hole**, not an asymptote |
| Horizontal $y = L$ | $x \to +\infty$ and $x \to -\infty$ **separately** | Finite limit. Roots and exponentials often give two different ones ($\pm\tfrac12$ for $\tfrac{\sqrt{x^2+5}-3}{2x-4}$) |
| Oblique $y = mx + b$ | Rational with top degree one more than the bottom | Long division: $\tfrac{x^2}{x-1} = x + 1 + \tfrac1{x-1}$ |

A function continuous for all $x$ has no vertical asymptote. A graph may cross its horizontal asymptote.

**The investigation routine** (the order the exam lists; do every step even if it is "none"):

1. **Domain.**
2. **Interval of continuity** (= domain, plus seam checks if piecewise).
3. **Intercepts:** $y$-intercept $f(0)$ if $0$ is in the domain; $x$-intercepts from $f = 0$.
4. **Asymptotes**, with the limits written out.
5. **$f'$**, critical points, sign table: increase / decrease, extrema (with their $y$ values).
6. **$f''$**, sign table: concavity, inflection points.
7. **Graph**, through everything above. It must not contradict a single line.
8. The add-on: a transformation of the graph, $\lvert f\rvert$, a vertical-tangent or corner question, or "how many solutions does $f(x) = c$ have".

> [!example] 2021 Moed A Q1: $f(x) = \left(1+\tfrac2x\right)^2$, $f(0) = 2$
> Domain all $x$ (the isolated point $f(0) = 2$), discontinuous at $0$. $x$-intercept $(-2, 0)$. Asymptotes $x = 0$ (both sides $\infty$) and $y = 1$. $f' = -\tfrac{4(x+2)}{x^3}$: min $(-2, 0)$, decreasing for $x < -2$ and $x > 0$. $f'' = \tfrac{8(x+3)}{x^4}$: inflection $\left(-3, \tfrac19\right)$.

**Reading information from $f'$** (its graph, or $g'$ given as a formula):

| From $f'$ | About $f$ |
|---|---|
| $f' > 0$ / $< 0$ | $f$ rising / falling |
| $f'$ crosses zero | $f$ has an extremum |
| $f'$ rising / falling | $f$ concave up / down |
| $f'$ has a max or min | $f$ has an inflection |
| $g'(x) = f(x - 1)$ | $g$ rises where $f(x-1) > 0$: shift the sign table of $f$ right by 1 (2019 Moed B Q1f: $g$ rising for $x > 11$) |

---

## 11. Lec 02 and 09 — The economics question

| Term | Formula |
|---|---|
| Linear demand through two (price, quantity) points | slope $\tfrac{\Delta x}{\Delta p}$, then point-slope; solve for $p$ to get $p(x)$ |
| Revenue | $R(x) = x\cdot p(x)$, or $R(p) = p\cdot x(p)$ |
| Cost | $C(x) = $ fixed $+$ variable, e.g. $25x$ |
| Profit | $P(x) = R(x) - C(x)$; break-even where $P = 0$ |
| Average cost / profit per unit | $\dfrac{C(x)}{x}$, $\dfrac{P(x)}{x}$ |
| Marginal cost, revenue, profit | $C'(x)$, $R'(x)$, $P'(x)$ |
| Maximal profit | $P'(x) = 0$, i.e. $R'(x) = C'(x)$, and check it is a max |
| "Marginal cost increasing" | $C''(x) > 0$ |

**The meaning sentence** (where the points are): $C'(30) = 25$ means "at a production level of 30 units, producing **one more** unit raises cost by **about** \$25". Use the actual units: if $x$ counts thousands and $C$ is in thousands of dollars, $C'(5) = 340$ means 1,000 more units from 5,000 cost about \$340,000 more (2025 Moed A Q4a). The marginal value is an **approximation** of $f(x+1) - f(x)$: $C = 300 + 100x - x^2$ has $C'(30) = 40$ but $C(31) - C(30) = 39$ (Lec 09).

> [!example] 2024 Moed B Q1 (= 2019 Moed A Q3, = 2025 Moed B Q4)
> Price \$45 sells 200, price \$40 sells 300: $x = -20p + 1100$, so $p = \tfrac{1100 - x}{20}$ and $R = -\tfrac1{20}x^2 + 55x$, $R'(30) = 52$. With $C = 25x$: $P = -\tfrac1{20}x^2 + 30x$, $P' = 0$ at $x = 300$, maximal profit \$4,500.

**Roots in the profit equation:** isolate the root, square, and **check both solutions** in the unsquared equation. In 2025 Moed A Q4 $\sqrt{x+6} = x - 6$ gives $x = 3$ (false) or $x = 10$ (true).

---

## 12. Lec 08 — Integrals

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\neq-1),\qquad \int\frac1x\,dx=\ln\lvert x\rvert+C,\qquad \int e^{x}\,dx=e^x+C,\qquad \int a^x\,dx=\frac{a^x}{\ln a}+C
$$

$$
\int f(ax+b)\,dx=\frac1a F(ax+b)+C,\qquad \int_a^b f(x)\,dx=F(b)-F(a)
$$

- A definite integral is a **signed** area: parts below the axis count negative. For the geometric area, split at the zeros and add the absolute values.
- Over a seam, split the integral at the seam and use each formula on its own piece.
- Profit from marginal profit: $P(b) - P(a) = \int_a^b P'(x)\,dx$ (2021 Moed A Q3).

> [!example] 2025 Moed B Q3d
> $\displaystyle\int_{-1}^{0}(x^2+2x)\,dx+\int_0^a\sqrt x\,dx=-\frac23+\frac23a^{3/2}=0$, so $a = 1$.

> [!example] 2025 Moed A Q1e
> $\displaystyle\int_0^{1/\alpha}\frac{2\alpha}{(1+\alpha x)^2}\,dx=\left[\frac{-2}{1+\alpha x}\right]_0^{1/\alpha}=-1+2=1$, whatever $\alpha$ is.

---

## 13. Exam technique

- **Write every limit you use.** "VA $x = 2$" earns less than $\lim_{x\to2^+} f = \infty \Rightarrow$ VA $x = 2$.
- **Do the steps in the printed order**; later parts reuse earlier answers (the graph uses all of them).
- A **seam** is checked three times: continuity, the definition of the derivative, and as a critical point.
- Give **points**, not just $x$ values: "max $(1, 4)$".
- If an expression is given ("show that $f' = \dots$"), use it even if you couldn't derive it.
- Economics answers end with a sentence in the question's units.
- Budget about **45 minutes a question**, with the investigation first while you are fresh.

---

## 14. One-box summary

> [!summary] The whole course on one screen
> - **Domain:** denominators $\neq 0$, even roots $\ge 0$, $\ln > 0$.
> - **Limits:** substitute; $\tfrac00$ factor or conjugate; $\tfrac c0$ is $\pm\infty$, sign from each side; split $\lvert\cdot\rvert$; at $-\infty$, $\sqrt{x^2} = -x$.
> - **Euler:** only if base $\to 1$ and exponent $\to\infty$: $e^{\lim(\text{base}-1)\cdot\text{exponent}}$.
> - **Continuity:** value = left = right.
> - **Differentiability:** one-sided difference quotients equal and finite. Different finite: corner. Opposite infinities: cusp. Same infinity: vertical tangent.
> - **Extrema:** $f' = 0$ or undefined, and $f'$ changes sign. **Inflection:** $f$ continuous and $f''$ changes sign.
> - **Asymptotes:** VA from a one-sided infinite limit; HA from $\pm\infty$ separately.
> - **Chain rule:** outside derivative at the inside, times the inside derivative.
> - **Economics:** $R = xp$, $P = R - C$, max at $R' = C'$, marginal = "about this much more for one more unit".
> - **Integrals:** split at seams; signed area.
