import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Counter {
    cartId: string;
    counter: number;
    quantity: number;
    price: number;
    orderCount: number;
    productId: string;
}

export interface CounterState {
    counters: Record<string, Counter>;
    totalPrice: number;
    totalQuantity: number;
}

const initialState: CounterState = {
    counters: {},
    totalPrice: 0,
    totalQuantity: 0
};

const totalPriceSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeCartItem: (state, action: PayloadAction<{ id: string; quantity: number; price: number; orderCount: number, productId: string }>) => {
            const { id, quantity, price, orderCount, productId } = action.payload;
            if (!state.counters[id]) {
                state.counters[id] = {
                    cartId: id,
                    counter: quantity - orderCount,
                    quantity,
                    price,
                    orderCount,
                    productId,
                };
                state.totalPrice += price * orderCount;
                state.totalQuantity += orderCount;
                state.counters[id].productId = productId
            }
        },


        increasePriceCounter: (state, action: PayloadAction<{ id: string; quantity: number; price: number; orderCount: number, productId: string }>) => {
            const { id, quantity, price, orderCount, productId } = action.payload;

            if (!state.counters[id]) {
                state.counters[id] = {
                    cartId: id,
                    counter: quantity - orderCount,
                    quantity,
                    price,
                    orderCount,
                    productId
                };
            }

            if (state.counters[id].orderCount < state.counters[id].quantity) {
                state.counters[id].orderCount += 1;
                state.counters[id].counter -= 1;
                state.totalPrice += price;
                state.totalQuantity += 1;
                state.counters[id].productId = productId
            } else {
                console.log('Cannot order more than available quantity');
            }
        },

        decreasePriceCounter: (state, action: PayloadAction<{ id: string; quantity: number; price: number; orderCount: number, productId: string }>) => {
            const { id, price } = action.payload;

            if (state.counters[id] && state.counters[id].orderCount > 0) {
                state.counters[id].orderCount -= 1;
                state.counters[id].counter += 1;
                state.totalPrice -= price;
                state.totalQuantity -= 1;
                // state.counters[id].productId = productId
            } else {
                console.log('Cannot decrease order count below zero');
            }
        },


        deleteCartProduct: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            if (state.counters[id]) {
                const { orderCount, price } = state.counters[id];
                state.totalPrice -= orderCount * price;
                state.totalQuantity -= orderCount;

                if (state.totalPrice < 0) state.totalPrice = 0;
                if (state.totalQuantity < 0) state.totalQuantity = 0;

                delete state.counters[id];
            }
        }
    }
});

export const { increasePriceCounter, decreasePriceCounter, deleteCartProduct, initializeCartItem } = totalPriceSlice.actions
export const totalPriceReducer = totalPriceSlice.reducer;