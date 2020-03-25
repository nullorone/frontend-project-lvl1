import readlineSync from 'readline-sync';

const roundsCount = 3;

const commonGame = (rule, question, answer, textQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);

  for (let i = 0; i < roundsCount; i += 1) {
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

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default commonGame;
