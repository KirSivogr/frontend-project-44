import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomPosition() {
  return Math.floor(Math.random() * 10);
}

function getRandomInt() {
  return Math.floor(Math.random() * 30);
}

function getRandomQ() {
  return Math.floor(Math.random() * 5);
}

function mainProgression() {
  const position = getRandomPosition();
  const firstNumberOfProgression = getRandomInt() + 1;
  const denominator = getRandomQ() + 1;
  let answer = '';
  let question = `${firstNumberOfProgression} `;
  let currentNumberOfProgression = firstNumberOfProgression;
  for (let i = 1; i < 10; i += 1) {
    if (i !== position) {
      let currentNumber = currentNumberOfProgression + denominator;
      question += `${currentNumber} `;
      currentNumberOfProgression += denominator;
    } else {
      question += '.. ';
      let currentNumber = currentNumberOfProgression + denominator;
      answer = `${currentNumber}`;
      currentNumberOfProgression += denominator;
    }
  }
  return [question, answer];
}

export default function resProgression() {
  const userName = getName();
  console.log('What number is missing in the progression?');
  mainLogic(mainProgression, userName);
}
