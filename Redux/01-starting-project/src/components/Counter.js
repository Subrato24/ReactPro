import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

const dispatch = useDispatch();
const counter = useSelector(state => state.counter);
const show = useSelector(state => state.showCounter);

function increment(){
  dispatch({type:'increment'});
}

function decrement(){
  dispatch({type:'decrement'});
}

function incrementByVal(){
  dispatch({type:'incrementVal',value:5});
}

function reSet(){
  dispatch({type:'reset'});
}

  const toggleCounterHandler = () => {
    dispatch({type:'toggel'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByVal}>Increment By 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={reSet}>Reset</button>
    </main>
  );
};

export default Counter;
