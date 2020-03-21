import readlineSync from 'readline-sync';

const AMOUNT_CORRECT_ANSWER = 3;

const commonGame = (rule, question, answer, textQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);

  let countCorrectAnswer = 0;

  while (countCorrectAnswer < AMOUNT_CORRECT_ANSWER) {
    const gameQuestion = question();
    const gameAnswer = answer(gameQuestion);
    const gameTextQuestion = textQuestion(gameQuestion);

    console.log(`Question: ${gameTextQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() !== gameAnswer.toString()) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    countCorrectAnswer += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default commonGame;
