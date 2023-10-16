import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const calculateGCD = (num1, num2) => {
    if (num2 === 0) return num1;
    return calculateGCD(num2, num1 % num2);
}

const playGCDGame = () => {
    const rulesOfGame = 'Find the greatest common divisor of given numbers.';

    const gameRound = () => {
        const firstNumber = getRandomNumbers(0, 20);
        const secondNumber = getRandomNumbers(0, 20);

        const question = `${firstNumber} ${secondNumber}`;
        const correctAnswer = calculateGCD(firstNumber, secondNumber).toString();

        return [question, correctAnswer];
    };

    startGame(rulesOfGame, gameRound);
};
