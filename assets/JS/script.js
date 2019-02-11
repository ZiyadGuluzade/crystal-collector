//variables
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;

var userScore = 0;
var targetScore = 0;

var wins = 0;
var losses = 0;


// functions
function startGame() {
  // reset user score
  userScore = 0;
  // set new target score between 19 - 120
  targetScore = randomNumber(19, 120);
  // set new random value for each crystal between 1 - 12
  blueCrystal = randomNumber(1, 12);
  yellowCrystal = randomNumber(1, 12);
  greenCrystal = randomNumber(1, 12);
  redCrystal = randomNumber(1, 12);

  $("#userScore").html(userScore);
  $("#targetScore").html(targetScore);

  console.log("------------------------");
  console.log("The Target score is " + targetScore);
  console.log("------------------------");
  console.log("The blue crystal is " + blueCrystal);
  console.log("The yellow crystal is " + yellowCrystal);
  console.log("The Red crystal is " + redCrystal);
  console.log("The green crystal is "+ greenCrystal);
  console.log("------------------------");

  var blueValue = function() {
      
  }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//main section
$("#blue").click(function() {
    function blueValue() {
        userScore = userScore + blueCrystal;
        console.log("yout score: " + userScore);
    }
});

$("#green").click(function() {
    alert("green");
});

$("#red").click(function() {
    alert("red");
});

$("#yellow").click(function() {
    alert("yellow");
});

startGame();
