import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomCard();
    
  

    }
  function randomCard(){
    let shapeArray = ["♦", "♥", "♠", "♣"];
  let randomShapeIndex = Math.floor(Math.random() * shapeArray.length);
  let shape = shapeArray[randomShapeIndex];
  // console.log("shape: ", shape);

  let shapeDisplay = document.querySelectorAll('.shape');
  // console.log("shapeDisplay: ", shapeDisplay);
  for (let i = 0; i < shapeDisplay.length; i++) {
    shapeDisplay[i].innerHTML = shape;
    if (randomShapeIndex === 0 || randomShapeIndex === 1) {
      shapeDisplay[i].style.color = "red"; 
     }else {
      shapeDisplay[i].style.color = "black";
     }
  }
  

 
  
  // function pokerCardShape() {
  //  if (randomShapeIndex === 0 || randomShapeIndex === 1) {
  //   shapeDisplay.style.color = "red"; 
  //  }else {
  //   shapeDisplay.style.color = "black";
  //  }
//   }
// pokerCardShape();

let pokerNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let randomNumberIndex = Math.floor(Math.random() * pokerNumberArray.length);
let randomNumer = pokerNumberArray[randomNumberIndex];

let numberElement = document.querySelector(".number");
numberElement.textContent = randomNumer;


  }

    let click_button = document.querySelector("button");
    click_button.addEventListener('click', randomCard);
    







