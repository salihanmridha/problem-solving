function solution(nums) {
    let t = 0;
    let newNumString = null;

    let sortedNums = [...nums].sort(function(a, b){
        return a - b;
    }).toString();


    for(let i = 0; i < nums.length - 1; i++){
        const first = nums.shift();
        nums.push(first);
        t += 1;

        newNumString = nums.toString();
        if (newNumString == sortedNums){
            return t;
        }

    }


    return -1;
}

console.log(solution([3,4,5,1,2]));



function lineThroughPoints(points) {
    let pointsSum = [];
    let count = 0;
    for (let index = 0; index < points.length; index++) {
        // let idxIncrement = 0;
        //
        // if (points[index][0] + points[index][1] in pointsSum){
        //     idxIncrement = pointsSum[points[index][0] + points[index][1]];
        // }
        // // console.log(idxIncrement)
        // pointsSum[points[index][0] + points[index][1]] = idxIncrement + 1;

        pointsSum.push(points[index][0] + points[index][1]);
    }

    // pointsSum.sort(function (a, b){
    //     return b - a;
    // });

    console.log(pointsSum)

    return pointsSum[0];
}

console.log(lineThroughPoints([
    [1, 1],
    [2, 2],
    [3, 3],
    [0, 4],
    [-2, 6],
    [4, 0],
    [2, 1],
]));

