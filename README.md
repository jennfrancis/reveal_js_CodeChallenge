# 🚀 Space Quiz — Coding Challenge

A self-contained group coding challenge for secondary students who are new(er) to coding.
Students will build an interactive space-themed quiz in HTML, CSS and JavaScript — no frameworks, only 1 install.

---

### Prerequisites
- A computer with any modern browser (Chrome, Firefox, Edge, Safari)
- Setup [VSCode](https://code.visualstudio.com/). 
- No internet required once files are downloaded (all CDN links only used by `index.html`)

### Estimated time
**2–3 hours** including a demo at the end.

### The setup
- Groups of 3–4 students per computer work best
- Download the **four files** in the root folder: `quiz.html`, `quiz.css`, `quiz.js`, `hints.md` from GitHub (insert link).
- There is a `solution/` on a separate device or locked folder — Mentors can share with you if falling behind.

---

## Getting Started with Git

### Step 1: Install Git (if not already installed)

Check whether Git is installed by opening a terminal (Mac: **Terminal**, Windows: **Command Prompt** or **Git Bash**) and running:

```bash
git --version
```

If you see a version number you're good. If not, download Git from **https://git-scm.com/downloads** and follow the installer.

---

### Step 2: Clone the repository

This downloads all the challenge files to your computer.

```bash
git clone https://github.com/<org-or-user>/reveal_js_CodeChallenge.git
```

> 💡 Replace `<org-or-user>` with the actual GitHub username or organisation your mentor gives you.

Then move into the project folder:

```bash
cd reveal_js_CodeChallenge
```

---

### Step 3: Create your team's working folder

Each team saves their work in their own folder so everyone's changes stay separate.
Pick a folder name that identifies your team — no spaces, use hyphens.

```bash
mkdir teams/team-<your-team-name>
```

For example:

```bash
mkdir teams/team-rocket
```

Then copy the starter files into your team folder:

```bash
cp quiz.html quiz.css quiz.js hints.md teams/team-<your-team-name>/
```

> 📁 Work **only inside your team folder** from this point on. Never edit the files in the root of the project.

---

### Step 4: Save your work at the end of each session

Run these three commands **at the end of every session** to upload your changes to GitHub.

#### 4a — Stage your changes (tell Git which files to save)

```bash
git add teams/team-<your-team-name>/
```

#### 4b — Commit with a message describing what you did today

```bash
git commit -m "Day 1: completed HTML structure and CSS styling"
```

Write a short, honest message — future-you will thank you. Examples:
- `"Day 1: linked CSS and JS, built HTML skeleton"`
- `"Day 2: finished showQuestion and checkAnswer functions"`
- `"Day 2: added timer stretch goal"`

#### 4c — Push to GitHub

```bash
git push origin main
```

---

### Step 5: Pull the latest files at the start of each session

If you're on a different computer, or want to pick up where another team member left off, pull first:

```bash
git pull origin main
```

Always **pull before you push** to avoid conflicts with other teams.

---

### Full daily workflow (quick reference)

```bash
# --- START of session ---
git pull origin main

# ... do your work, edit files in your team folder ...

# --- END of session ---
git add teams/team-<your-team-name>/
git commit -m "Short description of what you did"
git push origin main
```

---

### Troubleshooting Git

| Problem | Fix |
|---------|-----|
| `Permission denied` when pushing | Make sure you're logged in: run `git config --global user.email "you@example.com"` |
| `error: failed to push` (rejected) | Someone else pushed first — run `git pull origin main` then push again |
| `fatal: not a git repository` | You're in the wrong folder — run `cd reveal_js_CodeChallenge` first |
| Accidentally edited the wrong file | Run `git diff` to see what changed, then `git checkout -- <filename>` to undo |

> 🆘 If you're stuck on Git, ask a mentor before running any other commands.

---

## File Guide

| File | Purpose |
|------|---------|
| `index.html` | The **reveal.js slideshow** — display this on the projector to guide the session |
| `quiz.html` | Starter file — HTML structure (some parts pre-filled) |
| `quiz.css` | Starter file — CSS with TODO placeholders |
| `quiz.js` | Starter file — JavaScript with TODO placeholders |
| `hints.md` | Hint sheet — students should read this before asking for help |
| `solution/quiz-solution.html` | Complete working solution with bonus features |

---

## Running the Slideshow

Open `index.html` in a browser. It loads reveal.js from a CDN.

**Keyboard shortcuts:**
- `→` / `Space` — next slide
- `↓` — sub-slide (steps within a section)
- `F` — fullscreen
- `S` — speaker notes (none used here)
- `?` — all shortcuts

---

## Challenge Steps (Summary)

| Step | Focus | Time |
|------|-------|------|
| 1 | HTML — link files, build structure | ~20 min |
| 2 | CSS — page layout, buttons, feedback colours | ~25 min |
| 3 | JS — show questions, create buttons, check answers | ~35 min |
| 4 | JS — results screen, restart button | ~30 min |
| 5 | Stretch goals (question counter, timer, shuffle…) | ~40 min |

---

## What You Will Learn

- Structuring a page with semantic HTML
- Styling with CSS (flexbox, hover states, utility classes)
- JavaScript fundamentals: arrays, objects, functions, `const`/`let`
- DOM manipulation: `getElementById`, `textContent`, `classList`, `createElement`
- Events: `addEventListener`, `setTimeout`
- Teamwork: driver/navigator pair programming pattern

---

## Tips for Mentors

- **Don't give the answer straight away** — ask "what does the hint file say?" first
- The most common error is a typo in an `id` — teach students to use the browser console (F12)
- If a group finishes early, push them to the ⭐⭐ stretch goals (localStorage high score, progress bar)
- At demo time, insist every group member can explain at least one thing the code does
