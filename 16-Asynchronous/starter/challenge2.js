'use strict';

let currentImg;
const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    currentImg = document.createElement('img');
    currentImg.src = imgPath;
    currentImg.addEventListener('load', () => {
      document.querySelector('.images').append(currentImg);
      resolve(currentImg);
    });
    currentImg.addEventListener('error', () => {
      reject(new Error('Can`t load the image!'));
    })
  });
}

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

createImage('img/img-1.jpg')
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error(err);
  });
