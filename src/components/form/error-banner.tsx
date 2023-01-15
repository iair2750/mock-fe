import { FC, useEffect, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

import './input.scss';

export interface FormErrorBannerProps {
	error?: Merge<FieldError, FieldErrorsImpl<{}>>;
}

export const FormErrorBanner: FC<FormErrorBannerProps> = ({ error }) => {
	const [ref, setRef] = useState<HTMLInputElement | undefined>(error?.ref as HTMLInputElement);

	useEffect(() => {
		const nextRef = error?.ref as HTMLInputElement | undefined;
		if (nextRef !== ref) {
			ref?.classList.remove('input-error');
			nextRef?.classList.add('input-error');
			setRef(nextRef);
		}
	}, [error]);

	return error ? (
		<div className='input-error-banner'>
			<ExclamationCircleIcon />
			<span>{error.message}</span>
		</div>
	) : null;
};
