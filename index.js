function bruteForceTwoSum(array, sum) {
    let integers = [];

    for (const num of array) {
        let term = array.find( (integer) => integer + num === sum )

        if (term && !integers.flat().includes(term)) {
            integers.push([num, term]);
        }
    }

    return integers;
}

function binaryMatch(array, number) {
    let midpoint = Math.floor(array.length/2);

    if (array[midpoint] === number) {
        return true;
    } else if (array[midpoint] < number && array.length > 1) {
        let secondHalf = array.slice(midpoint)
        return  binaryMatch(secondHalf, number) 
    } else if (array[midpoint] > number && array.length > 1) {
        let firstHalf = array.slice(0, midpoint);
        return binaryMatch(firstHalf, number);
    } else {
        return false;
    }
}

function binarySearchTwoSum(array, sum) {
    let sortedArray = array.sort();
    let integers = [];

    sortedArray.map( function(int) {
        let neededNum = sum - int;

        if (binaryMatch(sortedArray, neededNum) && !integers.flat().includes(neededNum)) {
            let pair = [int, neededNum]
            integers.push(pair);
        };
    })

    return integers;
}

function hashTwoSum(array, sum) {
    let hash = {};
    let integers = [];

    array.map( (int) => hash[int] = true);

    array.map( function(int) {
        let neededNum = sum - int;

        if (hash[neededNum] && !integers.flat().includes(neededNum)) {
            let pair = [int, neededNum];

            integers.push(pair);
        }
    })

    return integers;
}