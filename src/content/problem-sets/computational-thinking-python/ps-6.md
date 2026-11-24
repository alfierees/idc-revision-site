---
title: "PS6"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-6-assignment-6.ipynb
tags:
  - computational-thinking-python
  - python
  - problem-set
  - functions
  - modular-programming
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Question 1: Personal Information Function.** Create a function called `generate_profile()` that takes the following parameters: `name` (string), `age` (integer), `major` (string), `gpa` (float).

      The function should return a formatted string that introduces the person. Requirements:

      - If the person's GPA is 3.5 or above, include "with honors" in the introduction.
      - If the person is under 21, add "is a young student" to the description.
      - The function must handle different input scenarios gracefully.

      Example outputs from the sheet:

      ```python
      # Example 1
      profile = generate_profile("Alice Johnson", 20, "Computer Science", 3.7)
      print(profile)
      # Expected output: "Alice Johnson is a 20-year-old Computer Science major with honors. She is a young student."

      # Example 2
      profile = generate_profile("Bob Smith", 25, "Economics", 3.2)
      print(profile)
      # Expected output: "Bob Smith is a 25-year-old Economics major."
      ```
    solution: "TODO"
    related_terms: ["function", "parameter-and-argument", "return-value", "conditional-statement", "string"]
  - id: "2"
    text: |
      **Question 2: Mathematical Operations Function.** Design a function `advanced_calculator()` that performs multiple mathematical operations.

      The function should accept three parameters: two numbers and an operation type. Support:

      1. Addition (+)
      2. Subtraction (-)
      3. Multiplication (*)
      4. Division (/)
      5. Exponentiation (**)

      Also: handle potential errors like division by zero, and return the result of the operation or an error message.

      Example usage from the sheet:

      ```python
      # Example 1
      result = advanced_calculator(10, 5, '+')
      print(result)
      # Expected Output: 15

      result = advanced_calculator(10, 5, '/')
      print(result)
      # Expected Output: 2.0

      result = advanced_calculator(10, 0, '/')
      print(result)
      # Expected Output: Division by zero error
      ```
    solution: "TODO"
    related_terms: ["function", "arithmetic-operators", "try-except", "exception", "return-value"]
  - id: "3"
    text: |
      **Question 3: Student Grade Analysis Functions.** Objective: develop functions to analyze and manipulate student grades.

      The sheet's example usage covers all three parts:

      ```python
      # Example usage
      grades = [85, 92, 78, 63, 55, 96, 45, 88, 72, 81]

      letter_grades = calculate_letter_grade(grades)
      print(letter_grades)
      # Expected Output: ['B', 'A', 'C', 'D', 'F', 'A', 'F', 'B', 'C', 'B']

      stats = grade_statistics(grades)
      print(stats)
      # Expected Output: ['Average: 77.5', 'Highest: 96', 'Lowest: 45', 'Passing Count: 7']

      curved_grades = apply_grade_curve(grades)
      print(curved_grades)
      # Expected Output: [90, 97, 83, 68, 60, 100, 50, 93, 77, 86]
      ```
    solution: "TODO"
    related_terms: ["function", "list"]
  - id: "3.1"
    text: |
      **3.1 `calculate_letter_grade(grade_list)`.** Convert numerical grade to letter grade and return a list with the converted grades. Grading scale:

      | Letter | Range |
      |---|---|
      | A | 90-100 |
      | B | 80-89 |
      | C | 70-79 |
      | D | 60-69 |
      | F | Below 60 |

      Expected output on the example `grades` list (from the sheet):

      ```text
      ['B', 'A', 'C', 'D', 'F', 'A', 'F', 'B', 'C', 'B']
      ```
    solution: "TODO"
    related_terms: ["function", "list", "for-loop", "if-else-statement", "elif", "return-value"]
  - id: "3.2"
    text: |
      **3.2 `grade_statistics(grade_list)`.** Calculate and return a list with the following items: average grade, highest grade, lowest grade, and number of passing grades (60 and above).

      Expected output on the example `grades` list (from the sheet):

      ```text
      ['Average: 77.5', 'Highest: 96', 'Lowest: 45', 'Passing Count: 7']
      ```
    solution: "TODO"
    related_terms: ["function", "list", "for-loop", "accumulator", "return-value"]
  - id: "3.3"
    text: |
      **3.3 `apply_grade_curve(grade_list)`.** Add 5 points to each grade, ensure no grade exceeds 100, and return the curved grade list.

      Expected output on the example `grades` list (from the sheet):

      ```text
      [90, 97, 83, 68, 60, 100, 50, 93, 77, 86]
      ```
    solution: "TODO"
    related_terms: ["function", "list", "for-loop", "return-value"]
---

*Related: [[Lec_06-Functions]], [[Lec_03-Conditions and While Loops]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_05-List Comprehension and Tuples]], [[Lec_10-Exceptions and File IO]]*
