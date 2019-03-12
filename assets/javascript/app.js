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
    answers: ["Twinkie ", "Oreo ", "Sandwich ", "Scooby Snack "],
    correctAnswer: "Scooby Snack "
}, {
    question: "Whose catch phrase is 'Jinkies'",
    answers: ["Velma ", "Fred ", "Daphne ", "Shaggy ", "Scooby "],
    correctAnswer: "Velma "
}, {
    question: "What Frank Sinatra song inspired the theme song from Scooby-Doo?",
    answers: ["Strangers in the night ", "I get a kick out of you ", "I've got you under my skin ", "A foggy day ", "My Kind of Town "],
    correctAnswer: "Strangers in the night "
}, {
    question: "What is Shaggy's real name?",
    answers: ["Shaggy ", "Norville ", "Roger ", "Mike "],
    correctAnswer: "Norville "
}, {
    question: "What is the name of Scooby's nephew?",
    answers: ["Scooby-Dum ", "Scrappy Doo ", "Scrappy-Dum ", "Yabba-Doo "],
    correctAnswer: "Scrappy Doo "
}, {
    question: "What is Velma's last name?",
    answers: ["Dankley ", "Donkley ", "Dinkley ", "Dinky ", "Rogers "],
    correctAnswer: "Dinkley "
}]

// Functions
//=============================================================

// create an on click function for the start button 
$("#start-button").on("click", function () {
    $("#start-button").hide();
    timer = setInterval(timeRemaining, 1000);
    $("#subwrapper").prepend("<h3>Time Remaining: <span id='counter'>60</span> Seconds</h3>");
    //to show the done button until it's clicked 
    $("#done-button").show();
    $("#done-button").on("click", function () {
        $("#done-button").hide();
        scoring();
    });
    // for loop to show all of the questions, 
    for (var i = 0; i < questions.length; i++) {
        $("#subwrapper").append("<div class='allQuestions' >" + questions[i].question + "</div>");
        // then another for loop to show each answer and keep it tied the correct question
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#subwrapper").append("<input type='radio' name='question - " + i +
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
        $("#done-button").hide();
    }
}

// ex: $('input[name=radioName]:checked', '#myForm').val()
// stores the radio button value 


// functions to check if the correct answer is equal to the radio value, not currently working though 
function checkingAnswers() {
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[0].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[1].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[2].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[3].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[4].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
    if ($('input[name=questions]:checked', '#subwrapper').val() === questions[5].correctAnswer) {
        correctAnswer = correctAnswer + 1;
    } else {
        incorrectCounter = incorrectCounter + 1;
    }
}

// function for the scoring page 
function scoring() {
    clearInterval();
    $("#subwrapper h2").hide();
    $("#subwrapper").html("<h3>Total Scores</h3>");
    $("#subwrapper").append("<h4>Number of Correct Answers: " + this.correctCounter + "</h4>");
    $("#subwrapper").append("<h4>Number of Incorrect Answers: " + this.incorrectCounter + "</h4>");
    $("#subwrapper").append("<h4>Number of Unanswered Questions " + (questions.length - (this.incorrectCounter + this.correctCounter)) + "</h4>")
}

// Main process 
//=============================================================

// hides the done button until the start button is clicked 
$("#done-button").hide();
checkingAnswers();
