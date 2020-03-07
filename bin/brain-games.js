#!/usr/bin/env node
import { getUserName, greetingUser, printMessage } from '../src/index.js';
import getEvenGameAnswers from './brain-even.js';

printMessage('Welcome to the Brain Games!');

const userName = getUserName();

greetingUser(userName);
getEvenGameAnswers(userName);
