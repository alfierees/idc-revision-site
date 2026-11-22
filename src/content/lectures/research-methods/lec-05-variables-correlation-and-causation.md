---
title: "Lec 05: Variables, Correlation and Causation"
semester: 1
year: 1
course: "Research Methods"
lecture: 5
instructor: Orly Idan
tags:
  - research-methods
  - correlation
  - causation
  - third-variable-problem
  - directionality-problem
  - independent-variable
  - dependent-variable
  - control-variable
  - mediator
  - moderator
  - reliability
  - validity
  - p-value
subject: research-methods
in_scope: true
---

# Lec 05: Variables, Correlation and Causation

> Part of: [[Research Methods]]
> Key concepts: [[Correlation]], [[Causation]], [[Third Variable Problem]], [[Directionality Problem]], [[Correlation Coefficient]], [[P-Value]], [[Statistical Significance]], [[Independent Variable]], [[Dependent Variable]], [[Control Variable]], [[Mediator]], [[Moderator]], [[Reliability]], [[Validity]]

> [!info] What this note covers
> The deck "Statistical analyses" (Lesson 8). This is the most examined topic in the course. Where a slide is imprecise, the note keeps the slide's point and adds a **Slide check** callout with the standard definition.

## 1. Looking at metrics

| Pair | Difference |
|---|---|
| [[Vanity Metric\|Vanity]] vs [[Actionable Metric\|actionable]] | Vanity metrics feel good but do not change what you do. Actionable metrics help you pick a course of action. |
| Exploratory vs reporting | Exploratory metrics look for unknown insights. Reporting metrics track normal day-to-day operations. |
| Correlated vs causal | Metrics that change together are correlated. If one makes the other change, the link is causal. A causal link between something you want (revenue) and something you control (which ad you show) lets you change the future. |
| Qualitative vs quantitative | Qualitative metrics are unstructured, revealing and hard to aggregate. Quantitative metrics give hard numbers but less insight. |

## 2. Correlation versus causation

- [[Correlation]] describes an association: when one variable changes, so does the other. They **covary**, but not necessarily through a causal link. It can help you **predict what will happen**.
- [[Causation]] means changes in one variable **bring about** changes in the other. It can **explain why**.

> [!important] The rule
> A correlation does not imply causation, but causation always implies correlation.

### The third variable problem

In the [[Third Variable Problem]], another variable affects both measured variables, so they look causally related when they are not.

| Apparent relationship | The third variable |
|---|---|
| Storks "deliver" babies | **Season** |
| Foot size "predicts" IQ | **Age** (up to 18, depending on the sample) |
| Sales of an innovative online product drop, so "customers are reluctant to buy innovative products" | **Too many steps, a complicated site**: people left the website |

### The directionality problem

In the [[Directionality Problem]], two variables correlate and may be causally linked, but we cannot say which causes which.

- High motivation predicts higher grades, **or** higher grades stimulate motivation.
- Watching violent videos affects teens' violent behavior, **or** violent behavior leads teens to watch more violence.
- Entrepreneurs have no respect for authority, **or** people with no respect for authority choose entrepreneurship.

## 3. Reading a correlation

A correlation has three properties:

1. **Strength**, given by the [[Correlation Coefficient]].
2. **Direction**, positive or negative, given by the coefficient's sign.
3. **Significance**, whether it is statistically significant, based on the [[P-Value]].

| Direction | Meaning |
|---|---|
| [[Positive Correlation\|Positive]] | The two variables increase or decrease **together** |
| [[Negative Correlation\|Negative]] | When one increases, the other decreases |
| Non-significant | A change in one does not lead to a change in the other |

![[Lec05_correlation_patterns.png]]

*Illustrative simulated data, drawn for this note to show the patterns.*

Correlations are typically considered statistically significant when the p-value is below **0.05, the alpha level**.

> [!warning] Slide check: strength is not slope
> A screenshot in the deck says the **slope** shows the strength of the relationship. Strength is really how **tightly the points cluster around the line**. A shallow line with tightly packed points can be a very strong correlation.

> [!warning] Slide check: what a p-value means
> The deck describes the p-value as the probability that the relationship between the variables is zero. The standard definition is: **the probability of seeing a result at least this extreme if the true correlation were zero**. A low p-value is evidence against "no relationship", and it does not by itself mean the correlation is strong, since a weak correlation in a large sample can also be significant.

### Worked case: what support helps a startup?

The deck's table counts 300 entrepreneurs per type of support.

| Current business status | Mentors | Accelerators | Academic courses |
|---|---:|---:|---:|
| Closures | 100 | 160 | 80 |
| Break even | 100 | 20 | 50 |
| Unicorns | 100 | 120 | 170 |
| **Total sample** | **300** | **300** | **300** |

The tempting conclusions are "mentors do not matter", "don't take acceleration programs" and "go to university". But suppose that:

- the findings are **insignificant**;
- the sample consists of **Excellency Program students**;
- entrepreneurs took the support **at least two years after launching**.

Then you **cannot generalize**, because the result is too specific, and the timing means the support may not have influenced the outcome.

## 4. Types of variables

- [[Dependent Variable]]: the **effect**. Its magnitude depends on the independent variable.
- [[Independent Variable]]: the **cause**.
- [[Mediator]]: explains the **process** through which two variables are related (Hebrew: מתווך).
- [[Moderator]]: affects the **strength and direction** of the relationship (Hebrew: ממתן).
- [[Control Variable]]: kept unchanged so researchers can see what creates the cause-and-effect relationship.

![[Lec05_mediator_moderator.png]]

> [!warning] Slide check: the independent variable
> The deck says the value of an independent variable "doesn't change while researching". The clearer version: it is **not affected by the other variables in the study**, and in an experiment the researcher deliberately changes it ([[Lec_06-Quantitative Data Collection|Lec 06]]).

### Mediator

A mediator is **caused by the independent variable** and **influences the dependent variable**.

- **Full mediation:** the mediator fully explains the relationship. Without it, there is no relationship.
- **Partial mediation:** a relationship remains. The mediator explains only part of it.

Example: sleep quality → **alertness** → student grades.

> [!warning] Slide check: mediation wording
> The deck says the correlation between the independent and dependent variables is "higher" when the mediator is taken into account. In standard mediation analysis it is the reverse: once you **control for the mediator, the direct link gets weaker** (partial mediation) or disappears (full mediation).

### Moderator

A moderator acts on the relationship between two variables and changes its direction or strength. It can be:

- **Categorical**: ethnicity, religion, health status, stimulus type.
- **Quantitative**: age, weight, height, income.

Example: years of experience → current salary, moderated by **gender**.

> [!warning] Slide check: the labels on the example slide
> On the second example slide the label boxes read "Dependent variable: Parents socioeconomic status" and "Independent variable: Children reading ability". The arrow layout shows the opposite: **parents' socioeconomic status (independent) → parents' educational level (mediator) → children's reading ability (dependent)**. The slide's lower example, risk-taking propensity → business success with opportunity identification, is not labelled, so its role is not stated in the source.

## 5. Reliability and validity

| | [[Reliability]] | [[Validity]] |
|---|---|---|
| **What it tells you** | Whether results can be reproduced under the same conditions | Whether results really measure what they should |
| **How it is assessed** | Consistency across time, observers and parts of the test | Agreement with established theories and other measures of the concept |
| **How they relate** | A reliable measure is not always valid | A valid measure is generally reliable |

### Types of validity

- [[External Validity]]: how far results generalize beyond the sample.
- [[Content Validity]]: experts or target-population members judge that it measures a construct that is otherwise hard to measure.
- [[Construct Validity]]: it captures a **construct**, a set of related behaviors forming an idea. Depression, for example, shows up as oversleeping, loss of appetite and difficulty concentrating.
- [[Internal Validity]]: how accurately the independent variable can be said to produce the observed effect.

### Types of reliability

- [[Test-Retest Reliability]]: consistency of outcomes **over time**.
- [[Internal Consistency]]: consistency across **items** on the same scale. A teacher asks two questions on one concept, and a student gets both right or both wrong.
- [[Inter-Rater Reliability]]: agreement between **observers**, which helps prevent personal bias. You may be biased about a meal, but six more people are unlikely to agree it is delicious if it is not.

*Previous: [[Lec_04-Research Problems, Questions and Hypotheses]] · Next: [[Lec_06-Quantitative Data Collection]]*
