import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    counters: number
};

const initialState: CounterState = {
    counters: 0,
};


const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { maxQuantity } = action.payload

            if (!state.counters) {
                state.counters = 1;
            } else if (state.counters < maxQuantity) {
                state.counters += 1;
            }
        },
        decrement: (state) => {
            if (state.counters > 0) {
                state.counters -= 1;
            }
        }
    }
})


export const { increment, decrement } = quantitySlice.actions
export const quantityReducer = quantitySlice.reducer