"use strict";
/*
let userName = prompt("what is your name ??");
alert("welcome " + userName + ", it is a nice name ❤");
console.log("welcome " + userName + ", it is a nice name ❤");
let userAge = prompt("how old are you?");
let myAge = 22;
function calculateAge(age) {
  if (age > myAge) {
    let difference = age - myAge;
    alert("You are " + difference + "years older than me !");
    console.log("You are " + difference + "years older than me !");
  } else if (age < myAge) {
    let difference = myAge - age;
    alert("You are " + difference + "years younger than me !");
    console.log("You are " + difference + "years younger than me !");
  } else {
    alert("Nice we have same age ❤");
    console.log("Nice we have same age ❤");
  }
}
calculateAge(userAge);
let userColor = prompt("what is your favorite color ?");
alert(userColor + " is a Very beautiful color my favorite color is black");
console.log(
  userColor + " is a Very beautiful color, my favorite color is black"
);
let knowMe = prompt("Did you know me?");
knowMe = knowMe.toLowerCase();
function ifknow(knowMe) {
  if (knowMe == "yes") {
    alert("I'm glad you are here❤ ");
    console.log("I'm glad you are here❤ ");
  } else if (knowMe == "no") {
    alert("I love getting to know new friends");
    console("I love getting to know new friends");
  } else {
    alert("Have a good day");
    console.log("Have a good day");
  }
}
ifknow(knowMe);
*/
let userScore=0;
let userName=prompt("what is your name?");
let favoriteColor = prompt("is my favorite color is pink? \n (yes/no)").toLocaleLowerCase();
function myFavoriteColor(color){
   if(color == 'yes')
   {
       alert("That's right! I also like black");
       //console.log("That's right! I am also love black");
       userScore++;
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
     userScore++;
    }
 }
 mylocation(mycity);
 let age = prompt("Am I 22 years old?\n (yes/no)").toLocaleLowerCase();
 function myAge(age){
    if(age == 'yes')
    {
        alert("That's right! and I finished the university with 3 and a half years.");
        //console.log("That's right! and I finished the university with 3 and a half years.");
        userScore++;
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
        userScore++;
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
     userScore++;
    }
 }
 myDish(dish);
 alert("Welcome "+userName+" your score is "+userScore +" of 5" );
 //console.log("Welcome "+userName+" your score is "+userScore );

