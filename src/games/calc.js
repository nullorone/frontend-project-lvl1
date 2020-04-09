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
  const first = generateNumberOfRange(1, 10);
  const second = generateNumberOfRange(10, 100);
  const mathOperator = getRandomMathOperator(mathOperators);

  const answer = getMathResult(
    first,
    second,
    mathOperator,
  ).toString();

  const question = `${first} ${mathOperator} ${second}`;

  return [answer, question];
};

const beginCalcGame = () => playGame(rule, createGameInfo);

export default beginCalcGame;
