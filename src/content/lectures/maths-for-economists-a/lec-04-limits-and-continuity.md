---
title: "Lec 04: Limits and Continuity"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 4
tags:
  - maths-for-economists-a
  - limits
  - one-sided-limits
  - continuity
  - piecewise-functions
  - direct-substitution
subject: maths-for-economists-a
in_scope: true
---

# Limits and Continuity

> Part of: [[Maths for Economists A]]
> Key concepts: [[Limit]], [[One-Sided Limit]], [[Continuity]], [[Direct Substitution]], [[Piecewise Function]], [[Absolute Value Function]]

> [!note] How to read this note
> Lesson 04 is a two-page worksheet: the printed examples are the source, and the lecturer worked the answers in class on the blank space (page 2 is blank graph paper). Everything marked **Reconstructed from the slides** is my working, not the lecturer's words. Check it against your own class notes.

## 1. Limit of an absolute value function

**Printed:** Given $f(x) = |x-1|$. (a) Write it as a compound function. (b) Find $\lim_{x\to 1} f(x)$. (c) Draw the graph and estimate the limit from it.

> [!note] Reconstructed from the slides
> **(a)** An [[Absolute Value Function]] is a [[Piecewise Function]]: it changes formula where the inside is zero, at $x=1$.
>
> $$
> f(x)=\begin{cases} x-1, & x\ge 1\\ -(x-1)=1-x, & x<1\end{cases}
> $$
>
> **(b)** Check both sides, since the formula differs on each:
>
> - from the right ($x\to 1^+$): $f(x)=x-1\to 0$
> - from the left ($x\to 1^-$): $f(x)=1-x\to 0$
>
> Both [[One-Sided Limit]]s agree, so $\lim_{x\to 1} f(x)=0$.
>
> **(c)** The graph is a V with its vertex at $(1,0)$. Reading the height the curve approaches as $x\to1$ from both sides gives $0$ again.

![[Lec04_abs_value_limit.png]]

> [!tip] Definition
> The two-sided [[Limit]] exists only when the left and right limits both exist and are equal:
>
> $$
> \lim_{x\to a} f(x)=L \iff \lim_{x\to a^-} f(x)=\lim_{x\to a^+} f(x)=L
> $$

## 2. When the one-sided limits disagree

**Printed:** Given $f(x)=\dfrac{x^2+x}{|x+1|}$. (a) Write it as a compound function. (b) Find $\lim_{x\to -1} f(x)$. The sheet also shows a graph with two separate branches and open circles.

> [!note] Reconstructed from the slides
> Factor the numerator: $x^2+x=x(x+1)$. The absolute value splits at $x=-1$:
>
> - for $x>-1$: $|x+1|=x+1$, so $f(x)=\dfrac{x(x+1)}{x+1}=x$
> - for $x<-1$: $|x+1|=-(x+1)$, so $f(x)=\dfrac{x(x+1)}{-(x+1)}=-x$
>
> $$
> f(x)=\begin{cases} x, & x>-1\\ -x, & x<-1\end{cases}\qquad (\text{undefined at } x=-1)
> $$
>
> - $\lim_{x\to -1^+} f(x)=-1$
> - $\lim_{x\to -1^-} f(x)=-(-1)=1$
>
> The one-sided limits differ, so **$\lim_{x\to-1} f(x)$ does not exist**. This matches the printed graph: a branch falling to an open circle at $(-1,1)$ and a branch rising from an open circle at $(-1,-1)$.

![[Lec04_two_sided_jump.png]]

> [!warning] Common mistake
> Cancelling $(x+1)$ without handling the sign of $|x+1|$ gives "$x$" on both sides and a wrong limit of $-1$. Always split the absolute value first.

**See it move.** When the two sides head to different heights, the limit does not exist.

```graph
type: calc-limit-approach
limitCase: jump
```

## 3. Reading values and limits off a graph

**Printed:** A sketch with several pieces. Find both the **value** $f(a)$ and the **limit** at $x=-1,0,1,3$.

> [!note] Reconstructed from the slides
> The worksheet sketch is hand-drawn, so I read it as follows (redrawn below): a rising segment from $(-2,0)$ to an open circle at $(-1,1)$; a filled dot at $(-1,2)$ where a falling line starts, passing through $(0,1)$ and reaching $(1,0)$; and a semicircle of radius 1 over $[1,3]$ (centre $x=2$, top at height 1).
>
> ![[Lec04_value_and_limit_graph.png]]
>
> | $x=a$ | Value $f(a)$ | Left limit | Right limit | Limit |
> | ----- | ------------ | ---------- | ----------- | ----- |
> | $-1$ | $2$ (filled dot) | $1$ | $2$ | does not exist (jump) |
> | $0$ | $1$ | $1$ | $1$ | $1$ |
> | $1$ | $0$ | $0$ | $0$ | $0$ |
> | $3$ | $0$ | $0$ | no function to the right | does not exist as a two-sided limit (only the left limit, $0$, exists) |
>
> At $x=-1$ the value and each one-sided limit are different things: the dot sits at $2$ but the left side heads to $1$.

> [!warning] Check the sketch
> I assumed the open circle on the left segment is at $x=-1$ (it is drawn slightly right of the tick) and that $(0,1)$ is a filled point on the line. If your class notes say otherwise, the $x=-1$ and $x=0$ rows change. At $x=3$ whether the "limit" is quoted as $0$ or "does not exist" depends on whether your lecturer allows one-sided limits at an endpoint of the domain.

## 4. Continuity

**Printed:** "A function is continuous at $x=a$ if the following three conditions are met:" (the conditions were left for class).

> [!note] Reconstructed from the slides
> The standard three conditions for [[Continuity]] at $x=a$:
>
> 1. $f(a)$ is defined.
> 2. $\lim_{x\to a} f(x)$ exists (left limit equals right limit).
> 3. $\lim_{x\to a} f(x)=f(a)$.
>
> Visually: you can draw the graph through $x=a$ without lifting the pen.

**Printed rule:** all non-compound functions are continuous at any point in their domain.

**Printed conclusion:** we only need the three conditions at the **seam point** of a piecewise function, the point where the formula changes.

> [!example] Printed example: $g(x)=\dfrac{x}{(x-1)(x-2)}$
> The sheet shows this function without a printed question. It is not piecewise, so by the rule it is continuous everywhere in its domain.
>
> > [!note] Reconstructed from the slides
> > The denominator is zero at $x=1$ and $x=2$, so the domain is $\mathbb{R}\setminus\{1,2\}$. The function is continuous on $(-\infty,1)\cup(1,2)\cup(2,\infty)$ and not defined at $1$ or $2$ (so it cannot be continuous there).

### Is $f$ continuous at $x=2$?

**Printed:**
$$f(x)=\begin{cases}\dfrac{x^2-4}{x-2}, & x>2\\[4pt] 3, & x=2\\ x^2, & x<2\end{cases}$$

> [!note] Reconstructed from the slides
> Test the three conditions at the seam $x=2$.
>
> 1. $f(2)=3$, defined.
> 2. Right: for $x>2$, $\dfrac{x^2-4}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2\to 4$. Left: $x^2\to 4$. Both equal $4$, so $\lim_{x\to2}f(x)=4$.
> 3. $\lim_{x\to2}f(x)=4\ne 3=f(2)$. **Condition 3 fails.**
>
> So $f$ is **not continuous** at $x=2$. The printed graph shows exactly this: a parabola and a line meeting at an open circle at height 4, with the actual value a dot at 3.

![[Lec04_removable_discontinuity.png]]

> [!tip] Intuition
> The limit asks "where is the curve heading?"; the value asks "where is the point actually?". Continuity means they agree. Here the curve heads to 4 but the point is parked at 3 (a "hole" with a stray point).

**See it move.** The limit ignores the value at the point. Compare it with a continuous case using the buttons.

```graph
type: calc-limit-approach
limitCase: moved
```

### Interval of continuity of a piecewise function

**Printed:** Find the interval of continuity of
$$g(x)=\begin{cases}3x+2, & x>1\\ 0, & x=1\\ 2x^2+3, & x<1\end{cases}$$

> [!note] Reconstructed from the slides
> Each piece is a polynomial, so it is continuous on its own region. Only the seam $x=1$ needs the three-condition test.
>
> 1. $g(1)=0$.
> 2. Right: $3(1)+2=5$. Left: $2(1)^2+3=5$. So $\lim_{x\to1}g(x)=5$.
> 3. $5\ne 0=g(1)$. **Fails.**
>
> $g$ is continuous on $(-\infty,1)\cup(1,\infty)$ and discontinuous at $x=1$.

## 5. The rules of limits

### 5.1 Direct substitution

At points where a function is continuous, $\lim_{x\to a}f(x)=f(a)$: just plug in. See [[Direct Substitution]].

> [!example] Printed: $\displaystyle\lim_{x\to 5}\frac{x^2-4x+4}{x-2}$
> > [!note] Reconstructed from the slides
> > The denominator is $3\neq0$ at $x=5$, so the function is continuous there:
> >
> > $$
> > \frac{25-20+4}{5-2}=\frac{9}{3}=3
> > $$

### 5.2 The case $\frac{0}{0}$

If direct substitution gives $\frac{0}{0}$, the expression is not yet simplified enough. Factor, cancel the common zero factor, or use a conjugate, then substitute. $\frac{0}{0}$ is not an answer, it is a signal to rewrite.

> [!example] Printed: $\displaystyle\lim_{x\to 0}\frac{\sqrt{5x+9}-3}{x}$
> > [!note] Reconstructed from the slides
> > Substitution gives $\frac{3-3}{0}=\frac00$. Multiply top and bottom by the conjugate $\sqrt{5x+9}+3$:
> >
> > $$
> > \frac{(\sqrt{5x+9}-3)(\sqrt{5x+9}+3)}{x(\sqrt{5x+9}+3)}=\frac{5x+9-9}{x(\sqrt{5x+9}+3)}=\frac{5}{\sqrt{5x+9}+3}
> > $$
> > Now substitute $x=0$: $\dfrac{5}{3+3}=\dfrac56$.

> [!example] Printed: $\displaystyle\lim_{x\to 2}\frac{x^2-2x}{|x-2|}$
> > [!note] Reconstructed from the slides
> > Substitution gives $\frac00$. Factor: $x^2-2x=x(x-2)$. The absolute value forces a split:
> > - $x\to2^+$: $|x-2|=x-2$, so the fraction is $x\to 2$
> > - $x\to2^-$: $|x-2|=-(x-2)$, so the fraction is $-x\to -2$
> >
> > The one-sided limits differ ($2$ and $-2$), so **the limit does not exist**.

> [!example] Printed: $\displaystyle\lim_{x\to 2}\frac{x-2}{-x^2+x+2}$
> > [!note] Reconstructed from the slides
> > Substitution gives $\frac{0}{-4+2+2}=\frac00$. Factor the denominator: $-x^2+x+2=-(x^2-x-2)=-(x-2)(x+1)$. Cancel $(x-2)$:
> >
> > $$
> > \frac{x-2}{-(x-2)(x+1)}=\frac{-1}{x+1}\;\Rightarrow\;\lim_{x\to2}=\frac{-1}{3}
> > $$

## Comparison: what to do with a limit

| Substituting $a$ gives | Meaning | Move |
| ---------------------- | ------- | ---- |
| A number | function continuous at $a$ | that number is the limit |
| $\frac00$ | common zero factor | factor or conjugate, cancel, resubstitute |
| Absolute value near $a$ | formula differs by side | split into left and right limits |
| Piecewise, $a$ is the seam | formulas differ by side | compare left limit, right limit and the value |

## Summary

- A limit exists only if left and right limits agree; the value $f(a)$ is separate from the limit.
- [[Continuity]] at $a$: value defined, limit exists, and they are equal.
- Non-compound (single-formula) functions are continuous across their domain, so for a [[Piecewise Function]] test only the seam points.
- [[Direct Substitution]] works at continuous points; for $\frac00$, simplify first.
- Absolute values are piecewise functions: split them, then take one-sided limits.

## Related notes

- [[Maths for Economists A]]
