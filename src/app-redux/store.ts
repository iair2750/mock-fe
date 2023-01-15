import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from 'api';
import { authLogout } from 'app-redux';
import { authReducer } from './auth';
import { logout } from './actions';

export const logoutListener = createListenerMiddleware();
logoutListener.startListening({
	actionCreator: logout,
	effect: async (action, api) => {
		api.dispatch(authLogout());
		api.dispatch(apiSlice.endpoints.logout.initiate());
	},
});

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware).concat(logoutListener.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
