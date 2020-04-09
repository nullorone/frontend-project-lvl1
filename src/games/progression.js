import playGame from '../index.js';
import generateNumberOfRange from '../utils.js';

const rule = 'What number is missing in the progression?';
const replaceSymbol = '..';

const getProgression = (startNumber, step, lengthProgression) => {
  const replaceIndex = generateNumberOfRange(0, lengthProgression);
  const progression = new Array(lengthProgression)
    .fill(0)
    .map((value, idx) => startNumber + step * idx);

  progression[replaceIndex] = replaceSymbol;

  return progression;
};

const getReplacedValue = (progression, step) => {
  const replacedIndex = progression.indexOf(replaceSymbol);

  if (replacedIndex === -1) {
    throw new Error('Replaced value not found');
  }

  return replacedIndex === 0
    ? progression[replacedIndex + 1] - step
    : progression[replacedIndex - 1] + step;
};


const createGameInfo = () => {
  const startNumber = generateNumberOfRange(1, 100);
  const progressionStep = 2;
  const progressionLength = 10;

  const question = getProgression(startNumber, progressionStep, progressionLength);

  const answer = getReplacedValue(question, progressionStep).toString();

  const textQuestion = question.join(' ');

  return [answer, textQuestion];
};

const getProgressionGameAnswers = () => playGame(rule, createGameInfo);

export default getProgressionGameAnswers;
