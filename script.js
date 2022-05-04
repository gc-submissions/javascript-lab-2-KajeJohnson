// function declaration, function
// expression, and arrow functions.

const randomDamage = () => {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomDamage(10));

const chooseOption = (opt1, opt2) => {
  let randNum = Math.random() * 1;
  if (randNum < 0.5) {
    randNum = 0;
  } else {
    randNum = 1;
  }
  return randNum === 0 ? opt1 : opt2;
};
console.log(chooseOption("opt1", "opt2"));

function attackPlayer(health) {
  return (health -= randomDamage());
}
console.log(attackPlayer(10));

// Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
logHealth("Crash", 100);

// Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
logDeath("Crash", 100);

const isDead = (health) => {
  return health <= 0 ? true : false;
};
console.log(isDead(3));

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player2Health)) {
        logDeath(player2, player1);
      }
    }
  }
}
fight("Crash", "Beemo", 100, 100);
