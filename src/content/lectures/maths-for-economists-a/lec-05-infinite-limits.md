---
title: "Lec 05: Infinite Limits"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 5
tags:
  - maths-for-economists-a
  - limits
  - infinite-limits
  - limits-at-infinity
  - indeterminate-forms
  - vertical-asymptote
subject: maths-for-economists-a
in_scope: true
---

# Infinite Limits

> Part of: [[Maths for Economists A]]
> Key concepts: [[Infinite Limit]], [[Vertical Asymptote]], [[Limit at Infinity]], [[Indeterminate Form]], [[One-Sided Limit]], [[Absolute Value Function]], [[Leading Term]]

> [!note] How to read this note
> Lesson 05 is a two-page worksheet. Page 1 prints the title "Infinite Limits", eleven limits to evaluate (a block "4) Limits at Infinity" begins halfway down) and a side box reading "Three cases we get ? (Problematic cases)". Page 2 is blank graph paper. Only the printed expressions are source. Every definition and every solution below is **Reconstructed from the slides**: it is my working, not the lecturer's. Check it against your class notes. It builds on [[Lec_04-Limits and Continuity]] (one-sided limits) and [[Lec_03-Composition, Transformations, Exponentials and Limits]].

## 1. Ideas needed

> [!note] Reconstructed from the slides
> **Infinite limit.** $\lim_{x\to a} f(x)=\infty$ means $f(x)$ grows without bound as $x\to a$. The limit is then said not to exist as a number, but we record the direction. The line $x=a$ is a [[Vertical Asymptote]].
>
> **Nonzero over zero.** If the numerator tends to a nonzero number $c$ and the denominator tends to $0$, the quotient blows up. The sign is found by checking the sign of the numerator and of the (tiny) denominator on **each side**. If the two sides give different infinities, the two-sided limit does not exist ([[One-Sided Limit]]).
>
> **Why the sides can differ.** A factor such as $(x-2)^3$ keeps the sign of $x-2$, so it is negative on the left of 2 and positive on the right. A factor such as $(x-2)^2$ or an absolute value is always positive.
>
> ![[Lec05_pole_sign.png]]

> [!note] Reconstructed from the slides
> **The "three cases we get ?"** The slide does not list them. The standard problematic (indeterminate) forms met in this lesson are:
>
> | Form | Where it appears below |
> | --- | --- |
> | $\dfrac{0}{0}$ | none needed here (factor and cancel if it arises) |
> | $\dfrac{\infty}{\infty}$ | quotients as $x\to\pm\infty$ (Section 3) |
> | $\infty-\infty$ | $\tfrac1x-\tfrac1{x^3}$ at $0$, and polynomials at infinity |
>
> $\dfrac{c}{0}$ with $c\ne0$ is **not** indeterminate: it is an infinite limit. Which three the lecturer meant is unconfirmed (another common candidate is $0\cdot\infty$, see the last example).

## 2. Limits as $x$ tends to a finite point

**Printed (four limits):**

1. $\displaystyle\lim_{x\to0}\frac{x-2}{|x^2-2x|}$
2. $\displaystyle\lim_{x\to2}\frac{2+x-x^2}{(x-2)^3}$
3. $\displaystyle\lim_{x\to2}\frac{x+1}{x^2-2x}$
4. $\displaystyle\lim_{x\to2}\frac{x+3}{(x-2)^3}$

> [!note] Reconstructed from the slides
> **(1)** Numerator $\to -2$. Denominator: $|x^2-2x|=|x||x-2|\to 0$ and is always positive. So the quotient is (negative)/(tiny positive) from both sides:
>
> $$
> \lim_{x\to0}\frac{x-2}{|x^2-2x|}=-\infty
> $$
>
> **(2)** Factor the numerator: $2+x-x^2=-(x^2-x-2)=-(x-2)(x+1)$. Cancel one factor of $(x-2)$:
>
> $$
> \frac{2+x-x^2}{(x-2)^3}=\frac{-(x+1)}{(x-2)^2}
> $$
>
> Numerator $\to -3$, denominator $\to 0^+$ from both sides, so the limit is $-\infty$.
>
> **(3)** $x^2-2x=x(x-2)$. Numerator $\to 3$. Near 2, $x>0$, so the sign of the denominator is the sign of $x-2$:
>
> - from the right: $\dfrac{3}{0^+}=+\infty$
> - from the left: $\dfrac{3}{0^-}=-\infty$
>
> The one-sided limits differ, so $\lim_{x\to2}$ **does not exist** (it is not $\infty$ or $-\infty$).
>
> **(4)** Numerator $\to 5$. $(x-2)^3$ is positive on the right and negative on the left: right $+\infty$, left $-\infty$. The limit **does not exist**.

> [!tip] Quick check
> Even power or absolute value in the denominator, so both sides agree (examples 1 and 2). Odd power or a bare $(x-a)$ factor, so the sides disagree (examples 3 and 4).

**See it move.** Move the vertical and horizontal asymptotes, and find the case where one becomes a hole.

```graph
type: calc-asymptotes
```

## 3. Limits at infinity

**Printed under "4) Limits at Infinity":**

5. $\displaystyle\lim_{x\to-\infty}\frac{-2x^2+x+3}{5x-7}$
6. $\displaystyle\lim_{x\to\infty}(100x-x^2)$
7. $\displaystyle\lim_{x\to-\infty}(100x-x^2)$
8. $\displaystyle\lim_{x\to0}\left(\frac1x-\frac1{x^3}\right)$
9. $\displaystyle\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x}$
10. $\displaystyle\lim_{x\to\infty}\frac{x\sqrt{x}+1}{(x^2+3)^4}$
11. $\displaystyle\lim_{x\to\infty}\left[(x+1)\left(\frac{1}{2x}\right)\right]$

> [!note] Reconstructed from the slides
> **Method.** For large $|x|$ only the [[Leading Term]] matters. Compare degrees of numerator and denominator, or divide top and bottom by the highest power of $x$ in the denominator.
>
> **(5)** Leading terms: $\dfrac{-2x^2}{5x}=-\dfrac{2x}{5}$. As $x\to-\infty$, $x$ is negative, so $-\tfrac{2}{5}x\to+\infty$. Numerator degree 2 beats denominator degree 1, so
>
> $$
> \lim_{x\to-\infty}\frac{-2x^2+x+3}{5x-7}=+\infty
> $$
>
> **(6)** $100x-x^2=x(100-x)$. For large positive $x$ the $-x^2$ term dominates: the limit is $-\infty$. (An $\infty-\infty$ form, resolved by factoring.)
>
> **(7)** As $x\to-\infty$, $100x\to-\infty$ and $-x^2\to-\infty$; both push down, so the limit is $-\infty$. (Same expression as (6), different direction; no cancellation, so not indeterminate.)
>
> **(8)** $\infty-\infty$ at $x=0$. Combine into one fraction:
>
> $$
> \frac1x-\frac1{x^3}=\frac{x^2-1}{x^3}
> $$
>
> Numerator $\to -1$. Denominator $x^3\to0^+$ from the right and $0^-$ from the left. Right: $-\infty$. Left: $+\infty$. The limit **does not exist**.
>
> **(9)** For $x<0$, $\sqrt{x^2+1}\approx|x|=-x$. Divide through:
>
> $$
> \frac{\sqrt{x^2+1}}{x}=\frac{|x|\sqrt{1+1/x^2}}{x}=-\sqrt{1+\frac1{x^2}}\ \longrightarrow\ -1
> $$
>
> The minus sign comes from $|x|=-x$ when $x<0$. (For $x\to+\infty$ the answer would be $+1$.)
>
> **(10)** Numerator behaves like $x^{3/2}$ (degree 1.5); denominator like $(x^2)^4=x^8$ (degree 8). Denominator grows faster:
>
> $$
> \lim_{x\to\infty}\frac{x\sqrt{x}+1}{(x^2+3)^4}=0
> $$
>
> **(11)** $(x+1)\cdot\dfrac1{2x}=\dfrac{x+1}{2x}=\dfrac12+\dfrac1{2x}\to\dfrac12$. A $\infty\cdot0$ looking product, resolved by multiplying out. Answer $\tfrac12$.

## 4. Degree rule (summary of the pattern used)

| Quotient of polynomials as $x\to\pm\infty$ | Result |
| --- | --- |
| degree top < degree bottom | $0$ |
| degree top = degree bottom | ratio of leading coefficients |
| degree top > degree bottom | $\pm\infty$ (sign from leading terms and the direction of $x$) |

## Summary

- Nonzero over zero gives an infinite limit; check the sign on each side, and if the sides differ the limit does not exist.
- Even powers and absolute values keep the denominator positive; odd powers flip sign across the point.
- For $x\to\pm\infty$ compare leading terms; take care with $\sqrt{x^2}=|x|$ when $x<0$.
- Rewrite $\infty-\infty$ or $0\cdot\infty$ as a single fraction or factored product before deciding.

## Related notes

- [[Maths for Economists A]]
- [[Lec_04-Limits and Continuity]], [[Lec_03-Composition, Transformations, Exponentials and Limits]]
- [[Limit]], [[One-Sided Limit]], [[Absolute Value Function]]
