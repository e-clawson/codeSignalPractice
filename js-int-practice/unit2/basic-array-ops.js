//lesson overview 

//Welcome to our practice-focused lesson on Basic Array Operations without Built-in Methods. 
// An array in JavaScript is simply an ordered collection of items that can be of any type.

//Working with arrays is a fundamental aspect of JavaScript programming. 
// While JavaScript indeed offers numerous built-in methods to make operations with arrays quite straightforward,
//  understanding how to perform these operations without using built-in methods can dramatically sharpen your problem-solving skills,
//  improve your knowledge of how data structures work under the hood, 
// and prepare you for programming environments that may not provide such high-level abstractions.

//Example

// Consider the concept of finding the maximum element in an array. 
// Without using JavaScript's built-in Math.max() function, 
// we need to manually traverse the array, 
// comparing each element to a variable initialized with the first element of the array.
//  With each comparison, if we find an element greater than our variable, 
// we update the variable. At the end of our traversal, 
// this variable will hold the maximum value in the array.

//Here is how the solution will look:

// Find the maximum element in an array without using Math.max()

function findMaxElement(arr) {
    let maxElement = arr[0]; // Initialize with the first element
    for (let i = 1; i < arr.length; i++) {
    // Compare each element with the current max and update if the current element is larger
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

// Example usage
const sampleArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMaxElement(sampleArray));  // Output: 9

// =========== Practice ============

// example 1: 

//You are given an array of integers. Your task is to write a function findMin(arr) 
//that returns the minimum number from the array without using JavaScript's built-in Math.min() function.
//If the array is empty, your function should return null.

function findMin(arr) {
    // TODO: implement the function to find the minimum number from an array
    let currentMin = arr[0];
    
    if (arr.length === 0) {
        return null;
        }
    
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i]; 
        if (currentNum < currentMin) {
            currentMin = currentNum;
        }
    }
    return currentMin;
}

// module.exports = { findMin }; 
// got the whole for loop on my own, got help for the arr.length portion
