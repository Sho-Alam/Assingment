let boxes = document.querySelectorAll(".box");
let game = document.getElementById("tic_toc_game");
let resetbtn = document.querySelector(".reset");
let winner_container = document.querySelector(".winner_container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let indicator_o = document.querySelector(".indicator_o");
let indicator_x = document.querySelector(".indicator_x");
let turn0 = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let count = "";
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count ++;
    if (turn0) {
      box.innerText = "O";
      indicator_x.style.display = "block";
      indicator_o.style.display = "none";
      box.style.color = "#000";

      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.backgroundColor = "#ff0088";
      box.style.color = "#fff";
      indicator_o.style.display = "block";
      indicator_x.style.display = "none";
      turn0 = true;
    }
    box.disabled = true;
    if(count == 9){
      drawGame();
    }
    cheakWinner();
    playAudio();
  });
});

let cheakWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

let showWinner = (winner) => {
  disabledBoxes();
  msg.innerText = `Congratulation Winner is  ${winner}`;
  winner_container.classList.remove("hide");
};

const drawGame = () => {
  msg.innerText = `Game Has Been Draw`;
  winner_container.classList.remove("hide");
  // game.style.display = "none";
  // disabledBoxes();
};

let disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "#dddbeb";
  }
};

const resetGame = () => {
  indicator_x.style.display = "none";
  indicator_o.style.display = "block";
  game.style.display = "block";
  turn0 = true;
  winner_container.classList.add("hide");
  enabledBoxes();
  count = 0;
};

resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

function playAudio (){
  let audio = new Audio("mixkit-opening-software-interface-2578.wav");
  audio.play()
}