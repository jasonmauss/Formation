// Solution to Formation's day 9 challenge/problem - BinarySearch
// Implement binary search on an array. Return the index of the value if found and -1 otherwise.

const binarySearch = (data, k) => {
  
    // we are going to assume the array is already sorted
    // in ascending order so we won't sort it here. If it
    // were not sorted we would need to do that first before
    // doing a binary search on it.

    let startPosition = 0;
    let endPosition = data.length;

    // find the middle between start and end and if the value in
    // that position is greater than k, we make the mid point the new endPosition.
    // If that position has a value less than k, we make the mid point the new startPosition (+ 1).
    // Then we just keep repeating that until we find the value or don't find it.
    while(startPosition < endPosition) {
        let middlePosition = Math.floor((startPosition + endPosition) / 2);
        let middleValue = data[middlePosition];

        if(middleValue === k) return k;
        
        if(middleValue < k) {
            startPosition = middlePosition + 1;
        } else {
            endPosition = middlePosition;
        }
    }

    // execution should only reach this return statement if the value
    // was never found in the while loop above
    return -1;
}






// some test cases
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 5)); // 5
console.log(binarySearch([1,2,3,4,6,7,8,9,10,11,12], 5)); // -1