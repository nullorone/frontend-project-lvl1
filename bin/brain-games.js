#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  printMessage,
  getUserName,
  greetingUser,
} from '../src/index.js';
import getEvenGameAnswers from './games/brain-even.js';
import getCalcGameAnswers from './games/brain-calc.js';

const GAMES = ['even', 'calc'];

const choiceGame = (index, name) => {
  switch (GAMES[index]) {
    case (GAMES[0]):
      getEvenGameAnswers(name);
      break;
    case (GAMES[1]):
      getCalcGameAnswers(name);
      break;
    default:
      throw new Error('Bad choice. Game not found.');
  }
};

const startGame = () => {
  const indexGames = readlineSync.keyInSelect(GAMES, 'Which games do you want play?');

  if (GAMES[indexGames]) {
    printMessage(`Ok, ${GAMES[indexGames]} started...`);
    printMessage('Welcome to the Brain Games!');

    const userName = getUserName();

    greetingUser(userName);
    choiceGame(indexGames, userName);
  }

  if (!GAMES[indexGames]) {
    printMessage('Canceled...');
  }

  return null;
};

startGame();
