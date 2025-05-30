//document.querySelector(".message").textContent = "Let's play our game"

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0


const displayMessage = (message) => {
    document.querySelector(".message").textContent = message
}

//types of eventListener: click, mouseHover(oce you have your mouse over a button, it it does something)

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


        if(score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore

        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Your guess is too high": "Your guess is too low")
            score--
            document.querySelector(".score").textContent = score
        } else {
            displayMessage("Sorry, you lost the game")
            document.querySelector(".score").textContent = 0
        }
    }
})