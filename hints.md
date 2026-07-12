# 🚀 Space Quiz — Hints & FAQ

Use this file when you're stuck. Read the hint for the step you're on before asking a mentor.

---

## Step 1 — HTML

### My page is blank / the browser shows nothing
- Make sure you saved the file (Ctrl+S / Cmd+S).
- Make sure you opened **quiz.html** in the browser, not a different file.
- Right-click the page → "Inspect" → check the Console tab for red error messages.

### How do I link my CSS file?
```html
<link rel="stylesheet" href="quiz.css" />
```
This goes inside `<head>` — not in `<body>`.

### How do I link my JS file?
```html
<script src="quiz.js"></script>
```
This goes just before `</body>` — after all the HTML content.

---

## Step 2 — CSS

### My styles aren't showing up
- Did you save **quiz.css**?
- Is the `<link>` tag in `quiz.html` spelled exactly `href="quiz.css"`?
- Hard-refresh the browser: **Ctrl+Shift+R** (Windows) / **Cmd+Shift+R** (Mac).

### What colour should I use for the background?
Any dark hex colour works. Some ideas:
- `#0a0a2e` — deep space navy
- `#1a1a2e` — dark purple
- `#0d1117` — GitHub dark (very popular!)

### How do I make buttons go full width?
```css
.answer-btn {
  display: block;
  width: 100%;
}
```

### What colour is "correct green" and "wrong red"?
- Correct: `#00c875` or `#28a745`
- Wrong: `#ff6b6b` or `#dc3545`

---

## Step 3 — JavaScript

### The page just shows "Loading question…" — nothing changes
The most common cause: `showQuestion()` at the bottom of the file is missing or has a typo.
Also check that your `<script src="quiz.js"></script>` is in `quiz.html`.

### forEach — I don't understand it
`forEach` runs a function once for each item in an array.
```js
["Apple", "Banana", "Cherry"].forEach(function(item, index) {
  console.log(index, item);
  // prints: 0 Apple, 1 Banana, 2 Cherry
});
```
Use `index` to know *which* answer was clicked.

### How do I create a button with JavaScript?
```js
const btn = document.createElement("button");
btn.textContent = "Click me";
btn.classList.add("answer-btn");
document.getElementById("answers").appendChild(btn);
```

### How do I add a click listener?
```js
btn.addEventListener("click", function() {
  console.log("Clicked!");
});
```

### My buttons don't do anything when clicked
Make sure you called `btn.addEventListener(...)` **before** `answersDiv.appendChild(btn)`.

### How does setTimeout work?
```js
setTimeout(myFunction, 1200);   // calls myFunction after 1200 milliseconds (1.2 seconds)
```

---

## Step 4 — Results

### How do I show/hide elements?
Add `class="hidden"` in HTML to start hidden.
Then in JS:
```js
element.classList.add("hidden");     // hide it
element.classList.remove("hidden");  // show it
```

### How do I put the score in a message string?
```js
let message = "You scored " + score + " out of " + total + "!";
// or with a template literal (modern JS):
let message = `You scored ${score} out of ${total}!`;
```

---

## Stretch Goals

### Shuffle — Fisher-Yates algorithm
```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // swap
  }
  return array;
}
// Usage:
const shuffled = shuffle([...questions]);  // [...questions] makes a copy
```

### Timer — countdown per question
```js
let timeLeft = 15;
let timerInterval;

function startTimer() {
  timeLeft = 15;
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion();   // auto-advance when time runs out
    }
  }, 1000);
}
```
Add `<p id="timer">15</p>` to your HTML and call `startTimer()` inside `showQuestion()`.
Don't forget to call `clearInterval(timerInterval)` at the top of `checkAnswer()`!

### High score with localStorage
```js
// Save
localStorage.setItem("bestScore", score);

// Read (returns null if never set)
const best = localStorage.getItem("bestScore");
```

### Progress bar
In HTML:
```html
<div id="progress-bar-bg">
  <div id="progress-bar"></div>
</div>
```
In CSS:
```css
#progress-bar-bg { background: #333; border-radius: 4px; height: 10px; }
#progress-bar     { background: #7ec8e3; height: 10px; width: 0%; border-radius: 4px; transition: width 0.3s; }
```
In JS (inside `showQuestion()`):
```js
const pct = (currentQuestion / questions.length) * 100;
document.getElementById("progress-bar").style.width = pct + "%";
```
