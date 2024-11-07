import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { quantityReducer } from './features/quantityCounterSlice'
import { totalPriceReducer } from './features/totalPriceSlice'
import { authReducer } from './features/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const totalPricePersistConfig = {
    key: 'totalPrice',
    storage,
};

const authPersistConfig = {
    key: 'auth',
    storage,
};

const persistTotalPriceReducer = persistReducer(totalPricePersistConfig, totalPriceReducer)
const persistAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        quantity: quantityReducer,
        totalPrice: persistTotalPriceReducer,
        auth: persistAuthReducer
        // totalPrice : totalPriceReducer,
    },

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(baseApi.middleware)
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch