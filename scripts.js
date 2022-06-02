const quizData = [
  {
    question: "How was the first President of Brazil? (The New Republic)",
    a: "José Sarney",
    b: "Itamar Franco",
    c: "FHC",
    d: "Tancredo Neves",
    correct: "b",
  },
  {
    question: "2. What is the most used programming language in 2019",
    a: "Java",
    b: "C",
    c: "Phyton",
    d: "JavaScript",
    correct: "b",
  },
  {
    question: "3. Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
      question: "4. What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Application programming interface",
      correct: "a",
  },
  {
      question: "5. What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correct: "d",
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

loadQuiz();

  
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
        quiz.innerHTML = `<h2>You answered correctyl at ${score}/${quizData.length} questions.</h2>` 
      }
    }
});

returnIcon.addEventListener("click", () =>{
  currentQuiz--;
  loadQuiz();
})
