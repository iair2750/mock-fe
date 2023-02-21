import { TableItem, TableProps } from './types';

import './table.scss';
import { TableBody, TableHeader } from './components';

export const Table: <T extends TableItem>(props: TableProps<T>) => JSX.Element = ({
	data,
	columns,
	getRowLink,
}) => {
	const colWidth = columns.reduce((p, column) => `${p + (column.width ?? '1fr')} `, '');

	return (
		<table style={{ gridTemplateColumns: colWidth }}>
			<TableHeader columns={columns} />
			<TableBody columns={columns} data={data} getRowLink={getRowLink} />
		</table>
	);
};
