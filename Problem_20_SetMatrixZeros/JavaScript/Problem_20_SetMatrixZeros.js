// Solution to Formation's Day 20 challenge/problem - Set Matrix Zeros
// Prompt: Given a rectangular matrix of numbers, find any position that is set to a zero 
// in the input and then replace all values on its row and column with zeros. This must be 
// done in-place, modifying the input matrix, not allocating any new space.
/*
For example:

1 2 3
4 5 6
7 8 0

Becomes:

1 2 0
4 5 0
0 0 0
*/

const setMatrixZeros = (matrix) => {
  
    const zeroColumns = new Set();
    const zeroRows = new Set();
    const totalRows = matrix.length;
    const totalColumns = matrix[0].length;

    for(let rowIndex = 0; rowIndex < totalRows; rowIndex++) {

        for(columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
            if(matrix[rowIndex][columnIndex] === 0) {
                zeroColumns.add(columnIndex);
                zeroRows.add(rowIndex);
                matrix[rowIndex].fill(0);
                break;
            }
        }
    }

    for(let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
        if(!zeroRows.has(rowIndex)) {
            for(const colIndex of zeroColumns) {
                matrix[rowIndex][colIndex] = 0;
            }
        }
    }

    return matrix;
}



// some test cases
console.log(setMatrixZeros([[1,2,3],[4,5,6],[7,8,0]])); // returns [[1,2,0],[4,5,0],[0,0,0]]
