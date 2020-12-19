console.log(`Задание 8`);
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире
// и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const userInput = document.querySelector('.amount');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxesPlace = document.querySelector('#boxes');
const boxSize = 30;
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const createBoxes = (amount) => {
    destroyBoxes();
    amount = Number(amount.value);
    const itemRef = [];
    console.log(amount);
    for (let i = 0; i < amount;i+=1){
        const element = document.createElement('div');
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const size = `${boxSize +10*i}px`;
        element.style.width = `${size}`;
        element.style.height =`${size}`;
        element.style.backgroundColor = `rgb(${r},${g},${b})`;
        itemRef[i] = element;
    }
    boxesPlace.append(...itemRef);
}   
const destroyBoxes = () => {
    boxesPlace.innerHTML = "";
}
render.addEventListener('click', () => { createBoxes(userInput);});
destroy.addEventListener('click',() =>{ destroyBoxes();});

