import { useAppSelector } from 'app-redux';
import { ButtonLink } from 'components';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { SignupForm } from './components';

import './signup.scss';

export const SignUpPage: FC = () => {
	const token = useAppSelector(store => store.auth.accessToken);

	if (token) {
		return <Navigate to='/' />;
	}

	return (
		<div className='signup-page'>
			<SignupForm />
			<div className='signup-page-navigate'>
				<span>You already have an account? Login in</span>
				<ButtonLink to='/login'>here</ButtonLink>
			</div>
		</div>
	);
};
