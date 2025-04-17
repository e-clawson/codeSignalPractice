/* 
Introduction

Hello, and welcome to our analysis lesson. 
In this lesson, we will be tackling a common problem in the field of string manipulations with JavaScript. 

We will learn how to find all occurrences of a substring within a larger string. 
The techniques you will master today can be utilized in numerous situations,
such as text processing and data analysis. 
 
 Are you ready to get started? Let's jump right in!
*/

//Task Statement and Description

/*
Here is this unit's task: We have two lists of strings, 
both of identical lengths — the first containing the "original" strings 
and the second containing the substrings. 

Our goal is to detect all occurrences of each substring within its corresponding original string and,
finally, return a list that contains the starting indices of these occurrences. 
Remember, the index counting should start from 0.
*/ 

//example

/* 
Let's consider the following lists: 

Original List: { "HelloWorld", "LearningJava", "GoForBroke", "BackToBasics" } 
Substring List: { "loW", "ear", "o", "Ba" }.

The following are the expected outputs: 

In "HelloWorld", "loW" starts at index 3. 
In "LearningJava", "ear" starts at index 1. In "GoForBroke", "o" appears at indices 1, 3, and 7.
In "BackToBasics", "Ba" starts at indices 0 and 6.

Thus, when findSubString(["HelloWorld", "LearningJava", "GoForBroke", "BackToBasics"], 
["loW", "ear", "o", "Ba"]) is invoked, the function should return:
*/ 

[
    "The substring 'loW' was found in the original string 'HelloWorld' at position(s) 3.",
    "The substring 'ear' was found in the original string 'LearningJava' at position(s) 1.",
    "The substring 'o' was found in the original string 'GoForBroke' at position(s) 1, 3, 7.",
    "The substring 'Ba' was found in the original string 'BackToBasics' at position(s) 0, 6."
]

//Although this task may seem fairly straightforward, it can prove challenging. 
//However, don't worry! We will break it down step by step.

//Step-by-Step Solution: Step 1, Creating the Output List

//Initially, we need to create a space to store our results. 
// Can you think of a JavaScript data type that would be ideal for this task? 
// That's right! An array would be perfect!

function findSubString(origStrs, substrs) {
    let result = [];
}

//Step 2: Pairing Strings and Locating First Occurrence

/*
To pair original strings with their substrings, we use a simple for loop. 
In our case, both lists share the same length, so we can use their indices to pair them correctly. 
To find the first occurrence of each substring in the corresponding original string, 
we utilize the indexOf method:
*/

for (let i = 0; i < origStrs.length; i++) {
    let start_pos = origStrs[i].indexOf(substrs[i]);
}

/* 
In string.indexOf(substr), we provide the substring that we intend to locate. 
The function starts its search from the beginning because we have not specified a starting position.
*/

// Step 3: Locating Subsequent Occurrences

/* 
The next step is to find the subsequent instances of the substring in the original.

To do this, we will use a while loop. 
But when should we stop looking for more occurrences? 
When our indexOf function returns -1, 
it indicates there are no more matches to be found.

In string.indexOf(substr, startPos), 
the startPos parameter specifies the position in the string at which to start the search. 
By updating startPos after each match, 
we ensure that the search continues from the correct position for subsequent occurrences.

Each time we locate a match, we record its starting index in the match_indices array, 
adjust the start_pos, and begin the search anew:
*/

let match_indices = [];
while (start_pos !== -1) {
    match_indices.push(start_pos);
    start_pos = origStrs[i].indexOf(substrs[i], start_pos + substrs[i].length);
}

//Step 4: Formatting and Storing the Results

/*
Finally, we can format the result using template literals for improved readability 
and add it to the result list:
*/

if (match_indices.length > 0) {
    let positions = match_indices.join(", ");
    let resultString = `The substring '${substrs[i]}' was found in the original string '${origStrs[i]}' at position(s) ${positions}.`;
    result.push(resultString);
}

return result;

//The Complete Solution

function findSubString(origStrs, substrs) {
    let result = [];

    for (let i = 0; i < origStrs.length; i++) {
        let start_pos = origStrs[i].indexOf(substrs[i]);
        let match_indices = [];

        while (start_pos !== -1) {
            match_indices.push(start_pos);
            start_pos = origStrs[i].indexOf(substrs[i], start_pos + substrs[i].length);
        }

        if (match_indices.length > 0) {
            let positions = match_indices.join(", ");
            let resultString = `The substring '${substrs[i]}' was found in the original string '${origStrs[i]}' at position(s) ${positions}.`;
            result.push(resultString);
        }
    }
    return result;
}

// Call the function
let result = findSubString(
    ["HelloWorld", "LearningJava", "GoForBroke", "BackToBasics"],
    ["loW", "ear", "o", "Ba"]
);
result.forEach(res => console.log(res));
// Output:
// The substring 'loW' was found in the original string 'HelloWorld' at position(s) 3.
// The substring 'ear' was found in the original string 'LearningJava' at position(s) 1.
// The substring 'o' was found in the original string 'GoForBroke' at position(s) 1, 3, 7.
// The substring 'Ba' was found in the original string 'BackToBasics' at position(s) 0, 6.

//---------------- practice examples: ------------------//

// example 1: 

/* 
Imagine you are working on a new feature for a text processing application. 
The feature requires you to provide users with the option to replace 
all occurrences of a certain substring in the entered text with a new substring.

You are tasked with writing a function, 
function replaceSubstring(text, old, newSubstr), that does the following:

- Accepts as input text (a string of length n, where 1 ≤ n ≤ 500, 
which includes only lowercase alphabets and spaces), 
old (a string of length k, where 1 ≤ k ≤ n, which includes only lowercase alphabets), 
and newSubstr (a string of length m, where 1 ≤ m ≤ 500, 
which includes only lowercase alphabets).

- Replaces every occurrence of the string old in text with the string newSubstr.

- Returns the updated text string with all replaced substrings.

For instance, your function might be called as follows:
replaceSubstring("hello world", "world", "friend")

In this case, the output would be: "hello friend"

This is because there is one occurrence of the substring 'world' in the string. 
This occurrence is replaced by 'friend', 
resulting in the return value "hello friend".
*/ 

function replaceSubstring(text, old, newSubstr) {
    // TODO: Implement the function
    //replace all occurances of a substring with a new substring 
    //break text into parts using old subtring 
    let newArray = text.split(old).join(newSubstr);
    return newArray
}

//example 2: 

/* 
You are given two lists, sentences and words, each comprising n strings, where n ranges from 1 to 100 inclusive. 
Each string in the sentences list has a length ranging from 1 to 500 inclusive. 
Each word in the words list is a single lowercase English alphabet word of length 1 to 10 inclusive.

Your task is to find all instances of each word in the corresponding sentence from the sentences list and replace them with the reverse of the word. 
The words and strings of sentences at the same index in their respective lists are deemed to correspond to each other. 
Note that the words are case-insensitive, meaning that if some of its characters are capitalized in the sentence, 
it also counts as an occurrence of the word.

Return a new list comprising n strings, where each string is the sentence from the sentences list at the corresponding index, 
with all instances of the word from the words list at the same index replaced with its reverse.

If the word is not found in the respective sentence, keep the sentence as it is.

Remember, while replacing the instances of word in the sentence, 
you should preserve the case of the initial letter of the word. 
If a word starts with a capital letter in the sentence, 
its reversed form should also start with a capital letter.

Example

For sentences = ["this is a simple example.", "the name is bond. james bond.", "remove every single e"] 
and words = ["simple", "bond", "e"], the output should be ["this is a elpmis example.", "the name is dnob. 
james dnob.", "remove every single e"].

*/ 

function solution(sentences, words) {
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
  
    function replaceWord(sentence, word, reversedWord) {
      let result = '';
      let i = 0;
  
      while (i < sentence.length) {
        const part = sentence.substring(i, i + word.length);
  
        if (part.toLowerCase() === word.toLowerCase()) {
          if (part.charAt(0) === part.charAt(0).toUpperCase()) {
            result += reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1);
          } else {
            result += reversedWord;
          }
          i += word.length;
        } else {
          result += sentence[i];
          i++;
        }
      }
      return result;
    }
  
    const results = [];
  
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      const word = words[i];
      const reversedWord = reverseString(word);
      const modifiedSentence = replaceWord(sentence, word, reversedWord);
      results.push(modifiedSentence);
    }
  
    return results;
  }
  
  module.exports = { solution };

//example 3: 

/*
Humans often make mistakes when they are typing quickly. 
In some cases, they may press two keys simultaneously, 
resulting in swapped consecutive characters in the text. 
Your task is to craft a JavaScript function that helps identify such typos. 
Specifically, you are asked to construct a function called spotSwaps that behaves as follows:

Given two strings, source and target, of the same length n 
( 1 ≤ n ≤ 500 ) inclusive, both comprise only lowercase English letters. 
The function should return the zero-based index of the swap in the source string 
if exactly one swap of consecutive elements can fix the target string to match the source string;
otherwise, the function should return -1. 

The index of the swap is the index of the left element in the swapped pair.

Note:

Characters can be swapped at most once.
Don't check for swaps at the last position of the string, 
since there is no character with which to swap.
If multiple swaps are needed, or if no swaps are needed, 
or it's impossible to fix via swaps, return -1.

Example

For source = "hello" and target = "hlelo", the output should be 1.

Good luck!
*/

function spotSwaps(source, target) {
    // TODO: implement
    let swapIndex = -1;
    //loop through source and target to see if they match 
    for (let i=0; i < source.length - 1; i++){
        if (source[i] != target[i]) {
            if (swapIndex != -1){
                return -1;
            }
            if (source[i] === target[i + 1] && source[i + 1] === target[i]) {
                swapIndex = i;
                i++; //skip the next index 
            } else {
                return -1;
            }
        }
    }
    return swapIndex;
}


module.exports = { solution: spotSwaps };
