import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  contet[(gameBoard, setgameBoard)] = useState(initialGameBoard); //to manage and update the game board state

  function handleSelectSquare(rowIndex, cellIndex) {
    setgameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])]; // Create a copy of the game board
      updatedGameBoard[rowIndex][cellIndex] = "X";
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, cell)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
//inside the button we need x o or null
