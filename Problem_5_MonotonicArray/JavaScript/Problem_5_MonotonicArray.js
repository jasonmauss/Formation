// Solution for Formation's problem #5 - Monotonically increasing array
// Given a rectangular 2D array of integers, return true if all rows and all columns 
// are monotonically increasing. This means that every successive value along all rows
// and columns must be AT LEAST as large as what came before.
// Example
// [[0, 0, 0, 1],
//  [1, 1, 1, 2],
//  [2, 3, 4, 5]]

const isMatrixMonotonic = (matrix) => {

    return false;

}


// some test cases
const shouldReturnTrue = [[0, 0, 0, 1], [1, 1, 1, 2], [2, 3, 4, 5]]; 
console.log(isMatrixMonotonic(shouldReturnTrue)); // true

const shouldReturnFalse = [[0, 0, 0, 1], [1, 1, 3, 2], [2, 3, 4, 5]];
console.log(isMatrixMonotonic(shouldReturnFalse)); // false