import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function mainPrime() {
  const number = getRandomInt();
  let answer = '';
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      answer = 'no';
    }
  }
  if (answer === '') {
    answer = 'yes';
  }
  return [number, answer];
}

export default function resPrime() {
  const userName = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  mainLogic(mainPrime, userName);
}
