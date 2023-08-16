'use strict';

let userName = prompt('Hello, what is your name?');
let correctCount = 0;

alert(`Welcome to my site ${userName}! Thank you for being here! Let's play a yes or no guessing game that will test how well you know me!`);

// Guessing Game Questions

// took out functions as assignment asked us not to use them
// function Question1() {
function question1 (){
  let brothers = prompt('I have two brothers. (Reply with yes or no)');

  if (brothers.toLowerCase() === 'y' || brothers.toLowerCase() === 'yes') {
    alert('You are correct!');
    correctCount++;
  } else if(brothers.toLowerCase() === 'n' || brothers.toLowerCase() === 'no') {
    alert('Incorrect! I actually do have two brothers!')
  } else {
    alert('Please respond with a \'yes\' or a \'no');
    // Question1();
}
}
// }

// Question1();

// function Question2() {
function question2 (){
  let sisters = prompt('I have 1 sister. (Reply with yes or no)');
  if (sisters.toLowerCase() === 'y' || sisters.toLowerCase() === 'yes') {
    alert('Incorrect! I don\'t have any sisters');
  } else if(sisters.toLowerCase() === 'n' || sisters.toLowerCase() === 'no') {
    alert('Correct! I don\'t have any sisters!');
    correctCount++;
  } else {
    alert('Please respond with a \'yes\' or a \'no')
    // Question2();
  }
}
// } 

// Question2();

// function Question3() {
function question3 (){

  let instrument = prompt('I can play the piano.');

  if (instrument.toLowerCase() === 'y' || instrument.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(instrument.toLowerCase() === 'n' || instrument.toLowerCase() === 'no') {

    alert('Incorrect! I love playing the piano!')
  } else {

    alert('Please respond with a \'yes\' or a \'no');
    // Question3();
}
}

// }

// Question3();

// function Question4() {
function question4 (){

  let dnd = prompt('I love to play Dungeons and Dragons');

  if (dnd.toLowerCase() === 'y' || dnd.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(dnd.toLowerCase() === 'n' || dnd.toLowerCase() === 'no') {

    alert('Incorrect! I love playing Dungeons and Dragons!')
  } else {

    alert('Please respond with a \'yes\' or a \'no');
    // Question4();
}
}
// }

// Question4();

// function Question5() {
function question5 (){
  let sushi = prompt('Sushi is my favorite food.');

  if (sushi.toLowerCase() === 'y' || sushi.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(sushi.toLowerCase() === 'n' || sushi.toLowerCase() === 'no') {

    alert('Incorrect! I love playing eating sushi!')
  } else {

    alert('Please respond with a \'yes\' or a \'no');
    // Question5();
}
}
// }

// Question5();
function question6 (){
let myAge = 30

let guessAge = parseInt(prompt('How old do you think I am? You\'ll have 6 attempts!'));


for (let i = 0; i < 5; i++){
  
  if (guessAge === myAge) {
    alert('Hey you got it! I am 30!');
    correctCount ++;
    break;
  } else if (guessAge < myAge) {
    alert('Hey, I\'m older than that!')
    guessAge = parseInt(prompt(`How old do you think I am? You have ${5 - i} tries left!`));
  } else if (guessAge > myAge) {
    alert('You really think I\'m that old?!')
    guessAge = parseInt(prompt(`How old do you think I am? You have ${5 - i} tries left!`));
  } else {
    guessAge = parseInt(prompt(`How old do you think I am? You have ${5 - i} tries left!`));
  }
  
}
}

//ask the user a question 

function question7 (){

let favFoods = ['pizza', 'fried rice', 'chicken wings', 'french fries', 'waffle fries', 'popcorn', 'indian', 'mexican']

let correctness = false;

for (let j = 0; j < 6; j++){
let guessFood = prompt(`Guess another of my favorite foods! You'll have ${5 - j} more attempts, and you already know sushi is my favorite! So that won't count!`).toLowerCase();

  for (let i = 0; i < guessFood.length; i++){

    if (guessFood === favFoods[i]) {
      alert(`Hey you got it! ${guessFood} is one of my favorite foods!`);
      correctness = true;
      correctCount ++;
      break;
    }
  }
  while (correctness === false){ 
    alert(`Guess again! ${5 - j} tries left`);
    break;
  }
  if (correctness === true) {
    break;
  }
}
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();


alert(`These are all my favorite foods: ${favFoods}`);















// Guessing Game Results

// function showResults() {
  
  // if (correctCount > incorrectCount) {
    alert(`Hope you had fun! You got ${correctCount} out 7!`);
  // } else if (incorrectCount > correctCount) {
  //   alert(`Thanks for playing! I hope it helped you get to know me a little better!`);
  // }
// }

// showResults();