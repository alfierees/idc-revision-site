---
title: "Lecture 4: Symmetrical Probability Spaces and Combinatorics"
semester: 1
year: 1
course: "Statistics A"
lecture: 4
tags:
  - statistics-a
  - probability
  - combinatorics
  - symmetrical-probability-space
  - multiplication-principle
  - permutations
  - combinations
  - factorial
  - binomial-coefficient
subject: statistics-a
in_scope: true
---

# Lecture 4: Symmetrical Probability Spaces and Combinatorics

> Part of: [[Statistics A]]
> Key concepts: [[Symmetrical Probability Space]], [[Multiplication Principle]], [[Factorial]], [[Permutation]], [[Combination]], [[Binomial Coefficient]], [[Addition Rule for Counting]]

The lecture starts with a recap of Exercise 3 (conditional probability, independence), then asks: if every outcome is equally likely, how do we **count** outcomes when there are far too many to list? Instructor: Asael Sklar. Formula sheet: Handout 4 (merged below).

## 1. Recap of Exercise 3

The first part of the class re-works Exercise 3 questions 4 to 8. These techniques come from [[Lec_03-Conditional Probability, Bayes and Independence]] (trees, total probability, Bayes, independence).

> [!example] Call centre (Q4), tree diagram
> 60% of callers are answered immediately. The other 40% leave a number: 75% of those get a same-day call back, 25% get a next-day call back. Purchase probability: 0.8 (immediate), 0.6 (same day), 0.4 (next day).
>
> Total probability: $P(\text{sale}) = 0.6(0.8) + 0.4(0.75)(0.6) + 0.4(0.25)(0.4) = 0.48 + 0.18 + 0.04 = 0.70$.
>
> Bayes (part ii): $P(\text{same day} \mid \text{sale}) = \dfrac{0.18}{0.70} \approx 0.257$.

> [!note] Reconstructed from the slides
> The slides build the tree step by step and ask "which branches have a sale?"; the arithmetic above is filled in from the stated probabilities.

**Q5 (two employees).** With $P(A)=0.06$, $P(B)=0.08$, $P(A \cap B)=0.0048$:

- At least one misses: $P(A \cup B) = 0.06 + 0.08 - 0.0048 = 0.1352$.
- Independent: yes, because $P(A)P(B) = 0.0048 = P(A \cap B)$.
- Disjoint: no, because $P(A \cap B) \neq 0$.

**Q6 (three independent events, each with probability $p$).** Exactly one happens: three disjoint cases, each of the form $p(1-p)^2$:

$$
P(\text{exactly one}) = 3p(1-p)^2
$$

**Q8 (applicants).** $P(A)=0.4$ (fluent English), $P(B \mid A)=0.75$ (degree given fluent), $P(A \mid B)=0.6$.

- Independence needs $P(A) = P(A \mid B)$. Here $0.4 \neq 0.6$, so **not independent**.
- Not disjoint either, since $P(A \cap B) = 0.4 \times 0.75 = 0.3 > 0$.
- Fluent speaker without a degree: $P(\bar{B} \mid A) = 1 - P(B \mid A) = 0.25$.

> [!tip] Independence is reciprocal and applies to complements
> If $A$ and $B$ are independent, then so are $A$ and $\bar{B}$, $\bar{A}$ and $B$, and $\bar{A}$ and $\bar{B}$. Also: **independent and disjoint are different things**. Disjoint events with positive probabilities are never independent (knowing one happened tells you the other did not).

## 2. Symmetrical probability space

> [!info] Definition
> A **symmetrical probability space** is an experiment in which every possible result has equal probability. Examples: a fair die, a fair coin flip, a well-shuffled deck, a randomly chosen person.

With $|\Omega|$ the number of possible results, and $|A|$ the number of results in event $A$ (this is the lecturer's cardinality notation):

$$
P(\omega_i) = P(\omega_j) \text{ for any } i, j, \qquad P(\omega_i) = \frac{1}{|\Omega|}
$$

$$
P(A) = \frac{|A|}{|\Omega|}, \qquad P(A \mid B) = \frac{|A \cap B|}{|B|}
$$

Conditioning on $B$ simply shrinks the sample space to $B$: count the results of $A$ inside $B$, divided by the size of $B$.

> [!example] Die
> Fair die, $P(\text{more than } 3 \mid \text{even})$. Even $=\{2,4,6\}$, more than 3 $=\{4,5,6\}$, intersection $=\{4,6\}$, so the answer is $2/3$.

> [!example] Extra credit: students and businesses
> 33 students in each of two tracks. 18 of the business administration students and 23 of the data science students plan to own a business.
>
> - Whole class: $P(\text{own}) = \dfrac{18+23}{66} = \dfrac{41}{66} \approx 0.621$ (the slide poses this question; the number is computed from the given counts).
> - Data track only: $P(\text{own} \mid \text{data}) = \dfrac{|\text{own}|}{|\text{data}|} = \dfrac{23}{33} \approx 0.697$.

## 3. Why we need combinatorics

**Combinatorics** is the branch of mathematics that counts, arranges and selects objects: "how many ways can this happen?". Three motivating questions from the slides:

1. Probability of randomly guessing a 4-digit numpad passkey.
2. Probability of guessing the 1st, 2nd and 3rd place horses in a race.
3. Probability of drawing three of a kind in a poker hand.

All three share the same shape: a symmetrical probability space with a huge number of results. We can compute the probability by counting, but we cannot list the results, so we need counting rules.

## 4. Multiplication principle of outcomes

> [!info] Multiplication principle
> A process with $m$ stages, where stage 1 has $n_1$ possible outcomes, stage 2 has $n_2$, and so on up to stage $m$, has
>
> $$
> \text{Total outcomes} = n_1 \cdot n_2 \cdots n_m
> $$
>

Example: a coin ($2$), a 6-sided die ($6$) and a 20-sided die ($20$) give $2 \cdot 6 \cdot 20 = 240$ results. Each stage can itself be a complex experiment: adding a second and third coin multiplies by $2 \cdot 2$, giving $960$ (computed from the principle; the slide poses the question).

> [!tip] When in doubt
> Remember the multiplication principle. Every formula below is just this principle applied to a particular kind of stage.

## 5. Permutations with replacement

A **permutation** is several objects arranged in order (e.g. $1,2,3,1,1$). **Replacement** means an object may appear more than once. This arises when every stage has the same set of possible results, and *which stage* a result occurs in distinguishes outcomes. Examples: a random password, flipping 5 coins in order.

With $k$ stages and $n$ options at each stage:

$$
n^k = \underbrace{n \cdot n \cdots n}_{k \text{ times}}
$$

> [!example] Numpad passkey
> 4 stages (digits), 10 options per stage: $10^4 = 10000$ passkeys, so a random guess succeeds with probability $1/10000$. For a 6-digit passkey, $10^6$ outcomes.

> [!warning] Adding a condition means adjusting the formula
> The slides ask for the 4-digit passkey "where we know at least one digit is 1". Their set-up: Stage 1, which place holds the 1 (4 options); Stage 2, the digits in the other three places ($n=10$, $k=3$, so $10^3 = 1000$ options, itself a complex experiment). Multiplying $4 \times 1000$ **overcounts**: a code like 1121 is counted once for each of its 1s. The clean count is "all codes minus codes with no 1": $10^4 - 9^4 = 3439$. This is my own check, not stated on the slides, so treat the slide's final figure with care.

## 6. Permutations without replacement

Same set-up, but each stage draws from the results **excluding those picked at earlier stages**. Examples: cards drawn in order, race placements (1st, 2nd, ...).

**Factorial.** Draw all 4 balls A, B, C, D from a bag one at a time: $4 \cdot 3 \cdot 2 \cdot 1 = 24$ orders.

$$
n! = n \cdot (n-1) \cdot (n-2) \cdots 1
$$

By convention (intuition: drawing from an empty bag has exactly one result) $0! = 1$.

Drawing only $k$ of the $n$ balls, in order: $n \cdot (n-1) \cdots (n-k+1)$, which is expressed with factorials as

$$
(n)_k = \frac{n!}{(n-k)!}
$$

Special cases:

$$
(n)_n = n!, \qquad (n)_{n-1} = n!, \qquad (n)_1 = n, \qquad (n)_0 = 1
$$

> [!example] Books on a shelf, order matters
> 14 books, choose 4 for the shelf in order. Total: $(14)_4 = 14 \cdot 13 \cdot 12 \cdot 11 = 24024$. The probability of putting books 1,2,3,4 in exactly that order is $1/24024$ (computed from the formula; the slide shows the unordered version below).

## 7. Combinations without replacement

A **combination** ignores order: the outcome is the *set* of results of all stages. Start from permutations and divide out the orderings. Choosing 2 balls from 4 gives $(4)_2 = 12$ ordered pairs, but each unordered pair appears $2! = 2$ times (A,B and B,A), so there are $12/2 = 6$ combinations.

In general each combination of $k$ objects corresponds to $k!$ permutations:

$$
\binom{n}{k} = \frac{(n)_k}{k!} = \frac{n!}{k!\,(n-k)!}
$$

Read "$n$ choose $k$". Special cases (Handout 4):

$$
\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{1} = \binom{n}{n-1} = n, \qquad \binom{n}{n-k} = \binom{n}{k}
$$

> [!example] Books, order does not matter
> $\binom{14}{4} = 1001$ combinations. The event "books 1,2,3,4 in any order" is a single combination, so $P = 1/1001$.

> [!example] Poker: four of a kind
> A hand is 5 cards from 52: $\binom{52}{5} = 2{,}598{,}960$ hands. Four of a kind: 13 choices for which rank, times 48 choices for the fifth card $= 624$ hands.
>
> $$
> P(\text{four of a kind}) = \frac{624}{2{,}598{,}960} \approx 0.00024
> $$
>

> [!example] Committee
> 50 students, choose a committee of 3 at random.
>
> - Number of committees: $\binom{50}{3} = 19600$.
> - Sharon on the committee: fix Sharon, choose the other 2 from 49: $\binom{49}{2} = \frac{49!}{47!\,2!} = 1176$, so $P = 1176/19600 = 0.06$.
> - Sharon and David both: choose the last member from 48: $48/19600 \approx 0.00245$.

## 8. Addition rule and multiplication principle for counting

> [!info] Addition rule
> If a condition can be satisfied in different, **mutually exclusive** ways, the total number of outcomes is the **sum** of the numbers for each way. Example: 3 train routes or 4 roads to city A gives $3 + 4 = 7$ ways.

By contrast, 4 roads and, on each, a choice of car, bus or taxi gives $4 \times 3 = 12$ ways (multiplication principle: the choices happen in stages).

> [!example] Three-digit numbers (0 cannot lead)
> Pick 3 digits to form a 3-digit number, first digit not 0.
>
> - Total: $9 \cdot 10 \cdot 10 = 900$ numbers (equivalently $1000 - 100$ with a leading 0).
> - Exactly one digit equal to 3 (three disjoint cases, **add** them):
>   - 3 first: $1 \cdot 9 \cdot 9 = 81$ (other digits are anything except 3).
>   - 3 second: $8 \cdot 1 \cdot 9 = 72$ (first is not 0 or 3).
>   - 3 third: $8 \cdot 9 \cdot 1 = 72$.
>   - Total $81 + 72 + 72 = 225$, so $P(\text{one }3) = 225/900 = 0.25$.

## 9. Combinations with replacement

Order does not matter, but objects may repeat. The formula (Handout 4) is

$$
\binom{n+k-1}{k}
$$

> [!warning] Not a symmetrical probability space
> Count the heads and tails from three coin flips. The 8 permutations (HHH, HHT, ...) are equally likely, each $1/8$. But the **combinations** ($3$ heads; $2$ heads $1$ tail; $1$ head $2$ tails; $3$ tails) are only $\binom{2+3-1}{3} = 4$ outcomes, with probabilities $1/8, 3/8, 3/8, 1/8$. They are **not equally likely**, so you cannot compute probabilities by $|A|/|\Omega|$ on combinations with replacement.
>
> Permutations (with or without replacement) and combinations without replacement all stay symmetrical when the underlying experiment is symmetrical; combinations with replacement do not.

![[Lec04_three_coin_outcomes.png]]

## 10. Which formula? The flowchart

Ask two questions: **does order matter?** and **is there replacement?**

![[Lec04_counting_formulas_grid.png]]

| | Order matters (permutation) | Order does not matter (combination) |
|---|---|---|
| **Replacement** | $n^k$ | $\binom{n+k-1}{k}$ |
| **No replacement** | $(n)_k = \dfrac{n!}{(n-k)!}$ | $\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |

Here $n$ is the number of options at the first stage and $k$ the number of stages.

> [!tip] Choosing quickly
> "In order" (race places, passwords, shelf order) is a permutation. "A group", "a hand", "a committee" is a combination. Drawing cards or people without putting back is without replacement; digits and coin flips are with replacement.

## Summary

- In a **symmetrical probability space**, $P(A) = |A|/|\Omega|$ and $P(A \mid B) = |A \cap B|/|B|$.
- The **multiplication principle** multiplies stage counts; the **addition rule** sums counts for mutually exclusive ways.
- Four counting formulas: $n^k$, $(n)_k$, $\binom{n}{k}$, $\binom{n+k-1}{k}$.
- Only combinations with replacement break symmetry: count outcomes there, but never assume equal probabilities.
- Always check conditions (e.g. a leading digit cannot be 0) by returning to the multiplication principle, and watch for overcounting.

## Related notes

- [[Statistics A]]
- [[Lec_03-Conditional Probability, Bayes and Independence]]
- [[Lec_02-Probability Function and Conditional Probability]]
