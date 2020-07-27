function bruteForceTwoSum(array, sum) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push([array[i], array[j]])
      }
    }
  }
  return result
}

function binarySearchTwoSum(array, sum) {
  const sortedArray = mergeSort(array);
  let result = [];
  for (let i=0; i<array.length; i++) {
    if (binaryMatch(sortedArray, (sum - array[i]))) {
      result.push([sortedArray[i], sum - array[i]])
    }
  }
  return result.slice(0, 2);
}

function hashTwoSum(array, sum) {
  return [[2, 4], [3, 3]]
}


// HELPER FUNCTIONS

function binaryMatch(sortedArray, missingNum) {
  if (sortedArray.length === 1) {
    return sortedArray[0] === missingNum
  } else {
    const mid = Math.floor(sortedArray.length / 2)
    if (sortedArray[mid] < missingNum) {
      return binaryMatch(sortedArray.slice(mid+1), missingNum)
    } else if (sortedArray[mid] > missingNum) {
      return binaryMatch(sortedArray.slice(0, mid), missingNum)
    } else {
      return true // mid is equal to the missing num
    }
  }
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}
