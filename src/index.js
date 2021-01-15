import ComputerInput from './computer_input.js';
import Game from './game.js';
import { VICTORY_MESSAGE } from './play_result.js';
import Validator from './user_input_validator.js';

const computerInputNumbers = new ComputerInput();
const userInputNumbers = document.querySelector("#user-input");
const buttonSubmit = document.querySelector("#submit");
const gameResult = document.querySelector("#result");
const parrent = document.querySelector("#app");

const ERROR_MESSAGE = `숫자를 다시 입력해주세요.
1~9까지의 수를 중복없이 3개를 작성해주세요.`

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = Game(computerInputNumbers, userInputNumbers);
    gameResult.innerHTML = `${result}`;

    if (result === VICTORY_MESSAGE) {
      parrent.appendChild(createRestartBtn());
      const restartGame = document.querySelector("#restart");
      
      restartGame.addEventListener(`click`, () => {
        history.go(0);
      });
    }

    return result;
  };

}

function createRestartBtn() {
  const text = "게임을 새로 시작하시겠습니까?";
  const restartBtn = document.createElement("div");
  restartBtn.innerHTML = 
  `<span>${text}</span>
  <button id="restart">게임재시작</button>`;
  return restartBtn;
}

function reload(userInput) {
  userInput.value = '';
  userInput.focus();
}

const baseBallGame = new BaseballGame();

buttonSubmit.addEventListener('click', () => {
  if (Validator(userInputNumbers)) {
    alert(ERROR_MESSAGE);
  } else {
    baseBallGame.play(computerInputNumbers, userInputNumbers);
  }
  reload(userInputNumbers);
});