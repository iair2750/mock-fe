export type ItemType = 'access-token';

export const getStorageValue = (itemType: ItemType): string | undefined =>
	localStorage.getItem(itemType) ?? undefined;

export const setStorageValue = (itemType: ItemType, value: string): void =>
	localStorage.setItem(itemType, value);

export const removeStorageValue = (itemType: ItemType): void => localStorage.removeItem(itemType);

export const clearStorage = (): void => localStorage.clear();
