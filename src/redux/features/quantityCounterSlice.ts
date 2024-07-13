import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    counters: {
        [cartId: string]: number;
    };
};

const initialState: CounterState = {
    counters: {},
};


const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { cartId, maxQuantity } = action.payload

            if (!state.counters[cartId]) {
                state.counters[cartId] = 1;
            } else if (state.counters[cartId] < maxQuantity) {
                state.counters[cartId] += 1;
            }
        },
        decrement: (state, action) => {

            const cartId = action.payload;
            if (state.counters[cartId] > 0) {
                state.counters[cartId] -= 1;
            }
        }
    }
})


export const { increment, decrement } = quantitySlice.actions
export const quantityReducer = quantitySlice.reducer