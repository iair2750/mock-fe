import { FC, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	onSubmit: (data: any) => void | Promise<void>;
}

export const Form: FC<PropsWithChildren<FormProps>> = ({ children, onSubmit, ...formProps }) => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} {...formProps}>
				{children}
			</form>
		</FormProvider>
	);
};
