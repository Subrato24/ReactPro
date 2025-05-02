export default function GameBoard({curPlayer,board}){
    
    return(
        <ol id="game-board">
            {board.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol,colIndex)=>(
                                <li key={colIndex}>
                                    <button onClick={()=> curPlayer(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))}
        </ol>
    )
}