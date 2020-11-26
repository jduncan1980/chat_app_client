import { useState } from 'react';

export default function useLocalStorage(key: string, initialValue: any) {
	const [value, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});
	const setValue = (value: any) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [value, setValue] as const;
}
