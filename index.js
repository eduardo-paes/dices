// Dice 1
var dice1 = Math.floor(Math.random() * 6) + 1;
var imageDice1 = "images/dice" + dice1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageDice1);

// Dice 2
var dice2 = Math.floor(Math.random() * 6) + 1;
var imageDice2 = "images/dice" + dice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageDice2);

// H1 Element
if (dice1 > dice2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1").textContent = "Draw";
}
