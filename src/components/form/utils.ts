import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { ValidationObject, ValidationRule } from './input.types';

const instanceOfValidationRule = (object: any): object is ValidationRule<unknown> =>
	typeof object === 'object' && 'value' in object && 'message' in object;

const getValidationRule = <T>(
	value: T | ValidationRule<T>,
	getDefaultMessage: (value: T) => string
): ValidationRule<T> => {
	if (instanceOfValidationRule(value)) {
		return value;
	}
	return {
		value,
		message: getDefaultMessage(value),
	};
};

export const getRegisterValidations = (
	id: string,
	validations?: ValidationObject
): RegisterOptions<FieldValues, FieldPath<FieldValues>> => {
	if (!validations) {
		return {};
	}

	return {
		required: validations.required && `${id} is required`,
		min:
			validations.min &&
			getValidationRule(validations.min, value => `${id} should be minimum ${value}`),
		max:
			validations.max &&
			getValidationRule(validations.max, value => `${id} should be maximum ${value}`),
		minLength:
			validations.minLength &&
			getValidationRule(
				validations.minLength,
				value => `${id} should have minimum ${value} characters`
			),
		maxLength:
			validations.maxLength &&
			getValidationRule(
				validations.maxLength,
				value => `${id} should have maximum ${value} characters`
			),
		validate: validations.validate,
	};
};
