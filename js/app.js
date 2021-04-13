"use strict";

let score=0;
let userName=prompt("what is your name?");
let favoriteColor = prompt("is my favorite color is pink? \n (yes/no)").toLocaleLowerCase();
function myFavoriteColor(color){
   if(color == 'yes')
   {
       alert("That's right! I also like black");
       //console.log("That's right! I am also love black");
       score++;
      
   }
   else if(color=='no'){
    alert("Sorry ,I love pink it is a beautiful color ");
    //console.log("Sorry ,I love pink it is a beautiful color ");
    
   }
}
myFavoriteColor(favoriteColor);
let mycity = prompt("Do I live in Amman? \n (yes/no)").toLocaleLowerCase();
function mylocation(location){
    if(location == 'yes')
    {
        alert("In fact, I live in Ain Al-Basha");
        //console.log("In fact, I live in Ain Al-Basha");
    
    }
    else if(location=='no'){
     alert("That's right! I live in  Ain Al-Basha");
     //console.log("That's right! I live in  Ain Al-Basha");
      score++;
    }
 }
 mylocation(mycity);
 let age = prompt("Am I 22 years old?\n (yes/no)").toLocaleLowerCase();
 function myAge(age){
    if(age == 'yes')
    {
        alert("That's right! and I finished the university with 3 and a half years.");
        //console.log("That's right! and I finished the university with 3 and a half years.");
         score++;
    }
    else if(age=='no'){
     alert("Sorry ,I am 22 years old.");
     //console.log("Sorry ,I love pink it is a beautiful color ");
     
    }
 }
 myAge(age);
 let it = prompt("Do I have previous experience in IT?\n (yes/no)").toLocaleLowerCase();
 function itExperience(it){
    if(it == 'yes')
    {
        alert("That's right! I am frontend developer and i studied software engineering");
        //console.log("That's right! I am frontend developer and i studied software engineering");
        score++;
    }
    else if(it =='no'){
     alert("Sorry ,I am frontend developer and i studied software engineering");
     //console.log("Sorry ,I am frontend developer and i studied software engineering");
     
    }
 }
 itExperience(it);
 let dish= prompt("Do I like KFC? \n (yes/no)").toLocaleLowerCase();
 function myDish(dish){
    if(dish == 'yes')
    {
        alert("To be honest, it's the only thing I don't like");
        //console.log("To be honest, it's the only thing I don't like");
    
    }
    else if(dish =='no'){
     alert("That's right! I like rice .");
     //console.log("That's right! I like rice .");
      score++;
    }
 }
 myDish(dish);
 alert("Welcome "+userName +" we will play guessing game" );
 //console.log("Welcome "+userName +" we will play guessing game" );



let num = 9;
let arr =[1,2,3,4,5,6,7,8,9,10];
let userInput=prompt("plz enter guessing number to start game you have 4 chance");
let opportunities =4;
while(userInput != num && opportunities >0 ){
    if(userInput > num){
        alert("too high");
    }
    else{
        alert("too low");
    }
    userInput = prompt("enter another number");
    opportunities --;
}
if (userInput == num){
    alert("it is correct! good job ");
    score++;
}else{
    alert("sorry you lose the correct answere is "+num);
}
let opportunities2 =6;
userInput = prompt("we will paly another guessing game with hint ,the number is in these list ["+arr+"]");
while(userInput != num && opportunities2 >0){
    if(userInput > 4){
        alert("too high");
    }
    else{
        alert("too low");
    }
    userInput = prompt("enter another number");
    opportunities2--;
}
if (userInput == 4){
    alert("it is correct! good job ");
    score++;
}else{
    alert("sorry you lose the correct answere is "+4);
}
alert("welcome "+userName+" your final score is "+score +"of 7");