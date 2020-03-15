import readlineSync from 'readline-sync';
import { generateNumber } from '../utils/utils.js';
import commonGame from '../index.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

// Return true if number even
const checkEven = (number) => number % 2 === 0;

const question = () => generateNumber();

const answer = (gameQuestion) => (checkEven(gameQuestion) ? 'yes' : 'no');

const textQuestion = (gameQuestion) => gameQuestion.toString();

console.log('Welcome to the Brain Games!\n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

const getEvenGameAnswers = () => commonGame(name, RULE, question, answer, textQuestion);

export default getEvenGameAnswers;
