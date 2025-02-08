const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupReset = document.getElementById("popup-reset");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      showPopup(`🎉 Player ${currentPlayer} Wins! 🎉`);
      gameActive = false;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    showPopup("😲 It's a Draw! 😲");
    gameActive = false;
  }
}

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (gameBoard[index] || !gameActive) return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (gameActive) {
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "Player X's turn";
  cells.forEach((cell) => (cell.textContent = ""));
  popup.style.display = "none";
}

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "flex";
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
popupReset.addEventListener("click", resetGame);



/* 

Create a Tic-Tac-Toe game using only HTML, CSS, and JavaScript. The game should have a 3x3 grid where two players (X and O) take turns marking a square. Implement logic to check for a winner or a draw and display the result. Add a reset button to restart the game. Use CSS for styling and animations to enhance the user experience. Ensure the game is responsive and works on both desktop and mobile devices


*/