/*Revising Arrays and Strings
As our starting point, it's crucial to understand how arrays and strings function in JavaScript.

An array is a built-in object that provides a way to store multiple values in a single variable and is mutable 
(we can change it after creation), while strings are immutable (unalterable post-creation). 

Let's see examples:
*/
const myList = [1, 2, 3, 4];
let myString = "hello";

// Now let's try to change the first element of both these features
// Using index to change the element at the specified index (0 in this case)
myList[0] = 100;
myString[0] = "t"; // does not change anything
// The following method does not change the string in place,
// but returns a new string where 'h' is replaced with 'H'
myString.replace('h', 'H');
// So it is possible to obtain a new string like this:
const newString = myString.replace('h', 'H');

console.log(myList); // prints [100, 2, 3, 4]
console.log(myString); // prints hello
console.log(newString); // prints Hello

/*Diving Into Lists
Arrays in JavaScript allow us to organize data so that each item holds a definite position or an index. 
The index allows us to access or modify each item individually. 
For accessing elements, JavaScript arrays use zero-based indexing. 
This means the first element in the array is accessed with index 0, the second element with index 1, and so on. 
To get the last element of the array, we subtract one from the array's length 
(fruits.length - 1 in the example below).

Working with arrays in JavaScript is as simple as this:
*/
const fruits = ["apple", "banana", "cherry"];

// Add a new element at the end
fruits.push("date"); // ['apple', 'banana', 'cherry', 'date']

// Inserting an element at a specific position
fruits.splice(1, 0, "bilberry"); // ['apple', 'bilberry', 'banana', 'cherry', 'date']

// Removing a particular element
fruits.splice(fruits.indexOf("banana"), 1); // ['apple', 'bilberry', 'cherry', 'date']

// Accessing elements using indexing
const firstFruit = fruits[0]; // apple
const lastFruit = fruits[fruits.length - 1]; // date

/*
The splice method takes three parameters:

The start index where elements will be added or removed.
The number of elements to remove from the start index.
The elements to add at the start index.
In the example fruits.splice(fruits.indexOf("banana"), 1);:

fruits.indexOf("banana") returns the index of the element "banana", which is 2 in this case.
The first parameter 2 specifies the start index for removal.
The second parameter 1 indicates that we want to remove one element starting from index 2.
As a result, the element "banana" at index 2 is removed from the array.
*/

/*Understanding Strings
Think of strings as a sequence of letters or characters. 
So, whether you're writing down a message or noting a paragraph, it all boils down to a string in JavaScript.
Strings are enclosed by double quotes or single quotes.
*/

const greetingString = "Hello, world!";

// Accessing characters using indexing
const firstChar = greetingString[0]; // 'H'
const lastChar = greetingString[greetingString.length - 1]; // '!'

// Making the entire string lowercase
const lowercaseGreeting = greetingString.toLowerCase(); // "hello, world!"

/*Though strings are immutable, we can use string methods such as .toLowerCase(), .toUpperCase(), and .trim() to effectively work with them. 
These methods essentially create a new string for us.*/

/*Indexing and Common Operations
Both arrays and strings allow us to access individual elements through indexing. 
In JavaScript, we start counting from 0, implying the first element is at index 0, 
the second at index 1, and so on. 
Negative indexing is not directly supported in JavaScript, but you can work around it
 by adjusting indices based on the length of the collection.

We have many operations we can perform on our lists and strings. 
We can slice them, concatenate them, and even find an occurrence of a particular element!
*/

const myList2 = [1, 2, 3, 4, 5];
const myString2 = "Hello";

// Slicing: `slice` for array and `substring` or `slice` for strings
// Note: The first index is inclusive and the second index is exclusive 
const sliceList = myList2.slice(2, 4); // [3, 4]
const sliceString = myString2.substring(1, 3); // "el"

// Concatenation: `concat` or spread operator for lists and `+` operator or template literals for strings
const concatenateList = myList2.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateListSpread = [...myList2, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateString = `${myString2}, world!`; // "Hello, world!"
const concatenateStringPlus = myString2 + ", world!"; // "Hello, world!"

// Finding the index of an element in a list or a string
// `indexOf` returns the first occurrence index of the element
// returns -1 if the list or the string doesn't contain the element
const indexList = myList2.indexOf(3); // 2 - Index of element '3'
const indexString = myString2.indexOf('e'); // 1 - Index of character 'e'

// Sorting items in array in non-increasing order
const sortedList = [...myList2].sort((a, b) => b - a); // [5, 4, 3, 2, 1]

/*When using the spread operator for concatenation (...myList), the elements of myList are expanded into individual elements and combined with additional elements [6, 7, 8].

Template literals, enclosed by backticks (`), allow you to embed expressions inside a string using ${expression}. 
This provides a cleaner and more readable way to concatenate strings compared to using the + operator.

The spread operator, used in [...myList], creates a shallow copy of myList, ensuring the original 
array remains unchanged. The sort method with a comparison function (a, b) => b - a 
sorts the array in non-increasing order. Here's how it works:

The comparison function receives two arguments, a and b.
If the returned value is negative, a should come before b.
If the returned value is positive, b should come before a.
If the returned value is zero, their positions are unchanged relative to each other.
By subtracting a from b, it sorts the elements in descending order (from highest to lowest). 
Thus, sortedList will contain [5, 4, 3, 2, 1], a sorted copy of myList in descending order.

*/

/* practice: 
In this practice task, you will refine your packing list for a trip. Instead of adding 'sunglasses' 
at the end of the list, you need to insert them precisely at index 2. 
Recall how the splice method works for Arrays from the lesson, and apply that knowledge here.
*/

// A packing list for a journey using JavaScript arrays
let travelItems = ["passport", "camera", "sunscreen", "hat"];

// Currently, sunglasses are being appended to the list.
// Your task is to add them at index 2 instead.
// travelItems.push("sunglasses"); 
// console.log("Updated travel items:", travelItems);

travelItems.splice(2,0, "sunglasses");
console.log("Updated travel items:", travelItems);

//practice 2 
/*It's time to validate your packing list for the journey ahead!
There are bugs in the code preventing it from running as expected. 
Explore the code, find all the anomalies, and fix them. */

// Start by creating an array representing suitcase items
let suitcase = ["shirt", "shorts", "toothbrush", "shoes"]; 

// Let's add "sunglasses" at the end of our suitcase
suitcase.push("sunglasses"); //this is fine - works 

// Oops! We forgot socks. Let's insert socks at index 2
suitcase.splice(2, 0, "socks");
console.log("Updated suitcase: ", suitcase);

// Now, let's get the first and the last item from the suitcase
let firstItem = suitcase[1]; // 'shirt' - change from [1] to [0] - indexes start at 0
let lastItem = suitcase[suitcase.length - 1]; // 'sunglasses' - change to -1 from -2 
console.log(firstItem + " " + lastItem);

// Finally, let's remove "toothbrush" as we prefer to buy a new one at our destination
let indexOfToothbrush = suitcase.indexOf("toothbrush"); //change from toothpaste to toothbrush 

suitcase.splice(indexOfToothbrush, 1)

// if (indexOfToothbrush > -1) {
//     suitcase.splice(indexOfToothbrush, 1);
// }
console.log("Final suitcase contents: ", suitcase);
// Expected output:
// Final suitcase contents: ["shirt", "shorts", "socks", "shoes", "sunglasses"]

/* Practice 3: 
Now that you've learned how to interact with Arrays in JavaScript, can you expand an Array yourself?
Modify the code to include a couple more essentials for your journey.
*/

// Let's simulate packing a bag for travel with Arrays and explore some operations!

let bag = ["t-shirt", "shorts", "sandals"];

// TODO: Add "sunglasses" to our bag at the end

bag.push("sunglasses")

// TODO: Insert "hat" into the bag at the position right after "t-shirt"

bag.splice(1,0, "hat");

// Printing out our bag to see all items packed
console.log(bag); 
// Expected output with TODOs completed: ['t-shirt', 'hat', 'shorts', 'sandals', 'sunglasses']

/* practice 4?
To manage your items for a trip efficiently, 
you need to use array methods to replace a specific 
item in your packing list with another item.

Follow these steps:

Find the index of the item you want to replace.
Replace that item with another item using the index found.
Hint: Use Array methods for this task.
*/

// Travel Packing List and Replacement
const packingList = ["clothes", "toothbrush", "passport", "camera"];

const itemToCheck = "passport";
const replacementItem = "sunglasses";

// TODO: Find the index of itemToCheck in the packingList


// TODO: Replace itemToCheck with replacementItem in the packingList using the index found

// Print out the results
console.log("Updated Packing List: " + packingList);

/* Time to pack for your trip, Space Voyager! 
Write the complete JavaScript code to prepare your virtual suitcase, 
and make sure to send off a proper farewell message in uppercase letters.
*/

// Initialize an empty array named 'suitcase'

// TODO: Add items to your suitcase

// Declare a string variable for your goodbye message

// TODO: Assign a farewell message to the variable

// Access the first and last item in your suitcase
// TODO: Print the first item
// TODO: Print the last item

// Send off with a farewell in uppercase
// TODO: Convert and print the farewell message in uppercase

/* 
Your final challenge in this lesson, Space Explorer, 
is to manipulate a string - the essential skill of any Galactic Pioneer. 
You're given a mission name (a JavaScript string), and your task is to 
change its first and last characters keeping all the other letters intact. 
Show the original first and last characters, make the changes, and then 
display the updated string (make sure the program prints "Pork" as the updated string). 
Remember, JavaScript strings are immutable, so you need to create a new string with the 
modified first and last letters!

Hints:

You can use either the slice or substring method to extract parts of the string.
When using the slice method, you can use negative indexing. 
Negative indexing starts from the end of the string, with -1 being the last character,
 -2 being the second last, and so on. For example, str.slice(1, -1) 
 extracts the string from the second character to the second last character.
*/

// Given mission name
const missionName = "Sort";

// TODO: Print the original first and last character of the mission name
let originalFirst = missionName[0];
let originalLast = missionName[missionName.length -1];

// TODO: Create a new string with the first letter as 'P' and last letter as 'k', the other letters should remain unchanged.
let newMissionName = missionName.replace('S', 'P');
let newMissionName2 = newMissionName.replace('t', 'K');
// TODO: Print the updated mission name
console.log(newMissionName2);
// Make sure it prints "Pork"