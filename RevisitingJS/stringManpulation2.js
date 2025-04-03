/*Lesson Overview

Welcome! In this lesson, we'll delve into the basic string manipulation features of JavaScript, 
which include string tokenization, string concatenation, trimming of whitespace from strings, 
and type conversion operations. */

/*Tokenizing a String in JavaScript

In JavaScript, we can use the split method from the String class to tokenize a string, 
essentially splitting it into smaller parts or 'tokens'. */

let sentence = "JavaScript is an amazing language!";
let tokens = sentence.split(" ");

tokens.forEach(token => console.log(token));

// Output:
// JavaScript
// is
// an
// amazing
// language!

/*We start by declaring a string variable sentence containing the text "JavaScript is an amazing language!". 

On the second line, we use the split method with a space character " " as the delimiter. 
This method splits the sentence every time it encounters a space and returns an array of substrings or tokens. 
In this case, the resulting tokens array will contain ["JavaScript", "is", "an", "amazing", "language!"]. 
We then use the forEach method to iterate over each element (token) in the tokens array. 
The arrow function token => console.log(token) is executed for each token, 
printing each word to the console, one per line. */


/*Exploring String Concatenation
In JavaScript, the + operator or template literals can be used to concatenate strings into a larger string:
*/

//Using the + Operator:
let str1 = "Hello,";
let str2 = " World!";
let greeting = str1 + str2;
console.log(greeting);  // Output: "Hello, World!"

//Using Template Literals:
let str3 = "Hello,";
let str4 = " World!";
let greeting2 = `${str3} ${str4}`;
console.log(greeting);  // Output: "Hello, World!"

//You can also concatenate arrays of strings in JavaScript using the join method:

//Using Array join Method:
let strings = ["Hello", " World!", " JavaScript", " Arrays!"];
let result = strings.join("");
console.log(result);  // Output: "Hello World! JavaScript Arrays!"

//In the example above:

/*Array Initialization: We initialize an array with several strings.
Using the join Method: We use the join method to concatenate all the elements of the array into a single string. 
The join method can also take an optional delimiter as an argument if you need to insert characters (like commas or spaces) 
between the elements. */

//Trimming Whitespace from Strings:

/*In JavaScript, the trim method can remove both leading and trailing whitespace from a string:*/

let str = "    Hello, World!    "; // string with leading and trailing spaces
str = str.trim(); // remove leading and trailing spaces
console.log(str); // Output: "Hello, World!"

//In this example, trim is used to remove leading and trailing whitespace from a string.

/*JavaScript Type Conversions
We can convert strings to numbers using methods like parseInt (string to integer) and parseFloat (string to float), 
and other data types to strings using String: */

let numStr = "123";
let num = parseInt(numStr);
console.log(num);  // Output: 123

let floatStr = "3.14";
let pi = parseFloat(floatStr);
console.log(pi);  // Output: 3.14

let age = 20;
let ageStr = String(age);
console.log("I am " + ageStr + " years old."); // Output: I am 20 years old.

//In this code, we use parseInt, parseFloat, and String for type conversions.

//Integrating String Tokenization and Type Conversions

//In some cases, we may need to combine all the methods discussed:
let numbers = "1,2,3,4,6";
let numArray = numbers.split(",");
let sum = 0;

numArray.forEach(numStr => {
    sum += parseInt(numStr);
});

let average = sum / numArray.length;
console.log("The average is " + average);  // Output: The average is 3.2

/* By integrating these methods, we can transform the string 1,2,3,4,6 into an array of integers, 
calculate their average, and display the result. */

// --------------------- practice: --------------------------

// example 1: 

/*Modify the given JavaScript code to combine the astronaut's 
name and year of birth into a single string using array methods instead of using string concatenation with a loop. 
You should replace the loop inside the join function with the array join method. 
The aim of the code is to parse the given data in astronautsData into a more readable format.*/ 

function split(s, delimiter) {
    return s.split(delimiter);
}

// Modify this function to use array's join method.
// function join(arr, delimiter) {
//     // #TODO: Replace the following loop operations with array join method
//     let joined = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== 0) {
//             joined += delimiter;
//         }
//         joined += arr[i];
//     }
//     return joined;
// }

function join(arr, delimiter) {
    // #TODO: Replace the following loop operations with array join method
    let joined = arr.join(delimiter); // updated code 
    return joined;
}

let astronautsData = "Buzz Aldrin,1930;Yuri Gagarin,1934;Valentina Tereshkova,1937";
let astronautsList = split(astronautsData, ";");
let cleanedAstronauts = [];

astronautsList.forEach(function(astronaut) {
    cleanedAstronauts.push(join(split(astronaut, ","), " "));
});

cleanedAstronauts.forEach(function(cleanedAstronaut) {
    console.log(cleanedAstronaut);
    // Should output:
    // Buzz Aldrin 1930
    // Yuri Gagarin 1934
    // Valentina Tereshkova 1937
});

//example 2: 

/*Your latest assignment involves debugging a segment of code in the 
Employee Information Management System for your JavaScript project. 
There is code designed to neatly present employee data, 
but it is currently not functioning correctly. 
Can you identify the error and correct it? */

// Employee Information Management System

let employeeData = "Name: John Doe, Age: 30, Role: Engineer";

// Split employee data into an array of strings
let employeeInfoArray = employeeData.split(",");

let cleanedData = "";

employeeInfoArray.forEach(info => {
    cleanedData += info + "\n";
});

console.log(cleanedData);

// Expected Output:
// Name: John Doe
// Age: 30
// Role: Engineer

// this one was super easy, it was splitting at the spaces instead of at the commas 
//changed line 170 from let employeeInfoArray = employeeData.split(" "); to 
//let employeeInfoArray = employeeData.split(",");

//example 3: 

/*You have a list of employees, each with their name, job title, and age, all in a single string. 
Your task is to split and process each employee's information, 
check if they are under 40 years old, and if so, 
append a note indicating they're eligible for a junior position. 
Display the result in a clear and readable format. */

const employeeData2 = "Alice,Developer,30|Bob,Manager,45|Charlie,Designer,25";
const employeeList = employeeData2.split("|");

employeeList.forEach(employee => {
    // TODO: Tokenize the employee data and determine eligibility for a junior position
    let employeeInfo = employee.split(",");
    let name = employeeInfo[0];
    let role = employeeInfo[1];
    let age = parseInt(employeeInfo[2]);
    let elligible = "";
    if (age < 40) {
        elligible = "Elligible";
    } else if(age > 40) {
        elligible = "Not Elligible";
    }
    console.log(`Name: ${name} - Role: ${role} - Age: ${age} - ${elligible}`)

    // TODO: Display the result in format `Name: <name> - Role: <role> - Age: <age> - <Eligible/Not Eligible>`
});

//this one was easy 


//example 4: 

/* Imagine you are in charge of tracking astronaut missions to various planets. 
You have a string containing astronaut names and the planets they are exploring. 
Your task is to write a JavaScript program that processes this string and prints 
out a summary of each astronaut's mission. */

function processAstronautData(data) {
    let details = data.split(";");
    
    details.forEach(detail => {
        // TODO: Split the detail into astronaut name and planet,
        //       and strip away the whitespace.
        let trimmedDetails = detail.trim();
        let splitDetails = trimmedDetails.split("-");
        let name = splitDetails[0];
        let planet = splitDetails[1];
        
        console.log(`Astronaut ${name} is exploring ${planet}.`);
        
        // TODO: Print the statement in the format "Astronaut [name] is exploring [planet]."
    });
}

let astronautData = "    Neil-Mars; Buzz-Jupiter; Sally-Venus    ";
processAstronautData(astronautData);

//also fairly straightforward though I am sure there would be a better solution with fewer variables being declared 

// example 5: 