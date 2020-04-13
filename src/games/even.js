import generateNumberOfRange from '../utils.js';
import getGameData from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// Return true if number even
const isEven = (number) => number % 2 === 0;


const getQuestionAnswer = () => {
  const question = generateNumberOfRange(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return [answer, question];
};

const beginEvenGame = () => getGameData(rule, getQuestionAnswer);

export default beginEvenGame;
