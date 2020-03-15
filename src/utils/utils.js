import readlineSync from 'readline-sync';

const AMOUNT_CORRECT_ANSWER = 3;

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

    console.log(`Question: ${gameTextQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === gameAnswer.toString()) {
      countCorrectAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export {
  generateNumber,
  commonGame,
  getRandomIndexToLimit,
};
