var number = document.querySelectorAll(".number");
var button = document.querySelector("#rollButton");
var dice = document.querySelectorAll(".dice");
var reset = document.querySelector("#reset")
var finishRoll = document.querySelector("#finishRoll");
var score = document.querySelector("#score");
var totalScore = 0;
var roundScore = 0;
var worth = 0;
var arr = [];
var noFarkle = [];
var currentRoundScore = document.querySelector(".currentRoundScore");
var continuedScore = 0;
var continuebutton;
var trenton;


button.addEventListener("click", function() {
    rollDice();
    getCurrentRoundScore();
});

reset.addEventListener("click", function() {
    removeSelected();
    roundScore = 0;
    totalScore = 0;
    score.textContent = "Score: " + totalScore;
    for(var i = 0; i < number.length; i++) {
        number[i].textContent = " ";
        currentRoundScore.textContent = "Current possible round score: " + roundScore;
    }
})

finishRoll.addEventListener("click", function() {
    worth = 0;
    roundScore = 0;
    number.forEach(function(number) {

if (number.textContent == 1) {
     worth = 100;
     roundScore += worth;

} else if( number.textContent == 5) {
    worth = 50;
    roundScore += worth;
}
        number.textContent = " ";

    })

    totalScore += roundScore;
    score.textContent = "Score: " + totalScore;

    removeSelected();
    getCurrentRoundScore();

})

for(var i = 0; i < dice.length; i++) {
    dice[i].addEventListener("click", function() {
        this.classList.toggle("selected");
    });

}

function rollDice() {
    for(var i = 0; i < number.length; i++) {
        if(!dice[i].classList.contains("selected")) {
            number[i].textContent = randomNumber();
            arr.push(number[i].textContent);
        }

    }
    
    checkforFarkle();

    getCurrentRoundScore() 

    checkForNoFarkle();

}

function randomNumber() {
    var number = Math.floor((Math.random() * 6) + 1);
    return number;
}

function checkforFarkle() {
    if (arr.indexOf("1") == -1 && arr.indexOf("5") == -1) {
             
             console.log("You farkled!");
              removeSelected();
                roundScore = 0;
                score.textContent = "Score: " + totalScore;
                for(var i = 0; i < number.length; i++) {
                number[i].textContent = " ";
                currentRoundScore.textContent = "Current possible round score: " + roundScore;
    }
            
        }
        arr = [];
}

function checkForNoFarkle() {
    for (var i = 0; i < number.length; i++) {
       
       
    }

}

function getCurrentRoundScore() {
    worth = 0;
    roundScore = 0;
    number.forEach(function(number) {


if (number.textContent == 1) {
     worth = 100;
     roundScore += worth;

} else if( number.textContent == 5) {
    worth = 50;
    roundScore += worth;
}
        currentRoundScore.textContent = "Current possible round score: " + roundScore;

    })
}

function removeSelected() {
    for(var i = 0; i < dice.length; i++) {
    dice[i].classList.remove("selected");
}
}

