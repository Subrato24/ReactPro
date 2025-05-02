import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title= "NOOB" targetTime={1}/>
        <TimerChallenge title= "EASY" targetTime={2}/>
        <TimerChallenge title= "MEDIUM" targetTime={3}/>
        <TimerChallenge title= "PRO" targetTime={4}/>
      </div>
    </>
  );
}

export default App;
