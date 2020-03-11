#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { getPrimeGameAnswers } from '../src/games/prime.js';

startGame();

getPrimeGameAnswers();
