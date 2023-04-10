// Solution to Formation's Day 21 challenge/problem - Are Positions Safe
// Prompt: This problem takes two arrays of points as input. Each entry in the queens 
// array is an (x, y) pair on a chessboard where a queen is located. There are no other 
// pieces on the board.

// Each of the points in the positions array also an (x, y) of a square that is currently empty.

// Return a new array of length equal to that of the positions array. Each entry is a boolean value that 
// is true if that position is safe from attack.

// Remember any of the queens can attack along vertical, horizontal, and diagonal directions and any number 
// of spaces. The board is rectangular and is large enough for all of the queens and positions to be valid.



const arePositionsSafe = (queens, positions) => {
  
    const rowsWithQueens = new Set();
    const columnsWithQueens = new Set();
    const upperDiaganols = new Set();
    const lowerDiaganols = new Set();

    for(const queen of queens) {

        rowsWithQueens.add(queen[0]);
        columnsWithQueens.add(queen[1]);
        upperDiaganols.add(queen[1] - queen[0]);
        lowerDiaganols.add(queen[0] + queen[1]);
    }

    const positionsSafeOrNot = [];

    for(const position of positions) {
        const positionSafe =
            rowsWithQueens.has(position[0]) ||
            columnsWithQueens.has(position[1]) ||
            upperDiaganols.has(position[1] - position[0]) ||
            lowerDiaganols.has(position[0] + position[1])
        
        positionsSafeOrNot.push(!positionSafe);
    }

    return positionsSafeOrNot;

}

let queenPositions = [[0,1],[1,3],[2,0],[3,2]];
let emptyPositions = [[1,2],[0,3],[2,2],[3,3]];
// some test cases
console.log(arePositionsSafe(queenPositions, emptyPositions)); // returns [false, false, false, false]


queenPositions = [[1,2],[2,4],[4,3]];
emptyPositions = [[0,0],[1,4],[2,3],[3,0],[3,1],[5,0]];
// some test cases
console.log(arePositionsSafe(queenPositions, emptyPositions)); // returns [true, false, false, false, true, true]