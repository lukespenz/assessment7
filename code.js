const perf = require('execution-time')();

const addToZero = (arr) => {
    let answers = []
    arr.forEach((e) => {
        for(let i = 0; i < arr.length; i++){
        answers.push(arr[i] + e)
        }
    })
    return answers.includes(0)
};

const test = [1, 2, 3]

// perf.start();                     // Starts timer
// addToZero(test);
// let results = perf.stop();  // Stops timer and save time results

// console.log(results.preciseWords)

//console.log(addToZero(test))

//runtime estimate: 68.96 μs
//time complexity: O(n^2)
//space complexity: O(1)

const hasUniqueChars = (str) => {
    let answer = 0
    let wrong = 0
    for(let j = 0; j < str.length; j++){
        for(let i = 1; i < str.length && i != j; i++){
        str[i] === str[j] ? answer = 1 : wrong++
        }
    }
    console.log(answer, wrong)
    return answer === 1 ? true : false
}

const string = 'Monday'

// perf.start();                     // Starts timer
// hasUniqueChars(string);
// let results = perf.stop();  // Stops timer and save time results

// console.log(results.preciseWords)

// console.log(hasUniqueChars(string))

//runtime estimate: 3.991 μs
//time complexity: O(n^2)
//space complexity: O(1)


const isPangram = (s) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
}

const sentence = "The quick brown fox jumps over the lazy dog!"
//console.log(isPangram(sentence))

// perf.start();                     // Starts timer
// isPangram(sentence);
// let results = perf.stop();  // Stops timer and save time results

// console.log(results.preciseWords)

//runtime estimate: 138.292 μs
//time complexity: O(n^2)
//space complexity: O(1)


const findLongestWord = (arr) => {
    let longestWord = ''
    arr.forEach((el) => {
        longestWord.length < el.length ? longestWord = el : false
    })
    return longestWord.length
}

const wordArr = ['hi', 'hello', 'california']
// console.log(findLongestWord(wordArr))

perf.start();                     // Starts timer
findLongestWord(wordArr);
let results = perf.stop();  // Stops timer and save time results

console.log(results.preciseWords)

//runtime estimate: 68.708 μs
//time complexity: O(n)
//space complexity: O(1)