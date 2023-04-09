// Solution for Formation's day 19 challenge/problem - Text Justification
// Prompt: Given an array of words (no leading or trailing whitespace) and the length of a line, 
// format these words in to lines that each are lineLength long and meet the following criteria:
/*
- At least one space must be between each pair of words on a single line
- The first character of the first word on a line must be the first character on that line
- If there is more than one word on a line, the last character of the last word must be last on that line
- If extra spaces are needed to fill the line up to the proper length, they must be evenly distributed between the words

For example:

words: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
lineLength: 12

Generates:

[
  "The    quick",
  "brown    fox",
  "jumps   over",
  "the lazy dog"
]
*/

const addSpacesBetweenWords = (wordString, lineLength) => {
    // trim any spaces off the end of the word
    wordString = wordString.trimEnd();
    wordArray = wordString.split(' ');
    spacesArray = new Array(wordArray.length - 1).fill('');
    spacesNeeded = lineLength - wordArray.join().length;
    spacesNeeded += wordArray.length - 1; // add in the need for a space between the words, but not after the last word

    while(spacesNeeded > 0) {
        for(let spaces in spacesArray) {

            if(spacesNeeded > 0) {
                spacesArray[spaces] += ' ';
                --spacesNeeded;
            }
        }
    }

    let spacedOutWord = '';
    for(let i = 0; wordArray.length > 0; i++) {
        if(wordArray.length > 1) {
            spacedOutWord += wordArray.shift() + spacesArray[i]
        } else {
            spacedOutWord += wordArray.shift();
        }
    }

    return spacedOutWord;

};

const textJustification = (words, lineLength) => {
  
    const justifiedWords = [];
    let currentBuffer = '';
    currentWord = 0;

    while(words.length > 0) {

        currentBuffer += words.shift() + ' ';

        // if we added the next word, would it exceed the line length?
        if(words.length > 0 && words[0].length + currentBuffer.length > lineLength) {
            justifiedWords.push(addSpacesBetweenWords(currentBuffer, lineLength));
            currentBuffer = '';
        // if stripping off the current ending space make it match exactly
        } else if (currentBuffer.length - 1 === lineLength) {
            justifiedWords.push(currentBuffer.substring(0, currentBuffer.length - 1));
        // what if the next word made it match the line length exactly?
        } else if (words.length > 0 && words[0].length + currentBuffer.length === lineLength) {
            justifiedWords.push(currentBuffer + words.shift());
            currentBuffer = '';
        // we are at the end of our word supply, so just work with what we've got in the
        // current buffer
        } else if (words.length === 0) {
            justifiedWords.push(addSpacesBetweenWords(currentBuffer, lineLength));
        // otherwise the next word would still be less than the line length
        // so just keep going in the loop
        } else {
            continue;
        }
    }

    return justifiedWords;

};



// some test cases
console.log(textJustification(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 12));
// returns
// [
// "The    quick",
// "brown    fox",
// "jumps   over",
// "the lazy dog"
// ]

console.log(textJustification(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16));
// returns
// [ 'The  quick brown',
//   'fox  jumps  over',
//   'the   lazy   dog'
// ]

console.log(textJustification(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 75));
// returns
// ['The     quick     brown     fox     jumps     over     the     lazy     dog']