export default function MatchResult({ result , rematch}){
    return (<div id='game-over'>
         <h2>GAME OVER!!!</h2>
        {result && <p>{result} WON THE MATCH!!!</p>}
        {!result && <p>ITS A DRAW!!!</p>}
        <button onClick={rematch}>Rematch</button>
        </div>);
}