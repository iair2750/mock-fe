import { FC } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Header, HeaderLink } from 'components';
import { LoginPage, SignUpPage, SchemasPage, SchemaDetailsPage } from 'pages';
import { RequireAuth, Logout } from './routes';

export const Main: FC = () => {
	const headerLinks: HeaderLink[] = [
		{ to: '/home', text: 'Home' },
		{ to: '/schemas', text: 'Schemas' },
		{ to: '/account', text: 'Profile', private: true },
	];

	return (
		<Routes>
			<Route
				path='/'
				element={
					<div id='app-header-footer'>
						<Header links={headerLinks} />
						<div id='page-container'>
							<Outlet />
						</div>
					</div>
				}
			>
				<Route path='account'>
					<Route path='login' element={<LoginPage />} />
					<Route path='logout' element={<Logout />} />
					<Route path='signup' element={<SignUpPage />} />
				</Route>

				<Route path='home' element={<>home</>} />
				<Route path='schemas'>
					<Route path=':id' element={<SchemaDetailsPage />} />
					<Route index element={<SchemasPage />} />
				</Route>

				<Route element={<RequireAuth />}>
					<Route path='account'>
						<Route index element={<>profile</>} />
					</Route>
				</Route>

				<Route index element={<Navigate to='/home' />} />
				<Route path='*' element={<>not found page</>} />
			</Route>
		</Routes>
	);
};
