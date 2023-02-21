import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { getSpecificErrorMessage } from 'assets';
import { Form, FormProps, TextInput } from 'components';
import { FC } from 'react';

export interface CreateSchemaFormProps extends Omit<FormProps, 'children'> {
	isError?: boolean;
	error?: FetchBaseQueryError | SerializedError | undefined;
}

export interface CreateSchemaParams {
	name: string;
}

export const CreateSchemaForm: FC<CreateSchemaFormProps> = ({ isError, error, ...formProps }) => (
	<Form {...formProps}>
		<TextInput
			id='name'
			label='Name'
			placeholder='Name your schema...'
			validations={{ required: true }}
			error={isError && getSpecificErrorMessage(error, 'Invalid Schema name', 'name')}
		/>
	</Form>
);
