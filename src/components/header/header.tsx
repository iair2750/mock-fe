import { UserIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from 'app-redux';
import { BaseView, ButtonLink } from 'components';
import { FC } from 'react';
import { NavLink, To, useLocation } from 'react-router-dom';
import './header.scss';

export interface HeaderLink {
	to: To;
	text: string;
	private?: boolean;
}

export interface HeaderProps {
	links?: HeaderLink[];
}

export const Header: FC<HeaderProps> = ({ links = [] }) => {
	const location = useLocation();
	const token = useAppSelector(store => store.auth.accessToken);

	return (
		<BaseView className='header' bg='bg-primary-d2'>
			<div className='header-navigation'>
				{links.length > 0 &&
					links.map(
						(link, index) =>
							(!link.private || token) && (
								<NavLink
									className={state => (state.isActive ? 'header-link-active' : 'header-link')}
									key={index}
									to={link.to}
								>
									{link.text}
								</NavLink>
							)
					)}
			</div>
			<div>
				{token ? (
					<ButtonLink variant='classic' to='/account/logout' className='header-user-menu'>
						<UserIcon />
					</ButtonLink>
				) : (
					location.pathname !== '/account/login' && (
						<ButtonLink
							variant='classic'
							to={`/account/login?from=${location.pathname}`}
							className='header-user-menu'
						>
							<UserIcon />
						</ButtonLink>
					)
				)}
			</div>
		</BaseView>
	);
};
