
export default function GameBoard({ onSelectSquare, gameBoard }) {

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => <li key={'row' + rowIndex}>
                <ol>
                    {
                        row.map(
                            (playerSymbol, colIndex) =>
                                <li key={'element' + colIndex} >
                                    <button
                                        disabled={playerSymbol == 'X' || playerSymbol == 'O'}
                                        onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                        )
                    }
                </ol>
            </li>)}
        </ol>
    );
}

