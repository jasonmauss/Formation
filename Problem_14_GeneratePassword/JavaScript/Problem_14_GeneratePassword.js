// Solution to Formation's Day 14 challenge/problem - Generate Password
// Prompt: Given a set of characters (guaranteed to be unique) and a minimum and maximum length, 
// generate all possible passwords that meet the following criteria:
// The same characters cannot appear consecutively
// The same character can occur no more than twice in any password

// The output should be an array containing the passwords as strings. Return an empty array if no valid password can be generated.


const generatePassword = (characters, minlength, maxlength) => {
  
    // store the passwords generated
    const passwordCollection = [];

    const charStack = [];
    const charCounts = {};

    const manageCharacterStack = () => {
        if(charStack.length >= minlength && charStack.length <= maxlength) {
            passwordCollection.push(charStack.join(''));
        }

        if(charStack.length === maxlength) return;

        for(const char of characters) {
            const charCount = charCounts[char] || 0;
            if((charStack.length == 0 || charStack[charStack.length - 1] !== char) && charCount < 2) {
                charStack.push(char);
                charCounts[char] = charCount + 1;

                manageCharacterStack();

                charCounts[char]--;
                charStack.pop();
            }
        }
    };

    manageCharacterStack();

    return passwordCollection;

}




// some test cases
console.log(generatePassword(['a','b','c','d'], 4, 6));
// returns
// 60 items


console.log(generatePassword(['f','a','s','w','d'], 4, 10));
// returns
// 126,890 items