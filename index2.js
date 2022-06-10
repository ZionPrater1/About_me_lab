"use strict";
let name = prompt("What is your name")
window.alert(name)
let guess = prompt("Was I born in Memphis, Tennessee ?")
let Answer1 = "No"
if(Answer1[0]=== Answer1[0].toUpperCase()){
    console.log('Correct')
}
if (Answer1 == guess) {

    window.alert("No is correct");
  }
  else if (guess == "Yes") {
    alert("Yes is incorrect")
  }
  let guess2 = prompt("Did I move to Memphis, Tennessee at the age of four ?")
let Answer2 = "Yes"
if(Answer2[0]=== Answer2[0].toUpperCase()){
    console.log('Correct')
}
if (Answer2 == guess2) {

    window.alert("Yes is correct");
  }
  else if (guess2 == "No") {
    alert("No is incorrect")
  }
  let guess3 = prompt("Is it true that I graduated high school in 2018 ?")
  let Answer3 = "No"
  if(Answer3[0]=== Answer3[0].toUpperCase()){
    console.log('Correct')
}
  if (Answer3 == guess3) {
  
      window.alert("No is correct");
    }
    else if (guess3 == "Yes") {
      alert("No is incorrect")
    }
    let guess4 = prompt("Did I transfer to the University of Tennessee at Chattanooga in 2018 ?")
    let Answer4 = "Yes"
    if(Answer4[0]=== Answer4[0].toUpperCase()){
        console.log('Correct')
    }
    if (Answer4 == guess4) {
    
        window.alert("Yes is correct");
      }
      else if (guess4 == "No") {
        alert("No is incorrect")
      }
      let guess5 = prompt("Was I a delivery driver for Amazon ?")
let Answer5 = "Yes"
if(Answer5[0]=== Answer5[0].toUpperCase()){
    console.log('Correct')
}
if (Answer5 == guess5) {

    window.alert("Yes is correct");
  }
  else if (guess5 == "No") {
    alert("No is incorrect")
  }
  for (let z = 1; z <= 4; z++){
let guess6 = prompt("Barry Sanders is number _ in my top ten running backs list")
let Answer6 = "4"
 if(Answer6 == guess6){
     window.alert("4 is correct")
     break;
 }
 else { guess6 < 4;
    alert("too low");
  }
}
for (let z = 1; z <= 6; z++){
    let guess7 = prompt("Can you name one of top two running backs ?")
    let RB =["Walter Payton"|| "Emmitt Smith"]
    let Answer7 = RB
    if (Answer7 == guess7){
    window.alert("That is correct")
    break;
    }
    else {Answer7
    window.alert("That is incorrect try again")
    }
    
}






























