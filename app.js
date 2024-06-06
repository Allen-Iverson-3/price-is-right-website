document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form data
    const name = document.getElementById('name').value;
    const guess = document.getElementById('guess').value;

    // Display the response
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your guess of $${guess} has been submitted.</p>`;

    // Optionally, reset the form
    event.target.reset();
});
