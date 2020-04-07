import readlineSync from 'readline-sync';

const roundsCount = 3;

const commonGame = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [answer, textQuestion] = game();

    console.log(`Question: ${textQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default commonGame;
