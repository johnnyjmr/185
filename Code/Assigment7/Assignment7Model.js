/**
 * Created by jhonnyjmr on 1/24/17.
 */

function guessNumber() {
    //variables to storage the user guess and number to gess
    var userGuess = $("#userNumber").val();
    var numberToGuess = $("#tip").text();// I HAVE TO USE THE .TEXT METHOD CAUSE .VALUE OR .INNERHTML DIDN'T
    if (userGuess > 0 && userGuess < 101)
        $("#clue").append("<div class='right'><kbd class='guess' >" + userGuess + "</kbd></div>")
    //check if user number is high, low or correct  *** CHANGE THE DOM WITH JQUERY***

    if (userGuess === numberToGuess) {//CORRECT GUESS
        $("#clue").append("<div><kbd style='background-color: darkgreen'>you got it right the number was " + numberToGuess +
            '<br>The Answer to the Ultimate Question of Life, the Universe and Everything</kbd></div>');
        // document.getElementById('clue').innerHTML = "you got it right the number was " + numberToGuess +
        //     "<br>The Answer to the Ultimate Question of Life, the Universe and Everything";
        document.getElementById('userNumber').onkeydown = null;
    }
    if (userGuess < numberToGuess && userGuess > 0 && userGuess < 100) {//GUESS TOO LOW
        $("#clue").append("<div class='left'><kbd class='output'>too low</kbd></div>");
    }
    if (userGuess > numberToGuess && userGuess < 100) {//GUESS TO HIGH
        $("#clue").append("<div class='left'><kbd class='output'>too high</kbd></div>");
    }
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {//GUESS OUT OF RANGE  ***IT IS NOT CHECKING WHEN THE USER ENTER THE NUMBER 0****
        if ($("#userNumber").val()==="0" ||userGuess < 1 || userGuess > 100 ){
            $("#clue").append("<div><kbd style='background-color: crimson'>" + userGuess + " is out of range cowboy. Try between 1-100." + "&#x1f604</kbd></div>");
        }else {
            $("#clue").append("<div><kbd style='background-color: crimson'>" + userGuess + " is not a number. Try between 1-100." + "&#x1f604</kbd></div>");
        }
    }
    //erase the last user guess in the input
    document.getElementById('userNumber').value = "";

    //print hints to the console
    console.log("numberToGuess is " + numberToGuess);
    console.log(" and userGuess is " + userGuess);


}
//get an html element and store the random number there. elementID is the string of the element id
function randomNumber(elementID) {
    //random number from 1-1001
    var ranNum = String(Math.floor((Math.random() * 100) + 1));
    console.log(ranNum);
    $("#" + elementID).text(ranNum);
}


