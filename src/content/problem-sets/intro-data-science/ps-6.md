---
title: "PS6"
subject: intro-data-science
source_doc: /papers/intro-data-science/ps-6-recitation-7.ipynb
tags:
  - data-science
  - intro-data-science
  - recitation
  - nlp
  - bag-of-words
  - cosine-similarity
  - image-analysis
  - convolution
ai_drafted: true
questions:
  - id: "1"
    text: |
      **Preprocess a new description.**

      Take `"The BEST homemade Pasta with Fresh Basil and Creamy Tomato Sauce! Absolutely delicious."`. Apply `preprocess()`. How many words before vs after? Which words were removed? Were any important words lost?
    solution: |
      ```python
      new_desc = "The BEST homemade Pasta with Fresh Basil and Creamy Tomato Sauce! Absolutely delicious."

      clean = preprocess(new_desc)
      print(f"Before ({len(new_desc.split())} words): {new_desc}")
      print(f"After  ({len(clean.split())} words): {clean}")
      ```

      Walking through the pipeline:

      1. **Lowercase**: "BEST" becomes "best".
      2. **Tokenise and drop non-alphabetic tokens**: the "!" and "." are removed.
      3. **Remove stopwords**: "The", "with" and "and" go.
      4. **Lemmatise**: reduces words to base form; the content words here stay as they are.

      > [!success] Answer
      > Removed: "The", "with", "and" (stopwords) and the punctuation marks. "BEST" is only lowercased. All informative words survive (best, homemade, pasta, fresh, basil, creamy, tomato, sauce, absolutely, delicious). The solution says about **25% reduction**.

      > [!info] Recomputed count
      > Splitting on spaces gives 13 words before. Removing the three stopwords leaves 10 (the punctuation is attached to words, so it does not change the count), a reduction of about 23%, consistent with the solution's "~25%". I could not run NLTK here, so this count is by hand, not by running the notebook.
    related_terms: ["text-preprocessing", "tokenization", "stopwords", "lemmatization", "natural-language-processing"]
  - id: "2"
    text: |
      **Find similar meals.**

      Compute cosine similarity between listing 0's BoW vector and all other listings. Print the top 5 most similar meals with names, cuisines and similarity scores. Are they the same cuisine? Does the similarity make sense?
    solution: |
      [[Cosine Similarity]] compares the **angle** between two word-count vectors, so a long and a short description with the same words still match:

      $$
      \cos(\mathbf{a}, \mathbf{b}) = \frac{\mathbf{a} \cdot \mathbf{b}}{\lVert \mathbf{a} \rVert \, \lVert \mathbf{b} \rVert}
      $$

      ```python
      sim_scores = cosine_similarity(X_bow[0], X_bow)[0]      # listing 0 against every listing

      # argsort ascending, reverse for descending, then skip index 0 (listing 0 itself, similarity = 1.0)
      top_idx = sim_scores.argsort()[::-1][1:6]

      print(f"Listing 0: {df.iloc[0]['description'][:60]}... [{df.iloc[0]['cuisine']}]\n")
      print("Top 5 most similar:")
      for i in top_idx:
          print(f"  Sim={sim_scores[i]:.3f} | [{df.iloc[i]['cuisine']:15s}] {df.iloc[i]['description'][:55]}...")
      ```

      > [!success] Answer
      > Most similar listings likely share the same cuisine and key vocabulary; cross-cuisine matches (for example Israeli and Middle Eastern) are possible because of shared words. The solution does not state actual scores (no saved output).

      > [!tip] Intuition
      > This is how a simple search engine works: rank listings by cosine similarity to the query, no trained model required (the notebook's own insight).
    related_terms: ["cosine-similarity", "bag-of-words", "document-term-matrix"]
  - id: "3"
    text: |
      **Classify a new listing.**

      Write a new meal description (1 to 2 sentences) for a cuisine of your choice, but not too obvious. Preprocess it, transform it with `bow_vectorizer.transform`, predict the cuisine with the trained classifier. Does it get it right? If not, why?
    solution: |
      ```python
      new_listing = "Creamy lentil soup with a squeeze of lemon and warm pita on the side"

      clean_new = preprocess(new_listing)
      X_new = bow_vectorizer.transform([clean_new])     # transform, NOT fit_transform: reuse the training vocabulary

      predicted = clf.predict(X_new)[0]
      proba = clf.predict_proba(X_new)[0]

      print(f"Description: {new_listing}")
      print(f"Predicted cuisine: {predicted}\n")
      for cls, p in zip(clf.classes_, proba):
          print(f"  {cls:18s}: {p:.1%}")
      ```

      > [!success] Answer
      > The description is deliberately tricky: lentil and pita overlap Israeli, Middle Eastern and Vegan, so the vocabulary does not clearly signal one cuisine and the model **might misclassify**. The solution gives no predicted label (no saved output).

      > [!warning] Common trap
      > Use `.transform` on new text, never `.fit_transform`: refitting would rebuild the vocabulary and the columns would no longer match the trained model. Words outside the 200-word vocabulary are silently ignored.
    related_terms: ["logistic-regression", "bag-of-words", "document-term-matrix", "train-test-split"]
  - id: "4"
    text: |
      **Create your own image.**

      Create a 24x24 grayscale image with a **bright square** (220) on a dark background (40), centred, roughly 10x10. Display it with `plt.imshow()` and print the pixel values of a row that crosses the square edge.
    solution: |
      ```python
      img2 = np.full((24, 24), 40.0)    # dark background everywhere
      img2[7:17, 7:17] = 220            # rows 7..16 and columns 7..16: a 10x10 square, centred

      plt.figure(figsize=(5, 5))
      plt.imshow(img2, cmap="gray", vmin=0, vmax=255)
      plt.title("Bright Square on Dark Background")
      plt.colorbar(label="Pixel Value")
      plt.show()

      print(f"Row 12 pixel values:\n{img2[12].astype(int)}")
      ```

      Slicing `7:17` covers indices 7 to 16, which is 10 pixels, and it is centred because 7 pixels remain on each side (7 + 10 + 7 = 24).

      > [!success] Answer
      > Row 12 crosses the square: 7 values of 40, then 10 values of 220, then 7 values of 40, a sharp edge transition (the solution's comment: "40 40 ... 40 220 220 ... 220 40 ... 40"). Recomputed with numpy: `[40]*7 + [220]*10 + [40]*7`.

      ![](/images/intro-data-science/ps06-q4-square-row-profile.png)

      *The square, row 12, and that row's pixel profile. The two jumps are the edges a convolution filter responds to.*
    related_terms: ["pixel", "convolution"]
  - id: "5"
    text: |
      **Filter the noisy image.**

      Apply the vertical edge filter to the noisy image (`img_noisy`). Apply the blur filter to the noisy image first, then the edge filter. Display all three: edges on noisy, blurred, edges on blurred. Which gives cleaner edges? Why does blurring first help?
    solution: |
      ```python
      # 1. Edge detection directly on the noisy image
      noisy_edges = convolve2d(img_noisy, edge_v, mode="same", boundary="fill")

      # 2. Blur first, then edge detection
      blurred_noisy = convolve2d(img_noisy, blur, mode="same", boundary="fill")
      clean_edges = convolve2d(blurred_noisy, edge_v, mode="same", boundary="fill")

      fig, axes = plt.subplots(1, 3, figsize=(15, 4))
      axes[0].imshow(noisy_edges, cmap="gray");                     axes[0].set_title("Edges on Noisy (messy)")
      axes[1].imshow(blurred_noisy, cmap="gray", vmin=0, vmax=255); axes[1].set_title("Blurred First")
      axes[2].imshow(clean_edges, cmap="gray");                     axes[2].set_title("Edges on Blurred (clean)")
      plt.tight_layout()
      plt.show()
      ```

      An edge filter responds to *any* sudden brightness change, and random noise is full of them. The blur averages each 3x3 neighbourhood, so the random up-and-down noise cancels while the large, real jump at the plate rim (30 to 230) survives.

      > [!success] Answer
      > **Blur then edge detection** gives the cleaner edges: blurring smooths the noise, so the filter finds the real plate rim rather than false edges. The notebook adds that this blur-then-detect pipeline is standard in image processing, and that CNNs ([[Lecture 8 - Intro to Deep Learning]]) learn to do this automatically.
    related_terms: ["convolution", "filter", "feature-map", "pixel"]
---

## Recitation walkthrough

### Part 1: text

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.linear_model import LogisticRegression
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()

def preprocess(text):
    """Full preprocessing pipeline for one text string."""
    tokens = word_tokenize(text.lower())                                   # lowercase, then split into tokens
    tokens = [t for t in tokens if t.isalpha() and t not in stop_words]    # drop punctuation and stopwords
    return " ".join([lemmatizer.lemmatize(t) for t in tokens])             # reduce words to their base form

df["clean_text"] = df["description"].apply(preprocess)
```

The pipeline is **lowercase → tokenise → remove stopwords and non-alphabetic tokens → lemmatise**.

```python
bow_vectorizer = CountVectorizer(max_features=200)
X_bow = bow_vectorizer.fit_transform(df["clean_text"])    # rows = listings, columns = vocabulary words
```

The result is a sparse **document-term matrix**: each cell is how often a word occurs in a listing. Then a plain classifier works on it:

```python
X_train, X_test, y_train, y_test = train_test_split(X_bow, df["cuisine"], test_size=0.2,
                                                    random_state=42, stratify=df["cuisine"])
clf = LogisticRegression(max_iter=1000, random_state=42).fit(X_train, y_train)
```

The notebook expects Israeli and Middle Eastern to be confused most (shared words like hummus and pita) and inspects `clf.coef_` to list each cuisine's most important words.

### Part 2: images

```python
from scipy.signal import convolve2d

img = np.full((24, 24), 30, dtype=float)            # dark table
for row in range(24):
    for col in range(24):
        if (row - 12)**2 + (col - 12)**2 <= 8**2:   # circle of radius 8 at the centre
            img[row, col] = 230                      # bright plate
```

A grayscale image is a 2D array (0 black, 255 white). The plate edge is the jump from 30 to 230.

```python
edge_v = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])   # vertical edges (Sobel-like)
edge_h = np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]])   # horizontal edges
blur    = np.ones((3, 3)) / 9                              # average of the 3x3 neighbourhood
sharpen = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])  # amplify differences from neighbours

edges_v = convolve2d(img, edge_v, mode="same", boundary="fill")
edge_magnitude = np.sqrt(edges_v**2 + convolve2d(img, edge_h, mode="same", boundary="fill")**2)
```

[[Convolution]] means: place the filter on the image, multiply each filter value by the pixel beneath it, sum, slide, repeat. The output is a **feature map**. `mode="same"` keeps the output size; `boundary="fill"` pads edges with zeros.

> [!tip] Photo-quality idea from the notebook
> Mean edge magnitude is a quality score. **Blurry** photos have too few edges (low magnitude); **noisy** photos have too many spurious edges (artificially high magnitude).

*Related: [[Lecture 7 - NLP and Image Analysis]] | [[Lecture 6 - Recommendation Systems]] | [[Lecture 8 - Intro to Deep Learning]] | [[Data Science]]*
