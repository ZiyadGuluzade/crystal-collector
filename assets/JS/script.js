//variables
var crystals = {
    green: {
        name: "Green",
        value: 0
        },

    red: {
        name: "Red",
        value: 0
        },

    yellow: {
        name: "Yellow",
        value: 0
        },

    blue: {
        name: "Blue",
        value: 0
        }
    }

var userScore = 0;
var targetScore = 0;

var wins = 0;
var losses = 0;


// restart function
function restart() {
  // reset user score
  userScore = 0;
  //new target score between 19 - 120
  targetScore = randomNumber(19, 120);
  //new random value for each crystal between 1 - 12
  crystals.yellow.value = randomNumber(1, 12);
  crystals.green.value = randomNumber(1, 12);
  crystals.red.value = randomNumber(1, 12);
  crystals.blue.value = randomNumber(1, 12);

  $("#userScore").html(userScore);
  $("#targetScore").html(targetScore);
}


var crystalValues = function(crystals) {
    userScore = userScore + crystals.value;
    checkPoint();
}

//creating a function to check if the user value larger than target value
function checkPoint() {
    if (userScore > targetScore) {
        losses ++;
        // if user value is larger than target value then game add +1 to losses and restarts
        $("#lost").html(losses);  
        restart();
    } else if (targetScore === userScore) {
        wins ++; 
        // if user value is equal to target value then game add +1 to wins and restarts
        $("#won").html(wins);
        restart();
    } 
    
}

// creating a function than generates a random number by taking two arguments
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creating onclick functions for every crystal that add value of the crystal to the user score
$("#blue").click(function() {
    crystalValues(crystals.blue);
    $("#userScore").html(userScore);
});

$("#green").click(function() {
    crystalValues(crystals.green);
    $("#userScore").html(userScore);
});

$("#red").click(function() {
    crystalValues(crystals.red);
    $("#userScore").html(userScore);
});

$("#yellow").click(function() {
    crystalValues(crystals.yellow);
    $("#userScore").html(userScore);
});


restart();
