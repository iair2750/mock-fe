import { useAppSelector } from 'app-redux';
import { ButtonLink } from 'components';
import { FC } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { LoginForm } from './components';
import './login.scss';

export const LoginPage: FC = () => {
	const [searchParams] = useSearchParams();
	const token = useAppSelector(store => store.auth.accessToken);

	if (token) {
		return <Navigate to={searchParams.get('from') ?? '/'} />;
	}

	return (
		<div className='login-page'>
			<LoginForm />
			<div className='login-page-navigate'>
				<span>Don&apos;t have an account? Create one </span>
				<ButtonLink to='/account/signup'>here</ButtonLink>
			</div>
		</div>
	);
};
