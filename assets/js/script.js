var questions = [
    {
    question: "What does HTML stand for?",
    answers: [
       "Hyper Text Markup Language",
       "Hyperlinks and Text Markup Language",
       "Hyper Text Marking Language"],
       correctAnswer: 0
    },
    {
    question: "CSS stands for?",
    answers: [
       "Computer Styled Sections",
       "Cascading Style Sheets",
       "Computer System Style"],
       correctAnswer: 1
    },
    {
    question: "Who invented Javascript?",
    answers: [
       "Douglas Crockford",
       "Sheryl Sandberg",
       "Brendan Eich"],
       correctAnswer: 2
    },
    {
    question: "Which of the below answers is the correct Syntax for an HTML Tag?",
    answers: [
       "</tag> content </tag>",
       "<tag> content </tag>",
       "<tag content /tag>"],
       correctAnswer: 1
    },
    {
    question: "True or false: CSS media queries are a feature of CSS that enable webpage content to adapt to different screen sizes and resolutions",
    answers: [
        "True",
        "false"],
        correctAnswer: 0
    },
]
var currentQuestion = 0;
var startButton = document.querySelector("#startButton");
var startDiv = document.querySelector("#start");
var questionDiv = document.querySelector("#question");
var clock = questions.length * 5 ;

startButton.addEventListener("click", function(){
    var timer = setInterval(function(){ 
        document.querySelector("#clock").textContent = clock
        clock--;
        if (clock < 0){
            clearInterval(timer);
        } 
    }, 1000); 
startDiv.setAttribute("style", "display:none;")
displayCurrentQuestion ();
})



function displayCurrentQuestion() {
var question = questions[currentQuestion];
questionDiv.innerHTML = "";

var correctAnswer = question.correctAnswer

//display questions
var questionHeading = document.createElement("h3");
questionHeading.textContent = 
question.question;
questionDiv.appendChild(questionHeading);


//display answers
var answerOl = document.createElement("ol");
for (var i = 0; i <question.answers.length; i++) {
    answerLi = document.createElement("li");
    answerLi.textContent = question.answers[i];
    answerLi.setAttribute("answerOl", question.answers[i])
    answerLi.setAttribute("data-answerIndex", i)
    answerLi.setAttribute("style", "border:5px solid DarkGray; background-color:DarkGray; padding:20px; width:40%; margin:50px; border-radius:25px")
    answerOl.appendChild(answerLi);
    answerLi.addEventListener("click", function(e) {
        handleAnswerSelection(e.target.getAttribute("data-answerIndex"), correctAnswer)
    })
}
questionDiv.appendChild(answerOl)

};

function getnextQuestion() {
    currentQuestion++;
    if (currentQuestion > question.length) {
     goToResultPage();
    } else {
    displayCurrentQuestion();
    }
}

function handleAnswerSelection (userAnswer, correctAnswer) {

    if (userAnswer == correctAnswer) {
    // display "correct"
    document.getElementById("feedback").textContent = "Correct!";
    } else { 
    // deduct time
    clock-=5
    document.getElementById("feedback").textContent = "Incorrect!"
    }

getnextQuestion()

}

function goToResultPage() {

   // if (clock == timer.length[0] || currentQuestion < question.length) {
    //    document.getElementById("results").textContent = "Game Over!"
    //}

}

function displayHighScore() {

}