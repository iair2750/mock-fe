import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAccountLogin, ResponseUser } from 'api';

import { clearStorage, getStorageValue, setStorageValue, getUserFromToken } from 'assets';

export interface AuthState {
	accessToken?: string;
	user?: Partial<ResponseUser>;
}

const initialState: AuthState = {
	accessToken: getStorageValue('access-token'),
	user: getUserFromToken(getStorageValue('access-token')),
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<ResponseAccountLogin>) => {
			setStorageValue('access-token', action.payload.token);
			state.accessToken = action.payload.token;
			state.user = getUserFromToken(action.payload.token);
		},
		logout: () => {
			clearStorage();
			return {};
		},
	},
});

export const { login, logout: authLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
