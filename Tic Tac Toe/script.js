let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player-X ,player-O

let moveCount = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerHTML = "X";
      box.style.color = "#000";
      turnO = false;
    } else {
      box.innerHTML = "O";
      box.style.color = "#fff";
      turnO = true;
    }
    box.disabled = true;
    moveCount++;

    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");

  moveCount = 0;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (winner) => {
  if (winner === "X") {
    msg.innerHTML = `CONGRATULATIONS,<br> WINNER IS ' ${winner} '  `;
    msg.style.color = "#000";
    msgContainer.classList.remove("hide");
    disableBoxes();
  } else {
    msg.innerHTML = `CONGRATULATIONS ,<br> WINNER IS ' ${winner} ' `;
    msg.style.color = "#fff";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val);

        return;
      }
    }
  }

  if (moveCount === 9) {
    msg.innerHTML = `IT'S A <br> DRAW !`;
    msg.style.color = "#545454";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);