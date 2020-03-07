import readlineSync from 'readline-sync';

// Print message in console
const printMessage = (message) => console.log(message);

const getUserName = () => readlineSync.question('May I have your name? ');

const greetingUser = (name) => printMessage(`Hello, ${name}`);


export { getUserName, greetingUser, printMessage };
