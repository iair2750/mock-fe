import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { logout } from 'app-redux/actions';
import { BaseQueryType } from './rtk.types';

export const getBaseQueryWithReauth =
	(baseQuery: BaseQueryType): BaseQueryType =>
	async (
		args,
		api,
		extraOptions
	): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
		const result = await baseQuery(args, api, extraOptions);

		if (result?.error?.status === 401) {
			api.dispatch(logout());
		}

		return result;
	};
