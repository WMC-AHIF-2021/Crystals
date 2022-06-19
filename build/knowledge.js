const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
// create questions
let questions = [
    {
        question: "Amethyst helps to ...",
        imgSrc: "Amethyst.png",
        choiceA: "... balance emotions, clear the mind & release negative energy",
        choiceB: "... keep a cool and calm head in difficult situations",
        choiceC: "... keep a balance life between work and your free time",
        correct: "A"
    }, {
        question: "Carnelian is also known as the ...",
        imgSrc: "Carnelian.png",
        choiceA: "sunrise stone",
        choiceB: "sunset stone",
        choiceC: "orange stone",
        correct: "B"
    }, {
        question: "Empowerite...",
        imgSrc: "img.png",
        choiceA: "... is found only in Austria",
        choiceB: "... is the most wear jewelry worldwide",
        choiceC: "...makes you feel confident and power",
        correct: "C"
    }
];
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const measureWidth = 150; // 150px
const measureUnit = measureWidth / questionTime;
let TIMER;
let score = 0;
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz);
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count.toString();
        timeGauge.style.width = count * measureUnit + "px";
        count++;
    }
    else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }
        else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }
    else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion.toString()).style.backgroundColor = "#7eea8b";
}
// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion.toString()).style.backgroundColor = "#e51e1e";
}
function scoreRender() {
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score / questions.length);
    let img = (scorePerCent >= 80) ? "" :
        (scorePerCent >= 60) ? "" :
            (scorePerCent >= 40) ? "" :
                (scorePerCent >= 20) ? "" :
                    "";
    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
//# sourceMappingURL=knowledge.js.map