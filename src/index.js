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

const getRandomIndexOfArray = (array) => Math.floor(Math.random() * array.length);

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = getRandomIndexOfArray(decimalOrder);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};

// Print message in console
const printMessage = (message) => console.log(message);

const getUserName = () => readlineSync.question('May I have your name? ');

const greetingUser = (name) => printMessage(`Hello, ${name}`);

const commonGame = (userName, rule, question, answer, textQuestion) => {
  let countCorrectAnswer = 0;

  printMessage(rule);

  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER) {
    const gameQuestion = question();
    const gameAnswer = answer(gameQuestion);
    const gameTextQuestion = textQuestion(gameQuestion);

    printMessage(Text.QUESTION(gameTextQuestion));
    const userAnswer = readlineSync.question(Text.USER_ANSWER);

    if (userAnswer.toString() === gameAnswer.toString()) {
      countCorrectAnswer += 1;
      printMessage(Text.CORRECT);
    } else {
      printMessage(Text.WRONG(userAnswer, gameAnswer));
      printMessage(Text.TRY_AGAIN(userName));
      return;
    }
  }

  printMessage(Text.CONGRATULATION(userName));
};

export {
  getUserName,
  greetingUser,
  printMessage,
  AMOUNT_CORRECT_ANSWER,
  Text,
  generateNumber,
  getRandomIndexOfArray,
  commonGame,
};
