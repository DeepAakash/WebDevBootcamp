var randomVariable1=Math.floor(Math.random()*6)+1;
var dice1="./images/dice" + randomVariable1 +".png";
document.querySelector(".img1").setAttribute("src", dice1);

var randomVariable2=Math.floor(Math.random()*6)+1;
var dice2="./images/dice" + randomVariable2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 wins 🎉";
}
else if(randomVariable2>randomVariable1){
    document.querySelector("h1").innerHTML="Player 2 wins 🎉";
}
else{
    document.querySelector("h1").innerHTML="Draw 😶‍🌫️";
}