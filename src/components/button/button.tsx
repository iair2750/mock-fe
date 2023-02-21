import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './button.scss';

export type ButtonVariant = 'classic' | 'primary' | 'ghost' | 'secondary' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export interface ButtonLinkProps extends LinkProps, React.RefAttributes<HTMLAnchorElement> {
	variant?: ButtonVariant;
}

export const getVariantClassName = (variant?: ButtonVariant, isLink?: boolean): string => {
	let className;
	switch (variant) {
		case 'classic':
			return '';
		case 'primary':
			className = 'button-primary';
			break;
		case 'ghost':
			className = 'button-ghost';
			break;
		case 'secondary':
			className = 'button-secondary';
			break;
		case 'link':
			className = 'button-link';
			break;
		default:
			className = isLink ? 'button-link' : 'button-primary';
	}
	return `button ${className}`;
};

export const Button: FC<ButtonProps> = ({ variant, className, children, ...buttonProps }) => (
	<button className={`${getVariantClassName(variant)} ${className ?? ''}`} {...buttonProps}>
		{children}
	</button>
);

export const ButtonLink: FC<ButtonLinkProps> = ({ variant, children, className, ...linkProps }) => (
	<Link {...linkProps} className={`${getVariantClassName(variant, true)} ${className ?? ''}`}>
		{children}
	</Link>
);
