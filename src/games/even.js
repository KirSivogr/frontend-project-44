import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function mainEven() {
  const number = getRandomInt();
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [number, answer];
}

export default function resultEven() {
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  mainLogic(mainEven, userName);
}
