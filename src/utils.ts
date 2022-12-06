export function sumReducer(acc: number, cur: number) {
	return acc + cur;
}

/**
 * Returns a reducer that splits an array into chunks
 * @param chunkLength Desired length of the chunks
 */
export function toChunks(chunkLength: number) {
	return <T>(acc: T[][], _: T, index: number, arr: T[]) => {
		return index % chunkLength === 0
			? [...acc, arr.slice(index, index + chunkLength)]
			: acc;
	};
}

export function createRange({
	start,
	end,
}: {
	start?: number | string;
	end: number | string;
}) {
	const fullRange = [...Array(Number(end) + 1).keys()];
	return fullRange.slice(fullRange.indexOf(Number(start)));
}
