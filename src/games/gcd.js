import generateNumberOfRange from '../utils.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const getGcd = (first, second) => {
  if (first === 0) {
    throw new Error('Wrong first argument. Must be greatest 0.');
  }

  const lessDivisor = first > second ? second : first;
  let commonDivisor = lessDivisor;

  for (let i = 2; i < lessDivisor; i += 1) {
    if (first % i === 0 && second % i === 0) {
      commonDivisor = i;
    }
  }

  return commonDivisor;
};

const createGameInfo = () => {
  const question = {
    first: generateNumberOfRange(1, 10),
    second: generateNumberOfRange(10, 100),
  };

  const answer = getGcd(
    question.first,
    question.second,
  ).toString();

  const textQuestion = `${question.first} ${question.second}`;

  return [answer, textQuestion];
};

const beginGcdGame = () => playGame(rule, createGameInfo);

export default beginGcdGame;
