import readlineSync from 'readline-sync';
import {
  getRandomIndexToLimit,
  generateNumber,
} from '../utils/utils.js';
import commonGame from '../index.js';

const MATH_OPERATORS = ['+', '-', '*'];
const RULE = 'What is the result of the expression?';

const getRandomMathOperator = (operators) => {
  const indexOperator = getRandomIndexToLimit(operators.length);

  return operators[indexOperator];
};

const getMathResult = (first, second, operator) => {
  switch (operator) {
    case (MATH_OPERATORS[0]):
      return first + second;
    case (MATH_OPERATORS[1]):
      return first - second;
    case (MATH_OPERATORS[2]):
      return first * second;
    default:
      throw new Error('Not correct operator');
  }
};

const question = () => ({
  first: generateNumber(),
  second: generateNumber(),
  operator: getRandomMathOperator(MATH_OPERATORS),
});

const answer = (gameQuestion) => getMathResult(
  gameQuestion.first,
  gameQuestion.second,
  gameQuestion.operator,
);

const textQuestion = (gameQuestion) => `${gameQuestion.first} ${gameQuestion.operator} ${gameQuestion.second}`;

console.log('Welcome to the Brain Games!\n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

const getCalcGameAnswers = () => commonGame(name, RULE, question, answer, textQuestion);

export default getCalcGameAnswers;
