// declared variable to set and array of letters
let choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// declared variables 
let wins = 0; // user wins
let losses = 0; // user loses
let left = 9; // guesses left
let guesses = 9;
let lettersGuessed = [];
let psychic = "";

//store all html 'nodes' that we need to dynamically update and we reference these elements via their ids

let winsNum = document.getElementById("wins").innerHTML = wins;
let lossNum = document.getElementById("losses").innerHTML = losses;
let guessesLeft = document.getElementById("guesses-left").innerHTML = left;
// let guessedLetter = document.getElementById("guesses").innerHTML = guesses;
let allGuesses = document.getElementById("user-text").innerHTML = lettersGuessed;
console.log(allGuesses);


// helper functions
let magic = function() {
    psychic = choices[Math.floor(Math.random() * choices.length)];

    // test
    // psychic = document.getElementById("comp").innerHTML = psychic;
    //console.log(psychic);
};


let soFar = function() {
    document.getElementById("user-text").innerHTML = lettersGuessed.join(",");
};

let remainingGuess = function() {
    document.getElementById("guesses-left").innerHTML = left;
};

let newGame = function() {
    lettersGuessed = [];
    left = 9;
    magic();
    remainingGuess();
    soFar();
}



document.onkeyup = function(event) {
    let playerGuess = event.key;
    //console.log(event.keyCode)


    for (let i = 0; i < choices.length; i++) {
        if (choices[i] === playerGuess) {
            left--;

            lettersGuessed.push(playerGuess.toLowerCase());
            soFar();
            remainingGuess();
        }

    }
    if (left >= 0) {
        if (playerGuess === psychic) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            magic();
        }
    } else if (left < 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("Game over, rematch?");
        newGame();

    }


}