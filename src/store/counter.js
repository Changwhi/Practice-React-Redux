import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, isExpended: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
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

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
