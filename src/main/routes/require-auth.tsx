import { useAppSelector } from 'app-redux';
import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth: FC = () => {
	const token = useAppSelector(store => store.auth.accessToken);
	const location = useLocation();

	return token ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
