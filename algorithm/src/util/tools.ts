/**
 * 生成一个指定长度的floating类型数组
 * @param length 长度
 * @return 数组
 */
export function getArray<T>(length: number): T[] {
	let array:T[] = []
	for (let i = 0; i < length; i++) {
		array.push(Math.random() as T)
	}
	return array
}

/**
 * 生成指定范围、个数、不重复的随机正整数集合。
 * @param count
 * @param max
 * @param min
 */
export function generateUniqueRandomIntegers(count: number, max: number, min: number = 0): number[] {
	if (count <= 0 || max <= min || !Number.isInteger(max) || !Number.isInteger(min) || !Number.isInteger(count)) {
		throw new Error("Invalid input parameters.Please ensure count is a positive integer, min is a non-negative integer, max is a positive integer greater than min.")
	}
	if (!(count <= (max - min + 1))) {
		throw new Error("(max - min + 1) should be >= count.")
	}

	const result: number[] = [];
	const uniqueNumbers: Set<number> = new Set();

	while (uniqueNumbers.size < count) {
		const randomInteger = Math.floor(Math.random() * (max - min +1)) + min;
		uniqueNumbers.add(randomInteger);
	}

	uniqueNumbers.forEach((value) => {
		result.push(value)
	})

	return  result;
}