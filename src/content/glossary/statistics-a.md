---
title: Statistics A Concepts
description: Single glossary of every concept used across the Statistics A notes. One entry per concept, with the note where it is taught.
tags:
  - meta
  - glossary
  - index
  - statistics-a
aliases:
  - Statistics A Glossary
subject: statistics-a
in_scope: true
---

# Statistics A Concepts

> Glossary for Statistics A (Year 1, Semester 1). Each entry: a one-line definition and the note that teaches it. Registry of links: [[_Wiki-Link Registry]]. Subject hub: [[Statistics A]].

---

## Sets and events

### Set
A collection of elements, written with curly brackets. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Venn Diagram
A picture of sets as circles inside a rectangle, used to show unions, overlaps and complements. Also in [[Lec_02-Probability Function and Conditional Probability|Lec 02]]. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Union
$A \cup B$: the elements that are in $A$, in $B$, or in both. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Intersection
$A \cap B$: the elements that are in both $A$ and $B$. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Complement
$\bar{A}$: everything in the sample space $\Omega$ that is not in $A$. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Set Difference
$A \setminus B$: the elements of $A$ that are not in $B$, equal to $A \cap \bar{B}$. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Disjoint Sets
Sets with no element in common, $A \cap B = \emptyset$. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Random Experiment
An occurrence whose outcome is uncertain before it happens. Also in [[Lec_02-Probability Function and Conditional Probability|Lec 02]]. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Sample Space
The set $\Omega$ of all possible results of a random experiment; how finely to list results is a modelling choice. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Event
Any subset of the sample space $\Omega$. → [[Lec_01-Sets and the Probability Function|Lec 01]]

## Probability function and rules

### Probability
Quantified certainty: a number that says how likely something is, which adds precision and lets uncertainties be combined. Also in [[Lec_01-Sets and the Probability Function|Lec 01]]. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Probability Function
A rule $P$ that assigns every event $A$ a number $P(A)$ between 0 and 1. Also in [[Lec_01-Sets and the Probability Function|Lec 01]]. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Probability Axioms
$P(A) \ge 0$, $P(\Omega)=1$, and $P(A \cup B)=P(A)+P(B)$ for disjoint events. Also in [[Lec_01-Sets and the Probability Function|Lec 01]]. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Complement Rule
$P(\bar{A}) = 1 - P(A)$. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Monotonicity of Probability
If $A \subseteq B$ then $P(A) \le P(B)$. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Inclusion-Exclusion Rule
$P(A \cup B) = P(A) + P(B) - P(A \cap B)$. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### 2x2 Probability Table
A grid of the intersections of $A$, $\bar{A}$, $B$, $\bar{B}$ with row and column totals, used to fill in missing probabilities. Also in [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]. → [[Lec_02-Probability Function and Conditional Probability|Lec 02]]

### Prosecutor's Fallacy
Confusing the chance of the evidence given innocence with the chance of innocence given the evidence; the Sally Clark case. → [[Lec_01-Sets and the Probability Function|Lec 01]]

### Representativeness Heuristic
Judging likelihood by how well a story fits rather than by set logic, as in the Linda question. → [[Lec_01-Sets and the Probability Function|Lec 01]]

## Conditional probability, Bayes and independence

### Conditional Probability
$P(A|B)=P(A \cap B)/P(B)$: the probability of $A$ once $B$ is known to have happened. Also in [[Lec_02-Probability Function and Conditional Probability|Lec 02]]. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Multiplication Formula
$P(A \cap B) = P(A|B)\,P(B)$. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Tree Diagram
Nodes and branches holding conditional probabilities; multiply along a path, add across paths. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Law of Total Probability
$P(B)=\sum_i P(B|A_i)\,P(A_i)$ over a partition $A_1,\dots,A_k$ of the sample space. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Bayes' Theorem
$P(A|B)=P(B|A)\,P(A)/P(B)$: reverses the direction of conditioning. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Independent Events
$P(A|B)=P(A)$, equivalently $P(A \cap B)=P(A)P(B)$: learning $B$ does not change the chance of $A$. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

### Monty Hall Problem
The door puzzle in which switching wins with probability 2/3. → [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]

## Counting and combinatorics

### Combinatorics
Counting the outcomes of an experiment or event, based on whether order matters and whether items are replaced. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Symmetrical Probability Space
An experiment where every result is equally likely, so $P(A)=|A|/|\Omega|$ and probability reduces to counting. Also in [[Lec_01-Sets and the Probability Function|Lec 01]], [[Lec_03-Conditional Probability, Bayes and Independence|Lec 03]]. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Multiplication Principle
The number of outcomes of a staged process is the product of the number of choices at each stage. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Addition Rule for Counting
If a condition can be met in mutually exclusive ways, add the counts of each way. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Factorial
$n! = n(n-1)\cdots 1$, with $0! = 1$. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Permutation
An ordered arrangement: $n^k$ with replacement, $n!/(n-k)!$ without. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Combination
An unordered selection: $n!/(k!(n-k)!)$ without replacement, $\binom{n+k-1}{k}$ with replacement. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Binomial Coefficient
$\binom{n}{k}$, read "n choose k": the number of ways to pick $k$ of $n$ items ignoring order. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

### Combination with Replacement
Unordered selection with repeats allowed, $\binom{n+k-1}{k}$ outcomes; these outcomes are not equally likely. Also in [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]. → [[Lec_04-Symmetrical Probability Spaces and Combinatorics|Lec 04]]

## Random variables and expectation

### Random Variable
A variable whose value is set by the result of a random experiment. Also in [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Discrete Random Variable
A random variable whose possible values can be listed in order with gaps between them. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Distribution
The possible values of a random variable together with their probabilities. → [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]

### Distribution Table
A table listing each possible value and its probability. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Probability Mass Function
$P(X=x_i)$ for each value $x_i$ of a discrete random variable. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Cumulative Distribution Function
$F(x)=P(X \le x)$: the running total of the PMF. Also in [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Expected Value
$E(X)=\sum x_i P(X=x_i)$: the probability-weighted average, or balance point, of the distribution. Also in [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Linear Transformation
$Y=a+bX$: multiply by a constant and add a constant; $E(Y)=a+bE(X)$ and $Var(Y)=b^2 Var(X)$. Also in [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Variance
$Var(X)=E\big((X-E(X))^2\big)=E(X^2)-(E(X))^2$: the expected squared distance from the mean. Also in [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

### Standard Deviation
$\sqrt{Var(X)}$: the spread of $X$ in the same units as $X$. Also in [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]. → [[Lec_05-Random Variables, Expected Value and Variance|Lec 05]]

## Discrete distributions

### Distribution Shape
The named family a variable follows, for example $U$, $B$, $G$, $HG$ or $P$. → [[Lec_07-Known Distributions|Lec 07]]

### Distribution Parameters
The numbers that fix a family's PMF, for example $(a,b)$, $(n,p)$, $p$, $(N,D,n)$ or $\lambda$. → [[Lec_07-Known Distributions|Lec 07]]

### Uniform Distribution
$U(a,b)$ on the integers $a,\dots,b$, each with probability $1/(b-a+1)$; $E=(a+b)/2$. Also in [[Lec_07-Known Distributions|Lec 07]]. → [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]

### Bernoulli Distribution
A 0/1 variable with $P(1)=p$; $E=p$ and $Var=p(1-p)$. Also in [[Lec_07-Known Distributions|Lec 07]]. → [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]

### Binomial Distribution
$B(n,p)$: the number of successes in $n$ independent Bernoulli trials; $E=np$, $Var=np(1-p)$. Also in [[Lec_07-Known Distributions|Lec 07]]. → [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]]

### Geometric Distribution
$G(p)$: the number of tries up to and including the first success. → [[Lec_07-Known Distributions|Lec 07]]

### Hypergeometric Distribution
$HG(N,D,n)$: the number of successes in a sample of $n$ drawn without replacement from $N$ items containing $D$ successes. → [[Lec_07-Known Distributions|Lec 07]]

### Poisson Distribution
$P(\lambda)$: the count of independent events in a fixed interval when the average rate is $\lambda$. → [[Lec_07-Known Distributions|Lec 07]]

### Poisson Rate
$\lambda$: the average number of events per interval; it scales with the length of the interval. → [[Lec_07-Known Distributions|Lec 07]]

## Joint distributions and covariance

### Joint Distribution
The probability of every combination of values of two random variables. Also in [[Lec_09-Covariance and Correlation|Lec 09]]. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Joint Distribution Table
A grid of $P(X=x_i, Y=y_j)$ with $X$ down the side and $Y$ across the top. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Marginal Distribution
The distribution of one variable ignoring the other; the row or column totals of the joint table. Also in [[Lec_09-Covariance and Correlation|Lec 09]]. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Conditional Distribution
$P(X=x_i|Y=y_j)$ = joint probability divided by $P(Y=y_j)$. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Conditional Expected Value
$E(X|Y=y_j)$: the expected value computed with the conditional distribution. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Independent Random Variables
$P(X=x_i,Y=y_j)=P(X=x_i)P(Y=y_j)$ for every pair of values. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Scatter Plot
A plot where each dot is one $(X,Y)$ combination. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Covariance
$Cov(X,Y)=E(XY)-E(X)E(Y)$; its sign gives the direction of a linear relationship. Also in [[Lec_09-Covariance and Correlation|Lec 09]]. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Variance of a Sum
$Var(X+Y)=Var(X)+Var(Y)+2\,Cov(X,Y)$. → [[Lec_08-Joint Distributions, Conditional Distributions and Covariance|Lec 08]]

### Correlation Coefficient
$\rho = Cov(X,Y)/(SD(X)\,SD(Y))$: unit-free, between -1 and 1, measures linear association. → [[Lec_09-Covariance and Correlation|Lec 09]]

## Continuous random variables

### Continuous Random Variable
A random variable where between any two possible values there is another possible value. → [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]

### Probability Density Function
$f(x)=F'(x)$; the area under $f$ between two points is the probability of landing there. → [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]

### Percentile
The value $C$ with $F(C)=n/100$; also called a quantile $C_a$ when the fraction is $a$. Also in [[Lec_11-Uniform and Normal Distributions|Lec 11]]. → [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]

### Median
The 50th percentile, where $F=0.5$. → [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]

### Continuous Uniform Distribution
Constant density $1/(b-a)$ on $[a,b]$. Also in [[Lec_11-Uniform and Normal Distributions|Lec 11]]. → [[Lec_10-Continuous Random Variables and the Uniform Distribution|Lec 10]]

## The normal distribution

### Normal Distribution
The bell-shaped continuous distribution $N(\mu,\sigma^2)$ with $E=\mu$ and $Var=\sigma^2$. → [[Lec_11-Uniform and Normal Distributions|Lec 11]]

### Standard Normal Distribution
$N(0,1)$, written $Z$, with CDF $\Phi$. → [[Lec_11-Uniform and Normal Distributions|Lec 11]]

### Standardization
$Z=(X-\mu)/\sigma$: a linear map to mean 0 and variance 1. → [[Lec_11-Uniform and Normal Distributions|Lec 11]]

### Z Table
A table of $\Phi(z)=P(Z \le z)$; the row gives the first decimal of $z$, the column the second. → [[Lec_11-Uniform and Normal Distributions|Lec 11]]

### 68-95-99.7 Rule
About 68%, 95% and 99.7% of a normal lies within 1, 2 and 3 standard deviations of the mean. → [[Lec_11-Uniform and Normal Distributions|Lec 11]]

## Sampling and the central limit theorem

### Sample
$n$ observations drawn from the same population distribution. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Population
The distribution the observations are drawn from. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Independent and Identically Distributed
Observations that share one distribution and do not affect each other. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Sample Average
$\bar{X}=\sum X_i/n$. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Central Limit Theorem
The sum or average of many i.i.d. variables is approximately normal: $S \sim N(n\mu, n\sigma^2)$ and $\bar{X} \sim N(\mu, \sigma^2/n)$. Also in [[Lec_11-Uniform and Normal Distributions|Lec 11]]. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Law of Large Numbers
$\bar{X}$ converges to $\mu$ as $n \to \infty$. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Normal Approximation of the Binomial
$B(n,p) \approx N(np, np(1-p))$ when $np \ge 5$ and $n(1-p) \ge 5$. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Sample Proportion
$\hat{P}=X/n$, approximately $N\big(p, p(1-p)/n\big)$. → [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]]

### Chebyshev's Inequality
For any distribution, the probability of being within $k$ standard deviations of the mean is at least $1-1/k^2$. Skipped in class (Question 12 of the 2023 Moed B). → [[Lec_13-Exam Structure and Practice (Moed B 2023)|Lec 13]]

## Aliases & Shorthands

### Independence
See [[#Independent Events]].

### Correlation
See [[#Correlation Coefficient]].

### Quantile
See [[#Percentile]].

### Z_a
See [[#Percentile]].

### Φ
See [[#Standard Normal Distribution]].

### Z
See [[#Standard Normal Distribution]].

### PMF
See [[#Probability Mass Function]].

### CDF
See [[#Cumulative Distribution Function]].

### PDF
See [[#Probability Density Function]].

### CLT
See [[#Central Limit Theorem]].

### LLN
See [[#Law of Large Numbers]].

### i.i.d.
See [[#Independent and Identically Distributed]].

### SD
See [[#Standard Deviation]].

### E(X)
See [[#Expected Value]].

### Sample Mean
See [[#Sample Average]].

### Empirical Rule
See [[#68-95-99.7 Rule]].

### Bayes' Rule
See [[#Bayes' Theorem]].

### n choose k
See [[#Binomial Coefficient]].

### Cov
See [[#Covariance]].

### Var
See [[#Variance]].
