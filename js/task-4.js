console.log(`Задание 4`);
// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать
// значение счетчика на 1.
// Создай переменную counterValue в которой
// будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const value = document.querySelector('#counter #value');
let counterValue = Number(value.textContent);
console.log(counterValue);
const increment = () => {
    counterValue += 1;
    value.textContent = counterValue.toString();
    console.log(counterValue);
    return counterValue;
}
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue.toString();
    console.log(counterValue);
    return counterValue;
}
incrementBtn.addEventListener('click', () => {
    increment();
});
decrementBtn.addEventListener('click', () => {
    decrement();
});

// incrementBtn.addEventListener('click', () => {
//     counterValue += 1;
//     value.textContent = counterValue.toString();
//     console.log(counterValue);
// });
// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     value.textContent = counterValue.toString();
//     console.log(counterValue);
// });
