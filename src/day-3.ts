import fs from 'fs';
import { sumReducer, toChunks } from './utils';

const data = fs.readFileSync('./src/day-3-data.txt', 'utf-8');

function toPriorities(letter: string) {
	return letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 96 : 38);
}

function toCommonItem([first, ...other]: Array<string> | Array<string[]>) {
	const array = Array.isArray(first) ? first : [...first];
	return array.filter((item) => other.every((arr) => arr.includes(item)))[0];
}

function toSeparateCompartments(string: string) {
	const halfway = Math.floor(string.length / 2);
	const firstCompartment = string.slice(0, halfway).split('');
	const secondCompartment = string.slice(halfway).split('');
	return [firstCompartment, secondCompartment];
}

const sum = data
	.split('\n')
	.map(toSeparateCompartments)
	.map(toCommonItem)
	.map(toPriorities)
	.reduce(sumReducer, 0);

console.log(sum); // 7878

const badgeSum = data
	.split('\n')
	.reduce<Array<string[]>>(toChunks(3), [])
	.map(toCommonItem)
	.map(toPriorities)
	.reduce(sumReducer, 0);

console.log(badgeSum); // 2760
