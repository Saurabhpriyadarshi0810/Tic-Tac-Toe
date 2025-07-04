let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; // turn of player O and player X

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnX = true;
  enablebtn();
  msgContainer.classList.add("hide");
};

let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
      count++;
    } else {
      box.innerText = "O";
      turnX = true;
      count++;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disabledbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbtn();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos1val === pos3val) {
        console.log("winner is ", pos1val);
        showWinner(pos1val);
      } 
        }
      }
      if (count === 9 ) {
        console.log("its a draw");
        msg.innerText ="It's a draw!"
        msgContainer.classList.remove("hide");
        disabledbtn();
      }
    };
newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
