---
title: "PS3"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-3-assignment-3.ipynb
tags:
  - python
  - problem-set
  - conditionals
  - while-loops
  - input-validation
  - menu-program
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Assignment 3: Mastering Conditional Statements and Loops.** This assignment is a single project: one interactive menu program. Reinforce if-else conditional statements and while loops by building an interactive program that presents a menu; each option is a task such as a calculation or string processing.

      **Instructions**

      - The program displays a menu with 3 different options.
      - Based on the user's selection, it performs different tasks, using conditional statements to determine which option was selected.
      - Some menu options involve loops for repeated tasks.
      - The program keeps running until the user chooses to exit (Option 3).
      - Include clear comments in the code explaining each part.

      The sheet's hints: break each menu option down before starting; test after adding each feature; review the recitation and earlier lectures; beware of **infinite loops** and always give every `while` loop a clear exit condition (the sheet mentions the number guessing game here, though no guessing game appears in the menu).

      **Example run (from the sheet)**

      ```text
      Welcome to the Interactive Menu!
      1. Basic Calculator
      2. String Processing
      3. Exit

      Please choose an option (1-3): 1
      You selected Basic Calculator.

      Enter the first number: 12
      Enter the second number: 8
      Choose an operation:
      1. Add
      2. Subtract
      3. Multiply
      4. Divide
      Your choice: 1
      The result of 12 + 8 is: 20

      Welcome to the Interactive Menu!
      1. Basic Calculator
      2. String Processing
      3. Exit

      Please choose an option (1-3): 2
      You selected String Processing.

      Enter a string: Hello World!
      What would you like to do with the string?
      1. Count Digits
      2. Reverse String
      3. String Length
      Your choice: 1
      The number of digits in "Hello World 2024!" is: 4

      Welcome to the Interactive Menu!
      1. Basic Calculator
      2. String Processing
      3. Exit

      Please choose an option (1-3): 3
      Exiting the program. Goodbye!
      ```

      > [!warning] Inconsistency in the sheet's example
      > The string typed in the example is `Hello World!`, but the printed result quotes `"Hello World 2024!"` with 4 digits. The two do not match as written; the sheet's example is reproduced verbatim.

      **Starter code (Solution section of the sheet).** The sheet recommends completing each menu option separately, then combining all sections. It provides the menu string and two commented-out loop skeletons.

      ```python
      str_menu = '''Welcome to the Interactive Menu!
      1. Basic Calculator
      2. String Processing
      3. Exit

      Please choose an option (1-3):'''

      choose_menu = -1
      ```

      ```python
      # <TODO>

      # # For Example
      # while choose_menu != 3:
      #   print(str_menu)
      #   choose_menu = int(input())

      #   if choose_menu == 1:
      #     pass
      #   elif choose_menu == 3:
      #     print("Exiting the program. Goodbye!")


      # # For Example
      # while True:
      #   print(str_menu)
      #   choose_menu = int(input())

      #   if choose_menu == 1:
      #     pass
      #   elif choose_menu == 3:
      #     print("Exiting the program. Goodbye!")
      #     break
      ```

      Three further empty code cells follow in the notebook for the student's work.

      *Related: [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["while-loop", "if-else-statement", "elif", "infinite-loop", "break-and-continue", "conditional-statement"]
  - id: "1a"
    text: |
      **Option 1: Basic Calculator.**

      - Prompt the user to enter two numbers.
      - Ask the user to choose an operation: addition, subtraction, multiplication, or division.
      - Based on the selected operation, perform the calculation and display the result.
      - Handle potential edge cases, such as division by zero.

      *Related: [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["arithmetic-operators", "type-casting", "conditional-statement"]
  - id: "1b"
    text: |
      **Option 2: String Processing.**

      - Ask the user to input a string.
      - Provide these sub-options for processing the string: (1) **Count Digits**: count and display the number of digits in the string; (2) **Reverse String**: reverse the entire string and display it; (3) **String Length**: display the length of the string.
      - The user can select which string operation to perform.

      *Related: [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["string", "string-slicing", "for-loop", "conditional-statement"]
  - id: "1c"
    text: |
      **Option 3: Exit the Program.**

      - If the user selects this option, the program terminates gracefully.
      - Display a goodbye message and exit the loop that runs the menu.

      *Related: [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["while-loop", "break-and-continue"]
  - id: "1d"
    text: |
      **Additional Requirements.**

      - **Input validation:** handle invalid inputs gracefully. For example, if the user selects an invalid menu option, display an error message and ask them to choose again.
      - **Loop control:** keep displaying the menu after each operation until the user chooses to exit (Option 3).
      - **Use of comments:** comment the program throughout, to show understanding.

      *Related: [[Lec_03-Conditions and While Loops]]*
    solution: "TODO"
    related_terms: ["while-loop", "if-else-statement", "infinite-loop"]
---
