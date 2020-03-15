import { generateNumber } from '../utils/utils.js';
import commonGame from '../index.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

// Return true if number even
const checkEven = (number) => number % 2 === 0;

const question = () => generateNumber();

const answer = (gameQuestion) => (checkEven(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion.toString();

const getEvenGameAnswers = () => commonGame(RULE, question, answer, textQuestion);

export default getEvenGameAnswers;
