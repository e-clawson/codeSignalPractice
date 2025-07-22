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
