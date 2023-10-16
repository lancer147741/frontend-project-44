import startGames from '../index.js';
import getRandomNumbers from '../getRandomInRange.js';

const isPrime = (number) => {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    const limit = Math.sqrt(number);
    for (let i = 3; i <= limit; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const playPrimeGame = () => {
    const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const generateRound = () => {
        const question = getRandomNumbers(0, 20);
        const answer = isPrime(question) ? 'yes' : 'no';
        return [question, answer];
    };

    return startGames(rulesOfGame, generateRound);
};

export default playPrimeGame;