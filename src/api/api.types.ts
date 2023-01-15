import { JWTPayload } from 'jose';

export interface ErrorResponse {
	status?: number;
	errors?: {
		[key: string]: string;
	};
}

export interface ResponseUser {
	id: string;
	createdDateTime?: Date;
	firstName?: string;
	lastName?: string;
	email: string;
	username?: string;
}

export interface RequestCreateUser {
	username?: string;
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
}

export interface DecodedToken extends JWTPayload {
	userId: string;
	userEmail: string;
	userCreatedDateTime?: string;
	userFirstName?: string;
	userLastName?: string;
	userUsername?: string;
}

export interface ResponseAccountLogin {
	user: ResponseUser;
	token: string;
}
