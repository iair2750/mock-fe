import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseQueryWithReauth } from 'api/reauth';

import { getEnvValue, getStorageValue } from 'assets';

const baseQuery = fetchBaseQuery({
	baseUrl: getEnvValue('API_BASE_URL'),
	prepareHeaders: headers => {
		headers.set('accept', 'application/json');
		headers.set('Content-Type', 'application/json');
		headers.set('Authorization', `Bearer ${getStorageValue('access-token') ?? ''}`);
		return headers;
	},
});

export const apiSlice = createApi({
	reducerPath: 'directoryApi',
	baseQuery: getBaseQueryWithReauth(baseQuery),
	tagTypes: ['User'],
	endpoints: builder => ({
		logout: builder.mutation<null, void>({
			queryFn: () => ({ data: null }),
			invalidatesTags: ['User'],
		}),
	}),
});
