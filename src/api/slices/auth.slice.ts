import { ResponseAccountLogin, ResponseUser } from 'api';
import { apiSlice } from './api.slice';

export interface ApiAccountLoginParams {
	username: string;
	password: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<ResponseAccountLogin, ApiAccountLoginParams>({
			query: credentials => ({
				url: '/account/login',
				method: 'POST',
				body: credentials,
			}),
			onQueryStarted(arg, { dispatch, queryFulfilled }) {
				queryFulfilled.then(res =>
					dispatch(authApiSlice.util.upsertQueryData('getUserMe', undefined, res.data.user))
				);
			},
		}),
		getUserMe: builder.query<ResponseUser, void>({
			query: () => '/users/me',
			providesTags: user => (user ? [{ type: 'User', id: user.id }] : ['User']),
		}),
	}),
});

export const { useLoginMutation, useGetUserMeQuery, useLazyGetUserMeQuery } = authApiSlice;
