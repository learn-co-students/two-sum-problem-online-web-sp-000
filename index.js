function bruteForceTwoSum(array, sum){
  const target = [];
  let i = 1;
  for (let [index, element] of array.entries()){
    i = index + 1;
    while (i < array.length){
      if (array[i] + element === sum)
        target.push([element, array[i]]);
      i++;
    }
  }
  return target;
}

function binarySearchTwoSum(array, sum){
  let target = [];
  array = array.sort();

  for (let [i, e] of array.entries()){
    // must allow duplicates - don't filter for uniques!
    let prev;
    if (i - 1 >= 0)
      prev = array[i - 1];
    if (prev === e)
      continue;

    const missingNum = sum - e;
    const result = [e, missingNum];

    if (binaryMatch(array, missingNum)){
      target.push(result.sort());
      const index = array.indexOf(missingNum);
      if (index > -1) {
        array.splice(index, 1);
      }

    }

  }
  return target;
}

function binaryMatch(sortedArray, missingNum){
  let i = 0;
  let j = Math.ceil((sortedArray.length - 1) / 2);
  let prevMax = sortedArray.length - 1;

  let counts = {};

  while (true){
    if (counts[sortedArray[j]]){
        counts[sortedArray[j]] += 1;
    } else {
      counts[sortedArray[j]] = 1;
    }

    if (missingNum < sortedArray[j]){
      prevMax = j;
      j = j - Math.ceil((j - i) / 2);
    } else if (missingNum > sortedArray[j]) {
      i = j + 1;
      j = prevMax;
    } else if (missingNum === sortedArray[j]) {
      return true;
    }
    if (counts[sortedArray[j]] === 2)
      return false;
  }

}

function hashTwoSum(array, sum){
  const target = [];
  const obj = {};

  for (let e of array){
    let difference = sum - e;
    if (obj[difference])
      target.push([difference, e])
    if (!obj[e])
      obj[e] = true;
  }
  return target;
}
