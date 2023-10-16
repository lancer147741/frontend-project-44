import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const getLargeDivisor = (num1, num2) => (num2 === 0 ? num1 : getLargeDivisor(num2, num1 % num2));

const playGameGcd = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstNumber = getRandomNumbers(0, 20);
    const secondNumber = getRandomNumbers(0, 20);

    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(getLargeDivisor(firstNumber, secondNumber));

    return [question, answer];
  };

  startGame(rulesOfGame, generateRound);
};

export default playGameGcd;
