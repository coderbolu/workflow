let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0


const displayMessage = (".message") => {
    document.querySelector(".message").textContent = message
}