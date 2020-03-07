import readlineSync from 'readline-sync';
import { printMessage } from '../src/index.js';

const AMOUNT_CORRECT_ANSWER = 3;

const AnswerText = {
  YES: 'yes',
  NO: 'no',
};

// Returns an inverted response
const getInvertAnswer = (answer) => (answer === AnswerText.YES ? AnswerText.NO : AnswerText.YES);

const Text = {
  RULE: 'Answer "yes" if the number is even, otherwise answer "no".',
  QUESTION: (number) => `Question: ${number}`,
  USER_ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  WRONG: (userAnswer) => `"${userAnswer}" is wrong answer ;(. Correct answer was "${getInvertAnswer(userAnswer)}".`,
  CONGRATULATION: (name) => `Congratulations, ${name}!`,
  TRY_AGAIN: (name) => `Let's try again, ${name}!`,
};

// Return true if number even
const checkEven = (number) => number % 2 === 0;

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = Math.floor(Math.random() * decimalOrder.length);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};

const getEvenGameAnswers = (name) => {
  let countCorrectAnswer = 0;

  printMessage(Text.RULE);

  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER) {
    const number = generateNumber();
    const correctAnswer = checkEven(number) ? AnswerText.YES : AnswerText.NO;

    printMessage(Text.QUESTION(number));
    const userAnswer = readlineSync.question(Text.USER_ANSWER);

    // If userAnswer not correct answer mask, stop game
    if (userAnswer !== AnswerText.YES && userAnswer !== AnswerText.NO) {
      printMessage(Text.WRONG(userAnswer));
      printMessage(Text.TRY_AGAIN(name));
      return;
    }

    if (userAnswer === correctAnswer) {
      countCorrectAnswer += 1;
      printMessage(Text.CORRECT);
    } else {
      printMessage(Text.WRONG(userAnswer));
      printMessage(Text.TRY_AGAIN(name));
      return;
    }
  }

  printMessage(Text.CONGRATULATION(name));
};

export default getEvenGameAnswers;
