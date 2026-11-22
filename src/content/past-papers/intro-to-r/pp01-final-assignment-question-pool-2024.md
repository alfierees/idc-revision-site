---
title: "Final Assignment Question Pool (2024)"
type: past-paper
status: ai-worked-solution
exam: "Intro to R final assignment, July 2024 (pool of 190 questions)"
semester: 2
year: 1
course: "Intro to R"
dataset: "kick.csv (used-car auction data)"
tags:
  - intro-to-r
  - past-paper
  - dplyr
  - ggplot2
aliases:
  - PP01 Intro to R
subject: intro-to-r
in_scope: true
questions:
  - id: "q1"
    title: "Q1"
    text: |
      How many observations are in the dataset?
    solution: |
      ```r
      nrow(data)
      ```

      **Output on the full dataset:**

      ```text
      [1] 72983
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q2"
    title: "Q2"
    text: |
      How many variables are in the dataset?
    solution: |
      ```r
      ncol(data)
      ```

      **Output on the full dataset:**

      ```text
      [1] 33
      ```

      > [!warning] Check this one
      > The full `kick.csv` has 33 columns. The file each student received may have had a different number.

      *AI-written answer.*
    related_terms: []
  - id: "q3"
    title: "Q3"
    text: |
      What is the mean of the ‘odometer’ variable?
    solution: |
      ```r
      mean(data$odometer)
      ```

      **Output on the full dataset:**

      ```text
      [1] 71500
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q4"
    title: "Q4"
    text: |
      What is the median age of the cars?
    solution: |
      ```r
      median(data$age)
      ```

      **Output on the full dataset:**

      ```text
      [1] 4
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q5"
    title: "Q5"
    text: |
      What is the range of ‘year_made’?
    solution: |
      ```r
      range(data$year_made)
      ```

      **Output on the full dataset:**

      ```text
      [1] 2001 2010
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q6"
    title: "Q6"
    text: |
      How many cars have an ‘AUTO’ transmission?
    solution: |
      ```r
      sum(data$transmission == "AUTO", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 70398
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q7"
    title: "Q7"
    text: |
      How many cars have an odometer reading over 100,000 miles?
    solution: |
      ```r
      sum(data$odometer > 100000)
      ```

      **Output on the full dataset:**

      ```text
      [1] 346
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q8"
    title: "Q8"
    text: |
      What is the highest cost recorded in the dataset?
    solution: |
      ```r
      max(data$cost, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 45469
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q9"
    title: "Q9"
    text: |
      How many cars were sold in the state of Texas (‘TX’)?
    solution: |
      ```r
      sum(data$state == "TX")
      ```

      **Output on the full dataset:**

      ```text
      [1] 13596
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q10"
    title: "Q10"
    text: |
      What is the average `price` of the dataset?
    solution: |
      ```r
      mean(data$price, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 6128.909
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q11"
    title: "Q11"
    text: |
      How many unique manufacturers (‘make’) are there?
    solution: |
      ```r
      n_distinct(data$make)
      ```

      **Output on the full dataset:**

      ```text
      [1] 33
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q12"
    title: "Q12"
    text: |
      How many cars are from ‘FORD’?
    solution: |
      ```r
      sum(data$make == "FORD")
      ```

      **Output on the full dataset:**

      ```text
      [1] 11305
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q13"
    title: "Q13"
    text: |
      What is the minimum odometer reading?
    solution: |
      ```r
      min(data$odometer)
      ```

      **Output on the full dataset:**

      ```text
      [1] 4825
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q14"
    title: "Q14"
    text: |
      How many cars are classified as a bad buy (is_bad_buy = 1)?
    solution: |
      ```r
      sum(data$is_bad_buy == 1)
      ```

      **Output on the full dataset:**

      ```text
      [1] 8976
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q15"
    title: "Q15"
    text: |
      How many cars were purchased online?
    solution: |
      ```r
      sum(data$is_online_sale == 1)
      ```

      **Output on the full dataset:**

      ```text
      [1] 1845
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q16"
    title: "Q16"
    text: |
      What is the average odometer reading for cars made in 2010?
    solution: |
      ```r
      data |>
        filter(year_made == 2010) |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1         83729
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q17"
    title: "Q17"
    text: |
      How many cars have ‘Covers’ as wheel_type?
    solution: |
      ```r
      sum(data$wheel_type == "Covers", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 33004
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q18"
    title: "Q18"
    text: |
      Which year has the most cars made?
    solution: |
      ```r
      data |>
        count(year_made, sort = TRUE) |>
        head(1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        year_made     n
            <dbl> <int>
      1      2006 17043
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q19"
    title: "Q19"
    text: |
      What is the mean cost of cars not purchased online?
    solution: |
      ```r
      data |>
        filter(is_online_sale == 0) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  6719.483
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q20"
    title: "Q20"
    text: |
      How many cars have missing ‘wheel_type’ data?
    solution: |
      ```r
      sum(is.na(data$wheel_type))
      ```

      **Output on the full dataset:**

      ```text
      [1] 3174
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q21"
    title: "Q21"
    text: |
      What is the standard deviation of the cost?
    solution: |
      ```r
      sd(data$cost, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 1764.963
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q22"
    title: "Q22"
    text: |
      How many cars are there from ‘OTHER ASIAN’ nationality?
    solution: |
      ```r
      sum(data$nationality == "OTHER ASIAN", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 8033
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q23"
    title: "Q23"
    text: |
      What is the total number of cars with ‘Alloy’ wheel_type?
    solution: |
      ```r
      sum(data$wheel_type == "Alloy", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 36050
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q24"
    title: "Q24"
    text: |
      What percentage of cars are bad buys?
    solution: |
      ```r
      mean(data$is_bad_buy) * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 12.29875
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q25"
    title: "Q25"
    text: |
      How many cars have a price below \$10,000?
    solution: |
      ```r
      sum(data$price < 10000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 68563
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q26"
    title: "Q26"
    text: |
      What is the median cost of cars with ‘MANUAL’ transmission?
    solution: |
      ```r
      data |>
        filter(transmission == "MANUAL") |>
        summarize(median_cost = median(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        median_cost
              <dbl>
      1        5255
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q27"
    title: "Q27"
    text: |
      How many cars were purchased in ‘CA’ (California)?
    solution: |
      ```r
      sum(data$state == "CA")
      ```

      **Output on the full dataset:**

      ```text
      [1] 7095
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q28"
    title: "Q28"
    text: |
      What is the mean age of ‘CHRYSLER’ cars?
    solution: |
      ```r
      data |>
        filter(make == "CHRYSLER") |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 3.652985
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q29"
    title: "Q29"
    text: |
      How many unique colors are there?
    solution: |
      ```r
      n_distinct(data$color, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 16
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q30"
    title: "Q30"
    text: |
      How many cars have more than 50,000 but less than 100,000 miles on the odometer?
    solution: |
      ```r
      sum(data$odometer > 50000 & data$odometer < 100000)
      ```

      **Output on the full dataset:**

      ```text
      [1] 65892
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q31"
    title: "Q31"
    text: |
      How many cars are older than 5 years?
    solution: |
      ```r
      sum(data$age > 5)
      ```

      **Output on the full dataset:**

      ```text
      [1] 15534
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q32"
    title: "Q32"
    text: |
      What is the average number of years cars from ‘OTHER’ top_three_american_name have been used?
    solution: |
      ```r
      data |>
        filter(top_three_american_name == "OTHER") |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 4.313891
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q33"
    title: "Q33"
    text: |
      What is the avrage cost of cars purchased in Arkansas? (`state` = ‘AR’)
    solution: |
      ```r
      data |>
        filter(state == "AR") |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  5832.714
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q34"
    title: "Q34"
    text: |
      Which color car is the least common, except ‘NOT AVAIL’ and ‘OTHER’?
    solution: |
      ```r
      data |>
        filter(!is.na(color), !color %in% c("NOT AVAIL", "OTHER")) |>
        count(color) |>
        slice_min(n, n = 1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        color      n
        <chr>  <int>
      1 YELLOW   244
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q35"
    title: "Q35"
    text: |
      What is the median price average of cars that are not a bad buy?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 0) |>
        summarize(median_price = median(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        median_price
               <dbl>
      1       6240.5
      ```

      > [!warning] Check this one
      > The wording "median price average" is unclear. This answer uses the **median price**.

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q36"
    title: "Q36"
    text: |
      What is the average price for black cars?
    solution: |
      ```r
      data |>
        filter(color == "BLACK") |>
        summarize(mean_price = mean(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_price
             <dbl>
      1   6803.322
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q37"
    title: "Q37"
    text: |
      How many cars were made in the last 5 years? Assume that the latest year in the dataset is the current year.
    solution: |
      ```r
      sum(data$year_made > max(data$year_made) - 5)
      ```

      **Output on the full dataset:**

      ```text
      [1] 36174
      ```

      > [!warning] Check this one
      > Latest year is 2010, so "the last 5 years" is taken as 2006 to 2010.

      *AI-written answer.*
    related_terms: []
  - id: "q38"
    title: "Q38"
    text: |
      What percentage of cars have an ‘Alloy’ wheel type?
    solution: |
      ```r
      sum(data$wheel_type == "Alloy", na.rm = TRUE) / nrow(data) * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 49.39506
      ```

      > [!warning] Check this one
      > The denominator is all cars, including those with a missing wheel type.

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q39"
    title: "Q39"
    text: |
      What is the average odometer reading for ‘Compact’ size cars?
    solution: |
      ```r
      data |>
        filter(size == "COMPACT") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      69323.39
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q40"
    title: "Q40"
    text: |
      What is the highest number of cars from one make?
    solution: |
      ```r
      data |>
        count(make, sort = TRUE) |>
        head(1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        make          n
        <chr>     <int>
      1 CHEVROLET 17248
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q41"
    title: "Q41"
    text: |
      How many cars are there in each transmission type category?
    solution: |
      ```r
      data |>
        count(transmission)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 4 x 2
        transmission     n
        <chr>        <int>
      1 AUTO         70398
      2 MANUAL        2575
      3 Manual           1
      4 <NA>             9
      ```

      > [!warning] Check this one
      > `Manual` is a stray spelling in the raw data (1 car), and 9 cars have a missing transmission.

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q42"
    title: "Q42"
    text: |
      What is the mean price for cars purchased in ‘NY’ (New York)?
    solution: |
      ```r
      data |>
        filter(state == "NY") |>
        summarize(mean_price = mean(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_price
             <dbl>
      1   9860.333
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q43"
    title: "Q43"
    text: |
      How many cars are there from each size category - “LARGE SUV”, “MEDIUM SUV”, and “SMALL SUV”?
    solution: |
      ```r
      data |>
        filter(size %in% c("LARGE SUV", "MEDIUM SUV", "SMALL SUV")) |>
        count(size)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 2
        size           n
        <chr>      <int>
      1 LARGE SUV   1433
      2 MEDIUM SUV  8090
      3 SMALL SUV   2276
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q44"
    title: "Q44"
    text: |
      What is the standard deviation of age for cars in the dataset?
    solution: |
      ```r
      sd(data$age)
      ```

      **Output on the full dataset:**

      ```text
      [1] 1.71221
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q45"
    title: "Q45"
    text: |
      What is the average odometer reading for cars made in 2009?
    solution: |
      ```r
      data |>
        filter(year_made == 2009) |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      51715.74
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q46"
    title: "Q46"
    text: |
      How many cars were purchased online and are a bad buy?
    solution: |
      ```r
      sum(data$is_online_sale == 1 & data$is_bad_buy == 1)
      ```

      **Output on the full dataset:**

      ```text
      [1] 213
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q47"
    title: "Q47"
    text: |
      What is the total cost for all cars in the dataset in millions?
    solution: |
      ```r
      sum(data$cost, na.rm = TRUE) / 1e6
      ```

      **Output on the full dataset:**

      ```text
      [1] 490.6633
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q48"
    title: "Q48"
    text: |
      What is the median odometer reading for cars with an ‘AUTO’ transmission?
    solution: |
      ```r
      data |>
        filter(transmission == "AUTO") |>
        summarize(median_odometer = median(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        median_odometer
                  <dbl>
      1           73453
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q49"
    title: "Q49"
    text: |
      How many cars from ‘AMERICAN’ nationality have a price above \$15,000?
    solution: |
      ```r
      sum(data$nationality == "AMERICAN" & data$price > 15000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 89
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q50"
    title: "Q50"
    text: |
      What is the average age of cars with an odometer reading less than 30,000?
    solution: |
      ```r
      data |>
        filter(odometer < 30000) |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 3.930909
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q51"
    title: "Q51"
    text: |
      How many unique models are there in the dataset?
    solution: |
      ```r
      n_distinct(data$model)
      ```

      **Output on the full dataset:**

      ```text
      [1] 1063
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q52"
    title: "Q52"
    text: |
      What is the average odometer reading for cars of the make “TOYOTA SCION”?
    solution: |
      ```r
      data |>
        filter(make == "TOYOTA SCION") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1         86440
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q53"
    title: "Q53"
    text: |
      What percentage of cars are ‘RED’?
    solution: |
      ```r
      sum(data$color == "RED", na.rm = TRUE) / nrow(data) * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 8.573229
      ```

      > [!warning] Check this one
      > The denominator is all cars, including those with a missing color.

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q54"
    title: "Q54"
    text: |
      What is the average age of cars bought in ‘FL’ (Florida)?
    solution: |
      ```r
      data |>
        filter(state == "FL") |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 4.616158
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q55"
    title: "Q55"
    text: |
      How many ‘Manual’ cars are older than 5 years?
    solution: |
      ```r
      sum(toupper(data$transmission) == "MANUAL" & data$age > 5, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 787
      ```

      > [!warning] Check this one
      > Counts both the `MANUAL` and `Manual` spellings.

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q56"
    title: "Q56"
    text: |
      How many cars have a cost greater than their price?
    solution: |
      ```r
      sum(data$cost > data$price, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 49382
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q57"
    title: "Q57"
    text: |
      What is the average cost of ‘LARGE TRUCK’ vehicles?
    solution: |
      ```r
      data |>
        filter(size == "LARGE TRUCK") |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  8851.073
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q58"
    title: "Q58"
    text: |
      Which is the average cost of cars from the make “PLYMOUTH”?
    solution: |
      ```r
      data |>
        filter(make == "PLYMOUTH") |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1      3350
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q59"
    title: "Q59"
    text: |
      How many cars have wheel type other than ‘Alloy’ and ‘Covers’?
    solution: |
      ```r
      data |>
        filter(!is.na(wheel_type), !wheel_type %in% c("Alloy", "Covers")) |>
        count(wheel_type)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        wheel_type     n
        <chr>      <int>
      1 Special      755
      ```

      > [!warning] Check this one
      > Only known wheel types are counted. A further 3,174 cars have a missing wheel type.

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q60"
    title: "Q60"
    text: |
      What is the total number of cars purchased from ‘OTHER’ nationality?
    solution: |
      ```r
      sum(data$nationality == "OTHER", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 195
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q61"
    title: "Q61"
    text: |
      How many cars have an age between 5 and 10 years?
    solution: |
      ```r
      sum(between(data$age, 5, 10))
      ```

      **Output on the full dataset:**

      ```text
      [1] 28490
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q62"
    title: "Q62"
    text: |
      What is the mean odometer reading for cars that are not bad buys?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 0) |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      71049.26
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q63"
    title: "Q63"
    text: |
      How many cars are there in each ‘top_three_american_name’ category?
    solution: |
      ```r
      data |>
        count(top_three_american_name)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        top_three_american_name     n
        <chr>                   <int>
      1 CHRYSLER                23399
      2 FORD                    12315
      3 GM                      25314
      4 OTHER                   11950
      5 <NA>                        5
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q64"
    title: "Q64"
    text: |
      What is the standard deviation of the price for cars from ‘AMERICAN’ nationality?
    solution: |
      ```r
      data |>
        filter(nationality == "AMERICAN") |>
        summarize(sd_price = sd(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        sd_price
           <dbl>
      1 2443.634
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q65"
    title: "Q65"
    text: |
      Which year has the highest number of bad buys?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 1) |>
        count(year_made, sort = TRUE) |>
        head(1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        year_made     n
            <dbl> <int>
      1      2005  2032
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q66"
    title: "Q66"
    text: |
      What is the average cost of cars with more than 100,000 miles odometer reading?
    solution: |
      ```r
      data |>
        filter(odometer > 100000) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  4063.078
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q67"
    title: "Q67"
    text: |
      How many cars have a transmission type that is neither ‘AUTO’ nor ‘MANUAL’?
    solution: |
      ```r
      data |>
        filter(!is.na(transmission), !transmission %in% c("AUTO", "MANUAL")) |>
        count(transmission)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        transmission     n
        <chr>        <int>
      1 Manual           1
      ```

      > [!warning] Check this one
      > The single result is the stray `Manual` spelling. The 9 missing transmissions are excluded.

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q68"
    title: "Q68"
    text: |
      What percentage of cars are from the ‘MEDIUM’ size category?
    solution: |
      ```r
      sum(data$size == "MEDIUM", na.rm = TRUE) / nrow(data) * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 42.18106
      ```

      > [!warning] Check this one
      > The denominator is all cars, including those with a missing size.

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q69"
    title: "Q69"
    text: |
      What is the average odometer reading for cars of the make “NISSAN”?
    solution: |
      ```r
      data |>
        filter(make == "NISSAN") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      77077.87
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q70"
    title: "Q70"
    text: |
      What is the median cost of cars that were a bad buy?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 1) |>
        summarize(median_cost = median(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        median_cost
              <dbl>
      1        6000
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q71"
    title: "Q71"
    text: |
      How many cars have a cost less than \$5,000?
    solution: |
      ```r
      sum(data$cost < 5000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 12638
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q72"
    title: "Q72"
    text: |
      What is the total number of online sales?
    solution: |
      ```r
      sum(data$is_online_sale)
      ```

      **Output on the full dataset:**

      ```text
      [1] 1845
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q73"
    title: "Q73"
    text: |
      What is the average odometer reading for cars purchased in New-Hampshire (‘NH’)?
    solution: |
      ```r
      data |>
        filter(state == "NH") |>
        summarize(n = n(), mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
            n mean_odometer
        <int>         <dbl>
      1    97      50413.35
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q74"
    title: "Q74"
    text: |
      What is the mean age of ‘Alloy’ wheel type cars?
    solution: |
      ```r
      data |>
        filter(wheel_type == "Alloy") |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 4.608682
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q75"
    title: "Q75"
    text: |
      How many unique states are represented in the dataset?
    solution: |
      ```r
      n_distinct(data$state)
      ```

      **Output on the full dataset:**

      ```text
      [1] 37
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q76"
    title: "Q76"
    text: |
      What percentage of cars have been purchased in the state of ‘FL’?
    solution: |
      ```r
      mean(data$state == "FL") * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 14.31429
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q77"
    title: "Q77"
    text: |
      What is the mean cost with wheel of type ‘Special’?
    solution: |
      ```r
      data |>
        filter(wheel_type == "Special") |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  7034.540
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q78"
    title: "Q78"
    text: |
      What is the average odometer reading for yellow cars?
    solution: |
      ```r
      data |>
        filter(color == "YELLOW") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      70740.84
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q79"
    title: "Q79"
    text: |
      How many cars are from a non-American nationality?
    solution: |
      ```r
      sum(data$nationality != "AMERICAN", na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 11950
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q80"
    title: "Q80"
    text: |
      What is the average price of cars with an ‘AUTO’ transmission?
    solution: |
      ```r
      data |>
        filter(transmission == "AUTO") |>
        summarize(mean_price = mean(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_price
             <dbl>
      1   6175.795
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q81"
    title: "Q81"
    text: |
      How many cars were purchased from each nationality category in the dataset?
    solution: |
      ```r
      data |>
        count(nationality)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        nationality        n
        <chr>          <int>
      1 AMERICAN       61028
      2 OTHER            195
      3 OTHER ASIAN     8033
      4 TOP LINE ASIAN  3722
      5 <NA>               5
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q82"
    title: "Q82"
    text: |
      What is the average odometer reading of sports cars (`size` = ‘SPORTS’)?
    solution: |
      ```r
      data |>
        filter(size == "SPORTS") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      70314.00
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q83"
    title: "Q83"
    text: |
      What is the median year made of the cars in the dataset?
    solution: |
      ```r
      median(data$year_made)
      ```

      **Output on the full dataset:**

      ```text
      [1] 2005
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q84"
    title: "Q84"
    text: |
      How many cars have a color of ‘RED’ and are a bad buy?
    solution: |
      ```r
      sum(data$color == "RED" & data$is_bad_buy == 1, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 825
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q85"
    title: "Q85"
    text: |
      What is the average cost of cars that were not purchased online?
    solution: |
      ```r
      data |>
        filter(is_online_sale == 0) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_cost
            <dbl>
      1  6719.483
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q86"
    title: "Q86"
    text: |
      How many cars with a ‘MANUAL’ transmission are there in each color category?
    solution: |
      ```r
      data |>
        filter(transmission == "MANUAL") |>
        count(color)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 16 x 2
         color         n
         <chr>     <int>
       1 BEIGE        32
       2 BLACK       348
       3 BLUE        362
       4 BROWN         9
       5 GOLD        118
       6 GREEN        80
       7 GREY        237
       8 MAROON       71
       9 NOT AVAIL     2
      10 ORANGE       42
      11 OTHER         2
      12 PURPLE       20
      13 RED         330
      14 SILVER      520
      15 WHITE       350
      16 YELLOW       52
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q87"
    title: "Q87"
    text: |
      How many cars of the make “VOLVO” are less than 3 years old?
    solution: |
      ```r
      sum(data$make == "VOLVO" & data$age < 3)
      ```

      **Output on the full dataset:**

      ```text
      [1] 18
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q88"
    title: "Q88"
    text: |
      Which model of car is the most frequent in the dataset?
    solution: |
      ```r
      data |>
        count(model, sort = TRUE) |>
        head(1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        model          n
        <chr>      <int>
      1 PT CRUISER  2329
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q89"
    title: "Q89"
    text: |
      How many cars have not been sold online and are a bad buy?
    solution: |
      ```r
      sum(data$is_online_sale == 0 & data$is_bad_buy == 1)
      ```

      **Output on the full dataset:**

      ```text
      [1] 8763
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q90"
    title: "Q90"
    text: |
      What is the standard deviation of the odometer readings for cars made by ‘FORD’?
    solution: |
      ```r
      data |>
        filter(make == "FORD") |>
        summarize(sd_odometer = sd(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        sd_odometer
              <dbl>
      1    12494.70
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q91"
    title: "Q91"
    text: |
      What is the total number of cars with ‘Covers’ wheel type that are not a bad buy?
    solution: |
      ```r
      sum(data$wheel_type == "Covers" & data$is_bad_buy == 0, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 30349
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q92"
    title: "Q92"
    text: |
      What percentage of cars are from ‘CHRYSLER’ make?
    solution: |
      ```r
      mean(data$make == "CHRYSLER") * 100
      ```

      **Output on the full dataset:**

      ```text
      [1] 12.11789
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q93"
    title: "Q93"
    text: |
      What is the average cost of cars made in the earliest year?
    solution: |
      ```r
      data |>
        filter(year_made == min(year_made)) |>
        summarize(year = first(year_made), mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
         year mean_cost
        <dbl>     <dbl>
      1  2001  4782.174
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q94"
    title: "Q94"
    text: |
      How many cars have both an odometer reading under 25,000 and a cost over \$20,000?
    solution: |
      ```r
      sum(data$odometer < 25000 & data$cost > 20000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 5
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q95"
    title: "Q95"
    text: |
      What is the average odometer reading of cars with a manual transmission?
    solution: |
      ```r
      data |>
        filter(toupper(transmission) == "MANUAL") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      69026.16
      ```

      > [!warning] Check this one
      > Counts both the `MANUAL` and `Manual` spellings.

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q96"
    title: "Q96"
    text: |
      What is the median price of cars with an alloy wheel type?
    solution: |
      ```r
      data |>
        filter(wheel_type == "Alloy") |>
        summarize(median_price = median(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        median_price
               <dbl>
      1         6290
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q97"
    title: "Q97"
    text: |
      How many cars from ‘AMERICAN’ nationality have an odometer reading above 150,000?
    solution: |
      ```r
      sum(data$nationality == "AMERICAN" & data$odometer > 150000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 0
      ```

      > [!warning] Check this one
      > The answer is 0 because the highest odometer reading in the data is 115,717.

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q98"
    title: "Q98"
    text: |
      How many different models of cars are there from the make ‘LEXUS’?
    solution: |
      ```r
      data |>
        filter(make == "LEXUS") |>
        summarize(n_models = n_distinct(model))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        n_models
           <int>
      1       13
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q99"
    title: "Q99"
    text: |
      How many cars have a cost greater than the average cost of all cars in the dataset?
    solution: |
      ```r
      sum(data$cost > mean(data$cost, na.rm = TRUE), na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 36199
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q100"
    title: "Q100"
    text: |
      What is the total number of cars with an odometer reading over 50,000?
    solution: |
      ```r
      sum(data$odometer > 50000)
      ```

      **Output on the full dataset:**

      ```text
      [1] 66238
      ```

      *AI-written answer.*
    related_terms: []
  - id: "q101"
    title: "Q101"
    text: |
      How many cars are there for each manufacturer? Show only the five most common manufacturers.
    solution: |
      ```r
      data |>
        count(make, sort = TRUE) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        make          n
        <chr>     <int>
      1 CHEVROLET 17248
      2 DODGE     12912
      3 FORD      11305
      4 CHRYSLER   8844
      5 PONTIAC    4258
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q102"
    title: "Q102"
    text: |
      What car size levels have the highest and lowest average cost?
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        group_by(size) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        filter(mean_cost == max(mean_cost) | mean_cost == min(mean_cost))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        size      mean_cost
        <chr>         <dbl>
      1 COMPACT    5091.976
      2 LARGE SUV  9673.121
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q103"
    title: "Q103"
    text: |
      List the top 5 states by number of cars purchased.
    solution: |
      ```r
      data |>
        count(state, sort = TRUE) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        state     n
        <chr> <int>
      1 TX    13596
      2 FL    10447
      3 CA     7095
      4 NC     7042
      5 AZ     6174
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q104"
    title: "Q104"
    text: |
      What is the average cost of cars for each state? Show only the top 5 states by average cost.
    solution: |
      ```r
      data |>
        group_by(state) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        arrange(desc(mean_cost)) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        state mean_cost
        <chr>     <dbl>
      1 NH     8601.809
      2 NY     8096.667
      3 KY     7484.457
      4 OH     7455.780
      5 MN     7261.371
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q105"
    title: "Q105"
    text: |
      Remove cars for which `price` = 0.Create a new column showing the cost as a percentage of price. Show the make, model, cost, price and the percentage for the 5 most expensive cars by this metric.
    solution: |
      ```r
      data |>
        filter(price != 0) |>
        mutate(cost_pct_of_price = cost / price * 100) |>
        arrange(desc(cost_pct_of_price)) |>
        select(make, model, cost, price, cost_pct_of_price) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 5
        make      model                 cost price cost_pct_of_price
        <chr>     <chr>                <dbl> <dbl>             <dbl>
      1 CHEVROLET CAVALIER 4C           4450   889          500.5624
      2 FORD      F150 PICKUP 2WD V8 4  5940  1239          479.4189
      3 KIA       OPTIMA 4C             4915  1175          418.2979
      4 CHEVROLET S10 PICKUP 2WD V6 4.  3640   884          411.7647
      5 DODGE     STRATUS V6            4400  1097          401.0939
      ```

      *AI-written answer.*
    related_terms: ["filter", "select", "arrange", "mutate", "pipe-operator"]
  - id: "q106"
    title: "Q106"
    text: |
      Find the median age of cars for each transmission type.
    solution: |
      ```r
      data |>
        group_by(transmission) |>
        summarize(median_age = median(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 4 x 2
        transmission median_age
        <chr>             <dbl>
      1 AUTO                  4
      2 MANUAL                5
      3 Manual                3
      4 <NA>                  5
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator"]
  - id: "q107"
    title: "Q107"
    text: |
      Which makes (if any) have cars with an average odometer over 80,000 miles?
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(mean_odometer = mean(odometer)) |>
        filter(mean_odometer > 80000) |>
        arrange(desc(mean_odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        make         mean_odometer
        <chr>                <dbl>
      1 TOYOTA SCION      86440   
      2 ACURA             81732.36
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q108"
    title: "Q108"
    text: |
      Show the five most expensive (highest cost) cars made in the year 2008, sorted by cost in descending order. Display the make,model, color, and cost.
    solution: |
      ```r
      data |>
        filter(year_made == 2008) |>
        arrange(desc(cost)) |>
        select(make, model, color, cost) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 4
        make       model               color   cost
        <chr>      <chr>               <chr>  <dbl>
      1 LEXUS      RX400H AWD          GREY   36485
      2 TOYOTA     HIGHLANDER 4WD V6   BLACK  35900
      3 VOLKSWAGEN TOUAREG V8          BLACK  28180
      4 DODGE      2500 RAM PICKUP 2WD GREY   12045
      5 JEEP       COMMANDER 2WD V6    SILVER 11695
      ```

      *AI-written answer.*
    related_terms: ["filter", "select", "arrange", "pipe-operator"]
  - id: "q109"
    title: "Q109"
    text: |
      What is the average cost and average odometer reading by nationality?
    solution: |
      ```r
      data |>
        group_by(nationality) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 3
        nationality    mean_cost mean_odometer
        <chr>              <dbl>         <dbl>
      1 AMERICAN        6713.711      72022.59
      2 OTHER           8285.590      70661.01
      3 OTHER ASIAN     6205.896      65250.42
      4 TOP LINE ASIAN  8030.425      76470.45
      5 <NA>            8512          66243.8 
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q110"
    title: "Q110"
    text: |
      What is the proportion of bad buys for each color? List the five worst colors by this metric.
    solution: |
      ```r
      data |>
        group_by(color) |>
        summarize(prop_bad = mean(is_bad_buy), n = n()) |>
        arrange(desc(prop_bad)) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 3
        color      prop_bad     n
        <chr>         <dbl> <int>
      1 NOT AVAIL 0.2553191    94
      2 PURPLE    0.1501340   373
      3 GOLD      0.1408908  5231
      4 YELLOW    0.1393443   244
      5 BEIGE     0.1332071  1584
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q111"
    title: "Q111"
    text: |
      What is the percentage of online sales for each make? Show the top 3 makes by this metric.
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(pct_online = mean(is_online_sale) * 100, n = n()) |>
        arrange(desc(pct_online)) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 3
        make       pct_online     n
        <chr>           <dbl> <int>
      1 SUBARU      10.71429     28
      2 VOLVO        8.108108    37
      3 VOLKSWAGEN   7.462687   134
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q112"
    title: "Q112"
    text: |
      Which states, if any, have a median car cost below \$6,000?
    solution: |
      ```r
      data |>
        group_by(state) |>
        summarize(median_cost = median(cost, na.rm = TRUE)) |>
        filter(median_cost < 6000) |>
        arrange(median_cost)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        state median_cost
        <chr>       <dbl>
      1 AR           5290
      2 MI           5925
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q113"
    title: "Q113"
    text: |
      Create a summary table showing the average cost and count of cars by transmission type.
    solution: |
      ```r
      data |>
        group_by(transmission) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), n = n())
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 4 x 3
        transmission mean_cost     n
        <chr>            <dbl> <int>
      1 AUTO          6777.680 70398
      2 MANUAL        5411.380  2575
      3 Manual        3800         1
      4 <NA>          5202.778     9
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q114"
    title: "Q114"
    text: |
      Identify the top three models with the highest average odometer reading.
    solution: |
      ```r
      data |>
        group_by(model) |>
        summarize(mean_odometer = mean(odometer), n = n()) |>
        arrange(desc(mean_odometer)) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 3
        model           mean_odometer     n
        <chr>                   <dbl> <int>
      1 PRIZM                102424.7     3
      2 626 V6                98501       1
      3 CHEROKEE 4WD 6C       98449       1
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q115"
    title: "Q115"
    text: |
      How many cars have a price below the average price of all cars?
    solution: |
      ```r
      sum(data$price < mean(data$price, na.rm = TRUE), na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 36815
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q116"
    title: "Q116"
    text: |
      What is the average age of cars that were purchased online versus not purchased online?
    solution: |
      ```r
      data |>
        group_by(is_online_sale) |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        is_online_sale mean_age
                 <dbl>    <dbl>
      1              0 4.183474
      2              1 3.913279
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator"]
  - id: "q117"
    title: "Q117"
    text: |
      For each car size category, calculate the total cost and the number of bad buys. Display the 3 most expensive car sizes by total cost.
    solution: |
      ```r
      data |>
        group_by(size) |>
        summarize(total_cost = sum(cost, na.rm = TRUE), bad_buys = sum(is_bad_buy)) |>
        arrange(desc(total_cost)) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 3
        size       total_cost bad_buys
        <chr>           <dbl>    <dbl>
      1 MEDIUM      190904137     3541
      2 MEDIUM SUV   64096615     1193
      3 LARGE        62640382      818
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q118"
    title: "Q118"
    text: |
      Which color of cars has the lowest average cost (except color = NA)?
    solution: |
      ```r
      data |>
        filter(!is.na(color)) |>
        group_by(color) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        slice_min(mean_cost, n = 1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        color  mean_cost
        <chr>      <dbl>
      1 PURPLE  6298.669
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q119"
    title: "Q119"
    text: |
      Display the percentage of cars from each level of `top_three_american_name` that are a bad buy.
    solution: |
      ```r
      data |>
        group_by(top_three_american_name) |>
        summarize(pct_bad = mean(is_bad_buy) * 100)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        top_three_american_name  pct_bad
        <chr>                      <dbl>
      1 CHRYSLER                11.64580
      2 FORD                    15.63946
      3 GM                      10.80825
      4 OTHER                   13.29707
      5 <NA>                     0      
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator"]
  - id: "q120"
    title: "Q120"
    text: |
      List the average odometer reading and average cost for cars made in 2001 and 2010.
    solution: |
      ```r
      data |>
        filter(year_made %in% c(2001, 2010)) |>
        group_by(year_made) |>
        summarize(mean_odometer = mean(odometer), mean_cost = mean(cost, na.rm = TRUE), n = n())
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 4
        year_made mean_odometer mean_cost     n
            <dbl>         <dbl>     <dbl> <int>
      1      2001      78441.55  4782.174  1481
      2      2010      83729     9270         1
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q121"
    title: "Q121"
    text: |
      How many unique car models are there in each car make category? List the top 4 makes by this metric.
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(n_models = n_distinct(model)) |>
        arrange(desc(n_models)) |>
        head(4)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 4 x 2
        make      n_models
        <chr>        <int>
      1 CHEVROLET      117
      2 FORD           102
      3 DODGE           73
      4 TOYOTA          70
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q122"
    title: "Q122"
    text: |
      What is the average cost of cars not considered a bad buy and those that are?
    solution: |
      ```r
      data |>
        group_by(is_bad_buy) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        is_bad_buy mean_cost
             <dbl>     <dbl>
      1          0  6796.813
      2          1  6246.383
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q123"
    title: "Q123"
    text: |
      List all cars with an odometer reading less than 10,000 miles that are 3 years old or newer. Show only relevant columns.
    solution: |
      ```r
      data |>
        filter(odometer < 10000, age <= 3) |>
        select(make, model, year_made, age, odometer, cost)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 6
        make   model              year_made   age odometer  cost
        <chr>  <chr>                  <dbl> <dbl>    <dbl> <dbl>
      1 FORD   TAURUS                  2007     3     4825   225
      2 FORD   F150 PICKUP 4WD V8      2009     1     9446 32300
      3 NISSAN VERSA                   2009     1     8706  6525
      ```

      *AI-written answer.*
    related_terms: ["filter", "select", "pipe-operator"]
  - id: "q124"
    title: "Q124"
    text: |
      What is the average price of manual transmission cars compared to automatic?
    solution: |
      ```r
      data |>
        filter(!is.na(transmission)) |>
        mutate(transmission = toupper(transmission)) |>
        group_by(transmission) |>
        summarize(mean_price = mean(price, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 2 x 2
        transmission mean_price
        <chr>             <dbl>
      1 AUTO           6175.795
      2 MANUAL         4854.081
      ```

      > [!warning] Check this one
      > `MANUAL` and `Manual` are combined.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "mutate", "pipe-operator", "missing-value"]
  - id: "q125"
    title: "Q125"
    text: |
      How many cars were bought in each state, sorted by the number of cars? List the top 5 states.
    solution: |
      ```r
      data |>
        count(state, sort = TRUE) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        state     n
        <chr> <int>
      1 TX    13596
      2 FL    10447
      3 CA     7095
      4 NC     7042
      5 AZ     6174
      ```

      *AI-written answer.*
    related_terms: ["pipe-operator"]
  - id: "q126"
    title: "Q126"
    text: |
      Which car make has the lowest average cost of cars that are not a bad buy?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 0) |>
        group_by(make) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), n = n()) |>
        slice_min(mean_cost, n = 1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 3
        make     mean_cost     n
        <chr>        <dbl> <int>
      1 PLYMOUTH      3560     1
      ```

      > [!warning] Check this one
      > PLYMOUTH has only one car in this group, so this average is based on a single car.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q127"
    title: "Q127"
    text: |
      Calculate the total number of cars with ‘Alloy’ wheel type, by transmission type.
    solution: |
      ```r
      data |>
        filter(wheel_type == "Alloy") |>
        count(transmission)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 4 x 2
        transmission     n
        <chr>        <int>
      1 AUTO         34867
      2 MANUAL        1181
      3 Manual           1
      4 <NA>             1
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q128"
    title: "Q128"
    text: |
      What percentage of cars from each make are a bad buy? List the five worst makes by this metric.
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(pct_bad = mean(is_bad_buy) * 100, n = n()) |>
        arrange(desc(pct_bad)) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 3
        make      pct_bad     n
        <chr>       <dbl> <int>
      1 PLYMOUTH 50           2
      2 LEXUS    35.48387    31
      3 INFINITI 33.33333    42
      4 MINI     33.33333    24
      5 LINCOLN  29.89691    97
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q129"
    title: "Q129"
    text: |
      How many unique car models are there with odometer reading over 50,000 miles?
    solution: |
      ```r
      data |>
        filter(odometer > 50000) |>
        summarize(n_models = n_distinct(model))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        n_models
           <int>
      1     1044
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q130"
    title: "Q130"
    text: |
      What is the proportion of bad buys for each nationality?
    solution: |
      ```r
      data |>
        group_by(nationality) |>
        summarize(prop_bad = mean(is_bad_buy), n = n())
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 3
        nationality     prop_bad     n
        <chr>              <dbl> <int>
      1 AMERICAN       0.1210428 61028
      2 OTHER          0.1384615   195
      3 OTHER ASIAN    0.1320802  8033
      4 TOP LINE ASIAN 0.1346051  3722
      5 <NA>           0             5
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator"]
  - id: "q131"
    title: "Q131"
    text: |
      Display the top 5 most common car colors and percentage of cars with that color.
    solution: |
      ```r
      data |>
        count(color, sort = TRUE) |>
        mutate(pct = n / sum(n) * 100) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 3
        color      n      pct
        <chr>  <int>    <dbl>
      1 SILVER 14875 20.38146
      2 WHITE  12123 16.61072
      3 BLUE   10347 14.17727
      4 GREY    7887 10.80663
      5 BLACK   7627 10.45038
      ```

      *AI-written answer.*
    related_terms: ["mutate", "pipe-operator"]
  - id: "q132"
    title: "Q132"
    text: |
      How many cars are there with a cost greater than two times the average cost of all cars?
    solution: |
      ```r
      sum(data$cost > 2 * mean(data$cost, na.rm = TRUE), na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 15
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q133"
    title: "Q133"
    text: |
      What is the most common size of cars that are not a bad buy?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 0) |>
        count(size, sort = TRUE) |>
        head(1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        size       n
        <chr>  <int>
      1 MEDIUM 27244
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q134"
    title: "Q134"
    text: |
      Calculate the average and the highest cost of cars for every year they were made.
    solution: |
      ```r
      data |>
        group_by(year_made) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), max_cost = max(cost, na.rm = TRUE))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 10 x 3
         year_made mean_cost max_cost
             <dbl>     <dbl>    <dbl>
       1      2001  4782.174    10580
       2      2002  5385.801    11535
       3      2003  6043.076    11955
       4      2004  6476.268    13605
       5      2005  6535.406    13535
       6      2006  6870.416    18245
       7      2007  7323.965    45469
       8      2008  7722.932    36485
       9      2009  8286.558    32300
      10      2010  9270         9270
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q135"
    title: "Q135"
    text: |
      Which state has the highest average odometer reading for cars sold?
    solution: |
      ```r
      data |>
        group_by(state) |>
        summarize(mean_odometer = mean(odometer), n = n()) |>
        slice_max(mean_odometer, n = 1)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 3
        state mean_odometer     n
        <chr>         <dbl> <int>
      1 AR         86048.64    70
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "pipe-operator"]
  - id: "q136"
    title: "Q136"
    text: |
      List the makes with more than 20% bad buys and the average proportion of bad buys for each make, in descending order, along side the number of cars for each of those makes.
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(prop_bad = mean(is_bad_buy), n = n()) |>
        filter(prop_bad > 0.2) |>
        arrange(desc(prop_bad))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 8 x 3
        make        prop_bad     n
        <chr>          <dbl> <int>
      1 PLYMOUTH   0.5           2
      2 LEXUS      0.3548387    31
      3 INFINITI   0.3333333    42
      4 MINI       0.3333333    24
      5 LINCOLN    0.2989691    97
      6 ACURA      0.2727273    33
      7 SUBARU     0.2142857    28
      8 OLDSMOBILE 0.2016461   243
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q137"
    title: "Q137"
    text: |
      How many cars have both high cost (over \$15,000) and low odometer readings (less than 50,000)?
    solution: |
      ```r
      sum(data$cost > 15000 & data$odometer < 50000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 12
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q138"
    title: "Q138"
    text: |
      What is the median price of yellow or purple cars made before 2008? How many such cars are there in the dataset?
    solution: |
      ```r
      data |>
        filter(color %in% c("YELLOW", "PURPLE"), year_made < 2008) |>
        summarize(median_price = median(price, na.rm = TRUE), n = n())
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 2
        median_price     n
               <dbl> <int>
      1       5030.5   608
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator", "missing-value"]
  - id: "q139"
    title: "Q139"
    text: |
      Identify the car model with the lowest average cost in each of the car size categories: “LARGE”, “MEDIUM”, “COMPACT”. Display a table with the size, model, average cost, and number of cars this average is based on.
    solution: |
      ```r
      data |>
        filter(size %in% c("LARGE", "MEDIUM", "COMPACT")) |>
        group_by(size, model) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), n = n(), .groups = "drop_last") |>
        slice_min(mean_cost, n = 1, with_ties = FALSE) |>
        ungroup()
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 4
        size    model                mean_cost     n
        <chr>   <chr>                    <dbl> <int>
      1 COMPACT ESCORT                3150         1
      2 LARGE   INTREPID              3692.143    14
      3 MEDIUM  OPTIMA 4C 2.4L I 4 N  2595         1
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator", "missing-value"]
  - id: "q140"
    title: "Q140"
    text: |
      Calculate the average age of cars by color. Display the top 3 (oldest) colors by average age.
    solution: |
      ```r
      data |>
        filter(!is.na(color)) |>
        group_by(color) |>
        summarize(mean_age = mean(age), n = n()) |>
        arrange(desc(mean_age)) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 3
        color  mean_age     n
        <chr>     <dbl> <int>
      1 YELLOW 5.278689   244
      2 GREEN  4.762054  3194
      3 GOLD   4.621678  5231
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q141"
    title: "Q141"
    text: |
      Within each level of `top_three_american_name` how many cars have a price lower than \$5,000?
    solution: |
      ```r
      data |>
        filter(price < 5000) |>
        count(top_three_american_name)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        top_three_american_name     n
        <chr>                   <int>
      1 CHRYSLER                 7070
      2 FORD                     5853
      3 GM                       8152
      4 OTHER                    4420
      5 <NA>                        2
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q142"
    title: "Q142"
    text: |
      What 3 car sizes were the most purchased online?
    solution: |
      ```r
      data |>
        filter(is_online_sale == 1) |>
        count(size, sort = TRUE) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 2
        size        n
        <chr>   <int>
      1 MEDIUM    788
      2 LARGE     283
      3 COMPACT   180
      ```

      *AI-written answer.*
    related_terms: ["filter", "pipe-operator"]
  - id: "q143"
    title: "Q143"
    text: |
      Which car sizes have the highest average price? Show only those with average `price` over \$10,000.
    solution: |
      ```r
      data |>
        group_by(size) |>
        summarize(mean_price = mean(price, na.rm = TRUE)) |>
        filter(mean_price > 10000) |>
        arrange(desc(mean_price))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 0 x 2
      # i 2 variables: size <chr>, mean_price <dbl>
      ```

      > [!warning] Check this one
      > No size category averages above \$10,000 in the full dataset, so the result is empty. A student's sampled file could differ.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q144"
    title: "Q144"
    text: |
      List how many cars made were before, during, and after the year 2005.
    solution: |
      ```r
      data |>
        mutate(period = case_when(year_made < 2005 ~ "before 2005", year_made == 2005 ~ "2005", year_made > 2005 ~ "after 2005")) |>
        count(period)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 2
        period          n
        <chr>       <int>
      1 2005        15489
      2 after 2005  36174
      3 before 2005 21320
      ```

      *AI-written answer.*
    related_terms: ["mutate", "pipe-operator"]
  - id: "q145"
    title: "Q145"
    text: |
      What is the average odometer reading for cars that are a bad buy and have `nationality` = ‘AMERICAN’?
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 1, nationality == "AMERICAN") |>
        summarize(mean_odometer = mean(odometer))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_odometer
                <dbl>
      1      75321.09
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q146"
    title: "Q146"
    text: |
      Calculate the total cost of cars for each color. Show the top 3 colors.
    solution: |
      ```r
      data |>
        group_by(color) |>
        summarize(total_cost = sum(cost, na.rm = TRUE)) |>
        arrange(desc(total_cost)) |>
        head(3)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 3 x 2
        color  total_cost
        <chr>       <dbl>
      1 SILVER   98190643
      2 WHITE    80576107
      3 BLUE     69440614
      ```

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q147"
    title: "Q147"
    text: |
      What is the average age of cars that have been sold online and are a bad buy?
    solution: |
      ```r
      data |>
        filter(is_online_sale == 1, is_bad_buy == 1) |>
        summarize(mean_age = mean(age))
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 1 x 1
        mean_age
           <dbl>
      1 4.511737
      ```

      *AI-written answer.*
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q148"
    title: "Q148"
    text: |
      How many car models with an average age over 5 years are there?
    solution: |
      ```r
      data |>
        group_by(model) |>
        summarize(mean_age = mean(age)) |>
        filter(mean_age > 5) |>
        nrow()
      ```

      **Output on the full dataset:**

      ```text
      [1] 516
      ```

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "pipe-operator"]
  - id: "q149"
    title: "Q149"
    text: |
      How many cars from the ‘GM’ `top_three_american_name` cost above \$12,000?
    solution: |
      ```r
      sum(data$top_three_american_name == "GM" & data$cost > 12000, na.rm = TRUE)
      ```

      **Output on the full dataset:**

      ```text
      [1] 9
      ```

      *AI-written answer.*
    related_terms: ["missing-value"]
  - id: "q150"
    title: "Q150"
    text: |
      Which states have the lowest number of cars purchased? List the bottom 5 states.
    solution: |
      ```r
      data |>
        count(state) |>
        arrange(n) |>
        head(5)
      ```

      **Output on the full dataset:**

      ```text
      # A tibble: 5 x 2
        state     n
        <chr> <int>
      1 NY        6
      2 MI       14
      3 MA       15
      4 NE       26
      5 MN       62
      ```

      *AI-written answer.*
    related_terms: ["arrange", "pipe-operator"]
  - id: "q151"
    title: "Q151"
    text: |
      Plot the distribution of odometer readings for all cars. Use geom_histogram.

      ![Chart for question 151, from the course's graphics file](/images/intro-to-r/pp01-q151.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = odometer) +
        geom_histogram()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-histogram"]
  - id: "q152"
    title: "Q152"
    text: |
      Create a scatter plot of cost versus odometer reading, faceted by top_three_american_name. Add linear regression lines.

      ![Chart for question 152, from the course's graphics file](/images/intro-to-r/pp01-q152.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = odometer, y = cost) +
        geom_point(alpha = 0.1) +
        geom_smooth(method = "lm") +
        facet_wrap(~top_three_american_name)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-smooth", "facet"]
  - id: "q153"
    title: "Q153"
    text: |
      Generate a bar plot of car age counts.

      ![Chart for question 153, from the course's graphics file](/images/intro-to-r/pp01-q153.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = age) +
        geom_bar()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-bar"]
  - id: "q154"
    title: "Q154"
    text: |
      Plot the average cost of cars by year made.

      ![Chart for question 154, from the course's graphics file](/images/intro-to-r/pp01-q154.png)
    solution: |
      ```r
      data |>
        group_by(year_made) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = year_made, y = mean_cost) +
        geom_line() +
        geom_point()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "ggplot2", "pipe-operator", "missing-value"]
  - id: "q155"
    title: "Q155"
    text: |
      Create a bar plot showing the count of cars for each manufacturer. Show only the top 10 manufacturers by count.

      ![Chart for question 155, from the course's graphics file](/images/intro-to-r/pp01-q155.png)
    solution: |
      ```r
      data |>
        count(make, sort = TRUE) |>
        head(10) |>
        ggplot() +
        aes(x = reorder(make, -n), y = n) +
        geom_col() +
        xlab("make") +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-col", "pipe-operator"]
  - id: "q156"
    title: "Q156"
    text: |
      Generate a barplot of car cost averages by transmission type.

      ![Chart for question 156, from the course's graphics file](/images/intro-to-r/pp01-q156.png)
    solution: |
      ```r
      data |>
        filter(!is.na(transmission)) |>
        group_by(transmission) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = transmission, y = mean_cost) +
        geom_col()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator", "missing-value"]
  - id: "q157"
    title: "Q157"
    text: |
      Plot the median odometer reading for each car size category.

      ![Chart for question 157, from the course's graphics file](/images/intro-to-r/pp01-q157.png)
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        group_by(size) |>
        summarize(median_odometer = median(odometer)) |>
        ggplot() +
        aes(x = size, y = median_odometer) +
        geom_col() +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q158"
    title: "Q158"
    text: |
      Create a barplot plot showing the relationship between age and median odometer reading.

      ![Chart for question 158, from the course's graphics file](/images/intro-to-r/pp01-q158.png)
    solution: |
      ```r
      data |>
        group_by(age) |>
        summarize(median_odometer = median(odometer)) |>
        ggplot() +
        aes(x = age, y = median_odometer) +
        geom_col()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q159"
    title: "Q159"
    text: |
      Generate a line plot of the average odometer reading over years wit a separate line for each level of `top_three_american_name`.

      ![Chart for question 159, from the course's graphics file](/images/intro-to-r/pp01-q159.png)
    solution: |
      ```r
      data |>
        filter(!is.na(top_three_american_name)) |>
        group_by(year_made, top_three_american_name) |>
        summarize(mean_odometer = mean(odometer), .groups = "drop") |>
        ggplot() +
        aes(x = year_made, y = mean_odometer, color = top_three_american_name) +
        geom_line()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "pipe-operator"]
  - id: "q160"
    title: "Q160"
    text: |
      Plot the distribution of car colors using a bar plot. Fill the columns with the color called `steelblue`.

      ![Chart for question 160, from the course's graphics file](/images/intro-to-r/pp01-q160.png)
    solution: |
      ```r
      data |>
        filter(!is.na(color)) |>
        ggplot() +
        aes(x = color) +
        geom_bar(fill = "steelblue") +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-bar", "pipe-operator"]
  - id: "q161"
    title: "Q161"
    text: |
      Create a scatterplot of cost versus odometer reading, faceted by car size. Use the `scales` package to format the y-axis as dollars by adding the following layer to the plot: `scale_y_continuous(labels = scales::dollar)`

      ![Chart for question 161, from the course's graphics file](/images/intro-to-r/pp01-q161.png)
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        ggplot() +
        aes(x = odometer, y = cost) +
        geom_point(alpha = 0.1) +
        facet_wrap(~size) +
        scale_y_continuous(labels = scales::dollar)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "facet", "pipe-operator"]
  - id: "q162"
    title: "Q162"
    text: |
      Generate a bar plot of average cost by car nationality.

      ![Chart for question 162, from the course's graphics file](/images/intro-to-r/pp01-q162.png)
    solution: |
      ```r
      data |>
        filter(!is.na(nationality)) |>
        group_by(nationality) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = nationality, y = mean_cost) +
        geom_col()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator", "missing-value"]
  - id: "q163"
    title: "Q163"
    text: |
      Plot the number of cars sold per state. Include only the top 10 states by car count.

      ![Chart for question 163, from the course's graphics file](/images/intro-to-r/pp01-q163.png)
    solution: |
      ```r
      data |>
        count(state, sort = TRUE) |>
        head(10) |>
        ggplot() +
        aes(x = reorder(state, -n), y = n) +
        geom_col() +
        xlab("state")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      > [!warning] Check this one
      > The course chart is titled "Average Number of Cars", but its bars are plain counts. This code plots the count.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-col", "pipe-operator"]
  - id: "q164"
    title: "Q164"
    text: |
      Create a scatter plot with a smooth line showing price versus age. Use `geom_jitter` to obtain a better visualization of the data points.

      ![Chart for question 164, from the course's graphics file](/images/intro-to-r/pp01-q164.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = age, y = price) +
        geom_jitter(alpha = 0.05) +
        geom_smooth()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-smooth"]
  - id: "q165"
    title: "Q165"
    text: |
      Generate a bar plot of the number of bad buys for each of the following colors: “BLACK”, “BLUE”, “GOLD”, “GREY”, “SILVER”, “WHITE”.

      ![Chart for question 165, from the course's graphics file](/images/intro-to-r/pp01-q165.png)
    solution: |
      ```r
      data |>
        filter(is_bad_buy == 1, color %in% c("BLACK", "BLUE", "GOLD", "GREY", "SILVER", "WHITE")) |>
        ggplot() +
        aes(x = color) +
        geom_bar()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-bar", "pipe-operator"]
  - id: "q166"
    title: "Q166"
    text: |
      Plot a histogram of costs, broken down by whether the car was a bad buy or not. Use either facets or groups to distinguish between bad buys and non-bad buys.

      ![Chart for question 166, from the course's graphics file](/images/intro-to-r/pp01-q166.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = cost) +
        geom_histogram() +
        facet_wrap(~is_bad_buy)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-histogram", "facet"]
  - id: "q167"
    title: "Q167"
    text: |
      Create a scatter plot of odometer reading versus cost, colored by transmission type. Use alpha value of 0.01 for the “AUTO” transmission type, and 0.5 for the “MANUAL” transmission type. The plot should not include a legend for the alpha value.

      ![Chart for question 167, from the course's graphics file](/images/intro-to-r/pp01-q167.png)
    solution: |
      ```r
      data |>
        filter(transmission %in% c("AUTO", "MANUAL")) |>
        mutate(point_alpha = ifelse(transmission == "AUTO", 0.01, 0.5)) |>
        ggplot() +
        aes(x = odometer, y = cost, color = transmission, alpha = I(point_alpha)) +
        geom_point()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      > [!warning] Check this one
      > The graphics file adds that transmission should have two levels, `AUTO` and `MANUAL`. This code keeps those two exact values.

      *AI-written answer.*
    related_terms: ["filter", "mutate", "ggplot2", "pipe-operator"]
  - id: "q168"
    title: "Q168"
    text: |
      Generate a stacked bar plot of car counts by `top_3_american_name` and `transmission` type.

      ![Chart for question 168, from the course's graphics file](/images/intro-to-r/pp01-q168.png)
    solution: |
      ```r
      data |>
        filter(!is.na(top_three_american_name), !is.na(transmission)) |>
        ggplot() +
        aes(x = top_three_american_name, fill = transmission) +
        geom_bar()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-bar", "pipe-operator"]
  - id: "q169"
    title: "Q169"
    text: |
      Plot the proportion of online sales by car make using a bar plot. Show only makes with at least 2.5% online sales.

      ![Chart for question 169, from the course's graphics file](/images/intro-to-r/pp01-q169.png)
    solution: |
      ```r
      data |>
        group_by(make) |>
        summarize(prop_online = mean(is_online_sale)) |>
        filter(prop_online >= 0.025) |>
        ggplot() +
        aes(x = reorder(make, -prop_online), y = prop_online) +
        geom_col() +
        xlab("make") +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q170"
    title: "Q170"
    text: |
      Create a line plot showing the trend of average cost over years. Add a horizontal, dashed line at the overall average cost.

      ![Chart for question 170, from the course's graphics file](/images/intro-to-r/pp01-q170.png)
    solution: |
      ```r
      data |>
        group_by(year_made) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = year_made, y = mean_cost) +
        geom_line() +
        geom_hline(yintercept = mean(data$cost, na.rm = TRUE), linetype = "dashed")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "ggplot2", "pipe-operator", "missing-value"]
  - id: "q171"
    title: "Q171"
    text: |
      Generate a boxplot (use `geom_boxplot`) of odometer readings for each top_three_american_name “Odometer Reading” category. Fill the boxplots with yellow color.

      ![Chart for question 171, from the course's graphics file](/images/intro-to-r/pp01-q171.png)
    solution: |
      ```r
      data |>
        filter(!is.na(top_three_american_name)) |>
        ggplot() +
        aes(x = top_three_american_name, y = odometer) +
        geom_boxplot(fill = "yellow") +
        ylab("Odometer Reading")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "pipe-operator"]
  - id: "q172"
    title: "Q172"
    text: |
      Plot a bar chart of the cars’ ages frequencies, faceted by `top_three_american_name`.

      ![Chart for question 172, from the course's graphics file](/images/intro-to-r/pp01-q172.png)
    solution: |
      ```r
      data |>
        filter(!is.na(top_three_american_name)) |>
        ggplot() +
        aes(x = age) +
        geom_bar() +
        facet_wrap(~top_three_american_name)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-bar", "facet", "pipe-operator"]
  - id: "q173"
    title: "Q173"
    text: |
      Create a scatter plot comparing the price and cost of cars. Exclude the points where price is 0 or above \$20,000.

      ![Chart for question 173, from the course's graphics file](/images/intro-to-r/pp01-q173.png)
    solution: |
      ```r
      data |>
        filter(price != 0, price <= 20000) |>
        ggplot() +
        aes(x = price, y = cost) +
        geom_point(alpha = 0.1)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "pipe-operator"]
  - id: "q174"
    title: "Q174"
    text: |
      Draw a histogram of the price, faceted by whether the car was purchased online or not.

      ![Chart for question 174, from the course's graphics file](/images/intro-to-r/pp01-q174.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = price) +
        geom_histogram() +
        facet_wrap(~is_online_sale)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-histogram", "facet"]
  - id: "q175"
    title: "Q175"
    text: |
      Plot a bar plot of average odometer reading by car color. Add a horizontal line at the overall average odometer reading.

      ![Chart for question 175, from the course's graphics file](/images/intro-to-r/pp01-q175.png)
    solution: |
      ```r
      data |>
        filter(!is.na(color)) |>
        group_by(color) |>
        summarize(mean_odometer = mean(odometer)) |>
        ggplot() +
        aes(x = color, y = mean_odometer) +
        geom_col() +
        geom_hline(yintercept = mean(data$odometer)) +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q176"
    title: "Q176"
    text: |
      Create a plot that shows the average cost of cars by online purchase (yes/no), grouped by `top_3_american_name`.

      ![Chart for question 176, from the course's graphics file](/images/intro-to-r/pp01-q176.png)
    solution: |
      ```r
      data |>
        filter(!is.na(top_three_american_name)) |>
        group_by(top_three_american_name, is_online_sale) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), .groups = "drop") |>
        ggplot() +
        aes(x = top_three_american_name, y = mean_cost, fill = factor(is_online_sale)) +
        geom_col(position = "dodge") +
        labs(fill = "online")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator", "missing-value"]
  - id: "q177"
    title: "Q177"
    text: |
      Generate a line plot of the median cost of cars for each year made.

      ![Chart for question 177, from the course's graphics file](/images/intro-to-r/pp01-q177.png)
    solution: |
      ```r
      data |>
        group_by(year_made) |>
        summarize(median_cost = median(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = year_made, y = median_cost) +
        geom_line()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "ggplot2", "pipe-operator", "missing-value"]
  - id: "q178"
    title: "Q178"
    text: |
      Plot a boxplot comparing the costs of cars across 5 different states: “TX”, “CA”, “FL”, “AZ”, “IL”.

      ![Chart for question 178, from the course's graphics file](/images/intro-to-r/pp01-q178.png)
    solution: |
      ```r
      data |>
        filter(state %in% c("TX", "CA", "FL", "AZ", "IL")) |>
        ggplot() +
        aes(x = state, y = cost) +
        geom_boxplot()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "pipe-operator"]
  - id: "q179"
    title: "Q179"
    text: |
      Create a scatter plot of odometer versus year made, faceted by bad buy status.

      ![Chart for question 179, from the course's graphics file](/images/intro-to-r/pp01-q179.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = year_made, y = odometer) +
        geom_point(alpha = 0.05) +
        facet_wrap(~is_bad_buy)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      > [!warning] Check this one
      > The graphics file's wording says **colored** by bad buy status, but its chart is **faceted**, as the question file asks. This code uses facets.

      *AI-written answer.*
    related_terms: ["ggplot2", "facet"]
  - id: "q180"
    title: "Q180"
    text: |
      Generate a bar plot showing the number of cars in each size category. Arrange the bars in descending order of count.

      ![Chart for question 180, from the course's graphics file](/images/intro-to-r/pp01-q180.png)
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        count(size) |>
        ggplot() +
        aes(x = reorder(size, -n), y = n) +
        geom_col() +
        xlab("size") +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q181"
    title: "Q181"
    text: |
      Create a bar chart of the number of cars made each year from 2001 to 2009.

      ![Chart for question 181, from the course's graphics file](/images/intro-to-r/pp01-q181.png)
    solution: |
      ```r
      data |>
        filter(between(year_made, 2001, 2009)) |>
        ggplot() +
        aes(x = factor(year_made)) +
        geom_bar() +
        xlab("year made")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "geom-bar", "pipe-operator"]
  - id: "q182"
    title: "Q182"
    text: |
      Create a scatter plot showing cost versus odometer reading (in thousands of miles), faceted by car size. Set the x-limit for all plots to be 0-100.

      ![Chart for question 182, from the course's graphics file](/images/intro-to-r/pp01-q182.png)
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        ggplot() +
        aes(x = odometer / 1000, y = cost) +
        geom_point(alpha = 0.1) +
        facet_wrap(~size) +
        coord_cartesian(xlim = c(0, 100)) +
        xlab("odometer (thousands of miles)")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "facet", "pipe-operator"]
  - id: "q183"
    title: "Q183"
    text: |
      Generate grouped bar plot of the average cost of cars by whether they are a bad buy or not for every nationality.

      ![Chart for question 183, from the course's graphics file](/images/intro-to-r/pp01-q183.png)
    solution: |
      ```r
      data |>
        filter(!is.na(nationality)) |>
        group_by(nationality, is_bad_buy) |>
        summarize(mean_cost = mean(cost, na.rm = TRUE), .groups = "drop") |>
        ggplot() +
        aes(x = nationality, y = mean_cost, fill = factor(is_bad_buy)) +
        geom_col(position = "dodge") +
        labs(fill = "bad buy")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator", "missing-value"]
  - id: "q184"
    title: "Q184"
    text: |
      Plot a line graph showing the average `price` by year made and add the average cost as a second line.

      ![Chart for question 184, from the course's graphics file](/images/intro-to-r/pp01-q184.png)
    solution: |
      ```r
      data |>
        group_by(year_made) |>
        summarize(mean_price = mean(price, na.rm = TRUE), mean_cost = mean(cost, na.rm = TRUE)) |>
        ggplot() +
        aes(x = year_made) +
        geom_line(aes(y = mean_price, color = "price")) +
        geom_line(aes(y = mean_cost, color = "cost")) +
        labs(y = "average", color = NULL)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["group-by", "summarize", "ggplot2", "pipe-operator", "missing-value"]
  - id: "q185"
    title: "Q185"
    text: |
      Create a density plot of the odometer reading for each of the following car makes: “FORD”, “NISSAN”, “HONDA”, “CHEVROLET” in a separate facet. Use `geom_density` and set the fill aesthetic to the car make. Remove the legend.

      ![Chart for question 185, from the course's graphics file](/images/intro-to-r/pp01-q185.png)
    solution: |
      ```r
      data |>
        filter(make %in% c("FORD", "NISSAN", "HONDA", "CHEVROLET")) |>
        ggplot() +
        aes(x = odometer, fill = make) +
        geom_density() +
        facet_wrap(~make) +
        theme(legend.position = "none")
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "facet", "pipe-operator"]
  - id: "q186"
    title: "Q186"
    text: |
      Plot the average car age by size using a bar chart and include labels of the average value on top of each bar. Color the bars orange.

      ![Chart for question 186, from the course's graphics file](/images/intro-to-r/pp01-q186.png)
    solution: |
      ```r
      data |>
        filter(!is.na(size)) |>
        group_by(size) |>
        summarize(mean_age = mean(age)) |>
        ggplot() +
        aes(x = size, y = mean_age) +
        geom_col(fill = "orange") +
        geom_text(aes(label = round(mean_age, 2)), vjust = -0.3) +
        theme(axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
  - id: "q187"
    title: "Q187"
    text: |
      Plot the distribution of price using a histogram, faceted by whether the car was a bad buy.

      ![Chart for question 187, from the course's graphics file](/images/intro-to-r/pp01-q187.png)
    solution: |
      ```r
      ggplot(data) +
        aes(x = price) +
        geom_histogram() +
        facet_wrap(~is_bad_buy)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "geom-histogram", "facet"]
  - id: "q188"
    title: "Q188"
    text: |
      Create a scatter plot of price versus odometer reading, colored by nationality. Remove cars with price equal to 0. Use alpha = 0.5 for transparency. Add the layer `scale_color_brewer(palette = 2)` to change the color palette.

      ![Chart for question 188, from the course's graphics file](/images/intro-to-r/pp01-q188.png)
    solution: |
      ```r
      data |>
        filter(price != 0, !is.na(nationality)) |>
        ggplot() +
        aes(x = odometer, y = price, color = nationality) +
        geom_point(alpha = 0.5) +
        scale_color_brewer(palette = 2)
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "ggplot2", "pipe-operator"]
  - id: "q189"
    title: "Q189"
    text: |
      Create a line plot showing trends of average odometer readings by nationality.

      ![Chart for question 189, from the course's graphics file](/images/intro-to-r/pp01-q189.png)
    solution: |
      ```r
      data |>
        filter(!is.na(nationality)) |>
        group_by(year_made, nationality) |>
        summarize(mean_odometer = mean(odometer), .groups = "drop") |>
        ggplot() +
        aes(x = year_made, y = mean_odometer, color = nationality) +
        geom_line()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["filter", "group-by", "summarize", "ggplot2", "pipe-operator"]
  - id: "q190"
    title: "Q190"
    text: |
      Plot the number of cars purchased each year using a line graph.

      ![Chart for question 190, from the course's graphics file](/images/intro-to-r/pp01-q190.png)
    solution: |
      ```r
      data |>
        count(year_made) |>
        ggplot() +
        aes(x = year_made, y = n) +
        geom_line()
      ```

      This code ran without errors in R. Compare your chart with the one in the question.

      *AI-written answer.*
    related_terms: ["ggplot2", "pipe-operator"]
---

# Final Assignment Question Pool (2024)

> Part of: [[Intro to R]]

> [!warning] All answers on this page are AI-written
> Moodle has **no official answers** for this pool. Every answer was written by AI and run in R on the course's full `kick.csv`.
>
> In the real assignment, each student received a different random sample and a random subset of these questions. **Your numbers would differ from the outputs here**, so use this page to practise the method.

## How the assignment worked

Students had 24 hours to solve their drawn questions in R and submit a Word file plus a script. Each answer needed the question, a verbal answer, the code, and its output or chart.

> [!note] Reading the code on this site
> The code font joins some symbols. A small triangle is the pipe: type a vertical bar, then a greater-than sign. The joined greater-or-equal sign is typed as a greater-than sign, then an equals sign.

## Setup used for every answer

The original `.RData` file was not opened. The answers use `kick.csv`, with its columns renamed to match the question wording. The column mapping is **inferred** from the course's data description.

```r
library(tidyverse)
theme_set(theme_minimal())

data <- read_csv("kick.csv") |>
  rename(year_made = veh_year,
         age = vehicle_age,
         odometer = veh_odo,
         state = vnst,
         cost = veh_b_cost,
         price = mmr_acquisition_auction_average_price)
```

Questions 1 to 150 are data questions. Questions 151 to 190 are charts, shown with the course's own example figure.
