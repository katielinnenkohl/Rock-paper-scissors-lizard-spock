// Stores the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;

// Stores the lables for the choices
var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];

// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// Generate computer's random choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

// This is the function for playing the game
function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 4)) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 3)) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 4)) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 3 && (computerChoice == 0 || computerChoice == 2)) {
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 4 && (computerChoice == 1 || computerChoice == 3)) {
        updateScore(0);
        displayGameResult("win")
    } else {
        updateScore(2);
        displayGameResult("lose")
    }
}


function displayGameResult(result) {
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";

    if (result === "win") {

        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {

        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {

        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}


function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}


function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}


var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var spockButton = document.getElementById("spock");
var lizardButton = document.getElementById("lizard");
var playButton = document.getElementById("play");


rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
