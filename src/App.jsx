import { useState } from 'react';

import GameBoard from "./Components/GameBoard";
import GameOver from './Components/GameOver.jsx';
import Log from './Components/Log';
import Player from "./Components/Player";
import pr from "./Helpers/pr.jsx";
import { WINNING_COMPINATIONS } from "./WINNING_COMBINATIONS.js";
function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  let winner = null;
  let isDraw = false;
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer == 'X' ? 'O' : 'X');
    if (winner !== null) {
      return;
    }
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });

  }
  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMPINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol == null || secondSquareSymbol == null || thirdSquareSymbol == null) {
      continue;
    } else
      if (firstSquareSymbol == secondSquareSymbol && secondSquareSymbol == thirdSquareSymbol) {
        winner = firstSquareSymbol;
        pr(`${firstSquareSymbol} is a winner`);
        break;
      }
    if (gameTurns.length == 9 && gameTurns[8].player != null) { isDraw = true };
  }
  function handleRestart() {
    initialGameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    winner = null;
    setGameTurns(prevTurns => []);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" class="highlight-player">
          <Player className={deriveActivePlayer(gameTurns) == 'X' ? 'active' : ''} initialName="Player 1" symbol="X" />
          <Player className={deriveActivePlayer(gameTurns) == 'O' ? 'active' : ''} initialName="Player 2" symbol="O" />
        </ol>
        {(winner || isDraw) && <GameOver isDraw={isDraw} winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}



let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default App
