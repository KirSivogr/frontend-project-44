import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomInt() {
  return Math.floor(Math.random() * 50);
}

function getRandomChar() {
  const signs = ['*', '-', '+'];
  return signs[Math.floor((Math.random() * 3))];
}

function mainCalc() {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const sign = getRandomChar();
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  let answer;
  if (sign === '*') {
    answer = (firstNumber * secondNumber).toString();
  } else if (sign === '-') {
    answer = (firstNumber - secondNumber).toString();
  } else {
    answer = (firstNumber + secondNumber).toString();
  }
  return [question, answer];
}

export default function resCalc() {
  const userName = getName();
  console.log('What is the result of the expression?');
  mainLogic(mainCalc, userName);
}
