import generateNumberOfRange from '../utils.js';
import playGame from '../index.js';

const mathOperators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const getRandomMathOperator = (operators) => {
  const indexOperator = generateNumberOfRange(0, operators.length - 1);

  return operators[indexOperator];
};

const getMathResult = (first, second, operator) => {
  switch (operator) {
    case ('+'):
      return first + second;
    case ('-'):
      return first - second;
    case ('*'):
      return first * second;
    default:
      throw new Error('Not correct operator');
  }
};

const createGameInfo = () => {
  const question = ({
    first: generateNumberOfRange(1, 10),
    second: generateNumberOfRange(10, 100),
    operator: getRandomMathOperator(mathOperators),
  });

  const answer = getMathResult(
    question.first,
    question.second,
    question.operator,
  ).toString();

  const textQuestion = `${question.first} ${question.operator} ${question.second}`;

  return [answer, textQuestion];
};

const getCalcGameAnswers = () => playGame(rule, createGameInfo);

export default getCalcGameAnswers;
