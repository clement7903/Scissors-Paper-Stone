// CONSTANTS //
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
const OPTIONS = [SCISSORS, PAPER, STONE];
var playerWins = 0;
var comWins = 0;
var gameMode = "UserNameNeeded";

// HELPER FUNCTIONS //
// generates index for computer's option
var generateComOption = function () {
  var index = Math.floor(Math.random() * 3);
  return index;
};

// checks for draw condition
var checkForDraw = function (playerInput, computerOption) {
  if (
    (playerInput == SCISSORS && computerOption == SCISSORS) ||
    (playerInput == PAPER && computerOption == PAPER) ||
    (playerInput == STONE && computerOption == STONE)
  ) {
    return true;
  }
};

// generates winning/losing statement
var generateWinner = function (playerInput, computerOption) {
  if (checkForDraw(playerInput, computerOption) == true) {
    myOutputValue =
      "This is a draw! You have won: " +
      playerWins +
      " while com has won: " +
      comWins;
    return myOutputValue;
  }
  if (gameMode == "normal") {
    if (
      (playerInput == SCISSORS && computerOption == PAPER) ||
      (playerInput == PAPER && computerOption == STONE) ||
      (playerInput == STONE && computerOption == SCISSORS)
    ) {
      playerWins += 1;
      var myOutputValue =
        " You have won! You have won a total of " + playerWins + " times.";
    } else {
      comWins += 1;
      var myOutputValue =
        " You have lost! Computer has won! Com has won a total of " +
        comWins +
        " times.";
    }
  }
  if (gameMode == "reversed") {
    if (
      (computerOption == SCISSORS && playerInput == PAPER) ||
      (computerOption == PAPER && playerInput == STONE) ||
      (computerOption == STONE && playerInput == SCISSORS)
    ) {
      playerWins += 1;
      var myOutputValue =
        " You have won! You have won a total of " + playerWins + " times.";
    } else {
      comWins += 1;
      var myOutputValue =
        " You have lost! Computer has won! Com has won a total of " +
        comWins +
        " times.";
    }
  }
  return myOutputValue;
};

// MAIN FUNCTION //
var main = function (input) {
  var myOutputValue = "";
  // ask for username
  if (gameMode == "UserNameNeeded") {
    var userName = input;
    gameMode = "chooseVersion";
    myOutputValue = "Hello " + userName;
    return myOutputValue;
  }

  // ask for game mode - normal or reversed

  if (gameMode == "chooseVersion") {
    if (input == "normal") {
      gameMode = input;
    }
    if (input == "reversed") {
      gameMode = input;
    }
    if (input == "") {
      alert("Pls choose either normal or reversed mode.");
      return "Pls choose either normal or reversed mode.";
    }
    return "You have chosen to play " + gameMode + " mode.";
  }

  // check input if it is 1 out of 3 valid options
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return "Pls enter either scissors, paper or stone";
  }

  //starts the normal game
  if (gameMode == "normal" || gameMode == "reversed") {
    // generate computer's option
    var computerOption = OPTIONS[generateComOption()];

    // compare player option with computer's option
    myOutputValue = generateWinner(input, computerOption);
  }

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
