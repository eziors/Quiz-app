const quizData = [
  {
    question: "What is the color of the submit button?",
    a: "Red",
    b: "Brown",
    c: "Purple",
    d: "Blue",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Phyton",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "Who is the President of US?",
    a: "Barack Obama",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Application programming interface",
      correct: "a",
  },
  {
      question: "Which year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correct: "b",
  },
];
const quizData_Fr = [
  {
    question: "Qui était le première Président de le Brésil?",
    a: "José Sarney",
    b: "Itamar Franco",
    c: "Deodoro da Fonseca",
    d: "Tancredo Neves",
    correct: "c",
  },
  {
    question: "2. Quel est le langage le plus utilisé aujourd'hui?",
    a: "Java",
    b: "C",
    c: "Phyton",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "3. Qui est le Presidént de le États-Unis",
    a: "Barack Obama",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
      question: "4. Qu'est ce que HTML?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Application programming interface",
      correct: "a",
  },
  {
      question: "Qui a cree Javascript et en quelle année?",
      a: "Brendan Eich en 1996",
      b: "Brendan Eich en 1995",
      c: "Bill gates, 1994",
      d: "James Gosling, 1992",
      correct: "b",
  },
];


const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const returnIcon = document.getElementById("return");

let currentQuiz = 0;
let score = 0;
console.log(currentQuiz);


function loadQuiz(){
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;     
    }
  });

  return answer;

}  

function deselectAnswers(){
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
 
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if(answer){ 
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
      currentQuiz++;
      if (currentQuiz < quizData.length){
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>` 
      }
    }
});
