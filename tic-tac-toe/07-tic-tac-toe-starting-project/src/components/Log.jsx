export default function Log({turns}) {
    return (
        <ol id='log'>
            <h3>GAME LOGS</h3>
            {
                turns.map((turn)=>(
                    <li key={`${turn.square.row}${turn.square.col}`}>
                        {turn.player} selected index of {turn.square.row},{turn.square.col}
                    </li>
                ))
            }
        </ol>
    )
}