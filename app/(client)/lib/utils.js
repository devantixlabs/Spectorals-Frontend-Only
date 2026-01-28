import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const roundTwoDecimals = (myNumber) => Math.round(myNumber * 100) / 100;

export const displayBigNumber = (myNumber) => {
	if (myNumber >= 1000000) {
		const rounded = Math.round(myNumber / 100000) / 10;
		return `${rounded}M`;
	} else if (myNumber >= 1000) {
		const rounded = Math.round(myNumber / 100) / 10;
		return `${rounded}K`;
	} else return myNumber;
};

export const capitalized = (text) => {
	if (typeof text !== 'string') return;
	const lowerCased = text.toLowerCase();
	const splitted = lowerCased.split(' ');
	return splitted
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(' ');
};