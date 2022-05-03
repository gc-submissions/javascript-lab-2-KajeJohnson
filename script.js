// function declaration, function
// expression, and arrow functions.
// arrow function:
// const nameOfFunction = () => {
//     return randomNumberStuff
//     }

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

//last -- fight function = while loop
//test your isDead function with numbers
//did you make it <=
//console.log(fight("Ian", "Randy", 80, 100))
//=> `${winner}'s health: ${health}.` -->try console.loggint this

//remove the console.

//in class practice -> put this in it's own file!

// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(5.44444444444));

///rock paper scissors
//a function names rockPaPerScissors that takes two parameters p1 = player1Selection, p2 is named player2Selection

// const rockPaPerScissors = (player1Selection, player2Selection) => {
//rock beats scissors looses to paper, paper beats rock looses to schissirs, scissors beats paper looses to rock

//if player1selection is equal to "rock" and player 2 is equal to "Paper" then print player2 wins the round

//   if (player1Selection === "rock" && player2Selection === "paper") {
//     console.log("Player 2 wins round");
//   } else if (player1Selection === "paper" && player2Selection === "scissors") {
//     console.log("Player 2 wins the round");
//   } else if (player1Selection === "rock" && player2Selection === "scissors") {
//     console.log("player 1 wins");
//   } else if (player1Selection === "paper" && player2Selection === "rock") {
//     console.log("player 1 wins");
//   } else if (player1Selection === "scissors" && player2Selection === "paper") {
//     console.log("Player 1 wins");
//   } else if (player1Selection === "scissors" && player2Selection === "rock") {
//     console.log("player 2 wins");
//   } else if (player1Selection === player2Selection) {
//     console.log("it is a tie!");
//   }

// };

// rockPaPerScissors("rock", "paper");
// rockPaPerScissors("paper", "scissors");
// rockPaPerScissors("scissors", "rock");

// rockPaPerScissors("scissors", "scissors");

// rockPaPerScissors();

//------------
//if play1 selects paper return player 1 otherwise return player 2 wins
//how to use a ternary operator for this?
//if play1 selects paper return player 1 otherwise return player 2 wins
//how to use a ternary operator for this?

// const rockPaPerScissors = (player1Selection) => {
//   return player1Selection === "paper"
//     ? "player 1 wins the round"
//     : "player 2 wins the round";
// };

// const whatDoesItReturn = (parameter) => {
//   return parameter >= 21 ? "can drive" : false;
// };

// whatDoesItReturn(21);
// whatDoesItReturn(5); //number
// whatDoesItReturn('some words'); //string
// whatDoesItReturn(true); //boolean

// console.log(rockPaPerScissors("paper"));
// console.log(rockPaPerScissors("rock"));
// console.log(rockPaPerScissors("scissors"));

//while loop

// let a = 1;
// while (a < 11) {
//   console.log(a);
//   a++;
// }
