let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0


const displayMessage = (message) => {
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function(){
    const guess= Number(document.querySelector(".guess").value)

    //No number enter
    if (!guess) {
        displayMessage("Enter a valid number")

        ///when a player guesses the right number
    }else if (guess === secretNumber) {
        displayMessage ("You guessed correctly");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#FFC0CB"
    }
})