import fs from 'fs';

const data = fs.readFileSync('./src/day-2-data.txt', 'utf-8');

const rounds = data.split('\n').map((arr) => arr.split(' '));

const Score = {
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3,
	WIN: 6,
	DRAW: 3,
	LOSS: 0,
} as const;

let score = 0;

/**
 * A X = Rock 1
 * B Y = Paper 2
 * C Z = Scissors 3
 * Loss = 0
 * Draw = 3
 * Win = 6
 */

for (const [opponent, player] of rounds) {
	const playerScore = {
		X: Score.ROCK,
		Y: Score.PAPER,
		Z: Score.SCISSORS,
	}[player];

	score += playerScore ?? 0;

	switch (opponent) {
		case 'A':
			if (player === 'X') score += Score.DRAW;
			if (player === 'Y') score += Score.WIN;
			break;
		case 'B':
			if (player === 'Y') score += Score.DRAW;
			if (player === 'Z') score += Score.WIN;
			break;
		case 'C':
			if (player === 'X') score += Score.WIN;
			if (player === 'Z') score += Score.DRAW;
			break;
	}
}

console.log(score); // 12679

let newScore = 0;

/**
 * A = Rock 1
 * B = Paper 2
 * C = Scissors 3
 * X = lose
 * Y = draw
 * Z = win
 * Loss = 0
 * Draw = 3
 * Win = 6
 */

for (const [opponent, player] of rounds) {
	const playerScore = {
		X: Score.LOSS,
		Y: Score.DRAW,
		Z: Score.WIN,
	}[player];

	newScore += playerScore ?? 0;

	switch (opponent) {
		case 'A':
			if (player === 'X') newScore += Score.SCISSORS;
			if (player === 'Y') newScore += Score.ROCK;
			if (player === 'Z') newScore += Score.PAPER;
			break;
		case 'B':
			if (player === 'X') newScore += Score.ROCK;
			if (player === 'Y') newScore += Score.PAPER;
			if (player === 'Z') newScore += Score.SCISSORS;
			break;
		case 'C':
			if (player === 'X') newScore += Score.PAPER;
			if (player === 'Y') newScore += Score.SCISSORS;
			if (player === 'Z') newScore += Score.ROCK;
			break;
	}
}

console.log(newScore); // 14470
