import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { quantityReducer } from './features/quantityCounterSlice'
import { totalPriceReducer } from './features/totalPriceSlice'
// import { priceRangeReducer } from './features/priceRangeSlice'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        quantity: quantityReducer,
        // priceRange: priceRangeReducer
        totalPrice: totalPriceReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch