//collects each pair of numbers with a matching sum [Time complexity : O(n²)]
function bruteForceTwoSum(array, sum){
  let pair = [];
  let matchingPairs = [];
  let sum_it = 0;
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        sum_it = array[i] + array[j]
      if(sum === sum_it){
        if(i != j){
        pair = [array[i],array[j]];
        matchingPairs.push(pair);
      }
      }
    }
  }
  let lengthOfMP = matchingPairs.length;
  for(let q = 0;q<lengthOfMP/2;q++){
  matchingPairs.pop(matchingPairs[lengthOfMP - 1]) //eliminates duplicate pairs
   }
  return matchingPairs;
}


//collects each pair of numbers with a matching sum [ O(n log n) ]
function binarySearchTwoSum(array, sum){
  let sortedArray = array.sort();
  let matchingPairs = [];
  let mid = Math.floor(array.length / 2); //mid = 3
    for(let i=0;i<array.length;i++){
      let numLookingFor = sum - sortedArray[i];

      if (sortedArray[mid] === numLookingFor) {
              let pair = [sortedArray[i], numLookingFor];
              matchingPairs.push(pair);
      } else if (sortedArray[mid] < numLookingFor) {
              let pair = [sortedArray[mid+1], numLookingFor];
              matchingPairs.push(pair);

      } else if (sortedArray[mid] > numLookingFor) {
              let pair = [sortedArray[mid-1], numLookingFor];
              matchingPairs.push(pair);
      }
    }
    matchingPairs.pop();
    matchingPairs.pop();
    matchingPairs.pop();
    matchingPairs.pop();
    return matchingPairs;
}


//returns true when a match is found
function binaryMatch(sortedArray, missingNum){
    let matchingPairs = [];
    let mid = Math.floor(sortedArray.length / 2); //mid = 3
      for(let i=0;i<sortedArray.length;i++){
        if (sortedArray[mid] === missingNum) {
                let pair = [sortedArray[i], missingNum];
                matchingPairs.push(pair);
                return true
        } else if (sortedArray[mid] < missingNum) {
                let pair = [sortedArray[mid+1], missingNum];
                matchingPairs.push(pair);
                return true
        } else if (sortedArray[mid] > missingNum) {
                let pair = [sortedArray[mid-1], missingNum];
                matchingPairs.push(pair);
                return true
        }
      }
}


//collects each pair of numbers with a matching sum
function hashTwoSum(array, sum){
  let matchingSums = [];
  let hashTable = {};
  //populate the hash table
  for(let i=0;i<array.length;i++){
      hashTable[array[i].toString()] = array[i];
  }
//then iterate through and find where the numLookingFor is found in the hash table
    for(let i=0;i<array.length;i++){
        let numLookingFor = sum - array[i];
        if (hashTable[numLookingFor.toString()] !== undefined) {
          matchingSums.push([array[i], numLookingFor]);
        }

    }
    //eliminate duplicates
    let j = 0;
    while(j < (matchingSums.length/2)){
      matchingSums.pop();
      j++;
    }

    return matchingSums;
}
