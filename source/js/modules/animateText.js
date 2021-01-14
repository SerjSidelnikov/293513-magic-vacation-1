import AccentTypographyBuild from './accentTypography';

export default () => {
  const screenIntro = document.querySelector(`.screen--intro`);
  const screenStory = document.querySelector(`.screen--story`);

  const animateIntroTitle = new AccentTypographyBuild(`.intro__title`, `500`, `active`, `transform`);
  const animateIntroDate = new AccentTypographyBuild(`.intro__date`, `350`, `active`, `transform`);
  const animateStoryTitle = new AccentTypographyBuild(`.slider__item-title`, `400`, `active`, `transform`);

  document.body.addEventListener(`screenChanged`, () => {
    const screenIntroActive = screenIntro.classList.contains(`active`);

    if (screenIntroActive) {
      setTimeout(() => {
        animateIntroTitle.runAnimation();
      }, 350);

      setTimeout(() => {
        animateIntroDate.runAnimation();
      }, 1000);
    } else {
      animateIntroTitle.destroyAnimation();
      animateIntroDate.destroyAnimation();
    }
  });

  document.body.addEventListener(`screenChanged`, () => {
    const screenStoryActive = screenStory.classList.contains(`active`);

    if (screenStoryActive) {
      setTimeout(() => {
        animateStoryTitle.runAnimation();
      }, 0);
    } else {
      animateStoryTitle.destroyAnimation();
    }
  });
};
