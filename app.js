// Rover object goes here:

const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [[0,0]],
};
 
// ======================

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'W';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'W': rover.direction = 'S';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'S': rover.direction = 'E';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'E': rover.direction = 'N';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
  }
}
 
function turnRight(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'E';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'E': rover.direction = 'S';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'S': rover.direction = 'W';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
    case 'W': rover.direction = 'N';
    console.log(`the rover direction is now ${rover.direction}`);
    break;
  }
}
 
function moveForward(rover) {
  if (rover.direction === 'N' /*BONUS 1*/ && rover.y > 0) {
    rover.y -= 1
    console.log(`1 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'W' /*BONUS 1*/ && rover.x > 0) {
    rover.x -= 1
    console.log(`2 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'S' /*BONUS 1*/ && rover.y < 9) {
    rover.y += 1
    console.log(`3 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'E' /*BONUS 1*/ && rover.x < 9) {
    rover.x += 1
    console.log(`4 the rover position is now ${[rover.x, rover.y]}`);
  }
}

// BONUS 2
function moveBackward(rover) {
  if (rover.direction === 'N' /*BONUS 1*/ && rover.y > 0) {
    rover.y += 1
    console.log(`1 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'W' /*BONUS 1*/ && rover.x > 0) {
    rover.x += 1
    console.log(`2 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'S' /*BONUS 1*/ && rover.y < 9) {
    rover.y -= 1
    console.log(`3 the rover position is now ${[rover.x, rover.y]}`);
  }
  if (rover.direction === 'E' /*BONUS 1*/ && rover.x < 9) {
    rover.x -= 1
    console.log(`4 the rover position is now ${[rover.x, rover.y]}`);
  }
}

const commmands = (list) => {
  for (let i = 0; i <= list.length; i++) {
    // BONUS 3
    const regex = /[fbrl]/

    if (regex.test(list)) {
      switch (list[i]) {
        case 'f':
          moveForward(rover);
          rover.travelLog.push([rover.x, rover.y])
          break;
        // BONUS 2
        case 'b':
          moveBackward(rover);
          rover.travelLog.push([rover.x, rover.y])
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        default:
          break;
      }
    }
  }
};

// Input
commmands('rffrfflfrff');
console.log(rover.travelLog);

// BONUS 4 -> not implemented yet
