#!/usr/bin/env node
import startGame from '../src/index.js';
import getCalcGameAnswers from '../src/games/calc.js';

const name = startGame();

getCalcGameAnswers(name);
