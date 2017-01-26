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
            " <br> userGuess is grater than numberToGuess";
    }


    document.getElementById('userNumber').value = "";

    document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML + " <br> numberToGuess(" + numberToGuess + ") is" + String(typeof (numberToGuess)) + "    ";
    document.getElementById('debug').innerHTML = document.getElementById('debug').innerHTML + "<br> and userGuess(" + userGuess + ") is" + String(typeof (userGuess));


}
function randomNumber(elementID) {
    document.getElementById(elementID).innerHTML = String(Math.floor((Math.random() * 100) + 1));
}


function createAbecedaryArray() {
    var abecedary = [];
    for (i = 0; i < 26; i++) {
        abecedary.push({letter: String.fromCharCode(97 + i), frequency: 0});
    }
    for (i = 0; i < 26; i++) {
        abecedary.push({letter: String.fromCharCode(65 + i), frequency: 0});
    }

    return abecedary;
}

function countLetters(userWord, ID ) {
    alert(userWord);
    var sandBox = createAbecedaryArray();

    for (k = 0; k < userWord.length; k++) {
        var letterFromWord = userWord.substring(k, k + 1);

        for (j = 0; j < sandBox.length; j++) {
            if (sandBox[j].letter === letterFromWord) {
                sandBox[j].frequency = sandBox[j].frequency + 1;

            }
        }
    }
    sandBox[3].frequency = 34;
    printAnswer(sandBox,ID);


}

function printAnswer(arrayTOPrint,ElementTOmodify) {

    for (i = 0; i < arrayTOPrint.length; i++) {
        if (arrayTOPrint[i].frequency !== 0) {
            document.write(arrayTOPrint[i].letter + " repeat " + arrayTOPrint[i].frequency + " times </br>");
            document.getElementById(arrayTOPrint[i].letter + " repeat " + arrayTOPrint[i].frequency + " times </br>");
        }
    }
}
