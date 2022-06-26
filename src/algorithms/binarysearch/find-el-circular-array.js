function CirularArraySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] <= arr[high]) {
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (arr[low] <= arr[mid]) {
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

export default CirularArraySearch;
