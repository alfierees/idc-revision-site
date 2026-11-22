---
title: "Lec 08: Searching and Sorting"
semester: 1
year: 1
course: "Computational Thinking & Python"
lecture: 8
tags:
  - computational-thinking-python
  - python
  - searching
  - sorting
  - linear-search
  - binary-search
  - selection-sort
  - quick-sort
  - complexity
subject: computational-thinking-python
in_scope: true
---

# Lecture 8: Searching and Sorting

> Part of: [[Computational Thinking & Python]]
> Key concepts: [[Linear Search]], [[Binary Search]], [[Divide and Conquer]], [[Time Complexity]], [[Best, Average and Worst Case]], [[Selection Sort]], [[Quick Sort]], [[sorted() and sort()]], [[Sort Key]]

This note covers Lesson VIII (`Lecture 08 Slides.pdf`, all 31 slides). There is no companion notebook for this lecture. Two slide notes are flagged where the slide is wrong or unclear.

## 1. Operations on data structures

Common operations on lists and other data structures: add or remove an element, copy, clear, print, **search** (scan to find the index of a key) and **sort** (arrange the elements in some order). The running example is a phone book: you want to find someone's number (search) and you probably want the book ordered by name (sort), and the two are linked, because a sorted book is much faster to search.

## 2. Searching

**Searching** means finding a specific value in a collection. Different methods have different trade-offs.

### Built-in search

```python
numbers = [1, 5, 8, 12, 16]
print(8 in numbers)
print(9 in numbers)
print(numbers.index(8))
```

```text
True
False
2
```

`in` answers yes or no. `index(x)` returns the position of the first match (and raises `ValueError` if `x` is absent, which the slide does not show).

### Linear search

Check each element one by one from the start. It works on **any** list, sorted or not, but is slow for big lists.

```python
def linear_search(lst, num):
    for i in range(len(lst)):
        if lst[i] == num:
            return i      # found: return the index
    return -1             # not found
```

`-1` is the "not found" signal, chosen because it can never be a valid index.

### Best, average and worst case

[[Time Complexity]] analysis splits into three cases: **worst case** (the most work), **best case** (the least) and **average case** (the hardest to analyse). The slide uses this list of nine numbers:

`4 17 21 12 6 9 1 15 3`

For linear search, the number of comparisons equals the position of the target, counting from 1:

| Searching for | Position | Comparisons | Case |
|---|---|---|---|
| 4 | first | 1 | best case |
| 3 | last | 9 | worst case |
| 6 | fifth | 5 | roughly the middle, so near the average |

> [!warning] Slide labels look mismatched
> The slide asks for the cost of searching "4 (best-case)", "3 (average-case)", "6 (worst-case)". For this list that does not fit: 4 is first (best, correct), but 3 is the **last** element (that is the worst case, 9 comparisons) and 6 is in the middle. The table above is worked out from the code, not copied from the slide. The slide gives no answers.

> [!info] Average case for linear search
> If the target is equally likely to be anywhere in a list of n items, you check about half of them on average, so the average is still proportional to n. (Reconstructed: the slides only name the three cases.)

### Binary search (divide and conquer)

If the list is **sorted**, you can do much better. At each step, guess the **middle** element:

1. If the guess is correct, done.
2. If the target is smaller than the middle, it can only be in the left half, so discard the right half.
3. If it is larger, discard the left half.

Each wrong guess **halves the search space**. This approach of shrinking the problem by a constant fraction each step is called [[Divide and Conquer]]. The method relies entirely on the list being sorted.

```python
def binary_search(lst, num):
    left = 0
    right = len(lst) - 1
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == num:
            return mid
        elif lst[mid] < num:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

`left` and `right` bound the part of the list still under consideration; `mid` is their integer midpoint. When `left` passes `right` the range is empty, so the number is absent and the function returns `-1`.

**Slide example: search 49** in `[1, 3, 4, 6, 9, 12, 15, 17, 21, 34, 41, 49, 65]` (13 numbers, the slides label the pointers L, M and U for lower, middle, upper). I ran the code above on this list:

| Step | left | right | mid | `lst[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 12 | 6 | 15 | 15 < 49, go right: `left = 7` |
| 2 | 7 | 12 | 9 | 34 | 34 < 49, go right: `left = 10` |
| 3 | 10 | 12 | 11 | 49 | found, return index 11 |

**Slide example: search 1** in the same list:

| Step | left | right | mid | `lst[mid]` | Decision |
|---|---|---|---|---|---|
| 1 | 0 | 12 | 6 | 15 | 15 > 1, go left: `right = 5` |
| 2 | 0 | 5 | 2 | 4 | 4 > 1, go left: `right = 1` |
| 3 | 0 | 1 | 0 | 1 | found, return index 0 |

Both match the slide diagrams (the discarded part of the list is greyed out on each row). For a number that is **not** in the list, such as 5, the same code keeps shrinking the range (the middles it checks are 15, 4, 9, 6) and then returns `-1`.

> [!warning] Binary search on an unsorted list gives wrong answers
> The "discard half" argument is only valid because everything left of `mid` is smaller and everything right of it is larger. On an unsorted list the target could be in the half you threw away, so the function may return `-1` for a value that is present.

### Running time comparison

Linear search needs up to n steps. Binary search halves the list each time, so it needs about log base 2 of n steps (the number of times you can halve n before reaching 1).

| List size n | Linear search (n steps) | Binary search (log n steps) |
|---|---|---|
| 10 | 10 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

(The table is from the slide; the binary-search column is the worst case, rounding up. I checked these values with code.) Binary search finds a number in a million-element list in at most about 20 looks.

![[Lec08_growth_rates.png]]

*Left: steps against list size for the two searches. Right: the two sorts, over a smaller range, because quadratic growth explodes quickly. Plotted for these notes from the formulas n, log2 n, n squared and n log2 n; not a slide image.*

On a short list the gap is small. The slide compares finding 16 in `[1, 5, 8, 12, 16]`: linear search visits 1, 5, 8, 12, 16 (**5 steps**); binary search checks the middle 8, then 12, then 16 (**3 steps**). (On a 5-element list the middle of the whole list is 8, then the upper part is `[12, 16]` whose middle by the code is index 3, the value 12, then 16.)

### Which one to use

| Use linear search when | Use binary search when |
|---|---|
| the list is **unsorted** | the list is **sorted** |
| the list is small | the list is large |
| you need **all** occurrences | you need a (first) occurrence |
| simplicity is preferred | performance matters |

> [!note] "First occurrence"
> The slide lists "need first occurrence" under binary search. As written, `binary_search` returns *some* matching index; with duplicates it is not guaranteed to be the first. Linear search from the left always returns the first match. Treat the slide's wording loosely.

### Exercise: linear search for all occurrences

Instead of returning at the first match, collect every matching index and return them at the end:

```python
def find_all_occurrences(lst, target):
    positions = []
    for i in range(len(lst)):
        if lst[i] == target:
            positions.append(i)
    return positions

print(find_all_occurrences([1, 2, 1, 3, 1], 1))
```

```text
[0, 2, 4]
```

The result is an empty list if the target never appears.

> [!tip] Searching key takeaways
> Built-ins are `in` and `.index`. Linear search is simple and slow but works on any list. Binary search is much faster but requires a sorted list. Also consider list size, whether it is sorted, how often you will search, and memory.
> If you search many times, sorting once and then using binary search can pay off. (Reconstructed: the slide only lists "search frequency" as a factor.)

## 3. Sorting

**Sorting** means arranging data in an order, usually ascending or descending (think of organising a deck of cards).

### Built-in sorting

`sorted()` returns a **new** list and leaves the original alone. `.sort()` sorts the list **in place** and returns `None`.

```python
numbers = [64, 34, 25, 12, 22]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
print(numbers)

numbers.sort()
print(numbers)
```

```text
[12, 22, 25, 34, 64]
[64, 34, 25, 12, 22]
[12, 22, 25, 34, 64]
```

| | `sorted(x)` | `x.sort()` |
|---|---|---|
| returns | a new sorted list | `None` |
| original list | unchanged | modified |
| works on | any iterable | lists only |

> [!warning] Classic mistake
> `numbers = numbers.sort()` sets `numbers` to `None`, because `sort()` returns nothing. Use `numbers.sort()` alone, or `numbers = sorted(numbers)`.

### Selection sort

Idea: repeatedly find the smallest remaining element and swap it into the next position. After step i, the first i+1 positions hold the i+1 smallest values in order.

```python
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i                      # index of the minimum so far
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]   # swap
    return arr

numbers = [64, 34, 25, 12, 22]
print(selection_sort(numbers.copy()))
```

```text
[12, 22, 25, 34, 64]
```

The function sorts the list it is given **in place** (and also returns it). The slide's second version calls it on `numbers.copy()` so the original `numbers` stays unsorted. Without `.copy()`, both names would refer to the same, now sorted, list.

Trace on `[64, 34, 25, 12, 22]` (I ran this; the slide's step list agrees):

| i | List after the swap | What happened |
|---|---|---|
| 0 | `[12, 34, 25, 64, 22]` | smallest is 12 (at index 3), swap with index 0 |
| 1 | `[12, 22, 25, 64, 34]` | smallest of the rest is 22, swap with index 1 |
| 2 | `[12, 22, 25, 64, 34]` | 25 is already the smallest of the rest, swap with itself |
| 3 | `[12, 22, 25, 34, 64]` | smallest of `[64, 34]` is 34, swap |
| 4 | `[12, 22, 25, 34, 64]` | one element left, done |

> [!note] Why it is slow
> The outer loop runs n times and for each one the inner loop scans the rest of the list, about n/2 comparisons on average. Overall that is proportional to n squared, written $O(n^2)$. (Reconstructed: the slides state the complexity but do not derive it.)

### Quick sort

A fast, recursive, divide-and-conquer sort. Pick a **pivot**, split the list into the elements smaller than, equal to and larger than the pivot, then sort the smaller and larger parts the same way and join the three pieces.

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr                      # base case
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([64, 34, 25, 12, 22]))
```

```text
[12, 22, 25, 34, 64]
```

Trace on `[64, 34, 25, 12, 22]`: the middle element (index 2) is the pivot **25**.

| Call | Pivot | left | middle | right |
|---|---|---|---|---|
| `quick_sort([64, 34, 25, 12, 22])` | 25 | `[12, 22]` | `[25]` | `[64, 34]` |
| `quick_sort([12, 22])` | 22 (index 1) | `[12]` | `[22]` | `[]` |
| `quick_sort([64, 34])` | 34 (index 1) | `[]` | `[34]` | `[64]` |

Joining back: `[12] + [22] + []` gives `[12, 22]`; `[] + [34] + [64]` gives `[34, 64]`; then `[12, 22] + [25] + [34, 64]` gives `[12, 22, 25, 34, 64]`. The slide's compressed steps are `[12, 22] + [25] + [34, 64]`.

Why it is fast: when the pivot splits the list roughly in half, there are about log n levels of recursion and each level touches all n elements in total, giving about n log n steps. (Reconstructed from the slides' complexity claim.) The quick sort in the slides is a simple teaching version that builds new lists; the real Python `sort()` is a more sophisticated algorithm with the same n log n behaviour.

> [!warning] Slide error
> On the Quick Sort slide the example code calls `selection_sort(numbers)` instead of `quick_sort(numbers)`, an evident copy-paste slip. It should call `quick_sort`.

> [!note] Recursion
> `quick_sort` calls itself on smaller lists, with `len(arr) <= 1` as the stopping case. If a recursive function had no base case it would never stop.

### Running time comparison

| List size n | Selection sort (n squared steps) | Python's `sort()` (n log n steps) |
|---|---|---|
| 10 | 100 | 33 |
| 100 | 10,000 | 664 |
| 1,000 | 1,000,000 | 9,970 |
| 1,000,000 | 1e12 | 19,930,000 |

(From the slide. By my calculation n log2 n for n = 1,000 is about 9,966; the slide rounds to 9,970.) At a million elements selection sort needs about fifty thousand times more steps. This is why you should **use the built-in sort in real code**.

| | Selection sort | Quick sort / Python `sort()` |
|---|---|---|
| idea | repeatedly pick the minimum | split around a pivot, recurse |
| complexity | $O(n^2)$ | $O(n \log n)$ on average |
| code | two nested loops | recursion |
| use in practice | to learn from | yes (or just call the built-in) |

### Practical sorting examples

```python
scores = [88, 92, 75, 95, 83]
print(sorted(scores))

names = ["Zack", "Alice", "Bob", "Carol"]
names.sort()
print(names)

words = ["cat", "dog", "elephant", "ant"]
print(sorted(words, key=len))

numbers = [64, 34, 25, 12, 22]
print(sorted(numbers, reverse=True))
```

```text
[75, 83, 88, 92, 95]
['Alice', 'Bob', 'Carol', 'Zack']
['cat', 'dog', 'ant', 'elephant']
[64, 34, 25, 22, 12]
```

- Strings sort alphabetically (by character code, so capitals come before lowercase letters).
- `key=len` is a [[Sort Key]]: a function applied to each element, and items are compared by its result. Here, by word length.
- `reverse=True` gives descending order.
- Sorting is **stable**: items with equal keys keep their original relative order. That is why `'cat'` stays before `'dog'` and `'ant'` stays after them, all three having length 3. (Stability is not stated in the slides; it is a documented Python behaviour that the output above shows.)

> [!tip] Sorting key takeaways
> `sorted()` gives a new list, `.sort()` changes in place. Selection sort is simple but slow, $O(n^2)$. Quick sort and Python's own sort are efficient, about $O(n \log n)$ on average.

## Summary

- **Searching:** `in` and `.index` are built in. [[Linear Search]] checks elements one by one, works on any list and costs up to n steps. [[Binary Search]] needs a **sorted** list, halves the search space each step and costs about log2 n steps (20 steps for a million items).
- Complexity is judged by **best, average and worst case**. For linear search the best case is 1 step, the worst case is n.
- **Sorting:** `sorted()` returns a new list; `.sort()` sorts in place and returns `None`. Both accept `key=` and `reverse=`.
- [[Selection Sort]]: repeatedly swap the smallest remaining element into place; $O(n^2)$, slow.
- [[Quick Sort]]: pick a pivot, partition into smaller, equal and larger, recurse; about $O(n \log n)$. In real code, just use the built-in sort.
- Sorting first makes binary search possible, which is the link between the two halves of the lecture.

## Related notes

- [[Computational Thinking & Python]]
- [[Lec_07-Dictionaries and Sets]] (set and dict lookup is also fast, for a different reason: hashing)
- [[Time Complexity]]
