// detecting button press// detecting button press
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<NumberOfDrumButtons ;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ButtonInnerHTML = this.innerHTML;
        makesound(ButtonInnerHTML);
        buttonAnimation(ButtonInnerHTML);

        
    });
} 
