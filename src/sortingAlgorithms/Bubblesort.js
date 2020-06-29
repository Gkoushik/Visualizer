export function BubbleSort(arr) {
  const animations = [];

  let i;
  let j;
  for (i = 1; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      animations.push([j, j + 1, 1]);
      animations.push([j, j + 1, 2]);
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1, 0]);
        let k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
      }
    }
  }

  return animations;
}
