const mini_Golf_Game = () => {
  const name = prompt("Welcome to GC mini-golf! What is your name?");
  const holes = prompt(
    "Hi, " + name + "! Would you like to play 3 or 6 holes?"
  );

  let putts = [];

  for (let i = 0; i < holes; i++) {
    putts.push(parseInt(prompt("How many putts for hole " + (i + 1) + "?")));
  }
  console.log(putts);

  let score = 0;
  if (holes == 3) {
    score = -9;
  } else {
    score = -18;
  }

  for (let j = 0; j < putts.length; j++) {
    score += putts[j];
  }

  if (score < 0)
    console.log("Great job, " + name + "! Your total par was: " + score);
  else if (score === 0)
    console.log("Good game, " + name + ". Your total was: " + score);
  else {
    console.log("Nice try, " + name + ". Your total par was: +" + score);
  }
};

mini_Golf_Game();
