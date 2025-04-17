/*Topic Overview

Welcome! In this lesson, we're exploring special instructions 
in the JavaScript language: Conditional Statements,
along with the break and continue statements. 
As we've learned, loops allow us to execute a block of code numerous times. 
By combining these loops with conditional statements and incorporating the useful break and continue instructions, 
we achieve more robust and efficient code. Let's dive in!
*/

/*The 'if' Statement

In JavaScript, the if statement triggers actions in our code based on a specific condition. 
Consider this straightforward example, where the if statement determines which message to print 
based on the value of temperature:
*/

let temperature = 15;
if (temperature > 20) {
    console.log("Wear light clothes."); // This message will print if the temperature is over 20.
} else {
    console.log("Bring a jacket."); // This message will print otherwise.
}
// Output: Bring a jacket.

//We can evaluate multiple conditions using else if. 
//This phrase means, "If the previous condition isn't true, then check this one":

let temperature2 = 15;

if (temperature2 > 30) {
    console.log("It's hot outside!"); // This will print if the temperature is over 30.
} else if (temperature2 > 20) {
    console.log("The weather is nice."); // This will print if the temperature is between 21 and 30.
} else {
    console.log("It might be cold outside."); // This will print if the temperature is 20 or below.
}
// Output: It might be cold outside.

/*The 'break' Statement

We use the break statement whenever we want to exit a loop prematurely once a condition is met:
*/

const numbers = [1, 3, 7, 9, 12, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("The first even number is: " + numbers[i]); // This prints the first even number.
        break; // This stops the loop after printing the first even number.
    }
    console.log("Number: " + numbers[i]);
}

// Output:
// Number: 1
// Number: 3
// Number: 7
// Number: 9
// The first even number is: 12

/* The 'continue' Statement
The continue statement bypasses the rest of the loop code for the current iteration only:
*/

for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue; // This skips the print command for '3'.
    }
    console.log(i); // This prints the numbers from 0 to 5, except 3.
}
// Output:
// 0
// 1
// 2
// 4
// 5

/*Use-case with a For Loop
By utilizing the tools we've covered so far, we can craft more flexible loops. 
Here's a snippet where we terminate the loop once we find "Charlie":
*/

const names = ["Alice", "Bob", "Charlie", "David", "Charlie"];

for (const name of names) {
    if (name === "Charlie") {
        console.log("Found Charlie!"); // This prints when 'Charlie' is found.
        break; // This stops the loop after finding 'Charlie'.
    }
}
// Output:
// Found Charlie!

//------------- Practice: --------------// 

//example 1: 

/* Change the current code so that the loop stops when it encounters a temperature 
below 20 degrees Celsius rather than stopping at the current temperature threshold. 
Observe how the break statement alters the control flow in JavaScript. */

const temperatures = [25, 30, 18, 22, 30, 35];

// TODO: break the loop when encountering a temperature under 20
for (let temp of temperatures) {
    if (temp < 20) {
        console.log("It is very cold.");
        break;
    } else if (temp > 25) {
        console.log("It is warm outside.");
        continue;
    }
    console.log("Might be chilly, dress appropriately.");
}

//example 2: 

/* In your journey as a programmer, understanding how to debug code is crucial. 
In the starter code provided, a while loop iterates over an array of temperature 
readings, printing a particular message depending on the temperature value. 
However, the code contains an error that disrupts its proper execution. 
Your task is to locate and correct the mistake so that the program functions as 
intended. Take on the role of a debugger and get the code working correctly!
*/

// const temperatures3 = [25, 21, 17, 28, 35, 19, 22];
// let i = 0;
// const listSize = temperatures3.length;

// while (i < listSize) {
//     if (temperatures3[i] > 20) {
//         console.log(`Temperature ${temperatures3[i]} is greater than 20.`);
//         continue;
//     }
//     console.log(`Temperature ${temperatures3[i]} might require a jacket.`);
//     i++;
// }

//this just returns the first one over and over again because it's not incrementing 
//neet to add an incrementor 

const temperatures3 = [25, 21, 17, 28, 35, 19, 22];
let i = 0;
const listSize = temperatures3.length;

while (i < listSize) {
    if (temperatures3[i] > 20) {
        console.log(`Temperature ${temperatures3[i]} is greater than 20.`);
        i++;
        continue;
    }
    console.log(`Temperature ${temperatures3[i]} might require a jacket.`);
    i++;
}

//this one works 

// example 3: 

/* In our weather display program, we want to refine the output according to 
the day's temperatures. 
Complete the given JavaScript code so that it outputs clothing recommendations 
based on temperature readings. */ 

const temperatures4 = [16, 14, 20, 22, 19, 13];

// Loop through the temperatures to suggest clothing
for (const temp of temperatures4) {
    if (temp < 15) {
        console.log("Wear warm clothes.");
    } else if (temp >= 20) {
        // TODO: Print a suggestion to wear light clothes.
        console.log("wear light clothes.")
        // TODO: Add a line here that will skip the final print statement when it's warm enough for light clothes.
        continue;
    }
    console.log("Consider a light jacket."); // Suggestion for in-between temperatures
}

// example 4: 

/* Can you modify the JavaScript code to control the flow based on temperature conditions? 
Go ahead and give it a try! */

const temperatures5 = [16, 21, 20, 14, 22, 19, 13];

for (let temp of temperatures5) {
    // TODO: Print "It's really hot." and exit the loop if temperature is above 30
    if (temp > 30) {
        console.log("It's really hot.");
        break;
    } else if (temp < 20){
        console.log("It's quite chilly");
        continue;
    }
    // TODO: Print "It's quite chilly." and skip to the next iteration if temperature is below 20
    else if (temp < 30 && temp > 20){ 
        console.log("Lovely weather.");
    }
}

//example 5 

/* In this exercise, we will venture into the world of conditional looping with the JavaScript language, 
making use of if statements alongside break and continue to control the flow of our loops. 
You are going to define a list of temperature readings and then iterate over this list, 
applying the relevant checks and statements as instructed. Let's begin!

Ensure you write the entire loop and conditions from scratch as part of this task. */

// TODO: Define an array of temperatures

// TODO: Write a loop to go through each temperature in the array

// TODO: Add an 'if' statement to check if the temperature is over 30
    // TODO: Print a message for being really hot and then exit the loop

// TODO: Add an 'else if' condition before the general temperature message to check if the temperature is below 15
    // TODO: For temperatures that are too cold, print a specific message and skip to the next one

// TODO: Print a message saying the temperature is nice for all other cases

let temps = [12, 23, 45, 38, 19, 88]

for (let temp of temps) {
    if (temp > 30) {
        console.log("It is really hot");
        break;
    } else if (temp < 15) {
        console.log("It is too cold");
        continue;
    } else {
        console.log("the weather is nice");
    }
}

