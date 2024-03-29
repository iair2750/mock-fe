import { RequestCreateUser, ResponseUser } from 'api/api.types';
import { apiSlice } from './api.slice';

export const authApiAtlasSlice = apiSlice.injectEndpoints({
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

export const { useCreateUserMutation } = authApiAtlasSlice;
