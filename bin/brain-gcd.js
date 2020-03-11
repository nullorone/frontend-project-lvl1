#!/usr/bin/env node
import startGame from '../src/index.js';
import getGcdGameAnswers from '../src/games/gcd.js';

const name = startGame();

getGcdGameAnswers(name);
