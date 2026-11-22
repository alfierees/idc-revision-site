---
title: "PS3"
subject: statistics-b
source_doc: /papers/statistics-b/ps-3.pdf
tags:
  - statistics-b
  - maximum-likelihood
  - likelihood
  - binomial
  - hypergeometric
  - unbiased-estimator
  - invariance
ai_drafted: true
questions:
  - id: "1i"
    text: |
      A group has 6 children, either 4 or 2 of which are boys. To estimate the number of boys in the group, we count the number of boys in a randomly chosen sample of 3 children from the group. Find a maximum likelihood estimator for the number of boys in the group based on the number of boys in the sample given that:

      i. Children were sampled **with replacement**.

      *Notation: $D$ is the number of boys in the group (the parameter, either 2 or 4) and $X$ is the number of boys in the sample.*
    solution: |
      Each draw is a boy with probability $D/6$, independently, so

      $$
      X \sim B\left(3, \tfrac{D}{6}\right).
      $$

      The binomial PMF is

      $$
      P(X=k) = \binom{n}{k} p^k (1-p)^{n-k},
      $$

      so the likelihood is

      $$
      L(D, x) = P(X=x \mid D) = \binom{3}{x}\left(\tfrac{D}{6}\right)^x\left(1-\tfrac{D}{6}\right)^{3-x}.
      $$

      Evaluate it at both candidate values of $D$ for each possible $x$ (a [[Likelihood Table]]):

      | | $x=0$ | $x=1$ | $x=2$ | $x=3$ |
      | --- | --- | --- | --- | --- |
      | $P(X=x \mid D=2)$ | $\frac{8}{27}$ | $\frac{12}{27}$ | $\frac{6}{27}$ | $\frac{1}{27}$ |
      | $P(X=x \mid D=4)$ | $\frac{1}{27}$ | $\frac{6}{27}$ | $\frac{12}{27}$ | $\frac{8}{27}$ |

      Worked entries, for $D=2$ ($p=\frac13$): $x=0$ gives $1\cdot1\cdot\left(\frac23\right)^3=\frac{8}{27}$; $x=1$ gives $3\cdot\frac13\cdot\left(\frac23\right)^2=\frac{12}{27}$. For $D=4$ ($p=\frac23$) the table mirrors.

      For each $x$, pick the $D$ with the larger likelihood. $D=2$ is more likely if $X=0$ or $1$; $D=4$ is more likely if $X=2$ or $3$.

      > [!success] Answer
      > $\hat D = 2$ if $X = 0, 1$, and $\hat D = 4$ if $X = 2, 3$.

      ![](/images/statistics-b/ps03-q1-likelihood-bars.png)

      Both panels show the same pattern: the orange bar overtakes the blue one between $x=1$ and $x=2$. Values are those in the two tables (this part and the next).

      > [!tip] Intuition
      > The likelihood $L(\theta\mid x)$ is the probability of the data you saw, read as a function of the unknown parameter. The MLE is the parameter value under which what actually happened was **most probable**. With only two candidate values you just compare two numbers.

      *Related: [[Lec_03-Maximum Likelihood Estimation]]*
    related_terms: ["maximum-likelihood-estimator", "likelihood", "likelihood-table", "binomial-distribution"]
    source_doc_page: 1
  - id: "1ii"
    text: |
      A group has 6 children, either 4 or 2 of which are boys. To estimate the number of boys in the group, we count the number of boys in a randomly chosen sample of 3 children from the group. Find a maximum likelihood estimator for the number of boys in the group based on the number of boys in the sample given that:

      ii. Children were sampled **without replacement**.

      *Notation: $D$ is the number of boys in the group (the parameter, either 2 or 4) and $X$ is the number of boys in the sample.*
    solution: |
      Now each draw changes the group, so $X$ is hypergeometric:

      $$
      X \sim HG(6, D, 3), \qquad P(X=k) = \frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}.
      $$

      With $N=6$, $n=3$, $\binom{6}{3}=20$:

      $$
      L(D, x) = P(X=x\mid D) = \frac{\binom{D}{x}\binom{6-D}{3-x}}{20}.
      $$

      | | $x=0$ | $x=1$ | $x=2$ | $x=3$ |
      | --- | --- | --- | --- | --- |
      | $P(X=x \mid D=2)$ | $\frac{1}{5}$ | $\frac{3}{5}$ | $\frac{1}{5}$ | $0$ |
      | $P(X=x \mid D=4)$ | $0$ | $\frac{1}{5}$ | $\frac{3}{5}$ | $\frac{1}{5}$ |

      Worked entries, $D=2$: $x=0$ gives $\frac{1\cdot4}{20}=\frac15$; $x=1$ gives $\frac{2\cdot6}{20}=\frac35$. For $D=4$: $x=1$ gives $\frac{4\cdot1}{20}=\frac15$.

      Again $D=2$ wins for $X=0,1$ and $D=4$ wins for $X=2,3$.

      > [!success] Answer
      > $\hat D = 2$ if $X = 0, 1$, and $\hat D = 4$ if $X = 2, 3$. The same estimator as with replacement, although the likelihood values differ.

      > [!tip] Intuition
      > Samples with few boys point to the group with 2 boys; samples with many boys point to the group with 4. Without replacement the evidence is sharper (the likelihood for the "wrong" group can be exactly 0, as for $x=0$ with $D=4$), but the decision rule is the same.
    related_terms: ["maximum-likelihood-estimator", "likelihood", "likelihood-table", "hypergeometric-distribution"]
    source_doc_page: 1
  - id: "2i"
    text: |
      A bag has balls of three colors. The proportion of white balls is $p$, as is the proportion of blue balls. The rest of the balls are black. We sample $n$ balls with replacement. Mark $X$, the number of white balls in our sample and $Y$, the number of blue balls in our sample.

      i. Find maximum likelihood estimators for the proportions of the white, blue and black balls in the bag based on $X$ and $Y$. Are the estimators you've found unbiased?
    solution: |
      White and blue each have probability $p$; black has probability $1-2p$.

      **Stage 1: likelihood.**

      $$
      L(p\mid x,y) = p^{x}\cdot p^{y}\cdot(1-2p)^{n-x-y} = p^{x+y}(1-2p)^{n-x-y}.
      $$

      **Stage 2: log-likelihood.**

      $$
      \ln L = (x+y)\ln p + (n-x-y)\ln(1-2p).
      $$

      > [!warning] Boundary points
      > The log is undefined at $p=0$ and at $1-2p=0$. At both points the likelihood itself equals 0, its absolute minimum, so they cannot be the maximum we are looking for.

      **Stage 3: maximise.** Differentiate:

      $$
      \frac{d\ln L}{dp} = \frac{x+y}{p} + \frac{(n-x-y)(-2)}{1-2p} = \frac{(x+y)(1-2p) - 2p(n-x-y)}{p(1-2p)}.
      $$

      Expand the numerator: $x+y-2px-2py-2pn+2px+2py = x+y-2np$. So

      $$
      \frac{d\ln L}{dp} = \frac{x+y-2np}{p(1-2p)}.
      $$

      A fraction is zero when its numerator is zero:

      $$
      x+y-2np=0 \quad\Longrightarrow\quad p=\frac{x+y}{2n}.
      $$

      **Second-derivative check.** The denominator $p(1-2p)$ is positive, so the sign of the second derivative is the sign of the numerator's derivative:

      $$
      \frac{d}{dp}(x+y-2np) = -2n < 0.
      $$

      So the critical point is a local maximum, and since it is the only one, it is the absolute maximum.

      > [!success] Answer (white and blue)
      > $\hat p = \dfrac{X+Y}{2n}$

      **Black balls, by invariance.** MLEs are invariant under one-to-one transformations ([[MLE Invariance]]), so the MLE of $1-2p$ is $1-2\hat p$:

      $$
      1-2\hat p = 1-2\cdot\frac{x+y}{2n} = 1-\frac{x+y}{n} = \frac{n-x-y}{n},
      $$

      the proportion of black balls in the sample.

      > [!warning] Typo in the source
      > The official solution writes this as $\frac{n-x+y}{n}$. The line before it, $1-\frac{x+y}{n}$, gives $\frac{n-x-y}{n}$, and part ii confirms it (0.2 with $n=5$, $x=y=2$; $\frac{5-2+2}{5}=1$ would be impossible). I use $\frac{n-x-y}{n}$.

      **Is it unbiased?** Each of $X, Y$ is $B(n,p)$, so $E(X)=E(Y)=np$:

      $$
      E(\hat p) = \frac{E(X)+E(Y)}{2n} = \frac{np+np}{2n} = p.
      $$

      $\hat p$ is an unbiased estimator of $p$. For the black proportion:

      $$
      E(1-2\hat p) = 1-2E(\hat p) = 1-2p.
      $$

      > [!success] Answer (bias)
      > $\hat p$ is unbiased for $p$, and $1-2\hat p$ is unbiased for $1-2p$, the proportion of black balls in the bag.

      > [!tip] Intuition
      > $\hat p$ is just the average of the sample proportions of white and of blue. The sample proportion of any colour is unbiased for its true proportion, and the black proportion is a linear function of $p$, so linearity of expectation carries the unbiasedness across. (MLEs are not unbiased in general; the normal variance MLE in [[Lec_03-Maximum Likelihood Estimation]] is the counterexample.)

      *Related: [[Lec_03-Maximum Likelihood Estimation]], [[Lec_02-Point Estimation and the Variance Estimator]]*
    related_terms: ["maximum-likelihood-estimator", "likelihood", "log-likelihood", "mle-invariance", "unbiased-estimator", "binomial-distribution"]
    source_doc_page: 1
  - id: "2ii"
    text: |
      A bag has balls of three colors. The proportion of white balls is $p$, as is the proportion of blue balls. The rest of the balls are black. We sample $n$ balls with replacement. Mark $X$, the number of white balls in our sample and $Y$, the number of blue balls in our sample.

      ii. In a sample of 5 balls, 2 were white, 2 were blue and one was black. What are the maximum likelihood estimates of the proportions of the white, blue and black balls in the sample?
    solution: |
      With $n=5$, $x=2$, $y=2$:

      $$
      \hat p = \frac{2+2}{2\cdot5} = \frac{4}{10} = 0.4, \qquad 1-2\hat p = 1-0.8 = 0.2.
      $$

      > [!success] Answer
      > Estimated proportion of white balls $0.4$, blue balls $0.4$, black balls $0.2$.

      ![](/images/statistics-b/ps03-q2-likelihood-curve.png)

      The likelihood $L(p)=p^4(1-2p)$ for this sample (the $p^{x+y}=p^4$ and $(1-2p)^{n-x-y}=(1-2p)^1$ from Stage 1) peaks at $p=0.4$.
    related_terms: ["maximum-likelihood-estimator", "likelihood", "mle-invariance"]
    source_doc_page: 1
---
