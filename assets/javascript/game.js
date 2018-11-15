
// add event listener
$(document).ready(function () {

    //declare global variable, can use wherever we want now in code
    var randomNumber = Math.floor(Math.random() * 101 + 19);

    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    function generateRandomTargetNumber() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        return randomNumber;
    };

    // Add random target number to the page
    function appendTargetNumber(num) {
        $('#randomNumber').text(num);
    };

    //pass parameter
    appendTargetNumber(generateRandomTargetNumber());

    //generateRandomHiddenValue
    function generateRandomHiddenValue() {

        //assign hiddenValue a random number //Declare a class= data-attr    
        var purple = Math.floor(Math.random() * 11 + 1)
        console.log(purple)
        $('#purple').attr('data-value', purple);

        var blue = Math.floor(Math.random() * 11 + 1)
        $('#blue').attr('data-value', blue);

        var yellow = Math.floor(Math.random() * 11 + 1)
        $("#yellow").attr('data-value', yellow);

        var red = Math.floor(Math.random() * 11 + 1)
        $('#red').attr('data-value', red);
    };


    //Declare score variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //  Decaring variables for counting
    $('#wins').text(wins);
    $('#losses').text(losses);
    $("#total-score").text(totalScore);

    //resets the game to assign new values to the crystals & a new random number
    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber)
        $('#button').text(randomNumber);
        hiddenValue = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
        $('#total-score').text(totalScore);
    }

    //adds the wins to the totalScore
    function winner() {
        $("#display").text("You win!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    //adds the losses to the totalScore
    function loser() {
        $("#display").text("You lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }

    //sets up click for crystals
    $('.button').on('click', function () {
        console.log(`regular  button handler this`, this)
        console.log(`jQuery button handler this`, $(this))
        var clickedGemValue = $(this).data("value");
        totalScore += clickedGemValue;
        $('#total-score').text(totalScore);
        console.log("Total Score= " + totalScore);

        //sets win and loss conditions
        if (randomNumber === totalScore) {
            winner();
        }
        else if (totalScore > randomNumber) {
            loser();
        };
    })



    generateRandomHiddenValue();
})