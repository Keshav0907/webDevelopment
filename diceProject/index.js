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







