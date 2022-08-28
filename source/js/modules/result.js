export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      const title = results[i].querySelector(`.result__title`);
      showResultEls[i].addEventListener(`click`, function () {
        const titleSVG = title.querySelector(`.result__title-svg`);
        const clone = titleSVG.cloneNode(true);
        titleSVG.remove();
        title.appendChild(clone);
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
        setTimeout(()=> {
          document.querySelectorAll(`.form__field`).forEach((el) => el.classList.remove(`form__field_colored`));
          document.querySelectorAll(`.form__field`).forEach((el) => el.classList.add(`form__field_colored`));
        }, 750);
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
