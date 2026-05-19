# YuheiKogo.github.io redesign

This is a compact Jekyll/GitHub Pages source set for an academic homepage.

## How to use

1. Keep the existing media files:
   - `assets/img/profile.jpg`
   - `assets/img/favicon.png`
   - `assets/pdf/GeomSympo25.pdf`
2. Replace the corresponding source files in the repository with the files in this folder.
3. Delete the committed `_site/` directory from the repository unless you intentionally publish prebuilt static HTML.
4. Commit and push to GitHub.

## Local preview

If Ruby and Bundler are installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/`.
