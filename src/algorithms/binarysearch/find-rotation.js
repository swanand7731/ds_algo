// Method to find rotation count

function FindRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;
  let size = arr.length;

  while (low <= high) {
    // if the lower index is lower than the higher index
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) return low;
    let next = (mid - 1) % size;
    let prev = (mid + size - 1) % size;
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) return mid;
    else if (arr[mid] <= arr[high]) high = mid - 1;
    else if (arr[mid] >= arr[low]) low = mid + 1;
  }
  return -1;
}

export default FindRotationCount;
