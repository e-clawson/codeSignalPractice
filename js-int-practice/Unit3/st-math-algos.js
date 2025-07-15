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

//example 2 - find the next prime //You are given an integer number, 
//1 ≤ n ≤ 10^6. Your task is to write a function nextPrime(n), 
// that takes an integer n as input and returns the smallest prime number larger than n.

//Here are some examples:

// nextPrime(7) should return 11, because 11 is the next prime number after 7.
// nextPrime(13) should return 17, because 17 is the next prime number after 13.
// nextPrime(50) should return 53, because 53 is the next prime number after 50.

function nextPrime(n) {
    // TODO: implement the function to find the next prime number after n
    let candidate = n + 1; 
    
    while (isPrime(candidate) === false) {
        candidate++;
    }
    return candidate
    
}

function isPrime(candidate) {
    if (candidate <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
        if (candidate % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = { nextPrime };

//problem 3 - 
//You are provided with two integers, a and b. 
// Your task is to write a JavaScript function that checks whether both a and b are co-prime or not. 
// Two numbers are said to be co-prime or mutually prime if the only positive integer that divides both of them is 1. 
// The expected complexity is O(max(a,b))

//For example:
console.log(areCoprime(15, 28));   // Output: true
console.log(areCoprime(12, 18));   // Output: false
//In the first example, the only positive integer that divides both 15 and 28 is 1; hence, they are co-prime. However, in the second example, 12 and 18 are divisible by 2 and 3; thus, they are not co-prime.

function areCoprime(a, b) {
    // TODO: implement
    
   function gcd(a, b) {
        // Find Minimum of a and b
        let result = Math.min(a, b);

        while (result > 0) {
            if (a % result === 0 && b % result === 0) {
                break;
            }
            result--;
        }

        // Return gcd of a and b
        if(result === 1){ 
            return true;
        } else {
            return false;
        }
    }
    let finalResult = gcd(a,b);
    
    return finalResult;
    
}

module.exports = { areCoprime };
//works but doesn't use euclidean algo

//this one uses the algo 
function areCoprime(a, b) {
    // TODO: implement
    
   function gcd(a, b) {
        if (b == 0) {
            return a; 
        } else {
            return gcd(b, a % b);
        }
    }
    
   if (gcd(a, b) === 1) {
        return true;
        } else {
            return false;
        }
}
