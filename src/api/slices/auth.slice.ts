import { ResponseAccountLogin } from 'api/api.types';
import { apiSlice } from './api.slice';

export interface ApiAccountLoginParams {
	username: string;
	password: string;
}

export const authApiAtlasSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<ResponseAccountLogin, ApiAccountLoginParams>({
			query: credentials => ({
				url: '/account/login',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
});

export const { useLoginMutation } = authApiAtlasSlice;
