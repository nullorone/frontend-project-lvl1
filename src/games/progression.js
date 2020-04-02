import commonGame from '../index.js';
import generateNumberOfRange from '../utils/utils.js';

const rule = 'What number is missing in the progression?';
const progressionIterator = 2;
const progressionLength = 10;
const replaceSymbol = '..';
const numberLimit = {
  min: 1,
  max: 100,
};

const getProgression = () => {
  const startNumber = generateNumberOfRange(numberLimit.min, numberLimit.max);
  const progression = [];
  const replaceIndex = generateNumberOfRange(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + progressionIterator * i);
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


const createGameInfo = () => {
  const question = getProgression();

  const answer = getReplacedValue(question);

  const textQuestion = question.join(' ');

  return [answer, textQuestion];
};

const getProgressionGameAnswers = () => commonGame(rule, createGameInfo);

export default getProgressionGameAnswers;
