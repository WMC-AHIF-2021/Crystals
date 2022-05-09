var quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
var currentQuiz = 0;
var score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach(function (answerEl) { return answerEl.checked = false; });
}
function getSelected() {
    var answer;
    answerEls.forEach(function (answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', function () {
    var answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = "\n           <h2>You answered " + score + "/" + quizData.length + " questions correctly</h2>\n\n           <button onclick=\"location.reload()\">Reload</button>\n           ";
        }
    }
});
