var numSquares = 6;
var colors = randomColor(numSquares);

let sq = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("active");
    modeButtons[1].classList.remove("active");
    this.classList.add("active");
    if (this.textContent === "Easy") {
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    reset();
  });
}

function reset() {
  colors = randomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  resetButton.textContent = "New Colors";
  for (let i = 0; i < sq.length; i++) {
    if (colors[i]) {
      sq[i].style.display = "block";
      sq[i].style.backgroundColor = colors[i];
    } else {
      sq[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", () => {
 reset();
});

for (let i = 0; i < sq.length; i++) {
  sq[i].style.backgroundColor = colors[i];

  sq[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "correct";
      resetButton.textContent = "Play Again?";
      changeColors(sq);
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  });
}

hard.addEventListener("click", () => {
  randomColor(3);
});

colorDisplay.textContent = pickedColor;

function changeColors(sq) {
  for (let i = 0; i < sq.length; i++) {
    sq[i].style.backgroundColor = pickedColor;
  }
}

function pickColor() {
  let x = Math.floor(Math.random() * colors.length);
  return colors[x];
}

function randomColor(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(rcg());
  }
  return colors;
}

function rcg() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}
