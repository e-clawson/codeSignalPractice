/* Introduction

or today's lesson, you will learn how to access characters 
from a string following a distinctive pattern. 
*/

/* Task Statement

Imagine this: You receive a string from which you need to extract characters. 
However, the sequence in which you select them diverges from the norm. 
You start with the first character, then select the last character, 
move to the second character, then choose the second-to-last character, 
and continue this pattern until there are no characters left.
Quite a mind-bender, isn't it?
*/

//Here's what we mean:

//You are required to craft a JavaScript function:

function solution(inputString) {
    // function implementation
}

/* This function takes inputString as a parameter, 
a string of lowercase English alphabet letters ('a' to 'z'), 
with a length ranging between 1 and 100 characters. 
The function then returns a new string, 
fashioned from the input string but with characters selected 
in the pattern we described above.

For example, if the inputString is "abcdefg", 
the function should return "agbfced".
*/

/* Solution Building: Step 1 - Initialization

Before we delve into the problem-solving aspect, 
let's arrange our result store. 

We initiate a variable, result, 
as an empty array to stockpile the output.
*/

function solution(inputString) {
    let result = [];
}

/* Step 2 - Looping over the string

Upon initialization, we need to traverse the inputString. 
JavaScript furnishes a for loop to iterate over all elements 
in a string efficiently.

Now, the question arises:
 What is the requisite number of iterations for our loop? 
 Given that we select two characters per iteration — 
 one from the beginning and one from the end — 
 we need the loop to run for half of the string's length 
 if the length is even, or half the length plus one if it's
  odd to include the middle character.

We can realize this by employing Math.ceil(inputString.length / 2). 
This ensures that the loop iterates for half the length 
if it is even and half the length plus one if it's odd.

Here's our function thus far:
*/

function solution(inputString) {
    let result = [];
    let length = inputString.length;
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        // Implementation in next step
    }
}

/* Step 3 - Adding Characters to Result
Now that we are nested inside our loop, 
we can select characters and add them to our result.

First, we fetch the character from the beginning of the input string 
by calling inputString.charAt(i), and append this to our result.

Next, we secure the character from the end of the input string. 
We compute its index using length - 1 - i. 
However, we must make certain that we only add this character if 
it's different from the one we've selected from the start. 
This situation can arise when the string's length is odd, 
and we encounter the middle character. 

Therefore, we only append it if length - 1 - i is not equal to i.

Incorporating these steps, our function evolves to:
*/

function solution(inputString) {
    let result = [];
    let length = inputString.length;
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        result.push(inputString.charAt(i));
        if (length - 1 - i !== i) {
            result.push(inputString.charAt(length - 1 - i));
        }
    }
    return result.join('');
}

// Example usage
let inputString = "abcdefg";
let outputString = solution(inputString);
console.log(outputString);  // Outputs: agbfced

//And there you have it, our function is now complete!

// ---------------- Practice: ------------------------

//Example 1: 

/* In this task, you are given a string composed of lowercase English alphabet letters ('a' to 'z'). 
The length of the string will range from 1 to 100 characters. 

Your challenge is to create a new string resulting from a unique order of 
character selection from the original string.

You need to develop a JavaScript function, function specialOrder(inputString), 
which takes inputString as an argument. x 
The resulting string begins with the last character of the inputString, 
then selects the second-to-last character, 
continuing in reverse order until you reach the middle character of the string. 
Then, start with the first character of the inputString, proceed to the second character, 
and continue in this manner until you reach the middle character.

For example, if the inputString is "abcdefg", the function should return "gfedabc".

Keep in mind the following constraints while creating your function:

The input string contains only lowercase English letters ('a' to 'z').
The length of the input string is between 1 and 100, inclusive. */

function specialOrder(inputString) {
    // TODO: Implement function
    let result = []; // initialize a variable where we can store the result 
    let length = inputString.length;
    for (let i = 0; i < Math.ceil(length / 2); i++) {//Math.ceil(inputString.length / 2) will get us to the halfway point
        result.push(inputString.charAt(length - 1 - i));
    } 
    for (let i = 0; i < Math.ceil((length -1 )/ 2); i++) {
        result.push(inputString.charAt(i));
    } 
return result.join('');
}

module.exports = { specialOrder };

//example 2: 

/* 
You are provided with a string of n lowercase English alphabet letters (from 'a' to 'z'), 
where n ranges from 1 to 100, inclusive. 

You must create a new string by selecting characters from the given string in a specific order: 
select each character that comes k characters after the previous selection in the string. 
If you reach the end of the string, you should continue from the beginning.

Write a JavaScript function, function repeatCharJump(inputString, step). 
The function takes two parameters: inputString and step, 
where inputString is the string you are working with, 
and step is an integer that denotes the number of characters to skip with each jump. 
The value of step ranges from 1 to the length of the input string. 
The function should return a newly formed string consisting of characters 
selected in the order dictated by the jump length step.

For example, if inputString is "abcdefg" and step is 3, the function should return "adgcfbe". 
This is because after 'a', comes 'd' (3 characters after 'a'),
followed by 'g' (3 characters after 'd', circling back to the start of the string after 'g'), and so on.

Note: You should continue jumping from the start of the string when you reach the end.

For this task, assume that you need not use a character more than once. 
When you have traversed all the characters at least once, 
you can stop and return the output string as it is. 
It is guaranteed, that the inputs will be given in a way, that following the traversal pattern,
you'll traverse all the characters.
*/

function repeatCharJump(inputString, step) {
    // TODO: Implement the solution to generate n-length string as per given instructions.
    // You can use the string concatenation to store characters.
    let result = ''; // empty variable to store the string in 
    // loop over the string, 
    let currentIndex = 0;
    while (result.length < inputString.length){
        result += inputString[currentIndex];
        currentIndex = (currentIndex + step) % inputString.length;
    }
    return result;
}

module.exports = { repeatCharJump };

//this one was really hard and I failed badly. I think I am getting tired but I feel like I cant stop 
