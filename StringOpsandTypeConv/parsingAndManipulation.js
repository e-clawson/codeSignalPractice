/*
In this lesson, we will explore the practical applications of string operations and type conversions in JavaScript. 
These concepts are crucial and are used in many programming areas. We'll examine a real-world example: time parsing. 
Have you ever wondered how to add a certain number of seconds to a specific time? By the end of today's session, 
you'll be equipped to calculate this using JavaScript. Let's get started!
*/

/*
Task Statement and Description

Imagine this: You receive a time formatted as a string in HH:MM:SS,
where HH, MM, and SS denote the hour, minute, and second, respectively. 
You are also given an integer representing a certain number of seconds. 
Your task is to calculate the new time after adding the provided seconds, 
then output the result in the HH:MM:SS format.

For example, if the input time is 05:10:30 and the number of seconds to 
add is 123, the output should be 05:12:33 since 123 seconds translate to 
2 minutes and 3 seconds.

Please note these points when resolving this task:

- The input time is always a valid time string in the HH:MM:SS format,
with HH ranging from 00 to 23 and MM and SS ranging from 00 to 59.
- The output should be a time in the same format.

Now let's go ahead and break down how to achieve this in our step-by-step 
solution guide.
*/

/*
Step-by-Step Solution Building: Step 1

Our first step involves parsing the input time string. 
We aim to extract the hours, minutes, 
and seconds from this string as integer values for further calculations. 
In JavaScript, we can use the split method to divide the string at ":" 
and convert each substring into an integer:
*/

let time = "12:34:56";
let secondsToAdd = 10;
let timeParts = time.split(":");
let hours = parseInt(timeParts[0]);
let minutes = parseInt(timeParts[1]);
let seconds = parseInt(timeParts[2]);

//By executing this operation, we've successfully parsed the time string and converted the hours, minutes, and seconds into integers.

/*
Step-by-Step Solution Building: Step 2

Now that we have the hours, minutes, and seconds in integer format, 
we can efficiently calculate the total number of seconds that have elapsed 
since the start of the day:
*/

let secondsSinceStart = hours * 3600 + minutes * 60 + seconds;

//At this point, your function should compute the cumulative number of seconds from the start of the day.

/*
Step-by-Step Solution Building: Step 3

Now we need to add the integer representing the number of seconds to our computed secondsSinceStart 
and also consider cases where the added seconds roll over into the next day:
*/

let totalSeconds = (secondsSinceStart + secondsToAdd) % (24 * 3600);

//The modulus operator % ensures that our totalSeconds value doesn't exceed 
// the total number of seconds in a day (86400 seconds or 24 * 3600 seconds).

/*
Step-by-Step Solution Building: Step 4
In this step, we reverse the previous operation. 
We're given an integer number of seconds, 
and we have to convert this into a time string in the HH:MM:SS format.

We will use the division / and modulo % operations directly to convert these values:

- First, we calculate the number of hours in the total seconds: 
let newHours = Math.floor(totalSeconds / 3600);. 
Here, 3600 is the number of seconds in an hour.

- Next, we update the totalSeconds to the remainder after extracting the hours: 
totalSeconds %= 3600;. 
This step ensures that totalSeconds now holds the seconds remaining after accounting for hours.

Now, we repeat this process for minutes:

- We calculate the number of minutes in the updated totalSeconds: 
let newMinutes = Math.floor(totalSeconds / 60);. 
Here, 60 is the number of seconds in a minute.
- Following a similar pattern, 
update the totalSeconds to the remainder after extracting minutes: 
totalSeconds %= 60;. 
This step ensures that totalSeconds contains only the seconds remaining 
after accounting for both hours and minutes.

Finally:

The remaining totalSeconds directly gives us the seconds: let newSeconds = totalSeconds;.
So the complete code for this step is:
*/

let newHours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let newMinutes = Math.floor(totalSeconds / 60);
let newSeconds = totalSeconds % 60;

/*
Step-by-Step Solution Building: Step 5

The final step is to assemble these values into our HH:MM:SS format string. 
JavaScript allows us to use template literals for formatting:
*/

let result = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;

//Here, padStart(2, '0') ensures that each time unit (hours, minutes, and seconds) 
// will be at least 2 characters wide, padding with 0 if necessary.

/*
Final Solution

Let's collate all the individual steps and formulate the final function:
*/

function addSeconds(time, secondsToAdd) {
    let timeParts = time.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);

    let secondsSinceStart = hours * 3600 + minutes * 60 + seconds;
    let totalSeconds = (secondsSinceStart + secondsToAdd) % (24 * 3600);

    let newHours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let newMinutes = Math.floor(totalSeconds / 60);
    let newSeconds = totalSeconds % 60;

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
}

// Call the function
console.log(addSeconds("05:10:30", 123));
// Output: 05:12:33

//And voila! You've crafted a function that accurately calculates 
// the new time based on the provided time and the number of seconds 
// that have elapsed since then.

//------------- examples: ---------------

//example 1: 

/*
You are given two input arguments: a list of strings timePoints and an integer addedSeconds.
Each string in timePoints is in the format "HH:MM:SS", 
representing a valid time from "00:00:00" to "23:59:59" inclusive. 
The integer addedSeconds represents a number of seconds, ranging from 1 to 86,400.
 
Your task is to create a new function, addSecondsToTimes(timePoints, addedSeconds), 
which takes these two arguments and returns a new list of strings. 
Each string in the returned list is the new time, calculated by adding the provided addedSeconds to the corresponding time in timePoints, 
formatted in HH:MM:SS.

The list timePoints contains n strings, where n can be any integer from 1 to 100 inclusive. 
The time represented by each string in timePoints is guaranteed to be valid. 
The total time, after adding addedSeconds, can roll over to the next day.

Example:

For timePoints = ['10:00:00', '23:30:00'] and addedSeconds = 3600, 
the output should be ['11:00:00', '00:30:00'].
*/

function addSecondsToTimes(timePoints, addedSeconds) {
    // TODO: implement the function
    let newTimes = [];
    // step 1 - parse the input time - split at 
    
    for (i=0; i < timePoints.length; i++){
      let timeparts = timePoints[i].split(":"); 
      let hours = parseInt(timeparts[0]);
      let minutes = parseInt(timeparts[1]);
      let seconds = parseInt(timeparts[2]);
      
      let secondsSinceStart = hours * 3600 + minutes * 60 + seconds; //cumulative number of seconds
      
      let totalSeconds = (secondsSinceStart + addedSeconds) % (24 * 3600);
      
      let newHours = Math.floor(totalSeconds / 3600); 
      totalSeconds%= 3600;
      let newMinutes = Math.floor(totalSeconds / 60);
      let newSeconds = totalSeconds % 60
      
      let result = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`
      newTimes.push(result);
    }
    
    return newTimes
  }
  
  module.exports = { addSecondsToTimes };

  