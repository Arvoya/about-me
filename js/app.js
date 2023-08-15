'use strict';

let userName = prompt('Hello, what is your name?');
let correctCount = 0;
let incorrectCount = 0;

alert(`Welcome to my site ${userName}! Thank you for being here! Let's play a yes or no guessing game that will test how well you know me!`);

// Guessing Game Questions
function Question1() {

  let brothers = prompt('I have two brothers. (Reply with yes or no)');

  if (brothers.toLowerCase() === 'y' || brothers.toLowerCase() === 'yes') {
    alert('You are correct!');
    correctCount++;
  } else if(brothers.toLowerCase() === 'n' || brothers.toLowerCase() === 'no') {
    alert('Incorrect! I actually do have two brothers!')
    incorrectCount++;
  } else {
    alert('Please respond with a \'yes\' or a \'no');
    Question1();
}
}

Question1();

function Question2() {
  let sisters = prompt('I have 1 sister. (Reply with yes or no)');
  if (sisters.toLowerCase() === 'y' || sisters.toLowerCase() === 'yes') {
    alert('Incorrect! I don\'t have any sisters');
    incorrectCount++;
  } else if(sisters.toLowerCase() === 'n' || sisters.toLowerCase() === 'no') {
    alert('Correct! I don\'t have any sisters!');
    correctCount++;
  } else {
    alert('Please respond with a \'yes\' or a \'no')
    Question2();
  }
} 

Question2();

function Question3() {

  let instrument = prompt('I can play the piano.');

  if (instrument.toLowerCase() === 'y' || instrument.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(instrument.toLowerCase() === 'n' || instrument.toLowerCase() === 'no') {

    alert('Incorrect! I love playing the piano!')
    incorrectCount++;

  } else {

    alert('Please respond with a \'yes\' or a \'no');
    Question3();
}

}

Question3();

function Question4() {

  let dnd = prompt('I love to play Dungeons and Dragons');

  if (dnd.toLowerCase() === 'y' || dnd.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(dnd.toLowerCase() === 'n' || dnd.toLowerCase() === 'no') {

    alert('Incorrect! I love playing Dungeons and Dragons!')
    incorrectCount++;

  } else {

    alert('Please respond with a \'yes\' or a \'no');
    Question4();
}

}

Question4();

function Question5() {

  let sushi = prompt('Sushi is my favorite food.');

  if (sushi.toLowerCase() === 'y' || sushi.toLowerCase() === 'yes') {

    alert('You are correct!');
    correctCount++;

  } else if(sushi.toLowerCase() === 'n' || sushi.toLowerCase() === 'no') {

    alert('Incorrect! I love playing eating sushi!')
    incorrectCount++;

  } else {

    alert('Please respond with a \'yes\' or a \'no');
    Question5();
}

}

Question5();

// Guessing Game Results

function showResults() {
  
  if (correctCount > incorrectCount) {
    alert(`Hey great work! You got ${correctCount} out 5! Looks like you know me pretty well!`);
  } else if (incorrectCount > correctCount) {
    alert(`Thanks for playing! I hope it helped you get to know me a little better!`);
  }
}

showResults();