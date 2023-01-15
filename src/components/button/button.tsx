import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './button.scss';

export type ButtonVariant = 'classic' | 'primary' | 'secondary' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

export interface ButtonLinkProps extends LinkProps, React.RefAttributes<HTMLAnchorElement> {
	variant?: ButtonVariant;
}

export const getVariantClassName = (variant?: ButtonVariant, isLink?: boolean): string => {
	switch (variant) {
		case 'classic':
			return 'button-classic';
		case 'primary':
			return 'button-primary';
		case 'secondary':
			return 'button-secondary';
		case 'link':
			return 'button-link';
		default:
			return isLink ? 'button-link' : 'button-primary';
	}
};

export const Button: FC<ButtonProps> = ({ variant, className, children, ...buttonProps }) => (
	<button className={`button ${getVariantClassName(variant)} ${className ?? ''}`} {...buttonProps}>
		{children}
	</button>
);

export const ButtonLink: FC<ButtonLinkProps> = ({ variant, children, className, ...linkProps }) => (
	<Link
		{...linkProps}
		className={`button ${getVariantClassName(variant, true)} ${className ?? ''}`}
	>
		{children}
	</Link>
);
