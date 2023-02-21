import React, { FC, PropsWithChildren, useEffect } from 'react';
import ReactModal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Button, ButtonProps } from 'components';
import './modal.scss';

export type ModalVariant = 'small' | 'custom';

export interface ModalActionType extends Omit<ButtonProps, 'children'> {
	content: string;
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	show: boolean;
	variant?: ModalVariant;
	handleClose: () => void;
	actions?: ModalActionType[];
}

const MODAL_VARIANT_CLASSES: Record<ModalVariant, string> = {
	small: 'modal-small',
	custom: 'modal-custom',
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	title,
	show,
	variant = 'small',
	handleClose,
	actions = [],
	children,
	className = '',
	style = {},
	...divProps
}) => {
	useEffect(() => {
		ReactModal.setAppElement('#root');
	}, []);

	return (
		<ReactModal
			isOpen={show}
			shouldCloseOnOverlayClick
			onRequestClose={handleClose}
			className={`modal ${MODAL_VARIANT_CLASSES[variant]} ${className}`}
			style={{
				overlay: {
					position: 'fixed',
					zIndex: 99999,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(var(--neutral-d3), 0.7)',
				},
				content: {
					padding: 'unset',
					position: 'unset',
					outline: 'unset',
					...style,
				},
			}}
			{...divProps}
		>
			<div className='modal-title'>
				<span>{title}</span>
				<Button variant='classic' onClick={handleClose}>
					<XMarkIcon />
				</Button>
			</div>
			<div className='modal-content'>{children}</div>
			{actions.length > 0 && (
				<div className='modal-actions'>
					{actions.map(({ content, ...buttonProps }, index) => (
						<Button key={index} {...buttonProps}>
							{content}
						</Button>
					))}
				</div>
			)}
		</ReactModal>
	);
};
