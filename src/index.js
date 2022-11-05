import readlineSync from 'readline-sync';

export default function mainLogic(functionName, userName) {
  let amountOfRightAnswers = 0;
  while (amountOfRightAnswers < 3) {
    const [question, rightAnswer] = functionName();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      amountOfRightAnswers += 1;
      if (amountOfRightAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }
}
