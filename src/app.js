import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'you', 'my', 'her', 'his'];
  let adjective = ['great', 'big', 'silly', 'happy', 'thoughtful'];
  let noun = ['jogger', 'racoon', 'panda', 'pig', 'chicken'];
  let extension = [".com", '.us', '.org', '.dev', '.net']
  
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let z = 0; z < noun.length; z++) {
     for (let x = 0; x < extension.length; x++) {
      console.log(`${pronoun[i]}${adj[j]}${noun[z]}${extension[x]}`);
      
     }

  
  }
   }
    }
  






};


