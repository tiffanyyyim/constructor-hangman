//load inquirer package 
var inquirer = require("inquirer");

//constructor function current word to guess 
var HangmanWord = function () {
    //hangman word used
    this.word = "hangman";
   //number of guesses left by user 
    this.gussesLeft = 10;
    
}


//inquirer prompt to ask the user what their guess is
inquirer.prompt([
    {
        guess: "guess",
        message: "What is your Guess?"
    }
//after guess is inputted then...        
]).then(function(answers){

//checks if the guess matches any letter in the word
    
    //if it does, that fill in the blank line with that letter
    //and if number of empty lines equal zero, then prompt that user won the game. 
    //else, decrease the guesses remaining 
    //and if the number of guesses remaining equals zero, then prompt that the user lose the game. 
    
})







