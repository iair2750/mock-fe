import { useGetSchemaQuery } from 'api';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const SchemaDetailsPage: FC = () => {
	const { id = '' } = useParams();
	const { data } = useGetSchemaQuery(id, { skip: id === '' });

	return <div>{data?.name}</div>;
};
