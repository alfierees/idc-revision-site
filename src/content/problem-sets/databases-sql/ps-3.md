---
title: "PS3"
subject: databases-sql
tags:
  - databases-sql
  - sakila
  - inner-join
  - group-by
  - having
  - aggregate-function
  - order-by
  - limit
  - count-distinct
ai_drafted: true
questions:
  - id: "1"
    text: |
      > [!note] Question reconstructed from the student submission (no question sheet in the source).

      Write a query that returns the title and average rental rate of films longer than 120 minutes whose average rental rate is above 3.5, ordered by average rental rate from highest to lowest, limited to 5 rows.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          f.title,
          AVG(f.rental_rate) AS avg_rental_rate
      FROM film f
      JOIN inventory i ON f.film_id = i.film_id
      JOIN rental r ON i.inventory_id = r.inventory_id
      WHERE f.length > 120
      GROUP BY f.film_id, f.title
      HAVING AVG(f.rental_rate) > 3.5
      ORDER BY avg_rental_rate DESC
      LIMIT 5;
      ```

      **Result (5 rows):**

      | title | avg_rental_rate |
      |---|---|
      | ALI FOREVER | 4.990000 |
      | AMERICAN CIRCUS | 4.990000 |
      | BABY HALL | 4.990000 |
      | BEAUTY GREASE | 4.990000 |
      | BETRAYED REAR | 4.990000 |

      **How it works, clause by clause:**

      1. `FROM film f` starts from one row per film and gives the table the [[Alias]] `f`.
      2. `JOIN inventory i ON f.film_id = i.film_id` is an [[INNER JOIN]] from each film to its inventory copies. A film with no copy disappears here.
      3. `JOIN rental r ON i.inventory_id = r.inventory_id` is a second inner join, from each copy to its rentals. A film whose copies were never rented disappears here. After both joins a film appears once per rental of any of its copies.
      4. `WHERE f.length > 120` filters the raw joined rows before any grouping. See [[WHERE]].
      5. `GROUP BY f.film_id, f.title` gives one group per film. Grouping by the key as well as `title` is safe because two films could share a title. See [[GROUP BY]].
      6. `HAVING AVG(f.rental_rate) > 3.5` keeps only groups whose average is above 3.5. It runs after grouping, which is why an [[Aggregate Function]] is allowed here and not in `WHERE`. See [[HAVING]].
      7. `ORDER BY avg_rental_rate DESC` sorts from highest to lowest, using the alias defined in `SELECT`. See [[ORDER BY]].
      8. `LIMIT 5` returns only the first 5 rows. See [[LIMIT]].

      > [!warning] Check: the AVG is trivial and the result is a tie
      > - `rental_rate` belongs to the film, so every row in a film's group carries the same value. The average of identical numbers is that number, so `AVG(f.rental_rate)` is just `f.rental_rate`. The join fan-out does not distort it (a `SUM` would be distorted, an `AVG` of a constant is not).
      > - The two joins therefore only keep films with at least one rental. If that is the intent the query is correct. If the question meant all films longer than 120 minutes, drop the joins and use `WHERE f.length > 120 AND f.rental_rate > 3.5`.
      > - All five rows show 4.99 and `ORDER BY` has no tie-breaker, so the five films shown are one possible top 5, not the only one. Adding `, f.title` to the `ORDER BY` makes the output deterministic.
      > - The PDF screenshot headers read `average_rental_ra...`, so it was taken from an earlier version of the query. Data and logic are the same.

      > [!tip] Intuition
      > `HAVING` is the "WHERE for groups". Here the filter happens to be on a per-film constant, which is why it looks redundant, but the pattern `GROUP BY` then `HAVING AVG(...) > value` is the one to learn.
    related_terms: ["inner-join", "group-by", "having", "aggregate-function", "avg", "where", "order-by", "limit", "alias"]
  - id: "2"
    text: |
      > [!note] Question reconstructed from the student submission (no question sheet in the source).

      Write a query that returns each city and the total amount paid by its residents, ordered by that total from highest to lowest, limited to 5 rows.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          c.city AS city_name,
          SUM(p.amount) AS total_amount_paid
      FROM payment p
      JOIN customer cu ON p.customer_id = cu.customer_id
      JOIN address a ON cu.address_id = a.address_id
      JOIN city c ON a.city_id = c.city_id
      GROUP BY c.city_id, c.city
      ORDER BY total_amount_paid DESC
      LIMIT 5;
      ```

      **Result (5 rows):**

      | city_name | total_amount_paid |
      |---|---|
      | Cape Coral | 221.55 |
      | Saint-Denis | 216.54 |
      | Aurora | 198.50 |
      | Molodetšno | 195.58 |
      | Santa Bárbara d´Oeste | 194.61 |

      **How it works, clause by clause:**

      1. `FROM payment p` starts from one row per payment: the table that holds the money.
      2. `JOIN customer cu ON p.customer_id = cu.customer_id` attaches the paying customer to each payment.
      3. `JOIN address a ON cu.address_id = a.address_id` attaches the customer's address.
      4. `JOIN city c ON a.city_id = c.city_id` attaches the city. This chain `payment -> customer -> address -> city` is needed because `payment` knows nothing about cities. Every join is an [[INNER JOIN]], so a payment is lost only if a link in the chain is missing. The link columns are `NOT NULL` foreign keys, so no payments are lost.
      5. `GROUP BY c.city_id, c.city` makes one group per city. Grouping on `city_id` as well is correct because the same city name could belong to two countries. See [[GROUP BY]].
      6. `SUM(p.amount)` adds up the payments in each group: the total paid by residents of that city. See [[Aggregate Function]].
      7. `ORDER BY total_amount_paid DESC` then `LIMIT 5` keep the five largest totals.

      > [!tip] Intuition
      > To aggregate by something the fact table does not contain (here the city), join outward along the foreign keys until the grouping column is in reach, then `GROUP BY` it.

      > [!warning] Check
      > The query is valid against the schema and answers the reconstructed question. The five totals shown are all different, so the displayed order is unambiguous. Whether a sixth city ties with 194.61 cannot be seen from the PDF. The PDF headers read `city` and `total_amou...`, from an earlier version of the aliases; values and logic are the same.
    related_terms: ["inner-join", "group-by", "sum", "aggregate-function", "foreign-key", "order-by", "limit", "alias"]
  - id: "3"
    text: |
      > [!note] Question reconstructed from the student submission (no question sheet in the source).

      Write a query that returns each film and the number of distinct customers who rented it, ordered by that number from highest to lowest, limited to 5 rows.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          f.title,
          COUNT(DISTINCT r.customer_id) AS unique_customers
      FROM film f
      JOIN inventory i ON f.film_id = i.film_id
      JOIN rental r ON i.inventory_id = r.inventory_id
      GROUP BY f.film_id, f.title
      ORDER BY unique_customers DESC
      LIMIT 5;
      ```

      **Result (5 rows):**

      | title | unique_customers |
      |---|---|
      | BUCKET BROTHERHOOD | 33 |
      | RIDGEMONT SUBMARINE | 32 |
      | FORWARD TEMPLE | 32 |
      | GRIT CLOCKWORK | 32 |
      | SCALAWAG DUCK | 32 |

      **How it works, clause by clause:**

      1. `FROM film f` with two inner joins gives one row per rental of each film, via `film -> inventory -> rental` (same chain as Q1).
      2. `GROUP BY f.film_id, f.title` makes one group per film.
      3. `COUNT(DISTINCT r.customer_id)` counts each customer once per film. Plain `COUNT(r.customer_id)` would count rentals, so a customer who rents the same film three times would count three times. [[DISTINCT]] inside the aggregate removes those repeats. This is the point of the question.
      4. `ORDER BY unique_customers DESC` and `LIMIT 5` return the five highest counts.

      > [!tip] Intuition
      > Compare `COUNT(*)` (how many rentals) with `COUNT(DISTINCT customer_id)` (how many different people). The gap between them is repeat rentals.

      > [!warning] Check
      > The query is valid against the schema. The last four rows all show 32 and `ORDER BY` has no tie-breaker, so if more than four films have 32 distinct customers, which four appear is not determined by the query. Adding `, f.title` to the `ORDER BY` would fix that. The PDF header reads `unique_customer_co...`, from an earlier alias; values are the same.
    related_terms: ["inner-join", "group-by", "count", "distinct", "count-vs-count-column", "aggregate-function", "order-by", "limit"]
  - id: "4"
    text: |
      > [!note] Question reconstructed from the student submission (no question sheet in the source).

      Write a query that returns each staff member's full name, their store, and the number of rentals they processed, ordered by that number from highest to lowest.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          CONCAT(s.first_name, ' ', s.last_name) AS staff_name,
          s.store_id,
          COUNT(r.rental_id) AS rentals_processed
      FROM staff s
      JOIN rental r ON s.staff_id = r.staff_id
      GROUP BY s.staff_id, s.first_name, s.last_name, s.store_id
      ORDER BY rentals_processed DESC;
      ```

      **Result (2 rows):**

      | staff_name | store_id | rentals_processed |
      |---|---|---|
      | Mike Hillyer | 1 | 8040 |
      | Jon Stephens | 2 | 8004 |

      **How it works, clause by clause:**

      1. `FROM staff s JOIN rental r ON s.staff_id = r.staff_id` pairs each staff member with every rental they processed ([[INNER JOIN]] on the [[Foreign Key]] `rental.staff_id`).
      2. `GROUP BY s.staff_id, s.first_name, s.last_name, s.store_id` makes one group per staff member. Every non-aggregated column in `SELECT` has to appear in the `GROUP BY` (or be functionally dependent on a grouped key).
      3. `COUNT(r.rental_id)` counts rentals in each group.
      4. `CONCAT(s.first_name, ' ', s.last_name)` joins first and last name with a space. See [[CONCAT Function]].
      5. `ORDER BY rentals_processed DESC` sorts by workload. There is no `LIMIT`, so every staff member with at least one rental is returned: 2 rows, because the database has two staff.

      > [!warning] Check
      > The query is valid against the schema. Two notes. (1) With an inner join, a staff member who processed no rentals would be dropped; a [[LEFT JOIN]] from `staff` would keep them with a count of 0. Both staff here have rentals, so the result is unaffected. (2) The two counts add up to 16044 (8040 + 8004). Since `rental.staff_id` is `NOT NULL`, no rental is dropped by the join, so 16044 is the total number of rentals (inferred from the schema, not checked against the database). The PDF headers read `full_name`, `store_id` and `total_rent...`, from an earlier version; values are the same.
    related_terms: ["inner-join", "group-by", "count", "concat-function", "aggregate-function", "order-by", "foreign-key", "left-join"]
---
