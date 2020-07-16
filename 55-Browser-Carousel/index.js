'use strict'

const imgContainer = document.querySelector('.img-container');
const imgSlider = document.querySelector('.image-slider');

let images = [{
    path: './img/nature1.jpg',
    id: 'img1'
}, {
    path: './img/nature2.jpg',
    id: 'img2'
}, {
    path: './img/nature3.jpg',
    id: 'img3'
}, {
    path: './img/nature4.jpg',
    id: 'img4'
}, {
    path: './img/nature5.jpg',
    id: 'img5'
}];

images.map(image => {
    const img = document.createElement('img');
    img.setAttribute('src', image.path);
    img.setAttribute('id', image.id);
    imgContainer.appendChild(img);

    const imgButton = document.createElement('a');
    imgButton.setAttribute('href', `#${image.id}`);
    imgButton.classList.add('slide');
    imgSlider.appendChild(imgButton);
});