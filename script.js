// script.js
const imageContainer = document.querySelector('.blok');
const image = imageContainer.querySelector('img');

imageContainer.addEventListener('click', () => {
    if (image.style.transform === 'scale(1)') {
        image.style.transform = 'scale(2)'; // Збільшити картинку
    } else {
        image.style.transform = 'scale(1)'; // Зменшити картинку
    }
});