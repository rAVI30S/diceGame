var numberRandom1 = Math.floor(Math.random() * 6) +1;
var randomDicePic = "dice" + numberRandom1 + ".png";
var randomImageSource = "images/" + randomDicePic;
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImageSource)


var numberRandom2 = Math.floor(Math.random() *6)+1;
var randomDicePic2 = "dice" + numberRandom2 + ".png";
var randomImageSource2 = "images/" + randomDicePic2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(numberRandom1 > numberRandom2){
    document.querySelector("h1").innerHTML = "Player 1 wins...!!";
}
else if (numberRandom1 < numberRandom2){
    document.querySelector("h1").innerHTML = "Player 2 wins...!!";
}
else {

    document.querySelector("h1").innerHTML = "Its a draw...!!";
}