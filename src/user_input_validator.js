export default function Validator(userInputNumbers) {
    const userInput =  String(userInputNumbers.value).split('')
    .map((v) => parseInt(v));
    const setUserInput = [...new Set(userInput)];

    if (userInput.length !== setUserInput.length) {
        return true;
    } else if (userInput.length !== 3) {
        return true;
    } else if (userInput.includes(0)) {
        return true;
    } else {
        return false;
    }
}