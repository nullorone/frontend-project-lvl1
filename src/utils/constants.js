const AMOUNT_CORRECT_ANSWER = 3;

const Text = {
  QUESTION: (question) => `Question: ${question}`,
  USER_ANSWER: 'Your answer: ',
  CORRECT: 'Correct!',
  CONGRATULATION: (name) => `Congratulations, ${name}!`,
  WRONG: (userAnswer, correctAnswer) => `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
  TRY_AGAIN: (name) => `Let's try again, ${name}!`,
};

export {
  AMOUNT_CORRECT_ANSWER,
  Text,
};
