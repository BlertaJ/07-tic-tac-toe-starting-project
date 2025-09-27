export default function GameOver({ winner, onRestartGame }) {
  return (
    <div id="game-over">
        <h2>Game over!</h2>
        {winner && <p>Congratulations! {winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p>
            <button onClick={onRestartGame}>Try again</button>
        </p>
      {/* {winner ? <p>You won, {winner}!</p> : <p><button>Try again</button>It's a tie!</p>} */}
    </div>
  );
}