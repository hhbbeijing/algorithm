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