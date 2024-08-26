import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXPlayerNext, setIsXPlayerNext] = useState(true);

  const winningCombinations = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  function findWinner(board) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function respondToPlayerMove(index) {
    if (findWinner(board)) {
      return;
    }

    board[index] = isXPlayerNext ? 'X' : 'O';

    setBoard(board);
    setIsXPlayerNext(!isXPlayerNext);
  }

  function drawTicToeSquare(index) {
    return (
      <Square
        value={board[index]}
        onClick={() => respondToPlayerMove(index)}
      />
    );
  }

  const winner = findWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXPlayerNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 text-xl font-semibold">{status}</div>
      <div className="flex">
        {drawTicToeSquare(0)}
        {drawTicToeSquare(1)}
        {drawTicToeSquare(2)}
      </div>
      <div className="flex">
        {drawTicToeSquare(3)}
        {drawTicToeSquare(4)}
        {drawTicToeSquare(5)}
      </div>
      <div className="flex">
        {drawTicToeSquare(6)}
        {drawTicToeSquare(7)}
        {drawTicToeSquare(8)}
      </div>
    </div>
  );
}

export default Board;