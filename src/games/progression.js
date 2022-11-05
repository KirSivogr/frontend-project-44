import getName from '../cli.js';
import mainLogic from '../index.js';

function getRandomPosition() {
  return Math.floor(Math.random() * 10);
}

function getRandomInt() {
  return Math.floor(Math.random() * 15);
}

function getRandomQ() {
  return Math.floor(Math.random() * 2);
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
      question += `${currentNumberOfProgression * denominator} `;
      currentNumberOfProgression *= denominator;
    } else {
      question += '.. ';
      answer = `${currentNumberOfProgression * denominator}`;
      currentNumberOfProgression *= denominator;
    }
  }
  return [question, answer];
}

export default function resProgression() {
  const userName = getName();
  console.log('What number is missing in the progression?');
  mainLogic(mainProgression, userName);
}
