document.addEventListener('DOMContentLoaded', () => {
  const logoTitle = document.querySelector('.logo__title'),
        slide = document.querySelectorAll('.slidebox__slide'),
        slideboxText = document.querySelectorAll('.slidebox__text'),
        map = document.querySelector('.map'),
        gondor = document.querySelector('.gondor'),
        shir = document.querySelector('.shir'),
        rivendel = document.querySelector('.rivendel'),
        karadras = document.querySelector('.karadras'),
        moria = document.querySelector('.moria'),
        lorien = document.querySelector('.lorien'),
        anduin = document.querySelector('.anduin'),
        logo = document.querySelector('.logo'),
        brotherhood = document.querySelector('.brotherhood');

  document.addEventListener('scroll', () => {
    let scrollNum = 0.0025;
    let scrollOp = 0.0010;
    let scroll = window.pageYOffset;

    if (scroll == 0) {
      logo.style.opacity = 0.75;
      map.style.opacity = 0.25;
      logoTitle.style.transform = 'scale(1)';
    }
    if (scroll >= 100) {
      logoTitle.style.transform = 'scale(1.5)';
      logo.style.opacity = 0.75 - scroll * scrollNum;
      map.style.opacity = 0.25 + scroll * scrollNum;
    }
    if (scroll >= 400) {
      slideboxText[0].style.opacity = '0.85';
      brotherhood.style.opacity = '1';
    } else {
      slideboxText[0].style.opacity = '';
      brotherhood.style.opacity = '';
    }

    slide.forEach((item) => {
      if (scroll >= 500) {
        item.style.display = 'block';
      } else {
        item.style.display = '';
      }
    });
    if (scroll >= 500) {
      map.style.top = 0 - (scroll - 500) + 'px';
      gondor.style.opacity = -0.5 + scroll * scrollOp;
    } else {
      map.style.top = '';
    }
    if (scroll >= 1500) {
      slideboxText[1].style.opacity = '0.85';
    } else {
      slideboxText[1].style.opacity = '';
    }

    if (scroll >= 1600) {
      gondor.style.top = 0 - (scroll - 1600) + 'px';
      shir.style.opacity = -1.6 + scroll * scrollOp;
    } else {
      gondor.style.top = '';
      shir.style.opacity = '';
    }
    if (scroll >= 2600) {
      slideboxText[2].style.opacity = '0.85';
    } else {
      slideboxText[2].style.opacity = '';
    }

    if (scroll >= 2700) {
      shir.style.left = 0 - (scroll - 2700) + 'px';
      rivendel.style.opacity = -2.7 + scroll * scrollOp;
    } else {
      shir.style.left = '';
      rivendel.style.opacity = '';
    }
    if (scroll >= 4700) {
      slideboxText[3].style.opacity = '0.85';
    } else {
      slideboxText[3].style.opacity = '';
    }

    if (scroll >= 4800) {
      rivendel.style.left = 0 - (scroll - 4800) + 'px';
      karadras.style.opacity = -4.8 + scroll * scrollOp;
    } else {
      rivendel.style.left = '';
      karadras.style.opacity = '';
    }
    if (scroll >= 6800) {
      slideboxText[4].style.opacity = '0.85';
    } else {
      slideboxText[4].style.opacity = '';
    }

    if (scroll >= 6900) {
      karadras.style.left = 0 - (scroll - 6900) + 'px';
      moria.style.opacity = -6.9 + scroll * scrollOp;
    } else {
      karadras.style.left = '';
      moria.style.opacity = '';
    }
    if (scroll >= 8900) {
      slideboxText[5].style.opacity = '0.85';
    } else {
      slideboxText[5].style.opacity = '';
    }

    if (scroll >= 9000) {
      moria.style.left = 0 - (scroll - 9000) + 'px';
      lorien.style.opacity = -9 + scroll * scrollOp;
    } else {
      moria.style.left = '';
      lorien.style.opacity = '';
    }
    if (scroll >= 11000) {
      slideboxText[6].style.opacity = '0.85';
    } else {
      slideboxText[6].style.opacity = '';
    }

    if (scroll >= 11100) {
      lorien.style.left = 0 - (scroll - 11100) + 'px';
      anduin.style.opacity = -11.1 + scroll * scrollOp;
    } else {
      lorien.style.left = '';
      anduin.style.opacity = '';
    }
    if (scroll >= 13100) {
      slideboxText[7].style.opacity = '0.85';
    } else {
      slideboxText[7].style.opacity = '';
    }
  });

  console.log(document.documentElement.scrollTop);
});