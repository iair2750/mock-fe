import { FC } from 'react';

import { Modal, ModalActionType } from 'components';
import { useCreateSchemaMutation } from 'api';
import { CreateSchemaForm, CreateSchemaParams } from '../forms';

interface CreateAppModalProps {
	show: boolean;
	handleClose: () => void;
}

export const CreateSchemaModal: FC<CreateAppModalProps> = ({ show, handleClose }) => {
	const [createSchema, { isLoading, isError, error }] = useCreateSchemaMutation();

	const handleSubmit = async (values: CreateSchemaParams): Promise<void> => {
		try {
			await createSchema({ name: values.name }).unwrap();
			handleClose();
		} catch (err) {}
	};

	const formId = 'create-app';
	const modalActions: ModalActionType[] = [
		{
			content: 'Save',
			variant: 'secondary',
			type: 'submit',
			form: formId,
			className: isLoading ? 'button-loading' : '',
		},
		{ content: 'Cancel', variant: 'primary', onClick: handleClose },
	];

	return (
		<Modal title='Create Schema' show={show} handleClose={handleClose} actions={modalActions}>
			<CreateSchemaForm isError={isError} error={error} id={formId} onSubmit={handleSubmit} />
		</Modal>
	);
};
