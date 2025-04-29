// Attach click listeners to buttons
var buttons = document.querySelectorAll(".drum");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var note = this.innerText;
    makeSound(note);
    buttonAnimation(note);
    createFirework(event.clientX, event.clientY);
  });
});

// Keyboard press
document.addEventListener("keydown", function (event) {
  var key = event.key.toUpperCase();
  makeSound(key);
  buttonAnimation(key);

  // Firework at random position
  createFirework(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
});

function makeSound(key) {
  var soundMap = {
    "C": "./sounds/c.mp3",
    "D": "./sounds/d.mp3",
    "E": "./sounds/e.mp3",
    "G": "./sounds/g.mp3",
    "A": "./sounds/a.mp3",
    "R": "./sounds/r.mp3",
    "F": "./sounds/f.mp3",
    "T": "./sounds/t.mp3",
    "P": "./sounds/p.mp3"
  };

  if (soundMap[key]) {
    var audio = new Audio(soundMap[key]);
    audio.play();
  }
}

function buttonAnimation(key) {
  var active = document.querySelector("." + key.toLowerCase());
  if (active) {
    active.classList.add("pressed");
    setTimeout(function () {
      active.classList.remove("pressed");
    }, 100);
  }
}

function createFirework(x, y) {
  var firework = document.createElement("div");
  firework.classList.add("firework");

  // Random color
  firework.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

  // Positioning
  firework.style.left = x + "px";
  firework.style.top = y + "px";

  document.body.appendChild(firework);

  setTimeout(function () {
    firework.remove();
  }, 1000);
}
