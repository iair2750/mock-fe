import { RequestCreateSchema, ResponseSchema } from 'api';
import { apiSlice } from './api.slice';

export const schemaApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		createSchema: builder.mutation<ResponseSchema, RequestCreateSchema>({
			query: body => ({
				url: '/schemas',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Schema'],
		}),
		getUserSchema: builder.query<ResponseSchema[], string>({
			query: userId => `/schemas/user/${userId}`,
			providesTags: ['Schema'],
		}),
		getMySchemas: builder.query<ResponseSchema[], void>({
			query: () => '/schemas/user/me',
			providesTags: ['Schema'],
		}),
		getSchema: builder.query<ResponseSchema, string>({
			query: id => `/schemas/${id}`,
			providesTags: ['Schema'],
		}),
	}),
});

export const {
	useCreateSchemaMutation,
	useGetUserSchemaQuery,
	useGetMySchemasQuery,
	useGetSchemaQuery,
} = schemaApiSlice;
