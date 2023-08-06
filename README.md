# IMDB Names Embeddings Analysis 🎬🔍

Welcome to the IMDB Names Embeddings Analysis repository! Here, we delve deep into the realm of embeddings, examining the intricacies of names and surnames from the vast IMDB dataset.

## Repository Structure 🌳

1. **names_and_surnames**: Analysis of combined IMDB names and surnames.
2. **names_only**: Analysis focused solely on IMDB names.
3. **notebooks**: Contains all Jupyter notebooks detailing the analyses performed on the datasets.

## IMDB Names Embeddings Notebook 📔

You can find the detailed analysis notebook here: [IMBD Names embedding Fasttext.ipynb](https://github.com/louispaulet/imdb_embeddings/notebooks/IMBD%20Names%20embedding%20Fasttext.ipynb). 

This notebook showcases:
- Installation of necessary libraries 📚.
- Loading and manipulation of the IMDB names dataset 🎬.
- Computation of embeddings for sampled names 🧠.
- Visualizing embeddings using PCA, UMAP, and t-SNE 📉.
- Exporting reduced dimension datasets 📤.

## Models Under Study 🧠

We've explored embeddings using four intriguing models, each housed in separate notebooks:

1. **facebook/fasttext-en-vectors (v4)**: FastText is a powerful, open-source, free, lightweight library that allows users to learn text representations and perform text classification tasks. Studying names and surnames with FastText helps in understanding sub-word information and morphology of words. 🚀

2. **facebook/bart-large (v3)**: BART (Bidirectional and Auto-Regressive Transformers) is a Facebook AI model. Its structure is great for tasks that require understanding the context in both directions (to the left and the right of a word), which can be beneficial when studying surnames that might carry ethnic, regional, or historical connotations. 🌐

3. **sentence-transformers/all-mpnet-base-v2 (v2)**: MPNet is a novel pre-trained model that introduces a new way of self-supervised learning. By studying names and surnames using this model, we aim to leverage its prowess in understanding masked language modeling, which could shed light on cultural and linguistic intricacies of names. 🔍

4. **sentence-transformers/all-MiniLM-L6-v2 (v1)**: MiniLM is designed to be smaller and faster, yet still powerful. Analyzing names and surnames with this model can be efficient, especially when we want to understand the general semantic space of names without diving too deep. ⚡

## Contribute 🤝

If you're interested in enhancing this analysis or exploring another dimension, feel free to fork the repo and submit a pull request!

---

If you have questions, issues, or feedback, please [open an issue](https://github.com/louispaulet/imdb_embeddings/issues) or reach out to the maintainer.

Happy analyzing! 📊🎉
