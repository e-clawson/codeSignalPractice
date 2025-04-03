/* Introduction

In today's lesson, we face a unique coding challenge. 
We will traverse the digits of a number using a while loop and a specific condition. 
You will hone your skills in working with loops and conditional statements, 
both of which are fundamental building blocks of programming. */

/* Task Statement

Our mission today is somewhat mind-twisting! 

We need to create a function that operates on an input integer 
to calculate the sum of its even-numbered digits. 
However, we won't convert this integer to a string at any point during this process.

For example, given an integer n of value 4625, our output should be 12, 
which is the sum of the even digits 4, 6, and 2.

Remember, n will always be a positive integer that falls within the range from 1 to 100,000,000. 
 */

/* Solution Building: Step 1

We begin by setting up the basic structure for our function. 
In this step, we define a variable, digit_sum, that will accumulate the sum of the even digits.

Here's the initial framework of our function:
 */

function solution(n) {
    let digit_sum = 0; // defined a variable, digit_sum 
    // The function expands from here.
}


/* Step 2: Setting up the Loop

The most effective tool for iterating through the digits of n is a while loop. 
The loop will run as long as n is greater than zero. 
Integrating this into our function produces:
*/

function solution(n) {
    let digit_sum = 0;
    //set-up a while loop 
    while (n > 0) {
        // Further development of the function will proceed here.
    }
}

/* Step 3: Extracting and Processing Each Digit

Within our loop, we'll extract the last digit of n using the modulo operation (n % 10). 
If this digit is even, we add it to the digit_sum.

After we process a digit, we'll truncate the last digit of n using integer division 
(Math.floor(n / 10)). 
This step readies the while loop for the next digit.

This is what the final code looks like:
*/

function solution(n) {
    let digit_sum = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {  // Check if the digit is even.
            digit_sum += digit;
        }
        n = Math.floor(n / 10);  // Remove the last digit.
    }
    return digit_sum;
}

console.log(solution(4625));  // Output should be 12

//------------- Practice: -----------------------

//Exercise 1: 
/* You are given an integer n where n ranges from 
1 to 10 to the 8th power inclusive. 
Your task is to write a function that calculates and returns 
the product of the odd digits of n, without converting n into a string.

For example, if n equals 43172, the output should be 21, 
because the product of the odd digits 3, 1, and 7 is 21.

Please note that if n has no odd digits, your function should return 0.

You are expected to solve this task by using a while loop. Good luck!*/

function solution(n) {
    // TODO: implement
    let odd_digits = 1; //define a variable to store the multiplied odd digits
    let hasOddDigit = false; //define wether the number contains odd numbers
    //create a while loop  
    while (n > 0) {
        //extract the digit in the 10's place by using a remainder 
        let digit = n % 10;
        
        if (digit % 2 !== 0) {
            hasOddDigit = true; //if the digit is odd, change hasOddDigit to true 
            odd_digits *= digit; //if odd, also multiply it with odd_digits 
        }   
        n = Math.floor(n / 10); //remove the last digit  
    } 
    if (hasOddDigit === false) { //if you make it to this point all the numbers came back even 
        return 0; //if all even, return 0 
    }
    return odd_digits;  

}

module.exports = { solution };

//I got this one right but it took a lot of work to get it just right 
// I feel like i learned a lot on this one

// example 2: 

/*Your task is to construct a function that accepts an integer n 
and returns the integer with the same digits as n, but in reverse order. 
You should implement your solution using a while loop.

For instance, if the input is 12345, the output should be 54321.

Keep in mind that n be a positive integer between 1 and 10 to the 8th 

Do not use built-in functions that convert the integer to another data type, 
such as a string, to reverse it. 
Solve the problem purely using mathematical operations and loop constructs. 

Note that when the result has leading zeros, you should consider only the integer value 
(e.g., 1230 becomes 321 after the operation) */ 

function solution(n) {
    // TODO: implement the solution here
    let reverse = 0; //create a variable to store the reversed number 
    // create a while loop - while the integer is > 0, perform an operation to move the back number to the front 
    while (n > 0){ 
        let digit = n % 10 // get the tens place (last) number isolated 
        //then we need to do something to multiply that by the number of places (for 100s place by 100)
        //maybe we need to create a variable that stores this? 
        //once we have the number in the right place, we add it to the previous number 
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }

    return reverse; //return the reversed number 
}

module.exports = { solution };

//figured it out with minimal help but needed to look up how to get it to the correct place 

// question 3: 

/*Your task is to implement a function that duplicates 
every digit in a given non-negative integer number, n. 

for example, if n = 1234, the function should return 11223344

To prevent possible integer overflow, 
it is guaranteed that n will be a non-negative integer that does not exceed 10 ^4 

Solve this task without converting n into a string or performing any other type of casting. 
Your job is to work strictly with integer operations.

Keynote:
Focus on the essence of the problem, 
which is processing each digit of the number independently while maintaining the digit order. 
There is no need to look for mathematical patterns or clever simplifications; 
plain and straightforward processing will suffice. 
Utilize the toolbox of basic programming skills: 
loops, conditions, and mathematical operations. Good luck!
*/

function solution(n) {
    // TODO: Implement the solution
    // create a variable to store the new number, initialize to 0
    let doubles = 0;
    let multiplier = 1;// keeps track of the position 
    //create a while loop to go through the numbers - you will need this in the loop but it needs 
    //to be updated for each while loop so initialize it out here so it's not reset each while loop 
    while (n > 0){
        let digit = n % 10; //isolates the last number 
        let doubleDigit = (digit * 11) * multiplier; //doubles the number and puts it in the correct place
        doubles += doubleDigit;
        multiplier = multiplier * 100;
    
        // I can't figure out what multiplier to use - has to calculate some form of 10's places so  * 100 or 1000 or something like that 
        n = Math.floor(n / 10) // remove last digit 
    }
    return doubles
}

module.exports = { solution };

//example 4: 

/*You are tasked with writing a function that takes a positive integer n,
as an input and returns the number of consecutive equal digits in the number. 
Specifically, your function should identify pairs of digits in n that are equal 
and consecutive and return the count of these pairs. Note that only pairs of two 
consecutive equal digits should be counted, 
and larger groups should be considered as multiple pairs. 

For instance, if n = 113224, 
it contains two groups of consecutive equal digits: 11 and 22. 
Therefore, the output should be 2. For n = 444, 
the output should also be 2, as there are two groups of 44 in this number.

In cases where no consecutive equal digits are found, the function should return 0. 
For example, if n = 13579 or n = 345672, 
the output should be 0 as there are no groups of consecutive equal digits in these numbers.

Keep in mind that n will be a positive integer ranging from 1 to 10^8, inclusive.

Note: You are not permitted to convert the number into a string or any other 
iterable structure for this task. You should work directly with the number.
*/

function solution(n) {
    // TODO: implement
    //create a variable to count the consecutive numbers - initialize to 0
    let consecutiveCount = 0;
    //create a variable to store the previous number 
    let prevNumber = -1; 
    //we will iterate over the number, and isolate the last number and store it in a variable, and then we will compare it to the previous number. If they === then we will increment (+) the consecutive count by 1
    while (n > 0) {
        let currentNum = n % 10; // set current num to the last place digit 
        if (currentNum === prevNumber){
            consecutiveCount += 1;
        }
    n = Math.floor(n/10); // get rid of last place digit 
    prevNumber = currentNum;
    }
    return consecutiveCount; 
}

module.exports = { solution };

//did the whole thing myself except I struggled with what to set prevNum to 
