import { Button, TextInput, PasswordInput, Form } from 'components';
import { FC } from 'react';

import { useCreateUserMutation } from 'api/slices/users.slice';
import { useNavigate } from 'react-router-dom';
import './signup-form.scss';
import { getSpecificErrorMessage } from 'assets';
import * as emailValidator from 'email-validator';

export interface SignupFormData {
	email: string;
	firstName?: string;
	lastName?: string;
	username?: string;
	password: string;
}

export const SignupForm: FC = () => {
	const navigate = useNavigate();
	const [createUser, { isError, error }] = useCreateUserMutation();

	const formSubmit = async (data: SignupFormData): Promise<void> => {
		try {
			await createUser(data).unwrap();
			navigate('/login');
		} catch (err) {}
	};

	return (
		<Form className='form-signup' onSubmit={formSubmit}>
			<TextInput
				id='email'
				label='Email'
				placeholder='Enter email...'
				validations={{
					required: true,
					validate: (email: string) => (emailValidator.validate(email) ? true : 'Invalid Email'),
				}}
				error={isError && getSpecificErrorMessage(error, 'Invalid Email', 'email')}
			/>
			<TextInput
				id='firstName'
				label='First Name'
				placeholder='Enter first name...'
				error={isError && getSpecificErrorMessage(error, 'Invalid First Name', 'firstName')}
			/>
			<TextInput
				id='lastName'
				label='Last Name'
				placeholder='Enter last name...'
				error={isError && getSpecificErrorMessage(error, 'Invalid Last Name', 'lastName')}
			/>
			<TextInput
				id='username'
				label='Username'
				placeholder='Enter username...'
				error={isError && getSpecificErrorMessage(error, 'Invalid Username', 'username')}
			/>
			<PasswordInput
				label='Password'
				id='password'
				placeholder='Enter password...'
				validations={{ required: true, minLength: 6 }}
				error={isError && getSpecificErrorMessage(error, 'Invalid Password', 'password')}
			/>
			<Button className='mt-4' type='submit' variant='primary'>
				Create Account
			</Button>
		</Form>
	);
};
