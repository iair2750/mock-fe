import { Header } from 'components';
import { LoginPage, SignUpPage } from 'pages';
import { FC } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './routes';

export const Main: FC = () => (
	<Routes>
		<Route path='login' element={<LoginPage />} />
		<Route path='signup' element={<SignUpPage />} />
		<Route
			path='/'
			element={
				<div id='app-header-footer'>
					<Header />
					<div id='page-container'>
						<Outlet />
					</div>
				</div>
			}
		>
			<Route element={<RequireAuth />}>
				<Route path='home' element={<>home</>} />
				<Route index element={<Navigate to='/home' />} />
			</Route>
			<Route path='*' element={<>not found page</>} />
		</Route>
	</Routes>
);
