// Find Occurances of the number

function FindFirstAndLast(arr, size, target, searchFirst) {
  let low = 0,
    high = size - 1,
    result = -1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (target === arr[mid]) {
      result = mid;
      if (searchFirst) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

function CountOccurance(arr, target) {
  let firstIndex = FindFirstAndLast(arr, arr.length, target, true);
  if (firstIndex < 0) {
    console.log('The target is not present in the array');
  } else {
    lastIndex = FindFirstAndLast(arr, arr.length, target, false);
    console.log('Count is : ', lastIndex - firstIndex + 1);
  }
}

export default CountOccurance;
