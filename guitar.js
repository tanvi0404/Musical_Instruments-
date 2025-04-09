const keys = ['a', 's', 'd', 'f'];

keys.forEach(key => {
  document.querySelector(`.${key}`).addEventListener("click", () => {
    playSound(key);
    animateButton(key);
  });
});

document.addEventListener("keypress", (e) => {
  if (keys.includes(e.key)) {
    playSound(e.key);
    animateButton(e.key);
  }
});

function playSound(key) {
  const soundMap = {
    a: "sounds/guitar-1.mp3",
    s: "sounds/guitar-2.mp3",
    d: "sounds/guitar-3.mp3",
    f: "sounds/guitar-4.mp3"
  };
  const audio = new Audio(soundMap[key]);
  audio.play();
}

function animateButton(key) {
  const button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(() => button.classList.remove("pressed"), 100);
}