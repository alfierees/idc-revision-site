---
title: "Lec 08: VBA Macros"
semester: 1
year: 1
course: "Excel for Data Analysis"
lecture: 8
tags:
  - excel-data-analysis
  - vba
  - macros
  - inputbox
  - loops
  - nested-if
source: "Class files/Macro coding.xlsb"
subject: excel-data-analysis
in_scope: true
---

# Lec 08 - VBA Macros

> [!abstract] What this lecture is about
> Up to now every Excel skill in the course was a **formula or a menu feature**. This class moves to **automation**: a [[VBA Macro]] is a small program stored inside the workbook that does what you would otherwise click by hand. The class workbook (`Macro coding.xlsb`) holds five exercises, each with a button on a sheet that runs one macro. They climb in difficulty: record a macro, edit it, write one from scratch, take user input, then combine input, a loop and a nested decision into a BMI calculator.

> [!note] Source and how reliable this note is
> The workbook is a binary `.xlsb`, but its embedded VBA project was decompressed and the **real macro code was read from it**. Every code block below is the code in the workbook (typos in the code left as written). The explanations around the code are written for revision. Where a typo would confuse you, it is flagged.

Related notes: [[Lec_02-IF Statements & Logical Functions]] (the same decision logic as a worksheet formula), [[Lec_01-Sorting, Filters & Database Functions]].

---

> [!info] Class file (download)
> [Macro class workbook, 19 January (xlsb)](/papers/excel-data-analysis/class-19-1-macros.xlsb): `19.1.xlsb`, the Moodle copy of the class file for this lecture. Enable macros to run the buttons.

## 1. Why macros, and where the code lives

A macro saves a sequence of actions so you can replay it with one click. Use one when a task is repetitive, or when you want to hand a colleague a button instead of a manual.

| Concept | Meaning |
|---|---|
| [[VBA Macro]] | A named block of Visual Basic for Applications code, `Sub name()` ... `End Sub` |
| Module | A container for macros. This workbook has `Module1` (the five exercise macros) and `Module3` (a bonus zoom macro) |
| [[Macro-Enabled Workbook]] | Code can only be saved in `.xlsm` or `.xlsb`. A plain `.xlsx` silently drops the macros |
| [[Macro Button]] | A shape or button on the sheet with a macro assigned, so users never open the code |
| VBA editor | `Alt + F11` opens the editor where code is read and edited |

The five buttons in the workbook are wired like this (read from the drawing objects):

| Button | Macro it runs |
|---|---|
| Series button | `series_num` |
| Erase button | `erase_num` |
| My data button | `mydata_new` |
| Calculator button | `calc` |
| BMI button | `bmi` |

> [!tip] Exam habit
> Every macro starts with `Sub name()` and ends with `End Sub`. Names cannot contain spaces, which is why the class uses `series_num`, `erase_num`.

---

## 2. Exercise 1: add a series of numbers (recorded macro)

The sheet's task text reads: **"Add a series of numbers"**, then **"add a button to activate the macro"**. This is the entry-level exercise: switch on the [[Macro Recorder]], perform the steps by hand, stop recording, and Excel writes the code for you.

Code from the class file (recorder output, which is why it is verbose):

```vba
Sub series_num()
    Range("d1").Select
    ActiveCell.FormulaR1C1 = "1"
    Range("d2").Select
    ActiveCell.FormulaR1C1 = "2"
    Range("d1:d2").Select
    Selection.AutoFill Destination:=Range("d1:d10000"), Type:=xlFillDefault
    Range("A1:A14").Select
    Range("G1").Select
End Sub
```

**Line by line**

1. `Range("d1").Select` selects cell `D1`; `ActiveCell.FormulaR1C1 = "1"` types 1 into the active cell.
2. The same for `D2` with 2. Two numbers are needed so Excel can detect the **step** of the series.
3. `Range("d1:d2").Select` selects both seeds.
4. `Selection.AutoFill Destination:=Range("d1:d10000"), Type:=xlFillDefault` is the macro version of dragging the fill handle down. It extends the pattern 1, 2, 3 ... to row 10000.
5. The last two `Select` lines are leftover clicks from the recording (the author clicked around `A1:A14` and `G1` afterwards). They do nothing useful, but the recorder keeps every click.

> [!warning] Common mistake
> The recorder produces `Select` then act, `Select` then act. That is slow and fragile. Section 4 shows the shorter way of writing directly to cells.

The second task on the sheet is **"edit the macro and change the range"**. That is a prompt to open the editor and change `d10000` to something smaller (say `d100`). It teaches the key idea that a recorded macro is just editable text.

---

## 3. Exercise 2: erase the series

Task text: **"add a new macro that will erase the series"**. The matching macro, again from the recorder:

```vba
Sub erase_num()
    Range("D1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.ClearContents
    Range("A1").Select
End Sub
```

**Why it works**

- `Selection.End(xlDown)` is the code equivalent of pressing `Ctrl + Down Arrow`: it jumps from `D1` to the **last filled cell** of the unbroken block below.
- `Range(Selection, Selection.End(xlDown))` builds a range from the starting cell to that last cell, so it selects the whole series however long it is.
- `Selection.ClearContents` empties the values but **keeps the formatting**, like pressing `Delete`. (`.Clear` would wipe formats too.)
- `Range("A1").Select` parks the cursor back at the top left.

> [!warning] Pitfall: `End(xlDown)` and gaps
> `End(xlDown)` stops at the first blank cell. If the series had a gap, only the part above the gap is erased. It also assumes `D1` is not empty: on an empty column it would run all the way to the bottom of the sheet.

> [!example] The pair works as a toggle
> `series_num` fills `D1:D10000`, `erase_num` clears it. Press the two buttons alternately to see both effects.

---

## 4. Exercise 3: writing code by hand (`mydata_new`)

From here the code is typed, not recorded, and it is much shorter. The sheet shows the target output: the names **liat** and **erel**, and **tel aviv**.

```vba
Sub mydata_new()
    Range("e1") = "liat"
    Range("e2") = "erel"
    Cells(3, 5) = "tel aviv"
    MsgBox "thanks fot using my program", , "My Data"
End Sub
```

What each line teaches:

| Code | Idea |
|---|---|
| `Range("e1") = "liat"` | Assign a value straight to a cell. No `Select` needed |
| `Cells(3, 5) = "tel aviv"` | The `Cells(row, column)` form. Row 3, column 5 is `E3`. Handy inside loops because both numbers can be variables |
| `MsgBox text, , title` | A [[MsgBox]] pops up a message. The first argument is the message, the second (skipped here, hence the double comma) is the button style, the third is the window title |

> [!tip] `Range` vs `Cells`
> Use `Range("E3")` when you know the address. Use `Cells(row, col)` when the position is **calculated**, for example inside a loop. They point at the same cell: `Cells(3, 5)` is `Range("E3")`.

> [!note] Typo in the source
> The message text reads "thanks fot using my program" ("fot" for "for"). It is cosmetic, but a good reminder that text inside quotation marks is not checked by VBA.

---

## 5. Exercise 4: asking the user for input (`calc`)

Sheet labels: **Number 1**, **Number 2**, **sum**. The macro asks the user for two numbers and adds them.

```vba
Sub calc()
    Dim num1 As Integer
    Dim num2 As Integer
    Range("a1") = "Number 1"
    Range("b1") = "Number 2"
    Range("e1") = "sum"

    num1 = InputBox("please enter the first number", "my calculator")
    num2 = InputBox("please enter the second number", "my calculator")

    Range("a2") = num1
    Range("b2") = num2

    Range("e2") = num1 + num2
End Sub
```

**New ideas**

- [[Variable Declaration in VBA]]: `Dim num1 As Integer` reserves a named box that holds whole numbers. Choosing the type matters (see the table below).
- [[InputBox]]: `InputBox(prompt, title)` shows a dialog, waits for the user to type, and **returns what they typed**. Assigning it (`num1 = InputBox(...)`) stores the answer.
- The macro writes the labels first, stores the answers in cells `A2` and `B2`, then puts `num1 + num2` in `E2`.

| Type | Holds | Used in this workbook |
|---|---|---|
| `Integer` | Whole numbers, roughly -32,768 to 32,767 | `num1`, `num2`, and `i` in `zoom_size` |
| `Single` | Decimals (single precision) | `height`, `weight`, `bmi` |

> [!warning] Common mistakes
> - **Integer drops decimals.** Typing 2.7 into an `Integer` variable gives 3 (VBA rounds). That is why the BMI macro uses `Single`, not `Integer`.
> - InputBox returns **text**. Assigning to a numeric variable converts it, but typing letters causes a run-time error. (The class code has no error handling.)
> - Clicking Cancel returns an empty string, which also breaks a numeric assignment.

> [!note] Reconstructed from the workbook
> The class code writes `num1 + num2` into a cell directly as a fixed result. An equivalent idea is to write the formula `=A2+B2` instead, which would **recalculate** if the user later changes the inputs. This comparison is mine, not shown in the class file.

---

## 6. Exercise 5: BMI calculator (input, loop, nested IF)

This is the capstone exercise. The task text on the sheet reads:

- "ask the user what is their **height** in meters and present in A2"
- "ask the user what is their **weight** in kg and present in B2"
- "calculate the **BMI** and present C2" (noted as weight / (height * height), also written `weight / height ^ 2`)
- a **Status** column in D.

The formula behind it:

$$
\text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2}
$$

Code from the class file:

```vba
Sub bmi()
    Dim height As Single
    Dim weight As Single
    Dim bmi As Single

    Range("a1") = "Height"
    Range("b1") = "Weight"
    Range("c1") = "BMI"
    Range("d1") = "Status"

    For i = 2 To 4
        height = InputBox("what is your height in meters?", "BMI calculator")
        weight = InputBox("what is your weight in kg?", "BMI calculator")

        Cells(i, 1) = height
        Cells(i, 2) = weight
        Cells(i, 3) = weight / height ^ 2
        bmi = Cells(i, 3)
        Cells(i, 1).Select
        Selection.NumberFormat = "0.00"

        If bmi <= 18.5 Then
            Cells(i, 4) = "underweight"
        Else
            If bmi <= 24.9 Then
                Cells(i, 4) = " nornal weight"
            Else
                If bmi <= 29.9 Then
                    Cells(i, 4) = "overweight"
                Else
                    Cells(i, 4) = "obese"
                End If
            End If
        End If
    Next i
End Sub
```

### 6.1 The loop

`For i = 2 To 4 ... Next i` repeats everything between the two lines three times, with `i` taking the values 2, 3, 4. A [[For Next Loop]] is what lets one macro fill **three people's rows** (rows 2, 3, 4) instead of one. The trick is `Cells(i, column)`: because the row number is the variable `i`, each pass writes one row lower. This is exactly why `Cells(row, col)` was introduced in Exercise 3.

| Pass | `i` | Row written |
|---|---|---|
| 1 | 2 | row 2 |
| 2 | 3 | row 3 |
| 3 | 4 | row 4 |

> [!note] Reconstructed from the workbook
> The macro never declares `i` (there is no `Dim i`). VBA allows this by default, treating it as an automatic `Variant`. In the bonus macro `zoom_size` the class **does** write `Dim i As Integer`, which is the tidier habit. This remark is mine, not from the class file.

### 6.2 The nested IF

The status is chosen by a [[Nested IF]]: test one band at a time, from the lowest up. As soon as one test is true, the other branches are skipped.

| BMI | Status written to column D |
|---|---|
| 18.5 or below | underweight |
| above 18.5, up to 24.9 | normal weight (spelled "nornal weight" in the class code, with a leading space) |
| above 24.9, up to 29.9 | overweight |
| above 29.9 | obese |

Because each `Else` already excludes the earlier cases, each test only needs **one** boundary (`<= 24.9`, not "between 18.5 and 24.9"). The worksheet version of the same idea is covered in [[Lec_02-IF Statements & Logical Functions]]:

```excel
=IF(C2<=18.5,"underweight",IF(C2<=24.9,"normal weight",IF(C2<=29.9,"overweight","obese")))
```

> [!tip] VBA also has `ElseIf`
> The same logic can be written flat with `ElseIf`, avoiding three levels of indentation. The class used nested `Else If`, which is equivalent.

> [!warning] Gap in the thresholds
> The tests use `<= 24.9` and `<= 29.9`, but a BMI is rarely a round number. A BMI of 24.95 fails `<= 24.9` and is classed "overweight", although the usual cut-off is 25. Using `< 25` and `< 30` would close the gap. This observation is mine, not the class's.

### 6.3 Other details worth noticing

- A **variable named `bmi` inside a macro named `bmi`**. VBA tolerates it here, but it is confusing; a name such as `bmiValue` reads better.
- `Cells(i, 3) = weight / height ^ 2` writes the **result** as a fixed number, and the macro then copies it back into the variable `bmi` (`bmi = Cells(i, 3)`) so the `If` can test it.
- `Cells(i, 1).Select` followed by `Selection.NumberFormat = "0.00"` formats the **height** cell (column 1) to two decimals. Formatting the BMI cell (column 3) would have been more natural; the code as written formats column A.
- Operator precedence: `^` binds tighter than `/`, so `weight / height ^ 2` means weight divided by (height squared), as intended.

> [!example] Worked check (illustrative numbers, not from the class)
> Height 1.80 m, weight 81 kg gives 81 / 3.24 = 25.0, which is above 24.9 and so is labelled "overweight" by this code.

---

## 7. Bonus macro: set zoom on every sheet (`zoom_size`)

A third module contains one more recorded-then-edited macro. It asks for a zoom percentage and applies it to **every sheet** in the workbook:

```vba
Sub zoom_size()
    Dim zoom_size As Integer
    Dim i As Integer

    zoom_size = InputBox("What zoomie do you command i turn to?")
    For i = 1 To Sheets.Count
        Sheets(i).Select
        ActiveWindow.Zoom = zoom_size
    Next i
End Sub
```

This shows the loop with a **dynamic upper bound**: `Sheets.Count` is however many sheets the workbook has, so the macro keeps working if sheets are added. Compare it with the BMI loop, where `4` was typed in by hand.

---

## 8. Reading the workbook's structure

- **Sheets:** the file has several sheets (the exercise sheets plus one named `Loops`). The VBA project also contains one empty code page per sheet (`Sheet1`, `Sheet2`, ...) and `ThisWorkbook`: normal scaffolding with no code in them.
- **`Backup`** appears in the triage list of names, but no macro of that name exists in the decompressed code, so it is probably a sheet name or a leftover. It is not described here.
- **File format:** `.xlsb` (Excel Binary Workbook) is smaller and faster to open than `.xlsm` and also supports macros. Both ask the user to **enable macros** when opened.

> [!warning] Security
> Macros can run arbitrary code, so Excel blocks them by default in files from the internet. Only enable them for files you trust.

---

## The class file, sheet by sheet

`19.1.xlsb` is the class workbook with five sheets, one per exercise, and the same macros as sections 2 to 6 of this note (`Module1`: `series_num`, `erase_num`, `mydata_new`, `calc`, `bmi`).

| Sheet | Exercise | Content |
|---|---|---|
| `Sheet1` | 1 and 2, recorded macros | a column of row numbers and the task text: "Add a series of numbers", "edit the macro and change the range", "add a button to activate the macro", "add a new macro that will erase the series", "add a button to activate the macro" |
| `Sheet2` | 3, `mydata_new` | the target output in `E1:E3`: liat, erel, tel aviv |
| `Sheet3` | 4, `calc` | the calculator output: headers Number 1, Number 2 and sum, with 100, 150 and 250 from a previous run |
| `Sheet4` | 5, `bmi` (the brief) | the BMI task text: ask for height in metres and weight in kg, calculate the BMI in `C2`; the formula `weight / height ^ 2` and the equivalent `weight / (height * height)`; sample height 1.6, weight 55, BMI 24.3 |
| `Sheet5` | 5, `bmi` (the result) | a finished run: height 1.8, weight 50, BMI 15.43, status "underweight" |

The saved `.xlsb` format keeps the code, which is why it is used in class (a plain `.xlsx` would drop the macros). The code in the file is the code printed in this note.

## 9. Quick revision checklist

- [ ] A macro is `Sub name()` ... `End Sub`, saved in a module of an `.xlsm` or `.xlsb` file.
- [ ] The recorder writes code for you but adds many pointless `Select` lines.
- [ ] `Range("A1")` for a fixed address, `Cells(row, col)` for a calculated one.
- [ ] `ClearContents` removes values and keeps formats.
- [ ] `End(xlDown)` is `Ctrl + Down`, and stops at the first blank.
- [ ] `Dim x As Integer` holds whole numbers, `Single` holds decimals.
- [ ] `InputBox(prompt, title)` returns what the user typed.
- [ ] `For i = a To b ... Next i` repeats a block; use `i` inside `Cells(i, ...)`.
- [ ] Nested `If ... Else If` tests bands in order, one boundary each.
- [ ] `MsgBox` shows a message; a button on the sheet can run any macro.
