export default function ResultModel({ref, targetTime,remainingTime, onReset}){
    const userLost = remainingTime <= 0;
    const formattedTimeRemainig = (remainingTime/1000).toFixed(2)  //remainingTime is in miliseconds
    const score = Math.round((1-remainingTime / (targetTime * 1000)) * 100);

    return(
        <dialog ref={ref} className="result-modal" onClose = {onReset}>
            {userLost && <h2>YOU LOST!!!</h2>}
            {!userLost && <h2>SCORE:{score}</h2> }
            <p>
                The target time was <strong>{targetTime} second.</strong>
            </p>    
            <p>
                You stop timer with <strong>{formattedTimeRemainig} second left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}