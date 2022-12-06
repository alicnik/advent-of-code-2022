import fs from 'fs';
import { createRange } from './utils';

function toRanges(pairing: string) {
	return pairing
		.split(',')
		.map((assigment) => assigment.split('-'))
		.map(([start, end]) => createRange({ start, end }));
}

function hasDuplicatedAssignment([first, second]: Array<number[]>) {
	return (
		first.every((num) => second.includes(num)) ||
		second.every((num) => first.includes(num))
	);
}

function hasAssignmentOverlap([first, second]: Array<number[]>) {
	return (
		first.some((num) => second.includes(num)) ||
		second.some((num) => first.includes(num))
	);
}

const data = fs.readFileSync('./src/day-4-data.txt', 'utf-8');

console.log(
	data.split('\n').map(toRanges).filter(hasDuplicatedAssignment).length
); // 496

console.log(data.split('\n').map(toRanges).filter(hasAssignmentOverlap).length); // 847
