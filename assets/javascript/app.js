// Global Variables 
//=============================================================

// variables for counting our correct, incorrect and unanswered questions
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var counter = 60;

// create an array with the questions as objects, answers[], and their correct answers
var questions = [{
    question: "I'll do it for a....",
    answers: ["Twinkie  ", "Oreo  ", "Sandwich  ", "Scooby Snack  "],
    correctAnswer: "Scooby Snack"
}, {
    question: "Whose catch phrase is 'Jinkies'",
    answers: ["Velma  ", "Fred  ", "Daphne  ", "Shaggy  ", "Scooby  "],
    correctAnswer: "Velma"
}, {
    question: "What Frank Sinatra song inspired the theme song from Scooby-Doo?",
    answers: ["Strangers in the night  ", "I get a kick out of you  ", "I've got you under my skin  ", "A foggy day  ", "My Kind of Town  "],
    correctAnswer: "Strangers in the night"
}, {
    question: "What is Shaggy's real name?",
    answers: ["Shaggy  ", "Norville  ", "Roger  ", "Mike  "],
    correctAnswer: "Norville"
}, {
    question: "What is the name of Scooby's nephew?",
    answers: ["Scooby-Dum  ", "Scrappy Doo  ", "Scrappy-Dum  ", "Yabba-Doo  "],
    correctAnswer: "Scrappy Doo"
}, {
    question: "What is Velma's last name?",
    answers: ["Dankley  ", "Donkley  ", "Dinkley  ", "Dinky  ", "Rogers  "],
    correctAnswer: "Dinkley"
}]

// Functions
//=============================================================

// create an on click function for the start button 
$("#start-button").on("click", function () {
    $("#start-button").hide();
    timer = setInterval(timeRemaining, 1000);
    $("#subwrapper").prepend("<h3>Time Remaining: <span id='counter'>60</span> Seconds</h3>");

    $("#done-button").show();
    $("#done-button").on("click", function () {
        $("#done-button").remove();
        scoring();
    });

    for (var i = 0; i < questions.length; i++) {
        $("#subwrapper").append("<div class='allQuestions'>" + questions[i].question + "</div>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#subwrapper").append("<input type='radio' id = 'q" + [i] + "' name='question - " + i +
                " ' value = ' " + questions[i].answers[j] + "'>" + questions[i].answers[j]);
        }
    }
});

// time remaining function to count down. Shows scores when time runs out. 
function timeRemaining() {
    counter = counter - 1;
    $("#counter").html(counter);
    if (counter <= 0) {
        scoring();
        $("#done-button").remove();
    }
}

// functions to check if the correct answer is equal to the radio value, not currently working though 
function checkingAnswers() {
    radioq0 = $("#q0").val();
    console.log(radioq0)
    if (radioq0 == questions[0].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    radioq1 = $("#q1").val();
    if (radioq1 == questions[1].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    radioq2 = $("#q2").val();
    if (radioq2 == questions[2].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    radioq3 = $("#q3").val();
    if (radioq3 === questions[3].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    radioq4 = $("#q4").val();
    if (4 === questions[4].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    radioq5 = $("#q5").val();
    if (radioq5 === questions[5].correctAnswer) {
        correctCounter = correctCounter + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
}

// function for the scoring page 
function scoring() {
    clearInterval();
    $("#subwrapper h2").remove();
    $("#subwrapper").html("<h3>Total Scores</h3>");
    $("#subwrapper").append("<h4>Number of Correct Answers: " + this.correctCounter + "</h4>");
    $("#subwrapper").append("<h4>Number of Incorrect Answers: " + this.incorrectCounter + "</h4>");
    $("#subwrapper").append("<h4>Number of Unanswered Questions " + (questions.length - (this.incorrectCounter + this.correctCounter)) + "</h4>")
}

// Main process 
//=============================================================

// hides the done button until the start button is clicked 
$("#done-button").hide();

// stores the radio button value that was checked 

checkingAnswers();
