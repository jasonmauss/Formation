// Solution to Formation's Day 17 challenge/problem - TriangleLowestPath
// Prompt: Given a triangle array, return the minimum path sum from top to bottom. 
// For each step, you may move to an adjacent number of the row below. More formally, 
// if you are on index i on the current row, you may move to either index i or index i + 1 
// on the next row. For example, if given the following input:
/*
[
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]
*/
// Here, the result is 11 because of the path 2 + 3 + 5 + 1.

const triangleLowestPath = (triangleArray) => {
    
    let minimumPathSum = 0;
    let index = 0;

    minimumPathSum = triangleArray[0][index];

    for(let step = 1; step < triangleArray.length; step++) {
        const arrayValues = triangleArray[step];
        if(arrayValues[index] < arrayValues[index + 1]) {
            minimumPathSum += arrayValues[index];
        } else {
            minimumPathSum += arrayValues[index + 1];
            index++;
        }
    }

    return minimumPathSum;

}


// some test cases
console.log(triangleLowestPath([[2],[3,4],[6,5,7],[4,1,8,3]])); // 11 (2 + 3 + 5 + 1)