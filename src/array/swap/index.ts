/**
 * @category Array
 * swap two elements in an array
 * @param arr
 * @param indexA
 * @param indexB
 */
export function swap<T>(arr: T[], indexA: number, indexB: number) {
  const tmp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = tmp;
}
