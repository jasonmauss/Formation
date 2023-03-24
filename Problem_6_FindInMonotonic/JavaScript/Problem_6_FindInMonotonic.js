// Solution for Formation's day 6 challenge - IsInMonotonic
// Given a matrix that is monotonically increasing along all rows and columns,
// as well as a value, k, return true if the value exists in the matrix and false otherwise.

const findInMonotonic = (matrix, k) => {

    return false;

}

// some test cases
const matrix1 = [[0, 0, 0, 1],  [1, 1, 1, 2],  [2, 3, 4, 5]];
console.log(findInMonotonic(matrix1, 4)); // true;

const matrix2 = [[0, 0, 0, 1],  [1, 1, 1, 2],  [2, 3, 4, 5]];
console.log(findInMonotonic(matrix2, 6)); // false;