import commonGame from '../index.js';
import generateNumberOfRange from '../utils/utils.js';

const rule = 'What number is missing in the progression?';
const progressionIterator = 2;
const progressionLength = 10;
const replaceSymbol = '..';

const getProgression = () => {
  const startNumber = generateNumberOfRange();
  const progression = [startNumber];
  const replaceIndex = generateNumberOfRange(0, progressionLength);

  for (let i = 1; i < progressionLength; i += 1) {
    const prevValue = progression[i - 1];
    progression.push(prevValue + progressionIterator);
  }

  progression[replaceIndex] = replaceSymbol;

  return progression;
};

const getReplacedValue = (progression) => {
  const replacedIndex = progression.indexOf(replaceSymbol);

  if (replacedIndex === -1) {
    throw new Error('Replaced value not found');
  }

  return replacedIndex === 0
    ? progression[replacedIndex + 1] - progressionIterator
    : progression[replacedIndex - 1] + progressionIterator;
};

const question = () => getProgression();

const answer = (gameQuestion) => getReplacedValue(gameQuestion);

const textQuestion = (gameQuestion) => gameQuestion.join(' ');

const getProgressionGameAnswers = () => commonGame(rule, question, answer, textQuestion);

export default getProgressionGameAnswers;
