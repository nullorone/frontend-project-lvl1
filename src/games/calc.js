import {
  getRandomIndexToLimit,
  generateNumber,
  commonGame,
} from '../index.js';

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

const getCalcGameAnswers = (userName) => commonGame(userName, RULE, question, answer, textQuestion);

export default getCalcGameAnswers;