import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

function getRandomInt() {
  return Math.floor(Math.random() * 50);
}

let amountOfRightAnswers = 0;
const userName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (true) {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    amountOfRightAnswers += 1;
    if (amountOfRightAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  } else {
    if (rightAnswer === 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill!`);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!`);
    }
    break;
  }
}
