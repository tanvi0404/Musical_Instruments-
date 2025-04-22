// detecting button press// detecting button press
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<NumberOfDrumButtons ;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML;
        makesound(ButtonInnerHTML);
        buttonAnimation(ButtonInnerHTML);

        
    });
} 
function makesound(key){

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
        default:
            break;
    }
}
