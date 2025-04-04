/*Lesson Overview

Welcome! Today, I am thrilled to guide you through 
a fascinating task involving arrays in JavaScript: pairing up "opposite" elements. 
Specifically, we're going to learn how to access and manipulate elements within a JavaScript array. 
The task at hand provides an excellent opportunity to elevate your array-handling skills within JavaScript. 

Are you ready to get started? Let's dive right in! */

//Task Statement and Description

/*Our task today is to form pairs of "opposite" elements in a given array of integers. 

In an array consisting of n elements, the first and last elements are known as "opposite", 
the second element and the second-to-last element are considered "opposite", 
and so on. For an array with an odd length, the middle element is its own "opposite".

You will be provided with an array of n integers. 
The value of n could range from 1 to 100, inclusive. 
The task will require you to return an array of String objects. 
Each String will consist of an element and its "opposite" element joined by a space.

Let's use the example array numbers as [1, 2, 3, 4, 5] to simplify our understanding. 
In this case, the output of our solution(numbers) function will be 

["1 5", "2 4", "3 3", "4 2", "5 1"].
*/

//Solution Building: Step 1

/* Before we start writing code, 
let's familiarize ourselves with how to access the elements of an array in JavaScript.

In JavaScript, the i-th element of an array numbers can be accessed as numbers[i], 
with the index starting from 0. Consequently, the first element is numbers[0], 
the second one is numbers[1], and so forth, up to numbers[numbers.length - 1] for the last element. */

function solution(numbers) {
    let i = 0;
    let elementAtGivenIndex = numbers[i];
}

//Now, let's figure out how to access an element's "opposite".

//Solution Building: Step 2

/* The "opposite" of the i-th element of the array is the element at the numbers.
length - i - 1-th position. To illustrate this concept, 
consider standing at the start of a line and your friend standing at the end of the line. 
In this scenario, you and your friend could be considered "opposites". 
Similarly, the "opposite" of numbers[0] is numbers[numbers.length - 0 - 1], 
the "opposite" to numbers[1] is numbers[numbers.length - 1 - 1], and so forth.

We can also think of calculating the index for the "opposite"
element as finding out how many people there are behind you in the line. 
If you are in the i-th position in a line of n people, there are n - i - 1 people behind you. 
This is the same index calculation for finding the "opposite" element in an array.

Now that we understand how to locate an element's "opposite", 
we can proceed to code our solution. 
Let's start by initializing an empty array named result to store our "opposite" 
pairs and compute the array's length for future reference. */

function solution(numbers) {
    let result = [];
    let n = numbers.length;
}

//Solution Building: Step 3 

/*
The next step is to loop over all elements in our numbers array. 
Within our loop, we'll create a String for each pairing of "opposite" elements. 
This String will consist of the i-th element and the n - i - 1-th element separated by a space. 
This pair will then be added to our result array. Here's the final version of our function:
*/

function solution(numbers) {
    let result = [];
    let n = numbers.length;
    for (let i = 0; i < n; i++) {
        result.push(numbers[i] + " " + numbers[n - i - 1]);
    }
    return result;
}

console.log(solution([1, 2, 3, 4, 5]));
// Prints: [ '1 5', '2 4', '3 3', '4 2', '5 1' ]

/* This function iterates over all the elements of the array. 
For each of these elements, it forms a String with its "opposite" 
and subsequently adds the pair to the result array. */

//------------------ Practice: ----------------------

//Exercise 1:

/*
You are given an input array consisting of n integers ranging from 0 to 100, 
inclusive, where n represents the length of the array. 
Your task is to write a function that returns a new array of strings.
Each string should consist of two elements joined by a space: 
an element from the input array paired with its geometrical mean with the 'opposite' element.
The 'opposite' element of any element in the array is defined as the element at the corresponding
position from the end of the array.

Assume that the geometrical mean of two numbers, a and b, is calculated as: 
the square root of a*b (can't be replicated with the same syntax here)
​
A few notes:

- If the length of the array, n, is odd, the middle element is considered to be its own 'opposite'.

-The elements of the input array will be in the range from 
0 to 100, inclusive.

- Calculate the geometrical mean to two decimal places. For example, the geometrical mean of 
2 and 8 is 4.00 (since the square root of 2*8 = 4)

For example, for numbers = [1, 2, 3, 4, 5], the output should be 
solution(numbers) = ["1 2.24", "2 2.83", "3 3.00", "4 2.83", "5 2.24"].

Reminders:

- Math.sqrt(x): Returns the square root of x.
- Math.round(x): Rounds x to the nearest integer.
- To round a number to two decimal places, you can use: Math.round(x * 100) / 100.
- Number.prototype.toFixed(d): Formats a number using fixed-point notation, 
keeping d digits after the decimal point.
*/

// function solution(numbers) {
//     // TODO: implement this function

// }

// module.exports = { solution };

//omg this one is hard I really struggle with numbers they feel so abstract 
//one step at a time here - we're just implementing what we just learned 
//I can go back and review the steps and implement them here 

//step 1 - access the numbers by their index in the array

//"In JavaScript, the i-th element of an array numbers can be accessed as numbers[i], 
//with the index starting from 0." so we start by adding: 

// let i = 0;
// let elementAtGivenIndex = numbers[i];

//step 2 - access the elements "opposite" (geometrical mean?)

// function solution(numbers) {
//     let result = [];
//     let n = numbers.length;
// }

//step 3 = The next step is to loop over all elements in our numbers array. 
//Within our loop, we'll create a String for each pairing of "opposite" elements
 
//solution: 

function solution(numbers) {
    // TODO: implement this function
    let i = 0; //don't need this? 
    // let elementAtGivenIndex = numbers[i];
    let result = [];
    let n = numbers.length;
    for (let i = 0; i < n; i++) {
        let number1 = numbers[i];
        let number2 = numbers[n - i - 1];
        let mean = Math.sqrt(number1*number2)
        let roundedMean = Math.round(mean * 100) / 100
        let finalMean = roundedMean.toFixed(2);
        result.push(numbers[i] + " " + finalMean); //need to change this - have numbers[i] and then the "mean"
    }
    return result;
}

module.exports = { solution };

//almost did it on my own with the notes - needed a little help with the syntax for 
//like 173 and accidentally started with Math.sqrt(num1/num2)

//exercise 2: 

/*
You are provided with a list of n integers, where n ranges from 2 to 200, inclusive. 
The task is to return a list of pairs, each containing an integer and its reverse counterpart.

In this context, the reverse counterpart of a number is the number with its digits reversed. 
For example, the reverse counterpart of 123 is 321.

You must iterate through the list to find the reverse counterpart for each integer.
If this reversed number exists in the list, create a pair with the original number 
and its reverse counterpart. If not, skip it.

Your output should be a list of pairs with the original integers and their reverse counterparts. 
The integers in the given list will range from 10 to 9999, inclusive, 
and each integer in the list is unique.

Note: The reverse counterpart of a single digit number is the same number. 
For numbers that result in leading zeros when reversed (e.g., 100 becomes 001, which is 1), 
consider only the integer value (i.e., 1).
 It's guaranteed that the original list will not contain integers with leading zeros.

For example, for numbers = {12, 21, 34, 43, 56, 65}, 
the output should be solution(numbers) = {{12, 21}, {21, 12}, {34, 43}, {43, 34}, {56, 65}, {65, 56}}.
*/

function solution(numbers) {
    // TODO: implement solution here
}

module.exports = { solution };

//this one was really frustrating. I got 90% of the way there but couldn't solve for the palindromic solution 
// here was my solution assing 4/5 test cases: 

function solution(numbers) {
    // TODO: implement solution here
    let newNumbers = [];
    let numSet = new Set(numbers);

    numbers.forEach(number => {
        let n = number + "";
        let reverse = Number(n.split("").reverse().join(""));
        
        for (i=0; i < numbers.length; i++){
            let compNumber = numbers[i]
            if (compNumber === reverse){ 
               newNumbers.push([number, reverse])
            } else {
                continue; 
            }
        }
    })
    return(newNumbers);
}

module.exports = { solution };


//here was codeSignal's solution. I would have never gotten here. 
//I was annoyed it introduced sets with no explanation of what they were as I wasn't familiar 

function solution(numbers) {
    let newNumbers = [];
    let numSet = new Set(numbers);

    numbers.forEach(number => {
        let reverse = parseInt(number.toString().split("").reverse().join(""), 10);
        if (numSet.has(reverse)) {
            newNumbers.push([number, reverse]);
        }
    });

    return newNumbers;
}

module.exports = { solution };

// example 3: 

/* 

You are given an array of n integers, where n ranges from 2 to 200, inclusive. 
The elements in the array range from -200 to 200, inclusive. 
Your task is to return an array where each element is the sum of a pair composed of an element and its 'opposite' element.

By 'opposite', we mean that in an array of n elements, the first and last elements are paired, 
the second and second-to-last elements are paired, and so on. If the array is of odd length, 
the middle element pairs with itself.

The method should handle both positive and negative integers 
and be capable of dealing with an odd number of elements in the list.

*/

//this was their solution - I got some of it but not enough: 

function solution(numbers) {
    // TODO: Implement solution here
    let result = [];
    let n = numbers.length
    for (let i = 0; i < Math.floor(n / 2); i++) {
      result.push(numbers[i] + numbers[n - i - 1]);
    }
    if (n%2 === 1) {
        result.push(numbers[Math.floor(n/2)] * 2);
    }
      return result;
  }
  
  module.exports = { solution };

//this was where I got to: 


function solution(numbers) {
    // TODO: Implement solution here
    let result = [];
      let n = Math.floor(numbers.length / 2);
      let o = numbers.length - 1;
      let p = n % 2
      for (let i = 0; i < n; i++) {
          result.push(numbers[i] + numbers[n - i - 1]);
          if (p === 1) {
            result.push(numbers[i]+ numbers[i])
          }
      }
      return result;
  }
  
  module.exports = { solution };

 //example 2: 
/* 
You are provided with an array of n integers, 
where n can range from 1 to 200, inclusive.
Your task is to create a new array that takes two pairs of 
'opposite' elements from the original array at each iteration, 
starting from the center and moving towards both ends, 
to calculate the resulting multiplication of each pair.

By 'opposite' elements, we mean pairs of elements symmetrically 
located relative to the array's center. If the array's length is odd, 
the center element doesn't have an opposite and should be included in the result array as is.

Each element in the array can range from -100 to 100, inclusive.

For example, if the input array is [1, 2, 3, 4, 5], 
the returned array should be [3, 8, 5]. This is because the center element 3 remains as it is, 
the multiplication of 2 and 4 is 8, and the multiplication of 1 and 5 is 5.
*/

function solution(numbers) {
    // TODO: Implement the solution here.
    let result = [];
    let n = numbers.length;
    
    for (let i = 0; i < Math.floor(n / 2); i++){ 
        result.unshift(numbers[i] * numbers[n - i - 1]);
    } if (n%2 === 1) {
        result.unshift(numbers[Math.floor(n/2)]);
    }
return result;
}

module.exports = { solution };

//example 3? 

/*
You are given an array of n integers, where n can range from 1 to 500, inclusive. 
Your task is to create a new array in which each element is a string, 
determined by pairing elements from the middle to both ends of the original array.

If the original array has an odd length, pair the middle element with 0.
If the original array has an even length, start pairing from the two middle elements. 
Continue the pairing by alternating elements from the left and the right until all 
elements have been paired.

After creating the paired elements, return the new array of pairs as strings. 
Ultimately, your result should be an array of strings, each representing a 
pair of integers separated by a space. Each element within a pair, as well as within the array, 
can range from -1000 to 1000, inclusive.

For example, if the input is numbers = [1, 2, 3, 4, 5], the output should be ["3 0", "2 4", "1 5"]. 
Similarly, if the input is numbers = [1, 2, 3, 4], the output should be ["2 3", "1 4"].
*/

function solution(numbers) {
    // TODO: Implement the function to pair the elements from the middle to ends of the array
    let stringArray = [];
    let length = numbers.length;
    let mid = Math.floor(numbers.length / 2);
    let left, right; 
    let newString = '';

    if (length % 2 === 0) {
        left = mid - 1; 
        right = mid;
    } else { 
        newString = `${numbers[mid]} 0`;
        left = mid - 1;
        right = mid + 1;
        stringArray.push(newString);
    }
    
    while (left >= 0 && right < length) {
        stringArray.push(`${numbers[left--]} ${numbers[right++]}`);
    }
return stringArray;
}

module.exports = { solution };