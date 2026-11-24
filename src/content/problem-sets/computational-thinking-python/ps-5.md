---
title: "PS5"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-5-assignment-5.ipynb
tags:
  - computational-thinking-python
  - python
  - problem-set
  - list-comprehension
  - tuples
  - any-all
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Exercise 1: Explore Sales Data.** You are given sales data as a list of tuples. Every record has the format `(salesperson_name, product, sale_amount, commission_rate)`.

      ```python
      sales_data = [
          ("Alice Smith", "Laptop", 1200.50, 0.08),
          ("Bob Johnson", "Smartphone", 750.75, 0.10),
          ("Charlie Brown", "Tablet", 450.25, 0.06),
          ("Diana Prince", "Laptop", 1350.00, 0.08),
          ("Ethan Hunt", "Smartphone", 825.60, 0.10),
          ("Alice Smith", "Smartphone", 675.30, 0.10)
      ]
      ```

      Use **ONLY** list comprehension and tuples to solve tasks 1 to 3.

      **Q1. Total commissions.** Create a list named `total_commissions` for each sale.

      Expected output (from the sheet):

      ```text
      Total Commissions: [96.04, 75.075, 27.015, 108.0, 82.56, 67.53]
      ```

      > [!note]
      > Your program should work for any `sales_data` list with the given format.

      Starter code on the sheet:

      ```python
      # <add your code here>
      ```
    solution: "TODO"
    related_terms: ["list-comprehension", "tuple", "for-loop"]
  - id: "2"
    text: |
      **Q2. High-value sales.** Using the `sales_data` list from Q1, create a list of sales records named `high_value_sales` with sales over 1000 dollars.

      Expected output (from the sheet):

      ```text
      High-Value Sales: [('Alice Smith', 'Laptop', 1200.5, 0.08), ('Diana Prince', 'Laptop', 1350.0, 0.08)]
      ```
    solution: "TODO"
    related_terms: ["list-comprehension", "tuple", "comparison-operators"]
  - id: "3"
    text: |
      **Q3. Sales for a product.** Using the `sales_data` list from Q1, create a list of sales records named `product_sales` for a specific `product` (for example "Laptop"). If the product is not in `sales_data` (for example "TV"), the resulting `product_sales` list should be empty.

      Expected output (from the sheet):

      ```text
      Laptop Sales: [('Alice Smith', 'Laptop', 1200.5, 0.08), ('Diana Prince', 'Laptop', 1350.0, 0.08)]
      TV Sales: []
      ```
    solution: "TODO"
    related_terms: ["list-comprehension", "tuple"]
  - id: "4"
    text: |
      **Q4 to Q6. any and all.** Use `any` and `all` to answer the following questions about the commission rates in `sales_data`. Each answer is `True` or `False`.

      **Q4.** Are `all` commission rates above 5 percent?

      Expected output (from the sheet):

      ```text
      Are all commission rates above 5%? True
      ```

      ```python
      # <add your code here>
      ```
    solution: "TODO"
    related_terms: ["any-and-all", "list-comprehension", "boolean"]
  - id: "5"
    text: |
      **Q5.** Are `all` commission rates above 7 percent?

      Expected output (from the sheet):

      ```text
      Are all commission rates above 7%? False
      ```
    solution: "TODO"
    related_terms: ["any-and-all", "list-comprehension", "boolean"]
  - id: "6"
    text: |
      **Q6.** Is `any` commission rate above 10 percent?

      Expected output (from the sheet):

      ```text
      Is any commission rate above 10%? False
      ```
    solution: "TODO"
    related_terms: ["any-and-all", "list-comprehension", "boolean"]
  - id: "7"
    text: |
      **Q7. Unique products.** Create and print a list of unique products named `unique_products`.

      Expected output:

      ```text
      The list of unique products is ['Laptop', 'Smartphone', 'Tablet']
      ```

      ```python
      # <add your code here>
      ```
    solution: "TODO"
    related_terms: ["list-comprehension", "set", "tuple"]
  - id: "8"
    text: |
      **Q8. Total sales for one salesperson.** Given a salesperson name `salesperson_name`, calculate her total sales amount.

      Expected output (for Alice Smith):

      ```text
      Total sales for Alice Smith: 1875.8
      ```

      ```python
      # <add your code here>
      ```
    solution: "TODO"
    related_terms: ["list-comprehension", "tuple", "accumulator"]
---

*Related: [[Lec_05-List Comprehension and Tuples]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_03-Conditions and While Loops]], [[Lec_07-Dictionaries and Sets]]*
