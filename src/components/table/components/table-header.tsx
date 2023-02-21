import { uid } from 'assets';
import { TableHeaderProps, TableItem } from '../types';

export const TableHeader: <T extends TableItem>(props: TableHeaderProps<T>) => JSX.Element = ({
	columns,
}) => (
	<thead>
		<tr>
			{columns.map(column => (
				<th key={uid()}>{column.Header}</th>
			))}
		</tr>
	</thead>
);
