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

// problem 2: 

//You are given an array of integers. 
// Your job is to return the count of even and odd integers in the given array 
// without using any built-in JavaScript methods. 
//If the array is empty, the function should return { even_count: 0, odd_count: 0 }.

//Your function should return an object in the format { even_count: x, odd_count: y }, 
// where even_count represents the number of even integers and odd_count represents the number of odd integers in the provided array.

function countEvenOdd(nums) {
    // TODO: implement the function to return an object { even_count: x, odd_count: y }
    let even_count = 0;
    let odd_count = 0; 
    
    if (nums.length === 0){ 
        return { even_count: 0, odd_count: 0 };
    }
    for (let i=0; i < nums.length; i++) {
        let currentNum = nums[i]; 
        
        if (currentNum % 2 === 0) {
            even_count++; 
        } 
        else if (currentNum % 2 !== 0) {
            odd_count++; 
        }
    }
    return { "even_count": even_count, "odd_count": odd_count}
}

// module.exports = { countEvenOdd };

//problem 3: 
//You are given an array of integers. 
//Your task is to write a function in JavaScript that returns the number of times the smallest element appears in the array.

//Please note that built-in methods such as Math.min() or Array.prototype.filter() should not be used in this task. 
// Your goal is to accomplish this task by iterating over the array elements manually. 
// Try to solve the task by doing just a single array traversal.

function countMin(numbers) {
    // TODO: Implement this function to count the smallest integer in the array.
    
    //can't use math.min 
    //set lowest number, and set number count
    //loop - search for lower number, and if lower, add +1 to number count 
    let lowest_num = numbers[0]; 
    let lowest_num_count = 1;
    
    if (numbers.length === 0){
            return 0;
    } 
    
    for (let i=1; i<numbers.length; i++){ 
        let currentNum = numbers[i];
        
        if (currentNum < lowest_num) {
            lowest_num = currentNum;
            lowest_num_count = 1; 
        } else if (currentNum === lowest_num) {
            lowest_num_count ++; 
        }
    }
    return lowest_num_count;
    
}

//problem 4: 