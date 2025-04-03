/*Lesson Overview
Welcome to an engaging JavaScript session! 
In this unit, we will delve deeper into handling string data in JavaScript. 
Consider situations in which you have to analyze text data, 
like constructing a web scraper or developing a text-based algorithm to interpret 
user reviews of a website. All these cases require efficient handling of strings, 
which involves analyzing and manipulating them. 

In this lesson, we will focus on how to traverse strings and perform operations on each character using JavaScript.

The objective of this lesson is to become proficient in using JavaScript loops with a specific emphasis on strings. 
We will explore the techniques of string indexing and practice character operations using JavaScript functions. */

/* Working with ASCII Codes in Characters
Characters in JavaScript can be manipulated using their ASCII values. 
ASCII (American Standard Code for Information Interchange) 
is a character encoding standard used to represent text in computers and other devices that use text. 
Every character has a unique ASCII value.

You can convert a character into its ASCII value using the charCodeAt() method: 
*/

let ch = 'A';
let asciiVal = ch.charCodeAt(0); // Retrieves the ASCII value of the character at index 0 of the string c, which is 'A', and assigns it to the variable asciiVal.
console.log(`The ASCII value of ${c} is: ${asciiVal}`);
// Prints: The ASCII value of A is: 65

/*Similarly, you can convert an ASCII value back to its 
corresponding character using String.fromCharCode():*/

let asciiVal1 = 65;
let c = String.fromCharCode(asciiVal);
console.log(`The character of ASCII value ${asciiVal} is: ${c}`);
// Prints: The character of ASCII value 65 is: A

/* Manipulating the ASCII value of characters can be quite useful in certain situations. 
For example, to convert a lowercase letter to uppercase (or vice versa), 
you could subtract (or add) 32 to the character's ASCII value. */

/* String Indexing Reminder

JavaScript strings work with a zero-based indexing system. 
This means that you can access specific characters in a string by using their position.

Please note: If you try to access an index that does not exist in your string, 
JavaScript will return undefined. 
Hence, it is always recommended to check the string length before accessing any index.

Here's an example:
*/

let text = "Hello, JavaScript!";
let index = 9; // The index we want to access

if (index < text.length) {
    let charAtIndex = text.charAt(index);
    console.log(`The character at index ${index} is: ${charAtIndex}`);
} else {
    console.log(`The index ${index} is out of bounds for the string!`);
}

// Prints: The character at index 9 is: v

/*Character Operations
Let's now explore character operations in JavaScript. 
String methods such as toUpperCase() and toLowerCase() 
are used to change the case of a character. 
Additionally, we can create custom functions to check whether a character is lowercase or uppercase.*/

//Using toUpperCase() and toLowerCase() to change the case of characters:

let s = "mark";
let result = '';
for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toUpperCase();
    // You can also use s[i] instead of s.charAt(i)
}
console.log(result);  // Prints: 'MARK'

s = "Mark";
result = '';
for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toLowerCase();
}
console.log(result);  // Prints: 'mark'

//Implementing custom functions to check the case of characters:

function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

console.log("Is 'a' lowercase? " + isLowerCase('a'));  // Prints: true
console.log("Is 'B' lowercase? " + isLowerCase('B'));  // Prints: false

console.log("Is 'a' uppercase? " + isUpperCase('a'));  // Prints: false
console.log("Is 'B' uppercase? " + isUpperCase('B'));  // Prints: true

/*In both functions, the && operator (logical AND) ensures that both conditions must be true for the function to return true. 
For example, in the isLowerCase function, it checks that the character equals its lowercase version 
(char === char.toLowerCase()) and that it does not equal its uppercase version (char !== char.toUpperCase()). 
Without the second condition, non-alphabetic characters would also be considered lowercase letters. 
Both conditions must be satisfied to confirm that the character is indeed lowercase.*/

//Checking whether a character is a letter, digit, or alphanumeric using regular expressions:

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isDigit(char) {
    return /^[0-9]$/.test(char);
}

function isLetterOrDigit(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isLetter('C'));  // Prints: true
console.log(isLetter('+'));  // Prints: false

console.log(isDigit('9'));  // Prints: true
console.log(isDigit('D'));  // Prints: false

console.log(isLetterOrDigit('6'));  // Prints: true
console.log(isLetterOrDigit('k'));  // Prints: true
console.log(isLetterOrDigit('?'));  // Prints: false


/*Regular Expressions:

Regular expressions, often abbreviated as regex, are sequences of characters that form a search pattern. 
They are mainly used for pattern matching with strings.

In this context, the regex /^[a-zA-Z]$/ checks if a single character string is either a lowercase (a-z) or uppercase (A-Z) English letter. 
The ^ and $ symbols are anchors that ensure the match is done on the entire string, meaning it should be exactly one letter. */

/* Lesson Summary and Practice

Excellent work! 
We have learned how to work with strings in JavaScript by looping over them, managing string indices, 
and manipulating characters using JavaScript methods. 
Moreover, we also have explored strategies to manage out-of-bounds indices while dealing with strings 
in our programs.

Real-world problems abound where string operations can be handy. 
From designing smart typewriters and web scrapers to crafting AI bots, 
mastering string operations is a valuable skill in the world of programming. 
Therefore, don't waste any time! Jump into the practice problems to reinforce your learning. 
Your journey is just beginning — see you in the upcoming sessions! */

//-------------------- Practice Examples: -----------------------------

// example 1: 

/*Modify the loop so that, instead of altering letter cases, 
it counts the number of lowercase characters in the text. 
Use the final console.log statement to display the count.*/

// const text1 = "JavaScript is awesome!";
// // TODO: Modify the loop to count the number of lowercase characters
// let cleanedText = '';

// for (let i = 0; i < text1.length; i++) {
//     let c = text1[i];
//     if (c === c.toLowerCase() && c !== c.toUpperCase()) {
//         cleanedText += c.toUpperCase();
//     } else if (c === c.toUpperCase() && c !== c.toLowerCase()) {
//         cleanedText += c.toLowerCase();
//     } else {  // Keep non-alphabetical characters unchanged
//         cleanedText += c;
//     }
// }

// // This should print the count of lowercase characters
// console.log(cleanedText);  // Initially outputs: "jAVAsCRIPT IS AWESOME!"

//solution: 
const text2 = "JavaScript is awesome!";
// TODO: Modify the loop to count the number of lowercase characters
//let cleanedText = '';
let lowerCaseCount = 0;

for (let i = 0; i < text2.length; i++) {
    let c = text2[i];
    if (c === c.toLowerCase() && c != ' ' && c != '?' && c != '!') {
        lowerCaseCount++;
    } 
}

// This should print the count of lowercase characters
console.log(lowerCaseCount); 


//example 2: 

/*There is a piece of code intended to convert a given string to uppercase. 
However, there's a subtle bug in it. Your task is to spot the issue and fix it. 
Keep in mind that only letter characters in the string should be converted to uppercase.*/

function processText(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if (/[a-zA-Z]/.test(c)) {
            newText += c.toUpperCase(); // missing the ()
        }
    }
    console.log("Processed Text:", newText);
}

processText("Happy Coding, Friends!");

// this works but you get: "processed text: HAPPYCODINGFRIENDS"
//I wonder if there's a way to do this that puts the space and the non-letter characters back in 

//example 3: 

/*Your task is to encrypt a message to secure communication. 
Write a JavaScript function that shifts each letter in the provided 
text one position forward in the alphabet while keeping non-alphabetical characters unchanged.*/

function encryptString(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        // TODO: Check if `c` is a letter and it is not the letter 'z' or 'Z'.
        if (c ) {

        }
        // If it is a letter other than 'z' or 'Z', shift its value by 1 in the ASCII table.
        // If the letter is 'z', change it to 'a'. If it is 'Z', change it to 'A'.
        // If `c` is not a letter, append it unchanged to the encrypted string.
    }
    return encrypted;
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")); // Should print out "Ifmmp, Kbwb!"

// this one was haaard! 

function encryptString(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        // TODO: Check if `c` is a letter and it is not the letter 'z' or 'Z'.
        if (('a' <= c && c <= 'y') || ('A' <= c && c <= 'Y')) {
            encrypted += String.fromCharCode(c.charCodeAt(0) + 1);
        } else if (c === 'z'){
            encrypted += 'a';
        } else if (c === 'Z') {
            encrypted += 'A';
        }
        else {
            encrypted += c;
        }
        // If it is a letter other than 'z' or 'Z', shift its value by 1 in the ASCII table.
        // If the letter is 'z', change it to 'a'. If it is 'Z', change it to 'A'.
        // If `c` is not a letter, append it unchanged to the encrypted string.
    }
    return encrypted;
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")); // Should print out "Ifmmp, Kbwb!"

// example 4: 

/* In this exercise, your goal is to implement the logic for a simple text encryption using the Caesar Cipher in JavaScript. 
You will need to fill in the placeholders to provide the correct calculations required to shift the characters within a string.*/

// Simple text encryption using Caesar Cipher technique
// The Caesar Cipher for `shift = 3` cyclically shifts every letter of the word by 3 positions:
// a -> d, b -> e, c -> f, ..., x -> a, y -> b, z -> c

// Implement the encryption logic by shifting each alphabet character
function encryptText(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (/[a-zA-Z]/.test(c)) {  // check if the character is a letter
            let shift = 3;
            if (/[A-Z]/.test(c)){
                encrypted += String.fromCharCode((c.charCodeAt(0) - 65 + shift) % 26 + 65)
            } else if (/[a-z]/.test(c)){
                encrypted += String.fromCharCode((c.charCodeAt(0) - 97 + shift) % 26 + 97);
            }
            // TODO: Use correct calculations to shift the character within the alphabet

            // Hint: 'A' = 65, 'a' = 97
            // Hint 2: You can use the modulo (%) operator to wrap around the alphabet
        } else {
            encrypted += c;  // keep non-letter characters unchanged
        }
    }
    return encrypted;
}

// Example text to encrypt
let originalText = "Hello, JavaScript!";
// The encryptText function call and console.log statement should remain the same as the solution
let encryptedText = encryptText(originalText);
console.log(encryptedText);  // Correct output after TODO should be 'Khoor, MdydVfulsw!'

// this one was also hard! 

// question 5: 

/* In this task, you are required to write a JavaScript program that takes an input string and 
calculates the number of digits present in that string. Consider the following example: 

If the input string is "Hello123, JavaScript World 2023!", the program should output: Number of digits: 7. */

// TODO: Define a function to count digits in the given text x

// The function should take one parameter: a string inputText x 

// TODO: Initialize a count variable to 0 x 

// TODO: Implement a loop that goes through each character in the string x 

    // TODO: If the character is a digit, increment the count x

// TODO: Return the count of digits

// TODO: Call the function with a sample string and log the output
function digitCounter(inputText) {
    let count = 0;
    for (i = 0; i < inputText.length; i++){
        let c = inputText[i];
        if (/\d/.test(c)) {
            count ++;
        }
    }
    return count;
}

console.log("Number of digits: " + digitCounter("hello i'm n3mb3r55"));