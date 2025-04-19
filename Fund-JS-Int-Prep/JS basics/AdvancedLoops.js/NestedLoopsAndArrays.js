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

/*
You are provided with two arrays of unique integers, 
with their lengths ranging from 1 to 100, inclusive. The task is to identify elements that appear in both arrays and return them in an array, maintaining the order from the first provided array.

Each array's element ranges from -100 to 100, inclusive.

In your function function commonElements(arrA, arrB),
arrA and arrB represent the two input arrays. 
The function should return an array that includes the common elements found in both arrA and arrB, 
while preserving the order of elements as they appear in arrA.

For example, if arrA = [7, 2, 3, 9, 1] and arrB = [2, 3, 7, 6], the output should be [7, 2, 3].
*/

function commonElements(arrA, arrB) {
    // TODO: Implement the function to find the common elements in the two arrays
    //loop through the first array using the second array
    let newArr = []
    
    for (let i = 0; i < arrA.length; i++) {
      if (arrB.includes(arrA[i])){
        newArr.push(arrA[i])
      }
    }
    return newArr;
}
  
module.exports = { solution: commonElements };

//example 2: 

/*
You are given two arrays: sourceArray and searchArray, 
consisting of n and m unique strings respectively, 
where n is an integer such that 1 ≤ n ≤ 100 and m is an integer such that 1 ≤ m ≤ 500. 
Each string in both arrays represents a number followed by a letter part, 
concatenated with a space. The numbers in both arrays range from 1 to 100, inclusive. 

The letter parts in sourceArray consist of alphanumeric characters with lengths ranging from 1 to 100, inclusive. 
The letter parts in searchArray have lengths ranging from 1 to 500, inclusive.

Your task is to implement a function stringSearch(sourceArray, searchArray) 
that takes these two arrays as input and returns an array that includes all 
strings from sourceArray where the letter part (the part after the number and space) 
appears as a substring in at least one string in searchArray and the number of the 
source string is less than or equal to the number of the search string.

The order in which the strings appear in the result should reflect their original order 
in the sourceArray. 

If no matches are found, the function should return an empty array.

For example, if sourceArray = ["1 abc", "2 def", "3 xyz"] and searchArray = ["1 abcdef", "5 uvwxy"], 
the function should return ["1 abc"] since 'abc' and 'def' are substrings found in 'abcdef', 
but 'def' is associated with 2 in sourceArray which is not less than or equal to 1 in searchArray. 
The string 'xyz' is not found in either 'abcdef' or 'uvwxy', so it is not included in the result.

This task requires mastery of skills in nested looping and array manipulation, 
especially in the context of searching for a string within other strings.

*/

function stringSearch(sourceArray, searchArray) {
    // TODO: implement
    //need to return an array of numbers and strings 
    //that apear in both arrays in the order of the source array 
    
    //steps: 
    //split the array at the " "? 
    // loop through 
    let newArray = [];
    
    for (i=0; i < sourceArray.length; i++) {
        let currentCharacter = sourceArray[i].split(" ");
        for (j=0; j<searchArray.length; j++) {
            let currentSearch = searchArray[j].split(" ")
            if (currentSearch[1].includes(currentCharacter[1]) && parseInt(currentCharacter[0]) <= parseInt(currentSearch[0])) {
                newArray.push(sourceArray[i]);
                break;
            }
        }
    }
    return newArray;
}

module.exports = { stringSearch };

//example 2: 
