import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const question = String(getRandomNumbers());
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  startGame(rulesOfGame, generateRound);
};

export default playEvenGame;
