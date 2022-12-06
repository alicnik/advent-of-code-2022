import fs from 'fs';

const data = fs.readFileSync('./src/day-1-data.txt', 'utf-8');

const calories = data
	.split('\n\n')
	.map((arr) => arr.split('\n'))
	.map((arr) => arr.reduce((acc, cur) => Number(cur) + acc, 0));

const max = Math.max(...calories);

console.log(max); // 71780

const sorted = calories.sort((a, b) => b - a);

const topThree = sorted.slice(0, 3);

console.log(topThree.reduce((acc, cur) => Number(cur) + acc, 0)); // 212489
