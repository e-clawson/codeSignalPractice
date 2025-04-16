//We will be parsing strings and making type conversions.

/* 
Task Statement and Description

Our task for the day involves creating a JavaScript function called parseAndMultiplyNumbers(). 
This function is designed to accept a string as input. 
However, it's not just any string — the input we'll consider is a playful mix of numbers and words.

The purpose of this function is to analyze the input string, extract all the numbers, 
convert these numbers (currently string types) into integer data types, 
and then multiply all these numbers together. The final output? It's the product of all those numbers!

Here's an illustration for clarification. 

Given the input string "I have 2 apples and 5 oranges," 
our function should return the product of 2 and 5, which is 10.
*/ 

/*
Step-by-Step Solution Building: Step 1

The primary task is to parse the string and identify the numbers. 
To do that, let's create an empty string, num, 
to accumulate digits and an array numbers to collect all the numbers we find:
*/ 

let inputString = "I have 2 apples and 5 oranges";
let num = "";
let numbers = [];

/*
Step-by-Step Solution Building: Step 2

The next step requires iterating through the input string character by character. 
When we encounter a digit, we append it to our num string. 
If a character isn’t a digit and num isn’t empty, it means we've reached the end of a number.

At this point, we convert num to an integer, add it to the numbers array, and reset num to an empty string. 
If the character isn’t a digit and num is empty, we simply skip and progress.

To check if a character is a digit, we use the isNaN() function. 
The isNaN() function returns true if a value is NaN (Not-a-Number) and false otherwise. 
However, since we want to know if a character is a digit, we use the negation !isNaN(ch). 
This will return false for non-digit characters and true for digits. 
Additionally, we check that the character isn't a space (ch !== ' ') 
to avoid spaces being counted as numbers.
*/

for (let ch of inputString) {
    if (!isNaN(ch) && ch !== ' ') { // Check if character is a digit
        num += ch;
    } else if (num !== "") {
        numbers.push(parseInt(num)); // Convert num to integer and add it to numbers array
        num = "";
    }
}
// After the loop, we must check if 'num' is not empty
// because it indicates that the last part of the string contains a number.
if (num !== "") {
    numbers.push(parseInt(num));
}
console.log(numbers); // Output should be [2, 5]

/*
Step-by-Step Solution Building: Step 3

Finally, we multiply all the numbers in the numbers array together. 
The multiplication result gets stored in the result variable.
*/

let result = 1;
for (let number of numbers) {
    result *= number;
}
console.log(result); // Output should be 10

//Full Solution
//Bringing together all the steps, our final JavaScript solution manifests as follows:

function parseAndMultiplyNumbers(inputString) {
    let num = "";
    let numbers = [];

    for (let ch of inputString) {
        if (!isNaN(ch) && ch !== ' ') { // Check if character is a digit
            num += ch;
        } else if (num !== "") {
            numbers.push(parseInt(num)); // Convert num to integer and add it to numbers array
            num = "";
        }
    }
    if (num !== "") {
        numbers.push(parseInt(num));
    }

    let result = 1;
    for (let number of numbers) {
        result *= number;
    }
    return result;
}

// Call the function
console.log(parseAndMultiplyNumbers("I have 2 apples and 5 oranges"));

//This solution also caters to numbers situated at the end of the input string.

//-------------- practice examples: ----------------

//example 1: 
/*
Let's imagine you are given a string that contains a series of words separated by a hyphen ("-"). 
Each word in the string can be a lowercase letter from 'a' to 'z' or a set of digits 
representing a number from 1 to 26. Your task is to parse this string and swap the type of each word: 
convert numbers into their corresponding English alphabet letters, 
and letters into their numerical equivalents. 
This means '1' should convert to 'a', and 'a' should convert to '1'.

You need to return a new string with the converted words, rejoined with hyphens.

Ensure you maintain the original order of the words from the input string in your output string.

The input string's length should range from 1 to 1000 for this exercise. 
The string will never be empty, always containing at least one valid lowercase letter or numerical word.

Remember, the transformation of words should be limited to converting numbers 
from 1 to 26 into their corresponding letters from 'a' to 'z', and vice versa.

Example

For the input string "1-a-3-c-5", the output should be "a-1-c-3-e".
*/

function solution(s) {
    // TODO: Implement the function that could solve the task
    let convertedString = "";
    let newArray = [];
    let words = s.split("-");
    words.map(word =>{
        if (/^\d+$/.test(word)){
            let letter = String.fromCharCode('a'.charCodeAt(0) + parseInt(word) - 1);
            newArray.push(letter);
        } if(/^[a-z]$/.test(word)) {
            let number = word.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            newArray.push(number);
        }
        convertedString = newArray.join("-")
        
    })
    return convertedString
}

module.exports = { solution };

//example 2: 
/* 
You are given a string s of length n, with n ranging from 1 to 500 inclusive. 
This string represents the complex and jumbled record of a sports game. 
It combines player names and scores but lacks a uniform structure. 
The player names consist of words made up of lowercase English alphabets (a-z), 
while the scores are integers ranging from 1 to 100 inclusive.

Your mission involves writing a JavaScript function function parseAndSumScores(s) {}. 
This function should parse the given string, isolate the integers representing player scores, 
and return the sum of these scores.

For instance, for the input string, "joe scored 5 points, while adam scored 10 points and bob scored 2, 
with an extra 1 point scored by joe", your function should return the sum 5 + 10 + 2 + 1, which totals 18.
*/ 

function parseAndSumScores(s) {
    // TODO: implement
    //isolate the numbers, and add them together
    //return a final score sum 
    //step 1 - split the string by " "
    //iterate over the new array, check for numbers 
    //if it is a number, add it to score sum 
    let scoreSum = 0; 
    let num = '';
    
    for (i=0; i < s.length; i++){
        let character = s[i];
        if(/\d/.test(character)){ //test if it is a number 
            num += character; 
        } else if (num != ''){ //test if character 
            scoreSum += Number(num); 
            num = '';
        }
    }
    if (num != ''){
        scoreSum += Number(num);
    }
    return scoreSum;
}

module.exports = { parseAndSumScores };

//example 3: 

/*

You are provided with a string of alphanumeric characters in which each number, 
regardless of the number of digits, is always followed by at least one alphabetic 
character before the next number appears. The task requires you to return a transformed 
version of the string wherein the first alphabetic character following each number is moved 
to a new position within the string and characters in between are removed.

Specifically, for each number in the original string, identify the next letter that follows it, 
and then reposition that character to directly precede the number. 
All spaces and punctuation marks between the number and the letter should be removed.

The length of the string s ranges from 3 to 10^6 
(inclusive), and the string contains at least one number. 
The numbers in the string are all integers and are non-negative.

Here is an example for better understanding:

Given the string:

"I have 2 apples and 5! oranges and 3 grapefruits."

The function should return:

"I have a2pples and o5ranges and g3rapefruits."

In this instance, the character 'a' following the number 2 is moved to come before the 2, 
the 'o' succeeding the 5 is placed before the 5, and the 'g' subsequent to the 3 is repositioned to precede the 3. 
Punctuation marks and spaces are disregarded as they are not alphabetic characters.

Please note that the operation should maintain the sequential order of the numbers and the rest of the text. 
Considering this, the task is not solely about dividing a string into substrings but also about modifying them. 
This will test your expertise in Java string operations and type conversions.
*/ 


function solution(input) {
    // TODO: implement your solution here
    
    let finalString = ""; 
    let number = ""; //can also stay a string 
    let letter = "";
    let letterFound = false;
    
    for (let i=0; i < input.length; i++){ 
        let character = input[i];
        
        if (/\d/.test(character)){
            number += character;  
            letterFound = false;
        } else if (number != "" && /[A-Za-z]/.test(character)){
            finalString += character + number;
            number = ""; 
            letterFound = true; 
        } else if (number === ""){
            finalString += character;
        }
    }

    return finalString;
}

module.exports.solution = solution;