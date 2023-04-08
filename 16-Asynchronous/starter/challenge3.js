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

const createImageSimple = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Can`t load the image!'));
    })
  });
}

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function() {
  try {
    currentImg = await createImage('img/img-1.jpg');
    await wait(2);

    currentImg.style.display = 'none';
    currentImg = await createImage('img/img-2.jpg');
    await wait(2);
    console.log('final');

  } catch (err) {
    console.error(err);
  } finally {
    currentImg.style.display = 'none';
  }
}

//loadNPause();

const loadAll = async function(...images) {
  try {
    const promises = images.map(uri => createImageSimple(uri));

    const loadedImages = await Promise.all(promises);

    loadedImages.forEach(img => img.classList.add('parallel'));

  } catch (err) {
    console.error(err);
  }
}

loadAll('img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg');
