#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getCalcGameAnswers from '../src/games/prime.js';

const name = startGame();

getCalcGameAnswers(name);
