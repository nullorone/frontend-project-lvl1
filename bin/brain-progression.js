#!/usr/bin/env node
import { startGame } from '../src/index.js';
import getProgressionGameAnswers from '../src/games/progression.js';

const name = startGame();

getProgressionGameAnswers(name);
