// Solution for Formation's day 4 problem - "Toeplitz Matrix"
// A Toeplitz Matrix is one where the values on every diagonal 
// are the same: Given a 2d matrix (multidimensional array), 
// return true if the input is a Toeplitz matrix and false otherwise.

const isToeplitz = (m) => {
    return false;
}

let toeplitzMatrix = [[1, 2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]];
console.log(isToeplitz(toeplitzMatrix));

let notToeplitzMatrix = [[1, 2, 3, 4], [4, 2, 3, 1], [1, 4, 7, 5], [3, 5, 2, 4]];
console.log(isToeplitz(notToeplitzMatrix));