import { DecodedToken, ResponseUser } from 'api';
import { decodeJwt } from 'jose';

export const getUserFromToken = (token?: string): Partial<ResponseUser> | undefined => {
	if (!token) return undefined;
	const decoded = decodeJwt(token) as DecodedToken;
	return {
		id: decoded.userId,
		email: decoded.userEmail,
		username: decoded.userUsername,
		firstName: decoded.userFirstName,
		lastName: decoded.userLastName,
		createdDateTime: decoded.userCreatedDateTime
			? new Date(decoded.userCreatedDateTime)
			: undefined,
	};
};
