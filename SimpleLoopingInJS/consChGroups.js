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

//example: 

