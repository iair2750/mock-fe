import { FC, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './input.types';

import './input.scss';
import { getRegisterValidations } from './utils';
import { FormErrorBanner } from './error-banner';

export const TextInput: FC<InputProps> = ({ id, label, validations, error, ...inputProps }) => {
	const {
		register,
		formState: { errors },
		setError,
	} = useFormContext<Record<string, unknown>>() ?? {};

	const formValidations = useMemo(() => getRegisterValidations(id, validations), [validations]);
	const registerInputProps = register?.(id, formValidations) ?? {};

	useEffect(() => {
		if (error) {
			setError(id, { message: error });
		}
	}, [error]);

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
			<input {...inputProps} {...registerInputProps} id={id} />
			<FormErrorBanner error={errors[id]} />
		</div>
	);
};
