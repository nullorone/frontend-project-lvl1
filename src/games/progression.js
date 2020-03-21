import commonGame from '../index.js';
import generateNumberOfRange from '../utils/utils.js';

const RULE = 'What number is missing in the progression?';
const PROGRESSION_ITERATOR = 2;
const PROGRESSION_LENGTH = 10;
const REPLACE_SYMBOL = '..';

const getProgression = () => {
  const startNumber = generateNumberOfRange();
  const progression = [startNumber];
  const replaceIndex = generateNumberOfRange(0, PROGRESSION_LENGTH);

  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    const prevValue = progression[i - 1];
    progression.push(prevValue + PROGRESSION_ITERATOR);
  }

  progression[replaceIndex] = REPLACE_SYMBOL;

  return progression;
};

const getReplacedValue = (progression) => {
  const replacedIndex = progression.indexOf(REPLACE_SYMBOL);

  if (replacedIndex === -1) {
    throw new Error('Replaced value not found');
  }

  return replacedIndex === 0
    ? progression[replacedIndex + 1] - PROGRESSION_ITERATOR
    : progression[replacedIndex - 1] + PROGRESSION_ITERATOR;
};

const question = () => getProgression();

const answer = (gameQuestion) => getReplacedValue(gameQuestion);

const textQuestion = (gameQuestion) => gameQuestion.join(' ');

const getProgressionGameAnswers = () => commonGame(RULE, question, answer, textQuestion);

export default getProgressionGameAnswers;
