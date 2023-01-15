import { useAppDispatch, useAppSelector } from 'app-redux';
import { logout } from 'app-redux/actions';
import { BaseView, Button } from 'components';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';

export const Header: FC = () => {
	const navigate = useNavigate();
	const token = useAppSelector(store => store.auth.accessToken);
	const user = useAppSelector(store => store.auth.user);
	const dispatch = useAppDispatch();

	return (
		<BaseView className='header' bg='var(--primary-d2)'>
			<div>{token && 'links'}</div>
			<div>
				{user ? (
					<Button variant='secondary' onClick={() => dispatch(logout())}>
						LOGOUT
					</Button>
				) : (
					<Button variant='secondary' onClick={() => navigate('/login')}>
						LOGIN
					</Button>
				)}
			</div>
		</BaseView>
	);
};
