export function InsertionSort(arr, low, high) {
  const animations = [];

  let i;
  let key;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    let j = i - 1;

    while (j >= 0) {
      animations.push([j, i, 1]);
      animations.push([j, i, 2]);

      if (arr[j] > key) {
        animations.push([j + 1, arr[j], 0]);
        arr[j + 1] = arr[j];
        j = j - 1;
      } else {
        break;
      }
    }
    animations.push([j + 1, key, 0]);
    arr[j + 1] = key;
  }

  return animations;
}
