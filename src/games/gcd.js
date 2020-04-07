import generateNumberOfRange from '../utils.js';
import commonGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';

const getResult = (first, second) => {
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
  const question = ({
    first: generateNumberOfRange(1, 10),
    second: generateNumberOfRange(10, 100),
  });

  const answer = getResult(
    question.first,
    question.second,
  ).toString();

  const textQuestion = `${question.first} ${question.second}`;

  return [answer, textQuestion];
};

const getGcdGameAnswers = () => commonGame(rule, createGameInfo);

export default getGcdGameAnswers;
