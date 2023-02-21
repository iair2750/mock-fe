import { useAppDispatch, useAppSelector } from 'app-redux';
import { logout } from 'app-redux/actions';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const Logout: FC = () => {
	const token = useAppSelector(store => store.auth.accessToken);
	const dispatch = useAppDispatch();
	dispatch(logout());

	return token ? null : <Navigate to='/account/login' />;
};
