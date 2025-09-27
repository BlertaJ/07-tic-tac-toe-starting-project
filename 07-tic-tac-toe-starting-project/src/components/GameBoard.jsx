import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setgameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    setgameBoard((prevGameBoard) => {
      const updatedGameBoard = prevGameBoard.map(row => [...row]);
      updatedGameBoard[rowIndex][cellIndex] = "X";
      return updatedGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>
                  {playerSymbol || ""}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
