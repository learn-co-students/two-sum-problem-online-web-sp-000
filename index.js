function bruteForceTwoSum(array, sum)
{
  let solutions = [];
  for(let i = 0; i < array.length; i++)
  {
    let numOne = array[i]
    array.splice(i, 1)
    for(let j = 0; j < array.length; j++)
    {
      let numTwo = array[j];
      if(numOne + numTwo == sum)
      {
        let solutionArray = [numOne, array[j]]
        solutions.push(solutionArray)
        array.splice(j, 1)
      }
    }
  }
  return solutions
}

function binarySearchTwoSum(array, sum)
{
  let solutions = [];
  let sortedArray = mergeSort(array)
  for(let i = 0; i < sortedArray.length; i++)
  {
    if(sortedArray[i] > sum)
    {
      sortedArray.splice(i, array.length)
    }
    else if(binaryMatch(sortedArray, sum - sortedArray[i]))
    {
      let numOne = sortedArray[i]
      sortedArray.splice(i, 1)
      for(let j = 0; j < sortedArray.length; j++)
      {
        let numTwo = sortedArray[j]
        if(numOne + numTwo == sum)
        {
          solutions.push([numOne, numTwo])
          sortedArray.splice(j, 1)
        }
      }
    }
  }
  return solutions
}

function hashTwoSum(array, sum)
{
  let solutions = [];
  let sortedArray = mergeSort(array)
  let hash = hashTable(sortedArray)
  for(let i = 0; i < sortedArray.length; i++)
  {
    let numOne = sortedArray[i]
    let missingNum = sum - sortedArray[i]
    console.log(hash.missingNum);
    if(sortedArray[i] > sum - 1)
    {
      sortedArray.splice(i, array.length)
    }
    else if(hash[`${missingNum}`])
    {
      solutions.push([sortedArray[i], missingNum])
      sortedArray.splice(i, 1)
    }
  }
  return solutions
}

function hashTable(sortedArray)
{
  var hash = [];
  for(let i = 0; i < sortedArray.length; i++)
  {
    let current = sortedArray[i]
    var key = current
    hash[i] = {[key]: current}
  }
  console.log(hash)
  return hash
}

function binaryMatch(sortedArray, missingNum)
{
  let middle = sortedArray.length / 2
  let firstHalf = sortedArray.slice(0, middle)
  let secondHalf = sortedArray.slice(middle, sortedArray.length)
  for(let i = 0; i < sortedArray.length; i++)
  {
    if(sortedArray[i] === missingNum)
    {
      return true
    }
    else if(sortedArray[i] > missingNum)
    {
      return binaryMatch(firstHalf, missingNum)
    }
    else if(sortedArray[i] < missingNum)
    {
      return binaryMatch(secondHalf, missingNum)
    }
  }
}


function findMinAndRemoveSorted(array)
{
  return array.shift()
}


function merge(firstArray, secondArray)
{
  let sortedArray = [];
  while(firstArray.length > 0 && secondArray.length > 0)
  {
    if(firstArray[0] < secondArray[0])
    {
      let min = findMinAndRemoveSorted(firstArray)
      sortedArray.push(min);
    }
    else
    {
      let min = findMinAndRemoveSorted(secondArray)
      sortedArray.push(min);
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}


function mergeSort(array)
{
  let middle = array.length / 2
  let firstHalf = array.slice(0, middle)
  let secondHalf = array.slice(middle, array.length)
  
  if(array.length < 2)
  {
    return array
  }
  else
  {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}