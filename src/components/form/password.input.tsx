import { FC, useEffect, useMemo, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useFormContext } from 'react-hook-form';
import { Button } from 'components';
import { InputProps } from './input.types';

import './input.scss';
import { getRegisterValidations } from './utils';
import { FormErrorBanner } from './error-banner';

export const PasswordInput: FC<InputProps> = ({ id, label, validations, error, ...inputProps }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const {
		register,
		formState: { errors, isSubmitSuccessful },
		setError,
		setValue,
	} = useFormContext<Record<string, unknown>>() ?? {};

	useEffect(() => {
		if (error) {
			setError(id, { message: error });
		}
	}, [error]);

	useEffect(() => {
		if (isSubmitSuccessful) {
			setValue(id, undefined);
		}
	}, [isSubmitSuccessful]);

	const formValidations = useMemo(() => getRegisterValidations(id, validations), [validations]);
	const registerInputProps = register?.(id, formValidations) ?? {};

	return (
		<div className='input-container'>
			{label && (
				<label
					htmlFor={registerInputProps.name}
					className={validations?.required ? 'required' : ''}
				>
					{label}
				</label>
			)}
			<div className='input-password'>
				<input
					{...inputProps}
					{...registerInputProps}
					id={id}
					autoComplete='off'
					type={isPasswordVisible ? 'text' : 'password'}
				/>
				<Button
					variant='classic'
					type='button'
					onClick={() => setIsPasswordVisible(!isPasswordVisible)}
				>
					{isPasswordVisible ? <EyeIcon /> : <EyeSlashIcon />}
				</Button>
			</div>
			<FormErrorBanner error={errors[id]} />
		</div>
	);
};
