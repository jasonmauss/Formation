// Solution for Formation's day 6 challenge - IsInMonotonic
// Given a matrix that is monotonically increasing along all rows and columns,
// as well as a value, k, return true if the value exists in the matrix and false otherwise.

const findInMonotonic = (matrix, k) => {

    if(matrix.length === 0) return false;

    rowCount = matrix.length;
    columnCount = matrix[0].length;

    if(matrix[rowCount - 1][columnCount - 1] < k) return false;

    // this is kind of like a binary search in a way
    // except the start point isn't in the middle, it's at
    // the bottom
    let currentRow = rowCount - 1;
    let currentColumn = 0;

    while(currentColumn < columnCount && currentRow >= 0) {
        let currentValue = matrix[currentRow][currentColumn];
        if(currentValue === k) return true;

        if(currentValue < k) {
            currentColumn++;
        } else {
            currentRow--;
        }
    }

    return false;

}

// some test cases
const matrix1 = [[0, 0, 0, 1],  [1, 1, 1, 2],  [2, 3, 4, 5]];
console.log(findInMonotonic(matrix1, 4)); // true;

const matrix2 = [[0, 0, 0, 1],  [1, 1, 1, 2],  [2, 3, 4, 5]];
console.log(findInMonotonic(matrix2, 6)); // false;