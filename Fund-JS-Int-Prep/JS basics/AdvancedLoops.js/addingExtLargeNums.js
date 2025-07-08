/*
Today, we'll delve deep into a captivating problem involving large numbers
— specifically, adding extraordinarily large numbers. 
As you may have noticed, traditional calculators and even some 
programming languages struggle when dealing with excessively large numbers. 
To handle such scenarios efficiently, 
we'll simulate this process manually using strings. 

By the end of this discussion, you'll be able to add together numbers 
that have thousands or even tens of thousands of digits.

*/

/*

Task Statement
In today's task, we'll venture into the realm of large numbers, 
where we are given two exceedingly large positive integers. 
However, these aren't your average, everyday large numbers. 
They are so enormous they're represented as strings that can be up to 10,000 digits long!

Your mission, should you choose to accept it, 
is to write a JavaScript function that adds these two "string-numbers" together. 
The challenge is to perform the addition without converting these entire strings into integers.

In the end, your function should return the resulting sum, represented as a string.
At first glance, this might seem daunting, but don't worry — we'll break it down step by step, 
emulating the way we manually add numbers.
*/

/*
Solution Building: Step 1

Before we dive into the code, let's first discuss the strategy we're going to follow. 
Remember that every digit in a number carries value, 
and the position of the digit determines its influence on the total value of the number. 
This system is known as place-value notation.

The first step involves initializing our variables. We'll use two integers, i and j, 
to point to the current digit in num1 and num2, respectively. 
We'll also need a variable named carry to hold the carryovers from each addition operation. 
Lastly, we'll use an Array named result to store our resultant number, 
where each digit from the addition is intended to be pushed to the front.

We start iterating from the end (rightmost side) of each string because 
the rightmost digit is the least significant digit, 
and this is where we begin when performing manual addition. 
Processing the least significant digits first allows us to handle carryover 
operations easily and propagate any necessary changes to the more significant digits on the left.
*/

function addLargeNumbers(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];
}

/*
Solution Building: Step 2

After initializing our variables, it's time to move on to the next step. 
Here, we'll scan through num1 and num2 from right to left, 
moving from the least significant digit to the most significant one.

For each iteration, we extract the digits n1 from num1 and n2 from num2. 
If i or j is less than 0, that means we've processed all the digits in one of the numbers. 
Therefore, we treat any additional digits as 0. 
Additionally, the condition carry !== 0 in the while loop 
ensures that we continue processing even if we have finished all the digits 
in both numbers but still have a remaining carry. 

This is important because the carry represents an additional digit when 
the sum of the last digits exceeds 9.
*/

function addLargeNumbers(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];
    
    while (i >= 0 || j >= 0 || carry !== 0) {
        let n1 = (i >= 0) ? parseInt(num1.charAt(i)) : 0;
        let n2 = (j >= 0) ? parseInt(num2.charAt(j)) : 0;
    }
}

/*
Here, we use the ternary operator to ensure that if i or j is less than 0, 
we treat any additional digits as 0. 

The ternary operator works with a condition followed by a question mark (?), 
then the true expression, a colon (:), and the false expression. For example, 
(i >= 0) ? parseInt(num1.charAt(i)) : 0 means if i is greater than or equal to 0,
 we take the digit at index i from num1; otherwise, we use 0.
*/

/*
Solution Building: Step 3

After obtaining digits n1 and n2, our next step is to add them. 
This addition also includes the carry, which accumulates any overflow 
from the addition of previous column digits. This sum results in a one- or two-digit number,
where the "tens" place becomes a new carry and the "units" place is the result digit.

Subsequently, we add current to the result array and decrement both i and j before starting 
the next iteration. Since we are appending digits instead of pushing them to the front, 
we will reverse result at the end and join the digits together to obtain our final result.
*/

function addLargeNumbers(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = [];
    
    while (i >= 0 || j >= 0 || carry !== 0) {
        let n1 = (i >= 0) ? parseInt(num1.charAt(i)) : 0;
        let n2 = (j >= 0) ? parseInt(num2.charAt(j)) : 0;
        let current = n1 + n2 + carry;
        carry = Math.floor(current / 10);
        current = current % 10;
        result.push(current);
        i--;
        j--;
    }

    result.reverse();
    return result.join('');
}

// Example usage:
console.log(addLargeNumbers("1454178195297", "8458263917502"));
// Outputs 9912442112799

// ------------------ practice examples: ---------------------

//example 1: 

/* 
For this task, you are given two non-negative integers, num1 and num2.
However, these are not just ordinary numbers; 
they are so large that they should be represented as strings instead of normal integers. 
Each can be up to 100 digits long.

Your mission is to write a JavaScript function that compares these two "string-numbers" 
without converting the entire strings into integers. 

Your function should determine whether num1 is greater than, less than, or equal to num2.

The task requires that you manually compare the two strings from the most significant digit 
to the least significant. You should implement your own logic to compare two string numbers.

The function should return the following results:

If num1 is greater than num2, your function should return 1.
If num2 is greater than num1, your function should return -1.
If num1 and num2 are equal, your function should return 0.
Let's look at the following examples:

For num1 = "12345" and num2 = "1234", your function should return 1.
For num1 = "1234" and num2 = "12345", your function should return -1.
For num1 = "12345" and num2 = "12345", your function should return 0.

This exercise is a great test of your understanding of how numbers and strings work and interact
in a programming language. We hope you find it challenging and enjoyable!
*/
function compareStringNumbers(num1, num2) {
    // TODO: implement the function
    //compare the strings without converting them to integers and 
    // determine wether num1 >, <, or === to num2 
    let results = []; // initialize a variable to return the final result 
    let length1 = num1.length; //variable to track current place in num1
    let length2 = num2.length; //variable to track current place in num2
    let carry = 0; 
    
    if (length1 > length2){ // compare the length of num1 and num2 and if they aren't equal:
        return 1; 
    } else if (length2 > length1){ 
        return -1; 
    }
    //if lengths are equal, compare digit
        for (i = 0; i < length1; i++){
            if (num1[i] > num2[i]) {
                return 1; 
            } else if (num1[i] < num2[i]){ 
                return -1;  
            }
        }
    return 0 
}

module.exports = { compareStringNumbers };

//example 2: 

/* 
You are given two exceedingly large positive decimal numbers, num1 and num2, 
both represented as strings. The length of these strings can range anywhere f
rom 1 to 500 characters. 

The challenge here is to subtract num2 from num1 without directly converting 
the strings into integers.

Create a JavaScript function that performs this operation and returns the resultant string, 
referred to as num3.

Please note that the subtraction will not result in a negative number, 
as num1 will always be greater than or equal to num2.

Examples:

subtractStrings("398746", "199234") should return "199512".
subtractStrings("100", "1") should return "99".
subtractStrings("111111111111111", "111111111111111") should return "0".
*/ 

function subtractStrings(num1, num2) {
    // TODO: Implement the solution
    let num3 = ''; //initialize a variable to store the final new variable 
    let i = num1.length - 1; //initialize variables to track number 1 and 2 and any carry 
    let j = num2.length - 1;
    let borrow = 0; //borrow from next digit 
    let result = []; 
    
    while (i >= 0) {
    let n1 = num1.charAt(i) - '0';
    let n2 = j >= 0 ? num2.charAt(j) - '0' : 0;
    n1 -= borrow;
        if (n1 < n2) {
            n1 += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
    result.push(n1 - n2);
    i--;
    j--;
    }   
    // Reverse the result array and join it to form the final string
    num3 = result.reverse().join(''); 
    
    // Remove leading zeros
    num3 = num3.replace(/^0+/, '');
    
    // If the result is an empty string, it means the result is actually zero
    if (num3 === '') {
        num3 = '0';
    }
    
    return num3;
}

module.exports = { subtractStrings };

//example 3: 
/*
You are tasked with writing a JavaScript function to multiply two extremely large positive integers. These are not your regular-sized large numbers; they are represented as strings potentially up to 500 digits long.

Your function should take two string parameters, representing the two large integers to be multiplied, and return the product as a string. The challenging part is that you should perform the multiplication without converting the entire strings into integers.

Keep in mind that the elements of the string are digits in the range from 0 to 9, inclusive.

Furthermore, bear in mind that when multiplying numbers manually, we align the numbers vertically and multiply each digit of the first number with each digit of the second number, starting from the rightmost digits, and add the results after shifting appropriately.

For example:

multiplyLargeNumbers("123", "456") should return "56088".
multiplyLargeNumbers("999999999", "1") should return "999999999".
multiplyLargeNumbers("0", "500") should return "0".
Please solve this problem using similar, decision-based string manipulations instead of merely converting strings into integers, multiplying them, and converting the result back to a string. This approach is imperative as direct multiplication would not be feasible for very large numbers.

Challenge yourself, and Happy Coding!

*/ 

function multiplyLargeNumbers(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let len1 = num1.length;
    let len2 = num2.length;
    let product = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + product[i + j + 1];
            product[i + j + 1] = sum % 10;
            product[i + j] += Math.floor(sum / 10);
        }
    }

    while (product[0] === 0) {
        product.shift();
    }

    return product.join('');
}

module.exports = { multiplyLargeNumbers };