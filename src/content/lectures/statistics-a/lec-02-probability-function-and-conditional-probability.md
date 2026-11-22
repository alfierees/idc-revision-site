---
title: "Lec 02 - Probability Function and Conditional Probability"
semester: 1
year: 1
course: "Statistics A"
lecture: 2
tags:
  - statistics-a
  - probability
  - probability-axioms
  - complement-rule
  - monotonicity
  - inclusion-exclusion
  - two-by-two-table
  - conditional-probability
subject: statistics-a
in_scope: true
---
# Lec 02: Probability Function and Conditional Probability

> Part of: [[Statistics A]]
> Key concepts: [[Probability]], [[Random Experiment]], [[Probability Function]], [[Probability Axioms]], [[Complement Rule]], [[Monotonicity of Probability]], [[Inclusion-Exclusion Rule]], [[2x2 Probability Table]], [[Conditional Probability]]

Instructor: Asael Sklar. Covers Class 02 (slides 1 to 284) and Handout 02. Sets, events and the sample space were introduced in [[Lec_01-Sets and the Probability Function]]; here we build the probability function itself, derive its main rules from three axioms, and then introduce conditioning. Notation follows the lecturer: $P(A)$, $\Omega$, $\bar A$ for the complement, $\varnothing$ for the empty set, $A\mid B$ for "A given B".

## 1. What is probability?

> [!info] Probability
> **Probability** is "quantified certainty": the number representing how certain a result is, or how likely something is to be true.

A **random experiment** is an occurrence with uncertain outcomes. Lecture examples: roll a die, flip a coin, draw a card, a stock's value next week, the length of a conversation.

An experiment is defined by three ingredients, which the lecture builds one at a time on the die example:

| Ingredient | Meaning | Die example |
| --- | --- | --- |
| Sample space $\Omega$ | the set of all possible outcomes | $\Omega=\{1,2,3,4,5,6\}$, so $\lvert\Omega\rvert=6$ |
| Event | a subset of $\Omega$ we care about | $A=\{2,4,6\}$: "we get an even number" |
| Probability function $P$ | assigns a number to each event | $P(A)$ |

> [!note] Reconstructed from the slides
> The slide asks "an experiment is defined by three things: ?" and the answers are shown only as drawn pictures (sample space, event, probability function). The names in the table above are my reading of those pictures.

The **probability function** takes an *event* as input (an arrow in the slides points from "Event" to $P(A)$) and outputs a number. What numbers it may output is controlled by the axioms.

## 2. The three axioms

The probability function is defined by three axioms (Handout 02):

| Axiom | Statement | Intuition |
| --- | --- | --- |
| 1. Non-negativity | $P(A)\ge 0$ | A chance cannot be negative |
| 2. Normalisation | $P(\Omega)=1$ | Something in the sample space must happen |
| 3. Additivity | if $A$ and $B$ are **disjoint**, $P(A\cup B)=P(A)+P(B)$ | Separate chances add up |

$$
P(A)\ge 0 \qquad P(\Omega)=1 \qquad P(A\cup B)=P(A)+P(B)\ \text{ if } A\cap B=\varnothing
$$

> [!warning] Why must A and B be disjoint?
> The slide draws two events $A$ and $B$ inside $\Omega$ and asks this question. If they overlap, the overlap would be counted twice when we add. Additivity is only safe when the events share no outcomes. The general case is the union rule in section 3.6.

The lecture then asks what else follows from these three. Each item below is proved from the axioms alone; slides label them "principles of probability".

## 3. Principles derived from the axioms

### 3.1 Equal events have equal probabilities

$$
A=B \;\Rightarrow\; P(A)=P(B)
$$

If $P(A)=0.4$ and $B=A$ then $P(B)=0.4$. This sounds trivial, but note that it is **equal events** (the same set of outcomes), not merely events with the same size. For a fair die, $P(5)=P(6)=\tfrac16$, yet $\{5\}\neq\{6\}$: equal probabilities do not make events equal. The implication runs only one way.

### 3.2 Complement rule

$$
\boxed{P(\bar A)=1-P(A)}
$$

> [!tip] Derivation
> $A$ and $\bar A$ together make up the whole sample space and share no outcomes: $A\cup\bar A=\Omega$ and $A\cap\bar A=\varnothing$. So

$$
P(A\cup\bar A)=P(\Omega)=1
$$

> and by additivity (they are disjoint)

$$
P(A\cup\bar A)=P(A)+P(\bar A)
$$

> Hence $P(A)+P(\bar A)=1$, which rearranges to the rule: $P(A)=1-P(\bar A)$ and $P(\bar A)=1-P(A)$.

> [!example] Examples from the lecture
> - If $P(A)=0.2$ then $P(\bar A)=1-0.2=0.8$.
> - Die: $P(1)=\tfrac16$, so the probability of *not* rolling a 1 is $P(\bar 1)=1-\tfrac16=\tfrac56$.

### 3.3 Impossible event

$$
P(\varnothing)=0
$$

> [!tip] Derivation
> The empty set is the complement of the sample space, $\varnothing=\bar\Omega$. By the complement rule

$$
P(\varnothing)=P(\bar\Omega)=1-P(\Omega)=1-1=0
$$

### 3.4 Monotonicity

First, a reminder from maths. A **monotonically increasing (non-decreasing) function** either increases or does not change as its input increases: $X\le Y$ implies $f(X)\le f(Y)$.

The probability function behaves the same way, with "bigger" meaning "superset":

$$
\boxed{A\subseteq B \;\Rightarrow\; P(A)\le P(B)}
$$

> [!tip] Derivation
> Split $B$ into the part inside $A$ and the part outside $A$. These two pieces are disjoint, so

$$
B=(B\cap A)\cup(B\cap\bar A)
\qquad\Rightarrow\qquad
P(B)=P(B\cap A)+P(B\cap\bar A)
$$

> Since $A\subseteq B$, the part of $B$ inside $A$ is all of $A$: $B\cap A=A$, so $P(B\cap A)=P(A)$. Therefore

$$
P(B)=P(A)+P(B\cap\bar A)
\quad\Rightarrow\quad
P(B)-P(A)=P(B\cap\bar A)\ge 0
$$

> The last step uses axiom 1 (a probability is never negative). Adding $P(A)$ to both sides gives $P(B)\ge P(A)$.

> [!example] Under 14 versus under 18
> The slides picture two nested circles: people under 14 sit inside people under 18. If $P(\text{under }14)=0.1$ then, by monotonicity, $P(\text{under }18)\ge 0.1$. Monotonicity gives only a lower bound; to pin down $P(\text{under }18)$ we need more information. The slide's "$P\ge 0$" step is the non-negativity axiom doing the work in the proof above.

### 3.5 Probability limits

$$
0\le P(A)\le 1
$$

> [!tip] Derivation by monotonicity
> Every event satisfies $\varnothing\subseteq A$ and $A\subseteq\Omega$. By monotonicity $P(\varnothing)\le P(A)$ and $P(A)\le P(\Omega)$. Substituting $P(\varnothing)=0$ and $P(\Omega)=1$ gives $0\le P(A)\le 1$.

So the axioms never needed an explicit upper bound: it is implied.

### 3.6 Union (inclusion-exclusion)

Additivity requires disjoint events. For any two events $A$ and $B$:

$$
\boxed{P(A\cup B)=P(A)+P(B)-P(A\cap B)}
$$

> [!tip] Derivation
> Cut $\Omega$ into the three disjoint regions that make up $A\cup B$:

$$
A\cup B=(A\cap\bar B)\cup(A\cap B)\cup(\bar A\cap B)
$$

> By additivity

$$
P(A\cup B)=P(A\cap\bar B)+P(A\cap B)+P(\bar A\cap B)
$$

> Now write each of $A$ and $B$ in terms of these pieces:

$$
P(A)=P(A\cap\bar B)+P(A\cap B)
\qquad
P(B)=P(\bar A\cap B)+P(A\cap B)
$$

> Adding them counts $P(A\cap B)$ twice:

$$
P(A)+P(B)=P(A\cap\bar B)+P(A\cap B)+P(\bar A\cap B)+P(A\cap B)
$$

> Comparing with the line for $P(A\cup B)$, the sum $P(A)+P(B)$ exceeds $P(A\cup B)$ by exactly one copy of $P(A\cap B)$. Subtract it.

![[Lec02_venn_diagrams.png]]

### 3.7 Intersection

Rearranging the union rule (add $P(A\cap B)$ and subtract $P(A\cup B)$ on both sides) gives the intersection formula, useful when we know the union:

$$
\boxed{P(A\cap B)=P(A)+P(B)-P(A\cup B)}
$$

> [!example] Union, with numbers
> $P(A)=0.3$, $P(B)=0.4$, $P(A\cap B)=0.2$:
>
> $$
> P(A\cup B)=0.3+0.4-0.2=0.5
> $$
>
> The slide frames $A$ and $B$ as "bus 13 arrives" and "bus 74 arrives": the chance that at least one of the two buses arrives.

> [!example] Intersection, with numbers
> $P(A)=0.1$, $P(B)=0.2$, $P(A\cup B)=0.25$:
>
> $$
> P(A\cap B)=0.1+0.2-0.25=0.05
> $$
>
> The slide frames these as "keys" and "parking": the chance both happen is 0.05.

### 3.8 Disjoint events: no contradiction

If $A\cap B=\varnothing$ then $P(A\cap B)=P(\varnothing)=0$, and the union rule becomes

$$
P(A\cup B)=P(A)+P(B)-0=P(A)+P(B)
$$

So the general union rule contains the additivity axiom as a special case: **no contradiction**.

> [!warning] Common mistake
> Adding $P(A)+P(B)$ for overlapping events double counts the overlap and can even exceed 1. Always subtract $P(A\cap B)$ unless you know $A$ and $B$ are disjoint.

> [!note] Reconstructed from the slides
> The bus and keys/parking slides give only the event labels and numbers; the real-world reading (which buses, which event is "keys") is as printed on the slides but the sentences around them are mine.

## 4. The 2x2 table

> [!info] 2x2 table
> A way of organising the probabilities of two events, their complements, and their intersections. The four inner cells partition $\Omega$; the margins are row and column totals. Event $A$ runs across the columns, $B$ down the rows.

| | $A$ | $\bar A$ | Row total |
| --- | --- | --- | --- |
| $B$ | $P(A\cap B)$ | $P(\bar A\cap B)$ | $P(B)$ |
| $\bar B$ | $P(A\cap\bar B)$ | $P(\bar A\cap\bar B)$ | $P(\bar B)$ |
| **Column total** | $P(A)$ | $P(\bar A)$ | 1 |

**Table relationships** (each is a row or column of the table summed into its margin, justified by additivity):

$$
P(A\cap B)+P(A\cap\bar B)=P(A)
$$

$$
P(\bar A\cap B)+P(\bar A\cap\bar B)=P(\bar A)
$$

$$
P(A\cap B)+P(\bar A\cap B)=P(B)
$$

$$
P(A\cap\bar B)+P(\bar A\cap\bar B)=P(\bar B)
$$

$$
P(B)+P(\bar B)=1
\qquad
P(A)+P(\bar A)=1
$$

> [!example] Filling a table by subtraction
> Given $P(A)=0.7$, $P(B)=0.4$ (so $P(\bar B)=0.6$) and $P(A\cap B)=0.2$:
>
> | Step | Relationship used | Result |
> | --- | --- | --- |
> | 1 | $P(A\cap B)+P(A\cap\bar B)=P(A)$, i.e. $0.2+P(A\cap\bar B)=0.7$ | $P(A\cap\bar B)=0.5$ |
> | 2 | $P(A\cap B)+P(\bar A\cap B)=P(B)$, i.e. $0.2+P(\bar A\cap B)=0.4$ | $P(\bar A\cap B)=0.2$ |
> | 3 | $P(A\cap\bar B)+P(\bar A\cap\bar B)=P(\bar B)$, i.e. $0.5+P(\bar A\cap\bar B)=0.6$ | $P(\bar A\cap\bar B)=0.1$ |
>
> Check: the four cells $0.2+0.5+0.2+0.1$ add to 1.

> [!tip] Workflow
> Put whatever you are given into the table, then complete it by subtraction. Every probability the question asks for is then a cell or a margin.

## 5. Conditional probability

### 5.1 Motivation: Israel

What is the probability that a randomly chosen person in Israel was born outside Israel? About 2,000,000 of about 10,000,000 people were, so with $A$ = "born outside Israel":

$$
P(A)=\frac{2{,}000{,}000}{10{,}000{,}000}=0.2
$$

Now ask the same question **given** that the randomly chosen person is someone in this class ($B$ = "in this class"). The lecture works with a class of 50 people, of whom 40 were born outside Israel. As fractions of the whole population of 10,000,000:

$$
P(B)=\frac{50}{10{,}000{,}000}=0.000005
\qquad
P(A\cap B)=\frac{40}{10{,}000{,}000}=0.000004
$$

So

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0.000004}{0.000005}=0.8
$$

Knowing the person is in the class moves the answer from 0.2 to 0.8.

> [!note] Reconstructed from the slides
> The "50" and "40" appear only as numerators in the slide equations; I read them as the number of people in the class and the number of those born abroad.

### 5.2 Definition

> [!info] Conditional probability
> The probability of $A$ if we know $B$ happened:
>
> $$
> \boxed{P(A\mid B)=\frac{P(A\cap B)}{P(B)}}
> $$

> [!tip] Intuition: the sample space shrinks
> When we condition on $B$ (that is, "given $B$"), the relevant sample space shrinks to only what is inside $B$. Within that smaller world, we ask what share of $B$ is also in $A$. That share is the intersection divided by $P(B)$. The numerator keeps only the part of $A$ that lies inside $B$; the denominator rescales so that $B$ itself has probability 1.

![[Lec02_venn_diagrams.png]]

### 5.3 Worked examples

> [!example] ICU patients
> The probability that a patient in the ICU is a woman with cardiac issues is 0.01. 40% of ICU patients are women. What is the probability that a randomly chosen female ICU patient has cardiac issues?
>
> $$
> P(\text{cardiac}\mid\text{woman})=\frac{P(\text{cardiac}\cap\text{woman})}{P(\text{woman})}=\frac{0.01}{0.4}=0.025
> $$

> [!example] Aggressive dogs (rearranging the formula)
> 10% of dogs are small and aggressive: with $A$ = small and $B$ = aggressive, $P(A\cap B)=0.1$. The probability an aggressive dog is small is $P(A\mid B)=0.6$. What percent of dogs are aggressive, $P(B)$?
>
> Start from the definition and solve for $P(B)$:
>
> $$
> 0.6=\frac{0.1}{P(B)}
> \quad\Rightarrow\quad
> P(B)\cdot 0.6=0.1
> \quad\Rightarrow\quad
> P(B)=\frac{0.1}{0.6}=0.1\overline{6}
> $$
>
> About **16.67%** of dogs are aggressive.

> [!tip] Rearranged forms
> The definition links three numbers; given any two you can find the third. Multiplying out gives $P(A\cap B)=P(A\mid B)\,P(B)$.

### 5.4 Conditional probability from a 2x2 table

A 2x2 table makes any conditional probability easy: **the numerator is a cell in the inner table, the denominator is the corresponding row or column margin.**

The lecture's table (columns $\bar A$ then $A$, rows $B$ then $\bar B$) has these entries: the cell $P(A\cap B)=0.05$, $P(\bar A\cap B)=0.3$, $P(A\cap\bar B)=0.55$, $P(\bar A\cap\bar B)=0.1$, with margins $P(\bar B)=0.65$ and $P(\bar A)=0.4$.

| | $A$ | $\bar A$ | Row total |
| --- | --- | --- | --- |
| $B$ | 0.05 | 0.3 | 0.35 |
| $\bar B$ | 0.55 | 0.1 | 0.65 |
| **Column total** | 0.6 | 0.4 | 1 |

> [!note] Reconstructed from the slides
> The slide shows the numbers 0.05, 0.1, 0.4, 0.55, 0.65 (and 0.3 appears in the calculation) loosely placed around the table. I placed each in the cell that makes all rows and columns sum correctly. The totals 0.35 and 0.6 are my derivation, not printed.

> [!example] Two conditional probabilities from the table
> $$
> P(A\mid\bar B)=\frac{P(A\cap\bar B)}{P(\bar B)}=\frac{0.55}{0.65}=0.846
> $$
>
> $$
> P(B\mid\bar A)=\frac{P(B\cap\bar A)}{P(\bar A)}=\frac{0.3}{0.4}=0.75
> $$

> [!warning] Direction matters
> In general $P(A\mid B)\ne P(B\mid A)$. They share the numerator $P(A\cap B)$ but divide by different margins: $P(B)$ versus $P(A)$. Above, $P(A\mid\bar B)=0.846$ while a different conditional on the other margin gives 0.75.

## Comparison of the key rules

| Concept | Question it answers | Formula | When it simplifies |
| --- | --- | --- | --- |
| Additivity | chance of $A$ or $B$ | $P(A)+P(B)$ | only if $A$, $B$ disjoint |
| Union | chance at least one happens | $P(A)+P(B)-P(A\cap B)$ | disjoint: last term 0 |
| Intersection | chance both happen | $P(A)+P(B)-P(A\cup B)$ | use when union is known |
| Complement | chance it does not happen | $1-P(A)$ | always valid |
| Monotonicity | compare nested events | $A\subseteq B\Rightarrow P(A)\le P(B)$ | gives bounds only |
| Conditional | chance of $A$ once $B$ is known | $P(A\cap B)/P(B)$ | needs $P(B)>0$ |

## Summary

- A random experiment has a sample space $\Omega$, events (subsets), and a probability function $P$.
- Three axioms: $P(A)\ge 0$, $P(\Omega)=1$, and additivity for disjoint events. Everything else is derived.
- Derived rules: equal events have equal probabilities; $P(\bar A)=1-P(A)$; $P(\varnothing)=0$; monotonicity ($A\subseteq B\Rightarrow P(A)\le P(B)$); $0\le P(A)\le 1$.
- Union rule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, and its rearrangement for the intersection. For disjoint events it reduces to additivity.
- The 2x2 table organises the four intersections and their margins; fill it by subtraction using the row and column sums.
- Conditional probability $P(A\mid B)=P(A\cap B)/P(B)$: condition on $B$ and the sample space shrinks to $B$. In a 2x2 table: a cell over its row or column margin.
- Recitation: review and Exercise 2.

## Related notes

- [[Statistics A]]
- [[Lec_01-Sets and the Probability Function]]
- [[Probability Axioms]], [[Complement Rule]], [[Monotonicity of Probability]], [[Inclusion-Exclusion Rule]]
- [[2x2 Probability Table]], [[Conditional Probability]]
