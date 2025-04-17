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

  //example 2:
  
/* 

You are given a time period formatted as a string in the HH:MM:SS - HH:MM:SS format. 
HH:MM:SS represents the time in hours, minutes, and seconds form, and the hyphen (-) 
separates the start time from the end time of the period.

Your task is to calculate how many minutes pass from the start time until the end time.

Here are some guidelines:

- The input times are always valid time strings in the HH:MM:SS format, 
with HH ranging from 00 to 23, and MM and SS from 00 to 59.
- The output should be an integer, 
representing the total length of the time period in minutes.
- The start time of the period will always be earlier than the end time, 
so periods that cross over midnight (like 23:00:00 - 01:00:00) 
are not considered.

We are interested in the number of times the time passes some HH:MM:00 after the start time until the end time. Any remaining seconds should be disregarded; for instance, a period of "12:15:00 - 12:16:59" represents 1 minute, not 2, and a period of "12:14:59 - 12:15:00" also represents 1 minute.
Your function should look like this:
*/

function timePeriodLength(timePeriod) {
    // Your implementation goes here
}

/*
Where timePeriod is a string formatted as HH:MM:SS - HH:MM:SS. 
The function should return a single integer that represents
the total length of the specified time period in minutes.
*/

//Example:

timePeriodLength("12:15:30 - 14:00:00");
// should return 105


function timePeriodLength(timePeriod) {
    // TODO: implement the function
    
    let times = timePeriod.split(" - ");
    let firstTime = null;
    let secondTime = null; 
    
    for (i = 0; i < times.length; i++){ 
      let timeparts = times[i].split(":"); 
      let hours = parseInt(timeparts[0]);
      let minutes = parseInt(timeparts[1]);
      let seconds = parseInt(timeparts[2]);
      
      let cumulativeSeconds = hours * 3600 + minutes * 60 + seconds;
      
      if (i === 0) {
        firstTime = cumulativeSeconds;
      } else {
        secondTime = cumulativeSeconds; 
      }
    }
    
    let time = secondTime - firstTime; 
    let timeInMinutes = Math.floor(time / 60); 
    
    if (time % 60 > 0) {
      timeInMinutes += 1;
    }
  
    return timeInMinutes;
  }
  
  module.exports = { solution: timePeriodLength };

//example 3: 

/*
You are given an initial date as a string in the format YYYY-MM-DD, 
along with an integer n which represents a number of days. 
Your task is to calculate the date after adding the given number 
of days to the initial date and return the result in the YYYY-MM-DD format.

Keep these points in mind when resolving the task:

The initial date string is always valid, formatted as YYYY-MM-DD, 
where YYYY denotes the year, MM the month, and DD the day.
The given integer n is the number of days you have to add to 
the initial date and will be up to 50,000

The output should be a string showcasing the final date after adding n days, 
in the YYYY-MM-DD format.Your function will be in the form function addDays(date, n).
Note that as a helper data we provide the number of days in each month in the DAYS_IN_MONTH array.

Constraints

- date = the date string in the YYYY-MM-DD format. 
The year YYYY will be from 1900 to 2100, inclusive. 
The month MM and the day DD will be valid for the given year.

- n = the integer representing the number of days you have to add to the initial date.
n ranges from 1 to 50,000 inclusive.

- You should consider leap years in the calculation. 
A year is a leap year if it is divisible by 4, 
but century years (years divisible by 100) are not leap years unless they are divisible by 400. 
This means that the year 2000 was a leap year, although 1900 was not.

- The month and day result should always be two digits long, 
padding with a 0 if necessary. 
For example, July 9th should be formatted as "07-09".

Example

For date = '1999-01-01' and n = 365, the output should be '2000-01-01'.
*/
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function addDays(date, n) {
    // TODO: Implement
    //get the whole thing into days? 
    //add the days? 
    // revert it back to date format? 
    let [year, month, day] = date.split('-').map(Number);
    
    function daysInMonth(year, month){
        if (month === 2 && isLeapYear(year)) {
            return 29;
        }
        return DAYS_IN_MONTH[month - 1]; 
    }
    
    function isLeapYear(year) {
        if (year % 4 != 0){
            return false;
        } if (year % 100 === 0 && year % 400 != 0) {
            return false;
        } else {
            return true; 
        }
    }
    
    while (n > 0) {
        const daysInCurrentMonth = daysInMonth(year, month);
        if (n + day <= daysInCurrentMonth) {
            day += n;
            n = 0;
        } else {
            n -= (daysInCurrentMonth - day + 1); 
            day = 1; 
            if (month === 12) {
                month = 1; 
                year++; 
            } else {
                month++
            }
        }
    }

return `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;   
}

module.exports = { addDays };
