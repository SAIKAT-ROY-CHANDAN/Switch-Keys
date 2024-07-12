import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    value: number;
}

const initialState: CounterState = {
    value: 1,
};

const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state, action) => {
            const maxQuantity = action.payload;
            if(state.value < maxQuantity){
                state.value += 1
            }
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        }
    }
})


export const { increment, decrement } = quantitySlice.actions
export const quantityReducer = quantitySlice.reducer