// Solution to Formation's Day 7 challenge/problem
// Given a string, return true if the letters can be re-arranged 
// to make a palindrome using every letter. Otherwise, return false.

const isPalindromeAnagram = (word) => {
    
    const letterCounts = {};

    for(let char of word) {
        if(!letterCounts[char]) {
            letterCounts[char] = 1;
        } else {
            letterCounts[char]++;
        }
    }

    // number of letters with an odd number of total instances
    let oddCountLetters = 0;

    for(const property in letterCounts) {
        if(letterCounts[property] % 2 === 1) {
            oddCountLetters++;
        }
    }

    return oddCountLetters <= 1;

}




// some test cases
console.log(isPalindromeAnagram('fofop')); // true
console.log(isPalindromeAnagram('fofoprrrrnnss')); // true
console.log(isPalindromeAnagram('fooprrrrns')); // false
console.log(isPalindromeAnagram('fff')); // true
console.log(isPalindromeAnagram('fffo')); // false