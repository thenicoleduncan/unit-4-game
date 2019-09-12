
var targetNumber = 53;
var youWin = ("You win!! 💎");
var youLose = ("You lose!! 👎");

$("#number-to-guess").text(targetNumber);


var counter = 0;

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "./assets/images/pink-gem.JPG");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
    var audio = $("#mySoundClip")[0];
    audio.play();

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    // alert("New score: " + counter);
    $("#new-score").text(counter);

    if (counter === targetNumber) {
        $("#you-win").text(youWin);
        // document.getElementById("you-win").style.border = " 17px dotted rgba(248,255,102,0.97)";
    }

    else if (counter >= targetNumber) {
        $("#you-lose").text(youLose);
    }

  });

