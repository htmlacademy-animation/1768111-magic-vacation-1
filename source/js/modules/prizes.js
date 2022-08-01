export default () => {
  let svgAnimations = document.querySelectorAll(`.svg-animation`);
  let menu = document.querySelector(`.page-header__menu`);

  // перезапуск svg анимаций при смене страниц
  menu.addEventListener(`click`, () => {
    svgAnimations.forEach((animation) => {
      animation.src = animation.src;
    });
  });
};
