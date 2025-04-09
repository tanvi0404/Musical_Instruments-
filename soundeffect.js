// detecting button press
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<NumberOfDrumButtons ;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML;
        makesound(ButtonInnerHTML);
        buttonAnimation(ButtonInnerHTML);

        
    });
}

// detecting keyboard sound

document.addEventListener("keypress", function(event){ 

    makesound(event.key);
    
    buttonAnimation(event.key);
});


function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/sexyvoice.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/pussy.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/chin_tapak_dum_dum.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/okbabu.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/jpdo.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
           
        default:
            break;
    }
}
function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function()  {
        activeButton.classList.remove("pressed");
    } ,100);
}