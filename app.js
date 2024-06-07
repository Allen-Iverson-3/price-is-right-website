class Person {
    constructor(name, guess) {
        this.name = name;
        this.guess = guess;
    }
}

class PickItem {
    static pickItems() {
        return "Audi Q5";
    }

    static itemPrice(item) {
        switch (item) {
            case "Audi Q5":
                return 45300;
            default:
                return 350;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const personList = [];

    function handleSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const guess = parseInt(document.getElementById('guess').value);

        const person = new Person(name, guess);
        personList.push(person);

        document.getElementById('name').value = '';
        document.getElementById('guess').value = '';
    }

    function pickWinner() {
        const item = PickItem.pickItems();
        let closestGuess = null;
        let closestDifference = Infinity;

        for (const person of personList) {
            const price = PickItem.itemPrice(item);
            const difference = Math.abs(person.guess - price);

            if (closestGuess === null || difference < closestDifference) {
                closestGuess = person;
                closestDifference = difference;
            }
        }

        if (closestGuess !== null) {
            console.log(`${closestGuess.name} is the winner! They guessed closest to the price of ${item}.`);
        } else {
            console.log('No winner this time.');
        }
    }

    const form = document.getElementById('guessForm');
    form.addEventListener('submit', handleSubmit);

    document.getElementById('pickWinnerBtn').addEventListener('click', pickWinner);
});
