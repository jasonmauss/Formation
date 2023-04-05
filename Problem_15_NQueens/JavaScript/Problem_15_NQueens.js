// Solution to Formation's Day 15 challenge/problem - NQueens
// prompt: Given an N*N board, place N queens on the board such that none can attack each other. 
// A queen can move an unlimited number of spaces in any direction: horizontal, vertical, or diagonal. 
// Return an N*N matrix of ‘.’ and ‘Q’ characters, a ‘Q’ where ever a queen is positioned.

const nQueens = (n) => {

    let boardMatrix = Array.from(Array(n), () => Array(n).fill('.'));
    
    // capture the board dimension values to use them where needed
    const totalRows = boardMatrix.length;
    const totalColumns = boardMatrix[0].length;

    // help us keep track of which rows and columns have queens
    const rowsWithQueens = new Set();
    const columnsWithQueens = new Set();

    const queenExistsOnRow = (rowPosition) => {
        return rowsWithQueens.has(rowPosition);
    }

    const queenExistsOnColumn = (columnPosition) => {
        return columnsWithQueens.has(columnPosition);
    }

    const queenExistsOnDiaganol = (rowPosition, columnPosition) => {

        let moveUp = rowPosition - 1,
            moveDown = rowPosition + 1,
            moveLeft = columnPosition - 1,
            moveRight = columnPosition + 1;

        // check from current position up to top left and down to bottom right
        // as well as from current position up to top right and down to bottom left
        // basically checking diaganols in an 'X' pattern within the board matrix
        while(moveUp >= 0 || moveLeft >= 0 || moveDown < totalRows || moveRight < totalColumns) {

            if(moveUp >= 0 && moveLeft >= 0 && boardMatrix[moveUp][moveLeft] === 'Q') return true;
            if(moveUp >= 0 && moveRight < totalColumns && boardMatrix[moveUp][moveRight] === 'Q') return true;
            if(moveDown < totalRows && moveLeft >= 0 && boardMatrix[moveDown][moveLeft] === 'Q') return true;
            if(moveDown < totalRows && moveRight < totalColumns && boardMatrix[moveDown][moveRight] === 'Q') return true;

            --moveUp;
            ++moveDown;
            --moveLeft;
            ++moveRight;
        }

        return false;
    }

    const queenExistsOnRowColumnOrDiaganol = (rowPosition, columnPosition) => {
        return queenExistsOnRow(rowPosition) || queenExistsOnColumn(columnPosition) 
                || queenExistsOnDiaganol(rowPosition, columnPosition); 
    };

    let queensPlacedOnBoard = 0;
    let startingColumnPosition = 0;
    let iterations = 0;

    while(queensPlacedOnBoard < n) {

        for(let currentRow = 0; currentRow < totalRows; currentRow++) {

            if(currentRow > 0) {
                startingColumnPosition = 0;
            } else {
                startingColumnPosition = iterations;
            }

            for(let currentColumn = startingColumnPosition; currentColumn < totalColumns; currentColumn++) {
                if(!queenExistsOnRowColumnOrDiaganol(currentRow, currentColumn)) {
                    boardMatrix[currentRow][currentColumn] = 'Q';
                    rowsWithQueens.add(currentRow);
                    columnsWithQueens.add(currentColumn);
                    queensPlacedOnBoard++;
                }
            }
        }

        // if we weren't able to place N queens on the board with the starting 
        // position, reset the board and bump the starting column position up by 1
        // and try it all over again.
        // If we wanted to return all possible solutions, we could just add the
        // current boardMatrix to a solution array or something that holds solutions
        // found, and reset things until iterations = totalColumns
        if(queensPlacedOnBoard < n) {
            boardMatrix = Array.from(Array(n), () => Array(n).fill('.'));
            queensPlacedOnBoard = 0;
            iterations++;
            rowsWithQueens.clear();
            columnsWithQueens.clear();
        }
    }

    return boardMatrix;
    
}


// some test cases
console.log(nQueens(4));
// returns: [
// [".", "Q", ".", ".", ],
// [".", ".", ".", "Q", ],
// ["Q", ".", ".", ".", ],
// [".", ".", "Q", ".", ]]


console.log(nQueens(5));
// returns: [
// ["Q", ".", ".", ".", ".",],
// [".", ".", "Q", ".", ".",],
// [".", ".", ".", ".", "Q",],
// [".", "Q", ".", ".", ".",],
// [".", ".", ".", "Q", ".",]]