import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

document.addEventListener("DOMContentLoaded", function() {
    const guessForm = document.getElementById("guessForm");
    const submitGuessBtn = document.getElementById("submitGuess");
    const message = document.getElementById("message");

    let guesses = [];


// Create a single supabase client for interacting with your database
    const supabase = createClient('https://tfzxyqcmzctwgzqyffdo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmenh5cWNtemN0d2d6cXlmZmRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzk4MzUxMCwiZXhwIjoyMDMzNTU5NTEwfQ.d-MkWQAW7Ml-Am97J7sBQMars32KIBX4IyKbkiFuKFo')


    guessForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("nameInput").value;
        const guess = parseInt(document.getElementById("guessInput").value);

        if (!name || !guess || guess <= 0) {
            message.textContent = "Please enter a valid name and guess.";
            return;
        }



        const {data, error} = await supabase
            .from('Guesses')
            .insert([
                {name: name, guess: guess},
            ])
            .select()

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
    // console.log(`The winner is ${winner.name} with a guess of ${winner.guess}.`);
});
