//const one = document.getElementById("one");
//const two = document.getElementById("two");
//const three = document.getElementById("three");
//const four = document.getElementById("four");
//const five = document.getElementById("five");
//const six = document.getElementById("six");
//const search = document.getElementById("search");
//const myp = document.getElementById("myp");

//search.attachShadow("search function(){search += }")
const minnum = 1;
const maxnum = 50;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + maxnum;
console.log(answer)
let attemps = 0;
let guess;
let running = true;



// while(true){
//     guess = window.prompt("enter a number 1-20");
//     if (guess == "exit") {
//         break;
//     }
//     guess = Number(guess);
//     if(isNaN(guess) || guess === null){
//         guess = window.prompt("please enter a valid number");
//       break;
//     }
//     else{
//         attemps++;
//         if(guess < answer){
//             guess = window.prompt("Your guess is LOW");
//         }
//         else{
//             window.alert("your guess is HIGH");
//         }
//     }   
//     }
   
