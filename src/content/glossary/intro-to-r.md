---
title: Intro to R Concepts
description: Single glossary of every concept used across the Intro to R notes, grouped by topic.
tags:
  - meta
  - glossary
  - index
  - intro-to-r
aliases:
  - Intro to R Glossary
subject: intro-to-r
in_scope: true
---

# Intro to R Concepts

> One-stop glossary for Intro to R (Year 1, Semester 2). Each entry gives a one-line definition and the note where it is taught. Link tracker: [[_Wiki-Link Registry]]. Subject hub: [[Intro to R]].

## Data types

### Data Type
The category of value R stores: numeric, character, logical or factor. → [[Lec_01-Data Types in R|Lec 01]]

### Numeric
The data type for numbers. → [[Lec_01-Data Types in R|Lec 01]]

### Character
The data type for text, written as strings in quotes. → [[Lec_01-Data Types in R|Lec 01]]

### Logical
The Boolean data type with values `TRUE` and `FALSE`. → [[Lec_01-Data Types in R|Lec 01]]

### Factor
The data type for categorical data, such as named groups. → [[Lec_01-Data Types in R|Lec 01]]

### Type Coercion
Converting a value from one type to another, e.g. `as.numeric(TRUE)` is 1; R also does it silently when types are mixed. Also in [[Lec_03-Vectors|Lec 03]]. → [[Lec_01-Data Types in R|Lec 01]]

### paste()
Joins strings into one, separated by a space by default. → [[Lec_01-Data Types in R|Lec 01]]

## Variables and assignment

### Variable
A name that points to a stored value in R. → [[Lec_02-Variables and Assignment|Lec 02]]

### Assignment Operator
`<-`, which stores the value on its right under the name on its left. → [[Lec_02-Variables and Assignment|Lec 02]]

### Expression Evaluation
R computes an expression's value once, when it runs; a stored result does not update if its inputs change later. → [[Lec_02-Variables and Assignment|Lec 02]]

### Body Mass Index
Weight in kg divided by height in m squared, used as the worked example. → [[Lec_02-Variables and Assignment|Lec 02]]

## Vectors

### Vector
An ordered sequence of elements of one type. → [[Lec_03-Vectors|Lec 03]]

### Colon Operator
`a:b` builds the sequence of whole numbers from a to b. → [[Lec_03-Vectors|Lec 03]]

### Vectorised Operation
An operation applied to every element of a vector at once, without a loop, e.g. `x+2`. → [[Lec_03-Vectors|Lec 03]]

### c() Function
Concatenates values or vectors into one longer vector, coercing mixed types to a single type. → [[Lec_03-Vectors|Lec 03]]

## Working in the R session

### R Environment
The session workspace that holds variables, so a script can use values left over from earlier scripts. → [[Lec_01-Data Types in R|Lec 01]]

### rm()
Deletes a variable from the R environment. → [[Lec_01-Data Types in R|Lec 01]]

### sample()
Draws values at random, so the output varies on every run. → [[Lec_01-Data Types in R|Lec 01]]

## Getting started

### RStudio
The editor used to write and run R, built specifically for R. → [[Lec_00-Installing R and RStudio|Lec 00]]

### Console
The RStudio pane that runs one command at a time after the `>` prompt. → [[Lec_00-Installing R and RStudio|Lec 00]]

### Script Editor
The RStudio pane for writing and saving longer `.R` scripts. → [[Lec_00-Installing R and RStudio|Lec 00]]

### Operator Precedence
The rules for which operation R runs first when an expression has several. → [[Lec_00-Installing R and RStudio|Lec 00]]

### Modulo Operator
`%%` returns the remainder after division, so `7 %% 2` is 1. → [[Lec_00-Installing R and RStudio|Lec 00]]

## Dataframes

### Dataframe
R's table object: a collection of equal-length, named vectors, one per column. → [[Lec_04-Dataframes|Lec 04]]

### Observation
One row of a data table. → [[Lec_04-Dataframes|Lec 04]]

### Working Directory
The folder where R looks for files and saves them by default. → [[Lec_04-Dataframes|Lec 04]]

### read.csv()
Reads a comma-separated file into a dataframe, with `header = TRUE` by default. → [[Lec_04-Dataframes|Lec 04]]

### Indexing
Accessing parts of an object by position or name, as in `data[row, column]`. → [[Lec_04-Dataframes|Lec 04]]

### Conditional Slicing
Keeping dataframe rows by placing a logical vector in the row position. → [[Lec_04-Dataframes|Lec 04]]

### Missing Value
`NA`, R's marker for an unknown value. → [[Lec_04-Dataframes|Lec 04]]

### write.csv()
Saves a dataframe to a CSV file. → [[Lec_04-Dataframes|Lec 04]]

## Exploring data

### Exploratory Data Analysis
Summarising and inspecting data to understand it before formal analysis. → [[Lec_05-Exploratory Data Analysis|Lec 05]]

### head() and tail()
`head()` shows the first rows of an object and `tail()` shows the last. The default is 6. → [[Lec_05-Exploratory Data Analysis|Lec 05]]

### str()
Shows the structure of an object, including each column's type and first values. → [[Lec_05-Exploratory Data Analysis|Lec 05]]

### ifelse()
Returns one value where a condition is `TRUE` and another where it is `FALSE`. → [[Lec_05-Exploratory Data Analysis|Lec 05]]

### Frequency Table
A count of how many times each value appears, created with `table()`. → [[Lec_05-Exploratory Data Analysis|Lec 05]]

## Packages

### Package
A bundle of R code and data that adds functionality. → [[Lec_06-Packages|Lec 06]]

### CRAN
The Comprehensive R Archive Network, the main repository of R packages. → [[Lec_06-Packages|Lec 06]]

### library()
Loads an installed package so its contents can be used. → [[Lec_06-Packages|Lec 06]]

### Double Colon Operator
`package::name` accesses one item from a package without loading the package. → [[Lec_06-Packages|Lec 06]]

### describe()
A `psych` function that returns a full statistical summary of each column. → [[Lec_06-Packages|Lec 06]]

### clean_names()
A `janitor` function that converts messy column names to a consistent style. → [[Lec_06-Packages|Lec 06]]

## Pipes and dplyr

### Pipe Operator
`|>` passes the value on its left into the first argument of the function on its right. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### dplyr
The tidyverse package for data manipulation, built around verbs such as `filter()` and `summarize()`. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### tidyverse
A meta package: a bundle of packages, including dplyr and ggplot2, designed to work together. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### Tibble
The tidyverse version of a dataframe, with neater printing. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### select()
A dplyr verb that chooses, renames or drops **columns**. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### filter()
A dplyr verb that keeps the **rows** meeting one or more conditions. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### Package Collision
When two loaded packages share a function name and the later package hides the earlier one. → [[Lec_07-Pipes and dplyr Basics|Lec 07]]

### arrange()
A dplyr verb that sorts rows by one or more columns. → [[Lec_08-More dplyr|Lec 08]]

### mutate()
A dplyr verb that creates or changes columns. → [[Lec_08-More dplyr|Lec 08]]

### summarize()
A dplyr verb that reduces columns to summary statistics. → [[Lec_08-More dplyr|Lec 08]]

### group_by()
Groups rows so later operations run separately for each group. → [[Lec_08-More dplyr|Lec 08]]

### pull()
Extracts one dataframe column as a plain vector. → [[Lec_08-More dplyr|Lec 08]]

### slice()
Keeps rows by their position. → [[Lec_08-More dplyr|Lec 08]]

## Graphics with ggplot2

### ggplot2
R's main plotting package, based on the [[Grammar of Graphics]]. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### Grammar of Graphics
A system that describes a figure as layers such as data, aesthetics and geoms. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### Aesthetic Mapping
The link between data columns and visual properties such as x, y, color and size. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### Geom
The geometric shape used to draw data, such as points, lines or bars. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### geom_bar()
Draws bars whose heights are counts of a categorical `x`. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### geom_histogram()
Draws the distribution of a numeric variable using bins. → [[Lec_09-ggplot2 Foundations|Lec 09]]

### geom_col()
Draws bars whose heights come from a `y` value you supply. → [[Lec_10-Advanced ggplot2|Lec 10]]

### Facet
A panel in a figure split by the levels of a discrete variable. → [[Lec_10-Advanced ggplot2|Lec 10]]

### geom_smooth()
Adds a trend line, by default LOESS or GAM depending on the data size. → [[Lec_10-Advanced ggplot2|Lec 10]]

### ggplot Theme
The non-data styling of a plot, such as fonts, grid lines and background. → [[Lec_10-Advanced ggplot2|Lec 10]]

### coord_flip()
Swaps the x and y axes of a plot. → [[Lec_10-Advanced ggplot2|Lec 10]]

## Probability and simulation

### Probability Function
Gives $P(X = x)$ for a discrete variable or the density for a continuous one. R's prefix is `d`. → [[Lec_11-Probability and Random Numbers|Lec 11]]

### Distribution Function
Gives $P(X \le x)$, the cumulative probability. R's prefix is `p`. → [[Lec_11-Probability and Random Numbers|Lec 11]]

### Quantile Function
Takes a probability and returns the matching value of the variable. R's prefix is `q`. → [[Lec_11-Probability and Random Numbers|Lec 11]]

### Pseudo-Random Numbers
Numbers produced by a deterministic algorithm that pass tests of randomness. → [[Lec_11-Probability and Random Numbers|Lec 11]]

### Random Seed
The starting value of a random number generator, which determines the whole series. → [[Lec_11-Probability and Random Numbers|Lec 11]]

### Monte Carlo Simulation
Solving a problem by repeated random sampling. → [[Lec_11-Probability and Random Numbers|Lec 11]]

## Aliases & Shorthands

### Coercion
See [[#Type Coercion]].
