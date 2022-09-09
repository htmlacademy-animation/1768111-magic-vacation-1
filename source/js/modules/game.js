export default () => {
  const screen = document.querySelector(`#game`);
  const timer = screen.querySelectorAll(`.game__counter span`);
  const minutes = timer[0];
  const seconds = timer[1];
  let frame;

  const finish = Date.now() + 300000; // 5 minutes

  const drawTaimer = () => {
    const timeLeft = finish - Date.now();

    if (timeLeft < 1) {
      cancelAnimationFrame(frame);
      return;
    }

    minutes.textContent = (`` + Math.floor(timeLeft / 1000 / 60) % 60).length === 1 ?
      `0` + Math.floor(timeLeft / 1000 / 60) % 60 :
      Math.floor(timeLeft / 1000 / 60) % 60;
    seconds.textContent = (`` + Math.floor(timeLeft / 1000) % 60).length === 1 ?
      `0` + Math.floor(timeLeft / 1000) % 60 :
      Math.floor(timeLeft / 1000) % 60;

    if (screen.classList.contains(`active`)) {
      frame = requestAnimationFrame(drawTaimer);
    } else {
      cancelAnimationFrame(frame);
    }
  };

  frame = requestAnimationFrame(drawTaimer);
};
