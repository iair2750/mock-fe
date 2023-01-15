import { createListenerMiddleware } from '@reduxjs/toolkit';

import { apiSlice } from 'api';
import { authLogout } from 'app-redux';
import { logout } from 'app-redux/actions';

export const logoutListener = createListenerMiddleware();
logoutListener.startListening({
	actionCreator: logout,
	effect: async (action, api) => {
		api.dispatch(authLogout());
		api.dispatch(apiSlice.endpoints.logout.initiate());
	},
});
