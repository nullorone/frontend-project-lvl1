import readlineSync from 'readline-sync';

const AMOUNT_CORRECT_ANSWER = 3;
const Text = {
  RULE: 'Answer "yes" if the number is even, otherwise answer "no".',
  QUESTION: (number) => `Question: ${number}`,
  USER_ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  WRONG: (answer) => `"${answer}" is wrong answer ;(. Correct answer was "${answer === 'yes' ? 'no' : 'yes'}".`,
  CONGRATULATION: 'Congratulations, Sam!',
  TRY_AGAIN: (name) => `Let's try again, ${name}!`,
};

// Return true if number even
const checkEven = (number) => {
  return number % 2 === 0;
};

// Return random number
const generateNumber = () => {
  const decimalOrder = [10, 100, 1000, 10000, 100000, 1000000];
  const indexDecimalOrder = Math.floor(Math.random() * decimalOrder.length);

  return Math.floor(Math.random() * decimalOrder[indexDecimalOrder]);
};

const getEvenGameAnswers = (userName) => {
  let isWrongAnswer = false;
  let countCorrectAnswer = 0;

  console.log(Text.RULE);
  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER || !isWrongAnswer) {
    const number = generateNumber();
    console.log(Text.QUESTION(number));
    const userAnswer = readlineSync.question(Text.USER_ANSWER);

    if (userAnswer === checkEven(number)) {
      countCorrectAnswer += 1;
      console.log(Text.CORRECT);
    } else {
      console.log(Text.WRONG(userAnswer));
      console.log(Text.TRY_AGAIN(userName));
      isWrongAnswer = true;
      return;
    }
    
  }

};

export default getEvenGameAnswers;