import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, isExpended: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.isExpended = !state.isExpended
        }
    }
});
//const countReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//        return {
//        counter: state.counter + 1
//    };
//    }
//    if (action.type === 'decrement') {
//        return {
//        counter: state.counter - 1,
//        isExpended: state.isExpended
//        };
//    }
//    if (action.type === 'increase') {
//        return {
//        counter: state.counter + action.value,
//        isExpended: state.isExpended
//        };
//    };
//
//    if (action.type === 'toggle') {
//        return {
//        counter: state.counter,
//        isExpended: !state.isExpended
//        };
//    }
//
//
//    return state;
//};

//const store = createStore(countReducer);

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

