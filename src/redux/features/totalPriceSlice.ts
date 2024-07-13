import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalPrice: 0
}

const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState,
    reducers: {
        addItem: () => { },
        updateItemQuantity: () => { }
    }
})

export const { addItem, updateItemQuantity } = totalPriceSlice.actions;
export const totalPriceReducer = totalPriceSlice.reducer;