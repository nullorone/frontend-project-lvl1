import engine from '../index.js';
import generateNumberOfRange from '../utils.js';

const rule = 'What number is missing in the progression?';
const charForReplacementProgressionItem = '..';

const getProgression = (start, step, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const getQuestionAnswer = () => {
  const start = generateNumberOfRange(1, 100);
  const step = generateNumberOfRange(1, 10);
  const length = 10;
  const indexLengthMax = length - 1;
  const index = generateNumberOfRange(0, indexLengthMax);
  const progression = getProgression(start, step, length);

  const progressionWithChar = [
    ...progression.slice(0, index),
    charForReplacementProgressionItem,
    ...progression.slice(index + 1),
  ];

  const answer = progression[index];

  const question = progressionWithChar.join(' ');

  return [answer.toString(), question];
};

const runProgressionGame = () => engine(rule, getQuestionAnswer);

export default runProgressionGame;
