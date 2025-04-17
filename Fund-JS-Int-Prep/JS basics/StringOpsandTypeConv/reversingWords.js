/* 
Today, we'll delve into a task that bolsters your comprehension of strings and enhances your creativity. 
The task involves splitting a string into words and then reversing each word as if reflected in a mirror. 
*/ 

/* 
Task Statement and Description

You're tasked with considering a string filled with words and writing a JavaScript function 
that accepts this string. The function should reverse the character order of each word 
and form a new string consisting of these reversed words.

Here's what you need to keep in mind:

- The input string will contain between 1 and 100 words.
- Each word in the string is a sequence of characters separated by whitespace.
- The characters can range from a to z, A to Z, 0 to 9, or even an underscore _.
- The provided string will neither start nor end with a space, and double spaces won't be present either.
- After reversing the words, your program should output a single string with the reversed words preserving their original order.

Example:

Consider the input string "Hello neat javascript_lovers_123".

The function works as follows:

- Hello becomes olleH
- neat becomes taen
- javascript_lovers_123 becomes 321_srevol_tpircsavaj
- Afterward, it forms a single string with these reversed words, producing "olleH taen 321_srevol_tpircsavaj".

Therefore, if you call reverseWords("Hello neat javascript_lovers_123"), the function should return "olleH taen 321_srevol_tpircsavaj".

Let's begin breaking this down!
*/ 

/*
Step-by-Step Solution Building: Step 1

Our first task is to separate the words in the sentence.
In JavaScript, the split() method of the String object allows us to achieve this easily. 
The delimiter you'll use in the split() method is a single space " ". 
Here is a sample code to illustrate this:
*/ 

let inputStr = "Hello neat javascript_lovers_123";
let words = inputStr.split(" ");

// Now the array 'words' holds all the words of the string
console.log(words); // Output: [ 'Hello', 'neat', 'javascript_lovers_123' ]

// Note that " " as the delimiter ensures that the string is split at each space, 
// effectively separating the words.

/* 
Step-by-Step Solution Building: Step 2

Next, we need to reverse each word separated in the previous step. 
In JavaScript, we can use array methods to achieve this. 
The map() method is particularly useful here as it creates a new array 
populated with the results of calling a provided function on every element in the calling array. 
By applying map(), we can transform each word individually.

In our case, each word is:

Split into an array of characters using split('').
Reversed using the reverse() method.
Joined back into a string using the join('') method, which concatenates the reversed characters without any separators.
Here's the updated code illustrating this:
*/ 

let reversedWords = words.map(word => {
    let reversedWord = word.split('').reverse().join('');
    console.log(reversedWord); // Prints each reversed word
    return reversedWord;
  });
  
  // 'reversedWords' now contains the reversed words

/* 
Step-by-Step Solution Building: Step 3

Finally, we need to consolidate these reversed words into a single string, separated by spaces. 
We can achieve this using the join() method in JavaScript. Here's how we do that:
*/ 
let finalStr = reversedWords.join(' ');

// The join(' ') method will concatenate all the words in the array, separating them with spaces.

/*
Final Solution
It remains for us to combine the code from the steps together in a function reverseWords and call it to test.
*/ 

function reverseWords(inputStr) {
    let words = inputStr.split(" ");
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

// Call the function
console.log(reverseWords("Hello neat javascript_lovers_123")); // prints: 'olleH taen 321_srevol_tpircsavaj'

//---------------- practice: ---------------

//example 1: 

/* 
You are given a string of n characters, with n varying from 1 to 1000, inclusive. 
Your task is to write a JS function that takes this string as input, 
applies the following operations, and finally returns the resulting string.

1. Split the given string into individual words, using a space as the separator.
2. Convert each word into a list of its constituent characters, 
and shift each list of characters once to the right (with the last element moving to the first position).
3. After the rotations, reassemble each word from its list of characters.
4. Join all the words into a single string, separating adjacent words with a single space.
5. Return this final string as the function's output.

The constraints for the problem are as follows:

- The input string will neither start nor end with a space, nor will it have multiple consecutive spaces.
- Each word will contain only alphabets and digits, and its length will range from 1 to 10.
- The words are case-sensitive; for example, 'word' and 'Word' are considered distinct.
- Your program should output a single string with the words rotated by their lengths while preserving their original order.

As an illustration, consider the input string "abc 123 def". Applying the stated operations results in the output "cab 312 fde".

*/ 

function solution(s) {
    // TODO: Implement the solution here
    //step 1: seperate the words 
    let words = s.split(" ");
    let shiftedWords = words.map(word => {
    let chars = word.split(''); // Split word into characters
    let lastChar = chars.pop(); // Remove the last character
    chars.unshift(lastChar); // Add it to the beginning
    return chars.join(''); // Join characters back into a word
    });
return shiftedWords.join(' ');
}

module.exports = { solution };

//example 2: 
/*
Given a string consisting of words separated by whitespace,
your task is to write a function that accepts this string. 
It then replaces each character in the words with the corresponding 
character opposite in the English alphabet and stitches them all 
together to form a new string.

Here's what you need to consider:

- The input string will include between 1 and 100 words.
- A word is composed of characters ranging from a to z or A to Z. So, if a word contains a lowercase 'a', for instance, it should be replaced with 'z', 'b' with 'y', 'c' with 'x', and so on, maintaining the same case. For words with an uppercase 'A', it should be replaced with 'Z', 'B' with 'Y', 'C' with 'X', and so forth, while preserving the uppercase.
- The given string will not start or end with a space, and there will be no occurrence of double spaces.
- After transforming the characters of the words, form a new string by taking the last word first and appending the remaining words in their original order, each separated by spaces.

Note: The opposite letter mappings are as follows: a ↔ z, b ↔ y, c ↔ x, ..., m ↔ n, n ↔ m, ..., x ↔ c, y ↔ b, z ↔ a. The mapping is case-sensitive.

Example:

For the input string "CapitaL letters", the output should be "ovggvih XzkrgzO".
*/
function solution(inputStr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charMapping = {};
    
    // Create the character mapping
    for (let i = 0; i < alphabet.length; i++) {
        charMapping[alphabet[i]] = alphabet[alphabet.length - 1 - i];
        charMapping[alphabetUpper[i]] = alphabetUpper[alphabetUpper.length - 1 - i];
    }

    // Split the input string into words
    const words = inputStr.split(" ");

    // Transform each word
    const transformedWords = words.map(word => 
        word.split('').map(char => charMapping[char] || char).join('')
    );

    // Reorder and join the words
    const lastWord = transformedWords.pop();
    const result = [lastWord, ...transformedWords].join(" ");
    
    return result;
}

module.exports = { solution };

//example 3: 

/*
You are given a string filled with words. 
Your task is to write a JavaScript function that takes this string as input. 
Your function should then capitalize the first letter of each word while making
the rest of the letters lowercase. 
Finally, it should recombine the words into a new string where every word starts with a capital letter.

Here's what to keep in mind:

The input string will contain between 1 and 100 words.
Each word is a sequence of characters separated by white space.
Words consist of characters ranging from a to z, A to Z, 0 to 9, or even an underscore _.
The provided string will not start or end with a space, and it will not contain double spaces.
After capitalizing the first character of each word and converting the rest to lowercase, the program should return a single string in which the words maintain their original order.
If the first character of a word is not a letter (like a number or an underscore), keep that first character as is, but still make the rest of the characters lowercase.
Ignore cases where punctuation marks are attached to words (such as "Hello," or "world!"). Punctuation attached to words should not prevent the word from being capitalized based on the given rules.

Example

For the input string "SoME rAndoM _TeXT", the output should be "Some Random _text".
*/

function solution(inputStr) {
    // TODO: implement the function
    //step 1 - split the string at the spaces 
    //step 2 - capitalize the first letter, make sure the others aren't capitalized (all.toLowerCase and then take the first one and capitalize)
    //step 3 - recombine 
    
    let words = inputStr.split(" "); //split the string at the spaces
    
    let capitalizedWords = words.map(word => {
        let lowerCaseChars = word.toLowerCase(); //make all lower case 
        let characters = lowerCaseChars.split(''); //split word into characters 
        let firstChar = characters.shift().toUpperCase(); //remove just the first character and capitalize
        characters.unshift(firstChar); // add this back to the string 
        return characters.join('');
    })
    return capitalizedWords.join(' ');
}

module.exports = { solution };


