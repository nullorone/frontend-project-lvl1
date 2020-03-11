import readlineSync from 'readline-sync';
import { Text, AMOUNT_CORRECT_ANSWER } from './constants.js';

const getRandomIndexToLimit = (limit) => Math.floor(Math.random() * limit);

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = getRandomIndexToLimit(decimalOrder.length);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};


const commonGame = (userName, rule, question, answer, textQuestion) => {
  let countCorrectAnswer = 0;

  console.log(rule);

  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER) {
    const gameQuestion = question();
    const gameAnswer = answer(gameQuestion);
    const gameTextQuestion = textQuestion(gameQuestion);

    console.log(Text.QUESTION(gameTextQuestion));
    const userAnswer = readlineSync.question(Text.USER_ANSWER);

    if (userAnswer.toString() === gameAnswer.toString()) {
      countCorrectAnswer += 1;
      console.log(Text.CORRECT);
    } else {
      console.log(Text.WRONG(userAnswer, gameAnswer));
      console.log(Text.TRY_AGAIN(userName));
      return;
    }
  }

  console.log(Text.CONGRATULATION(userName));
};

export {
  generateNumber,
  commonGame,
  getRandomIndexToLimit,
};
