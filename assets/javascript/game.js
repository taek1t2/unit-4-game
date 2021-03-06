//GAME LOGIC, usually JavaScript files//

var randomNum = function(min, max) {
    return Math.floor(Math.random() * max - min) + min;

};

var userWins = 0;
var userLosses = 0;
var userScore = 0;
var targetScore = randomNum(50, 120);


// initiate to startGame
function startGame () {
    userScore = 0;
    targetScore = randomNum(50, 120);

    $(".targetScore").text(targetScore);
    console.log("targetScore" + targetScore);

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour = Math.floor(Math.random() * 12) + 1;

    $("#crystalOne").attr("crystal-value", crystalOne);
    $("#crystalTwo").attr("crystal-value", crystalTwo);
    $("#crystalThree").attr("crystal-value", crystalThree);
    $("#crystalFour").attr("crystal-value", crystalFour);

}

$(document).ready(function() {
    startGame ();

    $(".crystalButton").on("click", function() {
        var crystalNum = $($(this)).attr("crystal-value");
        console.log("crystalNum" + crystalNum);
        
        userScore += parseInt(crystalNum);
        console.log("user" + userScore);
        $(".scoreBoard").html("<h4>" + userScore + "</h4>")
        if (userScore === targetScore) {
            userWins++;
            $("#theWins").html("<h4>" + userWins + "</h4>");
            userScore = 0;
            startGame();
            console.log("wins" + userScore);
            
        } else if (userScore >= targetScore) {
            userLosses++;
            $("#theLosses").html("<h4>" + userLosses + "</h4>");
            userScore = 0;
            startGame();
            console.log("lose" + userScore);
            }
        })
})

