import Player from './components/PlayerInfo.jsx';
import GameBoard from './components/Gameboard.jsx';
import Log from './components/Log.jsx';
import MatchResult from './components/MatchResult.jsx';
import { WINNING_COMBINATIONS } from './winning-combination.js'
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function getActivePlayer(turns) {
  let currentPlayer = 'X';

  if(turns.length > 0 && turns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = getActivePlayer(gameTurn);

  let gameBoard = initialGameBoard.map(row => [...row]);

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column]
    const second = gameBoard[combination[1].row][combination[1].column]
    const third = gameBoard[combination[2].row][combination[2].column]

    if (first && first === second && first === third) {
      winner = first;
    }
  }

  let hasDraw = ((gameTurn.length === 9) && !winner);

  function handlePlayerBox(rowIndex, colIndex) {
    setGameTurn(prevTurns => {
      const activePlayer = getActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  function reMatch(){
    setGameTurn([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <MatchResult result={winner}  rematch = {reMatch}/>}
        <GameBoard curPlayer={handlePlayerBox} board={gameBoard} />
      </div>
      <div>
        <Log turns={gameTurn} />
      </div>
    </main>
  )
}

export default App
