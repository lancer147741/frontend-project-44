import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const operators = ['+', '-', '*'];

const getOperator = (operator) => {
    const randomIndexOfOperators = Math.floor(Math.random() * (operators.length));
    return operator[randomIndexOfOperators];
};

const getCalculatedResult = (operation, firstNumber, secondNumber) => {
    switch (operation) {
        case '+': {
            return firstNumber + secondNumber;
        }
        case '-': {
            return firstNumber - secondNumber;
        }
        case '*': {
            return firstNumber * secondNumber;
        }
        default: {
            throw new Error(`Invalid operation - ${operation}`);
        }
    }
};

const playCalcGame = () => {
    const rulesOfGame = 'What is the result of the expression?';

    const generateRound = () => {
        const firstNumber = getRandomNumbers(1, 10);
        const secondNumber = getRandomNumbers(1, 10);

        const randomOperator = getOperator(operators);

        const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
        const answer = String(getCalculatedResult(randomOperator, firstNumber, secondNumber));

        return [question, answer];
    };

    startGame(rulesOfGame, generateRound);
};

export default playCalcGame;