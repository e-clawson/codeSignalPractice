/* You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number. */

//my solution:

function solution(n) {
    let sum = 0;
    let num1 = 0;
    let num2 = 0; 
    while (n > 0) {
        let singleDigit = n % 10; 
        num1 = singleDigit; 
        num2 = num1 + num2; 
        n = Math.floor(n/10)
        sum = num2;
    }
 return sum 
}