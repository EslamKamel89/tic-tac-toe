export default function GameOver({ winner, isDraw, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{isDraw ? 'Draw!!!' : `${winner} won`}</p>
            <p><button onClick={onRestart}>Rematch!</button></p>
        </div>
    );
}