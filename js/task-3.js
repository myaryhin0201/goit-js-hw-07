console.log(`Задание 3`);
// Напиши скрипт для создания галлереи
// изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для
// создания тегов img вложенных в li.Для создания
// разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM
// за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами
// или гридами через css - классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
];
// Основной метод
const findGallery = document.querySelector('ul#gallery');
const createImage = (image) => {
    let listGallery = `<li><img src="${image.url}" alt="${image.alt}"/></li>`;
    return listGallery;
}
const items = images.map((image) => createImage(image)).join("");
findGallery.insertAdjacentHTML('beforeend', items);
console.log(findGallery);

// Метод из 2 задачи
// const createImage = (url, alt) => {
//     const listRef = document.createElement('li');
//     const image = document.createElement('img');
//     image.setAttribute('src', url);
//     image.setAttribute('alt', alt);
//     listRef.appendChild(image);
//     return listRef;
// }
// const items = images.map(({ url }, { alt }) => createImage(url,alt));
// findGallery.append(...items);
// console.log(findGallery);

// Метод с for
// for (let image of images)
//     document.querySelector('ul#gallery').insertAdjacentHTML('beforeEnd', `<><img src="${image.url}" alt="${image.alt}"></>`);
