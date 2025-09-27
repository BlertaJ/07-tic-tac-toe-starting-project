export default function GameOver({ winner }) {
  return (
    <div id="game-over">
        <h2>Game over!</h2>
        {winner && <p>Congratulations!</p>}
        {!winner && <p>It's a tie!</p>}
      {/* {winner ? <p>You won, {winner}!</p> : <p><button>Try again</button>It's a tie!</p>} */}
    </div>
  );
}