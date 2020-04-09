import generateNumberOfRange from '../utils.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// Return true if number even
const isEven = (number) => number % 2 === 0;


const createGameInfo = () => {
  const question = generateNumberOfRange(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return [answer, question];
};

const getEvenGameAnswers = () => playGame(rule, createGameInfo);

export default getEvenGameAnswers;
