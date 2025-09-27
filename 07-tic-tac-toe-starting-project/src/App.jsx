import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function derivedActivePlayer(turns) {
  let activePlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = derivedActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, cellIndex) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = derivedActivePlayer(prevGameTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: cellIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
