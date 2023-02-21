import { uid } from 'assets';
import { TableBodyProps, TableItem } from '../types';
import { TableRow } from './table-row';

export const TableBody: <T extends TableItem>(props: TableBodyProps<T>) => JSX.Element = ({
	columns,
	data,
	getRowLink,
}) => {
	if (!data.length) {
		return <div className='table-no-data'>No data available</div>;
	}
	return (
		<tbody>
			{data.map(el => (
				<TableRow key={uid()} columns={columns} item={el} getRowLink={getRowLink} />
			))}
		</tbody>
	);
};
