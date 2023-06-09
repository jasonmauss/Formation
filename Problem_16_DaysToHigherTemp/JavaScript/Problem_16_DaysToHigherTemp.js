// Solution to Formation's Day 16 challenge/problem - DaysToHigherTemp
// Prompt: Given an array of daily high temperatures for a city, produce
// a new array as output where each value is the number of days forward 
// that has a temperature higher than this day. All of the temperature values 
// are normal earth temperatures.


// For example, if the daily highs are [50, 55, 53, 52, 60, 65, 63], then the 
// result should be [ 1,  3,  2,  1,  1,  0,  0]. The last two values are special 
// cases because there are no days in the future predicted to be hotter.

const daysToHigherTemp = (dailyHighs) => {
  
    const daysUntilHigherTemp = [];

    for(let currentDay = 0; currentDay < dailyHighs.length; currentDay++) {
        let daysElapsed = 1;
        let higherTempFound = false;
        for(let futureDays = currentDay + 1; futureDays < dailyHighs.length; futureDays++) {
            if(dailyHighs[futureDays] > dailyHighs[currentDay]) {
                daysUntilHigherTemp.push(daysElapsed);
                higherTempFound = true;
                break;
            } else {
                daysElapsed++;
                continue;
            }
        }
        if(!higherTempFound) daysUntilHigherTemp.push(0);
    }

    return daysUntilHigherTemp;

}





// some test cases
console.log(daysToHigherTemp([50, 55, 53, 52, 60, 65, 63])); // [ 1,  3,  2,  1,  1,  0,  0]