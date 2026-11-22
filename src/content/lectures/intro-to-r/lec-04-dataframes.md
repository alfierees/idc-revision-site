---
title: "Lec 04: Dataframes"
semester: 2
year: 1
course: "Intro to R"
lecture: 4
tags:
  - intro-to-r
  - dataframe
  - observation
  - working-directory
  - read-csv
  - indexing
  - conditional-slicing
  - missing-value
  - write-csv
  - factor
subject: intro-to-r
in_scope: true
---

# Dataframes

> Part of: [[Intro to R]]
> Key concepts: [[Dataframe]], [[Observation]], [[Working Directory]], [[read.csv()]], [[Indexing]], [[Conditional Slicing]], [[Missing Value]], [[Factor]], [[write.csv()]]

Source: Moodle deck `lesson_4_dataframes_ENG.pdf` (36 slides).

## 1. Tabular data

Statistical data usually sits in a table:

- **Rows** are [[Observation|observations]].
- **Columns** are statistical variables, which are different from programming variables.

R stores tables in a [[Dataframe]]: a collection of equal-length, named [[Vector|vectors]]. Each column has one type, and rows can optionally have names.

## 2. Using a column

Built-in datasets such as `mtcars` are ready to use. Run `?mtcars` for its documentation. Access a column with `$`:

```r
mtcars$mpg
mtcars$mpg * 1.609 / 3.785   # miles per gallon to km per litre
```

A column behaves like a normal vector, so vectorised arithmetic works.

> [!example] Slide exercise: maximum power-to-weight ratio
> `hp` is horsepower and `wt` is thousands of lbs, with 1 lb = 0.454 kg.
> ```r
> max(mtcars$hp / (mtcars$wt * 1000 * 0.454))
> ```
> ```
> [1] 0.2066906
> ```
> This matches the answer on the slide.

## 3. Creating a dataframe

```r
fruits <- data.frame(
  fruit = c("Apple", "Banana", "Pear"),
  calories = c(95, 105, 102),
  vitamin_C = c(8.4, 10.3, 7.7)
)
```

```
   fruit calories vitamin_C
1  Apple       95       8.4
2 Banana      105      10.3
3   Pear      102       7.7
```

Argument names become column names. Existing vectors of the same length also work: `data.frame(fruit, calories, vitamin_C)`.

## 4. Working directory and reading files

The [[Working Directory]] is the folder where R looks for files.

| Command | What it does |
| --- | --- |
| `getwd()` | Prints the working directory |
| `dir()` | Lists its files |
| `Ctrl + Shift + H` | Chooses a new working directory |

Avoid non-Latin characters in file paths.

```r
read.table("students.txt", header = TRUE)
yad2 <- read.csv("yad2_cars.csv", header = TRUE, fileEncoding = "UTF-8-BOM")
```

- `read.table()` suits simple text files. Key arguments are `sep`, `header` and `na.strings`.
- [[read.csv()]] reads CSV files and has `header = TRUE` by default.
- `fileEncoding = "UTF-8-BOM"` fixes strange characters in the first column name.

> [!warning] Typo on the slide
> The slide's `read.csv` line is missing the closing quote after `yad2_cars.csv`. The version above is corrected.

An empty cell becomes [[Missing Value|`NA`]], meaning the value is unknown. Use `View(yad2)` for a spreadsheet-style view.

## 5. Accessing data

The examples use this `yad2` table:

```
   Maker        Model   Engine Displacement Previous_Owners  Price
1 Toyota Land Cruiser   Diesel         2755               1 371000
2  Volvo         XC90 Gasoline         1969               2 248000
3   Ford     Explorer Gasoline         3497               1 160000
4 Nissan   Pathfinder   Diesel         2488               3     NA
5    BMW           X5   Diesel         2993               1     NA
6 Toyota      Sequoia Gasoline         5763               3 162000
```

[[Indexing]] uses `[row, column]`:

```r
yad2$Maker             # one column as a vector
yad2[["Model"]]        # one column as a vector
yad2[3, 4]             # row 3, column 4: 3497
yad2[3, ]              # row 3, as a dataframe
yad2[ , 6]             # column 6, as a vector
yad2[3:5, ]            # rows 3 to 5
yad2[ , c(2, 6)]       # columns 2 and 6
yad2[1:2, c(1, 2, 6)]  # rows and columns together
yad2[c("Maker", "Model")]          # columns by name
yad2[c(1, 6), c("Maker", "Model")] # mix numbers and names
names(yad2)            # all column names
```

> [!tip] Keep the comma
> `yad2[3, ]` means row 3. Leaving out the comma changes the meaning.

### Conditional slicing

[[Conditional Slicing]] puts a logical vector in the row position and keeps rows where it is `TRUE`.

```r
yad2[yad2$Engine == "Gasoline", ]
yad2[yad2$Maker == "Toyota", ]
```

> [!example] Slide exercise: displacement over 2000 and fewer than 2 owners
> ```r
> keep_rows <- yad2$Displacement > 2000 & yad2$Previous_Owners < 2
> yad2[keep_rows, ]
> ```
> *AI-written answer, using the slide's tip to build the index outside the brackets.*

## 6. Changing a dataframe

```r
yad2[4, "Price"] <- 99000                       # change one value
yad2$km <- c(0, 84000, 153000, 265000, NA, 97600) # add a column
yad2$within_budget <- 0 + (yad2$Price <= 200000)  # logical to 0/1
yad2$km <- c(0, 84, 153, 265, NA, 98)             # overwrite a column
yad2$within_budget <- NULL                        # delete a column
```

Adding `0` is a short way to convert `TRUE`/`FALSE` to `1`/`0`. An `NA` input stays `NA`.

## 7. Factors for qualitative data

Numeric codes can hide the meaning of a category. Here 1 is front drive, 2 is rear drive and 3 is all-wheel drive:

```r
drive <- c(3, 1, 2, 2, 3, 1, 1)
drive_dict <- c("Front", "Rear", "AWD")
drive_dict[drive]                         # works only for codes 1, 2, 3
drive <- factor(drive, labels = drive_dict)
drive
```

```
[1] AWD   Front Rear  Rear  AWD   Front Front
Levels: Front Rear AWD
```

A [[Factor]] stores the allowed categories as **levels**, which also handles codes such as 88 or 99.

## 8. Writing files

```r
write.table(yad2, file = "Yad2.txt", row.names = FALSE, quote = FALSE)
write.csv(yad2, file = "cars_redacted.csv", row.names = FALSE)
```

`row.names = FALSE` stops R adding row numbers. See [[write.csv()]].

## Summary

- A [[Dataframe]] is a table of equal-length named vectors.
- Access data with `$`, `[[ ]]` or `[row, column]`.
- A single row stays a dataframe, while a single column becomes a vector.
- Use [[Factor|factors]] for categories and `NA` for unknown values.

## Related notes

- [[Intro to R]]
- [[Lec_03-Vectors]]
- [[Lec_05-Exploratory Data Analysis]]
