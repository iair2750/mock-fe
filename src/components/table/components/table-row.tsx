import { uid } from 'assets';
import { Link } from 'react-router-dom';
import { TableRowProps, TableItem } from '../types';

export const TableRow: <T extends TableItem>(props: TableRowProps<T>) => JSX.Element = ({
	columns,
	item,
	getRowLink,
}) => {
	const row = columns.map(column => (
		<td key={uid()} className='group-hover:bg-primary-l2 group-hover:bg-opacity-20'>
			{column.Cell?.(column.accessor(item)) ?? column.accessor(item)}
		</td>
	));

	return (
		<tr className='group'>
			{getRowLink ? (
				<Link tabIndex={-10} className='contents' to={getRowLink(item)}>
					{row}
				</Link>
			) : (
				row
			)}
		</tr>
	);
};
