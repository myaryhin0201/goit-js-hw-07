console.log(`Задание 2`);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const findIngredients = document.querySelector('ul#ingredients');

// Вставка на каждой итерации
// const addList = ingredients.map(item => {
//     const addItem = document.createElement('li');
//     addItem.textContent = item;
//     findIngredients.appendChild(addItem);
// });

// Вставка за 1 итерацию
const createItem = item => {
    const itemRef = document.createElement("li");
    itemRef.textContent = item;
    return itemRef;
}
const items = ingredients.map((item) => createItem(item));
findIngredients.append(...items);
console.log(findIngredients);