/**
 * Created by jhonnyjmr on 1/24/17.
 */



function guessNumber() {
    var userGuess = Number(document.getElementById('userNumber').value);
    var numberToGuess = Number(document.getElementById('tip').innerHTML);


    if (userGuess === numberToGuess) {
        document.getElementById('clue').innerHTML = "you got it right the number was " + numberToGuess;
        alert("The Answer to the Ultimate Question of Life, the Universe and Everything")

    } else if (userGuess < numberToGuess) {
        document.getElementById('clue').innerHTML = "too low";

    } else if (userGuess > numberToGuess) {
        document.getElementById('clue').innerHTML = "too high";

    } else if (userGuess < 0 || userGuess > 100) {
        document.getElementById('clue').innerHTML = "out of the range cowboy " + userGuess + " is out of the range." + "&#x1f604" + " ";
    }




     if (userGuess < numberToGuess) {
         document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +
             " <br> userGuess is smaller than numberToGuess";

    } else if (userGuess > numberToGuess) {
         document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +
             " <br> userGuess is grater than numberToGuess";}






    document.getElementById('userNumber').value = "";

    document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +" <br> numberToGuess("+numberToGuess+") is"+ String( typeof (numberToGuess))+"    " ;
    document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML +"<br> and userGuess("+userGuess+") is"+ String( typeof (userGuess));


}
function randomNumber(elementID) {
    document.getElementById(elementID).innerHTML = String(Math.floor((Math.random() * 100) + 1));
}
