
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const handleSetSquare = (rowIndex, colIndex) => {
    //     setGameBoard(function (prevGameBoard) {
    //         // console.log(prevGameBoard[rowIndex][colIndex]);
    //         prevGameBoard[rowIndex][colIndex] = activePlayer
    //         const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         return updateGameBoard;
    //     });
    //     onSelectSquare();
    // };
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

