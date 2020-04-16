import getGameData from '../index.js';
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
  const index = generateNumberOfRange(0, 9);
  const progression = getProgression(start, step, length);

  const answer = progression.splice(index, 1, charForReplacementProgressionItem);

  const question = progression.join(' ');

  return [answer.toString(), question];
};

const beginProgressionGame = () => getGameData(rule, getQuestionAnswer);

export default beginProgressionGame;
