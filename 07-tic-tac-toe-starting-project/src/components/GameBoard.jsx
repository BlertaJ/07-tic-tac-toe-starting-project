const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
  
  let gameBoard = initialGameBoard;
  
  for (let turn of turns) {
    const {square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // We are avoiding intersecting states
  // const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
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
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)}>
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
