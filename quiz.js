// =====================================================
//  SPACE QUIZ — JavaScript
//  Step 3 & 4: fill in the TODOs to make it all work!
// =====================================================


// ── Step 3a: Questions ────────────────────────────────────────────────────────
//
//  This is an ARRAY of OBJECTS.
//  Each object has:
//    question : the question string
//    answers  : an array of 4 possible answers
//    correct  : the INDEX (0, 1, 2, or 3) of the right answer
//
const questions = [
  {
    question: "How many planets are in our solar system?",
    answers:  ["7", "8", "9", "10"],
    correct:  1    // "8" is at index 1
  },
  {
    question: "What is the closest star to Earth?",
    answers:  ["Sirius", "Betelgeuse", "The Sun", "Proxima Centauri"],
    correct:  2
  },
  {
    question: "On which planet is the largest volcano in the solar system?",
    answers:  ["Earth", "Venus", "Jupiter", "Mars"],
    correct:  3
  },
  {
    question: "Approximately how old is the universe?",
    answers:  ["4.5 billion years", "13.8 billion years", "1 billion years", "100 billion years"],
    correct:  1
  },
  {
    question: "What force keeps planets in orbit around the Sun?",
    answers:  ["Magnetism", "Friction", "Gravity", "Electricity"],
    correct:  2
  }
  // TODO (Step 5 stretch): Add more questions here!
];


// ── Step 3b: State & DOM elements ────────────────────────────────────────────

let currentQuestion = 0;   // which question we're on (starts at 0)
let score = 0;             // player's score

// Grab HTML elements by their id so we can update them
const questionText  = document.getElementById("question-text");
const answersDiv    = document.getElementById("answers");
const scoreDisplay  = document.getElementById("score");
const questionArea  = document.getElementById("question-area");
const resultArea    = document.getElementById("result-area");
const resultText    = document.getElementById("result-text");
const restartBtn    = document.getElementById("restart-btn");


// ── Step 3c: showQuestion() ───────────────────────────────────────────────────
//
//  This function reads the current question from the array and
//  updates the page to show it.
//
function showQuestion() {
  const q = questions[currentQuestion];  // get the current question object

  // TODO: Set questionText.textContent to q.question

  // Clear any old answer buttons
  answersDiv.innerHTML = "";

  // TODO: Loop through q.answers and for each answer:
  //   1. Create a <button> element  →  document.createElement("button")
  //   2. Set its .textContent to the answer text
  //   3. Add the CSS class "answer-btn"  →  btn.classList.add("answer-btn")
  //   4. Add a click event listener that calls checkAnswer(index)
  //   5. Append it to answersDiv  →  answersDiv.appendChild(btn)
  //
  //  HINT: use q.answers.forEach(function(answerText, index) { … })

}


// ── Step 3d: checkAnswer() ────────────────────────────────────────────────────
//
//  Called when a button is clicked. Checks if the answer is right,
//  updates the score, colours the buttons, then moves on.
//
function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];

  // Disable all buttons so the player can't click twice
  const buttons = answersDiv.querySelectorAll(".answer-btn");
  buttons.forEach(function(btn) { btn.disabled = true; });

  // TODO: Check if selectedIndex === q.correct
  //   If YES: add 1 to score, update scoreDisplay.textContent,
  //           add class "correct" to the clicked button
  //   If NO:  add class "wrong" to the clicked button,
  //           add class "correct" to buttons[q.correct] so they see the right answer

  // Wait 1.2 seconds then call nextQuestion
  setTimeout(nextQuestion, 1200);
}


// ── Step 3e: nextQuestion() ───────────────────────────────────────────────────

function nextQuestion() {
  // TODO: Increase currentQuestion by 1
  //       If there are more questions (currentQuestion < questions.length),
  //         call showQuestion()
  //       Otherwise call showResult()
}


// ── Step 4a: showResult() ─────────────────────────────────────────────────────

function showResult() {
  // TODO: Hide questionArea  →  questionArea.classList.add("hidden")
  // TODO: Show resultArea    →  resultArea.classList.remove("hidden")

  const total = questions.length;

  // TODO: Write an if/else if/else to set a message string based on score:
  //   score === total          → "🌟 Perfect score! You're a space genius!"
  //   score >= total / 2       → "🚀 Great job! [score]/[total] — keep exploring!"
  //   otherwise                → "🌍 [score]/[total] — revise and try again!"

  // TODO: Set resultText.textContent to your message
}


// ── Step 4b: restartQuiz() ───────────────────────────────────────────────────

function restartQuiz() {
  // TODO: Reset currentQuestion and score back to 0
  // TODO: Update scoreDisplay.textContent back to 0
  // TODO: Show questionArea, hide resultArea
  // TODO: Call showQuestion()
}

// TODO: Add an event listener on restartBtn that calls restartQuiz


// ── Kick off the quiz! ────────────────────────────────────────────────────────
showQuestion();
