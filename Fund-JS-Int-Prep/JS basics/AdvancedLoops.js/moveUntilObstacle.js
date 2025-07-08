/*Introduction

This lesson involves a thrilling task that combines basic operations with array manipulation in JavaScript.
We will be implementing a "Move Until Obstacle" game using an integer array. 
Visualize yourself as a game developer, and get ready to delve into the exciting world of problem-solving!

*/

/*Task Statement

In the "Move Until Obstacle" game, the player begins at the start of a linear array of integers. 
The number at each position indicates how many steps a player can move to the right. 
An obstacle number is one upon which the player cannot land. 
The goal is to move as far to the right as possible until either an obstacle stops the player 
or the player reaches the end of the array.

Your function, function solution(numbers, obstacle), 
should tally and return the number of moves needed to reach the end of the array without 
encountering an obstacle. If the player encounters an obstacle, 
the function should return the index at which this obstacle lies.

For example, if the function receives the input: numbers = [2, 3, 3, 4, 2, 4] 
and obstacle = 4, it should return 5. 
This is because the player starts at the 0th index, takes 2 steps as indicated by the number at the 0th index 
(landing on the 2nd index), and then takes 3 more steps, as indicated by the number at the 2nd index, 
to land on the 5th index, which is the obstacle 4.

If the function receives the following input: numbers = [4, 1, 2, 2, 4, 2, 2] and obstacle = 2, 
the output should be 2. The player starts at the 0th index, takes 4 steps, lands on the 4th index, 
then takes 4 more steps, which brings the player outside the array. 

So the total number of steps the player takes is 2.
*/

/*
Solution Building: Step 1

Our first step is to ensure we have variables to track the player, 
i.e., their current position and the moves they've taken so far.
We'll name them position and moves, initializing both to 0:
*/

function solution(numbers, obstacle) {
    let position = 0;
    let moves = 0;
}

/*
Solution Building: Step 2 - Main Loop

Next, we'll use a while loop to iterate over the array. 
It continues as long as position is less than the size of the array numbers, 
which we obtain using numbers.length:
*/
function solution(numbers, obstacle) {
    let position = 0;
    let moves = 0;
    while (position < numbers.length) {
    }
}

/* Solution Building: Step 3 - Obstacle Check
During each iteration, we need to check whether the player has encountered an obstacle. 
If so, we should return the position at which this obstacle is located:
*/

function solution(numbers, obstacle) {
    let position = 0;
    let moves = 0;
    while (position < numbers.length) {
        if (numbers[position] === obstacle) {
            return position;
        }
    }
}

/*
Solution Building: Step 4 - Move Player and Increment Steps

If the current number is not an obstacle, the player proceeds.
The number of steps taken corresponds to the value at the current position. 
We add this to position and increment moves:
*/

function solution(numbers, obstacle) {
    let position = 0;
    let moves = 0;
    while (position < numbers.length) {
        if (numbers[position] === obstacle) {
            return position;
        }
        moves++;
        position += numbers[position];
    }
}

/*
Final Solution: Outside the Loop

Once the loop ends, the player either has reached the end of the array or has encountered an obstacle. 
If the player managed to navigate the entirety of the array without encountering an obstacle, 
we want to return the total number of moves:

The complete function looks like this:
*/

function solution(numbers, obstacle) {
    let position = 0;
    let moves = 0;

    while (position < numbers.length) {
        // Check for an obstacle at the current position
        if (numbers[position] === obstacle) {
            return position;  // Return the index of the obstacle
        }
        // Increment moves and update position
        moves++;
        position += numbers[position];  // Move to the next position
    }

    // If loop ends without obstacles, return total moves taken
    return moves;
}

// Example usage
// The obstacle (4) is first encountered at index 5,
// so the output of the following is 5 (the index of the obstacle).
console.log(solution([2, 3, 3, 4, 2, 4], 4));

// Here, the player never lands on the obstacle (2)
// before leaving the array, so the output is 2 (the total number of moves).
console.log(solution([4, 1, 2, 2, 4, 2, 2], 2));

// ---------------- Practice Examples: ----------------- 

/*
You are given an array of integers where each integer represents a player's move distance on a linear gameboard. 
Positive integers indicate how many steps they can move to the right, 
whereas negative integers represent obstacles.

Your task is to transform the array according to the following rules:

1 - For each positive integer, if any position within its move distance contains an obstacle, 
replace the integer with the index of the first obstacle encountered.

2- If the integer is a negative number (representing an obstacle), replace it with -1.

3 - If a positive integer does not encounter any obstacle within its move distance, 
retain the original integer.

The goal is to determine for each position, 
what would happen if the player started at this position and did exactly one move.

The array will have no more than 500 elements and the elements in the array range from -100 to 100, inclusive.

For example, given the array [3, 2, -3, 1, 2], the output would be [2, 2, -1, 1, 2].

Explanation:

The first position is replaced with 2 because a player moving 3 steps forward from index 0 would hit the obstacle at index 2.
The second position is replaced with 2 for the same reason: a player moving 2 steps forward from index 1 would hit the obstacle at index 2.
The third position is a negative number, so it is replaced with -1.
The fourth position remains 1 because there are no obstacles within the range of 1 step forward.
The fifth position remains 2 because there are no obstacles within the range of 2 steps forward or any further elements affecting it.
*/

function solution(numbers) {
    // TODO: Implement the function according to the task description
    //transform an array - each number represents a player's move distance (one move only)
    //positive is movement to the right, negative is obstacles 
    // if any int encountered during the move is negative, replace in with that obstacle 
    //and replace the obstacle number with -1, otherwise retain the original integer
    let playersMoves = []; 
     //loop to keep it in bounds of the problem 
    for (i=0; i < numbers.length; i++){ 
        if(numbers[i] > 0) {
            let foundObstacle = false;
            for (j= i + 1; j < Math.min(i + numbers[i] + 1, numbers.length); j++){
                if (numbers[j] < 0){
                    playersMoves.push(j);
                    foundObstacle = true; 
                    break
                } 
            }
            if (!foundObstacle) {
                playersMoves.push(numbers[i]);
            }
        } else {
            playersMoves.push(-1);
        }
    }
    return playersMoves;
}

module.exports = { solution };

// example 2: 

/*
Your task is to design a 1-dimensional game where a player moves along a path determined by an array of integers.

The path is an array of integers, each ranging from -100 to 100, inclusive. 
The size of the array n, i.e., the total number of steps on the path, 
can range from 1 to 500, inclusive. 

Each integer a_i in the array signifies how many steps the player can move and in which initial direction:

    - A positive integer allows the player to move that many steps to the right.
    - A negative integer directs the player to move that many steps to the left.
    - Zero signifies a blockade that prevents further movement.

The game proceeds along the following rules:

    1 - The player starts at the first position of the array (0-indexed) 
    and moves according to the value at the player's current position in the array.

    2 - If the value in the current position is zero, then the game ends.
    If the player's current position leads them outside of the array's boundaries, 
    then their ability to move in the current direction ceases.

    3 - If the latter happens, then the player reverses their direction and
    continues to move according to similar rules, but now the directions are inverted: 
    positive integers lead the player to the left, and negative integers point to the right.

    4 - The game ends when the player encounters a blockade or the array boundaries
    for the second time and so can no longer move.

You are to implement a function titled evaluatePath in JavaScript. 
This function should take an array of integers as input, representing the path and its rules,
and return an array with two elements, where:

    - position: This is the player's final position (0-indexed) when the game ends.
    - moves: This is the total number of moves made by the player until the game ends.

It's guaranteed that the game will not lead to an infinite loop, i.e. 
the path to the next blockade or the array boundaries would not require the player 
to visit the same position more than once.

For instance, given an array [3, 4, 1, 1, -3, 1]. 
The output would be [4, 5]. Here's how it works:

    - The player starts at position 0, where the value is 3. 
    They move 3 steps to the right and land on the 3rd position. Total moves till now: 1.

    - At position 3, the value is 1. They move 1 step to the right, landing on the 4th position. 
    Total moves till now: 2.

    - At position 4, the value is -3. They move 3 steps to the left, landing back on position 1. 
    Total moves meanwhile: 3.

    - At position 1, the value is 4. They move 4 steps to the right, landing on position 5. 
    Total moves thus far: 4.

    - At position 5, the value is 1, which would lead them out of the array's right boundary.
    So, they reverse their direction.

    - After reversing direction at position 5, they move 1 step to the left and land on position 4. 
    Total moves till now: 5.

    - Now, with the reversed direction, the player is at position 4 where the value is -3. 
    In the reversed direction, -3 indicates 3 steps to the right. 
    But this would again lead to the right boundary of the array. 
    Since they have already reversed direction once, 
    they cannot move further in any direction and the game ends.

At the end of the game, the player is at position 4 having made a total of 5 moves, 
thereby, the function returns [4, 5].

*/
function evaluatePath(numbers) {
    // TODO: implement the function
    let position = 0;
    let direction = 1;
    let directionChanges = 0;
    let moves = 0;
    
    while (true) {
        if (numbers[position] === 0){
            break; // End the game if a blockade is encountered
        }
        let newPosition = position + (direction * numbers[position]);
    
        if (newPosition < 0 || newPosition >= numbers.length) {
            direction *= -1; // Reverse direction
            directionChanges += 1; // Track the number of reversals
        
        if (directionChanges === 2) {
            break; // End the game after the second reversal
        }
    } else {
        position = newPosition; 
        moves += 1; 
    }
}
    return [position, moves]; //return the final position and move 
}

module.exports = { evaluatePath };

// example 3: 

/* You are the developer of a unique board game and are now dealing with the challenge of quantifying player progress, 
assuming different starting positions.

The game is played on a linear board that can be described as an array of integers, 
from 1 to n, with n ranging from 1 to 500 inclusive. 
Each position in the array is a move value that a player can take, 
signifying the exact number of steps a player can move rightward. 
An obstacle is a specific integer value on which the player cannot land.

Your task is to implement the solution(numbers, obstacle) function in JavaScript, 
which calculates and returns an array steps. 
For every i in steps, the algorithm should calculate the number of steps required 
for a player to reach the end of the array from the i-th position without landing on an obstacle. 
If the player encounters an obstacle, steps[i] should be -1.

Each number in the numbers array can range from 1 to 10, 
and the obstacle value can range between 1 and 10, inclusive.

The player must move exactly the number of steps specified at each position.

The return value should be steps, the array with calculated values.

For example, if numbers is [5, 3, 2, 6, 2, 1, 7] and obstacle is 3, 
the function would return an array [3, -1, 3, 1, 2, 2, 1]. 
The first value 3 indicates that starting from position 0, 
the player will reach the end in 3 steps. The second value, -1, 
indicates that starting from 1, the player is on an obstacle. 
Therefore, progression from 1 is not possible. And so on.

*/ 

function solution(numbers, obstacle) {
    // TODO: implement the function
    let steps = []; //initialize the final array to track steps  
    
    for (i=0; i < numbers.length; i++){ //loop through all the numbers 
        let currentPosition = i; 
        let currentSteps = 0;
        
        while (currentPosition < numbers.length) {
             if (numbers[currentPosition] === obstacle) {
            steps[i] = -1; 
            break; // exit the loop for this starting position
            } 
            currentSteps++;
            currentPosition += numbers[currentPosition]; 
            if (currentPosition >= numbers.length){
                steps[i] = currentSteps;
                break;
            }
        } 
    }
    return steps;
}

module.exports = { solution };

