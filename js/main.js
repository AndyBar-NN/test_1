const logoTitle = document.querySelector('.logo__title'),
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

  if (window.pageYOffset == 0) {
    logoTitle.style.transform = 'scale(1)';
    logo.style.opacity = 1;
    anduin.style.opacity = 0;
  }
  if (window.pageYOffset >= 100) {
    logoTitle.style.transform = 'scale(1.5)';
    logo.style.opacity = 1 - window.pageYOffset * scrollOp;
    anduin.style.opacity = -0.25 + window.pageYOffset * scrollOp;
  }
  if (window.pageYOffset >= 500) {
    brotherhood.style.opacity = '1';
  } else {
    brotherhood.style.opacity = '';
  }
});

console.log(document.documentElement.scrollTop);