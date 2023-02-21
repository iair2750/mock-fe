import { ObjectType, CSS } from 'assets';
import { FC } from 'react';
import { To } from 'react-router-dom';

export type TableItem = ObjectType<any>;

export interface TableColumn<T extends TableItem> {
	Header?: string;
	accessor: (item: T) => any;
	Cell?: FC<any>;
	width?: CSS.TLength;
}

export interface TableProps<T extends TableItem> {
	data: T[];
	columns: Array<TableColumn<T>>;
	getRowLink?: (item: T) => To;
}

export interface TableHeaderProps<T extends TableItem> {
	columns: Array<TableColumn<T>>;
}

export interface TableBodyProps<T extends TableItem> {
	data: T[];
	columns: Array<TableColumn<T>>;
	getRowLink?: (item: T) => To;
}

export interface TableRowProps<T extends TableItem> {
	item: T;
	columns: Array<TableColumn<T>>;
	getRowLink?: (item: T) => To;
}
