// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
//
// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
//
// You can assume that there will be at most one pair of numbers summing up to the target sum.
//
// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
//
// Sample Output
// [-1, 11] // the numbers could be in reverse order

function twoNumberSumFirstSolution(array, targetSum){
    let nums = {};

    for (i = 0; i < array.length; i++){
        let x = array[i];
        let y = targetSum - x;

        if (y in nums) {
            return [x, y];
        }

        nums[x] = true;
    }

    return [];
}

let firstResult = twoNumberSumFirstSolution([3, 5, -4, 8, 11, 1, -1, 6], 10);
console.log(firstResult)

function twoNumberSumSecondSolution(array, targetSum){
    let xIndex = 0;
    let yIndex = array.length - 1;

    let sortedArr = array.sort(function (a, b) {
        return a - b;
    });

    while (xIndex < yIndex) {
        let currentSum = sortedArr[xIndex] + sortedArr[yIndex];

        if (currentSum == targetSum) {
            return [sortedArr[xIndex], sortedArr[yIndex]];
        } else if(currentSum > targetSum) {
            yIndex -= 1;
        } else if(currentSum <  targetSum){
            xIndex += 1;
        }
    }

    return [];
}

let secondResult = twoNumberSumSecondSolution([3, 5, -4, 8, 11, 1, -1, 6], 10);
console.log(secondResult)