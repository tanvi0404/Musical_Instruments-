const container = document.getElementById("container");

function showFireworks() {
  const light = document.createElement("div");
  light.className = "light";
  light.style.left = `${Math.random() * window.innerWidth}px`;
  light.style.top = `${Math.random() * window.innerHeight}px`;
  container.appendChild(light);
  setTimeout(() => light.remove(), 500);

  for (let i = 0; i < 10; i++) {
    const spark = document.createElement("div");
    spark.className = "firework";
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    container.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
}

function makeSound(key) {
  let soundFile = "";
  switch (key) {
    case "a": soundFile = "tin.mp3"; break;
    case "s": soundFile = "tu.mp3"; break;
  }

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
    showFireworks();
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;

  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}

// Button Clicks
const drumButtons = document.querySelectorAll(".drum");
drumButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const key = this.innerHTML.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });
});

// Key Press
document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});
