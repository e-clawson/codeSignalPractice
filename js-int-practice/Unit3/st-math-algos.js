//Welcome to the lesson on Standard Math Algorithms in JavaScript.
//In this lesson, we will specifically delve into the use of prime numbers, 
// an important area of standard math algorithms.

// Quick Example 

// Let's consider a simple use case — identifying if a number is prime or not. 
// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. 
// Here's a quick and efficient way to check if a number n is prime: we iterate through 2 to the square root of n. 
// If n is divisible by any of these numbers, it's not a prime number. 
// If n is not divisible by any of the numbers in the range, then it's a prime number.

//Here is how the solution will look:

function isPrime(n) {
    // Function to check if n is a prime number
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPrime(10)); // Outputs: false
console.log(isPrime(11)); // Outputs: true

// Complexity Analysis

//In this example, our isPrime function performs optimally with a complexity of O(√n),
// because it only needs to check divisors up to the square root of n. 
// This method is significantly more efficient than checking all numbers up to n-1, 
// which would result in a complexity of O(n).

//This improvement in efficiency is crucial in many real-world applications, 
// especially in cases where performance and speed are critical. 
// Understanding how the time complexity of an algorithm affects its performance can help you develop faster and more efficient code, 
// which is a key skill in software development and technical interviews.

//========== Practice Problems ============== 

//Problem 1 - perfect square: 

//You are given an integer number n. 
// The task is to determine if this number is a perfect square or not. 
// A perfect square is a number that can be expressed as the product of an integer with itself.
// For example, 1 = 1 * 1, 4 = 2 * 2, 9 = 3 * 3, and 16 = 4 * 4 are perfect squares, but 2, 3, 5, and 6 are not.

//Implement a function isPerfectSquare(n) that returns true if the given number n is a perfect square and false otherwise.

function isPerfectSquare(n) {
    // TODO: implement the function that checks if a number is a perfect square
     
        if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
            return true;
        } else {
            return false;
        }

}

module.exports = { isPerfectSquare };

//example 2 - find the next prime 
