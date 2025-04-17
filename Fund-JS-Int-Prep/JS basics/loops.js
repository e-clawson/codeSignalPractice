/*Topic Overview
Greetings, Explorer! In this lesson, we will delve into the essential tools of JavaScript loops.
 Loops in programming simplify and enhance the efficiency of repetitive tasks 
 — much like a coffee maker brewing multiple cups with a single press, 
 they automate the process, ensuring each cup is brewed quickly and consistently. 
 
 In this lesson, we will explore the universe of looping in JavaScript 
 and gain hands-on experience by applying loops to JavaScript arrays
  and strings.
  */ 

/*Understanding Looping

Imagine listening to your favorite song on repeat. 
That's the concept of loops in programming. 
For instance, we can use a for loop to print greetings for a group of friends.
*/

let friends = ["Alice", "Bob", "Charlie", "Daniel"];

for (let i = 0; i < friends.length; i++) {
    // `i` is the index that changes with each iteration
    // For each friend, print the greeting
    console.log("Hello, " + friends[i] + "! Nice to meet you.");
}

// Output:
// Hello, Alice! Nice to meet you.
// Hello, Bob! Nice to meet you.
// Hello, Charlie! Nice to meet you.
// Hello, Daniel! Nice to meet you.

//Loops enable us to execute repetitive sequences automatically and efficiently.

/*For Loop in JavaScript

The for loop is a control flow statement that allows code to be executed repeatedly.

The structure of a for loop is typically for (initialization; condition; iteration) { loop body }, where the loop body gets executed for as long as the condition evaluates to true. After each loop, the iteration is executed, which generally updates the value of the loop control variable. Here is how it generally works:

- Initialization: This is where you set up the loop variable. It's executed once when the loop begins.
- Condition: This Boolean expression determines if the loop will continue or stop. If it's true, the loop continues; if it's false, the loop ends, and the flow jumps to the next statement after the loop block.
- Iteration: This is where you update the loop variable. This statement executes after the loop body and right before the next condition check.
- Loop Body: The block of code to be executed in each loop.

Let's print a range of numbers using a for loop:
*/

for (let num = 0; num < 5; num++) {
    console.log(num);
}

// Output:
// 0
// 1
// 2
// 3
// 4

// In each cycle of the loop, 
//the variable num is updated after executing the code inside the block.

/*Enhanced For Loop in JavaScript

The for loop is versatile and can work with any sequence
-like structure in JavaScript, such as strings and arrays. 
In JavaScript, the enhanced for loop, known as the for...of loop, 
is used to traverse these collections more simply and safely since 
it eliminates the need to manually control the loop variable.
*/

let fruits = ["apple", "banana", "cherry"];

// `fruit` stands for each fruit in the `fruits` array
for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry

/*In the above example, the fruit variable stands for each element in the fruits array. 
The loop body executes once for each item in the fruits array, 
with fruit being a reference to the current element in each iteration.
*/

// Similarly, we may loop through strings (which can be considered containers of characters):

let word = "hello";
// `ch` is each individual character in `word`
for (let ch of word) {
    console.log(ch);
}

// Output:
// h
// e
// l
// l
// o

/* In the example above, ch stands for each character in the word string. 
The loop repeats for each character in the string word.
For each repetition, it will print the specific character, 
hence printing hello one character at a time.
*/

/* While Loop in JavaScript

While loops in JavaScript continuously execute their content
until a particular condition becomes false. 
 
Here's a simple example:
*/

let num = 0;
// The loop keeps running until `num` is no longer less than 5
while (num < 5) {
    console.log(num);
    // Increase `num` by 1 at the end of each iteration
    num++;
}

// Output:
// 0
// 1
// 2
// 3
// 4

/*As you can see, before each iteration, JavaScript checks the condition (num < 5). 
If it's true, the loop continues; otherwise, the loop breaks. */

/*Applications of Looping

Loops are integral to programming. 
They are extensively used in various sections of a program, 
such as summing elements in an array and parsing through text. */

let numbers = [1, 2, 3, 4, 5];

let total = 0;
// `num` is each number in `numbers`
for (let num of numbers) {
    total += num; // Add each number in the array
}
console.log(total); // print the total sum

// Output:
// 15

let text = "hello";
let vowelCount = 0;
// `ch` is each character in `text`
for (let ch of text) {
    // If a vowel letter is found, increment the count
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        vowelCount++;
    }
}
console.log(vowelCount); // print the count of vowels

// Output:
// 2

/*Lesson Summary and Practice

Congratulations on mastering JavaScript loops! 
We've brushed up on for and while loops 
and have seen how to loop over containers like arrays and strings.
Now, it's time for some beneficial practice exercises to solidify your learning. 
The more problems you solve, the better you'll become. 

Let's proceed further on our journey into the depths of programming!*/

// ------------ Practice ----------------// 

// -------- Practice 1: ---------- 

/*Change the for...of loop in the starter code 
to a while loop to iterate over the fruits array for our fruit salad.
Make sure to add all the fruits!
*/

// Array of fruits to include in a fruit salad
const fruits2 = ["apple", "banana", "orange", "kiwi", "melon"];

// Using a for...of loop to iterate over the array of fruits
// TODO: change to a while loop
// for (const fruit of fruits) {
//     console.log("Adding " + fruit + " to the salad.");
// }

let currentIndex = fruits2.indexOf("apple");
let finalFruitIndex = fruits2.length;

while (currentIndex < finalFruitIndex) {
    let currentFruit = fruits2[currentIndex]
    console.log("Adding " + currentFruit + " to the salad.");
    currentIndex++;
}

// --------- practice 2: ---------- 

/* Your task is to troubleshoot our spaceship's food inventory tracker.
We need to calculate the total sum of various supply counts available 
for our crew's consumption. 

There seems to be an issue with the JavaScript program responsible 
for tallying the total supply sum, and it is not giving us the correct number. 
Can you pinpoint the error and fix the code to ensure we have an accurate 
sum of our supplies? */

let supplies = [5, 3, 7, 2, 9];

// Calculate the total sum of the supplies
let totalSum = 0;

// Loop over each supply count in the supplies array
for (let supply of supplies) {
    totalSum += supply; //changed 1 to supply 
}

console.log(totalSum);  // This should print the total sum of the supplies

// ---------- practice 3: ---------- 

/* Now, let's put your JavaScript loop skills to the test. 
In the code below, fill in the missing piece to loop through 
the fruits array and print out a statement for each one, 
indicating its addition to the fruit salad. */

// Array of fruits to be used in fruit salad
let fruits3 = ["apple", "banana", "kiwi", "mango"];

// TODO: Loop over the array of fruits and add them to the fruit salad with a print statement
for (let fruit of fruits3) {
    // TODO: Print a statement for adding each fruit to the fruit salad.
    console.log("adding " + fruit + " to the salad!");
    fruit++;
}
//output: 
//adding apple to the salad!
//adding banana to the salad!
//adding kiwi to the salad!
//adding mango to the salad!

// ---------- practice 4: ---------- 

/* Now it's your turn to craft the code. 
We want to build a string of fruit names separated by spaces,
but we aim to avoid a trailing space at the end in JavaScript. 
Add the missing code to achieve this. */ 

let fruits4 = ["apple", "banana", "cherry", "date"];

let fruitsInSalad = "";

// TODO: Create a for loop that assembles a string of fruit names separated by spaces, without adding a space after the last fruit
// Hint: Loop until the second to last element, then add the last fruit separately

for (let i = 0; i < (fruits.length -1); i++) {
    fruitsInSalad += fruits[i] + ' ';
}
fruitsInSalad += fruits[fruits.length -1];

console.log(fruitsInSalad);  // Output the fruits in the salad

// ---------- Practice 5: ---------- 

/* Wrap up our exploration of JavaScript loops by writing a program 
to count the number of non-vowel characters in a given string. Remember,
vowels are 'a', 'e', 'i', 'o', 'u', and all other letters are non-vowels. 
Use loops effectively to iterate through the string and determine the count 
of non-vowel characters! */

// Define a string named 'word' to represent the phrase we'll work with
let word2 = "FRUIT Salad";

// TODO: Initialize a counter to hold the number of non-vowel characters

// TODO: Use a for loop to iterate over each character in the string
let nonVowelCount = 0;

let word3 = word2.toLowerCase()

// TODO: Inside the loop, write a condition to check if the character is not a vowel or a space
// Don't forget to consider both lowercase and uppercase characters

for (let ch of word2) {
    if ( ch != ' ' && ch != 'a' && ch != 'e' & ch != 'i' & ch != 'o' && ch != 'u') {
        nonVowelCount++;
    }
}
console.log(nonVowelCount);

// TODO: If the condition is true, increase the counter for non-vowel characters

// TODO: Finally, print out the count of non-vowel characters

//output: 6 
