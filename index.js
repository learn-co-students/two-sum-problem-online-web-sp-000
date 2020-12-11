function bruteForceTwoSum(arr, sum) {
    const values = {};
    const results = [];

    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (x !== i && arr[i] + arr[x] === sum) {
                let value = [arr[i], arr[x]].sort((a,b) => a-b).join("");
                if (!values[value]) {
                    values[value] = true;
                    results.push([arr[i], arr[x]]);
                }
            }       
        }
    }

    return results;
}

function binarySearchTwoSum(arr, sum) {
    let sorted = arr.sort((a,b) => a-b);
    let results = [];
    let values = {};

    for (let i = 0; i < sorted.length; i++) {
        let diff = sum - sorted[i];
        let sliced = sorted.slice(0,i).concat(sorted.slice(i+1));

        if (binaryMatch(sliced, diff)) {
            let value = [sorted[i], diff].sort((a,b) => a-b).join("");
            values[value] ? values[value] += 1 : values[value] = 1;

            if (values[value] === 1) {
                results.push([sorted[i], diff].sort((a,b) => a-b));
            }
        }
    }

    return results;
}

function binaryMatch(sortedArr, missingNum) {
    let start = 0;
    let end = sortedArr.length-1;
    let guessIndex = parseInt((sortedArr.length-1) / 2);

    while (start !== end) {
        if (missingNum > sortedArr[guessIndex]) {
            start = guessIndex;
            guessIndex = start + Math.round((end-start)/2);
        }
        else if (missingNum < sortedArr[guessIndex]) {
            end = guessIndex;
            guessIndex = start + parseInt((end-start)/2);
        }
        else {
            return true;
        }
    }

    return false;
}

function hashTwoSum(arr,sum) {
    let results = [];
    let hash = {};

    for (let num of arr) {
        let diff = Math.abs(num - sum);

        if (hash[diff]) {
            results.push([parseInt(num), diff].sort((a,b) => a-b));
        }

        hash[num] = true;
    }

    return results;
}