import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomInt() {
  return Math.floor(Math.random() * 50);
}

function findGCD(a, b) {
  if (!b) {
    return a;
  }
  return findGCD(b, a % b);
}

function mainGCD() {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = (findGCD(firstNumber, secondNumber)).toString();
  return [question, answer];
}

export default function resGCD() {
  const userName = getName();
  console.log('Find the greatest common divisor of given numbers.');
  mainLogic(mainGCD, userName);
}
