//assigning variables

let guessLetter = 'Guess what letter I/m thinking of';
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let yourGuess = [];

let choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let randomGuess = choices[Math.floor(Math.random() * choices.length)];

// Let's start by grabbing a reference to the <span> below.
let userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
    userText.textContent = event.key;
};