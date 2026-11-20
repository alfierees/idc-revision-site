---
title: "PS4"
subject: databases-sql
source_doc: /papers/databases-sql/ps-4.pdf
tags:
  - databases
  - sql
  - problem-set
  - joins
  - group-by
  - having
  - subquery
  - self-join
  - sakila
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Film Rentals.** The marketing team wants to email customers who have rented more films than the average customer. Return: customer id, full name, email and number of rentals, sorted by rentals descending.

      Answer with a single SQL query.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          customer.customer_id,
          CONCAT(customer.first_name, ' ', customer.last_name) AS full_name,
          customer.email,
          COUNT(rental.rental_id) AS number_of_rentals
      FROM customer
          INNER JOIN rental ON customer.customer_id = rental.customer_id
      GROUP BY
          customer.customer_id,
          customer.first_name,
          customer.last_name,
          customer.email
      HAVING
          COUNT(rental.rental_id) > (
              SELECT AVG(rental_count)
              FROM (
                  SELECT COUNT(rental_id) AS rental_count
                  FROM rental
                  GROUP BY customer_id
              ) AS customer_rentals
          )
      ORDER BY
          number_of_rentals DESC;
      ```

      There is no student PDF, so there is no result table or row count for this query.

      **Clause by clause:**

      | Clause | What it does |
      |---|---|
      | `FROM customer INNER JOIN rental ...` | Pairs every customer with each of their rentals: one row per rental. See [[INNER JOIN]]. |
      | `CONCAT(first_name, ' ', last_name) AS full_name` | Builds the full name as one column. See [[CONCAT Function]] and [[Alias]]. |
      | `GROUP BY customer_id, first_name, last_name, email` | One group per customer. See [[GROUP BY]]. |
      | `COUNT(rental.rental_id)` | Counts the rentals in each customer's group. An [[Aggregate Function]]. |
      | `HAVING COUNT(...) > (subquery)` | Keeps only groups whose count beats the average. It must be `HAVING`, not `WHERE`, because the test is on an aggregate. See [[HAVING]]. |
      | the subquery | The innermost query counts rentals per customer. Wrapped as a [[Derived Table]] (`AS customer_rentals`, an alias MySQL requires), `AVG(rental_count)` averages those counts. The outer parentheses make it a [[Scalar Subquery]]: one value that `>` compares against. See [[Subquery]]. |
      | `ORDER BY number_of_rentals DESC` | Most active customers first. See [[ORDER BY]]. |

      > [!tip] Intuition
      > "Average rentals per customer" is not a column anywhere, so it takes two layers: first count per customer (a `GROUP BY` inside), then average those counts (the `AVG` outside). The strict `>` excludes customers exactly at the average, matching "more than".

      > [!warning] Check against the sheet
      > - Columns and order match (id, full name, email, rentals, descending). Strictly more than the average: matches.
      > - Both the main query and the subquery read from `rental`, so the average is taken over customers with at least one rental. A customer with zero rentals is dropped by the `INNER JOIN`. If some customer had none, an average over all customers would be lower. This depends on the data, which was not queried. A `LEFT JOIN` from `customer` would include zero-rental customers.
      > - `email` can be `NULL`; such customers are still returned.
      > - Verdict: logically correct and complete as a single query.
    related_terms: ["inner-join", "group-by", "having", "aggregate-function", "count", "avg", "subquery", "derived-table", "scalar-subquery", "concat-function", "alias", "order-by"]
    source_doc_page: 1
  - id: "2"
    text: |
      **Store Revenue.** For each store, show the total number of rentals and total revenue (sum of payments). Order by revenue descending.

      Answer with a single SQL query.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          store.store_id,
          COUNT(DISTINCT rental.rental_id) AS total_rentals,
          SUM(payment.amount) AS total_revenue
      FROM store
          JOIN inventory ON store.store_id = inventory.store_id
          JOIN rental ON inventory.inventory_id = rental.inventory_id
          LEFT JOIN payment ON rental.rental_id = payment.rental_id
      GROUP BY
          store.store_id
      ORDER BY
          total_revenue DESC;
      ```

      There is no student PDF, so there is no result table or row count for this query.

      **Clause by clause:**

      | Clause | What it does |
      |---|---|
      | `FROM store JOIN inventory ON ...` | Lists each store's copies of films. A bare `JOIN` is an [[INNER JOIN]]. |
      | `JOIN rental ON inventory.inventory_id = rental.inventory_id` | Attaches every rental of each copy. This is the only route from a rental to a store, since `rental` has no `store_id`. |
      | `LEFT JOIN payment ON rental.rental_id = payment.rental_id` | Attaches the payment(s) of each rental. [[LEFT JOIN]] keeps rentals with no payment (amount becomes `NULL`) instead of dropping them from the rental count. |
      | `GROUP BY store.store_id` | One output row per store. |
      | `COUNT(DISTINCT rental.rental_id)` | Counts each rental once. `DISTINCT` is needed because a rental with two payments would appear as two joined rows. See [[DISTINCT]] and [[JOIN Fan-Out]]. |
      | `SUM(payment.amount)` | Adds the payments; `SUM` ignores `NULL`s, so unpaid rentals add 0. |
      | `ORDER BY total_revenue DESC` | Highest-earning store first. |

      > [!tip] Intuition
      > The join chain `store - inventory - rental - payment` follows the foreign keys one hop at a time. Joining a one-to-many link (rental to payment) multiplies rows, so a count must say `DISTINCT`, while a sum over the many side is still right: each payment row is joined exactly once.

      > [!warning] Check against the sheet
      > - Columns and order match (stores, rental count, revenue, revenue descending).
      > - `COUNT(DISTINCT ...)` is the safe choice. The student's own comment block says `COUNT(rental.rental_id)` without `DISTINCT`, which does not match the code. The code is the better version because of the fan-out.
      > - The query assigns a rental to the store that holds the copy (`inventory.store_id`). Another defensible reading is the store whose staff member handled it (`rental.staff_id` then `staff.store_id`). The sheet does not say which, so the two readings could differ. The student's separate write-up describes a `store - staff - rental - payment` chain, which is not what the `.sql` does: trust the `.sql`.
      > - `payment.rental_id` is nullable, so a payment not linked to any rental is never reached by this join and is missing from "total revenue". Whether any such rows exist is a data question that was not checked.
      > - Verdict: correct under the "store holding the copy" reading; complete as a single query.
    related_terms: ["join", "inner-join", "left-join", "group-by", "count", "distinct", "sum", "join-fan-out", "aggregate-function", "order-by"]
    source_doc_page: 2
  - id: "3"
    text: |
      **Most-Featured Actors Rented.** A store manager wants to identify customers who have rented at least one film starring the most-featured actor (the actor who appears in the most films). Return: distinct customer id and name.

      Answer with a single SQL query.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT DISTINCT
          c.customer_id,
          CONCAT(c.first_name, ' ', c.last_name) AS customer_name
      FROM customer c
          JOIN rental r ON c.customer_id = r.customer_id
          JOIN inventory i ON r.inventory_id = i.inventory_id
          JOIN film_actor fa ON i.film_id = fa.film_id
      WHERE
          fa.actor_id = (
              SELECT actor_id
              FROM film_actor
              GROUP BY actor_id
              ORDER BY COUNT(film_id) DESC
              LIMIT 1
          )
      ORDER BY
          c.customer_id;
      ```

      There is no student PDF, so there is no result table or row count for this query.

      **Clause by clause:**

      | Clause | What it does |
      |---|---|
      | the subquery in `WHERE` | Finds the most-featured actor. `film_actor` has one row per actor-film pair, so grouping by `actor_id` and counting rows gives each actor's number of films; `ORDER BY COUNT(film_id) DESC LIMIT 1` keeps the top one. It returns one `actor_id`, so it is a [[Scalar Subquery]] and `=` is legal. See [[GROUP BY]], [[ORDER BY]], [[LIMIT]]. |
      | `customer c JOIN rental r` | Each customer with each of their rentals (aliases `c`, `r`; see [[Alias]]). |
      | `JOIN inventory i ON r.inventory_id = i.inventory_id` | From the rented copy to its film (`i.film_id`). |
      | `JOIN film_actor fa ON i.film_id = fa.film_id` | From the film to all its actors, one row per actor. |
      | `WHERE fa.actor_id = (...)` | Keeps only the rows where the actor is the most-featured one. |
      | `SELECT DISTINCT customer_id, name` | A customer who rented several of that actor's films matches many rows; [[DISTINCT]] collapses them to one. |
      | `ORDER BY c.customer_id` | Tidy output (the sheet does not require an order). |

      > [!tip] Intuition
      > A two-stage question solved with a nested query: the inner query answers "who is the actor?", the outer query answers "who rented that actor's films?". The subquery does not depend on the outer row, so it is evaluated once. It is not a [[Correlated Subquery]].

      > [!warning] Check against the sheet
      > - Columns match (distinct customer id and name).
      > - Ties are not handled. `LIMIT 1` returns an arbitrary actor if two actors share the highest film count, because `ORDER BY COUNT(film_id) DESC` has no tie-breaker. If the top actor is unique in the data this is fine; the data was not checked. A tie-safe version compares against the maximum count with `HAVING`.
      > - `LIMIT` inside a scalar subquery with `=` works in MySQL (it is `IN` and `ANY` subqueries that reject `LIMIT`).
      > - Verdict: correct for the unique-top-actor case; complete as a single query.
    related_terms: ["join", "inner-join", "distinct", "group-by", "order-by", "limit", "scalar-subquery", "subquery", "count", "alias", "concat-function"]
    source_doc_page: 2
  - id: "4"
    text: |
      **Similar Replacement Cost.** Write an SQL query that lists pairs of films that have the same replacement cost. For each pair, show Film 1 title, Film 2 title and the shared replacement cost. Every pair of films should appear only once.
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      ```sql
      SELECT
          f1.title AS film_1_title,
          f2.title AS film_2_title,
          f1.replacement_cost AS shared_replacement_cost
      FROM film AS f1
          JOIN film AS f2
              ON f1.replacement_cost = f2.replacement_cost
              AND f1.film_id < f2.film_id
      ORDER BY
          f1.replacement_cost,
          f1.title,
          f2.title;
      ```

      There is no student PDF, so there is no result table or row count for this query.

      **Clause by clause:**

      | Clause | What it does |
      |---|---|
      | `FROM film AS f1 JOIN film AS f2` | A [[Self Join]]: the same table used twice under two [[Alias]]es, so each output row combines two film rows. |
      | `ON f1.replacement_cost = f2.replacement_cost` | Pairs films whose costs are equal. |
      | `AND f1.film_id < f2.film_id` | The "each pair once" condition. Without it every pair appears twice, as (A, B) and (B, A), and every film is paired with itself. Requiring the smaller id first keeps exactly one order and drops self-pairs, because no id is less than itself. |
      | `SELECT f1.title, f2.title, f1.replacement_cost` | Both titles and the shared cost (taken from `f1`; it equals `f2`'s by the join condition). |
      | `ORDER BY cost, f1.title, f2.title` | Groups pairs by cost, then alphabetically. Not required by the sheet. |

      > [!example] Why the `<` removes duplicates
      > Take films with ids 5 and 10 and the same cost.
      > - (5, 10): `5 < 10` is true, so the pair is kept.
      > - (10, 5): `10 < 5` is false, so the mirror image is dropped.
      > - (5, 5) and (10, 10): `5 < 5` is false, so self-pairs are dropped.
      >
      > If `n` films share one cost, this yields n times (n minus 1) divided by 2 pairs for that cost, so the output can be large.

      > [!warning] Check against the sheet
      > - Columns, "same cost" and "each pair once" all match. The pair is identified by `film_id` (the [[Primary Key]]), the right choice: comparing titles would misbehave if two films shared a title.
      > - `<` and `>` are both fine; `<>` would not be (it keeps both orders).
      > - Verdict: correct and complete as a single query.
    related_terms: ["self-join", "join", "alias", "order-by", "primary-key"]
    source_doc_page: 2
---
