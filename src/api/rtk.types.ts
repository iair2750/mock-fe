import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';

export type BaseQueryType = BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	Record<string, unknown>,
	FetchBaseQueryMeta
>;
