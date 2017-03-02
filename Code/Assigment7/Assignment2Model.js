/**
 * Created by jhonnyjmr on 1/24/17.
 */



function guessNumber() {
    //variables to storage the user guess and number to gess
    var userGuess = Number(document.getElementById('userNumber').value);
    var numberToGuess = Number(document.getElementById('tip').innerHTML);

    //check if user number is high, low or correct*** THIS IS NOT WORKING, ONLY WHEN USER GUESS CORRECT ANSWER***
    if (userGuess === numberToGuess) {//CORRECT GUESS
        document.getElementById('clue').innerHTML = "you got it right the number was " + numberToGuess +
            "<br>The Answer to the Ultimate Question of Life, the Universe and Everything";
        document.getElementById('userNu0 mber').onkeydown = null;

    } else if (userGuess < numberToGuess && userGuess > 0) {//GUESS TOO LOW
        document.getElementById('clue').innerHTML = "too low";

    } else if (userGuess > numberToGuess && userGuess < 0) {//GUESS TO HIGH
        document.getElementById('clue').innerHTML = "too high";
    } else if (userGuess < 0 || userGuess > 100) {//GUESS OUT OF RANGE
        document.getElementById('clue').innerHTML = "out of the range cowboy " + userGuess + " is out of the range." + "&#x1f604" + " ";
    }
    //PRINT A HINT FOR USER ***CHANGE HERE TO JQUERY TO MAKE IT LIKE A CONVERSATION***
    // if (userGuess < numberToGuess) {
    //     document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +
    //         " <br> userGuess is smaller than numberToGuess";
    //
    // } else if (userGuess > numberToGuess) {
    //     document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +
    //         " <br> userGuess is grater than numberToGuess";
    // }
    //erase the last use guess
    document.getElementById('userNumber').value = "";

    console.log("numberToGuess is " + numberToGuess);
    console.log(" and userGuess is " + userGuess);
    // " <br> numberToGuess(" + numberToGuess + ") is" + String(typeof (numberToGuess)) + "    ";
    //"<br> and userGuess(" + userGuess + ") is" + String(typeof (userGuess));


}
//get an html element and store the random number there
function randomNumber(elementID) {
    //random number from 1-1001
    var ranNum = String(Math.floor((Math.random() * 100) + 1));
    console.log(ranNum);
    document.getElementById(elementID).innerHTML = ranNum;
}


