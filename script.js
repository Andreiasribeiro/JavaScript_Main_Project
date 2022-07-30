let playerScore = 0;
let computerScore = 0;
let rounds = 5;

/*a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.*/
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

/*function that plays a single round of Rock Paper Scissors. T
        two parameters - the playerSelection and computerSelection 
        round like so: "You Lose! Paper beats Rock"
        */
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase(); //  case-insensitive
  const computerChoice = computerSelection.toLowerCase();
  const choices = ["rock", "paper", "scissors"];

  //if statement for a not valide option
  if (!choices.includes(playerChoice) || !choices.includes(computerChoice)) {
    return {
      status: "error",
      message: "Not a valid option! Try again.",
      rounds: rounds++,
    };
  }

  switch (playerChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return {
        status: "Draw",
        message: "It is a draw! You both chose " + playerChoice,
      };

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return {
        status: "lose",
        message:
          "You lose! Computer chose: " +
          computerChoice +
          " that beats " +
          playerChoice,
      };

    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      return {
        status: "win",
        message:
          "You won! You chose: " +
          playerChoice +
          " that beats " +
          computerChoice,
      };
  }
}

/*function called game(). Call the playRound function inside 
        play a 5 valide rounds game that keeps score and reports a winner or loser at the end.*/

const game = () => {
  for (let i = 0; i < rounds; i++) {
    const userChoice = prompt("Let's play! Choose: Rock, Paper or Scissors?");
    if (userChoice === null) {
      console.log("Shut down!");
      return userChoice;
    }

    const computerChoice = computerPlay();
    const { status, message } = playRound(userChoice, computerChoice);
    console.log(message);
    switch (status) {
      case "Win":
        playerScore++;
        break;
      case "Loser":
        computerScore++;
        break;
      case "Draw":
        break;
    }
  }
  if (playerScore > computerScore) {
    console.log("Final result: You won! Congratulation!!!");
  } else if (playerScore < computerScore) {
    console.log("Final result: You lost! Good luck next time");
  } else {
    console.log("Final result: Draw! Good luck next time.");
  }
};

game();
