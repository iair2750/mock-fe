export const getEnvValue = (key: string): string => {
	const value = process.env[`REACT_APP_${key}`];
	if (!value) {
		throw new Error(`missing env.REACT_APP_${key}`);
	}
	return value;
};
