export default () => {
  const prizes = document.querySelector(`.prizes`);
  const prizesIcon = prizes.querySelectorAll(`.prizes__icon`);

  prizesIcon.forEach((el, index)=> {
    let picture;
    switch (index) {
      case 0:
        picture = `primary`;
        break;
      case 1:
        picture = `secondary`;
        break;
      case 2:
        picture = `additional`;
        break;
    }

    const template = `
      <picture>
        <source srcset="img/module-3/img/${picture}-award-from.svg" media="(orientation: portrait)">
        <img src="img/module-3/img/${picture}-award-from.svg" alt="">
      </picture>`;

    el.innerHTML = template;
  });
};
