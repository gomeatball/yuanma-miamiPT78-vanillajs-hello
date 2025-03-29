import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adjective = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ["capcom", '.us']
  

let domainName = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let z = 0; z < noun.length; z++) {
     for (let x = 0; x < extension.length; x++) {
   
     if (extension[x] === "capcom") {
  let  newExtensionArray = extension[x].split("");
      newExtensionArray.splice(3,0,".")
      let newExtension = newExtensionArray.join("")
            domainName = `${pronoun[i]}${adjective[j]}${noun[z]}${newExtension}`
            console.log(domainName);
            
     }else {
            domainName = `${pronoun[i]}${adjective[j]}${noun[z]}${extension[x]}`; 
      console.log(domainName);
      
     }
        
      }
     }

  
  }
   }
    }
  









