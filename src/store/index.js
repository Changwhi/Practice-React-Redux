import { createStore } from 'redux';

const initialState = { counter: 0, isExpended: true}

const countReducer = (state = initialState, action) => {
   if (action.type === 'increment') {
        return {
        counter: state.counter + 1
    };
    }
    if (action.type === 'decrement') {
        return {
        counter: state.counter - 1,
        isExpended: state.isExpended
        };
    }
    if (action.type === 'increase') {
        return {
        counter: state.counter + action.value,
        isExpended: state.isExpended
        };
    };

    if (action.type === 'toggle') {
        return {
        counter: state.counter,
        isExpended: !state.isExpended
        };
    }


    return state;
};

const store = createStore(countReducer);

export default store;

