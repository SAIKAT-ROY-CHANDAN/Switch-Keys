// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
    userInfo: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        address: string;
    } | null;
};

const initialState: AuthState = {
    userInfo: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<AuthState['userInfo']>) => {
            state.userInfo = action.payload;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
        },
    }
});

export const { setUserInfo, clearUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
