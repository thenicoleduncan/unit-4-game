
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

// my attempt at a "restart the game" function ... not functional so I know it needs work. 

$("#clear").on("click", function() {

    $("#new-score").empty();

    });
