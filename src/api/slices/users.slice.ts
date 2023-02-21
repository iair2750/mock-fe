import { RequestCreateUser, ResponseUser } from 'api';
import { apiSlice } from './api.slice';

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		createUser: builder.mutation<ResponseUser, RequestCreateUser>({
			query: user => ({
				url: '/users',
				method: 'POST',
				body: user,
			}),
		}),
	}),
});

export const { useCreateUserMutation } = userApiSlice;
