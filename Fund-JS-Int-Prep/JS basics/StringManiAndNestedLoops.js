/*
 We are going to unravel a compelling challenge that will refine our skills in string manipulation. This lesson will place particular emphasis on nested loops. Prepare yourself for an intriguing adventure as we explore how to extract odd-indexed characters from each word in a sentence, but only if the word has an even number of characters. Does that sound exciting? Let's dive in!
*/

/*
Task Statement

The task we'll be demonstrating is as follows: We will work with a string representing a sentence in which words are separated by spaces. 

Your challenge involves creating a JavaScript function that identifies the odd-indexed characters of words that have an even number of characters and then 
combines these characters into a single string, maintaining the order in which they appeared in the sentence.

Consider this example: "JavaScript programming language is versatile." 
The word JavaScript has 10 characters (an even number), 
and we'll select the odd-indexed characters from this word, specifically, 
a, a, c, i, t. Similarly, we'll select a, g, a, e from language, 
s from is, and e, s, t, l, . from versatile. 
We'll skip the word programming because it has an odd length.

If our function is working correctly, it should return "aacitagaesestl.". 
Isn't it fascinating to see what we can extract from a simple sentence?

*/

/*
Solution Building: Step 1

We will start by splitting the sentence into words using the split method. 
This will help us create an array containing all the words in the sentence.
*/

function solution(sentence) {
    const words = sentence.split(" ");
    // we will proceed progressively
}

/*
Solution Building: Step 2

We now introduce nested loops: an outer loop that iterates over every single word, 
and an inner loop that checks every character within each word. 
First, we'll use an if condition to verify whether a word has an even length. 
We can determine this by checking whether the length of the word mod 2 equals zero. 
If it does, the word has an even length!
*/

function solution(sentence) {
    const words = sentence.split(" ");

    for (const w of words) {
        if (w.length % 2 === 0) {  // checks if the length of the word is even
            // we are building up our solution gradually
        }
    }
}

/*

Solution Building: Step 3

With our outer loop set, we're ready to implement our inner loop. 
We aim to iterate only over the odd-indexed characters in each word of even length. 
To accomplish this, we'll start from an index of 1 and increment by 2 each time. 
This method ensures our loop only selects the characters at odd indexes.

We'll then append these characters to our result string, which will be returned as our final output.

*/

function solution(sentence) {
    const words = sentence.split(" ");
    
    let result = "";
    for (const w of words) {
        if (w.length % 2 === 0) {  // confirms if the length of the word is even
            for (let i = 1; i < w.length; i += 2) {  // loops over odd-indexed characters
                result += w.charAt(i);
            }
        }
    }
    return result;
}

console.log(solution("JavaScript programming language is versatile."));
// Output: aacitagaesestl.

// ------------ practice exercises ----------------

//example 1: 

/*

In this task, we are manipulating sentences and strings using nested loops. 
You will be given a string representing a sentence where words are separated by spaces. 
Your objective is to write a JavaScript function that selects the even-indexed characters of words containing an odd number of characters.

This sentence string will have a maximum length of 500 characters, including spaces.

Subsequently, these characters must be combined into a single string in the order they appear in the sentence, 
but the final output string will be reversed end-to-end.

For instance, if the input sentence is "Coding tasks are fun and required", 
the output string should be "tssaefnad", which, when reversed, becomes "danfeasst". 
The words "tasks", "are", "fun", and "and" are selected since they have an odd number of characters, 
and the characters 't', 's', 's', 'a', 'e', 'f', 'n', 'a', 'd' at even indexes are chosen and then reversed in the final string. 
Do not forget that JavaScript indexing begins at 0, so 't' in "tasks" is considered to be at an even index.
 Single-character words must also be taken into consideration for this task.

Make sure to consider punctuation as part of the word.
 For example, "Coding!" has a seven-character length.

*/
    
    function solution(sentence) {
        // TODO: implement the solution here
        let words = sentence.split(" "); 
        let finalGroup = ''
        
        //select even indexed characters of words
        //then combine into one string
        //then reverse 
        //outer loop will iterate over every word 
        //inner loop will iterate over each character 
        
        for (const w of words) {
            if (w.length % 2 === 1){ //check if word is odd in length 
                for (let i=0; i<w.length; i+=2){ //iterate starting from 0 in groups of 2 so you hit the even indexed characters 
                 finalGroup += w.charAt(i);
                }
            }   
        }
        //hve to split the group, reverse it, and rejoin it 
        finalGroup = finalGroup.split('').reverse().join('');
        
        return finalGroup;
    }
    
    module.exports = { solution };

// example 2: 

/*
You are given a string of n words, with n ranging from 1 to 100, inclusive. 
The words are separated by a single space in the string. 
Your task is to return the most frequently occurring character in each word 
that has an odd number of characters. 
The resulting characters should be concatenated into a string 
in the order that their corresponding words appear in the sentence.

Please note:

1 - Each word's character count ranges from 1 to 500, inclusive. 
The string contains lowercase and uppercase alphanumeric characters, spaces, and punctuation.

2- For instance, if the input string is "Hello world this is a demo string", your function should return "lwa". 
In this string, 'Hello', 'world', and 'a' have an odd number of characters. 
The most frequently occurring character in these words are 'l', 'w', and 'a' respectively. 
When concatenated, they form "lwa".

3 - In case of a tie in character frequency, return the character that appears first in the word. 
In the example above, we took 'w' from the word 'world'.

4- The function should be case insensitive. The lowercase and uppercase characters should be counted as the same character. 
The output should only contain lowercase characters. For example: "Hhi" should return "h" because "h" 
appears twice in the string even though one is uppercase and one is lowercase.

5 - If there are no words with an odd number of characters in the input string, 
your function should return an empty string.

6 - The input string will always be at least one character long, and it cannot be just a single whitespace.
Having a good understanding of string operations and the use of nested loops is very useful in solving this task.

*/

function solution(sentence) {
    // TODO: implement the solution here
    //return the most frequently occuring character in each word 
    //with an odd number of characters 
    //then concat those characters into a string in order of appearance 
    
    //step 1 - split the sentence into each word 
    let words = sentence.split(' ')
    let finalCharacters = ''
    
    //step 2 - loop through the words, and find the odd numbered character words 
    for (const w of words){
        if (w.length % 2 === 1){ //check if word is odd 
            const charCount = {}; // object to keep track of character appearances 
            let maxChar = ''; 
            let maxCount = 0;
            
            for (let char of w.toLowerCase()){
                charCount[char] = (charCount[char] || 0 ) + 1;
                if (charCount[char] > maxCount) {
                    maxCount = charCount[char];
                    maxChar = char;
                }
            }
        finalCharacters += maxChar; //append the most frequent character
        }
    }
    
    return finalCharacters;
}

module.exports = { solution };

// example 3: 

function solution(sentence, c) {
    // TODO: implement
    //if word is even, extract the second half
    // find the chars in the second half whose ASCII values are less than the value of C 
    //concatenate to a string in order of appearsnce 
    let finalResult = ''; //initialize a variable to store final product in 
    let words = sentence.split(" "); //split the sentence into words at the spaces 
    
    for(i=0; i<words.length; i++) { //loop through the words
        let word = words[i]; //store the current word in a variable 
        if (word.length % 2 === 0){ //check if the word is even in length 
            //cut the word in half 
            let secondHalf = word.slice(Math.floor(word.length/2)) //find the second half of the string and store it in a variable 
            for (j=0; j<secondHalf.length; j++) { //loop through all the characters in the second half 
                let currentChar = secondHalf[j]; //store the current character 
                if (currentChar.charCodeAt(0) < c.charCodeAt(0)){
                    finalResult += currentChar;
                }
            }
        }  
    }
    return finalResult;
}

module.exports = { solution };