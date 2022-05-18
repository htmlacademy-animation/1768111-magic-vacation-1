import AccentTypographyBuild from './accent-typography';

export default () => {
  const animationTextMainTitle = new AccentTypographyBuild(`.intro__title`, 500, `text-animation`, `transform`);
  const animationTextMainDate = new AccentTypographyBuild(`.intro__date`, 500, `text-animation`, `transform`);
  const animationTextStoryTitle = new AccentTypographyBuild(`.slider__item-title`, 500, `text-animation`, `transform`);
  const animationTextPrizesTitle = new AccentTypographyBuild(`.prizes__title`, 500, `text-animation`, `transform`);
  const animationTextRulesTitle = new AccentTypographyBuild(`.rules__title`, 500, `text-animation`, `transform`);
  const animationTextGameTitle = new AccentTypographyBuild(`.game__title`, 500, `text-animation`, `transform`);

  function runAnimations() {
    animationTextMainTitle.runAnimation();
    animationTextMainDate.runAnimation();
    animationTextStoryTitle.runAnimation();
    animationTextPrizesTitle.runAnimation();
    animationTextRulesTitle.runAnimation();
    animationTextGameTitle.runAnimation();
  }

  function destroyAnimations() {
    animationTextMainTitle.destroyAnimation();
    animationTextMainDate.destroyAnimation();
    animationTextStoryTitle.destroyAnimation();
    animationTextPrizesTitle.destroyAnimation();
    animationTextRulesTitle.destroyAnimation();
    animationTextGameTitle.destroyAnimation();
  }

  setTimeout(() => {
    runAnimations();
  }, 350);

  document.body.addEventListener(`screenChanged`, () => {
    destroyAnimations();
    setTimeout(() => {
      runAnimations();
    }, 350);
  });
}
