/* eslint-disable react/no-unstable-nested-components */
import { ResponseSchema, useGetMySchemasQuery } from 'api';
import { BaseView, Button, Table, TableColumn } from 'components';

import { FC, useState } from 'react';
import { CreateSchemaModal } from './components';

import './schema.scss';

export const SchemasPage: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: schemas } = useGetMySchemasQuery();
	const columns: Array<TableColumn<ResponseSchema>> = [
		{ Header: 'Id', accessor: schema => schema.id },
		{ Header: 'Name', accessor: schema => schema.name },
	];

	return (
		<>
			<CreateSchemaModal show={isOpen} handleClose={() => setIsOpen(false)} />
			<BaseView className='grid gap-2'>
				<div className='schema-page-header'>
					<span>Schemas</span>
					<Button variant='ghost' onClick={() => setIsOpen(true)}>
						NEW SCHEMA
					</Button>
				</div>
				<Table data={schemas ?? []} columns={columns} getRowLink={item => item.id} />
			</BaseView>
		</>
	);
};
