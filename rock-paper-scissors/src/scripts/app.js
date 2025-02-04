function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === aiChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && aiChoice === 'scissors') ||
        (userChoice === 'paper' && aiChoice === 'rock') ||
        (userChoice === 'scissors' && aiChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    updateDisplay(userChoice, aiChoice, result);
}

function updateDisplay(userChoice, aiChoice, result) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML = `You chose: ${userChoice}<br>AI chose: ${aiChoice}<br>${result}`;
}

document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        playGame(userChoice);
    });
});