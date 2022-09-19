export default () => {
  const screen = document.querySelector(`#game`);
  const timer = screen.querySelectorAll(`.game__counter span`);
  const minutes = timer[0];
  const seconds = timer[1];
  let currentSecond = null;
  let frame;

  const finish = Date.now() + 300000; // 5 minutes

  const drawTimer = () => {
    const timeLeft = finish - Date.now();

    if (timeLeft < 1) {
      cancelAnimationFrame(frame);
      return;
    }

    const minutesLeft = Math.floor(timeLeft / 1000 / 60) % 60;
    const secondsLeft = Math.floor(timeLeft / 1000) % 60;

    minutes.textContent = (`` + minutesLeft).length === 1 ?
      `0` + minutesLeft :
      minutesLeft;
    seconds.textContent = (`` + secondsLeft).length === 1 ?
      `0` + secondsLeft :
      secondsLeft;

    if (screen.classList.contains(`active`)) {
      if (currentSecond !== secondsLeft) {
        currentSecond = secondsLeft;
        frame = requestAnimationFrame(drawTimer);
      } else {
        setTimeout(() => {
          frame = requestAnimationFrame(drawTimer);
        }, 1000);
      }
    } else {
      cancelAnimationFrame(frame);
    }
  };

  frame = requestAnimationFrame(drawTimer);
};
