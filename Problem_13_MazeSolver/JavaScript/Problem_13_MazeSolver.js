// Solution to Formation's Day 13 challenge/problem - Maze Solver
// Prompt: Given a two-dimensional array that contains only three values, "H" for 
// hallway, "_" for wall, and exactly one "G" for goal. This represents a maze. 
// The entrance to the maze is always in the top left corner at index 0, 0. 
// Return an array which is a list of (row, column) index pairs that represent a path 
// from the entrance to the goal such that all of the values are "H". No ghosts walking 
// through walls, please. Each move must be horizontal or vertical, no diagonals.


const mazeSolver = (maze) => {
  
    const rows = maze.length;
    const cols = maze[0].length;
    const visited = new Set();
    
    // backtracking helper function that takes in the current row,
    // column, and path and recursively explores possible directions
    // from the current cell.
    const backtrack = (row, col, path) => {

        // if the current cell is out of bounds, is already visited, or is a wall, return false
        if (row < 0 || row >= rows || col < 0 || col >= cols || maze[row][col] === '_' || visited.has(`${row},${col}`)) {
            return false;
        }
      
        // if the current cell is the goal, add the current cell to the
        // path and return true
        if (maze[row][col] === 'G') {
            path.push([row, col]);
            return true;
        }
      
        // add the current cell to the collection of visited cells and
        // push the cell coordinates on to the path
        visited.add(`${row},${col}`);
        path.push([row, col]);
      
        // if calling this function on neighboring cells returns true, keep
        // exploring the path we're on.
        if (backtrack(row - 1, col, path) || backtrack(row + 1, col, path) ||
            backtrack(row, col - 1, path) || backtrack(row, col + 1, path)) {
            return true;
        }
      
        // if the current cell and all neighboring cells end up leading to a wall
        // or out of bounds or an already visited cell, remove the current cell
        // from the path and return false
        path.pop();
        return false;
    }
    
    const path = [];

    backtrack(0, 0, path);

    return path;

}

// some test cases
const testMaze1 = [
  ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'G'],
  ['H', '_', 'H', '_', '_', 'H', '_', '_', '_'],
  ['H', '_', 'H', 'H', '_', 'H', '_', 'H', 'H'],
  ['_', '_', '_', 'H', '_', 'H', '_', 'H', '_'],
  ['H', 'H', 'H', 'H', '_', 'H', '_', 'H', '_'],
  ['H', '_', '_', 'H', '_', 'H', '_', 'H', 'H'],
  ['H', 'H', '_', '_', '_', 'H', 'H', 'H', '_'],
  ['H', '_', 'H', 'H', 'H', 'H', '_', '_', 'H'],
  ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'H'],
];

console.log(mazeSolver(testMaze1)); 
// returns 
//[
//    [ 0, 0 ], [ 0, 1 ], [ 0, 2 ],
//    [ 1, 2 ], [ 2, 2 ], [ 2, 3 ],
//    [ 3, 3 ], [ 4, 3 ], [ 4, 2 ],
//    [ 4, 1 ], [ 4, 0 ], [ 5, 0 ],
//    [ 6, 0 ], [ 7, 0 ], [ 8, 0 ],
//    [ 8, 1 ], [ 8, 2 ], [ 7, 2 ],
//    [ 7, 3 ], [ 7, 4 ], [ 7, 5 ],
//    [ 6, 5 ], [ 5, 5 ], [ 4, 5 ],
//    [ 3, 5 ], [ 2, 5 ], [ 1, 5 ],
//    [ 0, 5 ], [ 0, 6 ], [ 0, 7 ],
//    [ 0, 8 ]
//  ]

const testMaze2 = [
    ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'G'],
    ['H', '_', 'H', '_', '_', 'H', '_', '_', '_'],
    ['H', '_', 'H', '_', '_', 'H', '_', 'H', 'H'],
    ['H', '_', '_', 'H', '_', 'H', '_', 'H', '_'],
    ['H', 'H', 'H', 'H', '_', 'H', '_', 'H', '_'],
    ['H', '_', '_', 'H', '_', 'H', '_', 'H', 'H'],
    ['H', 'H', '_', 'H', '_', 'H', 'H', 'H', '_'],
    ['H', '_', '_', 'H', 'H', 'H', '_', '_', 'H'],
    ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'H'],
  ];
  
 console.log(mazeSolver(testMaze2)); 
 // returns
 //[
 //  [ 0, 0 ], [ 1, 0 ], [ 2, 0 ],
 //  [ 3, 0 ], [ 4, 0 ], [ 4, 1 ],
 //  [ 4, 2 ], [ 4, 3 ], [ 5, 3 ],
 //  [ 6, 3 ], [ 7, 3 ], [ 7, 4 ],
 //  [ 7, 5 ], [ 6, 5 ], [ 5, 5 ],
 //  [ 4, 5 ], [ 3, 5 ], [ 2, 5 ],
 //  [ 1, 5 ], [ 0, 5 ], [ 0, 6 ],
 //  [ 0, 7 ], [ 0, 8 ]
 //]