/**
 * swap two elements in an array
 * @category Array
 */
export function swap<T>(arr: T[], indexA: number, indexB: number) {
  const tmp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = tmp;
}
