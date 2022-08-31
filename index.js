var randomNumber = Math.random();
randomNumber = Math.floor(randomNumber*6 +1);

console.log(randomNumber);

var img = "dice" + randomNumber +".png";
var imgSrc = "images/" + img;

var b = document.querySelector(".img1")
b.setAttribute("src",imgSrc);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6 +1);

// console.log(randomNumber2);
//
var img2 = "dice" + randomNumber2 +".png";
var imgSrcc = "images/" + img2;
//
var c = document.querySelector(".img2")
c.setAttribute("src",imgSrcc);


var h = document.querySelector("h1");
if(randomNumber > randomNumber2){
  h.innerHTML = "🚩 Play 1 Wins!";
} else if(randomNumber < randomNumber2) {
  h.innerHTML = "🚩 Play 2 Wins!";
} else {
  h.innerHTML = "Draw!";
}








//  Angela Solution
//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//
//
// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
