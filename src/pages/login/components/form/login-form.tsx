import { useLoginMutation } from 'api/slices/auth.slice';
import { login, useAppDispatch } from 'app-redux';
import { Button, TextInput, PasswordInput, Form } from 'components';
import { FC } from 'react';

import './login-form.scss';

interface LoginFormData {
	username: string;
	password: string;
}

export const LoginForm: FC = () => {
	const [apiLogin, { isError }] = useLoginMutation();
	const dispatch = useAppDispatch();

	const formSubmit = async (data: LoginFormData): Promise<void> => {
		try {
			const response = await apiLogin(data).unwrap();
			dispatch(login(response));
		} catch (err) {}
	};

	return (
		<Form className='form-login' onSubmit={formSubmit}>
			<TextInput
				id='username'
				label='Username'
				placeholder='Enter username or email...'
				validations={{ required: true }}
				error={isError && 'Invalid credentials'}
			/>
			<PasswordInput
				label='Password'
				id='password'
				placeholder='Enter password...'
				validations={{ required: true }}
				error={isError && 'Invalid credentials'}
			/>
			<Button type='submit' variant='primary' className='mt-4'>
				LOGIN
			</Button>
		</Form>
	);
};
