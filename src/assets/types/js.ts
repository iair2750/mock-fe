export type PrimitiveTypes = string | number | Date | boolean;
export interface ObjectType<T> {
	[key: string]: T;
}
export type ObjectPrimitiveType = ObjectType<PrimitiveTypes | PrimitiveTypes[]>;
export interface ObjectWithId {
	id: string;
}
