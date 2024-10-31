import { useState } from 'react';

import GameBoard from "./Components/GameBoard";
import Log from './Components/Log';
import Player from "./Components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer == 'X' ? 'O' : 'X');
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

  return (
    <main>
      <div id="game-container">
        <ol id="players" class="highlight-player">
          <Player className={activePlayer == 'X' ? 'active' : ''} initialName="Player 1" symbol="X" />
          <Player className={activePlayer == 'O' ? 'active' : ''} initialName="Player 2" symbol="O" />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}


export default App
