function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber)  {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }

}


function playRound(playerSelection, computerSelection) {
    playerSelection = wordFixer(playerSelection);
    computerSelection = wordFixer(computerSelection);

    let concentation = playerSelection + computerSelection

    let winMessage = "You Win! " + playerSelection + " beats " + computerSelection;
    let drawMessage = "You Draw! " + playerSelection + " draws with " + computerSelection;
    let loseMessage = "You Lose! " + computerSelection + " beats " + playerSelection;

    switch(concentation) {
        case "RockScissors":
            return winMessage;
        case "PaperRock":
            return winMessage;
        case "ScissorsPaper":
            return winMessage;
        case "ScissorsRock":
            return loseMessage;
        case "RockPaper":
            return loseMessage;
        case "PaperScissors":
            return loseMessage;
        case "RockRock":
            return drawMessage
        case "RockRock":
            return drawMessage
        case "PaperPaper":
            return drawMessage
        case "ScissorsScissors":
            return drawMessage

        default:
            return "Please enter: Rock, Paper or Scissors"

    }

}

function game() {
    playerWins = 0
    compWins = 0
    for (let i = 0; i < 5; i++) {
        let input = prompt("Rock, Paper or Scissors?");
        let result = playRound(input, getComputerChoice());
        console.log(result);

        let checker = result.slice(4, 7)

        if (checker == "Win") {
            playerWins++;
        }
        if (checker == "Los") {
            compWins++;
        }
        if (checker == "se ") {
            i--;
        }

    }
    console.log("total player wins = " + playerWins);
    console.log("total comp wins = " + compWins);

    if (playerWins > compWins)  {
        console.log("You win the best of 5!")
    } else if (compWins > playerWins) {
        console.log("You lose the best of 5!")
    } else {
        console.log("The best of 5 ended in a draw!")
    }
}

function wordFixer(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);

}


game();