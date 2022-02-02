// CONSTANTS //
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
const OPTIONS = [SCISSORS, PAPER, STONE];

// HELPER FUNCTIONS //
var generateComOption = function () {
  var index = Math.floor(Math.random() * 3);
  return index;
};

var checkForDraw = function (playerInput, computerOption) {
  if (
    (playerInput == SCISSORS && computerOption == SCISSORS) ||
    (playerInput == PAPER && computerOption == PAPER) ||
    (playerInput == STONE && computerOption == STONE)
  ) {
    return true;
  }
};

var generateWinner = function (playerInput, computerOption) {
  if (checkForDraw(playerInput, computerOption) == true) {
    myOutputValue = "This is a draw!";
    return myOutputValue;
  }
  if (
    (playerInput == SCISSORS && computerOption == PAPER) ||
    (playerInput == PAPER && computerOption == STONE) ||
    (playerInput == STONE && computerOption == SCISSORS)
  ) {
    var myOutputValue = " You have won!";
  } else {
    var myOutputValue = " You have lost! Computer has won!";
  }
  return myOutputValue;
};

// MAIN FUNCTION //
var main = function (input) {
  var myOutputValue = "";

  // check input if it is 1 out of 3 options
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return "Pls enter either scissors, paper or stone";
  }

  // generate computer's option
  var computerOption = OPTIONS[generateComOption()];

  // compare player option with computer's option
  var myOutputValue = generateWinner(input, computerOption);
  return (
    "You have chosen " +
    input +
    "<br>" +
    "Computer has chosen " +
    computerOption +
    "." +
    "<br><br>" +
    myOutputValue
  );
};
