---
title: "PS8"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-8-assignment-8.ipynb
tags:
  - computational-thinking-python
  - python
  - problem-set
  - classes
  - sorting
  - searching
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Question 1: Creating a Book Class.** Create a `Book` class that has:

      - Attributes for `title`, `author`, `year`, and `reading_status` (Boolean, default False).
      - A constructor (`__init__`) that initializes these attributes.
      - A string representation (`__str__`) method, which should return a string in the format "title, author, year".
      - A method `compare_publication` that takes another book and returns -1 if self is published earlier, 0 if same year, 1 if self is published later.
      - A method `mark_as_read` that changes `reading_status` to True.
      - A method `get_age` that returns how many years old the book is (compared to 2025).

      Example from the sheet:

      ```python
      book1 = Book("The Hobbit", "J.R.R. Tolkien", 1937)

      book2 = Book("1984", "George Orwell", 1949)

      result = book1.compare_publication(book2)  # Should return -1
      ```

      Starter code:

      ```python
      class Book:
          # Your code here
          pass
      ```
    solution: "TODO"
    related_terms: ["class", "constructor", "attribute", "method", "special-methods", "self"]
  - id: "2"
    text: |
      **Question 2: Author Management.** Create an `Author` class that:

      - Has attributes for `name`, `birth_year`, and `books` (empty list).
      - Has a method `add_book` that adds a `Book` object to their collection.
      - Has a method `get_books_in_period` that takes `start_year` and `end_year` and returns all books published by the author in that period.
      - Has a method `get_most_recent_book` that returns their latest published book.
      - Has a method `calculate_books_per_year` that returns average books written per year (from their first to last publication).

      Example from the sheet:

      ```python
      author = Author("George Orwell", 1903)

      author.add_book(book1)

      author.add_book(book2)

      recent = author.get_most_recent_book()
      ```

      Starter code:

      ```python
      class Author:
          # Your code here
          pass
      ```
    solution: "TODO"
    related_terms: ["class", "object", "method", "list", "attribute"]
  - id: "3"
    text: |
      **Question 3: Library Management.** Create a `Library` class that:

      - Has attributes for `name`, `books` (list), and `members` (list).
      - Has a method `add_book` that adds a book to the collection.
      - Has a method `sort_books` that returns books sorted by your choice of year (default), title, or author name.
      - Has a method `search_books` that takes a `query` and `search_by` parameter and returns matching books (`search_by` can be 'title', 'author', or 'year').
      - Has a method `get_reading_statistics` that returns a dictionary with `total_books`, `read_books`, `unread_books`, and `most_common_author`.

      Example from the sheet:

      ```python
      library = Library("City Library")

      library.add_book(book1)

      library.add_book(book2)

      sorted_books = library.sort_books("title")

      search_results = library.search_books("Tolkien", "author")
      ```

      Starter code:

      ```python
      class Library:
          # Your code here
          pass
      ```
    solution: "TODO"
    related_terms: ["class", "method", "sorted-and-sort", "sort-key", "linear-search", "dictionary"]
  - id: "4"
    text: |
      **Test data (supplied on the sheet).** The sheet ends with a test cell, which has no recorded output:

      ```python
      # Test data

      # Create test books
      book1 = Book("The Hobbit", "J.R.R. Tolkien", 1937)
      book2 = Book("1984", "George Orwell", 1949)
      book3 = Book("Animal Farm", "George Orwell", 1945)

      # Test Question 1
      print("Testing Question 1 - Book methods:")
      book1.mark_as_read()
      print(f"Book age: {book1.get_age()} years")
      print(f"Comparison result: {book1.compare_publication(book2)}")

      # Test Question 2
      print("\nTesting Question 2 - Author methods:")
      author = Author("George Orwell", 1903)
      author.add_book(book2)
      author.add_book(book3)
      print(f"Most recent book: {author.get_most_recent_book()}")

      # Test Question 3
      print("\nTesting Question 3 - Library methods:")
      library = Library("City Library")
      library.add_book(book1)
      library.add_book(book2)
      library.add_book(book3)
      print("Search results:", library.search_books("Orwell", "author"))
      ```
    solution: "TODO"
    related_terms: ["class", "object", "method"]
---

*Related: [[Lec_09-Classes]], [[Lec_08-Searching and Sorting]], [[Lec_06-Functions]], [[Lec_07-Dictionaries and Sets]]*
