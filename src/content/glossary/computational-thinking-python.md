---
title: Python Concepts
description: Single glossary of every concept used across the Computational Thinking & Python notes, grouped by topic.
tags:
  - meta
  - glossary
  - index
  - computational-thinking-python
aliases:
  - Python Glossary
subject: computational-thinking-python
in_scope: true
---

# Python Concepts

> One-stop glossary for Computational Thinking & Python (Year 1, Semester 1). Each entry gives a one-line definition and the note where it is taught. Link tracker: [[_Wiki-Link Registry]]. Subject hub: [[Computational Thinking & Python]].

## Course Foundations and Program Basics

### Computational Thinking
Breaking a problem into steps that a computer can execute. → [[Lec_00-Course Introduction|Lec 00]]

### Python
The programming language taught throughout the course, chosen as popular, intuitive, library-rich and the main language of data science. → [[Lec_00-Course Introduction|Lec 00]]

### Think Python
The course textbook by Allen B. Downey; each weekly session is paired with one of its chapters. → [[Lec_00-Course Introduction|Lec 00]]

### Course Schedule
The 13 weekly sessions, each mapped to a Think Python chapter and, for the first eight, a practical assignment. → [[Lec_00-Course Introduction|Lec 00]]

### Data Structure
An organised way of holding data, such as a list or a dictionary. → [[Lec_00-Course Introduction|Lec 00]]

### Programming Language
A formal language with strict syntax used to instruct a computer, unlike a human language. → [[Lec_01-Hello World|Lec 01]]

### Machine Code
The low-level language the hardware understands directly. → [[Lec_01-Hello World|Lec 01]]

### Interpreter
A program that translates and runs source code line by line; Python is run this way. → [[Lec_01-Hello World|Lec 01]]

### Compiler
A program that translates the whole source into machine code before it runs. → [[Lec_01-Hello World|Lec 01]]

### Bytecode
The intermediate form Java compiles to before it is interpreted. → [[Lec_01-Hello World|Lec 01]]

### IDE
An integrated development environment: an editor plus tools for writing and running code. → [[Lec_01-Hello World|Lec 01]]

### Pseudo Code
A plain-language outline of a solution, written before the real code. → [[Lec_01-Hello World|Lec 01]]

### Bug
An error in a program; the term comes from a moth found in the Mark II computer in 1947. → [[Lec_01-Hello World|Lec 01]]

### Robustness
A program's ability to handle bad or unexpected input sensibly. → [[Lec_01-Hello World|Lec 01]]

### Variable
A name that refers to a value. → [[Lec_01-Hello World|Lec 01]]

### Assignment
A statement that creates or rebinds a variable using `=`. → [[Lec_01-Hello World|Lec 01]]

### Type Casting
Explicitly converting a value between types such as `int`, `float` and `str`. → [[Lec_01-Hello World|Lec 01]]

## Numbers, Booleans and Strings

### Literal
Text that Python recognises as a direct way to write a value, such as `2000` or `"hi"`. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Operator and Operand
An operator is a symbol that performs an operation; the operands are the values it acts on. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Integer
A whole number (`int`); unbounded in size in Python 3. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Float
A decimal number (`float`) with limited range and precision. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Arithmetic Operators
The numeric operators `+`, `-`, `*`, `/`, `**`, floor division `//` (quotient rounded towards negative infinity) and modulus `%` (remainder). → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Operator Precedence
The order in which operators in an expression are evaluated; `**` groups right to left. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Boolean
The type with only `True` or `False`; they behave as 1 and 0, though the lecture advises against using them in arithmetic. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Xor
Exclusive or: true exactly when the two inputs differ. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Comparison Operators
`==`, `!=`, `<`, `>`, `<=` and `>=`, which return a bool. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Coercion
Implicit conversion of a value to another type during an operation, for example int to float. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### String
A sequence of characters in quotes. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Empty String
The string `""` of length 0. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### String Indexing
Reading one character with `s[i]`, zero-based, with negative indices counting from the end. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### String Slicing
Taking a substring with `s[n:m]`, which includes position n and excludes m. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### ASCII and Unicode
Numeric codes for characters, used by `ord`, `chr` and string comparison. → [[Lec_02-Numeric Values and Strings|Lec 02]]

### Substring Test
The `in` operator applied to strings: checks whether one string occurs inside another. → [[Lec_02-Numeric Values and Strings|Lec 02]]

## Conditions and Loops

### Conditional Statement
Code that runs a block only if a condition holds. → [[Lec_03-Conditions and While Loops|Lec 03]]

### If-Else Statement
Runs one block if the condition is True and the other block otherwise. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Elif
"Else if": a chain of conditions in which only the first true branch runs. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Conditional Expression
The one-line form `a if cond else b`, which gives a value. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Short-Circuit Evaluation
`and` and `or` stop as soon as the result is known, so the left side can guard the right. → [[Lec_03-Conditions and While Loops|Lec 03]]

### While Loop
Repeats its body while the condition is true, testing before each pass; used when the number of repeats is unknown. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Infinite Loop
A loop whose condition never becomes false. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Break and Continue
`break` leaves the nearest loop; `continue` skips to the next iteration. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Nested Loop
A loop inside a loop: the inner loop runs fully on every pass of the outer one, so iterations multiply. → [[Lec_03-Conditions and While Loops|Lec 03]]

### Floating-Point Error
Decimals are stored inexactly, so for example repeated addition of 0.1 drifts and a `!=` test in a loop may never match. → [[Lec_03-Conditions and While Loops|Lec 03]]

### For Loop
Runs the body once for each element of an iterable. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### Range
A lazy sequence of integers, `range(from, to, step)`, with the end exclusive. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

## Lists and Tuples

### List
An ordered, mutable sequence of elements in square brackets. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### Mutability
An object can be changed in place after creation; lists are mutable. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### Indexing
Access to a list element by its 0-based position, `L[i]`, or `L[a][b]` for nested lists. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### Slicing
Taking or assigning a range of a list with `L[a:b]`; assigning to a slice can resize the list. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### Nested List
A list that contains lists. → [[Lec_04-Lists, For Loops and Ranges|Lec 04]]

### List Comprehension
The form `[expr for x in iterable if cond]`, which builds a new list from an iterable. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Zip
Pairs up elements of several sequences position by position, stopping at the shortest. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Enumerate
Yields (index, element) pairs while looping. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Any and All
`any` is true if at least one item is true; `all` is true only if every item is true (and `all` of an empty sequence is True). → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Tuple
An ordered, immutable collection; the comma makes it, so `(1,)` is a tuple but `(1)` is an int. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Immutability
An object cannot be changed after creation; "changing" a tuple means building a new one. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

### Parallel Assignment
Assigning several names at once by tuple unpacking, for example `a, b = b, a`. → [[Lec_05-List Comprehension and Tuples|Lec 05]]

## Functions

### Function
A named, reusable block of statements that takes arguments and returns a value. → [[Lec_06-Functions|Lec 06]]

### Parameter and Argument
The parameter is the name in the `def` line; the argument is the value passed in at the call. → [[Lec_06-Functions|Lec 06]]

### Return Value
What a call hands back; `None` if the function has no `return`. → [[Lec_06-Functions|Lec 06]]

### Variable Scope
The namespace in which a name is visible; each call gets its own. → [[Lec_06-Functions|Lec 06]]

### Local Variable
A name created inside a function; it vanishes when the call ends. → [[Lec_06-Functions|Lec 06]]

### Docstring
A triple-quoted string at the top of a function body, shown by `help()`. → [[Lec_06-Functions|Lec 06]]

### First-Class Function
A function used as a value: stored, passed to other functions or returned. → [[Lec_06-Functions|Lec 06]]

### Lambda Expression
An unnamed function made of a single expression. → [[Lec_06-Functions|Lec 06]]

### Map and Filter
Built-ins that apply a function to every item (`map`) or keep the items that pass a test (`filter`); both return lazy iterables. → [[Lec_06-Functions|Lec 06]]

### NameError
The error raised when a name is not defined in the current scope, for example using a function's parameter outside the function. → [[PP_02-Scope Error, Digit Sums, List Palindrome, Substring Count (2022 Moed A)|PP 02]]

## Dictionaries and Sets

### Container
An object that holds elements, classified by whether it is ordered and whether it is mutable. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Dictionary
A mutable mapping from unique, immutable keys to values. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Dictionary Key
The lookup name in a dictionary: it must be unique and immutable, and assigning to an existing key overwrites its value. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Dictionary Comprehension
The form `{k: v for ...}`, which builds a dictionary. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Frequency Counter
The counting pattern `d[x] = d.get(x, 0) + 1`, which tallies how often each item occurs. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Set
An unordered, mutable collection of unique, immutable items. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Set Operations
Union, intersection, difference and symmetric difference of two sets. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Set Comprehension
The form `{x for ...}`, which builds a set. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Hash Table
A structure that stores each item at a spot its own value determines, making lookup fast; the reason set elements and dictionary keys must be immutable. → [[Lec_07-Dictionaries and Sets|Lec 07]]

### Membership Test
The `in` operator, which checks whether an item is present (for a dictionary, among the keys). → [[Lec_07-Dictionaries and Sets|Lec 07]]

## Searching and Sorting

### Linear Search
Checking the elements one by one until the target is found. → [[Lec_08-Searching and Sorting|Lec 08]]

### Binary Search
On a sorted list, halving the range that could contain the target at each step. → [[Lec_08-Searching and Sorting|Lec 08]]

### Divide and Conquer
Shrinking the problem by a fixed fraction at each step, as binary search does. → [[Lec_08-Searching and Sorting|Lec 08]]

### Time Complexity
How the number of steps grows with the size of the input. → [[Lec_08-Searching and Sorting|Lec 08]]

### Best, Average and Worst Case
The three cost scenarios for an algorithm: the luckiest input, a typical input and the unluckiest input. → [[Lec_08-Searching and Sorting|Lec 08]]

### Selection Sort
Repeatedly swap the minimum of the unsorted rest into its place; O(n^2). → [[Lec_08-Searching and Sorting|Lec 08]]

### Quick Sort
Choose a pivot, partition around it and recurse on each side; O(n log n) on average. → [[Lec_08-Searching and Sorting|Lec 08]]

### Sorted and Sort
`sorted()` returns a new sorted list; the `.sort()` method sorts a list in place. → [[Lec_08-Searching and Sorting|Lec 08]]

### Sort Key
The `key=` function that gives the value each item is compared by. → [[Lec_08-Searching and Sorting|Lec 08]]

### Bubble Sort
Repeatedly swap adjacent out-of-order items; the paper's version sorts in descending order. → [[PP_05-Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)|PP 05]]

### Merge of Sorted Lists
Combine two sorted lists by filling the output from the back with the larger of two pointers. → [[PP_05-Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)|PP 05]]

### Stable Sort
A sort in which items with equal keys keep their original order. → [[PP_01-Digit-Count Sort, Float Digits, Binary Search Trace (Practice Exam, undated)|PP 01]]

## Classes and Objects

### Object-Oriented Programming
Modelling a program as objects that have attributes and methods. → [[Lec_09-Classes|Lec 09]]

### Class
A blueprint that defines the attributes and methods its objects will have. → [[Lec_09-Classes|Lec 09]]

### Object
An instance of a class, with its own attribute values. → [[Lec_09-Classes|Lec 09]]

### Attribute
Data held by an object, also called a field. → [[Lec_09-Classes|Lec 09]]

### Method
A function defined in a class and called through an instance. → [[Lec_09-Classes|Lec 09]]

### Constructor
The `__init__` method, which runs automatically when an object is created. → [[Lec_09-Classes|Lec 09]]

### Self
The current object, passed automatically as the first parameter of each method. → [[Lec_09-Classes|Lec 09]]

### Special Methods
Methods named `__xxx__` that Python calls for operators and built-ins, such as `__eq__` and `__repr__`. → [[Lec_09-Classes|Lec 09]]

### Information Hiding
The class decides what is visible outside it; Python enforces this only by convention. → [[Lec_09-Classes|Lec 09]]

## Exceptions and File IO

### Syntax Error
Code the parser cannot understand, so the program does not start. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Logic Error
The program runs without an error message but gives a wrong result. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Exception
A runtime error that Python can catch. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Try-Except
Intercepts and handles exceptions raised by the code in the `try` block. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Raise
Throws an exception yourself. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Finally
A clause that always runs, whether or not an exception occurred. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Assert
Raises `AssertionError` if a condition is false. → [[Lec_10-Exceptions and File IO|Lec 10]]

### File IO
Reading data from and writing data to files. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Open Function
`open` takes a path and returns a file object. → [[Lec_10-Exceptions and File IO|Lec 10]]

### With Statement
Opens a file and closes it automatically when the block ends. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Read Method
`read` returns the whole file as one string. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Readline Method
`readline` returns the next single line. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Readlines Method
`readlines` returns all lines as a list. → [[Lec_10-Exceptions and File IO|Lec 10]]

### Write Method
`write` writes a string to a file opened with `'w'`. → [[Lec_10-Exceptions and File IO|Lec 10]]

## Modules and the Standard Library

### Module
A `.py` file of Python code that can be imported. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### Import Statement
The import forms (`import`, `as`, `from`, `*`) that bring a module's names into your program. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### Namespace
A module's own separate set of names, so identical names in different modules do not clash. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### Name Main Guard
The test `__name__ == "__main__"`: code under it runs only when the file is run directly, not when it is imported. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### Python Standard Library
The modules bundled with Python, which need no installation. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### math Module
Library module of mathematical functions and constants. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### random Module
Library module for random numbers and choices. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### datetime Module
Library module for dates and times. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### csv Module
Library module for reading and writing CSV files. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### statistics Module
Library module of basic statistics such as the mean and median. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### Pip
The package installer, used to add packages that are not in the standard library. → [[Lec_11-Modules and the Standard Library|Lec 11]]

### NumPy
A package that provides N-dimensional arrays. → [[Lec_11-Modules and the Standard Library|Lec 11]]

## Generative AI and Prompt Engineering

### Artificial Intelligence
The broad field of making computers perform tasks that normally need human intelligence; the outermost of the nested fields. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Machine Learning
The part of AI in which systems learn patterns from data instead of following hand-written rules. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Deep Learning
The part of machine learning that uses many-layered neural networks (definition inferred from the lecture's nested diagram). → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Generative AI
The part of deep learning that produces new content such as text or images. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Data Science
Statistics, computer science and domain expertise combined to learn from data. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Large Language Model
A huge neural network that predicts the next word. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Pre-training
Learning next-word prediction from massive amounts of text. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Fine-tuning
Refining a pre-trained model on a narrower dataset. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Prompt Engineering
Crafting clear instructions for a model to get a better answer. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Zero-Shot Prompting
Asking the model to do a task with no examples in the prompt. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Few-Shot Prompting
Including a few worked examples in the prompt. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### Chain-of-Thought Prompting
Asking the model to reason step by step before answering. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

### ChatGPT
OpenAI's GPT-based language model, the lecture's example chatbot. → [[Lec_12-Generative AI and Prompt Engineering|Lec 12]]

## Tracing and Common Exam Patterns

### Trace Table
A hand-execution table with one row per variable change, used to follow code line by line. → [[PP_05-Acronyms, Share Valuation, Bubble Sort Trace & Backward Merge (2023 Moed A)|PP 05]]

### Accumulator
A variable updated on each loop pass, such as a running total or a count. → [[PP_07-Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)|PP 07]]

### Run-Length Encoding
Compressing a string into (character, repeat count) pairs, such as `aabbbcc` to `a2b3c2`. → [[PP_07-Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)|PP 07]]

### Sliding Window
Taking `s[i:i+3]` (or another fixed width) for every start position `i`. → [[PP_04-Concert Seats, In-Place Reverse, Binary Search & Star Triangle (2023 Practice Exam)|PP 04]]

### Sentinel Value
A special input, such as -1, that ends an input loop. → [[PP_06-Second Smallest, Hotel Nights, Selection Sort Trace & GPA (2023 Moed B)|PP 06]]

## Aliases & Shorthands

### Floor Division
See [[#Arithmetic Operators]].

### Modulus
See [[#Arithmetic Operators]].

### Operator
See [[#Operator and Operand]].

### Operand
See [[#Operator and Operand]].

### int
See [[#Integer]].

### Ternary Operator
See [[#Conditional Expression]].

### Break
See [[#Break and Continue]].

### Continue
See [[#Break and Continue]].

### Mutable
See [[#Mutability]].

### Immutable
See [[#Immutability]].

### Tuple Unpacking
See [[#Parallel Assignment]].

### Parameter
See [[#Parameter and Argument]].

### Argument
See [[#Parameter and Argument]].

### Return
See [[#Return Value]].

### Lambda
See [[#Lambda Expression]].

### Map
See [[#Map and Filter]].

### Filter
See [[#Map and Filter]].

### Any
See [[#Any and All]].

### All
See [[#Any and All]].

### ASCII
See [[#ASCII and Unicode]].

### Unicode
See [[#ASCII and Unicode]].

### Sorted
See [[#Sorted and Sort]].

### Sort
See [[#Sorted and Sort]].

### OOP
See [[#Object-Oriented Programming]].

### Dunder Methods
See [[#Special Methods]].

### File I/O
See [[#File IO]].

### open
See [[#Open Function]].

### read
See [[#Read Method]].

### readline
See [[#Readline Method]].

### readlines
See [[#Readlines Method]].

### write
See [[#Write Method]].

### Name Main
See [[#Name Main Guard]].

### Sentinel
See [[#Sentinel Value]].

### AI
See [[#Artificial Intelligence]].

### ML
See [[#Machine Learning]].

### DL
See [[#Deep Learning]].

### GenAI
See [[#Generative AI]].

### LLM
See [[#Large Language Model]].
