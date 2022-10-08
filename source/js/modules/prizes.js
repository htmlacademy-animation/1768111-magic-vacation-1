import {getSeveralRandomInts, fixedFpsFrame} from '../helpers';

export default () => {
  const prizes = document.querySelector(`.prizes`);
  const prizesItem = prizes.querySelectorAll(`.prizes__item`);
  const prizesIcon = prizes.querySelectorAll(`.prizes__icon`);
  const prizesDescription = prizes.querySelectorAll(`.prizes__desc`);
  const prizesNumbers = prizes.querySelectorAll(`.prizes__desc b`);
  const prizesIconJourneys = prizes.querySelector(`.prizes__item--journeys`);
  const fps = 12;
  let currentRound = [1, 1, 1];

  const drawNumber = (index, numbers, currentNumber) => {
    prizesNumbers[index].textContent = numbers[currentNumber];
    currentRound[index]++;
  };

  prizesIcon.forEach((el, index)=> {
    let picture = null;
    let count = null;
    let rounds = 7;

    switch (index) {
      case 0:
        picture = `primary`;
        count = 3;
        break;
      case 1:
        picture = `secondary`;
        count = 7;
        break;
      case 2:
        picture = `additional`;
        count = 900;
        break;
    }

    const numbers = index === 0 ? [3] : getSeveralRandomInts(rounds, count);
    if (index > 0) {
      numbers.pop();
      numbers.push(count);
    }

    const iconTemplate = `
      <picture>
        <source srcset="img/module-3/img/${picture}-award-from.svg" media="(orientation: portrait)">
        <img src="img/module-3/img/${picture}-award-from.svg" alt="">
        </picture>`;

    switch (index) {
      case 0:
        el.innerHTML = iconTemplate;
        setTimeout(()=>{
          prizesNumbers[index].classList.remove(`opacity-hidden`);
          prizesDescription[index].classList.add(`prizes__desc--visible`);
          prizesNumbers[index].textContent = numbers[index];
        }, 1500);
        break;
      case 1:
        prizesIconJourneys.addEventListener(`animationend`, () => {
          prizesItem[index - 1].classList.add(`prizes__item--journeys--stop-animation`);
          el.innerHTML = iconTemplate;
          prizesDescription[index].classList.add(`prizes__desc--visible`);

          fixedFpsFrame(fps,
              ()=> {
                drawNumber(index, numbers, currentRound[index]);
              }
              , numbers.length);
        });
        break;
      case 2:
        prizesIconJourneys.addEventListener(`animationend`, () => {
          setTimeout(() => {
            el.innerHTML = iconTemplate;
            prizesDescription[index].classList.add(`prizes__desc--visible`);

            fixedFpsFrame(fps, ()=>{
              drawNumber(index, numbers, currentRound[index]);
            }
            , numbers.length);
          }, 3500);
        });
        break;
    }
  });
};
