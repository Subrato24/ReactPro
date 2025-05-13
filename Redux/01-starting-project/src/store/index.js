import { createStore } from 'redux';

const initialState = {counter:0, showCounter:true};
function counterReducer(state = initialState, action){
    if(action.type === 'increment'){
        return{
            counter:state.counter + 1,
            showCounter: state.showCounter,
        };
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter - 1,
            showCounter: state.showCounter,
        };
    }
    if(action.type === 'incrementVal'){
        return{
            counter:state.counter + action.value,
            showCounter: state.showCounter,
        };
    }
    if(action.type === 'toggel'){
        return{
            showCounter: !state.showCounter,
            counter:state.counter,
        };
    }
    if(action.type === 'reset'){
        return{
            counter:state.counter * 0,
            showCounter: state.showCounter,
        };
    }

    return state;
}

const store = createStore(counterReducer);

export default store;