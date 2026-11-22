---
title: "PS8"
subject: maths-for-economists-a
source_doc: /papers/maths-for-economists-a/ps-8.pdf
tags:
  - maths-for-economists-a
  - problem-set
  - chain-rule
  - composed-power-function
  - exponential-derivative
  - logarithmic-derivative
  - domain
  - indefinite-integral
  - definite-integral
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Find the derivative using the power rule for a composition of functions:**

      $f_1(x)=\dfrac{1}{(x^4+1)^2}$, $\quad f_2(x)=\left(\sqrt{x^2+2}+5\right)^3$, $\quad f_3(x)=4x^2\sqrt{x^2-1}$, $\quad f_4(x)=\dfrac{3}{\sqrt[3]{x-x^2}}$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 1).
    solution: |
      > [!note] Working reconstructed to reach the printed answers
      > **$f_1$.** $f_1=(x^4+1)^{-2}$, so
      >
      > $$
      > f_1'=-2(x^4+1)^{-3}\cdot4x^3=\frac{-8x^3}{(x^4+1)^3}
      > $$
      >
      > **$f_2$.** Outer power $3$, inner $\sqrt{x^2+2}+5$ whose derivative is $\dfrac{2x}{2\sqrt{x^2+2}}=\dfrac{x}{\sqrt{x^2+2}}$:
      >
      > $$
      > f_2'=3\left(\sqrt{x^2+2}+5\right)^2\cdot\frac{x}{\sqrt{x^2+2}}=\frac{3x\left(\sqrt{x^2+2}+5\right)^2}{\sqrt{x^2+2}}
      > $$
      >
      > **$f_3$.** Product of $4x^2$ and $(x^2-1)^{1/2}$:
      >
      > $$
      > f_3'=8x\sqrt{x^2-1}+4x^2\cdot\frac{x}{\sqrt{x^2-1}}=\frac{8x(x^2-1)+4x^3}{\sqrt{x^2-1}}=\frac{12x^3-8x}{\sqrt{x^2-1}}
      > $$
      >
      > **$f_4$.** $f_4=3(x-x^2)^{-1/3}$, so
      >
      > $$
      > f_4'=3\cdot\left(-\tfrac13\right)(x-x^2)^{-4/3}(1-2x)=\frac{-(1-2x)}{\sqrt[3]{(x-x^2)^4}}=\frac{2x-1}{\sqrt[3]{(x-x^2)^4}}
      > $$

      > [!success] Answers (printed)
      > $f_1'=\dfrac{-8x^3}{(x^4+1)^3}$, $\ f_2'=\dfrac{3x\left(\sqrt{x^2+2}+5\right)^2}{\sqrt{x^2+2}}$, $\ f_3'=\dfrac{12x^3-8x}{\sqrt{x^2-1}}$, $\ f_4'=\dfrac{2x-1}{\sqrt[3]{(x-x^2)^4}}$
    related_terms: ["chain-rule", "derivative-of-a-composed-power-function", "power-rule"]
    source_doc_page: 1
  - id: "2a"
    text: |
      **Find the derivative of:**

      a. $f(x)=e^{x^3-3x^2+1}$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 2).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{d}{dx}e^{g}=g'e^{g}$ with $g=x^3-3x^2+1$, $g'=3x^2-6x$.

      > [!success] Answer (printed)
      > $f'(x)=(3x^2-6x)\,e^{x^3-3x^2+1}$
    related_terms: ["chain-rule", "derivative-of-an-exponential-function"]
    source_doc_page: 1
  - id: "2b"
    text: |
      **Find the derivative of:**

      b. $f(x)=\dfrac{e^x}{x^3}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Quotient rule:
      >
      > $$
      > f'=\frac{e^x\cdot x^3-e^x\cdot3x^2}{x^6}=\frac{x^2e^x(x-3)}{x^6}=\frac{e^x(x-3)}{x^4}
      > $$

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{e^x(x-3)}{x^4}$
    related_terms: ["quotient-rule", "derivative-of-an-exponential-function"]
    source_doc_page: 1
  - id: "2c"
    text: |
      **Find the derivative of:**

      c. $f(x)=(x+1)^3e^x$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Product rule, then factor the common $(x+1)^2e^x$:
      >
      > $$
      > f'=3(x+1)^2e^x+(x+1)^3e^x=(x+1)^2e^x\left[3+(x+1)\right]=(x+1)^2e^x(x+4)
      > $$

      > [!success] Answer (printed)
      > $f'(x)=(x+1)^2e^x(x+4)$
    related_terms: ["product-rule", "derivative-of-an-exponential-function"]
    source_doc_page: 1
  - id: "2d"
    text: |
      **Find the derivative of:**

      d. $f(x)=7^{x^2}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{d}{dx}a^{g}=g'a^{g}\ln a$ with $a=7$, $g=x^2$, $g'=2x$.

      > [!success] Answer (printed)
      > $f'(x)=2x\cdot7^{x^2}\ln7$
    related_terms: ["chain-rule", "derivative-of-an-exponential-function"]
    source_doc_page: 1
  - id: "3a"
    text: |
      **Find the derivative of:**

      a. $f(x)=\ln(5x)$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 2). See also [[Logarithm Rules]].
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{d}{dx}\ln g=\dfrac{g'}{g}=\dfrac{5}{5x}=\dfrac1x$. (Or: $\ln5x=\ln5+\ln x$, and $\ln5$ is a constant.)

      > [!success] Answer (printed)
      > $f'(x)=\dfrac1x$
    related_terms: ["derivative-of-a-logarithmic-function", "chain-rule"]
    source_doc_page: 1
  - id: "3b"
    text: |
      **Find the derivative of:**

      b. $f(x)=\ln(1-x^2)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{g'}{g}=\dfrac{-2x}{1-x^2}$.

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{-2x}{1-x^2}$
    related_terms: ["derivative-of-a-logarithmic-function", "chain-rule"]
    source_doc_page: 1
  - id: "3c"
    text: |
      **Find the derivative of:**

      c. $f(x)=\ln^3x$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\ln^3x=(\ln x)^3$. Power rule outside, then the derivative of $\ln x$: $3(\ln x)^2\cdot\dfrac1x$.

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{3\ln^2x}{x}$
    related_terms: ["chain-rule", "derivative-of-a-logarithmic-function", "power-rule"]
    source_doc_page: 1
  - id: "3d"
    text: |
      **Find the derivative of:**

      d. $f(x)=\sqrt[3]{1+\ln x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $f=(1+\ln x)^{1/3}$:
      >
      > $$
      > f'=\tfrac13(1+\ln x)^{-2/3}\cdot\frac1x=\frac{1}{3x\sqrt[3]{(1+\ln x)^2}}
      > $$

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{1}{3x\sqrt[3]{(1+\ln x)^2}}$
    related_terms: ["chain-rule", "derivative-of-a-logarithmic-function", "power-rule"]
    source_doc_page: 1
  - id: "3e"
    text: |
      **Find the derivative of:**

      e. $f(x)=\dfrac{x}{\ln x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Quotient rule with $u=x$, $v=\ln x$:
      >
      > $$
      > f'=\frac{1\cdot\ln x-x\cdot\frac1x}{\ln^2x}=\frac{\ln x-1}{\ln^2x}
      > $$

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{\ln x-1}{\ln^2x}$
    related_terms: ["quotient-rule", "derivative-of-a-logarithmic-function"]
    source_doc_page: 1
  - id: "3f"
    text: |
      **Find the derivative of:**

      f. $f(x)=e^{2+\ln x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Simplify first: $e^{2+\ln x}=e^2\cdot e^{\ln x}=e^2x$. So $f'=e^2$, a constant, because $e^2$ is just a number.

      > [!success] Answer (printed)
      > $f'(x)=e^2$

      > [!tip] Intuition
      > Using the chain rule instead gives $\left(0+\frac1x\right)e^{2+\ln x}=\frac1x\cdot e^2x=e^2$, the same. Simplifying first is quicker and safer.
    related_terms: ["derivative-of-an-exponential-function", "logarithm-rules"]
    source_doc_page: 1
  - id: "3g"
    text: |
      **Find the derivative of:**

      g. $f(x)=\ln^2(3x)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Outer power $2$, inner $\ln(3x)$ with derivative $\dfrac{3}{3x}=\dfrac1x$:
      >
      > $$
      > f'=2\ln(3x)\cdot\frac1x=\frac{2\ln(3x)}{x}
      > $$

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{2\ln(3x)}{x}$
    related_terms: ["chain-rule", "derivative-of-a-logarithmic-function"]
    source_doc_page: 1
  - id: "3h"
    text: |
      **Find the derivative of:**

      h. $f(x)=\log_4(2x+1)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{d}{dx}\log_ag=\dfrac{g'}{g\ln a}$ with $a=4$, $g=2x+1$, $g'=2$.

      > [!success] Answer (printed)
      > $f'(x)=\dfrac{2}{(2x+1)\ln4}$
    related_terms: ["derivative-of-a-logarithmic-function", "logarithm"]
    source_doc_page: 1
  - id: "4a"
    text: |
      **Find the domain and the derivative of:**

      a. $f(x)=\sqrt{e^x}$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 2).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\sqrt{e^x}=e^{x/2}$. $e^{x/2}>0$ for every $x$, so the root exists for all $x$. Derivative: $\tfrac12e^{x/2}$.

      > [!success] Answer (printed)
      > all $x$, $\ f'(x)=\tfrac12e^{\frac12x}$
    related_terms: ["domain", "derivative-of-an-exponential-function"]
    source_doc_page: 1
  - id: "4b"
    text: |
      **Find the domain and the derivative of:**

      b. $f(x)=\ln(8x-24)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\ln$ needs a positive argument: $8x-24>0\Rightarrow x>3$. Derivative: $\dfrac{8}{8x-24}=\dfrac{1}{x-3}$.

      > [!success] Answer (printed)
      > $x>3$, $\ f'(x)=\dfrac{1}{x-3}$
    related_terms: ["domain", "derivative-of-a-logarithmic-function"]
    source_doc_page: 1
  - id: "4c"
    text: |
      **Find the domain and the derivative of:**

      c. $y=\ln\!\left(\dfrac1x\right)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\ln\frac1x=-\ln x$, and $\frac1x>0$ needs $x>0$. Derivative: $-\dfrac1x$.

      > [!success] Answer (printed)
      > $x>0$, $\ f'(x)=-\dfrac1x$
    related_terms: ["domain", "logarithm-rules", "derivative-of-a-logarithmic-function"]
    source_doc_page: 1
  - id: "4d"
    text: |
      **Find the domain and the derivative of:**

      d. $y=\dfrac{1}{\ln^3x}$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $y=(\ln x)^{-3}$. Domain: $x>0$ for the log, and $\ln x\neq0$ for the denominator, so $x\neq1$. Derivative:
      >
      > $$
      > y'=-3(\ln x)^{-4}\cdot\frac1x=\frac{-3}{x\ln^4x}
      > $$

      > [!success] Answer (printed)
      > $x>0,\ x\neq1$, $\ f'(x)=\dfrac{-3}{x\ln^4x}$
    related_terms: ["domain", "derivative-of-a-logarithmic-function", "chain-rule"]
    source_doc_page: 1
  - id: "4e"
    text: |
      **Find the domain and the derivative of:**

      e. $y=\ln\!\left(3e^{-5x}\right)$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $3e^{-5x}>0$ for all $x$, so the domain is all $x$. Split the log: $\ln\!\left(3e^{-5x}\right)=\ln3+\ln e^{-5x}=\ln3-5x$. Derivative: $-5$.

      > [!success] Answer (printed)
      > all $x$, $\ f'(x)=-5$
    related_terms: ["domain", "logarithm-rules", "derivative-of-a-logarithmic-function"]
    source_doc_page: 1
  - id: "5a"
    text: |
      **Find the integrals:**

      a. $\displaystyle\int(3x+1)^5dx$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 4, [[Integration Rules]]).
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Power rule, then divide by the inner coefficient $3$:
      >
      > $$
      > \int(3x+1)^5dx=\frac{(3x+1)^6}{6\cdot3}+c=\frac{(3x+1)^6}{18}+c
      > $$

      > [!success] Answer (printed)
      > $\dfrac{(3x+1)^6}{18}+c$
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "5b"
    text: |
      **Find the integrals:**

      b. $\displaystyle\int(\sqrt x+1)^2dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Expand: $(\sqrt x+1)^2=x+2\sqrt x+1=x+2x^{1/2}+1$.
      >
      > $$
      > \int\left(x+2x^{1/2}+1\right)dx=\frac{x^2}{2}+2\cdot\frac{x^{3/2}}{3/2}+x+c=\frac12x^2+\frac43\sqrt{x^3}+x+c
      > $$

      > [!success] Answer (printed)
      > $\dfrac12x^2+\dfrac43\sqrt{x^3}+x+c$
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "5c"
    text: |
      **Find the integrals:**

      c. $\displaystyle\int\left(e^3+\frac{1}{3e^{5x}}\right)dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\dfrac{1}{3e^{5x}}=\tfrac13e^{-5x}$ and $e^3$ is a constant. $\displaystyle\int e^{-5x}dx=-\tfrac15e^{-5x}$, so
      >
      > $$
      > \int\left(e^3+\tfrac13e^{-5x}\right)dx=e^3x-\frac{1}{15}e^{-5x}+c
      > $$

      > [!success] Answer (printed)
      > $e^3x-\dfrac{1}{15}e^{-5x}+c$

      > [!tip] Intuition
      > $e^3$ is not a function of $x$: it integrates like the number $20.09$ would, to $e^3x$. A common slip is to write $e^3$ integrating to $e^4/4$.
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "5d"
    text: |
      **Find the integrals:**

      d. $\displaystyle\int\frac{x+2}{\sqrt[3]{x}}dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Split the fraction: $\dfrac{x+2}{x^{1/3}}=x^{2/3}+2x^{-1/3}$.
      >
      > $$
      > \int\left(x^{2/3}+2x^{-1/3}\right)dx=\frac{x^{5/3}}{5/3}+2\cdot\frac{x^{2/3}}{2/3}+c=\frac35\sqrt[3]{x^5}+3\sqrt[3]{x^2}+c
      > $$

      > [!success] Answer (printed)
      > $\dfrac35\sqrt[3]{x^5}+3\sqrt[3]{x^2}+c$
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "5e"
    text: |
      **Find the integrals:**

      e. $\displaystyle\int\frac{e^{2x}+e^{x+1}}{e^x}dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Divide term by term: $\dfrac{e^{2x}}{e^x}=e^x$ and $\dfrac{e^{x+1}}{e^x}=e^{1}=e$ (a constant).
      >
      > $$
      > \int(e^x+e)\,dx=e^x+ex+c
      > $$

      > [!success] Answer (printed)
      > $e^x+ex+c$
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "5f"
    text: |
      **Find the integrals:**

      f. $\displaystyle\int\frac{1}{\sqrt[3]{4x^2-12x+9}}dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > Recognise a perfect square: $4x^2-12x+9=(2x-3)^2$. Then
      >
      > $$
      > \frac{1}{\sqrt[3]{(2x-3)^2}}=(2x-3)^{-2/3}
      > $$
      >
      > $$
      > \int(2x-3)^{-2/3}dx=\frac{(2x-3)^{1/3}}{\frac13\cdot2}+c=\frac32\sqrt[3]{2x-3}+c
      > $$

      > [!success] Answer (printed)
      > $\dfrac32\sqrt[3]{2x-3}+c$
    related_terms: ["indefinite-integral", "integration-rules"]
    source_doc_page: 1
  - id: "6a"
    text: |
      **Find the integrals:**

      a. $\displaystyle\int_{-1/e}^{-1/e^2}\frac{2}{x}\,dx$

      Taught in [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] (section 3, [[Definite Integral]]).
    solution: |
      The lower limit is $-\frac1e$ and the upper limit is $-\frac1{e^2}$. The interval lies in the negative $x$ axis, so the antiderivative of $\frac1x$ is $\ln|x|$.

      > [!note] Working reconstructed to reach the printed answer
      >
      > $$
      > \int\frac2x\,dx=2\ln|x|
      > $$
      >
      > $$
      > \Big[2\ln|x|\Big]_{-1/e}^{-1/e^2}=2\ln\frac1{e^2}-2\ln\frac1e=2(-2)-2(-1)=-4+2=-2
      > $$

      > [!success] Answer (printed)
      > $-2$
    related_terms: ["definite-integral", "integration-rules", "natural-logarithm"]
    source_doc_page: 1
  - id: "6b"
    text: |
      **Find the integrals:**

      b. $\displaystyle\int_0^3 2e^{-2x}\,dx$
    solution: |
      > [!note] Working reconstructed to reach the printed answer
      > $\displaystyle\int2e^{-2x}dx=-e^{-2x}$, so
      >
      > $$
      > \Big[-e^{-2x}\Big]_0^3=-e^{-6}-\left(-e^{0}\right)=1-\frac1{e^6}
      > $$

      > [!success] Answer (printed)
      > $1-\dfrac{1}{e^6}$
    related_terms: ["definite-integral", "integration-rules"]
    source_doc_page: 1
---

*Related: [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]]*
