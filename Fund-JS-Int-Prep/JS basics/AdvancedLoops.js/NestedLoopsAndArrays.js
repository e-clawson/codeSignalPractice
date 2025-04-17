/*
Introduction

We will be unraveling the skill of using nested loops to search through two arrays. 

Task Statement

Imagine a scenario where you are given two arrays of integers. 
Your task is to write a function that retrieves and returns pairs of integers. 
The first item of the pair will be from the first array, 
while the second one will come from the second array. 
It's crucial to remember that the first element must be less than the second.

The sequence of pairs in your output should align with the order they appear in the input arrays.
For instance, given the arrays [1, 3, 7] and [2, 8, 9], 
the function should return ["1 2", "1 8", "1 9", "3 8", "3 9", "7 8", "7 9"]. 
It will pose a challenge if no pairs exist or if any input array is empty. 

Let's delve into this task step by step to uncover the solution!

Building the Solution: Step 1

Before venturing into the code, let's decode the problem. 
Nested looping fits perfectly here.

Start by creating an empty array named result to store our pairs.

*/

function retrievePairs(array1, array2) {
    let result = [];
}

/*
Creating your function and data structure first is a wise strategy!

Building the Solution: Step 2

Now, the focus turns to forming the nested loops. 
You need to iterate over both arrays, and for this, you'll need nested loops. 
An outer loop will select one element from the first array, 
and an inner loop will scan through each element of the second array.

*/

function retrievePairs(array1, array2) {
    let result = [];
    for (let i of array1) {
        for (let j of array2) {
            // Our logic goes here
        }
    }
    return result;
}

/*
In this setup, every element in array1 is represented by i, 
and for each i, j represents an element in array2.

Building the Solution: Step 3

With our loops ready, it's time to incorporate the logic. 
We run a check at this point: is the element i from array1 less than the element j from array2? 
If it's true, we insert the concatenated string ${i} ${j} into our result array.

*/

function retrievePairs(array1, array2) {
    let result = [];
    
    // Start of the outer loop: iterating through elements of array1
    for (let i of array1) {
        // Start of the inner loop: iterating through elements
        // of array2 for each element of array1
        for (let j of array2) {
            // Check if the element from array1 is less than the element from array2
            if (i < j) {
                // Add the valid pair to the result array
                result.push(`${i} ${j}`);
            }
        }
    }
    // Return the final array of pairs
    return result;
}

// Example usage
let array1 = [1, 3, 7];
let array2 = [2, 8, 9];
let res = retrievePairs(array1, array2);
    
// Print each pair from the result array
for (let pair of res) {
    console.log(pair);
}
// Outputs "1 2", "1 8", "1 9", "3 8", "3 9", "7 8", "7 9"

//During each execution of our inner loop, 
//we perform this check and store the pairs that comply with our condition.

// ----------- practice examples: -------------

//example 1: 
