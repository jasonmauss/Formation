// Solution for Formation's problem #5 - Monotonically increasing array
// Given a rectangular 2D array of integers, return true if all rows and all columns 
// are monotonically increasing. This means that every successive value along all rows
// and columns must be AT LEAST as large as what came before.
// Example
// [[0, 0, 0, 1],
//  [1, 1, 1, 2],
//  [2, 3, 4, 5]]

const isMatrixMonotonic = (matrix) => {

    if(matrix.length === 0 || matrix[0].length === 0) return false;

    rowCount = matrix.length;
    columnCount = matrix[0].length;

    for(let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for(let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const currentValue = matrix[rowIndex][columnIndex];

            if(rowIndex > 0 && matrix[rowIndex - 1][columnIndex] > currentValue) {
                return false;
            }

            if(columnIndex > 0 && matrix[rowIndex][columnIndex - 1] > currentValue) {
                return false;
            }
        }
    }

    return true;

}


// some test cases
const shouldReturnTrue = [[0, 0, 0, 1], [1, 1, 1, 2], [2, 3, 4, 5]]; 
console.log(isMatrixMonotonic(shouldReturnTrue)); // true

const shouldReturnFalse = [[0, 0, 0, 1], [1, 1, 3, 2], [2, 3, 4, 5]];
console.log(isMatrixMonotonic(shouldReturnFalse)); // false