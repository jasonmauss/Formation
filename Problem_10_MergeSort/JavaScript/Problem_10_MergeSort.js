// Solution to Formation's day 10 problem/challenge
// Merge Sort
// Prompt: Implement merge sort on an array.

const mergeSort = (data) => {
  
    // base case: if the array has only one element or is empty, it's already sorted
    if (data.length <= 1) {
        return data;
    }

    // divide the array into two halves
    const middleIndex = Math.floor(data.length / 2);
    const leftHalf = data.slice(0, middleIndex);
    const rightHalf = data.slice(middleIndex);

    // recursively sort each half
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // merge the two sorted halves
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < sortedLeftHalf.length && rightIndex < sortedRightHalf.length) {
        if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
            mergedArray.push(sortedLeftHalf[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(sortedRightHalf[rightIndex]);
            rightIndex++;
        }
    }

    // add any remaining elements from the left or right half
    return mergedArray.concat(sortedLeftHalf.slice(leftIndex)).concat(sortedRightHalf.slice(rightIndex));

}



// some test cases
console.log(mergeSort([1,2,3,4,5])); // [1,2,3,4,5]
console.log(mergeSort([5,6,2,4,8,6,1,3,6,9,0])); // [0, 1, 2, 3, 4, 5, 6, 6, 6, 8, 9]
console.log(mergeSort([12,41,29,37,26,3,14,51,49])); // [3, 12, 14, 26, 29, 37, 41, 49, 51]