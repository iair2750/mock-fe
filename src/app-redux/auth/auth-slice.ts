import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DecodedToken, ResponseAccountLogin } from 'api';

import { clearStorage, getStorageValue, setStorageValue, User } from 'assets';
import { decodeJwt } from 'jose';

const getUserFromToken = (token?: string): User | undefined => {
	if (!token) return undefined;
	const decoded = decodeJwt(token) as DecodedToken;
	return {
		id: decoded.userId,
	};
};

export interface AuthState {
	accessToken?: string;
	user?: User;
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
