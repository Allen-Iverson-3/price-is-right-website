document.addEventListener("DOMContentLoaded", function() {
    const guessForm = document.getElementById("guessForm");
    const submitGuessBtn = document.getElementById("submitGuess");
    const message = document.getElementById("message");

    let guesses = [];

    guessForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("nameInput").value;
        const guess = parseInt(document.getElementById("guessInput").value);

        if (!name || !guess || guess <= 0) {
            message.textContent = "Please enter a valid name and guess.";
            return;
        }

        guesses.push({ name: name, guess: guess });
        updateUI();

        submitGuessBtn.disabled = true;
        submitGuessBtn.style.display = "none";
        message.textContent = "Thank you for your guess!";
    });

    function updateUI() {
        // Loop through the guesses array
        for (let i = 0; i < guesses.length; i++) {
            const guess = guesses[i];
            console.log(`Name: ${guess.name}, Guess: ${guess.guess}`);
        }
    }

    // Example function to find the closest guess
    function findClosestGuess() {
        let closestGuess = null;
        let closestDifference = Infinity;

        for (let i = 0; i < guesses.length; i++) {
            const guess = guesses[i];
            const difference = Math.abs(guess.guess - 45300); // Actual price is 45300
            if (difference < closestDifference) {
                closestDifference = difference;
                closestGuess = guess;
            }
        }

        return closestGuess;
    }

    // Usage example
    const winner = findClosestGuess();
    console.log(`The winner is ${winner.name} with a guess of ${winner.guess}.`);
});
