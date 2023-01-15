import { useAppSelector } from 'app-redux';
import { ButtonLink } from 'components';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from './components';
import './login.scss';

export const LoginPage: FC = () => {
	const token = useAppSelector(store => store.auth.accessToken);

	if (token) {
		return <Navigate to='/' />;
	}

	return (
		<div className='login-page'>
			<LoginForm />
			<div className='login-page-navigate'>
				<span>Don&apos;t have an account? Create one </span>
				<ButtonLink to='/signup'>here</ButtonLink>
			</div>
		</div>
	);
};
