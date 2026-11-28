---
title: "Quick Self-Test"
subject: databases-sql
type: self-test
description: "18 new exam-style questions in course order, each with a model answer: ERD to tables, cardinality with constraints, INSERT outcomes, JOIN row counts, reading a grouped query, WHERE versus HAVING, subqueries, normalisation, keys, indexes and views. Eight are quick multiple-choice checks."
course: Databases & SQL
semester: 1
year: 2
order: 6
tags:
  - databases-sql
  - exam-prep
  - self-test
questions:
  - id: "1"
    title: "1 · Hospitals, doctors and patients"
    text: |
      Each doctor works in exactly one hospital; a hospital employs 0 or more doctors. A patient can see many doctors and a doctor sees many patients; each appointment has a date, and the same patient can see the same doctor several times.

      a. How many tables does the relational model need? Name them.

      b. How many foreign keys, and where is each?

      c. Which constraint makes "every doctor works in a hospital" hold, and on which column?

      d. Should the appointment table's primary key be the pair (doctor, patient)? Explain.
    solution: |
      a. **4 tables:** `hospital`, `doctor`, `patient`, and `appointment` (the many-to-many between doctor and patient; it has its own attribute, the date, so it is an associative entity).

      b. **3 FKs:** `doctor.hospital_id → hospital`, `appointment.doctor_id → doctor`, `appointment.patient_id → patient`. In the 1-to-many the FK sits on the "many" side (doctor); the junction table holds one FK to each side.

      c. `NOT NULL` on `doctor.hospital_id`. The FK already allows at most one hospital; NOT NULL makes it at least one, so exactly one.

      d. **No.** A composite PK `(doctor_id, patient_id)` forbids the same pair twice, but a patient can see the same doctor several times. Use a surrogate PK `appointment_id` (or a composite of all three including the date).
  - id: "2"
    title: "2 · One person, one passport"
    text: |
      `passport.person_id` is a foreign key to `person`. Every passport belongs to exactly one person, and a person has at most one passport. What do you add?
    options:
      - label: a
        text: |
          `NOT NULL` on `passport.person_id` only.
        why: |
          That gives every passport an owner, but a person could still hold several passports.
      - label: b
        text: |
          `UNIQUE` on `passport.person_id` only.
        why: |
          That stops a person having two passports, but a passport could have NULL, no owner.
      - label: c
        text: |
          `NOT NULL` and `UNIQUE` on `passport.person_id`.
        correct: true
        why: |
          NOT NULL: each passport has at least one owner (the FK already says at most one). UNIQUE: each person appears at most once, so at most one passport.
      - label: d
        text: |
          `UNIQUE` on `person.person_id`.
        why: |
          It is the PK, already unique, and the rule is about the FK column in the child table.
    solution: |
      Both rules live on the **FK column in the child**: `NOT NULL` for "a child has exactly one parent", `UNIQUE` for "a parent has at most one child". **Answer (c).** This is the 1-to-1 pattern from Lecture 4.
  - id: "3"
    title: "3 · Which INSERT succeeds?"
    text: |
      ```sql
      CREATE TABLE book (
          book_id INT PRIMARY KEY AUTO_INCREMENT,
          title   VARCHAR(100) NOT NULL,
          isbn    CHAR(13) UNIQUE,
          price   DECIMAL(6,2) NOT NULL DEFAULT 0.00
      );
      ```

      Each command runs on an empty, reset table. Give the inserted row or explain the failure.

      a. `INSERT INTO book (title) VALUES ('SQL Basics');`

      b. `INSERT INTO book (isbn, price) VALUES ('9780000000001', 59.90);`

      c. `INSERT INTO book (book_id, title, price) VALUES (7, 'Joins', 'free');`

      d. `INSERT INTO book (title) VALUES ('A'), ('B');`
    solution: |
      a. **Succeeds:** `1, 'SQL Basics', NULL, 0.00`. The id is generated, `isbn` is nullable, `price` takes its DEFAULT.

      b. **Fails:** `title` is NOT NULL and has no DEFAULT, and no value is given.

      c. **Fails:** `'free'` is not a valid DECIMAL. (Giving `book_id = 7` would be fine on its own.)

      d. **Succeeds:** two rows, ids 1 and 2, both with `isbn` NULL. UNIQUE allows several NULLs.
  - id: "4"
    title: "4 · A JOIN with no ON"
    text: |
      `student` has 40 rows and `club` has 5. `student.club_id` is a nullable foreign key to `club`. How many rows does this return?

      ```sql
      SELECT *
      FROM student
      JOIN club;
      ```
    options:
      - label: a
        text: |
          40
        why: |
          That is a LEFT JOIN from student. This query has no join condition at all.
      - label: b
        text: |
          200
        correct: true
        why: |
          No `ON` or `USING`, so `JOIN` is a CROSS JOIN: every student with every club, 40 × 5.
      - label: c
        text: |
          45
        why: |
          Adding the sizes is what `UNION ALL` of two one-column results would give, not a join.
      - label: d
        text: |
          It cannot be known without the data.
        why: |
          True for an INNER JOIN with `ON`, but a cross join's size depends only on the row counts.
    solution: |
      In MySQL `JOIN`, `INNER JOIN` and `CROSS JOIN` are interchangeable; the **condition** decides. With none, it is the Cartesian product: $40 \times 5 = 200$. **Answer (b).**
  - id: "5"
    title: "5 · Which counts can you know?"
    text: |
      Same tables: `student` (40 rows) with a nullable FK `club_id` to `club` (5 rows). For each query, can you know the row count? If yes, give it; if not, explain and give the possible range.

      a. `student LEFT JOIN club USING (club_id)`

      b. `student INNER JOIN club USING (club_id)`

      c. `club LEFT JOIN student USING (club_id)`

      d. The FULL OUTER JOIN of the two.
    solution: |
      a. **40.** Every student appears; each matches at most one club because `club_id` is the club's PK. No student is duplicated.

      b. **Unknown, 0 to 40.** It depends on how many students have a non-NULL `club_id`.

      c. **Unknown.** Every club appears at least once: once per member, or once with NULLs if it has none. Rows = students in a club + clubs with no members. No members at all: 5. All 40 students in a single club: 40 + 4 = 44. Range 5 to 44.

      d. **Unknown, 40 to 45:** all 40 students (matched or with NULLs), plus one row for every club with no members (0 to 5).
  - id: "6"
    title: "6 · Reading a grouped query"
    text: |
      ```sql
      SELECT p.title, COUNT(a.employee_id) AS staff
      FROM project AS p
      LEFT JOIN assignment AS a USING (project_id)
      WHERE p.status = 'active'
      GROUP BY p.project_id
      HAVING COUNT(a.employee_id) < 3
      ORDER BY staff;
      ```

      a. What does the query return?

      b. Why a LEFT JOIN rather than an INNER JOIN?

      c. What changes if `COUNT(a.employee_id)` is replaced by `COUNT(*)` everywhere?

      d. Why is `p.status = 'active'` in WHERE and the count in HAVING?
    solution: |
      a. Every **active** project with **fewer than 3** assigned employees (including projects with none), with its title and the number of employees, sorted from the fewest up. One row per project.

      b. The LEFT JOIN keeps projects with no assignments; their `a` columns are NULL and `COUNT(a.employee_id)` gives 0, so they pass `< 3`. An INNER JOIN would drop them.

      c. `COUNT(*)` counts the unmatched row itself, so an empty project shows **1** instead of 0. The list of projects is the same here (1 is still under 3), but the counts for empty projects are wrong.

      d. `status` is a raw value of each row, tested **before** grouping. The count is an aggregate that exists only **after** GROUP BY, so it must be in HAVING; in WHERE it is an error.
  - id: "7"
    title: "7 · Which query fails?"
    text: |
      Which of these queries on `payment(customer_id, amount)` gives an error in MySQL?
    options:
      - label: a
        text: |
          `SELECT customer_id, MAX(amount) FROM payment GROUP BY customer_id HAVING AVG(amount) > 3;`
        why: |
          Runs: HAVING and SELECT may use different aggregates.
      - label: b
        text: |
          `SELECT DISTINCT customer_id FROM payment WHERE amount > 5;`
        why: |
          Runs: a raw-value filter in WHERE, then duplicates removed.
      - label: c
        text: |
          `SELECT customer_id, COUNT(*) AS n FROM payment GROUP BY customer_id ORDER BY n DESC;`
        why: |
          Runs: ORDER BY comes after SELECT, so it can use the alias.
      - label: d
        text: |
          `SELECT customer_id, SUM(amount) FROM payment WHERE SUM(amount) > 100 GROUP BY customer_id;`
        correct: true
        why: |
          An aggregate in WHERE: WHERE runs before the groups exist.
    solution: |
      Order of execution: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. `SUM` needs a group, so it belongs in `HAVING SUM(amount) > 100`. **Answer (d).**
  - id: "8"
    title: "8 · The three parts of a foreign key"
    text: |
      `enrollment.student_id` should reference `student.student_id`.

      a. Name the three database mechanisms the child table needs, and what each does.

      b. With the FK in place, what happens if you insert an enrollment for a student who does not exist? And if you delete a student who still has enrollments?

      c. A colleague says: "We can JOIN on `student_id` anyway, so why bother with the constraint?" Answer them.
    solution: |
      a. **Column** `enrollment.student_id`: holds values from the parent's PK. **Constraint** `FOREIGN KEY ... REFERENCES student (student_id)`: enforces referential integrity, no value missing from the parent. **Index** on the column: speeds up reads and the JOINs that use it.

      b. The insert is rejected (MySQL error 1452, cannot add a child row). The delete is rejected too (error 1451, cannot delete a parent row), unless the FK says `ON DELETE CASCADE`.

      c. The JOIN works without the constraint, but nothing stops orphan values (an enrollment for student 999). Those rows silently vanish from INNER JOINs or show NULLs, so results can be wrong. The constraint prevents the bad data in the first place.
  - id: "9"
    title: "9 · A subquery in SELECT"
    text: |
      ```sql
      SELECT o.order_id,
             (SELECT c.name
              FROM customer AS c
              WHERE c.customer_id = o.customer_id) AS customer_name
      FROM orders AS o;
      ```

      Which join of `orders` (left) and `customer` (right) on `customer_id` gives the same result?
    options:
      - label: a
        text: |
          LEFT JOIN
        correct: true
        why: |
          Every order appears once; if no customer matches (a NULL `customer_id`), the subquery returns NULL.
      - label: b
        text: |
          INNER JOIN
        why: |
          An inner join would drop orders with no matching customer; the subquery keeps them.
      - label: c
        text: |
          RIGHT JOIN
        why: |
          That would add customers with no orders; the outer query only reads `orders`.
      - label: d
        text: |
          CROSS JOIN
        why: |
          The WHERE inside the subquery matches on the key; there is no Cartesian product.
    solution: |
      A scalar subquery runs once per outer row and returns one value or NULL, so no outer row is ever lost. That is a **LEFT JOIN** (assuming `customer_id` is the customer's PK, so the subquery never returns two rows). **Answer (a).** Same idea as 2025 A Q13.
  - id: "10"
    title: "10 · Normalise an order table"
    text: |
      `order_line(order_id, product_id, quantity, product_name, customer_id, customer_name)` with primary key `(order_id, product_id)`.

      a. Which column breaks 2NF, and why?

      b. Which column breaks 3NF, and why?

      c. Give an example of an update anomaly in this table.

      d. Split it into tables in 3NF.
    solution: |
      a. `product_name` depends only on `product_id`, half the key: a partial dependency. (`customer_id` also depends only on `order_id`.)

      b. `customer_name` depends on `customer_id`, a non-key column: a transitive dependency.

      c. Renaming a product means changing every order line that contains it; miss one and the database holds two names for the same product.

      d. `product(product_id, product_name)`, `customer(customer_id, customer_name)`, `orders(order_id, customer_id → customer)`, `order_line(order_id → orders, product_id → product, quantity)` with PK `(order_id, product_id)`.
  - id: "11"
    title: "11 · TRUNCATE"
    text: |
      Which statement about `TRUNCATE TABLE t` is true?
    options:
      - label: a
        text: |
          It can delete only the rows a WHERE clause picks.
        why: |
          That is DELETE. TRUNCATE takes no WHERE: it empties the table.
      - label: b
        text: |
          It resets the AUTO_INCREMENT counter.
        correct: true
        why: |
          TRUNCATE returns the table to its state right after CREATE, counter included.
      - label: c
        text: |
          It is blocked by Safe Update Mode.
        why: |
          Safe Update Mode protects UPDATE and DELETE; TRUNCATE is DDL and is not protected.
      - label: d
        text: |
          It removes the table's structure.
        why: |
          That is DROP TABLE. After TRUNCATE the empty table is still there.
    solution: |
      DELETE: DML, row by row, can use WHERE, keeps counting, can roll back. TRUNCATE: DDL, all rows, resets AUTO_INCREMENT, usually cannot roll back, no Safe Update protection. **Answer (b).**
  - id: "12"
    title: "12 · Two designs for a junction table"
    text: |
      `film_actor` links films and actors. Design A uses `PRIMARY KEY (film_id, actor_id)`. Design B uses `film_actor_id INT PRIMARY KEY AUTO_INCREMENT` and two FK columns.

      a. What is the main difference?

      b. What can Design B store that Design A cannot?

      c. Write the one line that makes Design B behave like Design A.

      d. Give one reason the course still prefers a surrogate key.
    solution: |
      a. A has a **composite** PK made of the two FKs; B has a **surrogate** (synthetic) PK.

      b. The same film-actor pair several times (each with a new `film_actor_id`). In A the second insert fails as a duplicate PK.

      c. `UNIQUE (film_id, actor_id)`.

      d. It is decoupled from the domain: if the relationship later needs to repeat (an actor playing two roles) or gains attributes, the PK and anything pointing at it do not change.
  - id: "13"
    title: "13 · An index that does not help"
    text: |
      `customer.last_name` has an index. What happens with `WHERE last_name LIKE '%son'`?
    options:
      - label: a
        text: |
          MySQL uses the index and finds the rows directly.
        why: |
          An index is ordered by the start of the value; a leading wildcard gives it nowhere to start.
      - label: b
        text: |
          The query fails: LIKE cannot be used on an indexed column.
        why: |
          LIKE works on any string column; the index is just not used.
      - label: c
        text: |
          MySQL reads the whole table (a full table scan).
        correct: true
        why: |
          With a leading `%`, every value must be checked.
      - label: d
        text: |
          MySQL rebuilds the index before running the query.
        why: |
          Indexes are refreshed on writes (INSERT, UPDATE, DELETE), not on reads.
    solution: |
      A full table scan happens when there is no index on the searched column, when the table is tiny, or when an index exists but cannot be used, as with `LIKE '%son'`. `LIKE 'Mc%'` could use it. **Answer (c).**
  - id: "14"
    title: "14 · FULL OUTER JOIN in MySQL"
    text: |
      You want every author and every book, matched where `book.author_id = author.author_id`, with NULLs where there is no match.

      a. Why does `author FULL OUTER JOIN book ON ...` fail in MySQL?

      b. Write the query that works.

      c. Why `UNION` and not `UNION ALL`?
    solution: |
      a. MySQL does not support `FULL OUTER JOIN`.

      b.
      ```sql
      SELECT *
      FROM author LEFT JOIN book ON author.author_id = book.author_id
      UNION
      SELECT *
      FROM author RIGHT JOIN book ON author.author_id = book.author_id;
      ```

      c. The matched rows come back from **both** halves. `UNION` removes the duplicate copy so each appears once; `UNION ALL` would list every matched row twice.
  - id: "15"
    title: "15 · The mandatory column"
    text: |
      ```sql
      CREATE TABLE ticket (
          ticket_id INT PRIMARY KEY AUTO_INCREMENT,
          seat      VARCHAR(5),
          price     DECIMAL(6,2) NOT NULL DEFAULT 50.00,
          created   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          event_id  INT NOT NULL
      );
      ```

      Which column must be given a value in every INSERT?
    options:
      - label: a
        text: |
          `ticket_id`
        why: |
          AUTO_INCREMENT generates it.
      - label: b
        text: |
          `price`
        why: |
          NOT NULL, but its DEFAULT of 50.00 fills it in.
      - label: c
        text: |
          `seat`
        why: |
          Nullable with no default: left out, it becomes NULL.
      - label: d
        text: |
          `event_id`
        correct: true
        why: |
          NOT NULL with no DEFAULT: nothing can supply a value.
    solution: |
      A column is mandatory in an INSERT only when it is NOT NULL and has no DEFAULT (and no AUTO_INCREMENT). **Answer (d).** Same as 2025 A Q15.
  - id: "16"
    title: "16 · ON or WHERE in a LEFT JOIN"
    text: |
      ```sql
      -- Query 1
      SELECT c.name, o.order_id
      FROM customer AS c
      LEFT JOIN orders AS o
          ON c.customer_id = o.customer_id AND o.year = 2025;

      -- Query 2
      SELECT c.name, o.order_id
      FROM customer AS c
      LEFT JOIN orders AS o
          ON c.customer_id = o.customer_id
      WHERE o.year = 2025;
      ```

      Which query lists every customer? What does the other one do?
    solution: |
      **Query 1** lists every customer, with their 2025 orders attached (or NULL if they had none in 2025). A row that fails `ON` still appears once, with NULLs.

      **Query 2** drops every customer with no 2025 order: for them `o.year` is NULL, `NULL = 2025` is not true, and WHERE removes the row. The LEFT JOIN has become an INNER JOIN in effect.

      Rule: `ON` says how the tables relate; `WHERE` filters the result.
  - id: "17"
    title: "17 · Keyword, identifier or literal?"
    text: |
      In `SELECT title FROM film WHERE rating = 'PG';`, what is `'PG'`?
    options:
      - label: a
        text: |
          A literal value
        correct: true
        why: |
          A piece of data written into the command, in single quotes.
      - label: b
        text: |
          An identifier
        why: |
          Identifiers name things in the database: `title`, `film`, `rating`.
      - label: c
        text: |
          A keyword
        why: |
          Keywords are part of SQL itself: `SELECT`, `FROM`, `WHERE`.
      - label: d
        text: |
          A reserved word
        why: |
          Reserved words are keywords that need backticks to be used as names.
    solution: |
      Keywords make up the syntax, identifiers name database objects, literals are data embedded in the command. **Answer (a).** Same as 2025 A Q16.
  - id: "18"
    title: "18 · Views and NoSQL"
    text: |
      a. What is a view, and how does it differ from a table?

      b. Why can you not INSERT through `CREATE VIEW totals AS SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id;`?

      c. A MongoDB document stores a customer's address inside each invoice. What does the database no longer guarantee, and who must handle it?
    solution: |
      a. A view is a **stored query** that acts as a virtual table. A table stores the data; a view stores only the query and fetches the data from its tables each time it is read.

      b. Its rows do not map 1-to-1 onto rows of `payment`: each is an aggregate over many rows (GROUP BY, SUM). There is no single underlying row to insert into, so the view is not updatable.

      c. **Consistency.** The address is duplicated, so when it changes every copy must be updated, and the application (us), not the database, is responsible. That is the price of no normalisation and very fast reads.
---

Eighteen questions in course order. Write your answer in one to three sentences before revealing the model answer: the marks are for the reason, not just the keyword. Two of the open questions (5 and 6) are built to be drawn with the JOIN and GROUP BY explorers on the [[Graph Gallery]] page.
