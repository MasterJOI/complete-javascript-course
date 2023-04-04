console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));
console.log(document.getElementById('section--1'));
// make HTML-collection (autoupdates when dom changes)
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

//Creating and inserting html-elements
//.insertAdjacentHTML -- most simple and useful

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved analytics';
message.innerHTML = '\'We use cookies for improved analytics\'' +
  '<button class="btn btn--close-cookie">Got it!</button>';

//prepend - top of parent element
header.prepend(message);

//append  - bottom (appears only once because its live dom element and cannot be in 2 places at the same time)
header.append(message);

//to set multiple node use cloneNode(true)
//header.prepend(message.cloneNode(true));

// before/after element
//header.before(message);
//header.after(message);

//delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () =>{
  //message.remove();
  message.parentElement.removeChild(message); //new way for remove element
})

//Styles
message.style.backgroundColor = '#37383d';
//can reading style property if property in inline styles of element
console.log(message.style.backgroundColor);

//to get external styles call getComputedStyles()
console.log(getComputedStyle(message));
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//css variables
document.documentElement.style.setProperty('--color-primary', 'orangered')

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

console.log(logo.getAttribute('designer'));
logo.alttex = 'Cockls!';
logo.setAttribute('company', 'Bankist')
//relative path
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.hasAttribute('href'));

//data atributes (to store some data in the html)
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


buttonScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log('Window scroll position', window.scrollX, window.scrollY);
  console.log(
    'Viewport size',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling

  //old way
  /*window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth'
  });*/

  //modern way
  section1.scrollIntoView({
    behavior: 'smooth'
  })
});

//how to add event listeners

//basic
const h1 = document.querySelector('h1');
const eventHandler = (e) => {
  alert('great');
  //h1.removeEventListener('mouseenter', eventHandler);
}
h1.addEventListener('mouseenter', eventHandler);

setTimeout(() => h1.removeEventListener('mouseenter', eventHandler), 1000)

//another way by set property (but we cant remove event)
//h1.onmouseenter = eventHandler;

//third way in html  directly (not use!!!)


// 3 phases of event propagation by default:
// 1 - capturing (from document to target)
// 2 - call target event
// 3 - bubbling (call events from target to document)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
console.log(randomColor());

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  //e.currentTarget = this
  console.log('NAV', e.target, e.currentTarget);
}, true); // true - access to call evvents during capturing phase (from document to target)
document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINKS', e.target, e.currentTarget);
});
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  //stop propagate event to parents
  //e.stopPropagation();
});

//all childrens
console.log(h1.querySelectorAll('.highlight'));
//only direct children (not updatable)
console.log(h1.childNodes);
//only direct children (live updatable)
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

//going upwards (NodeList and HTMLCollection)
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest parent (like querySelector find closest child)
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.9)';
  }
})

//Intersection observer API

//callback will be called every time when target element will intersect with root element beyond threshold border
//entries is intersections cases, can be an array because thresholds  can be an array
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
}
// root - basic element or null is need to intersect entire viewport
//threshold - percentage of observing with what observer will be called
const obsOptions = {
  root: null,
  threshold: [0, 0.2]
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


//Lifecycle DOM events
//DOMContentLoaded - call after all html amd js are loaded (not wait for external resources)
// there is no need to call that event if write scripts at the end of the DOM body
document.addEventListener('DOMContentLoaded', (e) => {
  console.log(e);
});

//load calls after all html,css,js and external resources are loaded
window.addEventListener('load', (e) => {
  console.log(e);
})

//before user about to leave the page
/*window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
})*/

