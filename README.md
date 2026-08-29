````markdown
# Perf Notes

Static HTML/CSS/JS version of the Perf Notes website.

## Folder Structure

```text
Perf-Notes/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── pages/
    ├── notes.html
    ├── quizlets.html
    ├── sat.html
    ├── college.html
    └── contact.html
````

## Main Files

### index.html

Homepage for Perf Notes.

### pages/notes.html

Contains the study-note resources.

### pages/quizlets.html

Contains the Quizlet resources.

### pages/sat.html

Contains SAT preparation resources.

### pages/college.html

Contains college competitions, programs, internships, and awards.

### pages/contact.html

Contact page.

### css/style.css

Contains all website styling.

### js/script.js

Contains:

* Mobile navigation
* Resource search
* Interactive functionality

## Running the Website

You can open:

```text
index.html
```

directly in a browser.

No server is required for the basic site.

## GitHub Pages

For GitHub Pages, make sure the structure is:

```text
repository/
├── index.html
├── css/
├── js/
└── pages/
```

The `index.html` file must be in the repository root.

Then enable GitHub Pages under:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
```

Your website should then be available at your GitHub Pages address.

## Resource Links

Google Docs links recovered from the public Perf Notes Wix site have been placed directly into `notes.html`.

External college-resource links are also included.

For Quizlet and SAT resources, replace:

```text
PASTE-QUIZLET-URL-HERE
```

and:

```text
PASTE-SAT-ENGLISH-GOOGLE-DOC-URL-HERE
PASTE-SAT-MATH-GOOGLE-DOC-URL-HERE
```

with the exact URLs from your current Wix site.

Do not invent URLs for resources whose destination has not been verified.

## Important

The static version does not depend on Wix.

The internal pages use relative links such as:

```html
href="../index.html"
```

while external resources use their full URLs:

```html
href="https://example.com/"
```

This makes the website suitable for GitHub Pages.

```
```
