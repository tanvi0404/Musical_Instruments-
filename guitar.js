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
            var audio = new Audio("sounds/key17.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/key14.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/key21.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/key22.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/key17.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/key18.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/key19.mp3");
            audio.play();
            break;
        case "m":
            var audio = new Audio("sounds/key01.mp3");
            audio.play();
            break;  
        case "n":
            var audio = new Audio("sounds/key04.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("sounds/key07.mp3");
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









