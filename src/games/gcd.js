import generateNumberOfRange from '../utils/utils.js';
import commonGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers';
const numberLimit = {
  first: {
    min: 0,
    max: 10,
  },
  second: {
    min: 10,
    max: 100,
  },
};

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
  first: generateNumberOfRange(numberLimit.first.min, numberLimit.first.max),
  second: generateNumberOfRange(numberLimit.second.min, numberLimit.second.max),
});

const answer = (gameQuestion) => getResult(
  gameQuestion.first,
  gameQuestion.second,
);

const textQuestion = (gameQuestion) => `${gameQuestion.first} ${gameQuestion.second}`;

const getGcdGameAnswers = () => commonGame(rule, question, answer, textQuestion);

export default getGcdGameAnswers;
