import {
    VICTORY_MESSAGE,
    NOTHING_MESSAGE,
    STRIKE_MESSAGE,
    BALL_MESSAGE,
  } from './play_result.js';

export default function Game(computer_input, userInputNumbers) {
    const computer = computer_input;
    const user = String(userInputNumbers.value).split('')
                    .map((v) => parseInt(v));
    let result = '';
    let ball = 0;
    let strike = 0;

    for (let index = 0; index < user.length; index++) {
        if (computer[index] === user[index]) {
            strike++;
        } else if (user.includes(computer[index])) {
            ball++;
        }
    }

    result = playResult(strike, ball);
    console.log(computer);

    return result;
}

function playResult(strike, ball) {
    const GAME_WIN_NUMBER = 3;
    let result = '';
    
    if (strike === GAME_WIN_NUMBER) {
        result = VICTORY_MESSAGE;
    } else if (strike === 0 && ball === 0) {
        result = NOTHING_MESSAGE;
    } else if (strike !== 0 && ball !== 0) {
        result = `${ball}${BALL_MESSAGE} ${strike}${STRIKE_MESSAGE}`;
    } else if (strike !== 0) {
        result = `${strike}${STRIKE_MESSAGE}`;
    } else if (ball !== 0) {
        result = `${ball}${BALL_MESSAGE}`;
    }

    return result;
}