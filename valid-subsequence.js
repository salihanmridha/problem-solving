// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
//
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
//
// Sample Input
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// Sample Output
// true

function isValidSubsequence(array, sequence) {
    let arrIdx  = 0;
    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (sequence[seqIdx] == array[arrIdx]){
            seqIdx += 1;
        }

        arrIdx += 1;
    }
    // console.log(seqIdx)
    return seqIdx == sequence.length;
}

let firstResult = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
console.log(firstResult)


function isValidSubSequenceSolution2(array, sequence){
    let seqIdx = 0;

    for (let item of array){
        if (seqIdx == sequence.length){
            return true;
        }
        if (sequence[seqIdx] == item){
            seqIdx += 1;
        }
    }

    return seqIdx == sequence.length;
}

let secondResult = isValidSubSequenceSolution2([5, 1, 22, 25, 6, -1, 10, 8], [1, 6, -1, 10]);
console.log(secondResult)

function isValidSubsequenceSolution3(array, sequence) {
    // lets write a bad solution ;)
    let  arrIdx = 0;
    let result = 0;

    for (let item of sequence) {
        for ( arrIdx; arrIdx < array.length; arrIdx++) {
            if (item == array[arrIdx]) {
                result += 1;
                arrIdx += 1;
                break;

            }
        }
    }
    return result == sequence.length;
}

let thirdResult = isValidSubsequenceSolution3([5, 1, 22, 25, 6, -1, 10, 8], [1, 6, -1, 10]);
console.log(thirdResult)