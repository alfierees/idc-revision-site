---
title: "Lec 03: Composition, Transformations, Exponentials and Limits"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 3
tags:
  - maths-for-economists-a
  - composition-of-functions
  - graph-transformations
  - exponential-function
  - limits
subject: maths-for-economists-a
in_scope: true
---

# Lec 03: Composition, Transformations, Exponentials and Limits

> Part of: [[Maths for Economists A]]
> Key concepts: [[Composition of Functions]], [[Vertical Translation]], [[Horizontal Translation]], [[Reflection of a Graph]], [[Exponential Function]], [[Limit of a Function]], [[Removable Discontinuity]]

> [!info] How this note is built
> Lesson 3 is a two-page worksheet. Page 1 holds the printed definitions, rules and examples; page 2 is blank graph paper where the lecturer worked in class. Everything printed is source. All worked solutions and explanations below sit inside `> [!note] Reconstructed from the slides` callouts, because they fill the blank space and are not the lecturer's words.

## 1. Composition of two functions

**Printed example.** Given $g(x)=\sqrt{x}$ and $f(x)=2-x$, find $f(g(x))$ and $g(f(x))$.

> [!note] Reconstructed from the slides
> **Composition** means feeding the output of one function into another. In $f(g(x))$, the inner function $g$ acts first and its result becomes the input of $f$. Replace every $x$ in $f$ by $g(x)$:
>
> $$
> f(g(x)) = 2 - g(x) = 2-\sqrt{x}
> $$
>
> Domain: the square root forces $x \ge 0$.
>
> For $g(f(x))$ the inner function is $f$. Replace every $x$ in $g$ by $f(x)$:
>
> $$
> g(f(x)) = \sqrt{f(x)} = \sqrt{2-x}
> $$
>
> Domain: we need $2-x \ge 0$, so $x \le 2$.

> [!warning] Order matters
> $f(g(x)) = 2-\sqrt{x}$ and $g(f(x)) = \sqrt{2-x}$ are different functions with different domains. In general $f(g(x)) \ne g(f(x))$. ^composition-order

## 2. Transformations of a graph

Each transformation changes a known graph (here the parabola $y=x^2$) in a predictable way.

### 2.1 Vertical translation

**Printed rule.** Given the graph of $f(x)$, then $y=f(x)+c$ shifts the graph of $f(x)$ by $c$ units upward.

**Printed example A.** Given the graph of $f(x)=x^2$, draw the graph of $y=x^2+3$.

**Printed example B.** Given the graph of $f(x)=(x-2)^2$ (a parabola with its vertex at $x=2$ on the axis), draw the graph of $y=x^2-4x+1$.

> [!note] Reconstructed from the slides
> **Example A.** Adding 3 to every output lifts each point up by 3. The vertex moves from $(0,0)$ to $(0,3)$.
>
> **Example B.** Complete the square so that the given function $(x-2)^2$ appears:
>
> $$
> y = x^2-4x+1 = (x^2-4x+4) - 3 = (x-2)^2 - 3
> $$
>
> So $y = f(x) - 3$: the graph of $(x-2)^2$ moved down 3 units. The vertex is $(2,-3)$. Check at $x=0$: $y=1$, and $(0-2)^2-3 = 1$. 

![[Lec03_parabola_shifts.png]]

### 2.2 Horizontal translation

**Printed rule.** $y=f(x+c)$ shifts the graph of $f(x)$ by $c$ units to the left.

**Printed example.** Given the graph of $f(x)=x^2$, draw the graph of $f(x-2)$.

> [!note] Reconstructed from the slides
> $f(x-2) = (x-2)^2$. The vertex is where the bracket is zero, so $x=2$: the parabola moves **right** 2 units. The sign inside the bracket works against intuition, so test a point: the old vertex value $f(0)=0$ now occurs at $x=2$.

### 2.3 Sum up (printed)

| Form | Effect |
|---|---|
| $y=f(x)+c$ | "c" units upwards |
| $y=f(x)-c$ | "c" units downwards |
| $y=f(x+c)$ | "c" units to the left |
| $y=f(x-c)$ | "c" units to the right |

> [!warning] Printed worksheet typo
> The worksheet's last line reads $y=f(x+c)$ for "to the right". That repeats the previous line, and from the horizontal-translation example above ($f(x-2)$ moves right) the intended form is $y=f(x-c)$. The table shows the corrected version.

### 2.4 Reflections (printed rules)

- **Reflecting around the y axis.** The graph of $y=f(-x)$ is the reflection of the graph of $f(x)$ around the y axis.
- **Reflecting around the x axis.** The graph of $y=-f(x)$ is the reflection of the graph of $f(x)$ around the x axis.

> [!note] Reconstructed from the slides
> $f(-x)$ flips left and right: the point $(a, b)$ becomes $(-a, b)$. $-f(x)$ flips up and down: $(a,b)$ becomes $(a,-b)$. Memory aid: a minus sign **inside** the bracket acts on $x$ (horizontal); a minus sign **outside** acts on $y$ (vertical).
>
> | Change | Where the sign sits | Flip |
> |---|---|---|
> | $f(-x)$ | inside | across the y axis |
> | $-f(x)$ | outside | across the x axis |

**See it move.** Shift, flip and stretch a graph, and see why inside changes run the opposite way.

```graph
type: calc-transformations
```

## 3. Exponential functions

**Printed heading.** Graphing the basic exponential function $y=a^x$.

The worksheet shows three cases on one set of axes, all passing through $(0,1)$: the curve for $a>1$ (rising), the curve for $0<a<1$ (falling), and the line $y=1$.

**Printed example.** Draw the graph of $y = 8\cdot 2^x - 5$.

> [!note] Reconstructed from the slides
> **Why all curves pass through $(0,1)$:** $a^0=1$ for every $a>0$. For $a=1$ the function is the constant $1^x=1$ (the line $y=1$).
>
> | Base | Behaviour | Asymptote |
> |---|---|---|
> | $a>1$ | increasing, growth | $y=0$ as $x\to-\infty$ |
> | $0<a<1$ | decreasing, decay | $y=0$ as $x\to+\infty$ |
> | $a=1$ | constant $y=1$ | none |
>
> **Solving $y=8\cdot 2^x-5$ with transformations.** Since $8 = 2^3$:
>
> $$
> 8\cdot 2^x = 2^3\cdot 2^x = 2^{x+3}
> $$
>
> so $y = 2^{x+3} - 5$. Start from $y=2^x$, shift **left 3** (horizontal rule), then **down 5** (vertical rule).
>
> Key features:
> - Horizontal asymptote moves from $y=0$ to $y=-5$.
> - y intercept: $y(0)=8-5=3$.
> - x intercept: $2^{x+3}=5$ gives $x=\log_2 5 - 3 \approx -0.68$.

![[Lec03_exponential_graphs.png]]

**See it move.** Slide the base through 1 to turn growth into decay.

```graph
type: calc-function-family
family: exponential
```

## 4. A first look at limits

**Printed prompt for all three functions:** (a) find the value at $x=2$; (b) draw the graph; (c) find the value to which the function approaches as $x$ approaches 2.

| | Function |
|---|---|
| 1 | $f(x)=x+2$ |
| 2 | $g(x)=\dfrac{x^2-4}{x-2}$ |
| 3 | $h(x)=\begin{cases} x+2 & x\ne 2 \\ 1 & x=2 \end{cases}$ |

> [!note] Reconstructed from the slides
> **1. $f(x)=x+2$.** (a) $f(2)=4$. (b) A straight line with slope 1 and intercept 2. (c) As $x\to2$ the outputs approach 4.
>
> **2. $g(x)=\dfrac{x^2-4}{x-2}$.** (a) $g(2)=\tfrac{0}{0}$: **undefined**, so 2 is not in the domain. (b) For $x\ne2$ factor $x^2-4=(x-2)(x+2)$ and cancel:
>
> $$
> g(x)=\frac{(x-2)(x+2)}{x-2}=x+2,\quad x\ne 2
> $$
>
> The graph is the line $y=x+2$ with a **hole** at $(2,4)$. (c) The values still approach 4 as $x\to 2$ even though $g(2)$ does not exist.
>
> **3. $h(x)$.** (a) By the second branch $h(2)=1$. (b) The same line $y=x+2$ with a hole at $(2,4)$, plus an isolated point at $(2,1)$. (c) As $x\to2$ (with $x\ne 2$) the outputs still approach 4, not 1.

![[Lec03_limit_graphs.png]]

> [!note] Reconstructed from the slides
> **The idea of a limit.** Written $\lim_{x\to 2} f(x) = 4$, it describes what the outputs approach as $x$ gets close to 2 (from both sides), **without** caring about the value at $x=2$ itself. The three functions all have limit 4 at $x=2$ but different values there: 4, undefined, and 1. This is exactly why the worksheet separates parts (a) and (c).

> [!tip] Intuition
> The limit asks "where is the graph heading?", the value asks "where is the point actually sitting?". They agree for $f$, and disagree for $g$ and $h$.

**See it move.** Watch x close in on 2 from both sides, even though the function has a hole there.

```graph
type: calc-limit-approach
limitCase: removable
```

## Summary

- **Composition:** $f(g(x))$ applies $g$ first; order changes the answer. Here $f(g(x))=2-\sqrt{x}$ and $g(f(x))=\sqrt{2-x}$.
- **Vertical shift:** $f(x)\pm c$ moves the graph up or down. **Horizontal shift:** $f(x+c)$ moves left, $f(x-c)$ moves right.
- **Reflections:** $f(-x)$ across the y axis, $-f(x)$ across the x axis.
- **Completing the square** turns $x^2-4x+1$ into $(x-2)^2-3$: right 2, down 3.
- **Exponentials** $y=a^x$ pass through $(0,1)$, grow for $a>1$, decay for $0<a<1$; $8\cdot2^x-5=2^{x+3}-5$ is shifted left 3 and down 5, with asymptote $y=-5$.
- **Limits** describe what a function approaches, not what it equals: all three printed examples approach 4 as $x\to2$.

## Related notes

- [[Maths for Economists A]]
- [[Composition of Functions]], [[Exponential Function]], [[Limit of a Function]]
