import { useRef, useState } from "react"
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining,setTimeremaining] = useState(targetTime * 1000);
    const timerIsActive = targetTime > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining <= 0 ){
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handelReset(){
        setTimeremaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(()=>{
            setTimeremaining(prevTimeRemaining => prevTimeRemaining - 10);
        },10);
    }

    function handleStop() {
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModel ref ={dialog} targetTime={targetTime} remainingTime = {timeRemaining} onReset = {handelReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} Second{targetTime > 1 ? 's' : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'STOP' : 'START'}</button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? 'Timer is Running...' : 'Time inactive'}
                </p>
            </section>
        </>
    )
}