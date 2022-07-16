function computerPlay() {
    // Returns a random number between 0 and 2
    const randomIndex = Math.round(Math.random() * 2)
    const choices = ['Rock', 'Paper', 'Scissors']

    return choices[randomIndex]
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return 'It is a draw!'
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return `You Win! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {

    let playerScore = 0

    for (let index = 0; index < 5; index++) {
        const playerChoice = prompt("Choose Rock, Scissors or Paper")
        const computerChoice = computerPlay()

        const singleRoundResult = singleRound(playerChoice, computerChoice)
        console.log(singleRoundResult)

        if (singleRoundResult.includes('You Win')) {
            playerScore = playerScore + 1
        }
    }

    if (playerScore > 2) {
        console.log('Player won at least 50% of the rounds')
    } else {
        console.log('Player lost at least 50% of the rounds')
    }
}