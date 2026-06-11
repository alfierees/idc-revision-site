---
title: "Lecture 2 — EDA & Data Visualization"
week: 2
semester: 2
course: Data Science
instructor: "Daniel Karalnik, Liam Tal"
tags:
  - data-science
  - pandas
  - EDA
  - visualization
  - dataframes
  - groupby
  - distributions
  - matplotlib
  - seaborn
subject: machine-learning
in_scope: true
---

# Lecture 2 — EDA & Data Visualization

> Part of: [[Data Science]]
> Previous: [[Lecture 1 - Introduction]] | Next: [[Lecture 3 - Classification, KNN, Random Tree]]
> Key concepts: [[DataFrame]], [[Exploratory Data Analysis]], [[Groupby]], [[Missing Values]], [[Outliers]], [[Histograms]], [[Boxplots]]

---

## 🎯 The Core Idea

**EDA = systematically summarising, visualising and interrogating a dataset before any modelling.** It's a doctor's checkup — you check vitals before prescribing treatment.

> [!info] Running case study
> *Sababa Market* — a Tel Aviv online marketplace, 200 orders over Jan–Mar 2026. Three CEO questions: (1) which category to double down on? (2) who are our best customers? (3) what should we worry about?

---

## 🐼 The Pandas Survival Kit

A **DataFrame** is a 2-D table (rows × columns) — an Excel spreadsheet that follows instructions.

| Command | What it does |
|---|---|
| `df.head()` / `df.tail()` | First/last rows — always peek first |
| `df.shape` | `(rows, cols)` |
| `df.columns`, `df.dtypes` | Column names and types |
| `df.info()` | Full health check — row counts, missing values, dtypes |
| `df.describe()` | Summary stats for numeric columns |
| `df["col"]` | Select one column |
| `df[df["col"] > x]` | Filter rows (boolean mask) |
| `df.sort_values("col")` | Sort |
| `df.iloc[i]` / `df.loc[label]` | Access by position / label |

```python
import pandas as pd
df = pd.read_csv("sababa_market.csv")
df.head()
df.info()
df.describe()
```

> [!tip] Non-negotiable first move
> Always run `.head()` then `.info()` on a new dataset. Two seconds that prevent two hours of bugs.

---

## 📊 Summary Statistics — Central Tendency & Spread

### The three measures of center

| Measure | Best for | Outlier-sensitive? |
|---|---|---|
| **Mean** $\bar{x} = \frac{1}{n}\sum x_i$ | Symmetric numeric data | Yes |
| **Median** (middle value) | Skewed numeric data | No |
| **Mode** (most frequent) | Categorical data | No |

> [!warning] The salary trap
> Startup claims "average salary \$213k." CEO earns \$2M, 9 staff earn \$15k each → **mean = \$213k, median = \$15k**. Always ask: mean or median? Skewed?

**Rule of thumb:** default to **median** for business metrics (revenue, salary, order value) — they're almost always right-skewed.

### Spread: standard deviation

$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

Small $s$ → homogeneous; large $s$ → volatile.

### Quartiles

$Q_1$ = 25th percentile, $Q_2$ = median, $Q_3$ = 75th percentile. `df["col"].quantile([0.25, 0.5, 0.75])`.

---

## 📈 Distributions — The Shape of the Data

A single number can't capture the full story. **Two products can have the same mean and completely different behaviour.**

### Common shapes

| Shape | Example | Use |
|---|---|---|
| **Normal** (bell) | Customer age, heights | Mean OK; 68/95 rule holds |
| **Right-skewed** | Revenue, income, order values | **Use median**; tail of big values |
| **Left-skewed** | Satisfaction scores | Most are happy, few unhappy |
| **Uniform** | Lottery numbers | Every value equally likely |

### Histogram

Groups numeric values into bins and shows counts.

```python
df["revenue"].hist(bins=20)
```

> [!warning] Bin size matters
> Too few bins hide patterns; too many show noise. Start with 10–20 and adjust.

### Skewness diagnostic

`df["revenue"].skew()` → positive = right tail; negative = left tail. If heavily skewed, **the mean is misleading** — report median.

---

## 🔪 Groupby — Split-Apply-Combine

> [!info] The pattern
> **Split** rows into groups by one or more columns → **Apply** an aggregation (mean/sum/count) → **Combine** back into a summary table.

```python
df.groupby("product_category")["revenue"].mean()
df.groupby("product_category")["revenue"].agg(["mean","median","count","sum"])
df.groupby(["city", "product_category"])["revenue"].mean()   # two-level
df["payment_method"].value_counts()                           # categorical groupby
```

| Pattern | Code | Question |
|---|---|---|
| Group + mean | `df.groupby("col").mean()` | Average per group |
| Group + sum | `df.groupby("col").sum()` | Total per group |
| Group + count | `df.groupby("col").count()` | How many per group |
| Multi-agg | `.agg([...])` | Multiple stats at once |
| Two-level | `df.groupby([a,b])` | Drill down |

**Averages hide differences.** Groupby reveals that Electronics has 4× Fashion's mean revenue despite fewer orders — different strategic implication per view.

---

## 🧹 Missing Values, Duplicates, Outliers

### Missing (`NaN`)

`NaN ≠ 0`. Missing means **unknown**, not zero. Three types:

- **Random** — sensor glitch, unrelated to the data.
- **Systematic** — unhappy customers skip the rating → dropping them inflates your average. **Most dangerous.**
- **Structural** — field doesn't apply to those rows.

```python
df.isnull().sum()                              # counts per column
(df.isnull().sum() / len(df)) * 100            # percentages

df_clean = df.dropna(subset=["rating"])        # drop rows
df["age"].fillna(df["age"].median(), inplace=True)  # fill with median
# Or add an is_missing flag column
```

### Duplicates

```python
df.duplicated().sum()
df.drop_duplicates(inplace=True)
```

### Outliers — the IQR rule

$$x < Q_1 - 1.5\,\text{IQR} \quad \text{or} \quad x > Q_3 + 1.5\,\text{IQR}$$

where $\text{IQR} = Q_3 - Q_1$. Visualise with a **boxplot**:

```python
df["revenue"].plot(kind="box")
```

> [!tip] Don't just delete outliers
> A \$18,000 order in a \$100–\$3,000 dataset is suspicious, but it might be your biggest customer. **Investigate before removing.**

---

## 📉 The Six Chart Types

| Chart | Purpose | X | Y |
|---|---|---|---|
| **Bar** | Compare categories | Categories | Values |
| **Line** | Trend over time | Time | Values |
| **Scatter** | Relationship between 2 numerics | Numeric | Numeric |
| **Histogram** | Distribution of 1 variable | Value bins | Frequency |
| **Boxplot** | Spread + outliers (across groups) | Categories | Values |
| **Heatmap** | Correlations / intensity | Variables | Variables |

```python
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_style("whitegrid")

df.groupby("product_category")["revenue"].sum().plot(kind="bar")
df.groupby("date")["revenue"].sum().plot(kind="line", marker="o")
plt.scatter(df["customer_age"], df["revenue"], alpha=0.5)
df["revenue"].hist(bins=20)
sns.boxplot(x="product_category", y="revenue", data=df)
sns.heatmap(df[numeric_cols].corr(), annot=True, cmap="coolwarm", vmin=-1, vmax=1)
```

### Decision framework

- Compare categories → **bar**
- Trend over time → **line**
- Relationship between two numerics → **scatter**
- Distribution of one variable → **histogram**
- Spread + outliers across groups → **boxplot**
- Many-variable correlations → **heatmap**

> [!warning] Common mistake
> Don't connect categorical data with a line. "Revenue by city" has no natural order — use a **bar chart**, not a line.

---

## 🎯 Anscombe's Quartet — Always Plot

Four datasets with **identical** mean, variance, correlation, and regression line — but completely different shapes. One is linear, one curved, one an outlier-driven line, one is fake correlation from a single leverage point.

> [!success] The lesson
> Summary statistics alone are **never** enough. Always visualise.

---

## ⚠️ Misleading Charts — the Bad-Chart Gallery

1. **Truncated Y-axis** — starting a bar chart Y-axis at \$180K instead of \$0 makes 5% growth look like 400% growth. **Always start bar charts at 0.**
2. **3D pie chart** — distorts proportions by perspective. Replace with a horizontal bar chart.
3. **Cherry-picked date range** — showing only the recent dip hides a year of growth. Show enough context.
4. **Dual Y-axes** — independently scaling two series lets you manipulate the apparent relationship.

### The chart audit checklist

- Headline states the **finding**, not just the topic
- Labelled axes with units
- Y-axis starts at 0 (bar charts)
- Legend if multiple series
- Sufficient date range (no cherry-picking)
- One message per chart
- Colourblind-friendly palette

---

## 🗣️ Visual Storytelling

A chart is **evidence**; the story is what you build around it.

### Title vs. headline

- ❌ **"Revenue by Month"** — describes the chart.
- ✅ **"Revenue Peaked in July — Then Collapsed 40%"** — tells the story.

### Colour principles

- **Highlight** — bold colour for the key point; grey for everything else.
- **Group** — same colour = same category, consistent across charts.
- **Don't decorate** — rainbow for its own sake adds noise.

### Story structure

$$\text{Question} \;\to\; \text{Evidence} \;\to\; \text{Recommendation}$$

Same structure as setup → conflict → resolution in film. Always end with the action — stakeholders don't want to figure out implications.

### The 5-second test

Show someone your chart for 5 seconds. If they can state the finding, it works. If not, redesign.

---

## 🎯 Summary — The EDA Workflow

The reusable checklist for **any** new dataset:

1. **Load & inspect** — `head`, `info`, `shape`.
2. **Check types** — classify each column (numeric / categorical / datetime).
3. **Summary stats** — `describe`; mean vs. median to flag skew.
4. **Check quality** — missing values, duplicates, outliers.
5. **Visualise** — histograms for shape, groupby + bars for segments, scatters/heatmaps for relationships.
6. **Hypothesise** — form business questions from the patterns.

---

## 📎 Related Notes

- Previous: [[Lecture 1 - Introduction]]
- Next: [[Lecture 3 - Classification, KNN, Random Tree]]
- Foundational: [[DataFrame]], [[Pandas]], [[Matplotlib]], [[Seaborn]]
- Related: [[Summary Statistics]], [[Distributions]], [[Correlation vs Causation]]
