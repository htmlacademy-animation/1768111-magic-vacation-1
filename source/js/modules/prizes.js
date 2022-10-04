import {getSeveralRandomInts, fixedFpsFrame} from '../helpers';

export default () => {
  const prizes = document.querySelector(`.prizes`);
  const prizesIcon = prizes.querySelectorAll(`.prizes__icon`);
  const prizesDescription = prizes.querySelectorAll(`.prizes__desc`);
  const prizesNumbers = prizes.querySelectorAll(`.prizes__desc b`);
  const prizesIconJourneys = prizes.querySelector(`.prizes__item--journeys`);
  const fps = 12;
  let currentNumbers = [1, 1, 1];

  const drawNumber = (index, numbers, currentNumber) => {
    prizesNumbers[index].textContent = numbers[currentNumber];
    currentNumbers[index]++;
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

    if (index === 2) {
      prizesIconJourneys.addEventListener(`animationend`, () => {
        setTimeout(() => {
          el.innerHTML = iconTemplate;
          prizesDescription[index].classList.add(`prizes__desc--visible`);

          fixedFpsFrame(fps, ()=>{
            drawNumber(index, numbers, currentNumbers[index]);
          }
          , numbers.length);
        }, 3500);
      });
    }

    if (index === 1) {
      prizesIconJourneys.addEventListener(`animationend`, () => {
        el.innerHTML = iconTemplate;
        prizesDescription[index].classList.add(`prizes__desc--visible`);

        fixedFpsFrame(fps,
            ()=> {
              drawNumber(index, numbers, currentNumbers[index]);
            }
            , numbers.length);
      });
    }

    if (index === 0) {
      el.innerHTML = iconTemplate;
      setTimeout(()=>{
        prizesDescription[index].classList.add(`prizes__desc--visible`);
        prizesNumbers[index].textContent = numbers[index];
      }, 1500);
    }
  });
};
