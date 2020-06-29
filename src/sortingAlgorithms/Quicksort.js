export function quickSort(array) {
  const animations = [];
  const low = 0;
  const high = array.length - 1;
  quickSorthelper(array, low, high, animations);
  return animations;
}

export function quickSorthelper(array, low, high, animations) {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is now
           at right place */
    let pi = partition(array, low, high, animations);

    quickSorthelper(array, low, pi - 1, animations); // Before pi
    quickSorthelper(array, pi + 1, high, animations); // After pi
  }
}

export function partition(array, low, high, animations) {
  // pivot (Element to be placed at right position)
  let pivot = array[high];

  let i = low - 1; // Index of smaller element

  for (let j = low; j <= high - 1; j++) {
    animations.push([j, high, 1]);
    animations.push([j, high, 2]);
    // If current element is smaller than the pivot
    if (array[j] < pivot) {
      i++; // increment index of smaller element

      let k = array[j];
      array[j] = array[i];
      array[i] = k;
      animations.push([i, j, 0]);
      //swap arr[i] and arr[j]
    }
  }
  animations.push([i + 1, high, 0]);
  let k = array[high];
  array[high] = array[i + 1];
  array[i + 1] = k;
  // swap arr[i + 1] and arr[high])
  return i + 1;
}
