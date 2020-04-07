import generateNumberOfRange from '../utils.js';
import commonGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberLimit = {
  min: 1,
  max: 100,
};

// Return true if number even
const checkEven = (number) => number % 2 === 0;


const createGameInfo = () => {
  const question = generateNumberOfRange(numberLimit.min, numberLimit.max);

  const answer = checkEven(question) ? 'yes' : 'no';

  const textQuestion = question.toString();

  return [answer, textQuestion];
};

const getEvenGameAnswers = () => commonGame(rule, createGameInfo);

export default getEvenGameAnswers;
