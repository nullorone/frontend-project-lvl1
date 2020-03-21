import generateNumberOfRange from '../utils/utils.js';
import commonGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// Return true if number even
const checkEven = (number) => number % 2 === 0;

const question = () => generateNumberOfRange();

const answer = (gameQuestion) => (checkEven(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion.toString();

const getEvenGameAnswers = () => commonGame(rule, question, answer, textQuestion);

export default getEvenGameAnswers;
