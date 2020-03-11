#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getPrimeGameAnswers from '../src/games/prime.js';

const name = startGame();

getPrimeGameAnswers(name);
