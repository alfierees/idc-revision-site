---
title: "Quick Self-Test"
subject: intro-to-r
type: self-test
description: "18 short questions with answers: predict what code prints, fix a broken line, and write the dplyr pipeline or ggplot chart a final-assignment question asks for. Counting, shares, group tables, case_when, missing values, geoms, ordering, reference lines, and the probability functions. Six are multiple choice."
course: Intro to R
semester: 2
year: 1
order: 6
tags:
  - intro-to-r
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Vectors and logical tests"
    text: |
      What does each line print?

      ```r
      x <- c(3, 8, 1, 10)
      x * 2
      x[x > 2]
      sum(x > 2)
      mean(x > 2)
      ```
    solution: |
      ```text
      [1]  6 16  2 20
      [1]  3  8 10
      [1] 3
      [1] 0.75
      ```

      Arithmetic is vectorised; `x[x > 2]` keeps the elements that pass; `TRUE` counts as 1, so the sum is a **count** and the mean a **share**.
  - id: "2"
    title: "2 · A missing value"
    text: |
      What does `mean(c(4, NA, 8))` return?
    options:
      - label: a
        text: |
          `6`
        why: |
          Only with `na.rm = TRUE`.
      - label: b
        text: |
          `NA`
        correct: true
        why: |
          One missing value makes the whole mean unknown.
      - label: c
        text: |
          An error
        why: |
          R does not stop; it returns `NA`.
      - label: d
        text: |
          `4`
        why: |
          `mean` does not drop anything by itself.
    solution: |
      `NA`. The fix is `mean(c(4, NA, 8), na.rm = TRUE)`, which gives 6. **Answer (b).**
  - id: "3"
    title: "3 · A count with two conditions"
    text: |
      In the car data, how many cars cost more than \$10,000 **and** have under 50,000 miles? Write the code.
    solution: |
      ```r
      sum(data$cost > 10000 & data$odometer < 50000, na.rm = TRUE)
      ```

      or

      ```r
      data |> filter(cost > 10000, odometer < 50000) |> nrow()
      ```

      A comma inside `filter` means AND.
  - id: "4"
    title: "4 · A percentage"
    text: |
      Which line gives the percentage of red cars?
    options:
      - label: a
        text: |
          `sum(data$color == "RED")`
        why: |
          That is the count, not a percentage.
      - label: b
        text: |
          `mean(data$color = "RED") * 100`
        why: |
          A single `=` is not a comparison; this fails.
      - label: c
        text: |
          `nrow(filter(data, color == "RED")) / 100`
        why: |
          That divides the count by 100 instead of by the number of cars.
      - label: d
        text: |
          `mean(data$color == "RED", na.rm = TRUE) * 100`
        correct: true
        why: |
          The share of `TRUE`, times 100.
    solution: |
      The mean of a logical is the share that is `TRUE`. **Answer (d).**
  - id: "5"
    title: "5 · Unique and most common"
    text: |
      Write code for: (a) how many different makes there are; (b) which make is most common, and how many cars it has.
    solution: |
      ```r
      n_distinct(data$make)                       # (a)
      data |> count(make, sort = TRUE) |> head(1) # (b)
      ```

      In the 2024 pool data the answer to (b) is CHEVROLET, 17,248 cars.
  - id: "6"
    title: "6 · Filter before or after?"
    text: |
      "Which states have a median car cost below \$6,000?" Which code answers it?
    options:
      - label: a
        text: |
          `data |> group_by(state) |> summarize(med = median(cost)) |> filter(med < 6000)`
        correct: true
        why: |
          The condition is on a summary, so it comes after `summarize`.
      - label: b
        text: |
          `data |> filter(cost < 6000) |> group_by(state) |> summarize(med = median(cost))`
        why: |
          That keeps only cheap cars, so every state's median comes out below 6,000.
      - label: c
        text: |
          `data |> group_by(state) |> filter(cost < 6000)`
        why: |
          No median is computed at all.
      - label: d
        text: |
          `data |> summarize(med = median(cost)) |> group_by(state) |> filter(med < 6000)`
        why: |
          Summarising first collapses everything into one row; `state` is gone.
    solution: |
      Conditions on raw rows go before `group_by`; conditions on a summary go after `summarize`. **Answer (a).**
  - id: "7"
    title: "7 · A top-5 table"
    text: |
      Show the five makes with the highest average cost, with the number of cars of each.
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(avg_cost = mean(cost, na.rm = TRUE), n = n()) |>
        arrange(desc(avg_cost)) |>
        head(5)
      ```

      `n` lets the reader see when a high average rests on very few cars.
  - id: "8"
    title: "8 · Categories with case_when"
    text: |
      Split cars into "low" (under 50,000 miles), "medium" (50,000 to 100,000) and "high" (over 100,000), and count each group.
    solution: |
      ```r
      data |>
        mutate(mileage = case_when(
          odometer < 50000 ~ "low",
          odometer <= 100000 ~ "medium",
          TRUE ~ "high")) |>
        count(mileage)
      ```

      `case_when` tests in order, so the second line only sees cars with at least 50,000 miles. Check the edges against the wording: here 100,000 is "medium".
  - id: "9"
    title: "9 · Predict a group summary"
    text: |
      What does this print?

      ```r
      df <- tibble(g = c("a", "b", "a", "b", "a"),
                   v = c(2, 10, 4, 20, 6))
      df |> group_by(g) |> summarize(n = n(), avg = mean(v), share_big = mean(v > 5))
      ```
    solution: |
      ```text
        g         n   avg share_big
      1 a         3     4     0.333
      2 b         2    15     1
      ```

      Group a holds 2, 4, 6 (one above 5); group b holds 10 and 20.
  - id: "10"
    title: "10 · Which geom?"
    text: |
      "Plot the average cost of cars by transmission type." Which approach is right?
    options:
      - label: a
        text: |
          `ggplot(data) + aes(x = transmission, y = cost) + geom_bar()`
        why: |
          `geom_bar` counts rows and does not take a `y`.
      - label: b
        text: |
          `ggplot(data) + aes(x = cost) + geom_histogram()`
        why: |
          That is the distribution of cost, not a mean per group.
      - label: c
        text: |
          `summarize` the mean per transmission, then `geom_col()` with `x = transmission, y = avg_cost`
        correct: true
        why: |
          A value you computed per category is a column chart.
      - label: d
        text: |
          `ggplot(data) + aes(x = transmission, y = cost) + geom_point()`
        why: |
          That plots every car, not the averages.
    solution: |
      ```r
      data |>
        group_by(transmission) |>
        summarize(avg_cost = mean(cost)) |>
        ggplot() + aes(x = transmission, y = avg_cost) + geom_col()
      ```

      **Answer (c).**
  - id: "11"
    title: "11 · Why is there a legend?"
    text: |
      `geom_col(aes(fill = "steelblue"))` draws pinkish bars and a legend saying "steelblue". Why, and what is the fix?
    solution: |
      Inside `aes()`, `"steelblue"` is treated as **data**: a constant category, which gets the first default colour and a legend. A fixed colour goes **outside** `aes()`:

      ```r
      geom_col(fill = "steelblue")
      ```
  - id: "12"
    title: "12 · A faceted histogram"
    text: |
      Draw a histogram of price, one panel for bad buys and one for the rest.
    solution: |
      ```r
      ggplot(data) +
        aes(x = price) +
        geom_histogram() +
        facet_wrap(~ is_bad_buy)
      ```

      (Pool Q187.) Alternatively colour by group: `aes(x = price, fill = factor(is_bad_buy))`.
  - id: "13"
    title: "13 · Bars in descending order"
    text: |
      You have a table `sizes` with columns `size` and `n`. Which makes the bars run from the tallest to the shortest?
    options:
      - label: a
        text: |
          `sizes |> arrange(desc(n)) |> ggplot() + aes(x = size, y = n) + geom_col()`
        why: |
          ggplot orders a text axis alphabetically, whatever the row order.
      - label: b
        text: |
          Adding `coord_flip()`
        why: |
          That turns the bars sideways but does not sort them.
      - label: c
        text: |
          `geom_col(order = "desc")`
        why: |
          There is no such argument.
      - label: d
        text: |
          `aes(x = reorder(size, -n), y = n)`
        correct: true
        why: |
          `reorder` sorts the categories by `-n`, so the largest comes first.
    solution: |
      Order a categorical axis with `reorder(category, value)`; a minus sign makes it descending. **Answer (d).**
  - id: "14"
    title: "14 · A reference line and a title"
    text: |
      Add to a chart of average cost by year: a dashed red line at the overall average cost, and a centred title of size 16.
    solution: |
      ```r
      + geom_hline(yintercept = mean(data$cost), linetype = "dashed", color = "red") +
        labs(title = "Average cost by year made") +
        theme(plot.title = element_text(hjust = 0.5, size = 16))
      ```

      Compute the line's value from the data; do not type a number in.
  - id: "15"
    title: "15 · Missing values in every column"
    text: |
      Make a table of the number of missing values in each column, largest first, showing only columns that have any.
    solution: |
      ```r
      data |>
        summarize(across(everything(), ~ sum(is.na(.x)))) |>
        pivot_longer(everything(), names_to = "variable", values_to = "n_missing") |>
        filter(n_missing > 0) |>
        arrange(desc(n_missing))
      ```

      (2025 sample Q10.)
  - id: "16"
    title: "16 · More than 15"
    text: |
      $X \sim \text{Poisson}(10)$. Which gives $P(X > 15)$?
    options:
      - label: a
        text: |
          `ppois(15, lambda = 10)`
        why: |
          That is $P(X \le 15)$.
      - label: b
        text: |
          `1 - ppois(15, lambda = 10)`
        correct: true
        why: |
          The complement of $P(X \le 15)$.
      - label: c
        text: |
          `1 - ppois(16, lambda = 10)`
        why: |
          That is $P(X > 16)$, leaving out $X = 16$.
      - label: d
        text: |
          `dpois(15, lambda = 10)`
        why: |
          That is $P(X = 15)$ only.
    solution: |
      `p` functions give $P(X \le q)$, so "more than 15" is `1 - ppois(15, 10)`. **Answer (b).**
  - id: "17"
    title: "17 · Normal probabilities"
    text: |
      Heights are $N(170, 15^2)$. Write the code for the share taller than 185 cm, and for the height only 1% exceed. What are the values?
    solution: |
      ```r
      1 - pnorm(185, mean = 170, sd = 15)   # 0.1587
      qnorm(0.99, mean = 170, sd = 15)      # 204.9
      ```

      185 is one SD above the mean, so the tail is 15.87%. The 99th percentile is $170 + 2.326 \times 15$.
  - id: "18"
    title: "18 · A simulation"
    text: |
      Estimate the probability that two dice sum to 7 by simulating a million rolls. Make the result reproducible.
    solution: |
      ```r
      set.seed(1)
      die1 <- sample(1:6, 1e6, replace = TRUE)
      die2 <- sample(1:6, 1e6, replace = TRUE)
      mean(die1 + die2 == 7)
      ```

      The result is close to the exact $6/36 = 0.1667$. `set.seed` makes every run give the same numbers; `replace = TRUE` lets a face come up again.
---
