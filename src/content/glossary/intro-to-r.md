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

## Aliases & Shorthands

### Coercion
See [[#Type Coercion]].
