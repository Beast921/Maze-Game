const nextBtn = document.querySelector(".next-btn");

const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");

var level = 1;
const uiLevel = document.querySelector(".ui-level");

const spookyPic = document.querySelector(".spooky-pic");
const screamSound = document.querySelector(".scream-sound");

const collisionCheck = (value) => {
  if (value === "maze-border") alert("You lost... try again.");
  if (value === "finish") {
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    screamSound.play();
    spookyPic.style.display = "block";
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextBtn.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  nextBtn.style.opacity = 0;
  nextBtn.style.pointerEvents = "none";
  uiLevel.textContent = "Level " + ++level;
});
