---
title: "PS6"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-6.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - exponential-limits
  - euler-limit
  - definition-of-the-derivative
  - tangent-slope
  - logarithm
  - logarithmic-equations
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Given** $f(x)=\dfrac{2^x}{4^x+1}$ and $g(x)=\dfrac{2e^{2x}+e^{-x}}{e^{2x}+2e^{-x}}$.

      a. Find $\displaystyle\lim_{x\to\infty}g(x)$ and $\displaystyle\lim_{x\to\infty}f(x)$.

      b. Find $\displaystyle\lim_{x\to-\infty}g(x)$ and $\displaystyle\lim_{x\to-\infty}f(x)$.

      Taught in [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (section 1).
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > **$f$ as $x\to\infty$.** Divide top and bottom by $4^x$: $f=\dfrac{(2/4)^x}{1+4^{-x}}=\dfrac{(1/2)^x}{1+4^{-x}}\to\dfrac{0}{1}=0$.
      >
      > **$f$ as $x\to-\infty$.** $2^x\to0$ and $4^x\to0$, so $f\to\dfrac{0}{0+1}=0$.
      >
      > **$g$ as $x\to\infty$.** The fastest-growing term is $e^{2x}$. Divide by $e^{2x}$:
      >
      > $$
      > g=\frac{2+e^{-3x}}{1+2e^{-3x}}\to\frac21=2
      > $$
      >
      > **$g$ as $x\to-\infty$.** Now $e^{-x}$ dominates. Divide by $e^{-x}$:
      >
      > $$
      > g=\frac{2e^{3x}+1}{e^{3x}+2}\to\frac{0+1}{0+2}=\frac12
      > $$

      > [!success] Answers (printed)
      > $\displaystyle\lim_{x\to\infty}f=0,\ \lim_{x\to\infty}g=2,\ \lim_{x\to-\infty}f=0$ and $\displaystyle\lim_{x\to-\infty}g=0.5$.

      > [!warning] Layout of the printed answer
      > The key prints "a. $\lim_{x\to\infty}f=0$, $\lim_{x\to\infty}g=2$ and $\lim_{x\to-\infty}f=0$" and then "b. $\lim_{x\to-\infty}g=0.5$". So the third value (for $f$ as $x\to-\infty$) sits in the part a line although the question puts it in part b. The values agree with my working: only the placement is off. Kept as printed.
    related_terms: ["limit-at-infinity", "exponential-function", "horizontal-asymptote"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Calculate the limits:**

      a. $\displaystyle\lim_{x\to\infty}(1)^x$

      Taught in [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (sections 1 and 2).
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > A constant base $c>0$ raised to $x\to\infty$:
      >
      > - $c=1$: $1^x=1$ always. So a is $1$.
      > - $c>1$: grows without bound. $1.01>1$ and $1.001>1$, so b and d are $\infty$.
      > - $0<c<1$: shrinks to zero. $0.99$ and $0.99999$ are below $1$, so c and e are $0$.

      > [!success] Answers (printed)
      > a. $1$  b. $\infty$  c. $0$  d. $\infty$  e. $0$

      > [!tip] Intuition
      > Compounding at $+0.1\%$ a period for ever beats any ceiling. Compounding at $-0.001\%$ for ever still decays to nothing. Only a base of exactly $1$ stays put. This is why the Euler limit is delicate: the base tends to $1$ but the exponent also grows.
    related_terms: ["limit", "exponential-function"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Calculate the limits:**

      b. $\displaystyle\lim_{x\to\infty}(1.01)^x$
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > A constant base $c>0$ raised to $x\to\infty$:
      >
      > - $c=1$: $1^x=1$ always. So a is $1$.
      > - $c>1$: grows without bound. $1.01>1$ and $1.001>1$, so b and d are $\infty$.
      > - $0<c<1$: shrinks to zero. $0.99$ and $0.99999$ are below $1$, so c and e are $0$.

      > [!success] Answers (printed)
      > a. $1$  b. $\infty$  c. $0$  d. $\infty$  e. $0$

      > [!tip] Intuition
      > Compounding at $+0.1\%$ a period for ever beats any ceiling. Compounding at $-0.001\%$ for ever still decays to nothing. Only a base of exactly $1$ stays put. This is why the Euler limit is delicate: the base tends to $1$ but the exponent also grows.
    related_terms: ["limit", "exponential-function"]
    source_doc_page: 1
  - id: "2c"
    text: |
      **Calculate the limits:**

      c. $\displaystyle\lim_{x\to\infty}(0.99)^x$
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > A constant base $c>0$ raised to $x\to\infty$:
      >
      > - $c=1$: $1^x=1$ always. So a is $1$.
      > - $c>1$: grows without bound. $1.01>1$ and $1.001>1$, so b and d are $\infty$.
      > - $0<c<1$: shrinks to zero. $0.99$ and $0.99999$ are below $1$, so c and e are $0$.

      > [!success] Answers (printed)
      > a. $1$  b. $\infty$  c. $0$  d. $\infty$  e. $0$

      > [!tip] Intuition
      > Compounding at $+0.1\%$ a period for ever beats any ceiling. Compounding at $-0.001\%$ for ever still decays to nothing. Only a base of exactly $1$ stays put. This is why the Euler limit is delicate: the base tends to $1$ but the exponent also grows.
    related_terms: ["limit", "exponential-function"]
    source_doc_page: 1
  - id: "2d"
    text: |
      **Calculate the limits:**

      d. $\displaystyle\lim_{x\to\infty}(1+0.001)^x$
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > A constant base $c>0$ raised to $x\to\infty$:
      >
      > - $c=1$: $1^x=1$ always. So a is $1$.
      > - $c>1$: grows without bound. $1.01>1$ and $1.001>1$, so b and d are $\infty$.
      > - $0<c<1$: shrinks to zero. $0.99$ and $0.99999$ are below $1$, so c and e are $0$.

      > [!success] Answers (printed)
      > a. $1$  b. $\infty$  c. $0$  d. $\infty$  e. $0$

      > [!tip] Intuition
      > Compounding at $+0.1\%$ a period for ever beats any ceiling. Compounding at $-0.001\%$ for ever still decays to nothing. Only a base of exactly $1$ stays put. This is why the Euler limit is delicate: the base tends to $1$ but the exponent also grows.
    related_terms: ["limit", "exponential-function"]
    source_doc_page: 1
  - id: "2e"
    text: |
      **Calculate the limits:**

      e. $\displaystyle\lim_{x\to\infty}(1-0.00001)^x$
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > A constant base $c>0$ raised to $x\to\infty$:
      >
      > - $c=1$: $1^x=1$ always. So a is $1$.
      > - $c>1$: grows without bound. $1.01>1$ and $1.001>1$, so b and d are $\infty$.
      > - $0<c<1$: shrinks to zero. $0.99$ and $0.99999$ are below $1$, so c and e are $0$.

      > [!success] Answers (printed)
      > a. $1$  b. $\infty$  c. $0$  d. $\infty$  e. $0$

      > [!tip] Intuition
      > Compounding at $+0.1\%$ a period for ever beats any ceiling. Compounding at $-0.001\%$ for ever still decays to nothing. Only a base of exactly $1$ stays put. This is why the Euler limit is delicate: the base tends to $1$ but the exponent also grows.
    related_terms: ["limit", "exponential-function"]
    source_doc_page: 1
  - id: "2f"
    text: |
      **Calculate the limits:**

      f. $\displaystyle\lim_{x\to0}(1+x)^{2/x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > (1+x)^{2/x}=\left[(1+x)^{1/x}\right]^2\to e^2\quad(x\to0)
      > $$

      > [!success] Answer (printed)
      > $e^2$
    related_terms: ["euler-limit", "eulers-number"]
    source_doc_page: 1
  - id: "2g"
    text: |
      **Calculate the limits:**

      g. $\displaystyle\lim_{x\to0}\left(1+x^2\right)^{1/x^3}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Write $(1+x^2)^{1/x^3}=\exp\!\left(\dfrac{\ln(1+x^2)}{x^3}\right)$. Since $\ln(1+x^2)\approx x^2$ for small $x$, the exponent behaves like $\dfrac{x^2}{x^3}=\dfrac1x$.
      >
      > - $x\to0^+$: exponent $\to+\infty$, so the limit is $\infty$.
      > - $x\to0^-$: exponent $\to-\infty$, so the limit is $0$.
      >
      > The one-sided limits differ, so the two-sided limit does not exist.

      > [!success] Answer (printed)
      > undefined
    related_terms: ["euler-limit", "one-sided-limit", "natural-logarithm"]
    source_doc_page: 1
  - id: "2h"
    text: |
      **Calculate the limits:**

      h. $\displaystyle\lim_{x\to\infty}\left(1-\frac3x\right)^x$
    solution: |
      Use $-3/x$ as the "small" term.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \left(1-\frac3x\right)^x=\left[\left(1+\frac{1}{-x/3}\right)^{-x/3}\right]^{-3}\to e^{-3}
      > $$

      > [!success] Answer (printed)
      > $e^{-3}$
    related_terms: ["euler-limit", "eulers-number"]
    source_doc_page: 1
  - id: "2i"
    text: |
      **Calculate the limits:**

      i. $\displaystyle\lim_{x\to\infty}\left(1-\frac{2}{x^2+1}\right)^x$
    solution: |
      Base $\to1$, exponent $\to\infty$ is the $1^\infty$ form, but the small term $\frac{2}{x^2+1}$ dies **faster** than $\frac1x$, so it is not worth $e^{\text{something}}$ with a non-zero something.

      > [!note] Working reconstructed to reach the printed answer
      > Take logs: $x\ln\!\left(1-\dfrac{2}{x^2+1}\right)\approx x\cdot\left(-\dfrac{2}{x^2+1}\right)=-\dfrac{2x}{x^2+1}\to0$. So the limit is $e^0=1$.

      > [!success] Answer (printed)
      > $1$

      > [!tip] Intuition
      > The Euler limit needs the small term to be of order $\frac1{\text{exponent}}$. Here the small term is of order $\frac1{x^2}$ and the exponent is only $x$, so the product vanishes and the answer is $1$. Compare Q2h, where the small term is $\frac3x$ and the exponent is $x$.
    related_terms: ["euler-limit", "natural-logarithm", "indeterminate-form"]
    source_doc_page: 1
  - id: "2j"
    text: |
      **Calculate the limits:**

      j. $\displaystyle\lim_{x\to\infty}(1+x)^{-x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $$
      > (1+x)^{-x}=\frac{1}{(1+x)^x}.
      > $$
      >
      > As $x\to\infty$ the base $1+x\to\infty$ and the exponent $x\to\infty$, so the denominator $\to\infty$ and the quotient $\to0$.

      > [!success] Answer (printed)
      > $0$
    related_terms: ["limit-at-infinity", "exponential-function"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Calculate the limits:**

      a. $\displaystyle\lim_{x\to\infty}\left(\frac{x}{1+x}\right)^x$

      Taught in [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (section 2).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{x}{1+x}=1-\dfrac1{1+x}$. Put $n=1+x\to\infty$, so $x=n-1$:
      >
      > $$
      > \left(1-\frac1n\right)^{n-1}=\frac{\left(1-\frac1n\right)^n}{1-\frac1n}\to\frac{e^{-1}}{1}=e^{-1}
      > $$

      > [!success] Answer (printed)
      > $e^{-1}$
    related_terms: ["euler-limit", "eulers-number"]
    source_doc_page: 1
  - id: "3b"
    text: |
      **Calculate the limits:**

      b. $\displaystyle\lim_{x\to\infty}\left(1+\frac{x^2}{x^2+1}\right)^{\frac{2x}{x-1}}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > This is **not** an Euler limit: the base does not tend to $1$. As $x\to\infty$, $\dfrac{x^2}{x^2+1}\to1$, so the base $\to1+1=2$. The exponent $\dfrac{2x}{x-1}\to2$. Substitute both:
      >
      > $$
      > 2^2=4
      > $$

      > [!success] Answer (printed)
      > $4$
    related_terms: ["limit-at-infinity", "direct-substitution"]
    source_doc_page: 1
  - id: "3c"
    text: |
      **Calculate the limits:**

      c. $\displaystyle\lim_{x\to0}\frac{e^x-1}{2x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Use the standard limit $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$ (it is the derivative of $e^x$ at $0$):
      >
      > $$
      > \frac{e^x-1}{2x}=\frac12\cdot\frac{e^x-1}{x}\to\frac12
      > $$

      > [!success] Answer (printed)
      > $\dfrac12$
    related_terms: ["euler-limit", "eulers-number", "definition-of-the-derivative"]
    source_doc_page: 1
  - id: "3d"
    text: |
      **Calculate the limits:**

      d. $\displaystyle\lim_{x\to\infty}\left(e^{1/x}-1\right)\cdot2x$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Let $u=\frac1x\to0^+$, so $2x=\frac2u$:
      >
      > $$
      > \left(e^{u}-1\right)\cdot\frac2u=2\cdot\frac{e^u-1}{u}\to2\cdot1=2
      > $$

      > [!success] Answer (printed)
      > $2$
    related_terms: ["euler-limit", "limit-at-infinity"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **For each function use the definition of the derivative to find the slope of the tangent line at $x=1$:**

      a. $f(x)=6x-x^2$

      The definition used: $\displaystyle f'(1)=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}$.

      Taught in [[Lec_07-The Derivative, Differentiability and Rules]] (section 1) and [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (section 3).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(1)=5$ and $f(1+h)=6(1+h)-(1+h)^2=5+4h-h^2$.
      >
      > $$
      > \frac{f(1+h)-f(1)}{h}=\frac{4h-h^2}{h}=4-h\to4
      > $$

      > [!success] Answer (printed)
      > $4$
    related_terms: ["definition-of-the-derivative", "slope-of-a-tangent", "difference-quotient"]
    source_doc_page: 1
  - id: "4b"
    text: |
      **For each function use the definition of the derivative to find the slope of the tangent line at $x=1$:**

      b. $f(x)=\sqrt{x+3}$

      The definition used: $\displaystyle f'(1)=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(1)=\sqrt4=2$. Multiply by the conjugate:
      >
      > $$
      > \frac{\sqrt{4+h}-2}{h}\cdot\frac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\frac{h}{h\left(\sqrt{4+h}+2\right)}=\frac{1}{\sqrt{4+h}+2}\to\frac14
      > $$
    related_terms: ["definition-of-the-derivative", "slope-of-a-tangent", "difference-quotient", "conjugate"]
    source_doc_page: 1
  - id: "4c"
    text: |
      **For each function use the definition of the derivative to find the slope of the tangent line at $x=1$:**

      c. $f(x)=\dfrac{1}{x+2}$

      The definition used: $\displaystyle f'(1)=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}$.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f(1)=\frac13$. Combine the fractions in the numerator:
      >
      > $$
      > \frac{\frac1{3+h}-\frac13}{h}=\frac{3-(3+h)}{3h(3+h)}=\frac{-1}{3(3+h)}\to-\frac19
      > $$

      > [!success] Answers (printed, as they appear on the sheet)
      > a. $4$  b. $-\dfrac19$  c. $\dfrac14$

      > [!warning] Printed answers for b and c look swapped
      > My working gives **b $=\frac14$** (for $\sqrt{x+3}$) and **c $=-\frac19$** (for $\frac1{x+2}$). Check with the rules: $\frac{d}{dx}\sqrt{x+3}=\frac1{2\sqrt{x+3}}=\frac14$ at $x=1$, and $\frac{d}{dx}\frac1{x+2}=-\frac1{(x+2)^2}=-\frac19$ at $x=1$. The sheet prints $-\frac19$ against b and $\frac14$ against c. The two values are right, but they appear to be attached to the wrong parts. The printed answers are kept as printed.
    related_terms: ["definition-of-the-derivative", "slope-of-a-tangent", "difference-quotient"]
    source_doc_page: 1
  - id: "5a"
    text: |
      **Solve:**

      a. $\log(x-4)-\log(3x-5)=-1$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.

      Taught in [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] (section 4, see [[Logarithm Rules]] and [[Natural Logarithm]]).
    solution: |
      Domain: $x-4>0$ and $3x-5>0$, so $x>4$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \log\frac{x-4}{3x-5}=-1\;\Rightarrow\;\frac{x-4}{3x-5}=10^{-1}=\frac1{10}
      > $$
      >
      > $$
      > 10x-40=3x-5\;\Rightarrow\;7x=35\;\Rightarrow\;x=5.
      > $$
      > $5>4$, so it is in the domain.

      > [!success] Answer (printed)
      > $x=5$
    related_terms: ["logarithm", "logarithm-rules", "domain"]
    source_doc_page: 1
  - id: "5b"
    text: |
      **Solve:**

      b. $\log(x-1)+\log(x+2)=1$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      Domain: $x>1$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \log\big[(x-1)(x+2)\big]=1\;\Rightarrow\;(x-1)(x+2)=10\;\Rightarrow\;x^2+x-12=0\;\Rightarrow\;(x+4)(x-3)=0
      > $$
      > $x=-4$ is outside the domain ($x>1$), so reject it. $x=3$ stays.

      > [!success] Answer (printed)
      > $x=3$
    related_terms: ["logarithm", "logarithm-rules", "domain"]
    source_doc_page: 1
  - id: "5c"
    text: |
      **Solve:**

      c. $\ln x+1=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\ln x=-1\;\Rightarrow\;x=e^{-1}=\dfrac1e$.

      > [!success] Answer (printed)
      > $x=\dfrac1e$
    related_terms: ["natural-logarithm"]
    source_doc_page: 1
  - id: "5d"
    text: |
      **Solve:**

      d. $\ln(x+1)=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\ln(x+1)=0\;\Rightarrow\;x+1=e^0=1\;\Rightarrow\;x=0$.

      > [!success] Answer (printed)
      > $x=0$
    related_terms: ["natural-logarithm"]
    source_doc_page: 1
  - id: "5e"
    text: |
      **Solve:**

      e. $\ln x^2-2=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      Reading the sheet as $\ln(x^2)-2=0$. Domain $x\neq0$.

      > [!note] Working reconstructed to reach the printed answer
      > $\ln x^2=2\;\Rightarrow\;x^2=e^2\;\Rightarrow\;x=\pm e$. Both satisfy $x\neq0$, so both are valid.

      > [!success] Answer (printed)
      > $x=\pm e$

      > [!tip] Intuition
      > Do not rewrite $\ln x^2$ as $2\ln x$ before solving: that would lose the negative root, because $2\ln x$ only exists for $x>0$. Keep $\ln(x^2)$ and take the square root with both signs.
    related_terms: ["natural-logarithm", "domain"]
    source_doc_page: 1
  - id: "5f"
    text: |
      **Solve:**

      f. $x\ln x-2\ln x=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Factor out $\ln x$: $\ln x\,(x-2)=0$. Either $\ln x=0\Rightarrow x=1$, or $x-2=0\Rightarrow x=2$. Both have $x>0$.

      > [!success] Answer (printed)
      > $x=1,\ x=2$
    related_terms: ["natural-logarithm"]
    source_doc_page: 1
  - id: "5g"
    text: |
      **Solve:**

      g. $(\ln x)^2-1=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $(\ln x)^2=1\Rightarrow\ln x=\pm1\Rightarrow x=e$ or $x=e^{-1}=\dfrac1e$.

      > [!success] Answer (printed)
      > $x=e,\ x=\dfrac1e$
    related_terms: ["natural-logarithm"]
    source_doc_page: 1
  - id: "5h"
    text: |
      **Solve:**

      h. $(\ln x)^2-\ln x-6=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      Substitute $t=\ln x$.

      > [!note] Working reconstructed to reach the printed answer
      > $t^2-t-6=0\Rightarrow(t-3)(t+2)=0\Rightarrow t=3$ or $t=-2$. So $x=e^3$ or $x=e^{-2}=\dfrac1{e^2}$.

      > [!success] Answer (printed)
      > $x=e^3,\ x=\dfrac1{e^2}$
    related_terms: ["natural-logarithm", "quadratic-function"]
    source_doc_page: 1
  - id: "5i"
    text: |
      **Solve:**

      i. $\dfrac{\ln x^2}{x-1}=0$

      > [!warning] Base of "log" in a and b
      > The sheet writes $\log$ without a base in a and b. The printed answers only work for **base 10** (see the working), so I read $\log$ as $\log_{10}$ there. $\ln$ is the natural log.
    solution: |
      Reading the sheet as $\dfrac{\ln(x^2)}{x-1}=0$. Domain: $x\neq0$ and $x\neq1$ (denominator).

      > [!note] Working reconstructed to reach the printed answer
      > A fraction is $0$ when its numerator is $0$ and its denominator is not. $\ln x^2=0\Rightarrow x^2=1\Rightarrow x=\pm1$.
      >
      > - $x=1$: denominator is $0$, so the expression is undefined. Reject.
      > - $x=-1$: numerator $\ln1=0$, denominator $-2\neq0$. Valid.

      > [!success] Answer (printed)
      > $x=-1$
    related_terms: ["natural-logarithm", "domain"]
    source_doc_page: 1
---

*Related: [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_05-Infinite Limits]]*
