---
title: "PS2"
subject: databases-sql
source_doc: /papers/databases-sql/ps-2.pdf
tags:
  - databases-sql
  - logical-erd
  - create-table
  - primary-key
  - foreign-key
  - one-to-many
  - one-to-one
  - many-to-many
  - junction-table
  - mysql
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Restaurant Management System, logical ERD.** Define at least 4 entities, each with at least 4 attributes (with appropriate data types and constraints). Establish one 1:M, one 1:1 and one M:N relationship.

      Use a professional tool (e.g. draw.io, Lucidchart) to draw a **Logical ERD** with proper use of data types, primary keys and foreign keys.
    solution: |
      > [!info] Source
      > There is **no official solution**. The answer below is the student submission (.sql / .pdf), plus checks against the sheet.

      > [!warning] Student answer, not official. Check before relying on it.

      The typed ERD in the student submission (.pdf), exactly as drawn (7 tables):

      ![](/images/databases-sql/ps02-q1-student-logical-erd.png)

      The same ERD as a Mermaid diagram (names kept as the student spelled them, including the `costumer_id` typo in the original drawing, which I write as `customer_id` here):

      ```mermaid
      erDiagram
          customer ||--o{ customer_order : "places"
          order_header ||--o{ customer_order : "linked by"
          customer ||--o{ reservation : "makes"
          reservation ||--o{ order_header : "covers"
          order_header ||--|| payment : "paid by"
          order_header ||--o{ order_item : "contains"
          menu_item ||--o{ order_item : "listed in"

          customer {
              int customer_id PK
              varchar first_name
              varchar last_name
              varchar phone_number
              varchar email UK
              date created_at
          }
          customer_order {
              int customer_id PK, FK
              int order_id PK, FK
          }
          reservation {
              int reservation_id PK
              int customer_id FK
              datetime reservation_time
              int party_size
              varchar status
          }
          order_header {
              int order_id PK
              int reservation_id PK, FK
              timestamp order_time
              varchar order_status
          }
          payment {
              int payment_id PK
              int order_id FK, UK
              decimal amount
              varchar method
              datetime paid_at
          }
          order_item {
              int order_item_id PK
              int order_id PK, FK
              int menu_item_id PK, FK
              int quantity
              decimal unit_price
          }
          menu_item {
              int menu_item_id PK
              varchar item_name UK
              varchar category
              decimal price
              boolean is_available
          }
      ```

      ### How the ERD meets the three relationship requirements

      | Required | Student's ERD | Mechanism |
      |---|---|---|
      | **1:M** | `customer` to `reservation` (one customer, many reservations) | FK `reservation.customer_id` on the "many" side |
      | **1:1** | `order_header` to `payment` | FK `payment.order_id` marked `UNIQUE`, so each order has at most one payment row |
      | **M:N** | `customer` to `order_header` through `customer_order` | [[Junction Table]] with a [[Composite Primary Key]] of the two FKs |

      > [!warning] Check: the ERD's M:N relationship is questionable
      > `customer_order` makes customer and order many-to-many, but a restaurant order is normally placed by **one** customer. The `.sql` agrees with that: it has `order_headers.customer_id` (a plain 1:M) and no `customer_order` table. The M:N that really exists in the restaurant domain is **order and menu item**, and the ERD already models it with the `order_item` junction table. So the sheet's M:N requirement is met by `order_item` in both versions; `customer_order` is redundant.

      > [!warning] Check: the ERD is not identical to the `.sql`
      > The typed ERD (7 tables) and the `.sql` (6 tables) disagree. They differ in these places:
      >
      > | Item | Typed ERD (.pdf) | Final `.sql` |
      > |---|---|---|
      > | Table `customer_order` | **present** (junction customer and order) | **absent** (no such table) |
      > | Order table name | `order_header` | `order_headers` (plural) |
      > | `order_header` primary key | composite `(order_id, reservation_id)`, `reservation_id` is PK and FK | single `order_id`; `reservation_id` is a nullable FK |
      > | Customer on an order | via `customer_order` | direct FK `order_headers.customer_id NOT NULL` |
      > | `order_item` primary key | `order_item_id`, `order_id`, `menu_item_id` all marked PK | single `order_item_id`; the other two are FKs |
      > | `customer.email` | `UNIQUE` | nullable, **not** unique |
      > | `customer.created_at` | `DATE` | `DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP` |
      > | `order_header.order_time` | `TIMESTAMP` | `DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP` |
      >
      > The 6 tables that **do** match by name in both are `customer`, `reservation`, `menu_item`, `order_item`, `payment` and the order table (spelled differently). Only `customer_order` is truly missing from the `.sql`.

      > [!warning] Check: composite PK on `order_header` blocks walk-ins
      > In the ERD, `reservation_id` is part of the primary key of `order_header`, and PK columns cannot be `NULL`. That forces **every** order to have a reservation, so walk-in orders are impossible. The `.sql` fixes this (nullable `reservation_id`, with the comment "order may come in from walk in order"), which is the better design.

      > [!note] Superseded handwritten draft
      > A handwritten draft (JPEG, 6 tables: `Customer`, `Reservation`, `order_header`, `order_item`, `Menu_item`, `Payment`) is an earlier version. It has no `customer_order` table, types `phone_number` as `INT`, `unit_price` as `INT` and dates as `DATE`. It is superseded by the typed ERD and the `.sql` and is not used below.
    related_terms: ["logical-erd", "entity-relationship-diagram", "one-to-many-relationship", "one-to-one-relationship", "many-to-many-relationship", "junction-table", "primary-key", "foreign-key", "composite-primary-key", "unique-constraint", "data-type"]
    source_doc_page: 2
  - id: "2"
    text: |
      Use MySQL to implement the logical ERD. Your tables must include:

      - proper data types (VARCHAR, INTEGER, DATE, etc.)
      - primary keys and foreign keys
      - constraints (NOT NULL, UNIQUE, etc.)
      - clear and consistent naming conventions for tables, columns and constraints
      - explicit names for all foreign key constraints and indexes (e.g. `fk_order_Customer`, `fk_orderitem_menuitem`)
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      The final `.sql` from the student submission (whitespace tidied, logic unchanged). The student's own comments are kept because the sheet asks for commented code.

      ### Database and `customer`

      ```sql
      -- Restaurant DB schema
      CREATE DATABASE IF NOT EXISTS restaurant_db;
      USE restaurant_db;

      -- 1) Customer
      CREATE TABLE customer(
          customer_id INT AUTO_INCREMENT PRIMARY KEY,   -- auto increment generates a new ID for each inserted row
          first_name VARCHAR(50) NOT NULL,
          last_name VARCHAR(50) NOT NULL,
          phone_number VARCHAR(20) NOT NULL,            -- VARCHAR not INT: may contain + for country code or leading 0s
          email VARCHAR(100) NULL,                      -- not essential, so it is NULL
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP  -- stores the time of the row automatically
      );
      ```

      **Why it works:** [[AUTO_INCREMENT]] on the [[Primary Key]] makes MySQL assign the id. A phone number is an identifier, not a quantity, so `VARCHAR` is the right [[Data Type]]. [[DEFAULT Constraint]] `CURRENT_TIMESTAMP` fills `created_at` when the INSERT omits it.

      ### `reservation`

      ```sql
      -- 2) Reservation
      CREATE TABLE reservation(
          reservation_id INT AUTO_INCREMENT PRIMARY KEY,
          customer_id INT NOT NULL,                     -- FK column: each reservation belongs to one customer
          reservation_time DATETIME NOT NULL,
          party_size INT NOT NULL,
          status VARCHAR(20) NOT NULL,

          CONSTRAINT fk_reservation_customer
              FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
      );
      ```

      **Why it works:** this is the [[One-to-Many Relationship]]: the FK sits on the "many" side. `NOT NULL` on the FK means a reservation cannot exist without a customer.

      ### `menu_item`

      ```sql
      -- 3) Menu Item
      CREATE TABLE menu_item(
          menu_item_id INT AUTO_INCREMENT PRIMARY KEY,
          item_name VARCHAR(100) NOT NULL,
          category VARCHAR(100) NOT NULL,
          price DECIMAL(10,2) NOT NULL,                 -- 10 = total digits, 2 = digits after the decimal point
          is_available BOOLEAN NOT NULL DEFAULT TRUE,

          CONSTRAINT uq_menu_item_name UNIQUE (item_name)
      );
      ```

      **Why it works:** `DECIMAL(10,2)` stores money exactly (no floating-point error). [[UNIQUE Constraint]] on `item_name` stops duplicate menu entries.

      ### `order_headers`

      ```sql
      -- 4) Order headers
      CREATE TABLE order_headers(
          order_id INT AUTO_INCREMENT PRIMARY KEY,
          customer_id INT NOT NULL,                     -- each order is placed by one customer
          reservation_id INT,                           -- no NOT NULL: an order may be a walk-in
          order_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          order_status VARCHAR(20) NOT NULL,

          CONSTRAINT fk_order_customer
              FOREIGN KEY (customer_id) REFERENCES customer(customer_id),

          CONSTRAINT fk_order_reservation
              FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id)
      );
      ```

      **Why it works:** two FKs. `customer_id` is mandatory, `reservation_id` is optional (a nullable FK is allowed under [[Referential Integrity]]: `NULL` means "no reservation", any non-null value must exist in `reservation`).

      ### `order_item` (the M:N junction)

      ```sql
      -- 5) Order item
      CREATE TABLE order_item(
          order_item_id INT AUTO_INCREMENT PRIMARY KEY,
          menu_item_id INT NOT NULL,                    -- each row links to one menu item
          order_id INT NOT NULL,                        -- each row links to one order
          quantity INT NOT NULL,
          unit_price DECIMAL(10,2) NOT NULL,

          CONSTRAINT fk_order_item_menu_item
              FOREIGN KEY (menu_item_id) REFERENCES menu_item(menu_item_id),

          CONSTRAINT fk_order_item_order
              FOREIGN KEY (order_id) REFERENCES order_headers(order_id)
      );
      ```

      **Why it works:** an order holds many menu items and a menu item appears on many orders, so `order_item` is the [[Junction Table]] that turns this [[Many-to-Many Relationship]] into two 1:M links. `unit_price` copies the menu price at order time, so later menu price changes do not rewrite past orders.

      ### `payment` (the 1:1)

      ```sql
      -- 6) Payment
      CREATE TABLE payment(
          payment_id INT AUTO_INCREMENT PRIMARY KEY,
          order_id INT NOT NULL,                        -- each payment belongs to one order
          amount DECIMAL(10,2) NOT NULL,
          method VARCHAR(30) NOT NULL,
          paid_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

          CONSTRAINT uq_payment_order UNIQUE(order_id),

          CONSTRAINT fk_payment_order
              FOREIGN KEY (order_id) REFERENCES order_headers(order_id)
      );
      ```

      **Why it works:** a FK alone gives 1:M. Adding `UNIQUE(order_id)` allows at most one payment row per order, which turns it into the required **one-to-one** relationship. (Because the FK is `NOT NULL` on `payment`, every payment needs an order, but an order may not be paid yet, so it is 1 to 0..1.)

      ### Explicitly named indexes

      ```sql
      CREATE INDEX idx_reservation_customer_id ON reservation(customer_id);
      CREATE INDEX idx_orderheaders_customer_id ON order_headers(customer_id);
      CREATE INDEX idx_orderheaders_reservation_id ON order_headers(reservation_id);
      CREATE INDEX idx_orderitem_order_id ON order_item(order_id);
      CREATE INDEX idx_orderitem_menu_item_id ON order_item(menu_item_id);
      CREATE INDEX idx_payment_order_id ON payment(order_id);
      ```

      ### The schema the `.sql` actually builds

      ```mermaid
      erDiagram
          customer ||--o{ reservation : "makes"
          customer ||--o{ order_headers : "places"
          reservation |o--o{ order_headers : "optionally covers"
          order_headers ||--o| payment : "paid by"
          order_headers ||--o{ order_item : "contains"
          menu_item ||--o{ order_item : "listed in"

          customer {
              int customer_id PK
              varchar first_name
              varchar last_name
              varchar phone_number
              varchar email
              datetime created_at
          }
          reservation {
              int reservation_id PK
              int customer_id FK
              datetime reservation_time
              int party_size
              varchar status
          }
          order_headers {
              int order_id PK
              int customer_id FK
              int reservation_id FK
              datetime order_time
              varchar order_status
          }
          payment {
              int payment_id PK
              int order_id FK, UK
              decimal amount
              varchar method
              datetime paid_at
          }
          order_item {
              int order_item_id PK
              int menu_item_id FK
              int order_id FK
              int quantity
              decimal unit_price
          }
          menu_item {
              int menu_item_id PK
              varchar item_name UK
              varchar category
              decimal price
              boolean is_available
          }
      ```

      ### Checks on the SQL

      > [!success] What I checked and found fine
      > - **Creation order is valid:** every FK points to a table created earlier (`customer`, then `reservation` and `menu_item`, then `order_headers`, then `order_item` and `payment`). No FK refers to a missing table.
      > - **Types match:** every FK column is `INT` and references an `INT` primary key.
      > - **Every table has a primary key** (`..._id INT AUTO_INCREMENT PRIMARY KEY`).
      > - **All FK constraints and indexes have explicit names**, as the sheet requires.
      > - `UNIQUE`, `NOT NULL`, `DEFAULT` all used; money is `DECIMAL(10,2)`.

      > [!warning] Check: issues I found
      > 1. **Missing `customer_order` table.** The typed ERD shows it, the `.sql` does not (see the table in Q1). Anyone running the `.sql` gets 6 tables, not 7.
      > 2. **Inconsistent naming.** The sheet asks for "clear and consistent naming". Tables are singular (`customer`, `payment`, `order_item`) except `order_headers` (plural), and FK names such as `fk_order_customer` refer to `order`, not `order_headers`. The sheet's own example (`fk_order_Customer`) is also mixed in case, so this is minor.
      > 3. **Redundant indexes.** `uq_payment_order` already creates an index on `payment.order_id`, so `idx_payment_order_id` duplicates it. MySQL InnoDB also creates an index for each FK automatically; the explicit ones are harmless but largely unnecessary.
      > 4. **No `CHECK` constraints.** Nothing stops `party_size = 0`, `quantity <= 0`, a negative `price`, or free-text `status` values like `'bokked'`. A [[CHECK Constraint]] (or an `ENUM`) would fix these. The sheet only says "Constraints (NOT NULL, UNIQUE, etc.)", so this is a missed improvement, not an error.
      > 5. **Possible inconsistency in data.** `order_headers` has its own `customer_id` **and** an optional `reservation_id` (which already belongs to a customer). Nothing forces both to name the same customer.
      > 6. **No uniqueness on `(order_id, menu_item_id)`.** The same menu item can appear twice on one order as two rows.
      > 7. **`email` is nullable and not unique** here, but the typed ERD says `UNIQUE` (see Q1).
      > 8. **ERD types vs SQL lengths.** The ERD writes `VARCHAR` with no length; the SQL adds lengths (50, 100, 20, 30), which is the correct level of detail for MySQL.
      > 9. `order_item` has a surrogate `order_item_id`, so nothing blocks two rows with the same `(order_id, menu_item_id)` (point 6). The ERD's three-column composite PK would have blocked it, but is itself unusual: it combines a [[Surrogate Key]] with the two FKs.
    related_terms: ["create-table", "primary-key", "foreign-key", "not-null-constraint", "unique-constraint", "default-constraint", "auto-increment", "referential-integrity", "data-type", "index", "junction-table", "one-to-many-relationship", "many-to-many-relationship", "one-to-one-relationship", "check-constraint", "surrogate-key"]
    source_doc_page: 2
  - id: "3"
    text: |
      **Deliverable.** Submit a single PDF containing your logical ERD and a screenshot of the EERD from Workbench, and a single `.sql` file containing `CREATE TABLE` statements for all tables. The code should be well formatted and commented if needed.

      Tip: in Workbench you can go Model to Database (forward engineering: draw the EER diagram first, then generate the SQL) or Database to Model (reverse engineering: write the `CREATE TABLE` statements first, then generate the EER diagram).
    solution: |
      > [!warning] Student answer, not official. Check before relying on it.

      | Sheet requirement | Met? | Evidence |
      |---|---|---|
      | At least 4 entities | Yes | 7 in the ERD, 6 in the `.sql` |
      | At least 4 attributes per entity | Yes, except the junction table | `customer_order` has only its 2 FK columns (it is a junction, so this is expected, but it is the one entity under 4) |
      | Data types and constraints on attributes | Yes | `INT`, `VARCHAR`, `DECIMAL(10,2)`, `DATETIME`, `BOOLEAN`; `NOT NULL`, `UNIQUE`, `DEFAULT` |
      | One 1:M | Yes | `customer` to `reservation` |
      | One 1:1 | Yes | `order_header` to `payment` (`UNIQUE` FK) |
      | One M:N | Yes | `order_item` junction (and `customer_order` in the ERD only) |
      | ERD from a professional tool | Yes | draw.io style crow's-foot diagram, typed |
      | PKs and FKs shown | Yes | `PK`, `FK1`, `FK2` markers on every table |
      | `CREATE TABLE` for all tables | **Partly** | the ERD's `customer_order` has no `CREATE TABLE` |
      | Explicit FK and index names | Yes | `fk_...` and `idx_...` throughout |
      | Consistent naming | Mostly | `order_headers` plural, and the ERD has the typo `costumer_id` (twice) |
      | `.sql` well formatted and commented | Yes | comments on most columns; inline `#` and `--` comments both valid in MySQL |
      | Workbench EERD screenshot in the PDF | **No** | the student PDF has one page containing only the typed logical ERD |

      > [!todo] No solution in source
      > The Workbench EER diagram screenshot required by the sheet is **not in the student submission (.pdf)**, so there is nothing to show for it. Do not rely on this submission for what that screenshot should look like.

      > [!tip] Intuition
      > To satisfy the sheet's "one 1:1" cheaply: put a `UNIQUE` FK on the child. To satisfy "one M:N": put two FKs on a junction table (here `order_item`, which also carries data: `quantity`, `unit_price`). Keep the ERD and the SQL generated from each other (Forward or Reverse Engineering in Workbench, as the Tips on the sheet suggest) so they cannot drift apart the way these two did.
    related_terms: ["logical-erd", "create-table", "foreign-key", "junction-table", "unique-constraint"]
    source_doc_page: 3
---
