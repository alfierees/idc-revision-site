---
title: "Chart Gallery"
subject: intro-to-r
type: reference
description: "The course's own target charts from the question pool and the 2025 sample test, grouped by geom, each with the question and code written to match the picture: bars of counts, columns of computed values, top-10 and sorted bars, labels on bars, histograms and densities with facets, scatter plots with regression lines and colour, lines over years with a reference line, and boxplots."
course: Intro to R
semester: 2
year: 1
order: 7
tags:
  - intro-to-r
  - exam-prep
  - ggplot2
---

> Every chart question shows a picture and asks you to reproduce it. Name the geom first, then match the details: colours, labels, ordering, titles. The full set of 40 pool charts is in the [[PP01|2024 question pool]]; the geom counts are on the [[Past Paper Topic Map]], and the routine is play H of the [[Exam Question Playbook]].
>
> The course's pictures usually carry more than the question's wording: a title, axis labels, a fill colour, labels on bars. The code below adds those details so it matches the picture. R was not run for this page, so compare your own output with the picture.

## How to read a target chart

| You see | It is | Data step first? |
|---|---|---|
| Bars, y axis says "count" | `geom_bar()`, or `count()` then `geom_col()` | No for `geom_bar` |
| Bars of a mean, median or total | `geom_col()` | Yes: `group_by` then `summarize` |
| Touching bars over a number line | `geom_histogram()` | No |
| A smooth hill | `geom_density()` | No |
| A cloud of dots | `geom_point()` or `geom_jitter()` | No |
| A line joining one point per year | `geom_line()` | Yes: one row per year |
| Boxes with whiskers | `geom_boxplot()` | No |
| Several small panels | `+ facet_wrap(~ var)` | — |
| A legend | `aes(color = var)` or `aes(fill = var)` | — |
| Bars running sideways | swap `x` and `y`, or `+ coord_flip()` | — |

## 1. Counts

**Pool Q153.** "Generate a bar plot of car age counts." The picture labels each bar with its count, so make the counts first with `count()` and draw them with `geom_col()`.

![Bar chart of car age counts with labels](/images/intro-to-r/pp01-q153.png)

```r
data |>
  count(age) |>
  ggplot() +
  aes(x = age, y = n) +
  geom_col() +
  geom_label(aes(label = n), vjust = -0.2) +
  scale_x_continuous(breaks = 0:9) +
  labs(title = "Car Age Counts", x = "Age (years)", y = "Count")
```

**Pool Q165.** Bad buys for six colours. Filter the rows first, then let `geom_bar` count them; the red is fixed, so it goes outside `aes()`.

![Red bars of bad buys by colour](/images/intro-to-r/pp01-q165.png)

```r
data |>
  filter(is_bad_buy == 1, color %in% c("BLACK", "BLUE", "GOLD", "GREY", "SILVER", "WHITE")) |>
  ggplot() +
  aes(x = color) +
  geom_bar(fill = "red") +
  labs(title = "Number of Bad Buys by Car Color", x = "Color", y = "Count") +
  theme(axis.text.x = element_text(angle = 90))
```

## 2. A value per category: `geom_col`

**Pool Q175.** Average odometer by colour, with a line at the overall average.

![Gold columns of average odometer by colour with a black reference line](/images/intro-to-r/pp01-q175.png)

```r
data |>
  filter(!is.na(color)) |>
  group_by(color) |>
  summarize(mean_odometer = mean(odometer)) |>
  ggplot() +
  aes(x = color, y = mean_odometer) +
  geom_col(fill = "gold") +
  geom_hline(yintercept = mean(data$odometer), linewidth = 1) +
  labs(title = "Average Odometer Reading by Car Color", x = "Color", y = "Average Odometer Reading") +
  theme(axis.text.x = element_text(angle = 90))
```

### Top 10: check whether the picture sorts them

**Pool Q155.** The ten most common makes. `count(sort = TRUE) |> head(10)` picks them, but look at the picture: the bars are in **alphabetical** order, which is what ggplot does with a text axis. So no `reorder` here.

![Red columns of the top 10 makes in alphabetical order](/images/intro-to-r/pp01-q155.png)

```r
data |>
  count(make, sort = TRUE) |>
  head(10) |>
  ggplot() +
  aes(x = make, y = n) +
  geom_col(fill = "red") +
  labs(title = "Count of Cars by Manufacturer", x = "Manufacturer", y = "Count") +
  theme(axis.text.x = element_text(angle = 90))
```

### Sorted and sideways

**Pool Q180.** "Arrange the bars in descending order of count." The picture is sideways, purple and labelled, with the biggest bar at the bottom. Put the category on `y`; `reorder(size, -n)` makes the largest the first level, and the first level sits at the bottom.

![Purple sideways bars of car sizes sorted by count](/images/intro-to-r/pp01-q180.png)

```r
data |>
  filter(!is.na(size)) |>
  count(size) |>
  ggplot() +
  aes(x = n, y = reorder(size, -n)) +
  geom_col(fill = "purple") +
  geom_label(aes(label = n), hjust = 0) +
  labs(title = "Number of Cars by Size", x = "Count", y = "Size")
```

### Labels on the bars

**Pool Q186.** Average age by size, orange bars, values on top. The colour is fixed, so it goes **outside** `aes()`; the label comes from the data, so it goes **inside**.

![Orange columns of average age by size with labels](/images/intro-to-r/pp01-q186.png)

```r
data |>
  filter(!is.na(size)) |>
  group_by(size) |>
  summarize(mean_age = mean(age)) |>
  ggplot() +
  aes(x = size, y = mean_age) +
  geom_col(fill = "orange") +
  geom_label(aes(label = round(mean_age, 1)), vjust = -0.2) +
  labs(title = "Average Car Age by Size", x = "Size", y = "Average Age") +
  theme(axis.text.x = element_text(angle = 90))
```

**2025 sample Q16** adds the number of houses at the foot of each bar with `geom_label(aes(y = 0, label = n_houses))`.

![Average sale price by house style with value labels and counts](/images/intro-to-r/pp02-q16.png)

```r
ames |>
  group_by(house_style) |>
  summarize(avg_price = mean(sale_price), n_houses = n()) |>
  ggplot() +
  aes(x = house_style, y = avg_price) +
  geom_col(fill = "steelblue") +
  geom_text(aes(label = round(avg_price)), vjust = -0.3, size = 3) +
  geom_label(aes(y = 0, label = n_houses), size = 2.5) +
  labs(title = "Average Sale Price and House Counts by House Style",
       x = NULL, y = "Average Sale Price (USD)") +
  theme(plot.title = element_text(size = 16, hjust = 0.5),
        axis.text.x = element_text(angle = 45))
```

## 3. Distributions: histograms and densities

**Pool Q151.** Wide blue bars with black outlines: `fill` is the inside, `color` the outline. Few, wide bars means a large `binwidth` (or a small `bins`).

![Blue histogram of odometer readings](/images/intro-to-r/pp01-q151.png)

```r
ggplot(data) +
  aes(x = odometer) +
  geom_histogram(binwidth = 10000, fill = "blue", color = "black") +
  labs(title = "Distribution of Odometer Readings", x = "Odometer Reading", y = "Count")
```

**Pool Q187.** Price, a panel per bad-buy value.

![Histograms of price, one panel per bad-buy value](/images/intro-to-r/pp01-q187.png)

```r
ggplot(data) +
  aes(x = price) +
  geom_histogram(fill = "pink", color = "black") +
  facet_wrap(~ is_bad_buy) +
  labs(title = "Distribution of Price Average by Bad Buy Status", x = "Price Average", y = "Count")
```

**Pool Q174.** Look at the y axes: the left panel goes to 12,000 and the right to about 300. Each panel has its own scale, which is `scales = "free_y"`.

![Histograms of price by online sale, each panel with its own y scale](/images/intro-to-r/pp01-q174.png)

```r
ggplot(data) +
  aes(x = price) +
  geom_histogram(fill = "blue", color = "black") +
  facet_wrap(~ is_online_sale, scales = "free_y") +
  labs(title = "Distribution of Price Average by Online Sale Status", x = "Price Average", y = "Count")
```

**Pool Q185.** Densities for four makes, filled by make, see-through, no legend.

![Density of odometer for four makes, one panel each](/images/intro-to-r/pp01-q185.png)

```r
data |>
  filter(make %in% c("FORD", "NISSAN", "HONDA", "CHEVROLET")) |>
  ggplot() +
  aes(x = odometer, fill = make) +
  geom_density(alpha = 0.3) +
  facet_wrap(~ make) +
  theme(legend.position = "none") +
  labs(title = "Density Plot of Odometer Reading by Car Make", x = "Odometer Reading", y = "Density")
```

## 4. Two numbers: `geom_point`

**Pool Q152.** Cost against odometer, a panel per manufacturer group, red regression lines. `alpha` thins out the dense cloud.

![Scatter of cost against odometer, faceted, with red regression lines](/images/intro-to-r/pp01-q152.png)

```r
ggplot(data) +
  aes(x = odometer, y = cost) +
  geom_point(alpha = 0.1) +
  geom_smooth(method = "lm", color = "red", se = FALSE) +
  facet_wrap(~ top_three_american_name) +
  labs(title = "Cost vs Odometer Reading", x = "Odometer Reading", y = "Cost")
```

**Pool Q161** is the same idea faceted by size, with a dollar axis: `scale_y_continuous(labels = scales::dollar)`.

![Scatter faceted by size with a dollar axis](/images/intro-to-r/pp01-q161.png)

**Pool Q164.** Age only takes whole numbers, so plain points pile up in columns. `geom_jitter` spreads them sideways; the blue line is a straight regression line.

![Jittered scatter of price against age with a regression line](/images/intro-to-r/pp01-q164.png)

```r
ggplot(data) +
  aes(x = age, y = price) +
  geom_jitter() +
  geom_smooth(method = "lm", se = FALSE) +
  scale_x_continuous(breaks = 0:9) +
  labs(title = "Price vs Age", x = "Age", y = "Price Average")
```

**Pool Q188.** Colour by a group means a legend, so `color` goes inside `aes()`.

![Scatter of price against odometer coloured by nationality](/images/intro-to-r/pp01-q188.png)

```r
data |>
  filter(price != 0, !is.na(nationality)) |>
  ggplot() +
  aes(x = odometer, y = price, color = nationality) +
  geom_point(alpha = 0.5) +
  scale_color_brewer(palette = 2) +
  labs(title = "Price Average vs Odometer Reading", x = "Odometer Reading", y = "Price Average")
```

**2025 sample Q13.** Top-quality houses in red, a blue regression line, a panel per neighbourhood and no legend. Make a TRUE/FALSE column, colour by it, and pick the colours with `scale_color_manual`.

![Scatter faceted by neighbourhood with high quality in red](/images/intro-to-r/pp02-q13.png)

```r
ames |>
  mutate(high_quality = overall_qual >= 9) |>
  ggplot() +
  aes(x = gr_liv_area, y = sale_price) +
  geom_point(aes(color = high_quality), alpha = 0.6) +
  geom_smooth(method = "lm", color = "blue", se = FALSE) +
  scale_color_manual(values = c("FALSE" = "black", "TRUE" = "red")) +
  facet_wrap(~ neighborhood) +
  theme(legend.position = "none")
```

## 5. Over time: `geom_line`

**Pool Q170.** The average cost per year as a line with points, and a dashed line at the overall average. Summarise per year first, or the line zigzags through every car.

![Average cost by year with a dashed overall average](/images/intro-to-r/pp01-q170.png)

```r
data |>
  group_by(year_made) |>
  summarize(mean_cost = mean(cost, na.rm = TRUE)) |>
  ggplot() +
  aes(x = year_made, y = mean_cost) +
  geom_line() +
  geom_point() +
  geom_hline(yintercept = mean(data$cost, na.rm = TRUE), linetype = "dashed") +
  scale_x_continuous(breaks = 2001:2010) +
  labs(title = "Average Cost of Cars by Year Made", x = "Year Made", y = "Average Cost")
```

**Pool Q159.** One line per group: group by year **and** the group, then `color = group`.

![Average odometer by year, one line per manufacturer group](/images/intro-to-r/pp01-q159.png)

```r
data |>
  filter(!is.na(top_three_american_name)) |>
  group_by(year_made, top_three_american_name) |>
  summarize(mean_odometer = mean(odometer), .groups = "drop") |>
  ggplot() +
  aes(x = year_made, y = mean_odometer, color = top_three_american_name) +
  geom_line() +
  labs(title = "Average Odometer Reading by Year Made", x = "Year Made", y = "Average Odometer Reading")
```

**2025 sample Q14.** Median price per decade, point size by the number of houses, a tick every 10 years and a dashed line at the overall median. The full code is play H of the [[Exam Question Playbook]].

![Median sale price by decade built](/images/intro-to-r/pp02-q14.png)

## 6. Spread: `geom_boxplot`

**Pool Q171.** Odometer per manufacturer group, yellow boxes.

![Yellow boxplots of odometer by manufacturer group](/images/intro-to-r/pp01-q171.png)

```r
data |>
  filter(!is.na(top_three_american_name)) |>
  ggplot() +
  aes(x = top_three_american_name, y = odometer) +
  geom_boxplot(fill = "yellow") +
  labs(title = "Odometer Readings by Top Three American Name",
       x = "Top Three American Name", y = "Odometer Reading")
```

**2025 sample Q12.** Boxes ordered by median, a dashed red median line, slanted labels and a centred title of size 16. `reorder(house_style, sale_price, median)` does the ordering.

![Boxplots of sale price by house style ordered by median](/images/intro-to-r/pp02-q12.png)

```r
theme_set(theme_minimal())
overall_median <- median(ames$sale_price)
ames |>
  ggplot() +
  aes(x = reorder(house_style, sale_price, median), y = sale_price) +
  geom_boxplot() +
  geom_hline(yintercept = overall_median, color = "red", linetype = "dashed") +
  labs(title = "Sale Price by House Style", x = "House Style", y = "Sale Price") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1),
        plot.title = element_text(size = 16, hjust = 0.5))
```
