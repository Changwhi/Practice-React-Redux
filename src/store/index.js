import { createStore } from 'redux';

const countReducer = (state = { counter: 0 }, action) => {
   if (state.type === 'increment') {
        return {
        counter: state.counter + 1
    };
    }

    if (state.type === 'decrement') {
        return {
        counter: state.counter - 1
        };
    }
    return state;
};

const store = createStore(countReducer);

export default store;

