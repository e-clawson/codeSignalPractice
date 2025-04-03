/*Lesson Overview

Welcome! Today, I am thrilled to guide you through 
a fascinating task involving arrays in JavaScript: pairing up "opposite" elements. 
Specifically, we're going to learn how to access and manipulate elements within a JavaScript array. 
The task at hand provides an excellent opportunity to elevate your array-handling skills within JavaScript. 

Are you ready to get started? Let's dive right in! */

//Task Statement and Description

/*Our task today is to form pairs of "opposite" elements in a given array of integers. 

In an array consisting of n elements, the first and last elements are known as "opposite", 
the second element and the second-to-last element are considered "opposite", 
and so on. For an array with an odd length, the middle element is its own "opposite".

You will be provided with an array of n integers. 
The value of n could range from 1 to 100, inclusive. 
The task will require you to return an array of String objects. 
Each String will consist of an element and its "opposite" element joined by a space.

Let's use the example array numbers as [1, 2, 3, 4, 5] to simplify our understanding. 
In this case, the output of our solution(numbers) function will be 

["1 5", "2 4", "3 3", "4 2", "5 1"].
*/

//Solution Building: Step 1

/* Before we start writing code, 
let's familiarize ourselves with how to access the elements of an array in JavaScript.

In JavaScript, the i-th element of an array numbers can be accessed as numbers[i], 
with the index starting from 0. Consequently, the first element is numbers[0], 
the second one is numbers[1], and so forth, up to numbers[numbers.length - 1] for the last element. */

function solution(numbers) {
    let i = 0;
    let elementAtGivenIndex = numbers[i];
}

//Now, let's figure out how to access an element's "opposite".

//Solution Building: Step 2

/* The "opposite" of the i-th element of the array is the element at the numbers.
length - i - 1-th position. To illustrate this concept, 
consider standing at the start of a line and your friend standing at the end of the line. 
In this scenario, you and your friend could be considered "opposites". 
Similarly, the "opposite" of numbers[0] is numbers[numbers.length - 0 - 1], 
the "opposite" to numbers[1] is numbers[numbers.length - 1 - 1], and so forth.

We can also think of calculating the index for the "opposite"
element as finding out how many people there are behind you in the line. 
If you are in the i-th position in a line of n people, there are n - i - 1 people behind you. 
This is the same index calculation for finding the "opposite" element in an array.

Now that we understand how to locate an element's "opposite", 
we can proceed to code our solution. 
Let's start by initializing an empty array named result to store our "opposite" 
pairs and compute the array's length for future reference. */

function solution(numbers) {
    let result = [];
    let n = numbers.length;
}

//Solution Building: Step 3 

/*
The next step is to loop over all elements in our numbers array. 
Within our loop, we'll create a String for each pairing of "opposite" elements. 
This String will consist of the i-th element and the n - i - 1-th element separated by a space. 
This pair will then be added to our result array. Here's the final version of our function:
*/

function solution(numbers) {
    let result = [];
    let n = numbers.length;
    for (let i = 0; i < n; i++) {
        result.push(numbers[i] + " " + numbers[n - i - 1]);
    }
    return result;
}

console.log(solution([1, 2, 3, 4, 5]));
// Prints: [ '1 5', '2 4', '3 3', '4 2', '5 1' ]

/* This function iterates over all the elements of the array. 
For each of these elements, it forms a String with its "opposite" 
and subsequently adds the pair to the result array. */

//------------------ Practice: ----------------------

//Exercise 1:

/*
You are given an input array consisting of n integers ranging from 0 to 100, 
inclusive, where n represents the length of the array. 
Your task is to write a function that returns a new array of strings.
Each string should consist of two elements joined by a space: 
an element from the input array paired with its geometrical mean with the 'opposite' element.
The 'opposite' element of any element in the array is defined as the element at the corresponding
position from the end of the array.

Assume that the geometrical mean of two numbers, a and b, is calculated as: 
the square root of a*b (can't be replicated with the same syntax here)
​
A few notes:

- If the length of the array, n, is odd, the middle element is considered to be its own 'opposite'.

-The elements of the input array will be in the range from 
0 to 100, inclusive.

- Calculate the geometrical mean to two decimal places. For example, the geometrical mean of 
2 and 8 is 4.00 (since the square root of 2*8 = 4)

For example, for numbers = [1, 2, 3, 4, 5], the output should be 
solution(numbers) = ["1 2.24", "2 2.83", "3 3.00", "4 2.83", "5 2.24"].

Reminders:

- Math.sqrt(x): Returns the square root of x.
- Math.round(x): Rounds x to the nearest integer.
- To round a number to two decimal places, you can use: Math.round(x * 100) / 100.
- Number.prototype.toFixed(d): Formats a number using fixed-point notation, 
keeping d digits after the decimal point.
*/

// function solution(numbers) {
//     // TODO: implement this function

// }

// module.exports = { solution };

//omg this one is hard I really struggle with numbers they feel so abstract 
//one step at a time here - we're just implementing what we just learned 
//I can go back and review the steps and implement them here 

//step 1 - access the numbers by their index in the array

//"In JavaScript, the i-th element of an array numbers can be accessed as numbers[i], 
//with the index starting from 0." so we start by adding: 

// let i = 0;
// let elementAtGivenIndex = numbers[i];

//step 2 - access the elements "opposite" (geometrical mean?)

// function solution(numbers) {
//     let result = [];
//     let n = numbers.length;
// }

//step 3 = The next step is to loop over all elements in our numbers array. 
//Within our loop, we'll create a String for each pairing of "opposite" elements
 
//solution: 

function solution(numbers) {
    // TODO: implement this function
    let i = 0;
    // let elementAtGivenIndex = numbers[i];
    let result = [];
    let n = numbers.length;
    for (let i = 0; i < n; i++) {
        let number1 = numbers[i];
        let number2 = numbers[n - i - 1];
        let mean = Math.sqrt(number1*number2)
        let roundedMean = Math.round(mean * 100) / 100
        let finalMean = roundedMean.toFixed(2);
        result.push(numbers[i] + " " + finalMean); //need to change this - have numbers[i] and then the "mean"
    }
    return result;
}

module.exports = { solution };

//almost did it on my own with the notes - needed a little help with the syntax for 
//like 173 and accidentally started with Math.sqrt(num1/num2)
