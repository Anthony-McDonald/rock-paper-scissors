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

    switch(concentation) {
        case "RockScissors":
            addpoint("player");
            return;
        case "PaperRock":
            addpoint("player");
            return;
        case "ScissorsPaper":
            addpoint("player");
            return;
        case "ScissorsRock":
            addpoint("computer");
            return;
        case "RockPaper":
            addpoint("computer");
            return;
        case "PaperScissors":
            addpoint("computer");
            return;
    }

}

function addpoint(winner) {
    const player_score_field = document.querySelector('.player_score')
    const computer_score_field = document.querySelector('.computer_score')

// Takes field and removes score to return just the number in integer form
    let player_score = parseInt(player_score_field.innerHTML.replace(/[^0-9\.]+/g, ""));
    let computer_score = parseInt(computer_score_field.innerHTML.replace(/[^0-9\.]+/g, ""));

    if (winner == "player") {
        player_score += 1;
        player_score_field.innerHTML = "Player: " + player_score;
        
    } else if (winner == "computer") {
        computer_score += 1;
        computer_score_field.innerHTML = "Computer: " + computer_score;
    }
    
    const win_field = document.querySelector(".winner_declarer")

    if (player_score == 5) {
        console.log("player score is 5")
        win_field.innerHTML = "You won you smurf, refresh to reset";
    } else if (computer_score == 5) {
        win_field.innerHTML = "Lost to a computer, lmao, refresh before anyone notices"
    }

}


// function game() {
//     playerWins = 0
//     compWins = 0
//     for (let i = 0; i < 5; i++) {
//         let input = prompt("Rock, Paper or Scissors?");
//         let result = playRound(input, getComputerChoice());
//         console.log(result);

//         let checker = result.slice(4, 7)

//         if (checker == "Win") {
//             playerWins++;
//         }
//         if (checker == "Los") {
//             compWins++;
//         }
//         if (checker == "se ") {
//             i--;
//         }

//     }
//     console.log("total player wins = " + playerWins);
//     console.log("total comp wins = " + compWins);

//     if (playerWins > compWins)  {
//         console.log("You win the best of 5!")
//     } else if (compWins > playerWins) {
//         console.log("You lose the best of 5!")
//     } else {
//         console.log("The best of 5 ended in a draw!")
//     }
// }


function wordFixer(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);

}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
  playRound("rock", getComputerChoice())
  console.log('rock');
});

paper.addEventListener('click', () => {
  playRound('paper', getComputerChoice())
  console.log('paper');
});

scissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice())
  console.log('scissors');
});

game();