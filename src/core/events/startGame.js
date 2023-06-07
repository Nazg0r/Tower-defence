export let start = false;

const
  startGame = document.querySelector('.start-game'),
  startGameButtonGo = document.querySelector('.start-game__button--go'),
  startGameWrapper = document.querySelector('.start-game__wrapper'),
  startGameProgress = document.querySelector('.start-game__progress'),
  startGameProgressAnim = document.querySelector('.start-game__progress--anim');

let startGameProgressAnimIntervalCounter = 1;

const startGameProgressAnimInterval = setInterval(() => {
  startGameProgressAnim.style.setProperty(
    '--pos',
    `${56 * startGameProgressAnimIntervalCounter}px`
  );

  startGameProgressAnimIntervalCounter++;
  if (startGameProgressAnimIntervalCounter === 17) {
    startGameProgressAnimIntervalCounter = 1;
  }
}, 90);

startGameButtonGo.addEventListener('click', () => {
  start = true;
  startGameWrapper.classList.add('_hidden');
  setTimeout(() => {
    startGameProgress.classList.add('_visible');

    setTimeout(() => {
      startGame.classList.add('_hidden');
      clearInterval(startGameProgressAnimInterval);
    }, 4000);
  }, 700);
});
