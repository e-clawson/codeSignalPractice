/* today, we'll learn how to identify consecutive groups of identical characters in a string */

/* 
Task Statement

In this lesson, your objective is to write a JavaScript function 
that accepts a string as input and identifies all consecutive groups 
of identical characters within it.

A group is defined as a segment of the text wherein the same character is repeated consecutively.

Your function should return an array of strings. 
Each string will consist of the repeating character and the length of its repetition, 
joined by a colon (:). 

For example, if the input string is "aaabbcccaae",
your function should output: ["a:3", "b:2", "c:3", "a:2", "e:1"].

Bear in mind that, while processing the input string, 
we are interested only in alphanumeric characters (i.e., alphabets and digits). 
Other characters present will not factor into the formation of these groups.

Ready to discover how to accomplish this task? Let's set forth!
*/ 

/* 
Step 1: Initialization

When aiming to solve a problem, it's always crucial to first establish 
our scope by taking preliminary steps. 

First, we will initialize an empty array to store our results. 

We will also declare two variables, currentGroupChar and currentGroupLength, 
which will help us monitor the character of the current group and the length 
of its consecutive sequence.
*/ 

function findGroups(s) {
    let groups = []; // Array to store the groups of characters
    let currentGroupChar = ''; // Variable to hold the current character group
    let currentGroupLength = 0; // Variable to hold the length of the current character group
}

/* 
Step 2: Loop Through the String

With the setup in place, we are now ready for the main task: processing the input string. 

For this, we'll create a for loop to examine each character. 
At every step, the character is checked to see if it is alphanumeric as that is our primary interest.
*/

function findGroups(s) {
    let groups = []; // Array to store the groups of characters
    let currentGroupChar = ''; // Variable to hold the current character group
    let currentGroupLength = 0; // Variable to hold the length of the current character group
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (/[a-zA-Z0-9]/.test(c)) { // Check if the character is alphanumeric
        }
    }
}

/*
Step 3: Identify the Groups

As the loop executes, if a character is the same as currentGroupChar, 
it implies that the group is continuing, and we simply increment currentGroupLength. 
However, if the character differs from currentGroupChar, it signals the start of a new group.

At the start of a new group, we will add the string formed by concatenating 
currentGroupChar and currentGroupLength with a colon (:) to groups, 
and then update currentGroupChar and currentGroupLength with the new character and 1, respectively.
*/

function findGroups(s) {
    let groups = []; // Array to store the groups of characters
    let currentGroupChar = ''; // Variable to hold the current character group
    let currentGroupLength = 0; // Variable to hold the length of the current character group
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (/[a-zA-Z0-9]/.test(c)) { // Check if the character is alphanumeric
            if (c === currentGroupChar) { // If the character is part of the current group
                currentGroupLength += 1; // Increment the length of the current group
            } else { // If the character starts a new group
                if (currentGroupChar !== '') { // Add the previous group to groups if it exists
                    groups.push(currentGroupChar + ":" + currentGroupLength);
                }
                currentGroupChar = c; // Update the current character to the new group
                currentGroupLength = 1; // Reset the length for the new group
            }
        }
    }
}

/*
Step 4: Wrap Up

After the loop ends, it's important to acknowledge any leftover group 
that may not yet be added to groups. 
This can happen because a group is only added to groups when we identify a new group. 

To ensure we don't miss any groups, we perform a final check on currentGroupChar and, 
if needed, add it to groups.
*/

function findGroups(s) {
    let groups = []; // Array to store the groups of characters
    let currentGroupChar = ''; // Variable to hold the current character group
    let currentGroupLength = 0; // Variable to hold the length of the current character group
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (/[a-zA-Z0-9]/.test(c)) { // Check if the character is alphanumeric
            if (c === currentGroupChar) { // If the character is part of the current group
                currentGroupLength += 1; // Increment the length of the current group
            } else { // If the character starts a new group
                if (currentGroupChar !== '') { // Add the previous group to groups if it exists
                    groups.push(currentGroupChar + ":" + currentGroupLength);
                }
                currentGroupChar = c; // Update the current character to the new group
                currentGroupLength = 1; // Reset the length for the new group
            }
        }
    }
    if (currentGroupChar !== '') { // Add the last group if it exists
        groups.push(currentGroupChar + ":" + currentGroupLength);
    }
    return groups; // Return the array of groups
}

// Example usage
let input = "aaabbcccaae";
let result = findGroups(input);
for (let group of result) {
    console.log(group);
}
// Output:
// "a:3"
// "b:2"
// "c:3"
// "a:2"
// "e:1"

// ---------------------Practice: -----------------------

//example 1: 

/*
In this task, you are to write a JavaScript function that implements the concept of 
Run-Length Encoding (RLE) on an alphanumeric input string. 

Run-length encoding is a simple form of data compression where 
sequences of data entities that are the same are stored as a single data entity along with its count. 
Each count must immediately follow the character it is associated with.

Your function's name should be encodeRLE. 
It takes a string as an input argument and returns 
a new string that represents the input's run-length encoding.

Your function should operate only on alphanumeric characters 
(numbers 0-9 and uppercase and lowercase letters A-Z, a-z). 
For any other types of characters in the string, 
simply ignore them and do not include them in the final encoded output.

For instance, if the input string is "aaabbcccdde", the output should be "a3b2c3d2e1". 
If the input string includes non-alphanumeric characters, such as "aaa@@bb!!c#d**e", 
the output should be "a3b2c1d1e1".

We assume that the given input string could have up to 500 characters.
*/

function encodeRLE(s) {
    // TODO: implement
    //step 1: create new string - return at the end 
    //create variables to store the current character and the current 
    //character count
    let newRleString = '';
    let currentCharacter = '';
    let currentCharacterCount = 0;
    //setp 2: check if it is an alphanumeric character 
    for (let i=0; i< s.length; i++) {
        let c = s[i] //set a variable to locally store the current character
        if (/[a-zA-Z0-9]/.test(c)){ //check if the current character is alphanumeric 
            if (c === currentCharacter){ //check if the current character equals the variable for currentCharacter
                currentCharacterCount += 1; //if it does, increment currentCharactercount by 1
            } else { //if current character is not same as currentCharacter 
                if (currentCharacter !== '') { //if current group character isn't an empty string, add the character and count to newRleString
                    newRleString += (currentCharacter + currentCharacterCount);
                }
                currentCharacter = c; //update the character 
                currentCharacterCount = 1; //update the count 
            }
        }
    }
    if (currentCharacter !== '') { // Add the last group if it exists
        newRleString += (currentCharacter + currentCharacterCount);
    }
    return newRleString;
}

module.exports = { solution: encodeRLE };

//was able to solve with minimal help by following along with the example 

//example 2: 

/* 

Your task is to write a JavaScript function that takes in a string and identifies all the consecutive groups 
of identical characters within it, with the analysis starting from the end of the string rather than from its beginning. 
A group is defined as a segment of the text where the same character is repeated consecutively.

Your function should return an array of strings. 
Each string will consist of the repeating character and the number of its repetitions separated
by a space. For instance, if the input string is "aaabbcccdde", 
the function should output: [ "e 1", "d 2", "c 3", "b 2", "a 3" ].

Note that the input string cannot be empty; in other words, 
it must contain at least one character, and its length must not exceed 500 characters. 
The return should also be in reverse order, starting from the group of repeated characters 
at the end of the string and moving backward.

Also note that unlike the previous exercise, 
this task requires you to consider every character in the string, including symbols.

Put your knowledge and skills into action to solve this reverse pattern identification puzzle!
*/ 

function solution(s) {
    // TODO: implement the algorithm to find consecutive groups of characters in the reverse order
    //step 1 - initialize a variable to store return string, and variables for the current character and the current count 
    let reverseOrderStringArray = [];
    let currentCharacter = '';
    let currentCount = 0;
    // 
    for (i=0; i < s.length; i++){
        let c = s[i]; //initialize a local variable to store the current character 
        if (c === currentCharacter) { //if the current character is the same as the one saved in current Character, then:
            currentCount += 1 //increment (add one to) the currentCount 
        } else {
            if (currentCharacter != ''){ //if the currentCharacter isn't an empty string, then: 
                reverseOrderStringArray.unshift(currentCharacter + " " + currentCount); //add the current character and count to the beginning of the array (so it's in reverse order)
            }
            currentCharacter = c; //update the character
            currentCount = 1; //update the count 
        }
    }
    if (currentCharacter != '') {
        reverseOrderStringArray.unshift(currentCharacter + " " + currentCount);
    }
    return reverseOrderStringArray;
}

module.exports.solution = solution;

// did this one completely on my own with no help and only using the previous example 
