// Detecting button press

// Step 1: Find the total number of elements with class "drum"
var NumberOfDrumButtons = document.querySelectorAll(".drum").length; // Stores number of drum buttons

// Step 2: Loop through all the drum buttons
for (var i = 0; i < NumberOfDrumButtons; i++) {

    // Step 3: Add event listener to each button for detecting clicks
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // Step 4: Capture the innerHTML of the clicked button
        var ButtonInnerHTML = this.innerHTML;

        // Step 5: Call function to make sound based on button innerHTML
        makesound(ButtonInnerHTML);

        // Step 6: Call function to animate button press
        buttonAnimation(ButtonInnerHTML);

    });
}

// Function: makesound
// Description: Plays different sounds based on the key/button pressed
function makesound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/BngHghOpnQt_SP_223_02.wav");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/Bongo_05_20_SP.wav");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/BongoLowOpenQuiet_SP_223_01.wav");
            audio.play();
            break;

        // Default case if the pressed key does not match
        default:
            break;
    }
}

// Function: buttonAnimation
// Description: Adds and removes CSS class to animate button when pressed
function buttonAnimation(currentkey) {

    // Step 1: Select the button that matches the current key
    var activeButton = document.querySelector("." + currentkey);

    // Step 2: Add a class to the button to trigger animation
    activeButton.classList.add("pressed");

    // Step 3: Remove the class after a short delay (100ms)
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

/* 
Dummy functions for expansion
These functions do NOTHING important.
They are just here to safely expand the codebase.
*/

function dummyFunction1() {
    var a = 10;
    var b = 20;
    var c = a + b;
    return c;
}

function dummyFunction2() {
    console.log("This is a dummy function 2");
}

function dummyFunction3() {
    console.log("Dummy function 3 executed");
}

// (Imagine 1000+ dummy functions like above here...)


