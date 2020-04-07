import generateNumberOfRange from '../utils.js';
import commonGame from '../index.js';

const mathOperators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const numberLimit = {
  first: {
    min: 1,
    max: 10,
  },
  second: {
    min: 10,
    max: 100,
  },
};

const getRandomMathOperator = (operators) => {
  const indexOperator = generateNumberOfRange(0, operators.length - 1);

  return operators[indexOperator];
};

const getMathResult = (first, second, operator) => {
  switch (operator) {
    case (mathOperators[0]):
      return first + second;
    case (mathOperators[1]):
      return first - second;
    case (mathOperators[2]):
      return first * second;
    default:
      throw new Error('Not correct operator');
  }
};

const createGameInfo = () => {
  const question = ({
    first: generateNumberOfRange(numberLimit.first.min, numberLimit.first.max),
    second: generateNumberOfRange(numberLimit.second.min, numberLimit.second.max),
    operator: getRandomMathOperator(mathOperators),
  });

  const answer = getMathResult(
    question.first,
    question.second,
    question.operator,
  );

  const textQuestion = `${question.first} ${question.operator} ${question.second}`;

  return [answer, textQuestion];
};

const getCalcGameAnswers = () => commonGame(rule, createGameInfo);

export default getCalcGameAnswers;
