const redux = require('redux');

function counterReducer(state = {counter:0},action){            //reducer function
    if(action.type === 'increment'){
        return{
            counter : state.counter + 1,
        };
    }
    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1,
        };
    }

    return state;
}

const store = redux.createStore(counterReducer);                //Creating store

function counterSubscriber(){                                   //This is a listener function that gets called every time the state is updated.
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);                             //Registers the subscriber function with the store,Now, every time the store's state changes, counterSubscriber is called automatically.

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});