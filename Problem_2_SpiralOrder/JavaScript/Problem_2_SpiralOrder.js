
const rectangularMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

const spiralTraversal = (rectangularMatrix) => {
  
    // if the matrix is empty, just return an empty array
    if(rectangularMatrix.length === 0) return [];

    // this will hold the values that will be returned
    const linearArray = [];
    
    // keep track of our start and end positions as we go
    let columnStart = 0, columnEnd = rectangularMatrix[0].length - 1;
    let rowStart = 0, rowEnd = rectangularMatrix.length - 1;

    // going to use something to keep track of which direction
    // we will be heading
    let traversalDirection = 'forward'

    // this "outer" loop condition will have us keep looping until 
    // we have reached a point where we can't turn or rotate anymore
    // Which is when our start and end positions will be the same
    while(columnStart <= columnEnd && rowStart <= rowEnd) {

        // will loop based on the current traversal direction
        switch(traversalDirection) {

            case 'forward':
                for(let position = columnStart; position <= columnEnd; position++) {
                    linearArray.push(rectangularMatrix[rowStart][position]);
                }
                rowStart++;
                traversalDirection = 'down';
                break;

            case 'down':
                for(let position = rowStart; position <= rowEnd; position++) {
                    linearArray.push(rectangularMatrix[position][columnEnd]);
                }
                columnEnd--;
                traversalDirection = 'backwards';
                break;

            case 'backwards':
                for(let position = columnEnd; position >= columnStart; position--) {
                    linearArray.push(rectangularMatrix[rowEnd][position]);
                }
                rowEnd--;
                traversalDirection = 'up';
                break;

            case 'up':
                for(let position = rowEnd; position >= rowStart; position--) {
                    linearArray.push(rectangularMatrix[position][columnStart]);
                }
                columnStart++;
                traversalDirection = 'forward';
                break;
        }
    }

    return linearArray;

}

console.log(spiralTraversal(rectangularMatrix)); // [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]