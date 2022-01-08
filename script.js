// Creating arrow function to hold the game.
const mini_Golf_Game = () => {
  //Created a undefined name and put the assignment of the name
  // in a do... while loop if the user enters no name to repeat until the user enters
  // their name.
  let name = undefined;
  do {
    name = prompt("Welcome to GC mini-golf! What is your name?");
  } while (name == "");

  // Same as the name variable above, in case the user does not enter the right
  // number, the prompt will be shown again until they provide the correct number listed.
  let holes = undefined;
  do {
    holes = prompt(
      "Hi, " +
        name +
        "! Would you like to play 3 or 6 holes? (please type 3 or 6)"
    );
  } while (holes != 3 && holes != 6);

  // A array to hold the amount of putts for every hole.
  let putts = [];

  // Pushes every putt amount in to the list from each hole.
  for (let i = 0; i < holes; i++) {
    putts.push(parseInt(prompt("How many putts for hole " + (i + 1) + "?")));
  }

  // A ternary operator choses wheather the user played a 3 or 6 hole game.
  let score = holes == 3 ? -9 : -18;

  // Caculates the score from the holes the user putt in.
  for (let j = 0; j < putts.length; j++) {
    score += putts[j];
  }

  // Executes one of the if else statements depending on the user's score.
  if (score < 0)
    console.log("Great job, " + name + "! Your total par was: " + score);
  else if (score === 0)
    console.log("Good game, " + name + ". Your total was: " + score);
  else {
    console.log("Nice try, " + name + "... Your total par was: +" + score);
  }
};

// Calls the function to run the game.
mini_Golf_Game();
