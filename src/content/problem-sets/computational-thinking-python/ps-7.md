---
title: "PS7"
subject: computational-thinking-python
source_doc: /papers/computational-thinking-python/ps-7-assignment-7.ipynb
tags:
  - computational-thinking-python
  - python
  - problem-set
  - dictionaries
  - word-count
  - nlp
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Exercise 1: Natural Language Processing.** You are given the text of a news article titled "Israeli cyber startups raised 4B USD in 2024 amid war, led by Wiz and Cyera" (Calcalist, by Meir Orbach, 12.12.24).

      Your task:

      1. Convert the text string into a list of words.
      2. Calculate unique word frequency (using a dictionary).
      3. Remove stopwords (commonly used words filtered out to enhance text analysis and computational efficiency because they are deemed insignificant).
      4. Remove infrequent words, which appear less than a specified number of times.
      5. Sort the words in decreasing order of occurrence.
      6. Print the words in decreasing order of occurrence.

      > [!note]
      > Your program should work for any given text.

      **Starter code on the sheet.** The text is built by concatenating several paragraphs. It is abridged below to its first paragraph for readability (the sheet continues with `text += ...` for the remaining paragraphs about the Glilot Capital report, Wiz, Cyera and acquisitions). Dollar signs in the source text are written as "USD" here.

      ```python
      # https://www.calcalistech.com/ctechnews/article/byex9zdvjx
      # Meir Orbach 09:19, 12.12.24

      text =  "Israeli cyber startups raised USD 4B in 2024 amid war, led by Wiz and Cyera With Wiz and Cyera accounting for nearly 40% of the total, Israel's cyber sector defied challenges to double last year's fundraising totals."
      text += "Despite the ongoing war throughout 2024, Israel's cybersecurity industry saw a remarkable surge in investment, ..."
      # ... further text += lines continue on the sheet
      ```

      A pre-defined set of stop words is supplied:

      ```python
      # Pre-defined set of stop words
      stopwords = {'i', 'me', 'my', 'myself', 'we', 'our', 'ours',
      'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself',
      'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself',
      'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
       'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are',
       'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing',
       'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for',
      'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to',
      'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once',
      'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most',
      'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
      's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y',
       'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't",
      'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn',
       "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't",
      'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"}
      ```
    solution: "TODO"
    related_terms: ["dictionary", "string", "set"]
  - id: "2"
    text: |
      **Q1. `get_word_count`.**

      ```python
      # TODO: implement get_word_count
      # which takes as input a list of words
      # and returns a dictionary of word counts
      ```
    solution: "TODO"
    related_terms: ["dictionary", "frequency-counter", "function", "for-loop"]
  - id: "3"
    text: |
      **Q2. `remove_stopwords`.**

      ```python
      # TODO: implement remove_stopwords
      # which takes as input a word count dictionary and a set of stopwords
      # and returns a word count dictionary with stopwords removed
      ```
    solution: "TODO"
    related_terms: ["dictionary", "set", "membership-test", "function"]
  - id: "4"
    text: |
      **Q3. `remove_infrequent_words`.**

      ```python
      # TODO: implement remove_infrequent_words
      # which takes as input a word count dictionary and a word count threshold
      # and returns a word count dictionary with words occurring more than word count threshold
      ```
    solution: "TODO"
    related_terms: ["dictionary", "function", "comparison-operators"]
  - id: "5"
    text: |
      **Q4. `sort_word_counts`.**

      ```python
      # TODO: implement sort_word_counts
      # which takes as input a word count dictionary
      # and return a list of pairs (tuples) - (word, count) in decreasing order of occurrence
      ```
    solution: "TODO"
    related_terms: ["dictionary", "tuple", "sorted-and-sort", "sort-key", "lambda-expression"]
  - id: "6"
    text: |
      **Q5. `print_word_counts`.**

      ```python
      # TODO: implement print_word_counts
      # which takes as input a list of (word, count) tuples
      # and prints the (word, count) pairs
      ```
    solution: "TODO"
    related_terms: ["tuple", "function", "for-loop"]
  - id: "7"
    text: |
      **Q6. Main program.**

      ```python
      # Main program
      # 1.  Convert text to a word list using split
      # TODO

      # 2. Calculate word counts dictionary
      # TODO

      # 3. Remove stop words
      # TODO

      # 4. Remove infrequent words
      # TODO

      # 5. Sort word counts dictionary in descending order of occurences
      # TODO

      # 6. Print word and count pairs in descending order of occurrences
      # TODO
      ```

      Expected output (from the sheet, run on the full article text):

      ```text
      cybersecurity 5
      acquiring 5
      cyber 4
      raised 4
      Israeli 3
      Wiz 3
      Cyera 3
      Israel's 3
      sector 3
      increase 3
      startups 2
      2024 2
      fundraising 2
      raising 2
      approximately 2
      billion 2
      across 2
      transactions 2
      year. 2
      report 2
      capital 2
      early-stage 2
      significant 2
      two 2
      million 2
      million, 2
      Series 2
      accounted 2
      also 2
      deals 2
      firms 2
      acquired 2
      ```

      > [!note] Sheet remarks
      > Even in this short example, simple processing reveals the most frequent words. Remaining issues: punctuation is not removed (**year.** and **million,**), and similar words are not merged (**Israeli** and **Israel's**). Further text processing methods are beyond the scope of the course.

      > [!warning] Omitted from the source
      > The main-program code cell on the sheet carries a saved output identical to the expected output above, even though the cell itself only holds TODOs. It looks like leftover output rather than part of the question, so only the sheet's own "Output" block is kept. The saved word cloud picture is not reproduced.
    solution: "TODO"
    related_terms: ["dictionary", "string", "function", "sorted-and-sort"]
  - id: "8"
    text: |
      **Optional: word cloud.** Starter code on the sheet:

      ```python
      # !pip install wordcloud

      from wordcloud import WordCloud
      import matplotlib.pyplot as plt

      # Assuming 'word_counts' is the dictionary you created in the previous code
      # Example: word_counts = {'cybersecurity': 5, 'acquiring': 5, ...}

      # Create a WordCloud object
      wordcloud = WordCloud(width=800, height=400, background_color='white').generate_from_frequencies(word_counts)

      # Display the generated image:
      plt.figure(figsize=(10, 5), facecolor=None)
      plt.imshow(wordcloud)
      plt.axis("off")
      plt.tight_layout(pad=0)
      plt.show()
      ```
    solution: "TODO"
    related_terms: ["dictionary", "import-statement", "pip"]
---

*Related: [[Lec_07-Dictionaries and Sets]], [[Lec_08-Searching and Sorting]], [[Lec_05-List Comprehension and Tuples]], [[Lec_06-Functions]]*
