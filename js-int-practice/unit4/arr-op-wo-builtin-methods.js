//Array Operations Without Built In Methods 

//overview 

//While JavaScript provides a myriad of built-in methods such as forEach,
// map, and others to simplify array operations, 
// understanding the concepts behind these key functions significantly improves 
// your ability to solve complex problems and prepares you for scenarios where built-in methods may not exist,
// or, if they do, may not offer the optimal solution.

//Understanding array operations essentially begins with grasping this unique data structure. 
// As straightforward as it might seem, conducting operations on an array without using built-in methods 
// involves organizing and processing the elements in it manually. 
// 
// This may include counting occurrences of specific elements, 
// finding the index of an element, or reversing the array. 
// Careful navigation and precise control over how elements in the array are accessed 
// or manipulated are key to effective array operation.

// ---------- practice exercises--------- 

//example 1: 

//You are given an array of n integers. 
// Your task is to find the zero-based index of the first occurrence of this specific value in the array. 
// If the provided value isn't found in the array at all, return -1 instead.

//In this task, you must implement the solution without using any built-in functions or methods. 
//Specifically, the use of the JavaScript indexOf() method of an array is not allowed in your solution.

function findIndex(arr, val) {
    // TODO: Implement the function
    let finalValue = -1; 
    
    for (i = 0; i < arr.length; i++) {
        let currentValue = arr[i]; 
        
        if (currentValue === val) {
            finalValue = i; 
            break;
        }
    } 
return finalValue
}

//example 2: 

//You are given an array of n integers. 
// Your task is to return the number of unique elements in the array — an element is unique if it appears only once in the array. 
// You cannot use any built-in JavaScript functions to achieve this.

//For example, countUniqueElements([1, 2, 3, 2, 4]) = 3, 
// as there are three unique elements in the list - 1, 3, and 4.

function countUniqueElements(arr) {
    // TODO: Implement the function that counts unique elements in the given array.
    let uniqueElements = 0; 
    
    for (i=0; i < arr.length; i++){ 
        currentNumCount = 0;
        for (j=0; j< arr.length; j++){
            if (arr[i] === arr[j]) {
                currentNumCount++; 
            }
        }
        if (currentNumCount === 1) {
            uniqueElements++; 
        }
    }
    
    return uniqueElements;
}