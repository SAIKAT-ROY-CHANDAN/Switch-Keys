import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { quantityReducer } from './features/quantityCounterSlice'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        quantity: quantityReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch