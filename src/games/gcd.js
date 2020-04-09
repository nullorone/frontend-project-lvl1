import generateNumberOfRange from '../utils.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const getGcd = (first, second) => {
  if (first === 0 || second === 0) {
    throw new Error('Wrong argument. Must be greatest 0.');
  }

  let firstNumber = first;
  let secondNumber = second;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  return firstNumber + secondNumber;
};

const createGameInfo = () => {
  const first = generateNumberOfRange(1, 10);
  const second = generateNumberOfRange(10, 100);

  const answer = getGcd(
    first,
    second,
  ).toString();

  const question = `${first} ${second}`;

  return [answer, question];
};

const beginGcdGame = () => playGame(rule, createGameInfo);

export default beginGcdGame;
