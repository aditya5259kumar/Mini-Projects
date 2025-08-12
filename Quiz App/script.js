const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
  question: "Which instrument is used to measure temperature?",
  answers: [
    { text: "Barometer", correct: false },
    { text: "Hygrometer", correct: false },
    { text: "Thermometer", correct: true },
    { text: "Anemometer", correct: false },
  ],
},

  {
    question: " Which is the smallest country in the world",
    answers: [
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
      { text: "Vatican City", correct: true },
    ],
  },

  {
    question: " Which is the smallest continent in the world",
    answers: [
      { text: "Australia", correct: true },
      { text: "Asia", correct: false },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },

  {
    question: " Which is the largest desert in the world",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "gobi", correct: false },
      { text: "Antartica", correct: true },
      { text: "Sahara", correct: false },
    ],
  },

  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },

  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Leo Tolstoy", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },

  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
    ],
  },

  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },

  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },

  {
    question: "Which organ purifies blood in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
    ],
  },

  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },

  {
    question: "Who invented the light bulb?",
    answers: [
      { text: "Alexander Graham Bell", correct: false },
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Thomas Edison", correct: true },
    ],
  },

  {
    question: "Which festival is known as the festival of lights?",
    answers: [
      { text: "Holi", correct: false },
      { text: "Diwali", correct: true },
      { text: "Eid", correct: false },
      { text: "Christmas", correct: false },
    ],
  },

  {
    question: "Which is the national bird of India?",
    answers: [
      { text: "Eagle", correct: false },
      { text: "Parrot", correct: false },
      { text: "Peacock", correct: true },
      { text: "Sparrow", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-btn");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();