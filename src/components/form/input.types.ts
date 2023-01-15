export interface ValidationRule<T> {
	value: T;
	message: string;
}

export type ValidateFunction = (value: any) => true | string;

export interface ValidationObject {
	required?: boolean | string;
	min?: number | ValidationRule<number>;
	max?: number | ValidationRule<number>;
	maxLength?: number | ValidationRule<number>;
	minLength?: number | ValidationRule<number>;
	validate?: ValidateFunction | Record<string, ValidateFunction>;
}

export interface InputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'className'> {
	id: string;
	label?: string;
	validations?: ValidationObject;
	error?: string | false;
}
