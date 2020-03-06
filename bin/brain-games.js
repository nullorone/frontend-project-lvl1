#!/usr/bin/env node
import { name, getNameUser } from '../src/index.js';
import getEvenGameAnswers from './brain-even.js';


console.log('Welcome to the Brain Games!');
getNameUser();
getEvenGameAnswers(name);
