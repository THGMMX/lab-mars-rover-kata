#LAB | JS: Mars Rover Kata

##Learning goals
In this exercise, the goal is to apply as many as possible of the concepts you have just learned:

how to work with different types of variables,
how to manipulate nested data structures,
how to define and invoke functions.

##Getting started
Open a new CodePen and paste this code as your starter:

// Rover object goes here:
 
// ======================
function turnLeft(rover) {
  console.log('turnLeft was called!');
}
 
function turnRight(rover) {
  console.log('turnRight was called!');
}
 
function moveForward(rover) {
  console.log('moveForward was called');
}

##Introduction
We are sending a rover to Mars, and we need to be able to move it through a series of instructions sent from the Earth. As the final exercise for this part of the module, you will be leading this project.


Our Mars Rover is too independent, let’s put it this way. By that, we mean it can’t move and turn at the same time. This means that if the rover wants to move to the left, its first move must be a turn. Its next move will then be a step forward.

We will discuss this concept in more detail as we progress through the exercise.

Also, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to Mars.

At a high level, what we will do in the exercise is the following:

create a function to turn the rover,
create a function to move the rover forward or backward based on its direction,
create a function to receive a list of commands and move based on those commands.
Does this sound familiar to you? Haven’t we just done something similar in our Final exercise? :wink:

Let’s go!

:star: A friendly reminder:

Any time you are stuck, reach out to the members of the Ironhack community in the code-help Slack channel. Also, don’t hesitate to connect with your peers in your cohorts’ Slack channel, and then if you didn’t get needed help, reach out to your TAs, via Slack or email.

##Instructions
Iteration 1 | The rover object
Create an object to represent the rover. This object will have only one property for now: the direction.

The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (as North).

Iteration 2 | Turning the rover
The rover has a direction attribute. We have already provided functions named turnLeft() and turnRight(). Each function receives a rover object as an argument. Your job is to turn the rover in the appropriate direction based on its current direction.

Examples:

Rover is facing North and turns left => Rover is now facing West

Rover is facing West and turns left => Rover is now facing South

Rover is facing North and turns right => Rover is now facing East.


Suggested approach
Begin with a switch statement. Based on which function is being called, turn the rover in the correct direction based on its current direction.

Test these functions putting console logs in them, which will tell you which direction is rover facing and check the output in the console of the CodePen.

Iteration 3 | Moving the rover
The rover’s position
To move the rover around, we have to keep track of the rover’s position.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.

Again, is this familiar to you?


Moving forward
Once the rover has a position, it is time to move it.


moveForward() is a function of the rover’s current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover’s x by 1.

If the rover is facing north and moves forward, we would decrease the rover’s y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward() function. After each movement, console.log the rover’s coordinates so you can see where it is positioned.

Iteration 4 | Commands
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.

Suggested approach
Use a loop to iterate over the string. Inside this loop, write a switch or if statement to call the correct function. For instance, if the letter is f, you are going to want to call the goForward() function.

Iteration 5 | Tracking
We want to know where our rover has been so far. Create a property on the rover object that contains the coordinates of the places where it has been. This property will be an array, and you can call it travelLog.

After each move, push the coordinates of the previous place where the rover was to the travelLog array. After the rover has finished its moves, print out all of the places the rover has traveled over.

Congrats! You have just finished the mandatory part of this exercise. Keep challenging yourself! We provided 4 bonus iterations, so keep grinding dear Ironhacker. :rocket:

Bonus 1 | Enforce boundaries
At some point, you may have accidentally run our rover off of the grid. If you recall, our grid is 10x10.

Make sure your rover doesn’t accidentally roam off the map!

Bonus 2 | Move backwards
Create another function called moveBackward() that will move the rover back. This will be very similar to the moveForward() function.

Bonus 3 | Validate inputs
If we enter a letter into our input that is not one of the rover commands, nothing will happen. For example, ffzzy would simply move forward twice, and zzy would be ignored. Go ahead and add validation so that the inputs must be f, b, r, or l.

Bonus 4 | Obstacles
The following requires you to actually create a grid for the rover to move around on. In code, these grids are often represented as two-dimensional arrays.

Obstacles - Create obstacles for the rover. If the rover’s next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.

Happy coding! :heart:

Submission
Once you are ready to submit your exercise for final review, copy the link to the CodePen and paste it on the submission input field, just below:

