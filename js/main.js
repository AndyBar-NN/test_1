const logoTitle = document.querySelector('.logo__title'),
      slidebox = document.querySelector('.slidebox'),
      slideboxBg = document.querySelector('.slidebox__slide'),
      slideboxText = document.querySelector('.slidebox__text'),
      logo = document.querySelector('.logo'),
      brotherhood = document.querySelector('.brotherhood'),
      map = document.querySelector('.map'),
      gondor = document.querySelector('.gondor'),
      shir = document.querySelector('.shir'),
      rivendel = document.querySelector('.rivendel'),
      karadres = document.querySelector('.karadres'),
      moria = document.querySelector('.moria'),
      lorien = document.querySelector('.lorien'),
      anduin = document.querySelector('.anduin');


document.addEventListener('scroll', () => {
  let scrollOp = 0.0025;
  let scroll = window.pageYOffset;

  if (scroll == 0) {
    logoTitle.style.transform = 'scale(1)';
    logo.style.opacity = 0.75;
    slidebox.style.opacity = 0.25;
  }
  if (scroll >= 100) {
    logoTitle.style.transform = 'scale(1.5)';
    logo.style.opacity = 1 - scroll * scrollOp;
    slidebox.style.opacity = 0 + scroll * scrollOp;
  }
  if (scroll >= 500 && scroll < 600) {
    slideboxText.style.opacity = '';
  }
  if (scroll >= 500) {
    brotherhood.style.opacity = '1';
  } else {
    brotherhood.style.opacity = '';
  }

  if (scroll >= 600) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 800) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/gondor.jpg') no-repeat center;";
  } else {
    slideboxBg.style.cssText = "background: url('../img/map.jpg') no-repeat center;";
  }

  if (scroll >= 900) {
    slideboxText.style.opacity = '1'; // добавить innerHTML
  }
  if (scroll >= 1100) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/shir.jpg') no-repeat center;";
  }

  if (scroll >= 1200) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 1400) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/rivendel.jpg') no-repeat center;";
  }

  if (scroll >= 1500) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 1700) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/karadras.jpg') no-repeat center;";
  }

  if (scroll >= 1800) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 1900) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/moria.jpg') no-repeat center;";
  }

  if (scroll >= 2000) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 2200) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/lorien.jpg') no-repeat center;";
  }

  if (scroll >= 2300) {
    slideboxText.style.opacity = '1';
  }
  if (scroll >= 2500) {
    slideboxText.style.opacity = '';
    slideboxBg.style.cssText = "background: url('../img/anduin.jpg') no-repeat center;";
  }

  if (scroll >= 2600) {
    slideboxText.style.opacity = '1';
  }
});

console.log(document.documentElement.scrollTop);