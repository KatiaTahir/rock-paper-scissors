// function to get human choice
function getHumanChoice() {
    let humanChoice = prompt("What's it gonna be? Rock, Paper, or Scissors?");
    return humanChoice;
}

// function to get computer choice

function getComputerChoice() {

    let computerSelected = Math.floor(Math.random() * 3) + 1;

    if (computerSelected === 1) {
        return "Rock";
    } else if (computerSelected === 2) {
        return "Paper";
    } else if (computerSelected === 3) {
        return "Scissors";
    }
}

//  intialization of two variables

computerScore = 0;
HumanScore = 0;
// function to play each round
function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    let humanChoiceLower = humanChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();


    if (humanChoiceLower === "rock" && computerChoiceLower === "rock") {
        alert("it's a tie! Try Again.");
    }

    else if (humanChoiceLower === "rock" && computerChoiceLower === "paper") {
        alert("You Lose!!!");
        computerScore++;
    } else if (humanChoiceLower === "rock" && computerChoiceLower === "scissors") {
        alert("You Win!!!");
        HumanScore++;
    }




    else if (humanChoiceLower === "paper" && computerChoiceLower === "paper") {
        alert("It's a tie! Try Again.");
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "rock") {
        alert("You Win!!!");
        HumanScore++;
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "scissors") {
        alert("You Lose!!!");
        computerScore++;
    }




    else if (humanChoiceLower === "scissors" && computerChoiceLower === "rock") {
        alert("You Lose!!!");
        computerScore++;
    }
    else if (humanChoiceLower === "scissors" && computerChoiceLower === "paper") {
        alert("You Win!!!");
        HumanScore++;
    }
    else if (humanChoiceLower === "scissors" && computerChoiceLower === "scissors") {
        alert("It's a Tie! Try Again.");
    }
}


// 1  
playRound();
// 2
playRound()
// 3
playRound()
// 4
playRound()
// 5
playRound()




if (computerScore > HumanScore) {
    console.log("You have LOST the game!");
    console.log("your scores:" + HumanScore + " Computer's scores" + computerScore);
} else {
    console.log("You have WON the game!");
    console.log("your scores:" + HumanScore + " Computer's scores" + computerScore);
}

