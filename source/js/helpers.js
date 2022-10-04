export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getSeveralRandomInts(rounds, to, from = 1) {
  return [...Array(to - from + 1).keys()].map((i)=>i + from)
    .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), [])
    .slice(0, rounds)
    .sort((a, b)=> a - b);
}

export function fixedFpsFrame(fps, callback, exit) {
  // общие переменные для реализации точного fps
  let fpsInterval = 1000 / fps;
  let now;
  let then = Date.now();
  let elapsed;
  let frameId = null;
  let currentTick = 1;

  // функция отрисовки
  function tick() {
    // отправляем на отрисовку следующий кадр
    if (currentTick === exit) {
      cancelAnimationFrame(frameId);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    // проверяем, сколько времени прошло с предыдущего запуска
    now = Date.now();
    elapsed = now - then;

    // проверяем, достаточно ли прошло времени с предыдущей отрисовки кадра
    if (elapsed > fpsInterval) {
      // сохранение времени текущей отрисовки кадра
      then = now - (elapsed % fpsInterval);

      // запуск функции отрисовки
      callback();
      currentTick++;
    }
  }

  return requestAnimationFrame(tick);
}
