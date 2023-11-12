var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var DiceImg1 = "images/dice" + player1 + ".png";
var DiceImg2 = "images/dice" + player2 + ".png";

var imageArray1 = document.querySelectorAll("img")[0].setAttribute("src", DiceImg1);
var imageArray2 = document.querySelectorAll("img")[1].setAttribute("src", DiceImg2);

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins "
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩"
} else {
  document.querySelector("h1").innerHTML = "🚩 T I E 🚩"
}
