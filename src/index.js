import readlineSync from 'readline-sync';

const AMOUNT_CORRECT_ANSWER = 3;

const Text = {
  QUESTION: (question) => `Question: ${question}`,
  USER_ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  CONGRATULATION: (name) => `Congratulations, ${name}!`,
  WRONG: (userAnswer, correctAnswer) => `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
  TRY_AGAIN: (name) => `Let's try again, ${name}!`,
};

const getRandomIndexToLimit = (limit) => Math.floor(Math.random() * limit);

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = getRandomIndexToLimit(decimalOrder.length);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};


const commonGame = (userName, rule, question, answer, textQuestion) => {
  let countCorrectAnswer = 0;

  console.log(rule);

  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER) {
    const gameQuestion = question();
    const gameAnswer = answer(gameQuestion);
    const gameTextQuestion = textQuestion(gameQuestion);

    console.log(Text.QUESTION(gameTextQuestion));
    const userAnswer = readlineSync.question(Text.USER_ANSWER);

    if (userAnswer.toString() === gameAnswer.toString()) {
      countCorrectAnswer += 1;
      console.log(Text.CORRECT);
    } else {
      console.log(Text.WRONG(userAnswer, gameAnswer));
      console.log(Text.TRY_AGAIN(userName));
      return;
    }
  }

  console.log(Text.CONGRATULATION(userName));
};

const startGame = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

export {
  startGame,
  AMOUNT_CORRECT_ANSWER,
  Text,
  generateNumber,
  commonGame,
  getRandomIndexToLimit,
};
