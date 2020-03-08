import { commonGame, generateNumber } from '../../src/index.js';

const RULE = 'Find the greatest common divisor of given numbers';

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

const question = () => ({
  first: generateNumber(),
  second: generateNumber(),
});

const answer = (gameQuestion) => getResult(
  gameQuestion.first,
  gameQuestion.second,
);

const textQuestion = (gameQuestion) => `${gameQuestion.first} ${gameQuestion.second}`;

const getGcdGameAnswers = (userName) => commonGame(userName, RULE, question, answer, textQuestion);

export default getGcdGameAnswers;
