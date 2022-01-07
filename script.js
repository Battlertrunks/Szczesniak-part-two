const mini_Golf_Game = () => {
  const name = prompt("Welcome to GC mini-golf! What is your name?");
  const holes = prompt(
    "Hi, " + name + "! Would you like to play 3 or 6 holes?"
  );

  let putts = [];

  for (let i = 0; i < holes; i++) {
    putts.push(prompt("How many putts for hole " + (i + 1) + "?"));
  }
  console.log(putts);
};

mini_Golf_Game();
