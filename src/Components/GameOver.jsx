export default function GameOver({ winner, isDraw }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{isDraw ? 'Draw!!!' : `${winner} won`}</p>
            <p><button>Rematch!</button></p>
        </div>
    );
}