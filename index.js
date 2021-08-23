
var randomNumber1;
a=Math.random();
randomNumber1=Math.floor((a*6)+1);
var randomDiceImage="dice"+randomNumber1+".png";
var imageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);
var r2=Math.floor(((Math.random()*6)+1));
var image2="images/"+"dice"+r2+".png";
image12=document.querySelectorAll("img")[1];
image12.setAttribute("src",image2);
if(randomNumber1>r2)
{
  var re="player 1 wins";
   var res=document.querySelector("h1").innerHTML="player 1 wins.";


}

else if(r2>randomNumber1){
  var res1=document.querySelector("h1").innerHTML="player 2 wins.";
}
else{
  document.querySelector("h1").innerHTML="DRAW Match";
}
