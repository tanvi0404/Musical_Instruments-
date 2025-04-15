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
            var audio = new Audio("sounds/tablanotes.wav");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tabla2notes.wav");
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