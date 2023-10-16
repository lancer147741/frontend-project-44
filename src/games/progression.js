import startGame from '../index.js';
import getRandomNumbers from '../randomNumbers.js';

const getProgression = (stepProgression, randomHiddenElem, startNumber) => {
    const hiddenElement = '..';
    const createdArray = [];
    const arrayLength = 10;
    createdArray[0] = startNumber;

    for (let i = 1; i < arrayLength; i += 1) {
        createdArray[i] = createdArray[i - 1] + stepProgression;
    }
    const hiddenNumber = String(createdArray.splice(randomHiddenElem, 1, hiddenElement));
    const peogressionOfNumber = createdArray.join(' ');

    return [peogressionOfNumber, hiddenNumber];
};

const startBrainProgression = () => {
    const rulesOfGames = 'What number is missing in the progression?';

    const generatedRound = () => {
        const randomHiddenElem = getRandomNumbers(0, 9);
        const startNum = getRandomNumbers(0, 50);
        const step = getRandomNumbers(0, 5);

        const [question, answer] = getProgression(step, randomHiddenElem, startNum);
        return [question, answer];
    };

    startGame(rulesOfGames, generatedRound);
};

export default startBrainProgression;