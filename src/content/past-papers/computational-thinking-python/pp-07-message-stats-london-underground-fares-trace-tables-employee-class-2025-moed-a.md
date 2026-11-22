---
title: "Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Computational Thinking & Python Exam, 2025 Moed A (2 March 2025, Economics track)"
semester: 1
year: 1
course: "Computational Thinking & Python"
instructor: Dr. Jonatan Alon
tags:
  - computational-thinking-python
  - python
  - past-paper
  - worked-solution
  - strings
  - dictionaries
  - trace-table
  - classes
  - dunder-methods
aliases:
  - Python Moed A 2025
  - Computational Thinking 2025 Moed A
  - PP07 Computational Thinking & Python
subject: computational-thinking-python
in_scope: true
---

# Message Stats, London Underground Fares, Trace Tables & Employee Class (2025 Moed A)

> Part of: [[Computational Thinking & Python]]
> **Computational Thinking & Python Exam, 2025 Moed A**, dated 2 March 2025, 3 hours, Dr. Jonatan Alon (lecturer) and Or Tzofi (tutor), as printed on the paper. Five compulsory questions, 100 points, English version used for the question text. A 3-page cheat sheet (list, string and dictionary functions) and a calculator are allowed.
> Builds on: [[Lec_02-Numeric Values and Strings]], [[Lec_03-Conditions and While Loops]], [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]], [[Lec_07-Dictionaries and Sets]], [[Lec_09-Classes]]

> [!info] Answers: all official
> The key PDF repeats the exam and fills in each answer box. Every question here is `official`; nothing is AI-solved. Because this is a code course, **every official solution was run** with `python3 -I`. Two of them have real defects (a `NameError` in Q2.3 and output formatting that differs from the example), and the printed Q5 class contains a syntax error in the question itself. These are flagged in `> [!warning]` boxes; the official answers are kept unchanged.

> [!note] Exam instructions (from the paper)
> Minor syntax slips (a typo in a function name, a missing colon or bracket) are forgiven. Assume all inputs are valid unless stated. No external modules. Comment your code. In the trace tables, each variable update goes on a new line and a run like 1 to 7 may be written "1-7".

## What this paper tests

| Question | Pts | Core idea | Lecture |
|---|---|---|---|
| Q1 | 30 | Strings and lists: `split`, counting with a loop, `max`/`min` with `key=len`, returning a dictionary, looping over a list | [[Lec_04-Lists, For Loops and Ranges]], [[Lec_06-Functions]] |
| Q2 | 30 | Building a dictionary from `input()`, a function with an if/elif ladder on `abs(zone difference)`, then a main program that totals, averages and counts with a frequency dictionary | [[Lec_07-Dictionaries and Sets]] |
| Q3 | 15 | Trace table: Fibonacci with two variables and a `for` over `range(n-2)` | [[Lec_04-Lists, For Loops and Ranges]] |
| Q4 | 15 | Trace table: run-length encoding with `text[i]` vs `text[i+1]` and a final append after the loop | [[Lec_02-Numeric Values and Strings]] |
| Q5 | 10 | Class completion: `__init__`, `__repr__`, `__eq__`, a method, creating objects, comparing objects | [[Lec_09-Classes]] |

> [!tip] Intuition
> Three patterns carry most of the points. **Split then loop and count** (Q1). **Frequency counter** with `d[key] = d.get(key, 0) + 1` (Q2.3). **Compare each item with its neighbour, and flush the last run after the loop** (Q4). If you can write those three from memory, Parts A and B are mostly mechanical.

---

# Part A: Writing code (60 points)

## Q1: Message statistics (30 pts)

### a. `count_long_words` (10 pts)

**Question.** Write a function called `count_long_words` that takes two parameters: `message` (string), a text message, and `min_length` (int), the minimum length for a word to be considered long. The function should return the number of words whose length is greater than or equal to `min_length`. A word is defined as a sequence of characters not containing spaces.

Example:

```python
message = "Welcome to Python class"
min_length = 6
result = count_long_words(message, min_length)
print(result)
```

Expected output:

```text
2
```

Explanation given: Welcome and Python are of length >= 6.

> [!success] Official answer
> ```python
> def count_long_words(message, min_length):
>     words = message.split()
>     count = 0
>     for word in words:
>         if len(word) >= min_length:
>             count += 1
>     return count
> ```

**Why it works.**

1. `message.split()` with no argument cuts the string at runs of whitespace and returns a list of words (see the string functions on the cheat sheet). `"Welcome to Python class"` becomes `['Welcome', 'to', 'Python', 'class']`.
2. `count` is an accumulator that starts at 0.
3. The `for` loop visits each word; `len(word) >= min_length` keeps only the long ones (note `>=`, not `>`: a word of exactly `min_length` letters counts).
4. The function **returns** the count; it does not print it. The caller prints.

Running the official code on the example prints `2`, as expected (checked).

> [!tip] Intuition
> The "sequence of characters not containing spaces" wording is just a plain-English definition of what `split()` gives you. Using `split()` instead of looping over characters is what separates a 3-line answer from a 12-line one.

### b. `process_messages` (10 pts)

**Question.** Write a function called `process_messages` that takes one parameter, `messages` (list), a list of message strings. The function should return a dictionary with: `total_messages` (int), the total number of messages in the list; `longest_message` (string), the longest message in the list; `shortest_message` (string), the shortest message in the list.

Example:

```python
messages = ["Hi there!", "Welcome to Python class", "OK"]
result = process_messages(messages)
print(result)
```

Expected output:

```text
{'total_messages': 3, 'longest_message': 'Welcome to Python class', 'shortest_message': 'OK'}
```

(The paper prints the dictionary across two lines and with double quotes around the long strings; that is only layout. Python itself prints single quotes.)

> [!success] Official answer
> ```python
> def process_messages(messages):
>     total_messages = len(messages)
>     longest_message = max(messages, key=len)
>     shortest_message = min(messages, key=len)
>     return {
>         'total_messages': total_messages,
>         'longest_message': longest_message,
>         'shortest_message': shortest_message
>     }
> ```

**Why it works.**

- `len(messages)` is the number of items in the list.
- `max(iterable, key=len)` compares the items **by their length** rather than alphabetically, and returns the item itself (not its length). `min(..., key=len)` does the opposite. Without `key=len`, `max` would compare strings alphabetically and give `'Welcome to Python class'` only by luck.
- Ties: `max` and `min` return the first item that reaches the extreme value, so with two equally long messages the earlier one wins.
- The dictionary literal uses the exact key names the question gives; a typo in a key is the easiest mark to lose here.

Output on the example (run):

```text
{'total_messages': 3, 'longest_message': 'Welcome to Python class', 'shortest_message': 'OK'}
```

### c. The main program (10 pts)

**Question.** Write a program that, given a list of messages named `messages`: calls `process_messages` to analyze the messages; calls `count_long_words` to count words with length >= 6, for each message in the list; prints the results.

Example:

```python
messages = ["Hi there!", "Welcome to Python class", "OK"]
# TODO: write your program here
```

Expected output:

```text
Messages Analysis:
{'total_messages': 3, 'longest_message': 'Welcome to Python class', 'shortest_message': 'OK'}

Long Word Count in Each Message:
'Hi there!': 1
'Welcome to Python class': 2
'OK': 0
```

> [!success] Official answer
> ```python
> messages = ["Hi there!", "Welcome to Python class", "OK"]
> min_length = 6
>
> # Analyze the messages using process_messages
> print("Messages Analysis:")
> print(process_messages(messages))
>
> print("Long Word Count in Each Message:")
> for message in messages:
>     print(f"'{message}': {count_long_words(message, min_length)}")
> ```

**Why it works.** The two functions from parts a and b are reused, not rewritten. The f-string puts literal single quotes around the message and calls `count_long_words` inside the braces. `"Hi there!"` has the word `there!` (6 characters including the exclamation mark) so it scores 1.

Output (run, with the two functions defined above the program):

```text
Messages Analysis:
{'total_messages': 3, 'longest_message': 'Welcome to Python class', 'shortest_message': 'OK'}
Long Word Count in Each Message:
'Hi there!': 1
'Welcome to Python class': 2
'OK': 0
```

> [!warning] Official answer vs the expected output: blank line
> The expected output has a **blank line** between the dictionary and `Long Word Count in Each Message:`. The official code does not print one, so its real output is the run above, without the blank line. This is cosmetic. The fix is `print("\nLong Word Count in Each Message:")`. Official answer kept as printed.

> [!tip] Intuition
> Keep `min_length = 6` in a variable instead of hard-coding `6` inside the call. It makes the program match the question's wording and changes in one place if the threshold changes.

---

## Q2: London Underground fares (30 pts)

The London Underground fare system is based on zones (1-6). Zone 1 covers central London, with zones 2-6 forming rings around it. You will build a program that lets users input station data, calculate trip fares, and analyze trip costs.

### a. `create_underground_stations` (9 pts)

**Question.** Write a function `create_underground_stations` that takes a single parameter `n` (integer), the number of stations. The function asks the user to enter the data of `n` stations into a dictionary representing the underground system. For each station, ask for `station_name` (string), the station's name, and `fare_zone` (integer in the range 1-6), the fare zone in which the station is located. The function should return a dictionary where station names are keys and zones are values.

Example (user input follows each prompt):

```text
Enter the number of stations: 4
Enter the station's name: Oxford Circus
Enter the station's fare zone: 1
Enter the station's name: Wembley Park
Enter the station's fare zone: 4
Enter the station's name: Westminster
Enter the station's fare zone: 1
Enter the station's name: Camden Town
Enter the station's fare zone: 2
```

Expected output of `print(stations_dict)`:

```text
{'Oxford Circus': 1, 'Wembley Park': 4, 'Westminster': 1, 'Camden Town': 2}
```

> [!success] Official answer
> ```python
> def create_underground_stations(n):
>     stations = {}
>     for _ in range(n):
>         station_name = input("Enter the station's name: ")
>         fare_zone = int(input("Enter the station's fare zone: "))
>         stations[station_name] = fare_zone
>     return stations
>
> n = int(input("Enter the number of stations: "))
> stations_dict = create_underground_stations(n)
> print("Output:", stations_dict)
> ```

**Why it works.**

1. Start with an empty dictionary `{}`.
2. Loop `n` times. The loop variable is not needed, so it is called `_`.
3. `input()` always returns a **string**, so the zone is wrapped in `int(...)`. The station name stays a string.
4. `stations[station_name] = fare_zone` adds a key-value pair (station to zone). Station names are unique keys, so entering the same name twice would overwrite the earlier zone (see the key-uniqueness trap in [[Lec_07-Dictionaries and Sets]]).
5. `return stations` hands the finished dictionary back. The last three lines are the calling code; only the function itself was asked for.

> [!tip] Intuition
> "Station to zone" is the natural dictionary shape: you will look zones up **by station name** in part b, which is exactly what a dictionary is for. A list of pairs would force a search each time.

I ran this function with the example input supplied on stdin; the dictionary built was the one in the expected output (the prompts and the final dictionary appear in the run of part c below).

### b. `calculate_trip_cost` (6 pts)

**Question.** Write a function `calculate_trip_cost` that takes three parameters: `station_zones` (dictionary of stations and zones), `origin` (string, starting station) and `destination` (string, destination station). The function should calculate the fare of a single trip based on zone difference and return it as a float. Assume both stations exist in the dictionary. The price is:

| Zone difference | Fare |
|---|---|
| Same zone | 2.50 pounds |
| 1-zone difference | 3.00 pounds |
| 2-zone difference | 3.80 pounds |
| 3+ zones difference | 5.00 pounds |

Examples (using the dictionary from part a):

```python
print(calculate_trip_cost(stations_dict, 'Oxford Circus', 'Wembley Park'))
print(calculate_trip_cost(stations_dict, 'Oxford Circus', 'Westminster'))
print(calculate_trip_cost(stations_dict, 'Camden Town', 'Westminster'))
```

```text
5.0
2.5
3.0
```

> [!success] Official answer
> ```python
> def calculate_trip_cost(station_zones, origin, destination):
>     zone_difference = abs(station_zones[origin] - station_zones[destination])
>
>     if zone_difference == 0:
>         return 2.50
>     elif zone_difference == 1:
>         return 3.00
>     elif zone_difference == 2:
>         return 3.80
>     else:
>         return 5.00
> ```

**Why it works.**

- Look up both zones with `station_zones[origin]` and `station_zones[destination]`.
- Take `abs(...)` of the difference so the direction of travel does not matter (Wembley Park to Oxford Circus costs the same as Oxford Circus to Wembley Park).
- An `if / elif / else` ladder maps the difference to a fare. The final `else` covers "3 or more" without a comparison, because 0, 1 and 2 have already been handled.
- Return floats (`2.50`, `3.00`, ...) as the question demands.

Worked checks on the example dictionary:

| Trip | Zones | abs difference | Fare |
|---|---|---|---|
| Oxford Circus to Wembley Park | 1 and 4 | 3 | 5.0 |
| Oxford Circus to Westminster | 1 and 1 | 0 | 2.5 |
| Camden Town to Westminster | 2 and 1 | 1 | 3.0 |

These match the three expected prints (the function returned `5.0`, `2.5`, `3.0` when run).

### c. The trip-fare program (15 pts)

**Question.** Write a program that:

1. asks the user for a number `n` and creates a dictionary `station_zones` with `n` stations using `create_underground_stations`;
2. asks the user to enter the number of trips to calculate (`m`);
3. loops `m` times, asking for the origin and destination of each trip and printing the fare;
4. prints the total fare cost of all trips;
5. prints the average fare cost;
6. counts the trips by fare price and prints the results (hint: use a dictionary).

Example output for the trips part:

```text
Enter the number of trips: 3
Enter the origin station: Oxford Circus
Enter the destination station: Wembley Park
Origin: Oxford Circus, Destination: Wembley Park, Fare: £5
Enter the origin station: Oxford Circus
Enter the destination station: Westminster
Origin: Oxford Circus, Destination: Westminster, Fare: £2.5
Enter the origin station: Camden Town
Enter the destination station: Westminster
Origin: Camden Town, Destination: Westminster, Fare: £3

Total cost: £10.5
Average cost: £3.5
Trips per fare:
£5: 1 trip(s)
£2.5: 1 trip(s)
£3: 1 trip(s)
```

> [!success] Official answer (as printed in the key)
> ```python
> # Main program
> n = int(input("Enter the number of stations: "))
> station_zones = create_underground_stations(n)
> m = int(input("Enter the number of trips to calculate: "))
>
> total_fare = 0
> fare_counts = {}
>
> for _ in range(m):
>     origin = input("Enter the origin station: ")
>     destination = input("Enter the destination station: ")
>     fare = calculate_trip_cost(station_zones, origin, destination)
>     print(f"Origin: {origin}, Destination: {dest}, Fare: £{fare:.2f}")
>
>     total_fare += fare
>     fare_counts[fare] = fare_counts.get(fare, 0) + 1
>
> print(f"\nTotal cost: £{total_fare:.2f}")
>
> average_fare = total_fare / m
> print(f"Average cost: £{average_fare:.2f}")
>
> # print("\nTrip per fare:")
> for fare, count in fare_counts.items():
>     print(f"£{fare:.2f}: {count} trip(s)")
> ```

> [!warning] Official answer fails: `NameError`, plus formatting differences
> I ran the key's program with the question's own example input (four stations, three trips). The key as printed crashes on the first trip:
>
> ```text
> NameError: name 'dest' is not defined
> ```
>
> The variable is called `destination`; the f-string uses `{dest}`. This is a typo (the instructions say easily fixable slips are forgiven). With `{dest}` changed to `{destination}` and nothing else changed, the program runs and prints (run, prompts omitted):
>
> ```text
> Origin: Oxford Circus, Destination: Wembley Park, Fare: £5.00
> Origin: Oxford Circus, Destination: Westminster, Fare: £2.50
> Origin: Camden Town, Destination: Westminster, Fare: £3.00
>
> Total cost: £10.50
> Average cost: £3.50
> £5.00: 1 trip(s)
> £2.50: 1 trip(s)
> £3.00: 1 trip(s)
> ```
>
> Two further differences from the expected output, neither marked as an error by the key: (1) `:.2f` prints `£5.00` where the example shows `£5` (the example output is plain `str` formatting, e.g. `{fare}`); (2) the `Trips per fare:` heading is commented out in the key, so it is never printed. The official answer is kept as printed; all three points are cosmetic once `dest` is fixed.

**How the program works.**

1. **Setup.** Read `n`, build the dictionary with the function from part a, read `m`.
2. **Two accumulators.** `total_fare = 0` is a running sum; `fare_counts = {}` is a **frequency counter** keyed by fare.
3. **The loop** runs `m` times. Each pass reads an origin and destination, gets the fare from `calculate_trip_cost`, prints the line for that trip, adds the fare to the total, and updates the count.
4. **The frequency-counter line.** `fare_counts[fare] = fare_counts.get(fare, 0) + 1` reads: take the current count for this fare, or 0 if the fare has not been seen yet (`get` with a default, on the cheat sheet), add 1, store it back. This avoids a `KeyError` on the first occurrence.
5. **After the loop.** Total is `total_fare`; average is `total_fare / m`; the last loop walks `fare_counts.items()` and prints each fare with its count.

Trace of the accumulators on the example trips:

| Trip | `fare` | `total_fare` | `fare_counts` |
|---|---|---|---|
| start | | 0 | `{}` |
| 1 | 5.0 | 5.0 | `{5.0: 1}` |
| 2 | 2.5 | 7.5 | `{5.0: 1, 2.5: 1}` |
| 3 | 3.0 | 10.5 | `{5.0: 1, 2.5: 1, 3.0: 1}` |

Average is 10.5 divided by 3, which is 3.5.

> [!tip] Intuition
> Using the **fare itself as the dictionary key** is the trick the hint points at: "count by category" is always `d[category] = d.get(category, 0) + 1`. Floats are fine as keys here because the fares are fixed literal values (5.0, 2.5, 3.0), so equal fares always match exactly.

> [!warning] Exam trap
> `int(input(...))` for the numbers of stations, trips and zones. Forgetting `int` leaves strings, and `range(n)` then raises a `TypeError`. Dividing by `m` would fail if `m` were 0, but the instructions say not to handle cases the question does not mention.

---

# Part B: Running code and trace tables (30 points)

Procedure for any trace table: execute the code by hand, writing one row each time a variable changes. Check against the console output last.

## Q3: `mystery_sequence(7)` (15 pts)

**Question.** Run the given code and complete the trace table (columns `i`, `a`, `b`, `c`), and write the printed output in the console section.

```python
def mystery_sequence(n):
    a = 1
    b = 1
    print(a, end=" ")
    print(b, end=" ")

    for i in range(n-2):
        c = a + b
        print(c, end=" ")
        a = b
        b = c

mystery_sequence(7)
```

> [!success] Official answer
> Trace table (values after each pass of the loop body; the first row is the initial assignment):
>
> | Step | `i` | `a` | `b` | `c` |
> |---|---|---|---|---|
> | start | | 1 | 1 | |
> | pass 1 | 0 | 1 | 2 | 2 |
> | pass 2 | 1 | 2 | 3 | 3 |
> | pass 3 | 2 | 3 | 5 | 5 |
> | pass 4 | 3 | 5 | 8 | 8 |
> | pass 5 | 4 | 8 | 13 | 13 |
>
> Console output: `1 1 2 3 5 8 13`

**Walk-through.**

- `n = 7`, so `range(n-2)` is `range(5)`: `i` takes the values 0, 1, 2, 3, 4 (five passes).
- Before the loop the function prints `a` and `b` (both 1), so the first two numbers are already out.
- In each pass: `c = a + b` (the next Fibonacci number), print it, then **shift the window**: `a` takes the old `b`, `b` takes the new `c`. The order matters. `a = b` must come before `b = c`; swapping those two lines would make `a` equal the new `c` and break the sequence.
- Five passes print 2, 3, 5, 8, 13, which together with the first two 1s gives seven numbers in total, matching `n = 7`.

Output (run; the trailing space comes from `end=" "`):

```text
1 1 2 3 5 8 13 
```

> [!tip] Intuition
> The function prints the first `n` Fibonacci numbers: two are printed up front and `n-2` are produced by the loop. That is why the range is `n-2`, not `n`.

## Q4: Tracing `process_string` (15 pts)

**Question.** Run the given code and complete the trace table (columns `i`, `text[i]`, `text[i+1]`, `count`, `result`), write the printed output, and describe in a single sentence what the function does.

```python
def process_string(text):
    result = ""
    count = 1

    for i in range(len(text)-1):
        if text[i] == text[i+1]:
            count += 1
        else:
            result += text[i] + str(count)
            count = 1

    result += text[-1] + str(count)
    return result

print(process_string("aabbbcc"))
```

> [!success] Official answer
> Trace table (a row per pass; `count` and `result` show their value after that pass):
>
> | Step | `i` | `text[i]` | `text[i+1]` | `count` | `result` |
> |---|---|---|---|---|---|
> | start | | | | 1 | `''` |
> | pass 1 | 0 | a | a | 2 | `''` |
> | pass 2 | 1 | a | b | 1 | `'a2'` |
> | pass 3 | 2 | b | b | 2 | `'a2'` |
> | pass 4 | 3 | b | b | 3 | `'a2'` |
> | pass 5 | 4 | b | c | 1 | `'a2b3'` |
> | pass 6 | 5 | c | c | 2 | `'a2b3'` |
> | after loop | | | | 2 | `'a2b3c2'` |
>
> Console output: `a2b3c2`
>
> Description: returns a string consisting of pairs of a character and the number of its consecutive repetitions.

**Walk-through.**

- `len(text)` is 7, so the loop runs for `i = 0..5`. The loop stops at the second-to-last index because it looks at `text[i+1]`; going further would raise an `IndexError`.
- **Same as the next letter:** the current run is continuing, so `count += 1`.
- **Different from the next letter:** the run has just ended, so write the character and its count into `result` and reset `count` to 1.
- The last run never meets a "different next letter" (there is no next letter), so it is written **after the loop** with `text[-1] + str(count)`. Forgetting this line would lose the final `c2`.
- Rows with unchanged `result` show the previous value, as in the key. The last row is the line after the loop: `count` is still 2 and `result` becomes `'a2b3c2'`.

Output (run): `a2b3c2`.

> [!tip] Intuition
> This is **run-length encoding**: `aabbbcc` becomes "a twice, b three times, c twice". The loop compares each character with its neighbour; the closing line handles the run that has no right-hand neighbour.

> [!warning] Exam trap
> Cases outside the example (an empty string would crash at `text[-1]`; a string with no repeated letters gives `a1b1c1`) are not required. The question only asks you to trace the given input.

---

# Part C: Code completion (10 points)

## Q5: The `Employee` class (10 pts)

**Question.** The class below represents an employee with a name, position and base salary. Fill in the blank at all places marked (1) to (5).

```python
class Employee:
    def __init__(self, name, position, base_salary):
        # (1) Complete the constructor to initialize the attributes
        self.name = name
        (1)___________________________
        self.base_salary = base_salary

    def __repr__(self):
        # (2) Complete the string representation in format:
        # "Employee(name='John Doe', position='Developer', base_salary=75000)"
        return (2)__________________________

    def __eq__(self, other):
        if not isinstance(other, Employee):
            return False
        return self.name == other.name and self.position == other.position and \
            self.base_salary = other.base_salary

    def calculate_bonus(self):
        # (3) Complete the calculate_bonus method:
        # The bonus is 10% of base salary
        return (3)_________________________

# Main program
# (4) Create an Employee object for Jane Smith, Senior Developer, with base salary 85000
employee1 = (4)_________________________
# (4) Create an Employee object for John Doe, Developer, with base salary 75000
employee2 = (4)_________________________

# Test the implementation
print(f"Employee 1: {employee1}")
print(f"Employee 2: {employee2}")
print(f"Bonus for employee 1: ${employee1.calculate_bonus():.2f}")
# (5) Print "Are the employees equal?" True or False
(5)_________________________
```

Expected output:

```text
Employee 1: Employee(name='Jane Smith', position='Senior Developer', base_salary=85000)
Employee 2: Employee(name='John Doe', position='Developer', base_salary=75000)
Bonus for employee 1: $8500.00
Are the employees equal? False
```

> [!success] Official answers
> ```python
> # (1)
> self.position = position
>
> # (2)
> return f"Employee(name='{self.name}', position='{self.position}', base_salary={self.base_salary})"
>
> # (3)
> return self.base_salary * 0.1
>
> # (4)
> employee1 = Employee("Jane Smith", "Senior Developer", 85000)
> employee2 = Employee("John Doe", "Developer", 75000)
>
> # (5)
> print(f"Are the employees equal? {employee1 == employee2}")
> ```

> [!warning] The printed class does not run: `=` instead of `==` in `__eq__`
> The `__eq__` method is given complete on the paper (it is not one of the blanks), but its last comparison is written `self.base_salary = other.base_salary` with a single `=`. In Python an assignment cannot appear inside an expression like that, so running the class as printed stops with:
>
> ```text
> SyntaxError: invalid syntax
> ```
>
> This is a typo in the question, not in the official answers for (1) to (5). With `==` the completed program runs and gives exactly the expected output (run):
>
> ```text
> Employee 1: Employee(name='Jane Smith', position='Senior Developer', base_salary=85000)
> Employee 2: Employee(name='John Doe', position='Developer', base_salary=75000)
> Bonus for employee 1: $8500.00
> Are the employees equal? False
> ```
>
> Official answers kept; I checked them with the `==` fix only.

**Blank by blank.**

1. **Constructor attribute.** The constructor receives `position` and must store it on the object: `self.position = position`. The other two attributes follow the same pattern. Python then lets any method read it as `self.position`.
2. **`__repr__`.** This special method returns the string Python shows when you `print` the object or put it in an f-string. Build it with an f-string that mirrors the required format, with literal single quotes around the text fields and no quotes around the number (`base_salary=85000`). It must **return** a string, not print one.
3. **Bonus.** 10 percent of the salary is `self.base_salary * 0.1`. For 85000 this is `8500.0`, which the f-string in the main program formats to `8500.00` with `:.2f`.
4. **Creating objects.** Calling the class name `Employee(...)` runs `__init__` with the arguments in the order `name, position, base_salary` (`self` is passed automatically). The positional order matters.
5. **Comparing.** `employee1 == employee2` calls `employee1.__eq__(employee2)`. The method first checks that the other object is an `Employee`, then compares all three attributes. Jane and John differ in name, position and salary, so the result is `False`, and the f-string prints that word.

> [!tip] Intuition
> `==` between two objects of your own class is **always `False`** (different objects in memory) unless you define `__eq__`. Defining it is how you say "two employees are equal when their data are equal". The same idea is why `__repr__` is needed to make `print(employee1)` readable instead of printing a memory address.

> [!warning] Exam trap
> `base_salary * 0.1` could be written `base_salary / 10` or `0.1 * self.base_salary`; all are fine. Writing `base_salary * 10` (a typo for percent) or forgetting `self.` before `base_salary` (a `NameError`) loses the mark.

---

## Recap

| Question | Task | Key tool | One-line answer |
|---|---|---|---|
| Q1a (10) | Count words of length at least `min_length` | `split()`, loop, counter | Split, loop, `if len(word) >= min_length: count += 1`, return count |
| Q1b (10) | Message statistics dictionary | `len`, `max(key=len)`, `min(key=len)` | Return a dict with the three keys |
| Q1c (10) | Report for a message list | reuse functions, f-string | Print the analysis dict, then one line per message |
| Q2a (9) | Build station dictionary from input | `input`, `int`, dict assignment | Loop `n` times, `stations[name] = int(zone)` |
| Q2b (6) | Fare from zone difference | `abs`, if/elif/else | 0 gives 2.5, 1 gives 3.0, 2 gives 3.8, 3 or more gives 5.0 |
| Q2c (15) | Trip loop with total, average, counts | accumulator, `get(key, 0) + 1` | Total 10.5, average 3.5, one trip at each of 5, 2.5, 3 (key has a `dest` typo) |
| Q3 (15) | Trace Fibonacci | `range(n-2)`, window shift | `1 1 2 3 5 8 13` |
| Q4 (15) | Trace run-length encoding | neighbour comparison, flush after loop | `a2b3c2`: characters paired with run lengths |
| Q5 (10) | Complete `Employee` class | `__init__`, `__repr__`, `__eq__`, method | `self.position = position`; f-string repr; `base_salary * 0.1`; two constructor calls; print `employee1 == employee2` gives False |

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_02-Numeric Values and Strings]]
- [[Lec_03-Conditions and While Loops]]
- [[Lec_04-Lists, For Loops and Ranges]]
- [[Lec_06-Functions]]
- [[Lec_07-Dictionaries and Sets]]
- [[Lec_09-Classes]]
