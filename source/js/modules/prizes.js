export default () => {
  const prizesLink = document.querySelector(`.js-menu-link[data-href="prizes"]`);
  const svgAnimations = document.querySelectorAll(`.svg-animation`);

  const restartAnimation = () => {
    svgAnimations.forEach((animation) => {
      animation.src = animation.src;
    });
    prizesLink.removeEventListener(`click`, restartAnimation);
  };

  if (window.location.hash !== `#prizes`) {
    prizesLink.addEventListener(`click`, restartAnimation);
  }
};
