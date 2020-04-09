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
  const firstNumber = generateNumberOfRange(1, 10);
  const secondNumber = generateNumberOfRange(10, 100);
  const mathOperator = getRandomMathOperator(mathOperators);

  const answer = getMathResult(
    firstNumber,
    secondNumber,
    mathOperator,
  ).toString();

  const question = `${firstNumber} ${mathOperator} ${secondNumber}`;

  return [answer, question];
};

const beginCalcGame = () => playGame(rule, createGameInfo);

export default beginCalcGame;
