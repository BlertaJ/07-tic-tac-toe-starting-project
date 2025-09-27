const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare}) {
  // const [gameBoard, setgameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, cellIndex) {
  //   setgameBoard((prevGameBoard) => {
  //     const updatedGameBoard = prevGameBoard.map(row => [...row]);
  //     updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={onSelectSquare}>
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
