import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
};

const playPrimeGame = () => {
    const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const generateRound = () => {
        const question = getRandomNumbers(0, 20);
        const answer = isPrime(question) ? 'yes' : 'no';
        return [question, answer];
    };

    startGame(rulesOfGame, generateRound);
};

export default playPrimeGame;