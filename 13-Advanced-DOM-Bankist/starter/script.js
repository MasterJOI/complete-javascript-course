'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button scrolling
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
buttonScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({
    behavior: 'smooth'
  });
});

//Page navigation

/*document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})*/

// Event delegation is more efficient is many elements heve same event behavior
// like links in header
/*
* 1. Add event listener to common parent
* 2. In this event listener determine what child element originated this event
* */
document.querySelector('.nav').addEventListener('click', (e) => {
  e.preventDefault();
  //match element
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Activate content area
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList
    .add('operations__content--active');
});

//Menu fade animation
const nav = document.querySelector('.nav');

const hoverHandler = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const hoveredLink = e.target;
    const restLinks = hoveredLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = hoveredLink.closest('.nav').querySelector('img');
    logo.style.opacity = this;
    restLinks.forEach(el => {
      if (el !== hoveredLink) {
        el.style.opacity = this;
      }
    });
  }
};

//when hover
//To passing 'arguments' to event handler, use bind to rewrite this keyword
// because event handler can pass only one argument - event
// or we can call function inside handler and pass the event
// nav.addEventListener('mouseover', (e) => hoverHandler.bind(e, 0.5));
nav.addEventListener('mouseover', hoverHandler.bind(0.5));

//when leave
nav.addEventListener('mouseout', hoverHandler.bind(1));

//Sticky navigation (bad performance)

/*const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', () => {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
});*/

//Sticky navigation with intersection observer API
const stickyNav = function(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const header = document.querySelector('.header');
const navCoords = nav.getBoundingClientRect();
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navCoords.height}px`
});
headerObserver.observe(header);

//Reveal sections
const sections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // replace src to data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));


//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;

const initSlider = () => {
  goToSlide(0);
  createDots();
  activateDot(currentSlide);
}
const goToSlide = (currentSlide) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
}

const nextSlide = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}



// next slide
btnRight.addEventListener('click', nextSlide);

//previous slide
btnLeft.addEventListener('click', prevSlide);

//keyboard arrow slider events

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

//Slider dots

const dotContainer = document.querySelector('.dots');

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML('beforeend', `
    <button class="dots__dot" data-slide="${i}"></button>
    `);
  })
}

const activateDot = (currentSlide) => {
  document.querySelectorAll('.dots__dot')
    .forEach(d => d.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${currentSlide}"]`).classList.add('dots__dot--active');
}

dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
})

initSlider();
