---
title: "Lec 01 - Functions, Domain and Sigma Notation"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 1
tags:
  - maths-for-economists-a
  - functions
  - domain
  - range
  - function-notation
  - piecewise-functions
  - sigma-notation
subject: maths-for-economists-a
in_scope: true
---

# Lec 01: Functions, Domain and Sigma Notation

> Part of: [[Maths for Economists A]]
> Key concepts: [[Function]], [[Domain]], [[Minimal Range]], [[Vertical Line Test]], [[Function Notation]], [[Linear Function]], [[Piecewise Function]], [[Sigma Notation]], [[Summation Rules]]

> [!note] About this note
> The source is a two-page worksheet ("Math I") with blank space where the lecturer worked in class. Everything printed on it (definitions, questions, formulas) is quoted as the source. Every worked answer, explanation and filled-in gap is mine and sits inside a `Reconstructed from the slides` callout, so check it against what was said in class.

## 1. What is a function?

**Printed definition:** a function is a rule that assigns to each input number **exactly one** output number.

> [!note] Reconstructed from the slides
> The key words are "exactly one". Every allowed input must get an output (it is defined), and never two different outputs. Several inputs may share one output (squaring sends both 2 and -2 to 4), but one input may never have two outputs.

The worksheet shows an arrow diagram with inputs 1, 2, 3, 4 on the right and outputs 2, 4, 6 on the left.

> [!warning] Check the arrow diagram
> The scan is ambiguous. I read it as 1 to 2, 2 to 4 and 3 to 6, with 4 unused, but the middle arrowhead sits between the 2 and the 4. Either way the diagram illustrates one arrow leaving each input, and an input (here 4) that may have no arrow, which is exactly why we need the idea of a domain.

### Printed warm-up questions

> [!example] Assign each integer between -2 and 2 to its cube
> > [!note] Reconstructed from the slides
> > The integers are -2, -1, 0, 1, 2 and the rule is $f(x)=x^3$.
> >
> > | x | -2 | -1 | 0 | 1 | 2 |
> > |---|----|----|---|---|---|
> > | f(x) | -8 | -1 | 0 | 1 | 8 |
> >
> > A legitimate function: one output per input.

> [!example] Assign each integer between -2 and 2 to its squared value
> > [!note] Reconstructed from the slides
> > Rule $f(x)=x^2$.
> >
> > | x | -2 | -1 | 0 | 1 | 2 |
> > |---|----|----|---|---|---|
> > | f(x) | 4 | 1 | 0 | 1 | 4 |
> >
> > Still a function. Different inputs (-2 and 2) landing on the same output is allowed.

> [!example] Assign each of 9, 4, 1, 0 to the number whose square equals the original value
> > [!note] Reconstructed from the slides
> > The rule is "take the square root", so 9 goes to 3 **or** -3, 4 to 2 or -2, 1 to 1 or -1, and 0 to 0.
> > Apart from 0, every input has **two** outputs, so this assignment is **not** a function. It becomes one only if we choose a sign, for example "the positive root", $f(x)=\sqrt{x}$.

> [!example] A rectangle's length is one unit longer than its width. Write a function giving the area from the length
> > [!note] Reconstructed from the slides
> > Let the length be $\ell$ and the width $w=\ell-1$. Then
> >
> > $$
> > A(\ell)=\ell\cdot w=\ell(\ell-1)=\ell^2-\ell
> > $$
> >
> > A width must be positive, so the sensible domain is $\ell>1$.

## 2. Domain and range

**Printed:** **Domain** is the set of input ($x$) values for which the function is defined. (The printed line is cut off at the page edge.)

**Printed:** **Minimal Range** ($R_{min}$) is the most reduced group of $y$ values.

> [!note] Reconstructed from the slides
> $R_{min}$ means the set of $y$ values the function actually produces, with nothing extra added. It is the range of the function, as opposed to a larger set that merely contains all the outputs.

## 3. How do we decide whether an equation is a function?

**Printed method:** isolate $y$ and see whether every $x$ value has a $y$ value, and a **unique** one.

**Printed task:** does each equation represent a function when the domain is all real numbers? Find $R_{min}$. If not, can you find a domain so that it would?

> [!note] Reconstructed from the slides
> Procedure: (1) solve for $y$; (2) if a $\pm$ appears with a non-zero quantity under the root, each $x$ gets two $y$ values, so it is not a function; (3) check which $x$ make the formula undefined (division by zero, root of a negative); (4) read off $R_{min}$.

| Equation | Isolate y | Function on all reals? | $R_{min}$ |
|----------|-----------|------------------------|-----------|
| $4y-3x=8$ | $y=\dfrac{3x+8}{4}$ | Yes | all real numbers |
| $y^2-x^2=9$ | $y=\pm\sqrt{x^2+9}$ | No | not asked |
| $y+\sqrt{x^2+9}=0$ | $y=-\sqrt{x^2+9}$ | Yes | $y\le -3$ |
| $xy-y=x$ | $y=\dfrac{x}{x-1}$ | Only for $x\ne 1$ | all reals except 1 |
| $y^2+xy-6=0$ | $y=\dfrac{-x\pm\sqrt{x^2+24}}{2}$ | No | not asked |

> [!note] Reconstructed from the slides
> **a) $4y-3x=8$.** A straight line, so every $x$ gives one $y$. Any real $y$ is reached (solve for $x$), so $R_{min}=\mathbb{R}$.
>
> **b) $y^2-x^2=9$.** $y=\pm\sqrt{x^2+9}$. Since $x^2+9\ge 9>0$ the root is never zero, so **every** $x$ gives two $y$ values. No choice of domain rescues it. (You could rescue it by restricting $y$, say $y\ge 3$, but that restricts the output, not the domain.)
>
> **c) $y+\sqrt{x^2+9}=0$.** $y=-\sqrt{x^2+9}$, one value for each $x$, defined for all reals. Because $x^2\ge 0$, $\sqrt{x^2+9}\ge 3$, so $y\le -3$ and $R_{min}=(-\infty,-3]$. The value $-3$ is reached at $x=0$.
>
> **d) $xy-y=x$.** Factor: $y(x-1)=x$, so $y=\dfrac{x}{x-1}$. At $x=1$ the formula divides by zero, so it is a function on the domain $x\ne 1$. Writing $y=1+\dfrac{1}{x-1}$ shows that $y$ can be anything except 1, so $R_{min}=\mathbb{R}\setminus\{1\}$.
>
> **e) $y^2+xy-6=0$.** Quadratic in $y$ with discriminant $x^2+24>0$ for every $x$, so there are always two solutions and no domain makes it a function.

### Finding the domain

**Printed:** find the domain of $y=\dfrac{x}{1-|x|}$, $\;y=\dfrac{x}{1+|x|}$, $\;y=-\sqrt{16-x}$.

> [!note] Reconstructed from the slides
> Two rules cover almost everything: the **denominator cannot be zero**, and the **expression under a square root cannot be negative**.
>
> | Function | Restriction | Domain |
> |----------|-------------|--------|
> | $y=\dfrac{x}{1-\lvert x\rvert}$ | $1-\lvert x\rvert\ne 0$, so $x\ne\pm1$ | all reals except $-1$ and $1$ |
> | $y=\dfrac{x}{1+\lvert x\rvert}$ | $1+\lvert x\rvert\ge 1>0$ always | all real numbers |
> | $y=-\sqrt{16-x}$ | $16-x\ge 0$ | $x\le 16$ |

## 4. Function notation $f(x)$

**Printed:** another notation for a function is $f(x)$.

> [!note] Reconstructed from the slides
> $f(x)$ reads "f of x" and means "the output of the rule $f$ when the input is $x$". To evaluate, replace **every** $x$ in the formula by whatever sits inside the brackets, brackets included.

> [!example] Given $f(x)=x^2+x$, find $f(3)$, $f(a)$ and $f(a+10)-f(a)$
> > [!note] Reconstructed from the slides
> > - $f(3)=3^2+3=12$
> > - $f(a)=a^2+a$
> > - $f(a+10)=(a+10)^2+(a+10)=a^2+20a+100+a+10$, so
> >
> > $$
> > f(a+10)-f(a)=(a^2+21a+110)-(a^2+a)=20a+110
> > $$

> [!example] Given $f(x)=\sqrt{x-5}$, simplify $\dfrac{5}{f(a+10)-f(a)}$ and show it equals $\dfrac{\sqrt{a+5}+\sqrt{a-5}}{2}$
> > [!note] Reconstructed from the slides
> > Here $f(a+10)=\sqrt{a+5}$ and $f(a)=\sqrt{a-5}$, so the expression is $\dfrac{5}{\sqrt{a+5}-\sqrt{a-5}}$.
> > Multiply top and bottom by the **conjugate** $\sqrt{a+5}+\sqrt{a-5}$. The bottom becomes a difference of squares:
> >
> > $$
> > (\sqrt{a+5})^2-(\sqrt{a-5})^2=(a+5)-(a-5)=10
> > $$
> >
> > $$
> > \frac{5\left(\sqrt{a+5}+\sqrt{a-5}\right)}{10}=\frac{\sqrt{a+5}+\sqrt{a-5}}{2}
> > $$
> >
> > This needs $a\ge 5$ so that both roots exist. The denominator is never zero there, because $\sqrt{a+5}>\sqrt{a-5}$.

## 5. The graph of a function

**Printed:** the graph is the collection of all points on the $xy$ plane which satisfy the function's equation $y=f(x)$ on the given domain.

> [!example] Graph $y=x+1$ with domain $D=\{-1,0,1\}$
> > [!note] Reconstructed from the slides
> > Only three inputs are allowed, so the graph is just three **isolated points**, not a line:
> >
> > | x | -1 | 0 | 1 |
> > |---|----|---|---|
> > | y | 0 | 1 | 2 |
> >
> > Points: $(-1,0)$, $(0,1)$, $(1,2)$.

### The straight line (linear) function

**Printed:** every equation of the first degree is always a straight line, $y=ax+b$ (also known as a linear function). The worksheet labels $a$ as the **slope** and $b$ as the **y-intercept**.

> [!note] Reconstructed from the slides
> The slope $a$ is the change in $y$ per one-unit rise in $x$; the intercept $b$ is the value of $y$ at $x=0$. For $y=x+1$: slope 1, intercept 1.

**See it move.** Change the slope and intercept of a straight line.

```graph
type: calc-function-family
family: linear
```

### The vertical line test

**Printed:** the vertical line test, applied to $y^2-x^2=9$, with a sketch of two curves, one above and one below the $x$-axis.

> [!warning] Labels on the printed sketch
> The sketch's point labels look like typos: it shows (-4,5), (5,4), (3,0), (0,-3), (-4,-5), (4,-5). From $y^2=x^2+9$ the actual points are $(\pm4,\pm5)$, $(0,3)$ and $(0,-3)$. The figure below uses those.

![[Lec01_vertical_line_test.png]]

> [!note] Reconstructed from the slides
> **Test:** if some vertical line meets the graph in more than one point, the graph is **not** a function, because that $x$ has two $y$ values. The line $x=4$ hits both $(4,5)$ and $(4,-5)$, so $y^2-x^2=9$ fails. This is the picture version of the algebra in section 3b.

## 6. Piecewise (compound) functions

**Printed:** a function defined using several different equations in different intervals of $x$.

**Printed example:**

$$
y=\begin{cases} x & x\le 0\\ x+1 & x>0\end{cases}
$$

> [!note] Reconstructed from the slides
> Draw $y=x$ up to and including $x=0$ (a solid dot at the origin), then $y=x+1$ for $x>0$ (an open circle at $(0,1)$, since $x=0$ is not in that piece). The graph **jumps** by 1 at $x=0$ but is still a function: at $x=0$ the value is 0 only, so the vertical line test passes.

![[Lec01_piecewise_jump.png]]

**Printed exercise:**

$$
y=\begin{cases} -2 & -4<x<-3\\ 2 & -3<x\le 4\\ -x+6 & x\ge 4\end{cases}
$$

a. Graph it. b. Find its domain. (The printed task is partly cut off and appears to continue with $R_{min}$.)

> [!note] Reconstructed from the slides
> **a.** A short horizontal segment at height $-2$, a long horizontal segment at height 2 from $-3$ to $4$, then a line falling with slope $-1$ from $(4,2)$.
>
> ![[Lec01_piecewise_three.png]]
>
> **b. Domain.** The pieces cover $-4<x<-3$, then $-3<x\le4$, then $x\ge4$. The point $x=-3$ is **excluded** from the first piece and **included** in the second, so nothing is missing; $x=4$ belongs to both the second and third rows, but both give $2$ ($-4+6=2$), so there is still one output. Domain: $x>-4$, that is $(-4,\infty)$.
>
> **$R_{min}$.** The first piece gives $\{-2\}$, the second $\{2\}$, and the third gives every value $\le 2$ (as $x$ grows from 4, $-x+6$ falls from 2 downwards without limit). So $R_{min}=(-\infty,2]$.
>
> > [!tip] Overlap at x = 4
> > Whenever a piecewise definition includes the boundary in two pieces, check that the pieces agree there; otherwise it is not a function.

## 7. Sigma ($\Sigma$) notation for a sum

**Printed:** the sigma notation for a sum, with the exercise

$$
(x_3+3+9)+(x_4+4+9)+(x_5+5+9)+\dots+(x_{10}+10+9)=\;?
$$

> [!note] Reconstructed from the slides
> $\Sigma$ means "add up". The subscript $i=3$ is where counting starts, the 10 on top is where it stops, and the expression after it is the term. Each bracket has the form $(x_i+i+9)$, so
>
> $$
> \sum_{i=3}^{10}(x_i+i+9)
> $$
>
> Splitting it (rules below): $\sum_{i=3}^{10}x_i+\sum_{i=3}^{10}i+\sum_{i=3}^{10}9$. The middle sum is $3+4+\dots+10=52$ (that is $55-1-2$), and the last is $8\cdot 9=72$ (eight terms). So the whole sum is $\sum_{i=3}^{10}x_i+124$.

### Summation rules

**Printed:**

1. "The Commutative property":

$$
\sum_{i=1}^{n}(a_i+b_i)=\sum_{i=1}^{n}a_i+\sum_{i=1}^{n}b_i
$$

2. "The distributive property" (with a constant $\alpha$):

$$
\sum_{i=1}^{n}(\alpha\cdot a_i)=\alpha\cdot\sum_{i=1}^{n}a_i
$$

3. "The sum of a constant" (the worksheet leaves the formula blank).

> [!note] Reconstructed from the slides
> The first rule is usually called additivity (sums split across a plus sign); I keep the lecturer's name above. For rule 3, adding a constant $c$ a total of $n$ times gives
>
> $$
> \sum_{i=1}^{n}c=n\cdot c
> $$
>
> The number of terms is $n$ only when the index runs from 1; from $i=m$ to $n$ it is $n-m+1$ (hence the 8 in the example above).

> [!warning] What the rules do not allow
> A sum of products does not split: $\sum a_ib_i\ne\sum a_i\cdot\sum b_i$.

> [!example] Find $\displaystyle\sum_{i=1}^{10}(2^i+3i-5)$, given $\displaystyle\sum_{i=1}^{10}2^i=2046$ and $\displaystyle\sum_{i=1}^{10}i=55$
> > [!note] Reconstructed from the slides
> > Split with rule 1, pull out the 3 with rule 2, and use rule 3 for the $-5$ (ten terms):
> >
> > $$
> > \sum_{i=1}^{10}2^i+3\sum_{i=1}^{10}i-\sum_{i=1}^{10}5=2046+3(55)-10(5)=2046+165-50=2161
> > $$

## Summary

- A **function** gives exactly one output per allowed input; test it by isolating $y$, or on a graph with the vertical line test.
- The **domain** is where the formula is defined (no zero denominators, no negative square-root arguments); $R_{min}$ is the set of outputs actually produced.
- $f(x)$ notation: substitute the whole bracket for $x$; use conjugates to simplify differences of square roots.
- **Piecewise** functions use different formulas on different intervals; watch open and closed endpoints.
- **Sigma notation** obeys additivity, constant-multiple and constant-sum rules, which turn big sums into known pieces.

## Related notes

- [[Maths for Economists A]]
- [[Function]], [[Domain]], [[Minimal Range]], [[Vertical Line Test]], [[Function Notation]], [[Linear Function]], [[Piecewise Function]], [[Sigma Notation]], [[Summation Rules]]
