---
title: "PS4"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-4-assignment-4.ipynb
tags:
  - python
  - problem-set
  - lists
  - for-loops
  - nested-loops
  - nested-lists
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Exercise 1: Calculate Patient's BMI.** You are given the following list of patients:

      ```python
      patients = [
          ["John", 175, 75],
          ["Sarah", 162, -1],     # Missing weight
          ["Mike", 180, 85],
          ["Emma", -1, 65],       # Missing height
          ["David", 170, 70],
          ["Lisa", -1, -1],       # Missing both
          ["James", 182, 90]
      ]
      ```

      Each patient is a list of length 3: name, height in centimeters, weight in kilograms. A value of `-1` represents a missing value.

      Write a program that, given this `patients` list, iterates over the list, calculates the patient's BMI (or -1 if either weight or height is missing), and adds the BMI as the fourth element of the patient's list. Finally, the program prints the modified patients list. The BMI should be rounded to two decimal places (using `round`), and a missing value should be printed as NaN. The BMI formula is on the Wikipedia page for Body mass index (the sheet links to it and does not restate it).

      Expected output on the sheet:

      ```text
      Name: John, Height: 175cm, Weight: 75kg, BMI: 24.49
      Name: Sarah, Height: 162cm, Weight: NaN, BMI: NaN
      Name: Mike, Height: 180cm, Weight: 85kg, BMI: 26.23
      Name: Emma, Height: NaN, Weight: 65kg, BMI: NaN
      Name: David, Height: 170cm, Weight: 70kg, BMI: 24.22
      Name: Lisa, Height: NaN, Weight: NaN, BMI: NaN
      Name: James, Height: 182cm, Weight: 90kg, BMI: 27.17
      ```

      **Note:** the program should work for any `patients` list with the given format.

      Starter code:

      ```python
      # <add your code here>
      ```

      *Related: [[Lec_04-Lists, For Loops and Ranges]]*
    solution: "TODO"
    related_terms: ["list", "nested-list", "for-loop", "indexing", "conditional-statement"]
  - id: "2"
    text: |
      **Exercise 2: Divisible by 5 or 10?** You are given the following list of numbers:

      ```python
      numbers = [20, 7, 14, 35, 8, 3, 25, 40]
      ```

      Write a program that, given this list, prints for each number whether it is divisible by 5 but not 10, divisible by 10, or not divisible by 5 or 10.

      Expected output on the sheet:

      ```text
      20 is divisible by 10
      7 is not divisible by 5 or 10
      14 is not divisible by 5 or 10
      35 is divisible by 5 but not 10
      8 is not divisible by 5 or 10
      3 is not divisible by 5 or 10
      25 is divisible by 5 but not 10
      40 is divisible by 10
      ```

      **Note:** the program should work for any `numbers` list with the given format.

      Starter code:

      ```python
      # <add your code here>
      ```

      *Related: [[Lec_04-Lists, For Loops and Ranges]], [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["list", "for-loop", "if-else-statement", "elif", "arithmetic-operators"]
  - id: "3"
    text: |
      **Exercise 3: Triplets of Squares.** Write a program that asks the user for a positive integer `n`, and creates a new list of triplets `list_of_triplets`, where every element is a list of positive integers `[a, b, c]` of length 3 satisfying `a^2 + b^2 = c^2` for `c <= n`.

      The program asks the user:

      ```text
      Please enter a positive integer number:
      ```

      If the user enters 20, the program prints the following (expected output on the sheet):

      ```text
      3^2 + 4^2 = 5^2
      5^2 + 12^2 = 13^2
      6^2 + 8^2 = 10^2
      8^2 + 15^2 = 17^2
      9^2 + 12^2 = 15^2
      12^2 + 16^2 = 20^2
      ```

      **Note:** the program should work for any positive integer `n`.

      **Hint (from the sheet):** you will need to use nested loops.

      Starter code:

      ```python
      # <add your code here>
      ```

      *Related: [[Lec_04-Lists, For Loops and Ranges]]*
    solution: "TODO"
    related_terms: ["nested-loop", "for-loop", "range", "list", "nested-list"]
---
