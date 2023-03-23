// Solution for Formation's day 4 problem - "Toeplitz Matrix"
// A Toeplitz Matrix is one where the values on every diagonal 
// are the same: Given a 2d matrix (multidimensional array), 
// return true if the input is a Toeplitz matrix and false otherwise.

const isToeplitz = (m) => {
    
    // go through the 2d matrix array using two loops, one
    // loop for the column, and one for the row.
    for(let rowIndex = 0; rowIndex < m.length; rowIndex++) {
        for(let columnIndex = 0; columnIndex < m[rowIndex].length; columnIndex++) {
            const matrixValue = m[rowIndex][columnIndex];

            // check for both indexes being > 0 because we will just check
            // every value that's got a matrix sibling above it and to the left.
            // We could reverse this logic with checking for the indexes + 1 but then
            // we would have to check for the indexes being inside the upper bounds
            // of the matrix, which is tougher and less performant
            if(columnIndex > 0 && rowIndex > 0 && 
                m[rowIndex - 1][columnIndex - 1] !== matrixValue) {
                    return false;
                }
        }
    }

    // put this here because we will only get here if we didn't
    // find a problem as we traversed the 2d matrix
    return true;
}

let toeplitzMatrix = [[1, 2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]];
console.log(isToeplitz(toeplitzMatrix)); // true

let notToeplitzMatrix = [[1, 2, 3, 4], [4, 2, 3, 1], [1, 4, 7, 5], [3, 5, 2, 4]];
console.log(isToeplitz(notToeplitzMatrix)); // false