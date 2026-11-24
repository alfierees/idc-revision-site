---
title: "Sample Test 2025"
label: "2025 Sample Test"
topics: "dplyr on the Ames housing data: group summaries, filters, new columns, missing values"
type: past-paper
status: partial-official-solution
exam: "Intro to R example final assignment, 2025 (16 questions)"
semester: 2
year: 1
course: "Intro to R"
dataset: "Ames_Housing.csv"
tags:
  - intro-to-r
  - past-paper
  - dplyr
  - ggplot2
aliases:
  - PP02 Intro to R
subject: intro-to-r
in_scope: true
questions:
  - id: "q1"
    title: "Question 1"
    text: |
      For each neighborhood, calculate:

      - number of houses

      - average sale_price

      - median lot_area

      Return only neighborhoods where the average sale price exceeds \$280,000, sorted descending by average sale price.
    solution: |
      **Official solution** (from `partial_solution.R`):

      ```r
      ames |>
        group_by(neighborhood) |>
        summarize(
          n_houses = n(),
          avg_price = mean(sale_price),
          med_area = median(lot_area)) |>
        filter(avg_price > 280000) |>
        arrange(desc(avg_price))
      ```

      **Output:**

      ```text
      # A tibble: 3 x 4
        neighborhood n_houses avg_price med_area
        <chr>           <int>     <dbl>    <dbl>
      1 NoRidge            71  330319.1    11400
      2 StoneBr            51  324229.2     8118
      3 NridgHt           166  322018.3    12092
      ```
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q2"
    title: "Question 2"
    text: |
      For each `house_style`, calculate:

      - number of houses

      - mean sale_price

      - proportion of homes with central_air == “Y”

      Sort by highest mean sale price.
    solution: |
      **Official solution** (from `partial_solution.R`):

      ```r
      ames |>
        group_by(house_style) |>
        summarize(
          n_houses = n(),
          avg_price = mean(sale_price),
          prop_central_air = mean(central_air == "Y")
        ) |>
        arrange(desc(avg_price))
      ```

      **Output:**

      ```text
      # A tibble: 8 x 4
        house_style n_houses avg_price prop_central_air
        <chr>          <int>     <dbl>            <dbl>
      1 2.5Fin             8  220000          0.875    
      2 2Story           872  207054.5        0.9495413
      3 1Story          1479  178695.6        0.9384719
      4 2.5Unf            24  177158.3        0.625    
      5 SLvl             128  165527.4        1        
      6 SFoyer            83  143472.7        0.9879518
      7 1.5Fin           314  137529.9        0.8566879
      8 1.5Unf            19  109663.2        0.7368421
      ```
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q3"
    title: "Question 3"
    text: |
      Identify houses with:

      - lot_area \< 5000

      - sale_price \> \$200,000

      Return a single-row tibble showing:

      - count of such houses

      - average overall_qual

      - the average sale_price of these houses

      - the number of houses exceeding 300,000 in sale_price.
    solution: |
      **Official solution** (from `partial_solution.R`):

      ```r
      ames |>
        filter(lot_area < 5000, sale_price > 200000) |>
        summarize(
          n = n(),
          quality = mean(overall_qual),
          average_sale_price = mean(sale_price),
          n_over_300k = sum(sale_price > 300000)
        )
      ```

      **Output:**

      ```text
      # A tibble: 1 x 4
            n  quality average_sale_price n_over_300k
        <int>    <dbl>              <dbl>       <int>
      1    39 7.692308           244069.8           2
      ```
    related_terms: ["filter", "summarize", "pipe-operator"]
  - id: "q4"
    title: "Question 4"
    text: |
      For each neighborhood, calculate:

      - number of houses

      - total sale_price

      - percent share of overall sales value in the dataset

      Aggregate all neighborhoods with less than 4% share into a single “Other” neighborhood. List neighborhoods in descending order of percent share.
    solution: |
      ```r
      ames |>
        group_by(neighborhood) |>
        summarize(n_houses = n(), total_sales = sum(sale_price)) |>
        mutate(pct_share = total_sales / sum(total_sales) * 100,
               neighborhood = ifelse(pct_share < 4, "Other", neighborhood)) |>
        group_by(neighborhood) |>
        summarize(n_houses = sum(n_houses),
                  total_sales = sum(total_sales),
                  pct_share = sum(pct_share)) |>
        arrange(desc(pct_share))
      ```

      **Output:**

      ```text
      # A tibble: 12 x 4
         neighborhood n_houses total_sales pct_share
         <chr>           <int>       <dbl>     <dbl>
       1 Other             842   137086304 25.90357 
       2 NAmes             443    64278126 12.14587 
       3 CollgCr           267    53881517 10.18135 
       4 NridgHt           166    53455032 10.10076 
       5 Somerst           182    41806733  7.899721
       6 Gilbert           165    31456685  5.943995
       7 OldTown           239    29634062  5.599596
       8 Edwards           193    25098916  4.742644
       9 NWAmes            131    24681305  4.663733
      10 NoRidge            71    23452658  4.431570
      11 SawyerW           125    23008773  4.347694
      12 Crawfor           103    21377736  4.039496
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["group-by", "summarize", "arrange", "mutate", "pipe-operator"]
  - id: "q5"
    title: "Question 5"
    text: |
      Create a new column value_score = gr_liv_area / sale_price. Identify the top 100 houses with highest value_score. Exclude houses from the neighborhood “OldTown”. Return:

      - pid
      - gr_liv_area
      - sale_price
      - neighborhood
    solution: |
      ```r
      ames |>
        mutate(value_score = gr_liv_area / sale_price) |>
        filter(neighborhood != "OldTown") |>
        arrange(desc(value_score)) |>
        head(100) |>
        select(pid, gr_liv_area, sale_price, neighborhood)
      ```

      **Output:**

      ```text
      # A tibble: 100 x 4
         pid        gr_liv_area sale_price neighborhood
         <chr>            <dbl>      <dbl> <chr>       
       1 0910251050         733      13100 IDOTRR      
       2 0908154235        5642     160000 Edwards     
       3 0911102170        1317      40000 IDOTRR      
       4 0903484080        1484      50000 IDOTRR      
       5 0908154195        5095     183850 Edwards     
       6 0908154205        4676     184750 Edwards     
       7 0905451340        1276      60000 Edwards     
       8 0902477120         720      34900 IDOTRR      
       9 0534427010        1728      84900 NAmes       
      10 0904351040        1884      93369 SWISU       
      11 0923251160        1608      80000 Mitchel     
      12 0903454060        1092      55000 IDOTRR      
      13 0923125030        1600      81500 Mitchel     
      14 0533350090        2944     150000 Veenker     
      15 0911204100         952      50138 IDOTRR      
      16 0909101190        2230     118500 SWISU       
      17 0908204180        1152      61500 Edwards     
      18 0914476080        1872     100000 Mitchel     
      19 0911204090        1044      55993 IDOTRR      
      20 0535126180        2380     129000 NAmes       
      21 0902477130         797      44000 IDOTRR      
      22 0911103050        1526      85000 IDOTRR      
      23 1007100110        1836     103000 IDOTRR      
      24 0904351240        1112      63000 Edwards     
      25 0535327230        1764     100000 NAmes       
      26 0910204050        2168     123000 IDOTRR      
      27 0908102300        1120      64000 Edwards     
      28 0909176170        2592     150000 SWISU       
      29 0527326040        1411      82500 NWAmes      
      30 0534451150        1306      76500 BrkSide     
      31 0909101080        1414      83000 Edwards     
      32 0532351140        1902     112000 Sawyer      
      33 0909176080        3395     200000 SWISU       
      34 0905225020        2654     158000 Sawyer      
      35 0909250030        1666     100000 SWISU       
      36 0923225260        2521     151400 MeadowV     
      37 0911103060        1991     119600 IDOTRR      
      38 0908102130        1664     100000 Edwards     
      39 0535150070        1738     104900 NAmes       
      40 0909177100        2650     160000 SWISU       
      # i 60 more rows
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["filter", "select", "arrange", "mutate", "pipe-operator"]
  - id: "q6"
    title: "Question 6"
    text: |
      For each lot_shape, calculate:

      - median sale_price

      - interquartile range (IQR) of sale_price

      Identify the lot_shape with the highest price variability (highest IQR).
    solution: |
      ```r
      ames |>
        group_by(lot_shape) |>
        summarize(median_price = median(sale_price), iqr_price = IQR(sale_price)) |>
        arrange(desc(iqr_price))
      ```

      **Output:**

      ```text
      # A tibble: 4 x 3
        lot_shape median_price iqr_price
        <chr>            <dbl>     <dbl>
      1 IR1             190000     91500
      2 IR3             213000     85125
      3 IR2             213000     73175
      4 Reg             145000     65000
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q7"
    title: "Question 7"
    text: |
      For each lot_shape, calculate:

      - mean sale_price

      - standard deviation (SD) of sale_price

      Identify the lot_shape with the highest price variation (highest SD/Mean ratio).
    solution: |
      ```r
      ames |>
        group_by(lot_shape) |>
        summarize(mean_price = mean(sale_price), sd_price = sd(sale_price)) |>
        mutate(sd_to_mean = sd_price / mean_price) |>
        arrange(desc(sd_to_mean))
      ```

      **Output:**

      ```text
      # A tibble: 4 x 4
        lot_shape mean_price sd_price sd_to_mean
        <chr>          <dbl>    <dbl>      <dbl>
      1 Reg         162586.7 70236.87  0.4319963
      2 IR1         210984.9 85208.02  0.4038584
      3 IR3         221922.8 87539.46  0.3944590
      4 IR2         229588.4 88988.69  0.3876011
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["group-by", "summarize", "arrange", "mutate", "pipe-operator"]
  - id: "q8"
    title: "Question 8"
    text: |
      Create a new variable called year_group:

      - “before_1950” → year_built \< 1950

      - “1950_to_1999” → between 1950 and 1999

      - “2000_or_later” → year_built \>= 2000

      Then calculate, for each group:

      - average sale_price

      - number of houses

      - the price of the most expensive house in the group
    solution: |
      **Official solution** (from `partial_solution.R`):

      ```r
      ames |>
        mutate(
          year_group = case_when(
            year_built < 1950 ~ "Before 1950",
            year_built > 2000 ~ "After 2000",
            year_built >= 1950 & year_built <= 2000 ~ "1950-2000"
          )
        ) |>
        group_by(year_group) |>
        summarize(
          n_houses = n(),
          avg_price = mean(sale_price),
          most_expensive = max(sale_price)
        )
      ```

      **Output:**

      ```text
      # A tibble: 3 x 4
        year_group  n_houses avg_price most_expensive
        <chr>          <int>     <dbl>          <dbl>
      1 1950-2000       1562  169337.9         755000
      2 After 2000       735  249967.9         615000
      3 Before 1950      630  128548.6         475000
      ```

      > [!warning] The official code does not match the question
      > The question puts houses built in **2000** in `2000_or_later`. The official code puts them in `1950-2000`, which moves **48 houses**, and it uses different group labels. The official answer is kept above.

      **AI-written version that follows the question exactly:**

      ```r
      ames |>
        mutate(
          year_group = case_when(
            year_built < 1950 ~ "before_1950",
            year_built < 2000 ~ "1950_to_1999",
            TRUE ~ "2000_or_later"
          )
        ) |>
        group_by(year_group) |>
        summarize(
          avg_price = mean(sale_price),
          n_houses = n(),
          most_expensive = max(sale_price)
        )
      ```

      **Output:**

      ```text
      # A tibble: 3 x 4
        year_group    avg_price n_houses most_expensive
        <chr>             <dbl>    <int>          <dbl>
      1 1950_to_1999   167529.8     1514         755000
      2 2000_or_later  248521.2      783         615000
      3 before_1950    128548.6      630         475000
      ```
    related_terms: ["group-by", "summarize", "mutate", "pipe-operator"]
  - id: "q9"
    title: "Question 9"
    text: |
      Identify houses with sale_price \> 3 SD above mean. Return a tibble with:

      - number of such houses per neighborhood

      - average gr_liv_area among those houses for each neighborhood
    solution: |
      ```r
      {
        price_cutoff <- mean(ames$sale_price) + 3 * sd(ames$sale_price)
        ames |>
          filter(sale_price > price_cutoff) |>
          group_by(neighborhood) |>
          summarize(n_houses = n(), avg_living_area = mean(gr_liv_area)) |>
          arrange(desc(n_houses))
      }
      ```

      **Output:**

      ```text
      # A tibble: 7 x 3
        neighborhood n_houses avg_living_area
        <chr>           <int>           <dbl>
      1 NridgHt            22        2517.636
      2 StoneBr            11        2620.545
      3 NoRidge             6        3630    
      4 CollgCr             2        2552    
      5 Somerst             2        2293.5  
      6 OldTown             1        3608    
      7 Timber              1        1978    
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["filter", "group-by", "summarize", "arrange", "pipe-operator"]
  - id: "q10"
    title: "Question 10"
    text: |
      Count the number of missing values in each column of the dataset. Return a table with the number of missing, sorted descending by number of missing values.
    solution: |
      ```r
      ames |>
        summarize(across(everything(), ~ sum(is.na(.x)))) |>
        pivot_longer(everything(), names_to = "variable", values_to = "n_missing") |>
        filter(n_missing > 0) |>
        arrange(desc(n_missing))
      ```

      **Output:**

      ```text
      # A tibble: 19 x 2
         variable        n_missing
         <chr>               <int>
       1 pool_qc              2914
       2 misc_feature         2821
       3 alley                2729
       4 fence                2357
       5 fireplace_qu         1420
       6 lot_frontage          490
       7 garage_yr_blt         158
       8 garage_finish         158
       9 garage_qual           158
      10 garage_cond           158
      11 garage_type           157
      12 bsmt_exposure          81
      13 bsmt_fin_type_2        79
      14 bsmt_qual              78
      15 bsmt_cond              78
      16 bsmt_fin_type_1        78
      17 mas_vnr_type           23
      18 mas_vnr_area           23
      19 electrical              1
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["filter", "summarize", "arrange", "pipe-operator"]
  - id: "q11"
    title: "Question 11"
    text: |
      For every column in the dataset, count how many values are exactly zero. You can disregard character type columns.

      Return a table with:

      - variable

      - n_zeros

      List only variables with at least one zero, sorted descending by number of zeros. NA’s do not count as zeros.
    solution: |
      ```r
      ames |>
        select(where(is.numeric)) |>
        summarize(across(everything(), ~ sum(.x == 0, na.rm = TRUE))) |>
        pivot_longer(everything(), names_to = "variable", values_to = "n_zeros") |>
        filter(n_zeros > 0) |>
        arrange(desc(n_zeros))
      ```

      **Output:**

      ```text
      # A tibble: 23 x 2
         variable        n_zeros
         <chr>             <int>
       1 pool_area          2914
       2 x3ssn_porch        2890
       3 low_qual_fin_sf    2887
       4 misc_val           2824
       5 bsmt_half_bath     2752
       6 screen_porch       2671
       7 bsmt_fin_sf_2      2576
       8 enclosed_porch     2469
       9 half_bath          1841
      10 mas_vnr_area       1745
      11 bsmt_full_bath     1706
      12 x2nd_flr_sf        1676
      13 wood_deck_sf       1524
      14 fireplaces         1420
      15 open_porch_sf      1298
      16 bsmt_fin_sf_1       929
      17 bsmt_unf_sf         243
      18 garage_cars         157
      19 garage_area         157
      20 total_bsmt_sf        78
      21 full_bath            12
      22 bedroom_abv_gr        8
      23 kitchen_abv_gr        3
      ```

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["filter", "select", "summarize", "arrange", "pipe-operator", "missing-value"]
  - id: "q12"
    title: "Question 12"
    text: |
      Set the default ggplot theme to theme_minimal().

      Create a boxplot of sale_price for each house_style.

      - Order the x-axis from lowest to highest median sale price.

      - Add a horizontal dashed red line indicating the overall median sale price.

      - Rotate x-axis text labels to 45 degrees.

      - Change the plot title size to 16 and center it.

      ![Target chart for question 12](/images/intro-to-r/pp02-q12.png)
    solution: |
      **Official solution** (from `partial_solution.R`):

      ```r
      {
        total_median_price <- ames$sale_price |> median()
        ames |>
          ggplot() +
          aes(x = house_style, y = sale_price) +
          geom_boxplot() +
          geom_hline(yintercept = total_median_price, color = "red", linetype = 2) +
          xlab("House Style") +
          ylab("Sale Price") +
          ggtitle("Sale Price by House Style")+
          theme(axis.text.x = element_text(angle = 45)) +
          theme(plot.title = element_text(hjust = 0.5)) +
          scale_y_continuous(labels = scales::dollar_format())
      }
      ```

      > [!warning] The official code is incomplete
      > It does **not** order the x-axis by median and does **not** set the title size to 16, though the question asks for both. The official answer is kept above.

      **AI-written version with every requirement:**

      ```r
      {
        theme_set(theme_minimal())
        overall_median <- median(ames$sale_price)
        ames |>
          ggplot() +
          aes(x = reorder(house_style, sale_price, median), y = sale_price) +
          geom_boxplot() +
          geom_hline(yintercept = overall_median, color = "red", linetype = "dashed") +
          labs(title = "Sale Price by House Style", x = "House Style", y = "Sale Price") +
          theme(axis.text.x = element_text(angle = 45),
                plot.title = element_text(size = 16, hjust = 0.5)) +
          scale_y_continuous(labels = scales::dollar_format())
      }
      ```

      This code ran without errors in R.
    related_terms: ["ggplot2", "pipe-operator"]
  - id: "q13"
    title: "Question 13"
    text: |
      Create a scatter plot of gr_liv_area (x-axis) vs. sale_price (y-axis).

      - Highlight houses where overall_qual is 9 or 10 in red.

      - Add a smooth regression line in blue.

      - Facet the plot by neighborhood.

      - Remove the plot legend entirely.

      ![Target chart for question 13](/images/intro-to-r/pp02-q13.png)
    solution: |
      ```r
      ames |>
        mutate(high_quality = overall_qual >= 9) |>
        ggplot() +
        aes(x = gr_liv_area, y = sale_price) +
        geom_point(aes(color = high_quality), alpha = 0.6) +
        geom_smooth(method = "lm", color = "blue", se = FALSE) +
        scale_color_manual(values = c("FALSE" = "grey60", "TRUE" = "red")) +
        facet_wrap(~neighborhood) +
        theme(legend.position = "none")
      ```

      This code ran without errors in R.

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["mutate", "ggplot2", "geom-smooth", "facet", "pipe-operator"]
  - id: "q14"
    title: "Question 14"
    text: |
      Create a line plot with points showing the median sale price of houses built in each decade.

      - x-axis: decade_built (e.g., 1950, 1960, etc.)

      - y-axis: median_sale_price

      - size of points: proportional to the number of houses built in that decade

      - color of points: “steelblue”

      - Add a horizontal dashed line indicating the overall median sale price.

      - Set x-axis breaks to every 10 years from 1850 to 2020.

      - Add a title, center it, and set its size to 16.

      - Label the axes appropriately.

      ![Target chart for question 14](/images/intro-to-r/pp02-q14.png)
    solution: |
      **Official solution** (from `partial_solution.R`, marked partial by the course):

      ```r
      ames |>
        mutate(decade = year_built - (year_built %% 10)) |>
        group_by(decade) |>
        summarize(price = median(sale_price),
                  n = n()) |>
        ggplot() +
        aes(x = decade, y = price) +
        geom_line(color = "steelblue") +
        geom_point(mapping = aes(size = n), color = "steelblue") +
        theme(legend.position = "inside",
              legend.position.inside = c(0.5,0.5))
      ```

      > [!warning] The official code is incomplete
      > It leaves out the dashed median line, the 10-year axis breaks, the title and the axis labels. The official answer is kept above.

      **AI-written version with every requirement:**

      ```r
      ames |>
        mutate(decade_built = year_built - (year_built %% 10)) |>
        group_by(decade_built) |>
        summarize(median_sale_price = median(sale_price), n_houses = n()) |>
        ggplot() +
        aes(x = decade_built, y = median_sale_price) +
        geom_line(color = "steelblue") +
        geom_point(aes(size = n_houses), color = "steelblue") +
        geom_hline(yintercept = median(ames$sale_price), linetype = "dashed") +
        scale_x_continuous(breaks = seq(1850, 2020, 10)) +
        labs(title = "Median Sale Price by Decade Built",
             x = "Decade built", y = "Median sale price", size = "Houses") +
        theme(plot.title = element_text(size = 16, hjust = 0.5),
              axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R.
    related_terms: ["group-by", "summarize", "mutate", "ggplot2", "pipe-operator"]
  - id: "q15"
    title: "Question 15"
    text: |
      Using the ames dataset, for each neighborhood:

      - Calculate the total number of fireplaces (fireplaces).

      - Calculate the total number of rooms above ground (tot_rms_abv_grd).

      - Compute the fireplace density, defined as total fireplaces divided by total rooms above ground. *(The formula is missing from the Word file. This definition comes from the chart's axis label.)*

      - Also calculate the median sale price (sale_price) in each neighborhood.

      Then, create a scatter plot:

      - x-axis: fireplace_density

      - y-axis: median sale_price

      - size of points: proportional to the number of houses in the neighborhood

      - color of points: according to a new variable neighborhood_quality_group, which is defined as follows:

        - High: median_overall_qual \>= 7

        - Medium: median_overall_qual \>= 5 and \< 7

        - Low: median_overall_qual \< 5

      ![Target chart for question 15](/images/intro-to-r/pp02-q15.png)
    solution: |
      ```r
      ames |>
        group_by(neighborhood) |>
        summarize(
          total_fireplaces = sum(fireplaces),
          total_rooms = sum(tot_rms_abv_grd),
          fireplace_density = total_fireplaces / total_rooms,
          median_price = median(sale_price),
          n_houses = n(),
          median_overall_qual = median(overall_qual)
        ) |>
        mutate(neighborhood_quality_group = case_when(
          median_overall_qual >= 7 ~ "High",
          median_overall_qual >= 5 ~ "Medium",
          TRUE ~ "Low"
        )) |>
        ggplot() +
        aes(x = fireplace_density, y = median_price,
            size = n_houses, color = neighborhood_quality_group) +
        geom_point(alpha = 0.7) +
        labs(title = "Fireplace Density vs. Median Sale Price by Neighborhood",
             x = "Fireplace Density (Fireplaces per Room)",
             y = "Median Sale Price (USD)",
             size = "Number of Houses", color = "Neighborhood Quality") +
        theme(plot.title = element_text(hjust = 0.5))
      ```

      This code ran without errors in R.

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["group-by", "summarize", "mutate", "ggplot2", "pipe-operator"]
  - id: "q16"
    title: "Question 16"
    text: |
      Create the following chart:

      ![Target chart for question 16](/images/intro-to-r/pp02-q16.png)
    solution: |
      ```r
      ames |>
        group_by(house_style) |>
        summarize(avg_price = mean(sale_price), n_houses = n()) |>
        ggplot() +
        aes(x = house_style, y = avg_price) +
        geom_col(fill = "steelblue") +
        geom_text(aes(label = round(avg_price)), vjust = -0.3, size = 3) +
        geom_label(aes(y = 0, label = n_houses), size = 2.5) +
        labs(title = "Average Sale Price and House Counts by House Style",
             x = NULL, y = "Average Sale Price (USD)") +
        theme(plot.title = element_text(size = 16, hjust = 0.5),
              axis.text.x = element_text(angle = 45))
      ```

      This code ran without errors in R.

      *AI-written answer. The course's partial solution does not cover this question.*
    related_terms: ["group-by", "summarize", "ggplot2", "geom-col", "pipe-operator"]
---

# Sample Test 2025

> Part of: [[Intro to R]]

> [!info] Where the answers come from
> The course's `partial_solution.R` covers **Questions 1, 2, 3, 8, 12 and 14**. These are labelled **Official solution**. Every other answer is **AI-written** and was run in R on the real `Ames_Housing.csv`.

> [!warning] Three official answers need care
> The official code for **Q8, Q12 and Q14** does not fully do what the question asks. Each one keeps the official code, explains the difference and adds a complete version.

> [!note] Reading the code on this site
> The code font joins some symbols. A small triangle is the pipe: type a vertical bar, then a greater-than sign. The joined greater-or-equal sign is typed as a greater-than sign, then an equals sign.

## Loading data

The sample test lists three ways of loading data:

```r
ames <- read_csv("Ames_Housing.csv")         # from a CSV file
load("Final_Assignment_2024.RData")          # from an .RData file
cereal <- MASS::UScereal                     # from a package
```

All answers below use:

```r
library(tidyverse)
theme_set(theme_minimal())
ames <- read_csv("Ames_Housing.csv")
```
