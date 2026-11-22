---
title: "EX-6"
subject: principles-of-macro
source_doc: /papers/principles-of-macro/exercise-6.pdf
tags:
  - macro-economics-intro
  - solow-model
  - steady-state
ai_drafted: true
questions:
  - id: "1a"
    text: |
      Simulate the Solow model for **The North**: $Y = 2K^{0.5}L^{0.5}$, $\delta = 1.5\%$, $s = 20\%$, $k_{1735} = 50$, $n = 0$. Complete the table for 1735 to 1738: capital per worker, output per worker, savings per worker and net investment per worker.
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      Use $y = 2\sqrt{k}$ and $\Delta k = 0.2y - 0.015k$.

      | Year | $k_t$ | $y = f(k)$ | $sy$ | $\Delta k$ |
      |---|---:|---:|---:|---:|
      | 1735 | 50.00 | 14.14 | 2.83 | 2.08 |
      | 1736 | 52.08 | 14.43 | 2.89 | 2.11 |
      | 1737 | 54.18 | 14.72 | 2.94 | 2.13 |
      | 1738 | 56.32 | 15.01 | 3.00 | 2.16 |
    related_terms:
      - solow-model
  - id: "1b"
    text: |
      What is the growth rate in 1738 compared to 1737, and the annual growth rate over 1735 to 1738?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      \frac{y_{1738}}{y_{1737}} - 1 = \frac{15.01}{14.72} - 1 \approx 1.95\%
      $$

      $$
      \left(\frac{y_{1738}}{y_{1735}}\right)^{1/3} - 1 = \left(\frac{15.01}{14.14}\right)^{1/3} - 1 \approx 2.00\%
      $$
    related_terms:
      - growth-rate
  - id: "1c"
    text: |
      Calculate the steady-state capital per worker $k^*$ and output per worker $y^*$ for The North.
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      0.2 \cdot 2\sqrt{k} = 0.015k
      \;\Rightarrow\;
      \sqrt{k^*} = \frac{0.4}{0.015} = 26.67
      $$

      $$
      k^* \approx 711.1,\qquad y^* = 2\sqrt{k^*} \approx 53.33
      $$

      ```graph
      type: solow-model
      figure: steady-state
      ```
    related_terms:
      - steady-state
  - id: "2"
    text: |
      For each change, explain how and why steady-state capital per worker changes: (a) depreciation decreases, (b) population growth increases, (c) the savings rate decreases, (d) productivity $A$ decreases.
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $$
      k^* = \left(\frac{sA}{n + \delta}\right)^{\frac{1}{1 - \alpha}}
      $$

      - **(a) Lower $\delta$:** the break-even line flattens, so **$k^*$ rises**.
      - **(b) Higher $n$:** the break-even line steepens, so **$k^*$ falls**.
      - **(c) Lower $s$:** the savings curve falls, so **$k^*$ falls**.
      - **(d) Lower $A$:** output and savings fall at each $k$, so **$k^*$ falls**.
    related_terms:
      - steady-state
      - depreciation
      - total-factor-productivity
  - id: "3"
    text: |
      A country in steady state receives a large wave of immigrants, identical in productivity but bringing no capital. What is the effect on capital per worker and output per worker?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      The shock lowers $k$ but leaves $s$, $n$, $\delta$ and $A$ unchanged. With $k < k^*$, savings exceed break-even and the economy returns to the original steady state.
    options:
      - label: "A"
        text: "$k$ falls then rises back; $y$ falls then rises back"
        correct: true
        why: "Capital is diluted, then re-accumulates to the same steady state."
      - label: "B"
        text: "$k$ rises then falls; $y$ rises then falls"
        correct: false
        why: "Immigrants without capital lower $k$."
      - label: "C"
        text: "$k$ and $y$ stay the same"
        correct: false
        why: "The immediate dilution lowers $k$."
      - label: "D"
        text: "$k$ falls and stays low"
        correct: false
        why: "Parameters are unchanged, so $k$ returns."
      - label: "E"
        text: "$k$ rises and stays high"
        correct: false
        why: "$k$ falls."
    related_terms:
      - steady-state
      - capital-dilution
  - id: "4"
    text: |
      A third of the population emigrates, each person taking an equal share of capital. What is the effect on output per capita in the short and long run?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      $K$ and $L$ both fall by one third, so $k = K/L$ is unchanged, and so is $y$.
    options:
      - label: "A"
        text: "Rises then falls back"
        correct: false
        why: "$k$ does not rise."
      - label: "B"
        text: "Falls then rises"
        correct: false
        why: "$k$ does not fall."
      - label: "C"
        text: "Rises and stays high"
        correct: false
        why: "$k$ does not change."
      - label: "D"
        text: "Unchanged"
        correct: true
        why: "$K$ and $L$ fall by the same share."
      - label: "E"
        text: "Falls and stays low"
        correct: false
        why: "$k$ does not change."
    related_terms:
      - steady-state
  - id: "5"
    text: |
      A country with constant population in steady state receives a large gift of capital. How are capital per worker and output per worker affected in the short and long run?
    solution: |
      > [!warning] AI-written answer
      > There is no official solution for this question. Check it before relying on it.

      The gift puts the economy above $k^*$. There, $(n + \delta)k > sy$, so $k$ falls back to the original steady state.
    options:
      - label: "A"
        text: "$k$ and $y$ rise then fall back to the original level"
        correct: true
        why: "Above $k^*$, depreciation exceeds savings."
      - label: "B"
        text: "$k$ and $y$ fall then rise"
        correct: false
        why: "The gift raises $k$."
      - label: "C"
        text: "$k$ and $y$ rise and stay high"
        correct: false
        why: "Parameters are unchanged."
      - label: "D"
        text: "Unchanged"
        correct: false
        why: "The gift raises $k$ at first."
      - label: "E"
        text: "Both fall"
        correct: false
        why: "They rise at first."
    related_terms:
      - steady-state
---

> [!warning] AI-written answers
> Moodle has no official solution for this home exercise. Every answer here is AI-written.
