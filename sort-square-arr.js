

// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
//
// Sample Input
// array = [1, 2, 3, 5, 6, 8, 9]
// Sample Output
// [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
    // Write your code here.
    let result = [];
    let square = null;

    for (let item of array) {
        square = item * item;
        result.push(square);
    }

    return result.sort(function(a, b){
        return a - b;
    });
}

let firstResult = sortedSquaredArray([-71, 2, 3, 5, 6, 8, 9]);
console.log(firstResult)

//time complexity: o(n) | o(n) space complexicity
function sortedSquaredArraySolution2(array) {
    let newArr = new Array(array.length);
    let leftPointer = 0;
    let rightPointer = newArr.length - 1;

    for (let i = newArr.length -1; i >= 0; i--){
        if ((array[leftPointer] ** 2) > (array[rightPointer] ** 2) ){
            newArr[i] = array[leftPointer] ** 2;
            leftPointer += 1;
        } else {
            newArr[i] = array[rightPointer] ** 2;
            rightPointer -= 1;
        }
    }

    return newArr;

}

let secondResultt = sortedSquaredArraySolution2([-7, 2, 3, 5, 6, 8, 9]);
console.log(secondResultt)