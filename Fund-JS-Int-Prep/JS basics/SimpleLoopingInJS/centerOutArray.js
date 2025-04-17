/* Task Statement
Our task is to produce a new array, given an array of integers, 
that starts from the center of the original array and alternates direction towards both ends. 
That is, the first element of our new array will be the middle element of the original one.

After defining the starting point, 
we will alternate between elements to the left and to the right of this center 
until all elements have been included. If the length of the initial array is even, 
we first take the element to the left of the center, then the one to the right of the center, and then do the alternation as described above.

For example, for numbers = [1, 2, 3, 4, 5], the output would be [3, 2, 4, 1, 5].

We will break down this seemingly complex task into manageable pieces to progressively 
build our JavaScript solution. Keep in mind an additional condition: the length of the array 
— represented as n — can range from 1 to 100,000, inclusive. */ 

/* Solution Building: Step 1
First, let's establish the midpoint of our array. Our task requires us to expand our array from the center to the ends, so we divide its length by 2 using integer division in JavaScript. If we find that the array's length is odd, we include the middle element in the newOrder array, given it has no counterpart. If the array's length is even, newOrder initially remains empty.

Here is how it looks in JavaScript: */

function iterateMiddleToEnd(numbers) {
    let mid = Math.floor(numbers.length / 2);  // index of the middle element
    let newOrder = [];  // Array to store new order

    if (numbers.length % 2 === 1) {
        newOrder.push(numbers[mid]);  // Adding middle element to resulting array if length is odd
    }
    // newOrder remains empty for now if length is even
    
    return newOrder;
}

/*Solution Building: Step 2

Successfully solving our task requires two pointers: left and right. 
These pointers are initialized to point to the elements immediately 
to the left and right of the middle element, respectively.

Here is the JavaScript function with the added initialization of these pointers:
*/

function iterateMiddleToEnd(numbers) {
    let mid = Math.floor(numbers.length / 2); // index of the middle element
    let left, right;
    let newOrder = [];  // Array to store new order

    if (numbers.length % 2 === 1) {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid + 1; // Pointing to the right of the middle element
        newOrder.push(numbers[mid]); // Adding the middle element to the resulting array
    } else {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid; // Pointing to the middle element
    }

    return newOrder;
}

/* Solution Building: Step 3
With our pointers initialized, it's time to navigate the array and form our new order. 
In JavaScript, while loops provide the necessary control structure to iterate from the 
center of the array to both ends. In each iteration, we push the elements at indices 
left and right to the newOrder array, decrement left by one, and increment right by one.

Here's how it looks when we put together the full JavaScript function:
*/

function iterateMiddleToEnd(numbers) {
    let mid = Math.floor(numbers.length / 2); // index of the middle element
    let left, right;
    let newOrder = [];  // Array to store new order

    if (numbers.length % 2 === 1) {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid + 1; // Pointing to the right of the middle element
        newOrder.push(numbers[mid]); // Adding the middle element to the resulting array
    } else {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid; // Pointing to the middle element
    }

    while (left >= 0 && right < numbers.length) {
        newOrder.push(numbers[left--]);
        newOrder.push(numbers[right++]);
    }

    return newOrder;
}

const numbers = [1, 2, 3, 4, 5];
const result = iterateMiddleToEnd(numbers);
console.log(result);  // Output should be [3, 2, 4, 1, 5]

/* Explanation for left-- and right++:

- numbers[left--]: The expression first accesses the value at index left 
in the numbers array and then decrements left by 1. 
This ensures the current left element is pushed to newOrder before moving 
the pointer one step to the left.

- numbers[right++]: Similarly, this expression first accesses the value at index 
right in the numbers array and then increments right by 1. 
This ensures the current right element is pushed to newOrder before moving the pointer
 one step to the right.

By implementing this approach, we have successfully created a new array, 
starting from the middle and alternating to the left and right ends of the original array, 
effectively fulfilling the requirements of our task!  */

// ----------------------- Practice: ---------------------------

/*

You are provided with an array of n integers, where n can range from 1 to 200, inclusive. 

Your task is to create a new array that takes two pairs of 'opposite' elements 
from the original array at each iteration, starting from the center and moving towards both ends,
to calculate the resulting multiplication of each pair.

By 'opposite' elements, we mean pairs of elements symmetrically located relative to the array's center.
If the array's length is odd, the center element doesn't have an opposite and 
should be included in the result array as is.

Each element in the array can range from -100 to 100, inclusive.

For example, if the input array is [1, 2, 3, 4, 5], the returned array should be [3, 8, 5]. 
This is because the center element 3 remains as it is, the multiplication of 2 and 4 is 8, 
and the multiplication of 1 and 5 is 5.
*/ 

function solution(numbers) {
    // TODO: Implement the solution here.
    let mid = Math.floor(numbers.length / 2); // index of the middle element
    let left, right;
    let newOrder = []
    let newNumber = 0;

    if (numbers.length % 2 === 1) {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid + 1; // Pointing to the right of the middle element
        newNumber = left * right 
        newOrder.push(newNumber); // Adding the middle element to the resulting array
    } else {
        left = mid - 1; // Pointing to the left of the middle element
        right = mid; // Pointing to the middle element
    }

    while (left >= 0 && right < numbers.length) {
        newOrder.push(numbers[left--]);
        newOrder.push(numbers[right++]);
    }

    return newOrder;
}

module.exports = { solution };