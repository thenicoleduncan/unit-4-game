
var targetNumber = 53;
var youWin = ("You win!! 💎");
var youLose = ("You lose!! 👎");

$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [12, 3, 5, 8];


for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "./assets/images/pink-gem.JPG");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {
    var audio = $("#mySoundClip")[0];
    audio.play();

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#new-score").text(counter);

    if (counter === targetNumber) {
        $("#you-win").text(youWin);

    }

    else if (counter >= targetNumber) {
        $("#you-lose").text(youLose);
    }

});

// my attempt at a "restart the game" function ...

$("#new-game").on("click", function () {

    $("#new-score").text(0);
    (counter = 0);
    // $("#you-win").text(youWin);
    // $("#you-lose").text(youLose);

});

// working on adding it to my portfolio..............

// After completing the homework please add the piece to your portfolio.
// Make sure to add a link to your updated portfolio in the comments section of your homework so the 
// TAs can easily ensure you completed this step when they are grading the assignment.To receive an 'A' 
// on any assignment, you must link to it from your portfolio.
