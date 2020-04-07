import generateNumberOfRange from '../utils.js';
import commonGame from '../index.js';

const mathOperators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

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
    first: generateNumberOfRange(1, 10),
    second: generateNumberOfRange(10, 100),
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
