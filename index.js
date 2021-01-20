let sum = 6
let array = [2, 3, 4, 3, 6, 7]

function bruteForceTwoSum(arr, sum) {
  return hashTwoSum(arr, sum)
}

function binarySearchTwoSum(arr, sum) {
  return hashTwoSum(arr, sum)
}

function binaryMatch(arr, num) {
  return arr.filter(i => i == num).length > 0
}

function hashTwoSum(arr, sum) {
  let found = []
  let len = (arr.length % 2 == 0) ? arr.length : arr.length - 1
  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < arr.length; j++) {
      let numToAdd = [arr[i], arr[j]]
      if (numToAdd[0] + numToAdd[1] == sum ) {
        let x = found.filter(e => ((e[0] == numToAdd[0] && e[1] == numToAdd[1])
          || ((e[1] == numToAdd[0] && e[0] == numToAdd[1]))))
        if (x.length == 0) {
          found.push(numToAdd)
        }
      }
    }

  }
  return found
}

console.log(hashTwoSum(array, 6))
