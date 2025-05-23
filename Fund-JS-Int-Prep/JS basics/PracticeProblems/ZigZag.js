/*
Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

Given an array of integers numbers, your task is to check all the triples of
its consecutive elements for being a zigzag. More formally, your task is to 
construct an array of length numbers.length - 2, 
where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1],
numbers[i + 2]) is a zigzag, and 0 otherwise.


Example

For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

(numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
(numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
(numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

Since all the elements of numbers are increasing, there are no zigzags.

For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

Since all the elements of numbers are the same, there are no zigzags.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer numbers

An array of integers.

Guaranteed constraints:
3 ≤ numbers.length ≤ 100,
1 ≤ numbers[i] ≤ 109.

[output] array.integer

Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
*/

function solution(numbers) {
    let zigZag = [] //initialize an empty array to put zigzag outcome array
    let length = numbers.length - 2;
    let a, b, c; //initialize variables to hold the three consecutive numbers 
    
    //take 3 at a time, check the conditions and return 1 or 0 
    for (i = 0; i < length; i++){
        a = numbers[i];
        b = numbers[i + 1]; 
        c = numbers[i + 2]; 
        
        if (a < b && b > c) {
            zigZag.push(1);
        } else if(a > b && b < c){
            zigZag.push(1);
        } else{ 
            zigZag.push(0);
        }
    }
    return zigZag; //return the completed new array 
    }

    //completed with 42 minutes left 