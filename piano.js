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
    "C": "key13.mp3",
    "D": "key14.mp3",
    "E": "key15.mp3",
    "G": "key16.mp3",
    "A": "key18.mp3",
    "R": "key19.mp3",
    "F": "key22.mp3",
    "T": "key20.mp3",
    "P": "key23.mp3"
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
