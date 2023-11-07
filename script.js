let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');

const cellClicked = (cellIndex) => {
  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
  if (checkWin()) {
    document.getElementById('result').innerText = winningMessage();
    gameActive = false;
    return;
  }
  if (!gameState.includes('')) {
    document.getElementById('result').innerText = drawMessage();
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('result').innerText = currentPlayerTurn();
};

const checkWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winConditions.some(condition => {
    return condition.every(index => {
      return gameState[index] === currentPlayer;
    });
  });
};

const resetGame = () => {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('result').innerText = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
};
