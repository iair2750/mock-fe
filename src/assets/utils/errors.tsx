import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorResponse } from 'api';

export const getSpecificErrorMessage = (
	error: FetchBaseQueryError | SerializedError | undefined,
	defaultErrorMessage: string,
	prop: string
): string | undefined => {
	if (!error) {
		return undefined;
	}
	if ('status' in error) {
		const errorData = error.data as ErrorResponse;
		return errorData?.errors?.[prop];
	}
	return error.message ?? defaultErrorMessage;
};
