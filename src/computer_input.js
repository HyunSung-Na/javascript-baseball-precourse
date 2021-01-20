export default function ComputerInput() {
    const MAX_NUM = 9;
    const MIN_NUM = 1;
    const DIGIT = 3;

    let numbers = [];

    function notSame (n) {
        return numbers.every((e) => n !== e);
    }


    while (numbers.length < DIGIT) {
        let num = randomNum(MAX_NUM, MIN_NUM);

        if (notSame(num)) {
            numbers.push(num);
        }
    }

    return numbers;
}

function randomNum(MAX_NUM, MIN_NUM) {
    return Math.floor(Math.random() * (MAX_NUM-MIN_NUM + 1)) + MIN_NUM;
}

